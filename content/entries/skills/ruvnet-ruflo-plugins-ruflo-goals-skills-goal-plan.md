---
slug: ruvnet-ruflo-plugins-ruflo-goals-skills-goal-plan
name: goal-plan
tagline: Create and execute Goal-Oriented Action Plans (GOAP) with precondition
  analysis, cost optimization, and adaptive replanning
summary: When you have a complex objective that requires multiple steps, has
  dependencies between steps, and may need adaptive replanning as conditions
  change.
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
  subpath: plugins/ruflo-goals/skills/goal-plan
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
  path: plugins/ruflo-goals/skills/goal-plan/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: goal-plan
  description: Create and execute Goal-Oriented Action Plans (GOAP) with
    precondition analysis, cost optimization, and adaptive replanning
  folder_path: plugins/ruflo-goals/skills/goal-plan
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Goal Plan
Create and execute intelligent plans using Goal-Oriented Action Planning (GOAP).

## When to use

When you have a complex objective that requires multiple steps, has dependencies between steps, and may need adaptive replanning as conditions change.

## Steps

1. **Define goal state** — what does "done" look like? List concrete success criteria
2. **Assess current state** — what's true now? What assets, code, infrastructure exist?
3. **Identify gap** — what must change between current and goal state?
4. **Inventory actions** — list available actions with:
   - Preconditions (what must be true before this action)
   - Effects (what becomes true after this action)
   - Cost estimate (time, complexity, risk)
5. **Generate plan** — find the optimal action sequence using A* through the state space
6. **Record trajectory** — call `mcp__plugin_ruflo-core_ruflo__hooks_intelligence_trajectory-start` to begin tracking
7. **Create tasks** — call `mcp__plugin_ruflo-core_ruflo__task_create` for each action in the plan
8. **Execute** — work through tasks in dependency order:
   - Before each action: verify preconditions still hold
   - After each action: verify effects achieved
   - Record each step via `mcp__plugin_ruflo-core_ruflo__hooks_intelligence_trajectory-step`
9. **Monitor & replan** — if an action fails or produces unexpected results:
   - Reassess current state
   - Recalculate optimal path from new state
   - Update remaining tasks
10. **Complete trajectory** — call `mcp__plugin_ruflo-core_ruflo__hooks_intelligence_trajectory-end`
11. **Store successful plan** — call `mcp__plugin_ruflo-core_ruflo__memory_store` with namespace `goap-plans`

## Plan output format

```
Goal: [concrete objective]
Current State: [key facts]
Plan Cost: [estimated effort]
Steps:
  1. [action] — precondition: [X], effect: [Y], cost: [Z]
  2. [action] — precondition: [Y], effect: [W], cost: [Z]
  ...
Risk Factors: [what could force a replan]
Fallback: [alternative approach if primary path fails]
```

## Replanning triggers

- Action fails (precondition no longer met)
- Unexpected side effects detected
- New information changes goal definition
- Cost exceeds threshold
- External dependency becomes unavailable
