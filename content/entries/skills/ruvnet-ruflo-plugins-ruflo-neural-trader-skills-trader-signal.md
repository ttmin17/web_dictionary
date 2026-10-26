---
slug: ruvnet-ruflo-plugins-ruflo-neural-trader-skills-trader-signal
name: trader-signal
tagline: Generate trading signals using npx neural-trader anomaly detection
  engine with Z-score scoring and neural prediction
summary: Generate trading signals using neural-trader's anomaly detection engine.
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
  subpath: plugins/ruflo-neural-trader/skills/trader-signal
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
  path: plugins/ruflo-neural-trader/skills/trader-signal/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.548Z
  truncated: false
type: agent_skill
skill:
  skill_name: trader-signal
  description: Generate trading signals using npx neural-trader anomaly detection
    engine with Z-score scoring and neural prediction
  folder_path: plugins/ruflo-neural-trader/skills/trader-signal
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Generate trading signals using neural-trader's anomaly detection engine.

Steps:
1. Ensure neural-trader is available:
   `npm ls neural-trader 2>/dev/null || npm install --ignore-scripts neural-trader`
2. Scan for signals:
   ```bash
   npx neural-trader --signal scan --symbols <TICKERS> --live
   ```
   With a specific strategy:
   ```bash
   npx neural-trader --signal scan --strategy <name> --symbols <TICKERS> --live
   ```
   Without `--live` the scan runs on deterministic synthetic bars (`dataSource: "synthetic"`). Check `dataSource` in the result; if it is not `yahoo-finance` (including when the live fetch failed and fell back), present the result as a demo and propose no entry, stop or target.
3. If --strategy specified, load strategy filters:
   `mcp__plugin_ruflo-core_ruflo__memory_retrieve({ key: "strategy-NAME", namespace: "trading-strategies" })`
4. neural-trader classifies anomalies automatically:
   - **spike** (maxZ > 5): breakout — momentum entry or mean-reversion fade
   - **drift** (sustained high Z): trend forming — trend-following signal
   - **flatline** (low Z): consolidation — prepare for breakout
   - **oscillation** (alternating): range-bound — mean-reversion at extremes
   - **pattern-break** (multiple dims): regime change — close and reassess
   - **cluster-outlier** (>50% dims): multi-factor dislocation — arbitrage
5. Use SONA for regime prediction:
   `mcp__plugin_ruflo-core_ruflo__neural_predict({ input: "anomaly types: [DETECTED], scores: [SCORES]" })`
6. Search historical pattern matches:
   `mcp__plugin_ruflo-core_ruflo__agentdb_pattern-search({ query: "ANOMALY_TYPE score RANGE", namespace: "trading-signals" })`
7. Present ranked signals: instrument, direction, confidence, anomaly type, entry/stop/target
8. Store signals with a 24-hour TTL (intraday signals shouldn't pollute long-running memory; the `MemoryConsolidator.sweepExpired()` pass introduced in ADR-125 Phase 4 — shipped in `@claude-flow/memory@3.0.0-alpha.18` — sweeps them out after they expire):
   `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "signal-TIMESTAMP", value: "SIGNALS_JSON", namespace: "trading-signals", ttl: 86400 })` (`ttl` is in seconds; `expiresAt` is not a `memory_store` parameter and would be ignored, leaving the signal in memory forever)
