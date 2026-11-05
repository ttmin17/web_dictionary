---
slug: nimbalyst-nimbalyst-plugins-nimbalyst-wiki-skills-start
name: start
tagline: "Start using Nimbalyst Wiki: show how agents build a local wiki,
  capture decisions, track typed pages, open the local browser view, and
  optionally use "
summary: Give a short tour of Nimbalyst Wiki and point at the next step. Do not
  write any pages in this skill.
categories:
  - coding-agents
tags:
  - agentic-ai
  - agentic-ide
  - ai-agents
  - ai-coding-assistant
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: nimbalyst/nimbalyst
  subpath: plugins/nimbalyst-wiki/skills/start
  official_vendor: false
  license: MIT
signals:
  stars: 2023
  last_commit: 2026-11-04T07:28:07Z
  stars_delta_7d: 48
  stars_growth_pct: 2.4
  trending_score: 49.17
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1931
    - 1975
    - 2023
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nimbalyst/nimbalyst
  path: plugins/nimbalyst-wiki/skills/start/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:44.320Z
  truncated: false
type: agent_skill
skill:
  skill_name: start
  description: "Start using Nimbalyst Wiki: show how agents build a local wiki,
    capture decisions, track typed pages, open the local browser view, and
    optionally use a team wiki. Use when the user asks what this plugin does,
    which skills it has, or how to begin."
  folder_path: plugins/nimbalyst-wiki/skills/start
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nimbalyst-nimbalyst
---

Give a short tour of Nimbalyst Wiki and point at the next step. Do not write any pages in this skill.

Say, in a few lines:

1. Nimbalyst Wiki is a local wiki your agents write for you, so you can think, organize, and set direction.
2. Best first step: `/nimbalyst-wiki:setup`. The agent builds the first wiki from this repository: Home, a writing guide, and starter pages.
3. The habit: at the end of a session, `/nimbalyst-wiki:capture` records what was decided in the page it affects.
4. Before working in an area, `/nimbalyst-wiki:recall` (or asking "what did we decide about X?") answers from the wiki's pages and decisions.
5. Growth paths: typed pages and tables to track things; reading and editing the wiki in the browser (ask "open the wiki in my browser"; the agent calls `openWikiInBrowser`, nothing to install); and optionally connecting a Nimbalyst Team wiki later (`/nimbalyst-wiki:connect`). A local wiki can be moved to Nimbalyst Teams later in one step with `/nimbalyst-wiki:team`, which also invites teammates; they need nothing installed to read it in the browser.

If the user gave a goal, tailor the next step to it. Check whether a local wiki already exists in this repository; if it does, suggest `capture` or asking a question about it instead of `setup`.

Mention the team add-on and its sign-in (the `team` skill installs `nimbalyst-wiki-team`) only if the user chooses the team wiki. The local wiki needs no account. Do not say the install runs onboarding by itself; it does not. The README has the full guide.
