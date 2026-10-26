---
slug: ruvnet-ruflo-plugins-ruflo-metaharness-skills-harness-learn
name: harness-learn
tagline: Run a GEPA learning cycle via `metaharness learn` (upstream ADR-235,
  metaharness@0.3.0) — optimizes a harness genome against a SWE-bench-style
  slice m
summary: Surfaces metaharness learn — the upstream GEPA learning harness that
  evolves harness policy genomes against a scored task corpus instead of
  hand-editing prompts. Candidates are scored on held-out slices and only
  measu...
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
  subpath: plugins/ruflo-metaharness/skills/harness-learn
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
  path: plugins/ruflo-metaharness/skills/harness-learn/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: harness-learn
  description: Run a GEPA learning cycle via `metaharness learn` (upstream
    ADR-235, metaharness@0.3.0) — optimizes a harness genome against a
    SWE-bench-style slice manifest. $0 dry-run by default; `--run` is the
    explicit spend opt-in. Requires a metaharness repo checkout (`--repo` or
    $METAHARNESS_REPO) — without one it reports `checkout-required` with clone
    instructions. Degrades gracefully when metaharness is absent.
  folder_path: plugins/ruflo-metaharness/skills/harness-learn
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Surfaces `metaharness learn` — the upstream GEPA learning harness that
evolves harness policy genomes against a scored task corpus instead of
hand-editing prompts. Candidates are scored on held-out slices and only
measured winners promote (the shipped cand-6 genome is the first such
promotion: holdout gold 2/12 → 3/12, zero regressions).

## When to use

- A harness's policy prompt underperforms on a task family and you want a
  measured improvement loop rather than manual prompt iteration.
- Pricing a learning run before committing spend — the default dry-run
  resolves the slice manifest and reports cost without any model calls.
- After a learn run promotes a genome: pair with `harness-gepa --op render`
  to inspect what the promoted policy actually says.

## Preconditions (upstream design)

The learning harness (GEPA + SWE-bench + Docker) is too heavy for the npm
package, so `learn` needs a local clone:

```bash
git clone https://github.com/ruvnet/metaharness.git
node scripts/learn.mjs --repo ./metaharness --host claude-code --model haiku --slice slices/lite.json
```

Without a checkout the script emits `{status: "checkout-required"}` and
exits 0 — a precondition report, not an error (distinct from
`degraded: true`, which means the npm package itself is absent). The
managed-service path (gateway-side learn jobs, no checkout) is upstream's
ADR-235 follow-up and not available yet.

## Algorithm

Implementation: [`scripts/learn.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-metaharness/skills/harness-learn/../../scripts/learn.mjs).

1. Validate `--repo` exists when given; export it as `$METAHARNESS_REPO`.
2. Invoke the pinned `metaharness` binary (`metaharness@~0.4.1`, local install
   or one-time versioned cache — never `@latest`): `metaharness learn --host <h>
   --model <m> --slice <s> [--run]` via `_harness.mjs` (graceful degradation,
   hard timeout).
3. Default timeouts: 120s dry-run, 600s with `--run` — real runs on larger
   slices need an explicit `--timeout-ms` matched to slice size × model cost.
4. Detect the checkout-required message → structured payload, exit 0.
5. Parse the trailing JSON report when upstream emits one; otherwise return
   the raw report text under `rawReport`.

## Cost note

`--run` is the ONLY path that spends. Everything else — dry-run, checkout
probe, degraded path — is $0. The MCP tool (`metaharness_learn`) has a 120s
subprocess budget; run real learning cycles from a terminal via
`ruflo metaharness learn ... --run --timeout-ms <big>`.

## Exit codes

- `0` — report produced (or dry-run, checkout-required, degraded)
- `1` — `--alert-on-fail` and the learn run reported failure
- `2` — config error (bad `--repo` path)
