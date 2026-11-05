---
slug: humanlayer-humanlayer-apps-riptide-humanlayer-claude-plugin-skills-orchestrate
name: orchestrate
tagline: Toolbox for driving HumanLayer from the CLI - log in, pick a host,
  launch tasks in their own worktrees, launch sessions, list tasks and their
  PRs, and
summary: Find the job, read its reference, run the commands, and report the
  result in a line or two.
categories:
  - other
tags:
  - agents
  - amp
  - claude-code
  - codex
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: humanlayer/humanlayer
  subpath: apps/riptide-humanlayer-claude-plugin/skills/orchestrate
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 12810
  last_commit: 2026-11-02T23:41:54Z
  stars_delta_7d: 282
  stars_growth_pct: 2.3
  trending_score: 288.35
  rank_current: 67
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12528
    - 12810
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: humanlayer/humanlayer
  path: apps/riptide-humanlayer-claude-plugin/skills/orchestrate/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:51.737Z
  truncated: false
type: agent_skill
skill:
  skill_name: orchestrate
  description: Toolbox for driving HumanLayer from the CLI - log in, pick a host,
    launch tasks in their own worktrees, launch sessions, list tasks and their
    PRs, and copy, move, or upload task artifacts.
  folder_path: apps/riptide-humanlayer-claude-plugin/skills/orchestrate
  extra_files:
    - references/auto-advance.md
    - references/hosts.md
    - references/launch-session.md
    - references/launch-task.md
    - references/list-tasks.md
    - references/login.md
    - references/managing-artifacts-and-files.md
    - references/task-prs.md
  pack_total_skills: 22
  is_pack_primary: true
  clients:
    - claude-code
  pack_slug: humanlayer-humanlayer
---

Find the job, read its reference, run the commands, and report the result in a line or two.

| Job | Reference |
| --- | --- |
| Log in | [login.md](https://github.com/humanlayer/humanlayer/blob/main/apps/riptide-humanlayer-claude-plugin/skills/orchestrate/references/login.md) |
| Find a host | [hosts.md](https://github.com/humanlayer/humanlayer/blob/main/apps/riptide-humanlayer-claude-plugin/skills/orchestrate/references/hosts.md) |
| Launch a task | [launch-task.md](https://github.com/humanlayer/humanlayer/blob/main/apps/riptide-humanlayer-claude-plugin/skills/orchestrate/references/launch-task.md) |
| Turn auto-advance between phases on or off | [auto-advance.md](https://github.com/humanlayer/humanlayer/blob/main/apps/riptide-humanlayer-claude-plugin/skills/orchestrate/references/auto-advance.md) |
| Launch a session | [launch-session.md](https://github.com/humanlayer/humanlayer/blob/main/apps/riptide-humanlayer-claude-plugin/skills/orchestrate/references/launch-session.md) |
| List tasks and statuses | [list-tasks.md](https://github.com/humanlayer/humanlayer/blob/main/apps/riptide-humanlayer-claude-plugin/skills/orchestrate/references/list-tasks.md) |
| Find a task's PR | [task-prs.md](https://github.com/humanlayer/humanlayer/blob/main/apps/riptide-humanlayer-claude-plugin/skills/orchestrate/references/task-prs.md) |
| Upload, copy, move, or delete artifacts | [managing-artifacts-and-files.md](https://github.com/humanlayer/humanlayer/blob/main/apps/riptide-humanlayer-claude-plugin/skills/orchestrate/references/managing-artifacts-and-files.md) |

Rules:

- Every task gets its own worktree. Use an existing folder only when the user asks.
- Use one environment flag everywhere: none for production, `--beta`, or `--dev`. The references use `--dev`.
- On `Not logged in`, follow login.md and retry.
- Save large results to a file before reading them with `jq`.
- On an unknown command or flag, run `humanlayer --dev api <group> <command> --help`.
