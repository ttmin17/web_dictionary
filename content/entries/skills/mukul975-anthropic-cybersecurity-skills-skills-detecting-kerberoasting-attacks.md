---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-kerberoasting-attacks
name: detecting-kerberoasting-attacks
tagline: Detect Kerberoasting attacks by monitoring for anomalous Kerberos TGS
  requests (Event ID 4769) targeting service accounts with SPNs, which attackers
  r
summary: "- When proactively hunting for indicators of detecting kerberoasting
  attacks in the environment - After threat intelligence indicates active
  campaigns using these techniques - During incident response to scope
  comprom..."
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
  subpath: skills/detecting-kerberoasting-attacks
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
  path: skills/detecting-kerberoasting-attacks/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-kerberoasting-attacks
  description: Detect Kerberoasting attacks by monitoring for anomalous Kerberos
    TGS requests (Event ID 4769) targeting service accounts with SPNs, which
    attackers request offline to crack service account passwords. Use when
    hunting for MITRE T1558 credential access activity or investigating
    suspected service account password cracking attempts in Active Directory
    Kerberos logs.
  folder_path: skills/detecting-kerberoasting-attacks
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

# Detecting Kerberoasting Attacks
## When to Use

- When proactively hunting for indicators of detecting kerberoasting attacks in the environment
- After threat intelligence indicates active campaigns using these techniques
- During incident response to scope compromise related to these techniques
- When EDR or SIEM alerts trigger on related indicators
- During periodic security assessments and purple team exercises

## Prerequisites

- EDR platform with process and network telemetry (CrowdStrike, MDE, SentinelOne)
- SIEM with relevant log data ingested (Splunk, Elastic, Sentinel)
- Sysmon deployed with comprehensive configuration
- Windows Security Event Log forwarding enabled
- Threat intelligence feeds for IOC correlation

## Workflow

1. **Formulate Hypothesis**: Define a testable hypothesis based on threat intelligence or ATT&CK gap analysis.
2. **Identify Data Sources**: Determine which logs and telemetry are needed to validate or refute the hypothesis.
3. **Execute Queries**: Run detection queries against SIEM and EDR platforms to collect relevant events.
4. **Analyze Results**: Examine query results for anomalies, correlating across multiple data sources.
5. **Validate Findings**: Distinguish true positives from false positives through contextual analysis.
6. **Correlate Activity**: Link findings to broader attack chains and threat actor TTPs.
7. **Document and Report**: Record findings, update detection rules, and recommend response actions.

## Key Concepts

| Concept | Description |
|---------|-------------|
| T1558.003 | Kerberoasting |
| T1558.004 | AS-REP Roasting |
| T1558.001 | Golden Ticket |

## Tools & Systems

| Tool | Purpose |
|------|---------|
| CrowdStrike Falcon | EDR telemetry and threat detection |
| Microsoft Defender for Endpoint | Advanced hunting with KQL |
| Splunk Enterprise | SIEM log analysis with SPL queries |
| Elastic Security | Detection rules and investigation timeline |
| Sysmon | Detailed Windows event monitoring |
| Velociraptor | Endpoint artifact collection and hunting |
| Sigma Rules | Cross-platform detection rule format |

## Common Scenarios

1. **Scenario 1**: Rubeus kerberoast targeting all SPN accounts
2. **Scenario 2**: GetUserSPNs.py from Impacket requesting RC4 tickets
3. **Scenario 3**: Targeted kerberoast against high-privilege service accounts
4. **Scenario 4**: AS-REP roasting accounts without pre-authentication

## Output Format

```
Hunt ID: TH-DETECT-[DATE]-[SEQ]
Technique: T1558.003
Host: [Hostname]
User: [Account context]
Evidence: [Log entries, process trees, network data]
Risk Level: [Critical/High/Medium/Low]
Confidence: [High/Medium/Low]
Recommended Action: [Containment, investigation, monitoring]
```
