---
slug: nexu-io-open-design-apps-daemon-tests-fixtures-plugin-fixtures-sample-plugin
name: sample-plugin
tagline: Phase 1 sample plugin synthesizing a SKILL.md frontmatter for
  backwards-compat tests.
summary: 1. Acknowledge the user's brief via the discovery question form atom.
  2. Use TodoWrite to plan the brief. 3. Emit the brief as a deck artifact.
categories:
  - media-creative
tags:
  - agent-skills
  - ai-design
  - byok
  - claude-code-for-design
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: nexu-io/open-design
  subpath: apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 106053
  last_commit: 2026-11-05T12:59:13Z
  stars_delta_7d: 2028
  stars_growth_pct: 1.9
  trending_score: 2067.54
  rank_current: 23
  rank_delta: -4
  velocity_source: snapshot_delta
  sparkline_4w:
    - 100908
    - 102299
    - 104025
    - 106053
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/open-design
  path: apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.776Z
  truncated: false
type: agent_skill
skill:
  skill_name: sample-plugin
  description: Phase 1 sample plugin synthesizing a SKILL.md frontmatter for
    backwards-compat tests.
  folder_path: apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin
  extra_files:
    - open-design.json
  pack_total_skills: 25
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
