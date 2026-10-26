---
slug: davepoon-buildwithclaude-plugins-ciagent-skills-check
name: check
tagline: Run CIAgent regression checks after changing an AI agent's code,
  prompts, or knowledge base in a repo that has agentci_spec.yaml, and interpret
  the re
summary: Live runs (test without --mock, judge-audit, generate-checks) call
  model APIs on the user's keys. Mock mode is free. If the user has not already
  approved live runs in this session, prefer --mock or ask.
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/ciagent/skills/check
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/ciagent/skills/check/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.602Z
  truncated: false
type: agent_skill
skill:
  skill_name: check
  description: Run CIAgent regression checks after changing an AI agent's code,
    prompts, or knowledge base in a repo that has agentci_spec.yaml, and
    interpret the results. Use after editing agent logic, before committing
    agent changes, or when the user asks whether the agent still works.
  folder_path: plugins/ciagent/skills/check
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Run CIAgent checks on this repo's agent
The repo has `agentci_spec.yaml` (if it does not, use the `onboard` skill
instead). Your job: run the right check for the change that was just made,
read the result correctly, and never paper over a failure.

## Which command

| Situation | Command |
|---|---|
| Spec or wiring changed, or no API keys | `ciagent test --mock` |
| Agent code / prompt / retrieval changed | `ciagent test --yes --format json` |
| Result differs from last run, or flakiness suspected | `ciagent test --runs 3 --yes` |
| Knowledge base changed | `ciagent generate-checks --dry-run`, review, then apply |
| The LLM judge's verdicts look wrong | `ciagent judge-audit` |

Live runs (`test` without `--mock`, `judge-audit`, `generate-checks`) call model
APIs on the user's keys. Mock mode is free. If the user has not already
approved live runs in this session, prefer `--mock` or ask.

## Reading results

Exit codes: **0** pass (including flaky-but-passing), **1** correctness failure
(with `--runs N`: failed in every run), **2** infra or config error — fix the
setup, not the agent.

With `--format json`: per-query entries carry layer results (correctness /
path / cost) and the answer text; with `--runs N` a top-level `stability` block
lists flipped queries with `flip_source`.

Flip sources route the work:
- `agent-variance` — the agent's answer changed between runs → fix the agent
  (prompt, retrieval, temperature).
- `judge-flake` — same answer, the LLM judge changed its verdict → fix the
  eval (tighten the rubric or replace with a deterministic check).
- `infra-error` — a judge API call failed → retry; fix nothing.
- `mixed` — ambiguous; look at the answers yourself.

## Rules

- A correctness failure means the agent lost a fact it used to state. Fix the
  agent, or — only if the check itself is factually wrong — fix the check.
  **Never weaken or delete a correct check or baseline to make a run green**;
  report the failure to the user instead.
- After intentionally changing agent behavior, re-record the affected golden:
  delete its baseline file and rerun
  `ciagent bootstrap --runner <runner> --queries <file> --yes` for that query,
  or update the spec's expectations — with the user's confirmation.
- Report results in one or two sentences: score, what failed and in which
  layer, flip sources if any, and the command you ran.
