---
slug: asgeirtj-system_prompts_leaks-anthropic-claude-design-skills-3d-object
name: 3d-object
tagline: three.js model, downloadable as OBJ or GLB
summary: 'START by calling copystartercomponent with kind: "threedstage.js" — it
  is the whole viewer: studio lighting, ground shadow, orbit controls, an
  auto-framed camera, and a toolbar that downloads the object as OBJ + MTL o...'
categories:
  - media-creative
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
  subpath: Anthropic/claude-design/skills/3d-object
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
  path: Anthropic/claude-design/skills/3d-object/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.827Z
  truncated: false
type: agent_skill
skill:
  skill_name: 3d-object
  description: three.js model, downloadable as OBJ or GLB
  folder_path: Anthropic/claude-design/skills/3d-object
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: asgeirtj-system_prompts_leaks
---

# 3D object
Model a 3D object the user can inspect from every angle and download,
built with three.js and presented in the three_d_stage starter.

START by calling copy_starter_component with kind: "three_d_stage.js" —
it is the whole viewer: studio lighting, ground shadow, orbit controls,
an auto-framed camera, and a toolbar that downloads the object as
OBJ + MTL or GLB. Read the copied file's usage block and follow its page
skeleton exactly. You only write the model-building module script.

Build the page as plain HTML — a .html file with ordinary 

Build the model programmatically, as a THREE.Group composed of named
parts:
- Compose primitives (BoxGeometry, CylinderGeometry, SphereGeometry,
  TorusGeometry, LatheGeometry, ExtrudeGeometry with Shape) before
  reaching for raw BufferGeometry; real objects decompose into far more
  primitives than you'd guess.
- NAME every mesh and every material ("hull", "walnut", "brass") — the
  names become the o / usemtl entries in the exported OBJ and the node
  names in the GLB, which is what makes the download usable in Blender.
- Use MeshStandardMaterial with a small curated palette (3-5 materials,
  shared across parts); set roughness/metalness deliberately. Textures
  don't survive the OBJ export — prefer geometry and material color over
  texture detail.
- Model in real-world meters, y-up, centered on the origin, base resting
  at the lowest y. Offset deliberately coplanar faces by ~0.001 so
  nothing z-fights.
- Curved surfaces need enough segments to read as smooth at full screen
  (32+ radial segments on feature surfaces), but don't tessellate what
  no one will see.

The stage's toolbar gives the user OBJ + MTL (universal, geometry +
per-material colors) and GLB (the modern interchange format — keeps the
part hierarchy and PBR materials; imports cleanly into Blender, Maya,
Cinema 4D, Unity, Unreal). Those two are the export formats on offer —
when the user asks for something else (FBX, USDZ, STEP), say plainly
that the stage exports OBJ + MTL and GLB.

Iterate with screenshots: the stage keeps its last frame readable, so
the ordinary screenshot tools capture the live canvas — no extra steps.
After editing a module file, reload with show_html before screenshotting
(the iframe caches already-loaded modules). Look at the object from the
default framing and refine silhouette, proportion, and material
separation — the silhouette carries the object.
