---
slug: scenario-labs-skills-skills-scenario-mai-image
name: scenario-mai-image
tagline: "Use when generating or editing images with Microsoft MAI Image models
  on Scenario via MCP: photoreal or stylized text-to-image with legible in-image
  t"
summary: "MAI Image 2.5, Microsoft's image family on Scenario, splits into
  generation members (2.5, 2.5 Pro) and instruction editors (2.5 Edit, 2.5 Pro
  Edit). The family trait is typography: in-image headlines, labels, and
  tagl..."
categories:
  - media-creative
tags:
  - 3d-models
  - agent-skills
  - ai-agents
  - ai-art
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: scenario-labs/skills
  subpath: skills/scenario-mai-image
  official_vendor: false
  license: MIT
signals:
  stars: 1139
  last_commit: 2026-10-25T22:41:37Z
  stars_delta_7d: 83
  stars_growth_pct: 7.9
  trending_score: 89.52
  velocity_source: snapshot_delta
  sparkline_4w:
    - 995
    - 1056
    - 1139
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: scenario-labs/skills
  path: skills/scenario-mai-image/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:47.963Z
  truncated: false
type: agent_skill
skill:
  skill_name: scenario-mai-image
  description: "Use when generating or editing images with Microsoft MAI Image
    models on Scenario via MCP: photoreal or stylized text-to-image with legible
    in-image typography, posters, packaging, magazine covers, ads, key art, or
    instruction-based editing such as text swaps, recoloring, object removal or
    replacement, background swaps, lighting changes, and full restyles.
    Keywords: MAI Image 2.5, 2.5 Pro, 2.5 Edit, 2.5 Pro Edit, Microsoft,
    txt2img, img2img, typography, text rendering, image edit."
  folder_path: skills/scenario-mai-image
  extra_files: []
  pack_total_skills: 166
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: scenario-labs-skills
---

# Scenario MAI Image
## Overview

MAI Image 2.5, Microsoft's image family on Scenario, splits into generation members (2.5, 2.5 Pro)
and instruction editors (2.5 Edit, 2.5 Pro Edit). The family trait is typography: in-image
headlines, labels, and taglines come back legible and placed where the prompt put them: the pick for
posters, packaging, covers, and key art that carry real copy. Discover members with `search` and
treat `model_schema_get` as the contract: the four agree on almost every field and disagree on the
one that carries the source image.

Connection and the core loop: see the `scenario` skill in this repo; model-agnostic image work
(sizing families, masks, upscales): the `scenario-image` skill. If a sibling skill named here is
missing from your available skills, ask the user to install it
(`npx skills add scenario-labs/skills --skill <name>`); unattended, proceed from tool schemas and
flag the gap.

## Quick reference

At authoring time (names from the live schema):

| Member       | Makes   | Source input                    | Ratios         |
| ------------ | ------- | ------------------------------- | -------------- |
| 2.5          | txt2img | none                            | 11, incl. 21:9 |
| 2.5 Pro      | txt2img | none                            | 8              |
| 2.5 Edit     | img2img | `referenceImages`, array of one | 8              |
| 2.5 Pro Edit | img2img | `image`, single file            | 8              |

All four share `prompt` (4096 characters on 2.5 and Edit, 5000 on the Pro pair), `aspectRatio` (an
enum defaulting to `auto`), and `numOutputs` (1 to 4, each added image adds cost). No width, height,
seed, negative prompt, or mask field exists: `aspectRatio` is the only sizing control, and edits
target elements by naming them in prose. On the generators `auto` picks a ratio from the prompt; on
the editors it matches the source, so leave it there unless re-framing is the point.

## Typography is the lever

Write prose sentences, not tag lists: the family reasons over subject, composition, materials,
lighting, and mood in that rough order. Wrap exact in-image copy in quotes so it renders verbatim,
and give each text block a role, a style, and a place ("the headline 'GAME DAY' in bold condensed
type across the top third"). Unquoted or vague copy comes back paraphrased or mangled, and many
small text blocks compete, so group them. At authoring time text rendering was tuned for English and
outputs landed near 1K, so plan a downstream upscale for print or hero use. Steering is
positive-only: explore with `numOutputs` 2 to 4 and refine the sentence rather than hunting for a
seed.

## Editing: preserve first, one change

Both editors take one source image and a plain instruction, under different fields: Edit wants
`referenceImages` with exactly one asset id in an array, Pro Edit wants `image` as a single file.
Porting a parameter block between them breaks the run, so re-read the schema when switching.
Structure the prompt as what must stay unchanged, then one change, naming the exact element and its
exact new state, with replacement copy in quotes ("change the sign to 'OPEN 24/7', same font and
color"). Chain passes for several changes; edits hold identity well across iterations. The two
shared one public image-edit arena entry (top 3 at authoring time) while a Pro Edit asset cost about
four times an Edit asset, so `dry_run` both and start with Edit.

## Worked example: a campaign poster, then a copy swap

1. `search` with `target="models"`, `query="mai image"`, `public=true`. Note the generation and edit
   hits, e.g. `model_microsoft-mai-image-2-5-pro` and `model_microsoft-mai-image-2-5-edit` (live
   hits at authoring time: re-discover each session).
2. `model_schema_get` on the generation pick: ratio list, prompt cap, defaults.
3. `model_run` with `dry_run=true` and
   `parameters={"prompt": "A photorealistic poster of a climber on a granite wall at dawn, warm rim light, the headline 'ASCEND' in tall condensed sans-serif across the top, a small tagline 'Hold your line' lower left, editorial sports aesthetic.", "aspectRatio": "2:3", "numOutputs": 4}`.
   `numOutputs` moves cost, so re-estimate after changing it.
4. Repeat with `wait=false`, then `jobs_wait` with the returned job id, re-called with
   `pending_job_ids` on timeout, never a second `model_run`.
5. `asset_display` the four outputs and keep one asset id.
6. `model_schema_get` on the edit pick, then `model_run` with
   `parameters={"referenceImages": ["asset_x"], "prompt": "Keep the climber, lighting, and layout unchanged. Change only the headline to 'ASCEND HIGHER', same font, color, and placement."}`;
   `jobs_wait`, then `asset_display`.

## Common mistakes

- Carrying one editor's source field to the other: `referenceImages` (array of exactly one) and
  `image` (single file) are member-specific shapes.
- Leaving in-image copy unquoted: only quoted text renders verbatim.
- Stacking several edits in one instruction: one change per pass, then chain.
- Sending pixel sizes or a ratio the member lacks: `aspectRatio` is an enum and the lists differ
  (21:9, 5:4, and 4:5 lived on one member at authoring time).
- Re-running for a pixel-identical result: no seed exists; keep the winning asset and edit it
  forward.
- Shipping the 1K output to print: upscale downstream (see the `scenario-image` skill).
