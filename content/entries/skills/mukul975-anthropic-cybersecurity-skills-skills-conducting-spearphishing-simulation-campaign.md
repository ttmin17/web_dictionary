---
slug: mukul975-anthropic-cybersecurity-skills-skills-conducting-spearphishing-simulation-campaign
name: conducting-spearphishing-simulation-campaign
tagline: Run a targeted spearphishing simulation for initial access by
  developing OSINT-derived pretexts, building payloads (HTML smuggling, macro
  docs, ISO/LN
summary: Spearphishing simulation is a targeted social engineering attack vector
  used by red teams to gain initial access. Unlike broad phishing campaigns,
  spearphishing uses OSINT-derived intelligence to craft highly personal...
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
  subpath: skills/conducting-spearphishing-simulation-campaign
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
  path: skills/conducting-spearphishing-simulation-campaign/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.343Z
  truncated: false
type: agent_skill
skill:
  skill_name: conducting-spearphishing-simulation-campaign
  description: Run a targeted spearphishing simulation for initial access by
    developing OSINT-derived pretexts, building payloads (HTML smuggling, macro
    docs, ISO/LNK, OneNote, QR codes), standing up look-alike-domain email
    infrastructure with SPF/DKIM/DMARC via GoPhish, and tracking results. Use in
    authorized engagements to gain initial access via personalized phishing
    against specific individuals, distinct from broad campaigns.
  folder_path: skills/conducting-spearphishing-simulation-campaign
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

# Conducting Spearphishing Simulation Campaign
> **Legal Notice:** This skill is for authorized security testing and educational purposes only. Unauthorized use against systems you do not own or have written permission to test is illegal and may violate computer fraud laws.

## Overview

Spearphishing simulation is a targeted social engineering attack vector used by red teams to gain initial access. Unlike broad phishing campaigns, spearphishing uses OSINT-derived intelligence to craft highly personalized messages targeting specific individuals. This skill covers developing pretexts, building payloads, setting up email infrastructure, executing the campaign, and tracking results.


## When to Use

- When conducting security assessments that involve conducting spearphishing simulation campaign
- When following incident response procedures for related security events
- When performing scheduled security testing or auditing activities
- When validating security controls through hands-on testing

## Prerequisites

- Familiarity with red teaming concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives

- Develop convincing pretexts tailored to specific target personnel
- Create weaponized payloads that bypass email security controls
- Set up email delivery infrastructure with proper SPF/DKIM/DMARC configuration
- Execute phishing campaigns with real-time tracking and metrics
- Document results for engagement reporting and security awareness improvement

## MITRE ATT&CK Mapping

- **T1566.001** - Phishing: Spearphishing Attachment
- **T1566.002** - Phishing: Spearphishing Link
- **T1566.003** - Phishing: Spearphishing via Service
- **T1598.003** - Phishing for Information: Spearphishing Link
- **T1204.001** - User Execution: Malicious Link
- **T1204.002** - User Execution: Malicious File
- **T1608.001** - Stage Capabilities: Upload Malware
- **T1608.005** - Stage Capabilities: Link Target
- **T1583.001** - Acquire Infrastructure: Domains
- **T1585.002** - Establish Accounts: Email Accounts

## Workflow

### Phase 1: Pretext Development
1. Review OSINT findings for target personnel profiles
2. Identify current organizational events (mergers, projects, new hires)
3. Select pretext theme (IT helpdesk, HR benefits, vendor communication, executive request)
4. Craft email templates with appropriate urgency and authority cues
5. Create landing pages that mirror target organization's branding

### Phase 2: Payload Development
1. Select payload type based on target security controls:
   - HTML smuggling for email gateway bypass
   - Macro-enabled documents (if macros not blocked)
   - ISO/IMG files containing LNK payloads
   - OneNote files with embedded scripts
   - QR codes linking to credential harvesting pages
2. Test payload against target's known security stack
3. Implement payload obfuscation techniques
4. Configure callback to C2 infrastructure

### Phase 3: Infrastructure Setup
1. Register convincing look-alike domain
2. Age domain and build reputation (minimum 2 weeks recommended)
3. Configure SPF, DKIM, and DMARC records
4. Set up SMTP relay with GoPhish or custom mail server
5. Deploy credential harvesting pages with SSL certificates
6. Configure tracking pixels and click tracking

### Phase 4: Campaign Execution
1. Send test emails to verify delivery and rendering
2. Launch campaign in waves (avoid mass sending)
3. Monitor email delivery rates and opens in real-time
4. Track link clicks and credential submissions
5. Deploy payloads to users who interact with phishing emails
6. Capture screenshots and evidence for reporting

### Phase 5: Post-Campaign Analysis
1. Calculate campaign metrics (delivery rate, open rate, click rate, credential capture rate)
2. Identify users who reported phishing to SOC
3. Document bypass of email security controls
4. Map successful compromises to MITRE ATT&CK
5. Compile findings for engagement report

## Tools and Resources

| Tool | Purpose | License |
|------|---------|---------|
| GoPhish | Phishing campaign management | Open Source |
| Evilginx2 | Real-time credential harvesting with MFA bypass | Open Source |
| King Phisher | Phishing campaign toolkit | Open Source |
| SET (Social Engineering Toolkit) | Multi-vector social engineering | Open Source |
| Modlishka | Reverse proxy phishing | Open Source |
| CredSniper | Credential harvesting framework | Open Source |
| Fierce Phish | Phishing framework | Open Source |

## Validation Criteria

- [ ] Pretext tailored to specific targets with OSINT data
- [ ] Payload tested against email security controls
- [ ] Infrastructure configured with proper email authentication
- [ ] Campaign tracked with delivery and interaction metrics
- [ ] Evidence collected for engagement report
- [ ] Cleanup performed on infrastructure post-campaign
