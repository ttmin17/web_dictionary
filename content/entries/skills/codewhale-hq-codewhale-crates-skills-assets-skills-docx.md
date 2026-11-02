---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-docx
name: docx
tagline: Create/edit/inspect Word documents using available managed or host
  capabilities.
summary: Create/edit/inspect Word documents using available managed or host
  capabilities.
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
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/docx
  official_vendor: false
  license: MIT
signals:
  stars: 41169
  last_commit: 2026-11-02T08:01:40Z
  stars_delta_7d: 51
  stars_growth_pct: 0.1
  trending_score: 51.06
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41169
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/docx/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:06.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: docx
  description: Create/edit/inspect Word documents using available managed or host
    capabilities.
  folder_path: crates/skills/assets/skills/docx
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

# Docx
## When to use
Use for `.docx` / Word-style documents (memos, reports, letters, templates).

## Compatibility
`documents` is a compatibility alias for this skill.

## Workflow
1. Prefer `.docx` in the workspace.
2. Preserve originals unless in-place edit is requested.
3. Use python-docx/pandoc when available.
4. Verify by reopening and extracting representative text.
