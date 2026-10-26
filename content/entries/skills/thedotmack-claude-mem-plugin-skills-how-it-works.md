---
slug: thedotmack-claude-mem-plugin-skills-how-it-works
name: how-it-works
tagline: Explain how claude-mem captures observations, when memory injection
  kicks in, and where data lives. Use when the user asks "how does claude-mem
  work?"
summary: Every Read, Edit, and Bash that Claude makes turns into a compressed
  observation. Observations get summarized at session end. Relevant ones get
  auto-injected into future prompts so the next session starts with context...
categories:
  - databases-memory
tags:
  - ai-agents
  - ai-memory
  - anthropic
  - artificial-intelligence
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: thedotmack/claude-mem
  subpath: plugin/skills/how-it-works
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 103202
  last_commit: 2026-10-25T21:00:05Z
  stars_delta_7d: 1527
  stars_growth_pct: 1.5
  trending_score: 1549.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 97519
    - 100334
    - 101675
    - 103202
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: thedotmack/claude-mem
  path: plugin/skills/how-it-works/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:14.402Z
  truncated: false
type: agent_skill
skill:
  skill_name: how-it-works
  description: Explain how claude-mem captures observations, when memory injection
    kicks in, and where data lives. Use when the user asks "how does claude-mem
    work?" or "what is this thing doing?".
  folder_path: plugin/skills/how-it-works
  extra_files:
    - onboarding-explainer.md
  pack_total_skills: 33
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: thedotmack-claude-mem
---

# How claude-mem works
## What it does

Every Read, Edit, and Bash that Claude makes turns into a compressed observation. Observations get summarized at session end. Relevant ones get auto-injected into future prompts so the next session starts with context from the last one — no re-explaining the codebase, no re-discovering decisions.

## When it kicks in

Memory injection starts on your second session in a project.

The first session in a fresh project seeds memory; subsequent sessions receive auto-injected context for relevant past work. Run `/learn-codebase` if you want to front-load the entire repo into memory in a single pass (~5 minutes, optional).

## Where data lives

Everything stays in ~/.claude-mem on this machine.

Nothing leaves your machine except calls to whichever AI provider you configured for compression (Claude / OpenRouter / Gemini). Local installs contact cmem.ai once, at signup, to create the sign-in link; nothing else is sent to cmem.ai. The SQLite database, vector index, logs, and settings all live under that directory and are removed cleanly on `npx claude-mem uninstall`.
