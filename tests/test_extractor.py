"""Unit tests for carrier settings decoding and extraction utilities."""

import unittest
from pixel_extractor.common import CODENAMES, get_device_sort_rank, parse_factory_zip_name
from pixel_extractor.extractor import (
    clean_config_key,
    format_toml_value,
    serialize_to_toml_string,
)


class ExtractorTests(unittest.TestCase):
    """Verify carrier settings serialization and codename parsing."""

    def test_pixel_11_codenames(self) -> None:
        """Verify Pixel 11 series codename mappings and rank."""
        self.assertEqual(CODENAMES.get("grizzly"), "Pixel 11 Pro")
        self.assertEqual(CODENAMES.get("cubs"), "Pixel 11")
        self.assertEqual(CODENAMES.get("yogi"), "Pixel 11 Pro Fold")
        self.assertEqual(CODENAMES.get("kodiak"), "Pixel 11 Pro XL")

        self.assertEqual(get_device_sort_rank("grizzly"), 11)
        self.assertEqual(get_device_sort_rank("cubs"), 11)
        self.assertEqual(get_device_sort_rank("yogi"), 11)
        self.assertEqual(get_device_sort_rank("kodiak"), 11)

    def test_clean_config_key(self) -> None:
        """Verify suffixes like _double, _bool, _string are stripped."""
        self.assertEqual(clean_config_key("entry_threshold_ss_rsrq_double"), "entry_threshold_ss_rsrq")
        self.assertEqual(clean_config_key("enable_volte_bool"), "enable_volte")
        self.assertEqual(clean_config_key("carrier_name_string"), "carrier_name")
        self.assertEqual(clean_config_key("timeout_long"), "timeout")

    def test_format_toml_value_types(self) -> None:
        """Verify TOML value formatting handles floats, bools, ints, strings."""
        self.assertEqual(format_toml_value(True), "true")
        self.assertEqual(format_toml_value(False), "false")
        self.assertEqual(format_toml_value(42), "42")
        self.assertEqual(format_toml_value(-35.0), "-35.0")
        self.assertEqual(format_toml_value("hello\nworld"), '"hello\\nworld"')
        self.assertEqual(format_toml_value(["a", "b"]), '[ "a", "b" ]')

    def test_serialize_to_toml_string(self) -> None:
        """Verify TOML output parses validly without syntax errors."""
        rules = [{"mcc_mnc": "20404", "spn": "C Spire\n"}]
        cs_dict = {
            "version": 100,
            "apns": [
                {
                    "name": "Test APN",
                    "value": "internet",
                    "type": ["default", "supl"],
                    "authtype": 3,
                }
            ],
            "configs": {
                "threshold": -35.0,
                "nested": {
                    "enabled": True,
                },
            },
        }
        toml_str = serialize_to_toml_string(rules, cs_dict)
        self.assertIn('spn = "C Spire\\n"', toml_str)
        self.assertIn("threshold = -35.0", toml_str)
        self.assertIn("enabled = true", toml_str)


if __name__ == "__main__":
    unittest.main()
