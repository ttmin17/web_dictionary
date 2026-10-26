---
slug: mukul975-anthropic-cybersecurity-skills-skills-building-threat-hunt-hypothesis-framework
name: building-threat-hunt-hypothesis-framework
tagline: Build a systematic threat-hunt workflow that turns threat intelligence
  and ATT&CK gap analysis into testable hypotheses, then executes and validates
  t
summary: "- When proactively hunting for indicators of building threat hunt
  hypothesis framework in the environment - After threat intelligence indicates
  active campaigns using these techniques - During incident response to sco..."
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
  subpath: skills/building-threat-hunt-hypothesis-framework
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
  path: skills/building-threat-hunt-hypothesis-framework/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.338Z
  truncated: false
type: agent_skill
skill:
  skill_name: building-threat-hunt-hypothesis-framework
  description: Build a systematic threat-hunt workflow that turns threat
    intelligence and ATT&CK gap analysis into testable hypotheses, then executes
    and validates them via EDR/SIEM queries (CrowdStrike, Defender, Splunk,
    Elastic, Sysmon, Velociraptor, Sigma) and documents findings in a
    standardized hunt report. Use when planning or running a proactive threat
    hunt or scoping compromise from an intel- or anomaly-driven lead.
  folder_path: skills/building-threat-hunt-hypothesis-framework
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

# Building Threat Hunt Hypothesis Framework
## When to Use

- When proactively hunting for indicators of building threat hunt hypothesis framework in the environment
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
| TA0001 | Initial Access |
| TA0003 | Persistence |
| TA0008 | Lateral Movement |
| TA0010 | Exfiltration |

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

1. **Scenario 1**: Intelligence-driven hunt based on APT campaign report
2. **Scenario 2**: ATT&CK coverage gap analysis driving hypothesis creation
3. **Scenario 3**: Anomaly-driven hypothesis from UEBA alert investigation
4. **Scenario 4**: Situational awareness hunt based on industry sector threats

## Output Format

```
Hunt ID: TH-BUILDI-[DATE]-[SEQ]
Technique: TA0001
Host: [Hostname]
User: [Account context]
Evidence: [Log entries, process trees, network data]
Risk Level: [Critical/High/Medium/Low]
Confidence: [High/Medium/Low]
Recommended Action: [Containment, investigation, monitoring]
```
