---
slug: harnessmd-munder-difflin-resources-skills-last7days
name: last7Days
tagline: |-
  Resolve "last7Days" to a concrete ISO date range relative to your run time —
  a rolling 7-day window ending today. Returns inclusive civil dates plus e
summary: "Get the concrete date range for a rolling 7-day window ending today by
  running the bundled resolver:"
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agents
  - ai-agents
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: HarnessMD/munder-difflin
  subpath: resources/skills/last7Days
  official_vendor: false
  license: MIT
signals:
  stars: 9442
  last_commit: 2026-11-09T04:16:53Z
  stars_delta_7d: 64
  stars_growth_pct: 0.7
  trending_score: 64.44
  velocity_source: snapshot_delta
  sparkline_4w:
    - 8896
    - 9069
    - 9378
    - 9442
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: HarnessMD/munder-difflin
  path: resources/skills/last7Days/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:48.484Z
  truncated: false
type: agent_skill
skill:
  skill_name: last7Days
  description: >
    Resolve "last7Days" to a concrete ISO date range relative to your run time —

    a rolling 7-day window ending today. Returns inclusive civil dates plus
    exact UTC instants so you have

    temporal context without computing dates by hand. Read-only: no writes, no

    network. Use before a "last 7 days" / trailing-week task.
  folder_path: resources/skills/last7Days
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: harnessmd-munder-difflin
---

## /last7Days

Get the concrete date range for **a rolling 7-day window ending today** by running the bundled resolver:

```bash
node "$AGENT_DIR/.claude/skills/temporal/when.mjs" last7Days
```

It prints a human-readable line plus a JSON record:

- `start` / `end` — inclusive civil dates (`YYYY-MM-DD`) in your local timezone
- `startUtc` / `endExclusiveUtc` — the same window as a half-open `[start, end)`
  range of exact UTC instants, for timestamp-based queries
- `days`, `timezone`, `asOf` — the span, your timezone, and when this resolved

Use the returned dates as the time bounds for the task at hand. **Do not derive
dates by hand** — this resolver is the source of truth. For the full window list
or an arbitrary range (e.g. `last45days`, `last6months`), see the `/temporal` skill.
