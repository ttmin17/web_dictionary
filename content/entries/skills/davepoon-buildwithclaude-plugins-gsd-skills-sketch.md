---
slug: davepoon-buildwithclaude-plugins-gsd-skills-sketch
name: gsd:sketch
tagline: Sketch UI/design ideas with throwaway HTML mockups, or propose what to
  sketch next (frontier mode)
summary: Explore design directions through throwaway HTML mockups before
  committing to implementation. Each sketch produces 2-3 variants for
  comparison. Sketches live in .planning/sketches/ and integrate with GSD commit
  patter...
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
  subpath: plugins/gsd/skills/sketch
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
  path: plugins/gsd/skills/sketch/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.620Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:sketch
  description: Sketch UI/design ideas with throwaway HTML mockups, or propose what
    to sketch next (frontier mode)
  folder_path: plugins/gsd/skills/sketch
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
Explore design directions through throwaway HTML mockups before committing to implementation.
Each sketch produces 2-3 variants for comparison. Sketches live in `.planning/sketches/` and
integrate with GSD commit patterns, state tracking, and handoff workflows. Loads spike
findings to ground mockups in real data shapes and validated interaction patterns.

Two modes:
- **Idea mode** (default) — describe a design idea to sketch
- **Frontier mode** (no argument or "frontier") — analyzes existing sketch landscape and proposes consistency and frontier sketches

Does not require `/gsd:new-project` — auto-creates `.planning/sketches/` if needed.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/sketch.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
@${CLAUDE_PLUGIN_ROOT}/references/sketch-theme-system.md
@${CLAUDE_PLUGIN_ROOT}/references/sketch-interactivity.md
@${CLAUDE_PLUGIN_ROOT}/references/sketch-tooling.md
@${CLAUDE_PLUGIN_ROOT}/references/sketch-variant-patterns.md
</execution_context>

<runtime_note>
**Copilot (VS Code):** Use `vscode_askquestions` wherever this workflow calls `AskUserQuestion`.
</runtime_note>

<context>
Design idea: $ARGUMENTS

**Available flags:**
- `--quick` — Skip mood/direction intake, jump straight to decomposition and building. Use when the design direction is already clear.
</context>

<process>
Execute the sketch workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/sketch.md end-to-end.
Preserve all workflow gates (intake, decomposition, target stack research, variant evaluation, MANIFEST updates, commit patterns).
</process>
