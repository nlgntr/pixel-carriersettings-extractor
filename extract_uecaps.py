# /// script
# dependencies = [
#   "ext4",
# ]
# ///

import os
import sys
import struct
import zipfile
import re
import glob
import argparse
from ext4 import Volume

CODENAMES = {
    'blazer': 'Pixel 10 Pro',
    'stallion': 'Pixel 10a',
    'frankel': 'Pixel 10',
    'mustang': 'Pixel 10 Pro XL',
    'rango': 'Pixel 10 Pro Fold',
    'tokay': 'Pixel 9',
    'caiman': 'Pixel 9 Pro',
    'komodo': 'Pixel 9 Pro XL',
    'comet': 'Pixel Fold / 9 Pro Fold',
    'husky': 'Pixel 8 Pro',
    'shiba': 'Pixel 8',
    'akita': 'Pixel 8a',
    'lynx': 'Pixel 7a',
    'cheetah': 'Pixel 7 Pro',
    'panther': 'Pixel 7',
    'bluejay': 'Pixel 6a',
    'raven': 'Pixel 6 Pro',
    'oriole': 'Pixel 6',
}

MONTHS = {
    '01': 'january', '02': 'february', '03': 'march', '04': 'april',
    '05': 'may', '06': 'june', '07': 'july', '08': 'august',
    '09': 'september', '10': 'october', '11': 'november', '12': 'december'
}

# Country code to carrier profile suffix list mapping
COUNTRY_TO_SUFFIX = {
    'gb': ['_uk', 'ee'],
    'uk': ['_uk', 'ee'],
    'us': ['_us', '_vzw', '_att', '_tmo', 'charter', 'comcast', 'visible', 'xfinity', 'firstnet'],
    'de': ['_de', '_dtag', '_vf', '_o2', '1and1', 'alditalk'],
    'fr': ['_fr', '_orange', '_sfr', '_bouygues', '_free', 'coriolis'],
    'jp': ['_jp', '_sbm', '_dcm', '_kddi', 'rakuten'],
    'au': ['_au', '_telstra', '_optus', '_vha'],
    'ca': ['_ca', '_rogers', '_bell', '_telus', 'koodo', 'fizz', 'videotron', 'sasktel', 'freedom'],
}

def parse_android_version(build_id):
    if not build_id:
        return 'unknown'
    first_char = build_id.upper()[0]
    if first_char == 'C':
        return '17'
    elif first_char == 'B':
        return '16'
    elif first_char in ('A', 'V'):
        return '15'
    elif first_char == 'U':
        return '14'
    elif first_char == 'T':
        return '13'
    elif first_char == 'S':
        return '12'
    return 'unknown'

def parse_factory_zip_name(filename):
    basename = os.path.basename(filename)
    match = re.match(r'^([a-z0-9_]+)-([a-z0-9\.]+)-factory-[a-f0-9]+\.zip$', basename)
    if not match:
        clean_name = re.sub(r'[\.\s\-]', '_', os.path.splitext(basename)[0]).lower()
        return {
            'codename': clean_name,
            'build_id': None,
            'device': clean_name,
            'android_version': 'unknown',
            'dir_name': f"extracted_{clean_name}_uecaps"
        }
    
    codename = match.group(1)
    build_id = match.group(2)
    
    date_match = re.search(r'\.(\d{6})\.', build_id)
    month_year_str = "unknown_date"
    if date_match:
        date_code = date_match.group(1)
        year = "20" + date_code[0:2]
        month_code = date_code[2:4]
        month_name = MONTHS.get(month_code, "unknown")
        month_year_str = f"{month_name}_{year}"
        
    device_friendly = CODENAMES.get(codename, codename)
    android_ver = parse_android_version(build_id)
    dir_name = f"android_{android_ver}_{month_year_str}_{build_id}"
    
    return {
        'codename': codename,
        'build_id': build_id,
        'device': device_friendly,
        'android_version': android_ver,
        'dir_name': dir_name
    }

# Helper to parse varint from bytes
def parse_varint(data, pos):
    val = 0
    shift = 0
    while pos < len(data):
        b = data[pos]
        val |= (b & 0x7f) << shift
        pos += 1
        if not (b & 0x80):
            break
        shift += 7
    return val, pos

# Parse protobuf fields recursively
def parse_protobuf(data, start=0, end=None):
    if end is None:
        end = len(data)
    pos = start
    fields = []
    while pos < end:
        if pos >= len(data):
            break
        try:
            tag_byte, pos = parse_varint(data, pos)
        except IndexError:
            break
        wire_type = tag_byte & 0x07
        field_num = tag_byte >> 3
        
        if wire_type == 0:  # Varint
            try:
                val, pos = parse_varint(data, pos)
                fields.append((field_num, 'varint', val))
            except IndexError:
                break
        elif wire_type == 2:  # Length-delimited
            try:
                length, pos = parse_varint(data, pos)
                val = data[pos:pos+length]
                pos += length
                fields.append((field_num, 'length_delimited', val))
            except IndexError:
                break
        elif wire_type == 5:  # 32-bit
            if pos + 4 <= len(data):
                val = struct.unpack('<I', data[pos:pos+4])[0]
                pos += 4
                fields.append((field_num, '32bit', val))
            else:
                break
        elif wire_type == 1:  # 64-bit
            if pos + 8 <= len(data):
                val = struct.unpack('<Q', data[pos:pos+8])[0]
                pos += 8
                fields.append((field_num, '64bit', val))
            else:
                break
        else:
            break
    return fields

def parse_featureset(fields):
    fs = {
        'mimo': 1,
        'qam': 1,
        'bw': 0,
        'scs': 2,
        '90mhz': 0,
        'cc': 1
    }
    for fnum, ftype, val in fields:
        if fnum == 1: fs['mimo'] = val
        elif fnum == 2: fs['qam'] = val
        elif fnum == 3: fs['bw'] = val
        elif fnum == 4: fs['scs'] = val
        elif fnum == 5: fs['90mhz'] = val
        elif fnum == 6: fs['cc'] = val
    return fs

def format_fs_dl_txt(fs):
    mimo = f"{fs['mimo']}x{fs['mimo']}" if fs['mimo'] in (1,2,4,8) else f"{fs['mimo']} layers"
    qam = "QAM256" if fs['qam'] == 2 else "QAM64"
    scs = "30kHz" if fs['scs'] == 1 else "15kHz"
    m90 = "90MHz: Y" if fs['90mhz'] == 1 else "90MHz: N"
    return f"{scs}, {mimo}, {fs['bw']} MHz, {qam}, {m90}"

def format_fs_ul_txt(fs):
    ul_mimo_str = "Yes" if fs['mimo'] > 1 else "No"
    qam = "QAM256" if fs['qam'] == 2 else "QAM64"
    scs = "30kHz" if fs['scs'] == 1 else "15kHz"
    m90 = "90MHz: Y" if fs['90mhz'] == 1 else "90MHz: N"
    return f"{scs}, ULMIMO: {ul_mimo_str}, {fs['bw']} MHz, {qam}, {m90}"

def parse_band_config(fields):
    band_cfg = {
        'band': 0,
        'dl_fs_idx': 0,
        'ul_fs_idx': 0
    }
    for fnum, ftype, val in fields:
        if fnum == 1:
            band_cfg['band'] = val
        elif fnum == 6:
            if len(val) > 0:
                band_cfg['dl_fs_idx'] = val[0]
        elif fnum == 7:
            if len(val) > 0:
                band_cfg['ul_fs_idx'] = val[0]
    return band_cfg

def decode_uecap_to_toml(pb_data, out_path):
    fields = parse_protobuf(pb_data)
    version = None
    carrier_id = None
    dl_feature_sets = []
    ul_feature_sets = []
    combos = []
    
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'varint':
            version = val
        elif fnum == 2 and ftype == 'varint':
            carrier_id = val
        elif fnum == 6 and ftype == 'length_delimited':
            dl_feature_sets.append(parse_featureset(parse_protobuf(val)))
        elif fnum == 7 and ftype == 'length_delimited':
            ul_feature_sets.append(parse_featureset(parse_protobuf(val)))
        elif fnum == 3 and ftype == 'length_delimited':
            combo_fields = parse_protobuf(val)
            combo_info = None
            band_params = []
            
            for cfnum, cftype, cval in combo_fields:
                if cfnum == 1 and cftype == 'length_delimited':
                    combo_info = parse_protobuf(cval)
                elif cfnum == 2 and cftype == 'length_delimited':
                    bp_fields = parse_protobuf(cval)
                    configs_in_bp = []
                    bcs_mask = 0
                    for bpnum, bptype, bpval in bp_fields:
                        if bpnum == 1 and bptype == 'length_delimited':
                            configs_in_bp.append(parse_band_config(parse_protobuf(bpval)))
                        elif bpnum == 2 and bptype == 'varint':
                            bcs_mask = bpval
                    band_params.append((configs_in_bp, bcs_mask))
            combos.append((combo_info, band_params))
            
    with open(out_path, 'w') as out_f:
        out_f.write(f"version = {version if version is not None else 0}\n")
        out_f.write(f"carrier_id = {carrier_id if carrier_id is not None else 0}\n\n")
        
        for i, fs in enumerate(dl_feature_sets):
            mimo = f'"{fs["mimo"]}x{fs["mimo"]}"' if fs['mimo'] in (1,2,4,8) else f'"{fs["mimo"]} layers"'
            qam = '"QAM256"' if fs['qam'] == 2 else '"QAM64"'
            scs = '"30kHz"' if fs['scs'] == 1 else '"15kHz"'
            m90 = "true" if fs['90mhz'] == 1 else "false"
            out_f.write("[[dl_feature_set]]\n")
            out_f.write(f"id = {i+1}\n")
            out_f.write(f"mimo = {mimo}\n")
            out_f.write(f"qam = {qam}\n")
            out_f.write(f"bw = {fs['bw']}\n")
            out_f.write(f"scs = {scs}\n")
            out_f.write(f"m90 = {m90}\n\n")
            
        for i, fs in enumerate(ul_feature_sets):
            ul_mimo = "true" if fs['mimo'] > 1 else "false"
            qam = '"QAM256"' if fs['qam'] == 2 else '"QAM64"'
            scs = '"30kHz"' if fs['scs'] == 1 else '"15kHz"'
            m90 = "true" if fs['90mhz'] == 1 else "false"
            out_f.write("[[ul_feature_set]]\n")
            out_f.write(f"id = {i+1}\n")
            out_f.write(f"ul_mimo = {ul_mimo}\n")
            out_f.write(f"qam = {qam}\n")
            out_f.write(f"bw = {fs['bw']}\n")
            out_f.write(f"scs = {scs}\n")
            out_f.write(f"m90 = {m90}\n\n")
            
        for combo_idx, (info, band_params) in enumerate(combos):
            info_dict = {}
            if info:
                for fnum, ftype, val in info:
                    info_dict[f"tag_{fnum}"] = val
            info_str = ", ".join(f"{k} = {v}" for k, v in info_dict.items())
            
            out_f.write("[[combo]]\n")
            out_f.write(f"id = {combo_idx+1}\n")
            out_f.write(f"info = {{ {info_str} }}\n")
            
            for bp_idx, (bp_configs, bcs_mask) in enumerate(band_params):
                out_f.write("  [[combo.variant]]\n")
                out_f.write(f"  bcs_mask = {bcs_mask}\n")
                for bc in bp_configs:
                    raw_band = bc['band']
                    band_num = raw_band - 10000 if raw_band > 10000 else raw_band
                    
                    out_f.write("    [[combo.variant.band]]\n")
                    out_f.write(f'    name = "{band_num}"\n')
                    out_f.write(f"    dl_fs = {bc['dl_fs_idx']}\n")
                    out_f.write(f"    ul_fs = {bc['ul_fs_idx']}\n")
            out_f.write("\n")

def decode_uecap_to_text(pb_data, out_path):
    fields = parse_protobuf(pb_data)
    version = None
    carrier_id = None
    dl_feature_sets = []
    ul_feature_sets = []
    combos = []
    
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'varint':
            version = val
        elif fnum == 2 and ftype == 'varint':
            carrier_id = val
        elif fnum == 6 and ftype == 'length_delimited':
            dl_feature_sets.append(parse_featureset(parse_protobuf(val)))
        elif fnum == 7 and ftype == 'length_delimited':
            ul_feature_sets.append(parse_featureset(parse_protobuf(val)))
        elif fnum == 3 and ftype == 'length_delimited':
            combo_fields = parse_protobuf(val)
            combo_info = None
            band_params = []
            
            for cfnum, cftype, cval in combo_fields:
                if cfnum == 1 and cftype == 'length_delimited':
                    combo_info = parse_protobuf(cval)
                elif cfnum == 2 and cftype == 'length_delimited':
                    bp_fields = parse_protobuf(cval)
                    configs_in_bp = []
                    bcs_mask = 0
                    for bpnum, bptype, bpval in bp_fields:
                        if bpnum == 1 and bptype == 'length_delimited':
                            configs_in_bp.append(parse_band_config(parse_protobuf(bpval)))
                        elif bpnum == 2 and bptype == 'varint':
                            bcs_mask = bpval
                    band_params.append((configs_in_bp, bcs_mask))
            combos.append((combo_info, band_params))
            
    with open(out_path, 'w') as out_f:
        out_f.write(f"VERSION: {version}\n")
        out_f.write(f"CARRIER ID: {carrier_id}\n\n")
        
        out_f.write("=== DOWNLINK FEATURE SETS ===\n")
        for i, fs in enumerate(dl_feature_sets):
            out_f.write(f"  DL FeatureSet #{i+1}: {format_fs_dl_txt(fs)}  (Raw: {fs})\n")
        out_f.write("\n")
        
        out_f.write("=== UPLINK FEATURE SETS ===\n")
        for i, fs in enumerate(ul_feature_sets):
            out_f.write(f"  UL FeatureSet #{i+1}: {format_fs_ul_txt(fs)}  (Raw: {fs})\n")
        out_f.write("\n")
        
        out_f.write("=== BAND COMBINATIONS ===\n")
        for combo_idx, (info, band_params) in enumerate(combos):
            info_str = ", ".join(f"tag_{fnum}={val}" for fnum, ftype, val in info) if info else "None"
            out_f.write(f"Combo #{combo_idx+1} [Info: {info_str}]:\n")
            
            for bp_idx, (bp_configs, bcs_mask) in enumerate(band_params):
                out_f.write(f"  Variant #{bp_idx+1} (BCS Mask: {bcs_mask}):\n")
                for bc in bp_configs:
                    raw_band = bc['band']
                    band_num = raw_band - 10000 if raw_band > 10000 else raw_band
                    
                    # Resolve names
                    dl_desc = ""
                    if bc['dl_fs_idx'] > 0 and bc['dl_fs_idx'] <= len(dl_feature_sets):
                        dl_desc = f"{bc['dl_fs_idx']}: {format_fs_dl_txt(dl_feature_sets[bc['dl_fs_idx']-1])}"
                    else:
                        dl_desc = f"DL Index {bc['dl_fs_idx']} (Unknown)"
                        
                    ul_desc = ""
                    if bc['ul_fs_idx'] > 0:
                        if bc['ul_fs_idx'] <= len(ul_feature_sets):
                            ul_desc = f"{bc['ul_fs_idx']}: {format_fs_ul_txt(ul_feature_sets[bc['ul_fs_idx']-1])}"
                        else:
                            ul_desc = f"UL Index {bc['ul_fs_idx']} (Unknown)"
                    else:
                        ul_desc = "No Uplink"
                        
                    out_f.write(f"    - Band {band_num}:\n")
                    out_f.write(f"        DL: {dl_desc}\n")
                    out_f.write(f"        UL: {ul_desc}\n")
            out_f.write("\n")

def get_band_label(raw_band):
    is_nr = raw_band > 10000
    num = raw_band - 10000 if is_nr else raw_band
    prefix = 'n' if is_nr else 'B'
    return f"{prefix}{num}", is_nr, num

def sort_band_labels(labels):
    parsed = []
    for l in labels:
        is_nr = l.startswith('n')
        num = int(l[1:])
        parsed.append((l, is_nr, num))
    parsed = sorted(parsed, key=lambda x: (x[1], x[2]))
    return [x[0] for x in parsed]

def guess_pixel_model(carrier, combos):
    c_lower = carrier.lower()
    if 'o2_uk' in c_lower:
        if combos >= 460:
            return "Pixel 9 Pro / 9 Pro XL / 9 Pro Fold & Pixel 10 Pro / Pro XL / Pro Fold", "Flagship Pro (Supports dual low-band B20+B28 CA & 4x4 MIMO)"
        elif combos >= 430:
            return "Pixel 9 / Pixel 10 (Standard)", "Standard Flagship (Blocks dual low-band B20+B28 CA, keeps 4x4 MIMO)"
        elif combos >= 200:
            return "Pixel 10a (UK/EU SKU)", "Mid-range A-series (Restricted to 2x2 MIMO, supports Band 40)"
        else:
            return "Pixel 10a (Basic / NA SKU)", "Basic A-series fallback (Restricted to 2x2 MIMO, lacks Band 40)"
    elif 'ee' in c_lower:
        if combos >= 480:
            return "Pixel 9 Pro / 9 Pro XL / 9 Pro Fold & Pixel 10 Pro / Pro XL / Pro Fold", "Flagship Pro (Supports dual low-band CA & 4x4 MIMO)"
        elif combos >= 470:
            return "Pixel 9 / Pixel 10 (Standard)", "Standard Flagship (Blocks dual low-band CA, keeps 4x4 MIMO)"
        elif combos >= 250:
            return "Pixel 10a (UK/EU SKU)", "Mid-range A-series (Restricted to 2x2 MIMO)"
        else:
            return "Pixel 10a (Basic / NA SKU)", "Basic A-series fallback (Restricted to 2x2 MIMO)"
    elif 'vf_uk' in c_lower:
        if combos >= 760:
            return "Pixel 9 Pro / 9 Pro XL / 9 Pro Fold & Pixel 10 Pro / Pro XL / Pro Fold", "Flagship Pro (Supports dual low-band CA & 4x4 MIMO)"
        elif combos >= 530:
            return "Pixel 9 / Pixel 10 (Standard)", "Standard Flagship (Blocks dual low-band CA, keeps 4x4 MIMO)"
        elif combos >= 330:
            return "Pixel 10a (UK/EU SKU)", "Mid-range A-series (Restricted to 2x2 MIMO)"
        else:
            return "Pixel 10a (Basic / NA SKU)", "Basic A-series fallback (Restricted to 2x2 MIMO)"
    elif '3_uk' in c_lower:
        if combos >= 170:
            return "Pixel 9 Pro / 9 Pro XL / 9 Pro Fold & Pixel 10 Pro / Pro XL / Pro Fold", "Flagship Pro (Supports dual low-band CA & 4x4 MIMO)"
        elif combos >= 150:
            return "Pixel 9 / Pixel 10 (Standard)", "Standard Flagship (Blocks dual low-band CA, keeps 4x4 MIMO)"
        elif combos >= 120:
            return "Pixel 10a (UK/EU SKU)", "Mid-range A-series (Restricted to 2x2 MIMO)"
        else:
            return "Pixel 10a (Basic / NA SKU)", "Basic A-series fallback (Restricted to 2x2 MIMO)"
    return "Unknown", "Unknown tier"

def decode_uecap_to_markdown(pb_data, out_path):
    fields = parse_protobuf(pb_data)
    version = None
    carrier_id = None
    dl_feature_sets = []
    ul_feature_sets = []
    combos = []
    
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'varint':
            version = val
        elif fnum == 2 and ftype == 'varint':
            carrier_id = val
        elif fnum == 6 and ftype == 'length_delimited':
            dl_feature_sets.append(parse_featureset(parse_protobuf(val)))
        elif fnum == 7 and ftype == 'length_delimited':
            ul_feature_sets.append(parse_featureset(parse_protobuf(val)))
        elif fnum == 3 and ftype == 'length_delimited':
            combo_fields = parse_protobuf(val)
            combo_info = None
            band_params = []
            
            for cfnum, cftype, cval in combo_fields:
                if cfnum == 1 and cftype == 'length_delimited':
                    combo_info = parse_protobuf(cval)
                elif cfnum == 2 and cftype == 'length_delimited':
                    bp_fields = parse_protobuf(cval)
                    configs_in_bp = []
                    bcs_mask = 0
                    for bpnum, bptype, bpval in bp_fields:
                        if bpnum == 1 and bptype == 'length_delimited':
                            configs_in_bp.append(parse_band_config(parse_protobuf(bpval)))
                        elif bpnum == 2 and bptype == 'varint':
                            bcs_mask = bpval
                    band_params.append((configs_in_bp, bcs_mask))
            combos.append((combo_info, band_params))

    # Analyze max capabilities
    unique_bands = set()
    max_dl_mimo = 1
    max_ul_mimo = 1
    max_dl_qam = 1
    max_ul_qam = 1
    
    for fs in dl_feature_sets:
        if fs['mimo'] > max_dl_mimo: max_dl_mimo = fs['mimo']
        if fs['qam'] > max_dl_qam: max_dl_qam = fs['qam']
    for fs in ul_feature_sets:
        if fs['mimo'] > max_ul_mimo: max_ul_mimo = fs['mimo']
        if fs['qam'] > max_ul_qam: max_ul_qam = fs['qam']
        
    band_details = {}
    
    for combo_info, band_params in combos:
        for bp_configs, bcs_mask in band_params:
            for bc in bp_configs:
                raw_band = bc['band']
                label, is_nr, num = get_band_label(raw_band)
                unique_bands.add(label)
                
                dl_fs_idx = bc['dl_fs_idx']
                ul_fs_idx = bc['ul_fs_idx']
                
                if label not in band_details:
                    band_details[label] = {
                        'is_nr': is_nr, 'num': num,
                        'dl_mimo': 1, 'dl_qam': 1, 'dl_bw': 0,
                        'ul_mimo': 1, 'ul_qam': 1, 'ul_bw': 0
                    }
                    
                if dl_fs_idx > 0 and dl_fs_idx <= len(dl_feature_sets):
                    fs = dl_feature_sets[dl_fs_idx-1]
                    if fs['mimo'] > band_details[label]['dl_mimo']: band_details[label]['dl_mimo'] = fs['mimo']
                    if fs['qam'] > band_details[label]['dl_qam']: band_details[label]['dl_qam'] = fs['qam']
                    if fs['bw'] > band_details[label]['dl_bw']: band_details[label]['dl_bw'] = fs['bw']
                    
                if ul_fs_idx > 0 and ul_fs_idx <= len(ul_feature_sets):
                    fs = ul_feature_sets[ul_fs_idx-1]
                    if fs['mimo'] > band_details[label]['ul_mimo']: band_details[label]['ul_mimo'] = fs['mimo']
                    if fs['qam'] > band_details[label]['ul_qam']: band_details[label]['ul_qam'] = fs['qam']
                    if fs['bw'] > band_details[label]['ul_bw']: band_details[label]['ul_bw'] = fs['bw']

    # Apply standard hardware capability defaults for bands without explicit overrides (resolving 0MHz bandwidths)
    for label, d in band_details.items():
        is_nr = d['is_nr']
        num = d['num']
        
        if d['dl_bw'] == 0:
            if is_nr:
                if num in (77, 78):
                    d['dl_mimo'] = max(d['dl_mimo'], 4)
                    d['dl_bw'] = 100
                    d['dl_qam'] = max(d['dl_qam'], 2)
                elif num == 75:
                    d['dl_mimo'] = max(d['dl_mimo'], 2)
                    d['dl_bw'] = 50
                else:
                    d['dl_mimo'] = max(d['dl_mimo'], 4 if num in (1, 3, 7, 38, 40) else 2)
                    d['dl_bw'] = 20
            else:
                d['dl_mimo'] = max(d['dl_mimo'], 4 if num in (1, 3, 7, 38, 40) else 2)
                d['dl_bw'] = 20
                d['dl_qam'] = max(d['dl_qam'], 2)
                
        if d['ul_bw'] == 0 and num not in (32, 75):
            if is_nr:
                if num in (77, 78):
                    d['ul_bw'] = 100
                    d['ul_qam'] = max(d['ul_qam'], 2)
                else:
                    d['ul_bw'] = 20
            else:
                d['ul_bw'] = 20

    # Classify combos
    lte_ca = []
    nr_ca = []
    en_dc = []
    
    for combo_info, band_params in combos:
        for bp_configs, bcs_mask in band_params:
            bands = []
            for bc in bp_configs:
                raw_band = bc['band']
                bands.append(get_band_label(raw_band))
            bands = sorted(list(set(bands)), key=lambda x: (x[1], x[2]))
            if not bands:
                continue
                
            has_nr = any(x[1] for x in bands)
            has_lte = any(not x[1] for x in bands)
            
            combo_str = " + ".join(x[0] for x in bands)
            
            if has_nr and has_lte:
                en_dc.append(combo_str)
            elif has_nr:
                nr_ca.append(combo_str)
            else:
                lte_ca.append(combo_str)
                
    lte_ca = sorted(list(set(lte_ca)))
    nr_ca = sorted(list(set(nr_ca)))
    en_dc = sorted(list(set(en_dc)))
    
    mimo_dl_str = f"{max_dl_mimo}x{max_dl_mimo}" if max_dl_mimo in (1,2,4,8) else f"{max_dl_mimo} layers"
    mimo_ul_str = "Yes (2x2)" if max_ul_mimo > 1 else "No"
    qam_dl_str = "QAM256" if max_dl_qam == 2 else "QAM64"
    qam_ul_str = "QAM256" if max_ul_qam == 2 else "QAM64"
    
    sorted_labels = sort_band_labels(unique_bands)
    
    filename = os.path.basename(out_path)
    parts = filename.rsplit('_', 1)
    if len(parts) == 2:
        carrier = parts[0]
    else:
        carrier = filename.split('_')[0]
        
    model, tier = guess_pixel_model(carrier, len(combos))
    
    with open(out_path, 'w') as f:
        f.write(f"# UE Capability Summary: {filename.replace('.md', '')}\n\n")
        f.write(f"- **Carrier ID**: {carrier_id if carrier_id is not None else 0}\n")
        f.write(f"- **Modem Config Version**: {version if version is not None else 0}\n")
        f.write(f"- **Likely Device Model**: {model}\n")
        f.write(f"- **Hardware Tier**: {tier}\n")
        f.write(f"- **Supported Bands**: {', '.join(sorted_labels)}\n")
        f.write(f"- **Max DL MIMO**: {mimo_dl_str}\n")
        f.write(f"- **Max UL MIMO**: {mimo_ul_str}\n")
        f.write(f"- **Max Modulation**: {qam_dl_str} DL / {qam_ul_str} UL\n")
        f.write(f"- **Total Combinations**: {len(combos)} ({len(lte_ca)} LTE-CA, {len(nr_ca)} NR-CA, {len(en_dc)} EN-DC)\n\n")
        
        f.write("## Band Capabilities\n\n")
        f.write("| Band | Max DL MIMO | Max DL BW | Max DL QAM | Max UL MIMO | Max UL BW | Max UL QAM |\n")
        f.write("|------|-------------|-----------|------------|-------------|-----------|------------|\n")
        for label in sorted_labels:
            d = band_details[label]
            m_dl = f"{d['dl_mimo']}x{d['dl_mimo']}"
            m_ul = "2x2" if d['ul_mimo'] > 1 else "1x1"
            q_dl = "QAM256" if d['dl_qam'] == 2 else "QAM64"
            q_ul = "QAM256" if d['ul_qam'] == 2 else "QAM64"
            f.write(f"| {label:<4} | {m_dl:<11} | {d['dl_bw']:>3} MHz  | {q_dl:<10} | {m_ul:<11} | {d['ul_bw']:>3} MHz  | {q_ul:<10} |\n")
            
        f.write("\n## Combinations List\n\n")
        if nr_ca:
            f.write("### 5G NR Carrier Aggregation (NR-CA)\n")
            for c in nr_ca:
                f.write(f"- {c}\n")
            f.write("\n")
            
        if en_dc:
            f.write("### Dual Connectivity (EN-DC)\n")
            for c in en_dc:
                f.write(f"- {c}\n")
            f.write("\n")
            
        if lte_ca:
            f.write("### LTE Carrier Aggregation (LTE-CA)\n")
            for c in lte_ca:
                f.write(f"- {c}\n")
            f.write("\n")

def bcd_to_plmn(val):
    b1 = val & 0xff
    b2 = (val >> 8) & 0xff
    b3 = (val >> 16) & 0xff
    
    # BCD layout:
    # b1: D2 D1
    # b2: D6 D3
    # b3: D5 D4
    d1 = b1 & 0xf
    d2 = (b1 >> 4) & 0xf
    d3 = b2 & 0xf
    d6 = (b2 >> 4) & 0xf
    d4 = b3 & 0xf
    d5 = (b3 >> 4) & 0xf
    
    mcc = f"{d4}{d5}{d3}"
    if d6 == 0xf:
        mnc = f"{d1}{d2}"
    else:
        mnc = f"{d1}{d2}{d6}"
    return f"{mcc}-{mnc}"

def decode_ap_plmn_mapping_toml(data, out_path):
    fields = parse_protobuf(data)
    with open(out_path, 'w') as f:
        f.write("# AP PLMN MAPPING\n\n")
        for fnum, ftype, val in fields:
            if fnum == 1 and ftype == 'length_delimited':
                entry_fields = parse_protobuf(val)
                plmns = []
                profile = ""
                profile_id = 0
                for efnum, eftype, eval in entry_fields:
                    if efnum == 1 and eftype == 'varint':
                        try:
                            plmns.append(bcd_to_plmn(eval))
                        except Exception:
                            plmns.append(str(eval))
                    elif efnum == 2 and eftype == 'varint':
                        profile_id = eval
                    elif efnum == 3 and eftype == 'length_delimited':
                        profile = eval.decode('utf-8', errors='ignore')
                if profile or plmns:
                    f.write("[[mapping]]\n")
                    f.write(f'profile = "{profile}"\n')
                    f.write(f'profile_id = {profile_id}\n')
                    plmns_str = ", ".join(f'"{p}"' for p in plmns)
                    f.write(f'plmns = [{plmns_str}]\n\n')

def decode_ap_plmn_mapping_txt(data, out_path):
    fields = parse_protobuf(data)
    with open(out_path, 'w') as f:
        f.write("=== AP PLMN MAPPING ===\n\n")
        for fnum, ftype, val in fields:
            if fnum == 1 and ftype == 'length_delimited':
                entry_fields = parse_protobuf(val)
                plmns = []
                profile = ""
                profile_id = 0
                for efnum, eftype, eval in entry_fields:
                    if efnum == 1 and eftype == 'varint':
                        try:
                            plmns.append(bcd_to_plmn(eval))
                        except Exception:
                            plmns.append(str(eval))
                    elif efnum == 2 and eftype == 'varint':
                        profile_id = eval
                    elif efnum == 3 and eftype == 'length_delimited':
                        profile = eval.decode('utf-8', errors='ignore')
                if profile or plmns:
                    f.write(f"Profile: {profile:<15} (ID: {profile_id:<3}) -> PLMNs: {', '.join(plmns)}\n")

def process_image(fz, countries, out_format, export_bin, out_base_dir):
    from ext4 import Volume
    info = parse_factory_zip_name(fz)
    if not info:
        return
        
    print(f"\n================ Processing {info['device']} (Codename: {info['codename']}) ================")
    
    if not os.path.exists(fz):
        print(f"Error: Factory zip file '{fz}' does not exist.")
        return
        
    inner_zip_name = None
    with zipfile.ZipFile(fz) as outer:
        namelist = outer.namelist()
        for name in namelist:
            if name.endswith('.zip') and f"image-{info['codename']}" in name:
                inner_zip_name = name
                break
        if not inner_zip_name:
            for name in namelist:
                if name.endswith('.zip') and 'image-' in name:
                    inner_zip_name = name
                    break
                    
    if not inner_zip_name:
        print(f"Error: Inner image ZIP not found in {fz}.")
        return
        
    temp_img_path = f"temp_vendor_uecap_{info['codename']}.img"
    print(f"Extracting vendor.img from {inner_zip_name}...")
    try:
        with zipfile.ZipFile(fz) as outer:
            with outer.open(inner_zip_name) as inner_file:
                with zipfile.ZipFile(inner_file) as inner_zip:
                    with inner_zip.open('vendor.img') as source, open(temp_img_path, 'wb') as target:
                        while True:
                            chunk = source.read(4 * 1024 * 1024)
                            if not chunk:
                                break
                            target.write(chunk)
                            
        with open(temp_img_path, 'rb') as f:
            vol = Volume(f)
            
            uecap_path = '/firmware/uecapconfig'
            try:
                ue_inode = vol.inode_at(uecap_path)
                target_dir = os.path.join(out_base_dir, info['dir_name'], 'uecaps')
                bin_dir = os.path.join(target_dir, 'bin')
                pb_dir = os.path.join(target_dir, 'binarypb')
                md_dir = os.path.join(target_dir, 'markdown')
                
                os.makedirs(target_dir, exist_ok=True)
                if export_bin:
                    os.makedirs(bin_dir, exist_ok=True)
                    os.makedirs(pb_dir, exist_ok=True)
                if out_format != 'none':
                    os.makedirs(md_dir, exist_ok=True)
                
                extracted_count = 0
                for entry, ftype in ue_inode.opendir():
                    entry_name = getattr(entry, 'name_str', None) or getattr(entry, 'name', b'').decode('utf-8', errors='ignore')
                    if entry_name in ('.', '..'):
                        continue
                        
                    # Filter logic:
                    # Always include ap_plmn_mapping
                    is_target = False
                    if entry_name == 'ap_plmn_mapping.binarypb':
                        is_target = True
                    elif 'all' in countries:
                        is_target = True
                    else:
                        # Extract the profile prefix (e.g. O2_UK, EE, VF_UK, etc.)
                        parts = entry_name.rsplit('_', 1)
                        if len(parts) == 2:
                            prefix = parts[0].lower()
                        else:
                            prefix = entry_name.lower().replace('.binarypb', '')
                            
                        for country in countries:
                            suffixes = COUNTRY_TO_SUFFIX.get(country, [f"_{country}"])
                            for suffix in suffixes:
                                s_clean = suffix.lower()
                                if s_clean == 'ee':
                                    if prefix == 'ee':
                                        is_target = True
                                        break
                                elif s_clean.startswith('_'):
                                    if prefix.endswith(s_clean):
                                        is_target = True
                                        break
                                else:
                                    if s_clean in prefix:
                                        is_target = True
                                        break
                            if is_target:
                                break
                                
                    if not is_target:
                        continue
                        
                    try:
                        child_inode = vol.inodes[entry.inode]
                        if type(child_inode).__name__ == 'File':
                            data = child_inode.open().read()
                            
                            # File-level duplicate and content check
                            check_path = os.path.join(pb_dir, entry_name) if export_bin else None
                            if not check_path and out_format != 'none':
                                ext = '.toml' if out_format == 'toml' else ('.md' if out_format == 'markdown' else '.txt')
                                check_path = os.path.join(md_dir, entry_name.replace('.binarypb', ext))
                                
                            if check_path and os.path.exists(check_path):
                                try:
                                    if check_path.endswith(('.binarypb', '.bin')):
                                        with open(check_path, 'rb') as old_f:
                                            old_data = old_f.read()
                                        if old_data == data:
                                            continue
                                        else:
                                            print(f"  [Warning] {entry_name} exists but contents differ between device images! Overwriting.")
                                except Exception:
                                    pass
                            
                            # 1. Export binarypb (compatible with hennes.xyz)
                            if export_bin:
                                # Save with .binarypb
                                pb_out_path = os.path.join(pb_dir, entry_name)
                                with open(pb_out_path, 'wb') as out_pb:
                                    out_pb.write(data)
                                # Save also as .bin for simple browser uploads
                                bin_out_name = entry_name.replace('.binarypb', '.bin')
                                bin_out_path = os.path.join(bin_dir, bin_out_name)
                                with open(bin_out_path, 'wb') as out_bin:
                                    out_bin.write(data)
                                    
                            # 2. Decode files into requested format
                            if out_format != 'none':
                                if out_format == 'toml':
                                    ext = '.toml'
                                elif out_format == 'markdown':
                                    ext = '.md'
                                else:
                                    ext = '.txt'
                                    
                                out_name = entry_name.replace('.binarypb', ext)
                                out_path = os.path.join(md_dir, out_name)
                                
                                if entry_name == 'ap_plmn_mapping.binarypb':
                                    if out_format == 'toml':
                                        decode_ap_plmn_mapping_toml(data, out_path)
                                    elif out_format == 'markdown':
                                        decode_ap_plmn_mapping_toml(data, out_path)
                                    else:
                                        decode_ap_plmn_mapping_txt(data, out_path)
                                else:
                                    try:
                                        if out_format == 'toml':
                                            decode_uecap_to_toml(data, out_path)
                                        elif out_format == 'markdown':
                                            decode_uecap_to_markdown(data, out_path)
                                        else:
                                            decode_uecap_to_text(data, out_path)
                                    except Exception as dec_err:
                                        with open(out_path, 'w') as err_f:
                                            err_f.write(f"# Failed to parse uecap: {dec_err}\n")
                                            
                            extracted_count += 1
                    except Exception as child_err:
                        print(f"  Failed to process {entry_name}: {child_err}")
                        
                print(f"🎉 Successfully extracted {extracted_count} carrier uecap file(s) to {target_dir}")
                
            except Exception as e:
                print(f"Could not read {uecap_path} in vendor.img: {e}")
                
    finally:
        if os.path.exists(temp_img_path):
            os.remove(temp_img_path)

def main():
    parser = argparse.ArgumentParser(
        description="Extract and decode UE capability config (uecapconfig) files from Pixel vendor.img"
    )
    parser.add_argument(
        '-i', '--image',
        help="Path to a specific factory image ZIP file. If omitted, the script scans the current directory."
    )
    parser.add_argument(
        '-c', '--country',
        default='gb',
        help="Comma-separated country code(s) of carriers to extract (e.g. 'gb', 'us,de'). Use 'all' to extract all. Default is 'gb' (United Kingdom / UK)."
    )
    parser.add_argument(
        '-f', '--format',
        choices=['markdown', 'toml', 'text', 'none'],
        default='markdown',
        help="Output decoded text format. Choices are 'markdown', 'toml', 'text', or 'none'. Default is 'markdown'."
    )
    parser.add_argument(
        '--no-bin',
        action='store_true',
        help="Disable exporting raw binarypb/bin files (which are compatible with uecaps.hennes.xyz)."
    )
    parser.add_argument(
        '-o', '--output',
        default='extracted',
        help="Output base directory. Default is 'extracted'."
    )
    
    args = parser.parse_args()
    
    countries = [c.strip().lower() for c in args.country.split(',')]
    out_base_dir = os.path.abspath(args.output)
    export_bin = not args.no_bin
    
    if args.image:
        if not os.path.exists(args.image):
            print(f"Error: The specified file '{args.image}' does not exist.")
            sys.exit(1)
        process_image(args.image, countries, args.format, export_bin, out_base_dir)
    else:
        print("Scanning current directory for factory image ZIPs (*-factory-*.zip)...")
        factory_zips = glob.glob("*-factory-*.zip")
        if not factory_zips:
            print("No factory image ZIP files found in the current directory.")
            print("Please provide a path using --image, or place factory ZIPs in this directory.")
            sys.exit(1)
            
        print(f"Found {len(factory_zips)} factory image(s).")
        for fz in factory_zips:
            process_image(fz, countries, args.format, export_bin, out_base_dir)
            
    print("\nExtraction job complete.")

if __name__ == "__main__":
    main()
