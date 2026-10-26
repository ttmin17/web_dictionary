---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-tls-certificate-transparency-logs
name: analyzing-tls-certificate-transparency-logs
tagline: Queries Certificate Transparency logs via crt.sh and pycrtsh to detect
  phishing domains, unauthorized certificate issuance, and shadow IT. Monitors
  ne
summary: "- When investigating security incidents that require analyzing tls
  certificate transparency logs - When building detection rules or threat
  hunting queries for this domain - When SOC analysts need structured
  procedures..."
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
  subpath: skills/analyzing-tls-certificate-transparency-logs
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
  path: skills/analyzing-tls-certificate-transparency-logs/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.329Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-tls-certificate-transparency-logs
  description: >
    Queries Certificate Transparency logs via crt.sh and pycrtsh to detect
    phishing domains, unauthorized certificate issuance, and shadow IT. Monitors
    newly issued certificates for typosquatting and brand impersonation using
    Levenshtein distance. Use for proactive phishing domain detection and
    certificate monitoring.
  folder_path: skills/analyzing-tls-certificate-transparency-logs
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

# Analyzing TLS Certificate Transparency Logs
## When to Use

- When investigating security incidents that require analyzing tls certificate transparency logs
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Familiarity with security operations concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

Query crt.sh Certificate Transparency database to find certificates issued for
domains similar to your organization's brand, detecting phishing infrastructure.

```python
from pycrtsh import Crtsh

c = Crtsh()
# Search for certificates matching a domain
certs = c.search("example.com")
for cert in certs:
    print(cert["id"], cert["name_value"])

# Get full certificate details
details = c.get(certs[0]["id"], type="id")
```

Key analysis steps:
1. Query crt.sh for all certificates matching your domain pattern
2. Identify certificates with typosquatting variations (Levenshtein distance)
3. Flag certificates from unexpected CAs
4. Monitor for wildcard certificates on suspicious subdomains
5. Cross-reference with known phishing infrastructure

## Examples

```python
from pycrtsh import Crtsh
c = Crtsh()
certs = c.search("%.example.com")
for cert in certs:
    print(f"Issuer: {cert.get('issuer_name')}, Domain: {cert.get('name_value')}")
```
