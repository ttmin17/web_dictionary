---
slug: aden-hive-hive-core-framework-skills-_default_skills-error-recovery
name: error-recovery
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
  subpath: core/framework/skills/_default_skills/error-recovery
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
  path: core/framework/skills/_default_skills/error-recovery/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:50.192Z
  truncated: false
type: agent_skill
skill:
  skill_name: error-recovery
  description: Agent skill from aden-hive/hive
  folder_path: core/framework/skills/_default_skills/error-recovery
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: aden-hive-hive
---

## Operational Protocol: Error Recovery

When a tool call fails:

1. **Diagnose** — classify the failure as *transient* (network blip, rate limit, timeout) or *structural* (wrong selector, missing auth, invalid schema, permission denied).

2. **Decide:**
   - Transient → retry once.
   - Structural + fixable → fix the input and retry.
   - Structural + unfixable → record the failure and move to the next item.
   - Blocking all progress → escalate.

3. **Adapt** — if the same tool has failed {{max_retries_per_tool}}+ times in a row, stop using it and find an alternative approach.

**Never silently drop a failed item.** If the item is a task in the colony queue, write the failure to the DB instead of an in-memory buffer:

```bash
sqlite3 "$DB_PATH" "UPDATE tasks SET status='failed', last_error='<one-sentence reason>', completed_at=datetime('now'), updated_at=datetime('now') WHERE id='<task-id>' AND worker_id='<your-worker-id>';"
```

The `tasks.retry_count` column and the stale-claim reclaimer handle auto-retry for crashes; your job is the within-run decision tree above. See `hive.colony-progress-tracker` for the full queue protocol.
