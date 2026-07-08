# /// script
# dependencies = [
#   "ext4",
# ]
# ///

import os
import zipfile
import sys
from ext4 import Volume

# Add current directory to path so we can import our native parser
sys.path.append(os.path.dirname(__file__))
from extract_carrier_settings import parse_protobuf, parse_carrier_apns, parse_carrier_config, build_config_dict

def extract_pb(zip_path, codename):
    with zipfile.ZipFile(zip_path) as outer:
        namelist = outer.namelist()
        inner_zip_name = next(name for name in namelist if name.endswith('.zip') and f"image-{codename}" in name)
        with outer.open(inner_zip_name) as inner_file:
            with zipfile.ZipFile(inner_file) as inner_zip:
                with inner_zip.open('product.img') as source, open(f"temp_product_{codename}.img", 'wb') as target:
                    while True:
                        chunk = source.read(4 * 1024 * 1024)
                        if not chunk:
                            break
                        target.write(chunk)
        with open(f"temp_product_{codename}.img", 'rb') as f:
            vol = Volume(f)
            cs_inode = vol.inode_at('/etc/CarrierSettings')
            pbs = {}
            for entry, ftype in cs_inode.opendir():
                name = getattr(entry, 'name_str', None) or getattr(entry, 'name', b'').decode('utf-8')
                if name.endswith('.pb') and name != 'carrier_list.pb':
                    pbs[name] = vol.inodes[entry.inode].open().read()
            os.remove(f"temp_product_{codename}.img")
            return pbs

def pb_to_dict(pb_data):
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
            cs_dict['configs'] = build_config_dict(parse_carrier_config(val))
    return cs_dict

def main():
    zips = [f for f in os.listdir('.') if f.endswith('.zip') and '-factory-' in f]
    stallion_zip = next(f for f in zips if 'stallion' in f)
    blazer_zip = next(f for f in zips if 'blazer' in f)
    
    print(f"Extracting carrier configs from Stallion ({stallion_zip})...")
    s_pbs = extract_pb(stallion_zip, 'stallion')
    
    print(f"Extracting carrier configs from Blazer ({blazer_zip})...")
    b_pbs = extract_pb(blazer_zip, 'blazer')
    
    print("\nComparing configuration contents...")
    diff_ver_only = 0
    diff_content = 0
    identical = 0
    
    for name in sorted(s_pbs.keys()):
        if name not in b_pbs:
            print(f"- {name} only present in Stallion")
            continue
            
        s_data = s_pbs[name]
        b_data = b_pbs[name]
        
        if s_data == b_data:
            identical += 1
            continue
            
        # Parse content
        s_dict = pb_to_dict(s_data)
        b_dict = pb_to_dict(b_data)
        
        # Remove version
        s_ver = s_dict.pop('version', None)
        b_ver = b_dict.pop('version', None)
        
        if s_dict == b_dict:
            diff_ver_only += 1
            print(f"- {name}: Only version differs (stallion={s_ver}, blazer={b_ver})")
        else:
            diff_content += 1
            print(f"- {name}: CONTENT MISMATCH!")
            # Pinpoint what's different
            for k in ['canonical_name', 'apns', 'configs']:
                sv = s_dict.get(k)
                bv = b_dict.get(k)
                if sv != bv:
                    print(f"  * Difference in field '{k}':")
                    if k == 'configs':
                        # Diff keys
                        all_keys = sorted(list(set(sv.keys()) | set(bv.keys())))
                        for ck in all_keys:
                            cv_s = sv.get(ck)
                            cv_b = bv.get(ck)
                            if cv_s != cv_b:
                                print(f"    - key '{ck}': stallion={cv_s}, blazer={cv_b}")
                    else:
                        print(f"    - Stallion: {sv}")
                        print(f"    - Blazer: {bv}")
                        
    print(f"\nSummary:")
    print(f"  Identical binary files: {identical}")
    print(f"  Only version/timestamp differs: {diff_ver_only}")
    print(f"  Actual content mismatches: {diff_content}")

if __name__ == '__main__':
    main()
