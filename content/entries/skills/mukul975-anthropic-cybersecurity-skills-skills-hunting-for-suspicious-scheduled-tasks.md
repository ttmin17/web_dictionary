---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-suspicious-scheduled-tasks
name: hunting-for-suspicious-scheduled-tasks
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
  subpath: skills/hunting-for-suspicious-scheduled-tasks
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
  path: skills/hunting-for-suspicious-scheduled-tasks/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-suspicious-scheduled-tasks
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/hunting-for-suspicious-scheduled-tasks
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

# Hunting for Suspicious Scheduled Tasks
## When to Use

- When proactively hunting for persistence mechanisms in Windows environments
- After detecting schtasks.exe or at.exe usage in process creation logs
- When investigating malware that survives reboots and user logoffs
- During incident response to enumerate all persistence on compromised systems
- When Windows Security Event ID 4698 (Scheduled Task Created) fires for unusual tasks

## Prerequisites

- Windows Security Event ID 4698/4699/4702 (Task Created/Deleted/Updated)
- Sysmon Event ID 1 for schtasks.exe process creation with command lines
- Windows Task Scheduler operational log (Microsoft-Windows-TaskScheduler/Operational)
- PowerShell logging for Register-ScheduledTask cmdlet usage
- Access to Task Scheduler XML definitions on endpoints

## Workflow

1. **Enumerate All Scheduled Tasks**: Collect complete task inventory from target systems using `schtasks /query /fo CSV /v` or `Get-ScheduledTask` PowerShell cmdlet.
2. **Monitor Task Creation Events**: Track Event ID 4698 for new task creation, correlating with the creating process and user account context.
3. **Analyze Task Actions**: Examine what each task executes. Flag tasks running scripts (PowerShell, cmd, wscript), binaries from user-writable paths (TEMP, AppData, Downloads), or encoded/obfuscated commands.
4. **Check Task Triggers**: Review trigger conditions. Tasks triggered by system startup, user logon, or short intervals (1-5 minutes) warrant investigation.
5. **Identify Hidden or Disguised Tasks**: Hunt for tasks with names mimicking legitimate Windows tasks, tasks with Security Descriptor modifications hiding them from standard enumeration, or tasks stored in non-standard registry locations.
6. **Correlate with Process Execution**: Match scheduled task execution events with process creation logs to confirm what actually runs.
7. **Baseline and Diff**: Compare current task inventory against known-good baselines to identify new, modified, or unexpected tasks.

## Detection Queries

### Splunk -- Scheduled Task Creation
```spl
index=wineventlog EventCode=4698
| spath output=TaskName path=EventData.TaskName
| spath output=TaskContent path=EventData.TaskContent
| where NOT match(TaskName, "(?i)(\\\\Microsoft\\\\|\\\\Windows\\\\)")
| table _time Computer SubjectUserName TaskName TaskContent
```

### Splunk -- Schtasks.exe Suspicious Usage
```spl
index=sysmon EventCode=1 Image="*\\schtasks.exe"
| where match(CommandLine, "(?i)/create")
| where match(CommandLine, "(?i)(powershell|cmd|wscript|cscript|mshta|rundll32|regsvr32|http|https|\\\\temp\\\\|\\\\appdata\\\\)")
| table _time Computer User CommandLine ParentImage
```

### KQL -- Microsoft Sentinel
```kql
SecurityEvent
| where EventID == 4698
| extend TaskName = tostring(EventData.TaskName)
| extend TaskContent = tostring(EventData.TaskContent)
| where TaskContent has_any ("powershell", "cmd.exe", "wscript", "http://", "https://", "\\Temp\\", "\\AppData\\")
| project TimeGenerated, Computer, Account, TaskName, TaskContent
```

## Common Scenarios

1. **Cobalt Strike Persistence**: Creates scheduled tasks via schtasks.exe to execute PowerShell download cradles at user logon intervals.
2. **Ransomware Staging**: Task created to run encryption payload at a future time, often during off-hours for maximum impact.
3. **Hidden Task via SD Modification**: Attacker modifies Security Descriptor of scheduled task to hide it from normal enumeration while maintaining execution.
4. **COM Handler Abuse**: Task uses COM handler rather than direct executable path, making action inspection more complex.
5. **Lateral Movement via Tasks**: Remote scheduled task creation using `schtasks /create /s REMOTE_HOST` for execution on other systems.

## Output Format

```
Hunt ID: TH-SCHTASK-[DATE]-[SEQ]
Host: [Hostname]
Task Name: [Full task path]
Action: [Command/Script executed]
Trigger: [Startup/Logon/Timer/Event]
Created By: [User account]
Created From: [Local/Remote]
Creation Time: [Timestamp]
Run As: [Execution account]
Risk Level: [Critical/High/Medium/Low]
```
