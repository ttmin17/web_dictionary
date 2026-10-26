---
slug: davepoon-buildwithclaude-plugins-drill-me-skills-status
name: drill-status
tagline: Show drill-me learning progress — topics studied, cards due for review,
  weakest concepts, and what to study next. Use when the user asks what's due, h
summary: "1. Run date +%Y-%m-%d. 2. Read /.drill-me/index.md and every file in
  /.drill-me/topics/. If the directory doesn't exist, say so and suggest
  /drill:me to start. 3. Print a compact report: - A table of topics: cards,
  du..."
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/drill-me/skills/status
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/drill-me/skills/status/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.615Z
  truncated: false
type: agent_skill
skill:
  skill_name: drill-status
  description: Show drill-me learning progress — topics studied, cards due for
    review, weakest concepts, and what to study next. Use when the user asks
    what's due, how their learning is going, or for their drill-me status.
  folder_path: plugins/drill-me/skills/status
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# drill-status
Report on the user's learning state. Read-only — no teaching, no ledger writes.

1. Run `date +%Y-%m-%d`.
2. Read `~/.drill-me/index.md` and every file in `~/.drill-me/topics/`.
   If the directory doesn't exist, say so and suggest `/drill:me <topic>` to start.
3. Print a compact report:
   - A table of topics: cards, due now, next due date, last session.
   - **Weak spots**: cards flagged `cw` (confident-wrong) or `leech`, and any card with
     stability under 2 days after 3+ reviews — name the concepts plainly.
   - **Recommendation**: the single best next action ("3 cards due in Rust lifetimes —
     a 10-minute review today beats 30 minutes on Friday").

Keep it under a screenful. No lectures, no science explainers — just the dashboard.
