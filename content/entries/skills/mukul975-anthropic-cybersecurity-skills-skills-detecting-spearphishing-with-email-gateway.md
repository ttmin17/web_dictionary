---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-spearphishing-with-email-gateway
name: detecting-spearphishing-with-email-gateway
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
  subpath: skills/detecting-spearphishing-with-email-gateway
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
  path: skills/detecting-spearphishing-with-email-gateway/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-spearphishing-with-email-gateway
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/detecting-spearphishing-with-email-gateway
  extra_files:
    - LICENSE
    - assets/template.md
    - references/api-reference.md
    - references/standards.md
    - references/workflows.md
    - scripts/agent.py
    - scripts/process.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Detecting Spearphishing with Email Gateway
## Overview
Spearphishing targets specific individuals using personalized, researched content that bypasses generic spam filters. Email security gateways (SEGs) like Microsoft Defender for Office 365, Proofpoint, Mimecast, and Barracuda provide advanced detection capabilities including behavioral analysis, URL detonation, attachment sandboxing, and impersonation detection. This skill covers configuring these gateways to detect and block targeted phishing attacks.


## When to Use

- When investigating security incidents that require detecting spearphishing with email gateway
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites
- Access to email security gateway admin console
- Understanding of email flow architecture (MX records, transport rules)
- Familiarity with SPF/DKIM/DMARC authentication
- Knowledge of common spearphishing techniques and pretexts

## Key Concepts

### Spearphishing Characteristics
- **Targeted recipients**: Specific individuals, often executives or finance staff
- **Researched pretexts**: References to real projects, colleagues, or events
- **Impersonation**: Spoofs trusted senders (CEO, vendor, partner)
- **Low volume**: Few emails to avoid pattern-based detection
- **Urgent tone**: Creates pressure to act quickly

### Gateway Detection Layers
1. **Reputation filtering**: IP/domain/URL reputation scoring
2. **Authentication checks**: SPF, DKIM, DMARC validation
3. **Content analysis**: NLP-based analysis of email body
4. **Impersonation detection**: Display name and domain similarity matching
5. **URL analysis**: Real-time URL detonation and redirect following
6. **Attachment sandboxing**: Behavioral analysis of attachments in isolated environments
7. **Behavioral analytics**: Anomaly detection in communication patterns

## Workflow

### Step 1: Configure Impersonation Protection
```
Microsoft Defender for Office 365:
  Security > Anti-phishing policies > Impersonation settings
  - Enable user impersonation protection for VIPs
  - Enable domain impersonation protection
  - Add protected users (CEO, CFO, HR Director)
  - Set action: Quarantine message

Proofpoint:
  Email Protection > Impostor Classifier
  - Enable display name spoofing detection
  - Configure lookalike domain detection
  - Set Impostor threshold sensitivity
```

### Step 2: Configure URL Protection
- Enable Safe Links / URL rewriting
- Enable time-of-click URL detonation
- Block newly registered domains (< 30 days)
- Enable URL redirect chain following

### Step 3: Configure Attachment Sandboxing
- Enable Safe Attachments / attachment sandboxing
- Configure dynamic delivery (deliver body, hold attachments)
- Set sandbox detonation timeout to 60+ seconds
- Block macro-enabled Office documents from external senders

### Step 4: Create Custom Detection Rules
Use the `scripts/process.py` to analyze email gateway logs, identify spearphishing patterns, and generate custom detection rules.

### Step 5: Configure Alert and Response Actions
- Real-time alerts for impersonation attempts
- Automatic quarantine for high-confidence detections
- User notification with safety tips
- Integration with SIEM for correlation

## Tools & Resources
- **Microsoft Defender for Office 365**: https://security.microsoft.com
- **Proofpoint Email Protection**: https://www.proofpoint.com/us/products/email-security
- **Mimecast Email Security**: https://www.mimecast.com/products/email-security/
- **Barracuda Email Protection**: https://www.barracuda.com/products/email-protection

## Validation
- Impersonation protection correctly identifies spoofed VIP display names
- URL detonation catches malicious links in test phishing emails
- Attachment sandboxing detects weaponized documents
- Custom rules trigger on known spearphishing patterns
- SIEM integration receives gateway alerts
