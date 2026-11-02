---
slug: agentscope-ai-agentscope-java-agentscope-core-src-test-resources-e2e-skills-image-resize
name: image-resize
tagline: Use this skill when the task involves resizing, scaling, or compressing
  image files. Suitable for tasks like "resize these photos to 800px wide", "com
summary: "- scripts/resize.py — Resize one or more images to a target
  width/height; preserves aspect ratio by default"
categories:
  - agent-frameworks
tags:
  - adk
  - agent-framework
  - agentic
  - agentic-ai
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-core/src/test/resources/e2e-skills/image-resize
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6214
  last_commit: 2026-11-02T08:27:45Z
  stars_delta_7d: 93
  stars_growth_pct: 1.5
  trending_score: 94.41
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6214
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-core/src/test/resources/e2e-skills/image-resize/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:24.989Z
  truncated: false
type: agent_skill
skill:
  skill_name: image-resize
  description: Use this skill when the task involves resizing, scaling, or
    compressing image files. Suitable for tasks like "resize these photos to
    800px wide", "compress images to reduce file size", or "batch scale all
    JPEGs in a folder". Only relevant for image processing tasks — do NOT use
    for data files, text, or non-image tasks.
  folder_path: agentscope-core/src/test/resources/e2e-skills/image-resize
  extra_files:
    - scripts/resize.py
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Image Resize Skill
Batch resizes and compresses image files (JPEG, PNG, WebP).

## Available Scripts

- `scripts/resize.py` — Resize one or more images to a target width/height; preserves aspect ratio by default

## Usage

```
python3 scripts/resize.py --input ./photos/ --width 800 --output ./resized/
```
