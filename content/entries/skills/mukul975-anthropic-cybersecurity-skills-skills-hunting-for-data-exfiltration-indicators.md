---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-data-exfiltration-indicators
name: hunting-for-data-exfiltration-indicators
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
  subpath: skills/hunting-for-data-exfiltration-indicators
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
  path: skills/hunting-for-data-exfiltration-indicators/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-data-exfiltration-indicators
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/hunting-for-data-exfiltration-indicators
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

# Hunting for Data Exfiltration Indicators
## When to Use

- When hunting for data theft in compromised environments
- After detecting unusual outbound data volumes or patterns
- When investigating potential insider threat data theft
- During incident response to determine what data was stolen
- When threat intel indicates data exfiltration campaigns targeting your sector

## Prerequisites

- Network proxy/firewall logs with byte-level data transfer metrics
- DLP solution or CASB with cloud upload visibility
- DNS query logs for DNS exfiltration detection
- Email gateway logs for attachment monitoring
- SIEM with data volume anomaly detection capabilities

## Workflow

1. **Define Exfiltration Channels**: Identify potential channels (HTTP/S uploads, DNS tunneling, email attachments, cloud storage, removable media, encrypted protocols).
2. **Baseline Normal Data Flows**: Establish baseline outbound data transfer volumes per user, host, and destination over a 30-day window.
3. **Detect Volume Anomalies**: Identify hosts or users transferring significantly more data than baseline to external destinations.
4. **Analyze Transfer Destinations**: Check destination domains/IPs against threat intel, identify newly registered domains, personal cloud storage, and foreign infrastructure.
5. **Inspect Protocol Abuse**: Look for DNS tunneling (large/frequent TXT queries), ICMP tunneling, or data hidden in allowed protocols.
6. **Correlate with File Access**: Link exfiltration indicators to file access events on sensitive file shares, databases, or repositories.
7. **Report and Contain**: Document findings with evidence, estimate data exposure, and recommend containment actions.

## Key Concepts

| Concept | Description |
|---------|-------------|
| T1041 | Exfiltration Over C2 Channel |
| T1048 | Exfiltration Over Alternative Protocol |
| T1048.001 | Exfiltration Over Symmetric Encrypted Non-C2 |
| T1048.002 | Exfiltration Over Asymmetric Encrypted Non-C2 |
| T1048.003 | Exfiltration Over Unencrypted/Obfuscated Non-C2 |
| T1567 | Exfiltration Over Web Service |
| T1567.002 | Exfiltration to Cloud Storage |
| T1052 | Exfiltration Over Physical Medium |
| T1029 | Scheduled Transfer |
| T1030 | Data Transfer Size Limits (staging) |
| T1537 | Transfer Data to Cloud Account |
| T1020 | Automated Exfiltration |

## Tools & Systems

| Tool | Purpose |
|------|---------|
| Splunk | SIEM for data volume analysis and SPL queries |
| Zeek | Network metadata for data flow analysis |
| Microsoft Defender for Cloud Apps | CASB for cloud exfiltration |
| Netskope | Cloud DLP and exfiltration detection |
| Suricata | Network IDS for protocol anomaly detection |
| RITA | DNS exfiltration and beacon detection |
| ExtraHop | Network traffic analysis for data flow |

## Common Scenarios

1. **Cloud Storage Exfiltration**: User uploads sensitive documents to personal Google Drive or Dropbox via browser.
2. **DNS Tunneling**: Malware exfiltrates data encoded in DNS subdomain queries to attacker-controlled nameserver.
3. **HTTPS Upload**: Compromised system POSTs large data blobs to C2 server over encrypted HTTPS.
4. **Email Attachment Exfiltration**: Insider forwards sensitive documents to personal email accounts.
5. **Staging and Compression**: Adversary stages data in compressed archives before slow exfiltration to avoid detection.

## Output Format

```
Hunt ID: TH-EXFIL-[DATE]-[SEQ]
Exfiltration Channel: [HTTP/DNS/Email/Cloud/USB]
Source: [Host/User]
Destination: [Domain/IP/Service]
Data Volume: [Bytes/MB/GB]
Time Period: [Start - End]
Protocol: [HTTPS/DNS/SMTP/SMB]
Files Involved: [Count/Types]
Risk Level: [Critical/High/Medium/Low]
Confidence: [High/Medium/Low]
```
