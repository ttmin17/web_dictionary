---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-docx
name: docx
tagline: Create/edit/inspect Word documents using available managed or host
  capabilities.
summary: Create/edit/inspect Word documents using available managed or host
  capabilities.
categories:
  - agent-frameworks
tags:
  - agent-client-protocol
  - agent-orchestration
  - ai-agent
  - ai-coding
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/docx
  official_vendor: false
  license: MIT
signals:
  stars: 41180
  last_commit: 2026-11-16T06:56:39Z
  stars_delta_7d: 20
  stars_growth_pct: 0
  trending_score: 20.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41118
    - 41158
    - 41160
    - 41180
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/docx/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:50.143Z
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
