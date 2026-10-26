---
slug: pacifio-atlas-src-tauri-resources-skills-remember
name: remember
tagline: Agent skill from pacifio/atlas
summary: Agent skill from pacifio/atlas
categories:
  - agent-frameworks
tags:
  - ai-coding-assistant
  - claude-code
  - codex
  - coding-agents
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: pacifio/atlas
  subpath: src-tauri/resources/skills/remember
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9543
  last_commit: 2026-10-26T07:24:31Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9593
    - 9622
    - 9543
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: pacifio/atlas
  path: src-tauri/resources/skills/remember/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:54.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: remember
  description: Agent skill from pacifio/atlas
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
