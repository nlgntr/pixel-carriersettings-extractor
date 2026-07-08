import os
import re
import zipfile

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
    'comet': 'Pixel 9 Pro Fold',
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
            'dir_name': f"extracted_{clean_name}",
            'device_dir': f"{clean_name}_{clean_name}"
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

def extract_partition_img(fz, codename, partition_name, temp_img_path):
    """
    Extract a partition image file (e.g. product.img, vendor.img) from the factory ZIP.
    Handles nested zip extraction.
    """
    inner_zip_name = None
    try:
        with zipfile.ZipFile(fz) as outer:
            namelist = outer.namelist()
            for name in namelist:
                if name.endswith('.zip') and f"image-{codename}" in name:
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
        return False
        
    if not inner_zip_name:
        print(f"Error: Could not find inner image ZIP in {fz}.")
        return False
        
    print(f"Extracting {partition_name} from {inner_zip_name}...")
    try:
        with zipfile.ZipFile(fz) as outer:
            with outer.open(inner_zip_name) as inner_file:
                with zipfile.ZipFile(inner_file) as inner_zip:
                    if partition_name not in inner_zip.namelist():
                        print(f"Error: {partition_name} not found inside the inner image ZIP.")
                        return False
                    with inner_zip.open(partition_name) as source, open(temp_img_path, 'wb') as target:
                        while True:
                            chunk = source.read(4 * 1024 * 1024)
                            if not chunk:
                                break
                            target.write(chunk)
        print(f"Extracted {partition_name} successfully.")
        return True
    except Exception as e:
        print(f"Error during {partition_name} extraction: {e}")
        if os.path.exists(temp_img_path):
            os.remove(temp_img_path)
        return False
