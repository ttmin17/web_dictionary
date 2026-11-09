---
slug: agno-agi-agno-cookbook-05_agent_os-23_skills-sample_skills-system-info
name: system-info
tagline: Inspect the host operating system, Python runtime, and local files
summary: "- getsysteminfo.py returns the hostname, operating system,
  architecture, Python version and executable, processor, and current UTC time.
  - listdirectory.py lists the direct children of a directory. It accepts one
  opti..."
categories:
  - cloud-infra
tags:
  - agents
  - ai-agents
  - developer-tools
  - python
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: agno-agi/agno
  subpath: cookbook/05_agent_os/23_skills/sample_skills/system-info
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 43113
  last_commit: 2026-11-09T08:28:49Z
  stars_delta_7d: 40
  stars_growth_pct: 0.1
  trending_score: 40.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 42805
    - 42891
    - 43073
    - 43113
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agno-agi/agno
  path: cookbook/05_agent_os/23_skills/sample_skills/system-info/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:16.229Z
  truncated: false
type: agent_skill
skill:
  skill_name: system-info
  description: Inspect the host operating system, Python runtime, and local files
  folder_path: cookbook/05_agent_os/23_skills/sample_skills/system-info
  extra_files:
    - scripts/get_system_info.py
    - scripts/list_directory.py
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agno-agi-agno
---

# System Info Skill
Use this skill when the user asks about the host running the AgentOS process or
needs a directory inventory from that host.

## Available scripts

- `get_system_info.py` returns the hostname, operating system, architecture,
  Python version and executable, processor, and current UTC time.
- `list_directory.py` lists the direct children of a directory. It accepts one
  optional path argument and defaults to the skill directory.

## Execution

Load these instructions before choosing a script. Execute a script through the
skill tool and inspect its structured result:

```python
get_skill_script(
    skill_name="system-info",
    script_path="get_system_info.py",
    execute=True,
)
```

To list a directory:

```python
get_skill_script(
    skill_name="system-info",
    script_path="list_directory.py",
    execute=True,
    args=["."],
)
```

Only use data parsed from `stdout` when `returncode` is `0`. If execution
returns a nonzero code, report `stderr` or the JSON error instead of inferring
the result.
