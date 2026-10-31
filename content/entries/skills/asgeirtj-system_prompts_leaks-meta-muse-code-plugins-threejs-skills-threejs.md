---
slug: asgeirtj-system_prompts_leaks-meta-muse-code-plugins-threejs-skills-threejs
name: threejs
tagline: Agent skill from asgeirtj/system_prompts_leaks
summary: "--- name: threejs description: Three.js 3D reference hub. Use when
  working with Three.js: pick the topic below and read its file for patterns and
  API guidance. source: https://github.com/CloudAI-X/threejs-skills licen..."
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
  subpath: Meta/muse-code/plugins/threejs/skills/threejs
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
  path: Meta/muse-code/plugins/threejs/skills/threejs/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.846Z
  truncated: false
type: agent_skill
skill:
  skill_name: threejs
  description: Agent skill from asgeirtj/system_prompts_leaks
  folder_path: Meta/muse-code/plugins/threejs/skills/threejs
  extra_files:
    - references/threejs-animation.md
    - references/threejs-fundamentals.md
    - references/threejs-geometry.md
    - references/threejs-interaction.md
    - references/threejs-lighting.md
    - references/threejs-loaders.md
    - references/threejs-materials.md
    - references/threejs-postprocessing.md
    - references/threejs-shaders.md
    - references/threejs-textures.md
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

---name: threejs
description: Three.js 3D reference hub. Use when working with Three.js: pick the topic below and read its file for patterns and API guidance.
source: https://github.com/CloudAI-X/threejs-skills
license: MIT
---
# Three.js

This skill is a hub: one catalog row pointing at ten topic references.
When the task touches a topic, read that topic's file in one hop: join
its `references/threejs-<topic>.md` path against the `skill-dir` value in
this body's wrapper header and pass the absolute path to `read_file`.

- `references/threejs-fundamentals.md` — scene setup, cameras, renderer, Object3D hierarchy, coordinate systems.
- `references/threejs-geometry.md` — built-in shapes, BufferGeometry, custom geometry, instancing.
- `references/threejs-materials.md` — PBR, basic, phong, shader materials, material properties.
- `references/threejs-lighting.md` — light types, shadows, environment lighting.
- `references/threejs-textures.md` — texture types, UV mapping, environment maps, texture settings.
- `references/threejs-animation.md` — keyframe and skeletal animation, morph targets, animation mixing.
- `references/threejs-loaders.md` — GLTF, textures, images, models, async loading patterns.
- `references/threejs-shaders.md` — GLSL, ShaderMaterial, uniforms, custom effects.
- `references/threejs-postprocessing.md` — EffectComposer, bloom, depth of field, screen effects.
- `references/threejs-interaction.md` — raycasting, controls, mouse/touch input, object selection.
