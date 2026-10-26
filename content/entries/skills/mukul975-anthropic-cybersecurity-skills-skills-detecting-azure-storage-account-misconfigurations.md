---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-azure-storage-account-misconfigurations
name: detecting-azure-storage-account-misconfigurations
tagline: "Audit Azure Blob and ADLS storage accounts for public access exposure,
  weak or long-lived SAS tokens, missing encryption at rest, disabled HTTPS-only
  "
summary: Azure Storage accounts are a frequent target for attackers due to
  misconfigured public access, long-lived SAS tokens, missing encryption, and
  outdated TLS versions. This skill uses the azure-mgmt-storage Python SDK wi...
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
  subpath: skills/detecting-azure-storage-account-misconfigurations
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
  path: skills/detecting-azure-storage-account-misconfigurations/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.351Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-azure-storage-account-misconfigurations
  description: Audit Azure Blob and ADLS storage accounts for public access
    exposure, weak or long-lived SAS tokens, missing encryption at rest,
    disabled HTTPS-only traffic, and outdated TLS versions, using the
    azure-mgmt-storage Python SDK to generate a risk-scored report. Use when
    assessing an Azure subscription's storage accounts for misconfiguration,
    building cloud security posture checks, or investigating a suspected data
    exposure via public blob access.
  folder_path: skills/detecting-azure-storage-account-misconfigurations
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

# Detecting Azure Storage Account Misconfigurations
## Overview

Azure Storage accounts are a frequent target for attackers due to misconfigured public access, long-lived SAS tokens, missing encryption, and outdated TLS versions. This skill uses the azure-mgmt-storage Python SDK with StorageManagementClient to enumerate all storage accounts in a subscription, inspect their security properties, list blob containers for public access settings, and generate a risk-scored audit report identifying critical misconfigurations.


## When to Use

- When investigating security incidents that require detecting azure storage account misconfigurations
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Python 3.9+ with `azure-mgmt-storage`, `azure-identity`
- Azure service principal with Reader role on target subscription
- Environment variables: AZURE_CLIENT_ID, AZURE_TENANT_ID, AZURE_CLIENT_SECRET, AZURE_SUBSCRIPTION_ID

## Key Detection Areas

1. **Public blob access** — `allow_blob_public_access` enabled on storage account or individual containers set to Blob/Container access level
2. **HTTPS enforcement** — `enable_https_traffic_only` disabled, allowing unencrypted HTTP traffic
3. **Minimum TLS version** — accounts accepting TLS 1.0 or TLS 1.1 instead of minimum TLS 1.2
4. **Encryption at rest** — storage service encryption not enabled or missing customer-managed keys
5. **Network rules** — default action set to Allow instead of Deny, exposing storage to all networks
6. **SAS token risks** — account-level SAS with overly broad permissions or excessive lifetime

## Output

JSON report with per-account findings, severity ratings (Critical/High/Medium/Low), and remediation recommendations aligned with CIS Azure Benchmark controls.
