---
slug: davepoon-buildwithclaude-plugins-gsd-skills-list-workspaces
name: gsd:list-workspaces
tagline: List active GSD workspaces and their status
summary: Scan /gsd-workspaces/ for workspace directories containing WORKSPACE.md
  manifests. Display a summary table with name, path, repo count, strategy, and
  GSD project status.
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
  subpath: plugins/gsd/skills/list-workspaces
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
  path: plugins/gsd/skills/list-workspaces/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.618Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:list-workspaces
  description: List active GSD workspaces and their status
  folder_path: plugins/gsd/skills/list-workspaces
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
Scan `~/gsd-workspaces/` for workspace directories containing `WORKSPACE.md` manifests. Display a summary table with name, path, repo count, strategy, and GSD project status.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/list-workspaces.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
</execution_context>

<process>
Execute the list-workspaces workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/list-workspaces.md end-to-end.
</process>
