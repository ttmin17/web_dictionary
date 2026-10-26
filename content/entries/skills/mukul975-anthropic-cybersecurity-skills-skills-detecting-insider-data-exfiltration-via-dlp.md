---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-insider-data-exfiltration-via-dlp
name: detecting-insider-data-exfiltration-via-dlp
tagline: Detects insider data exfiltration by analyzing DLP policy violations,
  file access patterns, upload volume anomalies, and off-hours activity in
  endpoin
summary: "- When investigating security incidents that require detecting insider
  data exfiltration via dlp - When building detection rules or threat hunting
  queries for this domain - When SOC analysts need structured procedures..."
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
  subpath: skills/detecting-insider-data-exfiltration-via-dlp
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
  path: skills/detecting-insider-data-exfiltration-via-dlp/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-insider-data-exfiltration-via-dlp
  description: >
    Detects insider data exfiltration by analyzing DLP policy violations, file
    access patterns, upload volume anomalies, and off-hours activity in endpoint
    and cloud logs. Uses pandas for behavioral analytics and statistical
    baselines. Use when investigating insider threats or building user behavior
    analytics for data loss prevention.
  folder_path: skills/detecting-insider-data-exfiltration-via-dlp
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

# Detecting Insider Data Exfiltration via DLP
## When to Use

- When investigating security incidents that require detecting insider data exfiltration via dlp
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Familiarity with security operations concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

Analyze endpoint activity logs, cloud storage access, and email DLP events to detect
data exfiltration patterns using behavioral baselines and statistical anomaly detection.

```python
import pandas as pd

df = pd.read_csv("file_activity.csv", parse_dates=["timestamp"])
# Baseline: average daily upload volume per user
baseline = df.groupby(["user", df["timestamp"].dt.date])["bytes_transferred"].sum()
user_avg = baseline.groupby("user").mean()

# Alert on users exceeding 3x their baseline
today = df[df["timestamp"].dt.date == pd.Timestamp.today().date()]
today_totals = today.groupby("user")["bytes_transferred"].sum()
anomalies = today_totals[today_totals > user_avg * 3]
```

Key indicators:
1. Upload volume exceeding 3x daily baseline
2. Access to files outside normal scope
3. Bulk downloads before resignation
4. Off-hours file access patterns
5. USB/external device usage spikes

## Examples

```python
# Detect off-hours activity
df["hour"] = df["timestamp"].dt.hour
off_hours = df[(df["hour"] < 6) | (df["hour"] > 22)]
suspicious = off_hours.groupby("user").size().sort_values(ascending=False)
```
