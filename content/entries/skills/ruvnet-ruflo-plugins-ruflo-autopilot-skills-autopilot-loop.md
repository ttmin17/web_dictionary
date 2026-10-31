---
slug: ruvnet-ruflo-plugins-ruflo-autopilot-skills-autopilot-loop
name: autopilot-loop
tagline: Run an autonomous /loop iteration -- check progress, work on next task,
  schedule next wake
summary: "1. Check status: mcppluginruflo-corerufloautopilotstatus 2. If all
  tasks complete or max iterations reached, call
  mcppluginruflo-corerufloautopilotdisable and stop 3. Get prediction:
  mcppluginruflo-corerufloautopilotp..."
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
  subpath: plugins/ruflo-autopilot/skills/autopilot-loop
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
  path: plugins/ruflo-autopilot/skills/autopilot-loop/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.542Z
  truncated: false
type: agent_skill
skill:
  skill_name: autopilot-loop
  description: Run an autonomous /loop iteration -- check progress, work on next
    task, schedule next wake
  folder_path: plugins/ruflo-autopilot/skills/autopilot-loop
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Run one autopilot iteration using Claude Code's native /loop:

1. Check status: `mcp__plugin_ruflo-core_ruflo__autopilot_status`
2. If all tasks complete or max iterations reached, call `mcp__plugin_ruflo-core_ruflo__autopilot_disable` and stop
3. Get prediction: `mcp__plugin_ruflo-core_ruflo__autopilot_predict` for the optimal next action
4. Execute the predicted task (spawn agent, edit code, run tests, etc.)
5. Log via `mcp__plugin_ruflo-core_ruflo__autopilot_log`
6. Schedule next: `ScheduleWakeup({ delaySeconds: 270, reason: "next autopilot iteration" })`

### Cache-Aware Scheduling

Always use delay 270s (under 300s cache TTL) to keep the prompt cache warm between iterations.

### Task Sources

Autopilot discovers tasks from:
- **team-tasks**: Claude Code TaskList entries
- **swarm-tasks**: MCP task_list entries
- **file-checklist**: Markdown checkbox items in tracked files

Configure: `mcp__plugin_ruflo-core_ruflo__autopilot_config({ taskSources: ["team-tasks", "swarm-tasks"] })`
