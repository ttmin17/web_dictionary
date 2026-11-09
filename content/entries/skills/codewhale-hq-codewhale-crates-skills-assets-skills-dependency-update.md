---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-dependency-update
name: dependency-update
tagline: Read release notes/changelogs, update a defined dependency scope,
  handle breaking changes, and verify. Explicit-only; no broad update-everything
  by in
summary: Read release notes/changelogs, update a defined dependency scope,
  handle breaking changes, and verify. Explicit-only; no broad update-everything
  by inference.
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/dependency-update
  official_vendor: false
  license: MIT
signals:
  stars: 41160
  last_commit: 2026-11-09T09:21:05Z
  stars_delta_7d: 2
  stars_growth_pct: 0
  trending_score: 2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41158
    - 41160
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/dependency-update/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:23.915Z
  truncated: false
type: agent_skill
skill:
  skill_name: dependency-update
  description: Read release notes/changelogs, update a defined dependency scope,
    handle breaking changes, and verify. Explicit-only; no broad
    update-everything by inference.
  folder_path: crates/skills/assets/skills/dependency-update
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

# Dependency Update
## Invocation
Explicit-only with a defined dependency scope.

## Non-goals
- No inferred “update everything”.
- No publish/release.

## Workflow
1. Identify the dependency set and current versions.
2. Read release notes/changelogs.
3. Apply updates and fix breakages.
4. Verify with the project’s test/build gates.
