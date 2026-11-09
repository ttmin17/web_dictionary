---
slug: davepoon-buildwithclaude-plugins-agents-uc-taskmanager-skills-work-status
name: work-status
tagline: Shows WORK progress and TASK status. Use when the user asks about WORK
  list, WORK progress, TASK status, or pipeline status (e.g., "WORK list",
  "WORK-
summary: 1. Read works/WORK-LIST.md for the master index of all WORKs 2. For a
  specific WORK, read works/WORK-NN/PROGRESS.md for TASK-level progress 3. For a
  specific TASK, read works/WORK-NN/TASK-NNresult.md for completion de...
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 92
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/agents-uc-taskmanager/skills/work-status
  official_vendor: false
  license: MIT
signals:
  stars: 3733
  last_commit: 2026-11-08T06:05:38Z
  stars_delta_7d: 8
  stars_growth_pct: 0.2
  trending_score: 8.02
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3650
    - 3678
    - 3725
    - 3733
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/agents-uc-taskmanager/skills/work-status/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:26:59.194Z
  truncated: false
type: agent_skill
skill:
  skill_name: work-status
  description: Shows WORK progress and TASK status. Use when the user asks about
    WORK list, WORK progress, TASK status, or pipeline status (e.g., "WORK
    list", "WORK-01 progress", "show status").
  folder_path: plugins/agents-uc-taskmanager/skills/work-status
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# WORK Status
Check and report the current status of WORKs and TASKs.

## How to Check

1. Read `works/WORK-LIST.md` for the master index of all WORKs
2. For a specific WORK, read `works/WORK-NN/PROGRESS.md` for TASK-level progress
3. For a specific TASK, read `works/WORK-NN/TASK-NN_result.md` for completion details

## Status Values

| Status | Meaning |
|--------|---------|
| `IN_PROGRESS` | WORK created, TASKs being executed |
| `DONE` | All TASKs committed — committer auto-sets on last TASK |
| `COMPLETED` | Archived to `_COMPLETED/` — set during push |

## Display Format

```
WORK Status
  WORK-01: User Authentication    ✅ 5/5 completed
  WORK-02: Payment Integration    🔄 2/4 in progress
  WORK-03: Admin Dashboard        ⬜ 0/6 pending
```

## Arguments

Query: $ARGUMENTS
