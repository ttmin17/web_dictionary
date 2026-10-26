---
slug: harnessmd-munder-difflin-resources-skills-lastmonth
name: lastMonth
tagline: Agent skill from HarnessMD/munder-difflin
summary: Agent skill from HarnessMD/munder-difflin
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
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: HarnessMD/munder-difflin
  subpath: resources/skills/lastMonth
  official_vendor: false
  license: MIT
signals:
  stars: 9069
  last_commit: 2026-10-26T07:19:02Z
  stars_delta_7d: 173
  stars_growth_pct: 1.9
  trending_score: 176.36
  velocity_source: snapshot_delta
  sparkline_4w:
    - 8550
    - 8726
    - 8896
    - 9069
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: HarnessMD/munder-difflin
  path: resources/skills/lastMonth/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:55.399Z
  truncated: false
type: agent_skill
skill:
  skill_name: lastMonth
  description: Agent skill from HarnessMD/munder-difflin
  folder_path: resources/skills/lastMonth
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: harnessmd-munder-difflin
---

## /lastMonth

Get the concrete date range for **the previous full calendar month** by running the bundled resolver:

```bash
node "$AGENT_DIR/.claude/skills/temporal/when.mjs" lastMonth
```

It prints a human-readable line plus a JSON record:

- `start` / `end` — inclusive civil dates (`YYYY-MM-DD`) in your local timezone
- `startUtc` / `endExclusiveUtc` — the same window as a half-open `[start, end)`
  range of exact UTC instants, for timestamp-based queries
- `days`, `timezone`, `asOf` — the span, your timezone, and when this resolved

Use the returned dates as the time bounds for the task at hand. **Do not derive
dates by hand** — this resolver is the source of truth. For the full window list
or an arbitrary range (e.g. `last45days`, `last6months`), see the `/temporal` skill.
