---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-ledger
name: cost-ledger
tagline: One cost view across Claude Code, Codex and Grok on this machine —
  spend, tokens, cache hit ratio per provider and model, with unpriced models
  flagged
summary: --from and --to (ISO times) cut the window and --project keeps one
  project's rows; the console's mission page uses them for a mission's spend. An
  explicit --from/--to replaces the default 7-day look-back.
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-ledger
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
  path: plugins/ruflo-cost-tracker/skills/cost-ledger/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.544Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-ledger
  description: One cost view across Claude Code, Codex and Grok on this machine —
    spend, tokens, cache hit ratio per provider and model, with unpriced models
    flagged. Use when asked "what did I spend", "how much did Codex cost", or to
    compare providers. Local logs only, nothing is sent.
  folder_path: plugins/ruflo-cost-tracker/skills/cost-ledger
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost Ledger
Reads the logs the agents already wrote (`~/.claude/projects`, `$CODEX_HOME` or `~/.codex`) and prices them from `data/prices.json` (dated, editable).

## Run

```bash
node ${CLAUDE_PLUGIN_ROOT}/scripts/ledger.mjs --since 7d
node ${CLAUDE_PLUGIN_ROOT}/scripts/ledger.mjs --provider codex --format json
```

## One mission, or one project

`--from` and `--to` (ISO times) cut the window and `--project <absolute path>` keeps one project's rows; the console's mission page uses them for a mission's spend. An explicit `--from`/`--to` replaces the default 7-day look-back.

## Read the result correctly

- **USD and Codex credits are never added.** GPT-6 Codex models are priced in credits; their cached-input rate is unpublished, so the figure is an upper bound.
- **Estimates at list price, not bills.** Subscriptions bill by window, not by token. `/usage` is authoritative for the live Claude session; the Console or provider dashboard is authoritative for invoices.
- **Unpriced models are listed, never counted as $0.** Say so, and offer to add them to `data/prices.json`.
- **Counting rules** (why numbers differ from naive sums): Claude messages are de-duplicated by `message.id + requestId`; Codex uses deltas of the running `total_token_usage` (never also `last_token_usage`), cached input is a subset of input, and forked rollouts are de-duplicated.
- Claude transcript output tokens can under-count streamed output.

If the log directory is missing, say so; do not invent numbers.
