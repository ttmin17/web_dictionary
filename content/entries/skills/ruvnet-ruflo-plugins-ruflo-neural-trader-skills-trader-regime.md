---
slug: ruvnet-ruflo-plugins-ruflo-neural-trader-skills-trader-regime
name: trader-regime
tagline: Detect current market regime using npx neural-trader —
  bull/bear/ranging/volatile classification with recommended strategy. Use when
  the user asks abo
summary: Detect the current market regime using neural-trader's regime detection engine.
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
  subpath: plugins/ruflo-neural-trader/skills/trader-regime
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
  path: plugins/ruflo-neural-trader/skills/trader-regime/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.547Z
  truncated: false
type: agent_skill
skill:
  skill_name: trader-regime
  description: Detect current market regime using npx neural-trader —
    bull/bear/ranging/volatile classification with recommended strategy. Use
    when the user asks about market conditions, wants to pick a strategy for
    current conditions, or before running a backtest/signal that should be
    regime-aware.
  folder_path: plugins/ruflo-neural-trader/skills/trader-regime
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Detect the current market regime using neural-trader's regime detection engine.

Steps:
1. Ensure neural-trader is available:
   `npm ls neural-trader 2>/dev/null || npm install --ignore-scripts neural-trader`
2. Run regime detection:
   ```bash
   npx neural-trader --regime --symbol TICKER
   ```
   One symbol per call (`--regime-detect` and `--symbols` are not recognised; the CLI answers "Unknown command"). In 2.8.11 this classifies a built-in sample price series (the result says "Synthetic prices used for demo"), so it is a demo of the output shape, not a read on TICKER. Say so in the report. For a real read, get the symbol's bars with `--backtest --live` (`dataSource: "yahoo-finance"`) and classify from those.
3. Technical indicators have no standalone CLI flag in 2.8.11 (`--indicators` is rejected). Use the `nt.calculateRsi` / `nt.calculateSma` library functions on real bars, or the `multi-indicator` strategy inside a backtest.
4. Use SONA for regime prediction:
   `mcp__plugin_ruflo-core_ruflo__neural_predict({ input: "indicators: RSI=X, ADX=Y, VIX=Z" })`
5. Search for similar historical regimes:
   `mcp__plugin_ruflo-core_ruflo__memory_search({ query: "regime similar to CURRENT", namespace: "trading-analysis" })`
6. Present: regime classification, confidence, recommended strategy type, historical precedents. If step 2 returned the synthetic sample, present only the output shape and state that no regime was measured.
7. Store analysis:
   `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "regime-DATE", value: "REGIME_ANALYSIS", namespace: "trading-analysis" })`
