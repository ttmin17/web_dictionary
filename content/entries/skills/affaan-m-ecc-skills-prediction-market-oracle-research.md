---
slug: affaan-m-ecc-skills-prediction-market-oracle-research
name: prediction-market-oracle-research
tagline: Research prediction markets as data sources or oracle signals for
  products, agents, dashboards, and corporate decision intelligence. Use for
  source-gr
summary: "- Do not treat market prices as objective truth. - Do not provide
  investment advice or trading recommendations. - Separate venue mechanics,
  liquidity, incentives, and resolution rules from the implied signal. - Call
  o..."
categories:
  - domain-research
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: skills/prediction-market-oracle-research
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: skills/prediction-market-oracle-research/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.038Z
  truncated: false
type: agent_skill
skill:
  skill_name: prediction-market-oracle-research
  description: Research prediction markets as data sources or oracle signals for
    products, agents, dashboards, and corporate decision intelligence. Use for
    source-grounded analysis of market-implied probabilities, caveats, and
    integration patterns without investment advice. Use when evaluating
    prediction markets as a data source or oracle signal for a product, agent,
    or dashboard.
  folder_path: skills/prediction-market-oracle-research
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Prediction Market Oracle Research
Use this skill when prediction markets are being considered as a data source,
forecasting input, oracle-like signal, or decision-intelligence layer.

## Guardrails

- Do not treat market prices as objective truth.
- Do not provide investment advice or trading recommendations.
- Separate venue mechanics, liquidity, incentives, and resolution rules from the
  implied signal.
- Call out manipulation, thin liquidity, stale markets, and ambiguous outcomes.
- For on-chain or execution-linked systems, run `llm-trading-agent-security`
  before granting any write authority.

## Research Workflow

1. Define the decision the signal is meant to inform.
2. Find relevant markets, events, tags, and venues.
3. Record market-implied probabilities with timestamps and source links.
4. Evaluate signal quality:
   - liquidity
   - spread
   - market age
   - trader/incentive concentration if known
   - resolution authority
   - geography or account restrictions
5. Compare against non-market sources such as filings, news, polls, research,
   customer data, or internal KPIs.
6. Recommend whether the signal is usable, weak, or unsuitable for the stated
   decision.

## Integration Patterns

- Research assistant: source-grounded context for a human analyst.
- Dashboard signal: market-implied probability alongside internal metrics.
- Agent memory input: a time-stamped signal that can be retrieved later.
- Alerting input: notify when probabilities, spreads, or liquidity cross a
  threshold.
- Scenario planning: compare multiple event outcomes without automating trades.

## Output Contract

Use:

1. decision context
2. market sources
3. signal quality
4. comparison sources
5. integration recommendation
6. caveats

End with:

```text
Prediction-market signals are informational inputs, not investment advice.
```
