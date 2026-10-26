---
slug: juliusbrussee-caveman-skills-investigate-first
name: investigate-first
tagline: Diagnose ambiguous failures before editing. Use for unknown causes,
  intermittent behavior, performance regressions, or investigations needing
  evidence
summary: "- Separate observed symptom from inferred cause. - Trace inputs, state
  transitions, ownership boundaries, and failure output. - Rank hypotheses by
  evidence and cheap falsification value. - Do not edit until one credib..."
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
  subpath: skills/investigate-first
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
  path: skills/investigate-first/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:11.956Z
  truncated: false
type: agent_skill
skill:
  skill_name: investigate-first
  description: Diagnose ambiguous failures before editing. Use for unknown causes,
    intermittent behavior, performance regressions, or investigations needing
    evidence-ranked hypotheses.
  folder_path: skills/investigate-first
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

# Investigate first
Gather evidence before changing product code.

- Separate observed symptom from inferred cause.
- Trace inputs, state transitions, ownership boundaries, and failure output.
- Rank hypotheses by evidence and cheap falsification value.
- Do not edit until one credible mechanism explains evidence.
- Stop exploration when evidence is sufficient to name cause or exact blocker.

Report cause and proof. Make no fix unless task authorizes implementation.
