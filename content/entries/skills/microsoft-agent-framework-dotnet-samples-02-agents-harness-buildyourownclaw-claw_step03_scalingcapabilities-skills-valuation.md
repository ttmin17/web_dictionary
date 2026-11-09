---
slug: microsoft-agent-framework-dotnet-samples-02-agents-harness-buildyourownclaw-claw_step03_scalingcapabilities-skills-valuation
name: valuation
tagline: "Estimate whether a stock looks cheap or expensive using a
  price-to-earnings (P/E) based fair-value method. Use when the user asks if a
  stock is over- "
summary: "When the user asks whether a stock is fairly valued, over-valued, or
  under-valued:"
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agentic-ai
  - agents
  - dotnet
status: active
quality_percentile: 100
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: microsoft/agent-framework
  subpath: dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/valuation
  official_vendor: true
  license: MIT
signals:
  stars: 14599
  last_commit: 2026-11-09T06:38:42Z
  stars_delta_7d: 53
  stars_growth_pct: 0.4
  trending_score: 53.19
  velocity_source: snapshot_delta
  sparkline_4w:
    - 14200
    - 14317
    - 14546
    - 14599
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/agent-framework
  path: dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/valuation/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:38.300Z
  truncated: false
type: agent_skill
skill:
  skill_name: valuation
  description: Estimate whether a stock looks cheap or expensive using a
    price-to-earnings (P/E) based fair-value method. Use when the user asks if a
    stock is over- or under-valued, or for a fair-value / target price.
  folder_path: dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/valuation
  extra_files:
    - references/valuation-guide.md
    - scripts/valuation_metrics.py
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: microsoft-agent-framework
---

## Usage

When the user asks whether a stock is fairly valued, over-valued, or under-valued:

1. Read `references/valuation-guide.md` to pick a sensible target P/E for the company's sector.
2. Run `scripts/valuation_metrics.py` with the current price, trailing EPS, and the target P/E,
   e.g. `--price 462.97 --eps 11.80 --target-pe 32`.
3. Report the computed P/E, the fair-value estimate, and the percentage upside/downside, then state
   plainly whether the stock looks cheap or expensive on this measure.

Always remind the user that a single P/E heuristic is not investment advice and ignores growth,
debt, and many other factors.
