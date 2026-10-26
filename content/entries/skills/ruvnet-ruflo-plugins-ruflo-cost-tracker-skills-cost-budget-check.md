---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-budget-check
name: cost-budget-check
tagline: Read accumulated cost-tracking spend + budget config, compute
  utilization, emit 50/75/90/100% alert ladder
summary: Until P2 (this skill) landed, the README documented the alert ladder
  but no code checked it. Now this skill is the gate.
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-budget-check
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
  path: plugins/ruflo-cost-tracker/skills/cost-budget-check/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.544Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-budget-check
  description: Read accumulated cost-tracking spend + budget config, compute
    utilization, emit 50/75/90/100% alert ladder
  folder_path: plugins/ruflo-cost-tracker/skills/cost-budget-check
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost Budget Check
Reads `cost-tracking:budget-config` for the project's budget limit, sums `total_cost_usd` across `session-*` records produced by `cost-track`, computes utilization, and emits the **measured** 4-tier alert ladder (50% INFO / 75% WARNING / 90% CRITICAL / 100% HARD_STOP).

Until P2 (this skill) landed, the README documented the alert ladder but no code checked it. Now this skill is the gate.

## When to use

- After every cost-track run, to surface the alert level.
- Before spawning a swarm — if utilization ≥ 90%, escalate to `/cost-optimize` first.
- Cron-friendly via `/loop 30m` for continuous monitoring.

## Steps

1. **Run the check**:

   ```bash
   node plugins/ruflo-cost-tracker/scripts/budget.mjs check
   ```

   Filter by period: `BUDGET_PERIOD=today` (default `all`). Use `BUDGET_QUIET=1` for machine-readable JSON.

2. **Inspect the markdown summary** — budget, spent, remaining, utilization percentage, alert level (🟢 OK · 🟡 INFO · 🟠 WARNING · 🔴 CRITICAL · 🛑 HARD_STOP), and the recommended action.

3. **Set / inspect the budget**:

   ```bash
   node plugins/ruflo-cost-tracker/scripts/budget.mjs set 50.00
   node plugins/ruflo-cost-tracker/scripts/budget.mjs get
   ```

4. **HARD_STOP path** — `budget.mjs check` exits with code `1` when utilization ≥ 100%. Wrap critical agent spawns in a `budget.mjs check && spawn …` guard to fail closed.

## Storage shape (`cost-tracking:budget-config`)

```json
{
  "budget_usd": 50.00,
  "setAt": "2026-05-05T...",
  "thresholds": { "info": 0.50, "warning": 0.75, "critical": 0.90, "hard_stop": 1.00 }
}
```

## Alert ladder (from REFERENCE.md, now enforced)

| Threshold | Level | Action |
|---|---|---|
| 50% | INFO 🟡 | log notification, no UX disruption |
| 75% | WARNING 🟠 | display warning, suggest `/cost-optimize` |
| 90% | CRITICAL 🔴 | urgent alert, recommend model downgrades |
| 100% | HARD_STOP 🛑 | halt non-essential spawns; exit code 1 |

## Cross-references

- `cost-track` (producer) — populates `cost-tracking:session-*`
- `cost-report` — same data source, narrative format
- `cost-optimize` — recommended action when WARNING/CRITICAL
- REFERENCE.md "Budget alert thresholds" — the documented ladder this enforces
