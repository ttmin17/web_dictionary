---
slug: nexu-io-open-design-apps-daemon-tests-fixtures-plugin-fixtures-sample-plugin
name: sample-plugin
tagline: Agent skill from nexu-io/open-design
summary: Agent skill from nexu-io/open-design
categories:
  - media-creative
tags:
  - agent-skills
  - ai-design
  - byok
  - claude-code-for-design
status: active
quality_percentile: 77
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: nexu-io/open-design
  subpath: apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 104025
  last_commit: 2026-10-26T07:31:43Z
  stars_delta_7d: 1726
  stars_growth_pct: 1.7
  trending_score: 1755.12
  rank_current: 19
  rank_delta: -3
  velocity_source: snapshot_delta
  sparkline_4w:
    - 99839
    - 100908
    - 102299
    - 104025
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/open-design
  path: apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:48.575Z
  truncated: false
type: agent_skill
skill:
  skill_name: sample-plugin
  description: Agent skill from nexu-io/open-design
  folder_path: apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin
  extra_files:
    - open-design.json
  pack_total_skills: 401
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-open-design
---

# Sample Plugin
This is the SKILL.md half of the Phase 1 e2e fixture. The companion
`open-design.json` sidecar carries the canonical OpenDesign plugin
manifest fields; this file proves the SKILL-only adapter path stays
honest when an install lacks an explicit sidecar (just delete
`open-design.json` to test the legacy compat tier).

## Workflow

1. Acknowledge the user's brief via the discovery question form atom.
2. Use TodoWrite to plan the brief.
3. Emit the brief as a deck artifact.
