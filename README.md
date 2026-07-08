# 📱 Pixel Carrier Settings & UE Capability Extractor

This repository provides automated, dependency-free tools to extract, decode, and analyze carrier configurations, modem SQLite databases, and UE (User Equipment) radio capability profiles directly from Google Pixel factory firmware images.

It is designed for cellular configuration enthusiasts, baseband researchers, and developers customizing network behavior on rooted Google Pixel devices.

---

## 🛠️ Supported Architectures & Devices

While the scripts are generic and will parse older Qualcomm or Exynos Pixel partitions, the extraction targets and built-in heuristics are optimized for the **Exynos 5400-based Pixel 10 family** running **Android 17+**:

| Codename | Friendly Name | Model Type | Characteristics |
| :--- | :--- | :--- | :--- |
| `blazer` | **Pixel 10 Pro** | Flagship Pro (Exynos 5400) | Full RF features, Satellite connectivity, 4x4 MIMO, dual-low-band CA |
| `mustang` | **Pixel 10 Pro XL** | Flagship Pro (Exynos 5400) | Full RF features, Satellite connectivity, 4x4 MIMO, dual-low-band CA |
| `rango` | **Pixel 10 Pro Fold** | Flagship Pro (Exynos 5400) | Full RF features, Satellite connectivity, 4x4 MIMO, dual-low-band CA |
| `frankel` | **Pixel 10** | Standard Flagship (Exynos 5400) | 4x4 MIMO, No dual-low-band CA (e.g. B20 + B28 blocked) |
| `stallion` | **Pixel 10a** | Mid-Range A-Series (Exynos 5400) | 2x2 MIMO limits, 15kHz SCS limit, regional variants (EU/UK vs. US) |
| `komodo` | **Pixel 9 Pro XL** | Flagship Pro (Exynos 5400) | Full RF features, Satellite connectivity, 4x4 MIMO, dual-low-band CA |
| `caiman` | **Pixel 9 Pro** | Flagship Pro (Exynos 5400) | Full RF features, Satellite connectivity, 4x4 MIMO, dual-low-band CA |
| `tokay` | **Pixel 9** | Standard Flagship (Exynos 5400) | 4x4 MIMO, No dual-low-band CA |
| `comet` | **Pixel Fold / 9 Pro Fold** | Foldable Flagship (Exynos 5400) | Foldable form factor capabilities |

---

## 📂 Extracted Workspace Directory Structure

All outputs are grouped under a top-level directory named after the **Android Version, Release Date, and Build ID** to keep builds isolated. Model configurations that share the same firmware block are automatically deduplicated at the file level to prevent redundancy, while framework settings are isolated per model to preserve unique carrier feature flags:

```
extracted/
└── android_17_july_2026_cp2a.260705.006/             # Grouped by Android version & Build ID
    ├── carrier_settings/                            # 1. Framework Carrier Settings (.pb + .toml)
    │   ├── pixel_10a_stallion/                     # Isolated by device variant to prevent overwriting
    │   │   ├── carrier_list.pb                      # Global SIM-matching rule lookup binary
    │   │   ├── ee_gb.pb                             # Raw carrier configuration binary protobuf
    │   │   ├── ...
    │   │   └── toml/                                # Natively decoded carrier configs (editable TOMLs)
    │   │       ├── ee_gb.toml                       # e.g., EE UK configuration (APNs, IMS settings)
    │   │       └── ...
    │   └── pixel_10_pro_blazer/
    │       ├── carrier_list.pb
    │       ├── ee_gb.pb
    │       └── toml/
    │           └── ee_gb.toml
    │
    ├── cfg_db/                                      # 2. Low-level Modem NV Configurations
    │   ├── pixel_10a_stallion/                      # Isolated by device variant to prevent overwriting
    │   │   └── cfg.db                               # SQLite modem carrier policy database
    │   └── pixel_10_pro_blazer/
    │       └── cfg.db
    │
    └── uecaps/                                      # 3. Modem Radio Capability Profiles (unified build)
        ├── bin/                                     # Raw .bin files for uecaps.hennes.xyz upload
        │   ├── EE_122181298464.bin
        │   └── O2_UK_261620682585876042.bin
        ├── binarypb/                                # Binary protobuf capability descriptors
        │   └── EE_122181298464.binarypb
        └── markdown/                                # Translated human-readable combination sheets
            ├── EE_122181298464.md
            └── O2_UK_261620682585876042.md          # Bands, MIMO, Modulation, and CA classification
```

---

## 🔬 Included Extraction Subcommands

### 1. Unified Extractor (`extract-all`)
Runs all three sub-extractors (`extract-carrier-settings`, `extract-cfg-db`, and `extract-uecaps`) sequentially. It automatically scans the workspace directory, mounts partition images, handles file-level deduplication, and generates the nested directory structure.

```bash
uv run pixel-extractor extract-all [-i/--image <path_to_factory_zip>] [-c/--country <codes>]
```

### 2. Framework Carrier Settings (`extract-carrier-settings`)
Mounts the `product.img` partition and extracts carrier configurations.
*   **Native TOML Decoder**: Parses binary `.pb` files natively in Python (no external Rust compiler or `protoc` required) and outputs them as fully valid `.toml` configurations compatible with the Rust `pixel-carriersettings-toolbox` schema.
*   **Carrier List Joining**: Parses `carrier_list.pb` and joins the specific carrier's SIM match rules (MCC/MNC, GID1, GID2, SPN, etc.) directly into its TOML document under `[[carrier_id]]` headers, creating self-describing configuration sheets.
*   **Model Isolation**: Places output configurations under device-specific subdirectories (e.g. `pixel_10_pro_blazer`) to preserve hardware-specific flags (e.g. satellite configurations).

### 3. Low-level Modem NV Config (`extract-cfg-db`)
Mounts the `vendor.img` partition and extracts the baseband regional SQLite configuration database `/firmware/carrierconfig/cfg.db`. 
*   **DB Analyzer**: Connects to the SQLite database post-extraction, runs query diagnostics, lists regional fallback rules, and dumps table configuration schemas (e.g., policy constraints, IIN rules).
*   **Model Isolation**: Places the output SQLite database under device-specific subdirectories (e.g. `pixel_10_pro_blazer`) to prevent model-specific baseband policy changes from overwriting each other.

### 4. UE Capability Profile Translator (`extract-uecaps`)
Extracts UE Radio Capability configurations from `/firmware/uecapconfig/` in `vendor.img`.
*   **Multi-format Outputs**: Writes raw `.bin` files (for diag-site uploads), `.binarypb` descriptors, and human-readable summaries.
*   **Bandwidth & Layer Fallback**: Correctly interprets modem configuration index values. When a band profile falls back to default (`dl_fs_idx = 0`), the script automatically assigns 3GPP-standard bandwidths (e.g. 20 MHz LTE, 100 MHz NR C-Band) and MIMO layer mappings instead of showing empty `0 MHz` listings.
*   **Model Variant Classifier**: Dynamically parses the combinations, MIMO capabilities, and Subcarrier Spacings (SCS) inside the binary profile to classify the target hardware variant (e.g. Flagship Pro, Standard, A-Series regional variants) and embeds this in the report.

### 5. Semantic Config Differ (`diff`)
A custom comparison tool that parses carrier settings across multiple extracted devices, strips version numbers (which change dynamically on Google's build pipelines), and highlights **only semantic configuration differences** (APN configurations, IMS flags, and carrier features).

```bash
uv run pixel-extractor diff
```

### 6. Website Database Compiler (`compile`)
Compiles all extracted carrier parameters, SQLite policies, and UE capabilities from the nested workspace into a structured client-side JSON database (`docs/data.js`) to feed the web showcase dashboard.

```bash
uv run pixel-extractor compile
```

---

## ⚙️ Prerequisites & Installation

The repository is structured as a standard Python package. It requires Python 3.13+.

If you are using the **`uv`** package manager (recommended), no manual installation is required! `uv` will automatically inspect `pyproject.toml`, build a virtual environment, install dependencies (`ext4`), and execute the tool on-the-fly.

If you don't use `uv`, you can install it using pip:
```bash
pip install -e .
```

Place your Pixel factory ZIP images (downloaded from the [Google Developers Portal](https://developers.google.com/android/images)) directly in the root of the project directory.

---

## 📖 Command-Line Usage

You can run the tool directly using `uv run`, or invoke `python3 main.py` locally. If installed via pip, the command `pixel-extractor` will be mapped to your shell.

### Subcommands Map
| Subcommand | Purpose |
|------------|---------|
| `extract-all` | Runs all extractors sequentially for the target country (default: `gb`). |
| `extract-carrier-settings` | Extracts framework carrier settings and compiles them to TOML. |
| `extract-cfg-db` | Extracts Shannon modem database `cfg.db` configurations. |
| `extract-uecaps` | Extracts UE capability configs and decodes them into summaries. |
| `compile` | Compiles the client-side static web showcase under the `docs/` folder. |
| `diff` | Compares carrier configs across different devices in a build. |

### Usage Examples
```bash
# Extract all configurations for UK/Europe carriers (default)
pixel-extractor extract-all

# Local repository execution without installing:
python3 main.py extract-all

# Extract for US and German carriers only:
pixel-extractor extract-all -c us,de

# Extract all countries from a specific factory ZIP:
pixel-extractor extract-all -i stallion-cp2a.260705.006-factory-e7631ea9.zip -c all

# Extract only UE Capabilities in Markdown format:
pixel-extractor extract-uecaps -o my_caps -f markdown

# Rebuild the web site dashboard
pixel-extractor compile
```

---

## 🌍 Multi-Region Customizations

By default, the provided compilation configuration extracts settings for **UK** carriers (`-c gb`). If you want to host a carrier showcase website for your own region:
1. Run the extraction pipeline with your target country codes, e.g. `-c us,de,jp` or `-c all`:
   ```bash
   uv run pixel-extractor extract-all -c us,de,jp
   ```
2. Re-compile the showcase database:
   ```bash
   uv run pixel-extractor compile
   ```
3. Commit and push the changes. The deployment workflow will automatically deploy your new regional showcase to your GitHub Pages repository! Other developers are welcome and encouraged to fork this codebase for their own regional showcases.

---

## 🔍 Mapping Suffix Hashes to Pixel 10 Variants

Google ships a unified `vendor.img` partition supporting the entire Pixel 10 family. Capability files are stored with an 18-digit suffix hash (e.g. `O2_UK_261620682585876042.bin`), representing a 64-bit signature of the device's hardware RF configuration.

The classifier in `pixel-extract-uecaps` parses these profiles to identify the likely device variant and write it directly into the Markdown summary headers:

| Variant | Characteristics | O2 UK Combos | EE Combos | VF UK Combos | Three Combos |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Pixel 10 Pro / Pro XL / Pro Fold** | **Flagship Pro**: Supports dual-low-band carrier aggregation (B20 + B28), 4x4 MIMO, and 30kHz Subcarrier Spacing (SCS) for fast 5G. | **462** | **484** / **483** | **763** / **761** | **181** / **174** |
| **Pixel 10 (Standard)** | **Standard Flagship**: Supports 4x4 MIMO and 30kHz SCS, but blocks dual-low-band carrier aggregation (B20 + B28 is disabled). | **437** | **479** / **478** | **534** / **531** | **157** |
| **Pixel 10a (UK/EU SKU)** | **Mid-Range/A-Series**: Restricted to 2x2 MIMO and 15kHz SCS, but supports all major UK carrier bands (including O2's LTE Band 40). | **230** | **257** | **333** | **121** |
| **Pixel 10a (Basic / NA SKU)** | **Fallback / Basic**: Restricted to 2x2 MIMO, 15kHz SCS, and **completely removes Band 40** (which is not used by North American carriers). | **121** | **109** | **170** | **111** / **66** |

---

## 💡 Key Architectural Discoveries

When extracting and comparing stallion (Pixel 10a) and blazer (Pixel 10 Pro) configurations on the CP2A.260705.006 build, the following observations were made:
- **Unified Modem Layer**: The UE capability profiles (`uecaps/`) and modem settings (`cfg.db`) are **100% byte-for-byte identical** on the partition layer. Google builds a single unified baseband image for all Exynos 5400 devices.
- **Variant Carrier Settings**: Framework settings (`carrier_settings/`) contain subtle model-specific feature flags:
  - **Satellite Connectivity**: `blazer` profiles (Pixel 10 Pro) contain extra keys enabling satellite networks (`satellite_ignore_data_roaming_setting` on NTT Docomo, `carrier_supported_satellite_services_per_provider_bundle` on KDDI, and T-Mobile satellite support flags) that are absent on the standard A-Series.
  - **WiFi Calling**: Differences in WFC availability configurations (`carrier_wfc_ims_available` on AIS Thailand) and UI formatting tags.

---

## 🔄 How to Add & Process New Device Factory Images

When a new Android security release is published, or when you want to add other Pixel devices (e.g. Pixel 9, Pixel 9 Pro Fold, etc.) to the showcase, follow these steps to update the database and static site:

### Step 1: Place the Factory ZIP
Download the factory image `.zip` for the target device variant from the official [Google Developers Portal](https://developers.google.com/android/images) and place it directly in the root directory of this project.
> [!NOTE]
> Do not unzip the factory image. The pipeline handles mounting and extracting directly from the compressed factory ZIP.

### Step 2: Run the Extraction Pipeline
Run the unified extractor to parse the partition tables, SQLite databases, and capability binaries:
```bash
pixel-extractor extract-all
```
This automatically processes all factory ZIPs in the root folder, isolates them under their respective Build IDs and device codenames in the `extracted/` directory, and translates them.

### Step 3: Rebuild the Web Dashboard Database
Run the compiler script to update `docs/data.js` and rebuild the client-side static bundle with the new devices and capabilities:
```bash
pixel-extractor compile
```

### Step 4: Publish to GitHub Pages
Commit and push the new changes. The repository's automated CI/CD pipeline ([deploy.yml](file:///.github/workflows/deploy.yml)) will deploy the updated dashboard to your GitHub Pages URL automatically:
```bash
git add extracted/ docs/
git commit -m "feat: add and compile new factory image configs"
git push
```

---

## 📦 Automated Versioning & Releases

This repository uses the official **[`commitizen-action`](https://github.com/commitizen-tools/commitizen-action)** inside the automated release workflow ([release.yml](file:///.github/workflows/release.yml)).

Whenever commits are pushed directly to `main`:
1. The workflow scans your conventional commits (`feat:`, `fix:`, etc.) since the last tag.
2. If changes are detected, it automatically bumps the version inside `pyproject.toml` and `pixel_extractor/__init__.py`.
3. It updates `CHANGELOG.md` with the new changes.
4. It creates a commit and pushes the corresponding git tag (e.g. `v1.1.0`) directly back to the `main` branch.

---

## 🤝 Credits & Acknowledgements

This project's native TOML generator is designed to be fully compatible with the schemas defined by the excellent **[pixel-carriersettings-toolbox](https://github.com/h4wkd3v/pixel-carriersettings-toolbox)** project. 

The decoded `.toml` files produced here can be compiled directly back into Magisk-flashable CarrierSettings overlays using their Rust build toolchain. Many thanks to its developers for their foundational research on Pixel carrier configuration schemas!
