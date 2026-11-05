---
slug: mem0ai-mem0-integrations-antigravity-plugin-skills-pause
name: pause
tagline: Pause Mem0 memory capture on this machine. Use when the user wants to
  stop memories being recorded, for example for private work or experiments.
summary: Confirm the new state back to the user, and remind them that
  already-created memories still exist and remain searchable. Pending unsent
  packets are held while paused, not expired, and are delivered after resuming.
  To...
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
  subpath: integrations/antigravity-plugin/skills/pause
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
  path: integrations/antigravity-plugin/skills/pause/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:29.154Z
  truncated: false
type: agent_skill
skill:
  skill_name: pause
  description: Pause Mem0 memory capture on this machine. Use when the user wants
    to stop memories being recorded, for example for private work or
    experiments.
  folder_path: integrations/antigravity-plugin/skills/pause
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

# Pause memory capture
To pause (hooks stop capturing and sending session content; a minimal
telemetry ping still fires at session start, under your Mem0 account email,
unless `MEM0_TELEMETRY=false`):

```bash
python3 "${ANTIGRAVITY_PLUGIN_ROOT}/core/memory_cli.py" --harness "antigravity"  pause
```

Confirm the new state back to the user, and remind them that already-created
memories still exist and remain searchable. Pending unsent packets are held
while paused, not expired, and are delivered after resuming. To turn capture
back on, use `/mem0:resume`.
