---
slug: davepoon-buildwithclaude-plugins-gsd-skills-ultraplan-phase
name: gsd:ultraplan-phase
tagline: "[BETA] Offload plan phase to Claude Code's ultraplan cloud — drafts
  remotely while terminal stays free, review in browser with inline comments,
  import"
summary: Offload GSD's plan phase to Claude Code's ultraplan cloud infrastructure.
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
  subpath: plugins/gsd/skills/ultraplan-phase
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
  path: plugins/gsd/skills/ultraplan-phase/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.620Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:ultraplan-phase
  description: "[BETA] Offload plan phase to Claude Code's ultraplan cloud —
    drafts remotely while terminal stays free, review in browser with inline
    comments, import back via /gsd:import. Claude Code only."
  folder_path: plugins/gsd/skills/ultraplan-phase
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
Offload GSD's plan phase to Claude Code's ultraplan cloud infrastructure.

Ultraplan drafts the plan in a remote cloud session while your terminal stays free.
Review and comment on the plan in your browser, then import it back via /gsd:import --from.

⚠ BETA: ultraplan is in research preview. Use /gsd:plan-phase for stable local planning.
Requirements: Claude Code v2.1.91+, claude.ai account, GitHub repository.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/ultraplan-phase.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the ultraplan-phase workflow end-to-end.
</process>
