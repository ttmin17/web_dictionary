---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-shadow-it-cloud-usage
name: detecting-shadow-it-cloud-usage
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
  subpath: skills/detecting-shadow-it-cloud-usage
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
  path: skills/detecting-shadow-it-cloud-usage/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-shadow-it-cloud-usage
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/detecting-shadow-it-cloud-usage
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

# Detecting Shadow IT Cloud Usage
## Overview

Shadow IT refers to unauthorized SaaS applications and cloud services used without IT approval. This skill analyzes proxy logs, DNS query logs, and firewall/netflow data to identify unauthorized cloud service usage, classify discovered domains against known SaaS categories, measure data transfer volumes, and flag high-risk services based on security posture and compliance requirements.


## When to Use

- When investigating security incidents that require detecting shadow it cloud usage
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Python 3.9+ with `pandas`, `tldextract`
- Proxy logs (Squid, Zscaler, or Palo Alto format) or DNS query logs
- SaaS application catalog/blocklist for classification
- Network firewall logs with FQDN resolution (optional)

## Steps

1. Parse proxy access logs and extract destination domains with traffic volumes
2. Parse DNS query logs to identify resolved cloud service domains
3. Aggregate traffic by domain using pandas — total bytes, request counts, unique users
4. Classify domains against known SaaS categories (storage, email, dev tools, AI)
5. Flag unauthorized services not on the approved application list
6. Calculate risk scores based on data volume, user count, and service category
7. Generate shadow IT discovery report with remediation recommendations

## Expected Output

- JSON report listing discovered cloud services with traffic volumes, user counts, risk scores, and approval status
- Top unauthorized services ranked by data exfiltration risk
