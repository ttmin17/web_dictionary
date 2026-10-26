---
slug: affaan-m-ecc-skills-orch-refine-code
name: orch-refine-code
tagline: Orchestrate a behavior-preserving refactor — confirm tests are green,
  restructure without changing behavior, keep tests green, review, and gated
  commi
summary: "- Same behavior, better structure: extract modules, remove
  duplication, kill dead code, reduce nesting, rename for clarity. - Distinguish
  from siblings: if behavior is meant to change at all, this is the wrong skill
  (..."
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: skills/orch-refine-code
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: skills/orch-refine-code/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.038Z
  truncated: false
type: agent_skill
skill:
  skill_name: orch-refine-code
  description: Orchestrate a behavior-preserving refactor — confirm tests are
    green, restructure without changing behavior, keep tests green, review, and
    gated commit. Use when the structure should improve but behavior must not
    change.
  folder_path: skills/orch-refine-code
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# orch-refine-code
Actor · action · target: **orch · refine · code**. Thin wrapper over the shared
engine in [`orch-pipeline`](https://github.com/affaan-m/ECC/blob/main/skills/orch-refine-code/../orch-pipeline/SKILL.md).

## When to Use

- Same behavior, **better structure**: extract modules, remove duplication, kill
  dead code, reduce nesting, rename for clarity.
- Distinguish from siblings: if behavior is meant to change at all, this is the
  wrong skill (`orch-change-feature` / `orch-fix-defect`).

## Operation settings

- **Default size floor:** standard — restructures touch multiple files.
- **Phase mask:** 0 → 2 (plan the restructure) → 4 (keep green) → 5 → 6. No new
  behavior tests are written — the existing suite is the safety net.
- **First move (phase 4):** confirm the relevant tests exist and are **green
  before** touching code; if coverage is thin, add characterization tests first.
  Then restructure in small steps, re-running tests after each.

## How It Works

1. Run the `orch-pipeline` engine with the settings above.
2. For dead-code / duplication sweeps, delegate to the `refactor-cleaner` agent
   (it runs knip / depcheck / ts-prune and removes safely).
3. Stop at **Gate 1** (restructure plan) and **Gate 2** (pre-commit).
4. Commit as `refactor:` — the diff must be behavior-neutral.

## Example

```
orch-refine-code: extract the NWS HTTP client out of poller.py
→ confirm tests green → plan extraction  [GATE 1: approve]
→ move in small steps, tests green throughout → code-review
→ commit refactor:  [GATE 2: confirm]
```
