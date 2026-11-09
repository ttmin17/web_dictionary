---
slug: mem0ai-mem0-integrations-antigravity-plugin-skills-forget
name: forget
tagline: Delete the Mem0 memories stored for this repository and this user. Use
  when the user asks to forget, clear, wipe, or delete memories.
summary: If the user also asked to delete the repository's shared project
  memory, add --include-project-memory and say that this removes it for every
  teammate.
categories:
  - databases-memory
tags:
  - agentic-memory
  - agentic-memory-system
  - agents
  - ai-agents
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: mem0ai/mem0
  subpath: integrations/antigravity-plugin/skills/forget
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 68674
  last_commit: 2026-11-06T16:53:07Z
  stars_delta_7d: 213
  stars_growth_pct: 0.3
  trending_score: 213.66
  rank_current: 44
  rank_delta: -6
  velocity_source: snapshot_delta
  sparkline_4w:
    - 67421
    - 67824
    - 68461
    - 68674
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mem0ai/mem0
  path: integrations/antigravity-plugin/skills/forget/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:15.191Z
  truncated: false
type: agent_skill
skill:
  skill_name: forget
  description: Delete the Mem0 memories stored for this repository and this user.
    Use when the user asks to forget, clear, wipe, or delete memories.
  folder_path: integrations/antigravity-plugin/skills/forget
  extra_files: []
  pack_total_skills: 6
  is_pack_primary: true
  clients:
    - antigravity
    - claude-code
    - codex
    - cursor
  pack_slug: mem0ai-mem0
---

# Forget this repository's memories
This permanently deletes remote memories. Before running anything, tell the
user exactly what will be deleted: their own memories for this repository
only. The repository's project memory is shared by everyone who works in it,
so it stays unless the user explicitly asks to delete that too.

After the user confirms, run:

```bash
python3 "${ANTIGRAVITY_PLUGIN_ROOT}/core/memory_cli.py" --harness "antigravity"  forget --remote --yes
```

If the user also asked to delete the repository's shared project memory, add
`--include-project-memory` and say that this removes it for every teammate.

Report what the command output says was deleted. If the user only wants local
data cleared (evidence log, pending queue), run the same command without
`--remote`. Never pass `--yes` before the user has confirmed in this
conversation.
