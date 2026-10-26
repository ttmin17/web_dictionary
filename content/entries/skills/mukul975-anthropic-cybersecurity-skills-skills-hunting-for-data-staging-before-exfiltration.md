---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-data-staging-before-exfiltration
name: hunting-for-data-staging-before-exfiltration
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
  subpath: skills/hunting-for-data-staging-before-exfiltration
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
  path: skills/hunting-for-data-staging-before-exfiltration/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-data-staging-before-exfiltration
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/hunting-for-data-staging-before-exfiltration
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

# Hunting for Data Staging Before Exfiltration
## Overview

Before exfiltrating data, adversaries typically stage collected files in a central location (MITRE ATT&CK T1074). This involves creating archives with tools like 7-Zip, RAR, or tar, consolidating files from multiple directories, and using temporary or hidden staging directories. This skill detects staging behavior by analyzing process creation logs for archiver activity, monitoring file system events in common staging paths, and identifying anomalous file consolidation patterns.


## When to Use

- When investigating security incidents that require hunting for data staging before exfiltration
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- EDR or Sysmon telemetry with process creation and file system events
- Windows Event Logs (Event ID 4688) or Sysmon Event ID 1, 11
- Python 3.8+ with standard library
- Access to process creation logs in JSON/CSV format

## Steps

1. **Detect Archive Tool Execution** — Monitor for 7z.exe, rar.exe, tar, zip, and WinRAR process creation with compression arguments
2. **Identify Staging Directories** — Flag file writes to common staging locations (Recycle Bin, %TEMP%, ProgramData, hidden directories)
3. **Detect Large File Consolidation** — Identify patterns of multiple file reads followed by writes to a single directory
4. **Monitor Sensitive Path Access** — Track bulk reads from document directories, database paths, and network shares
5. **Analyze Archive Metadata** — Extract and analyze archive file sizes, creation times, and source paths
6. **Score Staging Risk** — Apply heuristic scoring based on archive size, source diversity, staging path suspicion, and timing
7. **Generate Hunt Report** — Produce a structured report with staging event timeline and MITRE ATT&CK mapping

## Expected Output

- JSON report of detected staging events with risk scores
- Archive creation timeline with source file analysis
- MITRE ATT&CK mapping (T1074.001, T1074.002, T1560)
- Staging directory heat map showing suspicious write activity
