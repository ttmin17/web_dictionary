---
slug: davepoon-buildwithclaude-plugins-gsd-skills-progress
name: gsd:progress
tagline: Check project progress, show context, and route to next action (execute
  or plan). Use --forensic to append a 6-check integrity audit after the standar
summary: Check project progress, summarize recent work and what's ahead, then
  intelligently route to the next action - either executing an existing plan or
  creating the next one.
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/gsd/skills/progress
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/gsd/skills/progress/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.619Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:progress
  description: Check project progress, show context, and route to next action
    (execute or plan). Use --forensic to append a 6-check integrity audit after
    the standard report.
  folder_path: plugins/gsd/skills/progress
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
Check project progress, summarize recent work and what's ahead, then intelligently route to the next action - either executing an existing plan or creating the next one.

Provides situational awareness before continuing work.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/progress.md
</execution_context>

<process>
Execute the progress workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/progress.md end-to-end.
Preserve all routing logic (Routes A through F) and edge case handling.
</process>
