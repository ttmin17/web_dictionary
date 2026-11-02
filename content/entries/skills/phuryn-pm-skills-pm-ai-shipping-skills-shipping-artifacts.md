---
slug: phuryn-pm-skills-pm-ai-shipping-skills-shipping-artifacts
name: shipping-artifacts
tagline: Moved to phuryn/product-engineering, where it is maintained in the
  ai-shipping plugin; this copy says where it went and how to install it. Use
  when as
summary: "- ai-shipping:shipping-artifacts is installed: use it, not this copy.
  - It isn't: tell the user that shipping-artifacts moved and how to install it,
  then help with the task as you would without it:"
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-ai-shipping/skills/shipping-artifacts
  official_vendor: false
  license: MIT
signals:
  stars: 27614
  last_commit: 2026-10-29T19:09:57Z
  stars_delta_7d: 233
  stars_growth_pct: 0.9
  trending_score: 234.98
  velocity_source: snapshot_delta
  sparkline_4w:
    - 26957
    - 27192
    - 27381
    - 27614
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-ai-shipping/skills/shipping-artifacts/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:41.828Z
  truncated: false
type: agent_skill
skill:
  skill_name: shipping-artifacts
  description: Moved to phuryn/product-engineering, where it is maintained in the
    ai-shipping plugin; this copy says where it went and how to install it. Use
    when asked to document an AI-built app so it can be reviewed before it
    ships.
  folder_path: pm-ai-shipping/skills/shipping-artifacts
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

# Shipping Artifacts has moved
`shipping-artifacts` is maintained in [phuryn/product-engineering](https://github.com/phuryn/product-engineering/tree/main/ai-shipping/skills/shipping-artifacts), in its `ai-shipping` plugin, with the rest of the AI Shipping Kit. This skill stays in pm-skills only so an agent that loads it knows where it went.

- **`ai-shipping:shipping-artifacts` is installed:** use it, not this copy.
- **It isn't:** tell the user that `shipping-artifacts` moved and how to install it, then help with the task as you would without it:

  ```bash
  claude plugin marketplace add phuryn/product-engineering
  claude plugin install ai-shipping@product-engineering
  ```

  Other agents: [the repository's README](https://github.com/phuryn/product-engineering#install). Once it's installed, turn off `pm-ai-shipping` here, so this copy no longer loads beside it.
