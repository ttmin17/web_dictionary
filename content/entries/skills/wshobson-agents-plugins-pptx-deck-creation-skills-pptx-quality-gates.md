---
slug: wshobson-agents-plugins-pptx-deck-creation-skills-pptx-quality-gates
name: pptx-quality-gates
tagline: Use when validating or repairing an editable PPTX deck for geometry,
  accessibility, native editability, source lineage, and OOXML package
  integrity.
summary: 1. Confirm the spec, builder, PPTX, source manifest, and audit paths.
  2. Apply references/audit-checklist.md to the coordinate contract before
  building. 3. Reopen the PPTX and compare slide count, actual bounds, hidde...
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/pptx-deck-creation/skills/pptx-quality-gates
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/pptx-deck-creation/skills/pptx-quality-gates/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.202Z
  truncated: false
type: agent_skill
skill:
  skill_name: pptx-quality-gates
  description: Use when validating or repairing an editable PPTX deck for
    geometry, accessibility, native editability, source lineage, and OOXML
    package integrity.
  folder_path: plugins/pptx-deck-creation/skills/pptx-quality-gates
  extra_files:
    - references/audit-checklist.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# PPTX Quality Gates
Use this skill before delivering a generated PPTX. Treat deterministic failures as repair work, not exceptions.

## Workflow

1. Confirm the spec, builder, PPTX, source manifest, and audit paths.
2. Apply `references/audit-checklist.md` to the coordinate contract before building.
3. Reopen the PPTX and compare slide count, actual bounds, hidden slides, and requested geometry with the layout tree.
4. For production decks, run `pptx-reference-deck-analysis/scripts/validate_package.py` and save the JSON report.
5. Check document language, slide titles, meaningful-image alt text, reading order, table headers, and source references.
6. When a compatible renderer is already available, inspect previews for clipping, font fallback, contrast, crop, and hierarchy. Do not add a renderer dependency.
7. Repair the spec or task-local builder, rebuild, and rerun the same checks.

## Required artifacts

Keep the spec, PPTX, build record, geometry audit, accessibility audit, package report, and source manifest together. Report any documented exception with slide ID, object ID, owner, reason, and review date.

## Pass criteria

Zero content collisions, text overflows, unsafe content bounds, invalid positive geometry, and package-integrity errors. Meaningful slide content must remain native editable objects; images support rather than replace it.

See `references/audit-checklist.md` for the complete checklist.
