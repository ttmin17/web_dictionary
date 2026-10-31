---
slug: alirezarezvani-claude-skills-engineering-agenthub-skills-hub-init
name: hub-init
tagline: Create a new AgentHub collaboration session with task, agent count, and
  evaluation criteria. Use when the user runs /hub:hub-init or asks to start a m
summary: "1. Task — What should the agents do? (required) 2. Agent count — How
  many parallel agents? (default: 3) 3. Eval command — Command to measure
  results (optional — skip for LLM judge mode) 4. Metric name — What metric
  to..."
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
  subpath: engineering/agenthub/skills/hub-init
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 1198
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
  path: engineering/agenthub/skills/hub-init/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.255Z
  truncated: false
type: agent_skill
skill:
  skill_name: hub-init
  description: Create a new AgentHub collaboration session with task, agent count,
    and evaluation criteria. Use when the user runs /hub:hub-init or asks to
    start a multi-agent competition on a task.
  folder_path: engineering/agenthub/skills/hub-init
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /hub:hub-init — Create New Session
Initialize an AgentHub collaboration session. Creates the `.agenthub/` directory structure, generates a session ID, and configures evaluation criteria.

## Usage

```
/hub:hub-init                                                    # Interactive mode
/hub:hub-init --task "Optimize API" --agents 3 --eval "pytest bench.py" --metric p50_ms --direction lower
/hub:hub-init --task "Refactor auth" --agents 2                  # No eval (LLM judge mode)
```

## What It Does

### If arguments provided

Pass them to the init script:

```bash
python {skill_path}/scripts/hub_init.py \
  --task "{task}" --agents {N} \
  [--eval "{eval_cmd}"] [--metric {metric}] [--direction {direction}] \
  [--base-branch {branch}]
```

### If no arguments (interactive mode)

Collect each parameter:

1. **Task** — What should the agents do? (required)
2. **Agent count** — How many parallel agents? (default: 3)
3. **Eval command** — Command to measure results (optional — skip for LLM judge mode)
4. **Metric name** — What metric to extract from eval output (required if eval command given)
5. **Direction** — Is lower or higher better? (required if metric given)
6. **Base branch** — Branch to fork from (default: current branch)

### Output

```
AgentHub session initialized
  Session ID: 20260317-143022
  Task: Optimize API response time below 100ms
  Agents: 3
  Eval: pytest bench.py --json
  Metric: p50_ms (lower is better)
  Base branch: dev
  State: init

Next step: Run /hub:spawn to launch 3 agents
```

For content or research tasks (no eval command → LLM judge mode):

```
AgentHub session initialized
  Session ID: 20260317-151200
  Task: Draft 3 competing taglines for product launch
  Agents: 3
  Eval: LLM judge (no eval command)
  Base branch: dev
  State: init

Next step: Run /hub:spawn to launch 3 agents
```

## Baseline Capture

If `--eval` was provided, capture a baseline measurement after session creation:

1. Run the eval command in the current working directory
2. Extract the metric value from stdout
3. Append `baseline: {value}` to `.agenthub/sessions/{session-id}/config.yaml`
4. Display: `Baseline captured: {metric} = {value}`

This baseline is used by `result_ranker.py --baseline` during evaluation to show deltas. If the eval command fails at this stage, warn the user but continue — baseline is optional.

## After Init

Tell the user:
- Session created with ID `{session-id}`
- Baseline metric (if captured)
- Next step: `/hub:spawn` to launch agents
- Or `/hub:spawn {session-id}` if multiple sessions exist
