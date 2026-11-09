---
slug: mem0ai-mem0-integrations-antigravity-plugin-skills-status
name: status
tagline: Show whether Mem0 memory is working in this repository, covering
  configuration, capture state, pending flushes, and whether the Mem0 API key is
  valid.
summary: "Summarize, using only fields the JSON actually reports: whether
  capture is active or paused, the user ID and repository scope (repoid),
  whether an API key is configured, the event/flush/retrieval counts (flushes is
  th..."
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
  subpath: integrations/antigravity-plugin/skills/status
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
  path: integrations/antigravity-plugin/skills/status/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:15.191Z
  truncated: false
type: agent_skill
skill:
  skill_name: status
  description: Show whether Mem0 memory is working in this repository, covering
    configuration, capture state, pending flushes, and whether the Mem0 API key
    is valid. Use when the user asks whether memory is on, why a memory is
    missing, or anything looks broken.
  folder_path: integrations/antigravity-plugin/skills/status
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

# Memory status
Run both commands and report the combined result in plain language:

```bash
python3 "${ANTIGRAVITY_PLUGIN_ROOT}/core/memory_cli.py" --harness "antigravity"  status --json
python3 "${ANTIGRAVITY_PLUGIN_ROOT}/core/memory_cli.py" --harness "antigravity"  doctor
```

Summarize, using only fields the JSON actually reports: whether capture is
active or paused, the user ID and repository scope (`repo_id`), whether an
API key is configured, the event/flush/retrieval counts (`flushes` is the
number of completed flushes, not a pending count), and the doctor check
results. If doctor reports an authentication failure (401 / invalid key), say
clearly that the Mem0 API key is invalid or expired and that memories are NOT
being created. Never report an auth failure as "no memories found". Suggest
reinstalling with `--config api_key=...` in that case.
