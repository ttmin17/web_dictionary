---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-trend
name: cost-trend
tagline: Read every docs/benchmarks/runs/*.json and surface drift in win rate,
  latency, escalation rate, and LLM-baseline cost over time
summary: This skill reads every persisted run in docs/benchmarks/runs/.json and
  reports first→last deltas plus a per-run series, flagging regressions in win
  rate or latency.
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-trend
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
  path: plugins/ruflo-cost-tracker/skills/cost-trend/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-trend
  description: Read every docs/benchmarks/runs/*.json and surface drift in win
    rate, latency, escalation rate, and LLM-baseline cost over time
  folder_path: plugins/ruflo-cost-tracker/skills/cost-trend
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost Trend
The smoke gate is binary (`winRate ≥ 0.80` → pass/fail). The corpus benchmarks captured over time form a curve — and curves catch regressions the gate misses (win rate slowly creeping from 100% to 85% is "still passing" by smoke but a real degradation).

This skill reads every persisted run in `docs/benchmarks/runs/*.json` and reports first→last deltas plus a per-run series, flagging regressions in win rate or latency.

## When to use

- Before a release — check that the speedup hasn't drifted.
- After expanding the corpus — verify older runs still hit the same win rate on the new corpus *they* reflected.
- After upgrading `agent-booster` — surface latency / strategy changes.

## Steps

1. **Run the trend script** from the project root:

   ```bash
   node plugins/ruflo-cost-tracker/scripts/trend.mjs
   ```

   Optional env:
   - `TREND_FORMAT=json` — emit JSON instead of markdown
   - `TREND_LIMIT=10` — consider only the most recent N runs

2. **Inspect the drift summary** — first vs last on win rate, avg latency, p99, escalation rate, speedup vs Gemini.

3. **Inspect the per-run series** — one row per run, including Sonnet 4.6 + Opus 4.7 baseline latencies if those were enabled (`BENCH_ANTHROPIC=1` at run time).

4. **Regression flags** — the script emits `> ⚠ Regression` callouts when:
   - Win rate dropped between first and last run
   - Avg latency rose ≥ 1.5× from first run

## Cross-references

- `cost-benchmark` — the producer of the run JSONs this skill consumes
- `bench/booster-corpus.json` — the corpus version is recorded in each run, so trends across corpus versions remain interpretable
- `docs/benchmarks/runs/latest.json` — the most-recent run; smoke step 23 gates on `winRate ≥ 0.80` from this file
