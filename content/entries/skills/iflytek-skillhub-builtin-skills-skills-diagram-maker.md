---
slug: iflytek-skillhub-builtin-skills-skills-diagram-maker
name: diagram-maker
tagline: Create standalone SVG/HTML or editable Excalidraw diagrams for
  concepts, architecture, processes, flows, and whiteboards.
summary: "- clean-svg: educational concepts, physical systems, processes,
  lifecycle, simple data flow. - architecture-svg: software/cloud/infra
  topology, services, databases, queues, trust zones. - excalidraw: editable
  hand-dra..."
categories:
  - agent-frameworks
tags:
  - agent-framework
  - ai-agent
  - ai-governance
  - ai-infrastructure
status: active
quality_percentile: 74
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: iflytek/skillhub
  subpath: builtin-skills/skills/diagram-maker
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5376
  last_commit: 2026-11-09T08:25:59Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5249
    - 5292
    - 5391
    - 5376
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: iflytek/skillhub
  path: builtin-skills/skills/diagram-maker/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:41.932Z
  truncated: false
type: agent_skill
skill:
  skill_name: diagram-maker
  description: Create standalone SVG/HTML or editable Excalidraw diagrams for
    concepts, architecture, processes, flows, and whiteboards.
  folder_path: builtin-skills/skills/diagram-maker
  extra_files:
    - LICENSE.txt
    - NOTICE.md
    - references/excalidraw-patterns.md
    - references/svg-template.md
  pack_total_skills: 24
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: iflytek-skillhub
---

# Diagram Maker
Create diagrams as artifacts, not prose. Choose one output mode:

- `clean-svg`: educational concepts, physical systems, processes, lifecycle, simple data flow.
- `architecture-svg`: software/cloud/infra topology, services, databases, queues, trust zones.
- `excalidraw`: editable hand-drawn whiteboard, flowchart, sequence, architecture sketch.

Routing

- User wants editable/collaborative: choose Excalidraw.
- User wants polished standalone browser output: choose SVG/HTML.
- Software architecture with infra components: choose architecture SVG.
- Science, product, process, concept map, physical object: choose clean SVG.
- Unsure: ask one short question only if output format matters; otherwise choose clean SVG.

Workflow

1. Extract nodes, groups, labels, and directed relationships.
2. Pick layout first: left-to-right, top-down, hub-spoke, swimlanes, layered stack, sequence.
3. Keep labels short. Prefer 5-9 main elements over dense diagrams.
4. Generate the file at the requested path. If none is provided, use `diagram.html` or
   `diagram.excalidraw` in the current working directory.
5. Do not overwrite an existing file by default. Choose an unused suffixed name such as
   `diagram-2.html`, or ask before replacing the existing file.
6. Verify syntax by opening or parsing the output when feasible.

SVG/HTML rules

- Single standalone `.html` file with inline CSS and inline SVG.
- No external fonts, JS, images, gradients, glows, decorative blobs, or remote assets.
- Use semantic colors, not rainbow sequences: neutral, input, process, storage, external, risk.
- Draw connectors before nodes so arrows sit behind boxes.
- Every connector path has `fill="none"` and a marker arrow when directed.
- Leave 24px text padding inside boxes; do not let text touch borders.
- Legend only when symbols/colors are not obvious.

SVG template

Use `references/svg-template.md` as the wrapper and replace `<!-- SVG -->`.

Excalidraw rules

- Save `.excalidraw` JSON with `type`, `version`, `source`, `elements`, and `appState`.
- Use bound text for shape labels. Do not use a nonstandard `label` property.
- Keep bound text immediately after its container in the elements array.
- Minimum labeled shape: 120x60. Minimum body text: 16px.
- Use roughness `1`, `fontFamily: 1`, and simple fills.

For exact Excalidraw element snippets, read `references/excalidraw-patterns.md`.
