---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-threat-actor-ttps-with-mitre-navigator
name: analyzing-threat-actor-ttps-with-mitre-navigator
tagline: Map advanced persistent threat (APT) group TTPs to the MITRE ATT&CK
  framework using the attackcti Python library to query STIX/TAXII data for
  group-te
summary: The MITRE ATT&CK Navigator is a web application for annotating and
  visualizing ATT&CK matrices. Combined with the attackcti Python library (which
  queries ATT&CK STIX data via TAXII), analysts can programmatically gene...
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
  subpath: skills/analyzing-threat-actor-ttps-with-mitre-navigator
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
  path: skills/analyzing-threat-actor-ttps-with-mitre-navigator/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.328Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-threat-actor-ttps-with-mitre-navigator
  description: >
    Map advanced persistent threat (APT) group TTPs to the MITRE ATT&CK
    framework using the attackcti Python library to query STIX/TAXII data for
    group-technique associations, then generate ATT&CK Navigator layer files to
    visualize and compare defensive coverage against adversary profiles. Use
    when profiling an APT group's techniques, building Navigator coverage
    heatmaps, or assessing technique coverage gaps against a specific threat
    actor.
  folder_path: skills/analyzing-threat-actor-ttps-with-mitre-navigator
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

# Analyzing Threat Actor TTPs with MITRE Navigator
## Overview

The MITRE ATT&CK Navigator is a web application for annotating and visualizing ATT&CK matrices.
Combined with the attackcti Python library (which queries ATT&CK STIX data via TAXII), analysts
can programmatically generate Navigator layer files mapping specific threat group TTPs, compare
multiple groups, and assess detection coverage gaps against known adversaries.


## When to Use

- When investigating security incidents that require analyzing threat actor ttps with mitre navigator
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Python 3.8+ with attackcti and stix2 libraries installed
- MITRE ATT&CK Navigator (web UI or local instance)
- Understanding of STIX 2.1 objects and relationships

## Steps

1. Query ATT&CK STIX data for target threat group using attackcti
2. Extract techniques associated with the group via STIX relationships
3. Generate ATT&CK Navigator layer JSON with technique annotations
4. Overlay detection coverage to identify gaps
5. Export layer for team review and defensive planning

## Expected Output

```json
{
  "name": "APT29 TTPs",
  "domain": "enterprise-attack",
  "techniques": [
    {"techniqueID": "T1566.001", "score": 1, "comment": "Spearphishing Attachment"},
    {"techniqueID": "T1059.001", "score": 1, "comment": "PowerShell"}
  ]
}
```
