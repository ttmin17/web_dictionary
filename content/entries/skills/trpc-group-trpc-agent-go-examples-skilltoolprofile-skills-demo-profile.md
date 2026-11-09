---
slug: trpc-group-trpc-agent-go-examples-skilltoolprofile-skills-demo-profile
name: demo-profile
tagline: Demo skill for the SkillToolProfile example.
summary: In knowledge-only mode, treat this command as reference material and
  use the docs for reasoning instead of executing it.
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/skilltoolprofile/skills/demo-profile
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1915
  last_commit: 2026-11-09T07:59:11Z
  stars_delta_7d: 9
  stars_growth_pct: 0.5
  trending_score: 9.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1870
    - 1877
    - 1906
    - 1915
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/skilltoolprofile/skills/demo-profile/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:12.568Z
  truncated: false
type: agent_skill
skill:
  skill_name: demo-profile
  description: Demo skill for the SkillToolProfile example.
  folder_path: examples/skilltoolprofile/skills/demo-profile
  extra_files:
    - docs/usage.md
    - scripts/write_profile.sh
  pack_total_skills: 24
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# Demo Profile Skill
This skill exists only to demonstrate `WithSkillToolProfile(...)`.

In full mode, you can run:

```bash
sh scripts/write_profile.sh out/profile.txt
```

In knowledge-only mode, treat this command as reference material and use the
docs for reasoning instead of executing it.
