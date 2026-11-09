---
slug: affaan-m-ecc-pi-core-skills-agent-harness-construction
name: agent-harness-construction
tagline: Design and optimize AI agent action spaces, tool definitions, and
  observation formatting for higher completion rates. Use when defining or
  revising an
summary: "Agent output quality is constrained by: 1. Action space quality 2.
  Observation quality 3. Recovery quality 4. Context budget quality"
categories:
  - agent-frameworks
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
  subpath: pi/core/skills/agent-harness-construction
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
  path: pi/core/skills/agent-harness-construction/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:17.196Z
  truncated: false
type: agent_skill
skill:
  skill_name: agent-harness-construction
  description: Design and optimize AI agent action spaces, tool definitions, and
    observation formatting for higher completion rates. Use when defining or
    revising an agent's tool set, action space, or observation format.
  folder_path: pi/core/skills/agent-harness-construction
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Agent Harness Construction
Use this skill when you are improving how an agent plans, calls tools, recovers from errors, and converges on completion.

## Core Model

Agent output quality is constrained by:
1. Action space quality
2. Observation quality
3. Recovery quality
4. Context budget quality

## Action Space Design

1. Use stable, explicit tool names.
2. Keep inputs schema-first and narrow.
3. Return deterministic output shapes.
4. Avoid catch-all tools unless isolation is impossible.

## Granularity Rules

- Use micro-tools for high-risk operations (deploy, migration, permissions).
- Use medium tools for common edit/read/search loops.
- Use macro-tools only when round-trip overhead is the dominant cost.

## Observation Design

Every tool response should include:
- `status`: success|warning|error
- `summary`: one-line result
- `next_actions`: actionable follow-ups
- `artifacts`: file paths / IDs

## Error Recovery Contract

For every error path, include:
- root cause hint
- safe retry instruction
- explicit stop condition

## Context Budgeting

1. Keep system prompt minimal and invariant.
2. Move large guidance into skills loaded on demand.
3. Prefer references to files over inlining long documents.
4. Compact at phase boundaries, not arbitrary token thresholds.

## Architecture Pattern Guidance

- ReAct: best for exploratory tasks with uncertain path.
- Function-calling: best for structured deterministic flows.
- Hybrid (recommended): ReAct planning + typed tool execution.

## Benchmarking

Track:
- completion rate
- retries per task
- pass@1 and pass@3
- cost per successful task

## Anti-Patterns

- Too many tools with overlapping semantics.
- Opaque tool output with no recovery hints.
- Error-only output without next steps.
- Context overloading with irrelevant references.
