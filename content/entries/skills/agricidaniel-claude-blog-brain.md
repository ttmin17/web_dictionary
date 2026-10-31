---
slug: agricidaniel-claude-blog-brain
name: brain
tagline: Agent skill from AgriciDaniel/claude-blog
summary: Agent skill from AgriciDaniel/claude-blog
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-citations
  - ai-content
  - ai-marketing
status: active
quality_percentile: 58
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-blog
  subpath: brain
  official_vendor: false
  license: MIT
signals:
  stars: 2424
  last_commit: 2026-10-14T08:51:33Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  rank_current: 168
  rank_delta: -84
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2340
    - 2376
    - 2424
    - 2424
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-blog
  path: brain/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:41:11.314Z
  truncated: false
type: agent_skill
skill:
  skill_name: brain
  description: Agent skill from AgriciDaniel/claude-blog
  folder_path: brain
  extra_files:
    - .claude-plugin/marketplace.json
    - .claude-plugin/plugin.json
    - .github/CODEOWNERS
    - .github/ISSUE_TEMPLATE/bug_report.yml
    - .github/ISSUE_TEMPLATE/config.yml
    - .github/PULL_REQUEST_TEMPLATE.md
    - .github/dependabot.yml
    - .github/workflows/ci.yml
    - .gitignore
    - .obsidian/graph.json
  pack_total_skills: 33
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-blog
---

# Claude Blog Brain
Operate the vault first. Read `CODEX.md`, `wiki/hot.md`, and `wiki/index.md`
before changing notes.

## Commands

```bash
/claude-blog-brain new <client-slug> --owner <name>
/claude-blog-brain demo
/claude-blog-brain ingest --vault <path> --file <source>
/claude-blog-brain synthesize --vault <path>
/claude-blog-brain report --vault <path>
/claude-blog-brain visuals --vault <path>
/claude-blog-brain lint --vault <path>
/claude-blog-brain next --vault <path>
```

Source checkout equivalent:

```bash
claude-blog-brain new <client-slug> --owner <name>
claude-blog-brain demo
claude-blog-brain ingest --vault <path> --file <source>
claude-blog-brain synthesize --vault <path>
claude-blog-brain report --vault <path> --html-only
```

## Required Operating Rules

1. Read `<vault>/CODEX.md`.
2. Read `<vault>/wiki/hot.md`.
3. Read `<vault>/wiki/index.md`.
4. Preserve `.raw/` as immutable source material.
5. Never store credentials in the vault.
6. Never make domain-specific claims without dated trustworthy sources.
7. Keep `hot`, `index`, `overview`, and `log` current.
8. Record research evidence in `references/source-ledger.json`.
9. Record domain adapter completion in `references/adapter-manifest.json`.

## Script Mapping

- `new` -> `python scripts/scaffold_vault.py`
- `demo` -> `python scripts/build_demo_vault.py`
- `ingest` -> `python scripts/ingest_source.py`
- `synthesize` -> `python scripts/synthesize_brain.py`
- `report` -> `python scripts/render_brain_report.py`
- `visuals` -> `python scripts/generate_vault_visuals.py`
- `lint` -> `python scripts/lint_vault.py`
- `next` -> `python scripts/guide_next_action.py`

## Quality Gates

- No ranking or traffic guarantee; content outcomes are probabilistic and never certain
- No credentials, tokens, API keys, or private client content in repo artifacts
- No mutation of a CMS, GSC, GA4, or publishing platform; the brain is advisory and read-only
- No recommendation without a dated source, confidence level, and rollback note
- No deprecated advice (HowTo schema, retired FAQ rich results, FID) presented as current
- No fabricated or unsourced statistics and no generic, unsupported, or low-quality generated filler presented as fact

Do not call this brain market-ready unless `scripts/audit_brain.py --require
market-ready` passes. A scaffold is not a finished brain.

## Research Refresh

monthly for Google algorithm updates and Search Central policy; before every release for E-E-A-T framing, schema deprecations, and GEO/AEO citation claims; on-changelog for the claude-blog skill

## Community

Use public project Discussions for questions and support:
https://github.com/AgriciDaniel/claude-blog/discussions.
Report reproducible defects through public Issues:
https://github.com/AgriciDaniel/claude-blog/issues.
