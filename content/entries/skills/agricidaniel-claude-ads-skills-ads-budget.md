---
slug: agricidaniel-claude-ads-skills-ads-budget
name: ads-budget
tagline: Plan and review paid-media budgets, bidding, pacing, marginal return,
  targets, constraints, and allocation across supported platforms. Use for ad
  budg
summary: Rules such as 70/20/10, fixed CPA multiples, fixed budget-to-CPA
  ratios, and fixed percentage scaling are optional heuristics, never universal
  authorization.
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-marketing
  - claude-code
  - claude-code-skill
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-ads
  subpath: skills/ads-budget
  official_vendor: false
  license: MIT
signals:
  stars: 10660
  last_commit: 2026-11-01T21:08:14Z
  stars_delta_7d: 235
  stars_growth_pct: 2.3
  trending_score: 240.3
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9953
    - 10124
    - 10425
    - 10660
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-ads
  path: skills/ads-budget/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:30.005Z
  truncated: false
type: agent_skill
skill:
  skill_name: ads-budget
  description: Plan and review paid-media budgets, bidding, pacing, marginal
    return, targets, constraints, and allocation across supported platforms. Use
    for ad budget allocation, media budget, bidding strategy, scaling, spend
    pacing, ROAS target, or investment tradeoffs. Use ads-math for calculations
    and forecasts.
  folder_path: skills/ads-budget
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-ads
---

# Budget and Bidding
1. Establish objective, conversion value, gross margin, cash constraints, sales
   capacity, attribution uncertainty, seasonality, and platform minimum evidence.
2. Normalize spend and outcomes to comparable windows and definitions.
3. Calculate break-even boundaries and show formulas, inputs, uncertainty, and
   sensitivity cases.
4. Distinguish committed baseline, controlled experiments, and reserve capacity.
5. Compare hold, reallocate, scale, reduce, or experiment options using marginal
   evidence rather than blended averages alone.
6. Return a decision-complete plan with platform/campaign amount, timing, owner,
   guardrails, success measure, and rollback trigger.

Rules such as 70/20/10, fixed CPA multiples, fixed budget-to-CPA ratios, and fixed
percentage scaling are optional heuristics, never universal authorization.
