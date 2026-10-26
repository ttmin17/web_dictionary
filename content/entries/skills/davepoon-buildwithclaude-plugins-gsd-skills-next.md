---
slug: davepoon-buildwithclaude-plugins-gsd-skills-next
name: gsd:next
tagline: Automatically advance to the next logical step in the GSD workflow
summary: Detect the current project state and automatically invoke the next
  logical GSD workflow step. No arguments needed — reads STATE.md, ROADMAP.md,
  and phase directories to determine what comes next.
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
  subpath: plugins/gsd/skills/next
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
  path: plugins/gsd/skills/next/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.619Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:next
  description: Automatically advance to the next logical step in the GSD workflow
  folder_path: plugins/gsd/skills/next
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
Detect the current project state and automatically invoke the next logical GSD workflow step.
No arguments needed — reads STATE.md, ROADMAP.md, and phase directories to determine what comes next.

Designed for rapid multi-project workflows where remembering which phase/step you're on is overhead.

Supports `--force` flag to bypass safety gates (checkpoint, error state, verification failures, and prior-phase completeness scan).

Before routing to the next step, scans all prior phases for incomplete work: plans that ran without producing summaries, verification failures without overrides, and phases where discussion happened but planning never ran. When incomplete work is found, shows a structured report and offers three options: defer the gaps to the backlog and continue, stop and resolve manually, or force advance without recording. When prior phases are clean, routes silently with no interruption.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/next.md
</execution_context>

<process>
Execute the next workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/next.md end-to-end.
</process>
