---
slug: davepoon-buildwithclaude-plugins-gsd-skills-add-phase
name: gsd:add-phase
tagline: Add phase to end of current milestone in roadmap
summary: Add a new integer phase to the end of the current milestone in the roadmap.
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
  subpath: plugins/gsd/skills/add-phase
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
  path: plugins/gsd/skills/add-phase/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.617Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:add-phase
  description: Add phase to end of current milestone in roadmap
  folder_path: plugins/gsd/skills/add-phase
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
Add a new integer phase to the end of the current milestone in the roadmap.

Routes to the add-phase workflow which handles:
- Phase number calculation (next sequential integer)
- Directory creation with slug generation
- Roadmap structure updates
- STATE.md roadmap evolution tracking
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/add-phase.md
</execution_context>

<context>
Arguments: $ARGUMENTS (phase description)

Roadmap and state are resolved in-workflow via `init phase-op` and targeted tool calls.
</context>

<process>
**Follow the add-phase workflow** from `@${CLAUDE_PLUGIN_ROOT}/workflows/add-phase.md`.

The workflow handles all logic including:
1. Argument parsing and validation
2. Roadmap existence checking
3. Current milestone identification
4. Next phase number calculation (ignoring decimals)
5. Slug generation from description
6. Phase directory creation
7. Roadmap entry insertion
8. STATE.md updates
</process>
