---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-cobalt-strike-beacons
name: hunting-for-cobalt-strike-beacons
tagline: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
summary: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
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
  subpath: skills/hunting-for-cobalt-strike-beacons
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
  path: skills/hunting-for-cobalt-strike-beacons/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-cobalt-strike-beacons
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/hunting-for-cobalt-strike-beacons
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

# Hunting for Cobalt Strike Beacons
## Overview

Cobalt Strike is the most prevalent command-and-control framework used by both red teams and threat actors. Beacon, its primary payload, communicates with team servers using configurable HTTP/HTTPS/DNS profiles that can mimic legitimate traffic. However, default configurations and behavioral patterns remain detectable through TLS certificate analysis (default serial 8BB00EE), JA3/JA3S fingerprinting, beacon interval jitter analysis, and HTTP malleable profile pattern matching. This skill covers building detection capabilities using Zeek network logs, Suricata IDS rules, and Python-based PCAP analysis to identify beacon callbacks in network traffic.


## When to Use

- When investigating security incidents that require hunting for cobalt strike beacons
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Zeek 6.0+ with JA3 and HASSH packages installed
- Suricata 7.0+ with Emerging Threats ruleset
- Python 3.9+ with scapy and dpkt libraries
- Network traffic captures (PCAP) or live Zeek logs
- RITA (Real Intelligence Threat Analytics) for beacon scoring
- Threat intelligence feeds with known Cobalt Strike IOCs

## Steps

### Step 1: TLS Certificate Analysis
Detect default Cobalt Strike certificates using JA3S fingerprints, certificate serial numbers, and JARM fingerprints in Zeek ssl.log.

### Step 2: Beacon Interval Analysis
Analyze connection timing patterns to identify regular callback intervals with configurable jitter, characteristic of beacon behavior.

### Step 3: HTTP Profile Detection
Match HTTP request patterns (URI paths, headers, user-agents) against known malleable C2 profiles.

### Step 4: Correlate and Score
Combine multiple indicators (TLS + timing + HTTP profile) into a composite beacon confidence score.

## Expected Output

JSON report containing detected beacon candidates with confidence scores, TLS fingerprints, timing analysis, HTTP profile matches, and recommended response actions.
