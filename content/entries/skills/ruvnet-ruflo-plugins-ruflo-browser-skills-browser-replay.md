---
slug: ruvnet-ruflo-plugins-ruflo-browser-skills-browser-replay
name: browser-replay
tagline: Replay a recorded session trajectory against the same URL or a mutated
  variant; uses browser-selectors embedding similarity to recover from DOM drift
summary: "- Regression-testing a UI flow after a deploy. - Reproducing a bug
  captured in a prior session. - Comparing two runs of the same flow for
  browser-screenshot-diff. - Forking a session (/ruflo-browser fork) and
  replayin..."
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
  subpath: plugins/ruflo-browser/skills/browser-replay
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
  path: plugins/ruflo-browser/skills/browser-replay/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: browser-replay
  description: Replay a recorded session trajectory against the same URL or a
    mutated variant; uses browser-selectors embedding similarity to recover from
    DOM drift
  folder_path: plugins/ruflo-browser/skills/browser-replay
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Browser Replay
Re-drive a recorded session trajectory. Used for regression testing, deterministic re-runs, and as the verification path that `browser-record` plus `browser-selectors` actually produces something replayable.

> **This skill is the load-bearing assumption of the v0.2.0 architecture.** ADR-0001 Verification §4 requires ≥80% replay success across 10 distinct sites of varying drift profiles before the proposal moves from `Proposed` → `Accepted`. If you find replay unreliable, capture the failure modes in `findings.md` and report them up the ADR.

## When to use

- Regression-testing a UI flow after a deploy.
- Reproducing a bug captured in a prior session.
- Comparing two runs of the same flow for `browser-screenshot-diff`.
- Forking a session (`/ruflo-browser fork`) and replaying the parent before mutating.

## Steps

1. **Locate the source session**:
   ```bash
   npx -y ruvector@0.2.27 rvf status <session-id>.rvf
   ```
2. **Load the trajectory**:
   ```bash
   Read .../trajectory.ndjson
   ```
   Each line is `{ts, action, args, selector, result}`.
3. **Open a fresh browser** via `mcp__plugin_ruflo-core_ruflo__browser_open` (target URL = original or `--url` override).
4. **For each trajectory step**, dispatch the matching MCP tool (`browser_click`, `browser_fill`, `browser_eval`, etc.) with the recorded args.
5. **On selector miss**, do *not* fail immediately — query the `browser-selectors` namespace for an embedding-similar selector for the same `<host>:<intent>` and retry once:
   ```bash
   npx -y @claude-flow/cli@latest memory search --namespace browser-selectors \
     --query "<host> <intent>" --limit 5
   ```
6. **Record a new trajectory** for the replay run (allocate a fresh RVF container, lineage-tracked via `rvf derive`).
7. **Verdict**: tally matched-step / total-step ratio. Default tolerance threshold is 0.85 (configurable via `--tolerance`). Verdict goes into `findings.md`.

## Caveats

- Browserbase explicitly does not offer replay (rrweb session replay was deprecated). We're betting on selector-embedding recovery; expect noise on heavily drifted sites.
- Network nondeterminism (timing, content variation) can produce false-fail verdicts. Use `--mutate` to inject expected variation or pin to a fixture.
- For visual diff, chain into `browser-screenshot-diff` against the parent session id.
- If selector recovery requires more than one retry per step, log it. That's the signal that the site needs a re-record, not a replay.
