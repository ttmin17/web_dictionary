---
slug: alirezarezvani-claude-skills-engineering-agenthub-skills-eval
name: eval
tagline: "Evaluate and rank agent results by metric or LLM judge for an AgentHub
  session. Use when the user runs /hub:eval or asks to score, compare, or pick a
  "
summary: "For each agent: 1. Get the diff: git diff {basebranch}...{agentbranch}
  2. Read the agent's result post from
  .agenthub/board/results/agent-{i}-result.md 3. Compare all diffs and rank by:
  - Correctness — Does it solve t..."
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
  subpath: engineering/agenthub/skills/eval
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
  path: engineering/agenthub/skills/eval/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.255Z
  truncated: false
type: agent_skill
skill:
  skill_name: eval
  description: Evaluate and rank agent results by metric or LLM judge for an
    AgentHub session. Use when the user runs /hub:eval or asks to score,
    compare, or pick a winner among completed AgentHub agents.
  folder_path: engineering/agenthub/skills/eval
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /hub:eval — Evaluate Agent Results
Rank all agent results for a session. Supports metric-based evaluation (run a command), LLM judge (compare diffs), or hybrid.

## Usage

```
/hub:eval                           # Eval latest session using configured criteria
/hub:eval 20260317-143022           # Eval specific session
/hub:eval --judge                   # Force LLM judge mode (ignore metric config)
```

## What It Does

### Metric Mode (eval command configured)

Run the evaluation command in each agent's worktree:

```bash
python {skill_path}/scripts/result_ranker.py \
  --session {session-id} \
  --eval-cmd "{eval_cmd}" \
  --metric {metric} --direction {direction}
```

Output:
```
RANK  AGENT       METRIC      DELTA      FILES
1     agent-2     142ms       -38ms      2
2     agent-1     165ms       -15ms      3
3     agent-3     190ms       +10ms      1

Winner: agent-2 (142ms)
```

### LLM Judge Mode (no eval command, or --judge flag)

For each agent:
1. Get the diff: `git diff {base_branch}...{agent_branch}`
2. Read the agent's result post from `.agenthub/board/results/agent-{i}-result.md`
3. Compare all diffs and rank by:
   - **Correctness** — Does it solve the task?
   - **Simplicity** — Fewer lines changed is better (when equal correctness)
   - **Quality** — Clean execution, good structure, no regressions

Present rankings with justification.

Example LLM judge output for a content task:
```
RANK  AGENT    VERDICT                               WORD COUNT
1     agent-1  Strong narrative, clear CTA            1480
2     agent-3  Good data points, weak intro           1520
3     agent-2  Generic tone, no differentiation       1350

Winner: agent-1 (strongest narrative arc and call-to-action)
```

### Hybrid Mode

1. Run metric evaluation first
2. If top agents are within 10% of each other, use LLM judge to break ties
3. Present both metric and qualitative rankings

## After Eval

1. Update session state:
```bash
python {skill_path}/scripts/session_manager.py --update {session-id} --state evaluating
```

2. Tell the user:
   - Ranked results with winner highlighted
   - Next step: `/hub:merge` to merge the winner
   - Or `/hub:merge {session-id} --agent {winner}` to be explicit
