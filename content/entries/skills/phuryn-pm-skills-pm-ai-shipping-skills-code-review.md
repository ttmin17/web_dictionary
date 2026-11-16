---
slug: phuryn-pm-skills-pm-ai-shipping-skills-code-review
name: code-review
tagline: Moved to phuryn/product-engineering, where it is maintained in the
  ai-shipping plugin; this copy says where it went and how to install it. Use
  when as
summary: "- ai-shipping:code-review is installed: use it, not this copy. - It
  isn't: tell the user that code-review moved and how to install it, then help
  with the task as you would without it:"
categories:
  - coding-agents
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-03-01T23:33:44
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-ai-shipping/skills/code-review
  official_vendor: false
  license: MIT
signals:
  stars: 28030
  last_commit: 2026-11-08T23:10:04Z
  stars_delta_7d: 233
  stars_growth_pct: 0.8
  trending_score: 234.95
  rank_current: 59
  rank_delta: 11
  velocity_source: snapshot_delta
  sparkline_4w:
    - 27381
    - 27709
    - 27797
    - 28030
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-ai-shipping/skills/code-review/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:27.273Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-review
  description: Moved to phuryn/product-engineering, where it is maintained in the
    ai-shipping plugin; this copy says where it went and how to install it. Use
    when asked to review changes, find bugs, audit a codebase, or check whether
    a fix is safe.
  folder_path: pm-ai-shipping/skills/code-review
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

# Code Review has moved
`code-review` is maintained in [phuryn/product-engineering](https://github.com/phuryn/product-engineering/tree/main/ai-shipping/skills/code-review), in its `ai-shipping` plugin, with the rest of the AI Shipping Kit. This skill stays in pm-skills only so an agent that loads it knows where it went.

- **`ai-shipping:code-review` is installed:** use it, not this copy.
- **It isn't:** tell the user that `code-review` moved and how to install it, then help with the task as you would without it:

  ```bash
  claude plugin marketplace add phuryn/product-engineering
  claude plugin install ai-shipping@product-engineering
  ```

  Other agents: [the repository's README](https://github.com/phuryn/product-engineering#install). Once it's installed, turn off `pm-ai-shipping` here, so this copy no longer loads beside it.
