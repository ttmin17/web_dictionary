---
slug: davepoon-buildwithclaude-plugins-gsd-skills-set-profile
name: gsd:set-profile
tagline: Switch model profile for GSD agents (quality/balanced/budget/inherit)
summary: "!if ! command -v gsd-sdk >/dev/null 2>&1; then printf '⚠ gsd-sdk not
  found in PATH — /gsd:set-profile requires it.\\n\\nInstall the GSD SDK:\\n npm
  install -g @gsd-build/sdk\\n\\nOr update GSD to get the latest
  packages:\\n..."
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/gsd/skills/set-profile
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/gsd/skills/set-profile/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.620Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:set-profile
  description: Switch model profile for GSD agents (quality/balanced/budget/inherit)
  folder_path: plugins/gsd/skills/set-profile
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

Show the following output to the user verbatim, with no extra commentary:

!`if ! command -v gsd-sdk >/dev/null 2>&1; then printf '⚠ gsd-sdk not found in PATH — /gsd:set-profile requires it.\n\nInstall the GSD SDK:\n  npm install -g @gsd-build/sdk\n\nOr update GSD to get the latest packages:\n  /gsd:update\n'; exit 1; fi; gsd-sdk query config-set-model-profile $ARGUMENTS --raw`
