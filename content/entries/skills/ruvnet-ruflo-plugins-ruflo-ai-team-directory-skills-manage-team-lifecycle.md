---
slug: ruvnet-ruflo-plugins-ruflo-ai-team-directory-skills-manage-team-lifecycle
name: manage-team-lifecycle
tagline: Pauses, resumes, or completes an AI team, or marks a run complete,
  while keeping its evidence. Use when the user asks to pause, stop, resume,
  wrap up,
summary: Read the current state before changing it. A team status is active,
  paused, or complete. A run can be completed only when it has at least one task
  and every task is complete; if the service answers tasksincomplete, li...
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 79
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-ai-team/directory/skills/manage-team-lifecycle
  official_vendor: false
  license: MIT
signals:
  stars: 80579
  last_commit: 2026-11-02T06:38:36Z
  stars_delta_7d: 1236
  stars_growth_pct: 1.6
  trending_score: 1255.25
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74512
    - 76729
    - 79343
    - 80579
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-ai-team/directory/skills/manage-team-lifecycle/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:05:26.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: manage-team-lifecycle
  description: Pauses, resumes, or completes an AI team, or marks a run complete,
    while keeping its evidence. Use when the user asks to pause, stop, resume,
    wrap up, or close a team or run. Changes coordination state only and deletes
    nothing.
  folder_path: plugins/ruflo-ai-team/directory/skills/manage-team-lifecycle
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Manage Team Lifecycle
Uses the RuFlo AI Team connector (server name ruflo-ai-team): the tools team_get, team_update, run_complete and evidence_export.

Read the current state before changing it. A team status is active, paused, or complete. A run can be completed only when it has at least one task and every task is complete; if the service answers tasks_incomplete, list what is still open rather than forcing it. Explain that pausing or completing changes coordination state only, offer the evidence bundle before closing, and never describe completion as deletion. This service has no deletion, public-sharing, or external-action capability.

Next: to keep decisions for later, use the remember-team-context skill before closing.
