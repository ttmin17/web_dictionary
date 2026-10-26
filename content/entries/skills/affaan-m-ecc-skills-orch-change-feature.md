---
slug: affaan-m-ecc-skills-orch-change-feature
name: orch-change-feature
tagline: Orchestrate altering an existing, working feature to new desired
  behavior — update its tests to the new spec, change the implementation to
  match, revi
summary: '- An existing feature works, but the desired behavior is different
  ("change", "adjust", "make it also …", "instead of X do Y"). - Distinguish
  from siblings: - not broken → not orch-fix-defect (no bug to reproduce). -...'
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
  subpath: skills/orch-change-feature
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
  path: skills/orch-change-feature/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.038Z
  truncated: false
type: agent_skill
skill:
  skill_name: orch-change-feature
  description: Orchestrate altering an existing, working feature to new desired
    behavior — update its tests to the new spec, change the implementation to
    match, review, and gated commit. Use when behavior is not broken but should
    be different.
  folder_path: skills/orch-change-feature
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# orch-change-feature
Actor · action · target: **orch · change · feature**. Thin wrapper over the
shared engine in [`orch-pipeline`](https://github.com/affaan-m/ECC/blob/main/skills/orch-change-feature/../orch-pipeline/SKILL.md).

## When to Use

- An existing feature **works**, but the desired behavior is different ("change",
  "adjust", "make it also …", "instead of X do Y").
- Distinguish from siblings:
  - **not** broken → not `orch-fix-defect` (no bug to reproduce).
  - **not** new → not `orch-add-feature` (the capability already exists).

## Operation settings

- **Default size floor:** small — most tweaks are a function or two.
- **Phase mask:** 0 → (1 only if the new behavior needs research) → light 2 →
  4 → 5 → 6.
- **First move (phase 4):** update the *existing* tests to express the new
  desired behavior, then change the implementation until they pass. Changing the
  tests first is what separates a tweak from a fix.

## How It Works

1. Run the `orch-pipeline` engine with the settings above.
2. Keep the plan light — only `standard`+ size warrants the full `planner` pass.
3. Stop at **Gate 1** (plan / changed-test approval) and **Gate 2** (pre-commit).
4. Add `security-reviewer` if the change touches a security trigger.

## Example

```
orch-change-feature: make nws-poller alert at 2 warnings instead of 3
→ update threshold tests to new spec → change impl to green
→ code-review → commit  [GATE 2: confirm]
```
