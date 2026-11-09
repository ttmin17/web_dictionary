---
slug: affaan-m-ecc-pi-core-skills-ai-first-engineering
name: ai-first-engineering
tagline: Engineering operating model for teams where AI agents generate a large
  share of implementation output. Use when setting team process, review gates,
  or
summary: 1. Planning quality matters more than typing speed. 2. Eval coverage
  matters more than anecdotal confidence. 3. Review focus shifts from syntax to
  system behavior.
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: pi/core/skills/ai-first-engineering
  official_vendor: false
  license: MIT
signals:
  stars: 299857
  last_commit: 2026-11-09T04:56:24Z
  stars_delta_7d: 2286
  stars_growth_pct: 0.8
  trending_score: 2303.56
  velocity_source: snapshot_delta
  sparkline_4w:
    - 283494
    - 289072
    - 297571
    - 299857
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: pi/core/skills/ai-first-engineering/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:17.197Z
  truncated: false
type: agent_skill
skill:
  skill_name: ai-first-engineering
  description: Engineering operating model for teams where AI agents generate a
    large share of implementation output. Use when setting team process, review
    gates, or ownership rules for a codebase largely written by agents.
  folder_path: pi/core/skills/ai-first-engineering
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# AI-First Engineering
Use this skill when designing process, reviews, and architecture for teams shipping with AI-assisted code generation.

## Process Shifts

1. Planning quality matters more than typing speed.
2. Eval coverage matters more than anecdotal confidence.
3. Review focus shifts from syntax to system behavior.

## Architecture Requirements

Prefer architectures that are agent-friendly:
- explicit boundaries
- stable contracts
- typed interfaces
- deterministic tests

Avoid implicit behavior spread across hidden conventions.

## Code Review in AI-First Teams

Review for:
- behavior regressions
- security assumptions
- data integrity
- failure handling
- rollout safety

Minimize time spent on style issues already covered by automation.

## Hiring and Evaluation Signals

Strong AI-first engineers:
- decompose ambiguous work cleanly
- define measurable acceptance criteria
- produce high-signal prompts and evals
- enforce risk controls under delivery pressure

## Testing Standard

Raise testing bar for generated code:
- required regression coverage for touched domains
- explicit edge-case assertions
- integration checks for interface boundaries
