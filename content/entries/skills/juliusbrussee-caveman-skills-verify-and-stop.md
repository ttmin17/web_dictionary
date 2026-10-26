---
slug: juliusbrussee-caveman-skills-verify-and-stop
name: verify-and-stop
tagline: Prove existing work meets acceptance conditions without expanding
  scope. Use for validation-only tasks, completion checks, focused gate runs,
  and last
summary: "- Reuse still-current results with matching repository state. - Run
  focused checks before wider gates. - Distinguish pass, fail, unavailable, and
  blocked exactly. - Do not edit product code unless verification request..."
categories:
  - agent-frameworks
tags:
  - anthropic
  - caveman
  - claude
  - claude-code
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: skills/verify-and-stop
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 115110
  last_commit: 2026-10-25T09:24:33Z
  stars_delta_7d: 1582
  stars_growth_pct: 1.4
  trending_score: 1604.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 110366
    - 111405
    - 113528
    - 115110
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: skills/verify-and-stop/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:11.956Z
  truncated: false
type: agent_skill
skill:
  skill_name: verify-and-stop
  description: Prove existing work meets acceptance conditions without expanding
    scope. Use for validation-only tasks, completion checks, focused gate runs,
    and last-mile proof.
  folder_path: skills/verify-and-stop
  extra_files:
    - agents/openai.yaml
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: juliusbrussee-caveman
---

# Verify and stop
Translate acceptance conditions into smallest sufficient proof set.

- Reuse still-current results with matching repository state.
- Run focused checks before wider gates.
- Distinguish pass, fail, unavailable, and blocked exactly.
- Do not edit product code unless verification request includes fixes.
- Do not add polish, cleanup, or unrelated tests after criteria pass.

Stop immediately when acceptance proof is complete. Report commands, results, and unresolved risk only.
