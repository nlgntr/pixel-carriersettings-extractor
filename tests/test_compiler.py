"""Focused tests for dashboard capability compilation."""

import tempfile
import unittest
from pathlib import Path

from pixel_extractor.compiler import parse_uecap_markdown


class UeCapabilityMarkdownTests(unittest.TestCase):
    """Verify source metadata survives capability Markdown parsing."""

    def test_parses_modem_config_version(self) -> None:
        """Expose the numeric modem revision used to group UI profiles."""
        with tempfile.TemporaryDirectory() as temp_dir:
            profile = Path(temp_dir) / "EE_test.md"
            profile.write_text(
                "# UE Capability Summary: EE_test\n\n"
                "- **Modem Config Version**: 862505271\n",
                encoding="utf-8",
            )

            summary = parse_uecap_markdown(str(profile))

        self.assertEqual(summary.modem_config_version, 862505271)

    def test_invalid_modem_config_version_uses_unknown_sentinel(self) -> None:
        """Keep malformed or absent source revisions explicitly unknown."""
        cases = {
            "missing": "# UE Capability Summary: EE_missing\n",
            "malformed": (
                "# UE Capability Summary: EE_malformed\n\n"
                "- **Modem Config Version**: unknown\n"
            ),
        }

        with tempfile.TemporaryDirectory() as temp_dir:
            for name, content in cases.items():
                with self.subTest(name=name):
                    profile = Path(temp_dir) / f"{name}.md"
                    profile.write_text(content, encoding="utf-8")
                    summary = parse_uecap_markdown(str(profile))
                    self.assertEqual(summary.modem_config_version, 0)


if __name__ == "__main__":
    unittest.main()
