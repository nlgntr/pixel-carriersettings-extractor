document.addEventListener('DOMContentLoaded', () => {
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
        devices.sort((a, b) => {
            const nameA = DATABASE.builds[buildId].devices[a].friendly_name;
            const nameB = DATABASE.builds[buildId].devices[b].friendly_name;
            
            // Extract the first number sequence (e.g. 9 or 10)
            const numA = parseInt(nameA.match(/\d+/)?.[0] || '0', 10);
            const numB = parseInt(nameB.match(/\d+/)?.[0] || '0', 10);
            
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
        
        // Render MNO Header and rows
        if (mnos.length > 0) {
            const mnoHeader = document.createElement('tr');
            mnoHeader.className = 'section-header-row';
            mnoHeader.innerHTML = '<td colspan="8">Mobile Network Operators (MNOs)</td>';
            matrixBody.appendChild(mnoHeader);
            mnos.forEach(cFile => {
                matrixBody.appendChild(createRow(cFile));
            });
        }
        
        // Render MVNO Header and rows
        if (mvnos.length > 0) {
            const mvnoHeader = document.createElement('tr');
            mvnoHeader.className = 'section-header-row';
            mvnoHeader.innerHTML = '<td colspan="8">Virtual Operators (MVNOs)</td>';
            matrixBody.appendChild(mvnoHeader);
            mvnos.forEach(cFile => {
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
                
                const cleanSig = cap.filename.replace(/\.(md|toml|pb|binarypb)$/i, '');
                
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
                        signatures: [cleanSig]
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
});
