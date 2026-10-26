---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-advise
name: cost-advise
tagline: Optimisation findings from your own Claude Code and Codex logs — low
  cache hit ratio, 1-hour cache writes that did not pay back, sub-agents on a
  top-t
summary: "- Savings are what-if repricings of the same tokens at another rate.
  They say nothing about quality; tell the user to spot-check before switching a
  model. - A finding with saving n/a has no defensible number (no measu..."
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
  subpath: plugins/ruflo-cost-tracker/skills/cost-advise
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
  path: plugins/ruflo-cost-tracker/skills/cost-advise/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-advise
  description: Optimisation findings from your own Claude Code and Codex logs —
    low cache hit ratio, 1-hour cache writes that did not pay back, sub-agents
    on a top-tier model, Codex reasoning share, bloated sessions — each with
    evidence and a what-if saving. Use when asked how to cut spend or why it is
    high.
  folder_path: plugins/ruflo-cost-tracker/skills/cost-advise
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost Advise
```bash
node ${CLAUDE_PLUGIN_ROOT}/scripts/advise.mjs --since 7d
```

## Rules for presenting findings

- Savings are **what-if repricings of the same tokens** at another rate. They say nothing about quality; tell the user to spot-check before switching a model.
- A finding with `saving n/a` has no defensible number (no measured delta exists). Do not invent one.
- Do not change settings, models or CLAUDE.md on the user's behalf; present the action and let them choose.
- Prefer the largest controllable lever first: cache discipline, then model tier for sub-agents, then reasoning effort, then context size.
- Pair with `cost-ledger` for the totals and `cost-session` to drill into one expensive session.
