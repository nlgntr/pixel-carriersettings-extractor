#!/usr/bin/env python3
import os
import sys
import glob

import tomllib


def find_extracted_builds():
    builds = glob.glob(os.path.join('extracted', 'android_*'))
    return [b for b in builds if os.path.isdir(b)]

def get_devices_in_build(build_path):
    cs_path = os.path.join(build_path, 'carrier_settings')
    if not os.path.exists(cs_path):
        return []
    return [os.path.join(cs_path, d) for d in os.listdir(cs_path) if os.path.isdir(os.path.join(cs_path, d))]

def load_toml_config(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    try:
        data = tomllib.loads(content)
        # Strip version number to perform semantic comparisons
        if 'settings' in data:
            data['settings'].pop('version', None)
        return data
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return None

def print_dict_diff(d1, d2, path=""):
    if isinstance(d1, dict) and isinstance(d2, dict):
        all_keys = sorted(list(set(d1.keys()) | set(d2.keys())))
        for k in all_keys:
            new_path = f"{path}.{k}" if path else k
            if k not in d1:
                print(f"  * Key '{new_path}' is missing in baseline")
            elif k not in d2:
                print(f"  * Key '{new_path}' is missing in target")
            else:
                print_dict_diff(d1[k], d2[k], new_path)
    elif isinstance(d1, list) and isinstance(d2, list):
        if len(d1) != len(d2):
            print(f"  * List at '{path}' has different lengths: baseline={len(d1)}, target={len(d2)}")
        else:
            for idx, (item1, item2) in enumerate(zip(d1, d2)):
                print_dict_diff(item1, item2, f"{path}[{idx}]")
    else:
        if d1 != d2:
            print(f"  * Difference at '{path}':")
            print(f"    - Baseline: {d1}")
            print(f"    - Target:   {d2}")

def main():
    builds = find_extracted_builds()
    if not builds:
        print("No extracted builds found in 'extracted/'. Run extract_all.py first.")
        sys.exit(1)
        
    # Default to the first build found
    build_path = builds[0]
    devices = get_devices_in_build(build_path)
    
    if len(devices) < 2:
        print(f"Found devices in {build_path}: {[os.path.basename(d) for d in devices]}")
        print("Need at least 2 extracted devices to perform a comparison.")
        sys.exit(0)
        
    print(f"Comparing carriers in build: {os.path.basename(build_path)}")
    print("Devices found:")
    for idx, d in enumerate(devices):
        print(f"  [{idx}] {os.path.basename(d)}")
        
    # We will compare all devices pairwise or against a baseline (index 0)
    baseline_dir = devices[0]
    baseline_name = os.path.basename(baseline_dir)
    
    # Scan all configuration files in baseline
    baseline_toml_dir = os.path.join(baseline_dir, 'toml')
    if not os.path.exists(baseline_toml_dir):
        print(f"No toml files found in {baseline_toml_dir}")
        sys.exit(1)
        
    toml_files = sorted(os.listdir(baseline_toml_dir))
    toml_files = [f for f in toml_files if f.endswith('.toml')]
    
    print(f"\nPerforming semantic comparison against baseline: {baseline_name}")
    diff_count = 0
    
    for filename in toml_files:
        base_file = os.path.join(baseline_toml_dir, filename)
        base_data = load_toml_config(base_file)
        if not base_data:
            continue
            
        for other_dir in devices[1:]:
            other_name = os.path.basename(other_dir)
            other_file = os.path.join(other_dir, 'toml', filename)
            
            if not os.path.exists(other_file):
                print(f"- {filename}: Missing in {other_name}")
                continue
                
            other_data = load_toml_config(other_file)
            if not other_data:
                continue
                
            if base_data != other_data:
                diff_count += 1
                print(f"\n[!] {filename}: CONTENT MISMATCH between {baseline_name} and {other_name}!")
                print_dict_diff(base_data, other_data)
                    
    if diff_count == 0:
        print("\nAll carrier configurations are semantically identical across devices!")
    else:
        print(f"\nFound {diff_count} semantic configuration difference(s).")

if __name__ == '__main__':
    main()
