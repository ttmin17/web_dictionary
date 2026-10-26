---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-anomaly
name: cost-anomaly
tagline: MAD-based outlier detection on session spend. Robust to the very
  outliers it hunts (unlike mean+sigma). Surfaces specific anomalous sessions
  with modi
summary: Per-session outlier detection — the diagnostic counterpart to
  cost-burn's aggregate-trend signal.
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-anomaly
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
  path: plugins/ruflo-cost-tracker/skills/cost-anomaly/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-anomaly
  description: MAD-based outlier detection on session spend. Robust to the very
    outliers it hunts (unlike mean+sigma). Surfaces specific anomalous sessions
    with modified-z scores; optional --alert-on-outliers exit code for CI gates.
    Distinct from cost-burn (aggregate trend) — this answers "which INDIVIDUAL
    session is the outlier?".
  folder_path: plugins/ruflo-cost-tracker/skills/cost-anomaly
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Per-session outlier detection — the diagnostic counterpart to cost-burn's
aggregate-trend signal.

| Question | Skill |
|---|---|
| "Is the AGGREGATE rate accelerating?" | `cost-burn` |
| "Which SPECIFIC sessions are anomalous outliers?" | **`cost-anomaly`** ← this |
| "Could we have spent less in aggregate?" | `cost-counterfactual` |
| "When will we hit budget?" | `cost-projection` |

## Algorithm

Implementation: [`scripts/anomaly.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-cost-tracker/skills/cost-anomaly/../../scripts/anomaly.mjs).

1. Read all `session-*` records from `cost-tracking` namespace.
2. Filter to `--since` window (default: all-time).
3. Compute `median(total_cost_usd)` and `MAD = median(|x - median|)`.
4. Per-session modified z-score (Iglewicz-Hoaglin 1993):
   `z = 0.6745 * (x - median) / MAD`
5. Flag sessions with `|z| > --threshold` (default 3.5).

## Why MAD and not mean + sigma?

| Approach | What breaks |
|---|---|
| `mean + sigma` | A single $50 session inflates BOTH mean and sigma so badly that subsequent outliers hide inside the new "normal" band. Catastrophic on small samples. |
| `median + MAD` | Both estimators ignore up to 50% of the data — the outliers themselves can't shift them. Robust on n=10. The canonical cutoff `\|z\| > 3.5` is from Iglewicz-Hoaglin (1993). |

## Smoke transcript (5 baseline sessions $0.08-$0.12 + 1 outlier $5.00)

```
| Sessions considered | 5 |
| Threshold (|modified z|) | 3.5 |
| Median spend | $0.100000 |
| MAD | $0.010000 |
| Min / Max | $0.080000 / $5.000000 |
| **Outliers found** | **1** |

## Outlier sessions
| Session | Spend | Deviation | Modified z | Direction |
| outlier- | $5.000000 | +$4.900000 | 330.505 | high |
```

## Exit codes

```
$ cost anomaly --alert-on-outliers 1
⚠ ALERT: found 1 outlier session(s) (|modified z| > 3.5); threshold was ≥1
exit 1

$ cost anomaly --alert-on-outliers 5
✓ found 1 outlier session(s); under threshold ≥5 — OK
exit 0
```

## CI integration

```bash
# Fail the build if any session this week is a >3.5σ outlier
cost anomaly --since 7d --alert-on-outliers 1 || investigate-bad-session
```

Most useful when paired with `cost-burn`:

```bash
cost burn  --alert-on-acceleration-pct 50  || page-oncall   # rate-of-change alert
cost anomaly --alert-on-outliers 1         || investigate   # point-anomaly alert
```

Together they cover "is the average shifting?" AND "is there a single rogue
session?" — both can fire independently.

## Edge cases

- **n < 3**: emit "Insufficient data" message, exit 0. MAD on 1-2 samples is meaningless.
- **MAD = 0**: ≥50% of sessions share the exact same spend, so z-scores collapse. Emit explainer instead of dividing by zero. Common cause: dry-run sessions all at $0.
- **Low-direction outliers**: usually crashed or dropped sessions, not over-spending. The output table explicitly labels direction so operators interpret correctly.
- **Very small MAD**: even tiny absolute deviations produce huge z-scores. The $5 outlier with MAD=$0.01 yields z=330 — that's correct, not a bug.

## Direction column

| Direction | Likely cause | Action |
|---|---|---|
| `high` | Long session, stuck in expensive tier, or runaway loop | `cost report` + `cost conversation` to investigate |
| `low` | Crash, dropped session, or unfinished work | Verify the session completed normally |
