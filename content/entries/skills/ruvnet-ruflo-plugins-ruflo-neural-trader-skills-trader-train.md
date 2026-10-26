---
slug: ruvnet-ruflo-plugins-ruflo-neural-trader-skills-trader-train
name: trader-train
tagline: Train neural models (LSTM, Transformer, N-BEATS) on market data using
  npx neural-trader with confidence intervals
summary: Train neural prediction models using neural-trader's ML engine.
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
  subpath: plugins/ruflo-neural-trader/skills/trader-train
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
  path: plugins/ruflo-neural-trader/skills/trader-train/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.548Z
  truncated: false
type: agent_skill
skill:
  skill_name: trader-train
  description: Train neural models (LSTM, Transformer, N-BEATS) on market data
    using npx neural-trader with confidence intervals
  folder_path: plugins/ruflo-neural-trader/skills/trader-train
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Train neural prediction models using neural-trader's ML engine.

Steps:
1. Ensure neural-trader is available:
   `npm ls neural-trader 2>/dev/null || npm install --ignore-scripts neural-trader`
2. Train the specified model:
   ```bash
   npx neural-trader --train --model lstm --symbol TICKER --epochs 50
   ```
   `--train` is required; `--model X --symbol T` alone is rejected ("Unknown command"), and `--confidence` and `--decompose` do not exist. In 2.8.11 the result carries `upstreamStub: true` ("neuralTrain returns a placeholder shape (no real LSTM/Transformer fit yet)"). Report that no model was fitted; never describe the output as a trained model or quote its numbers as accuracy.
3. Review training output: loss curves, validation metrics, prediction accuracy
4. Generate predictions with confidence intervals:
   ```bash
   npx neural-trader --predict --model MODEL --symbol TICKER [--gpu]
   ```
   `--horizon` is not supported, and `neuralPredict` is also a placeholder (`upstreamStub: true`) in 2.8.11.
5. Model comparison (`--model-compare`) does not exist in the CLI. Without a real fit there is nothing to compare; say so rather than fabricating a ranking.
6. Store model results (canonical `trading-analysis` namespace per ADR-126 Phase 1 — was previously stored to undeclared `trading-models`):
   `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "model-MODEL-TICKER-DATE", value: "TRAINING_RESULTS", namespace: "trading-analysis" })`
7. Train SONA on model outcomes:
   `mcp__plugin_ruflo-core_ruflo__neural_train({ modelType: "moe", epochs: 10 })` (`modelType` is required; there is no `patternType`). Skip this step when step 2 returned a stub, so placeholder runs do not train SONA.
