---
slug: mukul975-anthropic-cybersecurity-skills-skills-configuring-active-directory-tiered-model
name: configuring-active-directory-tiered-model
tagline: Implement Microsoft's Enhanced Security Admin Environment (ESAE) tiered
  administration model for Active Directory, covering Tier 0/1/2 separation, pri
summary: "- When deploying or configuring configuring active directory tiered
  model capabilities in your environment - When establishing security controls
  aligned to compliance requirements - When building or improving security..."
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
  subpath: skills/configuring-active-directory-tiered-model
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
  path: skills/configuring-active-directory-tiered-model/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.343Z
  truncated: false
type: agent_skill
skill:
  skill_name: configuring-active-directory-tiered-model
  description: Implement Microsoft's Enhanced Security Admin Environment (ESAE)
    tiered administration model for Active Directory, covering Tier 0/1/2
    separation, privileged access workstations (PAWs), administrative forest
    design, and authentication policy silos. Use when designing or hardening AD
    privileged-access architecture, segmenting Domain/Enterprise Admin accounts
    into tiers, or containing lateral movement and credential theft
    (pass-the-hash, Kerberoasting, golden tickets).
  folder_path: skills/configuring-active-directory-tiered-model
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

# Configuring Active Directory Tiered Model
## Overview
Implement Microsoft's Enhanced Security Admin Environment (ESAE) tiered administration model for Active Directory. Covers Tier 0/1/2 separation, privileged access workstations (PAWs), administrative forest design, authentication policy silos, and credential theft mitigation.


## When to Use

- When deploying or configuring configuring active directory tiered model capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with identity access management concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives
- Implement comprehensive configuring active directory tiered model capability
- Establish automated discovery and monitoring processes
- Integrate with enterprise IAM and security tools
- Generate compliance-ready documentation and reports
- Align with NIST 800-53 access control requirements

## Security Controls
| Control | NIST 800-53 | Description |
|---------|-------------|-------------|
| Account Management | AC-2 | Lifecycle management |
| Access Enforcement | AC-3 | Policy-based access control |
| Least Privilege | AC-6 | Minimum necessary permissions |
| Audit Logging | AU-3 | Authentication and access events |
| Identification | IA-2 | User and service identification |

## Verification
- [ ] Implementation tested in non-production environment
- [ ] Security policies configured and enforced
- [ ] Audit logging enabled and forwarding to SIEM
- [ ] Documentation and runbooks complete
- [ ] Compliance evidence generated
