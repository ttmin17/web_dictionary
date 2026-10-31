---
slug: alirezarezvani-claude-skills-engineering-autoresearch-agent-skills-ar-run
name: ar-run
tagline: Run a single experiment iteration. Edit the target file, evaluate, keep
  or discard. Use when the user runs /ar:ar-run or asks for one manual autoresea
summary: If no experiment specified, run python
  {skillpath}/scripts/setupexperiment.py --list and ask the user to pick.
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
  subpath: engineering/autoresearch-agent/skills/ar-run
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
  path: engineering/autoresearch-agent/skills/ar-run/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.255Z
  truncated: false
type: agent_skill
skill:
  skill_name: ar-run
  description: Run a single experiment iteration. Edit the target file, evaluate,
    keep or discard. Use when the user runs /ar:ar-run or asks for one manual
    autoresearch iteration.
  folder_path: engineering/autoresearch-agent/skills/ar-run
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /ar:ar-run — Single Experiment Iteration
Run exactly ONE experiment iteration: review history, decide a change, edit, commit, evaluate.

## Usage

```
/ar:ar-run engineering/api-speed              # Run one iteration
/ar:ar-run                                     # List experiments, let user pick
```

## What It Does

### Step 1: Resolve experiment

If no experiment specified, run `python {skill_path}/scripts/setup_experiment.py --list` and ask the user to pick.

### Step 2: Load context

```bash
# Read experiment config
cat .autoresearch/{domain}/{name}/config.cfg

# Read strategy and constraints
cat .autoresearch/{domain}/{name}/program.md

# Read experiment history
cat .autoresearch/{domain}/{name}/results.tsv

# Checkout the experiment branch
git checkout autoresearch/{domain}/{name}
```

### Step 3: Decide what to try

Review results.tsv:
- What changes were kept? What pattern do they share?
- What was discarded? Avoid repeating those approaches.
- What crashed? Understand why.
- How many runs so far? (Escalate strategy accordingly)

**Strategy escalation:**
- Runs 1-5: Low-hanging fruit (obvious improvements)
- Runs 6-15: Systematic exploration (vary one parameter)
- Runs 16-30: Structural changes (algorithm swaps)
- Runs 30+: Radical experiments (completely different approaches)

### Step 4: Make ONE change

Edit only the target file specified in config.cfg. Change one thing. Keep it simple.

### Step 5: Commit and evaluate

```bash
git add {target}
git commit -m "experiment: {short description of what changed}"

python {skill_path}/scripts/run_experiment.py \
  --experiment {domain}/{name} --single
```

### Step 6: Report result

Read the script output. Tell the user:
- **KEEP**: "Improvement! {metric}: {value} ({delta} from previous best)"
- **DISCARD**: "No improvement. {metric}: {value} vs best {best}. Reverted."
- **CRASH**: "Evaluation failed: {reason}. Reverted."

### Step 7: Self-improvement check

After every 10th experiment (check results.tsv line count), update the Strategy section of program.md with patterns learned.

## Rules

- ONE change per iteration. Don't change 5 things at once.
- NEVER modify the evaluator (evaluate.py). It's ground truth.
- Simplicity wins. Equal performance with simpler code is an improvement.
- No new dependencies.
