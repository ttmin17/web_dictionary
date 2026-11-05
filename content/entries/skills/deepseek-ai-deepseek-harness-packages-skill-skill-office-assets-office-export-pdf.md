---
slug: deepseek-ai-deepseek-harness-packages-skill-skill-office-assets-office-export-pdf
name: office-export-pdf
tagline: Convert an Office document to a requested PDF with LibreOffice Kit.
summary: Convert the final saved Office file to a new PDF in the task workspace.
  Preserve the source. Quote each input and output path.
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
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: deepseek-ai/deepseek-harness
  subpath: packages/skill/skill-office/assets/office-export-pdf
  official_vendor: false
  license: MIT
signals:
  stars: 273440
  last_commit: 2026-11-04T13:06:39Z
  stars_delta_7d: 11622
  stars_growth_pct: 4.4
  trending_score: 12137.9
  velocity_source: snapshot_delta
  sparkline_4w:
    - 253669
    - 261818
    - 273440
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: deepseek-ai/deepseek-harness
  path: packages/skill/skill-office/assets/office-export-pdf/SKILL.md
  branch: master
  fetched_at: 2026-11-05T13:13:20.854Z
  truncated: false
type: agent_skill
skill:
  skill_name: office-export-pdf
  description: Convert an Office document to a requested PDF with LibreOffice Kit.
  folder_path: packages/skill/skill-office/assets/office-export-pdf
  extra_files: []
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: deepseek-ai-deepseek-harness
---

# Export an Office document to PDF
Use the installed LibreOffice Kit CLI through the shell with the absolute Node and CLI paths supplied below. In Bash, invoke `"<node>" "<cli>"`; in PowerShell, invoke `& "<node>" "<cli>"`. Prefer bundled LibreOffice unless the user requests another installation. If the Office sidecar is missing, follow [sidecar setup](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/skill-office/assets/office-export-pdf/../office/references/sidecar.md): ask whether the user wants to download it and install only after they agree. Do not invoke system soffice, use npx, or install a replacement to work around a failed conversion with an installed sidecar.

Convert the final saved Office file to a new PDF in the task workspace. Preserve the source. Quote each input and output path.

```text
"<node>" "<cli>" convert --input <final-office-file> --output <new-file.pdf>
```

Check the command result, nonempty output, and `%PDF-` file signature, then report that extent of validation. Unless the user requests deeper checks, do not search for PDF readers, generate images, or install tools to validate a conversion. Spreadsheet PDF pages follow workbook print settings; change those settings only when requested. Conversion may differ from the native application's pagination or fonts.

If export fails, preserve the usable source and report the export limitation. Do not repeatedly convert an unchanged source or use conversion to investigate a failed preview. For PDF export alone, stop after these checks. Only a request for images or visual inspection calls for `office-render`; load it before that separate operation. Deliver the requested PDF through `present` when available, keeping the file in place.
