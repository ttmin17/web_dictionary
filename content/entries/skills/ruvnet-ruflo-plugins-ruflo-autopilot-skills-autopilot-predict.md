---
slug: ruvnet-ruflo-plugins-ruflo-autopilot-skills-autopilot-predict
name: autopilot-predict
tagline: Use learned patterns and current state to predict the optimal next action
summary: 1. Call mcppluginruflo-corerufloautopilotpredict for the recommended
  next action 2. If confidence > 0.7, execute the prediction directly 3. If
  confidence < 0.7, check mcppluginruflo-corerufloautopilotprogress for task...
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
  subpath: plugins/ruflo-autopilot/skills/autopilot-predict
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
  path: plugins/ruflo-autopilot/skills/autopilot-predict/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.542Z
  truncated: false
type: agent_skill
skill:
  skill_name: autopilot-predict
  description: Use learned patterns and current state to predict the optimal next action
  folder_path: plugins/ruflo-autopilot/skills/autopilot-predict
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Predict what to work on next using Ruflo autopilot intelligence:

1. Call `mcp__plugin_ruflo-core_ruflo__autopilot_predict` for the recommended next action
2. If confidence > 0.7, execute the prediction directly
3. If confidence < 0.7, check `mcp__plugin_ruflo-core_ruflo__autopilot_progress` for task breakdown
4. Pick the highest-priority incomplete task
5. After completing work, call `mcp__plugin_ruflo-core_ruflo__autopilot_learn` to update patterns

### Learning Pipeline

- `mcp__plugin_ruflo-core_ruflo__autopilot_learn` -- discover success patterns from completed tasks
- `mcp__plugin_ruflo-core_ruflo__autopilot_history({ query: "KEYWORD" })` -- search past completions
- Patterns are stored in AgentDB for cross-session recall

### Integration with /loop

When running inside a `/loop`, the predict skill guides each iteration:
- High confidence prediction -> execute immediately
- Low confidence -> fall back to task list priority order
- No tasks remaining -> disable autopilot and exit loop
