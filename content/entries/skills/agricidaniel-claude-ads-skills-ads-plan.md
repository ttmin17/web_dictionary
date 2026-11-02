---
slug: agricidaniel-claude-ads-skills-ads-plan
name: ads-plan
tagline: Create a professional paid-advertising strategy covering objectives,
  economics, platform selection, campaign architecture, audiences, budget,
  creative
summary: A plan is advisory. It becomes an account change only through launch or
  optimize mutation gates.
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
  subpath: skills/ads-plan
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
  path: skills/ads-plan/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:30.005Z
  truncated: false
type: agent_skill
skill:
  skill_name: ads-plan
  description: Create a professional paid-advertising strategy covering
    objectives, economics, platform selection, campaign architecture, audiences,
    budget, creative, measurement, experiments, governance, rollout, and
    reporting. Use for ad plan, media plan, PPC strategy, paid-social strategy,
    campaign architecture, advertising roadmap, or channel planning.
  folder_path: skills/ads-plan
  extra_files:
    - assets/agency.md
    - assets/b2b-enterprise.md
    - assets/ecommerce-creative.md
    - assets/ecommerce.md
    - assets/finance.md
    - assets/generic.md
    - assets/healthcare.md
    - assets/info-products.md
    - assets/local-service.md
    - assets/mobile-app.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-ads
---

# Paid Media Plan
1. Read the setup profile, business economics, evidence, current account state, and
   relevant industry template as optional input.
2. Define objective, customer, offer, conversion, value, constraints, geography,
   regulated category, time horizon, and success criteria.
3. Evaluate channel roles and exclusions from first principles; do not require every
   supported platform. For a channel outside the twelve-platform contract, load
   `ads/references/additional-platforms.md` (resolve it from the plugin root, the directory that holds `ads/` and `skills/`, or from the skills directory in a standalone install) and return a research lead unless
   its current buying, eligibility, measurement, and creative evidence is present.
4. Before proposing Meta budgets, learning-phase expectations, bidding,
   consolidation, or performance forecasts, collect the account, Pixel, and
   conversion cold-start dimensions per the contract in
   `skills/ads-meta/SKILL.md`. When any dimension is cold or `unknown`, plan
   for measurement validation, explicit creative hypotheses, staged reversible
   tests, and confidence labels; do not apply mature-account benchmarks to
   missing history.
5. Specify campaign architecture, audience strategy, creative system, budget and
   pacing, measurement, experiments, policy controls, and operating cadence.
6. Phase prerequisites before launch, learning, optimization, and scale.
7. Assign every action an owner, timing, dependency, guardrail, evidence, success
   measure, and rollback or exit condition.
8. Return canonical JSON and render the requested human plan.

A plan is advisory. It becomes an account change only through launch or optimize
mutation gates.
