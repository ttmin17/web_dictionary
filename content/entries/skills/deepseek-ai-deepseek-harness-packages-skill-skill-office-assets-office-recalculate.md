---
slug: deepseek-ai-deepseek-harness-packages-skill-skill-office-assets-office-recalculate
name: office-recalculate
tagline: Refresh spreadsheet formula caches and verify calculated values with
  LibreOffice Kit.
summary: Keep the original workbook and write a new file in the task workspace.
  Quote each input and output path.
categories:
  - agent-frameworks
tags:
  - ai-agents
  - cordis
  - dsh
  - dsh-plugin
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: deepseek-ai/deepseek-harness
  subpath: packages/skill/skill-office/assets/office-recalculate
  official_vendor: false
  license: MIT
signals:
  stars: 268886
  last_commit: 2026-10-30T06:54:11Z
  stars_delta_7d: 7068
  stars_growth_pct: 2.7
  trending_score: 7258.81
  velocity_source: snapshot_delta
  sparkline_4w:
    - 253669
    - 261818
    - 268886
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: deepseek-ai/deepseek-harness
  path: packages/skill/skill-office/assets/office-recalculate/SKILL.md
  branch: master
  fetched_at: 2026-11-02T09:06:52.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: office-recalculate
  description: Refresh spreadsheet formula caches and verify calculated values
    with LibreOffice Kit.
  folder_path: packages/skill/skill-office/assets/office-recalculate
  extra_files: []
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: deepseek-ai-deepseek-harness
---

# Recalculate spreadsheet formulas
Use the installed LibreOffice Kit CLI through the shell with the absolute Node and CLI paths supplied below. In Bash, invoke `"<node>" "<cli>"`; in PowerShell, invoke `& "<node>" "<cli>"`. Prefer bundled LibreOffice unless the user requests another installation. If the Office sidecar is missing, follow [sidecar setup](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/skill-office/assets/office-recalculate/../office/references/sidecar.md): ask whether the user wants to download it and install only after they agree. Do not invoke system soffice, use npx, or install a replacement to work around a failed recalculation with an installed sidecar.

Keep the original workbook and write a new file in the task workspace. Quote each input and output path.

```text
"<node>" "<cli>" recalculate --input <workbook.xlsx> --output <recalculated.xlsx>
```

Verify the saved result with openpyxl, using `load_workspace_dependencies` for the Python path unless a project environment is required. Open it with both `data_only=False` and `data_only=True`. Check that formulas survive and cached results match the requested logic, expected totals, and cell types. Check required unchanged sheets, styles, and data. Recalculation does not validate business logic or guarantee Excel-specific feature compatibility.

If no supported recalculation engine is available or the command fails, preserve the workbook and explain that calculated values could not be refreshed. Do not replace requested formulas with constants or present stale/absent caches as fresh results. Deliver the verified output through `present` when available, keeping the file in place.
