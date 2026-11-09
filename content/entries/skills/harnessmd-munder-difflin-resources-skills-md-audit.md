---
slug: harnessmd-munder-difflin-resources-skills-md-audit
name: md-audit
tagline: |-
  Read-only code quality audit — scan the current working directory for common
  issues (bugs, dead code, security hotspots, missing error handling) and r
summary: Perform a read-only code quality scan and return a findings report. Do
  NOT edit any files.
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agents
  - ai-agents
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: HarnessMD/munder-difflin
  subpath: resources/skills/md-audit
  official_vendor: false
  license: MIT
signals:
  stars: 9442
  last_commit: 2026-11-09T04:16:53Z
  stars_delta_7d: 64
  stars_growth_pct: 0.7
  trending_score: 64.44
  velocity_source: snapshot_delta
  sparkline_4w:
    - 8896
    - 9069
    - 9378
    - 9442
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: HarnessMD/munder-difflin
  path: resources/skills/md-audit/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:48.484Z
  truncated: false
type: agent_skill
skill:
  skill_name: md-audit
  description: >
    Read-only code quality audit — scan the current working directory for common

    issues (bugs, dead code, security hotspots, missing error handling) and
    return

    a prioritised findings report. No files are edited.

    Use when asked to "audit the code", "quick audit", "find issues", "code
    scan",

    or "what's wrong with this codebase". (munder-difflin)
  folder_path: resources/skills/md-audit
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: harnessmd-munder-difflin
---

## Code Audit (read-only)

Perform a read-only code quality scan and return a findings report. Do NOT edit any files.

Steps:
1. **Scope** — identify the primary language and entry points (`package.json`, `Cargo.toml`, `go.mod`, `pyproject.toml`, or similar).
2. **Scan** — use `Grep` and `Read` to look for:
   - Unhandled promise rejections / ignored errors
   - Hard-coded secrets or credentials (keys, tokens, passwords)
   - `TODO`/`FIXME`/`HACK` comments that signal known debt
   - Dead exports (exported symbols with no in-repo import)
   - Obvious type-safety gaps (unchecked `any`, missing null guards)
3. **Report** — output a findings list sorted by severity (Critical → High → Medium → Low):
   ```
   ## Audit Report — <project name>

   ### Critical
   - [file:line] <description>

   ### High
   - ...

   ### Summary
   <total count> findings across <file count> files scanned.
   ```
4. Stop after reporting. Do not apply any fixes.
