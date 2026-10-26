---
slug: tigerless-labs-autoharness-skills-learn
name: learn
tagline: Agent skill from tigerless-labs/autoharness
summary: Agent skill from tigerless-labs/autoharness
categories:
  - agent-frameworks
tags:
  - agent-skills
  - claude-code
  - claude-code-plugin
  - llm-agents
status: active
quality_percentile: 58
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: tigerless-labs/autoharness
  subpath: skills/learn
  official_vendor: false
  license: MIT
signals:
  stars: 10753
  last_commit: 2026-10-23T16:35:45Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  rank_current: 135
  rank_delta: -67
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11051
    - 11140
    - 10753
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: tigerless-labs/autoharness
  path: skills/learn/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:49.365Z
  truncated: false
type: agent_skill
skill:
  skill_name: learn
  description: Agent skill from tigerless-labs/autoharness
  folder_path: skills/learn
  extra_files: []
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: tigerless-labs-autoharness
---

# Learn: distill this session into the skill library
Review the conversation so far and distill what is worth keeping — through the
standard proposal chain, never by writing files.

1. Identify class-level, reusable lessons: corrected approaches, non-trivial
   techniques, durable user preferences. Skip one-off narratives and
   environment-specific failures.
2. Compare first: read the injected skill index; if an existing skill covers
   the topic, prefer a `patch`/`update` over creating a near-duplicate.
3. Reconcile old with new: when a lesson supersedes an earlier rule, search
   the managed skill trees for contradicting statements and stage updates so
   the new version wins everywhere.
4. Stage every change exclusively via the `stage_skill` tool, one intent per
   lesson, with `reason` and a verbatim `evidence` quote from this session.
   The deterministic promoter validates and lands; rejects are reported at
   the next session start.

If nothing meets the bar, say so and stage nothing.
