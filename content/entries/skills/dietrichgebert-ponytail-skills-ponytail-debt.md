---
slug: dietrichgebert-ponytail-skills-ponytail-debt
name: debt
tagline: List every `shortcut:` comment (and older `ponytail:` ones) as a debt
  ledger. One-shot report, changes nothing. Use for "ponytail debt", "what did
  pon
summary: "Every deliberate ponytail shortcut is marked with a shortcut: comment
  naming its ceiling and upgrade path (older code may say ponytail:). This
  collects them into one ledger so a deferral can't quietly become permanent."
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
  subpath: skills/ponytail-debt
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
  path: skills/ponytail-debt/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.850Z
  truncated: false
type: agent_skill
skill:
  skill_name: debt
  description: >
    List every `shortcut:` comment (and older `ponytail:` ones) as a debt
    ledger. One-shot report, changes nothing. Use for "ponytail debt", "what did
    ponytail defer", "list the shortcuts", /ponytail-debt.
  folder_path: skills/ponytail-debt
  extra_files: []
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dietrichgebert-ponytail
---

Every deliberate ponytail shortcut is marked with a `shortcut:` comment naming
its ceiling and upgrade path (older code may say `ponytail:`). This collects them into one ledger so a deferral
can't quietly become permanent.

## Scan

Grep the repo for comment markers, skipping `.git` and everything the
`.gitignore` files ignore (dependencies, build output, caches, in any stack):

`git grep --no-index --exclude-standard -nE '(#|//|/[*]) ?(shortcut|ponytail):'`  (add other comment prefixes if your stack uses them)

If the user names their own marker word (`/ponytail-debt TODO`), grep for that word instead.

Each hit is one ledger row. The comment prefix keeps prose that merely mentions
the convention out of the ledger. Skip hits that are not a deferral, like a note
about a keyboard shortcut.

## Output

One row per marker, grouped by file:

`<file>:<line>, <what was simplified>. ceiling: <the limit named>. upgrade: <the trigger to revisit>.`

The convention is `shortcut: <ceiling>, <upgrade path>`, so pull the ceiling
and the trigger straight from the comment. Want an owner per row too? add
`git blame -L<line>,<line>`.

Flag the rot risk: any marker comment that names no upgrade path or
trigger gets a `no-trigger` tag, those are the ones that silently rot.

End with `<N> markers, <M> with no trigger.` Nothing found: `No shortcut debt. Clean ledger.`

## Boundaries

Reads and reports only, changes nothing. To persist it, ask and it writes the
ledger to a file (e.g. `PONYTAIL-DEBT.md`). One-shot.
