const DATABASE = {
  "builds": {
    "android_17_july_2026_cp2a.260705.006": {
      "devices": {
        "pixel_9_pro_xl_komodo": {
          "friendly_name": "Pixel 9 Pro Xl Komodo",
          "carriers": {
            "o2prepaid_gb.toml": {
              "carrier_name": "O2PREPAID",
              "version": 77000000009,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "61"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "67"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "85"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "99"
                  }
                }
              ],
              "apns": [
                {
                  "name": "O2 Pay As You Go",
                  "value": "payandgo.o2.co.uk",
                  "type": [
                    "default",
                    "dun",
                    "mms",
                    "supl",
                    "hipri",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                  "password": "p",
                  "user": "o2",
                  "user_editable": false
                },
                {
                  "name": "O2 IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "carrier_default_wfc_ims_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "901",
                "disable_supplementary_services_in_airplane_mode": true,
                "display_hd_audio_property": false,
                "hide_lte_plus_data_icon": false,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_port": 443,
                  "ut_iptype_home": 0,
                  "ut_transport_type": 3,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        126
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "126": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 3
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "support_wfc_in_international_roaming": {
                    "kind": "bool",
                    "value": false
                  },
                  "xcap_transport_type": 0
                },
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 443,
                  "bsf_transport_type": 3
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 43300,
                  "child_sa_rekey_soft_timer_sec": 43200,
                  "diffie_hellman_groups": [
                    14
                  ],
                  "dpd_timer_sec": 1800,
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 43300
                  },
                  "ike_rekey_soft_timer_sec": 43200,
                  "ike_remote_id_type": 11,
                  "supported_ike_session_encryption_algorithms": [
                    12,
                    13
                  ]
                }
              },
              "full_settings": {
                "version": 77000000009,
                "apns": {
                  "apn": [
                    {
                      "name": "O2 Pay As You Go",
                      "value": "payandgo.o2.co.uk",
                      "type": [
                        "default",
                        "dun",
                        "mms",
                        "supl",
                        "hipri",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                      "password": "p",
                      "user": "o2",
                      "user_editable": false
                    },
                    {
                      "name": "O2 IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "901",
                  "disable_supplementary_services_in_airplane_mode": true,
                  "display_hd_audio_property": false,
                  "hide_lte_plus_data_icon": false,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_port": 443,
                    "ut_iptype_home": 0,
                    "ut_transport_type": 3,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          126
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "126": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 3
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "support_wfc_in_international_roaming": {
                      "kind": "bool",
                      "value": false
                    },
                    "xcap_transport_type": 0
                  },
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 443,
                    "bsf_transport_type": 3
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 43300,
                    "child_sa_rekey_soft_timer_sec": 43200,
                    "diffie_hellman_groups": [
                      14
                    ],
                    "dpd_timer_sec": 1800,
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 43300
                    },
                    "ike_rekey_soft_timer_sec": 43200,
                    "ike_remote_id_type": 11,
                    "supported_ike_session_encryption_algorithms": [
                      12,
                      13
                    ]
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "o2postpaid_gb.toml": {
              "carrier_name": "O2POSTPAID",
              "version": 77000000015,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410"
                }
              ],
              "apns": [
                {
                  "name": "O2 Pay Monthly",
                  "value": "mobile.o2.co.uk",
                  "type": [
                    "default",
                    "dun",
                    "mms",
                    "supl",
                    "hipri",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                  "password": "p",
                  "user": "o2",
                  "user_editable": false
                },
                {
                  "name": "O2 IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "carrier_default_wfc_ims_enabled": true,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_roaming_satellite_default_services": [
                  2,
                  3,
                  6
                ],
                "carrier_supported_satellite_services_per_provider_bundle": {
                  "23402": {
                    "kind": "int_array",
                    "value": [
                      2,
                      3,
                      6
                    ]
                  }
                },
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "901",
                "disable_supplementary_services_in_airplane_mode": true,
                "display_hd_audio_property": false,
                "emergency_messaging_supported": true,
                "hide_lte_plus_data_icon": false,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsserviceentitlement": {
                  "entitlement_server_url": "https://ses.o2.co.uk:10024"
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_port": 443,
                  "ut_iptype_home": 0,
                  "ut_transport_type": 3,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        126
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "126": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 3
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "support_wfc_in_international_roaming": {
                    "kind": "bool",
                    "value": false
                  },
                  "xcap_transport_type": 0
                },
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "satellite_attach_supported": true,
                "satellite_data_support_mode": 1,
                "satellite_entitlement_supported": true,
                "satellite_ignore_data_roaming_setting": true,
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "vonr_enabled": true,
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 443,
                  "bsf_transport_type": 3
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 43300,
                  "child_sa_rekey_soft_timer_sec": 43200,
                  "diffie_hellman_groups": [
                    14
                  ],
                  "dpd_timer_sec": 1800,
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 43300
                  },
                  "ike_rekey_soft_timer_sec": 43200,
                  "ike_remote_id_type": 11,
                  "supported_ike_session_encryption_algorithms": [
                    12,
                    13
                  ]
                }
              },
              "full_settings": {
                "version": 77000000015,
                "apns": {
                  "apn": [
                    {
                      "name": "O2 Pay Monthly",
                      "value": "mobile.o2.co.uk",
                      "type": [
                        "default",
                        "dun",
                        "mms",
                        "supl",
                        "hipri",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                      "password": "p",
                      "user": "o2",
                      "user_editable": false
                    },
                    {
                      "name": "O2 IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_roaming_satellite_default_services": [
                    2,
                    3,
                    6
                  ],
                  "carrier_supported_satellite_services_per_provider_bundle": {
                    "23402": {
                      "kind": "int_array",
                      "value": [
                        2,
                        3,
                        6
                      ]
                    }
                  },
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "901",
                  "disable_supplementary_services_in_airplane_mode": true,
                  "display_hd_audio_property": false,
                  "emergency_messaging_supported": true,
                  "hide_lte_plus_data_icon": false,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsserviceentitlement": {
                    "entitlement_server_url": "https://ses.o2.co.uk:10024"
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_port": 443,
                    "ut_iptype_home": 0,
                    "ut_transport_type": 3,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          126
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "126": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 3
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "support_wfc_in_international_roaming": {
                      "kind": "bool",
                      "value": false
                    },
                    "xcap_transport_type": 0
                  },
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "satellite_attach_supported": true,
                  "satellite_data_support_mode": 1,
                  "satellite_entitlement_supported": true,
                  "satellite_ignore_data_roaming_setting": true,
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "vonr_enabled": true,
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 443,
                    "bsf_transport_type": 3
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 43300,
                    "child_sa_rekey_soft_timer_sec": 43200,
                    "diffie_hellman_groups": [
                      14
                    ],
                    "dpd_timer_sec": 1800,
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 43300
                    },
                    "ike_rekey_soft_timer_sec": 43200,
                    "ike_remote_id_type": 11,
                    "supported_ike_session_encryption_algorithms": [
                      12,
                      13
                    ]
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": true,
                "satellite": true
              },
              "uecaps": []
            },
            "lebara_gb.toml": {
              "carrier_name": "LEBARA",
              "version": 77000000007,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "LEBARA"
                  }
                },
                {
                  "mcc_mnc": "23487"
                }
              ],
              "apns": [
                {
                  "name": "Lebara Internet",
                  "value": "uk.lebara.mobi",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms.lebara.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_mode": 1,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": []
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "qns": {
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": [
                    "*"
                  ]
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                }
              },
              "full_settings": {
                "version": 77000000007,
                "apns": {
                  "apn": [
                    {
                      "name": "Lebara Internet",
                      "value": "uk.lebara.mobi",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms.lebara.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": []
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "qns": {
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": [
                      "*"
                    ]
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "tesco_gb.toml": {
              "carrier_name": "TESCO",
              "version": 77000000011,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0A"
                  }
                }
              ],
              "apns": [
                {
                  "name": "TESCO",
                  "value": "prepay.tesco-mobile.com",
                  "type": [
                    "default",
                    "dun",
                    "mms",
                    "supl",
                    "hipri",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                  "password": "p",
                  "user": "tm"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "905",
                "hide_lte_plus_data_icon": false,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_port": 443,
                  "ut_iptype_home": 0,
                  "ut_transport_type": 3,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        126
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "126": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 3
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "xcap_transport_type": 0
                },
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 443,
                  "bsf_transport_type": 3
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ],
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                }
              },
              "full_settings": {
                "version": 77000000011,
                "apns": {
                  "apn": [
                    {
                      "name": "TESCO",
                      "value": "prepay.tesco-mobile.com",
                      "type": [
                        "default",
                        "dun",
                        "mms",
                        "supl",
                        "hipri",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                      "password": "p",
                      "user": "tm"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "905",
                  "hide_lte_plus_data_icon": false,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_port": 443,
                    "ut_iptype_home": 0,
                    "ut_transport_type": 3,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          126
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "126": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 3
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "xcap_transport_type": 0
                  },
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 443,
                    "bsf_transport_type": 3
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ],
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "btc_gb.toml": {
              "carrier_name": "BTC",
              "version": 77000000006,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "C3"
                  }
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "bearer_bitmask": "14|18|20",
                  "password": "secure",
                  "user": "eesecure",
                  "user_visible": false
                },
                {
                  "name": "Internet",
                  "value": "everywhere",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "MMS",
                  "value": "eezone",
                  "type": [
                    "mms",
                    "xcap"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms/",
                  "mmsc_proxy": "149.254.201.135",
                  "mmsc_proxy_port": "8080",
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE Emergency",
                  "value": "sos",
                  "type": [
                    "emergency"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_cross_sim_ims_available": false,
                "carrier_default_data_roaming_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imsss": {
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  }
                },
                "imswfc": {
                  "emergency_call_over_emergency_pdn": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ]
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000006,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "bearer_bitmask": "14|18|20",
                      "password": "secure",
                      "user": "eesecure",
                      "user_visible": false
                    },
                    {
                      "name": "Internet",
                      "value": "everywhere",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "MMS",
                      "value": "eezone",
                      "type": [
                        "mms",
                        "xcap"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms/",
                      "mmsc_proxy": "149.254.201.135",
                      "mmsc_proxy_port": "8080",
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE Emergency",
                      "value": "sos",
                      "type": [
                        "emergency"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imsss": {
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    }
                  },
                  "imswfc": {
                    "emergency_call_over_emergency_pdn": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ]
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "giffgaff_gb.toml": {
              "carrier_name": "GIFFGAFF",
              "version": 77000000008,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "50"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "GIFFGAFF"
                  }
                }
              ],
              "apns": [
                {
                  "name": "giffgaff",
                  "value": "giffgaff.com",
                  "type": [
                    "default",
                    "mms"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mediamessaging.co.uk:8002",
                  "password": "p",
                  "user": "gg"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "443",
                "hide_lte_plus_data_icon": false,
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "show_wifi_calling_icon_in_status_bar": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "imsemergency": {
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    14
                  ]
                }
              },
              "full_settings": {
                "version": 77000000008,
                "apns": {
                  "apn": [
                    {
                      "name": "giffgaff",
                      "value": "giffgaff.com",
                      "type": [
                        "default",
                        "mms"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mediamessaging.co.uk:8002",
                      "password": "p",
                      "user": "gg"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "443",
                  "hide_lte_plus_data_icon": false,
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "show_wifi_calling_icon_in_status_bar": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "imsemergency": {
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      14
                    ]
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "btb_gb.toml": {
              "carrier_name": "BTB",
              "version": 77000000006,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "B3"
                  }
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "bearer_bitmask": "14|18|20",
                  "password": "secure",
                  "user": "eesecure",
                  "user_visible": false
                },
                {
                  "name": "Internet",
                  "value": "everywhere",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "MMS",
                  "value": "eezone",
                  "type": [
                    "mms",
                    "xcap"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms/",
                  "mmsc_proxy": "149.254.201.135",
                  "mmsc_proxy_port": "8080",
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE Emergency",
                  "value": "sos",
                  "type": [
                    "emergency"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_cross_sim_ims_available": false,
                "carrier_default_data_roaming_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imsss": {
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  }
                },
                "imswfc": {
                  "emergency_call_over_emergency_pdn": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ]
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000006,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "bearer_bitmask": "14|18|20",
                      "password": "secure",
                      "user": "eesecure",
                      "user_visible": false
                    },
                    {
                      "name": "Internet",
                      "value": "everywhere",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "MMS",
                      "value": "eezone",
                      "type": [
                        "mms",
                        "xcap"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms/",
                      "mmsc_proxy": "149.254.201.135",
                      "mmsc_proxy_port": "8080",
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE Emergency",
                      "value": "sos",
                      "type": [
                        "emergency"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imsss": {
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    }
                  },
                  "imswfc": {
                    "emergency_call_over_emergency_pdn": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ]
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "gigs_gb.toml": {
              "carrier_name": "GIGS",
              "version": 77000000007,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "22"
                  }
                },
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "Gigs"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Gigs Data",
                  "value": "MY.INTERNET",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "mtu": 1340,
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_certificate_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "carrier_default_wfc_ims_mode": 1,
                "carrier_default_wfc_ims_roaming_mode": 1,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "enabledMMS": {
                  "kind": "bool",
                  "value": false
                },
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "338|busy everywhere|1017",
                    "510|Call completed elsewhere|1014"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "xcap_over_ut_supported_rats": []
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 90000,
                  "ringing_timer_millis": 90000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "qns": {
                  "block_iwlan_in_international_roaming_without_wwan": true,
                  "idle_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "idle_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "ims_wlan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "ims_wwan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "support_wfc_recovery": false,
                  "video_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "video_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "video_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "voice_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "voice_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "voice_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    2
                  ],
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "235-015"
                    ]
                  },
                  "natt_keep_alive_timer_sec": 30
                }
              },
              "full_settings": {
                "version": 77000000007,
                "apns": {
                  "apn": [
                    {
                      "name": "Gigs Data",
                      "value": "MY.INTERNET",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "mtu": 1340,
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_certificate_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_default_wfc_ims_roaming_mode": 1,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "enabledMMS": {
                    "kind": "bool",
                    "value": false
                  },
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "338|busy everywhere|1017",
                      "510|Call completed elsewhere|1014"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "xcap_over_ut_supported_rats": []
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 90000,
                    "ringing_timer_millis": 90000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "qns": {
                    "block_iwlan_in_international_roaming_without_wwan": true,
                    "idle_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "idle_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "ims_wlan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "ims_wwan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "support_wfc_recovery": false,
                    "video_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "video_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "video_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "voice_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "voice_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "voice_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      2
                    ],
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "235-015"
                      ]
                    },
                    "natt_keep_alive_timer_sec": 30
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "sky_gb.toml": {
              "carrier_name": "SKY",
              "version": 77000000021,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23457"
                },
                {
                  "mcc_mnc": "24007",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0C"
                  }
                }
              ],
              "apns": [
                {
                  "name": "SKY MMS",
                  "value": "mms.mobile.sky",
                  "type": [
                    "mms"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 0,
                  "bearer_bitmask": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|17|20",
                  "mmsc": "http://185.110.178.96:38090/was",
                  "mmsc_proxy": "185.110.178.97",
                  "mmsc_proxy_port": "9028",
                  "user_visible": false
                },
                {
                  "name": "SKY WiFi MMS",
                  "value": "wifi.mms.mobile.sky",
                  "type": [
                    "mms"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 0,
                  "bearer_bitmask": "18",
                  "mmsc": "http://185.110.178.96:38090/was",
                  "mmsc_proxy": "185.110.178.97",
                  "mmsc_proxy_port": "9028",
                  "user_visible": false
                },
                {
                  "name": "SKY Internet",
                  "value": "mobile.sky",
                  "type": [
                    "default",
                    "supl",
                    "ia"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "Sky Ut",
                  "value": "ut.mobile.sky",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_fqdn": "xcap.ims.mnc057.mcc234.pub.3gppnetwork.org",
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    15,
                    19,
                    8,
                    11,
                    9
                  ],
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "codec_attribute_cmr": 2,
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 255,
                        "evs_codec_attribute_hf_only": 0
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "maxMessageSize": {
                  "kind": "int",
                  "value": 307200
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "show_4g_for_lte_data_icon": true,
                "sim_country_iso_override": "gb",
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_fqdn": "bsf.ims.mnc057.mcc234.pub.3gppnetwork.org"
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                }
              },
              "full_settings": {
                "version": 77000000021,
                "apns": {
                  "apn": [
                    {
                      "name": "SKY MMS",
                      "value": "mms.mobile.sky",
                      "type": [
                        "mms"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 0,
                      "bearer_bitmask": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|17|20",
                      "mmsc": "http://185.110.178.96:38090/was",
                      "mmsc_proxy": "185.110.178.97",
                      "mmsc_proxy_port": "9028",
                      "user_visible": false
                    },
                    {
                      "name": "SKY WiFi MMS",
                      "value": "wifi.mms.mobile.sky",
                      "type": [
                        "mms"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 0,
                      "bearer_bitmask": "18",
                      "mmsc": "http://185.110.178.96:38090/was",
                      "mmsc_proxy": "185.110.178.97",
                      "mmsc_proxy_port": "9028",
                      "user_visible": false
                    },
                    {
                      "name": "SKY Internet",
                      "value": "mobile.sky",
                      "type": [
                        "default",
                        "supl",
                        "ia"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "Sky Ut",
                      "value": "ut.mobile.sky",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_fqdn": "xcap.ims.mnc057.mcc234.pub.3gppnetwork.org",
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      15,
                      19,
                      8,
                      11,
                      9
                    ],
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "codec_attribute_cmr": 2,
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 255,
                          "evs_codec_attribute_hf_only": 0
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 307200
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "show_4g_for_lte_data_icon": true,
                  "sim_country_iso_override": "gb",
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_fqdn": "bsf.ims.mnc057.mcc234.pub.3gppnetwork.org"
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "spusu_gb.toml": {
              "carrier_name": "SPUSU",
              "version": 77000000006,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23440"
                },
                {
                  "mcc_mnc": "24007",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "48"
                  }
                }
              ],
              "apns": [
                {
                  "name": "spusu",
                  "value": "web",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "ims",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "wfc_spn_format_idx": 1,
                "ims": {
                  "request_uri_type": 1,
                  "sip_over_ipsec_enabled": false,
                  "sip_preferred_transport": 0
                },
                "iwlan": {
                  "epdg_address_priority": [
                    0
                  ],
                  "epdg_static_address": "epdg.epc.mnc040.mcc234.pub.3gppnetwork.org"
                }
              },
              "full_settings": {
                "version": 77000000006,
                "apns": {
                  "apn": [
                    {
                      "name": "spusu",
                      "value": "web",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "ims",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "request_uri_type": 1,
                    "sip_over_ipsec_enabled": false,
                    "sip_preferred_transport": 0
                  },
                  "iwlan": {
                    "epdg_address_priority": [
                      0
                    ],
                    "epdg_static_address": "epdg.epc.mnc040.mcc234.pub.3gppnetwork.org"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "virgin_gb.toml": {
              "carrier_name": "VIRGIN",
              "version": 77000000006,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "20601",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "28000000"
                  }
                },
                {
                  "mcc_mnc": "20620",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "28000000"
                  }
                },
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "28000000"
                  }
                },
                {
                  "mcc_mnc": "23438"
                }
              ],
              "apns": [
                {
                  "name": "Virgin Media Mobile Internet",
                  "value": "goto.virginmobile.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.virginmobile.co.uk:8002",
                  "mmsc_proxy": "193.30.166.2",
                  "mmsc_proxy_port": "8080",
                  "user": "user"
                },
                {
                  "name": "XCAP",
                  "value": "hos",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "bearer_bitmask": "14",
                  "user_visible": false
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "field27": "1|2|3|8|9|10|13|14|15|18|20",
                  "mtu": 1280,
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 2,
                "carrier_name": "Virgin",
                "carrier_name_override": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_ims_apn": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "ut_requires_ims_registration": true,
                  "xcap_over_ut_supported_rats": [
                    3
                  ]
                },
                "imsvoice": {
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": -1
                      }
                    }
                  },
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_privacy_type": 2
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": true,
                "qns": {
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "sim_country_iso_override": "gb",
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 8080
                },
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE# #MODEL# #BUILD#",
                  "ipsec_authentication_algorithms": [
                    1
                  ],
                  "ipsec_encryption_algorithms": [
                    2
                  ],
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "request_uri_type": 1
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14
                  ],
                  "epdg_static_address": "epdg.epc.mnc038.mcc234.pub.3gppnetwork.org",
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9000\"],\"RetryArray\": [],\"UnthrottlingEvents\": [\"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}, {\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"10500\"],\"RetryArray\": [\"30\", \"30\", \"30\", \"30\", \"30\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000006,
                "apns": {
                  "apn": [
                    {
                      "name": "Virgin Media Mobile Internet",
                      "value": "goto.virginmobile.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.virginmobile.co.uk:8002",
                      "mmsc_proxy": "193.30.166.2",
                      "mmsc_proxy_port": "8080",
                      "user": "user"
                    },
                    {
                      "name": "XCAP",
                      "value": "hos",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "bearer_bitmask": "14",
                      "user_visible": false
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "field27": "1|2|3|8|9|10|13|14|15|18|20",
                      "mtu": 1280,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 2,
                  "carrier_name": "Virgin",
                  "carrier_name_override": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_ims_apn": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "ut_requires_ims_registration": true,
                    "xcap_over_ut_supported_rats": [
                      3
                    ]
                  },
                  "imsvoice": {
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": -1
                        }
                      }
                    },
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_privacy_type": 2
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": true,
                  "qns": {
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "sim_country_iso_override": "gb",
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 8080
                  },
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE# #MODEL# #BUILD#",
                    "ipsec_authentication_algorithms": [
                      1
                    ],
                    "ipsec_encryption_algorithms": [
                      2
                    ],
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "request_uri_type": 1
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14
                    ],
                    "epdg_static_address": "epdg.epc.mnc038.mcc234.pub.3gppnetwork.org",
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9000\"],\"RetryArray\": [],\"UnthrottlingEvents\": [\"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}, {\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"10500\"],\"RetryArray\": [\"30\", \"30\", \"30\", \"30\", \"30\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "asda_gb.toml": {
              "carrier_name": "ASDA",
              "version": 77000000015,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "A0"
                  }
                },
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "A1"
                  }
                }
              ],
              "apns": [
                {
                  "name": "ASDA Mobile",
                  "value": "MY.INTERNET",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.ad.vodafone.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "XCAP",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    3,
                    6,
                    5
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "minimum_session_expires_timer_sec": 600,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "qns": {
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ]
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                }
              },
              "full_settings": {
                "version": 77000000015,
                "apns": {
                  "apn": [
                    {
                      "name": "ASDA Mobile",
                      "value": "MY.INTERNET",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.ad.vodafone.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "XCAP",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      3,
                      6,
                      5
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "minimum_session_expires_timer_sec": 600,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "qns": {
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ]
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "cloud9_gb.toml": {
              "carrier_name": "CLOUD9",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23418",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "6764"
                  }
                }
              ],
              "apns": [
                {
                  "name": "globaldata",
                  "value": "globaldata",
                  "type": [
                    "default",
                    "supl",
                    "dun"
                  ]
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "imsvoice": {
                  "amrnb_payload_description_bundle": {
                    "103": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ],
                        "amr_codec_attribute_payload_format": 1
                      }
                    },
                    "98": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ]
                      }
                    }
                  },
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "globaldata",
                      "value": "globaldata",
                      "type": [
                        "default",
                        "supl",
                        "dun"
                      ]
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "imsvoice": {
                    "amrnb_payload_description_bundle": {
                      "103": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ],
                          "amr_codec_attribute_payload_format": 1
                        }
                      },
                      "98": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ]
                        }
                      }
                    },
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "ee_gb.toml": {
              "carrier_name": "EE",
              "version": 77000000012,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430"
                },
                {
                  "mcc_mnc": "23433"
                },
                {
                  "mcc_mnc": "23486"
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "bearer_bitmask": "14|18|20",
                  "password": "secure",
                  "user": "eesecure",
                  "user_visible": false
                },
                {
                  "name": "EE Internet",
                  "value": "everywhere",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE MMS",
                  "value": "eezone",
                  "type": [
                    "mms",
                    "xcap"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms/",
                  "mmsc_proxy": "149.254.201.135",
                  "mmsc_proxy_port": "8080",
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE Emergency",
                  "value": "sos",
                  "type": [
                    "emergency"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_cross_sim_ims_available": false,
                "carrier_default_data_roaming_enabled": true,
                "carrier_name": "EE",
                "carrier_name_override": true,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "display_voicemail_number_as_default_call_forwarding_number": {
                  "kind": "bool",
                  "value": true
                },
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enhanced_4g_lte": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 130000,
                  "ringing_timer_millis": 60000
                },
                "imswfc": {
                  "emergency_call_over_emergency_pdn": true
                },
                "iwlan_handover_policy_string_array": {
                  "kind": "text_array",
                  "value": [
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                    "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                    "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                  ]
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "preferred_ike_protocol": 40,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2,
                  "xcap_rat_preference": 2
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "vonr_enabled": true,
                "vonr_setting_visibility": false,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#",
                  "ipv4_sip_mtu_size_cellular": 1200,
                  "ipv6_sip_mtu_size_cellular": 1200,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "emergency_over_ims_roaming_supported_3gpp_network_types": [
                    6,
                    3
                  ],
                  "emergency_over_ims_supported_3gpp_network_types": [
                    6,
                    3
                  ],
                  "emergency_over_ims_supported_rats": [
                    6,
                    3,
                    5
                  ],
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000012,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "bearer_bitmask": "14|18|20",
                      "password": "secure",
                      "user": "eesecure",
                      "user_visible": false
                    },
                    {
                      "name": "EE Internet",
                      "value": "everywhere",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE MMS",
                      "value": "eezone",
                      "type": [
                        "mms",
                        "xcap"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms/",
                      "mmsc_proxy": "149.254.201.135",
                      "mmsc_proxy_port": "8080",
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE Emergency",
                      "value": "sos",
                      "type": [
                        "emergency"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_name": "EE",
                  "carrier_name_override": true,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "display_voicemail_number_as_default_call_forwarding_number": {
                    "kind": "bool",
                    "value": true
                  },
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enhanced_4g_lte": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 130000,
                    "ringing_timer_millis": 60000
                  },
                  "imswfc": {
                    "emergency_call_over_emergency_pdn": true
                  },
                  "iwlan_handover_policy_string_array": {
                    "kind": "text_array",
                    "value": [
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                      "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                      "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                    ]
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "preferred_ike_protocol": 40,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2,
                    "xcap_rat_preference": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "vonr_enabled": true,
                  "vonr_setting_visibility": false,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#",
                    "ipv4_sip_mtu_size_cellular": 1200,
                    "ipv6_sip_mtu_size_cellular": 1200,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "emergency_over_ims_roaming_supported_3gpp_network_types": [
                      6,
                      3
                    ],
                    "emergency_over_ims_supported_3gpp_network_types": [
                      6,
                      3
                    ],
                    "emergency_over_ims_supported_rats": [
                      6,
                      3,
                      5
                    ],
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": true,
                "satellite": false
              },
              "uecaps": []
            },
            "jt_gb.toml": {
              "carrier_name": "JT",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23450",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "JT"
                  }
                }
              ],
              "apns": [],
              "configs": {},
              "full_settings": {
                "version": 77000000001
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "spitfire_gb.toml": {
              "carrier_name": "SPITFIRE",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23405",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "Spitfire"
                  }
                }
              ],
              "apns": [
                {
                  "name": "spitfire1",
                  "value": "spitfire1",
                  "type": [
                    "default",
                    "ia"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "ims",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "bearer_bitmask": "14|20",
                  "proxy": "10.202.0.1",
                  "user_visible": false
                }
              ],
              "configs": {
                "imsvoice": {
                  "amrnb_payload_description_bundle": {
                    "103": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ],
                        "amr_codec_attribute_payload_format": 1
                      }
                    },
                    "98": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ]
                      }
                    }
                  },
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "prack_supported_for_18x": true
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "spitfire1",
                      "value": "spitfire1",
                      "type": [
                        "default",
                        "ia"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "ims",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "bearer_bitmask": "14|20",
                      "proxy": "10.202.0.1",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "imsvoice": {
                    "amrnb_payload_description_bundle": {
                      "103": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ],
                          "amr_codec_attribute_payload_format": 1
                        }
                      },
                      "98": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ]
                        }
                      }
                    },
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "prack_supported_for_18x": true
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "esimgo_gb.toml": {
              "carrier_name": "ESIMGO",
              "version": 77000000008,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0033"
                  }
                },
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "eSIM Go"
                  }
                }
              ],
              "apns": [
                {
                  "name": "eSIM Go Data",
                  "value": "uk.data.esim",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1340,
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_certificate_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "carrier_default_wfc_ims_mode": 1,
                "carrier_default_wfc_ims_roaming_mode": 1,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "338|busy everywhere|1017",
                    "510|Call completed elsewhere|1014"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "xcap_over_ut_supported_rats": []
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 90000,
                  "ringing_timer_millis": 90000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "qns": {
                  "block_iwlan_in_international_roaming_without_wwan": true,
                  "idle_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "idle_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "ims_wlan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "ims_wwan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "support_wfc_recovery": false,
                  "video_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "video_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "video_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "voice_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "voice_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "voice_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    2
                  ],
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "235-015"
                    ]
                  },
                  "natt_keep_alive_timer_sec": 30
                }
              },
              "full_settings": {
                "version": 77000000008,
                "apns": {
                  "apn": [
                    {
                      "name": "eSIM Go Data",
                      "value": "uk.data.esim",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1340,
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_certificate_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_default_wfc_ims_roaming_mode": 1,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "338|busy everywhere|1017",
                      "510|Call completed elsewhere|1014"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "xcap_over_ut_supported_rats": []
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 90000,
                    "ringing_timer_millis": 90000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "qns": {
                    "block_iwlan_in_international_roaming_without_wwan": true,
                    "idle_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "idle_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "ims_wlan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "ims_wwan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "support_wfc_recovery": false,
                    "video_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "video_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "video_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "voice_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "voice_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "voice_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      2
                    ],
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "235-015"
                      ]
                    },
                    "natt_keep_alive_timer_sec": 30
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "h3_gb.toml": {
              "carrier_name": "H3",
              "version": 77000000007,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420"
                },
                {
                  "mcc_mnc": "23494"
                },
                {
                  "mcc_mnc": "23594"
                }
              ],
              "apns": [
                {
                  "name": "3hotspot",
                  "value": "3hotspot",
                  "type": [
                    "dun"
                  ],
                  "protocol": "ipv4v6",
                  "authtype": 0,
                  "user_visible": false
                },
                {
                  "name": "3",
                  "value": "three.co.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1440,
                  "user_editable": false
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_cross_sim_ims_available": false,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000007,
                "apns": {
                  "apn": [
                    {
                      "name": "3hotspot",
                      "value": "3hotspot",
                      "type": [
                        "dun"
                      ],
                      "protocol": "ipv4v6",
                      "authtype": 0,
                      "user_visible": false
                    },
                    {
                      "name": "3",
                      "value": "three.co.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1440,
                      "user_editable": false
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "talkmobile_gb.toml": {
              "carrier_name": "TALKMOBILE",
              "version": 77000000020,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "C1"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Talkmobile Data",
                  "value": "talkmobile.co.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.talkmobile.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "XCAP",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "editable_enhanced_4g_lte": false,
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    5,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "qns": {
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "sos_transport_type": 2
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                }
              },
              "full_settings": {
                "version": 77000000020,
                "apns": {
                  "apn": [
                    {
                      "name": "Talkmobile Data",
                      "value": "talkmobile.co.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.talkmobile.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "XCAP",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "editable_enhanced_4g_lte": false,
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      5,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "qns": {
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "sos_transport_type": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "idmobile_gb.toml": {
              "carrier_name": "IDMOBILE",
              "version": 77000000007,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0305"
                  }
                }
              ],
              "apns": [
                {
                  "name": "iD",
                  "value": "id",
                  "type": [
                    "default",
                    "mms",
                    "supl",
                    "xcap"
                  ],
                  "mmsc": "http://mms.um.idmobile.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.idmobile.co.uk",
                  "mmsc_proxy_port": "8799"
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000007,
                "apns": {
                  "apn": [
                    {
                      "name": "iD",
                      "value": "id",
                      "type": [
                        "default",
                        "mms",
                        "supl",
                        "xcap"
                      ],
                      "mmsc": "http://mms.um.idmobile.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.idmobile.co.uk",
                      "mmsc_proxy_port": "8799"
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "esn_gb.toml": {
              "carrier_name": "ESN",
              "version": 77000000009,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23471"
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims",
                    "xcap"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_data_roaming_enabled": true,
                "carrier_name": "",
                "carrier_name_override": false,
                "carrier_nr_availabilities": [],
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": false,
                "display_voicemail_number_as_default_call_forwarding_number": {
                  "kind": "bool",
                  "value": true
                },
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enhanced_4g_lte": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imssms": {
                  "sms_over_ims_supported_rats": [
                    3,
                    6
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 1,
                  "ut_iptype_roaming": 1,
                  "ut_requires_ims_registration": true,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 130000,
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 2000
                },
                "iwlan_handover_policy_string_array": {
                  "kind": "text_array",
                  "value": [
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                    "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                    "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                  ]
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "preferred_ike_protocol": 40,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2,
                  "xcap_rat_preference": 2,
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipsec_authentication_algorithms": [
                    1
                  ],
                  "ipsec_encryption_algorithms": [
                    2
                  ],
                  "ipv4_sip_mtu_size_cellular": 1200,
                  "ipv6_sip_mtu_size_cellular": 1200,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_3gpp_network_types": [
                    6,
                    3
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ],
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000009,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims",
                        "xcap"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_name": "",
                  "carrier_name_override": false,
                  "carrier_nr_availabilities": [],
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": false,
                  "display_voicemail_number_as_default_call_forwarding_number": {
                    "kind": "bool",
                    "value": true
                  },
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enhanced_4g_lte": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imssms": {
                    "sms_over_ims_supported_rats": [
                      3,
                      6
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 1,
                    "ut_iptype_roaming": 1,
                    "ut_requires_ims_registration": true,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 130000,
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 2000
                  },
                  "iwlan_handover_policy_string_array": {
                    "kind": "text_array",
                    "value": [
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                      "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                      "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                    ]
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "preferred_ike_protocol": 40,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2,
                    "xcap_rat_preference": 2,
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipsec_authentication_algorithms": [
                      1
                    ],
                    "ipsec_encryption_algorithms": [
                      2
                    ],
                    "ipv4_sip_mtu_size_cellular": 1200,
                    "ipv6_sip_mtu_size_cellular": 1200,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_3gpp_network_types": [
                      6,
                      3
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ],
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "vodafone_gb.toml": {
              "carrier_name": "VODAFONE",
              "version": 77000000020,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415"
                },
                {
                  "mcc_mnc": "23491"
                }
              ],
              "apns": [
                {
                  "name": "Vodafone UK Data",
                  "value": "wap.vodafone.co.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1340,
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "XCAP",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "call_barring_visibility": true,
                "carrier_certificate_string_array": {
                  "kind": "text_array",
                  "value": [
                    "2E26357C65C1F858CE0C798AA7EFB38922E8D334F12DAD4A3963007DFBBC5677:com.myvodafoneapp"
                  ]
                },
                "carrier_default_wfc_ims_mode": 1,
                "carrier_default_wfc_ims_roaming_mode": 1,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "epsfb_silent_retry_error_code_string_array": {
                  "kind": "text_array",
                  "value": [
                    "500",
                    "503"
                  ]
                },
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "338|busy everywhere|1017",
                    "510|Call completed elsewhere|1014"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    5,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "qns": {
                  "block_iwlan_in_international_roaming_without_wwan": true,
                  "idle_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "idle_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "ims_wlan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "ims_wwan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "support_wfc_recovery": false,
                  "video_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "video_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "video_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "voice_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "voice_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "voice_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "voicemail_notification_persistent": true,
                "vonr_enabled": true,
                "vonr_setting_visibility": false,
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    2
                  ],
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "235-015"
                    ]
                  },
                  "natt_keep_alive_timer_sec": 30
                }
              },
              "full_settings": {
                "version": 77000000020,
                "apns": {
                  "apn": [
                    {
                      "name": "Vodafone UK Data",
                      "value": "wap.vodafone.co.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1340,
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "XCAP",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "call_barring_visibility": true,
                  "carrier_certificate_string_array": {
                    "kind": "text_array",
                    "value": [
                      "2E26357C65C1F858CE0C798AA7EFB38922E8D334F12DAD4A3963007DFBBC5677:com.myvodafoneapp"
                    ]
                  },
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_default_wfc_ims_roaming_mode": 1,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "epsfb_silent_retry_error_code_string_array": {
                    "kind": "text_array",
                    "value": [
                      "500",
                      "503"
                    ]
                  },
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "338|busy everywhere|1017",
                      "510|Call completed elsewhere|1014"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      5,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "qns": {
                    "block_iwlan_in_international_roaming_without_wwan": true,
                    "idle_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "idle_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "ims_wlan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "ims_wwan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "support_wfc_recovery": false,
                    "video_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "video_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "video_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "voice_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "voice_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "voice_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "voicemail_notification_persistent": true,
                  "vonr_enabled": true,
                  "vonr_setting_visibility": false,
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      2
                    ],
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "235-015"
                      ]
                    },
                    "natt_keep_alive_timer_sec": 30
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": true,
                "satellite": false
              },
              "uecaps": []
            },
            "gamma_gb.toml": {
              "carrier_name": "GAMMA",
              "version": 77000000011,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "030B"
                  }
                },
                {
                  "mcc_mnc": "23439"
                }
              ],
              "apns": [
                {
                  "name": "GAMMA",
                  "value": "gamma",
                  "type": [
                    "default",
                    "supl",
                    "dun"
                  ],
                  "authtype": 0,
                  "user_editable": false
                },
                {
                  "name": "Gamma MMS",
                  "value": "three.co.uk",
                  "type": [
                    "mms"
                  ],
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1440,
                  "user_editable": false
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                },
                {
                  "name": "Gamma XCAP",
                  "value": "three.co.uk",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000011,
                "apns": {
                  "apn": [
                    {
                      "name": "GAMMA",
                      "value": "gamma",
                      "type": [
                        "default",
                        "supl",
                        "dun"
                      ],
                      "authtype": 0,
                      "user_editable": false
                    },
                    {
                      "name": "Gamma MMS",
                      "value": "three.co.uk",
                      "type": [
                        "mms"
                      ],
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1440,
                      "user_editable": false
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    },
                    {
                      "name": "Gamma XCAP",
                      "value": "three.co.uk",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "smarty_gb.toml": {
              "carrier_name": "SMARTY",
              "version": 77000000008,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0309"
                  }
                }
              ],
              "apns": [
                {
                  "name": "SMARTY",
                  "value": "mob.asm.net",
                  "type": [
                    "default",
                    "mms",
                    "supl",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799"
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": false,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000008,
                "apns": {
                  "apn": [
                    {
                      "name": "SMARTY",
                      "value": "mob.asm.net",
                      "type": [
                        "default",
                        "mms",
                        "supl",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799"
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": false,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "superdrug_gb.toml": {
              "carrier_name": "SUPERDRUG",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0310"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Superdrug",
                  "value": "mobile.connect",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799"
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                },
                {
                  "name": "xcap",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "Superdrug",
                      "value": "mobile.connect",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799"
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    },
                    {
                      "name": "xcap",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "lycamobile_gb.toml": {
              "carrier_name": "LYCAMOBILE",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "LycaMobile"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Lycamobile",
                  "value": "data.lycamobile.co.uk",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_volte_available": true,
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23420",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "show_4g_for_lte_data_icon": true
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "Lycamobile",
                      "value": "data.lycamobile.co.uk",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_volte_available": true,
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23420",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "show_4g_for_lte_data_icon": true
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "tcl_gb.toml": {
              "carrier_name": "TCL",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23427"
                }
              ],
              "apns": [
                {
                  "name": "TCL MOVE",
                  "value": "move.dataxs.mobi",
                  "type": [
                    "default",
                    "dun"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "prack_supported_for_18x": true
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "TCL MOVE",
                      "value": "move.dataxs.mobi",
                      "type": [
                        "default",
                        "dun"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "prack_supported_for_18x": true
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            }
          }
        },
        "pixel_10a_stallion": {
          "friendly_name": "Pixel 10A Stallion",
          "carriers": {
            "o2prepaid_gb.toml": {
              "carrier_name": "O2PREPAID",
              "version": 77000000005,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "61"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "67"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "85"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "99"
                  }
                }
              ],
              "apns": [
                {
                  "name": "O2 Pay As You Go",
                  "value": "payandgo.o2.co.uk",
                  "type": [
                    "default",
                    "dun",
                    "mms",
                    "supl",
                    "hipri",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                  "password": "p",
                  "user": "o2",
                  "user_editable": false
                },
                {
                  "name": "O2 IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "carrier_default_wfc_ims_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "901",
                "disable_supplementary_services_in_airplane_mode": true,
                "display_hd_audio_property": false,
                "hide_lte_plus_data_icon": false,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_port": 443,
                  "ut_iptype_home": 0,
                  "ut_transport_type": 3,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        126
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "126": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 3
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "support_wfc_in_international_roaming": {
                    "kind": "bool",
                    "value": false
                  },
                  "xcap_transport_type": 0
                },
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 443,
                  "bsf_transport_type": 3
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 43300,
                  "child_sa_rekey_soft_timer_sec": 43200,
                  "diffie_hellman_groups": [
                    14
                  ],
                  "dpd_timer_sec": 1800,
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 43300
                  },
                  "ike_rekey_soft_timer_sec": 43200,
                  "ike_remote_id_type": 11,
                  "supported_ike_session_encryption_algorithms": [
                    12,
                    13
                  ]
                }
              },
              "full_settings": {
                "version": 77000000005,
                "apns": {
                  "apn": [
                    {
                      "name": "O2 Pay As You Go",
                      "value": "payandgo.o2.co.uk",
                      "type": [
                        "default",
                        "dun",
                        "mms",
                        "supl",
                        "hipri",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                      "password": "p",
                      "user": "o2",
                      "user_editable": false
                    },
                    {
                      "name": "O2 IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "901",
                  "disable_supplementary_services_in_airplane_mode": true,
                  "display_hd_audio_property": false,
                  "hide_lte_plus_data_icon": false,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_port": 443,
                    "ut_iptype_home": 0,
                    "ut_transport_type": 3,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          126
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "126": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 3
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "support_wfc_in_international_roaming": {
                      "kind": "bool",
                      "value": false
                    },
                    "xcap_transport_type": 0
                  },
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 443,
                    "bsf_transport_type": 3
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 43300,
                    "child_sa_rekey_soft_timer_sec": 43200,
                    "diffie_hellman_groups": [
                      14
                    ],
                    "dpd_timer_sec": 1800,
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 43300
                    },
                    "ike_rekey_soft_timer_sec": 43200,
                    "ike_remote_id_type": 11,
                    "supported_ike_session_encryption_algorithms": [
                      12,
                      13
                    ]
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "o2postpaid_gb.toml": {
              "carrier_name": "O2POSTPAID",
              "version": 77000000007,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410"
                }
              ],
              "apns": [
                {
                  "name": "O2 Pay Monthly",
                  "value": "mobile.o2.co.uk",
                  "type": [
                    "default",
                    "dun",
                    "mms",
                    "supl",
                    "hipri",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                  "password": "p",
                  "user": "o2",
                  "user_editable": false
                },
                {
                  "name": "O2 IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "carrier_default_wfc_ims_enabled": true,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_roaming_satellite_default_services": [
                  2,
                  3,
                  6
                ],
                "carrier_supported_satellite_services_per_provider_bundle": {
                  "23402": {
                    "kind": "int_array",
                    "value": [
                      2,
                      3,
                      6
                    ]
                  }
                },
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "901",
                "disable_supplementary_services_in_airplane_mode": true,
                "display_hd_audio_property": false,
                "emergency_messaging_supported": true,
                "hide_lte_plus_data_icon": false,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsserviceentitlement": {
                  "entitlement_server_url": "https://ses.o2.co.uk:10024"
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_port": 443,
                  "ut_iptype_home": 0,
                  "ut_transport_type": 3,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        126
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "126": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 3
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "support_wfc_in_international_roaming": {
                    "kind": "bool",
                    "value": false
                  },
                  "xcap_transport_type": 0
                },
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "satellite_attach_supported": true,
                "satellite_data_support_mode": 1,
                "satellite_entitlement_supported": true,
                "satellite_ignore_data_roaming_setting": true,
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "vonr_enabled": true,
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 443,
                  "bsf_transport_type": 3
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 43300,
                  "child_sa_rekey_soft_timer_sec": 43200,
                  "diffie_hellman_groups": [
                    14
                  ],
                  "dpd_timer_sec": 1800,
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 43300
                  },
                  "ike_rekey_soft_timer_sec": 43200,
                  "ike_remote_id_type": 11,
                  "supported_ike_session_encryption_algorithms": [
                    12,
                    13
                  ]
                }
              },
              "full_settings": {
                "version": 77000000007,
                "apns": {
                  "apn": [
                    {
                      "name": "O2 Pay Monthly",
                      "value": "mobile.o2.co.uk",
                      "type": [
                        "default",
                        "dun",
                        "mms",
                        "supl",
                        "hipri",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                      "password": "p",
                      "user": "o2",
                      "user_editable": false
                    },
                    {
                      "name": "O2 IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_roaming_satellite_default_services": [
                    2,
                    3,
                    6
                  ],
                  "carrier_supported_satellite_services_per_provider_bundle": {
                    "23402": {
                      "kind": "int_array",
                      "value": [
                        2,
                        3,
                        6
                      ]
                    }
                  },
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "901",
                  "disable_supplementary_services_in_airplane_mode": true,
                  "display_hd_audio_property": false,
                  "emergency_messaging_supported": true,
                  "hide_lte_plus_data_icon": false,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsserviceentitlement": {
                    "entitlement_server_url": "https://ses.o2.co.uk:10024"
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_port": 443,
                    "ut_iptype_home": 0,
                    "ut_transport_type": 3,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          126
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "126": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 3
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "support_wfc_in_international_roaming": {
                      "kind": "bool",
                      "value": false
                    },
                    "xcap_transport_type": 0
                  },
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "satellite_attach_supported": true,
                  "satellite_data_support_mode": 1,
                  "satellite_entitlement_supported": true,
                  "satellite_ignore_data_roaming_setting": true,
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "vonr_enabled": true,
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 443,
                    "bsf_transport_type": 3
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 43300,
                    "child_sa_rekey_soft_timer_sec": 43200,
                    "diffie_hellman_groups": [
                      14
                    ],
                    "dpd_timer_sec": 1800,
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 43300
                    },
                    "ike_rekey_soft_timer_sec": 43200,
                    "ike_remote_id_type": 11,
                    "supported_ike_session_encryption_algorithms": [
                      12,
                      13
                    ]
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": true,
                "satellite": true
              },
              "uecaps": []
            },
            "lebara_gb.toml": {
              "carrier_name": "LEBARA",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "LEBARA"
                  }
                },
                {
                  "mcc_mnc": "23487"
                }
              ],
              "apns": [
                {
                  "name": "Lebara Internet",
                  "value": "uk.lebara.mobi",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms.lebara.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_mode": 1,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": []
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "qns": {
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": [
                    "*"
                  ]
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "Lebara Internet",
                      "value": "uk.lebara.mobi",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms.lebara.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": []
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "qns": {
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": [
                      "*"
                    ]
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "tesco_gb.toml": {
              "carrier_name": "TESCO",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0A"
                  }
                }
              ],
              "apns": [
                {
                  "name": "TESCO",
                  "value": "prepay.tesco-mobile.com",
                  "type": [
                    "default",
                    "dun",
                    "mms",
                    "supl",
                    "hipri",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                  "password": "p",
                  "user": "tm"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "905",
                "hide_lte_plus_data_icon": false,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_port": 443,
                  "ut_iptype_home": 0,
                  "ut_transport_type": 3,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        126
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "126": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 3
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "xcap_transport_type": 0
                },
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 443,
                  "bsf_transport_type": 3
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ],
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "TESCO",
                      "value": "prepay.tesco-mobile.com",
                      "type": [
                        "default",
                        "dun",
                        "mms",
                        "supl",
                        "hipri",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                      "password": "p",
                      "user": "tm"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "905",
                  "hide_lte_plus_data_icon": false,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_port": 443,
                    "ut_iptype_home": 0,
                    "ut_transport_type": 3,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          126
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "126": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 3
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "xcap_transport_type": 0
                  },
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 443,
                    "bsf_transport_type": 3
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ],
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "btc_gb.toml": {
              "carrier_name": "BTC",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "C3"
                  }
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "bearer_bitmask": "14|18|20",
                  "password": "secure",
                  "user": "eesecure",
                  "user_visible": false
                },
                {
                  "name": "Internet",
                  "value": "everywhere",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "MMS",
                  "value": "eezone",
                  "type": [
                    "mms",
                    "xcap"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms/",
                  "mmsc_proxy": "149.254.201.135",
                  "mmsc_proxy_port": "8080",
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE Emergency",
                  "value": "sos",
                  "type": [
                    "emergency"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_cross_sim_ims_available": false,
                "carrier_default_data_roaming_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imsss": {
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  }
                },
                "imswfc": {
                  "emergency_call_over_emergency_pdn": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ]
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "bearer_bitmask": "14|18|20",
                      "password": "secure",
                      "user": "eesecure",
                      "user_visible": false
                    },
                    {
                      "name": "Internet",
                      "value": "everywhere",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "MMS",
                      "value": "eezone",
                      "type": [
                        "mms",
                        "xcap"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms/",
                      "mmsc_proxy": "149.254.201.135",
                      "mmsc_proxy_port": "8080",
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE Emergency",
                      "value": "sos",
                      "type": [
                        "emergency"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imsss": {
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    }
                  },
                  "imswfc": {
                    "emergency_call_over_emergency_pdn": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ]
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "giffgaff_gb.toml": {
              "carrier_name": "GIFFGAFF",
              "version": 77000000003,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "50"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "GIFFGAFF"
                  }
                }
              ],
              "apns": [
                {
                  "name": "giffgaff",
                  "value": "giffgaff.com",
                  "type": [
                    "default",
                    "mms"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mediamessaging.co.uk:8002",
                  "password": "p",
                  "user": "gg"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "443",
                "hide_lte_plus_data_icon": false,
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "show_wifi_calling_icon_in_status_bar": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "imsemergency": {
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    14
                  ]
                }
              },
              "full_settings": {
                "version": 77000000003,
                "apns": {
                  "apn": [
                    {
                      "name": "giffgaff",
                      "value": "giffgaff.com",
                      "type": [
                        "default",
                        "mms"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mediamessaging.co.uk:8002",
                      "password": "p",
                      "user": "gg"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "443",
                  "hide_lte_plus_data_icon": false,
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "show_wifi_calling_icon_in_status_bar": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "imsemergency": {
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      14
                    ]
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "btb_gb.toml": {
              "carrier_name": "BTB",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "B3"
                  }
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "bearer_bitmask": "14|18|20",
                  "password": "secure",
                  "user": "eesecure",
                  "user_visible": false
                },
                {
                  "name": "Internet",
                  "value": "everywhere",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "MMS",
                  "value": "eezone",
                  "type": [
                    "mms",
                    "xcap"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms/",
                  "mmsc_proxy": "149.254.201.135",
                  "mmsc_proxy_port": "8080",
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE Emergency",
                  "value": "sos",
                  "type": [
                    "emergency"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_cross_sim_ims_available": false,
                "carrier_default_data_roaming_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imsss": {
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  }
                },
                "imswfc": {
                  "emergency_call_over_emergency_pdn": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ]
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "bearer_bitmask": "14|18|20",
                      "password": "secure",
                      "user": "eesecure",
                      "user_visible": false
                    },
                    {
                      "name": "Internet",
                      "value": "everywhere",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "MMS",
                      "value": "eezone",
                      "type": [
                        "mms",
                        "xcap"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms/",
                      "mmsc_proxy": "149.254.201.135",
                      "mmsc_proxy_port": "8080",
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE Emergency",
                      "value": "sos",
                      "type": [
                        "emergency"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imsss": {
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    }
                  },
                  "imswfc": {
                    "emergency_call_over_emergency_pdn": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ]
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "gigs_gb.toml": {
              "carrier_name": "GIGS",
              "version": 77000000007,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "22"
                  }
                },
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "Gigs"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Gigs Data",
                  "value": "MY.INTERNET",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "mtu": 1340,
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_certificate_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "carrier_default_wfc_ims_mode": 1,
                "carrier_default_wfc_ims_roaming_mode": 1,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "enabledMMS": {
                  "kind": "bool",
                  "value": false
                },
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "338|busy everywhere|1017",
                    "510|Call completed elsewhere|1014"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "xcap_over_ut_supported_rats": []
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 90000,
                  "ringing_timer_millis": 90000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "qns": {
                  "block_iwlan_in_international_roaming_without_wwan": true,
                  "idle_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "idle_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "ims_wlan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "ims_wwan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "support_wfc_recovery": false,
                  "video_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "video_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "video_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "voice_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "voice_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "voice_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    2
                  ],
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "235-015"
                    ]
                  },
                  "natt_keep_alive_timer_sec": 30
                }
              },
              "full_settings": {
                "version": 77000000007,
                "apns": {
                  "apn": [
                    {
                      "name": "Gigs Data",
                      "value": "MY.INTERNET",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "mtu": 1340,
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_certificate_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_default_wfc_ims_roaming_mode": 1,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "enabledMMS": {
                    "kind": "bool",
                    "value": false
                  },
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "338|busy everywhere|1017",
                      "510|Call completed elsewhere|1014"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "xcap_over_ut_supported_rats": []
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 90000,
                    "ringing_timer_millis": 90000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "qns": {
                    "block_iwlan_in_international_roaming_without_wwan": true,
                    "idle_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "idle_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "ims_wlan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "ims_wwan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "support_wfc_recovery": false,
                    "video_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "video_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "video_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "voice_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "voice_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "voice_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      2
                    ],
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "235-015"
                      ]
                    },
                    "natt_keep_alive_timer_sec": 30
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "sky_gb.toml": {
              "carrier_name": "SKY",
              "version": 77000000004,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23457"
                },
                {
                  "mcc_mnc": "24007",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0C"
                  }
                }
              ],
              "apns": [
                {
                  "name": "SKY MMS",
                  "value": "mms.mobile.sky",
                  "type": [
                    "mms"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 0,
                  "bearer_bitmask": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|17|20",
                  "mmsc": "http://185.110.178.96:38090/was",
                  "mmsc_proxy": "185.110.178.97",
                  "mmsc_proxy_port": "9028",
                  "user_visible": false
                },
                {
                  "name": "SKY WiFi MMS",
                  "value": "wifi.mms.mobile.sky",
                  "type": [
                    "mms"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 0,
                  "bearer_bitmask": "18",
                  "mmsc": "http://185.110.178.96:38090/was",
                  "mmsc_proxy": "185.110.178.97",
                  "mmsc_proxy_port": "9028",
                  "user_visible": false
                },
                {
                  "name": "SKY Internet",
                  "value": "mobile.sky",
                  "type": [
                    "default",
                    "supl",
                    "ia"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "Sky Ut",
                  "value": "ut.mobile.sky",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_fqdn": "xcap.ims.mnc057.mcc234.pub.3gppnetwork.org",
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    15,
                    19,
                    8,
                    11,
                    9
                  ],
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "codec_attribute_cmr": 2,
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 255,
                        "evs_codec_attribute_hf_only": 0
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "maxMessageSize": {
                  "kind": "int",
                  "value": 307200
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "show_4g_for_lte_data_icon": true,
                "sim_country_iso_override": "gb",
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_fqdn": "bsf.ims.mnc057.mcc234.pub.3gppnetwork.org"
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                }
              },
              "full_settings": {
                "version": 77000000004,
                "apns": {
                  "apn": [
                    {
                      "name": "SKY MMS",
                      "value": "mms.mobile.sky",
                      "type": [
                        "mms"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 0,
                      "bearer_bitmask": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|17|20",
                      "mmsc": "http://185.110.178.96:38090/was",
                      "mmsc_proxy": "185.110.178.97",
                      "mmsc_proxy_port": "9028",
                      "user_visible": false
                    },
                    {
                      "name": "SKY WiFi MMS",
                      "value": "wifi.mms.mobile.sky",
                      "type": [
                        "mms"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 0,
                      "bearer_bitmask": "18",
                      "mmsc": "http://185.110.178.96:38090/was",
                      "mmsc_proxy": "185.110.178.97",
                      "mmsc_proxy_port": "9028",
                      "user_visible": false
                    },
                    {
                      "name": "SKY Internet",
                      "value": "mobile.sky",
                      "type": [
                        "default",
                        "supl",
                        "ia"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "Sky Ut",
                      "value": "ut.mobile.sky",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_fqdn": "xcap.ims.mnc057.mcc234.pub.3gppnetwork.org",
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      15,
                      19,
                      8,
                      11,
                      9
                    ],
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "codec_attribute_cmr": 2,
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 255,
                          "evs_codec_attribute_hf_only": 0
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 307200
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "show_4g_for_lte_data_icon": true,
                  "sim_country_iso_override": "gb",
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_fqdn": "bsf.ims.mnc057.mcc234.pub.3gppnetwork.org"
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "spusu_gb.toml": {
              "carrier_name": "SPUSU",
              "version": 77000000005,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23440"
                },
                {
                  "mcc_mnc": "24007",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "48"
                  }
                }
              ],
              "apns": [
                {
                  "name": "spusu",
                  "value": "web",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "ims",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "wfc_spn_format_idx": 1,
                "ims": {
                  "request_uri_type": 1,
                  "sip_over_ipsec_enabled": false,
                  "sip_preferred_transport": 0
                },
                "iwlan": {
                  "epdg_address_priority": [
                    0
                  ],
                  "epdg_static_address": "epdg.epc.mnc040.mcc234.pub.3gppnetwork.org"
                }
              },
              "full_settings": {
                "version": 77000000005,
                "apns": {
                  "apn": [
                    {
                      "name": "spusu",
                      "value": "web",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "ims",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "request_uri_type": 1,
                    "sip_over_ipsec_enabled": false,
                    "sip_preferred_transport": 0
                  },
                  "iwlan": {
                    "epdg_address_priority": [
                      0
                    ],
                    "epdg_static_address": "epdg.epc.mnc040.mcc234.pub.3gppnetwork.org"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "virgin_gb.toml": {
              "carrier_name": "VIRGIN",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "20601",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "28000000"
                  }
                },
                {
                  "mcc_mnc": "20620",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "28000000"
                  }
                },
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "28000000"
                  }
                },
                {
                  "mcc_mnc": "23438"
                }
              ],
              "apns": [
                {
                  "name": "Virgin Media Mobile Internet",
                  "value": "goto.virginmobile.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.virginmobile.co.uk:8002",
                  "mmsc_proxy": "193.30.166.2",
                  "mmsc_proxy_port": "8080",
                  "user": "user"
                },
                {
                  "name": "XCAP",
                  "value": "hos",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "bearer_bitmask": "14",
                  "user_visible": false
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "field27": "1|2|3|8|9|10|13|14|15|18|20",
                  "mtu": 1280,
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 2,
                "carrier_name": "Virgin",
                "carrier_name_override": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_ims_apn": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "ut_requires_ims_registration": true,
                  "xcap_over_ut_supported_rats": [
                    3
                  ]
                },
                "imsvoice": {
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": -1
                      }
                    }
                  },
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_privacy_type": 2
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": true,
                "qns": {
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "sim_country_iso_override": "gb",
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 8080
                },
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE# #MODEL# #BUILD#",
                  "ipsec_authentication_algorithms": [
                    1
                  ],
                  "ipsec_encryption_algorithms": [
                    2
                  ],
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "request_uri_type": 1
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14
                  ],
                  "epdg_static_address": "epdg.epc.mnc038.mcc234.pub.3gppnetwork.org",
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9000\"],\"RetryArray\": [],\"UnthrottlingEvents\": [\"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}, {\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"10500\"],\"RetryArray\": [\"30\", \"30\", \"30\", \"30\", \"30\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "Virgin Media Mobile Internet",
                      "value": "goto.virginmobile.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.virginmobile.co.uk:8002",
                      "mmsc_proxy": "193.30.166.2",
                      "mmsc_proxy_port": "8080",
                      "user": "user"
                    },
                    {
                      "name": "XCAP",
                      "value": "hos",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "bearer_bitmask": "14",
                      "user_visible": false
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "field27": "1|2|3|8|9|10|13|14|15|18|20",
                      "mtu": 1280,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 2,
                  "carrier_name": "Virgin",
                  "carrier_name_override": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_ims_apn": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "ut_requires_ims_registration": true,
                    "xcap_over_ut_supported_rats": [
                      3
                    ]
                  },
                  "imsvoice": {
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": -1
                        }
                      }
                    },
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_privacy_type": 2
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": true,
                  "qns": {
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "sim_country_iso_override": "gb",
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 8080
                  },
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE# #MODEL# #BUILD#",
                    "ipsec_authentication_algorithms": [
                      1
                    ],
                    "ipsec_encryption_algorithms": [
                      2
                    ],
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "request_uri_type": 1
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14
                    ],
                    "epdg_static_address": "epdg.epc.mnc038.mcc234.pub.3gppnetwork.org",
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9000\"],\"RetryArray\": [],\"UnthrottlingEvents\": [\"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}, {\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"10500\"],\"RetryArray\": [\"30\", \"30\", \"30\", \"30\", \"30\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "asda_gb.toml": {
              "carrier_name": "ASDA",
              "version": 77000000006,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "A0"
                  }
                },
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "A1"
                  }
                }
              ],
              "apns": [
                {
                  "name": "ASDA Mobile",
                  "value": "MY.INTERNET",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.ad.vodafone.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "XCAP",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    3,
                    6,
                    5
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "minimum_session_expires_timer_sec": 600,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "qns": {
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ]
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                }
              },
              "full_settings": {
                "version": 77000000006,
                "apns": {
                  "apn": [
                    {
                      "name": "ASDA Mobile",
                      "value": "MY.INTERNET",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.ad.vodafone.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "XCAP",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      3,
                      6,
                      5
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "minimum_session_expires_timer_sec": 600,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "qns": {
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ]
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "cloud9_gb.toml": {
              "carrier_name": "CLOUD9",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23418",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "6764"
                  }
                }
              ],
              "apns": [
                {
                  "name": "globaldata",
                  "value": "globaldata",
                  "type": [
                    "default",
                    "supl",
                    "dun"
                  ]
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "imsvoice": {
                  "amrnb_payload_description_bundle": {
                    "103": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ],
                        "amr_codec_attribute_payload_format": 1
                      }
                    },
                    "98": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ]
                      }
                    }
                  },
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "globaldata",
                      "value": "globaldata",
                      "type": [
                        "default",
                        "supl",
                        "dun"
                      ]
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "imsvoice": {
                    "amrnb_payload_description_bundle": {
                      "103": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ],
                          "amr_codec_attribute_payload_format": 1
                        }
                      },
                      "98": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ]
                        }
                      }
                    },
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "ee_gb.toml": {
              "carrier_name": "EE",
              "version": 77000000005,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430"
                },
                {
                  "mcc_mnc": "23433"
                },
                {
                  "mcc_mnc": "23486"
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "bearer_bitmask": "14|18|20",
                  "password": "secure",
                  "user": "eesecure",
                  "user_visible": false
                },
                {
                  "name": "EE Internet",
                  "value": "everywhere",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE MMS",
                  "value": "eezone",
                  "type": [
                    "mms",
                    "xcap"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms/",
                  "mmsc_proxy": "149.254.201.135",
                  "mmsc_proxy_port": "8080",
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE Emergency",
                  "value": "sos",
                  "type": [
                    "emergency"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_cross_sim_ims_available": false,
                "carrier_default_data_roaming_enabled": true,
                "carrier_name": "EE",
                "carrier_name_override": true,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "display_voicemail_number_as_default_call_forwarding_number": {
                  "kind": "bool",
                  "value": true
                },
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enhanced_4g_lte": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 130000,
                  "ringing_timer_millis": 60000
                },
                "imswfc": {
                  "emergency_call_over_emergency_pdn": true
                },
                "iwlan_handover_policy_string_array": {
                  "kind": "text_array",
                  "value": [
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                    "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                    "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                  ]
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "preferred_ike_protocol": 40,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2,
                  "xcap_rat_preference": 2
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "vonr_enabled": true,
                "vonr_setting_visibility": false,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#",
                  "ipv4_sip_mtu_size_cellular": 1200,
                  "ipv6_sip_mtu_size_cellular": 1200,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "emergency_over_ims_roaming_supported_3gpp_network_types": [
                    6,
                    3
                  ],
                  "emergency_over_ims_supported_3gpp_network_types": [
                    6,
                    3
                  ],
                  "emergency_over_ims_supported_rats": [
                    6,
                    3,
                    5
                  ],
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000005,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "bearer_bitmask": "14|18|20",
                      "password": "secure",
                      "user": "eesecure",
                      "user_visible": false
                    },
                    {
                      "name": "EE Internet",
                      "value": "everywhere",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE MMS",
                      "value": "eezone",
                      "type": [
                        "mms",
                        "xcap"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms/",
                      "mmsc_proxy": "149.254.201.135",
                      "mmsc_proxy_port": "8080",
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE Emergency",
                      "value": "sos",
                      "type": [
                        "emergency"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_name": "EE",
                  "carrier_name_override": true,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "display_voicemail_number_as_default_call_forwarding_number": {
                    "kind": "bool",
                    "value": true
                  },
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enhanced_4g_lte": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 130000,
                    "ringing_timer_millis": 60000
                  },
                  "imswfc": {
                    "emergency_call_over_emergency_pdn": true
                  },
                  "iwlan_handover_policy_string_array": {
                    "kind": "text_array",
                    "value": [
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                      "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                      "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                    ]
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "preferred_ike_protocol": 40,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2,
                    "xcap_rat_preference": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "vonr_enabled": true,
                  "vonr_setting_visibility": false,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#",
                    "ipv4_sip_mtu_size_cellular": 1200,
                    "ipv6_sip_mtu_size_cellular": 1200,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "emergency_over_ims_roaming_supported_3gpp_network_types": [
                      6,
                      3
                    ],
                    "emergency_over_ims_supported_3gpp_network_types": [
                      6,
                      3
                    ],
                    "emergency_over_ims_supported_rats": [
                      6,
                      3,
                      5
                    ],
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": true,
                "satellite": false
              },
              "uecaps": []
            },
            "jt_gb.toml": {
              "carrier_name": "JT",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23450",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "JT"
                  }
                }
              ],
              "apns": [],
              "configs": {},
              "full_settings": {
                "version": 77000000001
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "spitfire_gb.toml": {
              "carrier_name": "SPITFIRE",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23405",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "Spitfire"
                  }
                }
              ],
              "apns": [
                {
                  "name": "spitfire1",
                  "value": "spitfire1",
                  "type": [
                    "default",
                    "ia"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "ims",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "bearer_bitmask": "14|20",
                  "proxy": "10.202.0.1",
                  "user_visible": false
                }
              ],
              "configs": {
                "imsvoice": {
                  "amrnb_payload_description_bundle": {
                    "103": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ],
                        "amr_codec_attribute_payload_format": 1
                      }
                    },
                    "98": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ]
                      }
                    }
                  },
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "prack_supported_for_18x": true
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "spitfire1",
                      "value": "spitfire1",
                      "type": [
                        "default",
                        "ia"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "ims",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "bearer_bitmask": "14|20",
                      "proxy": "10.202.0.1",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "imsvoice": {
                    "amrnb_payload_description_bundle": {
                      "103": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ],
                          "amr_codec_attribute_payload_format": 1
                        }
                      },
                      "98": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ]
                        }
                      }
                    },
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "prack_supported_for_18x": true
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "esimgo_gb.toml": {
              "carrier_name": "ESIMGO",
              "version": 77000000008,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0033"
                  }
                },
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "eSIM Go"
                  }
                }
              ],
              "apns": [
                {
                  "name": "eSIM Go Data",
                  "value": "uk.data.esim",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1340,
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_certificate_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "carrier_default_wfc_ims_mode": 1,
                "carrier_default_wfc_ims_roaming_mode": 1,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "338|busy everywhere|1017",
                    "510|Call completed elsewhere|1014"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "xcap_over_ut_supported_rats": []
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 90000,
                  "ringing_timer_millis": 90000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "qns": {
                  "block_iwlan_in_international_roaming_without_wwan": true,
                  "idle_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "idle_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "ims_wlan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "ims_wwan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "support_wfc_recovery": false,
                  "video_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "video_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "video_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "voice_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "voice_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "voice_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    2
                  ],
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "235-015"
                    ]
                  },
                  "natt_keep_alive_timer_sec": 30
                }
              },
              "full_settings": {
                "version": 77000000008,
                "apns": {
                  "apn": [
                    {
                      "name": "eSIM Go Data",
                      "value": "uk.data.esim",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1340,
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_certificate_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_default_wfc_ims_roaming_mode": 1,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "338|busy everywhere|1017",
                      "510|Call completed elsewhere|1014"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "xcap_over_ut_supported_rats": []
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 90000,
                    "ringing_timer_millis": 90000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "qns": {
                    "block_iwlan_in_international_roaming_without_wwan": true,
                    "idle_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "idle_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "ims_wlan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "ims_wwan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "support_wfc_recovery": false,
                    "video_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "video_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "video_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "voice_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "voice_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "voice_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      2
                    ],
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "235-015"
                      ]
                    },
                    "natt_keep_alive_timer_sec": 30
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "h3_gb.toml": {
              "carrier_name": "H3",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420"
                },
                {
                  "mcc_mnc": "23494"
                },
                {
                  "mcc_mnc": "23594"
                }
              ],
              "apns": [
                {
                  "name": "3hotspot",
                  "value": "3hotspot",
                  "type": [
                    "dun"
                  ],
                  "protocol": "ipv4v6",
                  "authtype": 0,
                  "user_visible": false
                },
                {
                  "name": "3",
                  "value": "three.co.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1440,
                  "user_editable": false
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_cross_sim_ims_available": false,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "3hotspot",
                      "value": "3hotspot",
                      "type": [
                        "dun"
                      ],
                      "protocol": "ipv4v6",
                      "authtype": 0,
                      "user_visible": false
                    },
                    {
                      "name": "3",
                      "value": "three.co.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1440,
                      "user_editable": false
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "talkmobile_gb.toml": {
              "carrier_name": "TALKMOBILE",
              "version": 77000000007,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "C1"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Talkmobile Data",
                  "value": "talkmobile.co.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.talkmobile.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "XCAP",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "editable_enhanced_4g_lte": false,
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    5,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "qns": {
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "sos_transport_type": 2
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                }
              },
              "full_settings": {
                "version": 77000000007,
                "apns": {
                  "apn": [
                    {
                      "name": "Talkmobile Data",
                      "value": "talkmobile.co.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.talkmobile.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "XCAP",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "editable_enhanced_4g_lte": false,
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      5,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "qns": {
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "sos_transport_type": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "idmobile_gb.toml": {
              "carrier_name": "IDMOBILE",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0305"
                  }
                }
              ],
              "apns": [
                {
                  "name": "iD",
                  "value": "id",
                  "type": [
                    "default",
                    "mms",
                    "supl",
                    "xcap"
                  ],
                  "mmsc": "http://mms.um.idmobile.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.idmobile.co.uk",
                  "mmsc_proxy_port": "8799"
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "iD",
                      "value": "id",
                      "type": [
                        "default",
                        "mms",
                        "supl",
                        "xcap"
                      ],
                      "mmsc": "http://mms.um.idmobile.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.idmobile.co.uk",
                      "mmsc_proxy_port": "8799"
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "esn_gb.toml": {
              "carrier_name": "ESN",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23471"
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims",
                    "xcap"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_data_roaming_enabled": true,
                "carrier_name": "",
                "carrier_name_override": false,
                "carrier_nr_availabilities": [],
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": false,
                "display_voicemail_number_as_default_call_forwarding_number": {
                  "kind": "bool",
                  "value": true
                },
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enhanced_4g_lte": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imssms": {
                  "sms_over_ims_supported_rats": [
                    3,
                    6
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 1,
                  "ut_iptype_roaming": 1,
                  "ut_requires_ims_registration": true,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 130000,
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 2000
                },
                "iwlan_handover_policy_string_array": {
                  "kind": "text_array",
                  "value": [
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                    "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                    "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                  ]
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "preferred_ike_protocol": 40,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2,
                  "xcap_rat_preference": 2,
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipsec_authentication_algorithms": [
                    1
                  ],
                  "ipsec_encryption_algorithms": [
                    2
                  ],
                  "ipv4_sip_mtu_size_cellular": 1200,
                  "ipv6_sip_mtu_size_cellular": 1200,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_3gpp_network_types": [
                    6,
                    3
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ],
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims",
                        "xcap"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_name": "",
                  "carrier_name_override": false,
                  "carrier_nr_availabilities": [],
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": false,
                  "display_voicemail_number_as_default_call_forwarding_number": {
                    "kind": "bool",
                    "value": true
                  },
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enhanced_4g_lte": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imssms": {
                    "sms_over_ims_supported_rats": [
                      3,
                      6
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 1,
                    "ut_iptype_roaming": 1,
                    "ut_requires_ims_registration": true,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 130000,
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 2000
                  },
                  "iwlan_handover_policy_string_array": {
                    "kind": "text_array",
                    "value": [
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                      "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                      "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                    ]
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "preferred_ike_protocol": 40,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2,
                    "xcap_rat_preference": 2,
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipsec_authentication_algorithms": [
                      1
                    ],
                    "ipsec_encryption_algorithms": [
                      2
                    ],
                    "ipv4_sip_mtu_size_cellular": 1200,
                    "ipv6_sip_mtu_size_cellular": 1200,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_3gpp_network_types": [
                      6,
                      3
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ],
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "vodafone_gb.toml": {
              "carrier_name": "VODAFONE",
              "version": 77000000009,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415"
                },
                {
                  "mcc_mnc": "23491"
                }
              ],
              "apns": [
                {
                  "name": "Vodafone UK Data",
                  "value": "wap.vodafone.co.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1340,
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "XCAP",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "call_barring_visibility": true,
                "carrier_certificate_string_array": {
                  "kind": "text_array",
                  "value": [
                    "2E26357C65C1F858CE0C798AA7EFB38922E8D334F12DAD4A3963007DFBBC5677:com.myvodafoneapp"
                  ]
                },
                "carrier_default_wfc_ims_mode": 1,
                "carrier_default_wfc_ims_roaming_mode": 1,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "epsfb_silent_retry_error_code_string_array": {
                  "kind": "text_array",
                  "value": [
                    "500",
                    "503"
                  ]
                },
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "338|busy everywhere|1017",
                    "510|Call completed elsewhere|1014"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    5,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "qns": {
                  "block_iwlan_in_international_roaming_without_wwan": true,
                  "idle_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "idle_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "ims_wlan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "ims_wwan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "support_wfc_recovery": false,
                  "video_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "video_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "video_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "voice_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "voice_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "voice_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "voicemail_notification_persistent": true,
                "volte_vowifi_silent_retry_error_code_string_array": {
                  "kind": "text_array",
                  "value": [
                    "500",
                    "503"
                  ]
                },
                "vonr_enabled": true,
                "vonr_setting_visibility": false,
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    2
                  ],
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "235-015"
                    ]
                  },
                  "natt_keep_alive_timer_sec": 30
                }
              },
              "full_settings": {
                "version": 77000000009,
                "apns": {
                  "apn": [
                    {
                      "name": "Vodafone UK Data",
                      "value": "wap.vodafone.co.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1340,
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "XCAP",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "call_barring_visibility": true,
                  "carrier_certificate_string_array": {
                    "kind": "text_array",
                    "value": [
                      "2E26357C65C1F858CE0C798AA7EFB38922E8D334F12DAD4A3963007DFBBC5677:com.myvodafoneapp"
                    ]
                  },
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_default_wfc_ims_roaming_mode": 1,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "epsfb_silent_retry_error_code_string_array": {
                    "kind": "text_array",
                    "value": [
                      "500",
                      "503"
                    ]
                  },
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "338|busy everywhere|1017",
                      "510|Call completed elsewhere|1014"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      5,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "qns": {
                    "block_iwlan_in_international_roaming_without_wwan": true,
                    "idle_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "idle_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "ims_wlan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "ims_wwan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "support_wfc_recovery": false,
                    "video_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "video_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "video_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "voice_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "voice_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "voice_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "voicemail_notification_persistent": true,
                  "volte_vowifi_silent_retry_error_code_string_array": {
                    "kind": "text_array",
                    "value": [
                      "500",
                      "503"
                    ]
                  },
                  "vonr_enabled": true,
                  "vonr_setting_visibility": false,
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      2
                    ],
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "235-015"
                      ]
                    },
                    "natt_keep_alive_timer_sec": 30
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": true,
                "satellite": false
              },
              "uecaps": []
            },
            "gamma_gb.toml": {
              "carrier_name": "GAMMA",
              "version": 77000000004,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "030B"
                  }
                },
                {
                  "mcc_mnc": "23439"
                }
              ],
              "apns": [
                {
                  "name": "GAMMA",
                  "value": "gamma",
                  "type": [
                    "default",
                    "supl",
                    "dun"
                  ],
                  "authtype": 0,
                  "user_editable": false
                },
                {
                  "name": "Gamma MMS",
                  "value": "three.co.uk",
                  "type": [
                    "mms"
                  ],
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1440,
                  "user_editable": false
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                },
                {
                  "name": "Gamma XCAP",
                  "value": "three.co.uk",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000004,
                "apns": {
                  "apn": [
                    {
                      "name": "GAMMA",
                      "value": "gamma",
                      "type": [
                        "default",
                        "supl",
                        "dun"
                      ],
                      "authtype": 0,
                      "user_editable": false
                    },
                    {
                      "name": "Gamma MMS",
                      "value": "three.co.uk",
                      "type": [
                        "mms"
                      ],
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1440,
                      "user_editable": false
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    },
                    {
                      "name": "Gamma XCAP",
                      "value": "three.co.uk",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "smarty_gb.toml": {
              "carrier_name": "SMARTY",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0309"
                  }
                }
              ],
              "apns": [
                {
                  "name": "SMARTY",
                  "value": "mob.asm.net",
                  "type": [
                    "default",
                    "mms",
                    "supl",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799"
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": false,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "SMARTY",
                      "value": "mob.asm.net",
                      "type": [
                        "default",
                        "mms",
                        "supl",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799"
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": false,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "superdrug_gb.toml": {
              "carrier_name": "SUPERDRUG",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0310"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Superdrug",
                  "value": "mobile.connect",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799"
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                },
                {
                  "name": "xcap",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "Superdrug",
                      "value": "mobile.connect",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799"
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    },
                    {
                      "name": "xcap",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "lycamobile_gb.toml": {
              "carrier_name": "LYCAMOBILE",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "LycaMobile"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Lycamobile",
                  "value": "data.lycamobile.co.uk",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_volte_available": true,
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23420",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "show_4g_for_lte_data_icon": true
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "Lycamobile",
                      "value": "data.lycamobile.co.uk",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_volte_available": true,
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23420",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "show_4g_for_lte_data_icon": true
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "tcl_gb.toml": {
              "carrier_name": "TCL",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23427"
                }
              ],
              "apns": [
                {
                  "name": "TCL MOVE",
                  "value": "move.dataxs.mobi",
                  "type": [
                    "default",
                    "dun"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "prack_supported_for_18x": true
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "TCL MOVE",
                      "value": "move.dataxs.mobi",
                      "type": [
                        "default",
                        "dun"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "prack_supported_for_18x": true
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            }
          }
        },
        "pixel_10_pro_blazer": {
          "friendly_name": "Pixel 10 Pro Blazer",
          "carriers": {
            "o2prepaid_gb.toml": {
              "carrier_name": "O2PREPAID",
              "version": 77000000005,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "61"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "67"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "85"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "99"
                  }
                }
              ],
              "apns": [
                {
                  "name": "O2 Pay As You Go",
                  "value": "payandgo.o2.co.uk",
                  "type": [
                    "default",
                    "dun",
                    "mms",
                    "supl",
                    "hipri",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                  "password": "p",
                  "user": "o2",
                  "user_editable": false
                },
                {
                  "name": "O2 IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "carrier_default_wfc_ims_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "901",
                "disable_supplementary_services_in_airplane_mode": true,
                "display_hd_audio_property": false,
                "hide_lte_plus_data_icon": false,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_port": 443,
                  "ut_iptype_home": 0,
                  "ut_transport_type": 3,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        126
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "126": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 3
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "support_wfc_in_international_roaming": {
                    "kind": "bool",
                    "value": false
                  },
                  "xcap_transport_type": 0
                },
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 443,
                  "bsf_transport_type": 3
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 43300,
                  "child_sa_rekey_soft_timer_sec": 43200,
                  "diffie_hellman_groups": [
                    14
                  ],
                  "dpd_timer_sec": 1800,
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 43300
                  },
                  "ike_rekey_soft_timer_sec": 43200,
                  "ike_remote_id_type": 11,
                  "supported_ike_session_encryption_algorithms": [
                    12,
                    13
                  ]
                }
              },
              "full_settings": {
                "version": 77000000005,
                "apns": {
                  "apn": [
                    {
                      "name": "O2 Pay As You Go",
                      "value": "payandgo.o2.co.uk",
                      "type": [
                        "default",
                        "dun",
                        "mms",
                        "supl",
                        "hipri",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                      "password": "p",
                      "user": "o2",
                      "user_editable": false
                    },
                    {
                      "name": "O2 IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "901",
                  "disable_supplementary_services_in_airplane_mode": true,
                  "display_hd_audio_property": false,
                  "hide_lte_plus_data_icon": false,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_port": 443,
                    "ut_iptype_home": 0,
                    "ut_transport_type": 3,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          126
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "126": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 3
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "support_wfc_in_international_roaming": {
                      "kind": "bool",
                      "value": false
                    },
                    "xcap_transport_type": 0
                  },
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 443,
                    "bsf_transport_type": 3
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 43300,
                    "child_sa_rekey_soft_timer_sec": 43200,
                    "diffie_hellman_groups": [
                      14
                    ],
                    "dpd_timer_sec": 1800,
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 43300
                    },
                    "ike_rekey_soft_timer_sec": 43200,
                    "ike_remote_id_type": 11,
                    "supported_ike_session_encryption_algorithms": [
                      12,
                      13
                    ]
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "o2postpaid_gb.toml": {
              "carrier_name": "O2POSTPAID",
              "version": 77000000008,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410"
                }
              ],
              "apns": [
                {
                  "name": "O2 Pay Monthly",
                  "value": "mobile.o2.co.uk",
                  "type": [
                    "default",
                    "dun",
                    "mms",
                    "supl",
                    "hipri",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                  "password": "p",
                  "user": "o2",
                  "user_editable": false
                },
                {
                  "name": "O2 IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "carrier_default_wfc_ims_enabled": true,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_roaming_satellite_default_services": [
                  2,
                  3,
                  6
                ],
                "carrier_supported_satellite_services_per_provider_bundle": {
                  "23402": {
                    "kind": "int_array",
                    "value": [
                      2,
                      3,
                      6
                    ]
                  }
                },
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "901",
                "disable_supplementary_services_in_airplane_mode": true,
                "display_hd_audio_property": false,
                "emergency_messaging_supported": true,
                "hide_lte_plus_data_icon": false,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsserviceentitlement": {
                  "entitlement_server_url": "https://ses.o2.co.uk:10024"
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_port": 443,
                  "ut_iptype_home": 0,
                  "ut_transport_type": 3,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        126
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "126": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 3
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "support_wfc_in_international_roaming": {
                    "kind": "bool",
                    "value": false
                  },
                  "xcap_transport_type": 0
                },
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "satellite_attach_supported": true,
                "satellite_data_support_mode": 1,
                "satellite_entitlement_supported": true,
                "satellite_ignore_data_roaming_setting": true,
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "vonr_enabled": true,
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 443,
                  "bsf_transport_type": 3
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 43300,
                  "child_sa_rekey_soft_timer_sec": 43200,
                  "diffie_hellman_groups": [
                    14
                  ],
                  "dpd_timer_sec": 1800,
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 43300
                  },
                  "ike_rekey_soft_timer_sec": 43200,
                  "ike_remote_id_type": 11,
                  "supported_ike_session_encryption_algorithms": [
                    12,
                    13
                  ]
                }
              },
              "full_settings": {
                "version": 77000000008,
                "apns": {
                  "apn": [
                    {
                      "name": "O2 Pay Monthly",
                      "value": "mobile.o2.co.uk",
                      "type": [
                        "default",
                        "dun",
                        "mms",
                        "supl",
                        "hipri",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                      "password": "p",
                      "user": "o2",
                      "user_editable": false
                    },
                    {
                      "name": "O2 IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_roaming_satellite_default_services": [
                    2,
                    3,
                    6
                  ],
                  "carrier_supported_satellite_services_per_provider_bundle": {
                    "23402": {
                      "kind": "int_array",
                      "value": [
                        2,
                        3,
                        6
                      ]
                    }
                  },
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "901",
                  "disable_supplementary_services_in_airplane_mode": true,
                  "display_hd_audio_property": false,
                  "emergency_messaging_supported": true,
                  "hide_lte_plus_data_icon": false,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsserviceentitlement": {
                    "entitlement_server_url": "https://ses.o2.co.uk:10024"
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_port": 443,
                    "ut_iptype_home": 0,
                    "ut_transport_type": 3,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          126
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "126": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 3
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "support_wfc_in_international_roaming": {
                      "kind": "bool",
                      "value": false
                    },
                    "xcap_transport_type": 0
                  },
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "satellite_attach_supported": true,
                  "satellite_data_support_mode": 1,
                  "satellite_entitlement_supported": true,
                  "satellite_ignore_data_roaming_setting": true,
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "vonr_enabled": true,
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 443,
                    "bsf_transport_type": 3
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 43300,
                    "child_sa_rekey_soft_timer_sec": 43200,
                    "diffie_hellman_groups": [
                      14
                    ],
                    "dpd_timer_sec": 1800,
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 43300
                    },
                    "ike_rekey_soft_timer_sec": 43200,
                    "ike_remote_id_type": 11,
                    "supported_ike_session_encryption_algorithms": [
                      12,
                      13
                    ]
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": true,
                "satellite": true
              },
              "uecaps": []
            },
            "lebara_gb.toml": {
              "carrier_name": "LEBARA",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "LEBARA"
                  }
                },
                {
                  "mcc_mnc": "23487"
                }
              ],
              "apns": [
                {
                  "name": "Lebara Internet",
                  "value": "uk.lebara.mobi",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms.lebara.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_mode": 1,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": []
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "qns": {
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": [
                    "*"
                  ]
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "Lebara Internet",
                      "value": "uk.lebara.mobi",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms.lebara.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": []
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "qns": {
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": [
                      "*"
                    ]
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "tesco_gb.toml": {
              "carrier_name": "TESCO",
              "version": 77000000003,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0A"
                  }
                }
              ],
              "apns": [
                {
                  "name": "TESCO",
                  "value": "prepay.tesco-mobile.com",
                  "type": [
                    "default",
                    "dun",
                    "mms",
                    "supl",
                    "hipri",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                  "password": "p",
                  "user": "tm"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "905",
                "hide_lte_plus_data_icon": false,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_port": 443,
                  "ut_iptype_home": 0,
                  "ut_transport_type": 3,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        126
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "126": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 3
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "xcap_transport_type": 0
                },
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 443,
                  "bsf_transport_type": 3
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ],
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                }
              },
              "full_settings": {
                "version": 77000000003,
                "apns": {
                  "apn": [
                    {
                      "name": "TESCO",
                      "value": "prepay.tesco-mobile.com",
                      "type": [
                        "default",
                        "dun",
                        "mms",
                        "supl",
                        "hipri",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mms.o2.co.uk:8002",
                      "password": "p",
                      "user": "tm"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "905",
                  "hide_lte_plus_data_icon": false,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_port": 443,
                    "ut_iptype_home": 0,
                    "ut_transport_type": 3,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          126
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "126": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 3
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "xcap_transport_type": 0
                  },
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 443,
                    "bsf_transport_type": 3
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ],
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "btc_gb.toml": {
              "carrier_name": "BTC",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "C3"
                  }
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "bearer_bitmask": "14|18|20",
                  "password": "secure",
                  "user": "eesecure",
                  "user_visible": false
                },
                {
                  "name": "Internet",
                  "value": "everywhere",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "MMS",
                  "value": "eezone",
                  "type": [
                    "mms",
                    "xcap"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms/",
                  "mmsc_proxy": "149.254.201.135",
                  "mmsc_proxy_port": "8080",
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE Emergency",
                  "value": "sos",
                  "type": [
                    "emergency"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_cross_sim_ims_available": false,
                "carrier_default_data_roaming_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imsss": {
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  }
                },
                "imswfc": {
                  "emergency_call_over_emergency_pdn": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ]
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "bearer_bitmask": "14|18|20",
                      "password": "secure",
                      "user": "eesecure",
                      "user_visible": false
                    },
                    {
                      "name": "Internet",
                      "value": "everywhere",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "MMS",
                      "value": "eezone",
                      "type": [
                        "mms",
                        "xcap"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms/",
                      "mmsc_proxy": "149.254.201.135",
                      "mmsc_proxy_port": "8080",
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE Emergency",
                      "value": "sos",
                      "type": [
                        "emergency"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imsss": {
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    }
                  },
                  "imswfc": {
                    "emergency_call_over_emergency_pdn": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ]
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "giffgaff_gb.toml": {
              "carrier_name": "GIFFGAFF",
              "version": 77000000004,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "50"
                  }
                },
                {
                  "mcc_mnc": "23410",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "GIFFGAFF"
                  }
                }
              ],
              "apns": [
                {
                  "name": "giffgaff",
                  "value": "giffgaff.com",
                  "type": [
                    "default",
                    "mms"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mmsc.mediamessaging.co.uk:8002",
                  "password": "p",
                  "user": "gg"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "443",
                "hide_lte_plus_data_icon": false,
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23420",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "radio_restart_failure_causes": [
                  55
                ],
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "show_wifi_calling_icon_in_status_bar": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "imsemergency": {
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    14
                  ]
                }
              },
              "full_settings": {
                "version": 77000000004,
                "apns": {
                  "apn": [
                    {
                      "name": "giffgaff",
                      "value": "giffgaff.com",
                      "type": [
                        "default",
                        "mms"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mmsc.mediamessaging.co.uk:8002",
                      "password": "p",
                      "user": "gg"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "443",
                  "hide_lte_plus_data_icon": false,
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23420",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "radio_restart_failure_causes": [
                    55
                  ],
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "show_wifi_calling_icon_in_status_bar": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "imsemergency": {
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      14
                    ]
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "btb_gb.toml": {
              "carrier_name": "BTB",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "B3"
                  }
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "bearer_bitmask": "14|18|20",
                  "password": "secure",
                  "user": "eesecure",
                  "user_visible": false
                },
                {
                  "name": "Internet",
                  "value": "everywhere",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "MMS",
                  "value": "eezone",
                  "type": [
                    "mms",
                    "xcap"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms/",
                  "mmsc_proxy": "149.254.201.135",
                  "mmsc_proxy_port": "8080",
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE Emergency",
                  "value": "sos",
                  "type": [
                    "emergency"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_cross_sim_ims_available": false,
                "carrier_default_data_roaming_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imsss": {
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  }
                },
                "imswfc": {
                  "emergency_call_over_emergency_pdn": true
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ]
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "bearer_bitmask": "14|18|20",
                      "password": "secure",
                      "user": "eesecure",
                      "user_visible": false
                    },
                    {
                      "name": "Internet",
                      "value": "everywhere",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "MMS",
                      "value": "eezone",
                      "type": [
                        "mms",
                        "xcap"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms/",
                      "mmsc_proxy": "149.254.201.135",
                      "mmsc_proxy_port": "8080",
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE Emergency",
                      "value": "sos",
                      "type": [
                        "emergency"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imsss": {
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    }
                  },
                  "imswfc": {
                    "emergency_call_over_emergency_pdn": true
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#"
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ]
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "gigs_gb.toml": {
              "carrier_name": "GIGS",
              "version": 77000000008,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "22"
                  }
                },
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "Gigs"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Gigs Data",
                  "value": "MY.INTERNET",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "mtu": 1340,
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_certificate_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "carrier_default_wfc_ims_mode": 1,
                "carrier_default_wfc_ims_roaming_mode": 1,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "enabledMMS": {
                  "kind": "bool",
                  "value": false
                },
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "338|busy everywhere|1017",
                    "510|Call completed elsewhere|1014"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "xcap_over_ut_supported_rats": []
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 90000,
                  "ringing_timer_millis": 90000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "qns": {
                  "block_iwlan_in_international_roaming_without_wwan": true,
                  "idle_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "idle_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "ims_wlan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "ims_wwan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "support_wfc_recovery": false,
                  "video_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "video_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "video_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "voice_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "voice_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "voice_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    2
                  ],
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "235-015"
                    ]
                  },
                  "natt_keep_alive_timer_sec": 30
                }
              },
              "full_settings": {
                "version": 77000000008,
                "apns": {
                  "apn": [
                    {
                      "name": "Gigs Data",
                      "value": "MY.INTERNET",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "mtu": 1340,
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_certificate_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_default_wfc_ims_roaming_mode": 1,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "enabledMMS": {
                    "kind": "bool",
                    "value": false
                  },
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "338|busy everywhere|1017",
                      "510|Call completed elsewhere|1014"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "xcap_over_ut_supported_rats": []
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 90000,
                    "ringing_timer_millis": 90000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "qns": {
                    "block_iwlan_in_international_roaming_without_wwan": true,
                    "idle_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "idle_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "ims_wlan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "ims_wwan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "support_wfc_recovery": false,
                    "video_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "video_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "video_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "voice_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "voice_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "voice_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      2
                    ],
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "235-015"
                      ]
                    },
                    "natt_keep_alive_timer_sec": 30
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "sky_gb.toml": {
              "carrier_name": "SKY",
              "version": 77000000005,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23457"
                },
                {
                  "mcc_mnc": "24007",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0C"
                  }
                }
              ],
              "apns": [
                {
                  "name": "SKY MMS",
                  "value": "mms.mobile.sky",
                  "type": [
                    "mms"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 0,
                  "bearer_bitmask": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|17|20",
                  "mmsc": "http://185.110.178.96:38090/was",
                  "mmsc_proxy": "185.110.178.97",
                  "mmsc_proxy_port": "9028",
                  "user_visible": false
                },
                {
                  "name": "SKY WiFi MMS",
                  "value": "wifi.mms.mobile.sky",
                  "type": [
                    "mms"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 0,
                  "bearer_bitmask": "18",
                  "mmsc": "http://185.110.178.96:38090/was",
                  "mmsc_proxy": "185.110.178.97",
                  "mmsc_proxy_port": "9028",
                  "user_visible": false
                },
                {
                  "name": "SKY Internet",
                  "value": "mobile.sky",
                  "type": [
                    "default",
                    "supl",
                    "ia"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "Sky Ut",
                  "value": "ut.mobile.sky",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_as_server_fqdn": "xcap.ims.mnc057.mcc234.pub.3gppnetwork.org",
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    15,
                    19,
                    8,
                    11,
                    9
                  ],
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "dedicated_bearer_wait_timer_millis": 10000,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "codec_attribute_cmr": 2,
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 255,
                        "evs_codec_attribute_hf_only": 0
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "maxMessageSize": {
                  "kind": "int",
                  "value": 307200
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "show_4g_for_lte_data_icon": true,
                "sim_country_iso_override": "gb",
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_fqdn": "bsf.ims.mnc057.mcc234.pub.3gppnetwork.org"
                },
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "sip_timer_b_millis": 90000,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                }
              },
              "full_settings": {
                "version": 77000000005,
                "apns": {
                  "apn": [
                    {
                      "name": "SKY MMS",
                      "value": "mms.mobile.sky",
                      "type": [
                        "mms"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 0,
                      "bearer_bitmask": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|17|20",
                      "mmsc": "http://185.110.178.96:38090/was",
                      "mmsc_proxy": "185.110.178.97",
                      "mmsc_proxy_port": "9028",
                      "user_visible": false
                    },
                    {
                      "name": "SKY WiFi MMS",
                      "value": "wifi.mms.mobile.sky",
                      "type": [
                        "mms"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 0,
                      "bearer_bitmask": "18",
                      "mmsc": "http://185.110.178.96:38090/was",
                      "mmsc_proxy": "185.110.178.97",
                      "mmsc_proxy_port": "9028",
                      "user_visible": false
                    },
                    {
                      "name": "SKY Internet",
                      "value": "mobile.sky",
                      "type": [
                        "default",
                        "supl",
                        "ia"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "Sky Ut",
                      "value": "ut.mobile.sky",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_as_server_fqdn": "xcap.ims.mnc057.mcc234.pub.3gppnetwork.org",
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      15,
                      19,
                      8,
                      11,
                      9
                    ],
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "dedicated_bearer_wait_timer_millis": 10000,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "codec_attribute_cmr": 2,
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 255,
                          "evs_codec_attribute_hf_only": 0
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 307200
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "show_4g_for_lte_data_icon": true,
                  "sim_country_iso_override": "gb",
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_fqdn": "bsf.ims.mnc057.mcc234.pub.3gppnetwork.org"
                  },
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "sip_timer_b_millis": 90000,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "spusu_gb.toml": {
              "carrier_name": "SPUSU",
              "version": 77000000006,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23440"
                },
                {
                  "mcc_mnc": "24007",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "48"
                  }
                }
              ],
              "apns": [
                {
                  "name": "spusu",
                  "value": "web",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "ims",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "wfc_spn_format_idx": 1,
                "ims": {
                  "request_uri_type": 1,
                  "sip_over_ipsec_enabled": false,
                  "sip_preferred_transport": 0
                },
                "iwlan": {
                  "epdg_address_priority": [
                    0
                  ],
                  "epdg_static_address": "epdg.epc.mnc040.mcc234.pub.3gppnetwork.org"
                }
              },
              "full_settings": {
                "version": 77000000006,
                "apns": {
                  "apn": [
                    {
                      "name": "spusu",
                      "value": "web",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "ims",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "request_uri_type": 1,
                    "sip_over_ipsec_enabled": false,
                    "sip_preferred_transport": 0
                  },
                  "iwlan": {
                    "epdg_address_priority": [
                      0
                    ],
                    "epdg_static_address": "epdg.epc.mnc040.mcc234.pub.3gppnetwork.org"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "virgin_gb.toml": {
              "carrier_name": "VIRGIN",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "20601",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "28000000"
                  }
                },
                {
                  "mcc_mnc": "20620",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "28000000"
                  }
                },
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "28000000"
                  }
                },
                {
                  "mcc_mnc": "23438"
                }
              ],
              "apns": [
                {
                  "name": "Virgin Media Mobile Internet",
                  "value": "goto.virginmobile.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.virginmobile.co.uk:8002",
                  "mmsc_proxy": "193.30.166.2",
                  "mmsc_proxy_port": "8080",
                  "user": "user"
                },
                {
                  "name": "XCAP",
                  "value": "hos",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "bearer_bitmask": "14",
                  "user_visible": false
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "field27": "1|2|3|8|9|10|13|14|15|18|20",
                  "mtu": 1280,
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 2,
                "carrier_name": "Virgin",
                "carrier_name_override": true,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_ims_apn": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "ut_requires_ims_registration": true,
                  "xcap_over_ut_supported_rats": [
                    3
                  ]
                },
                "imsvoice": {
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": -1
                      }
                    }
                  },
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_privacy_type": 2
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": true,
                "qns": {
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "sim_country_iso_override": "gb",
                "wfc_spn_format_idx": 1,
                "bsf": {
                  "bsf_server_port": 8080
                },
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE# #MODEL# #BUILD#",
                  "ipsec_authentication_algorithms": [
                    1
                  ],
                  "ipsec_encryption_algorithms": [
                    2
                  ],
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "request_uri_type": 1
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14
                  ],
                  "epdg_static_address": "epdg.epc.mnc038.mcc234.pub.3gppnetwork.org",
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9000\"],\"RetryArray\": [],\"UnthrottlingEvents\": [\"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}, {\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"10500\"],\"RetryArray\": [\"30\", \"30\", \"30\", \"30\", \"30\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "Virgin Media Mobile Internet",
                      "value": "goto.virginmobile.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.virginmobile.co.uk:8002",
                      "mmsc_proxy": "193.30.166.2",
                      "mmsc_proxy_port": "8080",
                      "user": "user"
                    },
                    {
                      "name": "XCAP",
                      "value": "hos",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "bearer_bitmask": "14",
                      "user_visible": false
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "field27": "1|2|3|8|9|10|13|14|15|18|20",
                      "mtu": 1280,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 2,
                  "carrier_name": "Virgin",
                  "carrier_name_override": true,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_ims_apn": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "ut_requires_ims_registration": true,
                    "xcap_over_ut_supported_rats": [
                      3
                    ]
                  },
                  "imsvoice": {
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": -1
                        }
                      }
                    },
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_privacy_type": 2
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": true,
                  "qns": {
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "sim_country_iso_override": "gb",
                  "wfc_spn_format_idx": 1,
                  "bsf": {
                    "bsf_server_port": 8080
                  },
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE# #MODEL# #BUILD#",
                    "ipsec_authentication_algorithms": [
                      1
                    ],
                    "ipsec_encryption_algorithms": [
                      2
                    ],
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "request_uri_type": 1
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14
                    ],
                    "epdg_static_address": "epdg.epc.mnc038.mcc234.pub.3gppnetwork.org",
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9000\"],\"RetryArray\": [],\"UnthrottlingEvents\": [\"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}, {\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"10500\"],\"RetryArray\": [\"30\", \"30\", \"30\", \"30\", \"30\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "asda_gb.toml": {
              "carrier_name": "ASDA",
              "version": 77000000007,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "A0"
                  }
                },
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "A1"
                  }
                }
              ],
              "apns": [
                {
                  "name": "ASDA Mobile",
                  "value": "MY.INTERNET",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.ad.vodafone.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "XCAP",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    3,
                    6,
                    5
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "minimum_session_expires_timer_sec": 600,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "qns": {
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ]
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                }
              },
              "full_settings": {
                "version": 77000000007,
                "apns": {
                  "apn": [
                    {
                      "name": "ASDA Mobile",
                      "value": "MY.INTERNET",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.ad.vodafone.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "XCAP",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      3,
                      6,
                      5
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "minimum_session_expires_timer_sec": 600,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "qns": {
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ]
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "cloud9_gb.toml": {
              "carrier_name": "CLOUD9",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23418",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "6764"
                  }
                }
              ],
              "apns": [
                {
                  "name": "globaldata",
                  "value": "globaldata",
                  "type": [
                    "default",
                    "supl",
                    "dun"
                  ]
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "imsvoice": {
                  "amrnb_payload_description_bundle": {
                    "103": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ],
                        "amr_codec_attribute_payload_format": 1
                      }
                    },
                    "98": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ]
                      }
                    }
                  },
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "oip_source_from_header": true,
                  "prack_supported_for_18x": true
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "globaldata",
                      "value": "globaldata",
                      "type": [
                        "default",
                        "supl",
                        "dun"
                      ]
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "imsvoice": {
                    "amrnb_payload_description_bundle": {
                      "103": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ],
                          "amr_codec_attribute_payload_format": 1
                        }
                      },
                      "98": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ]
                        }
                      }
                    },
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "oip_source_from_header": true,
                    "prack_supported_for_18x": true
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "ee_gb.toml": {
              "carrier_name": "EE",
              "version": 77000000006,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430"
                },
                {
                  "mcc_mnc": "23433"
                },
                {
                  "mcc_mnc": "23486"
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "bearer_bitmask": "14|18|20",
                  "password": "secure",
                  "user": "eesecure",
                  "user_visible": false
                },
                {
                  "name": "EE Internet",
                  "value": "everywhere",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE MMS",
                  "value": "eezone",
                  "type": [
                    "mms",
                    "xcap"
                  ],
                  "authtype": 1,
                  "mmsc": "http://mms/",
                  "mmsc_proxy": "149.254.201.135",
                  "mmsc_proxy_port": "8080",
                  "password": "secure",
                  "user": "eesecure",
                  "user_editable": false
                },
                {
                  "name": "EE Emergency",
                  "value": "sos",
                  "type": [
                    "emergency"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_cross_sim_ims_available": false,
                "carrier_default_data_roaming_enabled": true,
                "carrier_name": "EE",
                "carrier_name_override": true,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "display_voicemail_number_as_default_call_forwarding_number": {
                  "kind": "bool",
                  "value": true
                },
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enhanced_4g_lte": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    5,
                    6,
                    3,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 130000,
                  "ringing_timer_millis": 60000
                },
                "imswfc": {
                  "emergency_call_over_emergency_pdn": true
                },
                "iwlan_handover_policy_string_array": {
                  "kind": "text_array",
                  "value": [
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                    "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                    "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                  ]
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "preferred_ike_protocol": 40,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2,
                  "xcap_rat_preference": 2
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "vonr_enabled": true,
                "vonr_setting_visibility": false,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "geolocation_pidf_in_sip_invite_support": [
                    4,
                    2
                  ],
                  "geolocation_pidf_in_sip_register_support": [
                    4,
                    2
                  ],
                  "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#",
                  "ipv4_sip_mtu_size_cellular": 1200,
                  "ipv6_sip_mtu_size_cellular": 1200,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "emergency_over_ims_roaming_supported_3gpp_network_types": [
                    6,
                    3
                  ],
                  "emergency_over_ims_supported_3gpp_network_types": [
                    6,
                    3
                  ],
                  "emergency_over_ims_supported_rats": [
                    6,
                    3,
                    5
                  ],
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000006,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "bearer_bitmask": "14|18|20",
                      "password": "secure",
                      "user": "eesecure",
                      "user_visible": false
                    },
                    {
                      "name": "EE Internet",
                      "value": "everywhere",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE MMS",
                      "value": "eezone",
                      "type": [
                        "mms",
                        "xcap"
                      ],
                      "authtype": 1,
                      "mmsc": "http://mms/",
                      "mmsc_proxy": "149.254.201.135",
                      "mmsc_proxy_port": "8080",
                      "password": "secure",
                      "user": "eesecure",
                      "user_editable": false
                    },
                    {
                      "name": "EE Emergency",
                      "value": "sos",
                      "type": [
                        "emergency"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_name": "EE",
                  "carrier_name_override": true,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "display_voicemail_number_as_default_call_forwarding_number": {
                    "kind": "bool",
                    "value": true
                  },
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enhanced_4g_lte": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      5,
                      6,
                      3,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 130000,
                    "ringing_timer_millis": 60000
                  },
                  "imswfc": {
                    "emergency_call_over_emergency_pdn": true
                  },
                  "iwlan_handover_policy_string_array": {
                    "kind": "text_array",
                    "value": [
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                      "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                      "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                    ]
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "preferred_ike_protocol": 40,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2,
                    "xcap_rat_preference": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "vonr_enabled": true,
                  "vonr_setting_visibility": false,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "geolocation_pidf_in_sip_invite_support": [
                      4,
                      2
                    ],
                    "geolocation_pidf_in_sip_register_support": [
                      4,
                      2
                    ],
                    "ims_user_agent": "#MANUFACTURE#_#MODEL#_#BUILD#",
                    "ipv4_sip_mtu_size_cellular": 1200,
                    "ipv6_sip_mtu_size_cellular": 1200,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "emergency_over_ims_roaming_supported_3gpp_network_types": [
                      6,
                      3
                    ],
                    "emergency_over_ims_supported_3gpp_network_types": [
                      6,
                      3
                    ],
                    "emergency_over_ims_supported_rats": [
                      6,
                      3,
                      5
                    ],
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": true,
                "satellite": false
              },
              "uecaps": []
            },
            "jt_gb.toml": {
              "carrier_name": "JT",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23450",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "JT"
                  }
                }
              ],
              "apns": [],
              "configs": {},
              "full_settings": {
                "version": 77000000001
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "spitfire_gb.toml": {
              "carrier_name": "SPITFIRE",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23405",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "Spitfire"
                  }
                }
              ],
              "apns": [
                {
                  "name": "spitfire1",
                  "value": "spitfire1",
                  "type": [
                    "default",
                    "ia"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "ims",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "bearer_bitmask": "14|20",
                  "proxy": "10.202.0.1",
                  "user_visible": false
                }
              ],
              "configs": {
                "imsvoice": {
                  "amrnb_payload_description_bundle": {
                    "103": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ],
                        "amr_codec_attribute_payload_format": 1
                      }
                    },
                    "98": {
                      "imsvoice": {
                        "amr_codec_attribute_modeset": [
                          0,
                          2,
                          4,
                          7
                        ]
                      }
                    }
                  },
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "prack_supported_for_18x": true
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "spitfire1",
                      "value": "spitfire1",
                      "type": [
                        "default",
                        "ia"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "ims",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "bearer_bitmask": "14|20",
                      "proxy": "10.202.0.1",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "imsvoice": {
                    "amrnb_payload_description_bundle": {
                      "103": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ],
                          "amr_codec_attribute_payload_format": 1
                        }
                      },
                      "98": {
                        "imsvoice": {
                          "amr_codec_attribute_modeset": [
                            0,
                            2,
                            4,
                            7
                          ]
                        }
                      }
                    },
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "prack_supported_for_18x": true
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "esimgo_gb.toml": {
              "carrier_name": "ESIMGO",
              "version": 77000000008,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0033"
                  }
                },
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "eSIM Go"
                  }
                }
              ],
              "apns": [
                {
                  "name": "eSIM Go Data",
                  "value": "uk.data.esim",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1340,
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_certificate_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "carrier_default_wfc_ims_mode": 1,
                "carrier_default_wfc_ims_roaming_mode": 1,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "338|busy everywhere|1017",
                    "510|Call completed elsewhere|1014"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "xcap_over_ut_supported_rats": []
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 90000,
                  "ringing_timer_millis": 90000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "qns": {
                  "block_iwlan_in_international_roaming_without_wwan": true,
                  "idle_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "idle_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "ims_wlan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "ims_wwan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "support_wfc_recovery": false,
                  "video_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "video_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "video_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "voice_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "voice_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "voice_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    2
                  ],
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "235-015"
                    ]
                  },
                  "natt_keep_alive_timer_sec": 30
                }
              },
              "full_settings": {
                "version": 77000000008,
                "apns": {
                  "apn": [
                    {
                      "name": "eSIM Go Data",
                      "value": "uk.data.esim",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1340,
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_certificate_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_default_wfc_ims_roaming_mode": 1,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "338|busy everywhere|1017",
                      "510|Call completed elsewhere|1014"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "xcap_over_ut_supported_rats": []
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 90000,
                    "ringing_timer_millis": 90000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "qns": {
                    "block_iwlan_in_international_roaming_without_wwan": true,
                    "idle_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "idle_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "ims_wlan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "ims_wwan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "support_wfc_recovery": false,
                    "video_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "video_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "video_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "voice_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "voice_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "voice_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      2
                    ],
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "235-015"
                      ]
                    },
                    "natt_keep_alive_timer_sec": 30
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "h3_gb.toml": {
              "carrier_name": "H3",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420"
                },
                {
                  "mcc_mnc": "23494"
                },
                {
                  "mcc_mnc": "23594"
                }
              ],
              "apns": [
                {
                  "name": "3hotspot",
                  "value": "3hotspot",
                  "type": [
                    "dun"
                  ],
                  "protocol": "ipv4v6",
                  "authtype": 0,
                  "user_visible": false
                },
                {
                  "name": "3",
                  "value": "three.co.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1440,
                  "user_editable": false
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_cross_sim_ims_available": false,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "3hotspot",
                      "value": "3hotspot",
                      "type": [
                        "dun"
                      ],
                      "protocol": "ipv4v6",
                      "authtype": 0,
                      "user_visible": false
                    },
                    {
                      "name": "3",
                      "value": "three.co.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1440,
                      "user_editable": false
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_cross_sim_ims_available": false,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "talkmobile_gb.toml": {
              "carrier_name": "TALKMOBILE",
              "version": 77000000008,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "C1"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Talkmobile Data",
                  "value": "talkmobile.co.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.talkmobile.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "XCAP",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "editable_enhanced_4g_lte": false,
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_iptype_roaming": 0,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    5,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "qns": {
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "sos_transport_type": 2
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                }
              },
              "full_settings": {
                "version": 77000000008,
                "apns": {
                  "apn": [
                    {
                      "name": "Talkmobile Data",
                      "value": "talkmobile.co.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.talkmobile.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "XCAP",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "editable_enhanced_4g_lte": false,
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_iptype_roaming": 0,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      5,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "qns": {
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "sos_transport_type": 2
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "idmobile_gb.toml": {
              "carrier_name": "IDMOBILE",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0305"
                  }
                }
              ],
              "apns": [
                {
                  "name": "iD",
                  "value": "id",
                  "type": [
                    "default",
                    "mms",
                    "supl",
                    "xcap"
                  ],
                  "mmsc": "http://mms.um.idmobile.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.idmobile.co.uk",
                  "mmsc_proxy_port": "8799"
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "iD",
                      "value": "id",
                      "type": [
                        "default",
                        "mms",
                        "supl",
                        "xcap"
                      ],
                      "mmsc": "http://mms.um.idmobile.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.idmobile.co.uk",
                      "mmsc_proxy_port": "8799"
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "esn_gb.toml": {
              "carrier_name": "ESN",
              "version": 77000000003,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23471"
                }
              ],
              "apns": [
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims",
                    "xcap"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_default_data_roaming_enabled": true,
                "carrier_name": "",
                "carrier_name_override": false,
                "carrier_nr_availabilities": [],
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": false,
                "display_voicemail_number_as_default_call_forwarding_number": {
                  "kind": "bool",
                  "value": true
                },
                "editable_enhanced_4g_lte": false,
                "editable_wfc_mode": false,
                "hide_enhanced_4g_lte": true,
                "hide_ims_apn": true,
                "hide_preferred_network_type": true,
                "imssms": {
                  "sms_over_ims_supported_rats": [
                    3,
                    6
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 1,
                  "ut_iptype_roaming": 1,
                  "ut_requires_ims_registration": true,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ],
                        "evs_codec_attribute_ch_aw_recv": 2
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 130000,
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 2000
                },
                "iwlan_handover_policy_string_array": {
                  "kind": "text_array",
                  "value": [
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                    "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                    "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                    "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                    "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                    "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                  ]
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "preferred_ike_protocol": 40,
                "qns": {
                  "mms_rat_preference": 2,
                  "sos_transport_type": 2,
                  "xcap_rat_preference": 2,
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "use_wfc_home_network_mode_in_roaming_network": true,
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipsec_authentication_algorithms": [
                    1
                  ],
                  "ipsec_encryption_algorithms": [
                    2
                  ],
                  "ipv4_sip_mtu_size_cellular": 1200,
                  "ipv6_sip_mtu_size_cellular": 1200,
                  "sip_timer_f_millis": 32000,
                  "sip_timer_j_millis": 32000
                },
                "imsemergency": {
                  "emergency_domain_preference": [
                    2,
                    1
                  ],
                  "emergency_domain_preference_roaming": [
                    2,
                    1
                  ],
                  "emergency_over_ims_supported_3gpp_network_types": [
                    6,
                    3
                  ],
                  "emergency_over_ims_supported_rats": [
                    3
                  ],
                  "prefer_ims_emergency_when_voice_calls_on_cs": true
                },
                "iwlan": {
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 1300
                  },
                  "ike_rekey_soft_timer_sec": 1200,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                }
              },
              "full_settings": {
                "version": 77000000003,
                "apns": {
                  "apn": [
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims",
                        "xcap"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_default_data_roaming_enabled": true,
                  "carrier_name": "",
                  "carrier_name_override": false,
                  "carrier_nr_availabilities": [],
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": false,
                  "display_voicemail_number_as_default_call_forwarding_number": {
                    "kind": "bool",
                    "value": true
                  },
                  "editable_enhanced_4g_lte": false,
                  "editable_wfc_mode": false,
                  "hide_enhanced_4g_lte": true,
                  "hide_ims_apn": true,
                  "hide_preferred_network_type": true,
                  "imssms": {
                    "sms_over_ims_supported_rats": [
                      3,
                      6
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 1,
                    "ut_iptype_roaming": 1,
                    "ut_requires_ims_registration": true,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ],
                          "evs_codec_attribute_ch_aw_recv": 2
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 130000,
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 2000
                  },
                  "iwlan_handover_policy_string_array": {
                    "kind": "text_array",
                    "value": [
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN|UNKNOWN, target=GERAN|UTRAN|EUTRAN|NGRAN|IWLAN, type=disallowed, capabilities=MMS|XCAP|CBS",
                      "source=GERAN|UTRAN|EUTRAN|NGRAN|UNKNOWN, target=IWLAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=EIMS",
                      "source=IWLAN, target=EUTRAN|NGRAN, type=allowed, capabilities=EIMS",
                      "source=IWLAN|UNKNOWN, target=GERAN|UTRAN, type=disallowed, capabilities=IMS",
                      "source=GERAN|UTRAN, target=IWLAN, type=disallowed, capabilities=IMS",
                      "source=EUTRAN|NGRAN|IWLAN, target=EUTRAN|NGRAN|IWLAN, type=allowed, capabilities=IMS"
                    ]
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "preferred_ike_protocol": 40,
                  "qns": {
                    "mms_rat_preference": 2,
                    "sos_transport_type": 2,
                    "xcap_rat_preference": 2,
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "use_wfc_home_network_mode_in_roaming_network": true,
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipsec_authentication_algorithms": [
                      1
                    ],
                    "ipsec_encryption_algorithms": [
                      2
                    ],
                    "ipv4_sip_mtu_size_cellular": 1200,
                    "ipv6_sip_mtu_size_cellular": 1200,
                    "sip_timer_f_millis": 32000,
                    "sip_timer_j_millis": 32000
                  },
                  "imsemergency": {
                    "emergency_domain_preference": [
                      2,
                      1
                    ],
                    "emergency_domain_preference_roaming": [
                      2,
                      1
                    ],
                    "emergency_over_ims_supported_3gpp_network_types": [
                      6,
                      3
                    ],
                    "emergency_over_ims_supported_rats": [
                      3
                    ],
                    "prefer_ims_emergency_when_voice_calls_on_cs": true
                  },
                  "iwlan": {
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 1300
                    },
                    "ike_rekey_soft_timer_sec": 1200,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"24\"],\"RetryArray\": [\"10\", \"30\", \"60\", \"120\", \"300\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]"
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "vodafone_gb.toml": {
              "carrier_name": "VODAFONE",
              "version": 77000000013,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23415"
                },
                {
                  "mcc_mnc": "23491"
                }
              ],
              "apns": [
                {
                  "name": "Vodafone UK Data",
                  "value": "wap.vodafone.co.uk",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "authtype": 1,
                  "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                  "mmsc_proxy": "212.183.137.12",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1340,
                  "password": "wap",
                  "user": "wap",
                  "user_editable": false
                },
                {
                  "name": "IMS",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "user_visible": false
                },
                {
                  "name": "XCAP",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "user_visible": false
                }
              ],
              "configs": {
                "call_barring_visibility": true,
                "carrier_certificate_string_array": {
                  "kind": "text_array",
                  "value": [
                    "2E26357C65C1F858CE0C798AA7EFB38922E8D334F12DAD4A3963007DFBBC5677:com.myvodafoneapp"
                  ]
                },
                "carrier_default_wfc_ims_mode": 1,
                "carrier_default_wfc_ims_roaming_mode": 1,
                "carrier_nr_availabilities": [
                  1,
                  2
                ],
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "default_vm_number": "121",
                "epsfb_silent_retry_error_code_string_array": {
                  "kind": "text_array",
                  "value": [
                    "500",
                    "503"
                  ]
                },
                "feature_access_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "153",
                    "132",
                    "45"
                  ]
                },
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "338|busy everywhere|1017",
                    "510|Call completed elsewhere|1014"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "xcap_over_ut_supported_rats": [
                    6,
                    3,
                    5,
                    1,
                    2
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "conference_subscribe_type": 0,
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "minimum_session_expires_timer_sec": 600,
                  "ringback_timer_millis": 180000,
                  "ringing_timer_millis": 180000,
                  "session_refresh_method": 0,
                  "session_refresher_type": 0
                },
                "min_udp_port_4500_nat_timeout_sec": 120,
                "qns": {
                  "block_iwlan_in_international_roaming_without_wwan": true,
                  "idle_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "idle_geran_rssi": [
                    18446744073709551562,
                    18446744073709551556
                  ],
                  "idle_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "ims_wlan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "ims_wwan_hysteresis_timer_ms": [
                    5000,
                    5000,
                    5000
                  ],
                  "support_wfc_recovery": false,
                  "video_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "video_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "video_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ],
                  "voice_eutran_rsrp": [
                    18446744073709551506,
                    18446744073709551500
                  ],
                  "voice_geran_rssi": [
                    18446744073709551517,
                    18446744073709551514
                  ],
                  "voice_utran_rscp": [
                    18446744073709551511,
                    18446744073709551506
                  ]
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                },
                "show_4g_for_lte_data_icon": true,
                "smsToMmsTextThreshold": {
                  "kind": "int",
                  "value": 10
                },
                "voicemail_notification_persistent": true,
                "volte_vowifi_silent_retry_error_code_string_array": {
                  "kind": "text_array",
                  "value": [
                    "500",
                    "503"
                  ]
                },
                "vonr_enabled": true,
                "vonr_setting_visibility": false,
                "wfc_spn_format_idx": 12,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1280,
                  "ipv6_sip_mtu_size_cellular": 1280,
                  "registration_event_package_supported": false
                },
                "iwlan": {
                  "diffie_hellman_groups": [
                    2
                  ],
                  "ike_remote_id_type": 11,
                  "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "235-015"
                    ]
                  },
                  "natt_keep_alive_timer_sec": 30
                }
              },
              "full_settings": {
                "version": 77000000013,
                "apns": {
                  "apn": [
                    {
                      "name": "Vodafone UK Data",
                      "value": "wap.vodafone.co.uk",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "authtype": 1,
                      "mmsc": "http://mms.vodafone.co.uk/servlets/mms",
                      "mmsc_proxy": "212.183.137.12",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1340,
                      "password": "wap",
                      "user": "wap",
                      "user_editable": false
                    },
                    {
                      "name": "IMS",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "user_visible": false
                    },
                    {
                      "name": "XCAP",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "call_barring_visibility": true,
                  "carrier_certificate_string_array": {
                    "kind": "text_array",
                    "value": [
                      "2E26357C65C1F858CE0C798AA7EFB38922E8D334F12DAD4A3963007DFBBC5677:com.myvodafoneapp"
                    ]
                  },
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_default_wfc_ims_roaming_mode": 1,
                  "carrier_nr_availabilities": [
                    1,
                    2
                  ],
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "default_vm_number": "121",
                  "epsfb_silent_retry_error_code_string_array": {
                    "kind": "text_array",
                    "value": [
                      "500",
                      "503"
                    ]
                  },
                  "feature_access_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "153",
                      "132",
                      "45"
                    ]
                  },
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "338|busy everywhere|1017",
                      "510|Call completed elsewhere|1014"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "xcap_over_ut_supported_rats": [
                      6,
                      3,
                      5,
                      1,
                      2
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "conference_subscribe_type": 0,
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "minimum_session_expires_timer_sec": 600,
                    "ringback_timer_millis": 180000,
                    "ringing_timer_millis": 180000,
                    "session_refresh_method": 0,
                    "session_refresher_type": 0
                  },
                  "min_udp_port_4500_nat_timeout_sec": 120,
                  "qns": {
                    "block_iwlan_in_international_roaming_without_wwan": true,
                    "idle_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "idle_geran_rssi": [
                      18446744073709551562,
                      18446744073709551556
                    ],
                    "idle_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "ims_wlan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "ims_wwan_hysteresis_timer_ms": [
                      5000,
                      5000,
                      5000
                    ],
                    "support_wfc_recovery": false,
                    "video_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "video_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "video_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ],
                    "voice_eutran_rsrp": [
                      18446744073709551506,
                      18446744073709551500
                    ],
                    "voice_geran_rssi": [
                      18446744073709551517,
                      18446744073709551514
                    ],
                    "voice_utran_rscp": [
                      18446744073709551511,
                      18446744073709551506
                    ]
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  },
                  "show_4g_for_lte_data_icon": true,
                  "smsToMmsTextThreshold": {
                    "kind": "int",
                    "value": 10
                  },
                  "voicemail_notification_persistent": true,
                  "volte_vowifi_silent_retry_error_code_string_array": {
                    "kind": "text_array",
                    "value": [
                      "500",
                      "503"
                    ]
                  },
                  "vonr_enabled": true,
                  "vonr_setting_visibility": false,
                  "wfc_spn_format_idx": 12,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1280,
                    "ipv6_sip_mtu_size_cellular": 1280,
                    "registration_event_package_supported": false
                  },
                  "iwlan": {
                    "diffie_hellman_groups": [
                      2
                    ],
                    "ike_remote_id_type": 11,
                    "key_error_policy_config": "[{\"ApnName\": \"*\",\"ErrorTypes\": [{\"ErrorType\": \"IKE_PROTOCOL_ERROR_TYPE\",\"ErrorDetails\": [\"9002\"],\"RetryArray\": [\"1800\", \"-1\"],\"UnthrottlingEvents\": [\"APM_ENABLE_EVENT\", \"WIFI_DISABLE_EVENT\", \"WIFI_AP_CHANGED_EVENT\", \"WIFI_CALLING_DISABLE_EVENT\"]}]}]",
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "235-015"
                      ]
                    },
                    "natt_keep_alive_timer_sec": 30
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": true,
                "satellite": false
              },
              "uecaps": []
            },
            "gamma_gb.toml": {
              "carrier_name": "GAMMA",
              "version": 77000000004,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "030B"
                  }
                },
                {
                  "mcc_mnc": "23439"
                }
              ],
              "apns": [
                {
                  "name": "GAMMA",
                  "value": "gamma",
                  "type": [
                    "default",
                    "supl",
                    "dun"
                  ],
                  "authtype": 0,
                  "user_editable": false
                },
                {
                  "name": "Gamma MMS",
                  "value": "three.co.uk",
                  "type": [
                    "mms"
                  ],
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799",
                  "mtu": 1440,
                  "user_editable": false
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                },
                {
                  "name": "Gamma XCAP",
                  "value": "three.co.uk",
                  "type": [
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000004,
                "apns": {
                  "apn": [
                    {
                      "name": "GAMMA",
                      "value": "gamma",
                      "type": [
                        "default",
                        "supl",
                        "dun"
                      ],
                      "authtype": 0,
                      "user_editable": false
                    },
                    {
                      "name": "Gamma MMS",
                      "value": "three.co.uk",
                      "type": [
                        "mms"
                      ],
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799",
                      "mtu": 1440,
                      "user_editable": false
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    },
                    {
                      "name": "Gamma XCAP",
                      "value": "three.co.uk",
                      "type": [
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "smarty_gb.toml": {
              "carrier_name": "SMARTY",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0309"
                  }
                }
              ],
              "apns": [
                {
                  "name": "SMARTY",
                  "value": "mob.asm.net",
                  "type": [
                    "default",
                    "mms",
                    "supl",
                    "xcap"
                  ],
                  "protocol": "ipv4v6",
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799"
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": false,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "SMARTY",
                      "value": "mob.asm.net",
                      "type": [
                        "default",
                        "mms",
                        "supl",
                        "xcap"
                      ],
                      "protocol": "ipv4v6",
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799"
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": false,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "superdrug_gb.toml": {
              "carrier_name": "SUPERDRUG",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23420",
                  "mvno_data": {
                    "kind": "gid1",
                    "value": "0310"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Superdrug",
                  "value": "mobile.connect",
                  "type": [
                    "default",
                    "mms",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                  "mmsc_proxy": "mms.three.co.uk",
                  "mmsc_proxy_port": "8799"
                },
                {
                  "name": "ims",
                  "value": "IMS",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|18|20",
                  "mtu": 1500,
                  "user_visible": false
                },
                {
                  "name": "xcap",
                  "value": "xcap",
                  "type": [
                    "xcap"
                  ],
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "auto_retry_failed_wifi_emergency_call": {
                  "kind": "bool",
                  "value": true
                },
                "call_barring_visibility": true,
                "carrier_default_wfc_ims_enabled": true,
                "carrier_default_wfc_ims_mode": 1,
                "carrier_supports_ss_over_ut": true,
                "carrier_ussd_method": 2,
                "carrier_volte_available": true,
                "carrier_wfc_ims_available": true,
                "editable_wfc_mode": false,
                "hide_enable_2g": true,
                "hide_enhanced_4g_lte": true,
                "ims_reasoninfo_mapping_string_array": {
                  "kind": "text_array",
                  "value": [
                    "510|Call completed elsewhere|1014",
                    "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                  ]
                },
                "imsss": {
                  "network_initiated_ussd_over_ims_supported": false,
                  "ut_iptype_home": 0,
                  "ut_requires_ims_registration": true,
                  "ut_server_based_services": [
                    12,
                    18,
                    14,
                    19,
                    21,
                    15,
                    16,
                    17,
                    13,
                    1,
                    3,
                    4,
                    7,
                    6,
                    5,
                    2,
                    8,
                    9,
                    11
                  ],
                  "xcap_over_ut_supported_rats": [
                    6,
                    3
                  ]
                },
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        102
                      ],
                      "amrwb_payload_type": [
                        104
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ],
                      "evs_payload_type": [
                        127
                      ]
                    }
                  },
                  "audio_rtp_inactivity_timer_millis": 10000,
                  "conference_factory_uri": "Conf-Factory@three.co.uk",
                  "evs_payload_description_bundle": {
                    "127": {
                      "imsvoice": {
                        "evs_codec_attribute_bitrate": [
                          0,
                          6
                        ]
                      }
                    }
                  },
                  "ringing_timer_millis": 60000,
                  "session_expires_timer_sec": 250,
                  "voice_on_default_bearer_supported": true
                },
                "lte_rsrp_thresholds": [
                  18446744073709551490,
                  18446744073709551504,
                  18446744073709551510,
                  18446744073709551521
                ],
                "maxMessageSize": {
                  "kind": "int",
                  "value": 3145728
                },
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23426",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "prefer_2g": false,
                "prefer_3g_visibility": false,
                "qns": {
                  "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                  "rtp_metrics": [
                    120,
                    40,
                    3000,
                    2000
                  ],
                  "xcap_transport_type": 0
                },
                "show_4g_for_lte_data_icon": true,
                "volte_replacement_rat": 3,
                "wcdma_default_signal_strength_measurement": "rscp",
                "wfc_operator_error_codes_string_array": {
                  "kind": "text_array",
                  "value": [
                    "REG09|0"
                  ]
                },
                "wfc_spn_format_idx": 1,
                "ims": {
                  "ipv4_sip_mtu_size_cellular": 1300,
                  "ipv6_sip_mtu_size_cellular": 1300,
                  "phone_context_domain_name": "three.co.uk",
                  "registration_expiry_timer_sec": 3600,
                  "request_uri_type": 1,
                  "sip_timer_f_millis": 32000
                },
                "iwlan": {
                  "child_sa_rekey_hard_timer_sec": 86500,
                  "child_sa_rekey_soft_timer_sec": 86400,
                  "diffie_hellman_groups": [
                    14,
                    5
                  ],
                  "ike_rekey_hard_timer_in_sec": {
                    "kind": "int",
                    "value": 86500
                  },
                  "ike_rekey_soft_timer_sec": 86400,
                  "mcc_mncs_string_array": {
                    "kind": "text_array",
                    "value": [
                      "234-020"
                    ]
                  }
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "Superdrug",
                      "value": "mobile.connect",
                      "type": [
                        "default",
                        "mms",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "mmsc": "http://mms.um.three.co.uk:10021/mmsc",
                      "mmsc_proxy": "mms.three.co.uk",
                      "mmsc_proxy_port": "8799"
                    },
                    {
                      "name": "ims",
                      "value": "IMS",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|18|20",
                      "mtu": 1500,
                      "user_visible": false
                    },
                    {
                      "name": "xcap",
                      "value": "xcap",
                      "type": [
                        "xcap"
                      ],
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "auto_retry_failed_wifi_emergency_call": {
                    "kind": "bool",
                    "value": true
                  },
                  "call_barring_visibility": true,
                  "carrier_default_wfc_ims_enabled": true,
                  "carrier_default_wfc_ims_mode": 1,
                  "carrier_supports_ss_over_ut": true,
                  "carrier_ussd_method": 2,
                  "carrier_volte_available": true,
                  "carrier_wfc_ims_available": true,
                  "editable_wfc_mode": false,
                  "hide_enable_2g": true,
                  "hide_enhanced_4g_lte": true,
                  "ims_reasoninfo_mapping_string_array": {
                    "kind": "text_array",
                    "value": [
                      "510|Call completed elsewhere|1014",
                      "*|Call is dropped due to Wi-Fi signal is degraded|1407"
                    ]
                  },
                  "imsss": {
                    "network_initiated_ussd_over_ims_supported": false,
                    "ut_iptype_home": 0,
                    "ut_requires_ims_registration": true,
                    "ut_server_based_services": [
                      12,
                      18,
                      14,
                      19,
                      21,
                      15,
                      16,
                      17,
                      13,
                      1,
                      3,
                      4,
                      7,
                      6,
                      5,
                      2,
                      8,
                      9,
                      11
                    ],
                    "xcap_over_ut_supported_rats": [
                      6,
                      3
                    ]
                  },
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          102
                        ],
                        "amrwb_payload_type": [
                          104
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ],
                        "evs_payload_type": [
                          127
                        ]
                      }
                    },
                    "audio_rtp_inactivity_timer_millis": 10000,
                    "conference_factory_uri": "Conf-Factory@three.co.uk",
                    "evs_payload_description_bundle": {
                      "127": {
                        "imsvoice": {
                          "evs_codec_attribute_bitrate": [
                            0,
                            6
                          ]
                        }
                      }
                    },
                    "ringing_timer_millis": 60000,
                    "session_expires_timer_sec": 250,
                    "voice_on_default_bearer_supported": true
                  },
                  "lte_rsrp_thresholds": [
                    18446744073709551490,
                    18446744073709551504,
                    18446744073709551510,
                    18446744073709551521
                  ],
                  "maxMessageSize": {
                    "kind": "int",
                    "value": 3145728
                  },
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23426",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "prefer_2g": false,
                  "prefer_3g_visibility": false,
                  "qns": {
                    "in_call_ho_decision_wlan_to_wwan_without_vops_condition": true,
                    "rtp_metrics": [
                      120,
                      40,
                      3000,
                      2000
                    ],
                    "xcap_transport_type": 0
                  },
                  "show_4g_for_lte_data_icon": true,
                  "volte_replacement_rat": 3,
                  "wcdma_default_signal_strength_measurement": "rscp",
                  "wfc_operator_error_codes_string_array": {
                    "kind": "text_array",
                    "value": [
                      "REG09|0"
                    ]
                  },
                  "wfc_spn_format_idx": 1,
                  "ims": {
                    "ipv4_sip_mtu_size_cellular": 1300,
                    "ipv6_sip_mtu_size_cellular": 1300,
                    "phone_context_domain_name": "three.co.uk",
                    "registration_expiry_timer_sec": 3600,
                    "request_uri_type": 1,
                    "sip_timer_f_millis": 32000
                  },
                  "iwlan": {
                    "child_sa_rekey_hard_timer_sec": 86500,
                    "child_sa_rekey_soft_timer_sec": 86400,
                    "diffie_hellman_groups": [
                      14,
                      5
                    ],
                    "ike_rekey_hard_timer_in_sec": {
                      "kind": "int",
                      "value": 86500
                    },
                    "ike_rekey_soft_timer_sec": 86400,
                    "mcc_mncs_string_array": {
                      "kind": "text_array",
                      "value": [
                        "234-020"
                      ]
                    }
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": true,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "lycamobile_gb.toml": {
              "carrier_name": "LYCAMOBILE",
              "version": 77000000001,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23430",
                  "mvno_data": {
                    "kind": "spn",
                    "value": "LycaMobile"
                  }
                }
              ],
              "apns": [
                {
                  "name": "Lycamobile",
                  "value": "data.lycamobile.co.uk",
                  "type": [
                    "default",
                    "supl"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "carrier_volte_available": true,
                "non_roaming_operator_string_array": {
                  "kind": "text_array",
                  "value": [
                    "23410",
                    "23420",
                    "23430",
                    "23431",
                    "23432",
                    "23433",
                    "23434",
                    "23486"
                  ]
                },
                "show_4g_for_lte_data_icon": true
              },
              "full_settings": {
                "version": 77000000001,
                "apns": {
                  "apn": [
                    {
                      "name": "Lycamobile",
                      "value": "data.lycamobile.co.uk",
                      "type": [
                        "default",
                        "supl"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "carrier_volte_available": true,
                  "non_roaming_operator_string_array": {
                    "kind": "text_array",
                    "value": [
                      "23410",
                      "23420",
                      "23430",
                      "23431",
                      "23432",
                      "23433",
                      "23434",
                      "23486"
                    ]
                  },
                  "show_4g_for_lte_data_icon": true
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            },
            "tcl_gb.toml": {
              "carrier_name": "TCL",
              "version": 77000000002,
              "carrier_id_rules": [
                {
                  "mcc_mnc": "23427"
                }
              ],
              "apns": [
                {
                  "name": "TCL MOVE",
                  "value": "move.dataxs.mobi",
                  "type": [
                    "default",
                    "dun"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6"
                },
                {
                  "name": "IMS",
                  "value": "ims",
                  "type": [
                    "ims"
                  ],
                  "protocol": "ipv4v6",
                  "roaming_protocol": "ipv4v6",
                  "bearer_bitmask": "14|20",
                  "user_visible": false
                }
              ],
              "configs": {
                "imsvoice": {
                  "audio_codec_capability_payload_types_bundle": {
                    "imsvoice": {
                      "amrnb_payload_type": [
                        98,
                        103
                      ],
                      "amrwb_payload_type": [
                        100,
                        105
                      ],
                      "dtmfnb_payload_type": [
                        97
                      ],
                      "dtmfwb_payload_type": [
                        96
                      ]
                    }
                  },
                  "prack_supported_for_18x": true
                },
                "read_only_apn_types_string_array": {
                  "kind": "text_array",
                  "value": []
                }
              },
              "full_settings": {
                "version": 77000000002,
                "apns": {
                  "apn": [
                    {
                      "name": "TCL MOVE",
                      "value": "move.dataxs.mobi",
                      "type": [
                        "default",
                        "dun"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6"
                    },
                    {
                      "name": "IMS",
                      "value": "ims",
                      "type": [
                        "ims"
                      ],
                      "protocol": "ipv4v6",
                      "roaming_protocol": "ipv4v6",
                      "bearer_bitmask": "14|20",
                      "user_visible": false
                    }
                  ]
                },
                "config": {
                  "imsvoice": {
                    "audio_codec_capability_payload_types_bundle": {
                      "imsvoice": {
                        "amrnb_payload_type": [
                          98,
                          103
                        ],
                        "amrwb_payload_type": [
                          100,
                          105
                        ],
                        "dtmfnb_payload_type": [
                          97
                        ],
                        "dtmfwb_payload_type": [
                          96
                        ]
                      }
                    },
                    "prack_supported_for_18x": true
                  },
                  "read_only_apn_types_string_array": {
                    "kind": "text_array",
                    "value": []
                  }
                }
              },
              "features": {
                "volte": true,
                "vowifi": false,
                "vonr": false,
                "satellite": false
              },
              "uecaps": []
            }
          }
        }
      }
    }
  }
};
