---
slug: mukul975-anthropic-cybersecurity-skills-skills-configuring-ldap-security-hardening
name: configuring-ldap-security-hardening
tagline: Hardens LDAP directory services against credential harvesting, LDAP
  injection, anonymous binding, and channel-binding bypass by enforcing LDAPS,
  chann
summary: "- When deploying or configuring configuring ldap security hardening
  capabilities in your environment - When establishing security controls aligned
  to compliance requirements - When building or improving security archi..."
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
  subpath: skills/configuring-ldap-security-hardening
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
  path: skills/configuring-ldap-security-hardening/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.344Z
  truncated: false
type: agent_skill
skill:
  skill_name: configuring-ldap-security-hardening
  description: Hardens LDAP directory services against credential harvesting, LDAP
    injection, anonymous binding, and channel-binding bypass by enforcing LDAPS,
    channel binding, and LDAP signing. Use when securing an LDAP or Active
    Directory environment against these attack classes or auditing directory
    service configurations for these vulnerabilities.
  folder_path: skills/configuring-ldap-security-hardening
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

# Configuring LDAP Security Hardening
## Overview
Harden LDAP directory services against common attacks including credential harvesting, LDAP injection, anonymous binding, and channel binding bypass. Covers LDAPS enforcement, channel binding, LDAP signing, access control lists, and monitoring for LDAP-based attacks.


## When to Use

- When deploying or configuring configuring ldap security hardening capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with identity access management concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives
- Implement comprehensive configuring ldap security hardening capability
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
