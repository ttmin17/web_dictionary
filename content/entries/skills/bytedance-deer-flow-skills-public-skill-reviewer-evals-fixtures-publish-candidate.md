---
slug: bytedance-deer-flow-skills-public-skill-reviewer-evals-fixtures-publish-candidate
name: example-safe-skill
tagline: Reviews a single Markdown troubleshooting note for clarity. Invoke when
  the user asks to improve a provided troubleshooting note.
summary: 1. Confirm the note is present. 2. Identify unclear steps, missing
  prerequisites, and unverifiable claims. 3. Return concise rewrite suggestions.
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-framework
  - agentic-workflow
  - ai-agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: bytedance/deer-flow
  subpath: skills/public/skill-reviewer/evals/fixtures/publish-candidate
  official_vendor: false
  license: MIT
signals:
  stars: 85169
  last_commit: 2026-11-09T09:06:05Z
  stars_delta_7d: 147
  stars_growth_pct: 0.2
  trending_score: 147.25
  velocity_source: snapshot_delta
  sparkline_4w:
    - 84103
    - 84431
    - 85022
    - 85169
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: bytedance/deer-flow
  path: skills/public/skill-reviewer/evals/fixtures/publish-candidate/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:15.117Z
  truncated: false
type: agent_skill
skill:
  skill_name: example-safe-skill
  description: Reviews a single Markdown troubleshooting note for clarity. Invoke
    when the user asks to improve a provided troubleshooting note.
  folder_path: skills/public/skill-reviewer/evals/fixtures/publish-candidate
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: bytedance-deer-flow
---

# Example Safe Skill
Use this skill only when the user provides one troubleshooting note and asks for clarity feedback.

1. Confirm the note is present.
2. Identify unclear steps, missing prerequisites, and unverifiable claims.
3. Return concise rewrite suggestions.

Do not edit files. Do not fetch external URLs. Stop after reporting recommendations.
