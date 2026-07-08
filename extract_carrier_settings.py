# /// script
# dependencies = [
#   "ext4",
# ]
# ///

import os
import sys
import re
import glob
import zipfile
import argparse

# Mapping of Pixel codenames to friendly names
CODENAMES = {
    'blazer': 'Pixel 10 Pro',
    'stallion': 'Pixel 10a',
    'frankel': 'Pixel 10',
    'mustang': 'Pixel 10 Pro XL',
    'rango': 'Pixel 10 Pro Fold',
    'husky': 'Pixel 8 Pro',
    'shiba': 'Pixel 8',
    'akita': 'Pixel 8a',
    'comet': 'Pixel Fold',
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
    
    # Format device name for directory (e.g., "Pixel 10 Pro" -> "pixel_10_pro_row")
    device_clean = device_friendly.lower().replace(' ', '_') + "_row"
    
    dir_name = f"android_{android_ver}_{month_year_str}_{device_clean}"
    
    return {
        'codename': codename,
        'build_id': build_id,
        'device': device_friendly,
        'android_version': android_ver,
        'dir_name': dir_name
    }

def process_image(fz, countries, out_base_dir):
    """
    Processes a single factory image and extracts the relevant carrier setting pb files.
    """
    from ext4 import Volume

    info = parse_factory_zip_name(fz)
    if not info:
        print(f"\nSkipping {fz}: Could not parse info from filename.")
        return
        
    print(f"\n================ Processing {info['device']} (Codename: {info['codename']}) ================")
    if info['build_id']:
        print(f"Build ID: {info['build_id']}")
    print(f"Target Directory: {info['dir_name']}")
    
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
                
            target_dir = os.path.join(out_base_dir, info['dir_name'])
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
        default='extracted_carrier_settings',
        help="Output base directory. Default is 'extracted_carrier_settings'."
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
