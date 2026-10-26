---
slug: wshobson-agents-plugins-pptx-deck-creation-skills-pptx-visual-assets
name: pptx-visual-assets
tagline: Use when selecting and placing approved supporting icons, images, SVGs,
  diagrams, or infographics in an editable PPTX deck.
summary: "1. Select the asset type only when it improves comprehension: icon,
  image, SVG, diagram, or infographic. 2. Confirm the local asset path, source,
  usage rights, and concise alt text before placement. 3. Add the asset w..."
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
  subpath: plugins/pptx-deck-creation/skills/pptx-visual-assets
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
  path: plugins/pptx-deck-creation/skills/pptx-visual-assets/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.202Z
  truncated: false
type: agent_skill
skill:
  skill_name: pptx-visual-assets
  description: Use when selecting and placing approved supporting icons, images,
    SVGs, diagrams, or infographics in an editable PPTX deck.
  folder_path: plugins/pptx-deck-creation/skills/pptx-visual-assets
  extra_files:
    - references/asset-guidance.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# PPTX Visual Assets
Use visual assets to support a slide's message, never to flatten or replace editable content.

## Workflow

1. Select the asset type only when it improves comprehension: icon, image, SVG, diagram, or infographic.
2. Confirm the local asset path, source, usage rights, and concise alt text before placement.
3. Add the asset with a final inch bbox, deliberate z-index, and `content` or `layout_design` classification.
4. Preserve aspect ratio and check that no asset covers readable text or leaves essential information locked in an image.

## Rules

- Use simple, legible icons alongside text labels.
- Place captions beside images rather than over them.
- Use true SVG sources only when they are clean vectors; never wrap a raster image in SVG and call it editable.
- Recreate essential labels, legends, values, and process steps with native PowerPoint objects.
- If rights, provenance, or a suitable asset are unavailable, omit the asset and report the gap. Never add a placeholder as a finished visual.
- Record provider or source details in the source manifest. Never request secrets in chat.

See `references/asset-guidance.md` for licensing, placement, and SVG constraints.
