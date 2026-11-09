---
slug: topoteretes-cognee-examples-demos-feedback-skill_feedback_loop-skills-pr-comment-evaluator
name: pr-comment-evaluator
tagline: Use to judge whether a PR review comment sounds polite.
summary: Use to judge whether a PR review comment sounds polite.
categories:
  - databases-memory
tags:
  - agent-memory
  - agent-skills
  - ai-agents
  - ai-memory
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: topoteretes/cognee
  subpath: examples/demos/feedback/skill_feedback_loop/skills/pr-comment-evaluator
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 33161
  last_commit: 2026-11-08T21:17:22Z
  stars_delta_7d: 70
  stars_growth_pct: 0.2
  trending_score: 70.15
  velocity_source: snapshot_delta
  sparkline_4w:
    - 32515
    - 32759
    - 33091
    - 33161
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: topoteretes/cognee
  path: examples/demos/feedback/skill_feedback_loop/skills/pr-comment-evaluator/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:54.246Z
  truncated: false
type: agent_skill
skill:
  skill_name: pr-comment-evaluator
  description: Use to judge whether a PR review comment sounds polite.
  folder_path: examples/demos/feedback/skill_feedback_loop/skills/pr-comment-evaluator
  extra_files: []
  pack_total_skills: 3
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: topoteretes-cognee
---

# pr-comment-evaluator
Only judge whether the PR comment sounds polite. Do not discuss code risk or technical correctness.
