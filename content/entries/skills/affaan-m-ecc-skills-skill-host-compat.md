---
slug: affaan-m-ecc-skills-skill-host-compat
name: host-compat
tagline: Lint ECC skills for Codex/Cursor-safe frontmatter and Claude-only
  substitutions before a skill PR.
summary: "- Adding or editing a skill under skills/ - Copying a skill into
  .agents/skills/ or .cursor/skills/ - A review asks whether a skill is safe to
  install into Codex or Cursor - CI reports validate-skill-host-compat.js fi..."
categories:
  - agent-frameworks
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: skills/skill-host-compat
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: skills/skill-host-compat/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.039Z
  truncated: false
type: agent_skill
skill:
  skill_name: host-compat
  description: Lint ECC skills for Codex/Cursor-safe frontmatter and Claude-only
    substitutions before a skill PR.
  folder_path: skills/skill-host-compat
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Skill Host Compatibility
Run the same host-compat gate CI uses on `skills/` before opening a skill PR.
The check is for Codex and Cursor copies, not Claude-only runtime quality.

## When to Activate

- Adding or editing a skill under `skills/`
- Copying a skill into `.agents/skills/` or `.cursor/skills/`
- A review asks whether a skill is safe to install into Codex or Cursor
- CI reports `validate-skill-host-compat.js` findings

## Core Concepts

Canonical skills live in `skills/`. Codex loads `.agents/skills/`. Cursor loads a
smaller `.cursor/skills/` subset. CONTRIBUTING documents that sync as manual.

`validate-skills.js` only checks that `SKILL.md` exists and that `name` /
`description` are usable YAML. `tests/ci/codex-skill-surface.test.js` only
sees `.agents/skills/`. This script is the cross-tree gate:

1. Claude-only substitutions in executable `bash` / `sh` / `zsh` fences
   in Codex/Cursor projections (`${CLAUDE_SESSION_ID}`, `${CLAUDE_SKILL_DIR}`, `${CLAUDE_PLUGIN_ROOT}`,
   `${CLAUDE_PROJECT_DIR}`, `$ARGUMENTS`) fail. Codex leaves those tokens
   as literal text. In a Codex copy, rewrite `${CLAUDE_PROJECT_DIR}` to
   `$(pwd)` or an explicit path.
2. A Codex copy may only use `name`, `description`, `metadata`, `license`,
   and `allowed-tools`. `origin: ECC` may stay on the canonical `skills/`
   copy and must be stripped on the Codex copy.
3. A skill listed in `agents/openai.yaml` that has a `skills/` directory must
   have `.agents/skills/<name>/`. Cursor copies are optional; when present,
   `name:` must match the directory.
4. CONTRIBUTING checklist items (When to Activate, Anti-Patterns, name
   matches directory, 500/800 line caps) warn. They fail only with
   `--strict-checklist`.

`validate-skills.js` frontmatter WARN default is unchanged (#1663).

## Code Examples

From the repo root:

```bash
node scripts/ci/validate-skill-host-compat.js
```

Print counts without failing:

```bash
node scripts/ci/validate-skill-host-compat.js --inventory
```

Promote checklist warnings:

```bash
node scripts/ci/validate-skill-host-compat.js --strict-checklist
```

Slash command:

```
/skill-host-compat
/skill-host-compat --inventory
```

## Anti-Patterns

Codex and Cursor projections must resolve Claude-only substitutions in executable blocks. Canonical Claude-scoped examples remain valid. POSIX `$1` and `${1}` parameters are ambiguous and require review rather than failing this gate. This fence is the
forbidden pattern:

```bash
echo "${CLAUDE_SESSION_ID}"
ls "${CLAUDE_SKILL_DIR}"
node "${CLAUDE_PLUGIN_ROOT}/scripts/setup.js" $ARGUMENTS
cd "${CLAUDE_PROJECT_DIR}"
```

Do not add `version:` or `origin:` to a Codex copy under `.agents/skills/`.
Do not treat a passing `validate-skills.js` run as Codex-safe. Do not require
every `skills/` entry to have a Cursor copy.

## Best Practices

- Keep canonical `origin: ECC` if the CONTRIBUTING template calls for it.
- Drop `origin`, `version`, and `argument-hint` on the Codex copy.
- Show host-portable commands in bash fences (`npx`, `ecc`, or a resolved
  root). Rewrite `${CLAUDE_PROJECT_DIR}` in Codex copies to `$(pwd)` or an
  explicit path. Keep valid Claude-scoped forms in canonical instructions; resolve host variables in the target projection.
- Run this script before `npm test` when the change is a new skill.
- Use `--inventory` to see checklist warning volume without failing the tree.

## Related Skills

- `skill-comply` — runtime behavioral traces, not host-portability
- `skill-stocktake` — holistic audit of installed `~/.claude/skills`
- `skill-scout` — search existing skills before creating a new one
