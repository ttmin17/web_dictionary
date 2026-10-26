---
slug: mukul975-anthropic-cybersecurity-skills-skills-conducting-pass-the-ticket-attack
name: conducting-pass-the-ticket-attack
tagline: "Perform Pass-the-Ticket (PtT) lateral movement by extracting Kerberos
  TGT/TGS tickets from LSASS memory on a compromised host and injecting them
  into "
summary: Pass-the-Ticket (PtT) is a lateral movement technique that uses stolen
  Kerberos tickets (TGT or TGS) to authenticate to services without knowing the
  user's password. By extracting Kerberos tickets from memory (LSASS)...
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
  subpath: skills/conducting-pass-the-ticket-attack
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
  path: skills/conducting-pass-the-ticket-attack/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.342Z
  truncated: false
type: agent_skill
skill:
  skill_name: conducting-pass-the-ticket-attack
  description: Perform Pass-the-Ticket (PtT) lateral movement by extracting
    Kerberos TGT/TGS tickets from LSASS memory on a compromised host and
    injecting them into another session to impersonate the ticket owner without
    knowing their password. Use during authorized post-exploitation to move
    laterally or escalate access via stolen Kerberos tickets, or to validate
    detections for Kerberos ticket theft and reuse.
  folder_path: skills/conducting-pass-the-ticket-attack
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

# Conducting Pass-the-Ticket Attack
> **Legal Notice:** This skill is for authorized security testing and educational purposes only. Unauthorized use against systems you do not own or have written permission to test is illegal and may violate computer fraud laws.

## Overview

Pass-the-Ticket (PtT) is a lateral movement technique that uses stolen Kerberos tickets (TGT or TGS) to authenticate to services without knowing the user's password. By extracting Kerberos tickets from memory (LSASS) on a compromised host, an attacker can inject those tickets into their own session to impersonate the ticket owner and access resources as that user.


## When to Use

- When conducting security assessments that involve conducting pass the ticket attack
- When following incident response procedures for related security events
- When performing scheduled security testing or auditing activities
- When validating security controls through hands-on testing

## Prerequisites

- Familiarity with red teaming concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## MITRE ATT&CK Mapping

- **T1550.003** - Use Alternate Authentication Material: Pass the Ticket
- **T1003.001** - OS Credential Dumping: LSASS Memory
- **T1558** - Steal or Forge Kerberos Tickets
- **T1021.002** - Remote Services: SMB/Windows Admin Shares

## Workflow

### Phase 1: Ticket Extraction
1. Gain local admin access on target workstation
2. Dump Kerberos tickets from LSASS memory using Mimikatz or Rubeus
3. Export tickets in .kirbi format (Mimikatz) or base64 (Rubeus)
4. Identify high-value tickets (Domain Admin TGTs, service tickets to critical systems)

### Phase 2: Ticket Injection
1. Purge existing Kerberos tickets from attacker session
2. Import/inject stolen ticket into current session
3. Verify ticket is loaded and valid
4. Access target resources using injected ticket

### Phase 3: Lateral Movement
1. Access remote systems using the stolen ticket identity
2. Perform actions as the impersonated user
3. Collect additional credentials from accessed systems
4. Document evidence of successful lateral movement

## Tools and Resources

| Tool | Purpose | Command |
|------|---------|---------|
| Mimikatz | Ticket export/import | sekurlsa::tickets /export, kerberos::ptt |
| Rubeus | Ticket dumping and injection | dump, ptt, tgtdeleg |
| Impacket ticketConverter | Convert between formats | ticketConverter.py ticket.kirbi ticket.ccache |
| Impacket psexec/smbexec | Remote execution with ticket | KRB5CCNAME=ticket.ccache psexec.py |

## Detection Indicators

- Event ID 4768 with unusual client addresses
- Event ID 4769 service ticket requests from unexpected hosts
- TGT usage from different IP than the TGT was issued to
- Multiple authentications from same ticket across different workstations

## Validation Criteria

- [ ] Kerberos tickets extracted from compromised host
- [ ] Tickets injected into attacker session
- [ ] Lateral movement demonstrated using stolen tickets
- [ ] Evidence captured for reporting
