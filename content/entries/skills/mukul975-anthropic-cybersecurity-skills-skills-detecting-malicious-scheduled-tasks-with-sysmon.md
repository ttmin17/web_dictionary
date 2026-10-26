---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-malicious-scheduled-tasks-with-sysmon
name: detecting-malicious-scheduled-tasks-with-sysmon
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
  subpath: skills/detecting-malicious-scheduled-tasks-with-sysmon
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
  path: skills/detecting-malicious-scheduled-tasks-with-sysmon/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-malicious-scheduled-tasks-with-sysmon
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/detecting-malicious-scheduled-tasks-with-sysmon
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

# Detecting Malicious Scheduled Tasks with Sysmon
## Overview

Adversaries abuse Windows Task Scheduler (schtasks.exe, at.exe) for persistence (T1053.005)
and lateral movement. Sysmon Event ID 1 captures schtasks.exe process creation with full
command-line arguments, while Event ID 11 captures task XML files written to
C:\Windows\System32\Tasks\. Windows Security Event 4698 logs task registration details.
This skill covers building detection rules that correlate these events to identify
malicious scheduled tasks created from suspicious paths, with encoded payloads, or
targeting remote systems.


## When to Use

- When investigating security incidents that require detecting malicious scheduled tasks with sysmon
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Sysmon installed with a detection-focused configuration (e.g., SwiftOnSecurity or Olaf Hartong)
- Windows Event Log forwarding to SIEM (Splunk, Elastic, or Sentinel)
- PowerShell ScriptBlock Logging enabled (Event 4104)

## Steps

1. Configure Sysmon to log Event IDs 1, 11, 12, 13 with task-related filters
2. Build detection rules for schtasks.exe /create with suspicious arguments
3. Correlate Event 4698 (task registered) with Sysmon Event 1 (process create)
4. Hunt for tasks executing from public directories or with encoded commands
5. Alert on remote task creation (schtasks /s) for lateral movement detection

## Expected Output

```
[CRITICAL] Suspicious Scheduled Task Detected
  Task: \Microsoft\Windows\UpdateCheck
  Command: powershell.exe -enc SQBuAHYAbwBrAGUALQBXAGUAYgBSAGU...
  Created By: DOMAIN\compromised_user
  Parent Process: cmd.exe (PID 4532)
  Source: \\192.168.1.50 (remote creation)
  MITRE: T1053.005 - Scheduled Task/Job
```
