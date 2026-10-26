---
slug: affaan-m-ecc-skills-orch-fix-defect
name: orch-fix-defect
tagline: Orchestrate fixing a bug — reproduce it as a failing regression test,
  fix to green, review, and gated commit — by delegating each phase to the
  matchin
summary: "- Something is broken: wrong output, an error, a crash, a regression.
  - Distinguish from siblings: - behavior is correct but you want it different →
  orch-change-feature. - the capability does not exist yet → orch-add-..."
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
  subpath: skills/orch-fix-defect
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
  path: skills/orch-fix-defect/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.038Z
  truncated: false
type: agent_skill
skill:
  skill_name: orch-fix-defect
  description: Orchestrate fixing a bug — reproduce it as a failing regression
    test, fix to green, review, and gated commit — by delegating each phase to
    the matching ECC agent. Use when existing behavior is broken or wrong.
  folder_path: skills/orch-fix-defect
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# orch-fix-defect
Actor · action · target: **orch · fix · defect**. Thin wrapper over the shared
engine in [`orch-pipeline`](https://github.com/affaan-m/ECC/blob/main/skills/orch-fix-defect/../orch-pipeline/SKILL.md).

## When to Use

- Something is **broken**: wrong output, an error, a crash, a regression.
- Distinguish from siblings:
  - behavior is correct but you want it different → `orch-change-feature`.
  - the capability does not exist yet → `orch-add-feature`.

## Operation settings

- **Default size floor:** small (often trivial).
- **Phase mask:** 0 → (light 2 only if root cause is non-obvious or standard+) →
  4 → 5 → 6. Research (1) is usually skipped.
- **First move (phase 4):** reproduce the bug as a **new failing** test
  (regression test), then fix until it goes green. Proving the bug exists first
  is what separates a fix from a tweak.

## How It Works

1. Run the `orch-pipeline` engine with the settings above.
2. If the root cause is unclear, scope it with `code-explorer` before the red
   test; escalate build breaks to `build-error-resolver` / `/build-fix`.
3. Stop at **Gate 1** (only if a plan was produced) and **Gate 2** (pre-commit).
4. Add `security-reviewer` if the defect sits in a security-sensitive path.

## Example

```
orch-fix-defect: poller crashes on empty NWS response
→ write failing test reproducing the crash → fix to green
→ code-review → commit  [GATE 2: confirm]   (commit: fix:)
```
