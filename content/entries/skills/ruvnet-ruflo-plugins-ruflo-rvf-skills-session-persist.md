---
slug: ruvnet-ruflo-plugins-ruflo-rvf-skills-session-persist
name: session-persist
tagline: Persist and restore agent sessions across conversations with state snapshots
summary: When you need to pause work and resume later with full context, or when
  you want to checkpoint progress during long-running tasks.
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
  subpath: plugins/ruflo-rvf/skills/session-persist
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
  path: plugins/ruflo-rvf/skills/session-persist/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: session-persist
  description: Persist and restore agent sessions across conversations with state snapshots
  folder_path: plugins/ruflo-rvf/skills/session-persist
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Session Persistence
Save and restore complete agent sessions across conversations.

## When to use

When you need to pause work and resume later with full context, or when you want to checkpoint progress during long-running tasks.

## Steps

1. **Save session** — call `mcp__plugin_ruflo-core_ruflo__session_save` to snapshot current state
2. **List sessions** — call `mcp__plugin_ruflo-core_ruflo__session_list` to see all saved sessions
3. **Restore** — call `mcp__plugin_ruflo-core_ruflo__session_restore` to resume a previous session
4. **Info** — call `mcp__plugin_ruflo-core_ruflo__session_info` for session details and metadata
5. **Clean up** — call `mcp__plugin_ruflo-core_ruflo__session_delete` to remove old sessions

## Session hooks

- `hooks_session-start` — automatically restore context at conversation start
- `hooks_session-end` — automatically save state with metrics export
- `hooks_session-restore` — restore a specific session by ID

## What's persisted

- Agent state and configuration
- Memory entries and patterns
- Learning trajectories and metrics
- Task progress and todos
