---
slug: juliusbrussee-caveman-skills-lean-build
name: lean-build
tagline: Build feature work with high overbuilding risk. Use for new behavior,
  product slices, or integrations where repository reuse, strict scope, and an
  exp
summary: "- Derive observable acceptance and explicit non-goals from request and
  repository. - Trace entry point through layers owning invariants. - Deliver
  coherent end-to-end path across responsible layers; never force work i..."
categories:
  - agent-frameworks
tags:
  - anthropic
  - caveman
  - claude
  - claude-code
status: active
quality_percentile: 66
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: skills/lean-build
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 116795
  last_commit: 2026-11-02T07:45:06Z
  stars_delta_7d: 1685
  stars_growth_pct: 1.5
  trending_score: 1709.67
  velocity_source: snapshot_delta
  sparkline_4w:
    - 111405
    - 113528
    - 115110
    - 116795
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: skills/lean-build/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:05.503Z
  truncated: false
type: agent_skill
skill:
  skill_name: lean-build
  description: Build feature work with high overbuilding risk. Use for new
    behavior, product slices, or integrations where repository reuse, strict
    scope, and an explicit stop condition matter.
  folder_path: skills/lean-build
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

# Lean build
Native Core's architecture-first simplicity remains mandatory. Turn feature into complete narrow outcome fitting system.

- Derive observable acceptance and explicit non-goals from request and repository.
- Trace entry point through layers owning invariants.
- Deliver coherent end-to-end path across responsible layers; never force work into one file, direct expression, or local patch.
- Reuse fitting seam. Refactor when patching duplicates behavior, weakens ownership, or hides root cause.
- Omit modes, providers, config, extensibility, and polish unless acceptance needs them.
- Add surface, dependency, service, config, or migration only for lifecycle design or acceptance; state material tradeoff.
- Keep work runnable; preserve Core safety.

Exercise path. Run focused proof. Stop when acceptance passes. Report only material omissions and trigger.
