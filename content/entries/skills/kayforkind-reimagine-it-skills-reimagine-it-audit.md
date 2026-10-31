---
slug: kayforkind-reimagine-it-skills-reimagine-it-audit
name: reimagine-it-audit
tagline: Design Health — runs 19 deterministic quality checks on HTML output.
  Use when the user says /reimagine-it audit, "audit this page", "check design
  qual
summary: "Runs npx reimagine-it audit — 19 checks across 6 categories
  (src/audit.js; Python scripts/audit.py is the CI mirror):"
categories:
  - security-auth
status: active
quality_percentile: 35
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: Kayforkind/reimagine-it
  subpath: skills/reimagine-it/audit
  official_vendor: false
  license: MIT
signals:
  stars: 207
  last_commit: 2026-10-10T14:17:43Z
  stars_delta_7d: 7
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 207
    - 207
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Kayforkind/reimagine-it
  path: skills/reimagine-it/audit/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:17.217Z
  truncated: false
type: agent_skill
skill:
  skill_name: reimagine-it-audit
  description: Design Health — runs 19 deterministic quality checks on HTML
    output. Use when the user says /reimagine-it audit, "audit this page",
    "check design quality", or wants to verify craft-floor compliance before
    shipping. Catches blank plates, missing focus rings, non-compositor motion,
    off-palette accents, dead motion, fabricated content. No LLM, no API key.
    CI-ready with --json and exit codes. Part of the reimagine-it
    Content-Derived Design suite.
  folder_path: skills/reimagine-it/audit
  extra_files: []
tags:
  - python
---

# /reimagine-it audit
**Parent:** [../SKILL.md](https://github.com/Kayforkind/reimagine-it/blob/main/skills/reimagine-it/audit/../SKILL.md) — the full Content-Derived Design engine. This sub-skill handles only the deterministic quality check.

Runs `npx reimagine-it audit` — 19 checks across 6 categories (`src/audit.js`; Python `scripts/audit.py` is the CI mirror):

| Category | Checks | What it catches |
|----------|--------|-----------------|
| Typography | 3 | Banned default fonts, type-scale range, measure > 65ch |
| Palette | 3 | Palette drift, `transition: all`, un-styled `::selection` |
| Motion | 4 | Outline removal, missing `prefers-reduced-motion`, missing `:focus-visible`, non-compositor animation |
| Content | 4 | Placeholder copy, vibe adjectives, emoji farm, `<br><br>` spacing |
| Structure | 3 | CDN, external font fetch, figure system doing no work |
| Performance | 2 | Images without dimensions, long pages without `content-visibility` |

## Usage

```bash
# Agent
/reimagine-it audit path/to/page.html

# CLI (Node — no Python required)
npx reimagine-it audit gold/webpage/after.html
npx reimagine-it audit gold/webpage/after.html --verbose
npx reimagine-it audit gold/webpage/after.html --json

# CI mirror
python scripts/audit_all.py
```

## Exit codes

| Code | Meaning |
|------|---------|
| 0 | CLEAN — no issues |
| 1 | WARNINGS — advisory only, no blockers |
| 2 | FAIL — must fix before shipping |

## Procedure

1. If the user passed a file path, run `python scripts/audit.py <path>`.
2. If no path, run `python scripts/audit_all.py` to audit all gold files.
3. Report the verdict with a summary table.
4. For each failure, name the specific rule and the fix.
5. If `--verbose`, show per-category breakdown.
6. If `--json`, output machine-readable JSON for CI.

## Must not

- Use an LLM for the check — this is deterministic Python only
- Skip the craft-floor rules (MOT-02, MOT-03 are hard blockers)
- Report "clean" without actually running the script
- Invent checks not in `scripts/audit.py`
