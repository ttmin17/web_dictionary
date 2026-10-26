---
slug: ruvnet-ruflo-plugins-ruflo-loop-workers-skills-cron-schedule
name: cron-schedule
tagline: Schedule persistent background workers via CronCreate
summary: "Use CronCreate for a worker that should fire on a clock while this
  Claude Code session is open:"
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-loop-workers/skills/cron-schedule
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-loop-workers/skills/cron-schedule/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: cron-schedule
  description: Schedule persistent background workers via CronCreate
  folder_path: plugins/ruflo-loop-workers/skills/cron-schedule
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Use `CronCreate` for a worker that should fire on a clock while this Claude Code session is open:

`CronCreate({ cron: "*/15 * * * *", prompt: "Dispatch the audit worker with mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch({ trigger: \"audit\" }) and report anything critical", recurring: true })`

The parameters are `cron` (five-field expression), `prompt` and `recurring`. A `schedule:` field does not exist. These jobs live in the session: they stop when you close it, and recurring jobs expire on their own after 7 days. Cancel one sooner with `CronDelete` (find its id with `CronList`). For a worker that must keep running after the session ends, use `/schedule` (cloud routines) or an OS scheduler (cron, systemd timer) that calls `npx @claude-flow/cli@latest hooks worker dispatch --trigger audit`.

### Recommended Schedules

| Worker | Cron | Description |
|--------|------|-------------|
| audit | `*/15 * * * *` | Security scanning |
| optimize | `*/30 * * * *` | Performance optimization |
| consolidate | `0 * * * *` | Memory consolidation |
| map | `*/30 * * * *` | Codebase mapping |
| testgaps | `*/15 * * * *` | Test coverage analysis |
| document | `0 */2 * * *` | API documentation |

### When to Use Cron vs Loop

- **`/loop`**: In-session, self-pacing. Use for active development.
- **CronCreate**: In-session, fixed clock, auto-expires after 7 days. Use for regular checks while you work.
- **`/schedule` or an OS scheduler**: Survives the session. Use for CI-style monitoring.
