"""Common utilities and mappings for Google Pixel device codenames and partitions extraction."""

import os
import re
import zipfile
from typing import Any

# Mapping of Pixel codenames to friendly names
CODENAMES: dict[str, str] = {
    "blazer": "Pixel 10 Pro",
    "stallion": "Pixel 10a",
    "frankel": "Pixel 10",
    "mustang": "Pixel 10 Pro XL",
    "rango": "Pixel 10 Pro Fold",
    "tegu": "Pixel 9a",
    "tokay": "Pixel 9",
    "caiman": "Pixel 9 Pro",
    "komodo": "Pixel 9 Pro XL",
    "comet": "Pixel 9 Pro Fold",
    "husky": "Pixel 8 Pro",
    "shiba": "Pixel 8",
    "akita": "Pixel 8a",
    "felix": "Pixel Fold",
    "tangorpro": "Pixel Tablet",
    "lynx": "Pixel 7a",
    "cheetah": "Pixel 7 Pro",
    "panther": "Pixel 7",
    "bluejay": "Pixel 6a",
    "raven": "Pixel 6 Pro",
    "oriole": "Pixel 6",
    "redfin": "Pixel 5",
}

MONTHS: dict[str, str] = {
    "01": "january",
    "02": "february",
    "03": "march",
    "04": "april",
    "05": "may",
    "06": "june",
    "07": "july",
    "08": "august",
    "09": "september",
    "10": "october",
    "11": "november",
    "12": "december",
}


def parse_android_version(build_id: str | None) -> str:
    """Deduces the major Android OS version from the build ID prefix letter and branch codes.

    Args:
        build_id: The Android build ID string (e.g. "CP2A.260705.006").

    Returns:
        The deduced major version string (e.g. "17", "16", "15", "14"), or "unknown".
    """
    if not build_id:
        return "unknown"
    build_upper = build_id.upper()

    # Android 17 vs Android 16 branch check:
    # CP1A and BPXX are Android 16. CP2A and onwards are Android 17.
    if build_upper.startswith("CP2") or build_upper.startswith("D"):
        return "17"
    elif build_upper.startswith("CP1") or build_upper.startswith("BP") or build_upper.startswith("B"):
        return "16"
    elif build_upper.startswith("AP") or build_upper.startswith("A") or build_upper.startswith("V"):
        return "15"
    elif build_upper.startswith("UP") or build_upper.startswith("U"):
        return "14"
    elif build_upper.startswith("TP") or build_upper.startswith("T"):
        return "13"
    elif build_upper.startswith("SP") or build_upper.startswith("S"):
        return "12"

    first_char = build_upper[0]
    if first_char == "C":
        return "17"
    elif first_char == "B":
        return "16"
    elif first_char in ("A", "V"):
        return "15"
    elif first_char == "U":
        return "14"
    elif first_char == "T":
        return "13"
    elif first_char == "S":
        return "12"
    return "unknown"


def parse_factory_zip_name(filename: str) -> dict[str, Any]:
    """Extracts device codename, build ID, and date metadata from a factory image zip name.

    Example: "stallion-cp2a.260705.006-factory-e7631ea9.zip"

    Args:
        filename: The absolute or relative file path to the factory image zip.

    Returns:
        A dictionary containing parsed metadata attributes:
            codename, build_id, device, android_version, dir_name, device_dir.
    """
    basename = os.path.basename(filename)
    match = re.match(r"^([a-z0-9_]+)-([a-z0-9\.]+)-factory-[a-f0-9]+\.zip$", basename)
    if not match:
        # Graceful fallback: use the filename itself if naming convention differs
        clean_name = re.sub(r"[\.\s\-]", "_", os.path.splitext(basename)[0]).lower()
        return {
            "codename": clean_name,
            "build_id": None,
            "device": clean_name,
            "android_version": "unknown",
            "dir_name": f"extracted_{clean_name}",
            "device_dir": f"{clean_name}_{clean_name}",
        }

    codename = match.group(1)
    build_id = match.group(2)

    # Try to parse date from build ID (e.g., cp2a.260705.006 -> 260705)
    date_match = re.search(r"\.(\d{6})\.", build_id)
    month_year_str = "unknown_date"
    if date_match:
        date_code = date_match.group(1)
        year = "20" + date_code[0:2]
        month_code = date_code[2:4]
        month_year_str = f"{year}_{month_code}"

    device_friendly = CODENAMES.get(codename, codename)
    android_ver = parse_android_version(build_id)
    dir_name = f"android_{android_ver}_{month_year_str}_{build_id}"

    device_clean = device_friendly.lower().replace(" ", "_")
    device_dir = f"{device_clean}_{codename}"

    return {
        "codename": codename,
        "build_id": build_id,
        "device": device_friendly,
        "android_version": android_ver,
        "dir_name": dir_name,
        "device_dir": device_dir,
    }


def get_friendly_build_name(build_id_dir: str) -> str:
    """Generates a highly polished, human-friendly title for the Android build folder name.

    Example: "android_17_2026_07_cp2a.260705.006" -> "Android 17 - July 2026 (CP2A.260705.006)"

    Args:
        build_id_dir: The directory name of the build (e.g., "android_17_2026_07_cp2a.260705.006").

    Returns:
        The formatted friendly build title string.
    """
    parts = build_id_dir.split("_")
    if len(parts) >= 5:
        ver = parts[1]
        year = parts[2]
        month_code = parts[3]
        build_id = "_".join(parts[4:])

        month_names = {
            "01": "January", "02": "February", "03": "March", "04": "April",
            "05": "May", "06": "June", "07": "July", "08": "August",
            "09": "September", "10": "October", "11": "November", "12": "December"
        }
        month_name = month_names.get(month_code, "Unknown")
        return f"Android {ver} - {month_name} {year} ({build_id.upper()})"

    # Fallback to older naming format: "android_17_july_2026_cp2a.260705.006"
    # -> "Android 17 - July 2026 (cp2a.260705.006)"
    if build_id_dir.startswith("android_"):
        temp = build_id_dir.replace("android_", "Android ")
        # Try to split by month/year strings
        temp_parts = temp.split("_")
        if len(temp_parts) >= 5:
            ver = temp_parts[1]
            month = temp_parts[2].title()
            year = temp_parts[3]
            build_id = "_".join(temp_parts[4:])
            return f"Android {ver} - {month} {year} ({build_id.upper()})"

    return build_id_dir.replace("android_", "Android ").replace("_", " ").title()


def extract_partition_img(fz: str, codename: str, partition_name: str, temp_img_path: str) -> bool:
    """Extracts a target partition image file (e.g.

    product.img, vendor.img) from the nested structures of a factory ZIP.

    Args:
        fz: Absolute path to the outer factory image ZIP.
        codename: The target device codename (e.g. "blazer").
        partition_name: The partition image filename to extract (e.g. "product.img").
        temp_img_path: Output target path for the extracted partition image file.

    Returns:
        True if extraction was successful, False otherwise.
    """
    inner_zip_name = None
    try:
        with zipfile.ZipFile(fz) as outer:
            namelist = outer.namelist()
            for name in namelist:
                if name.endswith(".zip") and f"image-{codename}" in name:
                    inner_zip_name = name
                    break
            # Fallback if the codename matching doesn't find it directly
            if not inner_zip_name:
                for name in namelist:
                    if name.endswith(".zip") and "image-" in name:
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
                    with inner_zip.open(partition_name) as source, open(temp_img_path, "wb") as target:
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


def get_device_sort_rank(codename: str) -> int:
    """Returns a sorting rank for a Pixel device codename based on release generation.

    Args:
        codename: The internal device codename (e.g. "blazer").

    Returns:
        An integer rank value (larger values represent newer generations).
    """
    cn = codename.lower()
    if cn in ("blazer", "stallion", "frankel", "mustang", "rango"):
        return 10
    elif cn in ("tokay", "caiman", "komodo", "comet", "tegu"):
        return 9
    elif cn in ("husky", "shiba", "akita"):
        return 8
    elif cn in ("cheetah", "panther", "lynx", "felix", "tangorpro"):
        return 7
    elif cn in ("oriole", "raven", "bluejay"):
        return 6
    elif cn in ("redfin",):
        return 5
    return 0

