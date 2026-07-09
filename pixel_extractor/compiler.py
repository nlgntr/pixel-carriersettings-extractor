#!/usr/bin/env python3
import os
import sys
import glob
import json

import tomllib

def parse_uecap_markdown(filepath):
    """
    Parses key summaries out of the translated UE Capability markdown sheet.
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    filename_clean = os.path.basename(filepath).replace('.md', '')
    # E.g. "EE_122181298464" -> carrier = "EE"
    carrier_part = filename_clean.split('_')[0]
    if carrier_part == '3':
        carrier_part = 'Three'
    elif carrier_part == 'VF':
        carrier_part = 'Vodafone'
        
    summary = {
        'filename': os.path.basename(filepath),
        'device': 'Unknown Device',
        'carrier': carrier_part,
        'lte_bands': [],
        'nr_bands': [],
        'max_mimo_dl': 4,
        'max_modulation_dl': 'QAM256 DL',
        'combos_count': 0,
        'nr_ca_combos': [],
        'endc_combos': [],
        'band_caps': []
    }
    
    lines = content.splitlines()
    current_section = None
    for line in lines:
        line_strip = line.strip()
        
        # Track section headers
        if line_strip.startswith('###'):
            if 'NR-CA' in line_strip or 'Carrier Aggregation' in line_strip:
                current_section = 'nr_ca'
            elif 'EN-DC' in line_strip or 'Dual Connectivity' in line_strip:
                current_section = 'endc'
            else:
                current_section = None
            continue
        elif line_strip.startswith('##'):
            if 'Band Capabilities' in line_strip:
                current_section = 'band_caps'
            else:
                current_section = None
            continue
            
        if current_section == 'band_caps':
            if line_strip.startswith('|') and 'Band' not in line_strip and '---' not in line_strip:
                parts = [p.strip() for p in line_strip.split('|')[1:-1]]
                if len(parts) >= 7:
                    dl_bw = parts[2]
                    ul_bw = parts[5]
                    ul_mimo = parts[4]
                    ul_qam = parts[6]
                    if dl_bw in ('0 MHz', '0'):
                        dl_bw = 'N/A'
                    if ul_bw in ('0 MHz', '0'):
                        ul_bw = 'N/A'
                        ul_mimo = 'N/A'
                        ul_qam = 'N/A'
                    summary['band_caps'].append({
                        'band': parts[0],
                        'dl_mimo': parts[1],
                        'dl_bw': dl_bw,
                        'dl_qam': parts[3],
                        'ul_mimo': ul_mimo,
                        'ul_bw': ul_bw,
                        'ul_qam': ul_qam
                    })
            continue
            
        if line_strip.startswith('- '):
            if current_section == 'nr_ca':
                combo = line_strip[2:].strip()
                if combo:
                    summary['nr_ca_combos'].append(combo)
                continue
            elif current_section == 'endc':
                combo = line_strip[2:].strip()
                if combo:
                    summary['endc_combos'].append(combo)
                continue
                
            # Parse top summary metadata fields
            if '**Likely Device Model**' in line_strip:
                summary['device'] = line_strip.split(':', 1)[1].strip()
            elif '**Supported Bands**' in line_strip:
                bands_str = line_strip.split(':', 1)[1].strip()
                bands = [b.strip() for b in bands_str.split(',') if b.strip()]
                summary['lte_bands'] = [b for b in bands if b.startswith('B')]
                summary['nr_bands'] = [b for b in bands if b.startswith('n')]
            elif '**Max DL MIMO**' in line_strip:
                mimo_str = line_strip.split(':', 1)[1].strip()
                if '4x4' in mimo_str:
                    summary['max_mimo_dl'] = 4
                elif '2x2' in mimo_str:
                    summary['max_mimo_dl'] = 2
            elif '**Max Modulation**' in line_strip:
                summary['max_modulation_dl'] = line_strip.split(':', 1)[1].strip()
            elif '**Total Combinations**' in line_strip:
                combos_str = line_strip.split('(')[0].split(':', 1)[1].strip()
                if combos_str.isdigit():
                    summary['combos_count'] = int(combos_str)
                    
    return summary

def match_uecaps_to_carrier(toml_filename, uecap_summaries):
    """
    Fuzzy match a carrier toml filename (e.g. ee_gb) to the parsed UE capability summaries.
    """
    toml_base = toml_filename.lower().replace('.toml', '').replace('_gb', '').replace('_us', '').replace('_de', '')
    matches = []
    
    for summary in uecap_summaries:
        carrier_lower = summary['carrier'].lower()
        fn_lower = summary['filename'].lower()
        
        # Use first token of filename (e.g. 'ee' or '3') to prevent false positive substring matches (like 'ee' in 'three')
        first_part = fn_lower.split('_')[0]
        
        if toml_base == carrier_lower or toml_base == first_part:
            matches.append(summary)
            continue
            
        # Hardcoded overrides for common UK carriers
        if toml_base == 'h3' and (first_part == '3' or 'three' in carrier_lower):
            matches.append(summary)
        elif toml_base == 'o2postpaid' or toml_base == 'o2prepaid':
            if first_part == 'o2' or 'o2' in carrier_lower:
                matches.append(summary)
        elif toml_base == 'vodafone':
            if first_part == 'vf' or 'vf' in carrier_lower or 'vodafone' in carrier_lower:
                matches.append(summary)
                
    return matches

def generate_build_index_html(build_path):
    from .common import CODENAMES
    build_id = os.path.basename(build_path)
    friendly_build = build_id.replace('android_', 'Android ').replace('_', ' ')
    
    device_tomls = {}
    cs_dir = os.path.join(build_path, 'carrier_settings')
    if os.path.exists(cs_dir):
        for device_dir in sorted(os.listdir(cs_dir)):
            device_path = os.path.join(cs_dir, device_dir)
            if not os.path.isdir(device_path):
                continue
            toml_dir = os.path.join(device_path, 'toml')
            if os.path.exists(toml_dir):
                tomls = sorted([f for f in os.listdir(toml_dir) if f.endswith('.toml')])
                if tomls:
                    friendly_name = device_dir.replace('_', ' ').title()
                    friendly_name = friendly_name.replace(' Xl', ' XL').replace('10A', '10a').replace('9A', '9a')
                    for codename, friendly in CODENAMES.items():
                        if codename in device_dir.lower():
                            friendly_name = f"{friendly} ({device_dir})"
                            break
                    device_tomls[friendly_name] = {
                        'dir': device_dir,
                        'files': tomls
                    }
                    
    uecaps_files = []
    uecaps_dir = os.path.join(build_path, 'uecaps', 'markdown')
    if os.path.exists(uecaps_dir):
        uecaps_files = sorted([f for f in os.listdir(uecaps_dir) if f.endswith('.md')])
        
    cfg_db_path = None
    if os.path.exists(os.path.join(build_path, 'modem', 'cfg.db')):
        cfg_db_path = 'modem/cfg.db'
        
    html = []
    html.append("<!DOCTYPE html>")
    html.append("<html>")
    html.append("<head>")
    html.append(f"    <meta charset=\"UTF-8\">")
    html.append(f"    <title>Index of {friendly_build}</title>")
    html.append("""    <style>
        :root {
            --bg-color: #0d0e12;
            --text-color: #f3f4f6;
            --text-secondary: #9ca3af;
            --border-color: #1f2937;
            --accent: #8b5cf6;
            --accent-hover: #a78bfa;
            --bg-card: rgba(255, 255, 255, 0.02);
            --bg-hover: rgba(255, 255, 255, 0.05);
        }
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 2rem;
            line-height: 1.5;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
        h1 {
            border-bottom: 2px solid var(--accent);
            padding-bottom: 0.5rem;
            color: var(--text-color);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }
        h2 {
            color: var(--accent-hover);
            font-size: 1.3rem;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 0.25rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        h3 {
            color: var(--text-color);
            font-size: 1rem;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
        }
        a {
            color: var(--accent);
            text-decoration: none;
            transition: color 0.2s ease;
        }
        a:hover {
            color: var(--accent-hover);
            text-decoration: underline;
        }
        .file-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .file-item {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
            font-family: monospace;
            display: flex;
            align-items: center;
            transition: background 0.2s ease;
        }
        .file-item:hover {
            background: var(--bg-hover);
        }
        .device-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        .meta-info {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
        }
    </style>
</head>
<body>
    <div class="container">""")
    
    html.append(f"        <h1>Build Archive Explorer &mdash; {friendly_build}</h1>")
    html.append(f'        <div class="meta-info">Build folder: <code>{build_id}</code></div>')
    
    if cfg_db_path:
        html.append(f'        <h2>Shannon Modem Configuration</h2>')
        html.append(f'        <div class="file-list">')
        html.append(f'            <div class="file-item"><a href="{cfg_db_path}">📄 cfg.db</a></div>')
        html.append(f'        </div>')
        
    if device_tomls:
        html.append("        <h2>Carrier Settings Configurations (TOML)</h2>")
        for friendly_name, data in sorted(device_tomls.items()):
            html.append(f"        <div class=\"device-card\">")
            html.append(f"            <h3>{friendly_name}</h3>")
            html.append(f"            <div class=\"file-list\">")
            for f in data['files']:
                path = f"carrier_settings/{data['dir']}/toml/{f}"
                html.append(f'                <div class="file-item"><a href="{path}">📄 {f}</a></div>')
            html.append(f"            </div>")
            html.append(f"        </div>")
            
    if uecaps_files:
        html.append("        <h2>UE Capability Radio Profiles (Markdown)</h2>")
        html.append('        <div class="file-list">')
        for f in uecaps_files:
            path = f"uecaps/markdown/{f}"
            html.append(f'            <div class="file-item"><a href="{path}">📄 {f}</a></div>')
        html.append('        </div>')
        
    html.append("""    </div>
</body>
</html>""")

    index_path = os.path.join(build_path, 'index.html')
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(html))
    print(f"Generated build index: {index_path}")

def compile_database():
    database = {
        'builds': {}
    }
    
    # 1. Locate all extracted builds
    builds = glob.glob(os.path.join('extracted', 'android_*'))
    for build_path in builds:
        build_id = os.path.basename(build_path)
        database['builds'][build_id] = {
            'devices': {}
        }
        
        # 2. Parse UE capability summaries for this build (shared across devices)
        uecaps_dir = os.path.join(build_path, 'uecaps', 'markdown')
        uecap_summaries = []
        if os.path.exists(uecaps_dir):
            for uecap_file in glob.glob(os.path.join(uecaps_dir, '*.md')):
                try:
                    summary = parse_uecap_markdown(uecap_file)
                    uecap_summaries.append(summary)
                except Exception as ex:
                    print(f"Error parsing UE capability {uecap_file}: {ex}")
                    
        # 3. Locate all device variant subdirectories
        cs_dir = os.path.join(build_path, 'carrier_settings')
        if not os.path.exists(cs_dir):
            continue
            
        devices = [d for d in os.listdir(cs_dir) if os.path.isdir(os.path.join(cs_dir, d))]
        for device_dir in devices:
            device_path = os.path.join(cs_dir, device_dir)
            toml_dir = os.path.join(device_path, 'toml')
            if not os.path.exists(toml_dir):
                continue
                
            friendly_name = device_dir.replace('_', ' ').title()
            friendly_name = friendly_name.replace(' Xl', ' XL').replace('10A', '10a').replace('9A', '9a')
            database['builds'][build_id]['devices'][device_dir] = {
                'friendly_name': friendly_name,
                'carriers': {}
            }
            
            # 4. Parse all carrier TOML configs for this device
            device_raw = {}
            for toml_file in glob.glob(os.path.join(toml_dir, '*.toml')):
                filename = os.path.basename(toml_file)
                try:
                    with open(toml_file, 'r', encoding='utf-8') as f:
                        toml_content = f.read()
                    data = tomllib.loads(toml_content)
                    device_raw[filename] = data
                except Exception as ex:
                    print(f"Error parsing carrier TOML {toml_file}: {ex}")

            MCC_MNC_TO_PARENT = {
                # EE
                "23430": "ee_gb.toml",
                "23433": "ee_gb.toml",
                "23434": "ee_gb.toml",
                "23486": "ee_gb.toml",
                "23426": "ee_gb.toml",  # LycaMobile (EE)
                # O2
                "23410": "o2postpaid_gb.toml",
                "23402": "o2postpaid_gb.toml",
                "23457": "o2postpaid_gb.toml",  # Sky Mobile (O2)
                "23438": "o2postpaid_gb.toml",  # Virgin Mobile UK (O2)
                # Vodafone
                "23415": "vodafone_gb.toml",
                "23491": "vodafone_gb.toml",
                # Three
                "23420": "h3_gb.toml",
                "23439": "h3_gb.toml",  # Gamma Telecom (Three)
            }
            
            # Maps MVNO MCC/MNCs to their physical radio hosting MNO (for uecap radio aggregation profiles)
            MCC_MNC_TO_RADIO_PARENT = {
                # EE Radio Host
                "23430": "ee_gb.toml",
                "23433": "ee_gb.toml",
                "23434": "ee_gb.toml",
                "23486": "ee_gb.toml",
                "23426": "ee_gb.toml",  # LycaMobile (EE)
                "23440": "ee_gb.toml",  # Spusu (EE network)
                "23405": "ee_gb.toml",  # Spitfire (EE network)
                "23427": "ee_gb.toml",  # TCL/Truphone (EE network)
                "23471": "ee_gb.toml",  # ESN (EE network)
                "23418": "ee_gb.toml",  # Cloud9 (EE network)
                "23450": "ee_gb.toml",  # JT (Jersey Telecom network partner)
                # O2 Radio Host
                "23410": "o2postpaid_gb.toml",
                "23402": "o2postpaid_gb.toml",
                "23457": "o2postpaid_gb.toml",  # Sky Mobile (O2)
                "23438": "o2postpaid_gb.toml",  # Virgin Mobile UK (O2)
                # Vodafone Radio Host
                "23415": "vodafone_gb.toml",
                "23491": "vodafone_gb.toml",
                # Three Radio Host
                "23420": "h3_gb.toml",
                "23439": "h3_gb.toml",  # Gamma Telecom (Three)
            }

            for filename, data in device_raw.items():
                try:
                    carrier_id_rules = data.get('carrier_id', [])
                    settings = data.get('settings', {})
                    
                    # Extract general parameters
                    configs = settings.get('config', {})
                    apns = []
                    # Unnest apns list if it exists
                    if 'apns' in settings and isinstance(settings['apns'], dict) and 'apn' in settings['apns']:
                        apns = settings['apns']['apn']
                    
                    # Clean up settings dictionary for serialization
                    version = settings.get('version', 'Unknown')
                    
                    # Fuzzy match UE capabilities for this carrier
                    matched_caps = match_uecaps_to_carrier(filename, uecap_summaries)
                    
                    # Check for parent MNO config fallback merging (scanning all carrier rules)
                    parent_filename = None
                    if carrier_id_rules:
                        for rule in carrier_id_rules:
                            mcc_mnc = rule.get('mcc_mnc')
                            if mcc_mnc in MCC_MNC_TO_PARENT:
                                parent_filename = MCC_MNC_TO_PARENT[mcc_mnc]
                                break
                            
                    # Check for radio capabilities host fallback (scanning all carrier rules)
                    radio_parent_filename = None
                    if carrier_id_rules:
                        for rule in carrier_id_rules:
                            mcc_mnc = rule.get('mcc_mnc')
                            if mcc_mnc in MCC_MNC_TO_RADIO_PARENT:
                                radio_parent_filename = MCC_MNC_TO_RADIO_PARENT[mcc_mnc]
                                break
                    
                    # Merge missing config values from parent MNO config if available
                    merged_configs = configs.copy()
                    if parent_filename and parent_filename in device_raw and parent_filename != filename:
                        parent_configs = device_raw[parent_filename].get('settings', {}).get('config', {})
                        for key, val in parent_configs.items():
                            if key not in merged_configs:
                                merged_configs[key] = val
                                
                    parent_uecaps = []
                    if radio_parent_filename and radio_parent_filename in device_raw:
                        parent_uecaps = match_uecaps_to_carrier(radio_parent_filename, uecap_summaries)
                    
                    # Determine 5G SA, VoNR and Satellite strictly from carrier's standalone configs (not MNO parent fallback)
                    # We restrict SA and VoNR to the primary physical MNOs only since MVNOs do not have provisioned core access.
                    is_physical_mno = filename.replace('.toml', '').lower() in ['ee_gb', 'o2postpaid_gb', 'vodafone_gb', 'h3_gb']
                    
                    has_5g_sa = False
                    if is_physical_mno:
                        for key, val in configs.items():
                            if 'nr_availabilities' in key.lower():
                                if isinstance(val, list) and 2 in val:
                                    has_5g_sa = True
                                elif isinstance(val, dict) and 'value' in val and isinstance(val['value'], list) and 2 in val['value']:
                                    has_5g_sa = True
                                    
                    has_vonr = configs.get('vonr_enabled', False) if is_physical_mno else False
                    
                    has_satellite = False
                    for key in configs.keys():
                        if 'satellite' in key.lower():
                            has_satellite = True
                            break
                            
                    # Determine VoLTE and VoWiFi (which MVNOs can inherit or support) from merged configs
                    has_wfc = False
                    if 'carrier_wfc_ims_available' in merged_configs:
                        has_wfc = merged_configs['carrier_wfc_ims_available']
                    elif 'wfc_operator_error_codes_string_array' in merged_configs:
                        has_wfc = True
                    elif 'wfc' in settings: # Checked dotted namespace
                        has_wfc = True
                        
                    has_volte = merged_configs.get('volte_feature_enabled', True) # Enabled by default on Exynos 5400
                            
                    database['builds'][build_id]['devices'][device_dir]['carriers'][filename] = {
                        'carrier_name': filename.replace('.toml', '').replace('_gb', '').upper(),
                        'version': version,
                        'carrier_id_rules': carrier_id_rules,
                        'apns': apns,
                        'configs': configs,
                        'full_settings': settings,
                        'features': {
                            'volte': has_volte,
                            'vowifi': has_wfc,
                            'sa5g': has_5g_sa,
                            'vonr': has_vonr,
                            'satellite': has_satellite
                        },
                        'uecaps': matched_caps if matched_caps else parent_uecaps
                    }
                    
                except Exception as ex:
                    print(f"Error processing carrier data for {filename}: {ex}")
        
        # Generate build directory index page
        try:
            generate_build_index_html(build_path)
        except Exception as ex:
            print(f"Error generating index for build {build_path}: {ex}")
            
    return database

def write_web_dashboard(database):
    os.makedirs('docs', exist_ok=True)
    
    # 1. Write docs/data.js
    data_js_path = os.path.join('docs', 'data.js')
    with open(data_js_path, 'w', encoding='utf-8') as f:
        f.write(f"const DATABASE = {json.dumps(database, indent=2)};\n")
    print(f"Compiled database written to {data_js_path}")
    
    # 2. Write docs/index.html
    index_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pixel Carrier Settings & UE Cap Showcase</title>
    <meta name="description" content="Community carrier config and UE radio aggregation capability lookup for Google Pixel 9 and Pixel 10 devices.">
    <!-- Google Font & Lucide Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header class="app-header">
        <div class="logo-area">
            <i data-lucide="radio-tower" class="logo-icon"></i>
            <div>
                <h1>Pixel Carrier Configs</h1>
                <p>Exynos 5400 baseband parameters & UE Capabilities Explorer</p>
            </div>
        </div>
        
        <div class="selectors">
            <a href="https://github.com/nlgntr/pixel-carriersettings-extractor" target="_blank" class="github-link-btn" title="View Source on GitHub">
                <i data-lucide="github"></i> GitHub Repository
            </a>
            <div class="select-wrapper">
                <label for="build-select">Build ID</label>
                <select id="build-select"></select>
            </div>
            <div class="select-wrapper">
                <label for="device-select">Device Variant</label>
                <select id="device-select"></select>
            </div>
        </div>
    </header>

    <main class="app-main">
        <!-- Feature Matrix Table Section -->
        <section class="section-card matrix-section">
            <div class="card-header">
                <h2><i data-lucide="layout-grid"></i> UK Carrier Feature Matrix</h2>
                <span class="badge">UK Profiles</span>
            </div>
            <div class="matrix-filters">
                <span class="filter-label"><i data-lucide="filter"></i> Filter by Support:</span>
                <label class="filter-checkbox-label">
                    <input type="checkbox" id="filter-volte"> 4G Calling
                </label>
                <label class="filter-checkbox-label">
                    <input type="checkbox" id="filter-vowifi"> WiFi Calling
                </label>
                <label class="filter-checkbox-label">
                    <input type="checkbox" id="filter-sa5g"> 5G+
                </label>
                <label class="filter-checkbox-label">
                    <input type="checkbox" id="filter-vonr"> VoNR
                </label>
                <label class="filter-checkbox-label">
                    <input type="checkbox" id="filter-satellite"> Satellite
                </label>
            </div>
            <div class="table-container">
                <table id="matrix-table">
                    <thead>
                        <tr>
                            <th>Carrier</th>
                            <th>4G Calling</th>
                            <th>WiFi Calling</th>
                            <th>5G+</th>
                            <th>VoNR</th>
                            <th>Satellite</th>
                            <th>APNs</th>
                            <th>UE Aggregation</th>
                        </tr>
                    </thead>
                    <tbody id="matrix-body">
                        <!-- Populated by JavaScript -->
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Details Display Pane -->
        <section class="section-card details-pane hidden" id="details-pane">
            <div class="tab-bar">
                <button class="tab-btn active" data-tab="uecaps-tab"><i data-lucide="radio"></i> Radio Capabilities</button>
                <button class="tab-btn" data-tab="apns-tab"><i data-lucide="database"></i> APNs</button>
                <button class="tab-btn" data-tab="configs-tab"><i data-lucide="settings"></i> Framework Settings</button>
            </div>

            <div class="tab-content active" id="uecaps-tab">
                <div class="search-bar combo-search-bar" style="margin-bottom: 1.25rem;">
                    <input type="text" id="combo-search" placeholder="Search combinations (e.g. n28, n78)...">
                    <i data-lucide="search"></i>
                </div>
                <div class="uecap-grid" id="uecaps-list">
                    <!-- Populated by JavaScript -->
                </div>
            </div>

            <div class="tab-content" id="apns-tab">
                <div class="apn-grid" id="apn-list">
                    <!-- Populated by JavaScript -->
                </div>
            </div>

            <div class="tab-content" id="configs-tab">
                <div class="search-bar">
                    <input type="text" id="config-search" placeholder="Search configuration parameters...">
                    <i data-lucide="search"></i>
                </div>
                <div class="config-grid" id="config-list">
                    <!-- Populated by JavaScript -->
                </div>
            </div>
        </section>
    </main>

    <footer class="app-footer">
        <p>Built with ❤️ for the Android developer community. Natively parsed from stock Google Pixel factory partitions. This showcase displays UK profiles—feel free to fork this project to host other regions for your own site.</p>
        <p>Explore the raw extraction summaries directly on <a href="https://github.com/nlgntr/pixel-carriersettings-extractor" target="_blank">GitHub</a> | Compatible with <a href="https://github.com/h4wkd3v/pixel-carriersettings-toolbox" target="_blank">pixel-carriersettings-toolbox</a></p>
    </footer>

    <script src="data.js"></script>
    <script src="app.js"></script>
</body>
</html>
"""
    with open(os.path.join('docs', 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_html)
        
    # 3. Write docs/index.css
    index_css = """:root {
    --bg-dark: #0a0b10;
    --bg-card: rgba(22, 24, 35, 0.6);
    --border-color: rgba(255, 255, 255, 0.08);
    --accent: #6c5ce7;
    --accent-glow: rgba(108, 92, 231, 0.3);
    --text-primary: #f1f2f6;
    --text-secondary: #a4b0be;
    --green: #2ecc71;
    --red: #ff7675;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
    background-color: var(--bg-dark);
    background-image: radial-gradient(circle at 50% 0%, rgba(108, 92, 231, 0.15) 0%, transparent 60%);
    color: var(--text-primary);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

/* Header styling */
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    border-bottom: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
    background-color: rgba(10, 11, 16, 0.7);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo-area {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo-icon {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--accent);
    filter: drop-shadow(0 0 8px var(--accent-glow));
}

.logo-area h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.logo-area p {
    font-size: 0.85rem;
    color: var(--text-secondary);
}

.selectors {
    display: flex;
    gap: 1.5rem;
}

.select-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.select-wrapper label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
}

select {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 0.5rem 2rem 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

select:hover, select:focus {
    border-color: var(--accent);
    box-shadow: 0 0 10px var(--accent-glow);
}

/* Layout Core */
.app-main {
    flex: 1;
    padding: 2rem 4rem;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2rem;
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
}

@media (max-width: 1100px) {
    .app-main {
        grid-template-columns: 1fr;
    }
}

.section-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 1.5rem;
    backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
}

.card-header h2 {
    font-size: 1.15rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.badge {
    background-color: var(--accent-glow);
    border: 1px solid var(--accent);
    color: var(--text-primary);
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
    border-radius: 99px;
    font-weight: 500;
}

.matrix-filters {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 0.75rem 1rem;
    background-color: rgba(255, 255, 255, 0.01);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: 1.25rem;
}

.filter-label {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-weight: 500;
    color: var(--text-primary);
}

.filter-checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    user-select: none;
    transition: color 0.2s ease;
}

.filter-checkbox-label:hover {
    color: var(--text-primary);
}

.filter-checkbox-label input[type="checkbox"] {
    appearance: none;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    width: 14px;
    height: 14px;
    cursor: pointer;
    display: inline-grid;
    place-content: center;
    transition: background-color 0.2s ease, border-color 0.2s ease;
}

.filter-checkbox-label input[type="checkbox"]:checked {
    background-color: var(--accent);
    border-color: var(--accent);
}

.filter-checkbox-label input[type="checkbox"]:checked::before {
    content: "";
    width: 6px;
    height: 6px;
    background-color: var(--text-color);
    border-radius: 1px;
}

/* Feature Matrix Table */
.table-container {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

th {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-secondary);
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
}

td {
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
    font-size: 0.95rem;
}

tr:last-child td {
    border-bottom: none;
}

.matrix-row {
    cursor: pointer;
    transition: all 0.2s ease;
}

.matrix-row:hover {
    background-color: rgba(255, 255, 255, 0.03);
}

.matrix-row.active {
    background-color: rgba(108, 92, 231, 0.08);
    border-left: 3px solid var(--accent);
}

.status-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
}

.status-badge.supported {
    background-color: rgba(46, 204, 113, 0.15);
    color: var(--green);
}

.status-badge.unsupported {
    background-color: rgba(255, 118, 117, 0.15);
    color: var(--red);
}

/* Details Pane & Tabs */
.details-pane {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 1.5rem;
    backdrop-filter: blur(16px);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-height: 80vh;
    overflow-y: auto;
}

.details-pane.hidden {
    display: none;
}

.tab-bar {
    display: flex;
    border-bottom: 1px solid var(--border-color);
}

.tab-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease;
}

.tab-btn:hover {
    color: var(--text-primary);
}

.tab-btn.active {
    color: var(--accent);
    border-bottom-color: var(--accent);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Search config styling */
.search-bar {
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    gap: 0.5rem;
}

.search-bar input {
    background: none;
    border: none;
    color: var(--text-primary);
    width: 100%;
    outline: none;
}

/* Config categories / layout details */
.config-grid {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

/* Config groups & sections */
.config-section-card {
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    width: 100%;
}

.section-card-title {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--accent);
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5rem;
}

.section-config-grid {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.config-item {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0.75rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    min-height: 2.75rem;
    flex-wrap: wrap; /* Safe wrapping for longer values */
    width: 100%;
}

.flat-config-item {
    margin-bottom: 0.75rem;
}

.config-key {
    font-family: monospace;
    font-size: 0.85rem;
    color: var(--text-primary);
    font-weight: 500;
    word-break: break-all;
    text-align: left;
    max-width: 100%;
}

.config-value {
    font-family: monospace;
    font-size: 0.85rem;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    flex: 1;
    min-width: 200px;
    max-width: 100%;
    word-break: break-all;
}

/* Value Badges & Chips */
.badge-pill {
    padding: 0.15rem 0.6rem;
    border-radius: 99px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.badge-pill.bool-true {
    background-color: rgba(46, 204, 113, 0.15);
    color: var(--green);
    border: 1px solid rgba(46, 204, 113, 0.3);
}

.badge-pill.bool-false {
    background-color: rgba(255, 118, 117, 0.15);
    color: var(--red);
    border: 1px solid rgba(255, 118, 117, 0.3);
}

.number-val {
    color: #eccc68;
    font-weight: 600;
}

.string-val {
    color: #ff7f50;
    word-break: break-all;
    text-align: left;
    max-width: 100%;
}

.tag-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    justify-content: flex-end;
    max-width: 100%;
}

.tag-chip {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    padding: 0.15rem 0.45rem;
    border-radius: 4px;
    font-size: 0.75rem;
    color: var(--text-secondary);
    word-break: break-all;
    white-space: normal;
    text-align: left;
    max-width: 100%;
}

/* Nested JSON structures */
.json-block {
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid var(--border-color);
    padding: 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    max-width: 100%;
    overflow-x: auto;
    text-align: left;
    color: #70a1ff;
}

.nested-policy-box {
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
    padding: 0.75rem;
    border-radius: 6px;
    text-align: left;
    font-size: 0.75rem;
    color: var(--text-primary);
    width: 100%;
}

.policy-apn {
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 0.35rem;
}

.policy-error-line {
    color: var(--text-secondary);
    margin-left: 0.5rem;
}

.policy-error-type {
    color: var(--red);
    font-weight: 600;
}

.policy-retry-line {
    margin-left: 0.5rem;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
}

.retry-chip {
    background-color: rgba(108, 92, 231, 0.1);
    border-color: var(--accent);
    color: var(--text-primary);
}

/* APN and uecaps list designs */
.apn-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.apn-card {
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1rem;
}

.apn-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--accent);
}

.apn-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    font-size: 0.8rem;
}

.uecap-summary-card {
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1.25rem;
    margin-bottom: 1rem;
}

.uecap-summary-header {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

.uecap-summary-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    font-size: 0.85rem;
}

.uecap-combinations-explorer {
    margin-top: 1rem;
    border-top: 1px dashed var(--border-color);
    padding-top: 1rem;
}

.btn-toggle-combos {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0;
    transition: color 0.2s ease;
}

.btn-toggle-combos:hover {
    color: #a78bfa;
}

.combos-dropdown-content {
    margin-top: 1rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.combos-dropdown-content.hidden {
    display: none;
}

.combos-columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.combos-column h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
}

.combos-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    max-height: 250px;
    overflow-y: auto;
    padding-right: 0.25rem;
}

.combo-chip {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--text-primary);
    border-radius: 4px;
    padding: 0.15rem 0.35rem;
    font-size: 0.7rem;
    font-family: monospace;
}

.uecap-band-capabilities {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px dashed rgba(255, 255, 255, 0.05);
}

.band-caps-table-wrapper {
    overflow-x: auto;
    margin-top: 0.5rem;
}

.band-caps-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8rem;
    text-align: left;
}

.band-caps-table th, .band-caps-table td {
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--border-color);
}

.band-caps-table th {
    color: var(--text-secondary);
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    background-color: rgba(255, 255, 255, 0.02);
}

.band-caps-table tr:hover {
    background-color: rgba(255, 255, 255, 0.01);
}

/* Footer layout */
.app-footer {
    border-top: 1px solid var(--border-color);
    padding: 2rem 4rem;
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-secondary);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.app-footer a {
    color: var(--accent);
    text-decoration: none;
}

.section-header-row td {
    background-color: rgba(255, 255, 255, 0.02);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--accent);
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border-color);
}

.mno-fallback-badge {
    font-size: 0.75rem;
    color: var(--text-secondary);
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    font-weight: 500;
}

.github-link-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: 500;
}

.github-link-btn:hover {
    border-color: var(--accent);
    background-color: rgba(108, 92, 231, 0.1);
    box-shadow: 0 0 10px var(--accent-glow);
}

@media (max-width: 768px) {
    .app-header {
        padding: 1.25rem 1rem;
        flex-direction: column;
        align-items: stretch;
        gap: 1.25rem;
    }
    
    .logo-area {
        justify-content: center;
        text-align: center;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .selectors {
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;
    }
    
    .github-link-btn {
        justify-content: center;
    }
    
    .app-main {
        padding: 1rem;
        gap: 1rem;
    }
    
    .section-card {
        padding: 1rem;
    }
    
    .card-header {
        padding-bottom: 0.75rem;
        margin-bottom: 1rem;
    }
    
    .tab-bar {
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .tab-btn {
        flex: 1;
        min-width: 120px;
        font-size: 0.8rem;
        padding: 0.5rem 0.75rem;
    }
    
    .app-footer {
        padding: 1.5rem 1rem;
    }
    
    .apn-details {
        grid-template-columns: 1fr;
    }
}
"""
    with open(os.path.join('docs', 'index.css'), 'w', encoding='utf-8') as f:
        f.write(index_css)
        
    # 4. Write docs/app.js
    app_js = """document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize selects
    const buildSelect = document.getElementById('build-select');
    const deviceSelect = document.getElementById('device-select');
    const matrixBody = document.getElementById('matrix-body');
    const detailsPane = document.getElementById('details-pane');
    
    // Config values
    let activeBuildId = '';
    let activeDeviceDir = '';
    let activeCarrierFile = '';
    
    // Build Selector populate
    const buildIds = Object.keys(DATABASE.builds);
    buildIds.forEach(id => {
        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = id.replace('android_', 'Android ').replace(/_/g, ' ');
        buildSelect.appendChild(opt);
    });
    
    if (buildIds.length > 0) {
        activeBuildId = buildSelect.value;
        populateDevices(activeBuildId);
    }
    
    // Listen for select changes
    buildSelect.addEventListener('change', (e) => {
        activeBuildId = e.target.value;
        populateDevices(activeBuildId);
    });
    
    deviceSelect.addEventListener('change', (e) => {
        activeDeviceDir = e.target.value;
        renderMatrix();
    });
    
    // Listen for filter checkbox changes
    document.getElementById('filter-volte').addEventListener('change', renderMatrix);
    document.getElementById('filter-vowifi').addEventListener('change', renderMatrix);
    document.getElementById('filter-sa5g').addEventListener('change', renderMatrix);
    document.getElementById('filter-vonr').addEventListener('change', renderMatrix);
    document.getElementById('filter-satellite').addEventListener('change', renderMatrix);
    
    function populateDevices(buildId) {
        deviceSelect.innerHTML = '';
        const devices = Object.keys(DATABASE.builds[buildId].devices);
        devices.sort((a, b) => {
            const nameA = DATABASE.builds[buildId].devices[a].friendly_name;
            const nameB = DATABASE.builds[buildId].devices[b].friendly_name;
            
            // Extract the first number sequence (e.g. 9 or 10)
            const numA = parseInt(nameA.match(/\\d+/)?.[0] || '0', 10);
            const numB = parseInt(nameB.match(/\\d+/)?.[0] || '0', 10);
            
            if (numA !== numB) {
                return numA - numB; // Ascending numeric order (9 before 10)
            }
            return nameA.localeCompare(nameB);
        });
        devices.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = DATABASE.builds[buildId].devices[d].friendly_name;
            deviceSelect.appendChild(opt);
        });
        
        if (devices.length > 0) {
            activeDeviceDir = deviceSelect.value;
            renderMatrix();
        }
    }
    
    function renderMatrix() {
        matrixBody.innerHTML = '';
        detailsPane.classList.add('hidden');
        
        const deviceData = DATABASE.builds[activeBuildId].devices[activeDeviceDir];
        if (!deviceData || !deviceData.carriers) return;
        
        const filterVoLTE = document.getElementById('filter-volte').checked;
        const filterVoWiFi = document.getElementById('filter-vowifi').checked;
        const filterSA5G = document.getElementById('filter-sa5g').checked;
        const filterVoNR = document.getElementById('filter-vonr').checked;
        const filterSatellite = document.getElementById('filter-satellite').checked;
        
        function carrierMatchesFilters(cFile) {
            const carrier = deviceData.carriers[cFile];
            if (!carrier) return false;
            if (filterVoLTE && !carrier.features.volte) return false;
            if (filterVoWiFi && !carrier.features.vowifi) return false;
            if (filterSA5G && !carrier.features.sa5g) return false;
            if (filterVoNR && !carrier.features.vonr) return false;
            if (filterSatellite && !carrier.features.satellite) return false;
            return true;
        }
        
        const carriers = Object.keys(deviceData.carriers).sort();
        const mnos = [];
        const mvnos = [];
        
        const mnoKeywords = ['ee_gb', 'o2postpaid_gb', 'o2prepaid_gb', 'vodafone_gb', 'h3_gb'];
        carriers.forEach(cFile => {
            const baseName = cFile.toLowerCase().replace('.toml', '');
            if (mnoKeywords.includes(baseName)) {
                mnos.push(cFile);
            } else {
                mvnos.push(cFile);
            }
        });
        
        function createRow(cFile) {
            const carrier = deviceData.carriers[cFile];
            const row = document.createElement('tr');
            row.className = 'matrix-row';
            row.dataset.carrierFile = cFile;
            
            // Check features
            const volteHtml = carrier.features.volte 
                ? '<span class="status-badge supported"><i data-lucide="check"></i></span>'
                : '<span class="status-badge unsupported"><i data-lucide="x"></i></span>';
                
            const vowifiHtml = carrier.features.vowifi 
                ? '<span class="status-badge supported"><i data-lucide="check"></i></span>'
                : '<span class="status-badge unsupported"><i data-lucide="x"></i></span>';
                
            const sa5gHtml = carrier.features.sa5g 
                ? '<span class="status-badge supported"><i data-lucide="check"></i></span>'
                : '<span class="status-badge unsupported"><i data-lucide="x"></i></span>';
                
            const vonrHtml = carrier.features.vonr 
                ? '<span class="status-badge supported"><i data-lucide="check"></i></span>'
                : '<span class="status-badge unsupported"><i data-lucide="x"></i></span>';
                
            const satHtml = carrier.features.satellite 
                ? '<span class="status-badge supported"><i data-lucide="check"></i></span>'
                : '<span class="status-badge unsupported"><i data-lucide="x"></i></span>';
                
            const apnsText = carrier.apns.length > 0 ? `${carrier.apns.length} APNs` : '-';
            
            // Filter uecaps based on selected device variant
            let matchedDeviceCaps = carrier.uecaps || [];
            const activeDeviceLower = activeDeviceDir.toLowerCase();
            
            if (activeDeviceLower.includes('10a') || activeDeviceLower.includes('stallion')) {
                matchedDeviceCaps = matchedDeviceCaps.filter(cap => cap.device.toLowerCase().includes('10a'));
            } else if (activeDeviceLower.includes('frankel') || activeDeviceLower.includes('tokay')) {
                matchedDeviceCaps = matchedDeviceCaps.filter(cap => cap.device.toLowerCase().includes('standard'));
            } else {
                // Pro / XL / Fold models (blazer, mustang, rango, caiman, komodo, comet)
                matchedDeviceCaps = matchedDeviceCaps.filter(cap => cap.device.toLowerCase().includes('pro') || cap.device.toLowerCase().includes('flagship'));
            }
            
            let ueText = '-';
            if (matchedDeviceCaps.length > 0) {
                const parentName = matchedDeviceCaps[0].carrier;
                const uniqueCombos = [...new Set(matchedDeviceCaps.map(c => c.combos_count))].sort((a, b) => a - b);
                const combosStr = uniqueCombos.join('/');
                const isMno = mnoKeywords.includes(cFile.toLowerCase().replace('.toml', ''));
                if (isMno) {
                    ueText = `${combosStr} Combos`;
                } else {
                    ueText = `<span class="mno-fallback-badge">${parentName} (${combosStr})</span>`;
                }
            }
            
            row.innerHTML = `
                <td><strong>${carrier.carrier_name}</strong></td>
                <td>${volteHtml}</td>
                <td>${vowifiHtml}</td>
                <td>${sa5gHtml}</td>
                <td>${vonrHtml}</td>
                <td>${satHtml}</td>
                <td>${apnsText}</td>
                <td>${ueText}</td>
            `;
            
            row.addEventListener('click', () => {
                document.querySelectorAll('.matrix-row').forEach(r => r.classList.remove('active'));
                row.classList.add('active');
                activeCarrierFile = cFile;
                showDetails(carrier);
            });
            
            return row;
        }
        
        const filteredMnos = mnos.filter(carrierMatchesFilters);
        const filteredMvnos = mvnos.filter(carrierMatchesFilters);
        
        // Render MNO Header and rows
        if (filteredMnos.length > 0) {
            const mnoHeader = document.createElement('tr');
            mnoHeader.className = 'section-header-row';
            mnoHeader.innerHTML = '<td colspan="8">Mobile Network Operators (MNOs)</td>';
            matrixBody.appendChild(mnoHeader);
            filteredMnos.forEach(cFile => {
                matrixBody.appendChild(createRow(cFile));
            });
        }
        
        // Render MVNO Header and rows
        if (filteredMvnos.length > 0) {
            const mvnoHeader = document.createElement('tr');
            mvnoHeader.className = 'section-header-row';
            mvnoHeader.innerHTML = '<td colspan="8">Virtual Operators (MVNOs)</td>';
            matrixBody.appendChild(mvnoHeader);
            filteredMvnos.forEach(cFile => {
                matrixBody.appendChild(createRow(cFile));
            });
        }
        
        lucide.createIcons();
    }
    
    function formatConfigValue(key, val) {
        let cleanVal = val;
        if (val && typeof val === 'object' && 'value' in val) {
            cleanVal = val.value;
        }
        
        if (typeof cleanVal === 'boolean') {
            return `<span class="badge-pill bool-${cleanVal}">${cleanVal}</span>`;
        }
        if (typeof cleanVal === 'number') {
            return `<span class="number-val">${cleanVal}</span>`;
        }
        if (Array.isArray(cleanVal)) {
            return `
                <div class="tag-group">
                    ${cleanVal.map(v => `<span class="tag-chip">${v}</span>`).join('')}
                </div>
            `;
        }
        if (typeof cleanVal === 'string') {
            const cleanStr = cleanVal.trim();
            if (cleanStr.startsWith('[') || cleanStr.startsWith('{')) {
                try {
                    const parsed = JSON.parse(cleanStr);
                    return formatParsedJson(key, parsed);
                } catch (e) {
                    // Fallback
                }
            }
            return `<span class="string-val">"${cleanVal}"</span>`;
        }
        return `<span class="string-val">${JSON.stringify(cleanVal)}</span>`;
    }
    
    function formatParsedJson(key, parsed) {
        if (key.includes('key_error_policy_config') && Array.isArray(parsed)) {
            return `
                <div class="nested-policy-box">
                    ${parsed.map(policy => {
                        const errors = policy.ErrorTypes || [];
                        return `
                            <div class="policy-apn">APN: <strong>${policy.ApnName || '*'}</strong></div>
                            ${errors.map(err => {
                                const retries = err.RetryArray || [];
                                return `
                                    <div class="policy-error-line">
                                        <span class="policy-error-type">${err.ErrorType || 'ERROR'}:</span>
                                        <span class="policy-error-details">[Code ${err.ErrorDetails.join(', ')}]</span>
                                    </div>
                                    <div class="policy-retry-line">
                                        Retries: ${retries.map(r => `<span class="tag-chip retry-chip">${r}s</span>`).join(' ')}
                                    </div>
                                `;
                            }).join('')}
                        `;
                    }).join('')}
                </div>
            `;
        }
        return `<pre class="json-block">${JSON.stringify(parsed, null, 2)}</pre>`;
    }

    function showDetails(carrier) {
        detailsPane.classList.remove('hidden');
        
        // Populate config tab
        const configList = document.getElementById('config-list');
        configList.innerHTML = '';
        
        const configs = carrier.configs;
        Object.keys(configs).sort().forEach(key => {
            const val = configs[key];
            
            if (val && typeof val === 'object' && !Array.isArray(val) && !('value' in val)) {
                // This is a category section card! (like ims, iwlan, etc.)
                const section = document.createElement('div');
                section.className = 'config-section-card';
                
                let innerHtml = `<div class="section-card-title">${key.toUpperCase()} Settings</div>`;
                innerHtml += `<div class="section-config-grid">`;
                
                Object.keys(val).sort().forEach(subKey => {
                    const subVal = val[subKey];
                    innerHtml += `
                        <div class="config-item" data-key="${key.toLowerCase()}.${subKey.toLowerCase()}">
                            <span class="config-key">${subKey}</span>
                            <span class="config-value">${formatConfigValue(key + '.' + subKey, subVal)}</span>
                        </div>
                    `;
                });
                
                innerHtml += `</div>`;
                section.innerHTML = innerHtml;
                configList.appendChild(section);
            } else {
                // This is a flat config item
                const div = document.createElement('div');
                div.className = 'config-item flat-config-item';
                div.dataset.key = key.toLowerCase();
                
                div.innerHTML = `
                    <span class="config-key">${key}</span>
                    <span class="config-value">${formatConfigValue(key, val)}</span>
                `;
                configList.appendChild(div);
            }
        });
        
        // Populate APN tab
        const apnList = document.getElementById('apn-list');
        apnList.innerHTML = '';
        if (carrier.apns.length === 0) {
            apnList.innerHTML = '<p class="text-secondary">No APNs configured.</p>';
        } else {
            carrier.apns.forEach(apn => {
                const card = document.createElement('div');
                card.className = 'apn-card';
                card.innerHTML = `
                    <div class="apn-title">${apn.name || 'Unnamed APN'} (APN: ${apn.value})</div>
                    <div class="apn-details">
                        <div><strong>Types:</strong> ${JSON.stringify(apn.type || [])}</div>
                        <div><strong>Protocol:</strong> ${apn.protocol || '-'}</div>
                        <div><strong>Roaming:</strong> ${apn.roaming_protocol || '-'}</div>
                        <div><strong>Auth:</strong> ${apn.authtype || '-'}</div>
                    </div>
                `;
                apnList.appendChild(card);
            });
        }
        
        // Populate UE Caps tab
        const uecapsList = document.getElementById('uecaps-list');
        uecapsList.innerHTML = '';
        
        // Filter capability cards based on active device
        const activeDeviceLower = activeDeviceDir.toLowerCase();
        let matchedDeviceCaps = carrier.uecaps || [];
        
        if (activeDeviceLower.includes('10a') || activeDeviceLower.includes('stallion')) {
            matchedDeviceCaps = matchedDeviceCaps.filter(cap => cap.device.toLowerCase().includes('10a'));
        } else if (activeDeviceLower.includes('frankel') || activeDeviceLower.includes('tokay')) {
            matchedDeviceCaps = matchedDeviceCaps.filter(cap => cap.device.toLowerCase().includes('standard'));
        } else {
            // Pro / XL / Fold models (blazer, mustang, rango, caiman, komodo, comet)
            matchedDeviceCaps = matchedDeviceCaps.filter(cap => cap.device.toLowerCase().includes('pro') || cap.device.toLowerCase().includes('flagship'));
        }
        
        if (matchedDeviceCaps.length === 0) {
            uecapsList.innerHTML = '<p class="text-secondary">No UE Capability profile matched for this carrier and selected device variant.</p>';
        } else {
            // Group identical capabilities to prevent repetitive cards
            const uniqueCaps = [];
            
            // Heuristic function to guess hardware variant based on selected device and bands
            function getSkuGuess(cap) {
                const devLower = activeDeviceDir.toLowerCase();
                const hasmmWave = cap.nr_bands.includes('n258') || cap.nr_bands.includes('n260') || cap.nr_bands.includes('n261');
                
                // Pixel 10 Family
                if (devLower.includes('mustang')) {
                    return hasmmWave ? 'US Variant (Model GUL82: mmWave)' : 'EU/UK Variant (Model G45RY: Sub-6)';
                }
                if (devLower.includes('blazer')) {
                    return hasmmWave ? 'US Variant (Model G4QUR: mmWave)' : 'EU/UK Variant (Model GEHN3: Sub-6)';
                }
                if (devLower.includes('rango')) {
                    return hasmmWave ? 'US Variant (mmWave)' : 'EU/UK Variant (Sub-6)';
                }
                if (devLower.includes('frankel')) {
                    return hasmmWave ? 'US Variant (mmWave)' : 'EU/UK Variant (Model GK2MP: Sub-6)';
                }
                if (devLower.includes('stallion') || devLower.includes('10a')) {
                    const capDev = cap.device.toLowerCase();
                    if (capDev.includes('uk/eu sku')) return 'EU/UK Variant';
                    if (capDev.includes('basic / na sku')) return 'US/RoW Variant';
                    return 'Standard Variant';
                }
                
                // Pixel 9 Family
                if (devLower.includes('komodo')) {
                    return hasmmWave ? 'US Variant (mmWave)' : 'EU/UK Variant (Model GGX8B: Sub-6)';
                }
                if (devLower.includes('caiman')) {
                    return hasmmWave ? 'US Variant (mmWave)' : 'EU/UK Variant (Model GEC77: Sub-6)';
                }
                if (devLower.includes('comet')) {
                    return hasmmWave ? 'US Variant (mmWave)' : 'EU/UK Variant (Model GGH2X: Sub-6)';
                }
                if (devLower.includes('tokay')) {
                    return hasmmWave ? 'US Variant (mmWave)' : 'EU/UK Variant (Model GUR0J: Sub-6)';
                }
                
                return 'Global Variant';
            }

            matchedDeviceCaps.forEach(cap => {
                const lteStr = [...cap.lte_bands].sort().join(',');
                const nrStr = [...cap.nr_bands].sort().join(',');
                const capKey = `${cap.device}|${lteStr}|${nrStr}|${cap.max_mimo_dl}|${cap.max_modulation_dl}`;
                
                const cleanSig = cap.filename.replace(/\\.(md|toml|pb|binarypb)$/i, '');
                
                let existing = uniqueCaps.find(u => u.key === capKey);
                if (existing) {
                    if (!existing.signatures.includes(cleanSig)) {
                        existing.signatures.push(cleanSig);
                    }
                    if (!existing.combos.includes(cap.combos_count)) {
                        existing.combos.push(cap.combos_count);
                    }
                } else {
                    uniqueCaps.push({
                        key: capKey,
                        carrier: cap.carrier,
                        device: cap.device,
                        lte_bands: cap.lte_bands,
                        nr_bands: cap.nr_bands,
                        max_mimo_dl: cap.max_mimo_dl,
                        max_modulation_dl: cap.max_modulation_dl,
                        combos: [cap.combos_count],
                        signatures: [cleanSig],
                        nr_ca_combos: cap.nr_ca_combos || [],
                        endc_combos: cap.endc_combos || [],
                        band_caps: cap.band_caps || []
                    });
                }
            });

            uniqueCaps.forEach(cap => {
                const card = document.createElement('div');
                card.className = 'uecap-summary-card';
                
                const combosStr = cap.combos.sort((a, b) => a - b).join(', ');
                const signaturesStr = cap.signatures.join(', ');
                const skuLabel = getSkuGuess(cap);
                
                card.innerHTML = `
                    <div class="uecap-summary-header">
                        <h3>${cap.carrier} Capabilities — ${skuLabel}</h3>
                        <p class="text-secondary">Signature: ${signaturesStr}</p>
                    </div>
                    <div class="uecap-summary-grid">
                        <div><strong>Likely Device Variant:</strong> ${cap.device}</div>
                        <div><strong>Aggregated Combos:</strong> ${combosStr}</div>
                        <div><strong>LTE Bands:</strong> ${cap.lte_bands.join(', ') || '-'}</div>
                        <div><strong>NR Bands:</strong> ${cap.nr_bands.join(', ') || '-'}</div>
                        <div><strong>Max DL MIMO:</strong> ${cap.max_mimo_dl}x${cap.max_mimo_dl}</div>
                        <div><strong>Max DL Modulation:</strong> ${cap.max_modulation_dl}</div>
                    </div>
                    
                    <div class="uecap-combinations-explorer">
                        <button class="btn-toggle-combos" onclick="toggleCombos(this)">
                            <i data-lucide="chevron-right"></i> View Band Combinations Explorer (${cap.nr_ca_combos.length} NR-CA, ${cap.endc_combos.length} EN-DC)
                        </button>
                        <div class="combos-dropdown-content hidden">
                            <div class="combos-columns">
                                <div class="combos-column">
                                    <h4>5G NR-CA Combinations (${cap.nr_ca_combos.length})</h4>
                                    <div class="combos-list">
                                        ${cap.nr_ca_combos.map(c => `<span class="combo-chip">${c}</span>`).join('') || '<span class="text-secondary">None</span>'}
                                    </div>
                                </div>
                                <div class="combos-column">
                                    <h4>4G/5G EN-DC Combinations (${cap.endc_combos.length})</h4>
                                    <div class="combos-list">
                                        ${cap.endc_combos.map(c => `<span class="combo-chip">${c}</span>`).join('') || '<span class="text-secondary">None</span>'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="uecap-band-capabilities">
                        <button class="btn-toggle-combos" onclick="toggleCombos(this)">
                            <i data-lucide="chevron-right"></i> View Detailed Band Capabilities (${cap.band_caps.length} Bands)
                        </button>
                        <div class="combos-dropdown-content hidden">
                            <div class="band-caps-table-wrapper">
                                <table class="band-caps-table">
                                    <thead>
                                        <tr>
                                            <th>Band</th>
                                            <th>Max DL MIMO</th>
                                            <th>Max DL BW</th>
                                            <th>Max DL QAM</th>
                                            <th>Max UL MIMO</th>
                                            <th>Max UL BW</th>
                                            <th>Max UL QAM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${cap.band_caps.map(b => `
                                            <tr>
                                                <td><strong>${b.band}</strong></td>
                                                <td>${b.dl_mimo}</td>
                                                <td>${b.dl_bw}</td>
                                                <td>${b.dl_qam}</td>
                                                <td>${b.ul_mimo}</td>
                                                <td>${b.ul_bw}</td>
                                                <td>${b.ul_qam}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
                uecapsList.appendChild(card);
            });
        }
        
        lucide.createIcons();
    }
    
    // Tab switching behavior
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const tabId = tab.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Search input filter
    const searchInput = document.getElementById('config-search');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.config-item').forEach(item => {
            const key = item.dataset.key || '';
            if (key.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
        
        // Hide parent section cards if all child config-items inside them are hidden
        document.querySelectorAll('.config-section-card').forEach(section => {
            const items = section.querySelectorAll('.config-item');
            let hasVisible = false;
            items.forEach(item => {
                if (item.style.display !== 'none') {
                    hasVisible = true;
                }
            });
            if (hasVisible) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
    
    // Combo Search input filter
    const comboSearchInput = document.getElementById('combo-search');
    comboSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const tokens = query.split(',').map(t => t.trim()).filter(t => t.length > 0);
        
        document.querySelectorAll('.combo-chip').forEach(chip => {
            const chipText = chip.textContent.toLowerCase();
            if (tokens.length === 0) {
                chip.style.display = 'inline-block';
            } else {
                const match = tokens.every(token => chipText.includes(token));
                chip.style.display = match ? 'inline-block' : 'none';
            }
        });
    });
    
    window.toggleCombos = (btn) => {
        const content = btn.nextElementSibling;
        const isHidden = content.classList.contains('hidden');
        if (isHidden) {
            content.classList.remove('hidden');
            btn.querySelector('i').setAttribute('data-lucide', 'chevron-down');
            btn.classList.add('active');
        } else {
            content.classList.add('hidden');
            btn.querySelector('i').setAttribute('data-lucide', 'chevron-right');
            btn.classList.remove('active');
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    };
});
"""
    with open(os.path.join('docs', 'app.js'), 'w', encoding='utf-8') as f:
        f.write(app_js)
        
    print("Static dashboard compiled successfully under docs/ folder!")

def main():
    database = compile_database()
    write_web_dashboard(database)

if __name__ == '__main__':
    main()
