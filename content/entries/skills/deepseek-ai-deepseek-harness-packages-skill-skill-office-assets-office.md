---
slug: deepseek-ai-deepseek-harness-packages-skill-skill-office-assets-office
name: office
tagline: Create, edit, inspect, or convert Office documents, spreadsheets,
  presentations, and PDFs. Load to choose the relevant workflow.
summary: "- Create, read, or edit: office-docx (Word), office-pptx (PowerPoint),
  or office-xlsx (Excel). - Images, visual inspection, or tasks primarily about
  layout, spacing, sizing, or alignment: office-render, even without a..."
categories:
  - agent-frameworks
tags:
  - ai-agents
  - cordis
  - dsh
  - dsh-plugin
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: deepseek-ai/deepseek-harness
  subpath: packages/skill/skill-office/assets/office
  official_vendor: false
  license: MIT
signals:
  stars: 276996
  last_commit: 2026-11-04T13:06:39Z
  stars_delta_7d: 3556
  stars_growth_pct: 1.3
  trending_score: 3602.24
  velocity_source: snapshot_delta
  sparkline_4w:
    - 253669
    - 261818
    - 273440
    - 276996
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: deepseek-ai/deepseek-harness
  path: packages/skill/skill-office/assets/office/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:28:09.120Z
  truncated: false
type: agent_skill
skill:
  skill_name: office
  description: Create, edit, inspect, or convert Office documents, spreadsheets,
    presentations, and PDFs. Load to choose the relevant workflow.
  folder_path: packages/skill/skill-office/assets/office
  extra_files:
    - references/sidecar.md
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: deepseek-ai-deepseek-harness
---

# Office task routing
Call the `skill` tool with the format skill name before creating, reading, or editing Office files. Standalone rendering, PDF export, and recalculation need only their operation skill.

- Create, read, or edit: `office-docx` (Word), `office-pptx` (PowerPoint), or `office-xlsx` (Excel).
- Images, visual inspection, or tasks primarily about layout, spacing, sizing, or alignment: `office-render`, even without an explicit visual-check request.
- Refresh spreadsheet formula results: `office-recalculate`.
- Export an Office file to PDF: `office-export-pdf`.

Honor requests to skip rendering. New files, content edits, formulas, and incidental formatting such as bold headers or number formats need no render unless visual inspection is requested. Do not reload skills.
