---
slug: agricidaniel-claude-ads-skills-ads-attribution
name: ads-attribution
tagline: Audit cross-platform attribution, conversion definitions, reporting
  windows, GA4, AdServices and AdAttributionKit, MMPs, browser and server
  events, of
summary: Do not assume one platform is ground truth, add incompatible reports
  together, or recommend an attribution model without the operator's decision
  context.
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
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-ads
  subpath: skills/ads-attribution
  official_vendor: false
  license: MIT
signals:
  stars: 10863
  last_commit: 2026-11-01T21:08:14Z
  stars_delta_7d: 100
  stars_growth_pct: 0.9
  trending_score: 100.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 10124
    - 10425
    - 10763
    - 10863
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-ads
  path: skills/ads-attribution/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:45.852Z
  truncated: false
type: agent_skill
skill:
  skill_name: ads-attribution
  description: Audit cross-platform attribution, conversion definitions, reporting
    windows, GA4, AdServices and AdAttributionKit, MMPs, browser and server
    events, offline conversions, and platform reconciliation. Use for
    attribution audit, attribution models, conversion windows, requests to add
    or total Meta and Google conversions, incompatible reporting-window
    aggregation, GA4 attribution, MMP review, AppsFlyer, Adjust, Branch,
    Singular, or cross-platform discrepancies.
  folder_path: skills/ads-attribution
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-ads
---

# Attribution Audit
1. Read the main `ads` contract and normalized account snapshots.
2. Declare the business conversion, value, data window, timezone, currency, and
   decision the attribution analysis must support.
3. Inventory every browser, server, platform, analytics, MMP, offline, and app
   attribution source with its identity, counting, deduplication, and privacy rules.
4. Reconcile comparable events and explain differences caused by eligibility,
   view-through rules, consent, modeled data, conversion lag, thresholds, or scope.
5. Separate measurement quality from platform-reported performance.
6. Return findings, contradictions, confidence, missing evidence, and a measurement
   improvement plan through the common JSON contract.

Do not assume one platform is ground truth, add incompatible reports together, or
recommend an attribution model without the operator's decision context.

## Comparability gate

Reject aggregation until the sources share, or are explicitly normalized to, the
same conversion event and value definition, attribution window, click/view scope,
counting method, deduplication identity, timezone, currency, attribution model,
and modeled-data treatment. Until then, report the values side by side with their
definitions; do not compute a total.

Example: Meta seven-day conversions and Google thirty-day conversions are
incompatible. Refuse to add them, reconcile windows and definitions first, and
only aggregate a newly comparable dataset.
