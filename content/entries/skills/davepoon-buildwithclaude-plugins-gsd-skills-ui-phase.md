---
slug: davepoon-buildwithclaude-plugins-gsd-skills-ui-phase
name: gsd:ui-phase
tagline: Generate UI design contract (UI-SPEC.md) for frontend phases
summary: "Create a UI design contract (UI-SPEC.md) for a frontend phase.
  Orchestrates gsd-ui-researcher and gsd-ui-checker. Flow: Validate → Research
  UI → Verify UI-SPEC → Done"
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
  subpath: plugins/gsd/skills/ui-phase
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
  path: plugins/gsd/skills/ui-phase/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.620Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:ui-phase
  description: Generate UI design contract (UI-SPEC.md) for frontend phases
  folder_path: plugins/gsd/skills/ui-phase
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
Create a UI design contract (UI-SPEC.md) for a frontend phase.
Orchestrates gsd-ui-researcher and gsd-ui-checker.
Flow: Validate → Research UI → Verify UI-SPEC → Done
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/ui-phase.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
</execution_context>

<context>
Phase number: $ARGUMENTS — optional, auto-detects next unplanned phase if omitted.
</context>

<process>
Execute @${CLAUDE_PLUGIN_ROOT}/workflows/ui-phase.md end-to-end.
Preserve all workflow gates.
</process>
