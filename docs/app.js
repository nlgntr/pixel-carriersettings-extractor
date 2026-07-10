let DATABASE = null;

// --- Compact protobuf artifact loader ---------------------------------------
// The dashboard ships as a small DashboardArtifact protobuf envelope whose payload
// is gzip-compressed JSON. We hand-decode the envelope (no protobuf.js dependency)
// and inflate with the native DecompressionStream.

async function loadDashboard() {
  const resp = await fetch('carrier_data.pb', { cache: 'no-cache' });
  if (!resp.ok) {
    throw new Error(`Failed to fetch carrier_data.pb (${resp.status})`);
  }
  const bytes = new Uint8Array(await resp.arrayBuffer());
  const artifact = decodeDashboardArtifact(bytes);
  if (artifact.formatVersion !== 1) {
    throw new Error(`Unsupported dashboard format version ${artifact.formatVersion}`);
  }
  if (artifact.payloadEncoding !== 1) {
    throw new Error(`Unsupported payload encoding ${artifact.payloadEncoding}`);
  }
  if (artifact.compression !== 1) {
    throw new Error(`Unsupported compression ${artifact.compression}`);
  }
  const jsonBytes = await gunzip(artifact.payload);
  const text = new TextDecoder('utf-8').decode(jsonBytes);
  return JSON.parse(text);
}

function decodeDashboardArtifact(bytes) {
  let formatVersion = 0;
  let payloadEncoding = 0;
  let compression = 0;
  let payload = null;
  let i = 0;
  while (i < bytes.length) {
    const tagResult = readVarint(bytes, i);
    i = tagResult.next;
    const tag = tagResult.value;
    const fieldNumber = tag >> 3;
    const wireType = tag & 0x7;
    if (wireType === 0) {
      const v = readVarint(bytes, i);
      i = v.next;
      if (fieldNumber === 1) formatVersion = v.value;
      else if (fieldNumber === 2) payloadEncoding = v.value;
      else if (fieldNumber === 3) compression = v.value;
    } else if (wireType === 2) {
      const lenResult = readVarint(bytes, i);
      i = lenResult.next;
      const len = lenResult.value;
      payload = bytes.subarray(i, i + len);
      i += len;
    } else {
      throw new Error(`Unsupported protobuf wire type ${wireType}`);
    }
  }
  return { formatVersion, payloadEncoding, compression, payload };
}

function readVarint(bytes, pos) {
  let result = 0n;
  let shift = 0n;
  let i = pos;
  while (i < bytes.length) {
    const b = bytes[i++];
    result |= BigInt(b & 0x7f) << shift;
    if ((b & 0x80) === 0) break;
    shift += 7n;
  }
  return { value: Number(result), next: i };
}

async function gunzip(input) {
  const ds = new DecompressionStream('gzip');
  const stream = new Blob([input]).stream().pipeThrough(ds);
  const buffer = await new Response(stream).arrayBuffer();
  return new Uint8Array(buffer);
}

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize selects
    const buildSelect = document.getElementById('build-select');
    const deviceSelect = document.getElementById('device-select');
    const matrixBody = document.getElementById('matrix-body');
    const detailsPane = document.getElementById('details-pane');
    
    // Config values
    let activeBuildId = '';
    let activeDeviceDir = '';
    let activeCarrierFile = '';

    // Load the compact dashboard artifact before wiring the UI.
    const loadingEl = document.getElementById('loading');
    try {
        DATABASE = await loadDashboard();
    } catch (err) {
        if (loadingEl) {
            loadingEl.textContent = 'Failed to load carrier data: ' + err.message;
            loadingEl.classList.add('loading-error');
        }
        console.error(err);
        return;
    }
    if (loadingEl) loadingEl.remove();
    
    function getFriendlyCarrierName(name) {
        if (!name) return name;
        const n = name.toUpperCase();
        if (n === 'H3' || n === 'THREE') return '3';
        if (n === 'EE') return 'EE';
        if (n === 'O2POSTPAID') return 'O² PAYM';
        if (n === 'O2PREPAID') return 'O² PAYG';
        if (n === 'O2') return 'O²';
        if (n === 'VODAFONE' || n === 'VF') return 'Vodafone';
        return name;
    }

    function normalizeCapabilityList(values) {
        return [...new Set(Array.isArray(values) ? values : [])]
            .sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));
    }

    function normalizeBandCapabilities(values) {
        const capabilitiesByValue = new Map();
        (Array.isArray(values) ? values : []).forEach(value => {
            const normalizedValue = Object.keys(value || {})
                .sort()
                .reduce((result, key) => {
                    result[key] = value[key];
                    return result;
                }, {});
            capabilitiesByValue.set(JSON.stringify(normalizedValue), normalizedValue);
        });

        return [...capabilitiesByValue.values()].sort((a, b) => {
            const bandOrder = String(a.band || '').localeCompare(String(b.band || ''), undefined, { numeric: true });
            return bandOrder || JSON.stringify(a).localeCompare(JSON.stringify(b));
        });
    }

    function getNormalizedCapability(cap) {
        return {
            lte_bands: normalizeCapabilityList(cap.lte_bands),
            nr_bands: normalizeCapabilityList(cap.nr_bands),
            max_mimo_dl: cap.max_mimo_dl ?? null,
            max_modulation_dl: cap.max_modulation_dl || '',
            hardware_tier: cap.hardware_tier || '',
            nr_ca_combos: normalizeCapabilityList(cap.nr_ca_combos),
            endc_combos: normalizeCapabilityList(cap.endc_combos),
            band_caps: normalizeBandCapabilities(cap.band_caps)
        };
    }

    function getNormalizedCapabilityKey(cap) {
        return JSON.stringify(getNormalizedCapability(cap));
    }

    function getSourceSignature(filename) {
        return (filename || 'Unknown source').replace(/\.(md|toml|pb|binarypb)$/i, '');
    }
    
    // Build Selector populate
    const buildIds = Object.keys(DATABASE.builds);
    buildIds.forEach(id => {
        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = DATABASE.builds[id].friendly_name || id;
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
    
    function getGeneration(friendlyName) {
        const lower = friendlyName.toLowerCase();
        if (lower.includes('10')) return 10;
        if (lower.includes('9')) return 9;
        if (lower.includes('8')) return 8;
        if (lower.includes('7')) return 7;
        if (lower.includes('6')) return 6;
        if (lower.includes('5')) return 5;
        
        if (lower.includes('pixel fold')) {
            // Felix is Pixel 7-gen Tensor G2
            return 7;
        }
        if (lower.includes('tablet')) {
            return 7;
        }
        return 0;
    }
    
    function populateDevices(buildId) {
        deviceSelect.innerHTML = '';
        const devices = Object.keys(DATABASE.builds[buildId].devices);
        devices.sort((a, b) => {
            const nameA = DATABASE.builds[buildId].devices[a].friendly_name;
            const nameB = DATABASE.builds[buildId].devices[b].friendly_name;
            
            const genA = getGeneration(nameA);
            const genB = getGeneration(nameB);
            
            if (genA !== genB) {
                return genB - genA; // Descending order: newest device generation first
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
        document.body.classList.remove('details-open');
        
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
                
            const apnsText = carrier.apns.length > 0 ? `${carrier.apns.length}` : '-';
            
            // Filter uecaps based on selected device variant
            let matchedDeviceCaps = carrier.uecaps || [];
            const activeDeviceFriendly = DATABASE.builds[activeBuildId].devices[activeDeviceDir].friendly_name;
            const activeDeviceLower = activeDeviceFriendly.split('(')[0].trim().toLowerCase();
            
            matchedDeviceCaps = matchedDeviceCaps.filter(cap => {
                const supportedList = cap.device.split(',').map(x => x.trim().toLowerCase());
                
                // 1. Exact match in the supported list
                const hasExactMatch = supportedList.includes(activeDeviceLower);
                if (hasExactMatch) return true;
                
                // 2. Generic fallback matching for threshold strings containing '&' or '/'
                const hasGenericMatch = (cap.device.includes('/') || cap.device.includes('&')) && 
                                        cap.device.toLowerCase().includes(activeDeviceLower);
                return hasGenericMatch;
            });
            
            let ueText = '-';
            if (matchedDeviceCaps.length > 0) {
                const parentName = matchedDeviceCaps[0].carrier;
                const normalizedProfiles = [...new Map(matchedDeviceCaps.map(cap => [
                    getNormalizedCapabilityKey(cap),
                    getNormalizedCapability(cap)
                ])).values()];
                const nrCaCounts = [...new Set(normalizedProfiles.map(cap => cap.nr_ca_combos.length))].sort((a, b) => a - b);
                const endcCounts = [...new Set(normalizedProfiles.map(cap => cap.endc_combos.length))].sort((a, b) => a - b);
                const aggregationSummary = `${nrCaCounts.join('/')} NR-CA · ${endcCounts.join('/')} EN-DC`;
                const isMno = mnoKeywords.includes(cFile.toLowerCase().replace('.toml', ''));
                if (isMno) {
                    ueText = aggregationSummary;
                } else {
                    ueText = `<span class="mno-fallback-badge">${getFriendlyCarrierName(parentName)} (${aggregationSummary})</span>`;
                }
            } else if (activeDeviceLower.includes('pixel 6')) {
                ueText = '<span class="text-secondary" title="Tensor G1 modem stores capabilities in cfg.db format">N/A</span>';
            }
            
            row.innerHTML = `
                <td class="carrier-name-cell" data-label="Carrier"><strong>${getFriendlyCarrierName(carrier.carrier_name)}</strong></td>
                <td data-label="4G Calling">${volteHtml}</td>
                <td data-label="WiFi Calling">${vowifiHtml}</td>
                <td data-label="5G+ (5G SA)">${sa5gHtml}</td>
                <td data-label="5G Calling">${vonrHtml}</td>
                <td data-label="Satellite">${satHtml}</td>
                <td data-label="APNs">${apnsText}</td>
                <td data-label="UE Aggregation">${ueText}</td>
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
        document.body.classList.add('details-open');
        
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
        const activeDeviceFriendly = DATABASE.builds[activeBuildId].devices[activeDeviceDir].friendly_name;
        const activeDeviceLower = activeDeviceFriendly.split('(')[0].trim().toLowerCase();
        let matchedDeviceCaps = carrier.uecaps || [];
        
        matchedDeviceCaps = matchedDeviceCaps.filter(cap => {
            const supportedList = cap.device.split(',').map(x => x.trim().toLowerCase());
            
            // 1. Exact match in the supported list
            const hasExactMatch = supportedList.includes(activeDeviceLower);
            if (hasExactMatch) return true;
            
            // 2. Generic fallback matching for threshold strings containing '&' or '/'
            const hasGenericMatch = (cap.device.includes('/') || cap.device.includes('&')) && 
                                    cap.device.toLowerCase().includes(activeDeviceLower);
            return hasGenericMatch;
        });
        
        if (matchedDeviceCaps.length === 0) {
            const allCapsEmpty = !carrier.uecaps || carrier.uecaps.length === 0;
            const isOlderDevice = activeDeviceLower.includes('pixel 6');
            if (isOlderDevice) {
                uecapsList.innerHTML = '<p class="text-secondary">⚠️ UE Capability extraction is not supported for Pixel 6 series.<br><small>The Tensor G1 (Exynos 5123) modem stores capabilities in a proprietary cfg.db/confseqs format, not as extractable .binarypb files.</small></p>';
            } else if (allCapsEmpty) {
                uecapsList.innerHTML = '<p class="text-secondary">No UE Capability data available for this carrier.</p>';
            } else {
                uecapsList.innerHTML = '<p class="text-secondary">No UE Capability profile matched for this carrier and selected device variant.</p>';
            }
        } else {
            // Hardware/SKU names are heuristic presentation only; they never define profile identity.
            function getSkuGuess(cap) {
                const devLower = activeDeviceDir.toLowerCase();
                const hasmmWave = cap.nr_bands.includes('n258') || cap.nr_bands.includes('n260') || cap.nr_bands.includes('n261');

                if (devLower.includes('mustang')) {
                    return hasmmWave ? 'US (Model GUL82: mmWave)' : 'Global (RoW) (Model G45RY: Sub-6)';
                }
                if (devLower.includes('blazer')) {
                    return hasmmWave ? 'US (Model G4QUR: mmWave)' : 'Global (RoW) (Model GEHN3: Sub-6)';
                }
                if (devLower.includes('rango')) {
                    return hasmmWave ? 'US (mmWave)' : 'Global (RoW) (Sub-6)';
                }
                if (devLower.includes('frankel')) {
                    return hasmmWave ? 'US (mmWave)' : 'Global (RoW) (Model GK2MP: Sub-6)';
                }
                if (devLower.includes('stallion') || devLower.includes('10a')) {
                    const has66 = [...cap.revisions.values()].some(r => r.rawEntryCount === 66);
                    if (has66) {
                        return 'Japanese (Model GV0BP: Sub-6)';
                    }
                    const tier = cap.hardware_tier.toLowerCase();
                    if (tier.includes('mid-range') || tier.includes('uk/eu')) {
                        return 'Global (RoW) (Model G4H7L: Sub-6)';
                    }
                    if (tier.includes('basic') || tier.includes('fallback') || tier.includes('na sku')) {
                        return 'North American (Model GE1GQ: Sub-6)';
                    }
                    return 'Standard Sub-6';
                }
                if (devLower.includes('komodo')) {
                    return hasmmWave ? 'US (Model GZC4K / GQ57S: mmWave)' : 'Global (RoW) (Model GGX8B: Sub-6)';
                }
                if (devLower.includes('caiman')) {
                    return hasmmWave ? 'US (Model GQD8C: mmWave)' : 'Global (RoW) (Model GEC77: Sub-6)';
                }
                if (devLower.includes('comet')) {
                    return hasmmWave ? 'US (Model G9EJD: mmWave)' : 'Global (RoW) (Model GGH2X: Sub-6)';
                }
                if (devLower.includes('tokay')) {
                    return hasmmWave ? 'US (Model G2YBB: mmWave)' : 'Global (RoW) (Model GUR25: Sub-6)';
                }
                if (devLower.includes('tegu') || devLower.includes('9a')) {
                    return 'Global (RoW) (Model GTF7P: Sub-6)';
                }
                return 'Global (RoW)';
            }

            const groupedCaps = new Map();
            matchedDeviceCaps.forEach(sourceCap => {
                const capKey = getNormalizedCapabilityKey(sourceCap);
                let groupedCap = groupedCaps.get(capKey);
                if (!groupedCap) {
                    groupedCap = {
                        ...getNormalizedCapability(sourceCap),
                        carrier: sourceCap.carrier,
                        deviceMappings: new Set(),
                        revisions: new Map()
                    };
                    groupedCaps.set(capKey, groupedCap);
                }

                if (sourceCap.device) {
                    groupedCap.deviceMappings.add(sourceCap.device);
                }

                const modemConfigVersion = Number.isInteger(sourceCap.modem_config_version)
                    ? sourceCap.modem_config_version
                    : 0;
                const rawEntryCount = Number.isFinite(sourceCap.combos_count)
                    ? sourceCap.combos_count
                    : 0;
                const revisionKey = `${modemConfigVersion}|${rawEntryCount}`;
                let revision = groupedCap.revisions.get(revisionKey);
                if (!revision) {
                    revision = {
                        modemConfigVersion,
                        rawEntryCount,
                        signatures: new Set()
                    };
                    groupedCap.revisions.set(revisionKey, revision);
                }
                revision.signatures.add(getSourceSignature(sourceCap.filename));
            });

            [...groupedCaps.values()].forEach((cap, profileIndex) => {
                const card = document.createElement('article');
                card.className = 'uecap-summary-card';
                const skuLabel = getSkuGuess(cap);
                const deviceMappings = [...cap.deviceMappings].sort().join('; ') || 'Not available';
                const revisions = [...cap.revisions.values()].sort((a, b) =>
                    a.modemConfigVersion - b.modemConfigVersion || a.rawEntryCount - b.rawEntryCount
                );
                const mimoLabel = cap.max_mimo_dl == null ? '-' : `${cap.max_mimo_dl}x${cap.max_mimo_dl}`;

                card.innerHTML = `
                    <div class="uecap-summary-header">
                        <h3>${getFriendlyCarrierName(cap.carrier)} Radio Capability Profile ${profileIndex + 1}</h3>
                        <p class="text-secondary">One profile represents a shared set of normalized modem capabilities across its listed revisions.</p>
                    </div>
                    <div class="uecap-summary-grid">
                        <div><strong>Device mapping <span class="inferred-label">(inferred)</span>:</strong> ${deviceMappings}</div>
                        <div><strong>Hardware/SKU mapping <span class="inferred-label">(inferred)</span>:</strong> ${skuLabel}</div>
                        <div><strong>Hardware tier:</strong> ${cap.hardware_tier || '-'}</div>
                        <div><strong>Max DL MIMO:</strong> ${mimoLabel}</div>
                        <div><strong>LTE Bands:</strong> ${cap.lte_bands.join(', ') || '-'}</div>
                        <div><strong>NR Bands:</strong> ${cap.nr_bands.join(', ') || '-'}</div>
                        <div><strong>Max DL Modulation:</strong> ${cap.max_modulation_dl || '-'}</div>
                    </div>

                    <section class="uecap-revisions" aria-label="Modem configuration revisions">
                        <div class="uecap-revisions-heading">
                            <h4>Modem configuration revisions</h4>
                            <p>Raw profile entries are parameterized protobuf records. Their totals are extraction details, not a capability ranking.</p>
                        </div>
                        <div class="uecap-revisions-table-wrapper">
                            <table class="uecap-revisions-table">
                                <thead>
                                    <tr>
                                        <th>Modem config version</th>
                                        <th>Raw profile entries</th>
                                        <th>Normalized combinations</th>
                                        <th>Source signatures</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${revisions.map(revision => {
                                        const signatures = [...revision.signatures].sort();
                                        const signatureLabel = `${signatures.length} source signature${signatures.length === 1 ? '' : 's'}`;
                                        return `
                                            <tr>
                                                <td data-label="Modem config version">${revision.modemConfigVersion || 'Not reported'}</td>
                                                <td data-label="Raw profile entries">${revision.rawEntryCount}</td>
                                                <td data-label="Normalized combinations">${cap.nr_ca_combos.length} NR-CA · ${cap.endc_combos.length} EN-DC</td>
                                                <td data-label="Source signatures">
                                                    <details class="source-signature-details">
                                                        <summary>${signatureLabel}</summary>
                                                        <span class="source-signature-list">
                                                            ${signatures.map(signature => `<code>${signature}</code>`).join('')}
                                                        </span>
                                                    </details>
                                                </td>
                                            </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                            </table>
                        </div>
                    </section>

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
    
    window.closeDetails = () => {
        detailsPane.classList.add('hidden');
        document.body.classList.remove('details-open');
        document.querySelectorAll('.matrix-row').forEach(r => r.classList.remove('active'));
    };

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
