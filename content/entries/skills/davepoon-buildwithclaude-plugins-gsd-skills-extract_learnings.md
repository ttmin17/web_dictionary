---
slug: davepoon-buildwithclaude-plugins-gsd-skills-extract_learnings
name: gsd:extract-learnings
tagline: Extract decisions, lessons, patterns, and surprises from completed
  phase artifacts
summary: Extract structured learnings from completed phase artifacts (PLAN.md,
  SUMMARY.md, VERIFICATION.md, UAT.md, STATE.md) into a LEARNINGS.md file that
  captures decisions, lessons learned, patterns discovered, and surprise...
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
  subpath: plugins/gsd/skills/extract_learnings
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
  path: plugins/gsd/skills/extract_learnings/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.618Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:extract-learnings
  description: Extract decisions, lessons, patterns, and surprises from completed
    phase artifacts
  folder_path: plugins/gsd/skills/extract_learnings
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
Extract structured learnings from completed phase artifacts (PLAN.md, SUMMARY.md, VERIFICATION.md, UAT.md, STATE.md) into a LEARNINGS.md file that captures decisions, lessons learned, patterns discovered, and surprises encountered.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/extract-learnings.md
</execution_context>

Execute the extract-learnings workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/extract-learnings.md end-to-end.
