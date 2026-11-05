---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-frontend-design
name: frontend-design
tagline: Produce intentional, responsive, accessible UI work and perform visual
  QA instead of generic component assembly.
summary: Produce intentional, responsive, accessible UI work and perform visual
  QA instead of generic component assembly.
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/frontend-design
  official_vendor: false
  license: MIT
signals:
  stars: 41158
  last_commit: 2026-11-05T13:03:13Z
  stars_delta_7d: 40
  stars_growth_pct: 0.1
  trending_score: 40.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41158
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/frontend-design/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:37.248Z
  truncated: false
type: agent_skill
skill:
  skill_name: frontend-design
  description: Produce intentional, responsive, accessible UI work and perform
    visual QA instead of generic component assembly.
  folder_path: crates/skills/assets/skills/frontend-design
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

# Frontend Design
## When to use
Use for UI that must feel intentional, responsive, and accessible.

## Non-goals
- Do not ship generic placeholder layouts as finished design.
- Do not ignore accessibility.

## Workflow
1. Clarify audience and constraints.
2. Design hierarchy, spacing, and states.
3. Implement with responsive/accessible patterns.
4. Visual QA against the acceptance criteria.
