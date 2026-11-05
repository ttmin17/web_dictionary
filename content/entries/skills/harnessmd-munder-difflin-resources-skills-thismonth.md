---
slug: harnessmd-munder-difflin-resources-skills-thismonth
name: thisMonth
tagline: |-
  Resolve "thisMonth" to a concrete ISO date range relative to your run time —
  this month so far (1st → today). Returns inclusive civil dates plus exact
summary: "Get the concrete date range for this month so far (1st → today) by
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
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: HarnessMD/munder-difflin
  subpath: resources/skills/thisMonth
  official_vendor: false
  license: MIT
signals:
  stars: 9378
  last_commit: 2026-11-05T12:23:50Z
  stars_delta_7d: 309
  stars_growth_pct: 3.4
  trending_score: 319.53
  velocity_source: snapshot_delta
  sparkline_4w:
    - 8726
    - 8896
    - 9069
    - 9378
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: HarnessMD/munder-difflin
  path: resources/skills/thisMonth/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:55.062Z
  truncated: false
type: agent_skill
skill:
  skill_name: thisMonth
  description: >
    Resolve "thisMonth" to a concrete ISO date range relative to your run time —

    this month so far (1st → today). Returns inclusive civil dates plus exact
    UTC instants so you have

    temporal context without computing dates by hand. Read-only: no writes, no

    network. Use before a month-to-date task (MTD metrics, "so far this month").
  folder_path: resources/skills/thisMonth
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: harnessmd-munder-difflin
---

## /thisMonth

Get the concrete date range for **this month so far (1st → today)** by running the bundled resolver:

```bash
node "$AGENT_DIR/.claude/skills/temporal/when.mjs" thisMonth
```

It prints a human-readable line plus a JSON record:

- `start` / `end` — inclusive civil dates (`YYYY-MM-DD`) in your local timezone
- `startUtc` / `endExclusiveUtc` — the same window as a half-open `[start, end)`
  range of exact UTC instants, for timestamp-based queries
- `days`, `timezone`, `asOf` — the span, your timezone, and when this resolved

Use the returned dates as the time bounds for the task at hand. **Do not derive
dates by hand** — this resolver is the source of truth. For the full window list
or an arbitrary range (e.g. `last45days`, `last6months`), see the `/temporal` skill.
