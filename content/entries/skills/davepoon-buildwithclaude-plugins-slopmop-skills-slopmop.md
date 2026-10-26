---
slug: davepoon-buildwithclaude-plugins-slopmop-skills-slopmop
name: slopmop
tagline: Trigger when you would normally reach for pytest, gh, mypy, black, or
  other raw repo tooling. Redirect to `sm swab`, `sm scour`, `sm buff`, `sm
  sail`,
summary: "Slop-mop (sm) has two primary modes: refit (one-time onboarding) and
  maintenance (steady-state development). Refit remediates all existing slop and
  installs permanent guards; the swab/scour/buff loop then keeps the re..."
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
  subpath: plugins/slopmop/skills/slopmop
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
  path: plugins/slopmop/skills/slopmop/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.624Z
  truncated: false
type: agent_skill
skill:
  skill_name: slopmop
  description: Trigger when you would normally reach for pytest, gh, mypy, black,
    or other raw repo tooling. Redirect to `sm swab`, `sm scour`, `sm buff`, `sm
    sail`, `sm refit`, or `sm doctor` so remediation follows the established
    rails. Also trigger when filing issues about slop-mop friction — use `sm
    barnacle file` / `/slopmop:sm-barnacle`, never `gh issue create`.
  folder_path: plugins/slopmop/skills/slopmop
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Slop-mop skill
> **Filing slop-mop friction?** Use `/slopmop:sm-barnacle` or `sm barnacle file` — **never `gh issue create` directly**. The barnacle CLI auto-applies the correct labels and targets the right repo regardless of where you are.

Slop-mop (`sm`) has two primary modes: **refit** (one-time onboarding) and **maintenance** (steady-state development). Refit remediates all existing slop and installs permanent guards; the swab/scour/buff loop then keeps the repo clean as you work.

## When to use

- **Default action**: Run `sm sail` when you're not sure what's next — it reads workflow state and does the right thing.
- **Refit (step 0)**: Run `sm refit --start` to generate a remediation plan, then `sm refit --iterate` until complete, then `sm refit --finish` to enter maintenance.
- **During implementation**: Run `sm swab` after every meaningful code change. Keep running until clean.
- **Before PR**: Run `sm scour` for a comprehensive sweep.
- **After CI/review**: Run `sm buff <PR_NUMBER>` to convert feedback into next steps.

## The maintenance loop

```
Fastest path:  sm sail → fix what it finds → sm sail → repeat until PR lands
Manual path:   write code → sm swab → fix → repeat → sm scour → sm buff <PR#>
```

`sm sail` automates verb selection. Use individual verbs (`sm swab -g <gate>`, `sm buff resolve`, etc.) for surgical work.

## Refit (before entering the loop)

Refit is not part of the maintenance loop. It is step 0 — how you earn the right to enter the loop.

```
sm refit --start → fix one gate → sm refit --iterate → ... → sm refit --finish
```

## Prerequisite

The `sm` CLI must be installed in the user's environment. If invocation fails with "command not found", suggest:

```bash
pipx install slopmop[all]
```

Then re-run the command.

## Safety

- Never bypass or silence a failing check — that's how repo rot compounds.
- If a gate seems wrong, tune it or file a bug. Don't disable it as a workaround.
- Report friction (invalid guidance, broken state, blocked rails) via `/slopmop:sm-barnacle` rather than working around it.

## Reference

Full project docs: https://github.com/ScienceIsNeato/slop-mop
Workflow state machine: https://github.com/ScienceIsNeato/slop-mop/blob/main/DOCS/WORKFLOW.md
Gate reasoning: https://github.com/ScienceIsNeato/slop-mop/blob/main/DOCS/GATE_REASONING.md
