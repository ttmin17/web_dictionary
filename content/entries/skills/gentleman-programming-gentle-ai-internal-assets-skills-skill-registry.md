---
slug: gentleman-programming-gentle-ai-internal-assets-skills-skill-registry
name: registry
tagline: "Trigger: update skills, skill registry, actualizar skills, after skill
  changes. Index available skills by trigger and path."
summary: Use this skill after installing, removing, creating, moving, or
  renaming skills, or when a delegator needs a fresh skill index.
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agents
  - ai-coding
  - claude-code
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: Gentleman-Programming/gentle-ai
  subpath: internal/assets/skills/skill-registry
  official_vendor: false
  license: MIT
signals:
  stars: 9237
  last_commit: 2026-11-16T06:28:35Z
  stars_delta_7d: 601
  stars_growth_pct: 7
  trending_score: 642.83
  velocity_source: snapshot_delta
  sparkline_4w:
    - 8020
    - 8335
    - 8636
    - 9237
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Gentleman-Programming/gentle-ai
  path: internal/assets/skills/skill-registry/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:29.027Z
  truncated: false
type: agent_skill
skill:
  skill_name: registry
  description: "Trigger: update skills, skill registry, actualizar skills, after
    skill changes. Index available skills by trigger and path."
  folder_path: internal/assets/skills/skill-registry
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: gentleman-programming-gentle-ai
---

## Activation Contract

Use this skill after installing, removing, creating, moving, or renaming skills, or when a delegator needs a fresh skill index.

## Hard Rules

- The registry is an index, not a compiler or summary. `SKILL.md` remains the source of truth.
- Do not generate or inject compact rules by default; preserve author intent by passing exact skill paths to subagents.
- Refresh the shared disk index with `gentle-ai skill-registry refresh --cwd <project>`; it owns discovery, ordering, deduplication, and publication. Scan by hand only when that command is unavailable; use results for inspection, never publish a hand-rendered index.
- The shared file excludes Pi session-only runtime skills. Pi delegators select from their current effective session view; other delegators read the current disk index.
- Never substitute a stored Engram or session copy for the current disk index, or persist Pi's session-local effective view.
- Add `.atl/` to `.gitignore` when possible unless explicitly disabled.

## Decision Gates

| Situation | Action |
| --- | --- |
| Same skill exists globally and in project | Keep the project-level skill |
| Same skill exists in multiple global locations | Keep the first source in scan order |
| No skills found | Let refresh produce an empty disk index |
| Agent will delegate work | Select matching rows from the current effective view and pass exact `SKILL.md` paths |

## Execution Steps

1. Run `gentle-ai skill-registry refresh --cwd <project>`; every refresh rescans, and `--force` also leaves identical bytes untouched.
2. If skipped (not a project), unavailable, or failed, report that outcome. A read-only hand scan is optional only if the command is unavailable; do not write its results as the shared index.
3. For delegation, use the current disk index or Pi's effective session view and pass matching exact paths.
4. Return the registry path, skill count when reported, and whether the index changed.

## Output Contract

Return:
- Project name and `.atl/skill-registry.md` path.
- Number of indexed skills.
- Whether the index changed or was already current.
- Any skipped or duplicate skills when relevant.

## References

- `docs/skill-style-guide.md` — how skills should be authored before indexing.
- `skills/_shared/skill-resolver.md` — how delegators use the index.
