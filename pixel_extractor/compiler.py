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
    html.append("    <meta charset=\"UTF-8\">")
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
    html.append(f"        <div class=\"meta-info\">Build folder: <code>{build_id}</code></div>")
    
    if cfg_db_path:
        html.append("        <h2>Shannon Modem Configuration</h2>")
        html.append("        <div class=\"file-list\">")
        html.append(f"            <div class=\"file-item\"><a href=\"{cfg_db_path}\">📄 cfg.db</a></div>")
        html.append("        </div>")
        
    if device_tomls:
        html.append("        <h2>Carrier Settings Configurations (TOML)</h2>")
        for friendly_name, data in sorted(device_tomls.items()):
            html.append("        <div class=\"device-card\">")
            html.append(f"            <h3>{friendly_name}</h3>")
            html.append("            <div class=\"file-list\">")
            for f in data['files']:
                path = f"carrier_settings/{data['dir']}/toml/{f}"
                html.append(f"                <div class=\"file-item\"><a href=\"{path}\">📄 {f}</a></div>")
            html.append("            </div>")
            html.append("        </div>")
            
    if uecaps_files:
        html.append("        <h2>UE Capability Radio Profiles (Markdown)</h2>")
        html.append("        <div class=\"file-list\">")
        for f in uecaps_files:
            path = f"uecaps/markdown/{f}"
            html.append(f"            <div class=\"file-item\"><a href=\"{path}\">📄 {f}</a></div>")
        html.append("        </div>")
        
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
    
    # Write docs/data.js
    data_js_path = os.path.join('docs', 'data.js')
    with open(data_js_path, 'w', encoding='utf-8') as f:
        f.write(f"const DATABASE = {json.dumps(database, indent=2)};\n")
    print(f"Compiled database written to {data_js_path}")
    print("Static dashboard compiled successfully under docs/ folder!")

def main():
    database = compile_database()
    write_web_dashboard(database)

if __name__ == '__main__':
    main()
