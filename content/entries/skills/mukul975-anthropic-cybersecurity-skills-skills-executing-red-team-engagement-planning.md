---
slug: mukul975-anthropic-cybersecurity-skills-skills-executing-red-team-engagement-planning
name: executing-red-team-engagement-planning
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
  subpath: skills/executing-red-team-engagement-planning
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
  path: skills/executing-red-team-engagement-planning/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: executing-red-team-engagement-planning
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/executing-red-team-engagement-planning
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

# Executing Red Team Engagement Planning
## Overview

Red team engagement planning is the foundational phase that defines scope, objectives, rules of engagement (ROE), threat model selection, and operational timelines before any offensive testing begins. A well-structured engagement plan ensures the red team simulates realistic adversary behavior while maintaining safety guardrails that prevent unintended business disruption.


## When to Use

- When conducting security assessments that involve executing red team engagement planning
- When following incident response procedures for related security events
- When performing scheduled security testing or auditing activities
- When validating security controls through hands-on testing

## Prerequisites

- Familiarity with red teaming concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives

- Define clear engagement scope including in-scope and out-of-scope assets, networks, and personnel
- Establish Rules of Engagement (ROE) with emergency stop procedures, communication channels, and legal boundaries
- Select appropriate threat profiles from the MITRE ATT&CK framework aligned to the organization's threat landscape
- Create a detailed attack plan mapping adversary TTPs to engagement objectives
- Develop deconfliction procedures with the organization's SOC/blue team
- Produce a comprehensive engagement brief for stakeholder approval

> **Legal Notice:** This skill is for authorized security testing and educational purposes only. Unauthorized use against systems you do not own or have written permission to test is illegal and may violate computer fraud laws.

## Core Concepts

### Engagement Types

| Type | Description | Scope |
|------|-------------|-------|
| Full Scope | Complete adversary simulation with physical, social, and cyber vectors | Entire organization |
| Assumed Breach | Starts from initial foothold, focuses on post-exploitation | Internal network |
| Objective-Based | Target specific crown jewels (e.g., domain admin, PII exfiltration) | Defined targets |
| Purple Team | Collaborative with blue team for detection improvement | Specific controls |

### Rules of Engagement Components

1. **Scope Definition**: IP ranges, domains, physical locations, personnel
2. **Restrictions**: Systems/networks that must not be touched (e.g., production databases, medical devices)
3. **Communication Plan**: Primary and secondary contact channels, escalation procedures
4. **Emergency Procedures**: Code word for immediate cessation, incident response coordination
5. **Legal Authorization**: Signed authorization letters, get-out-of-jail letters for physical tests
6. **Data Handling**: How sensitive data discovered during testing will be handled and destroyed
7. **Timeline**: Start/end dates, blackout windows, reporting deadlines

### Threat Profile Selection

Map organizational threats using MITRE ATT&CK Navigator to select relevant adversary profiles:

- **APT29 (Cozy Bear)**: Government/defense sector targeting via spearphishing, supply chain
- **APT28 (Fancy Bear)**: Government organizations, credential harvesting, zero-days
- **FIN7**: Financial sector, POS malware, social engineering
- **Lazarus Group**: Financial institutions, cryptocurrency exchanges, destructive malware
- **Conti/Royal**: Ransomware operators, double extortion, RaaS model

## Workflow

### Phase 1: Pre-Engagement

1. Conduct initial scoping meeting with stakeholders
2. Identify crown jewels and critical business assets
3. Review previous security assessments and audit findings
4. Define success criteria and engagement objectives
5. Draft Rules of Engagement document

### Phase 2: Threat Modeling

1. Identify relevant threat actors using MITRE ATT&CK
2. Map threat actor TTPs to organizational attack surface
3. Select primary and secondary attack scenarios
4. Define adversary emulation plan with specific technique IDs
5. Establish detection checkpoints for purple team opportunities

### Phase 3: Operational Planning

1. Set up secure communication channels (encrypted email, Signal, etc.)
2. Create operational security (OPSEC) guidelines for the red team
3. Establish infrastructure requirements (C2 servers, redirectors, phishing domains)
4. Develop phased attack timeline with go/no-go decision points
5. Create deconfliction matrix with SOC/IR team

### Phase 4: Documentation and Approval

1. Compile engagement plan document
2. Review with legal counsel
3. Obtain executive sponsor signature
4. Brief red team operators on ROE and restrictions
5. Distribute emergency contact cards

## Tools and Resources

- **MITRE ATT&CK Navigator**: Threat actor TTP mapping and visualization
- **VECTR**: Red team engagement tracking and metrics platform
- **Cobalt Strike / Nighthawk**: C2 framework planning and infrastructure design
- **PlexTrac**: Red team reporting and engagement management platform
- **SCYTHE**: Adversary emulation platform for attack plan creation

## Validation Criteria

- [ ] Signed Rules of Engagement document
- [ ] Defined scope with explicit in/out boundaries
- [ ] Selected threat profile with mapped MITRE ATT&CK techniques
- [ ] Emergency stop procedures tested and verified
- [ ] Communication plan distributed to all stakeholders
- [ ] Legal authorization obtained and filed
- [ ] Red team operators briefed and acknowledged ROE

## Common Pitfalls

1. **Scope Creep**: Expanding testing beyond approved boundaries during execution
2. **Inadequate Deconfliction**: SOC investigating red team activity as real incidents
3. **Missing Legal Authorization**: Testing without proper signed authorization
4. **Unrealistic Threat Models**: Simulating threats irrelevant to the organization
5. **Poor Communication**: Failing to maintain contact with stakeholders during engagement

## Related Skills

- performing-open-source-intelligence-gathering
- conducting-adversary-simulation-with-atomic-red-team
- performing-assumed-breach-red-team-exercise
- building-red-team-infrastructure-with-redirectors
