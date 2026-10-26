---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-insider-threat-with-ueba
name: detecting-insider-threat-with-ueba
tagline: Implement User and Entity Behavior Analytics (UEBA) using
  Elasticsearch/OpenSearch to build behavioral baselines, calculate anomaly
  scores, perform pe
summary: User and Entity Behavior Analytics (UEBA) moves beyond static
  rule-based detection to model normal behavior for users, hosts, and
  applications, then flag statistically significant deviations that may indicate
  insider...
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
  subpath: skills/detecting-insider-threat-with-ueba
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
  path: skills/detecting-insider-threat-with-ueba/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-insider-threat-with-ueba
  description: Implement User and Entity Behavior Analytics (UEBA) using
    Elasticsearch/OpenSearch to build behavioral baselines, calculate anomaly
    scores, perform peer group analysis, and alert on insider threat indicators
    such as data exfiltration, privilege abuse, and unauthorized access. Use
    when building or tuning a UEBA pipeline rather than a one-off manual hunt.
  folder_path: skills/detecting-insider-threat-with-ueba
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

# Detecting Insider Threat with UEBA
## Overview

User and Entity Behavior Analytics (UEBA) moves beyond static rule-based detection to model normal behavior for users, hosts, and applications, then flag statistically significant deviations that may indicate insider threats. Using Elasticsearch as the analytics backend, this skill covers building behavioral baselines from authentication logs, file access events, and network activity, computing risk scores using statistical deviation and peer group comparison, and correlating multiple low-confidence indicators into high-confidence insider threat alerts.


## When to Use

- When investigating security incidents that require detecting insider threat with ueba
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Elasticsearch 8.x or OpenSearch 2.x cluster with security audit data
- Log sources: Active Directory authentication, VPN, DLP, file server access, email
- Python 3.9+ with elasticsearch client library
- Baseline period of 30+ days of normal user activity data
- Defined peer groups based on department, role, or job function

## Steps

### Step 1: Ingest and Normalize Activity Logs
Configure log pipelines to ingest authentication, file access, email, and network logs into Elasticsearch with a unified user identity field.

### Step 2: Build Behavioral Baselines
Calculate per-user baselines for login times, data volume, application usage, and access patterns over a rolling 30-day window using Elasticsearch aggregations.

### Step 3: Calculate Anomaly Scores
Compare current activity against baselines using z-score deviation and peer group comparison to generate per-user risk scores.

### Step 4: Correlate and Alert
Combine multiple anomalous indicators (unusual hours + large downloads + new system access) into composite risk scores that trigger SOC investigation workflows.

## Expected Output

JSON report containing per-user risk scores, anomalous activity details, peer group deviations, and recommended investigation actions.
