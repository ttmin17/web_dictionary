---
slug: davepoon-buildwithclaude-plugins-gsd-skills-mvp-phase
name: gsd:mvp-phase
tagline: Plan an MVP-mode phase — captures an "As a / I want to / So that" user
  story, runs SPIDR splitting, then delegates to plan-phase
summary: Guide the user through MVP-mode planning for a phase. Prompts for an
  "As a / I want to / So that" user story, runs SPIDR splitting check on the
  story, writes the result to ROADMAP.md, and delegates to /gsd:plan-phase...
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
  subpath: plugins/gsd/skills/mvp-phase
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
  path: plugins/gsd/skills/mvp-phase/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.618Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:mvp-phase
  description: Plan an MVP-mode phase — captures an "As a / I want to / So that"
    user story, runs SPIDR splitting, then delegates to plan-phase
  folder_path: plugins/gsd/skills/mvp-phase
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
Guide the user through MVP-mode planning for a phase. Prompts for an "As a / I want to / So that" user story, runs SPIDR splitting check on the story, writes the result to ROADMAP.md, and delegates to `/gsd:plan-phase` (which auto-detects MVP via the roadmap mode field).

**Orchestrator role:** Parse phase argument, validate phase, gather user story, run SPIDR check, persist mode + story to ROADMAP.md, then route to plan-phase.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/mvp-phase.md
@${CLAUDE_PLUGIN_ROOT}/references/user-story-template.md
@${CLAUDE_PLUGIN_ROOT}/references/spidr-splitting.md
@${CLAUDE_PLUGIN_ROOT}/references/planner-mvp-mode.md
</execution_context>

<runtime_note>
**Copilot (VS Code):** Use `vscode_askquestions` wherever this workflow calls `AskUserQuestion`. They are equivalent — `vscode_askquestions` is the VS Code Copilot implementation of the same interactive question API.

**TEXT_MODE fallback:** Set TEXT_MODE=true if `--text` is present in `$ARGUMENTS` OR `text_mode` from init JSON is true. When TEXT_MODE is active, replace every AskUserQuestion call with a plain-text numbered list and ask the user to type their choice number.
</runtime_note>

<context>
Phase number: $ARGUMENTS (required — integer or decimal like `2.1`)

**Flags:**
- `--force` — Allow operating on `in_progress` / `completed` phases
- `--text` — Use plain-text numbered lists instead of TUI menus
</context>

<process>
Execute the mvp-phase workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/mvp-phase.md end-to-end.
Preserve all workflow gates (phase validation, user-story prompt, SPIDR check, ROADMAP.md persistence, delegation to plan-phase).
</process>

<output_format>
When MVP planning concludes (user story written, ROADMAP.md updated, plan-phase delegated), emit a Next Up continuation block following the pattern in `references/continuation-format.md`:

- Show MVP-planning status (e.g., `## ✓ Phase N MVP-Planned — vertical slice captured`)
- Emit a `## ▶ Next Up` heading with `/gsd:execute-phase N` (TDD execution)
- Use **`` `/clear` then: ``** before the command
- Include a parenthetical: *(`/clear` is safe — `/gsd:resume-work` restores position from `HANDOFF.json` if you change your mind)*

MVP planning is a deliberate slice-of-the-cake exercise; clearing context before execution keeps TDD focused on the captured story rather than the planning conversation.
</output_format>
