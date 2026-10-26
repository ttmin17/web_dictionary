---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-cloud-storage-access-patterns
name: analyzing-cloud-storage-access-patterns
tagline: Detect abnormal access in AWS S3, GCS, and Azure Blob Storage by
  analyzing CloudTrail Data Events, GCS audit logs, and Azure Storage Analytics
  for aft
summary: "- When investigating security incidents that require analyzing cloud
  storage access patterns - When building detection rules or threat hunting
  queries for this domain - When SOC analysts need structured procedures for..."
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
  subpath: skills/analyzing-cloud-storage-access-patterns
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
  path: skills/analyzing-cloud-storage-access-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.322Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-cloud-storage-access-patterns
  description: Detect abnormal access in AWS S3, GCS, and Azure Blob Storage by
    analyzing CloudTrail Data Events, GCS audit logs, and Azure Storage
    Analytics for after-hours bulk downloads, new-IP access, and API-call spikes
    (e.g. GetObject) via statistical baselines and time-series anomaly
    detection. Use when investigating suspected cloud data exfiltration or
    building related detection rules.
  folder_path: skills/analyzing-cloud-storage-access-patterns
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

# Analyzing Cloud Storage Access Patterns
## When to Use

- When investigating security incidents that require analyzing cloud storage access patterns
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Familiarity with cloud security concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

1. Install dependencies: `pip install boto3 requests`
2. Query CloudTrail for S3 Data Events using AWS CLI or boto3.
3. Build access baselines: hourly request volume, per-user object counts, source IP history.
4. Detect anomalies:
   - After-hours access (outside 8am-6pm local time)
   - Bulk downloads: >100 GetObject calls from single principal in 1 hour
   - New source IPs not seen in the prior 30 days
   - ListBucket enumeration spikes (reconnaissance indicator)
5. Generate prioritized findings report.

```bash
python scripts/agent.py --bucket my-sensitive-data --hours-back 24 --output s3_access_report.json
```

## Examples

### CloudTrail S3 Data Event
```json
{"eventName": "GetObject", "requestParameters": {"bucketName": "sensitive-data", "key": "financials/q4.xlsx"},
 "sourceIPAddress": "203.0.113.50", "userIdentity": {"arn": "arn:aws:iam::123456789012:user/analyst"}}
```
