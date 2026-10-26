---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-lateral-movement-via-wmi
name: hunting-for-lateral-movement-via-wmi
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
  subpath: skills/hunting-for-lateral-movement-via-wmi
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
  path: skills/hunting-for-lateral-movement-via-wmi/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-lateral-movement-via-wmi
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/hunting-for-lateral-movement-via-wmi
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

# Hunting for Lateral Movement via WMI
## Overview

Windows Management Instrumentation (WMI) is commonly abused for lateral movement via `wmic process call create` or Win32_Process.Create() to execute commands on remote hosts. Detection focuses on identifying WmiPrvSE.exe spawning child processes (cmd.exe, powershell.exe) in Windows Security Event ID 4688 and Sysmon Event ID 1 logs, along with WMI-Activity/Operational events (5857, 5860, 5861) for event subscription persistence.


## When to Use

- When investigating security incidents that require hunting for lateral movement via wmi
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Windows Security Event Logs with Process Creation auditing enabled (Event 4688 with command line)
- Sysmon installed with Event ID 1 (Process Creation) configured
- Python 3.9+ with `python-evtx`, `lxml` libraries
- Understanding of WMI architecture and WmiPrvSE.exe behavior

## Steps

### Step 1: Parse Process Creation Events
Extract Event ID 4688 and Sysmon Event 1 entries from EVTX files.

### Step 2: Detect WmiPrvSE Child Processes
Flag processes where ParentImage/ParentProcessName is WmiPrvSE.exe, indicating remote WMI execution.

### Step 3: Analyze Command Line Patterns
Identify suspicious command lines matching WMI lateral movement patterns (cmd.exe /q /c, output redirection to admin$ share).

### Step 4: Check WMI Event Subscriptions
Parse WMI-Activity/Operational log for event consumer creation indicating persistence.

## Expected Output

JSON report with WMI-spawned processes, suspicious command lines, WMI event subscription alerts, and timeline of lateral movement activity.
