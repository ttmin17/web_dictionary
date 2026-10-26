---
slug: paperclipai-paperclip-packages-skills-catalog-catalog-bundled-paperclip-operations-task-planning
name: task-planning
tagline: Write or revise a useful Paperclip plan with a clear outcome and
  verification. Use when a plan is requested or uncertainty needs resolving
  before exec
summary: Describe the intended outcome, relevant constraints, chosen approach,
  and how to verify success. Include uncertainties or decisions that affect
  execution. Use the user's preferred format; keep implementation steps wit...
categories:
  - agent-frameworks
tags:
  - acpx
  - agent-orchestration
  - agent-skills
  - agentic-ai
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: paperclipai/paperclip
  subpath: packages/skills-catalog/catalog/bundled/paperclip-operations/task-planning
  official_vendor: false
  license: MIT
signals:
  stars: 107406
  last_commit: 2026-10-26T06:44:43Z
  stars_delta_7d: 3106
  stars_growth_pct: 3
  trending_score: 3198.5
  velocity_source: snapshot_delta
  sparkline_4w:
    - 101411
    - 104300
    - 107406
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: paperclipai/paperclip
  path: packages/skills-catalog/catalog/bundled/paperclip-operations/task-planning/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:41:15.000Z
  truncated: false
type: agent_skill
skill:
  skill_name: task-planning
  description: Write or revise a useful Paperclip plan with a clear outcome and
    verification. Use when a plan is requested or uncertainty needs resolving
    before execution.
  folder_path: packages/skills-catalog/catalog/bundled/paperclip-operations/task-planning
  extra_files: []
  pack_total_skills: 37
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: paperclipai-paperclip
---

# Task planning
Plan only as much as the work needs. If execution is authorized and the next step
is small and clear, do it. A request for a plan alone does not require child tasks
or a new approval gate.

Describe the intended outcome, relevant constraints, chosen approach, and how to
verify success. Include uncertainties or decisions that affect execution. Use the
user's preferred format; keep implementation steps within one owner's task unless
another owner, useful parallel output, dependency, or independent review warrants
separate work.

Save a requested plan as the issue document with key `plan`. Update its current
revision instead of duplicating it, and link the saved document in your response.
Use the native document tools when available; legacy agents follow the `paperclip`
skill's document and planning API mechanics.

Respect planning mode and explicit approval requests. When approval is required,
request confirmation of the latest plan revision and wait for that decision.
After acceptance, execute cohesive work on the current ordinary task. Use
`paperclip-converting-plans-to-tasks` when delegation is justified.
