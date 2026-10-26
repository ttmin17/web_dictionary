---
slug: nextlevelbuilder-ui-ux-pro-max-skill-cli-assets-skills-slides
name: slides
tagline: Create strategic HTML presentations with Chart.js, design tokens,
  responsive layouts, copywriting formulas, and contextual slide strategies.
summary: "- Marketing presentations and pitch decks - Data-driven slides with
  Chart.js - Strategic slide design with layout patterns - Copywriting-optimized
  presentation content"
categories:
  - media-creative
tags:
  - ai-skills
  - antigravity
  - claude
  - claude-code
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: nextlevelbuilder/ui-ux-pro-max-skill
  subpath: cli/assets/skills/slides
  official_vendor: false
  license: MIT
signals:
  stars: 140519
  last_commit: 2026-10-26T07:06:53Z
  stars_delta_7d: 3172
  stars_growth_pct: 2.3
  trending_score: 3245.26
  velocity_source: snapshot_delta
  sparkline_4w:
    - 133772
    - 135424
    - 137347
    - 140519
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nextlevelbuilder/ui-ux-pro-max-skill
  path: cli/assets/skills/slides/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:09.047Z
  truncated: false
type: agent_skill
skill:
  skill_name: slides
  description: Create strategic HTML presentations with Chart.js, design tokens,
    responsive layouts, copywriting formulas, and contextual slide strategies.
  folder_path: cli/assets/skills/slides
  extra_files:
    - references/copywriting-formulas.md
    - references/create.md
    - references/html-template.md
    - references/layout-patterns.md
    - references/slide-strategies.md
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nextlevelbuilder-ui-ux-pro-max-skill
---

# Slides
Strategic HTML presentation design with data visualization.

## When to Use

- Marketing presentations and pitch decks
- Data-driven slides with Chart.js
- Strategic slide design with layout patterns
- Copywriting-optimized presentation content

## Subcommands

| Subcommand | Description | Reference |
|------------|-------------|-----------|
| `create` | Create strategic presentation slides | `references/create.md` |

## Script Paths

Script paths in this skill and its `references/` are relative to the directory that contains this SKILL.md, not to the project: `scripts/<file>` is this skill's own `scripts/` folder, and `../<skill>/scripts/<file>` is a sibling sub-skill installed alongside it. Build the full path from that directory (Claude Code reports it as the skill's base directory when the skill loads) and keep the working directory at the project root — the scripts read and write project files such as `docs/brand-guidelines.md`, `assets/design-tokens.json` or `src/` relative to it.

## References (Knowledge Base)

| Topic | File |
|-------|------|
| Layout Patterns | `references/layout-patterns.md` |
| HTML Template | `references/html-template.md` |
| Copywriting Formulas | `references/copywriting-formulas.md` |
| Slide Strategies | `references/slide-strategies.md` |

## Routing

1. Parse subcommand from `$ARGUMENTS` (first word)
2. Load corresponding `references/{subcommand}.md`
3. Execute with remaining arguments
