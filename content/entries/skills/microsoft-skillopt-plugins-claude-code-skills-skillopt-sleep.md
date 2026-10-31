---
slug: microsoft-skillopt-plugins-claude-code-skills-skillopt-sleep
name: sleep
tagline: Agent skill from microsoft/SkillOpt
summary: Agent skill from microsoft/SkillOpt
categories:
  - other
tags:
  - agent-skills
  - self-evolving-agents
status: active
quality_percentile: 98
selection_reason: official_vendor
first_seen: 2026-05-08T06:41:01
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: microsoft/SkillOpt
  subpath: plugins/claude-code/skills/skillopt-sleep
  official_vendor: true
  license: MIT
signals:
  stars: 18547
  last_commit: 2026-10-18T17:03:51Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  rank_current: 147
  rank_delta: -104
  velocity_source: snapshot_delta
  sparkline_4w:
    - 18098
    - 18302
    - 18547
    - 18547
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/SkillOpt
  path: plugins/claude-code/skills/skillopt-sleep/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:40:23.574Z
  truncated: false
type: agent_skill
skill:
  skill_name: sleep
  description: Agent skill from microsoft/SkillOpt
  folder_path: plugins/claude-code/skills/skillopt-sleep
  extra_files: []
  pack_total_skills: 2
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - cursor
    - antigravity
  pack_slug: microsoft-skillopt
---

# SkillOpt-Sleep: usage-driven self-evolution for a local Claude agent
SkillOpt-Sleep gives the user's agent a **sleep cycle**. On demand or on a
nightly schedule, it reviews real past Claude Code sessions, re-runs recurring
tasks through the selected backend, and consolidates what it
learns into **memory** (`CLAUDE.md`) and **skills** (`SKILL.md`). With the
default validation gate enabled, it keeps only changes that improve a held-out
score. Live files change only through explicit adoption or a user-requested
`--auto-adopt`. It aims to improve this user's recurring work, while making
each accepted proposal measurable on the run's held-out tasks,
with no model-weight training. It is the deployment-time analogue of training:
short-term experience → long-term competence.

It synthesizes three ideas:
- **SkillOpt** — the skill/memory doc is trainable text; bounded add/delete/replace
  edits; accepted only through a held-out gate; rejected edits are recorded in
  the run report for review.
- **Claude Dreams** — consolidation that reads past sessions and proposes changes
  inside protected learned blocks; the input is never mutated, and output is
  reviewed before adoption.
- **Agent sleep** — periodic background replay turns episodes into durable skill.

## When to use this skill

Trigger when the user wants any of:
- "make my agent learn from how I use it" / "get better the more I use it" / "remember my preferences across sessions"
- a nightly/scheduled or on-demand **offline self-improvement / dream / sleep** run
- to **review past sessions/trajectories** and distill recurring tasks
- to **consolidate** feedback into `CLAUDE.md` or a managed skill
- to **schedule** the cycle (cron) or **adopt** a staged proposal

## The cycle (six stages)

1. **Harvest** — read `~/.claude/projects/*/<session>.jsonl` + `~/.claude/history.jsonl` (READ-ONLY) → session digests.
2. **Mine** — digests → `TaskRecord`s (recurring intents + outcome labels + checkable refs where possible).
3. **Replay** — re-run tasks through the selected backend under the *current*
   skill+memory → (hard, soft) scores.
4. **Consolidate** — reflect on failures → propose bounded edits → **gate** on a held-out slice; with the default gate enabled, accept only if it strictly improves.
5. **Stage** — write the accepted `proposed_CLAUDE.md` and/or
   `proposed_SKILL.md`, plus `report.md`, `report.json`, `manifest.json`, and
   `diagnostics.json` into `<project>/.skillopt-sleep/staging/<timestamp>/`.
   **Nothing live changes.** A rejected run still has a report but no proposed
   live-file replacement.
6. **Adopt** — explicit (or opt-in auto): copy staged files over live ones, backing up first.

## How to drive it

Prefer the `/skillopt-sleep` command. Under the hood it calls the bundled runner:

```bash
"${CLAUDE_PLUGIN_ROOT}/scripts/sleep.sh" status                       # what's happened
"${CLAUDE_PLUGIN_ROOT}/scripts/sleep.sh" dry-run --project "$(pwd)"    # no-staging preview
"${CLAUDE_PLUGIN_ROOT}/scripts/sleep.sh" run --project "$(pwd)"        # full cycle, stages a proposal
"${CLAUDE_PLUGIN_ROOT}/scripts/sleep.sh" adopt --project "$(pwd)"      # apply staged proposal (with backup)
```

- Default backend is `mock` (deterministic, **no API spend**) — good for trying the plumbing.
- Add `--backend claude` or `--backend codex` to spend the user's real budget
  for model-driven optimization. A held-out gain is run-specific evidence, not
  a guarantee of broader improvement; results depend on the tasks, model, and
  checks.
- Scope defaults to the invoked project; `--scope all` harvests every Claude
  project into the current run's configured targets.
- A real backend sends truncated transcript/task content to its provider. See
  the data-boundary rules below before using one with sensitive sessions.

### Scheduling

```bash
"${CLAUDE_PLUGIN_ROOT}/scripts/sleep.sh" schedule --project "$(pwd)" --hour 3 --minute 17
"${CLAUDE_PLUGIN_ROOT}/scripts/sleep.sh" unschedule --project "$(pwd)"
```

Installs a nightly cron entry. `unschedule --all` removes every managed entry.

## Common CLI flags

| Flag | Default | Description |
|------|---------|-------------|
| `--project PATH` | cwd | Project directory to evolve |
| `--scope all\|invoked` | invoked | Harvest scope |
| `--backend mock\|claude\|codex\|copilot\|handoff\|azure_openai` | mock | Backend (mock = no provider calls) |
| `--model NAME` | backend default | Override the model used for replay |
| `--source claude\|codex\|auto` | claude | Transcript source |
| `--lookback-hours N` | 72 | Harvest window |
| `--max-sessions N` | derived | Cap harvested sessions; defaults to 3 × max tasks (120 with current defaults) |
| `--max-tasks N` | 40 | Cap mined tasks |
| `--target-skill-path PATH` | `~/.claude/skills/skillopt-sleep-learned/SKILL.md` | Explicit SKILL.md to evolve |
| `--tasks-file PATH` | — | Reviewed TaskRecord JSON (skip harvest) |
| `--progress` | off | Print phase progress to stderr |
| `--auto-adopt` | off | Auto-adopt if gate passes |
| `--edit-budget N` | 4 | Max bounded edits per night |
| `--preferences TEXT` | empty | Add house rules to the optimizer's reflection prior |
| `--json` | off | Machine-readable JSON output |

The CLI also has source/runtime path overrides (`--claude-home`, `--codex-home`,
and `--codex-path`) and action-specific flags. Use
`python -m skillopt_sleep <action> --help` as the authoritative surface.

## Config keys (`~/.skillopt-sleep/config.json`)

Beyond the CLI flags, advanced behavior is controlled via config:

- **`preferences`** — free-text house rules injected into the optimizer's reflect step (e.g. "Always use async/await", "Answers in `\boxed{}`").
- **`gate_mode`** — `on` (default, validation-gated) or `off` (greedy, accept all edits).
- **`gate_metric`** — `hard`, `soft`, or `mixed` (default). Controls how the held-out gate scores.
- **`gate_no_regression`** — `false` by default. Set to `true` to reject a candidate when any validation task's configured gate score decreases.
- **`dream_rollouts`** — >1 enables multi-rollout contrastive reflection per task.
- **`recall_k`** — >0 recalls K similar past tasks into the dream (long-term memory).
- **`evolve_memory`** / **`evolve_skill`** — independently toggle CLAUDE.md vs SKILL.md consolidation.

## Memory consolidation

The sleep cycle can consolidate both:
- **SKILL.md** — the managed skill file (bounded edits: add/delete/replace)
- **CLAUDE.md** — the project memory (same bounded edits)

With the default gate enabled, both are evaluated by the same held-out score.
Set `evolve_memory: false` to consolidate only skills, or `evolve_skill: false`
for only memory.

## Hard rules

- **Never** hand-edit the user's `CLAUDE.md` / `SKILL.md` as part of this skill.
  Let the engine's explicit `adopt` or user-requested `--auto-adopt` path apply
  the staging manifest and back up existing live files first.
- Harvest is read-only. `mock` replay has no side effects.
- Real backends send truncated transcript excerpts and derived tasks to the
  selected provider for mining, replay, judging, and reflection. The Claude
  transcript path is not guaranteed to remove every secret before those calls.
  Review provider policy and session contents first. For sensitive data, use
  `mock` or run `harvest --output <file>`, inspect/redact the JSON, set
  `"reviewed": true`, and replay it with `--tasks-file`; real backends refuse an
  unreviewed task file.
- Always show the user the **held-out baseline → candidate** score and the
  exact proposed edits before suggesting adoption. Evidence before adoption.
- If asked to demonstrate the mechanism without provider calls, run
  `python -m skillopt_sleep.experiments.run_experiment --persona researcher --json`
  — a deterministic synthetic demo of held-out lift and gate rejection. It
  validates the mechanism, not effectiveness on the user's own tasks.

## Validate / demo

```bash
# deterministic synthetic demo (no API): score rises and the gate blocks a regression
python -m skillopt_sleep.experiments.run_experiment --persona researcher --assert-improves
python -m skillopt_sleep.experiments.run_experiment --persona programmer  --assert-improves
```

See the [SkillOpt-Sleep documentation](https://github.com/microsoft/SkillOpt/tree/main/docs/sleep)
for recorded results, limitations, and the supported integration surface.
