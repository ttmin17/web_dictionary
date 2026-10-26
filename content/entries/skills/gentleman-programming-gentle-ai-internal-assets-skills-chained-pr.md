---
slug: gentleman-programming-gentle-ai-internal-assets-skills-chained-pr
name: chained-pr
tagline: Agent skill from Gentleman-Programming/gentle-ai
summary: Agent skill from Gentleman-Programming/gentle-ai
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agents
  - ai-coding
  - claude-code
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: Gentleman-Programming/gentle-ai
  subpath: internal/assets/skills/chained-pr
  official_vendor: false
  license: MIT
signals:
  stars: 8020
  last_commit: 2026-10-26T04:03:33Z
  stars_delta_7d: 171
  stars_growth_pct: 2.2
  trending_score: 174.73
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7736
    - 7849
    - 8020
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Gentleman-Programming/gentle-ai
  path: internal/assets/skills/chained-pr/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:56.082Z
  truncated: false
type: agent_skill
skill:
  skill_name: chained-pr
  description: Agent skill from Gentleman-Programming/gentle-ai
  folder_path: internal/assets/skills/chained-pr
  extra_files:
    - references/chaining-details.md
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: gentleman-programming-gentle-ai
---

## Activation Contract

Load this skill when a planned PR may exceed **400 changed lines**, an ODD feature's forecast or running authored changed-line count from work-unit commits exceeds about 400, or the user asks for chained/stacked PRs, review slices, or reviewer-load control.

## Hard Rules

- Split PRs over **400 changed lines** unless a maintainer explicitly accepts `size:exception`.
- The budget constrains how work is **sliced**, never the code itself. Never delete comments, blank lines, docs, or tests, and never compress or restyle code, to fit under the budget.
- Slicing is bounded: make **one** honest slicing pass. If no cohesive split brings every slice within budget, stop iterating, keep the best cohesive split, and report the final line count with a `size:exception` recommendation.
- Keep each PR reviewable in about **≤60 minutes**.
- Use one deliverable work unit per PR; keep tests/docs with the unit they verify.
- State start, end, prior dependencies, follow-up work, and out-of-scope items in every chained PR.
- Every child PR must include a dependency diagram marking the current PR with `📍`.
- In Feature Branch Chain, create a draft/no-merge tracker PR; child PR #1 targets the tracker branch, later children target the immediate parent branch.
- Treat polluted diffs as base bugs: retarget or rebase until only the current work unit appears.
- Do not mix chain strategies after the user chooses one.

## Decision Gates

| Condition | Action |
|---|---|
| PR ≤400 changed lines and focused | Keep single PR. |
| PR >400, each slice can land independently | Use Stacked PRs to main. |
| PR >400, feature must integrate before main | Use Feature Branch Chain with tracker. |
| Generated/vendor/migration diff cannot split cleanly | Ask maintainer for `size:exception`. |
| No cohesive split fits the budget after one slicing pass | Stop; deliver the best split, report the overage and why it cannot shrink further, and recommend `size:exception`. |
| ODD provides `delivery_strategy` and `chain_strategy` | Follow them before the next work-unit commit or PR creation. |

## Execution Steps

1. Estimate changed lines and identify independent work units.
2. Ask for a chain strategy when none is cached and the budget is exceeded.
3. Create branches/PRs using the chosen strategy only.
4. Add Chain Context to each PR without replacing the repo PR template.
5. Verify each PR independently: CI/tests/docs/manual checks, rollback scope, and clean diff.
6. Keep tracker PR draft/no-merge until all child PRs are reviewed and integrated.

## Output Contract

Return the chosen strategy, PR order, current PR boundary, dependency diagram, review budget (`additions + deletions`), verification plan, and any `size:exception` rationale.

## References

- [references/chaining-details.md](https://github.com/Gentleman-Programming/gentle-ai/blob/main/internal/assets/skills/chained-pr/references/chaining-details.md) — strategy diagrams, PR body section, branch commands, and reviewer guidance.
