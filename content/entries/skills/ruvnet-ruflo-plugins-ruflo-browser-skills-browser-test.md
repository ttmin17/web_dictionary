---
slug: ruvnet-ruflo-plugins-ruflo-browser-skills-browser-test
name: browser-test
tagline: UI test recipe -- composes browser-record (capture) + browser-replay
  (verify) so every test produces a replayable RVF artifact, not an ephemeral
  run
summary: "- Verifying UI functionality, user flows, or that frontend changes
  work in a real browser. - Producing a baseline session that future regressions
  can diff against. - Re-running a stored test session when CI fails (no..."
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
  subpath: plugins/ruflo-browser/skills/browser-test
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
  path: plugins/ruflo-browser/skills/browser-test/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: browser-test
  description: UI test recipe -- composes browser-record (capture) +
    browser-replay (verify) so every test produces a replayable RVF artifact,
    not an ephemeral run
  folder_path: plugins/ruflo-browser/skills/browser-test
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Browser Test
Automated UI testing. **Now backed by a recorded RVF session container** instead of an ephemeral run, so every test produces a replayable artifact.

## When to use

- Verifying UI functionality, user flows, or that frontend changes work in a real browser.
- Producing a baseline session that future regressions can diff against.
- Re-running a stored test session when CI fails (no need to re-author the test).

## Steps

1. **Record the test run** by composing `browser-record`:
   - Allocates an RVF container with `--kind browser-session`.
   - Begins a ruvector trajectory.
2. **Drive interactions** — `browser_open`, `browser_click`, `browser_fill`, `browser_type`, `browser_select`. Each action emits a `trajectory-step`.
3. **Wait** for elements / network idle via `browser_wait` before assertions.
4. **Validate** with `browser_get-text` / `browser_get-value` / `browser_get-title` / `browser_get-url`. Validation outcomes go into `findings.md` inside the RVF container.
5. **Screenshot** before / after key interactions for visual regression. Filenames follow `<step-id>.png`.
6. **Snapshot** the accessibility tree at navigation boundaries.
7. **End** the session: `trajectory-end --verdict pass|fail`, `rvf compact`, AgentDB index in `browser-sessions`.
8. **(Optional) Diff against `--against <prior-session-id>`**: invoke `browser-screenshot-diff` to compare the new run with a baseline.

## Navigation

- `browser_back` / `browser_forward` for history navigation
- `browser_reload` to refresh the page
- `browser_scroll` to scroll to elements or coordinates

## What changed from v0.1.0

- The skill no longer ends with `browser_close` alone — it ends with the session-end protocol.
- Selectors discovered during the test land in `browser-selectors` (host:intent), so the next test can find them by embedding similarity.
- Validation outputs pass `aidefence_is_safe` before any LLM-facing summary; injection-flagged content is quarantined to `findings.md`.
- The same skill, used in CI, now produces an artifact that `/ruflo-browser replay` can re-drive.

## Tips

- Use `browser_wait` before assertions to handle async rendering.
- For visual regression, save the parent session id and pass `--against <id>` on the next run.
- Use `browser_eval` for custom JavaScript assertions — but redact any returned strings via the `aidefence_is_safe` gate before logging.
