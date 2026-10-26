---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-threat-landscape-with-misp
name: analyzing-threat-landscape-with-misp
tagline: Query a MISP (Malware Information Sharing Platform) instance via PyMISP
  to compute event statistics, IOC type breakdowns, threat actor galaxy clusters
summary: "- When investigating security incidents that require analyzing threat
  landscape with misp - When building detection rules or threat hunting queries
  for this domain - When SOC analysts need structured procedures for th..."
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
  subpath: skills/analyzing-threat-landscape-with-misp
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
  path: skills/analyzing-threat-landscape-with-misp/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.328Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-threat-landscape-with-misp
  description: Query a MISP (Malware Information Sharing Platform) instance via
    PyMISP to compute event statistics, IOC type breakdowns, threat actor galaxy
    clusters, and tag trends, and generate threat landscape reports with
    temporal trends. Use when asked to analyze threat intelligence data,
    summarize top threat actors or malware families, or produce a CTI landscape
    report from MISP events.
  folder_path: skills/analyzing-threat-landscape-with-misp
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

# Analyzing Threat Landscape with MISP
## When to Use

- When investigating security incidents that require analyzing threat landscape with misp
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Familiarity with threat intelligence concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

1. Install dependencies: `pip install pymisp`
2. Configure MISP URL and API key.
3. Run the agent to generate threat landscape analysis:
   - Pull event statistics by threat level and date range
   - Analyze attribute type distributions (IP, domain, hash, URL)
   - Identify top MITRE ATT&CK techniques from event tags
   - Track threat actor activity via galaxy clusters
   - Generate temporal trend analysis of IOC submissions

```bash
python scripts/agent.py --misp-url https://misp.local --api-key YOUR_KEY --days 90 --output landscape_report.json
```

## Examples

### Threat Landscape Summary
```
Period: Last 90 days
Events analyzed: 1,247
Top threat level: High (43%)
Top attribute type: ip-dst (31%), domain (22%), sha256 (18%)
Top MITRE technique: T1566 Phishing (89 events)
Top threat actor: APT28 (34 events)
```
