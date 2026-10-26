---
slug: thedotmack-claude-mem-claude-mem-cursor-skills-mem-search
name: mem-search
tagline: Use this when the user asks to search memory, "did we already solve
  this?", "how did we do X last time?", or wants work from previous sessions.
summary: 1. search(query) — index with IDs 2. timeline(anchor=ID) — nearby
  context 3. getobservations(ids=[...]) — full details for those IDs only 4.
  gettooluses(ids=[...]) — the ORIGINAL toolinput / toolresponse for specific...
categories:
  - databases-memory
tags:
  - ai-agents
  - ai-memory
  - anthropic
  - artificial-intelligence
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: thedotmack/claude-mem
  subpath: claude-mem-cursor/skills/mem-search
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 103202
  last_commit: 2026-10-25T21:00:05Z
  stars_delta_7d: 1527
  stars_growth_pct: 1.5
  trending_score: 1549.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 97519
    - 100334
    - 101675
    - 103202
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: thedotmack/claude-mem
  path: claude-mem-cursor/skills/mem-search/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:14.400Z
  truncated: false
type: agent_skill
skill:
  skill_name: mem-search
  description: Use this when the user asks to search memory, "did we already solve
    this?", "how did we do X last time?", or wants work from previous sessions.
  folder_path: claude-mem-cursor/skills/mem-search
  extra_files: []
  pack_total_skills: 33
  is_pack_primary: false
  clients:
    - claude-code
    - cursor
    - codex
    - antigravity
  pack_slug: thedotmack-claude-mem
---

# mem-search
Layered workflow. Do not dump full observations until IDs are filtered, and do not reach for raw tool bodies until the summaries came up short.

1. `search(query)` — index with IDs
2. `timeline(anchor=ID)` — nearby context
3. `get_observations(ids=[...])` — full details for those IDs only
4. `get_tool_uses(ids=[...])` — the ORIGINAL `tool_input` / `tool_response` for specific tool calls. Last resort: these are unsummarized and can run to thousands of tokens each.

Stamp `platformSource` as `cursor` or `grok-bot` on writes for this host. When reading, do not drop the other host unless asked.

If MCP is missing, run the install skill first (`npx claude-mem install --ide <host>`).
