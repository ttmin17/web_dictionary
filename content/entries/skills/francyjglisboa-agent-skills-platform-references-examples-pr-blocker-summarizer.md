---
slug: francyjglisboa-agent-skills-platform-references-examples-pr-blocker-summarizer
name: pr-blocker-summarizer
tagline: Summarizes open pull requests into a blockers-first standup digest.
  Activates when the user asks to summarize open PRs, find blocked pull
  requests, ge
summary: A bundled example skill — small but real, used to demonstrate the
  creator's validation, pipeline, and eval-rollout machinery.
categories:
  - other
status: active
quality_percentile: 31
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: FrancyJGLisboa/agent-skills-platform
  subpath: references/examples/pr-blocker-summarizer
  official_vendor: false
  license: MIT
signals:
  stars: 2403
  last_commit: 2026-09-15T17:31:46Z
  stars_delta_7d: 22
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 2403
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: FrancyJGLisboa/agent-skills-platform
  path: references/examples/pr-blocker-summarizer/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:19.696Z
  truncated: false
type: agent_skill
skill:
  skill_name: pr-blocker-summarizer
  description: Summarizes open pull requests into a blockers-first standup digest.
    Activates when the user asks to summarize open PRs, find blocked pull
    requests, generate a PR standup, or triage review backlog from a PR export.
  folder_path: references/examples/pr-blocker-summarizer
  extra_files:
    - README.md
    - VERIFICATION.md
    - contracts/data_contract_pull_request_reviews/.contract_id
    - contracts/data_contract_pull_request_reviews/code/contract_health.py
    - discovery.json
    - evals/golden/case-1/expected.json
    - evals/golden/case-1/input.json
    - evals/golden/case-2/expected.json
    - evals/golden/case-2/input.json
    - evals/golden/case-3/expected.json
tags: []
---

# PR Blocker Summarizer
Turn a JSON export of open pull requests into a blockers-first digest: which PRs
are blocked (failing checks, requested changes, or stale), which are ready to
merge, and a one-line count an agent can post to standup.

A bundled **example** skill — small but real, used to demonstrate the creator's
validation, pipeline, and eval-rollout machinery.

## Activation

Activates on "summarize open PRs", "what's blocking my PRs", "PR standup",
"review backlog". Do **not** activate on general git/GitHub questions unrelated to
triaging a set of PRs.

## Input

A JSON array of PRs, each with `title`, `state` (`open`), `checks`
(`passing`/`failing`), `review` (`approved`/`changes_requested`/`pending`), and
`age_days`. Missing fields are treated conservatively (counted as not-blocked only
when clearly ready).

## Run

```bash
python3 scripts/run_pipeline.py --input prs.json --output digest.json
```

Output JSON shape:

```json
{
  "total": 7,
  "blocked": [{"title": "...", "reasons": ["failing checks"]}],
  "ready": ["..."],
  "summary": "7 open · 3 blocked · 2 ready to merge"
}
```

## Gotchas

- **`blocked` + `ready` does not equal `total`.** A PR is `ready` only when
  `checks` is explicitly `passing` *and* `review` is explicitly `approved`. A PR
  with no blockers but a missing `checks` field lands in neither list and vanishes
  from both counts. Never narrate the summary line as if the two numbers account
  for every PR — say "N blocked, M ready" and leave the remainder unclaimed.
- **`state` is read from the input but never filtered on.** A closed or merged PR
  left in the export is counted in `total` and classified like any open one. Filter
  the export before running if it may contain non-open PRs.
- **`review: pending` counts as blocked** ("awaiting review"). A PR opened five
  minutes ago is reported as a blocker. This is intentional for standup triage, but
  it inflates the blocked count on teams that open PRs early.
- **A non-numeric `age_days` silently skips the stale check** rather than erroring.
  An export with `"age_days": "unknown"` will never flag anything stale, and the
  digest gives no sign that the check did not run.

## Anti-goals

- Does not call the GitHub API; it works on an exported PR list.
- Does not merge or comment on PRs; it only summarizes.
