---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-forget
name: forget
tagline: Help the user remove a stored fact using Codewhale's Context Lens when
  they ask to forget or delete a memory.
summary: 1. Identify the fact the user wants removed, quoting stored text only
  when it is actually available. Do not claim a fact exists merely because it
  was mentioned in the conversation. 2. Direct the user to select that fa...
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/forget
  official_vendor: false
  license: MIT
signals:
  stars: 41158
  last_commit: 2026-11-05T13:03:13Z
  stars_delta_7d: 40
  stars_growth_pct: 0.1
  trending_score: 40.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41158
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/forget/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:37.248Z
  truncated: false
type: agent_skill
skill:
  skill_name: forget
  description: Help the user remove a stored fact using Codewhale's Context Lens
    when they ask to forget or delete a memory.
  folder_path: crates/skills/assets/skills/forget
  extra_files:
    - SKILL.generation-13.md
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

# Forget
Forgetting belongs to the user's Context Lens controls. The `remember` tool
supports append and revise candidates only; it cannot submit a deletion.
Do not invent a removal proposal or claim one is pending.

1. Identify the fact the user wants removed, quoting stored text only when it
   is actually available. Do not claim a fact exists merely because it was
   mentioned in the conversation.
2. Direct the user to select that fact in Context Lens and use its forget
   action. If the host has no Context Lens, say that this action is unavailable
   there; do not substitute direct edits to memory files or a fake tool call.
3. State that nothing has been deleted until the control reports completion.
   Verify removal when the host exposes that evidence; otherwise attribute the
   confirmation to the user.

Do not overwrite memory with an empty or contradictory note to simulate deletion.
Removing stored memory does not erase the existing conversation or its history.
