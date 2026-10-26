---
slug: davepoon-buildwithclaude-plugins-gsd-skills-discuss-phase
name: gsd:discuss-phase
tagline: Gather phase context through adaptive questioning before planning. Use
  --all to skip area selection and discuss all gray areas interactively. Use
  --au
summary: Extract implementation decisions that downstream agents need —
  researcher and planner will use CONTEXT.md to know what to investigate and
  what choices are locked.
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
  subpath: plugins/gsd/skills/discuss-phase
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
  path: plugins/gsd/skills/discuss-phase/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.618Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:discuss-phase
  description: Gather phase context through adaptive questioning before planning.
    Use --all to skip area selection and discuss all gray areas interactively.
    Use --auto to skip interactive questions (Claude picks recommended
    defaults). Use --chain for interactive discuss followed by automatic
    plan+execute. Use --power for bulk question generation into a file-based UI
    (answer at your own pace).
  folder_path: plugins/gsd/skills/discuss-phase
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
Extract implementation decisions that downstream agents need — researcher and planner will use CONTEXT.md to know what to investigate and what choices are locked.

**How it works:**
1. Load prior context (PROJECT.md, REQUIREMENTS.md, STATE.md, prior CONTEXT.md files)
2. Scout codebase for reusable assets and patterns
3. Analyze phase — skip gray areas already decided in prior phases
4. Present remaining gray areas — user selects which to discuss
5. Deep-dive each selected area until satisfied
6. Create CONTEXT.md with decisions that guide research and planning

**Output:** `{phase_num}-CONTEXT.md` — decisions clear enough that downstream agents can act without asking the user again
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/discuss-phase.md
@${CLAUDE_PLUGIN_ROOT}/workflows/discuss-phase-assumptions.md
@${CLAUDE_PLUGIN_ROOT}/workflows/discuss-phase-power.md
@${CLAUDE_PLUGIN_ROOT}/templates/context.md
</execution_context>

<runtime_note>
**Copilot (VS Code):** Use `vscode_askquestions` wherever this workflow calls `AskUserQuestion`. They are equivalent — `vscode_askquestions` is the VS Code Copilot implementation of the same interactive question API.
</runtime_note>

<context>
Phase number: $ARGUMENTS (required)

Context files are resolved in-workflow using `init phase-op` and roadmap/state tool calls.
</context>

<process>
**Mode routing:**
```bash
DISCUSS_MODE=$(gsd-sdk query config-get workflow.discuss_mode 2>/dev/null || echo "discuss")
```

If `DISCUSS_MODE` is `"assumptions"`: Read and execute @${CLAUDE_PLUGIN_ROOT}/workflows/discuss-phase-assumptions.md end-to-end.

If `DISCUSS_MODE` is `"discuss"` (or unset, or any other value): Read and execute @${CLAUDE_PLUGIN_ROOT}/workflows/discuss-phase.md end-to-end.

**MANDATORY:** The execution_context files listed above ARE the instructions. Read the workflow file BEFORE taking any action. The objective and success_criteria sections in this command file are summaries — the workflow file contains the complete step-by-step process with all required behaviors, config checks, and interaction patterns. Do not improvise from the summary.
</process>

<success_criteria>
- Prior context loaded and applied (no re-asking decided questions)
- Gray areas identified through intelligent analysis
- User chose which areas to discuss
- Each selected area explored until satisfied
- Scope creep redirected to deferred ideas
- CONTEXT.md captures decisions, not vague vision
- User knows next steps
</success_criteria>
