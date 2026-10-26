---
slug: trpc-group-trpc-agent-go-examples-agui-server-skill_artifacts-skills-artifact_demo
name: artifact_demo
tagline: Demo skill that writes an output file and persists it as an artifact.
summary: This skill is used by the examples/agui/server/skillartifacts demo.
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/agui/server/skill_artifacts/skills/artifact_demo
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  rank_current: 130
  rank_delta: -27
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
  path: examples/agui/server/skill_artifacts/skills/artifact_demo/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.534Z
  truncated: false
type: agent_skill
skill:
  skill_name: artifact_demo
  description: Demo skill that writes an output file and persists it as an artifact.
  folder_path: examples/agui/server/skill_artifacts/skills/artifact_demo
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

This skill is used by the `examples/agui/server/skill_artifacts` demo.

It writes `out/hello.txt` and asks `skill_run` to persist outputs via the Artifact service.
