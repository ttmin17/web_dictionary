---
slug: mem0ai-mem0-integrations-antigravity-plugin-skills-search
name: search
tagline: Search memories from earlier Antigravity sessions in this repository.
  Use it when earlier work may already explain the code, error, decision, or
  comma
summary: "Omit topk to use Mem0's configured default. Omit category to search
  every category. Omit scope to use the configured default, normally repo: this
  repository's shared memory, which everyone who works in it contributes..."
categories:
  - databases-memory
tags:
  - agentic-memory
  - agentic-memory-system
  - agents
  - ai-agents
status: active
quality_percentile: 75
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: mem0ai/mem0
  subpath: integrations/antigravity-plugin/skills/search
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 68461
  last_commit: 2026-11-04T10:55:44Z
  stars_delta_7d: 637
  stars_growth_pct: 0.9
  trending_score: 642.98
  velocity_source: snapshot_delta
  sparkline_4w:
    - 67421
    - 67824
    - 68461
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mem0ai/mem0
  path: integrations/antigravity-plugin/skills/search/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:29.154Z
  truncated: false
type: agent_skill
skill:
  skill_name: search
  description: Search memories from earlier Antigravity sessions in this
    repository. Use it when earlier work may already explain the code, error,
    decision, or command you need, so you can avoid repeating file reads,
    searches, or experiments.
  folder_path: integrations/antigravity-plugin/skills/search
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

# Search memories
Call `search_memories` with the user's question. Treat `--top-k`, `--category`,
`--scope`, and `--run-id` as tool arguments instead of including them in the
query.

Omit `top_k` to use Mem0's configured default. Omit `category` to search every
category. Omit `scope` to use the configured default, normally `repo`: this
repository's shared memory, which everyone who works in it contributes to,
plus your own preferences.

Pass `scope` when the question needs something else: `dir` to narrow the
shared memory to the directory you are working in (a package inside a
monorepo), `mine` for your own preferences alone.

Pass `run_id` with any scope to retrieve memories saved in a specific coding-agent
session. Omit `run_id` to search across sessions. It filters the memories returned;
it does not identify the session making the search request. Use a known session ID,
never invent one. Return the tool's result directly.
