---
slug: ruvnet-ruflo-plugins-ruflo-intelligence-skills-intelligence-route
name: intelligence-route
tagline: Route tasks via the 3-tier model selector and learned patterns; emits a
  routing rationale via hooks_explain
summary: Before starting any non-trivial task. Replaces manual agent selection
  with data-driven decisions.
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
  subpath: plugins/ruflo-intelligence/skills/intelligence-route
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
  path: plugins/ruflo-intelligence/skills/intelligence-route/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: intelligence-route
  description: Route tasks via the 3-tier model selector and learned patterns;
    emits a routing rationale via hooks_explain
  folder_path: plugins/ruflo-intelligence/skills/intelligence-route
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Intelligence Routing
Pick the optimal agent + model tier for a task using learned patterns + the 3-tier router. Emits a `hooks_explain` rationale so the choice is auditable.

## When to use

Before starting any non-trivial task. Replaces manual agent selection with data-driven decisions.

## Steps

1. **Get an agent recommendation** — `mcp__plugin_ruflo-core_ruflo__hooks_route` with the task description. Returns `{ recommended, confidence, reasoning }`.
2. **Get a model tier recommendation** — `mcp__plugin_ruflo-core_ruflo__hooks_model-route` for Haiku/Sonnet/Opus selection.
3. **Search for similar past patterns** — `mcp__plugin_ruflo-core_ruflo__hooks_intelligence_pattern-search` to find prior successes.
4. **Predict outcome** — `mcp__plugin_ruflo-core_ruflo__neural_predict` with the task description for a confidence-scored prediction.
5. **Spawn the recommended agent** at the recommended model tier.
6. **(If `--why` was passed)** — call `mcp__plugin_ruflo-core_ruflo__hooks_explain` to surface the routing rationale to the user.
7. **After task completes** — call `mcp__plugin_ruflo-core_ruflo__hooks_model-outcome` with `{ task, model, outcome: "success"|"failure"|"escalated" }` to train the router.

## 3-Tier Model Routing

| Tier | Handler | Latency | Cost | When |
|------|---------|---------|------|------|
| 1 | Deterministic codemod (TS compiler) | ~1ms | $0 | Structural transforms with no LLM: `var-to-const`, `remove-console`, `add-logging` |
| 2 | Haiku | ~500ms | ~$0.0002 | Low complexity (<30%), bug fixes, quick patches |
| 3 | Sonnet/Opus | 2–5s | $0.003–$0.015 | Complex reasoning, architecture, security, multi-file refactors |

When `hooks_route` returns `[CODEMOD_AVAILABLE]` for a deterministic intent (`var-to-const`, `remove-console`, `add-logging`), call `mcp__plugin_ruflo-core_ruflo__hooks_codemod` with the intent + file — it applies the transform via the TypeScript compiler at $0, no LLM. Note: `add-types`, `add-error-handling`, `async-await` require judgement and route to a model (Tier 2/3) per ADR-143; they are NOT $0 codemods. Agent Booster is a fast-apply merge engine for LLM-produced edits, not the Tier-1 path.

## Recording outcomes

Closing the routing loop is mandatory:

```bash
# Success (task, model and outcome are all required; model is haiku|sonnet|opus)
npx @claude-flow/cli@latest mcp exec -t hooks_model-outcome -p '{"task": "fix the flaky retry test", "model": "haiku", "outcome": "success"}'

# The model was too small and the work moved up a tier: use "escalated"; use "failure" if it did not work out
npx @claude-flow/cli@latest mcp exec -t hooks_model-outcome -p '{"task": "fix the flaky retry test", "model": "haiku", "outcome": "escalated"}'
```

The router learns from these calls. Skipping them = no learning.

## CLI alternative

```bash
npx @claude-flow/cli@latest hooks route --task "description"
npx @claude-flow/cli@latest hooks pre-task --description "description"
npx @claude-flow/cli@latest hooks explain --task "description" --verbose
```
