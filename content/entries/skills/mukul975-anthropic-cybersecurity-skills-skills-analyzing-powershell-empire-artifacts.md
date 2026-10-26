---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-powershell-empire-artifacts
name: analyzing-powershell-empire-artifacts
tagline: Detect PowerShell Empire post-exploitation framework artifacts in
  Windows Script Block Logging (Event ID 4104) and Module Logging (Event ID
  4103), inc
summary: PowerShell Empire is a post-exploitation framework consisting of
  listeners, stagers, and agents. Its artifacts leave detectable traces in
  Windows event logs, particularly PowerShell Script Block Logging (Event ID
  4104...
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
  subpath: skills/analyzing-powershell-empire-artifacts
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
  path: skills/analyzing-powershell-empire-artifacts/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.327Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-powershell-empire-artifacts
  description: Detect PowerShell Empire post-exploitation framework artifacts in
    Windows Script Block Logging (Event ID 4104) and Module Logging (Event ID
    4103), including the default launcher string, Base64-encoded
    WebClient/FromBase64String payloads, known module invocations
    (Invoke-Mimikatz, Invoke-Kerberoast), and staging URL patterns. Use when
    hunting for or confirming Empire C2 activity in Windows event logs.
  folder_path: skills/analyzing-powershell-empire-artifacts
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

# Analyzing PowerShell Empire Artifacts
## Overview

PowerShell Empire is a post-exploitation framework consisting of listeners, stagers, and agents. Its artifacts leave detectable traces in Windows event logs, particularly PowerShell Script Block Logging (Event ID 4104) and Module Logging (Event ID 4103). This skill analyzes event logs for Empire's default launcher string (`powershell -noP -sta -w 1 -enc`), Base64 encoded payloads containing `System.Net.WebClient` and `FromBase64String`, known module invocations (Invoke-Mimikatz, Invoke-Kerberoast, Invoke-TokenManipulation), and staging URL patterns.


## When to Use

- When investigating security incidents that require analyzing powershell empire artifacts
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Python 3.9+ with access to Windows Event Log or exported EVTX files
- PowerShell Script Block Logging (Event ID 4104) enabled via Group Policy
- Module Logging (Event ID 4103) enabled for comprehensive coverage

## Key Detection Patterns

1. **Default launcher** — `powershell -noP -sta -w 1 -enc` followed by Base64 blob
2. **Stager indicators** — `System.Net.WebClient`, `DownloadData`, `DownloadString`, `FromBase64String`
3. **Module signatures** — Invoke-Mimikatz, Invoke-Kerberoast, Invoke-TokenManipulation, Invoke-PSInject, Invoke-DCOM
4. **User agent strings** — default Empire user agents in HTTP listener configuration
5. **Staging URLs** — `/login/process.php`, `/admin/get.php` and similar default URI patterns

## Output

JSON report with matched IOCs, decoded Base64 payloads, timeline of suspicious events, MITRE ATT&CK technique mappings, and severity scores.
