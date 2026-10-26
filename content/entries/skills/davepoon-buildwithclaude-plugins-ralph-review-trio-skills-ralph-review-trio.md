---
slug: davepoon-buildwithclaude-plugins-ralph-review-trio-skills-ralph-review-trio
name: ralph-review-trio
tagline: "Run a sequential three-tier code review on a finished implementation
  branch — Haiku (surface) → Sonnet (logic) → Opus (deep). Restarts from Tier 1
  on "
summary: "- An implementation is code-complete on a feature / solo branch. - All
  acceptance criteria for the underlying issue are believed satisfied. -
  Pre-merge verification is needed before human review or merge-to-main. -
  Yo..."
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
  subpath: plugins/ralph-review-trio/skills/ralph-review-trio
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
  path: plugins/ralph-review-trio/skills/ralph-review-trio/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.624Z
  truncated: false
type: agent_skill
skill:
  skill_name: ralph-review-trio
  description: Run a sequential three-tier code review on a finished
    implementation branch — Haiku (surface) → Sonnet (logic) → Opus (deep).
    Restarts from Tier 1 on any tier failure. Use when a solo branch or PR is
    code-complete and you want structured pre-merge verification before human
    review.
  folder_path: plugins/ralph-review-trio/skills/ralph-review-trio
  extra_files:
    - assets/example-transcript.md
    - references/_common-culprits.md
    - references/haiku-checklist.md
    - references/opus-checklist.md
    - references/sonnet-checklist.md
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Ralph Review Trio
This skill triggers `/ralph-review`, which runs three sequential reviewer subagents at increasing depth. If any tier flags a failure, the loop restarts from Tier 1 after fixes.

## When to trigger

- An implementation is code-complete on a feature / solo branch.
- All acceptance criteria for the underlying issue are believed satisfied.
- Pre-merge verification is needed before human review or merge-to-main.
- You want structured evidence that each tier's checklist was walked.

## When NOT to trigger

- Work-in-progress branches mid-implementation — Ralph assumes the change is complete.
- Documentation-only diffs with no code — Tier 2/3 still run but most checks short-circuit to "doc-only PR" exemption; overkill for a single README edit.
- Hotfix branches where speed dominates verification — use the project's normal PR review.

## How it works

```
/ralph-review
    │
    ▼
  Tier 1  — Haiku  (surface checks)   ─── fail ──> restart
    │  pass
    ▼
  Tier 2  — Sonnet (logic checks)     ─── fail ──> restart
    │  pass
    ▼
  Tier 3  — Opus   (deep analysis)    ─── fail ──> restart
    │  pass
    ▼
  RALPH_PASS  →  merge OK
```

A `<promise>HAIKU_PASS</promise>` / `<promise>SONNET_PASS</promise>` / `<promise>OPUS_PASS</promise>` token is emitted by each tier on pass. All three required for overall pass.

## Entry point

`/ralph-review` — defined in `../../commands/ralph-review.md`.

## Per-tier checklists

- `../../agents/haiku-reviewer.md` — Tier 1 surface checklist
- `../../agents/sonnet-reviewer.md` — Tier 2 logic checklist
- `../../agents/opus-reviewer.md` — Tier 3 deep-analysis checklist

Extended reference content under `references/` (same dir as this SKILL.md) is loaded on demand by each tier when a specific check requires more context.

## Outputs

Each tier writes a fenced `## RESULT` block with:

```
## RESULT
mcp_graph_available: yes|no      # first line when discussing graph queries
verdict: pass|fail|unknown
files_touched: [paths]
findings: [{path, line, claim, evidence}]
scope_gaps: [list or "none"]
```

The main agent reads the RESULT block and decides next action (restart, next tier, or PASS).
