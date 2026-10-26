---
slug: ruvnet-ruflo-plugins-ruflo-swarm-skills-monitor-stream
name: monitor-stream
tagline: Stream live swarm events using the Monitor tool for real-time observability
summary: "Use the Monitor tool to stream swarm events in real time instead of polling:"
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
  subpath: plugins/ruflo-swarm/skills/monitor-stream
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
  path: plugins/ruflo-swarm/skills/monitor-stream/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: monitor-stream
  description: Stream live swarm events using the Monitor tool for real-time observability
  folder_path: plugins/ruflo-swarm/skills/monitor-stream
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Use the Monitor tool to stream swarm events in real time instead of polling:

Run via Monitor: `node "${CLAUDE_PLUGIN_ROOT}/scripts/swarm-watch.mjs"` (add `--interval 5` for faster updates; minimum 2 s)

There is no `swarm watch` in the ruflo CLI, so this script polls `swarm status --format json` and prints one NDJSON line when it changes (`swarm.snapshot`, `swarm.changed`, `swarm.error`). It shows status and agent-count changes, not individual task or memory events. Each stdout line triggers a notification.

For one-shot status, use MCP: `mcp__plugin_ruflo-core_ruflo__swarm_status` or `mcp__plugin_ruflo-core_ruflo__swarm_health`.

Prefer Monitor over polling `swarm status` in a loop. See ADR-091 for rationale.
