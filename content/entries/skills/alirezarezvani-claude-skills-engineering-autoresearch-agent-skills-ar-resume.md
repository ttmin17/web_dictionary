---
slug: alirezarezvani-claude-skills-engineering-autoresearch-agent-skills-ar-resume
name: ar-resume
tagline: "Resume a paused experiment. Checkout the experiment branch, read
  results history, continue iterating. Use when the user runs /ar:ar-resume or
  asks to "
summary: "If no experiment specified:"
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: engineering/autoresearch-agent/skills/ar-resume
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 523
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: engineering/autoresearch-agent/skills/ar-resume/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.255Z
  truncated: false
type: agent_skill
skill:
  skill_name: ar-resume
  description: Resume a paused experiment. Checkout the experiment branch, read
    results history, continue iterating. Use when the user runs /ar:ar-resume or
    asks to pick up a previously started autoresearch experiment.
  folder_path: engineering/autoresearch-agent/skills/ar-resume
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /ar:ar-resume — Resume Experiment
Resume a paused or context-limited experiment. Reads all history and continues where you left off.

## Usage

```
/ar:ar-resume                                  # List experiments, let user pick
/ar:ar-resume engineering/api-speed            # Resume specific experiment
```

## What It Does

### Step 1: List experiments if needed

If no experiment specified:

```bash
python {skill_path}/scripts/setup_experiment.py --list
```

Show status for each (active/paused/done based on results.tsv age). Let user pick.

### Step 2: Load full context

```bash
# Checkout the experiment branch
git checkout autoresearch/{domain}/{name}

# Read config
cat .autoresearch/{domain}/{name}/config.cfg

# Read strategy
cat .autoresearch/{domain}/{name}/program.md

# Read full results history
cat .autoresearch/{domain}/{name}/results.tsv

# Read recent git log for the branch
git log --oneline -20
```

### Step 3: Report current state

Summarize for the user:

```
Resuming: engineering/api-speed
  Target: src/api/search.py
  Metric: p50_ms (lower is better)
  Experiments: 23 total — 8 kept, 12 discarded, 3 crashed
  Best: 185ms (-42% from baseline of 320ms)
  Last experiment: "added response caching" → KEEP (185ms)

  Recent patterns:
  - Caching changes: 3 kept, 1 discarded (consistently helpful)
  - Algorithm changes: 2 discarded, 1 crashed (high risk, low reward so far)
  - I/O optimization: 2 kept (promising direction)
```

### Step 4: Ask next action

```
How would you like to continue?
  1. Single iteration (/ar:ar-run)  — I'll make one change and evaluate
  2. Start a loop (/ar:loop)     — Autonomous with scheduled interval
  3. Just show me the results    — I'll review and decide
```

If the user picks loop, hand off to `/ar:loop` with the experiment pre-selected.
If single, hand off to `/ar:ar-run`.
