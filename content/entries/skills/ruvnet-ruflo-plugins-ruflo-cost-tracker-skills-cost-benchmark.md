---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-benchmark
name: cost-benchmark
tagline: Run the corpus benchmark — booster locally, optional Gemini/Sonnet/Opus
  baselines — and persist a verifiable measured-vs-claimed table
summary: "- Before publishing a release — verify booster win rate didn't
  regress. - After expanding bench/booster-corpus.json — confirm new cases route
  correctly. - When auditing a \"claimed upstream\" tag — flip it to
  \"verified\"..."
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-benchmark
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
  path: plugins/ruflo-cost-tracker/skills/cost-benchmark/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-benchmark
  description: Run the corpus benchmark — booster locally, optional
    Gemini/Sonnet/Opus baselines — and persist a verifiable measured-vs-claimed
    table
  folder_path: plugins/ruflo-cost-tracker/skills/cost-benchmark
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost Benchmark
Runs `scripts/bench.mjs` against the structural+adversarial corpus and writes per-case + summary results to `docs/benchmarks/runs/`. This is the verification gate that backs every measurable claim in `cost-booster-edit` / `cost-booster-route`.

## When to use

- Before publishing a release — verify booster win rate didn't regress.
- After expanding `bench/booster-corpus.json` — confirm new cases route correctly.
- When auditing a "claimed upstream" tag — flip it to "verified" once the bench supports it.
- On a cost question ("is Sonnet 4.6 cheaper than Opus 4.7 for these tasks?") — re-run with `BENCH_ANTHROPIC=1`.

## Steps

1. **Run the bench from `v3/`** (where `agent-booster` resolves):

   ```bash
   ( cd v3 && node ../plugins/ruflo-cost-tracker/scripts/bench.mjs )                  # booster only — free, ~85 ms
   ( cd v3 && BENCH_LLM_BASELINE=1 node ../plugins/ruflo-cost-tracker/scripts/bench.mjs ) # + Gemini 2.0 Flash (cheap)
   ( cd v3 && BENCH_LLM_BASELINE=1 BENCH_ANTHROPIC=1 \
        node ../plugins/ruflo-cost-tracker/scripts/bench.mjs )                          # + Sonnet 4.6 + Opus 4.7
   ```

2. **Inspect the markdown summary** printed to stdout. The gate metric is `winRate` (Tier 1 cases). Adversarial cases are tracked separately as `escalationRate`.

3. **Persisted output** lands at:
   - `docs/benchmarks/runs/latest.json` — pointer to the most recent run
   - `docs/benchmarks/runs/<ISO-timestamp>.json` — historical record

4. **Read it back** in subsequent skills (e.g. `cost-report` step 2 reads `latest.json` for live tier-spend numbers).

## Smoke gates

- `winRate ≥ 0.80` on Tier 1 cases (smoke step 23). Lower the threshold by editing `scripts/smoke.sh`.
- `escalationRate` is reported but ungated — adversarial cases are diagnostic.

## Env overrides

| Env var | Default | Purpose |
|---|---|---|
| `BENCH_LLM_BASELINE` | unset | `=1` runs the OpenAI-compat baseline |
| `BENCH_LLM_MODEL` | `models/gemini-2.0-flash` | Override the OpenAI-compat model |
| `BENCH_LLM_BASE_URL` | Gemini OpenAI shim | Override endpoint |
| `BENCH_ANTHROPIC` | unset | `=1` runs Anthropic baseline (Sonnet 4.6 + Opus 4.7) |
| `BENCH_ANTHROPIC_MODELS` | `claude-sonnet-4-6,claude-opus-4-7` | Comma-separated Claude IDs |
| `BENCH_OUT` | timestamped file | Override output path |
| `BENCH_QUIET=1` | unset | Suppress markdown summary |

API keys auto-pulled from `gcloud secrets` (`GOOGLE_AI_API_KEY`, `ANTHROPIC_API_KEY`); override with `BENCH_LLM_API_KEY` / `BENCH_ANTHROPIC_API_KEY`.

## Cross-references

ADR-0002 §"Decision 1" / §"Riskiest assumption" · `cost-booster-edit/SKILL.md` (verification table consumes this skill's output) · `cost-report/SKILL.md` step 2 (reads `runs/latest.json`).
