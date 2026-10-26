---
slug: ruvnet-ruflo-plugins-ruflo-browser-skills-browser-screenshot-diff
name: browser-screenshot-diff
tagline: Visual + DOM diff between two recorded sessions at matching trajectory
  step ids; used for visual regression and replay verification
summary: "- Visual regression after a UI change (record before, record after,
  diff). - Verifying a browser-replay run matches the parent session within
  tolerance. - Comparing two A/B variants of the same form flow."
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-browser/skills/browser-screenshot-diff
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-browser/skills/browser-screenshot-diff/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: browser-screenshot-diff
  description: Visual + DOM diff between two recorded sessions at matching
    trajectory step ids; used for visual regression and replay verification
  folder_path: plugins/ruflo-browser/skills/browser-screenshot-diff
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Browser Screenshot Diff
Compare two recorded sessions step-by-step. Pairs each step in session A to the same `step-id` in session B, diffs the captured screenshot and accessibility snapshot, reports the first divergence and an aggregate similarity score.

## When to use

- Visual regression after a UI change (record before, record after, diff).
- Verifying a `browser-replay` run matches the parent session within tolerance.
- Comparing two A/B variants of the same form flow.

## Steps

1. **Locate both RVF containers**:
   ```bash
   npx -y ruvector@0.2.27 rvf status <session-id-a>.rvf
   npx -y ruvector@0.2.27 rvf status <session-id-b>.rvf
   ```
2. **Load both trajectories** from `trajectory.ndjson`. Build a `step-id → (screenshot_path, snapshot_path)` map for each.
3. **Pair steps** by `step-id`. Steps that exist on only one side are flagged as `unmatched` and contribute to the divergence score.
4. **Pixel diff** (`--mode pixel|both`): compare the two PNGs at each step. Report `mse`, `psnr`, and the bounding box of the largest diff cluster. Threshold default `0.02` (2% of pixels).
5. **DOM diff** (`--mode dom|both`): compare the accessibility snapshots node-by-node. Report added / removed / changed nodes with their accessible names.
6. **Aggregate similarity**: weighted average across matched steps, weighted by step duration. Verdict goes into a new `findings.md` under a fresh RVF container so the diff itself is replayable.
7. **Persist** the diff verdict in `browser-sessions` under both source ids' tags so future searches surface "ran a diff against session X".

## Caveats

- Pixel diff is sensitive to font hinting, antialiasing, and scrollbar position. Keep viewport pinned across both sessions.
- DOM diff over Playwright's accessibility tree is more stable than HTML diff. Prefer it.
- This skill does not handle dynamic content (clocks, ads); add ignore regions to the field map or pre-process snapshots before diffing.
- The `browser_screenshot_diff` MCP tool is **not** planned (ADR-0001 §7); the skill operates against locally-saved RVF artifacts and uses `browser_eval` only for live verification.
