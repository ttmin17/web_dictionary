---
slug: ruvnet-ruflo-plugins-ruflo-loop-workers-skills-loop-worker
name: loop-worker
tagline: Run Ruflo background workers using Claude Code native /loop scheduling
summary: "Use /loop for in-session periodic workers. Pick the delay from what
  you are waiting for: - With the 5-minute prompt-cache TTL, min(270, cachettl
  0.9) = 270s keeps the cache warm (ruflo-autopilot ADR-0001 owns that hea..."
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
  subpath: plugins/ruflo-loop-workers/skills/loop-worker
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
  path: plugins/ruflo-loop-workers/skills/loop-worker/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: loop-worker
  description: Run Ruflo background workers using Claude Code native /loop scheduling
  folder_path: plugins/ruflo-loop-workers/skills/loop-worker
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Use `/loop` for in-session periodic workers. Pick the delay from what you are waiting for:
- With the 5-minute prompt-cache TTL, `min(270, cache_ttl * 0.9)` = 270s keeps the cache warm (ruflo-autopilot ADR-0001 owns that heartbeat).
- If the `ScheduleWakeup` tool description says this session uses the 1-hour TTL, a 270s wake buys nothing; poll at 1200-1800s unless the worker finishes faster.

Dispatch a worker via MCP: `mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch({ trigger: "WORKER_NAME" })`. It runs in the background by default (`background: true`), so check on it with `hooks_worker-status` instead of waiting inline.

Then schedule the next iteration. `ScheduleWakeup` needs the loop prompt back so the next firing re-enters the loop:
`ScheduleWakeup({ delaySeconds: 270, reason: "next WORKER_NAME iteration", prompt: "/loop <the same /loop input>", noop: false })`

Stop the loop when the worker reports nothing new twice in a row: `ScheduleWakeup({ stop: true })`.

### Available Workers (12, per ADR-0001 and `/ruflo-loop`)

| Worker | Priority | Interval | Description |
|--------|----------|----------|-------------|
| audit | critical | 270s | Security analysis |
| optimize | high | 270s | Performance optimization |
| predict | normal | 270s | Predictive preloading |
| testgaps | normal | 270s | Test coverage analysis |
| ultralearn | normal | 600s | Deep knowledge acquisition |
| deepdive | normal | 600s | Deep code analysis |
| map | normal | 600s | Codebase mapping |
| document | normal | 600s | Auto-documentation |
| refactor | normal | 600s | Refactoring suggestions |
| benchmark | normal | 600s | Performance benchmarking |
| consolidate | low | 600s | Memory consolidation |
| preload | low | 270s | Resource preloading |

The intervals are suggested cadences, not enforced by the dispatcher: 270s keeps the prompt cache warm, and the heavier analysis workers run at 600s because one iteration rarely finishes sooner.

Work you start in the background (a build, a long job) finishes with its own completion notification. Do not poll it with short `ScheduleWakeup` calls; use a long fallback delay (1200s or more) so the loop survives a hung job.

MCP tool responses include `[LOOP_SUGGESTION]` and `[CRON_SUGGESTION]` hints -- follow them.
