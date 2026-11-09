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
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-03-01T23:33:44
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-ai-shipping/skills/code-review
  official_vendor: false
  license: MIT
signals:
  stars: 27797
  last_commit: 2026-11-08T23:10:04Z
  stars_delta_7d: 88
  stars_growth_pct: 0.3
  trending_score: 88.28
  rank_current: 70
  rank_delta: -9
  velocity_source: snapshot_delta
  sparkline_4w:
    - 27192
    - 27381
    - 27709
    - 27797
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-ai-shipping/skills/code-review/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:57.925Z
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
