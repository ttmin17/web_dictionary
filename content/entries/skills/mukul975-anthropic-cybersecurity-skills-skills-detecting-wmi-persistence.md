---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-wmi-persistence
name: detecting-wmi-persistence
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
  subpath: skills/detecting-wmi-persistence
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
  path: skills/detecting-wmi-persistence/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-wmi-persistence
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/detecting-wmi-persistence
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

# Detecting WMI Persistence
## When to Use

- When hunting for WMI event subscription persistence (MITRE ATT&CK T1546.003)
- After detecting suspicious WMI activity in endpoint telemetry
- During incident response to identify attacker persistence mechanisms
- When Sysmon alerts trigger on Event IDs 19, 20, or 21
- During purple team exercises testing WMI-based persistence

## Prerequisites

- Sysmon v6.1+ deployed with WMI event logging enabled (Event IDs 19, 20, 21)
- Windows Security Event Log forwarding configured
- SIEM with Sysmon data ingested (Splunk, Elastic, Sentinel)
- PowerShell access for WMI enumeration on endpoints
- Sysinternals Autoruns for manual WMI subscription review

## Workflow

1. **Collect Telemetry**: Parse Sysmon Event IDs 19 (WmiEventFilter), 20 (WmiEventConsumer), 21 (WmiEventConsumerToFilter).
2. **Identify Suspicious Consumers**: Flag CommandLineEventConsumer and ActiveScriptEventConsumer types executing code.
3. **Analyze Event Filters**: Examine WQL queries in EventFilters for process start triggers or timer-based execution.
4. **Correlate Bindings**: Match FilterToConsumerBindings linking suspicious filters to consumers.
5. **Check Persistence Locations**: Query WMI namespaces root\subscription and root\default for active subscriptions.
6. **Validate Findings**: Cross-reference with known-good WMI subscriptions (SCCM, AV products).
7. **Document and Remediate**: Remove malicious subscriptions and update detection rules.

## Key Concepts

| Concept | Description |
|---------|-------------|
| Sysmon Event 19 | WmiEventFilter creation detected |
| Sysmon Event 20 | WmiEventConsumer creation detected |
| Sysmon Event 21 | WmiEventConsumerToFilter binding detected |
| T1546.003 | Event Triggered Execution: WMI Event Subscription |
| CommandLineEventConsumer | Executes system commands when filter triggers |
| ActiveScriptEventConsumer | Runs VBScript/JScript when filter triggers |

## Tools & Systems

| Tool | Purpose |
|------|---------|
| Sysmon | Windows event monitoring for WMI activity |
| WMI Explorer | GUI tool for browsing WMI namespaces |
| Autoruns | Sysinternals tool listing persistence mechanisms |
| PowerShell Get-WMIObject | Enumerate WMI event subscriptions |
| Splunk | SIEM analysis of Sysmon WMI events |
| Velociraptor | Endpoint WMI artifact collection |

## Output Format

```
Hunt ID: TH-WMI-[DATE]-[SEQ]
Technique: T1546.003
Host: [Hostname]
Event Type: [EventFilter|EventConsumer|Binding]
Consumer Type: [CommandLine|ActiveScript]
WQL Query: [Filter query text]
Command: [Executed command or script]
Risk Level: [Critical/High/Medium/Low]
Recommended Action: [Remove subscription, investigate lateral movement]
```
