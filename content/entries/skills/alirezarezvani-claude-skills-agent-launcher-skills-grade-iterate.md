---
slug: alirezarezvani-claude-skills-agent-launcher-skills-grade-iterate
name: grade-iterate
tagline: Use when a launched managed agent needs grading against a rubric and
  improving ('grade my agent', 'is it good enough'). Builds the outcome with
  outcom
summary: See ../../references/loops-and-workflows.md and the outcome section of
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
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: agent-launcher/skills/grade-iterate
  official_vendor: false
  license: MIT
signals:
  stars: 29502
  last_commit: 2026-11-05T06:58:08Z
  stars_delta_7d: 165
  stars_growth_pct: 0.6
  trending_score: 165.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 28730
    - 29337
    - 29502
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: agent-launcher/skills/grade-iterate/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:33.880Z
  truncated: false
type: agent_skill
skill:
  skill_name: grade-iterate
  description: Use when a launched managed agent needs grading against a rubric
    and improving ('grade my agent', 'is it good enough'). Builds the outcome
    with outcome_builder.py, reads verdicts with verdict_reader.py and runs
    held-back evals from eval_scaffold.py.
  folder_path: agent-launcher/skills/grade-iterate
  extra_files:
    - README.md
    - scripts/eval_scaffold.py
    - scripts/outcome_builder.py
    - scripts/verdict_reader.py
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Phase 3 — Grade → Iterate (the bounded loop)
This is the plugin's **loop**: CMA's `outcome` primitive self-grades the agent's
work in an isolated context and feeds failing verdicts back for the next attempt.
It is **always bounded** by `max_iterations` (1..20) — never "improve forever".

See [`../../references/loops-and-workflows.md`](https://github.com/alirezarezvani/claude-skills/blob/main/agent-launcher/skills/grade-iterate/../../references/loops-and-workflows.md)
and the outcome section of
[`../../references/cma-primitives.md`](https://github.com/alirezarezvani/claude-skills/blob/main/agent-launcher/skills/grade-iterate/../../references/cma-primitives.md).

## Workflow

1. **Define the outcome.**
   ```bash
   python3 scripts/outcome_builder.py \
     --sheet ./my-agent/build-sheet.json --max-iterations 5 \
     --out ./my-agent/payloads/outcome.json
   ```
   The **rubric is required**; `max_iterations` is clamped to 1..20. Send the
   payload as a `user.define_outcome` event (append to the running session).
2. **Read every verdict first.**
   ```bash
   python3 scripts/verdict_reader.py --result ./my-agent/last-verdict.json
   ```
   Tables the rubric outcome and recommends: **SHIP** (`satisfied`), **SHARPEN**
   then re-run (`needs_revision`), **ESCALATE** (`max_iterations_reached` /
   `failed`), **RESUME** (`interrupted`). With ≤1 iteration left it flips to
   "make the single highest-value fix or escalate now".
3. **Loop invariant.** Each iteration must move ≥1 rubric line fail→pass, or the
   run halts at the cap and escalates. Don't burn the budget on cosmetic edits.
4. **Once a version passes, run held-back eval.**
   ```bash
   python3 scripts/eval_scaffold.py \
     --sheet ./my-agent/build-sheet.json --out ./my-agent/eval.json --concurrency 5
   ```
   Held-back cases (never seen during iteration) run in parallel, capped at the
   25-thread CMA ceiling, each graded against the same rubric.
5. **Decide.** SHIP as v0, or promote to a scheduled deployment (Phase 4). Record
   the verdict on the goal: `goal_state.py set --phase run-without-you`.

## Hard rules

- **Bounded, always.** No outcome without a `max_iterations` cap.
- **Read the verdict before acting.** The grader's explanation drives the next move.
- **Held-back cases are held back.** Never grade generalization on cases the agent
  already iterated against.

## Forcing-question library (recommend + cite)

1. "What are the 3–5 rubric lines?" *Recommend:* grounded, checkable criteria.
   *Cite:* cma-primitives.md (rubric required).
2. "How many iterations before you'd rather look yourself?" *Recommend:* 3–5.
   *Cite:* loops-and-workflows.md (bounded loop).
3. "On a fail, sharpen the prompt or the tools?" *Recommend:* whichever rubric line
   failed points to. *Cite:* verdict_reader next-move table.
4. "Which cases did the agent NOT see?" *Recommend:* hold back ≥3 for generalization.
   *Cite:* this SKILL (held-back eval).

## Tools

- `scripts/outcome_builder.py` — user.define_outcome payload (rubric required, cap 1..20).
- `scripts/verdict_reader.py` — grader result → next move.
- `scripts/eval_scaffold.py` — held-back cases + parallel run plan (≤25 threads).
