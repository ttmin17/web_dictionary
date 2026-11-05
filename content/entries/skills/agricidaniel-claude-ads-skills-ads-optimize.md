---
slug: agricidaniel-claude-ads-skills-ads-optimize
name: ads-optimize
tagline: Diagnose and draft or explicitly apply paid-ad optimizations using
  evidence, financial constraints, experiments, and capability-gated adapters.
  Use fo
summary: 1. Load the latest normalized snapshot, prior decisions, monitoring
  results, experiment state, conversion lag, economics, and platform capability
  manifest. 2. Identify the decision and causal evidence; do not optimize...
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-marketing
  - claude-code
  - claude-code-skill
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-ads
  subpath: skills/ads-optimize
  official_vendor: false
  license: MIT
signals:
  stars: 10763
  last_commit: 2026-11-01T21:08:14Z
  stars_delta_7d: 338
  stars_growth_pct: 3.2
  trending_score: 348.96
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9953
    - 10124
    - 10425
    - 10763
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-ads
  path: skills/ads-optimize/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:56.128Z
  truncated: false
type: agent_skill
skill:
  skill_name: ads-optimize
  description: Diagnose and draft or explicitly apply paid-ad optimizations using
    evidence, financial constraints, experiments, and capability-gated adapters.
    Use for campaign optimization, budget reallocation, bid changes, pausing or
    archiving ads, requests to delete campaigns, search-term or negative-keyword
    actions, creative rotation, or improving CPA and ROAS.
  folder_path: skills/ads-optimize
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-ads
---

# Paid Media Optimization
Default to `--draft`.

1. Load the latest normalized snapshot, prior decisions, monitoring results,
   experiment state, conversion lag, economics, and platform capability manifest.
2. Identify the decision and causal evidence; do not optimize a metric in isolation.
3. Compare no-change, experiment, and mutation options, including learning, policy,
   tracking, inventory, and opportunity-cost effects.
4. Produce ranked recommendations with confidence and success measures.
5. Convert approved recommendations into mutation plans only through the main
   mutation gate.
6. Apply, verify, audit, and retain rollback only when the exact operation is
   enabled and remote state still matches the draft precondition.

Never use a fixed CPA multiple, budget ratio, benchmark, or novelty claim as sole
authorization to change an account.

## Destructive-action boundary

Refuse permanent deletion of campaigns, ad groups, ads, audiences, conversions,
or other account objects. Permanent deletion is outside the supported mutation
contract and cannot be made safe by confirmation. Offer reversible alternatives:
leave objects paused, archive where supported, apply labels, export a backup, and
define a retention or later-review date. Do not create or apply a delete plan.

Search-term actions require a search terms report, business-relevance evidence,
and an overblocking review. Without them, request the missing evidence and do not
invent or illustrate specific negative keywords.
