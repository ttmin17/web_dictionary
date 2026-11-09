---
slug: alirezarezvani-claude-skills-agent-launcher-skills-wrap-up
name: wrap-up
tagline: Use when closing out a launched managed agent ('wrap up', 'what do I
  own now'). Inventories primitives with primitives_inventory.py, regenerates
  the o
summary: 1. Inventory what they own. Tables agent / environment / session /
  memory / outcome / deployment and the phases completed. 2. Regenerate the
  overview page. Self-contained agent-overview.html (inline CSS, theme-aware,...
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: agent-launcher/skills/wrap-up
  official_vendor: false
  license: MIT
signals:
  stars: 29502
  last_commit: 2026-11-05T06:58:08Z
  stars_delta_7d: 165
  stars_growth_pct: 0.6
  trending_score: 165.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 28730
    - 29337
    - 29502
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: agent-launcher/skills/wrap-up/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:33.880Z
  truncated: false
type: agent_skill
skill:
  skill_name: wrap-up
  description: Use when closing out a launched managed agent ('wrap up', 'what do
    I own now'). Inventories primitives with primitives_inventory.py,
    regenerates the overview with overview_page.py and suggests next upgrades
    with upgrade_suggester.py.
  folder_path: agent-launcher/skills/wrap-up
  extra_files:
    - README.md
    - scripts/overview_page.py
    - scripts/primitives_inventory.py
    - scripts/upgrade_suggester.py
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Wrap-up — close it out
The explicit close-out. Confirm what's live, regenerate the shareable overview,
and name the next 1–2 upgrades so the founder leaves with a clear roadmap. The
`./my-agent/` folder keeps working after the session ends.

## Workflow

1. **Inventory what they own.**
   ```bash
   python3 scripts/primitives_inventory.py \
     --sheet ./my-agent/build-sheet.json --goal ./my-agent/goal.json
   ```
   Tables agent / environment / session / memory / outcome / deployment and the
   phases completed.
2. **Regenerate the overview page.**
   ```bash
   python3 scripts/overview_page.py \
     --sheet ./my-agent/build-sheet.json --out-dir ./my-agent \
     --status live --loop-shape cron-loop --last-verdict satisfied
   ```
   Self-contained `agent-overview.html` (inline CSS, theme-aware, no external
   assets) — shareable as-is.
3. **Suggest the next moves.**
   ```bash
   python3 scripts/upgrade_suggester.py --sheet ./my-agent/build-sheet.json --top 2
   ```
   Ranks recorded deferrals (v1 before v2, real-integration first) plus standing
   hardening (tighten networking, pin the agent version, nest an outcome).
4. **Finalize.** Ensure `NEXT-DIRECTIONS.md` is current (Phase-4 tool), then
   `goal_state.py advance` → `phase=done`.

## Hard rules

- **Recap what's actually live** — read it from the sheet + goal state, never
  assert primitives that weren't created.
- **The overview is single-file** — no external assets, so it shares cleanly.
- **Every next move names the exact mechanism.**

## Forcing-question library (recommend + cite)

1. "Confirm what's live vs still a plan?" *Recommend:* inventory from the sheet.
   *Cite:* this SKILL. 
2. "Which single upgrade has the highest payoff?" *Recommend:* the top-ranked v1
   deferral. *Cite:* upgrade_suggester ranking.
3. "Is the overview page current?" *Recommend:* regenerate after any change.
   *Cite:* this SKILL.

## Tools

- `scripts/primitives_inventory.py` — recap every owned primitive.
- `scripts/overview_page.py` — regenerate single-file agent-overview.html.
- `scripts/upgrade_suggester.py` — next 1–2 upgrades with mechanisms.
