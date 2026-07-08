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
import sqlite3

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
            'dir_name': f"extracted_{clean_name}"
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

def dump_db_info(db_path):
    """
    Connect to the extracted sqlite database and dump a quick overview.
    """
    print(f"\n--- Overview of {os.path.basename(db_path)} ---")
    try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        
        # Get list of tables
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = [row[0] for row in cursor.fetchall()]
        print(f"Tables found ({len(tables)}): {', '.join(tables)}")
        
        for table in tables:
            cursor.execute(f"SELECT COUNT(*) FROM [{table}]")
            count = cursor.fetchone()[0]
            print(f"  Table '{table}': {count} rows")
            
            # Print sample columns/rows for key tables
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

def process_image(fz, out_base_dir):
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
        
    inner_zip_name = None
    try:
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
    except zipfile.BadZipFile:
        print(f"Error: '{fz}' is not a valid zip file or is corrupted.")
        return
        
    if not inner_zip_name:
        print(f"Error: Could not find inner image ZIP in {fz}.")
        return
        
    temp_img_path = f"temp_vendor_{info['codename']}.img"
    print(f"Extracting vendor.img from {inner_zip_name}...")
    
    try:
        with zipfile.ZipFile(fz) as outer:
            with outer.open(inner_zip_name) as inner_file:
                with zipfile.ZipFile(inner_file) as inner_zip:
                    if 'vendor.img' not in inner_zip.namelist():
                        print("Error: vendor.img not found inside the inner image ZIP.")
                        return
                    with inner_zip.open('vendor.img') as source, open(temp_img_path, 'wb') as target:
                        while True:
                            chunk = source.read(4 * 1024 * 1024)
                            if not chunk:
                                break
                            target.write(chunk)
        print("Extracted vendor.img successfully.")
    except Exception as e:
        print(f"Error during extraction: {e}")
        if os.path.exists(temp_img_path):
            os.remove(temp_img_path)
        return
        
    print("Opening ext4 volume of vendor.img...")
    try:
        with open(temp_img_path, 'rb') as f:
            vol = Volume(f)
            
            # The database is typically located at /vendor/firmware/carrierconfig/cfg.db
            # Inside vendor.img, it's /firmware/carrierconfig/cfg.db
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
                            print(f"  [Warning] cfg.db exists but contents differ between device images! Overwriting.")
                    except Exception:
                        pass
                with open(out_filepath, 'wb') as out_f:
                    out_f.write(data)
                print(f"🎉 Successfully extracted: {target_file_path} ({len(data)} bytes) to {out_filepath}")
                
                # Perform a quick database dump/analysis
                dump_db_info(out_filepath)
                
            except Exception as e:
                print(f"Could not find or extract {target_file_path} in vendor.img: {e}")
                print("Checking alternative paths...")
                # Walk the /firmware/ directory to see what is there
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

def main():
    parser = argparse.ArgumentParser(
        description="Extract Shannon Modem configurations (cfg.db) from Google Pixel vendor.img."
    )
    parser.add_argument(
        '-i', '--image',
        help="Path to a specific factory image ZIP file. If omitted, the script scans the current directory."
    )
    parser.add_argument(
        '-o', '--output',
        default='extracted',
        help="Output base directory. Default is 'extracted'."
    )
    
    args = parser.parse_args()
    out_base_dir = os.path.abspath(args.output)
    
    if args.image:
        if not os.path.exists(args.image):
            print(f"Error: The specified file '{args.image}' does not exist.")
            sys.exit(1)
        process_image(args.image, out_base_dir)
    else:
        print("Scanning current directory for factory image ZIPs (*-factory-*.zip)...")
        factory_zips = glob.glob("*-factory-*.zip")
        if not factory_zips:
            print("No factory image ZIP files found in the current directory.")
            print("Please provide a path using --image, or place factory ZIPs in this directory.")
            sys.exit(1)
            
        print(f"Found {len(factory_zips)} factory image(s).")
        for fz in factory_zips:
            process_image(fz, out_base_dir)
            
    print("\nExtraction job complete.")

if __name__ == "__main__":
    main()
