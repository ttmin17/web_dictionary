---
slug: mem0ai-mem0-integrations-antigravity-plugin-skills-resume
name: resume
tagline: Resume Mem0 memory capture after it was paused with /mem0:pause.
summary: Confirm to the user that capture is active again. New sessions record
  evidence and create memories as normal; nothing that happened while paused is
  retroactively captured.
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
  subpath: integrations/antigravity-plugin/skills/resume
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
  path: integrations/antigravity-plugin/skills/resume/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:29.154Z
  truncated: false
type: agent_skill
skill:
  skill_name: resume
  description: Resume Mem0 memory capture after it was paused with /mem0:pause.
  folder_path: integrations/antigravity-plugin/skills/resume
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

# Resume memory capture
Resume memory capture for this machine.

Run:

```bash
python3 "${ANTIGRAVITY_PLUGIN_ROOT}/core/memory_cli.py" --harness "antigravity"  resume
```

Confirm to the user that capture is active again. New sessions record evidence and
create memories as normal; nothing that happened while paused is retroactively
captured.
