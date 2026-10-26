---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-golden-ticket-attacks-in-kerberos-logs
name: detecting-golden-ticket-attacks-in-kerberos-logs
tagline: Detect Golden Ticket attacks in Active Directory using Splunk and KQL
  queries against domain controller event logs, looking for Kerberos TGT
  anomalies
summary: "- When KRBTGT account hash may have been compromised via DCSync or
  NTDS.dit extraction - When hunting for forged Kerberos tickets used for
  persistent domain access - After incident response reveals credential theft
  at..."
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
  subpath: skills/detecting-golden-ticket-attacks-in-kerberos-logs
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
  path: skills/detecting-golden-ticket-attacks-in-kerberos-logs/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.355Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-golden-ticket-attacks-in-kerberos-logs
  description: Detect Golden Ticket attacks in Active Directory using Splunk and
    KQL queries against domain controller event logs, looking for Kerberos TGT
    anomalies such as mismatched encryption types, impossible ticket lifetimes,
    non-existent accounts, and forged PAC signatures. Use when hunting for
    Kerberos ticket forgery or krbtgt-based persistence (MITRE T1558.001) in AD
    environments.
  folder_path: skills/detecting-golden-ticket-attacks-in-kerberos-logs
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

# Detecting Golden Ticket Attacks in Kerberos Logs
## When to Use

- When KRBTGT account hash may have been compromised via DCSync or NTDS.dit extraction
- When hunting for forged Kerberos tickets used for persistent domain access
- After incident response reveals credential theft at the domain level
- When investigating impossible logon patterns (users logging in from multiple locations simultaneously)
- During post-breach assessment to determine if Golden Tickets are in use

## Prerequisites

- Windows Security Event IDs 4768, 4769, 4771 on domain controllers
- Kerberos policy configuration knowledge (max ticket lifetime, encryption types)
- Domain controller audit policy enabling Kerberos Service Ticket Operations
- SIEM with ability to correlate Kerberos events across multiple DCs

## Workflow

1. **Monitor TGT Requests (Event 4768)**: Track Kerberos authentication service requests. Golden Tickets bypass the AS-REQ/AS-REP exchange entirely, so the absence of 4768 before 4769 is suspicious.
2. **Detect Encryption Type Anomalies**: Golden Tickets often use RC4 (0x17) encryption. If your domain enforces AES (0x12), any RC4 TGT is a red flag. Monitor TicketEncryptionType in Event 4769.
3. **Check Ticket Lifetime Anomalies**: Default Kerberos TGT lifetime is 10 hours with 7-day renewal. Golden Tickets can be forged with 10-year lifetimes. Detect tickets with durations exceeding policy.
4. **Hunt for Non-Existent SIDs**: Golden Tickets can include arbitrary SIDs (including non-existent accounts or groups). Correlate TGS requests against known AD SID inventory.
5. **Detect TGS Without Prior TGT**: When a service ticket (4769) appears without a preceding TGT request (4768) from the same IP/account, this may indicate a pre-existing Golden Ticket.
6. **Monitor KRBTGT Password Age**: Track when KRBTGT was last reset. If KRBTGT hash hasn't changed since a known compromise, Golden Tickets from that period remain valid.
7. **Validate PAC Signatures**: With KB5008380+ and PAC validation enforcement, domain controllers reject forged PACs. Monitor for Kerberos failures indicating PAC validation errors.

## Detection Queries

### Splunk -- RC4 Encryption in Kerberos TGS
```spl
index=wineventlog EventCode=4769
| where TicketEncryptionType="0x17"
| where ServiceName!="krbtgt"
| stats count by TargetUserName ServiceName IpAddress TicketEncryptionType Computer
| where count > 5
| sort -count
```

### Splunk -- TGS Without Prior TGT
```spl
index=wineventlog (EventCode=4768 OR EventCode=4769)
| stats earliest(_time) as first_tgt by TargetUserName IpAddress EventCode
| eventstats earliest(eval(if(EventCode=4768, first_tgt, null()))) as tgt_time by TargetUserName IpAddress
| where EventCode=4769 AND (isnull(tgt_time) OR first_tgt < tgt_time)
| table TargetUserName IpAddress first_tgt tgt_time
```

### KQL -- Golden Ticket Indicators
```kql
SecurityEvent
| where EventID == 4769
| where TicketEncryptionType == "0x17"
| where ServiceName != "krbtgt"
| summarize Count=count() by TargetUserName, IpAddress, ServiceName
| where Count > 5
```

## Common Scenarios

1. **Post-DCSync Golden Ticket**: After extracting KRBTGT hash, attacker forges TGT with Domain Admin SID, valid for months until KRBTGT is rotated twice.
2. **RC4 Downgrade**: Golden Ticket forged with RC4 encryption in an AES-only environment, detectable by encryption type mismatch.
3. **Cross-Domain Golden Ticket**: Forged inter-realm TGT used to pivot between AD domains/forests.
4. **Persistence After Remediation**: Golden Tickets surviving password resets because KRBTGT was only rotated once (both current and previous hashes are valid).

## Output Format

```
Hunt ID: TH-GOLDEN-[DATE]-[SEQ]
Suspected Account: [Account using forged ticket]
Source IP: [Client IP]
Target Service: [SPN accessed]
Encryption Type: [RC4/AES128/AES256]
Anomaly: [No prior TGT/RC4 in AES environment/Extended lifetime]
KRBTGT Last Reset: [Date]
Risk Level: [Critical]
```
