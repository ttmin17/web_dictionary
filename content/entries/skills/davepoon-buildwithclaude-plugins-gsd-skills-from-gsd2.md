---
slug: davepoon-buildwithclaude-plugins-gsd-skills-from-gsd2
name: gsd:from-gsd2
tagline: Import a GSD-2 (.gsd/) project back to GSD v1 (.planning/) format
summary: Reverse-migrate a GSD-2 project (.gsd/ directory) back to GSD v1
  (.planning/) format.
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/gsd/skills/from-gsd2
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/gsd/skills/from-gsd2/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.618Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:from-gsd2
  description: Import a GSD-2 (.gsd/) project back to GSD v1 (.planning/) format
  folder_path: plugins/gsd/skills/from-gsd2
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
Reverse-migrate a GSD-2 project (`.gsd/` directory) back to GSD v1 (`.planning/`) format.

Maps the GSD-2 hierarchy (Milestone → Slice → Task) to the GSD v1 hierarchy (Milestone sections in ROADMAP.md → Phase → Plan), preserving completion state, research files, and summaries.

**CJS-only:** `from-gsd2` is not on the `gsd-sdk query` registry; call `gsd-tools.cjs` as shown below (see `docs/CLI-TOOLS.md`).
</objective>

<process>

1. **Locate the .gsd/ directory** — check the current working directory (or `--path` argument):
   ```bash
   node "$HOME/.claude/get-shit-done/bin/gsd-tools.cjs" from-gsd2 --dry-run
   ```
   If no `.gsd/` is found, report the error and stop.

2. **Show the dry-run preview** — present the full file list and migration statistics to the user. Ask for confirmation before writing anything.

3. **Run the migration** after confirmation:
   ```bash
   node "$HOME/.claude/get-shit-done/bin/gsd-tools.cjs" from-gsd2
   ```
   Use `--force` if `.planning/` already exists and the user has confirmed overwrite.

4. **Report the result** — show the `filesWritten` count, `planningDir` path, and the preview summary.

</process>

<notes>
- The migration is non-destructive: `.gsd/` is never modified or removed.
- Pass `--path <dir>` to migrate a project at a different path than the current directory.
- Slices are numbered sequentially across all milestones (M001/S01 → phase 01, M001/S02 → phase 02, M002/S01 → phase 03, etc.).
- Tasks within each slice become plans (T01 → plan 01, T02 → plan 02, etc.).
- Completed slices and tasks carry their done state into ROADMAP.md checkboxes and SUMMARY.md files.
- GSD-2 cost/token ledger, database state, and VS Code extension state cannot be migrated.
</notes>
