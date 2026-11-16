---
slug: nexu-io-openmotion-packages-motion-package-examples-product-story
name: product-story
tagline: Adapt the Product Story recipe to a supplied product or lesson brief
  using its visual identity, three-scene rhythm and input limits. Use when the
  user
summary: The optional helper uses Node.js built-ins and was checked with Node.js
  26.11.1. It reads the preset and local sequence, validates input fields, and
  prints JSON to stdout. It performs no writes, downloads or rendering...
categories:
  - security-auth
tags:
  - agent-skills
  - ai-agents
  - ai-video
  - byok
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: nexu-io/openmotion
  subpath: packages/motion-package/examples/product-story
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 10016
  last_commit: 2026-11-16T09:11:52Z
  stars_delta_7d: 371
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 10016
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/openmotion
  path: packages/motion-package/examples/product-story/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:13.639Z
  truncated: false
type: agent_skill
skill:
  skill_name: product-story
  description: Adapt the Product Story recipe to a supplied product or lesson
    brief using its visual identity, three-scene rhythm and input limits. Use
    when the user selects this package or asks to adapt its recipe.
  folder_path: packages/motion-package/examples/product-story
  extra_files:
    - DESIGN.md
    - LICENSE
    - MOTION.md
    - README.md
    - elements/emphasis.svg
    - inputs.schema.json
    - materials/requirements.md
    - materials/sequence.json
    - motion-package.json
    - presets/lesson.json
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-openmotion
---

# Product Story
Read [MOTION.md](https://github.com/nexu-io/openmotion/blob/main/packages/motion-package/examples/product-story/MOTION.md) and [DESIGN.md](https://github.com/nexu-io/openmotion/blob/main/packages/motion-package/examples/product-story/DESIGN.md) for the chosen creative system. Read [material requirements](https://github.com/nexu-io/openmotion/blob/main/packages/motion-package/examples/product-story/materials/requirements.md) and [input constraints](https://github.com/nexu-io/openmotion/blob/main/packages/motion-package/examples/product-story/inputs.schema.json) when adapting content. Preserve user-specified changes and locked content; the supplied presets are fictional examples.

For a concrete starting plan, run from this package directory:

```sh
node scripts/plan.mjs presets/product.json
```

The optional helper uses Node.js built-ins and was checked with Node.js 26.11.1. It reads the preset and local sequence, validates input fields, and prints JSON to stdout. It performs no writes, downloads or rendering. Use `presets/lesson.json` to inspect a different subject with the same timing. Make task-specific presets in the user's working project, keeping the shared package intact unless the user requests a package edit.

If the user requests a video, implement the plan in their chosen editable engine with supplied materials. This package does not include an animated project. Apply the Motion document's design bindings, holds and review criteria, and use the host's normal preview/export workflow for the requested deliverable. Record actual verification; a plan or a successful script does not establish rendered or human visual acceptance.
