---
slug: davepoon-buildwithclaude-plugins-shipwright-skills-build
name: build
tagline: Autonomous app-building skill — transforms plain-English descriptions
  into fully built, tested, and deployed applications via a 9-phase pipeline
summary: "- 9-Phase Pipeline: Requirements, scaffold, implement, test, lint,
  security, docs, verify, deploy - 4 Stacks: Next.js + TypeScript + Tailwind,
  FastAPI + Python, Express + TypeScript, Static HTML/CSS/JS - Enterprise Sa..."
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
  subpath: plugins/shipwright/skills/build
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
  path: plugins/shipwright/skills/build/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.624Z
  truncated: false
type: agent_skill
skill:
  skill_name: build
  description: Autonomous app-building skill — transforms plain-English
    descriptions into fully built, tested, and deployed applications via a
    9-phase pipeline
  folder_path: plugins/shipwright/skills/build
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Shipwright Build Skill
Provides autonomous application building capabilities:

- **9-Phase Pipeline**: Requirements, scaffold, implement, test, lint, security, docs, verify, deploy
- **4 Stacks**: Next.js + TypeScript + Tailwind, FastAPI + Python, Express + TypeScript, Static HTML/CSS/JS
- **Enterprise Safety**: Pre-commit validation, test coverage enforcement, security audit gates, lint-clean guarantees

## When Loaded

This skill is automatically injected when working with:

- `/shipwright:build` — Build a new app from description
- `/shipwright:enhance` — Add features to existing project
- `/shipwright:stacks` — List available stacks
- `/shipwright:projects` — Manage Shipwright projects
