---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-lateral-movement-with-splunk
name: detecting-lateral-movement-with-splunk
tagline: Detect adversary lateral movement across networks using Splunk SPL
  queries against Windows authentication logs, SMB traffic, and remote service
  (WMI/P
summary: "- When hunting for adversary movement between compromised systems -
  After detecting credential theft to trace subsequent lateral activity - When
  investigating unusual authentication patterns across the network - Durin..."
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
  subpath: skills/detecting-lateral-movement-with-splunk
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
  path: skills/detecting-lateral-movement-with-splunk/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-lateral-movement-with-splunk
  description: Detect adversary lateral movement across networks using Splunk SPL
    queries against Windows authentication logs, SMB traffic, and remote service
    (WMI/PsExec/RDP) abuse. Use when hunting for MITRE ATT&CK TA0008 lateral
    movement activity or investigating suspected pivoting between hosts during
    an incident, with Splunk as the SIEM.
  folder_path: skills/detecting-lateral-movement-with-splunk
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

# Detecting Lateral Movement with Splunk
## When to Use

- When hunting for adversary movement between compromised systems
- After detecting credential theft to trace subsequent lateral activity
- When investigating unusual authentication patterns across the network
- During incident response to scope the breadth of compromise
- When proactively hunting for TA0008 (Lateral Movement) techniques

## Prerequisites

- Splunk Enterprise or Splunk Cloud with Windows event data ingested
- Windows Security Event Logs forwarded (4624, 4625, 4648, 4672, 4768, 4769)
- Sysmon deployed for process creation and network connection data
- Network flow data or firewall logs for SMB/RDP/WinRM correlation
- Active Directory user and group membership reference data

## Workflow

1. **Define Lateral Movement Scope**: Identify which lateral movement techniques to hunt (RDP, SMB/Admin Shares, WinRM, PsExec, WMI, DCOM, SSH).
2. **Query Authentication Events**: Use SPL to search for Type 3 (Network) and Type 10 (RemoteInteractive) logons across the environment.
3. **Build Authentication Graphs**: Map source-to-destination authentication relationships to identify unusual connection patterns.
4. **Detect First-Time Relationships**: Identify new source-destination pairs that have not been seen in the historical baseline.
5. **Correlate with Process Activity**: Link authentication events to subsequent process creation on destination hosts.
6. **Identify Anomalous Patterns**: Flag lateral movement to sensitive servers, unusual hours, service account misuse, or rapid multi-host access.
7. **Report and Contain**: Document lateral movement path, affected systems, and coordinate containment response.

## Key Concepts

| Concept | Description |
|---------|-------------|
| T1021 | Remote Services (parent technique) |
| T1021.001 | Remote Desktop Protocol (RDP) |
| T1021.002 | SMB/Windows Admin Shares |
| T1021.003 | Distributed COM (DCOM) |
| T1021.004 | SSH |
| T1021.006 | Windows Remote Management (WinRM) |
| T1570 | Lateral Tool Transfer |
| T1047 | Windows Management Instrumentation |
| T1569.002 | Service Execution (PsExec) |
| Logon Type 3 | Network logon (SMB, WinRM, mapped drives) |
| Logon Type 10 | Remote Interactive (RDP) |
| Event ID 4624 | Successful logon |
| Event ID 4648 | Explicit credential logon (runas, PsExec) |

## Tools & Systems

| Tool | Purpose |
|------|---------|
| Splunk Enterprise | SIEM for log aggregation and SPL queries |
| Splunk Enterprise Security | Threat detection and notable events |
| Windows Event Forwarding | Centralize Windows logs |
| Sysmon | Detailed process and network telemetry |
| BloodHound | AD attack path analysis |
| PingCastle | AD security assessment |

## Common Scenarios

1. **PsExec Lateral Movement**: Adversary uses PsExec to execute commands on remote systems via SMB, generating Type 3 logon with ADMIN$ share access.
2. **RDP Pivoting**: Attacker RDPs to internal systems using stolen credentials, creating Type 10 logon events.
3. **WMI Remote Execution**: Adversary uses WMIC process call create to spawn processes on remote hosts.
4. **WinRM PowerShell Remoting**: Attacker uses Enter-PSSession or Invoke-Command to execute code on remote systems.
5. **Pass-the-Hash via SMB**: Compromised NTLM hashes used to authenticate to remote systems without knowing the plaintext password.

## Output Format

```
Hunt ID: TH-LATMOV-[DATE]-[SEQ]
Movement Type: [RDP/SMB/WinRM/WMI/DCOM/PsExec]
Source Host: [Hostname/IP]
Destination Host: [Hostname/IP]
Account Used: [Username]
Logon Type: [3/10/other]
First Seen: [Timestamp]
Event Count: [Number of events]
Risk Level: [Critical/High/Medium/Low]
Lateral Movement Path: [A -> B -> C -> D]
```
