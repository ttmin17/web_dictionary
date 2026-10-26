---
slug: ruvnet-ruflo-plugins-ruflo-workflows-skills-gaia-debugging
name: gaia-debugging
tagline: Diagnose why a GAIA question failed — extract trace, classify failure
  mode, and propose a fix. Use when a GAIA benchmark run reports a
  failed/incorrec
summary: "- A specific taskid returns the wrong answer or times out - Pass-rate
  dropped between two runs and you need to find the regression - You want to
  understand why a particular question class is consistently failing"
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-workflows/skills/gaia-debugging
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-workflows/skills/gaia-debugging/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: gaia-debugging
  description: Diagnose why a GAIA question failed — extract trace, classify
    failure mode, and propose a fix. Use when a GAIA benchmark run reports a
    failed/incorrect task_id and you need to root-cause it before resubmitting.
  folder_path: plugins/ruflo-workflows/skills/gaia-debugging
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# GAIA Debugging Skill
When a GAIA question fails, systematically diagnose the root cause and propose
a targeted fix.

## When to use

- A specific `task_id` returns the wrong answer or times out
- Pass-rate dropped between two runs and you need to find the regression
- You want to understand why a particular question class is consistently failing

## Failure mode taxonomy

| Code | Mode | Symptom | Fix direction |
|------|------|---------|--------------|
| TG | Tool Gap | Agent lacks a required tool (no image OCR, no PDF reader) | Add tool to catalogue |
| RM | Reasoning Miss | Agent has the right data but draws wrong conclusion | Improve system prompt, add CoT instruction |
| EB | Extraction Bug | Answer is in the trace but `FINAL_ANSWER:` regex fails | Fix answer extraction pattern |
| LI | Loop Issue | Agent loops (re-asks same tool call) and hits turn limit | Increase max-turns or add loop-detection |
| DS | Dataset Shift | Ground truth differs from what web currently shows | Flag for HAL dataset audit |
| AT | API Timeout | Tool call times out; agent never gets the result | Increase per-turn timeout |

## Diagnostic workflow

### Step 1 — Load the question trace

```bash
# Find the result for the task_id in the latest run
RESULTS=~/.cache/ruflo/gaia/results-latest.json
node -e "
  const r = JSON.parse(require('fs').readFileSync('$RESULTS'));
  const q = r.results.find(x => x.task_id === '$TASK_ID');
  console.log(JSON.stringify(q, null, 2));
"
```

### Step 2 — Classify the failure

Look at the trace output:

1. **No tools called at all** → RM or configuration issue
2. **Tool called but returned error** → TG or AT
3. **Tool returned data, wrong answer** → RM or EB
4. **Correct answer in trace but marked wrong** → EB
5. **max-turns hit** → LI or question too hard for current model

### Step 3 — Re-run with extended logging

```bash
node v3/@claude-flow/cli/bin/cli.js gaia-bench run \
  --level 1 --limit N \
  --models claude-sonnet-4-6 \
  --max-turns 20 \
  --output json
```

`gaia-bench run` cannot select one task: there is no `--task-id` flag (unknown flags are ignored silently). Use the smallest `--limit N` that reaches the question's position in the level's dataset order, and read only the trace for `$TASK_ID` from the output; completed questions are skipped on resume via the checkpoint file.

### Step 4 — Apply targeted fix

| Failure | Action |
|---------|--------|
| TG — missing web_browse | Verify `gaia-tools/index.ts` exports `web_browse`; check tool registration |
| TG — missing image OCR | Add `image_describe` tool call; verify `GOOGLE_AI_API_KEY` |
| RM — reasoning | Add a system prompt instruction: "Before answering, list all facts you have gathered" |
| EB — extraction | Test the `FINAL_ANSWER_RE` regex against the trace manually |
| LI — loop | Add a tool-call deduplication guard in `gaia-agent.ts` |
| AT — timeout | Set `DEFAULT_PER_TURN_TIMEOUT_MS` higher or use `--max-turns` flag |

### Step 5 — Verify fix and store pattern

```bash
# Re-run (no --task-id exists; use the smallest --limit that includes the question)
node … gaia-bench run --level $LEVEL --limit N --models $MODEL --output json

# If now passing, store the pattern
npx @claude-flow/cli@latest memory store \
  --namespace gaia-debug-patterns \
  --key "fix-$FAILURE_CODE-$(date +%Y%m%d)" \
  --value "task_id=$TASK_ID, mode=$FAILURE_CODE, fix=$FIX_DESCRIPTION"
```

## Quick reference: tool catalogue check

```bash
node -e "
  const { createDefaultToolCatalogue } = require('./v3/@claude-flow/cli/src/benchmarks/gaia-tools/index.js');
  const cat = createDefaultToolCatalogue({});
  console.log('Tools registered:', cat.definitions.map(t => t.name));
"
```

Expected: `web_search`, `file_read`, `web_browse`, `image_describe`, `python_exec`

## Pattern storage

After resolving a debugging session, store the finding:
```bash
npx @claude-flow/cli@latest memory store \
  --namespace gaia-debug-patterns \
  --key "session-$(date +%Y%m%d-%H%M)" \
  --value '{"task_id":"$TASK_ID","failure_mode":"$CODE","fix":"$FIX","verified":true}'
```

Search for similar past failures:
```bash
npx @claude-flow/cli@latest memory search \
  --namespace gaia-debug-patterns \
  --query "extraction bug final answer regex"
```
