---
slug: davepoon-buildwithclaude-plugins-gsd-skills-new-milestone
name: gsd:new-milestone
tagline: Start a new milestone cycle — update PROJECT.md and route to requirements
summary: "Start a new milestone: questioning → research (optional) →
  requirements → roadmap."
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
  subpath: plugins/gsd/skills/new-milestone
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
  path: plugins/gsd/skills/new-milestone/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.619Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:new-milestone
  description: Start a new milestone cycle — update PROJECT.md and route to requirements
  folder_path: plugins/gsd/skills/new-milestone
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
Start a new milestone: questioning → research (optional) → requirements → roadmap.

Brownfield equivalent of new-project. Project exists, PROJECT.md has history. Gathers "what's next", updates PROJECT.md, then runs requirements → roadmap cycle.

**Creates/Updates:**
- `.planning/PROJECT.md` — updated with new milestone goals
- `.planning/research/` — domain research (optional, NEW features only)
- `.planning/REQUIREMENTS.md` — scoped requirements for this milestone
- `.planning/ROADMAP.md` — phase structure (continues numbering)
- `.planning/STATE.md` — reset for new milestone

**After:** `/gsd:plan-phase [N]` to start execution.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/new-milestone.md
@${CLAUDE_PLUGIN_ROOT}/references/questioning.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
@${CLAUDE_PLUGIN_ROOT}/templates/project.md
@${CLAUDE_PLUGIN_ROOT}/templates/requirements.md
</execution_context>

<context>
Milestone name: $ARGUMENTS (optional - will prompt if not provided)

Project and milestone context files are resolved inside the workflow (`init new-milestone`) and delegated via `<files_to_read>` blocks where subagents are used.
</context>

<process>
Execute the new-milestone workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/new-milestone.md end-to-end.
Preserve all workflow gates (validation, questioning, research, requirements, roadmap approval, commits).
</process>
