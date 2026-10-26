---
slug: davepoon-buildwithclaude-plugins-memstack-skills-memstack
name: memstack
tagline: 127 production skills across 10 categories (Security, Deployment, Dev,
  Business, Content, SEO, Marketing, Product, Automation, Core). Skills
  auto-load
summary: "More info: https://memstack.pro"
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
  subpath: plugins/memstack/skills/memstack
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
  path: plugins/memstack/skills/memstack/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.621Z
  truncated: false
type: agent_skill
skill:
  skill_name: memstack
  description: 127 production skills across 10 categories (Security, Deployment,
    Dev, Business, Content, SEO, Marketing, Product, Automation, Core). Skills
    auto-load based on your task. Includes localhost dashboard with Agent
    Runner, Burn Report, and session diary.
  folder_path: plugins/memstack/skills/memstack
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# MemStack
The structured skill framework for Claude Code.

## Install
/plugin marketplace add cwinvestments/memstack
/plugin install memstack@cwinvestments-memstack

## Pro Skills (42 additional)
pip install memstack-skill-loader
claude mcp add --scope user memstack-skills -- python -m memstack_skill_loader
activate_license(key="your-key", email="your-email")

## Features
- 127 skills across 10 categories, auto-loading based on task
- Localhost dashboard with Agent Runner (3-agent Manager/Builder/Reviewer)
- Burn Report tracking token usage and costs per skill
- Session diary with AI-authored markdown narratives
- Context window monitoring per agent
- Safe git staging to prevent accidental secret commits

More info: https://memstack.pro
