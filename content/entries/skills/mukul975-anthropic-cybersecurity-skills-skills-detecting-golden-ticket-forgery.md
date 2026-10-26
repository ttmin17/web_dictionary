---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-golden-ticket-forgery
name: detecting-golden-ticket-forgery
tagline: Detect Kerberos Golden Ticket forgery (e.g. Mimikatz-forged tickets) by
  analyzing Windows Event ID 4769 for RC4 encryption downgrades (0x17), abnormal
summary: A Golden Ticket attack (MITRE ATT&CK T1558.001) involves forging a
  Kerberos Ticket Granting Ticket (TGT) using the krbtgt account NTLM hash,
  granting unrestricted access to any service in the Active Directory domain....
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
  subpath: skills/detecting-golden-ticket-forgery
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
  path: skills/detecting-golden-ticket-forgery/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.355Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-golden-ticket-forgery
  description: Detect Kerberos Golden Ticket forgery (e.g. Mimikatz-forged
    tickets) by analyzing Windows Event ID 4769 for RC4 encryption downgrades
    (0x17), abnormal ticket lifetimes, and krbtgt account anomalies using Splunk
    and Elastic SIEM queries. Use when investigating suspected forged Kerberos
    tickets or krbtgt credential theft in Active Directory.
  folder_path: skills/detecting-golden-ticket-forgery
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

# Detecting Golden Ticket Forgery
## Overview

A Golden Ticket attack (MITRE ATT&CK T1558.001) involves forging a Kerberos Ticket Granting Ticket (TGT) using the krbtgt account NTLM hash, granting unrestricted access to any service in the Active Directory domain. This skill detects Golden Ticket usage by analyzing Event ID 4769 for RC4 encryption type (0x17) in environments enforcing AES, identifying tickets with abnormal lifetimes exceeding domain policy, correlating TGS requests with missing corresponding TGT requests (Event ID 4768), and detecting krbtgt password age anomalies.


## When to Use

- When investigating security incidents that require detecting golden ticket forgery
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Windows Domain Controller with Kerberos audit logging enabled
- Splunk or Elastic SIEM ingesting Windows Security event logs
- Python 3.8+ for offline event log analysis
- Knowledge of domain Kerberos encryption policy (AES vs RC4)

## Steps

1. Audit domain Kerberos encryption policy to establish AES-only baseline
2. Forward Event IDs 4768 and 4769 to SIEM platform
3. Detect RC4 (0x17) encryption in TGS requests where AES is enforced
4. Identify TGS requests without corresponding TGT requests (forged ticket indicator)
5. Alert on ticket lifetimes exceeding MaxTicketAge domain policy
6. Monitor krbtgt account password age and last reset date
7. Correlate findings with host/user context for risk scoring

## Expected Output

JSON report with Golden Ticket indicators including RC4 downgrades, orphaned TGS requests, abnormal ticket lifetimes, and risk-scored alerts with MITRE ATT&CK technique mapping.
