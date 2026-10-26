---
slug: ruvnet-ruflo-plugins-ruflo-metaharness-skills-harness-drift-from-history
name: harness-drift-from-history
tagline: One-command drift detection. Composes audit-list + oia-audit +
  audit-trend into a single primitive — finds the most recent audit in
  `metaharness-audit
summary: 'The natural ops question after running oia-audit weekly is "did
  anything drift?" Before this skill, the answer required a three-step
  sequence:'
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
  subpath: plugins/ruflo-metaharness/skills/harness-drift-from-history
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
  path: plugins/ruflo-metaharness/skills/harness-drift-from-history/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: harness-drift-from-history
  description: One-command drift detection. Composes audit-list + oia-audit +
    audit-trend into a single primitive — finds the most recent audit in
    `metaharness-audit` namespace, runs a fresh audit against the current repo,
    diffs them via ADR-152 §3.1 similarity, and alerts when structural distance
    crosses `--threshold`. Iter 53 of ADR-150 deep integration.
  folder_path: plugins/ruflo-metaharness/skills/harness-drift-from-history
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

The natural ops question after running `oia-audit` weekly is "did anything drift?" Before this skill, the answer required a three-step sequence:

```bash
npx ruflo metaharness audit-list --format json   # → pick a key by hand
npx ruflo metaharness oia-audit --format json > /tmp/curr.json
npx ruflo metaharness audit-trend \
  --baseline-key <picked-key> --current /tmp/curr.json \
  --alert-on-distance-below 0.95
```

This skill collapses it into one command:

```bash
npx ruflo metaharness drift-from-history --threshold 0.95
```

## What it does

1. Lists records from `metaharness-audit` namespace via audit-list.mjs
2. Picks the most recent record by `startedAt` (or `--baseline-since 7d` skips anything newer than 7 days)
3. Runs a fresh `oia-audit` against the current path
4. Diffs the two via audit-trend, applying `--alert-on-distance-below ${threshold}`
5. Returns the structured drift report

## Architectural constraint inheritance (ADR-150)

| Constraint | How drift-from-history satisfies it |
|---|---|
| Removable | Pure subprocess composition over existing scripts — no new `@metaharness/*` import |
| Optional | If oia-audit reports `degraded:true`, this skill exits 3 with a degraded payload |
| Graceful | Empty audit history → exit 2 with hint to seed it; never crashes |
| CI-gate | Smoke step 17z16 anchors the dispatcher entry + subcommand listing |

## Exit codes

- 0 — similarity ≥ threshold (or threshold not crossed)
- 1 — drift detected: similarity < threshold (alert fired)
- 2 — config error (no history, audit-list failed)
- 3 — upstream metaharness absent (degraded payload returned)

## Example

```bash
$ npx ruflo metaharness drift-from-history --threshold 0.95
# drift-from-history

Baseline:        audit-2026-06-16T22-58-47-840Z
Current:         2026-06-16T23:05:02.231Z

Structural similarity: 1 (near-identical)
Distance:              0

✓ similarity ≥ 0.95 — OK
```

## Implementation

[`scripts/drift-from-history.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-metaharness/skills/harness-drift-from-history/../../scripts/drift-from-history.mjs)
