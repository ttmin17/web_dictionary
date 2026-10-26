---
slug: davepoon-buildwithclaude-plugins-gsd-skills-new-workspace
name: gsd:new-workspace
tagline: Create an isolated workspace with repo copies and independent .planning/
summary: "Flags: - --name (required) — Workspace name - --repos —
  Comma-separated repo paths or names. If omitted, interactive selection from
  child git repos in cwd - --path — Target directory. Defaults to
  /gsd-workspaces/ - --..."
categories:
  - productivity-ops
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
  subpath: plugins/gsd/skills/new-workspace
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
  path: plugins/gsd/skills/new-workspace/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.619Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:new-workspace
  description: Create an isolated workspace with repo copies and independent .planning/
  folder_path: plugins/gsd/skills/new-workspace
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<context>
**Flags:**
- `--name` (required) — Workspace name
- `--repos` — Comma-separated repo paths or names. If omitted, interactive selection from child git repos in cwd
- `--path` — Target directory. Defaults to `~/gsd-workspaces/<name>`
- `--strategy` — `worktree` (default, lightweight) or `clone` (fully independent)
- `--branch` — Branch to checkout. Defaults to `workspace/<name>`
- `--auto` — Skip interactive questions, use defaults
</context>

<objective>
Create a physical workspace directory containing copies of specified git repos (as worktrees or clones) with an independent `.planning/` directory for isolated GSD sessions.

**Use cases:**
- Multi-repo orchestration: work on a subset of repos in parallel with isolated GSD state
- Feature branch isolation: create a worktree of the current repo with its own `.planning/`

**Creates:**
- `<path>/WORKSPACE.md` — workspace manifest
- `<path>/.planning/` — independent planning directory
- `<path>/<repo>/` — git worktree or clone for each specified repo

**After this command:** `cd` into the workspace and run `/gsd:new-project` to initialize GSD.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/new-workspace.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
</execution_context>

<process>
Execute the new-workspace workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/new-workspace.md end-to-end.
Preserve all workflow gates (validation, approvals, commits, routing).
</process>
