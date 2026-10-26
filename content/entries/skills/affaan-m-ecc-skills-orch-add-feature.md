---
slug: affaan-m-ecc-skills-orch-add-feature
name: orch-add-feature
tagline: Orchestrate building a brand-new feature end to end — research, plan,
  TDD implementation, review, and gated commit — by delegating each phase to the
  m
summary: '- The user wants a capability that does not exist yet ("add", "build",
  "implement", "support …"). - It is net-new behavior — not a correction
  (orch-fix-defect) and not an alteration of existing behavior
  (orch-change-f...'
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
  subpath: skills/orch-add-feature
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
  path: skills/orch-add-feature/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.037Z
  truncated: false
type: agent_skill
skill:
  skill_name: orch-add-feature
  description: Orchestrate building a brand-new feature end to end — research,
    plan, TDD implementation, review, and gated commit — by delegating each
    phase to the matching ECC agent. Use when adding a capability that does not
    exist yet.
  folder_path: skills/orch-add-feature
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# orch-add-feature
Actor · action · target: **orch · add · feature**. Thin wrapper over the shared
engine in [`orch-pipeline`](https://github.com/affaan-m/ECC/blob/main/skills/orch-add-feature/../orch-pipeline/SKILL.md).

## When to Use

- The user wants a capability that does **not exist yet** ("add", "build",
  "implement", "support …").
- It is net-new behavior — not a correction (`orch-fix-defect`) and not an
  alteration of existing behavior (`orch-change-feature`).

## Operation settings

- **Default size floor:** standard — run Research + Plan unless clearly small.
- **Phase mask:** 0 → 1 → 2 → 4 → 5 → 6 (skip 3 Scaffold; that is MVP-only).
- **First move (phase 4):** write *new* failing tests for the new behavior, then
  implement to green.

## How It Works

1. Run the `orch-pipeline` engine with the settings above.
2. Classify size first; small / trivial features collapse toward 4 → 5 → 6.
3. Stop at **Gate 1** (plan approval) and **Gate 2** (pre-commit).
4. Add `security-reviewer` if the feature touches a security trigger.

> Related: `/feature-dev` is a standalone version of this flow. `orch-add-feature`
> differs by sharing the `orch-pipeline` engine — the size classifier and the two
> gates — with the rest of the family, so it right-sizes trivial features to 4 → 5 → 6.

## Example

```
orch-add-feature: add OAuth2 login to nws-poller
→ research existing auth libs → plan task_list  [GATE 1: approve]
→ TDD each task → code-review (+ security-reviewer: auth path)
→ commit  [GATE 2: confirm]
```
