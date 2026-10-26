---
slug: davepoon-buildwithclaude-plugins-gsd-skills-code-review-fix
name: gsd:code-review-fix
tagline: Auto-fix issues found by code review in REVIEW.md. Spawns fixer agent,
  commits each fix atomically, produces REVIEW-FIX.md summary.
summary: Auto-fix issues found by code review. Reads REVIEW.md from the
  specified phase, spawns gsd-code-fixer agent to apply fixes, and produces
  REVIEW-FIX.md summary.
categories:
  - coding-agents
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
  subpath: plugins/gsd/skills/code-review-fix
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
  path: plugins/gsd/skills/code-review-fix/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.617Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:code-review-fix
  description: Auto-fix issues found by code review in REVIEW.md. Spawns fixer
    agent, commits each fix atomically, produces REVIEW-FIX.md summary.
  folder_path: plugins/gsd/skills/code-review-fix
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
Auto-fix issues found by code review. Reads REVIEW.md from the specified phase, spawns gsd-code-fixer agent to apply fixes, and produces REVIEW-FIX.md summary.

Arguments:
- Phase number (required) — which phase's REVIEW.md to fix (e.g., "2" or "02")
- `--all` (optional) — include Info findings in fix scope (default: Critical + Warning only)
- `--auto` (optional) — enable fix + re-review iteration loop, capped at 3 iterations

Output: {padded_phase}-REVIEW-FIX.md in phase directory + inline summary of fixes applied
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/code-review-fix.md
</execution_context>

<context>
Phase: $ARGUMENTS (first positional argument is phase number)

Optional flags parsed from $ARGUMENTS:
- `--all` — Include Info findings in fix scope. Default behavior fixes Critical + Warning only.
- `--auto` — Enable fix + re-review iteration loop. After applying fixes, re-run code-review at same depth. If new issues found, iterate. Cap at 3 iterations total. Without this flag, single fix pass only.

Context files (CLAUDE.md, REVIEW.md, phase state) are resolved inside the workflow via `gsd-sdk query init.phase-op` and delegated to agent via config blocks.
</context>

<process>
This command is a thin dispatch layer. It parses arguments and delegates to the workflow.

Execute the code-review-fix workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/code-review-fix.md end-to-end.

The workflow (not this command) enforces these gates:
- Phase validation (before config gate)
- Config gate check (workflow.code_review)
- REVIEW.md existence check (error if missing)
- REVIEW.md status check (skip if clean/skipped)
- Agent spawning (gsd-code-fixer)
- Iteration loop (if --auto, capped at 3 iterations)
- Result presentation (inline summary + next steps)
</process>
