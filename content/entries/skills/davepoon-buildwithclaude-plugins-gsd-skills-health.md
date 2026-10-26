---
slug: davepoon-buildwithclaude-plugins-gsd-skills-health
name: gsd:health
tagline: Diagnose planning directory health and optionally repair issues
summary: Validate .planning/ directory integrity and report actionable issues.
  Checks for missing files, invalid configurations, inconsistent state, and
  orphaned plans.
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
  subpath: plugins/gsd/skills/health
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
  path: plugins/gsd/skills/health/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.618Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:health
  description: Diagnose planning directory health and optionally repair issues
  folder_path: plugins/gsd/skills/health
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
Validate `.planning/` directory integrity and report actionable issues. Checks for missing files, invalid configurations, inconsistent state, and orphaned plans.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/health.md
</execution_context>

<process>
Execute the health workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/health.md end-to-end.
Parse --repair flag from arguments and pass to workflow.
</process>
