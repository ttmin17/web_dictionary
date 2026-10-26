---
slug: davepoon-buildwithclaude-plugins-budgetclaw-skills-spend
name: spend
tagline: Show current Claude Code spend by project and branch via BudgetClaw
summary: "Show the current spend status:"
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
  subpath: plugins/budgetclaw/skills/spend
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
  path: plugins/budgetclaw/skills/spend/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.601Z
  truncated: false
type: agent_skill
skill:
  skill_name: spend
  description: Show current Claude Code spend by project and branch via BudgetClaw
  folder_path: plugins/budgetclaw/skills/spend
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

Show the current spend status:

!`budgetclaw status`

If the user asks about budget limits, also show:

!`budgetclaw limit list`

If there are active breach locks, show:

!`budgetclaw locks list`
