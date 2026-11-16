---
slug: juliusbrussee-caveman-skills-migration
name: migration
tagline: Implement reversible compatibility-safe transitions. Use for schema,
  data, API, protocol, configuration, or dependency migrations requiring
  rollback a
summary: "- Define forward path and rollback path. - Preserve existing data;
  make destructive steps explicit and separately authorized. - Keep
  mixed-version operation safe where rollout can overlap. - Sequence expand,
  migrate,..."
categories:
  - agent-frameworks
tags:
  - anthropic
  - caveman
  - claude
  - claude-code
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: skills/migration
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 120573
  last_commit: 2026-11-16T07:30:16Z
  stars_delta_7d: 2099
  stars_growth_pct: 1.8
  trending_score: 2136.19
  velocity_source: snapshot_delta
  sparkline_4w:
    - 115110
    - 117655
    - 118474
    - 120573
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: skills/migration/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:15:44.371Z
  truncated: false
type: agent_skill
skill:
  skill_name: migration
  description: Implement reversible compatibility-safe transitions. Use for
    schema, data, API, protocol, configuration, or dependency migrations
    requiring rollback and preservation proof.
  folder_path: skills/migration
  extra_files:
    - agents/openai.yaml
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: juliusbrussee-caveman
---

# Migration
Map current readers, writers, data shape, compatibility window, and ownership before editing.

- Define forward path and rollback path.
- Preserve existing data; make destructive steps explicit and separately authorized.
- Keep mixed-version operation safe where rollout can overlap.
- Sequence expand, migrate, verify, then contract when applicable.
- Make retries idempotent and partial failure observable.
- Verify old and new paths at required transition stages.

Stop after requested stage passes; do not perform later destructive contraction implicitly.
