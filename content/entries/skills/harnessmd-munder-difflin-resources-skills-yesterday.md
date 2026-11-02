---
slug: harnessmd-munder-difflin-resources-skills-yesterday
name: yesterday
tagline: |-
  Resolve "yesterday" to a concrete ISO date range relative to your run time —
  yesterday. Returns inclusive civil dates plus exact UTC instants so you h
summary: "- start / end — inclusive civil dates (YYYY-MM-DD) in your local
  timezone - startUtc / endExclusiveUtc — the same window as a half-open [start,
  end) range of exact UTC instants, for timestamp-based queries - days, tim..."
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
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: HarnessMD/munder-difflin
  subpath: resources/skills/yesterday
  official_vendor: false
  license: MIT
signals:
  stars: 9291
  last_commit: 2026-11-02T07:51:59Z
  stars_delta_7d: 222
  stars_growth_pct: 2.4
  trending_score: 227.43
  velocity_source: snapshot_delta
  sparkline_4w:
    - 8726
    - 8896
    - 9069
    - 9291
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: HarnessMD/munder-difflin
  path: resources/skills/yesterday/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:33.048Z
  truncated: false
type: agent_skill
skill:
  skill_name: yesterday
  description: >
    Resolve "yesterday" to a concrete ISO date range relative to your run time —

    yesterday. Returns inclusive civil dates plus exact UTC instants so you have

    temporal context without computing dates by hand. Read-only: no writes, no

    network. Use before a task scoped to yesterday (daily reports, "what changed
    yesterday").
  folder_path: resources/skills/yesterday
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: harnessmd-munder-difflin
---

## /yesterday

Get the concrete date range for **yesterday** by running the bundled resolver:

```bash
node "$AGENT_DIR/.claude/skills/temporal/when.mjs" yesterday
```

It prints a human-readable line plus a JSON record:

- `start` / `end` — inclusive civil dates (`YYYY-MM-DD`) in your local timezone
- `startUtc` / `endExclusiveUtc` — the same window as a half-open `[start, end)`
  range of exact UTC instants, for timestamp-based queries
- `days`, `timezone`, `asOf` — the span, your timezone, and when this resolved

Use the returned dates as the time bounds for the task at hand. **Do not derive
dates by hand** — this resolver is the source of truth. For the full window list
or an arbitrary range (e.g. `last45days`, `last6months`), see the `/temporal` skill.
