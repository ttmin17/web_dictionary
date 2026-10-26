---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-morning-ai
name: morning-ai
tagline: AI news tracking skill that monitors 80+ entities across 6 free sources
  (Reddit, HN, GitHub, HuggingFace, arXiv, X/Twitter). Generates scored daily re
summary: "- When the user wants a daily AI news briefing - When tracking AI
  model releases, product launches, funding rounds, or benchmark results - When
  generating AI news reports or infographics for sharing"
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
  subpath: plugins/all-skills/skills/morning-ai
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
  path: plugins/all-skills/skills/morning-ai/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.591Z
  truncated: false
type: agent_skill
skill:
  skill_name: morning-ai
  description: AI news tracking skill that monitors 80+ entities across 6 free
    sources (Reddit, HN, GitHub, HuggingFace, arXiv, X/Twitter). Generates
    scored daily reports with infographics and message digests. Invoke via
    /morning-ai.
  folder_path: plugins/all-skills/skills/morning-ai
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# MorningAI
Daily AI news tracker that collects updates from 80+ entities across 6 sources, scores and deduplicates them, and generates a structured Markdown report.

## When to Use This Skill

- When the user wants a daily AI news briefing
- When tracking AI model releases, product launches, funding rounds, or benchmark results
- When generating AI news reports or infographics for sharing

## What This Skill Does

1. Collects data from 6 sources: Reddit, Hacker News, GitHub, HuggingFace, arXiv, X/Twitter
2. Scores items using two-stage scoring (automated metadata + qualitative evaluation)
3. Deduplicates and cross-verifies high-scoring items
4. Generates a Markdown report with scored entries and source links

## Installation

MorningAI requires its full repository for data collection scripts:

```bash
# Install as a Claude Code plugin
git clone https://github.com/octo-patch/MorningAI.git ~/.claude/plugins/MorningAI

# Or install as a skill
git clone https://github.com/octo-patch/MorningAI.git
cd MorningAI
```

## How to Use

### Basic Usage

```
/morning-ai
```

### With Options

```
/morning-ai --lang zh
/morning-ai --depth deep
/morning-ai --exclude Funding
```

## Requirements

- Python 3.9+
- No API keys required (all 6 sources are free)

## Links

- Repository: https://github.com/octo-patch/MorningAI
- License: MIT
