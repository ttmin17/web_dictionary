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
quality_percentile: 65
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: skills/investigate-first
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 118474
  last_commit: 2026-11-09T01:48:59Z
  stars_delta_7d: 819
  stars_growth_pct: 0.7
  trending_score: 824.7
  velocity_source: snapshot_delta
  sparkline_4w:
    - 113528
    - 115110
    - 117655
    - 118474
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: skills/investigate-first/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:20.646Z
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
  pack_total_skills: 20
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
