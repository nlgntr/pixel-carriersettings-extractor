#!/usr/bin/env python3
"""Differ module to compare carrier configurations and baseband modem databases across builds."""

import glob
import os
import sqlite3
import sys
import tomllib
from typing import Any


def find_extracted_builds() -> list[str]:
    """Finds all extracted build directories under the 'extracted/' folder.

    Returns:
        A list of directory paths corresponding to extracted Android builds.
    """
    builds = glob.glob(os.path.join("extracted", "android_*"))
    return [b for b in builds if os.path.isdir(b)]


def get_devices_in_build(build_path: str) -> list[str]:
    """Locates all device variant subdirectories for a given build path.

    Args:
        build_path: The directory path of the Android build.

    Returns:
        A list of directory paths for device variants in the build.
    """
    cs_path = os.path.join(build_path, "carrier_settings")
    if not os.path.exists(cs_path):
        return []
    return [os.path.join(cs_path, d) for d in os.listdir(cs_path) if os.path.isdir(os.path.join(cs_path, d))]


def load_toml_config(filepath: str) -> dict[str, Any] | None:
    """Loads a TOML configuration file and strips volatile metadata like version strings.

    Args:
        filepath: The path to the carrier configuration TOML file.

    Returns:
        The parsed TOML configuration dictionary, or None if parsing fails.
    """
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    try:
        data = tomllib.loads(content)
        # Strip version number to perform semantic comparisons
        if "settings" in data:
            data["settings"].pop("version", None)
        return data
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return None


def print_dict_diff(d1: Any, d2: Any, path: str = "") -> None:
    """Recursively compares two parsed TOML objects and prints structural/value diffs.

    Args:
        d1: The baseline object (dictionary, list, or primitive).
        d2: The target object to compare against the baseline.
        path: The current nested path string (used for recursive output formatting).
    """
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


def diff_cfg_databases(db1_path: str, db2_path: str) -> None:
    """Compares two SQLite baseband modem databases and logs differences in configs.

    Args:
        db1_path: Path to the baseline cfg.db file.
        db2_path: Path to the target cfg.db file.
    """
    if not os.path.exists(db1_path):
        print(f"Error: Database 1 not found at '{db1_path}'")
        return
    if not os.path.exists(db2_path):
        print(f"Error: Database 2 not found at '{db2_path}'")
        return

    print("🔍 Comparing Modem Databases:")
    print(f"  📂 DB 1: {os.path.abspath(db1_path)}")
    print(f"  📂 DB 2: {os.path.abspath(db2_path)}")
    print("=" * 60)

    conn1 = sqlite3.connect(db1_path)
    conn2 = sqlite3.connect(db2_path)

    try:
        c1 = conn1.cursor()
        c2 = conn2.cursor()

        # 1. Compare carrier names
        c1.execute("SELECT carrier_id, name FROM confnames")
        names1 = {row[0]: row[1] for row in c1.fetchall()}

        c2.execute("SELECT carrier_id, name FROM confnames")
        names2 = {row[0]: row[1] for row in c2.fetchall()}

        added_carriers = {cid: names2[cid] for cid in names2 if cid not in names1}
        removed_carriers = {cid: names1[cid] for cid in names1 if cid not in names2}

        if added_carriers:
            print("\n➕ Added Carriers:")
            for cid, name in sorted(added_carriers.items()):
                print(f"  * ID {cid:5} ➜ {name}")
        else:
            print("\n➕ Added Carriers: None")

        if removed_carriers:
            print("\n➖ Removed Carriers:")
            for cid, name in sorted(removed_carriers.items()):
                print(f"  * ID {cid:5} ➜ {name}")
        else:
            print("\n➖ Removed Carriers: None")

        # 2. Compare IIN rules
        c1.execute("SELECT carrier_id, iccid_prefix FROM iin")
        iin1 = {}
        for cid, prefix in c1.fetchall():
            iin1.setdefault(cid, set()).add(prefix)

        c2.execute("SELECT carrier_id, iccid_prefix FROM iin")
        iin2 = {}
        for cid, prefix in c2.fetchall():
            iin2.setdefault(cid, set()).add(prefix)

        iin_changes = []
        all_cids = sorted(list(set(iin1.keys()) | set(iin2.keys())))
        for cid in all_cids:
            name = names2.get(cid) or names1.get(cid) or f"Unknown ({cid})"
            prefixes1 = iin1.get(cid, set())
            prefixes2 = iin2.get(cid, set())

            added_p = prefixes2 - prefixes1
            removed_p = prefixes1 - prefixes2

            if added_p or removed_p:
                iin_changes.append((cid, name, added_p, removed_p))

        if iin_changes:
            print("\n📡 ICCID/IIN Rule Changes:")
            for cid, name, added_p, removed_p in iin_changes:
                print(f"  * {name} (ID {cid}):")
                if added_p:
                    print(f"    - Added prefixes: {', '.join(sorted(added_p))}")
                if removed_p:
                    print(f"    - Removed prefixes: {', '.join(sorted(removed_p))}")
        else:
            print("\n📡 ICCID/IIN Rule Changes: None")

        # 3. Compare confmap configuration hashes
        c1.execute("SELECT carrier_id, confman FROM confmap")
        hash1 = {row[0]: row[1] for row in c1.fetchall()}

        c2.execute("SELECT carrier_id, confman FROM confmap")
        hash2 = {row[0]: row[1] for row in c2.fetchall()}

        changed_configs = []
        matching_cids = sorted([cid for cid in hash1 if cid in hash2])

        for cid in matching_cids:
            h1 = hash1[cid]
            h2 = hash2[cid]
            if h1 != h2:
                name = names2.get(cid) or names1.get(cid) or f"Unknown ({cid})"
                changed_configs.append((cid, name, h1, h2))

        if changed_configs:
            print("\n⚙️ Changed Baseband Config Tables:")
            for cid, name, h1, h2 in changed_configs:
                print(f"  * {name} (ID {cid}):")
                print(f"    - DB 1 Config Table: {h1}")
                print(f"    - DB 2 Config Table: {h2}")
        else:
            print("\n⚙️ Changed Baseband Config Tables: None")

        print("\n🎉 Comparison finished successfully!")

    except sqlite3.Error as ex:
        print(f"\n❌ SQLite Error during comparison: {ex}")
    finally:
        conn1.close()
        conn2.close()


def main() -> None:
    """The entry point command handler for differ subcommand comparisons."""
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

    # We will compare all devices pairwise against baseline (index 0)
    baseline_dir = devices[0]
    baseline_name = os.path.basename(baseline_dir)

    baseline_toml_dir = os.path.join(baseline_dir, "toml")
    if not os.path.exists(baseline_toml_dir):
        print(f"No toml files found in {baseline_toml_dir}")
        sys.exit(1)

    toml_files = sorted(os.listdir(baseline_toml_dir))
    toml_files = [f for f in toml_files if f.endswith(".toml")]

    print(f"\nPerforming semantic comparison against baseline: {baseline_name}")
    diff_count = 0

    for filename in toml_files:
        base_file = os.path.join(baseline_toml_dir, filename)
        base_data = load_toml_config(base_file)
        if not base_data:
            continue

        for other_dir in devices[1:]:
            other_name = os.path.basename(other_dir)
            other_file = os.path.join(other_dir, "toml", filename)

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


if __name__ == "__main__":
    main()
