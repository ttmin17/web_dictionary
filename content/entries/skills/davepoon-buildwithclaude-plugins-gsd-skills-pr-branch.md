---
slug: davepoon-buildwithclaude-plugins-gsd-skills-pr-branch
name: gsd:pr-branch
tagline: Create a clean PR branch by filtering out .planning/ commits — ready
  for code review
summary: Create a clean branch suitable for pull requests by filtering out
  .planning/ commits from the current branch. Reviewers see only code changes,
  not GSD planning artifacts.
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
  subpath: plugins/gsd/skills/pr-branch
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
  path: plugins/gsd/skills/pr-branch/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.619Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:pr-branch
  description: Create a clean PR branch by filtering out .planning/ commits —
    ready for code review
  folder_path: plugins/gsd/skills/pr-branch
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
Create a clean branch suitable for pull requests by filtering out .planning/ commits
from the current branch. Reviewers see only code changes, not GSD planning artifacts.

This solves the problem of PR diffs being cluttered with PLAN.md, SUMMARY.md, STATE.md
changes that are irrelevant to code review.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/pr-branch.md
</execution_context>

<process>
Execute the pr-branch workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/pr-branch.md end-to-end.
</process>
