---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-diff
name: cost-diff
tagline: Snapshot delta between two cost-summary JSON outputs. PR-level cost
  regression detection — answers "what changed between these two specific
  snapshots?
summary: PR-level cost regression detection. Where cost-counterfactual compares
  to HYPOTHETICAL baselines (always-haiku/sonnet/opus) and cost-burn compares
  latest bucket to PRIOR MEAN, cost-diff compares two SPECIFIC known-goo...
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-diff
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
  path: plugins/ruflo-cost-tracker/skills/cost-diff/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.544Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-diff
  description: Snapshot delta between two cost-summary JSON outputs. PR-level cost
    regression detection — answers "what changed between these two specific
    snapshots?". Pairs with cost-summary's stable JSON contract.
  folder_path: plugins/ruflo-cost-tracker/skills/cost-diff
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

PR-level cost regression detection. Where cost-counterfactual compares
to HYPOTHETICAL baselines (always-haiku/sonnet/opus) and cost-burn
compares latest bucket to PRIOR MEAN, cost-diff compares two SPECIFIC
known-good snapshots.

| Question | Skill |
|---|---|
| "What would we have spent at always-X?" | `cost-counterfactual` |
| "Is daily burn accelerating vs prior mean?" | `cost-burn` |
| "Did THIS PR add spend vs main?" | **`cost-diff`** ← this |

## Algorithm

Implementation: [`scripts/diff.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-cost-tracker/skills/cost-diff/../../scripts/diff.mjs). Consumes the
stable JSON contract from `cost summary --format json`.

1. Load `--baseline` and `--current` JSON snapshots.
2. Sanity check: both must have `total_cost_usd` + `sessionCount` (cost-summary shape).
3. Per-key delta: `byTier` (haiku/sonnet/opus) and `byModel` (each model).
4. Each entry tagged `added` / `removed` / `changed` based on
   baseline / current zero-ness.
5. Sort table by `|delta|` descending so the biggest movers are at the top.
6. `--alert-on-pct N`: exit 1 when `total_pct > N`.
7. `--alert-on-usd N`: exit 1 when `total_delta_usd > N`.
   Both can be set; first to trigger wins.

## PR-gate workflow

```bash
# Capture baseline (e.g. on main, via the cost-tracker-smoke CI workflow)
cost summary --format json > baseline.json

# On the PR branch, capture current state
cost summary --format json > current.json

# Compare; fail the PR if total spend grew >10% OR >$5
cost diff --baseline baseline.json --current current.json \
          --alert-on-pct 10 --alert-on-usd 5.00
```

The combination of both flags catches:
- **Percent-only fires**: a small absolute change but a meaningful shift
  (e.g. doubling from $0.10 to $0.20 hits +100% but only +$0.10).
- **USD-only fires**: a large absolute change with a small percent
  (e.g. growing from $100 to $110 is only +10% but +$10).

Either signal can fail the PR independently — they're OR'd.

## --alert-on-class-pct (iter 86)

The two USD-level thresholds above miss a regression class: when ONE
token type grows disproportionately even though total spend grows
modestly. Example: a PR introduces a verbose context-cache pattern,
total spend grows only 10% (under --alert-on-pct 50), but `cache_write`
tokens grow 900%. The iter-82 driver hides inside the USD signal.

`--alert-on-class-pct cache_write:50` exits 1 when cache_write tokens
grow more than 50% baseline → current. Multiple classes can be checked
in one flag (comma-separated):

```bash
cost diff --baseline baseline.json --current current.json \
          --alert-on-class-pct cache_write:50,output:25
```

First class to breach wins. Valid classes: `input | output | cache_write | cache_read`.

Recommended PR-gate triad:

```bash
cost diff --baseline ... --current ... \
          --alert-on-pct 25 \
          --alert-on-usd 5.00 \
          --alert-on-class-pct cache_write:100
```

Three orthogonal signals — `pct` (total grew), `usd` (large absolute
jump), `class-pct` (composition shifted). Each catches what the others
miss; AND-of-OR semantics means any one firing fails the PR.

## Smoke transcript (synthetic baseline + current)

```
| Total spend       | $1.000000 | $1.500000 | +$0.500000 | 50.00% |
| Sessions          | 10        | 13        | +3         | 30.00% |

## By tier
| opus   | $0      | $0.60   | +$0.600000 | new      | added   |
| sonnet | $0.70   | $0.50   | -$0.200000 | -28.57%  | changed |
| haiku  | $0.30   | $0.40   | +$0.100000 | 33.33%   | changed |
```

Notice the table is **sorted by absolute delta**, not alphabetically —
the biggest mover (opus newly added) bubbles to the top. Operators
reading top-down see "what mattered" first.

## Exit codes

| Exit | Meaning |
|---|---|
| 0 | No alert, OR no thresholds set |
| 1 | --alert-on-pct or --alert-on-usd threshold exceeded |
| 2 | Config error (missing files, invalid JSON, malformed snapshot) |

## Status column

| Status | Meaning |
|---|---|
| `added` | This tier/model was $0 in baseline, >$0 in current |
| `removed` | This tier/model was >$0 in baseline, $0 in current |
| `changed` | Both baseline and current >$0; delta is the difference |

Entries with `baseline === 0 && current === 0` are dropped (nothing to
report).

## Composition with cost-summary

cost-diff is the SECOND HALF of a contract that cost-summary started:
the stable JSON shape from `cost summary --format json`. Both pieces
have been frozen — adding fields to summary is fine; renaming or
removing isn't.

If you're consuming snapshots elsewhere (dashboards, alerting), the
same shape works — `cost-diff` is just one consumer.
