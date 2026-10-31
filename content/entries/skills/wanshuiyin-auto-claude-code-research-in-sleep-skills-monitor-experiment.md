---
slug: wanshuiyin-auto-claude-code-research-in-sleep-skills-monitor-experiment
name: monitor-experiment
tagline: Monitor running experiments, check progress, collect results. Use when
  user says "check results", "is it done", "monitor", or wants experiment
  output.
summary: Modal apps auto-terminate when done — if it's not in the list, it
  already finished. Check results via modal volume ls or local output.
categories:
  - domain-research
tags:
  - ai-research
  - ai-tools
  - aris
  - autonomous-agent
status: active
quality_percentile: 91
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wanshuiyin/Auto-claude-code-research-in-sleep
  subpath: skills/monitor-experiment
  official_vendor: false
  license: MIT
signals:
  stars: 18088
  last_commit: 2026-10-24T15:48:19Z
  stars_delta_7d: 395
  stars_growth_pct: 2.2
  trending_score: 403.82
  velocity_source: snapshot_delta
  sparkline_4w:
    - 17090
    - 17411
    - 17693
    - 18088
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wanshuiyin/Auto-claude-code-research-in-sleep
  path: skills/monitor-experiment/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:53.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: monitor-experiment
  description: Monitor running experiments, check progress, collect results. Use
    when user says "check results", "is it done", "monitor", or wants experiment
    output.
  folder_path: skills/monitor-experiment
  extra_files: []
  pack_total_skills: 87
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wanshuiyin-auto-claude-code-research-in-sleep
---

# Monitor Experiment Results
> ⏱ **External cadence is appropriate here.** This skill waits on an external
> fact (job completion / progress), so it is a natural `/loop` / `CronCreate`
> surface: the wake reads status and self-judges only **machine-checkable**
> completion (exit code, file exists, epoch logged) — never quality. This is
> the additive external-wait shape in
> [`shared-references/external-cadence.md`](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/blob/main/skills/monitor-experiment/../shared-references/external-cadence.md).
> If a scheduled wait here ends in a verdict step (e.g. then audit results),
> run that verdict **once** after the wait clears — not re-entered per tick.

Monitor: $ARGUMENTS

## Workflow

### Step 1: Check What's Running

**SSH server:**
```bash
ssh <server> "screen -ls"
```

**Vast.ai instance** (read `ssh_host`, `ssh_port` from `vast-instances.json`):
```bash
ssh -p <PORT> root@<HOST> "screen -ls"
```

Also check vast.ai instance status:
```bash
vastai show instances
```

**Modal** (when `gpu: modal` in CLAUDE.md):
```bash
modal app list         # List running/recent apps
modal app logs <app>   # Stream logs from a running app
```
Modal apps auto-terminate when done — if it's not in the list, it already finished. Check results via `modal volume ls <volume>` or local output.

### Step 2: Collect Output from Each Screen
For each screen session, capture the last N lines:
```bash
ssh <server> "screen -S <name> -X hardcopy /tmp/screen_<name>.txt && tail -50 /tmp/screen_<name>.txt"
```

If hardcopy fails, check for log files or tee output.

### Step 3: Check for JSON Result Files
```bash
ssh <server> "ls -lt <results_dir>/*.json 2>/dev/null | head -20"
```

If JSON results exist, fetch and parse them:
```bash
ssh <server> "cat <results_dir>/<latest>.json"
```

### Step 3.5: Pull W&B Metrics (when `wandb: true` in CLAUDE.md)

**Skip this step entirely if `wandb` is not set or is `false` in CLAUDE.md.**

Pull training curves and metrics from Weights & Biases via Python API:

```bash
# List recent runs in the project
ssh <server> "python3 -c \"
import wandb
api = wandb.Api()
runs = api.runs('<entity>/<project>', per_page=10)
for r in runs:
    print(f'{r.id}  {r.state}  {r.name}  {r.summary.get(\"eval/loss\", \"N/A\")}')
\""

# Pull specific metrics from a run (last 50 steps)
ssh <server> "python3 -c \"
import wandb, json
api = wandb.Api()
run = api.run('<entity>/<project>/<run_id>')
history = list(run.scan_history(keys=['train/loss', 'eval/loss', 'eval/ppl', 'train/lr'], page_size=50))
print(json.dumps(history[-10:], indent=2))
\""

# Pull run summary (final metrics)
ssh <server> "python3 -c \"
import wandb, json
api = wandb.Api()
run = api.run('<entity>/<project>/<run_id>')
print(json.dumps(dict(run.summary), indent=2, default=str))
\""
```

**What to extract:**
- **Training loss curve** — is it converging? diverging? plateauing?
- **Eval metrics** — loss, PPL, accuracy at latest checkpoint
- **Learning rate** — is the schedule behaving as expected?
- **GPU memory** — any OOM risk?
- **Run status** — running / finished / crashed?

**W&B dashboard link** (include in summary for user):
```
https://wandb.ai/<entity>/<project>/runs/<run_id>
```

> This gives the auto-review-loop richer signal than just screen output — training dynamics, loss curves, and metric trends over time.

### Step 4: Summarize Results

Present results in a comparison table:
```
| Experiment | Metric | Delta vs Baseline | Status |
|-----------|--------|-------------------|--------|
| Baseline  | X.XX   | —                 | done   |
| Method A  | X.XX   | +Y.Y              | done   |
```

### Step 5: Interpret
- Compare against known baselines
- Flag unexpected results (negative delta, NaN, divergence)
- Suggest next steps based on findings

### Step 6: Feishu Notification (if configured)

After results are collected, check `~/.claude/feishu.json`:
- Send `experiment_done` notification: results summary table, delta vs baseline
- If config absent or mode `"off"`: skip entirely (no-op)

## Key Rules
- Always show raw numbers before interpretation
- Compare against the correct baseline (same config)
- Note if experiments are still running (check progress bars, iteration counts)
- If results look wrong, check training logs for errors before concluding
- **Vast.ai cost awareness**: When monitoring vast.ai instances, report the running cost (hours * $/hr from `vast-instances.json`). If all experiments on an instance are done, remind the user to run `/vast-gpu destroy <instance_id>` to stop billing
- **Modal cost awareness**: Modal auto-scales to zero — no idle billing. When reporting results from Modal runs, note the actual execution time and estimated cost (time * $/hr from the GPU tier used). No cleanup action needed
