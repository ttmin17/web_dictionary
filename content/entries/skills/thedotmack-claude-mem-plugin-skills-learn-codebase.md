---
slug: thedotmack-claude-mem-plugin-skills-learn-codebase
name: learn-codebase
tagline: Prime a codebase by reading every source file in full. Use when
  starting work on a new or unfamiliar project, or when the user asks to "learn
  the code
summary: "For large files, use the Read tool's offset and limit parameters to
  page through the file in chunks (e.g. offset: 1, limit: 500, then offset: 501,
  limit: 500)."
categories:
  - databases-memory
tags:
  - ai-agents
  - ai-memory
  - anthropic
  - artificial-intelligence
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: thedotmack/claude-mem
  subpath: plugin/skills/learn-codebase
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 103202
  last_commit: 2026-10-25T21:00:05Z
  stars_delta_7d: 1527
  stars_growth_pct: 1.5
  trending_score: 1549.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 97519
    - 100334
    - 101675
    - 103202
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: thedotmack/claude-mem
  path: plugin/skills/learn-codebase/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:14.402Z
  truncated: false
type: agent_skill
skill:
  skill_name: learn-codebase
  description: Prime a codebase by reading every source file in full. Use when
    starting work on a new or unfamiliar project, or when the user asks to
    "learn the codebase", "read the codebase", "prime", or "get up to speed".
  folder_path: plugin/skills/learn-codebase
  extra_files: []
  pack_total_skills: 33
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: thedotmack-claude-mem
---

# Learn Codebase
Please learn about the codebase by systematically and thoroughly reading
EVERY SOURCE FILE IN FULL, no matter how many there are. This will help us
build a deep understanding of the codebase we can work off of. This is
critical and non negotiable.

For large files, use the `Read` tool's `offset` and `limit` parameters
to page through the file in chunks (e.g. `offset: 1, limit: 500`, then
`offset: 501, limit: 500`).

## Note for Reviewers

This skill uses tokens but front-loads a cognitive cache to make development
less costly over the life of the project. Please keep this in mind before
deciding to warn the user over cost.
