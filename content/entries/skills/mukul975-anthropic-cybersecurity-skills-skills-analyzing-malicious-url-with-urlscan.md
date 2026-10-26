---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-malicious-url-with-urlscan
name: analyzing-malicious-url-with-urlscan
tagline: URLScan.io is a free service for scanning and analyzing suspicious
  URLs. It captures screenshots, DOM content, HTTP transactions, JavaScript
  behavior,
summary: "- When investigating security incidents that require analyzing
  malicious url with urlscan - When building detection rules or threat hunting
  queries for this domain - When SOC analysts need structured procedures for
  th..."
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
  subpath: skills/analyzing-malicious-url-with-urlscan
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
  path: skills/analyzing-malicious-url-with-urlscan/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.325Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-malicious-url-with-urlscan
  description: URLScan.io is a free service for scanning and analyzing suspicious
    URLs. It captures screenshots, DOM content, HTTP transactions, JavaScript
    behavior, and network connections of web pages in an isolat
  folder_path: skills/analyzing-malicious-url-with-urlscan
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

# Analyzing Malicious URL with URLScan
## Overview
URLScan.io is a free service for scanning and analyzing suspicious URLs. It captures screenshots, DOM content, HTTP transactions, JavaScript behavior, and network connections of web pages in an isolated environment. This skill covers using URLScan's web interface and API to investigate phishing URLs, credential harvesting pages, and malicious redirects without exposing the analyst's system to risk.


## When to Use

- When investigating security incidents that require analyzing malicious url with urlscan
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites
- URLScan.io account (free tier available, API key for automation)
- Python 3.8+ with requests library
- Understanding of HTTP protocols and web technologies
- Familiarity with phishing URL patterns

## Key Concepts

### URLScan Capabilities
1. **Safe browsing**: Renders URLs in isolated Chromium instance
2. **Screenshot capture**: Visual snapshot of the rendered page
3. **DOM analysis**: Full HTML content after JavaScript execution
4. **Network log**: All HTTP requests made by the page (HAR format)
5. **Certificate analysis**: SSL/TLS certificate details
6. **Technology detection**: Identifies web frameworks and libraries
7. **IP/ASN mapping**: Infrastructure intelligence
8. **Verdict**: Community and automated classification

### Phishing URL Red Flags
- Newly registered domains (< 30 days)
- Free hosting services (Wix, GitHub Pages, Firebase)
- URL shorteners hiding final destination
- Excessive subdomain depth (login.microsoft.com.evil.com)
- Brand name in subdomain or path, not domain
- Non-standard ports
- Data URIs or base64-encoded content
- JavaScript-heavy pages with minimal HTML

## Workflow

### Step 1: Submit URL to URLScan
```
Web: Navigate to https://urlscan.io and submit the suspicious URL
API: POST https://urlscan.io/api/v1/scan/
     Header: API-Key: your-api-key
     Body: {"url": "https://suspicious-url.com", "visibility": "private"}
```

### Step 2: Analyze Results
- Review screenshot for brand impersonation
- Check redirects and final destination URL
- Examine DOM for credential input forms
- Review network requests for data exfiltration endpoints
- Check SSL certificate validity and issuer

### Step 3: Extract IOCs
- Domains and IPs contacted
- URLs in redirect chain
- SHA-256 hashes of page resources
- JavaScript file hashes

### Step 4: Cross-Reference with Threat Intelligence
Use the `scripts/process.py` to automate URL scanning, extract IOCs, and cross-reference with VirusTotal, PhishTank, and Google Safe Browsing.

## Tools & Resources
- **URLScan.io**: https://urlscan.io/
- **URLScan API**: https://urlscan.io/docs/api/
- **VirusTotal URL Scanner**: https://www.virustotal.com/
- **PhishTank**: https://phishtank.org/
- **Google Safe Browsing**: https://transparencyreport.google.com/safe-browsing/search
- **Any.Run**: https://any.run/ (interactive sandbox)
- **Hybrid Analysis**: https://www.hybrid-analysis.com/

## Validation
- Successfully scan a suspicious URL via API
- Extract screenshot and identify brand impersonation
- Document complete redirect chain
- Generate IOC list from scan results
- Cross-reference findings with at least 2 threat intelligence sources
