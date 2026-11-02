---
slug: harnessrouter-harnessrouter-scripts-support-matrix-plugins-fixture-skills-plugin-probe
name: plugin-probe
tagline: A probe skill for the support matrix. Use it when asked to use the
  plugin-probe skill.
summary: A probe skill for the support matrix. Use it when asked to use the
  plugin-probe skill.
categories:
  - agent-frameworks
tags:
  - agent-api
  - agent-framework
  - agent-harness
  - ai-agents
status: active
quality_percentile: 55
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: HarnessRouter/harnessrouter
  subpath: scripts/support-matrix/plugins/fixture/skills/plugin-probe
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 3861
  last_commit: 2026-11-02T02:10:02Z
  stars_delta_7d: 319
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 3861
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: HarnessRouter/harnessrouter
  path: scripts/support-matrix/plugins/fixture/skills/plugin-probe/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:06.693Z
  truncated: false
type: agent_skill
skill:
  skill_name: plugin-probe
  description: A probe skill for the support matrix. Use it when asked to use the
    plugin-probe skill.
  folder_path: scripts/support-matrix/plugins/fixture/skills/plugin-probe
  extra_files: []
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: harnessrouter-harnessrouter
---

# plugin-probe
When this skill is used, reply with exactly this single line and nothing else:

PLUGIN_SKILL_OK
