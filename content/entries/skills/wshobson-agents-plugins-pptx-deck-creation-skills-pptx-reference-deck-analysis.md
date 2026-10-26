---
slug: wshobson-agents-plugins-pptx-deck-creation-skills-pptx-reference-deck-analysis
name: pptx-reference-deck-analysis
tagline: Use when analyzing a reference PPTX for read-only structure, theme,
  typography, layout rhythm, diagnostics, derived template catalogs, or safe
  OOXML p
summary: "Implement required extraction on demand with a small task-local
  python-pptx script. Capture only the information required for the new deck:"
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
  subpath: plugins/pptx-deck-creation/skills/pptx-reference-deck-analysis
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
  path: plugins/pptx-deck-creation/skills/pptx-reference-deck-analysis/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.202Z
  truncated: false
type: agent_skill
skill:
  skill_name: pptx-reference-deck-analysis
  description: Use when analyzing a reference PPTX for read-only structure, theme,
    typography, layout rhythm, diagnostics, derived template catalogs, or safe
    OOXML package inspection.
  folder_path: plugins/pptx-deck-creation/skills/pptx-reference-deck-analysis
  extra_files:
    - references/ooxml-parsing.md
    - references/reference-deck-analysis-patterns.md
    - references/reference-deck-analysis.md
    - requirements.txt
    - scripts/inspect.py
    - scripts/unpack.py
    - scripts/validate_package.py
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# PPTX Reference Deck Analysis
Inspect a reference deck as design evidence. This skill never copies, clones, or mutates a source deck.

## Contract

Implement required extraction on demand with a small task-local `python-pptx` script. Capture only the information required for the new deck:

- compact prompt context: slide count and size, text summaries, shape counts, styles, brand signals, template use, and layout rhythm;
- full extraction: `summary`, slides, and read-only `layout_tree` evidence;
- folder diagnostics: one result per deck plus a manifest;
- style-master analysis: colors, fonts, size distribution, master/layout use, and flow patterns;
- derived template catalog: zero-based source indices, layout roles, usable regions, placeholders, visual structures, and constraints.

## Rules

- Keep the source deck read-only and independently author every target-slide coordinate.
- Use the bundled OOXML utilities only for raw themes, relationships, notes, comments, animations, media, masters, or layouts that high-level extraction cannot expose.
- Record inspected parts and parsing exceptions in the analysis manifest.
- Do not use extracted content, fonts, images, or proprietary assets in a generated deck without explicit permission and license evidence.

## OOXML package inspection

Install `defusedxml` from `requirements.txt` before using the bundled utilities.

1. Run `scripts/inspect.py <deck.pptx>` for a compact JSON report of slide order, text, theme tokens, relationships, notes, comments, animations, and media.
2. Run `scripts/validate_package.py <deck.pptx> --output <report.json>` for malformed XML, broken internal relationships, content-type gaps, duplicate layout links, and orphaned parts.
3. Run `scripts/unpack.py <deck.pptx> <output-dir>` only when raw-package evidence is necessary.
4. Resolve relationship targets relative to the `.rels` owner; never infer slide order from filenames.

### Safety

- Never modify a supplied deck or blindly copy package parts into a new deck.
- Run the scripts from a trusted workspace; they reject path traversal, symlinks, oversized members, and archive bombs.
- Parse untrusted XML with `defusedxml`; do not enable entity expansion, DTD loading, or network access.
- Treat theme colors as tokens unless fully resolved against the color scheme.

See `references/reference-deck-analysis.md` for output shapes, `references/reference-deck-analysis-patterns.md` for documentation-only patterns, and `references/ooxml-parsing.md` for package part maps.
