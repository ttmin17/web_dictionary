---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-conversation
name: cost-conversation
tagline: Per-conversation cost view — list every session in cost-tracking with
  started-at, message count, top model, and total cost
summary: "- After multiple sessions, to see total spend per conversation. -
  Before scoping a long session, to understand typical cost-per-conversation. -
  For per-project rollups via CONVNAMESPACE=cost-tracking-."
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-conversation
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
  path: plugins/ruflo-cost-tracker/skills/cost-conversation/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.544Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-conversation
  description: Per-conversation cost view — list every session in cost-tracking
    with started-at, message count, top model, and total cost
  folder_path: plugins/ruflo-cost-tracker/skills/cost-conversation
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost per Conversation
`cost-report` and `cost-optimize` aggregate by **agent** and **model**. This skill aggregates by **conversation (session)** — a different lens that surfaces *which conversations cost the most*. Useful for retrospectives ("which sessions ran long on Opus?") and for evaluating whether a given project's session pattern is sustainable.

## When to use

- After multiple sessions, to see total spend per conversation.
- Before scoping a long session, to understand typical cost-per-conversation.
- For per-project rollups via `CONV_NAMESPACE=cost-tracking-<project>`.

## Steps

1. **Run the script** from anywhere:

   ```bash
   node plugins/ruflo-cost-tracker/scripts/conversation.mjs
   ```

   Optional env:
   - `CONV_FORMAT=json` — emit JSON instead of markdown
   - `CONV_LIMIT=20` — show only the most recent N conversations
   - `CONV_NAMESPACE=cost-tracking` — override target namespace

2. **Inspect the markdown table** — total cost across all conversations, per-tier rollup, then a per-session table (started-at, sessionId prefix, message count, top model, cost).

## Cross-references

- `cost-track` — the producer that populates `cost-tracking:session-*`
- `cost-report` — same data, per-agent / per-model lens
- `cost-trend` — drift across bench runs (different axis: corpus runs vs conversations)
- `cost-budget-check` — sums across conversations to evaluate the budget threshold
