---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-email-account-compromise
name: detecting-email-account-compromise
tagline: Detect compromised O365 and Google Workspace email accounts by
  analyzing Unified Audit Logs and Azure AD sign-in logs for impossible travel,
  inbox rul
summary: Email account compromise (EAC) is a prevalent attack vector where
  adversaries gain unauthorized access to mailboxes to exfiltrate sensitive
  data, conduct business email compromise (BEC), or establish persistence
  throu...
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
  subpath: skills/detecting-email-account-compromise
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
  path: skills/detecting-email-account-compromise/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.354Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-email-account-compromise
  description: Detect compromised O365 and Google Workspace email accounts by
    analyzing Unified Audit Logs and Azure AD sign-in logs for impossible
    travel, inbox rule creation/deletion (Set-InboxRule, New-InboxRule),
    external mail forwarding rules, and unusual Microsoft Graph API access or
    OAuth token use. Use when investigating suspected business email compromise
    (BEC), account takeover, or mailbox persistence via malicious inbox rules.
  folder_path: skills/detecting-email-account-compromise
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

# Detecting Email Account Compromise
## Overview

Email account compromise (EAC) is a prevalent attack vector where adversaries gain unauthorized access to mailboxes to exfiltrate sensitive data, conduct business email compromise (BEC), or establish persistence through inbox rule manipulation. Attackers commonly create forwarding rules to siphon emails, delete rules to hide evidence, or use OAuth tokens for persistent access. Detection relies on analyzing Microsoft 365 Unified Audit Logs, Azure AD sign-in logs for impossible travel or suspicious locations, inbox rule creation events (Set-InboxRule, New-InboxRule), and Microsoft Graph API access patterns. Key indicators include forwarding rules to external addresses, rules that delete or move messages matching keywords like "invoice" or "payment", and sign-ins from unusual user agents such as python-requests.


## When to Use

- When investigating security incidents that require detecting email account compromise
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Microsoft 365 with Unified Audit Logging enabled
- Azure AD P1/P2 for risk detection APIs
- Python 3.9+ with `requests`, `msal` libraries
- Microsoft Graph API application registration with Mail.Read, AuditLog.Read.All permissions
- Understanding of OAuth2 client credential flows

## Steps

1. Export audit logs or connect to Microsoft Graph API using MSAL authentication
2. Query inbox rules for all monitored mailboxes via `/users/{id}/mailFolders/inbox/messageRules`
3. Analyze rules for external forwarding (ForwardTo, RedirectTo external addresses)
4. Detect suspicious rule patterns: deletion rules, keyword-matching rules targeting financial terms
5. Query sign-in logs via `/auditLogs/signIns` for unusual locations and impossible travel
6. Check for suspicious user agent strings (python-requests, PowerShell, curl)
7. Identify OAuth application consent grants for suspicious third-party apps
8. Correlate findings across users to detect campaign-level compromise
9. Generate compromise indicators report with severity scores

## Expected Output

A JSON report listing compromised or suspicious accounts, malicious inbox rules detected, impossible travel events, suspicious OAuth grants, and recommended containment actions with severity ratings.
