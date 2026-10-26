---
slug: davepoon-buildwithclaude-plugins-gsd-skills-eval-review
name: gsd:eval-review
tagline: Retroactively audit an executed AI phase's evaluation coverage — scores
  each eval dimension as COVERED/PARTIAL/MISSING and produces an actionable EVAL
summary: Conduct a retroactive evaluation coverage audit of a completed AI
  phase. Checks whether the evaluation strategy from AI-SPEC.md was implemented.
  Produces EVAL-REVIEW.md with score, verdict, gaps, and remediation plan.
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
  subpath: plugins/gsd/skills/eval-review
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
  path: plugins/gsd/skills/eval-review/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.618Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:eval-review
  description: Retroactively audit an executed AI phase's evaluation coverage —
    scores each eval dimension as COVERED/PARTIAL/MISSING and produces an
    actionable EVAL-REVIEW.md with remediation plan
  folder_path: plugins/gsd/skills/eval-review
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
Conduct a retroactive evaluation coverage audit of a completed AI phase.
Checks whether the evaluation strategy from AI-SPEC.md was implemented.
Produces EVAL-REVIEW.md with score, verdict, gaps, and remediation plan.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/eval-review.md
@${CLAUDE_PLUGIN_ROOT}/references/ai-evals.md
</execution_context>

<context>
Phase: $ARGUMENTS — optional, defaults to last completed phase.
</context>

<process>
Execute @${CLAUDE_PLUGIN_ROOT}/workflows/eval-review.md end-to-end.
Preserve all workflow gates.
</process>
