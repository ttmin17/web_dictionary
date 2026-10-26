---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-persistence-mechanisms-in-linux
name: analyzing-persistence-mechanisms-in-linux
tagline: Scan Linux systems for persistence mechanisms including crontab/systemd
  entries, LD_PRELOAD injection, shell profile modifications (.bashrc, .profile)
summary: Adversaries establish persistence on Linux systems through crontab
  jobs, systemd service/timer units, LDPRELOAD library injection, shell profile
  modifications (.bashrc, .profile), SSH authorizedkeys backdoors, and ini...
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
  subpath: skills/analyzing-persistence-mechanisms-in-linux
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
  path: skills/analyzing-persistence-mechanisms-in-linux/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.327Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-persistence-mechanisms-in-linux
  description: Scan Linux systems for persistence mechanisms including
    crontab/systemd entries, LD_PRELOAD injection, shell profile modifications
    (.bashrc, .profile), and SSH authorized_keys backdoors, then correlate
    findings with auditd logs into an installation timeline. Use during incident
    response or threat hunting to detect or confirm how an adversary maintained
    access to a compromised Linux host.
  folder_path: skills/analyzing-persistence-mechanisms-in-linux
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

# Analyzing Persistence Mechanisms in Linux
## Overview

Adversaries establish persistence on Linux systems through crontab jobs, systemd service/timer units, LD_PRELOAD library injection, shell profile modifications (.bashrc, .profile), SSH authorized_keys backdoors, and init script manipulation. This skill scans for all known persistence vectors, checks file timestamps and integrity, and correlates findings with auditd logs to build a timeline of persistence installation.


## When to Use

- When investigating security incidents that require analyzing persistence mechanisms in linux
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Root or sudo access on target Linux system (or forensic image)
- auditd configured with file watch rules on persistence paths
- Python 3.8+ with standard library (os, subprocess, json)
- Optional: OSSEC/Wazuh agent for file integrity monitoring alerts

## Steps

1. **Scan Crontab Entries** — Enumerate all user crontabs, /etc/cron.d/, /etc/cron.daily/, and anacron jobs for suspicious commands
2. **Audit Systemd Units** — Check /etc/systemd/system/ and ~/.config/systemd/user/ for non-package-managed service and timer units
3. **Detect LD_PRELOAD Hijacking** — Check /etc/ld.so.preload and LD_PRELOAD environment variable for injected shared libraries
4. **Inspect Shell Profiles** — Scan .bashrc, .bash_profile, .profile, /etc/profile.d/ for injected commands or reverse shells
5. **Check SSH Authorized Keys** — Audit all authorized_keys files for unauthorized public keys with command restrictions
6. **Correlate Auditd Logs** — Search auditd logs for file modification events on persistence paths to build an installation timeline
7. **Generate Persistence Report** — Produce a risk-scored report of all discovered persistence mechanisms

## Expected Output

- JSON report of all persistence mechanisms found with risk scores
- Timeline of persistence installation from auditd correlation
- MITRE ATT&CK technique mapping (T1053, T1543, T1574, T1546)
- Remediation commands for each detected persistence mechanism
