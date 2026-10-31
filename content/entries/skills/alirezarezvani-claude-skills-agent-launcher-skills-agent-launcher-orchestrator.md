---
slug: alirezarezvani-claude-skills-agent-launcher-skills-agent-launcher-orchestrator
name: agent-launcher-orchestrator
tagline: 'Use when a user wants to build, launch, grade, or schedule a Claude
  Managed Agent (CMA) in their own Anthropic account — "build me an agent",
  "launch '
summary: Inspired by Anthropic's launch-your-agent reference skill (Apache-2.0).
  This is an independent re-implementation; CMA semantics come from
  ../../references/cma-primitives.md.
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: agent-launcher/skills/agent-launcher-orchestrator
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
  path: agent-launcher/skills/agent-launcher-orchestrator/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.234Z
  truncated: false
type: agent_skill
skill:
  skill_name: agent-launcher-orchestrator
  description: Use when a user wants to build, launch, grade, or schedule a Claude
    Managed Agent (CMA) in their own Anthropic account — "build me an agent",
    "launch this as a managed agent", "run this on a schedule", "grade my agent
    against a rubric", "set up a nightly worker". Reads the per-session goal
    (./my-agent/goal.json), routes deterministically to one of five phase
    sub-skills (interview → stage-launch → grade-iterate → run-without-you →
    wrap-up) via goal_router.py, and compiles the goal+phase into an execution
    shape (single-pass workflow / bounded grade→iterate loop / recurring cron
    deployment loop) via loop_compiler.py. Forks context so heavy intake (build
    sheets, payloads, eval cases) stays out of the parent thread. All launches
    are emitted as BYOK curl the user runs with their own key; no tool makes API
    calls. Inspired by anthropics/launch-your-agent (Apache-2.0). Distinct from
    engineering/agent-harness (generic domain loop) and
    engineering/write-a-skill (authors Claude Code skills, not CMAs).
  folder_path: agent-launcher/skills/agent-launcher-orchestrator
  extra_files:
    - README.md
    - scripts/goal_router.py
    - scripts/goal_state.py
    - scripts/loop_compiler.py
  pack_total_skills: 383
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# agent-launcher — Domain Orchestrator
Every session starts with a **goal** — one sentence for one CMA. This orchestrator
reads that goal, routes to the right phase, and compiles the goal into a **loop or
a workflow**. Heavy intake stays in the forked context; the parent gets a digest.

Inspired by Anthropic's `launch-your-agent` reference skill (Apache-2.0). This is
an independent re-implementation; CMA semantics come from
[`../../references/cma-primitives.md`](https://github.com/alirezarezvani/claude-skills/blob/main/agent-launcher/skills/agent-launcher-orchestrator/../../references/cma-primitives.md).

## The through-line: the session goal

State lives at `./my-agent/goal.json` (the user's folder). Manage it with
`goal_state.py` (init / set / status / advance) — it also backs the `/cs-goal`
command and the opt-in `SessionStart` hook. The goal's `phase` selects the lane;
the phase + recurrence selects the loop shape.

## Routing (deterministic)

Run the router, then act on its exit code:

```bash
python3 scripts/goal_router.py --out-dir ./my-agent
# exit 0 ROUTE  -> fork to the named phase sub-skill
# exit 3 ASK    -> ask the one printed forcing question, then re-route
# exit 4 REFUSE -> goal too vague; get one sentence, then re-route
```

| Lane (phase) | Sub-skill | Loop/workflow |
|---|---|---|
| interview | `interview` | single-pass workflow |
| stage-launch | `stage-launch` | single-pass workflow |
| grade-iterate | `grade-iterate` | **bounded grade→iterate loop** |
| run-without-you | `run-without-you` | **recurring cron deployment loop** |
| wrap-up | `wrap-up` | — |

## Compile the loop

```bash
python3 scripts/loop_compiler.py \
  --out-dir ./my-agent --max-iterations 5 --cron "0 9 * * *" --timezone Europe/Berlin --nest-outcome
```

`loop_compiler.py` emits `plan.v1`: `single-pass`, `grade-iterate` (always with a
`max_iterations` cap 1..20), or `cron-loop` (optionally nesting a self-grading
outcome per firing). See [`../../references/loops-and-workflows.md`](https://github.com/alirezarezvani/claude-skills/blob/main/agent-launcher/skills/agent-launcher-orchestrator/../../references/loops-and-workflows.md).

## Pre-flight gates (hard refusals)

1. **No goal set.** If `goal.json` is missing, run
   `goal_state.py init --goal "..."` first. The orchestrator does not guess a goal.
2. **Goal too vague.** Router exit 4 — get one sentence naming the one job before
   routing. Never route on under-3-word goals.
3. **Never make API calls.** Emit BYOK curl; the user runs it with their own
   `$ANTHROPIC_API_KEY`. No script in this plugin touches the network.
4. **Never print the key.** Launch scripts read the key from the environment.

## Hand-off contract

After routing, fork to the sub-skill with: the goal string, `agent_name`,
`out_dir` (`./my-agent`), and the compiled `plan.v1`. When the sub-skill returns,
`goal_state.py advance` moves the phase and the parent gets a ≤100-word digest
(phase done, artifact paths, loop shape, one next step).

## Forcing-question library (walk one at a time; recommend + cite)

1. **"What one job should this agent do end-to-end?"** — *Recommend:* the single
   most repeated task. *Cite:* interview-to-config.md (six intake slots). Refuse to
   route a two-job goal; split into two `./my-agent-*/` folders.
2. **"What kicks it off — you ask it, an event, or a schedule?"** — *Recommend:*
   on-demand for v0, schedule as the Phase-4 upgrade. *Cite:* loops-and-workflows.md.
3. **"How would you grade a good run?"** — *Recommend:* 3–5 rubric lines grounded
   in the output. *Cite:* cma-primitives.md (outcomes; rubric required).
4. **"Is a real integration ready, or do we mock it in v0?"** — *Recommend:* mock
   with a schema-true custom tool; wire the MCP server as v1. *Cite:* interview-to-config.md.
5. **"Should run #10 be smarter than run #1?"** — *Recommend:* attach a memory
   store only if yes; else skip it. *Cite:* cma-primitives.md (memory limits + injection risk).

## Tools

- `scripts/goal_state.py` — own `goal.json` (init/set/status/advance).
- `scripts/goal_router.py` — goal → lane (exit 0 route / 3 ask / 4 refuse).
- `scripts/loop_compiler.py` — goal+phase → `plan.v1` execution shape.
