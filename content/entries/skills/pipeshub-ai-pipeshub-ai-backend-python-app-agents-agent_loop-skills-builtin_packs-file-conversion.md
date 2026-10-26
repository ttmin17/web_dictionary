---
slug: pipeshub-ai-pipeshub-ai-backend-python-app-agents-agent_loop-skills-builtin_packs-file-conversion
name: file-conversion
tagline: Use this skill when the user asks to convert a file from one format to
  another (e.g. csv to xlsx, xlsx to json, pdf text to csv) and you're not sure
  w
summary: For plain csv/xlsx/json reshuffling, default to the Node path (an array
  of plain objects is the common intermediate, playing the same role
  pandas.DataFrame plays on the Python side) per this environment's Node-first
  p...
categories:
  - databases-memory
tags:
  - agentic-rag
  - ai-agents
  - claude-code
  - context-engineering
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: pipeshub-ai/pipeshub-ai
  subpath: backend/python/app/agents/agent_loop/skills/builtin_packs/file-conversion
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 3850
  last_commit: 2026-10-26T06:57:53Z
  stars_delta_7d: 12
  stars_growth_pct: 0.3
  trending_score: 12.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3814
    - 3830
    - 3838
    - 3850
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: pipeshub-ai/pipeshub-ai
  path: backend/python/app/agents/agent_loop/skills/builtin_packs/file-conversion/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:00.721Z
  truncated: false
type: agent_skill
skill:
  skill_name: file-conversion
  description: Use this skill when the user asks to convert a file from one format
    to another (e.g. csv to xlsx, xlsx to json, pdf text to csv) and you're not
    sure which library handles that specific pair, or whether it's supported in
    this environment at all. Dispatches to the right library per format pair and
    explicitly lists conversions that are NOT supported here so you don't
    attempt one that will silently fail or produce a wrong result.
  folder_path: backend/python/app/agents/agent_loop/skills/builtin_packs/file-conversion
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: pipeshub-ai-pipeshub-ai
---

# File format conversion
## Supported conversions

| From | To | Default (Node) | Fallback (Python) |
|------|-----|-----------------|--------------------|
| csv | xlsx / json / html | `papaparse` (parse to array of objects) → `exceljs` (xlsx) / `JSON.stringify` (json) / a hand-rolled `<table>` loop (html — no library needed for this) | `pandas.read_csv` → `.to_excel` / `.to_json` / `.to_html` — reach for this when the conversion needs real reshaping (pivots, group-by, dtype coercion) along the way, not as a first choice |
| xlsx | csv / json / html | `exceljs` (read) → `papaparse.unparse` (csv) / `JSON.stringify` (json) / hand-rolled html | `pandas.read_excel` → `.to_csv` / `.to_json` / `.to_html` |
| json (tabular/list-of-records shape) | csv / xlsx | `JSON.parse` → `papaparse.unparse` (csv) / `exceljs` (xlsx) | `pandas.read_json` → `.to_csv` / `.to_excel` |
| image (png/jpg/webp/etc.) | different image format, resize, basic edits | `sharp` (`.toFormat(...)`, `.resize(...)`) | `Pillow` (`Image.open(...).save(new_path)`) |
| docx | plain text | — (no solid Node equivalent for structured docx parsing) | `python-docx` / `docx2python` — extract paragraph and table text |
| pdf | plain text / csv (tables) | — (no solid Node equivalent for table-aware extraction) | `pdfplumber` — `extract_text()` / `extract_tables()` → build a DataFrame if tabular |

For plain csv/xlsx/json reshuffling, **default to the Node path** (an array of plain objects is the common intermediate, playing the same role `pandas.DataFrame` plays on the Python side) per this environment's Node-first policy — reach for `pandas` only when the conversion needs real data reshaping along the way. docx/pdf extraction and structure-aware parsing have no solid Node equivalent here, so those stay Python regardless of format on the other end.

## NOT supported in this environment

These all require a document-rendering engine (LibreOffice) that is not installed in the sandbox yet. Tell the user directly rather than attempting a workaround (e.g. do not try to fake a "pdf" by screenshotting text, and do not claim success on a conversion you didn't actually perform):

- `docx` → `pdf`
- `pptx` → `pdf`
- `doc` (legacy binary Word format) → `docx`
- `xlsx` → `pdf`
- Any conversion that requires rendering/rasterizing a document (visual layout to image)

## Choosing between "extract data" and "convert format"

If the user's underlying goal is "get the numbers out of this PDF/docx into a spreadsheet" rather than literally "convert this file", extracting the relevant data and writing exactly the columns/rows they need is usually a better outcome than a generic whole-file conversion — ask yourself which one they actually need before picking an approach.
