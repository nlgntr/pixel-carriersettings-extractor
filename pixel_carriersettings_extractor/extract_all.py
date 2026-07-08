#!/usr/bin/env python3
import sys
import argparse
from . import extract_carrier_settings
from . import extract_cfg_db
from . import extract_uecaps

def main():
    parser = argparse.ArgumentParser(
        description="Unified Extraction Tool: Runs all Pixel carrier configuration and capability extractors."
    )
    parser.add_argument(
        '-i', '--image',
        help="Path to a specific factory image ZIP file. If omitted, the scripts scan the current directory."
    )
    parser.add_argument(
        '-c', '--country',
        default='gb',
        help="Comma-separated country code(s) of carriers to extract (e.g. 'gb', 'us,de'). Use 'all' to extract all. Default is 'gb'."
    )
    
    args = parser.parse_args()
    
    cmd_args = ["-c", args.country]
    if args.image:
        cmd_args.extend(["-i", args.image])
        
    print("=================== 1. Extracting Carrier Settings (.pb + .toml) ===================")
    extract_carrier_settings.main(cmd_args)
    
    print("\n=================== 2. Extracting Modem Configuration (cfg.db + confseqs) ===================")
    cfg_args = []
    if args.image:
        cfg_args.extend(["-i", args.image])
    extract_cfg_db.main(cfg_args)
    
    print("\n=================== 3. Extracting UE Radio Capabilities (.bin + Markdown Summaries) ===================")
    extract_uecaps.main(cmd_args)
    
    print("\n🎉 Unified extraction job completed successfully!")

if __name__ == "__main__":
    main()
