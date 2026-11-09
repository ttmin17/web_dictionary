---
slug: gentleman-programming-gentle-ai-internal-assets-skills-hermes-ephemeral-delegation
name: hermes-ephemeral-delegation
tagline: "Trigger: a mapping need, parallel units, context backstop, high-risk
  verify, fresh review, or multi-step debug. Delegate via delegate_task for a
  named"
summary: "Load this skill when you are acting as the parent orchestrator and the
  work ahead has a named reason to delegate:"
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agents
  - ai-coding
  - claude-code
status: active
quality_percentile: 88
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: Gentleman-Programming/gentle-ai
  subpath: internal/assets/skills/hermes-ephemeral-delegation
  official_vendor: false
  license: MIT
signals:
  stars: 8636
  last_commit: 2026-11-08T21:57:39Z
  stars_delta_7d: 301
  stars_growth_pct: 3.6
  trending_score: 311.87
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7849
    - 8020
    - 8335
    - 8636
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Gentleman-Programming/gentle-ai
  path: internal/assets/skills/hermes-ephemeral-delegation/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:53.522Z
  truncated: false
type: agent_skill
skill:
  skill_name: hermes-ephemeral-delegation
  description: "Trigger: a mapping need, parallel units, context backstop,
    high-risk verify, fresh review, or multi-step debug. Delegate via
    delegate_task for a named reason."
  folder_path: internal/assets/skills/hermes-ephemeral-delegation
  extra_files:
    - references/tuning-knobs.md
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: gentleman-programming-gentle-ai
---

## Activation Contract

Load this skill when you are acting as the parent orchestrator and the work ahead has a named reason to delegate:

- A map you need to decide or route that exceeds the inline evidence budget (codebase mapping, approach comparison); never to read files you will read anyway before writing inline
- A writer reason: 2+ independent units of behavior (code, tests, and docs together; each several minutes of work) launched together, or the context backstop; a large task alone is tracked, not delegated
- A high-risk change that needs an independent verifier, or a large task's long suites and builds
- Fresh adversarial review (diffs, PR readiness, incident audit); never restart it automatically for a candidate whose terminal `approved` authority was already burned and that is unchanged since, unless a new independent review is deliberately requested
- Multi-step debugging that would flood the parent context

Do NOT load this skill if you are already inside a delegated child task — you are the executor, not the orchestrator.

## Hard Rules

- Use `delegate_task` only for a named reason listed above. Without one, work inline following your logbook; file count, size, or a large task alone is never a reason.
- Workers are EPHEMERAL: each `delegate_task` call creates a fresh context. Do NOT request persistent agent files or profiles.
- Pass a self-contained mission. Workers have no memory of the parent conversation.
- Treat worker output as self-report: verify file writes, test pass/fail, URLs, and IDs before reporting success to the user.
- Batch parallel calls only for INDEPENDENT workstreams. Sequential dependencies must run sequentially.

## Decision Gates

| Situation | Action |
|-----------|--------|
| Need a map to decide or route beyond the inline evidence budget | Delegate a narrow exploration worker |
| A large (tracked) task | Track it; delegate a writer only for a reason (parallel units or context) with the full mission |
| A small task's focused test and suite | Run inline, once each |
| A high-risk change or a large task's long suites | Delegate an executor |
| Need an adversarial review of a diff | Delegate a fresh-context reviewer |
| Multi-step debug that grows the context | Delegate a debug worker; feed results back inline |
| An understood change, even across files, with no named reason | Do it inline; no delegation needed |
| Quick git/state check | Do it inline; no delegation needed |

## Execution Steps

1. Identify which gate applies. If none applies, skip delegation.
2. Draft a self-contained mission for the worker — include:
   - Exact goal (one sentence)
   - File paths or targets to act on
   - Relevant prior context the worker needs (decisions, conventions, prior findings)
   - Constraints (style, budget)
   - For a writer: the applicable test-first policy and runner from `## Implementation Routing`. Write one RED test per requested rule; for every existing command or option the change touches, add one test proving its previous behavior still holds; add no other cases; update help text and docs for any changed command, option, or message
   - For a verifier: the **Verify handoff** from the Delegated Verification Gate (the whole feature document, the baseline commit, the probe command forms, first-launch probes in a `mktemp -d` scratch copy never inside the workspace, and its severity rules)
   - Expected evidence to return (e.g., file written, test output, URL found)
   - Allowed toolsets/MCP/skills the worker should use
   - Any `SKILL.md` paths to load before work
3. Call `delegate_task` with that mission.
4. Wait for the worker summary.
5. Verify the claimed output (check file existence, test result, side effect).
6. Synthesize the verified result into your orchestrator reply.

## Output Contract

After synthesizing worker results, return:

- What was delegated and to how many workers
- What each worker returned (verified, not just claimed)
- Any discrepancy between worker self-report and verified evidence
- Final answer or next step for the user

## References

- [references/tuning-knobs.md](https://github.com/Gentleman-Programming/gentle-ai/blob/main/internal/assets/skills/hermes-ephemeral-delegation/references/tuning-knobs.md) — Full table of `delegate_task` configuration parameters and the explicit toolset/MCP/skill checklist for worker missions.
