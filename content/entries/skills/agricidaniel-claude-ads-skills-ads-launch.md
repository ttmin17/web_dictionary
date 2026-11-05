---
slug: agricidaniel-claude-ads-skills-ads-launch
name: ads-launch
tagline: "Draft or explicitly apply a paid-ad campaign launch through Claude Ads
  capability-gated adapters. Use for campaign creation, launch plans, publishing
  "
summary: 1. Load the validated setup profile, account snapshot, campaign plan,
  creative manifest, platform capability manifest, policy findings, and tracking
  checks. 2. Refuse a draft that lacks account/object scope, objective...
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
  subpath: skills/ads-launch
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
  path: skills/ads-launch/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:56.128Z
  truncated: false
type: agent_skill
skill:
  skill_name: ads-launch
  description: Draft or explicitly apply a paid-ad campaign launch through Claude
    Ads capability-gated adapters. Use for campaign creation, launch plans,
    publishing ads, activating campaigns, uploading creative, or requests to
    push a campaign live.
  folder_path: skills/ads-launch
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-ads
---

# Campaign Launch
Default to `--draft`.

1. Load the validated setup profile, account snapshot, campaign plan, creative
   manifest, platform capability manifest, policy findings, and tracking checks.
2. Refuse a draft that lacks account/object scope, objective, conversion, budget,
   dates, targeting, assets, destinations, measurement, or policy eligibility.
3. Produce a deterministic mutation plan with exact proposed objects, before/after
   state, blast radius, learning impact, owner, success measure, verification
   window, idempotency key, audit destination, and rollback.
4. For `--apply`, require the exact operation to be enabled and independently
   tested, then obtain explicit approval for that exact plan.
5. Apply the smallest reversible change, verify remote state, and preserve the
   immutable audit and rollback record.

Missing ceilings, stale account state, changed remote state, incomplete tracking,
failed policy review, or an unavailable adapter blocks apply. Permanent deletion is
not supported.
