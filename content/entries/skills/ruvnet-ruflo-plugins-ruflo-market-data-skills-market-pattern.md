---
slug: ruvnet-ruflo-plugins-ruflo-market-data-skills-market-pattern
name: market-pattern
tagline: Detect and classify candlestick patterns from ingested OHLCV data
summary: When you need to identify candlestick patterns (doji, hammer,
  engulfing, head-shoulders, etc.) in market data. Requires data to be ingested
  first via market-ingest.
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
  subpath: plugins/ruflo-market-data/skills/market-pattern
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
  path: plugins/ruflo-market-data/skills/market-pattern/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: market-pattern
  description: Detect and classify candlestick patterns from ingested OHLCV data
  folder_path: plugins/ruflo-market-data/skills/market-pattern
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Market Pattern
Scan ingested OHLCV data for known candlestick patterns, classify them by type and reliability, and store for future reference.

## When to use

When you need to identify candlestick patterns (doji, hammer, engulfing, head-shoulders, etc.) in market data. Requires data to be ingested first via `market-ingest`.

## Steps

1. **Load candles** -- call `mcp__plugin_ruflo-core_ruflo__memory_search` (or `memory_list`) on the `market-data` namespace to retrieve normalized OHLCV data for the symbol and period. The `memory_*` tool family routes by namespace; the `agentdb_hierarchical-*` family does NOT (it routes by tier), so use `memory_*` for namespaced reads.
2. **Scan for patterns** -- iterate through candle sequences looking for:
   - Single-candle: doji (open ~= close), hammer (long lower wick), inverted hammer
   - Two-candle: bullish/bearish engulfing
   - Three-candle: morning star, evening star, three white soldiers, three black crows
   - Multi-candle: head & shoulders, double top/bottom, cup & handle
3. **Classify** -- for each detection, assign: pattern name, type (reversal/continuation), direction (bullish/bearish), reliability score (0.0-1.0)
4. **Rank** -- sort by reliability score descending
5. **Store** -- two paths (per ruflo-cost-tracker ADR-0001 dual-path pattern):
   - **Pattern-store (typed, recommended)**: `mcp__plugin_ruflo-core_ruflo__agentdb_pattern-store` with `type: 'market-pattern'`. Don't pass a `namespace` arg — ReasoningBank routes it; on bridge unavailability the fallback writes to the reserved `pattern` namespace with `controller: 'memory-store-fallback'` (see ruflo-agentdb ADR-0001).
   - **Plain store (namespace-routable)**: `mcp__plugin_ruflo-core_ruflo__memory_store --namespace market-patterns` — this DOES respect the `market-patterns` namespace because `memory_*` is namespace-routed.
6. **Report** -- display: pattern name, date range, direction, reliability, suggested action

## CLI alternative

```bash
npx @claude-flow/cli@latest memory search --query "bullish reversal patterns" --namespace market-patterns
npx @claude-flow/cli@latest memory store --key "pattern-AAPL-2026-05-04-doji" --value '{...}' --namespace market-patterns
```
