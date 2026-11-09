---
slug: agricidaniel-claude-ads-skills-ads-photoshoot
name: ads-photoshoot
tagline: "Generate rights-cleared paid-ad product photography variants from an
  authorized source image and validated brand profile. Triggers on: product
  photo, "
summary: Human review is mandatory. Do not create deceptive before/after
  evidence, people or endorsements without authorization, or regulated claims
  from visual implication.
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
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-ads
  subpath: skills/ads-photoshoot
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
  path: skills/ads-photoshoot/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:45.853Z
  truncated: false
type: agent_skill
skill:
  skill_name: ads-photoshoot
  description: "Generate rights-cleared paid-ad product photography variants from
    an authorized source image and validated brand profile. Triggers on: product
    photo, product photography, virtual photoshoot, photoshoot, enhance product
    image, studio shot, lifestyle shot, lifestyle product image, floating
    product image, ingredient shot."
  folder_path: skills/ads-photoshoot
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-ads
---

# Product Photography Variants
1. Confirm rights to the product image and collect the validated brand profile,
   product facts, intended placements, provider capability, cost ceiling, and output
   root.
2. Preserve product geometry, packaging, logos, labels, color, and material unless
   the operator explicitly approves a change.
3. Define distinct production hypotheses such as studio, contextual use, ingredient
   story, scale/detail, or lifestyle; do not imply unsupported product outcomes.
4. Generate approved aspect ratios and record source hashes, prompt version,
   provider/model, cost, output hashes, and dimensions.
5. Validate product fidelity, visual defects, safe zones, accessibility, and policy.
6. Store assets and manifest atomically inside the run directory.

Human review is mandatory. Do not create deceptive before/after evidence, people or
endorsements without authorization, or regulated claims from visual implication.
