---
slug: leonxlnx-taste-skill-skills-image-to-code-skill
name: image-to-code
tagline: Moved to github.com/Leonxlnx/imagegen-skills. Runs only when called by name.
summary: "The install name did not change:"
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
first_seen: 2026-10-14
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: Leonxlnx/taste-skill
  subpath: skills/image-to-code-skill
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
  path: skills/image-to-code-skill/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:36:41.103Z
  truncated: false
type: agent_skill
skill:
  skill_name: image-to-code
  description: Moved to github.com/Leonxlnx/imagegen-skills. Runs only when called by name.
  folder_path: skills/image-to-code-skill
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

# image-to-code (moved)
This skill now lives in its own repository, with the other image-generation skills: https://github.com/Leonxlnx/imagegen-skills

The install name did not change:

```bash
npx skills add https://github.com/Leonxlnx/imagegen-skills --skill "image-to-code"
```
