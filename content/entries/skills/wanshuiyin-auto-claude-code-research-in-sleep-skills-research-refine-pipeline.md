---
slug: wanshuiyin-auto-claude-code-research-in-sleep-skills-research-refine-pipeline
name: research-refine-pipeline
tagline: Run an end-to-end workflow that chains `research-refine` and
  `experiment-plan`. Use when the user wants a one-shot pipeline from vague
  research direct
summary: "Refine and concretize: $ARGUMENTS"
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
  subpath: skills/research-refine-pipeline
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
  path: skills/research-refine-pipeline/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:53.560Z
  truncated: false
type: agent_skill
skill:
  skill_name: research-refine-pipeline
  description: Run an end-to-end workflow that chains `research-refine` and
    `experiment-plan`. Use when the user wants a one-shot pipeline from vague
    research direction to focused final proposal plus detailed experiment
    roadmap, or asks to "串起来", build a pipeline, do it end-to-end, or generate
    both the method and experiment plan together.
  folder_path: skills/research-refine-pipeline
  extra_files: []
  pack_total_skills: 87
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wanshuiyin-auto-claude-code-research-in-sleep
---

# Research Refine Pipeline: End-to-End Method and Experiment Planning
> **Before each reviewer slot**, follow [Selectable Reviewers](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/blob/main/skills/research-refine-pipeline/../shared-references/reviewer-backends.md):
> resolve invocation → `.aris/reviewer.json` → Claude Code default (Codex MCP)
> with `reviewer_route.py` through the canonical helper resolver, preserving this
> slot's tier, fresh contexts, source/image inputs and deterministic gates.
> Codex examples/pins below apply only to `backend=codex`; other routes use their
> own first-call/reply contract. Save the route and actual returned identity;
> unavailable selections are `REVIEW_UNAVAILABLE`. Classify acceptance from actual
> families/completion/scope. Forward invocation reviewer/model/effort overrides
> to reviewer-bearing children. Generation workers are unchanged.


Refine and concretize: **$ARGUMENTS**

## Overview

Use this skill when the user does not want to stop at a refined method. The goal is to produce a coherent package that includes:

- a problem-anchored, elegant final proposal
- the review history explaining why the method is focused
- a detailed experiment roadmap tied to the paper's claims
- a compact pipeline summary that says what to run next

This skill composes two existing workflows:

1. `research-refine` for method refinement
2. `experiment-plan` for claim-driven validation planning

For stage-specific detail, read these sibling skills only when needed:

- `../research-refine/SKILL.md`
- `../experiment-plan/SKILL.md`

## Core Rule

Do not plan a large experiment suite on top of an unstable method. First stabilize the thesis. Then turn the stable thesis into experiments.

## Default Outputs

- `refine-logs/FINAL_PROPOSAL.md`
- `refine-logs/REVIEW_SUMMARY.md`
- `refine-logs/REFINEMENT_REPORT.md`
- `refine-logs/EXPERIMENT_PLAN.md`
- `refine-logs/EXPERIMENT_TRACKER.md`
- `refine-logs/PIPELINE_SUMMARY.md`

## Workflow

### Phase 0: Triage the Starting Point

- Extract the problem, rough approach, constraints, resources, and target venue.
- Check whether `refine-logs/FINAL_PROPOSAL.md` already exists and still matches the current request.
- If the proposal is missing, stale, or materially different from the current request, run the full `research-refine` stage.
- If the proposal is already strong and aligned, reuse it and jump to experiment planning.
- If in doubt, prefer re-running `research-refine` rather than planning experiments for the wrong method.

### Phase 1: Method Refinement Stage

Run the `research-refine` workflow and keep its V3 philosophy intact:

- preserve the Problem Anchor
- prefer the smallest adequate mechanism
- keep one dominant contribution
- modernize only when it improves the paper

Exit this stage only when these are explicit:

- the final method thesis
- the dominant contribution
- the complexity intentionally rejected
- the key claims and must-run ablations
- the remaining risks, if any

If the verdict is still `REVISE`, continue into experiment planning only if the remaining weaknesses are clearly documented.

### Phase 2: Planning Gate

Before the experiment stage, write a short gate check:

- What is the final method thesis?
- What is the dominant contribution?
- What complexity was intentionally rejected?
- Which reviewer concerns still matter for validation?
- Is a frontier primitive central, optional, or absent?

If these answers are not crisp, tighten the final proposal first.

### Phase 3: Experiment Planning Stage

Run the `experiment-plan` workflow grounded in:

- `refine-logs/FINAL_PROPOSAL.md`
- `refine-logs/REVIEW_SUMMARY.md`
- `refine-logs/REFINEMENT_REPORT.md`

Ensure the experiment plan covers:

- the main anchor result
- novelty isolation
- a simplicity or deletion check
- a frontier necessity check if applicable
- run order, budget, and decision gates

### Phase 4: Integration Summary

Write `refine-logs/PIPELINE_SUMMARY.md`:

```markdown
# Pipeline Summary

**Problem**: [problem]
**Final Method Thesis**: [one sentence]
**Final Verdict**: [READY / REVISE / RETHINK]
**Date**: [today]

## Final Deliverables
- Proposal: `refine-logs/FINAL_PROPOSAL.md`
- Review summary: `refine-logs/REVIEW_SUMMARY.md`
- Experiment plan: `refine-logs/EXPERIMENT_PLAN.md`
- Experiment tracker: `refine-logs/EXPERIMENT_TRACKER.md`

## Contribution Snapshot
- Dominant contribution:
- Optional supporting contribution:
- Explicitly rejected complexity:

## Must-Prove Claims
- [Claim 1]
- [Claim 2]

## First Runs to Launch
1. [Run]
2. [Run]
3. [Run]

## Main Risks
- [Risk]:
- [Mitigation]:

## Next Action
- Proceed to `/run-experiment`
```

### Phase 5: Present a Brief Summary to the User

```
Pipeline complete.

Method output:
- refine-logs/FINAL_PROPOSAL.md

Experiment output:
- refine-logs/EXPERIMENT_PLAN.md
- refine-logs/EXPERIMENT_TRACKER.md

Pipeline summary:
- refine-logs/PIPELINE_SUMMARY.md

Best next step:
- /run-experiment
```

## Output Protocols

> Follow these shared protocols for all output files:
> - **[Output Versioning Protocol](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/blob/main/skills/research-refine-pipeline/../shared-references/output-versioning.md)** — write timestamped file first, then copy to fixed name
> - **[Output Manifest Protocol](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/blob/main/skills/research-refine-pipeline/../shared-references/output-manifest.md)** — log every output to MANIFEST.md
> - **[Output Language Protocol](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/blob/main/skills/research-refine-pipeline/../shared-references/output-language.md)** — respect the project's language setting

## Key Rules

- **Large file handling**: If the Write tool fails due to file size, immediately retry using Bash (`cat << 'EOF' > file`) to write in chunks. Do NOT ask the user for permission — just do it silently.

- Do not let the experiment plan override the Problem Anchor.
- Do not widen the paper story after method refinement unless a missing validation block is truly necessary.
- Reuse the same claims across `FINAL_PROPOSAL.md`, `EXPERIMENT_PLAN.md`, and `PIPELINE_SUMMARY.md`.
- Keep the main paper story compact.
- If the method is intentionally simple, defend that simplicity in the experiment plan rather than adding new components.
- If the method uses a modern LLM / VLM / Diffusion / RL primitive, make its necessity test explicit.
- If the method does not need a frontier primitive, say that clearly and avoid forcing one.
- Prefer the staged skills when the user only needs one stage; use this skill for the integrated flow.

## Composing with Other Skills

```
/research-refine-pipeline -> one-shot method + experiment planning
/research-refine   -> method refinement only
/experiment-plan   -> experiment planning only
/run-experiment    -> execution
```
