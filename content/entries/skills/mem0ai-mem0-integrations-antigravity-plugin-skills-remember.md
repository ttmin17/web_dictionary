---
slug: mem0ai-mem0-integrations-antigravity-plugin-skills-remember
name: remember
tagline: Acknowledge a "remember this" request and make sure it is captured
  well. Use when the user explicitly asks to remember, note, or save something
  for fu
summary: 1. Restate the fact clearly and completely in your reply, in one or two
  sentences, including any names, values, or paths it depends on. Your visible
  reply is what memory extraction reads, so a precise restatement is w...
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
  subpath: integrations/antigravity-plugin/skills/remember
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 68674
  last_commit: 2026-11-06T16:53:07Z
  stars_delta_7d: 213
  stars_growth_pct: 0.3
  trending_score: 213.66
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
  path: integrations/antigravity-plugin/skills/remember/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:15.191Z
  truncated: false
type: agent_skill
skill:
  skill_name: remember
  description: Acknowledge a "remember this" request and make sure it is captured
    well. Use when the user explicitly asks to remember, note, or save something
    for future sessions.
  folder_path: integrations/antigravity-plugin/skills/remember
  extra_files: []
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - antigravity
    - claude-code
    - codex
    - cursor
  pack_slug: mem0ai-mem0
---

# Remember something for future sessions
Mem0 creates memories from the session automatically — there is no separate
write command. When the user asks to remember something:

1. Restate the fact clearly and completely in your reply, in one or two
   sentences, including any names, values, or paths it depends on. Your visible
   reply is what memory extraction reads, so a precise restatement is what gets
   remembered.
2. Tell the user it will be saved with this session's memories when the session
   ends or compacts, and that it will surface in future sessions in this
   repository (they can check later with /mem0:search).

Do not invent a storage confirmation or a memory ID — creation happens in the
background after the session.
