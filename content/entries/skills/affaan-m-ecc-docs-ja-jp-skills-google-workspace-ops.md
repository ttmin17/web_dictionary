---
slug: affaan-m-ecc-docs-ja-jp-skills-google-workspace-ops
name: google-workspace-ops
tagline: Google Workspace API操作、Sheets自動化、Gmail統合、およびドキュメント管理。
summary: "- User needs to find a doc, sheet, or deck and update it in place -
  Consolidating plans, trackers, notes, or customer lists stored in Google Drive
  - Cleaning or restructuring a shared spreadsheet - Importing, repairin..."
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: docs/ja-JP/skills/google-workspace-ops
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: docs/ja-JP/skills/google-workspace-ops/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.014Z
  truncated: false
type: agent_skill
skill:
  skill_name: google-workspace-ops
  description: Google Workspace API操作、Sheets自動化、Gmail統合、およびドキュメント管理。
  folder_path: docs/ja-JP/skills/google-workspace-ops
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Google Workspace Ops
This skill is for operating shared docs, spreadsheets, and decks as working systems, not just editing one file in isolation.

## When to Use

- User needs to find a doc, sheet, or deck and update it in place
- Consolidating plans, trackers, notes, or customer lists stored in Google Drive
- Cleaning or restructuring a shared spreadsheet
- Importing, repairing, or reformatting a Google Slides deck
- Producing summaries from Docs, Sheets, or Slides for decision-making

## Preferred Tool Surface

Use Google Drive as the entry point, then switch to the right specialist:

- Google Docs for text-heavy docs
- Google Sheets for tabular work, formulas, and charts
- Google Slides for decks, imports, template migration, and cleanup

Do not guess structure from filenames alone. Inspect first.

## Workflow

### 1. Find the asset

Start with the Drive search surface to locate:

- the exact file
- sibling assets
- likely duplicates
- recently modified versions

If several documents look similar, confirm by title, owner, modified time, or folder.

### 2. Inspect before editing

Before making changes:

- summarize current structure
- identify tabs, headings, or slide count
- detect whether the task is local cleanup or structural surgery

Pick the smallest tool that can safely perform the work.

### 3. Edit with precision

- For Docs: use index-aware edits, not vague rewrites
- For Sheets: operate on explicit tabs and ranges
- For Slides: distinguish content edits from visual cleanup or template migration

If the requested work is visual or layout-sensitive, iterate with inspection and verification instead of one giant blind update.

### 4. Keep the working system clean

When the file is part of a larger workflow, also surface:

- duplicate trackers
- outdated decks
- stale docs vs canonical docs
- whether the asset should be archived, merged, or renamed

## Output Format

Use:

```text
ASSET
- file name
- type
- why this is the right file

CURRENT STATE
- structure summary
- key problems or blockers

ACTION
- edits made or recommended

FOLLOW-UPS
- archive / merge / duplicate cleanup / next file to update
```

## Good Use Cases

- "Find the active planning doc and condense it"
- "Clean up this customer spreadsheet and show me the churn-risk rows"
- "Import this deck into Slides and make it presentable"
- "Find the current tracker, not the stale duplicate"
