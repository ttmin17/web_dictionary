---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-ios-hig-design-guide
name: ios-hig-design-guide
tagline: Build, update, and apply iOS design specifications using Apple Human
  Interface Guidelines (HIG) source data. Use when a task asks for iOS UI/UX
  rules,
summary: 1. Sync official sources. 2. Read only relevant sections. 3. Produce a
  feature-specific spec (not a generic style dump).
categories:
  - media-creative
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
  subpath: plugins/all-skills/skills/ios-hig-design-guide
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
  path: plugins/all-skills/skills/ios-hig-design-guide/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.588Z
  truncated: false
type: agent_skill
skill:
  skill_name: ios-hig-design-guide
  description: Build, update, and apply iOS design specifications using Apple
    Human Interface Guidelines (HIG) source data. Use when a task asks for iOS
    UI/UX rules, Apple design standards, component behavior, accessibility
    constraints, interaction patterns, or feature-level design-spec writing
    grounded in official HIG pages.
  folder_path: plugins/all-skills/skills/ios-hig-design-guide
  extra_files:
    - references/ios-design-spec-workflow.md
    - scripts/sync_apple_hig_sources.py
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# iOS HIG Design Guide
Use this skill to produce iOS design recommendations that stay close to official Apple guidance.

## Quick start

1. Sync official sources.
2. Read only relevant sections.
3. Produce a feature-specific spec (not a generic style dump).

Run:

```bash
python3 scripts/sync_apple_hig_sources.py --skill-dir .
```

## Source of truth

- Full raw index with links and abstracts: `references/apple-hig-ios-raw.md`
- Consolidated text dump of all downloaded pages: `references/apple-hig-ios-fulltext.md`
- Curated text dump for iOS spec writing: `references/apple-hig-ios-curated.md`
- Workflow for selecting relevant HIG pages: `references/ios-design-spec-workflow.md`
- Per-page JSON sources: `references/raw/pages/design/human-interface-guidelines/*.json`
- Crawl metadata and fetch status: `references/raw/catalog.json`

## Workflow

### 1) Sync and verify

- Run sync script before answering "latest" or "current" requests.
- Confirm `download_error` is 0 in `references/raw/catalog.json`.
- If errors exist, report failed paths and continue with successfully downloaded pages.

### 2) Narrow scope

- Start from `/design/human-interface-guidelines/designing-for-ios`.
- Add only sections directly related to the requested feature.
- Prioritize foundational constraints (accessibility, layout, typography, color, writing, privacy).
- Prefer `references/apple-hig-ios-curated.md` for day-to-day use; use full dump only when needed.

### 3) Extract constraints

For each selected page, pull concrete rules into implementable statements:

- When to use component/pattern
- Required states (loading, empty, error, destructive confirmation)
- Accessibility behavior (labels, hints, touch target, dynamic type)
- Localization/layout behavior (RTL, truncation, multiline)
- Platform-specific caveats (iOS-only vs cross-platform)

### 4) Produce deliverable

Default output structure:

1. Feature goal and user scenario
2. Information architecture and screen inventory
3. Interaction and state model
4. Component specification
5. Accessibility and localization checklist
6. Open questions and tradeoffs

## Output style rules

- Cite source page paths for each major rule.
- Translate HIG guidance into actionable product decisions.
- Avoid copying large raw passages.
- Mark inferred recommendations explicitly as inference.

## Maintenance

- Re-run sync script whenever Apple updates HIG content.
- Keep generated raw files in `references/`; do not hand-edit generated outputs.
- Update this SKILL.md only for workflow or quality improvements.
