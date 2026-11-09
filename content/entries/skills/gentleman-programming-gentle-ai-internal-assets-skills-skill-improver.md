---
slug: gentleman-programming-gentle-ai-internal-assets-skills-skill-improver
name: improver
tagline: "Trigger: improve skills, audit skills, refactor skills, skill quality.
  Audit and upgrade existing LLM-first skills."
summary: Use this skill when asked to audit, refactor, normalize, or improve
  existing SKILL.md files. Use skill-creator instead when creating a brand-new
  skill from a reusable pattern.
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agents
  - ai-coding
  - claude-code
status: active
quality_percentile: 88
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: Gentleman-Programming/gentle-ai
  subpath: internal/assets/skills/skill-improver
  official_vendor: false
  license: MIT
signals:
  stars: 8636
  last_commit: 2026-11-08T21:57:39Z
  stars_delta_7d: 301
  stars_growth_pct: 3.6
  trending_score: 311.87
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7849
    - 8020
    - 8335
    - 8636
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Gentleman-Programming/gentle-ai
  path: internal/assets/skills/skill-improver/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:53.523Z
  truncated: false
type: agent_skill
skill:
  skill_name: improver
  description: "Trigger: improve skills, audit skills, refactor skills, skill
    quality. Audit and upgrade existing LLM-first skills."
  folder_path: internal/assets/skills/skill-improver
  extra_files:
    - references/skill-style-guide.md
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: gentleman-programming-gentle-ai
---

## Activation Contract

Use this skill when asked to audit, refactor, normalize, or improve existing `SKILL.md` files. Use `skill-creator` instead when creating a brand-new skill from a reusable pattern.

## Hard Rules

- Treat `docs/skill-style-guide.md` as the normative style contract when it exists.
- For installed global skills, use `references/skill-style-guide.md` as the bundled local copy when `docs/skill-style-guide.md` is unavailable.
- Treat `SKILL.md` as the source of truth; preserve author intent, critical rules, activation semantics, and output requirements.
- Use `.atl/skill-registry.md` as an index of skill names, triggers, scopes, and exact paths; do not expect generated summaries.
- Default to audit-only. Modify files only when the user explicitly asks to apply improvements.
- Never delete meaningful content silently; move long explanation, examples, templates, or schemas into local `references/` or `assets/`.
- Do not invent triggers, policies, or domain rules. Mark ambiguous cases for human review.

## Decision Gates

| Situation | Action |
| --- | --- |
| Missing or invalid frontmatter | Fix `name`, quoted one-line `description`, `license`, and `metadata` |
| Skill reads like tutorial docs | Convert to runtime instructions and move background to `references/` |
| Body exceeds budget | Preserve rules, move examples/background to supporting files |
| Branching logic hidden in prose | Convert to a compact decision table |
| Rules conflict or intent is unclear | Report the issue; do not rewrite that rule automatically |

## Execution Steps

1. Read `docs/skill-style-guide.md`; if unavailable, read `references/skill-style-guide.md`; if neither exists, enforce the core LLM-first structure: frontmatter, Activation Contract, Hard Rules, Decision Gates, Execution Steps, Output Contract, References.
2. Read `.atl/skill-registry.md`; use listed paths to select skills. If missing, scan known skill directories for `*/SKILL.md`.
3. For each selected skill, audit metadata, trigger clarity, section order, body budget, actionability, decision gates, output contract, and local references.
4. Return an audit report grouped by skill with severity and exact proposed changes.
5. In apply mode, edit only safe issues, preserve content, create supporting files when needed, then rerun or request `gentle-ai skill-registry refresh`.

## Output Contract

Return:
- Skills audited and paths used.
- Issues found, grouped by severity.
- Files changed, if apply mode was requested.
- Registry refresh recommendation when skill metadata or paths changed.
- Ambiguities that need human review.

## References

- `docs/skill-style-guide.md` — normative LLM-first skill style guide for this repo.
- `references/skill-style-guide.md` — bundled local copy for installed global skills when the repo doc is unavailable.
