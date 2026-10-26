---
slug: davepoon-buildwithclaude-plugins-agents-uc-taskmanager-skills-work-pipeline
name: work-pipeline
tagline: "Triggers the WORK-PIPELINE when a user request starts with a [] tag
  (e.g., [new-feature], [bugfix], [WORK start]). Use this skill whenever you
  detect "
summary: "Any message starting with [...] triggers this pipeline: -
  [new-feature], [enhancement], [bugfix], [new-work], [WORK start] - Or any
  custom tag in square brackets"
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
  subpath: plugins/agents-uc-taskmanager/skills/work-pipeline
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
  path: plugins/agents-uc-taskmanager/skills/work-pipeline/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.577Z
  truncated: false
type: agent_skill
skill:
  skill_name: work-pipeline
  description: Triggers the WORK-PIPELINE when a user request starts with a [] tag
    (e.g., [new-feature], [bugfix], [WORK start]). Use this skill whenever you
    detect a [] tag at the beginning of a user message.
  folder_path: plugins/agents-uc-taskmanager/skills/work-pipeline
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# WORK-PIPELINE Trigger
When the user's message starts with a `[]` tag, start the WORK-PIPELINE by reading `../skills/sdd-pipeline/references/agent-flow.md` and following the orchestration flow.

## Trigger Detection

Any message starting with `[...]` triggers this pipeline:
- `[new-feature]`, `[enhancement]`, `[bugfix]`, `[new-work]`, `[WORK start]`
- Or any custom tag in square brackets

## References Directory (CRITICAL)

When this skill is triggered, Claude Code provides the "Base directory for this skill" as an absolute path.
Derive the **REFERENCES_DIR** from it:

```
REFERENCES_DIR = {Base directory}/../sdd-pipeline/references
```

You MUST pass this absolute path to **every sub-agent invocation** (specifier, planner, scheduler, builder, verifier, committer).
Include it at the top of the prompt text:

```
REFERENCES_DIR={absolute_path}
```

Sub-agents need this path to read their reference files. Without it, they cannot find the files and will loop.

## Pipeline Flow

1. **Call specifier agent** — analyzes the requirement, creates `works/WORK-NN/Requirement.md`, determines execution-mode (direct/pipeline/full)
2. **⛔ STOP — Present the specifier's output summary to the user and WAIT for explicit approval.** Do NOT call the next agent until the user approves. Show what was created (Requirement.md, PLAN.md if direct mode, TASK files) and ask "Proceed?"
3. **Follow the execution-mode** returned by specifier:
   - `direct`: call builder → committer
   - `pipeline`: call builder → verifier → committer in sequence
   - `full`: call planner → **⛔ STOP for 2nd approval** → scheduler → [builder → verifier → committer] × N

## Auto Mode

If the user's message ends with "auto" or "자동으로", skip ALL approval steps and execute the entire pipeline automatically. This is the ONLY case where approval gates can be skipped.

## Arguments

User requirement: $ARGUMENTS
