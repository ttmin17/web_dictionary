---
slug: mukul975-anthropic-cybersecurity-skills-skills-extracting-memory-artifacts-with-rekall
name: extracting-memory-artifacts-with-rekall
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
  subpath: skills/extracting-memory-artifacts-with-rekall
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
  path: skills/extracting-memory-artifacts-with-rekall/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: extracting-memory-artifacts-with-rekall
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/extracting-memory-artifacts-with-rekall
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

# Extracting Memory Artifacts with Rekall
## When to Use

- When performing authorized security testing that involves extracting memory artifacts with rekall
- When analyzing malware samples or attack artifacts in a controlled environment
- When conducting red team exercises or penetration testing engagements
- When building detection capabilities based on offensive technique understanding

## Prerequisites

- Familiarity with security operations concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

Use Rekall to analyze memory dumps for signs of compromise including process
injection, hidden processes, and suspicious network connections.

```python
from rekall import session
from rekall import plugins

# Create a Rekall session with a memory image
s = session.Session(
    filename="/path/to/memory.raw",
    autodetect=["rsds"],
    profile_path=["https://github.com/google/rekall-profiles/raw/master"]
)

# List processes
for proc in s.plugins.pslist():
    print(proc)

# Detect injected code
for result in s.plugins.malfind():
    print(result)
```

Key analysis steps:
1. Load memory image and auto-detect profile
2. Run pslist and psscan to find hidden processes
3. Use malfind to detect injected/hollowed code in process VADs
4. Examine network connections with netscan
5. Extract suspicious DLLs and drivers with dlllist/modules

## Examples

```python
from rekall import session
s = session.Session(filename="memory.raw")
# Compare pslist vs psscan for hidden processes
pslist_pids = set(p.pid for p in s.plugins.pslist())
psscan_pids = set(p.pid for p in s.plugins.psscan())
hidden = psscan_pids - pslist_pids
print(f"Hidden PIDs: {hidden}")
```
