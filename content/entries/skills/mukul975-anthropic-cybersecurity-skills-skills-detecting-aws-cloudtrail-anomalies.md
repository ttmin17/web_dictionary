---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-aws-cloudtrail-anomalies
name: detecting-aws-cloudtrail-anomalies
tagline: Detect unusual API call patterns in AWS CloudTrail logs using boto3,
  statistical baselining, and behavioral analysis to identify credential
  compromise
summary: AWS CloudTrail records API calls across AWS services. This skill covers
  querying CloudTrail events with boto3's lookupevents API, building statistical
  baselines of normal API activity, detecting anomalies such as unus...
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
  subpath: skills/detecting-aws-cloudtrail-anomalies
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
  path: skills/detecting-aws-cloudtrail-anomalies/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.350Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-aws-cloudtrail-anomalies
  description: Detect unusual API call patterns in AWS CloudTrail logs using
    boto3, statistical baselining, and behavioral analysis to identify
    credential compromise, privilege escalation, and unauthorized resource
    access.
  folder_path: skills/detecting-aws-cloudtrail-anomalies
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

# Detecting AWS CloudTrail Anomalies
## Overview

AWS CloudTrail records API calls across AWS services. This skill covers querying CloudTrail events with boto3's `lookup_events` API, building statistical baselines of normal API activity, detecting anomalies such as unusual event sources, geographic anomalies, high-frequency API calls, and first-time API usage patterns that indicate compromised credentials or insider threats.


## When to Use

- When investigating security incidents that require detecting aws cloudtrail anomalies
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Python 3.9+ with `boto3` library
- AWS credentials with CloudTrail read permissions (cloudtrail:LookupEvents)
- Understanding of AWS IAM and common API patterns
- CloudTrail enabled in target AWS account (management events at minimum)

## Steps

### Step 1: Query CloudTrail Events
Use boto3 CloudTrail client's lookup_events to retrieve recent API activity with pagination.

### Step 2: Build Activity Baseline
Aggregate events by user, source IP, event source, and event name to establish normal behavior patterns.

### Step 3: Detect Anomalies
Flag unusual patterns: new event sources per user, first-time API calls, geographic IP changes, high error rates, and sensitive API usage (IAM, KMS, S3 policy changes).

### Step 4: Generate Detection Report
Produce a JSON report with anomaly scores, top suspicious users, and recommended investigation actions.

## Expected Output

JSON report with event statistics, baseline deviations, anomalous users/IPs, sensitive API calls, and error rate analysis.
