---
slug: hetpatel-11-adobe_premiere_pro_mcp-claude-plugins-premiere-pro-mcp-skills-edit-premiere-project
name: edit-premiere-project
tagline: Inspect, edit, verify, and export an open Adobe Premiere Pro project
  through the local Premiere MCP Bridge.
summary: Inspect project and sequence state before editing. Ask before
  destructive actions or overwriting exports. Re-read the relevant sequence,
  clip, or project state after every mutation and never report a project change
  as...
categories:
  - media-creative
tags:
  - adobe
  - adobe-mcp
  - adobe-premiere-pro
  - adobe-premiere-pro-mcp
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: hetpatel-11/Adobe_Premiere_Pro_MCP
  subpath: claude-plugins/premiere-pro-mcp/skills/edit-premiere-project
  official_vendor: false
  license: MIT
signals:
  stars: 758
  last_commit: 2026-10-24T21:21:21Z
  stars_delta_7d: 37
  stars_growth_pct: 5.1
  trending_score: 38.9
  rank_current: 105
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 721
    - 758
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: hetpatel-11/Adobe_Premiere_Pro_MCP
  path: claude-plugins/premiere-pro-mcp/skills/edit-premiere-project/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:48.827Z
  truncated: false
type: agent_skill
skill:
  skill_name: edit-premiere-project
  description: Inspect, edit, verify, and export an open Adobe Premiere Pro
    project through the local Premiere MCP Bridge.
  folder_path: claude-plugins/premiere-pro-mcp/skills/edit-premiere-project
  extra_files: []
  pack_total_skills: 2
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: hetpatel-11-adobe_premiere_pro_mcp
---

# Edit Premiere Project
Use the `premiere-pro` MCP server for Premiere operations. Start every session with `verify_premiere_connection` before any mutation. Discover editing tools with `search_tools`, inspect one with `get_tool_schema` if needed, then run it with `invoke_tool`.

Inspect project and sequence state before editing. Ask before destructive actions or overwriting exports. Re-read the relevant sequence, clip, or project state after every mutation and never report a project change as complete without that readback.

If the connection check fails, install the companion package with `npm install -g adobe-premiere-pro-mcp`, run `premiere-pro-mcp --install-cep`, restart Premiere, and start `Window > Extensions > MCP Bridge (CEP)`.
