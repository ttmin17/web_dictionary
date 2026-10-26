---
slug: davepoon-buildwithclaude-plugins-gsd-skills-new-project
name: gsd:new-project
tagline: Initialize a new project with deep context gathering and PROJECT.md
summary: "Copilot (VS Code): Use vscodeaskquestions wherever this workflow calls
  AskUserQuestion. They are equivalent — vscodeaskquestions is the VS Code
  Copilot implementation of the same interactive question API."
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
  subpath: plugins/gsd/skills/new-project
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
  path: plugins/gsd/skills/new-project/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.619Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:new-project
  description: Initialize a new project with deep context gathering and PROJECT.md
  folder_path: plugins/gsd/skills/new-project
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<runtime_note>
**Copilot (VS Code):** Use `vscode_askquestions` wherever this workflow calls `AskUserQuestion`. They are equivalent — `vscode_askquestions` is the VS Code Copilot implementation of the same interactive question API.
</runtime_note>

<context>
**Flags:**
- `--auto` — Automatic mode. After config questions, runs research → requirements → roadmap without further interaction. Expects idea document via @ reference.
</context>

<objective>
Initialize a new project through unified flow: questioning → research (optional) → requirements → roadmap.

**Creates:**
- `.planning/PROJECT.md` — project context
- `.planning/config.json` — workflow preferences
- `.planning/research/` — domain research (optional)
- `.planning/REQUIREMENTS.md` — scoped requirements
- `.planning/ROADMAP.md` — phase structure
- `.planning/STATE.md` — project memory

**After this command:** Run `/gsd:plan-phase 1` to start execution.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/new-project.md
@${CLAUDE_PLUGIN_ROOT}/references/questioning.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
@${CLAUDE_PLUGIN_ROOT}/templates/project.md
@${CLAUDE_PLUGIN_ROOT}/templates/requirements.md
</execution_context>

<process>
Execute the new-project workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/new-project.md end-to-end.
Preserve all workflow gates (validation, approvals, commits, routing).
</process>
