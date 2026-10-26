---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-dcsync-attacks
name: hunting-for-dcsync-attacks
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
  subpath: skills/hunting-for-dcsync-attacks
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
  path: skills/hunting-for-dcsync-attacks/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-dcsync-attacks
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/hunting-for-dcsync-attacks
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

# Hunting for DCSync Attacks
## When to Use

- When hunting for DCSync credential theft (MITRE ATT&CK T1003.006)
- After detecting Mimikatz or similar tools in the environment
- During incident response involving Active Directory compromise
- When monitoring for unauthorized domain replication requests
- During purple team exercises testing AD attack detection

## Prerequisites

- Windows Security Event Log forwarding enabled (Event ID 4662)
- Audit Directory Service Access enabled via Group Policy
- Domain Computers SACL configured on Domain Object for machine account detection
- SIEM with Windows event data ingested (Splunk, Elastic, Sentinel)
- Knowledge of legitimate domain controller accounts and replication partners

## Workflow

1. **Enable Auditing**: Ensure Audit Directory Service Access is enabled on domain controllers.
2. **Collect Events**: Gather Windows Event ID 4662 with AccessMask 0x100 (Control Access).
3. **Filter Replication GUIDs**: Search for DS-Replication-Get-Changes and DS-Replication-Get-Changes-All.
4. **Identify Non-DC Sources**: Flag events where SubjectUserName is not a domain controller machine account.
5. **Correlate with Network**: Cross-reference source IPs against known DC addresses.
6. **Validate Findings**: Exclude legitimate replication tools (Azure AD Connect, SCCM).
7. **Respond**: Disable compromised accounts, reset krbtgt, investigate lateral movement.

## Key Concepts

| Concept | Description |
|---------|-------------|
| DCSync | Technique abusing AD replication protocol to extract password hashes |
| Event ID 4662 | Directory Service Access audit event |
| DS-Replication-Get-Changes | GUID 1131f6aa-9c07-11d1-f79f-00c04fc2dcd2 |
| DS-Replication-Get-Changes-All | GUID 1131f6ad-9c07-11d1-f79f-00c04fc2dcd2 |
| AccessMask 0x100 | Control Access right indicating extended rights verification |
| T1003.006 | OS Credential Dumping: DCSync |

## Tools & Systems

| Tool | Purpose |
|------|---------|
| Windows Event Viewer | Direct event log analysis |
| Splunk | SIEM correlation of Event 4662 |
| Elastic Security | Detection rules for DCSync patterns |
| Mimikatz lsadump::dcsync | Attack tool used to perform DCSync |
| Impacket secretsdump.py | Python-based DCSync implementation |
| BloodHound | Identify accounts with replication rights |

## Output Format

```
Hunt ID: TH-DCSYNC-[DATE]-[SEQ]
Technique: T1003.006
Domain Controller: [DC hostname]
Subject Account: [Account performing replication]
Source IP: [Non-DC IP address]
GUID Accessed: [Replication GUID]
Risk Level: [Critical/High/Medium/Low]
Recommended Action: [Disable account, reset krbtgt, investigate]
```
