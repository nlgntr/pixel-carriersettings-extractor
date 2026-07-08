import os
import re
import glob
import struct
import sqlite3
import zipfile
from .common import CODENAMES, MONTHS, parse_android_version, parse_factory_zip_name, extract_partition_img

# ==============================================================================
# SECTION 1: PROTOBUF PARSERS & HELPERS
# ==============================================================================

def parse_protobuf_carrier(data):
    """
    Parses flat Protobuf messages for CarrierSettings configs.
    """
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

def parse_varint(data, pos):
    """
    Parses a single varint from bytes.
    """
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

def parse_protobuf_uecap(data, start=0, end=None):
    """
    Parses Protobuf fields recursively for UE Capability configs.
    """
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


# ==============================================================================
# SECTION 2: CARRIER SETTINGS EXTRACTOR
# ==============================================================================

def parse_timestamp(data):
    fields = parse_protobuf_carrier(data)
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'varint':
            return val
    return None

def parse_apn_item(data):
    fields = parse_protobuf_carrier(data)
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
    if types:
        apn['apntype'] = types
    return apn

def parse_carrier_apns(data):
    fields = parse_protobuf_carrier(data)
    apns = []
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            apns.append(parse_apn_item(val))
    return apns

def parse_text_array(data):
    fields = parse_protobuf_carrier(data)
    arr = []
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            arr.append(val.decode('utf-8', errors='ignore'))
    return arr

def parse_int_array(data):
    fields = parse_protobuf_carrier(data)
    arr = []
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'varint':
            arr.append(val)
    return arr

def parse_config_value(fnum, ftype, val):
    if fnum == 2 and ftype == 'length_delimited':
        return val.decode('utf-8', errors='ignore')
    elif fnum == 3 and ftype == 'varint':
        return bool(val)
    elif fnum == 4 and ftype == 'varint':
        if val & 0x8000000000000000:
            return val - 0x10000000000000000
        return val
    elif fnum == 5 and ftype == 'length_delimited':
        return parse_text_array(val)
    elif fnum == 6 and ftype == 'length_delimited':
        return parse_int_array(val)
    return None

def parse_config_item(data):
    fields = parse_protobuf_carrier(data)
    key = ""
    value = None
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            key = val.decode('utf-8', errors='ignore')
        elif fnum in (2, 3, 4, 5, 6):
            value = parse_config_value(fnum, ftype, val)
    return key, value

def parse_carrier_config(data):
    fields = parse_protobuf_carrier(data)
    configs = []
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            configs.append(parse_config_item(val))
    return configs

def build_config_dict(configs):
    d = {}
    for k, v in configs:
        if k:
            d[k] = v
    return d

def serialize_to_toml_string(carrier_id_rules, cs_dict):
    out = []
    out.append("# Compiled automatically from CarrierSettings.pb overlays via Gemini")
    out.append("")
    out.append("[carrier_info]")
    out.append(f'canonical_name = "{cs_dict.get("canonical_name", "")}"')
    out.append(f'version = {cs_dict.get("version", 0)}')
    out.append("")
    
    for r in carrier_id_rules:
        out.append("[[carrier_info.rules]]")
        for key in ('mcc_mnc', 'spn', 'imsi_prefix_xpattern', 'gid1', 'gid2', 'plmn', 'device_configuration', 'carrier_id'):
            if key in r:
                val = r[key]
                if isinstance(val, str):
                    out.append(f'{key} = "{val}"')
                elif isinstance(val, int):
                    out.append(f'{key} = {val}')
        out.append("")
        
    out.append("[configs]")
    configs = cs_dict.get('configs', {})
    for key in sorted(configs.keys()):
        val = configs[key]
        
        def format_toml_value(val):
            if isinstance(val, bool):
                return "true" if val else "false"
            elif isinstance(val, int):
                return str(val)
            elif isinstance(val, str):
                escaped = val.replace('\\', '\\\\').replace('"', '\\"')
                return f'"{escaped}"'
            elif isinstance(val, list):
                if not val:
                    return "[]"
                elem_strs = [format_toml_value(x) for x in val]
                if len(elem_strs) <= 3:
                    return f"[ {', '.join(elem_strs)} ]"
                else:
                    return "[\n    " + ",\n    ".join(elem_strs) + "\n]"
            return "null"
            
        out.append(f"{key} = {format_toml_value(val)}")
    out.append("")
    
    apns = cs_dict.get('apns', [])
    if apns:
        out.append("## Access Point Name configurations")
        for apn in apns:
            out.append("[[[apn]]]")
            for k in sorted(apn.keys()):
                v = apn[k]
                if isinstance(v, str):
                    escaped = v.replace('\\', '\\\\').replace('"', '\\"')
                    out.append(f'{k} = "{escaped}"')
                elif isinstance(v, bool):
                    out.append(f'{k} = {"true" if v else "false"}')
                elif isinstance(v, int):
                    out.append(f'{k} = {v}')
                elif isinstance(v, list):
                    elem_strs = [f'"{x}"' for x in v]
                    out.append(f'{k} = [ {", ".join(elem_strs)} ]')
            out.append("")
            
    return "\n".join(out)

def parse_carrier_id(data):
    fields = parse_protobuf_carrier(data)
    rule = {}
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            rule['mcc_mnc'] = val.decode('utf-8', errors='ignore')
        elif fnum == 2 and ftype == 'length_delimited':
            rule['spn'] = val.decode('utf-8', errors='ignore')
        elif fnum == 3 and ftype == 'length_delimited':
            rule['imsi_prefix_xpattern'] = val.decode('utf-8', errors='ignore')
        elif fnum == 4 and ftype == 'length_delimited':
            rule['gid1'] = val.decode('utf-8', errors='ignore')
        elif fnum == 5 and ftype == 'length_delimited':
            rule['gid2'] = val.decode('utf-8', errors='ignore')
        elif fnum == 6 and ftype == 'length_delimited':
            rule['plmn'] = val.decode('utf-8', errors='ignore')
        elif fnum == 7 and ftype == 'length_delimited':
            rule['device_configuration'] = val.decode('utf-8', errors='ignore')
        elif fnum == 8 and ftype == 'varint':
            rule['carrier_id'] = val
    return rule

def parse_carrier_map(data):
    fields = parse_protobuf_carrier(data)
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
    fields = parse_protobuf_carrier(data)
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
    fields = parse_protobuf_carrier(pb_data)
    cs_dict = {}
    for fnum, ftype, val in fields:
        if fnum == 1 and ftype == 'length_delimited':
            cs_dict['canonical_name'] = val.decode('utf-8', errors='ignore')
        elif fnum == 2 and ftype == 'varint':
            cs_dict['version'] = val
        elif fnum == 3 and ftype == 'length_delimited':
            cs_dict['apns'] = parse_carrier_apns(val)
        elif fnum == 4 and ftype == 'length_delimited':
            cs_dict['configs'] = build_config_dict(parse_carrier_config(val))
            
    name = cs_dict.get('canonical_name', '')
    rules = []
    if carrier_list_rules and name in carrier_list_rules:
        rules = carrier_list_rules[name]
        
    return name, serialize_to_toml_string(rules, cs_dict)

def extract_carrier_settings(fz, countries, out_base_dir):
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
    
    if not os.path.exists(fz):
        print(f"Error: Factory zip file '{fz}' does not exist.")
        return
        
    temp_img_path = f"temp_product_{info['codename']}.img"
    if not extract_partition_img(fz, info['codename'], 'product.img', temp_img_path):
        return
        
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
                
                is_target = False
                if entry_name == 'carrier_list.pb':
                    is_target = True
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


# ==============================================================================
# SECTION 3: SHANNON MODEM DATABASE (CFG.DB) EXTRACTOR
# ==============================================================================

def dump_db_info(db_path):
    print(f"\n--- Overview of {os.path.basename(db_path)} ---")
    try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = [row[0] for row in cursor.fetchall()]
        print(f"Tables found ({len(tables)}): {', '.join(tables)}")
        
        for table in tables:
            cursor.execute(f"SELECT COUNT(*) FROM [{table}]")
            count = cursor.fetchone()[0]
            print(f"  Table '{table}': {count} rows")
            
            if table in ('regional_fallback', 'carrier_policy', 'policy', 'main', 'fallback'):
                cursor.execute(f"PRAGMA table_info([{table}])")
                cols = [col[1] for col in cursor.fetchall()]
                print(f"    Columns: {cols}")
                cursor.execute(f"SELECT * FROM [{table}] LIMIT 3")
                rows = cursor.fetchall()
                for row in rows:
                    print(f"    Sample: {row}")
                    
        conn.close()
    except Exception as e:
        print(f"Error reading SQLite database: {e}")

def extract_cfg_db(fz, out_base_dir):
    from ext4 import Volume
    info = parse_factory_zip_name(fz)
    if not info:
        print(f"\nSkipping {fz}: Could not parse info from filename.")
        return
        
    target_dir = os.path.join(out_base_dir, info['dir_name'], 'cfg_db', info['device_dir'])
    print(f"\n================ Processing {info['device']} (Codename: {info['codename']}) ================")
    if info['build_id']:
        print(f"Build ID: {info['build_id']}")
    
    if not os.path.exists(fz):
        print(f"Error: Factory zip file '{fz}' does not exist.")
        return
        
    temp_img_path = f"temp_vendor_{info['codename']}.img"
    if not extract_partition_img(fz, info['codename'], 'vendor.img', temp_img_path):
        return
        
    print("Opening ext4 volume of vendor.img...")
    try:
        with open(temp_img_path, 'rb') as f:
            vol = Volume(f)
            
            target_file_path = '/firmware/carrierconfig/cfg.db'
            try:
                db_inode = vol.inode_at(target_file_path)
                data = db_inode.open().read()
                
                target_dir = os.path.join(out_base_dir, info['dir_name'], 'cfg_db', info['device_dir'])
                os.makedirs(target_dir, exist_ok=True)
                
                out_filepath = os.path.join(target_dir, 'cfg.db')
                if os.path.exists(out_filepath):
                    try:
                        with open(out_filepath, 'rb') as old_f:
                            old_data = old_f.read()
                        if old_data == data:
                            print(f"  [Info] cfg.db already exists and is identical. Skipping.")
                            return
                        else:
                            print(f"  [Warning] cfg.db exists but contents differ! Overwriting.")
                    except Exception:
                        pass
                with open(out_filepath, 'wb') as out_f:
                    out_f.write(data)
                print(f"🎉 Successfully extracted: {target_file_path} ({len(data)} bytes) to {out_filepath}")
                dump_db_info(out_filepath)
                
            except Exception as e:
                print(f"Could not find or extract {target_file_path} in vendor.img: {e}")
                try:
                    firmware_inode = vol.inode_at('/firmware')
                    print("Contents of /firmware:")
                    for entry, ftype in firmware_inode.opendir():
                        name = getattr(entry, 'name_str', None) or getattr(entry, 'name', b'').decode('utf-8', errors='ignore')
                        if name not in ('.', '..'):
                            print(f"  /{name}")
                except Exception as walk_err:
                    print(f"Could not list /firmware: {walk_err}")
            
    except Exception as e:
        print(f"Failed to process ext4 volume: {e}")
    finally:
        if os.path.exists(temp_img_path):
            print(f"Cleaning up temporary file {temp_img_path}...")
            os.remove(temp_img_path)


# ==============================================================================
# SECTION 4: UE CAPABILITY EXTRACTOR & HELPERS
# ==============================================================================

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
    fields = parse_protobuf_uecap(pb_data)
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
            dl_feature_sets.append(parse_featureset(parse_protobuf_uecap(val)))
        elif fnum == 7 and ftype == 'length_delimited':
            ul_feature_sets.append(parse_featureset(parse_protobuf_uecap(val)))
        elif fnum == 3 and ftype == 'length_delimited':
            combo_fields = parse_protobuf_uecap(val)
            combo_info = None
            band_params = []
            
            for cfnum, cftype, cval in combo_fields:
                if cfnum == 1 and cftype == 'length_delimited':
                    combo_info = parse_protobuf_uecap(cval)
                elif cfnum == 2 and cftype == 'length_delimited':
                    bp_fields = parse_protobuf_uecap(cval)
                    configs_in_bp = []
                    bcs_mask = 0
                    for bpnum, bptype, bpval in bp_fields:
                        if bpnum == 1 and bptype == 'length_delimited':
                            configs_in_bp.append(parse_band_config(parse_protobuf_uecap(bpval)))
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
    fields = parse_protobuf_uecap(pb_data)
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
            dl_feature_sets.append(parse_featureset(parse_protobuf_uecap(val)))
        elif fnum == 7 and ftype == 'length_delimited':
            ul_feature_sets.append(parse_featureset(parse_protobuf_uecap(val)))
        elif fnum == 3 and ftype == 'length_delimited':
            combo_fields = parse_protobuf_uecap(val)
            combo_info = None
            band_params = []
            
            for cfnum, cftype, cval in combo_fields:
                if cfnum == 1 and cftype == 'length_delimited':
                    combo_info = parse_protobuf_uecap(cval)
                elif cfnum == 2 and cftype == 'length_delimited':
                    bp_fields = parse_protobuf_uecap(cval)
                    configs_in_bp = []
                    bcs_mask = 0
                    for bpnum, bptype, bpval in bp_fields:
                        if bpnum == 1 and bptype == 'length_delimited':
                            configs_in_bp.append(parse_band_config(parse_protobuf_uecap(bpval)))
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
        if combos >= 150:
            return "Pixel 9 / Pixel 10 (Standard) & Pixel 9 Pro / 9 Pro XL / 9 Pro Fold & Pixel 10 Pro / Pro XL / Pro Fold", "Flagship (Standard & Pro)"
        elif combos >= 120:
            return "Pixel 10a (UK/EU SKU)", "Mid-range A-series (Restricted to 2x2 MIMO)"
        else:
            return "Pixel 10a (Basic / NA SKU)", "Basic A-series fallback (Restricted to 2x2 MIMO)"
    return "Unknown", "Unknown tier"

def decode_uecap_to_markdown(pb_data, out_path):
    fields = parse_protobuf_uecap(pb_data)
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
            dl_feature_sets.append(parse_featureset(parse_protobuf_uecap(val)))
        elif fnum == 7 and ftype == 'length_delimited':
            ul_feature_sets.append(parse_featureset(parse_protobuf_uecap(val)))
        elif fnum == 3 and ftype == 'length_delimited':
            combo_fields = parse_protobuf_uecap(val)
            combo_info = None
            band_params = []
            
            for cfnum, cftype, cval in combo_fields:
                if cfnum == 1 and cftype == 'length_delimited':
                    combo_info = parse_protobuf_uecap(cval)
                elif cfnum == 2 and cftype == 'length_delimited':
                    bp_fields = parse_protobuf_uecap(cval)
                    configs_in_bp = []
                    bcs_mask = 0
                    for bpnum, bptype, bpval in bp_fields:
                        if bpnum == 1 and bptype == 'length_delimited':
                            configs_in_bp.append(parse_band_config(parse_protobuf_uecap(bpval)))
                        elif bpnum == 2 and bptype == 'varint':
                            bcs_mask = bpval
                    band_params.append((configs_in_bp, bcs_mask))
            combos.append((combo_info, band_params))

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
            f.write(f"| {label} | {m_dl} | {d['dl_bw']} MHz | {q_dl} | {m_ul} | {d['ul_bw']} MHz | {q_ul} |\n")
        f.write("\n")
        
        f.write(f"## Band Combinations ({len(combos)})\n\n")
        if lte_ca:
            f.write(f"### LTE-CA Combinations ({len(lte_ca)})\n")
            for c in lte_ca:
                f.write(f"- {c}\n")
            f.write("\n")
        if nr_ca:
            f.write(f"### NR-CA Combinations ({len(nr_ca)})\n")
            for c in nr_ca:
                f.write(f"- {c}\n")
            f.write("\n")
        if en_dc:
            f.write(f"### EN-DC Combinations ({len(en_dc)})\n")
            for c in en_dc:
                f.write(f"- {c}\n")
            f.write("\n")

def bcd_to_plmn(val):
    b1 = val & 0x0F
    b2 = (val >> 4) & 0x0F
    b3 = (val >> 8) & 0x0F
    b4 = (val >> 12) & 0x0F
    b5 = (val >> 16) & 0x0F
    b6 = (val >> 20) & 0x0F
    mcc = f"{b1}{b2}{b3}"
    mnc = f"{b4}{b5}"
    if b6 != 0x0F:
        mnc += str(b6)
    return f"{mcc}-{mnc}"

def decode_ap_plmn_mapping_toml(data, out_path):
    fields = parse_protobuf_uecap(data)
    with open(out_path, 'w') as f:
        f.write("# Compiled automatically from ap_plmn_mapping.binarypb\n\n")
        for fnum, ftype, val in fields:
            if fnum == 1 and ftype == 'length_delimited':
                mapping_fields = parse_protobuf_uecap(val)
                plmns = []
                profile = ""
                profile_id = 0
                for efnum, eftype, eval in mapping_fields:
                    if efnum == 1 and eftype == 'varint':
                        plmns.append(bcd_to_plmn(eval))
                    elif efnum == 2 and eftype == 'varint':
                        profile_id = eval
                    elif efnum == 3 and eftype == 'length_delimited':
                        profile = eval.decode('utf-8', errors='ignore')
                if profile or plmns:
                    plmn_list_str = ", ".join(f'"{x}"' for x in plmns)
                    f.write("[[mapping]]\n")
                    f.write(f'profile = "{profile}"\n')
                    f.write(f"profile_id = {profile_id}\n")
                    f.write(f"plmns = [ {plmn_list_str} ]\n\n")

def decode_ap_plmn_mapping_txt(data, out_path):
    fields = parse_protobuf_uecap(data)
    with open(out_path, 'w') as f:
        f.write("=== AP TO PLMN PROFILE MAPPINGS ===\n\n")
        for fnum, ftype, val in fields:
            if fnum == 1 and ftype == 'length_delimited':
                mapping_fields = parse_protobuf_uecap(val)
                plmns = []
                profile = ""
                profile_id = 0
                for efnum, eftype, eval in mapping_fields:
                    if efnum == 1 and eftype == 'varint':
                        plmns.append(bcd_to_plmn(eval))
                    elif efnum == 2 and eftype == 'varint':
                        profile_id = eval
                    elif efnum == 3 and eftype == 'length_delimited':
                        profile = eval.decode('utf-8', errors='ignore')
                if profile or plmns:
                    f.write(f"Profile: {profile:<15} (ID: {profile_id:<3}) -> PLMNs: {', '.join(plmns)}\n")

def extract_uecaps(fz, countries, out_format, export_bin, out_base_dir):
    from ext4 import Volume
    info = parse_factory_zip_name(fz)
    if not info:
        return
        
    print(f"\n================ Processing {info['device']} (Codename: {info['codename']}) ================")
    
    if not os.path.exists(fz):
        print(f"Error: Factory zip file '{fz}' does not exist.")
        return
        
    temp_img_path = f"temp_vendor_uecap_{info['codename']}.img"
    if not extract_partition_img(fz, info['codename'], 'vendor.img', temp_img_path):
        return
    try:
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
                        
                    is_target = False
                    if entry_name == 'ap_plmn_mapping.binarypb':
                        is_target = True
                    elif 'all' in countries:
                        is_target = True
                    else:
                        parts = entry_name.rsplit('_', 1)
                        if len(parts) == 2:
                            profile_prefix = parts[0].lower()
                            for country in countries:
                                suffixes = COUNTRY_TO_SUFFIX.get(country.lower(), [f"_{country.lower()}"])
                                for suffix in suffixes:
                                    if suffix.lower() in profile_prefix:
                                        is_target = True
                                        break
                                if is_target:
                                    break
                                    
                    if is_target:
                        try:
                            child_inode = vol.inodes[entry.inode]
                            data = child_inode.open().read()
                            
                            if export_bin:
                                pb_out_path = os.path.join(pb_dir, entry_name)
                                with open(pb_out_path, 'wb') as out_pb:
                                    out_pb.write(data)
                                bin_out_name = entry_name.replace('.binarypb', '.bin')
                                bin_out_path = os.path.join(bin_dir, bin_out_name)
                                with open(bin_out_path, 'wb') as out_bin:
                                    out_bin.write(data)
                                    
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
