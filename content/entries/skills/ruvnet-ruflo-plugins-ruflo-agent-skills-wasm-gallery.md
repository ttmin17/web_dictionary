---
slug: ruvnet-ruflo-plugins-ruflo-agent-skills-wasm-gallery
name: wasm-gallery
tagline: Browse, publish, and install WASM agents from the community gallery
summary: When looking for pre-built WASM agents or sharing your own agents with
  the community.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-agent/skills/wasm-gallery
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-agent/skills/wasm-gallery/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.542Z
  truncated: false
type: agent_skill
skill:
  skill_name: wasm-gallery
  description: Browse, publish, and install WASM agents from the community gallery
  folder_path: plugins/ruflo-agent/skills/wasm-gallery
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# WASM Gallery
Browse and share WASM agents through the community gallery.

## When to use

When looking for pre-built WASM agents or sharing your own agents with the community.

## Steps

1. **Browse gallery** — call `mcp__plugin_ruflo-core_ruflo__wasm_gallery_list` to see available agents
2. **Search** — call `mcp__plugin_ruflo-core_ruflo__wasm_gallery_search` with keywords to find specific agents
3. **Install** — call `mcp__plugin_ruflo-core_ruflo__wasm_agent_create` with a gallery agent's configuration
4. **Publish** — call `mcp__plugin_ruflo-core_ruflo__wasm_gallery_create` to share your agent
5. **Export first** — call `mcp__plugin_ruflo-core_ruflo__wasm_agent_export` to package before publishing
