---
slug: davepoon-buildwithclaude-plugins-thumbgate-skills-thumbgate
name: thumbgate
tagline: Agent skill from davepoon/buildwithclaude
summary: Agent skill from davepoon/buildwithclaude
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
  subpath: plugins/thumbgate/skills/thumbgate
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
  path: plugins/thumbgate/skills/thumbgate/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.625Z
  truncated: false
type: agent_skill
skill:
  skill_name: thumbgate
  description: Agent skill from davepoon/buildwithclaude
  folder_path: plugins/thumbgate/skills/thumbgate
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# ThumbGate — Pre-Action Gates for AI Coding Agents
## What it does
ThumbGate adds deterministic pre-action gates to AI coding agents. Before any destructive operation executes, ThumbGate checks it against enforceable rules.

## Key features
- **33 pre-action gates** — block destructive actions (force-push, mass delete, destructive SQL) before they execute
- **Thumbs up/down feedback** — type "thumbs down" and the mistake becomes a prevention rule
- **Budget enforcement** — action count + time limits prevent runaway sessions
- **Self-protection** — agent cannot disable its own governance
- **NIST/SOC2 compliance tags** — enterprise-ready gate rules

## Installation
```
npx thumbgate
```

## Usage
Start a Claude Code session with ThumbGate installed. When the agent does something wrong, type "thumbs down" — ThumbGate captures the mistake, distills a lesson, and creates a prevention rule that blocks the pattern from repeating.
