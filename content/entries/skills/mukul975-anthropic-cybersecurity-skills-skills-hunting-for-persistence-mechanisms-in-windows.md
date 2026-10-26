---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-persistence-mechanisms-in-windows
name: hunting-for-persistence-mechanisms-in-windows
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
  subpath: skills/hunting-for-persistence-mechanisms-in-windows
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
  path: skills/hunting-for-persistence-mechanisms-in-windows/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-persistence-mechanisms-in-windows
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/hunting-for-persistence-mechanisms-in-windows
  extra_files:
    - LICENSE
    - assets/template.md
    - references/api-reference.md
    - references/standards.md
    - references/workflows.md
    - scripts/agent.py
    - scripts/process.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Hunting for Persistence Mechanisms in Windows
## When to Use

- During periodic proactive threat hunts for dormant backdoors
- After an incident to identify all persistence mechanisms an attacker planted
- When investigating unusual services, scheduled tasks, or startup entries
- When threat intel reports describe new persistence techniques in the wild
- During security posture assessments to identify unauthorized persistent software

## Prerequisites

- Sysmon deployed with Event IDs 12/13/14 (Registry), 19/20/21 (WMI), 1 (Process Creation)
- Windows Security Event forwarding for 4697 (Service Install), 4698 (Scheduled Task)
- EDR with registry and file monitoring capabilities
- PowerShell script block logging enabled (Event ID 4104)
- Autoruns or equivalent baseline of legitimate persistent entries

## Workflow

1. **Enumerate Known Persistence Locations**: Build a comprehensive list of Windows persistence points (Run keys, services, scheduled tasks, WMI, startup folder, DLL search order, COM hijacks, AppInit DLLs, Image File Execution Options).
2. **Collect Endpoint Data**: Use EDR, Sysmon, or Velociraptor to collect current persistence artifacts from endpoints across the environment.
3. **Baseline Legitimate Persistence**: Compare collected data against known-good baselines (Autoruns snapshots, GPO-deployed entries, SCCM configurations).
4. **Identify Anomalies**: Flag new, unsigned, or unknown entries in persistence locations that deviate from the baseline.
5. **Investigate Suspicious Entries**: For each anomaly, examine the binary it points to, its digital signature, file hash, and creation timestamp.
6. **Correlate with Process Activity**: Link persistence entries to process execution, network activity, and user login events.
7. **Document and Remediate**: Record findings, remove malicious persistence, and update detection rules.

## Key Concepts

| Concept | Description |
|---------|-------------|
| T1547.001 | Registry Run Keys / Startup Folder |
| T1543.003 | Windows Service (Create or Modify) |
| T1053.005 | Scheduled Task |
| T1546.003 | WMI Event Subscription |
| T1546.015 | Component Object Model (COM) Hijacking |
| T1546.012 | Image File Execution Options Injection |
| T1546.010 | AppInit DLLs |
| T1547.004 | Winlogon Helper DLL |
| T1547.005 | Security Support Provider |
| T1574.001 | DLL Search Order Hijacking |
| TA0003 | Persistence Tactic |
| Autoruns | Sysinternals tool showing persistent entries |

## Tools & Systems

| Tool | Purpose |
|------|---------|
| Sysinternals Autoruns | Comprehensive persistence enumeration |
| Velociraptor | Endpoint-wide persistence artifact collection |
| CrowdStrike Falcon | Real-time persistence monitoring |
| Sysmon | Registry and WMI event monitoring |
| OSQuery | SQL-based persistence queries |
| RECmd | Registry Explorer for forensic analysis |
| Splunk | SIEM correlation of persistence events |

## Common Scenarios

1. **Registry Run Key Backdoor**: Malware adds `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` entry pointing to payload in `%APPDATA%`.
2. **WMI Event Subscription**: Adversary creates WMI consumer/filter pair that executes PowerShell on system boot.
3. **Malicious Service**: Attacker creates Windows service with `sc create` pointing to a backdoor binary.
4. **COM Object Hijack**: Legitimate COM CLSID InprocServer32 path replaced with malicious DLL.
5. **IFEO Debugger Injection**: Image File Execution Options key set with debugger pointing to implant for common utilities.

## Output Format

```
Hunt ID: TH-PERSIST-[DATE]-[SEQ]
Persistence Type: [Registry/Service/Task/WMI/COM/Other]
MITRE Technique: T1547.xxx / T1543.xxx / T1053.xxx
Location: [Full registry key / service name / task path]
Value: [Binary path / command line]
Host(s): [Affected endpoints]
Signed: [Yes/No]
Hash: [SHA256]
Creation Time: [Timestamp]
Risk Level: [Critical/High/Medium/Low]
Verdict: [Malicious/Suspicious/Benign]
```
