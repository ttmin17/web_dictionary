---
slug: aden-hive-hive-core-framework-skills-_default_skills-context-preservation
name: context-preservation
tagline: Agent skill from aden-hive/hive
summary: Agent skill from aden-hive/hive
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-skills
  - anthropic
  - automation
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: aden-hive/hive
  subpath: core/framework/skills/_default_skills/context-preservation
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11122
  last_commit: 2026-10-26T07:23:23Z
  stars_delta_7d: 14
  stars_growth_pct: 0.1
  trending_score: 14.02
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11088
    - 11099
    - 11108
    - 11122
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: aden-hive/hive
  path: core/framework/skills/_default_skills/context-preservation/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:50.192Z
  truncated: false
type: agent_skill
skill:
  skill_name: context-preservation
  description: Agent skill from aden-hive/hive
  folder_path: core/framework/skills/_default_skills/context-preservation
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: aden-hive-hive
---

## Operational Protocol: Context Preservation

You operate under a finite context window. Older tool results WILL be pruned. Extract what you need while it's still in context.

**Save-as-you-go.** After any tool call producing information you'll need later, immediately extract the key data into `_working_notes` or `_preserved_data`. Do not rely on referring back to old tool results — once they're pruned they're gone.

**What to extract:**
- URLs and key snippets (not full pages)
- Relevant API fields (not raw JSON blobs)
- Specific lines, values, or IDs (not entire files)
- Analysis conclusions (not raw data)

**Handoffs between tasks** happen through `progress.db`, not through shared-buffer handoff blobs. When you finish a task, any state the next worker needs goes into the task row itself (`steps.evidence`, `tasks.last_error`, `sop_checklist.note`) — see `hive.colony-progress-tracker`. Use `_working_notes` for things the DB schema doesn't cover.

You will receive an alert when context reaches {{warn_at_usage_ratio_pct}}% — preserve immediately.
