---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-credential-dumping-techniques
name: detecting-credential-dumping-techniques
tagline: Detect LSASS credential dumping, SAM database extraction, and NTDS.dit
  theft (e.g. via Mimikatz) using Sysmon Event ID 10 process-access logging,
  Wind
summary: Credential dumping (MITRE ATT&CK T1003) is a post-exploitation
  technique where adversaries extract authentication credentials from OS memory,
  registry hives, or domain controller databases. This skill covers detection...
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
  subpath: skills/detecting-credential-dumping-techniques
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
  path: skills/detecting-credential-dumping-techniques/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.353Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-credential-dumping-techniques
  description: Detect LSASS credential dumping, SAM database extraction, and
    NTDS.dit theft (e.g. via Mimikatz) using Sysmon Event ID 10 process-access
    logging, Windows Security logs, and SIEM correlation rules. Use when hunting
    for credential-theft activity on Windows/Active Directory hosts or triaging
    EDR alerts on LSASS access.
  folder_path: skills/detecting-credential-dumping-techniques
  extra_files:
    - LICENSE
    - SKILL.es.md
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

# Detecting Credential Dumping Techniques
## Overview

Credential dumping (MITRE ATT&CK T1003) is a post-exploitation technique where adversaries extract authentication credentials from OS memory, registry hives, or domain controller databases. This skill covers detection of LSASS memory access via Sysmon Event ID 10 (ProcessAccess), SAM registry hive export via reg.exe, NTDS.dit extraction via ntdsutil/vssadmin, and comsvcs.dll MiniDump abuse. Detection rules analyze GrantedAccess bitmasks, suspicious calling processes, and known tool signatures.


## When to Use

- When investigating security incidents that require detecting credential dumping techniques
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Sysmon v14+ deployed with ProcessAccess logging (Event ID 10) for lsass.exe
- Windows Security audit policy enabling process creation (Event ID 4688) with command line logging
- Splunk or Elastic SIEM ingesting Sysmon and Windows Security logs
- Python 3.8+ for log analysis

## Steps

1. Configure Sysmon to log ProcessAccess events targeting lsass.exe
2. Forward Sysmon Event ID 10 and Windows Event ID 4688 to SIEM
3. Create detection rules for known GrantedAccess patterns (0x1010, 0x1FFFFF)
4. Detect comsvcs.dll MiniDump and procdump.exe targeting LSASS PID
5. Alert on reg.exe SAM/SECURITY/SYSTEM hive export commands
6. Detect ntdsutil/vssadmin shadow copy creation for NTDS.dit theft
7. Correlate detections with user/host context for risk scoring

## Expected Output

JSON report containing detected credential dumping indicators with technique classification, severity ratings, process details, MITRE ATT&CK mapping, and Splunk/Elastic detection queries.
