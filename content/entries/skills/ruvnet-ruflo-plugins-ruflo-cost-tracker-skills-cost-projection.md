---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-projection
name: cost-projection
tagline: Forward-looking spend extrapolation. Computes a USD-per-day rate from
  the recent measurement window, projects to 7d/30d/90d/365d horizons, and
  surface
summary: "Forward-looking cost projection that pairs with cost-budget-check:"
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-projection
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
  path: plugins/ruflo-cost-tracker/skills/cost-projection/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.544Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-projection
  description: Forward-looking spend extrapolation. Computes a USD-per-day rate
    from the recent measurement window, projects to 7d/30d/90d/365d horizons,
    and surfaces "days until budget exhausted" when a budget is configured.
    Predictive counterpart to `cost-budget-check` (reactive).
  folder_path: plugins/ruflo-cost-tracker/skills/cost-projection
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Forward-looking cost projection that pairs with `cost-budget-check`:

- **`cost-budget-check`** answers "have we crossed the line?" — reactive
- **`cost-projection`** answers "when will we cross the line?" — predictive

## Algorithm

1. Read all `session-*` records from the `cost-tracking` namespace (same source `cost-budget-check` uses).
2. Filter to a measurement window (default last 7 days on `capturedAt`/`startedAt`).
3. Compute the per-day burn rate: `windowSpend / windowDays`.
4. Linear-extrapolate to each requested horizon (default 7d/30d/90d/365d).
5. If a budget is configured (`budget-config` key set by `cost-budget set`):
   - Compute "days until 75% / 90% / 100% consumed" at the current rate.
   - Surface as a separate table block with `ALREADY REACHED` markers for thresholds already exceeded.

## Flags

  --window <duration>     Measurement window. `Nh|Nd|Nw|Nm`. Default `7d`.
  --horizons <csv>        Projection horizons. Default `7d,30d,90d,365d`.
  --format table|json     Default `table` (markdown).

Env: `PROJECTION_NAMESPACE` override (default `cost-tracking`), `PROJECTION_QUIET=1` (alias for `--format json`).

## Smoke transcript (3 sessions × $1 over 7d, $20 budget)

```
| Sessions in window | 3 |
| Window spend | $3.000000 |
| **USD per day** | **$0.428571** |
| All-time spend | $3.000000 across 3 sessions |

## Projected spend (linear extrapolation)
| Horizon | Days | Projected spend |
|---|---:|---:|
| 7d | 7 | $3.0000 |
| 30d | 30 | $12.8571 |

## Budget exhaustion ($20.00 configured)
| Threshold | Target | Remaining | Time at current rate |
|---|---:|---:|---|
| 75% | $15.00 | $12.00 | 28.0 days |
| 90% | $18.00 | $15.00 | 35.0 days |
| 100% | $20.00 | $17.00 | 39.7 days |
```

## When to use

- **Finance / SRE planning**: hand the JSON output to a budget dashboard for "are we on track for the quarter?".
- **CI gates**: `cost-projection --format json | jq '.budget.exhaustion[2].daysUntilReached < 7'` → fail builds when 100% exhaustion is < 1 week away.
- **Post-workload-shift sanity check**: after a big feature lands, re-run to verify the rate hasn't accelerated past expectations.

## Stationarity assumption

Linear extrapolation assumes the current rate holds. The footer reminds operators to re-run after workload shifts. For drift detection over MULTIPLE windows, pair with `cost-trend` (which already covers benchmark-drift).
