"""Orchestrate Pixel Carrier Settings and UE capabilities extraction commands."""

import argparse
import glob
import os
import sys

from . import compiler, differ, extractor


def get_factory_images(image_path: str | None = None) -> list[str]:
    """Helper to locate target factory image ZIP files for extraction.

    Args:
        image_path: Path to a specific factory ZIP file, if provided by the user.

    Returns:
        A list of target factory image ZIP file paths.
    """
    if image_path:
        if not os.path.exists(image_path):
            print(f"Error: The specified file '{image_path}' does not exist.")
            sys.exit(1)
        return [image_path]

    print("Scanning current directory for factory image ZIPs (*-factory-*.zip)...")
    images = sorted(glob.glob("*-factory-*.zip"))
    if not images:
        print("No factory image ZIP files found in the current directory.")
        print("Please provide a path using --image, or place factory ZIPs in this directory.")
        sys.exit(1)
    return images


def handle_extract_all(args: argparse.Namespace) -> None:
    """Subcommand handler to run the full end-to-end extraction pipeline.

    Args:
        args: Parsed command-line arguments.
    """
    images = get_factory_images(args.image)
    countries = [c.strip().lower() for c in args.country.split(",")]
    out_base_dir = os.path.abspath(args.output)

    for fz in images:
        print(f"\n🚀 Running full extraction for: {os.path.basename(fz)}")
        print("=================== 1. Extracting Carrier Settings (.pb + .toml) ===================")
        extractor.extract_carrier_settings(fz, countries, out_base_dir)

        print("\n=================== 2. Extracting Modem Configuration (cfg.db) ===================")
        extractor.extract_cfg_db(fz, out_base_dir)

        print("\n=================== 3. Extracting UE Radio Capabilities (.bin + Markdown) ===================")
        extractor.extract_uecaps(fz, countries, "markdown", True, out_base_dir)

    print("\n🎉 Unified extraction job completed successfully!")


def handle_extract_carrier_settings(args: argparse.Namespace) -> None:
    """Subcommand handler to extract CarrierSettings protobuf files and compile them to TOML.

    Args:
        args: Parsed command-line arguments.
    """
    images = get_factory_images(args.image)
    countries = [c.strip().lower() for c in args.country.split(",")]
    out_base_dir = os.path.abspath(args.output)

    for fz in images:
        extractor.extract_carrier_settings(fz, countries, out_base_dir)
    print("\n🎉 Carrier Settings extraction completed successfully!")


def handle_extract_cfg_db(args: argparse.Namespace) -> None:
    """Subcommand handler to extract the SQLite modem configurations database (cfg.db).

    Args:
        args: Parsed command-line arguments.
    """
    images = get_factory_images(args.image)
    out_base_dir = os.path.abspath(args.output)

    for fz in images:
        extractor.extract_cfg_db(fz, out_base_dir)
    print("\n🎉 Shannon Modem Config extraction completed successfully!")


def handle_extract_uecaps(args: argparse.Namespace) -> None:
    """Subcommand handler to extract and decode radio capabilities (uecapconfig).

    Args:
        args: Parsed command-line arguments.
    """
    images = get_factory_images(args.image)
    countries = [c.strip().lower() for c in args.country.split(",")]
    out_base_dir = os.path.abspath(args.output)
    export_bin = not args.no_bin

    for fz in images:
        extractor.extract_uecaps(fz, countries, args.format, export_bin, out_base_dir)
    print("\n🎉 UE Capabilities extraction completed successfully!")


def handle_compile(args: argparse.Namespace) -> None:
    """Subcommand handler to compile extracted build configurations to the web dashboard.

    Args:
        args: Parsed command-line arguments.
    """
    print("Compiling static web showcase database...")
    compiler.main()


def handle_diff(args: argparse.Namespace) -> None:
    """Subcommand handler to compare carrier configurations across devices.

    Args:
        args: Parsed command-line arguments.
    """
    print("Comparing carrier settings configs...")
    differ.main()


def handle_diff_cfg(args: argparse.Namespace) -> None:
    """Subcommand handler to compare two SQLite modem configuration database files.

    Args:
        args: Parsed command-line arguments.
    """
    differ.diff_cfg_databases(args.db1, args.db2)


def serve(args: argparse.Namespace | None = None) -> None:
    """Runs a local static web server for the compiled dashboard under docs/.

    The dashboard fetches its data with fetch(), which browsers block over the
    file:// protocol, so it must be previewed over HTTP. This serves the docs/
    folder (resolved relative to the package) on http://localhost:8000/.
    """
    import http.server
    import os
    from pathlib import Path

    docs_dir = Path(__file__).resolve().parent.parent / "docs"
    if not docs_dir.is_dir():
        print(f"Error: dashboard directory not found at {docs_dir}")
        return
    os.chdir(docs_dir)
    port = 8000
    print(f"Serving dashboard at http://localhost:{port}/  (Ctrl+C to stop)")
    http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=port)

def main() -> None:
    """Main CLI command dispatcher."""
    parser = argparse.ArgumentParser(
        description="Unified Google Pixel Carrier Settings & Capabilities Extractor CLI tool."
    )

    subparsers = parser.add_subparsers(
        dest="command",
        title="commands",
        description="Available subcommands",
        required=True,
    )

    # Subcommand: extract-all
    p_all = subparsers.add_parser(
        "extract-all",
        help="Extract CarrierSettings, cfg.db, and UE capabilities sequentially.",
    )
    p_all.add_argument(
        "-i",
        "--image",
        help="Path to a specific factory ZIP file. If omitted, scans current directory.",
    )
    p_all.add_argument(
        "-c",
        "--country",
        default="gb",
        help="Comma-separated country code(s) of carriers to extract (e.g. 'gb', 'us,de'). Default is 'gb'.",
    )
    p_all.add_argument("-o", "--output", default="extracted", help="Output base directory. Default is 'extracted'.")
    p_all.set_defaults(func=handle_extract_all)

    # Subcommand: extract-carrier-settings
    p_cs = subparsers.add_parser(
        "extract-carrier-settings",
        help=(
            "Extract only framework carrier settings (.pb + .toml) from product.img. "
            "Requires one factory image per device."
        ),
    )
    p_cs.add_argument("-i", "--image", help="Path to specific factory ZIP file.")
    p_cs.add_argument("-c", "--country", default="gb", help="Comma-separated country code(s). Default is 'gb'.")
    p_cs.add_argument("-o", "--output", default="extracted", help="Output base directory.")
    p_cs.set_defaults(func=handle_extract_carrier_settings)

    # Subcommand: extract-cfg-db
    p_db = subparsers.add_parser(
        "extract-cfg-db",
        help="Extract Shannon modem configs database (cfg.db) from vendor partition.",
    )
    p_db.add_argument("-i", "--image", help="Path to specific factory ZIP file.")
    p_db.add_argument("-o", "--output", default="extracted", help="Output base directory.")
    p_db.set_defaults(func=handle_extract_cfg_db)

    # Subcommand: extract-uecaps
    p_ue = subparsers.add_parser(
        "extract-uecaps",
        help=(
            "Extract only UE radio capabilities from vendor.img. "
            "One image per modem generation is sufficient because profiles are shared across devices."
        ),
    )
    p_ue.add_argument("-i", "--image", help="Path to specific factory ZIP file.")
    p_ue.add_argument("-c", "--country", default="gb", help="Comma-separated country code(s). Default is 'gb'.")
    p_ue.add_argument(
        "-f",
        "--format",
        choices=["markdown", "toml", "text", "none"],
        default="markdown",
        help="Decoded text format. Default is 'markdown'.",
    )
    p_ue.add_argument("--no-bin", action="store_true", help="Disable exporting raw binarypb/bin capability files.")
    p_ue.add_argument("-o", "--output", default="extracted", help="Output base directory.")
    p_ue.set_defaults(func=handle_extract_uecaps)

    # Subcommand: compile
    p_comp = subparsers.add_parser(
        "compile", help="Compile extracted configs into the static web site showcase (docs/)."
    )
    p_comp.set_defaults(func=handle_compile)

    # Subcommand: diff
    p_diff = subparsers.add_parser("diff", help="Compares carrier configs across different devices inside a build.")
    p_diff.set_defaults(func=handle_diff)

    # Subcommand: diff-cfg
    p_diff_cfg = subparsers.add_parser(
        "diff-cfg",
        help="Compare policy database files (cfg.db) across device variants.",
    )
    p_diff_cfg.add_argument("db1", help="Path to the first cfg.db database.")
    p_diff_cfg.add_argument("db2", help="Path to the second cfg.db database.")
    p_diff_cfg.set_defaults(func=handle_diff_cfg)

    # Subcommand: serve
    p_serve = subparsers.add_parser(
        "serve",
        help="Serve the compiled static web dashboard (docs/) over HTTP for local preview.",
    )
    p_serve.set_defaults(func=serve)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
