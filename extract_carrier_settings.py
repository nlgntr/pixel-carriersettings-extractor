# /// script
# dependencies = [
#   "ext4",
# ]
# ///

import os
import sys
import re
import glob
import struct
import zipfile
import argparse

# Mapping of Pixel codenames to friendly names
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

def parse_android_version(build_id):
    """
    Deduce Android version from build ID prefix.
    """
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
    """
    Extract codename, build ID, and date from the factory image zip name.
    Example: stallion-cp2a.260705.006-factory-e7631ea9.zip
    """
    basename = os.path.basename(filename)
    match = re.match(r'^([a-z0-9_]+)-([a-z0-9\.]+)-factory-[a-f0-9]+\.zip$', basename)
    if not match:
        # Graceful fallback: use the filename itself if naming convention differs
        clean_name = re.sub(r'[\.\s\-]', '_', os.path.splitext(basename)[0]).lower()
        return {
            'codename': clean_name,
            'build_id': None,
            'device': clean_name,
            'android_version': 'unknown',
            'dir_name': f"extracted_{clean_name}"
        }
    
    codename = match.group(1)
    build_id = match.group(2)
    
    # Try to parse date from build ID (e.g., cp2a.260705.006 -> 260705)
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
    
    device_clean = device_friendly.lower().replace(' ', '_')
    device_dir = f"{device_clean}_{codename}"
    
    return {
        'codename': codename,
        'build_id': build_id,
        'device': device_friendly,
        'android_version': android_ver,
        'dir_name': dir_name,
        'device_dir': device_dir
    }

def parse_protobuf(data):
    pos = 0
    fields = []
    while pos < len(data):
        key = 0
        shift = 0
        while True:
            if pos >= len(data):
                break
            b = data[pos]
            pos += 1
            key |= (b & 0x7f) << shift
            if not (b & 0x80):
                break
            shift += 7
        if pos >= len(data) and key == 0:
            break
        
        field_num = key >> 3
        wire_type = key & 7
        
        if wire_type == 0:
            val = 0
            shift = 0
            while True:
                if pos >= len(data):
                    break
                b = data[pos]
                pos += 1
                val |= (b & 0x7f) << shift
                if not (b & 0x80):
                    break
                shift += 7
            fields.append((field_num, 'varint', val))
        elif wire_type == 2:
            length = 0
            shift = 0
            while True:
                if pos >= len(data):
                    break
                b = data[pos]
                pos += 1
                length |= (b & 0x7f) << shift
                if not (b & 0x80):
                    break
                shift += 7
            if pos + length <= len(data):
                val = data[pos:pos+length]
                pos += length
                fields.append((field_num, 'length_delimited', val))
            else:
                break
        elif wire_type == 5:
            if pos + 4 <= len(data):
                val = struct.unpack('<I', data[pos:pos+4])[0]
                pos += 4
                fields.append((field_num, '32bit', val))
            else:
                break
        elif wire_type == 1:
            if pos + 8 <= len(data):
                val = struct.unpack('<Q', data[pos:pos+8])[0]
                pos += 8
                fields.append((field_num, '64bit', val))
            else:
                break
        else:
            break
    return fields

def parse_timestamp(data):
    fields = parse_protobuf(data)
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'varint':
            return val
    return None

def parse_apn_item(data):
    fields = parse_protobuf(data)
    apn = {}
    types = []
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            apn['name'] = val.decode('utf-8', errors='ignore')
        elif fnum == 2 and ftype == 'length_delimited':
            apn['value'] = val.decode('utf-8', errors='ignore')
        elif fnum == 3 and ftype == 'varint':
            enum_map = {
                0: "all", 1: "default", 2: "mms", 3: "supl", 4: "dun",
                5: "hipri", 6: "fota", 7: "ims", 8: "cbs", 9: "ia",
                10: "emergency", 11: "xcap", 12: "ut", 13: "rcs"
            }
            types.append(enum_map.get(val, str(val)))
        elif fnum == 4 and ftype == 'length_delimited':
            apn['bearer_bitmask'] = val.decode('utf-8', errors='ignore')
        elif fnum == 5 and ftype == 'length_delimited':
            apn['server'] = val.decode('utf-8', errors='ignore')
        elif fnum == 6 and ftype == 'length_delimited':
            apn['proxy'] = val.decode('utf-8', errors='ignore')
        elif fnum == 7 and ftype == 'length_delimited':
            apn['port'] = val.decode('utf-8', errors='ignore')
        elif fnum == 8 and ftype == 'length_delimited':
            apn['user'] = val.decode('utf-8', errors='ignore')
        elif fnum == 9 and ftype == 'length_delimited':
            apn['password'] = val.decode('utf-8', errors='ignore')
        elif fnum == 10 and ftype == 'varint':
            apn['authtype'] = val
        elif fnum == 11 and ftype == 'length_delimited':
            apn['mmsc'] = val.decode('utf-8', errors='ignore')
        elif fnum == 12 and ftype == 'length_delimited':
            apn['mmsc_proxy'] = val.decode('utf-8', errors='ignore')
        elif fnum == 13 and ftype == 'length_delimited':
            apn['mmsc_proxy_port'] = val.decode('utf-8', errors='ignore')
        elif fnum == 14 and ftype == 'varint':
            enum_map = {0: "ip", 1: "ipv6", 2: "ipv4v6", 3: "ppp", 4: "non_ip"}
            apn['protocol'] = enum_map.get(val, str(val))
        elif fnum == 15 and ftype == 'varint':
            enum_map = {0: "ip", 1: "ipv6", 2: "ipv4v6", 3: "ppp", 4: "non_ip"}
            apn['roaming_protocol'] = enum_map.get(val, str(val))
        elif fnum == 16 and ftype == 'varint':
            apn['mtu'] = val
        elif fnum == 17 and ftype == 'varint':
            apn['profile_id'] = val
        elif fnum == 18 and ftype == 'varint':
            apn['max_conns'] = val
        elif fnum == 19 and ftype == 'varint':
            apn['wait_time'] = val
        elif fnum == 20 and ftype == 'varint':
            apn['max_conns_time'] = val
        elif fnum == 22 and ftype == 'varint':
            apn['modem_cognitive'] = bool(val)
        elif fnum == 23 and ftype == 'varint':
            apn['user_visible'] = bool(val)
        elif fnum == 24 and ftype == 'varint':
            apn['user_editable'] = bool(val)
        elif fnum == 25 and ftype == 'varint':
            apn['apn_set_id'] = val
        elif fnum == 26 and ftype == 'varint':
            enum_map = {0: "skip_464xlat_default", 1: "skip_464xlat_disable", 2: "skip_464xlat_enable"}
            apn['skip_464xlat'] = enum_map.get(val, str(val))
        elif fnum == 27 and ftype == 'length_delimited':
            apn['field27'] = val.decode('utf-8', errors='ignore')
        elif fnum == 28 and ftype == 'varint':
            apn['field28'] = val
        elif fnum == 30 and ftype == 'varint':
            apn['field30'] = val
        elif fnum == 31 and ftype == 'varint':
            apn['field31'] = val
            
    if types:
        apn['type'] = types
    return apn

def parse_carrier_apns(data):
    fields = parse_protobuf(data)
    apns = []
    for fnum, ftype, val in fields:
        if fnum == 2 and ftype == 'length_delimited':
            apns.append(parse_apn_item(val))
    return apns

def parse_text_array(data):
    fields = parse_protobuf(data)
    items = []
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            items.append(val.decode('utf-8', errors='ignore'))
    return items

def parse_int_array(data):
    fields = parse_protobuf(data)
    items = []
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'varint':
            items.append(val)
    return items

def parse_config_value(fnum, ftype, val):
    if fnum == 2 and ftype == 'length_delimited':
        return 'text_value', val.decode('utf-8', errors='ignore')
    elif fnum == 3 and ftype == 'varint':
        return 'int_value', struct.unpack('<i', struct.pack('<I', val & 0xffffffff))[0]
    elif fnum == 4 and ftype == 'varint':
        return 'long_value', struct.unpack('<q', struct.pack('<Q', val & 0xffffffffffffffff))[0]
    elif fnum == 5 and ftype == 'varint':
        return 'bool_value', bool(val)
    elif fnum == 6 and ftype == 'length_delimited':
        return 'text_array', parse_text_array(val)
    elif fnum == 7 and ftype == 'length_delimited':
        return 'int_array', parse_int_array(val)
    elif fnum == 8 and ftype == 'length_delimited':
        return 'bundle', parse_carrier_config(val)
    elif fnum == 9 and ftype == '64bit':
        return 'double_value', struct.unpack('<d', struct.pack('<Q', val))[0]
    return None, None

def parse_config_item(data):
    fields = parse_protobuf(data)
    key = ""
    val_type = None
    val_data = None
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            key = val.decode('utf-8', errors='ignore')
        else:
            t, v = parse_config_value(fnum, ftype, val)
            if t is not None:
                val_type = t
                val_data = v
    return key, val_type, val_data

def parse_carrier_config(data):
    fields = parse_protobuf(data)
    configs = []
    for fnum, ftype, val in fields:
        if fnum == 2 and ftype == 'length_delimited':
            k, t, v = parse_config_item(val)
            if k:
                configs.append((k, t, v))
    return configs

def build_config_dict(configs):
    config_dict = {}
    namespaces = ['apn', 'bsf', 'gps', 'ims', 'imsemergency', 'iwlan', 'mms', 'rcs']
    
    for key, val_type, val_data in configs:
        prefix = ""
        rest = key
        for ns in namespaces:
            if key.startswith(f"{ns}."):
                prefix = ns
                rest = key[len(ns)+1:]
                break
                
        clean_key = rest
        is_known_suffix = False
        suffixes = ['_bool', '_int', '_long', '_string', '_text_array', '_int_array']
        for s in suffixes:
            if rest.endswith(s):
                clean_key = rest[:-len(s)]
                is_known_suffix = True
                break
                
        final_val = val_data
        if val_type == 'bundle':
            final_val = build_config_dict(val_data)
            
        if not is_known_suffix and val_type != 'bundle':
            kind_map = {
                'text_value': 'string',
                'int_value': 'int',
                'long_value': 'long',
                'bool_value': 'bool',
                'text_array': 'text_array',
                'int_array': 'int_array',
                'double_value': 'double'
            }
            final_val = {
                'kind': kind_map.get(val_type, 'unknown'),
                'value': val_data
            }
            
        if prefix:
            if prefix not in config_dict:
                config_dict[prefix] = {}
            config_dict[prefix][clean_key] = final_val
        else:
            config_dict[clean_key] = final_val
            
    return config_dict

def serialize_to_toml_string(carrier_id_rules, cs_dict):
    lines = []
    
    if carrier_id_rules:
        for r in carrier_id_rules:
            lines.append("[[carrier_id]]")
            lines.append(f'mcc_mnc = "{r["mcc_mnc"]}"')
            if 'mvno_data' in r:
                lines.append("[carrier_id.mvno_data]")
                lines.append(f'kind  = "{r["mvno_data"]["kind"]}"')
                lines.append(f'value = "{r["mvno_data"]["value"]}"')
            if 'gid2' in r:
                lines.append(f'gid2 = "{r["gid2"]}"')
            lines.append("")
            
    lines.append("[settings]")
    if 'version' in cs_dict:
        lines.append(f"version = {cs_dict['version']}")
    lines.append("")
    
    if 'apns' in cs_dict and cs_dict['apns']:
        for apn in cs_dict['apns']:
            lines.append("[[settings.apns.apn]]")
            for key in ['name', 'value', 'type', 'protocol', 'roaming_protocol', 'authtype', 'bearer_bitmask']:
                if key in apn:
                    val = apn[key]
                    if isinstance(val, list):
                        val_str = ", ".join(f'"{x}"' for x in val)
                        lines.append(f"{key} = [{val_str}]")
                    elif isinstance(val, bool):
                        lines.append(f"{key} = {str(val).lower()}")
                    elif isinstance(val, int):
                        lines.append(f"{key} = {val}")
                    else:
                        lines.append(f'{key} = "{val}"')
            for key, val in sorted(apn.items()):
                if key in ['name', 'value', 'type', 'protocol', 'roaming_protocol', 'authtype', 'bearer_bitmask']:
                    continue
                if isinstance(val, bool):
                    lines.append(f"{key} = {str(val).lower()}")
                elif isinstance(val, int):
                    lines.append(f"{key} = {val}")
                else:
                    lines.append(f'{key} = "{val}"')
            lines.append("")
            
    if 'configs' in cs_dict and cs_dict['configs']:
        lines.append("[settings.config]")
        cfg = build_config_dict(cs_dict['configs'])
        
        flat_keys = {}
        namespaces = {}
        for k, v in cfg.items():
            if isinstance(v, dict) and k in ['apn', 'bsf', 'gps', 'ims', 'imsemergency', 'iwlan', 'mms', 'rcs']:
                namespaces[k] = v
            else:
                flat_keys[k] = v
                
        def format_toml_value(val):
            if isinstance(val, dict):
                if 'kind' in val and 'value' in val:
                    kind = val['kind']
                    v = val['value']
                    if isinstance(v, str):
                        return f'{{ kind = "{kind}", value = "{v}" }}'
                    elif isinstance(v, bool):
                        return f'{{ kind = "{kind}", value = {str(v).lower()} }}'
                    elif isinstance(v, list):
                        if kind == 'text_array':
                            list_str = ", ".join(f'"{x}"' for x in v)
                            return f'{{ kind = "{kind}", value = [{list_str}] }}'
                        else:
                            list_str = ", ".join(str(x) for x in v)
                            return f'{{ kind = "{kind}", value = [{list_str}] }}'
                    else:
                        return f'{{ kind = "{kind}", value = {v} }}'
                else:
                    items = []
                    for bk, bv in sorted(val.items()):
                        items.append(f'{bk} = {format_toml_value(bv)}')
                    return f"{{ {', '.join(items)} }}"
            elif isinstance(val, str):
                return f'"{val}"'
            elif isinstance(val, bool):
                return str(val).lower()
            elif isinstance(val, list):
                if all(isinstance(x, str) for x in val):
                    list_str = ", ".join(f'"{x}"' for x in val)
                    return f"[{list_str}]"
                else:
                    list_str = ", ".join(str(x) for x in val)
                    return f"[{list_str}]"
            else:
                return str(val)
                
        for k, v in sorted(flat_keys.items()):
            lines.append(f"{k} = {format_toml_value(v)}")
        lines.append("")
        
        for ns, table in sorted(namespaces.items()):
            lines.append(f"[settings.config.{ns}]")
            for k, v in sorted(table.items()):
                lines.append(f"{k} = {format_toml_value(v)}")
            lines.append("")
            
    return "\n".join(lines).strip() + "\n"

def parse_carrier_id(data):
    fields = parse_protobuf(data)
    cid = {}
    mvno = {}
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            cid['mcc_mnc'] = val.decode('utf-8', errors='ignore')
        elif fnum == 2 and ftype == 'length_delimited':
            mvno['kind'] = 'spn'
            mvno['value'] = val.decode('utf-8', errors='ignore')
        elif fnum == 3 and ftype == 'length_delimited':
            mvno['kind'] = 'imsi'
            mvno['value'] = val.decode('utf-8', errors='ignore')
        elif fnum == 4 and ftype == 'length_delimited':
            mvno['kind'] = 'gid1'
            mvno['value'] = val.decode('utf-8', errors='ignore')
        elif fnum == 6 and ftype == 'length_delimited':
            cid['gid2'] = val.decode('utf-8', errors='ignore')
            
    if mvno:
        cid['mvno_data'] = mvno
    return cid

def parse_carrier_map(data):
    fields = parse_protobuf(data)
    name = ""
    ids = []
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            name = val.decode('utf-8', errors='ignore')
        elif fnum == 2 and ftype == 'length_delimited':
            ids.append(parse_carrier_id(val))
    return name, ids

def load_carrier_list(path):
    if not os.path.exists(path):
        return {}
    with open(path, 'rb') as f:
        data = f.read()
    fields = parse_protobuf(data)
    rules = {}
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            name, ids = parse_carrier_map(val)
            if name:
                if name not in rules:
                    rules[name] = []
                rules[name].extend(ids)
    return rules

def decode_pb_to_toml_native(pb_data, carrier_list_rules=None):
    fields = parse_protobuf(pb_data)
    cs_dict = {}
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            cs_dict['canonical_name'] = val.decode('utf-8', errors='ignore')
        elif fnum == 2 and ftype == 'varint':
            cs_dict['version'] = val
        elif fnum == 3 and ftype == 'length_delimited':
            cs_dict['apns'] = parse_carrier_apns(val)
        elif fnum == 4 and ftype == 'length_delimited':
            cs_dict['configs'] = parse_carrier_config(val)
            
    name = cs_dict.get('canonical_name', '')
    rules = []
    if carrier_list_rules and name in carrier_list_rules:
        rules = carrier_list_rules[name]
        
    return name, serialize_to_toml_string(rules, cs_dict)

def process_image(fz, countries, out_base_dir):
    """
    Processes a single factory image and extracts the relevant carrier setting pb files.
    """
    from ext4 import Volume

    info = parse_factory_zip_name(fz)
    if not info:
        print(f"\nSkipping {fz}: Could not parse info from filename.")
        return
        
    target_dir = os.path.join(out_base_dir, info['dir_name'], 'carrier_settings', info['device_dir'])
    print(f"\n================ Processing {info['device']} (Codename: {info['codename']}) ================")
    if info['build_id']:
        print(f"Build ID: {info['build_id']}")
    print(f"Target Directory: {os.path.join(info['dir_name'], 'carrier_settings', info['device_dir'])}")
    
    # Verify the outer zip exists
    if not os.path.exists(fz):
        print(f"Error: Factory zip file '{fz}' does not exist.")
        return
        
    # Locate the inner zip
    inner_zip_name = None
    try:
        with zipfile.ZipFile(fz) as outer:
            namelist = outer.namelist()
            for name in namelist:
                if name.endswith('.zip') and f"image-{info['codename']}" in name:
                    inner_zip_name = name
                    break
            # Fallback if the codename matching doesn't find it directly
            if not inner_zip_name:
                for name in namelist:
                    if name.endswith('.zip') and 'image-' in name:
                        inner_zip_name = name
                        break
    except zipfile.BadZipFile:
        print(f"Error: '{fz}' is not a valid zip file or is corrupted.")
        return
        
    if not inner_zip_name:
        print(f"Error: Could not find inner image ZIP in {fz}.")
        return
        
    temp_img_path = f"temp_product_{info['codename']}.img"
    print(f"Extracting product.img from {inner_zip_name}...")
    
    try:
        with zipfile.ZipFile(fz) as outer:
            with outer.open(inner_zip_name) as inner_file:
                with zipfile.ZipFile(inner_file) as inner_zip:
                    if 'product.img' not in inner_zip.namelist():
                        print("Error: product.img not found inside the inner image ZIP.")
                        return
                    with inner_zip.open('product.img') as source, open(temp_img_path, 'wb') as target:
                        while True:
                            chunk = source.read(4 * 1024 * 1024)
                            if not chunk:
                                break
                            target.write(chunk)
        print("Extracted product.img successfully.")
    except Exception as e:
        print(f"Error during extraction: {e}")
        if os.path.exists(temp_img_path):
            os.remove(temp_img_path)
        return
        
    # Mount and extract CarrierSettings
    print("Opening ext4 volume of product.img...")
    try:
        with open(temp_img_path, 'rb') as f:
            vol = Volume(f)
            cs_path = '/etc/CarrierSettings'
            
            try:
                cs_inode = vol.inode_at(cs_path)
            except Exception as e:
                print(f"CarrierSettings directory not found in product.img: {e}")
                return
                
            target_dir = os.path.join(out_base_dir, info['dir_name'], 'carrier_settings', info['device_dir'])
            os.makedirs(target_dir, exist_ok=True)
            
            extracted_count = 0
            for entry, ftype in cs_inode.opendir():
                entry_name = getattr(entry, 'name_str', None)
                if not entry_name:
                    entry_name = getattr(entry, 'name', b'').decode('utf-8', errors='ignore')
                    
                if entry_name in ('.', '..'):
                    continue
                
                # Check filter conditions
                is_target = False
                if entry_name == 'carrier_list.pb':
                    is_target = True  # Always extract carrier_list.pb
                elif 'all' in countries:
                    is_target = entry_name.endswith('.pb')
                else:
                    for country in countries:
                        if entry_name.endswith(f'_{country.lower()}.pb'):
                            is_target = True
                            break
                
                if is_target:
                    try:
                        child_inode = vol.inodes[entry.inode]
                        data = child_inode.open().read()
                        
                        out_filepath = os.path.join(target_dir, entry_name)
                        if os.path.exists(out_filepath):
                            try:
                                with open(out_filepath, 'rb') as old_f:
                                    old_data = old_f.read()
                                if old_data == data:
                                    continue
                            except Exception:
                                pass
                        with open(out_filepath, 'wb') as out_f:
                            out_f.write(data)
                        print(f"  Extracted: {entry_name} ({len(data)} bytes)")
                        extracted_count += 1
                    except Exception as file_err:
                        print(f"  Failed to extract {entry_name}: {file_err}")
                        
            print(f"Successfully extracted {extracted_count} carrier setting file(s) to: {target_dir}")
            
    except Exception as e:
        print(f"Failed to process ext4 volume: {e}")
    finally:
        if os.path.exists(temp_img_path):
            print(f"Cleaning up temporary file {temp_img_path}...")
            os.remove(temp_img_path)
            
    # Native Python decode to TOML
    carrier_list_pb = os.path.join(target_dir, "carrier_list.pb")
    rules = {}
    if os.path.exists(carrier_list_pb):
        try:
            rules = load_carrier_list(carrier_list_pb)
            print(f"Loaded carrier match rules from carrier_list.pb")
        except Exception as e:
            print(f"Warning: Failed to parse carrier_list.pb for rules: {e}")
            
    toml_dir = os.path.join(target_dir, "toml")
    os.makedirs(toml_dir, exist_ok=True)
    
    pb_files = glob.glob(os.path.join(target_dir, "*.pb"))
    decoded_count = 0
    for pb_file in pb_files:
        basename = os.path.basename(pb_file)
        if basename == "carrier_list.pb":
            continue
        try:
            with open(pb_file, 'rb') as f:
                pb_data = f.read()
            name, toml_str = decode_pb_to_toml_native(pb_data, rules)
            if not name:
                name = basename.replace('.pb', '')
            toml_path = os.path.join(toml_dir, f"{name}.toml")
            with open(toml_path, 'w') as out_toml:
                out_toml.write(toml_str)
            decoded_count += 1
        except Exception as dec_err:
            print(f"  Failed to decode {basename} natively: {dec_err}")
    print(f"🎉 Natively decoded {decoded_count} carrier configuration(s) to TOML in: {toml_dir}")

def main():
    parser = argparse.ArgumentParser(
        description="Extract CarrierSettings .pb files from Google Pixel factory images."
    )
    parser.add_argument(
        '-i', '--image',
        help="Path to a specific factory image ZIP file. If omitted, the script scans the current directory."
    )
    parser.add_argument(
        '-c', '--country',
        default='gb',
        help="Comma-separated country code(s) of carriers to extract (e.g. 'gb', 'us,de'). Use 'all' to extract all. Default is 'gb' (United Kingdom)."
    )
    parser.add_argument(
        '-o', '--output',
        default='extracted',
        help="Output base directory. Default is 'extracted'."
    )
    
    args = parser.parse_args()
    
    # Parse countries
    countries = [c.strip().lower() for c in args.country.split(',')]
    
    out_base_dir = os.path.abspath(args.output)
    
    if args.image:
        if not os.path.exists(args.image):
            print(f"Error: The specified file '{args.image}' does not exist.")
            sys.exit(1)
        process_image(args.image, countries, out_base_dir)
    else:
        print("Scanning current directory for factory image ZIPs (*-factory-*.zip)...")
        factory_zips = glob.glob("*-factory-*.zip")
        if not factory_zips:
            print("No factory image ZIP files found in the current directory.")
            print("Please provide a path using --image, or place factory ZIPs in this directory.")
            sys.exit(1)
            
        print(f"Found {len(factory_zips)} factory image(s).")
        for fz in factory_zips:
            process_image(fz, countries, out_base_dir)
            
    print("\nExtraction job complete.")

if __name__ == "__main__":
    main()
