---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-network-packets-with-scapy
name: analyzing-network-packets-with-scapy
tagline: Use Scapy to craft, send, sniff, and dissect TCP/UDP/ICMP/DNS packets,
  analyze pcap files, implement SYN scans, and detect anomalous traffic such as
  f
summary: Scapy is a Python packet manipulation library that enables crafting,
  sending, sniffing, and dissecting network packets at granular protocol layers.
  This skill covers using Scapy for security-relevant tasks including T...
categories:
  - security-auth
tags:
  - ai-agents
  - claude-code
  - cloud-security
  - cybersecurity
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: mukul975/Anthropic-Cybersecurity-Skills
  subpath: skills/analyzing-network-packets-with-scapy
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 35031
  last_commit: 2026-08-31T04:32:44Z
  stars_delta_7d: 353
  stars_growth_pct: 1
  trending_score: 356.59
  velocity_source: snapshot_delta
  sparkline_4w:
    - 33900
    - 34367
    - 34678
    - 35031
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mukul975/Anthropic-Cybersecurity-Skills
  path: skills/analyzing-network-packets-with-scapy/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.326Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-network-packets-with-scapy
  description: Use Scapy to craft, send, sniff, and dissect TCP/UDP/ICMP/DNS
    packets, analyze pcap files, implement SYN scans, and detect anomalous
    traffic such as fragmented or malformed packets. Use when performing
    authorized network reconnaissance, protocol-level forensic analysis, or
    building traffic anomaly detection during security testing.
  folder_path: skills/analyzing-network-packets-with-scapy
  extra_files:
    - LICENSE
    - references/api-reference.md
    - scripts/agent.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Analyzing Network Packets with Scapy
## Overview

Scapy is a Python packet manipulation library that enables crafting, sending, sniffing, and dissecting network packets at granular protocol layers. This skill covers using Scapy for security-relevant tasks including TCP/UDP/ICMP packet crafting, pcap file analysis, protocol field extraction, SYN scan implementation, DNS query analysis, and detecting anomalous traffic patterns such as unusually fragmented packets or malformed headers.


## When to Use

- When investigating security incidents that require analyzing network packets with scapy
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Python 3.8+ with `scapy` library installed (`pip install scapy`)
- Root/administrator privileges for raw socket operations (sniffing, sending)
- Npcap (Windows) or libpcap (Linux) for packet capture
- Authorization to perform packet operations on target network

## Steps

1. Read and parse pcap/pcapng files with `rdpcap()` for offline analysis
2. Extract protocol layers (IP, TCP, UDP, DNS, HTTP) and field values
3. Compute traffic statistics: top talkers, protocol distribution, port frequency
4. Detect SYN flood patterns by analyzing TCP flag ratios
5. Identify DNS exfiltration indicators via query length and entropy analysis
6. Craft custom probe packets for authorized network testing
7. Export findings as structured JSON report

## Expected Output

JSON report containing packet statistics, protocol distribution, top source/destination IPs, detected anomalies (SYN floods, DNS tunneling indicators, fragmentation attacks), and per-flow summaries.
