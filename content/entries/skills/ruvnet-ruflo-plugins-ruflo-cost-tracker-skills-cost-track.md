---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-track
name: cost-track
tagline: Auto-capture per-session token usage from the Claude Code session jsonl
  and persist to the cost-tracking namespace
summary: "- After a meaningful chunk of work, to capture spend for the report. -
  At session-end to persist the final tally. - Periodically during long sessions
  (cron-friendly — see /loop 30m)."
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-track
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
  path: plugins/ruflo-cost-tracker/skills/cost-track/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-track
  description: Auto-capture per-session token usage from the Claude Code session
    jsonl and persist to the cost-tracking namespace
  folder_path: plugins/ruflo-cost-tracker/skills/cost-track
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost Track
Reads the active Claude Code session jsonl (`~/.claude/projects/<encoded-cwd>/<session>.jsonl`), tallies assistant-message `usage` per model, computes USD cost using REFERENCE.md pricing, and writes a structured record to the `cost-tracking` AgentDB namespace. This is the **producer** that gives `cost-report` and `cost-optimize` real data to consume.

## When to use

- After a meaningful chunk of work, to capture spend for the report.
- At session-end to persist the final tally.
- Periodically during long sessions (cron-friendly — see `/loop 30m`).

## Steps

1. **Run the tracker** from the project root:

   ```bash
   node plugins/ruflo-cost-tracker/scripts/track.mjs
   ```

   The script auto-discovers the session jsonl from the current working directory. To pin a specific session: `TRACK_SESSION=/path/to/session.jsonl`. To dry-run (no memory write): `TRACK_DRY_RUN=1`.

2. **Inspect the markdown summary** — total cost, per-model and per-tier breakdowns, and the persisted memory key.

3. **Verify persistence** — `mcp__plugin_ruflo-core_ruflo__memory_search({ query: "session-", namespace: "cost-tracking" })` should list the new record. `cost-report` step 1 reads from this namespace.

## Record shape (in `cost-tracking` namespace)

Key: `session-<sessionId>`. Value (JSON):

```json
{
  "sessionId": "1dba3b8c-...",
  "cwd": "/Users/cohen/Projects/ruflo",
  "startedAt": "2026-05-04T...",
  "endedAt": "2026-05-05T...",
  "messageCount": 234,
  "byModel": {
    "claude-opus-4-7": {
      "tier": "opus",
      "input_tokens": 12345,
      "output_tokens": 6789,
      "cache_creation_input_tokens": 800000,
      "cache_read_input_tokens": 2000000,
      "messages": 50,
      "cost_usd": 1.23
    }
  },
  "byTier": { "haiku": 0.0, "sonnet": 0.45, "opus": 1.23, "unknown": 0 },
  "total_cost_usd": 1.68,
  "capturedAt": "2026-05-05T..."
}
```

## Pricing source of truth

The script's `PRICING` constant mirrors REFERENCE.md "Model pricing (USD per 1M tokens)". Update both together when prices change. Cache-write tokens are billed at `cache_write` rate; cache-read tokens at `cache_read` (per Anthropic billing docs).

## Env overrides

| Env | Default | Purpose |
|---|---|---|
| `TRACK_CWD` | `process.cwd()` | Override which project's sessions to scan |
| `TRACK_SESSION` | most-recent jsonl | Pin a specific session file |
| `TRACK_OUT` | unset | Also write the JSON summary to this path |
| `TRACK_DRY_RUN=1` | unset | Skip the `memory store` call |
| `TRACK_QUIET=1` | unset | Suppress markdown output |
| `TRACK_NAMESPACE` | `cost-tracking` | Override target namespace |

## Cross-references

- `cost-report` (consumer) — reads records produced by this skill
- REFERENCE.md "Cost attribution formula" — the math the script implements
- `cost-budget-check` (consumer; landing in P2) — reads totals to evaluate alerts
