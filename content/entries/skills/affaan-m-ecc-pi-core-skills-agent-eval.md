---
slug: affaan-m-ecc-pi-core-skills-agent-eval
name: agent-eval
tagline: Head-to-head comparison of coding agents (Claude Code, Aider, Codex,
  etc.) on custom tasks with pass rate, cost, time, and consistency metrics. Use
  wh
summary: "- Comparing coding agents (Claude Code, Aider, Codex, etc.) on your
  own codebase - Measuring agent performance before adopting a new tool or model
  - Running regression checks when an agent updates its model or tooling..."
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: pi/core/skills/agent-eval
  official_vendor: false
  license: MIT
signals:
  stars: 297571
  last_commit: 2026-11-02T04:56:08Z
  stars_delta_7d: 8499
  stars_growth_pct: 2.9
  trending_score: 8748.88
  velocity_source: snapshot_delta
  sparkline_4w:
    - 278380
    - 283494
    - 289072
    - 297571
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: pi/core/skills/agent-eval/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:19.738Z
  truncated: false
type: agent_skill
skill:
  skill_name: agent-eval
  description: Head-to-head comparison of coding agents (Claude Code, Aider,
    Codex, etc.) on custom tasks with pass rate, cost, time, and consistency
    metrics. Use when choosing between coding agents, or when a change to an
    agent setup needs measured pass rate, cost, and time rather than an
    impression.
  folder_path: pi/core/skills/agent-eval
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Agent Eval Skill
A lightweight CLI tool for comparing coding agents head-to-head on reproducible tasks. Every "which coding agent is best?" comparison runs on vibes — this tool systematizes it.

## When to Activate

- Comparing coding agents (Claude Code, Aider, Codex, etc.) on your own codebase
- Measuring agent performance before adopting a new tool or model
- Running regression checks when an agent updates its model or tooling
- Producing data-backed agent selection decisions for a team

## Installation

> **Note:** Install agent-eval from its repository after reviewing the source.

## Core Concepts

### YAML Task Definitions

Define tasks declaratively. Each task specifies what to do, which files to touch, and how to judge success:

```yaml
name: add-retry-logic
description: Add exponential backoff retry to the HTTP client
repo: ./my-project
files:
  - src/http_client.py
prompt: |
  Add retry logic with exponential backoff to all HTTP requests.
  Max 3 retries. Initial delay 1s, max delay 30s.
judge:
  - type: pytest
    command: pytest tests/test_http_client.py -v
  - type: grep
    pattern: "exponential_backoff|retry"
    files: src/http_client.py
commit: "abc1234"  # pin to specific commit for reproducibility
```

### Git Worktree Isolation

Each agent run gets its own git worktree — no Docker required. This provides reproducibility isolation so agents cannot interfere with each other or corrupt the base repo.

### Metrics Collected

| Metric | What It Measures |
|--------|-----------------|
| Pass rate | Did the agent produce code that passes the judge? |
| Cost | API spend per task (when available) |
| Time | Wall-clock seconds to completion |
| Consistency | Pass rate across repeated runs (e.g., 3/3 = 100%) |

## Workflow

### 1. Define Tasks

Create a `tasks/` directory with YAML files, one per task:

```bash
mkdir tasks
# Write task definitions (see template above)
```

### 2. Run Agents

Execute agents against your tasks:

```bash
agent-eval run --task tasks/add-retry-logic.yaml --agent claude-code --agent aider --runs 3
```

Each run:
1. Creates a fresh git worktree from the specified commit
2. Hands the prompt to the agent
3. Runs the judge criteria
4. Records pass/fail, cost, and time

### 3. Compare Results

Generate a comparison report:

```bash
agent-eval report --format table
```

```
Task: add-retry-logic (3 runs each)
┌──────────────┬───────────┬────────┬────────┬─────────────┐
│ Agent        │ Pass Rate │ Cost   │ Time   │ Consistency │
├──────────────┼───────────┼────────┼────────┼─────────────┤
│ claude-code  │ 3/3       │ $0.12  │ 45s    │ 100%        │
│ aider        │ 2/3       │ $0.08  │ 38s    │  67%        │
└──────────────┴───────────┴────────┴────────┴─────────────┘
```

## Judge Types

### Code-Based (deterministic)

```yaml
judge:
  - type: pytest
    command: pytest tests/ -v
  - type: command
    command: npm run build
```

### Pattern-Based

```yaml
judge:
  - type: grep
    pattern: "class.*Retry"
    files: src/**/*.py
```

### Model-Based (LLM-as-judge)

```yaml
judge:
  - type: llm
    prompt: |
      Does this implementation correctly handle exponential backoff?
      Check for: max retries, increasing delays, jitter.
```

## Best Practices

- **Start with 3-5 tasks** that represent your real workload, not toy examples
- **Run at least 3 trials** per agent to capture variance — agents are non-deterministic
- **Pin the commit** in your task YAML so results are reproducible across days/weeks
- **Include at least one deterministic judge** (tests, build) per task — LLM judges add noise
- **Track cost alongside pass rate** — a 95% agent at 10x the cost may not be the right choice
- **Version your task definitions** — they are test fixtures, treat them as code

## Links

- Repository: [github.com/joaquinhuigomez/agent-eval](https://github.com/joaquinhuigomez/agent-eval)
