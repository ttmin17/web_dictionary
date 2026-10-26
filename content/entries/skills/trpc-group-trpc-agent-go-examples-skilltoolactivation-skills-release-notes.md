---
slug: trpc-group-trpc-agent-go-examples-skilltoolactivation-skills-release-notes
name: release-notes
tagline: Use this skill when the user asks about release dates, release owners,
  rollout status, or launch checklist details.
summary: "After loading this skill:"
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/skilltoolactivation/skills/release-notes
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/skilltoolactivation/skills/release-notes/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: release-notes
  description: Use this skill when the user asks about release dates, release
    owners, rollout status, or launch checklist details.
  folder_path: examples/skilltoolactivation/skills/release-notes
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# Release Notes Lookup
Use this skill to answer questions about the demo release notes.

After loading this skill:

1. Use `release_docs_read_file` to read `release_notes.md`.
2. Answer from the file content only.
3. If the requested detail is not in the file, say that the release notes do not contain it.
