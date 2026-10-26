---
slug: dietrichgebert-ponytail-skills-ponytail-gain
name: gain
tagline: Show ponytail's measured savings (code, cost, speed) from the
  benchmark. One-shot display. Use for /ponytail-gain, "what does ponytail
  save", "ponytai
summary: "The figures are the published agentic benchmark of Ponytail 5:
  headless Claude Code (Opus 5.5, default effort) on 39 tasks (feature tickets
  in a real FastAPI + React repo, bug fixes, security and privacy cases,
  small..."
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agents
  - claude
  - claude-code
status: active
quality_percentile: 53
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: DietrichGebert/ponytail
  subpath: skills/ponytail-gain
  official_vendor: false
  license: MIT
signals:
  stars: 176404
  last_commit: 2026-10-18T01:55:14Z
  stars_delta_7d: 9110
  stars_growth_pct: 5.4
  trending_score: 9606.09
  velocity_source: snapshot_delta
  sparkline_4w:
    - 157371
    - 162479
    - 167294
    - 176404
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: DietrichGebert/ponytail
  path: skills/ponytail-gain/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.850Z
  truncated: false
type: agent_skill
skill:
  skill_name: gain
  description: >
    Show ponytail's measured savings (code, cost, speed) from the benchmark.
    One-shot display. Use for /ponytail-gain, "what does ponytail save",
    "ponytail impact".
  folder_path: skills/ponytail-gain
  extra_files: []
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dietrichgebert-ponytail
---

# Ponytail Gain
Display this scoreboard when invoked. One-shot: do NOT change mode, write flag
files, or persist anything.

The figures are the published agentic benchmark of Ponytail 5: headless Claude
Code (Opus 5.5, default effort) on 39 tasks (feature tickets in a real FastAPI +
React repo, bug fixes, security and privacy cases, small apps), 5 runs each,
against the same agent without the skill. 18 of the tasks have hidden checks
for correctness and safety. Each figure is the geometric mean of the per-task
medians. They are measured, not computed from the current repo.
Source: `benchmarks/results/2026-10-07-agentic.md` and the README.

## Scoreboard

Render plain ASCII bars. The bar length shows ponytail as a share of the
no-skill baseline; the label carries the exact figure:

```
  ponytail gain           benchmark · 39 tasks × 5 runs · Opus 5.5

  no-skill        ████████████████████  100%
  Lines of code   █████████···········   47%   ▼ 53%
  Output tokens   ███████████·········   55%   ▼ 45%
  Cost            ███████████████·····   74%   ▼ 26%
  Time            ████████████········   59%   ▼ 41%
  Hidden checks passed   97%  (no-skill 96%)
  Tests where the logic needs one   98%  (no-skill 68%)

  This repo:  /ponytail-debt  (shortcuts you deferred)
              /ponytail-audit (what's still cuttable)
```

## Honesty boundary

These are benchmark averages, not this repo. NEVER print a per-repo savings
number ("you saved X lines/tokens here"): the unbuilt version was never
written, so there is no real baseline to subtract from in a live repo. The
only real per-repo figures come from `/ponytail-debt` (a counted ledger), and
this card points there instead of inventing one.

## Boundaries

One-shot display. Edits nothing, changes no mode.
