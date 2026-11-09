---
slug: aden-hive-hive-core-framework-skills-_default_skills-error-recovery
name: hive.error-recovery
tagline: Follow a structured recovery decision tree when tool calls fail instead
  of blindly retrying or giving up.
summary: 1. Diagnose — classify the failure as transient (network blip, rate
  limit, timeout) or structural (wrong selector, missing auth, invalid schema,
  permission denied).
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
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: aden-hive/hive
  subpath: core/framework/skills/_default_skills/error-recovery
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11148
  last_commit: 2026-11-08T01:41:04Z
  stars_delta_7d: 6
  stars_growth_pct: 0.1
  trending_score: 6
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11108
    - 11122
    - 11142
    - 11148
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: aden-hive/hive
  path: core/framework/skills/_default_skills/error-recovery/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:01.338Z
  truncated: false
type: agent_skill
skill:
  skill_name: hive.error-recovery
  description: Follow a structured recovery decision tree when tool calls fail
    instead of blindly retrying or giving up.
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
