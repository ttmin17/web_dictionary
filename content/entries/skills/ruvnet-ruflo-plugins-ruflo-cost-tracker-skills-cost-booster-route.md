---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-booster-route
name: cost-booster-route
tagline: Route tasks through hooks_route, partition by Agent Booster
  availability, and report Tier 1 bypass utilization with $0 cost
summary: Before a batch of similar tasks, or when cost-report shows Sonnet/Opus
  spend on descriptions that look like simple transforms (var-to-const,
  add-types, add-error-handling, async-await, add-logging, remove-console).
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-booster-route
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
  path: plugins/ruflo-cost-tracker/skills/cost-booster-route/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.544Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-booster-route
  description: Route tasks through hooks_route, partition by Agent Booster
    availability, and report Tier 1 bypass utilization with $0 cost
  folder_path: plugins/ruflo-cost-tracker/skills/cost-booster-route
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost Booster Route
Wraps `mcp__plugin_ruflo-core_ruflo__hooks_route` and reports how many tasks the 3-tier router classified as Agent Booster (Tier 1) eligible. Tier 1 bypasses run as WASM transforms — no LLM call, structurally **$0** cost.

## When to use

Before a batch of similar tasks, or when `cost-report` shows Sonnet/Opus spend on descriptions that look like simple transforms (`var-to-const`, `add-types`, `add-error-handling`, `async-await`, `add-logging`, `remove-console`).

## Steps

1. **Collect tasks** — single arg or recent entries from `cost-tracking` via `memory_search`. Cap batch at 50.
2. **Route each** — call `hooks_route` with the description; capture the full response string.
3. **Partition** — group by whether the response contains the literal `[AGENT_BOOSTER_AVAILABLE]` (Tier 1) vs. not (Tier 2/3). Extract `[TASK_MODEL_RECOMMENDATION] Use model="X"` when present.
4. **Compute spend** — Tier 1 partition: $0. Tier 2/3 partition: per-task upper-bound from REFERENCE.md pricing × recommended model.
5. **Report**

   ```
   === Booster bypass report ===
   Tasks analyzed:        50
   Tier 1 (booster):      18 (36%)  — $0.00
   Tier 2/3 (LLM):        32 (64%)  — $X.XX (upper-bound)
   Booster intents:       var-to-const (8), add-types (5), remove-console (5)
   ```

6. **Persist** — `memory_store --namespace cost-tracking --key "booster-route-$(date +%Y%m%d-%H%M%S)" --value '{"tier1": N, "tier2_or_3": M, ...}'` so `cost-report` picks up the tier signal.

## Caveats — claimed upstream, not yet verified

- `[AGENT_BOOSTER_AVAILABLE]` fires only when the upstream router populates `routeResult.agentBoosterIntent.type` (`v3/@claude-flow/cli/src/mcp-tools/hooks-tools.ts:1228`). The published CLI's semantic-VectorDb path does not always trigger the classifier — treat the partition as a **lower bound** on Tier 1 eligibility.
- CLAUDE.md root claims `<1ms` latency and `352× faster` than LLM. `<1ms` and `$0` are structural; `352×` is **claimed upstream, not yet verified** here. Report what the router actually returns.
- See `docs/benchmarks/0002-baseline.md` for the full upstream-claims-vs-measured table.

## Cross-references

ADR-0002 Decision #1 · ruflo-intelligence ADR-0001 §"Neutral" (closes the routing-outcomes loop via `cost-optimize` step 8) · CLAUDE.md root §"3-Tier Model Routing (ADR-026)".
