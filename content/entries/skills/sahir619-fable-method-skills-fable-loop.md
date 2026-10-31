---
slug: sahir619-fable-method-skills-fable-loop
name: fable-loop
tagline: End-to-end orchestrated workflow that runs a task the way Fable ran
  sessions - parallel evidence subagents, one committed plan, surgical execution
  wit
summary: "Gate first. Trivial per the method's triviality gate: just do it,
  verify with the one obvious check, report in two sentences. No stages, no
  subagents. Everything else runs the four stages below in order."
categories:
  - productivity-ops
status: active
quality_percentile: 44
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: Sahir619/fable-method
  subpath: skills/fable-loop
  official_vendor: false
  license: MIT
signals:
  stars: 2300
  last_commit: 2026-10-03T00:38:29Z
  stars_delta_7d: 4
  stars_growth_pct: 0.2
  trending_score: 4.01
  rank_current: 293
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2296
    - 2300
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Sahir619/fable-method
  path: skills/fable-loop/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:19.693Z
  truncated: false
type: agent_skill
skill:
  skill_name: fable-loop
  description: End-to-end orchestrated workflow that runs a task the way Fable ran
    sessions - parallel evidence subagents, one committed plan, surgical
    execution with an intent gate, adversarial verification agents, honest
    outcome-first report. Use for non-trivial multi-step tasks when the user
    says "/fable-loop", "run the fable loop", or "do this the way Fable would".
    For the rules alone without orchestration, use fable-method; for large
    multi-phase projects, prefer the GSD workflow and use this inside phases.
  folder_path: skills/fable-loop
  extra_files:
    - agents/openai.yaml
tags: []
---

# The Fable Loop
This skill orchestrates the fable-method: read its SKILL.md first; its rules govern every stage. It is installed alongside this skill (in this plugin's `skills/fable-method/` directory, or `~/.claude/skills/fable-method/` for manual installs). The method says WHAT to check; this loop says WHO does the work: what runs in the main thread, what fans out to subagents, and what gets attacked before delivery.

**Gate first.** Trivial per the method's triviality gate: just do it, verify with the one obvious check, report in two sentences. No stages, no subagents. Everything else runs the four stages below in order.

## Stage 1 - PLAN (the first bookend)

1. Apply method Steps 0-3: classify the ask, define done with a named verification, state load-bearing assumptions.
2. **Evidence fan-out.** Spawn the evidence gatherers as parallel subagents in ONE message, never sequentially:
   - codebase questions: an Explore agent per distinct area ("how does X work", "what depends on Y");
   - library or fact questions: a research agent that fetches current docs or searches the web;
   - each subagent returns distilled findings with citations, never raw file dumps.
   One batch plus one follow-up batch is the budget; a third needs a stated reason.
3. **Produce the plan artifact** in this shape: classification; definition of done plus its verification; evidence found (cited); ONE recommended approach (alternatives dismissed in a line each); the scope (the exact files or surfaces the work will touch); risks and assumptions; and the execution checklist.
4. **Decision gate.** Task-shaped and reversible: proceed to Stage 2 without asking. Plan-first shape (ambiguous scope, irreversible or outward-facing actions, or the user asked for a plan): present the plan artifact and STOP for approval.

## Stage 2 - EXECUTE

1. Work the checklist in the **main thread** (use the todo tool if the harness has one; tick items as they complete). Deciding and editing stay in the main thread; only searching and verifying fan out.
2. Every edit follows method Step 4: intent gate before behavior changes, recall gate before first use of anything unopened, smallest correct change, precise edits, never destroy without looking.
3. Independent mechanical items (same change across many files, isolated file generation) may fan out to parallel subagents, in one message, with worktree isolation if they could touch the same files.
4. A surprise mid-execution re-routes per method Step 2 rule 7: say it, then update the plan or go back to Stage 1. Never force the plan through a surprise.
5. Mid-item ignorance is a pause, not a guess: the moment an edit would carry a fact from memory (a signature, a key, a figure), stop that item, fan out one research subagent per the method's recall gate, and resume when it returns.
6. Outward-facing checklist items obey the method's authorization gate: no quoted user authorization, no action; the item converts to a proposed next step in the report.

## Stage 3 - VERIFY (adversarially)

1. Run the named verification yourself, both halves: the done criterion observed (ran, rendered, counted), and the surrounding system still healthy (build, tests, lint for the touched area).
2. **For consequential changes, spawn attackers.** 1-3 parallel subagents, each prompted to REFUTE the work from a distinct lens, for example: "Read this diff and prove the change is wrong or incomplete", "Exercise the changed behavior at runtime and find an input that breaks it", "Check this claim against the spec/docs and find a contradiction", "Diff the full change set against the plan's declared scope and prove something outside it changed". Distinct lenses beat identical reviewers.
3. A finding that survives your own check goes back to Stage 2 as new work. Hard bound per the method: 3 failed fix-verify cycles on the same issue, or any blocker outside your control, means stop and hand back with the output and your hypothesis.

## Stage 4 - AUDIT and REPORT (the second bookend)

1. Self-audit per fable-method audit mode: for each method step, followed, skipped, or faked. Fix what one pass can fix (usually an unverified claim: verify it now or relabel it a caveat).
2. Deliver per method Step 6: outcome in the first sentence, verification evidence shown, honest caveats, follow-ups only if they emerged from the work. No stage names or step numbers in the report; the INTENT and AUTH lines are the only method artifacts a report may contain.

## When NOT to use this loop

- Trivial tasks (the gate handles them).
- Pure questions with no multi-step work: plain fable-method covers the shape.
- Inside an already-orchestrated GSD phase: GSD owns the stages there; apply fable-method rules within them instead of nesting loops.

## Model economy

The loop is model-agnostic. Evidence and attacker subagents are cheap-model-friendly; keep the main thread (deciding, editing) on the strongest model available, and give attackers higher effort than gatherers when a choice exists.
