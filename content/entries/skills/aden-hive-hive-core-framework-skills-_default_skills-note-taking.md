---
slug: aden-hive-hive-core-framework-skills-_default_skills-note-taking
name: hive.note-taking
tagline: Maintain a free-form scratchpad of decisions, extracted values, and
  open questions so context pruning doesn't lose anything you still need.
summary: Maintain free-form working notes in shared buffer key workingnotes for
  data that you need to remember but that isn't captured by the colony task
  queue.
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
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: aden-hive/hive
  subpath: core/framework/skills/_default_skills/note-taking
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11142
  last_commit: 2026-11-02T10:07:20Z
  stars_delta_7d: 20
  stars_growth_pct: 0.2
  trending_score: 20.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11099
    - 11108
    - 11122
    - 11142
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: aden-hive/hive
  path: core/framework/skills/_default_skills/note-taking/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:12.234Z
  truncated: false
type: agent_skill
skill:
  skill_name: hive.note-taking
  description: Maintain a free-form scratchpad of decisions, extracted values, and
    open questions so context pruning doesn't lose anything you still need.
  folder_path: core/framework/skills/_default_skills/note-taking
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: aden-hive-hive
---

## Operational Protocol: Structured Note-Taking

Maintain free-form working notes in shared buffer key `_working_notes` for data that *you* need to remember but that isn't captured by the colony task queue.

**Do not duplicate the queue in here.** Per-task goal, ordered steps, and SOP gates live in `progress.db` — use `hive.colony-progress-tracker` for those. These notes are for things the DB schema doesn't cover.

Update at these checkpoints:

- After receiving new information that changes how you plan to approach the current step
- Before any tool call that will produce substantial output you'll need to reference later
- When you make a non-obvious decision whose *why* would be lost if the tool call history gets pruned

Structure:

### Key Decisions — decisions made and WHY
### Working Data — intermediate results, extracted values (URLs, IDs, key snippets — not full pages)
### Open Questions — uncertainties you plan to verify
### Blockers — anything preventing progress that isn't already captured in `tasks.last_error`

Update incrementally — do not rewrite from scratch each time.
