# Pixel Carrier Settings Extractor

This repository contains tools and extracted carrier configuration files for Google Pixel devices. The configurations are stored in Google's proprietary `.pb` (protocol buffer) format and dictate cellular properties, IMS profiles, and capabilities for various carriers worldwide.

The current files in this repository were extracted from **Android 17 (July 2026 Update, Build CP2A.260705.006)** for:
- **Pixel 10 Pro (ROW / Rest of World)** — Codenamed `blazer`
- **Pixel 10a (ROW / Rest of World)** — Codenamed `stallion`

---

## 🛠️ Extraction Tool: `extract_carrier_settings.py`

A python utility is included in the root directory to automatically parse official Google factory image ZIP files, locate the internal `product.img` partition, parse its raw ext4 filesystem structure (without requiring root/sudo or actual partition mounting), and extract the carrier settings for targeted countries.

### Prerequisites

You need the `uv` tool to run this script easily. It will automatically resolve the `ext4` read-only filesystem library dependency inside a sandboxed virtual environment.

```bash
# Verify uv is installed
uv --version
```

### Usage

#### 1. Extract UK (`gb`) carriers from all factory zips in the current directory (Default):
The script will automatically detect any `*-factory-*.zip` files in the working directory:
```bash
uv run extract_carrier_settings.py
```

#### 2. Extract from a specific factory image file:
If your image file is in another location:
```bash
uv run extract_carrier_settings.py -i /path/to/stallion-cp2a.260705.006-factory-e7631ea9.zip
```

#### 3. Extract other countries' carrier settings:
You can specify a comma-separated list of country codes (such as `us` for USA, `de` for Germany, `ca` for Canada):
```bash
uv run extract_carrier_settings.py -c us,de,ca
```

#### 4. Extract carrier settings for ALL countries:
To pull the entire directory of carriers:
```bash
uv run extract_carrier_settings.py -c all
```

---

## 📂 Repository Structure

- `extracted_carrier_settings/`
  - `android_17_july_2026_pixel_10_pro_row/` — Staged carrier configurations (`.pb`) for the Pixel 10 Pro.
  - `android_17_july_2026_pixel_10a_row/` — Staged carrier configurations (`.pb`) for the Pixel 10a.
- `extract_carrier_settings.py` — The automated extraction utility.
- `.gitignore` — Ignores large factory image files and binary cache.

---

## 🔍 How it Works

1. **ZIP Extraction**: The script inspects the outer Google factory image zip file and opens the inner `image-<device>-<build>.zip` file.
2. **Partition Locating**: It extracts `product.img`, which contains the product partition of the Android OS.
3. **Ext4 Volume Parsing**: Using the `ext4` library, it reads the raw ext4 filesystem from `product.img` directly, walks to `/etc/CarrierSettings/`, and filters files.
4. **Protobuf Filtering**:
   - `carrier_list.pb` (the main index of MCC/MNCs mappings) is always extracted.
   - Specific country `.pb` files (e.g. `ee_gb.pb` for EE UK, `vodafone_gb.pb` for Vodafone UK) are parsed and copied out.
5. **Output naming**: Results are outputted to clean folders prefixed with the Android version, release date, and user-friendly device name (e.g., `android_17_july_2026_pixel_10_pro_row`).
6. **Cleanup**: Temporary `.img` files are automatically deleted after the extraction is finished to preserve disk space.

---

## 🚀 What's Next?

Once the `.pb` files are extracted, you can parse, modify, or merge them using the [pixel-carriersettings-toolbox](https://github.com/vorot93/pixel-carriersettings-toolbox):
```bash
# Decode a carrier config:
pixel-carriersettings-toolbox decode <extracted_file>.pb -o decoded_output.textpb
```
