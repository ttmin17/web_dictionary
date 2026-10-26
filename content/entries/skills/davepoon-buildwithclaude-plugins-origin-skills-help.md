---
slug: davepoon-buildwithclaude-plugins-origin-skills-help
name: help
tagline: "One-screen quick reference for the Origin plugin. Lists the daily
  verbs, the daily flow, where data lives, and how to view it without a GUI. Use
  when "
summary: When triggered, output the block below verbatim. No editing, no
  abbreviating, no embellishing. The user is asking for the menu.
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
  subpath: plugins/origin/skills/help
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
  path: plugins/origin/skills/help/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.622Z
  truncated: false
type: agent_skill
skill:
  skill_name: help
  description: >
    One-screen quick reference for the Origin plugin. Lists the daily verbs, the
    daily flow, where data lives, and how to view it without a GUI. Use when the
    user says "help", "what can I do", "list origin commands", "how do I use
    origin", or invokes `/help`.
  folder_path: plugins/origin/skills/help
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# /help
Print the Origin plugin reference card. Read-only — never calls a tool.

## How to invoke

When triggered, output the block below verbatim. No editing, no
abbreviating, no embellishing. The user is asking for the menu.

```
Origin plugin — daily verbs

  /init         set up Origin (auto-installs daemon + local memory)
  /brief        load identity + topic context (start of session)
  /capture <x>  save one durable memory in flow
  /recall <q>   search local memory
  /distill [t]  synthesize pages from clusters (scoped to current repo)
  /read <p>     preview a distilled page inline
  /review <surface>   deep audit (surface = captures|revisions); /brief handles daily
  /forget <id>  delete a memory by ID
  /handoff      end-of-session ritual (session log + captures)
  /debrief      alias for /handoff (brief/debrief symmetry)
  /help         this card

Daily flow (~1 min overhead per session):

  1. start session  →  hook auto-checks daemon, silent if up
  2. /brief         →  ~5 s, load context
  3. work normally  →  Claude proactively /captures durable facts
  4. /recall X      →  as needed for lookups
  5. /handoff       →  ~30 s, narrative session log + captures

Where your data lives (everything under ~/.origin/):

  ~/.origin/pages/      wiki pages distilled from your memories (md)
  ~/.origin/sessions/   session logs by date (md)
  ~/.origin/sessions/_status/  current per-project goals + last-handoff
  ~/.origin/db/         memories + knowledge graph (symlink to libSQL)
  ~/.origin/bin/        installed binaries

View it without a GUI:

  open ~/.origin/                  browse in Finder
  code ~/.origin/                  open in VS Code
  git -C ~/.origin log --oneline   timeline of every memory + distill pass
  ln -s ~/.origin/pages ~/Vault/origin   # symlink into Obsidian for graph view

~/.origin/ is a git repo. Skills auto-commit per logical batch (one per
session, distill pass, or forget). Use git log / git diff / git revert
as a free audit trail. No remote — purely local history.

Three classes of artifact:
  - memories: granular, queryable, live in DB only (confirmed = stays in DB)
  - pages:    synthesized wikis, DB + ~/.origin/pages/*.md projection
  - sessions: chronological narrative, ~/.origin/sessions/*.md only

Daemon must run at 127.0.0.1:7878. Hook prints "/origin:init" if down.

Optional upgrades for richer distill cycles:
  origin model install            local Qwen, no API cost
  origin key set anthropic        Anthropic API, higher quality
```

## When to use

- User explicitly types `/help`.
- User asks "what can I do with origin", "list origin commands", "how
  does this plugin work", "remind me what verbs are available".
- First session after install — print this once on `/init` success too.

## When NOT to use

- Specific factual lookup → use `/recall`.
- Setup troubleshooting → use `/init` (it diagnoses + auto-installs).
