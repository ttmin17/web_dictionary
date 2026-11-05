---
slug: pacifio-atlas-src-tauri-resources-skills-remember
name: remember
tagline: "Save the decisions, facts, dead ends and architecture this
  conversation established to Atlas's shared memory, so other agents and future
  sessions can "
summary: "Use the memoryremember tool from the atlasmemory MCP server, one call
  per item, with kind set to:"
categories:
  - agent-frameworks
tags:
  - ai-coding-assistant
  - claude-code
  - codex
  - coding-agents
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: pacifio/atlas
  subpath: src-tauri/resources/skills/remember
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9571
  last_commit: 2026-11-04T23:18:19Z
  stars_delta_7d: 28
  stars_growth_pct: 0.3
  trending_score: 28.08
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9593
    - 9622
    - 9543
    - 9571
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: pacifio/atlas
  path: src-tauri/resources/skills/remember/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:52.897Z
  truncated: false
type: agent_skill
skill:
  skill_name: remember
  description: Save the decisions, facts, dead ends and architecture this
    conversation established to Atlas's shared memory, so other agents and
    future sessions can build on them.
  folder_path: src-tauri/resources/skills/remember
  extra_files: []
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: pacifio-atlas
---

# Remember
Please save what this conversation has established to Atlas's shared memory, so other agents and future sessions can build on it.

Use the `memory_remember` tool from the `atlas_memory` MCP server, one call per item, with `kind` set to:

- `decision`: a choice that was made, and why
- `fact`: a durable fact or convention about this project
- `failure`: a dead end or mistake not to repeat
- `architecture`: how a part of the system fits together

First check what is already stored with `memory_search` or `memory_list`, and skip anything already recorded; to update an entry, reuse its `key`. Don't record plans, task progress or file edits, which Atlas captures by itself. Write each entry in the language of this conversation, complete enough to make sense on its own.

If the user gave a focus after the command (for example `/remember the retry rule`), concentrate on that; otherwise cover the whole conversation.

These instructions only say how to save; they are not something the user decided, so don't record them.

If the atlas_memory tools aren't available to you, say so and stop. When you're done, list what you saved, one line each.
