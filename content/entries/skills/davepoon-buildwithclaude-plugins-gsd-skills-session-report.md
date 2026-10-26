---
slug: davepoon-buildwithclaude-plugins-gsd-skills-session-report
name: gsd:session-report
tagline: Generate a session report with token usage estimates, work summary, and
  outcomes
summary: Generate a structured SESSIONREPORT.md document capturing session
  outcomes, work performed, and estimated resource usage. Provides a shareable
  artifact for post-session review.
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
  subpath: plugins/gsd/skills/session-report
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
  path: plugins/gsd/skills/session-report/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.620Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:session-report
  description: Generate a session report with token usage estimates, work summary,
    and outcomes
  folder_path: plugins/gsd/skills/session-report
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
Generate a structured SESSION_REPORT.md document capturing session outcomes, work performed, and estimated resource usage. Provides a shareable artifact for post-session review.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/session-report.md
</execution_context>

<process>
Execute the session-report workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/session-report.md end-to-end.
</process>
