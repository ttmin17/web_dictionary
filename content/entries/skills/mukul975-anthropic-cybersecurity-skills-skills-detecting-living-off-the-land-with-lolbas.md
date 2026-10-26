---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-living-off-the-land-with-lolbas
name: detecting-living-off-the-land-with-lolbas
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
  subpath: skills/detecting-living-off-the-land-with-lolbas
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
  path: skills/detecting-living-off-the-land-with-lolbas/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-living-off-the-land-with-lolbas
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/detecting-living-off-the-land-with-lolbas
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

# Detecting Living Off the Land with LOLBAS
## Overview

Living Off the Land Binaries, Scripts, and Libraries (LOLBAS) are legitimate system utilities abused by attackers to execute malicious actions while evading detection. This skill covers detecting abuse of certutil.exe, regsvr32.exe, mshta.exe, rundll32.exe, msbuild.exe, and other LOLBins using process telemetry from Sysmon and Windows Event Logs, combined with Sigma rule-based detection.


## When to Use

- When investigating security incidents that require detecting living off the land with lolbas
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Sysmon or Windows Security Event Log (Event ID 4688) with command-line logging enabled
- Sigma rule conversion tool (sigmac or sigma-cli)
- SIEM platform (Splunk, Elastic, or similar) for log ingestion
- Python 3.8+ with pySigma library
- LOLBAS project reference database

## Steps

1. **Establish LOLBin Watchlist** — Build a prioritized list of monitored binaries (certutil, mshta, regsvr32, rundll32, msbuild, installutil, cmstp, wmic, bitsadmin)
2. **Collect Process Telemetry** — Ingest Sysmon Event ID 1 (Process Create) and Windows 4688 events with full command-line capture
3. **Build Sigma Detection Rules** — Create Sigma rules matching suspicious command-line arguments, network activity, and parent-child process anomalies for each LOLBin
4. **Analyze Parent-Child Relationships** — Flag unexpected parent processes spawning LOLBins (e.g., Excel spawning certutil, Word spawning mshta)
5. **Score and Prioritize Alerts** — Apply risk scoring based on argument anomaly, parent process, execution path, and network indicators
6. **Generate Detection Report** — Produce a structured report of all LOLBin abuse detections with MITRE ATT&CK mapping

## Expected Output

- JSON report listing detected LOLBin abuse events with severity scores
- MITRE ATT&CK technique mapping for each detection (T1218, T1105, T1140, T1127)
- Parent-child process anomaly analysis
- Sigma rule match details with raw event data
