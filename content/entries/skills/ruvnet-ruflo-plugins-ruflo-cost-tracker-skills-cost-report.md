---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-report
name: cost-report
tagline: Generate a cost report showing token usage and USD costs by agent and model
summary: When you need to understand current spending -- how much each agent
  costs, which models consume the most budget, and whether you're on track to
  stay within budget.
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-report
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
  path: plugins/ruflo-cost-tracker/skills/cost-report/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.544Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-report
  description: Generate a cost report showing token usage and USD costs by agent and model
  folder_path: plugins/ruflo-cost-tracker/skills/cost-report
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost Report
Generate a comprehensive cost report showing token usage, USD costs, and budget utilization for the specified period.

## When to use

When you need to understand current spending -- how much each agent costs, which models consume the most budget, and whether you're on track to stay within budget.

## Steps

1. **Retrieve usage** -- call `mcp__plugin_ruflo-core_ruflo__memory_search` (or `_list` / `_retrieve`) on the `cost-tracking` namespace for the specified period (default: today). The `memory_*` tools route by namespace string; the `agentdb_hierarchical-*` tools do **not** (they route by tier `working|episodic|semantic`), so don't use them here. See [ruflo-agentdb ADR-0001 §"Namespace convention"](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-cost-tracker/skills/cost-report/../../../ruflo-agentdb/docs/adrs/0001-agentdb-optimization.md) for the routing contract.
1a. **Read measured booster data** -- if `docs/benchmarks/runs/latest.json` exists, load it via `Bash`-shelled `node -e 'console.log(JSON.stringify(JSON.parse(require("fs").readFileSync("docs/benchmarks/runs/latest.json")).summary))'`. This provides Tier 1 measured values — booster cost/edit ($0), avg latency, win rate, plus any LLM baseline that was run (Gemini, Sonnet 4.6, Opus 4.7 latencies and per-edit costs). Use these in step 4 for the **measured** Tier breakdown rather than estimated.
2. **Compute costs** -- for each record, calculate cost using model pricing:
   - Haiku: $0.25/M input, $1.25/M output
   - Sonnet: $3.00/M input, $15.00/M output
   - Opus: $15.00/M input, $75.00/M output
   - Include cache write/read costs where applicable
3. **Aggregate by model** -- sum costs per model, compute percentage share
4. **Aggregate by tier** -- classify each record as Tier 1 / Tier 2 / Tier 3 using **three** signals (in priority order): (a) bench data from step 1a — for any record that maps to a measured booster intent, use $0 / measured-latency directly; (b) the `[AGENT_BOOSTER_AVAILABLE]` flag stored by the `cost-booster-route` skill in `cost-tracking`; (c) the model name as fallback (`haiku` → Tier 2; `sonnet`/`opus` → Tier 3). Sum costs per tier, compute share, and count Tier 1 bypasses. The tier breakdown is the most actionable single line — it tells the user what fraction of Sonnet/Opus spend was Tier 1-eligible.
5. **Aggregate by agent** -- sum costs per agent, include the model each agent used
6. **Check budget** -- recall budget configuration via `memory_retrieve` and compute utilization percentage, check alert thresholds (50%/75%/90%/100%)
7. **Report** -- display: total cost, budget remaining, **tier breakdown** (Tier 1 / Tier 2 / Tier 3), model breakdown, agent breakdown, active alerts. See REFERENCE.md §"Cost report shape" for the canonical layout.

## CLI alternative

```bash
npx @claude-flow/cli@latest memory search --query "cost report for today" --namespace cost-tracking
npx @claude-flow/cli@latest memory list --namespace cost-tracking
```
