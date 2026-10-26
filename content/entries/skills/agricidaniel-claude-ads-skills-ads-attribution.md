---
slug: agricidaniel-claude-ads-skills-ads-attribution
name: ads-attribution
tagline: Agent skill from AgriciDaniel/claude-ads
summary: Agent skill from AgriciDaniel/claude-ads
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-marketing
  - claude-code
  - claude-code-skill
status: active
quality_percentile: 77
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-ads
  subpath: skills/ads-attribution
  official_vendor: false
  license: MIT
signals:
  stars: 10425
  last_commit: 2026-10-17T01:35:42Z
  stars_delta_7d: 301
  stars_growth_pct: 3
  trending_score: 309.95
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9774
    - 9953
    - 10124
    - 10425
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-ads
  path: skills/ads-attribution/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:51.734Z
  truncated: false
type: agent_skill
skill:
  skill_name: ads-attribution
  description: Agent skill from AgriciDaniel/claude-ads
  folder_path: skills/ads-attribution
  extra_files: []
  pack_total_skills: 34
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
