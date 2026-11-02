---
slug: esengine-deepseek-reasonix-examples-release-note-kit-skills-release-note
name: release-note
tagline: Draft a release note from user-selected changes, citing only verified behavior.
summary: Use the format in that reference. Link each claim to the selected
  change when a link is available. Keep fixes separate from new behavior. If a
  migration or compatibility effect is uncertain, mark it for confirmation r...
categories:
  - coding-agents
tags:
  - agent-framework
  - ai-agent
  - ai-coding
  - cli
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: esengine/DeepSeek-Reasonix
  subpath: examples/release-note-kit/skills/release-note
  official_vendor: false
  license: MIT
signals:
  stars: 36040
  last_commit: 2026-11-02T08:27:56Z
  stars_delta_7d: 73
  stars_growth_pct: 0.2
  trending_score: 73.15
  velocity_source: snapshot_delta
  sparkline_4w:
    - 35858
    - 35967
    - 36040
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: esengine/DeepSeek-Reasonix
  path: examples/release-note-kit/skills/release-note/SKILL.md
  branch: studio
  fetched_at: 2026-11-02T09:07:03.167Z
  truncated: false
type: agent_skill
skill:
  skill_name: release-note
  description: Draft a release note from user-selected changes, citing only
    verified behavior.
  folder_path: examples/release-note-kit/skills/release-note
  extra_files:
    - references/format.md
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: esengine-deepseek-reasonix
---

# Release note
Ask which commits, pull requests, or files belong in the release and who will
read the note. Read the selected changes and the complete
`references/format.md` file next to this skill before drafting. Do not infer
user-visible behavior from a title alone.

Use the format in that reference. Link each claim to the selected change when
a link is available. Keep fixes separate from new behavior. If a migration or
compatibility effect is uncertain, mark it for confirmation rather than
guessing.

Report tests as passed only when their result was observed; otherwise use the
reference's unverified wording.
