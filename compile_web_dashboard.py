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
        
    summary = {
        'filename': os.path.basename(filepath),
        'device': 'Unknown Device',
        'carrier': 'Unknown Carrier',
        'lte_bands': [],
        'nr_bands': [],
        'max_mimo_dl': 2,
        'max_modulation_dl': '64QAM',
        'combos_count': 0
    }
    
    # Parse title / metadata
    lines = content.splitlines()
    for line in lines:
        if line.startswith('# UE Capability Report:'):
            summary['carrier'] = line.replace('# UE Capability Report:', '').strip()
        elif '**Device:**' in line:
            summary['device'] = line.replace('**Device:**', '').replace('*', '').strip()
        elif '**LTE Bands:**' in line:
            bands = line.replace('**LTE Bands:**', '').replace('`', '').strip()
            summary['lte_bands'] = [b.strip() for b in bands.split(',') if b.strip()]
        elif '**NR Bands:**' in line:
            bands = line.replace('**NR Bands:**', '').replace('`', '').strip()
            summary['nr_bands'] = [b.strip() for b in bands.split(',') if b.strip()]
        elif '**Max DL MIMO Layers:**' in line:
            try:
                summary['max_mimo_dl'] = int(line.replace('**Max DL MIMO Layers:**', '').strip())
            except:
                pass
        elif '**Max DL Modulation:**' in line:
            summary['max_modulation_dl'] = line.replace('**Max DL Modulation:**', '').strip()
        elif '**Total Combo Count:**' in line:
            try:
                summary['combos_count'] = int(line.replace('**Total Combo Count:**', '').replace(',', '').strip())
            except:
                pass
                
    return summary

def match_uecaps_to_carrier(toml_filename, uecap_summaries):
    """
    Fuzzy match a carrier toml filename (e.g. ee_gb) to the parsed UE capability summaries.
    """
    toml_base = toml_filename.lower().replace('_gb', '').replace('_us', '').replace('_de', '')
    matches = []
    
    for summary in uecap_summaries:
        carrier_lower = summary['carrier'].lower()
        fn_lower = summary['filename'].lower()
        
        # Check direct substring matching
        if toml_base in carrier_lower or toml_base in fn_lower:
            matches.append(summary)
            continue
            
        # Hardcoded overrides for common UK carriers
        if toml_base == 'h3' and ('three' in carrier_lower or 'three' in fn_lower):
            matches.append(summary)
        elif toml_base == 'o2postpaid' or toml_base == 'o2prepaid':
            if 'o2' in carrier_lower or 'o2' in fn_lower:
                matches.append(summary)
                
    return matches

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
                
            database['builds'][build_id]['devices'][device_dir] = {
                'friendly_name': device_dir.replace('_', ' ').title(),
                'carriers': {}
            }
            
            # 4. Parse all carrier TOML configs for this device
            for toml_file in glob.glob(os.path.join(toml_dir, '*.toml')):
                filename = os.path.basename(toml_file)
                try:
                    with open(toml_file, 'r', encoding='utf-8') as f:
                        toml_content = f.read()
                        
                    data = tomllib.loads(toml_content)
                    
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
                    
                    # Determine dynamic feature indicators from configs
                    has_vonr = configs.get('vonr_enabled', False)
                    # IMS configuration lookup for wfc (WiFi Calling)
                    has_wfc = False
                    if 'carrier_wfc_ims_available' in configs:
                        has_wfc = configs['carrier_wfc_ims_available']
                    elif 'wfc_operator_error_codes_string_array' in configs:
                        has_wfc = True
                    elif 'wfc' in settings: # Checked dotted namespace
                        has_wfc = True
                        
                    has_volte = configs.get('volte_feature_enabled', True) # Enabled by default on Exynos 5400
                    
                    # Check satellite keys
                    has_satellite = False
                    for key in configs.keys():
                        if 'satellite' in key.lower():
                            has_satellite = True
                            break
                            
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
                            'vonr': has_vonr,
                            'satellite': has_satellite
                        },
                        'uecaps': matched_caps
                    }
                    
                except Exception as ex:
                    print(f"Error parsing carrier TOML {toml_file}: {ex}")
                    
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
                <span class="badge">UK & Europe Profiles</span>
            </div>
            <div class="table-container">
                <table id="matrix-table">
                    <thead>
                        <tr>
                            <th>Carrier</th>
                            <th>VoLTE</th>
                            <th>VoWiFi</th>
                            <th>VoNR (5G SA)</th>
                            <th>Satellite SMS</th>
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

        <!-- Main Details Pane -->
        <div id="details-pane" class="details-pane hidden">
            <!-- Navigation Tabs inside Details Pane -->
            <div class="tab-bar">
                <button class="tab-btn active" data-tab="carrier-settings-tab">
                    <i data-lucide="settings"></i> Framework Settings
                </button>
                <button class="tab-btn" data-tab="ue-caps-tab">
                    <i data-lucide="cpu"></i> Radio Capabilities
                </button>
                <button class="tab-btn" data-tab="apns-tab">
                    <i data-lucide="network"></i> APNs
                </button>
            </div>

            <!-- Content Area -->
            <div class="tab-content active" id="carrier-settings-tab">
                <div class="search-bar">
                    <i data-lucide="search"></i>
                    <input type="text" id="config-search" placeholder="Search config keys (e.g. vonr, ims)...">
                </div>
                <div class="config-grid" id="config-list">
                    <!-- Populated by JavaScript -->
                </div>
            </div>

            <div class="tab-content" id="ue-caps-tab">
                <div id="uecaps-list">
                    <!-- Populated by JavaScript -->
                </div>
            </div>

            <div class="tab-content" id="apns-tab">
                <div class="apn-grid" id="apn-list">
                    <!-- Populated by JavaScript -->
                </div>
            </div>
        </div>
    </main>

    <footer class="app-footer">
        <p>Built with ❤️ for the Android developer community. Natively parsed from stock Google Pixel factory partitions.</p>
        <p>Compatible with <a href="https://github.com/h4wkd3v/pixel-carriersettings-toolbox" target="_blank">pixel-carriersettings-toolbox</a></p>
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

.config-item {
    background-color: rgba(0, 0, 0, 0.15);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
}

.config-key {
    font-family: monospace;
    color: var(--text-secondary);
}

.config-value {
    font-family: monospace;
    color: var(--accent);
    font-weight: 500;
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
    
    function populateDevices(buildId) {
        deviceSelect.innerHTML = '';
        const devices = Object.keys(DATABASE.builds[buildId].devices);
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
        
        const carriers = Object.keys(deviceData.carriers).sort();
        carriers.forEach(cFile => {
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
                
            const vonrHtml = carrier.features.vonr 
                ? '<span class="status-badge supported"><i data-lucide="check"></i></span>'
                : '<span class="status-badge unsupported"><i data-lucide="x"></i></span>';
                
            const satHtml = carrier.features.satellite 
                ? '<span class="status-badge supported"><i data-lucide="check"></i></span>'
                : '<span class="status-badge unsupported"><i data-lucide="x"></i></span>';
                
            const apnsText = carrier.apns.length > 0 ? `${carrier.apns.length} APNs` : '-';
            const ueText = carrier.uecaps.length > 0 ? `${carrier.uecaps[0].combos_count} Combos` : '-';
            
            row.innerHTML = `
                <td><strong>${carrier.carrier_name}</strong></td>
                <td>${volteHtml}</td>
                <td>${vowifiHtml}</td>
                <td>${vonrHtml}</td>
                <td>${satHtml}</td>
                <td>${apnsText}</td>
                <td>${ueText}</td>
            `;
            
            row.addEventListener('click', () => {
                // Remove active class from siblings
                document.querySelectorAll('.matrix-row').forEach(r => r.classList.remove('active'));
                row.classList.add('active');
                activeCarrierFile = cFile;
                showDetails(carrier);
            });
            
            matrixBody.appendChild(row);
        });
        
        lucide.createIcons();
    }
    
    function showDetails(carrier) {
        detailsPane.classList.remove('hidden');
        
        // Populate config tab
        const configList = document.getElementById('config-list');
        configList.innerHTML = '';
        
        const configs = carrier.configs;
        Object.keys(configs).sort().forEach(key => {
            const val = configs[key];
            const div = document.createElement('div');
            div.className = 'config-item';
            div.dataset.key = key.toLowerCase();
            
            let valStr = JSON.stringify(val);
            if (val && typeof val === 'object' && 'value' in val) {
                valStr = JSON.stringify(val.value);
            }
            
            div.innerHTML = `
                <span class="config-key">${key}</span>
                <span class="config-value">${valStr}</span>
            `;
            configList.appendChild(div);
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
        if (carrier.uecaps.length === 0) {
            uecapsList.innerHTML = '<p class="text-secondary">No UE Capability profile matched for this carrier.</p>';
        } else {
            carrier.uecaps.forEach(cap => {
                const card = document.createElement('div');
                card.className = 'uecap-summary-card';
                card.innerHTML = `
                    <div class="uecap-summary-header">
                        <h3>${cap.carrier} Capabilities</h3>
                        <p class="text-secondary">Signature suffix: ${cap.filename}</p>
                    </div>
                    <div class="uecap-summary-grid">
                        <div><strong>Likely Device Variant:</strong> ${cap.device}</div>
                        <div><strong>Aggregated Combos:</strong> ${cap.combos_count}</div>
                        <div><strong>LTE Bands:</strong> ${cap.lte_bands.join(', ')}</div>
                        <div><strong>NR Bands:</strong> ${cap.nr_bands.join(', ')}</div>
                        <div><strong>Max DL MIMO:</strong> ${cap.max_mimo_dl}x${cap.max_mimo_dl}</div>
                        <div><strong>Max DL Modulation:</strong> ${cap.max_modulation_dl}</div>
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
            const key = item.dataset.key;
            if (key.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
"""
    with open(os.path.join('docs', 'app.js'), 'w', encoding='utf-8') as f:
        f.write(app_js)
        
    print("Static dashboard compiled successfully under docs/ folder!")

if __name__ == '__main__':
    database = compile_database()
    write_web_dashboard(database)
