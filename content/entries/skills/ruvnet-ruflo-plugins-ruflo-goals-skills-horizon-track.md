---
slug: ruvnet-ruflo-plugins-ruflo-goals-skills-horizon-track
name: horizon-track
tagline: Track long-horizon objectives across multiple sessions with milestone
  checkpoints, progress persistence, and drift detection
summary: When an objective is too large for a single session — multi-week
  features, research programs, migration projects, or any work that requires
  persistent progress tracking across conversations.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-goals/skills/horizon-track
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-goals/skills/horizon-track/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: horizon-track
  description: Track long-horizon objectives across multiple sessions with
    milestone checkpoints, progress persistence, and drift detection
  folder_path: plugins/ruflo-goals/skills/horizon-track
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Horizon Track
Track long-running objectives that span multiple sessions, days, or weeks.

## When to use

When an objective is too large for a single session — multi-week features, research programs, migration projects, or any work that requires persistent progress tracking across conversations.

## Steps

1. **Initialize horizon** — define the objective, target date, and 3-7 milestones
2. **Store horizon** — call `mcp__plugin_ruflo-core_ruflo__memory_store` with namespace `horizons` and key `horizon-[name]`:
   ```json
   {
     "objective": "...",
     "created": "2026-04-28",
     "targetDate": "2026-05-15",
     "milestones": [
       {"id": "m1", "name": "...", "criteria": "...", "status": "pending"},
       {"id": "m2", "name": "...", "criteria": "...", "status": "pending"}
     ],
     "currentMilestone": "m1",
     "sessions": []
   }
   ```
3. **Session check-in** — at the start of each session:
   - Recall horizon: `mcp__plugin_ruflo-core_ruflo__memory_retrieve` key `horizon-[name]` namespace `horizons`
   - Review milestone status
   - Assess drift (are we still on track?)
   - Plan this session's contribution
4. **Work and record** — as work progresses:
   - Update milestone status
   - Record session summary
   - Store intermediate findings
5. **Session check-out** — at the end of each session:
   - Update horizon state in memory
   - Record what was accomplished
   - Note blockers or scope changes
   - Estimate remaining effort
6. **Milestone completion** — when a milestone is done:
   - Verify completion criteria met
   - Store learned patterns via `mcp__plugin_ruflo-core_ruflo__hooks_intelligence_pattern-store`
   - Advance to next milestone
7. **Drift detection** — flag when:
   - Progress rate suggests target date will be missed
   - Scope has grown beyond original definition
   - Dependencies have changed
   - Approach needs fundamental rethinking

## Memory namespaces

- `horizons` — active horizon definitions and state
- `horizon-sessions` — per-session summaries keyed by `[horizon]-[date]`
- `horizon-learnings` — patterns and insights discovered during the horizon
