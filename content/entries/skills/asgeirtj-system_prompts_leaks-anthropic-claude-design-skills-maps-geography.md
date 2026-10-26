---
slug: asgeirtj-system_prompts_leaks-anthropic-claude-design-skills-maps-geography
name: maps-geography
tagline: Accurate maps from real geo data — use for any map, or whenever
  geography would make a good graphic for a deliverable
summary: Build every map page as plain HTML — a .html file with ordinary
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Anthropic/claude-design/skills/maps-geography
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Anthropic/claude-design/skills/maps-geography/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.829Z
  truncated: false
type: agent_skill
skill:
  skill_name: maps-geography
  description: Accurate maps from real geo data — use for any map, or whenever
    geography would make a good graphic for a deliverable
  folder_path: Anthropic/claude-design/skills/maps-geography
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: asgeirtj-system_prompts_leaks
---

# Maps & geography
Geographic maps are data problems, not drawings: never freehand country outlines, coastlines, or street layouts — hand-drawn geography is reliably wrong, and users notice. Load real geometry and render it.

Build every map page as plain HTML — a .html file with ordinary 


Inline SVG from d3 also exports cleanly to PNG and PDF, which live map tiles do not — so exported deliverables always get d3 geometry, never an embedded tile map.

For street-level interactive maps — prototypes, websites, anything the user pans and zooms — use Leaflet with OpenStreetMap tiles, loaded ONLY through these exact tags (the stylesheet is required: without leaflet.css the tiles render scrambled):

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha384-sHL9NAb7lN7rfvG5lfHpm643Xkcjzp4jFvuavGOndn6pjVqS6ny56CAt3nsEVT4H" crossorigin="anonymous">


Create the map with L.map(...) and L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }). The attribution string is OpenStreetMap's license requirement — never omit it.
