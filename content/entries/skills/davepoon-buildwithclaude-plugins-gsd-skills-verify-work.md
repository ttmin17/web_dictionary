---
slug: davepoon-buildwithclaude-plugins-gsd-skills-verify-work
name: gsd:verify-work
tagline: Validate built features through conversational UAT
summary: Validate built features through conversational testing with persistent state.
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
  subpath: plugins/gsd/skills/verify-work
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
  path: plugins/gsd/skills/verify-work/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.620Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:verify-work
  description: Validate built features through conversational UAT
  folder_path: plugins/gsd/skills/verify-work
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
Validate built features through conversational testing with persistent state.

Purpose: Confirm what Claude built actually works from user's perspective. One test at a time, plain text responses, no interrogation. When issues are found, automatically diagnose, plan fixes, and prepare for execution.

Output: {phase_num}-UAT.md tracking all test results. If issues found: diagnosed gaps, verified fix plans ready for /gsd:execute-phase
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/verify-work.md
@${CLAUDE_PLUGIN_ROOT}/templates/UAT.md
</execution_context>

<context>
Phase: $ARGUMENTS (optional)
- If provided: Test specific phase (e.g., "4")
- If not provided: Check for active sessions or prompt for phase

Context files are resolved inside the workflow (`init verify-work`) and delegated via `<files_to_read>` blocks.
</context>

<process>
Execute the verify-work workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/verify-work.md end-to-end.
Preserve all workflow gates (session management, test presentation, diagnosis, fix planning, routing).
</process>

<output_format>
When this workflow concludes (verification passed or routed to gap closure), emit a Next Up continuation block following the pattern in `references/continuation-format.md`:

- Show verification status (e.g., `## ✓ Verification Passed` or `## ⚠ Gaps Found — Routing to Plan` with details)
- Emit a `## ▶ Next Up` heading with the next likely command (`/gsd:complete-milestone` if all phases verified, `/gsd:plan-phase --gaps` if gaps found, `/gsd:next` if unsure)
- Use **`` `/clear` then: ``** before the command
- Include a parenthetical: *(`/clear` is safe — `/gsd:resume-work` restores position from `HANDOFF.json` if you change your mind)*
- Add an "Also available:" section with 1-3 alternatives where relevant

Verification accumulates lots of test/UAT prose that won't help downstream; phase-end is a clean boundary for `/clear`.
</output_format>
