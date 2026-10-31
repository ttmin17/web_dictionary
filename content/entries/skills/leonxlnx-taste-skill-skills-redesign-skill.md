---
slug: leonxlnx-taste-skill-skills-redesign-skill
name: redesign-existing-projects
tagline: "Retired: redesigns, restyles and design reviews are part of
  design-taste-frontend. Runs only when called by name."
summary: 'If you were called by name, follow the design-taste-frontend skill
  (its "Redesign or review" route). If it is not installed:'
categories:
  - cloud-infra
tags:
  - agent-skills
  - ai-agents
  - anti-slop
  - claude-code
status: active
quality_percentile: 67
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: Leonxlnx/taste-skill
  subpath: skills/redesign-skill
  official_vendor: false
  license: MIT
signals:
  stars: 99005
  last_commit: 2026-10-19T05:47:12Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 93423
    - 95459
    - 99005
    - 99005
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Leonxlnx/taste-skill
  path: skills/redesign-skill/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:36:41.103Z
  truncated: false
type: agent_skill
skill:
  skill_name: redesign-existing-projects
  description: "Retired: redesigns, restyles and design reviews are part of
    design-taste-frontend. Runs only when called by name."
  folder_path: skills/redesign-skill
  extra_files:
    - agents/openai.yaml
  pack_total_skills: 13
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: leonxlnx-taste-skill
---

# Redesign (retired)
This skill is retired. Redesigns, restyles and reviews of existing pages and app screens are part of **design-taste-frontend**, which audits the existing page in a real browser first, keeps its content and working behaviour, and then rebuilds the design to a dealt direction with before-and-after screenshots.

If you were called by name, follow the design-taste-frontend skill (its "Redesign or review" route). If it is not installed:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```
