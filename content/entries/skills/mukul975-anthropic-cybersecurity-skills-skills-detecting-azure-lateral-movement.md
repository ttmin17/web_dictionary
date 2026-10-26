---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-azure-lateral-movement
name: detecting-azure-lateral-movement
tagline: Detect lateral movement in Azure AD/Entra ID environments using
  Microsoft Graph API audit logs, Azure Sentinel KQL hunting queries, and
  sign-in anomal
summary: Lateral movement in Azure AD/Entra ID differs from on-premises
  environments. Attackers pivot through OAuth application consent grants,
  service principal abuse, cross-tenant access policies, and stolen refresh
  tokens r...
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
  subpath: skills/detecting-azure-lateral-movement
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
  path: skills/detecting-azure-lateral-movement/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.350Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-azure-lateral-movement
  description: Detect lateral movement in Azure AD/Entra ID environments using
    Microsoft Graph API audit logs, Azure Sentinel KQL hunting queries, and
    sign-in anomaly correlation to identify privilege escalation, token theft,
    and cross-tenant pivoting.
  folder_path: skills/detecting-azure-lateral-movement
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

# Detecting Azure Lateral Movement
## Overview

Lateral movement in Azure AD/Entra ID differs from on-premises environments. Attackers pivot through OAuth application consent grants, service principal abuse, cross-tenant access policies, and stolen refresh tokens rather than SMB/RDP connections. Detection requires correlating Microsoft Graph API audit logs, Azure AD sign-in logs, and Entra ID protection risk events using KQL queries in Microsoft Sentinel. This skill covers building detection analytics for common Azure lateral movement techniques including application impersonation, mailbox delegation abuse, and conditional access policy bypasses.


## When to Use

- When investigating security incidents that require detecting azure lateral movement
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Azure subscription with Microsoft Sentinel workspace configured
- Azure AD P2 or Entra ID P2 license for risk-based sign-in detection
- Microsoft Graph API permissions: AuditLog.Read.All, Directory.Read.All, SecurityEvents.Read.All
- Log Analytics workspace ingesting AuditLogs, SigninLogs, and AADServicePrincipalSignInLogs
- Familiarity with KQL (Kusto Query Language)

## Steps

### Step 1: Configure Log Ingestion

Enable diagnostic settings to stream Azure AD logs to Log Analytics:
- Sign-in logs (interactive and non-interactive)
- Audit logs (directory changes, app consent)
- Service principal sign-in logs
- Provisioning logs
- Risky users and risk detections

### Step 2: Build Detection Queries

Create KQL analytics rules in Sentinel for:
- Unusual service principal credential additions
- OAuth application consent grants to unknown apps
- Cross-tenant sign-ins from new tenants
- Token replay from different IP/user-agent combinations
- Mailbox delegation changes (FullAccess, SendAs)

### Step 3: Correlate Events

Chain multiple low-confidence indicators into high-confidence lateral movement detections by correlating sign-in anomalies with directory changes within time windows.

### Step 4: Automate Response

Create Sentinel playbooks (Logic Apps) to automatically revoke suspicious OAuth grants, disable compromised service principals, and enforce step-up authentication.

## Expected Output

JSON report containing detected lateral movement indicators, correlated event chains, affected identities, and recommended containment actions with MITRE ATT&CK technique mappings.
