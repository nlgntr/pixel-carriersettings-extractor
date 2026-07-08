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

from ext4 import Volume
from .common import CODENAMES, MONTHS, parse_android_version, parse_factory_zip_name, extract_partition_img


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

def main(args_list=None):
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
    
    args = parser.parse_args(args_list)
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
