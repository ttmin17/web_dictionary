---
slug: ruvnet-ruflo-plugins-ruflo-neural-trader-skills-trader-risk
name: trader-risk
tagline: Assess portfolio risk using npx neural-trader — VaR, CVaR, Sharpe,
  position sizing, circuit breaker status
summary: Assess portfolio and position risk using neural-trader's risk engine.
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
  subpath: plugins/ruflo-neural-trader/skills/trader-risk
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
  path: plugins/ruflo-neural-trader/skills/trader-risk/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.548Z
  truncated: false
type: agent_skill
skill:
  skill_name: trader-risk
  description: Assess portfolio risk using npx neural-trader — VaR, CVaR, Sharpe,
    position sizing, circuit breaker status
  folder_path: plugins/ruflo-neural-trader/skills/trader-risk
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Assess portfolio and position risk using neural-trader's risk engine.

Steps:
1. Ensure neural-trader is available:
   `npm ls neural-trader 2>/dev/null || npm install --ignore-scripts neural-trader`
2. Run risk assessment:
   ```bash
   # VaR, CVaR and drawdown from a returns series YOU supply (daily returns as decimals)
   npx neural-trader --risk assess --returns 0.01,-0.005,0.012,-0.02 --portfolio-value 100000 --confidence-level 0.95 --method historical
   ```
   `--risk assess` computes from `--returns` only. `--symbol` and `--portfolio` are ignored, and with no `--returns` it uses a built-in 7-value sample (`inputs.returnsCount: 7`), which is a demo, not a risk read on anything. Derive the returns from real bars first (a `--backtest --live` run with `dataSource: "yahoo-finance"`, or the user's own history). `--var`, `--correlation`, `--risk-tolerance` and `--position-sizing` as standalone flags are rejected by the CLI ("Unknown command").
3. Position sizing: Kelly sizing exists only inside a backtest (`--backtest ... --position-sizing kelly`). For a standalone figure, compute it from the win rate and payoff in the backtest output and state the assumptions; do not present it as an instruction to trade.
4. Check circuit breaker status:
   - Daily loss limit (3%), weekly loss limit (5%)
   - Correlation spike (>0.85), volatility regime (VIX > 2x)
   - Max positions, single-name concentration (>10%)
5. Present: risk metrics, position sizing recommendation, active breakers, alerts
6. Store assessment:
   `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "risk-TICKER-DATE", value: "RISK_METRICS", namespace: "trading-risk" })`
