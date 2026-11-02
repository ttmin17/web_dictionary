---
slug: microsoft-agent-framework-dotnet-samples-02-agents-harness-buildyourownclaw-claw_step03_scalingcapabilities-skills-risk-scoring
name: risk-scoring
tagline: Score how concentrated and risky a portfolio is on a 0-100 scale from
  its position weights. Use when the user asks how risky their portfolio is,
  wheth
summary: 1. Read references/risk-bands.md to understand the score bands and what
  drives them. 2. Compute each holding's market value (shares × price) — use the
  getstockprice tool for current prices if you do not already have t...
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agentic-ai
  - agents
  - dotnet
status: active
quality_percentile: 99
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: microsoft/agent-framework
  subpath: dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/risk-scoring
  official_vendor: true
  license: MIT
signals:
  stars: 14492
  last_commit: 2026-11-02T05:12:39Z
  stars_delta_7d: 175
  stars_growth_pct: 1.2
  trending_score: 177.14
  velocity_source: snapshot_delta
  sparkline_4w:
    - 14200
    - 14317
    - 14492
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/agent-framework
  path: dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/risk-scoring/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:20.938Z
  truncated: false
type: agent_skill
skill:
  skill_name: risk-scoring
  description: Score how concentrated and risky a portfolio is on a 0-100 scale
    from its position weights. Use when the user asks how risky their portfolio
    is, whether it is too concentrated, or for a diversification check.
  folder_path: dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/risk-scoring
  extra_files:
    - references/risk-bands.md
    - scripts/risk_score.py
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: microsoft-agent-framework
---

## Usage

When the user asks about portfolio risk or concentration:

1. Read `references/risk-bands.md` to understand the score bands and what drives them.
2. Compute each holding's market value (shares × price) — use the `get_stock_price` tool for current
   prices if you do not already have them.
3. Run `scripts/risk_score.py` with one `--position VALUE` argument per holding,
   e.g. `--position 18518 --position 17201 --position 16177`.
4. Report the 0-100 score, the band it falls in, and the largest single-position weight, then suggest
   (in general terms) whether the portfolio looks well diversified or concentrated.

Remind the user this is a crude concentration measure, not a complete risk model, and not advice.
