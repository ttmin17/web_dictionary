---
slug: backnotprop-plannotator-apps-kiro-cli-skills-plannotator-review
name: review
tagline: Agent skill from backnotprop/plannotator
summary: Agent skill from backnotprop/plannotator
categories:
  - coding-agents
tags:
  - agents
  - claude-code
  - code-review
  - codex
status: active
quality_percentile: 65
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/kiro-cli/skills/plannotator-review
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9647
  last_commit: 2026-10-26T07:14:52Z
  stars_delta_7d: 141
  stars_growth_pct: 1.5
  trending_score: 143.09
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9194
    - 9393
    - 9506
    - 9647
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: backnotprop/plannotator
  path: apps/kiro-cli/skills/plannotator-review/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:55.157Z
  truncated: false
type: agent_skill
skill:
  skill_name: review
  description: Agent skill from backnotprop/plannotator
  folder_path: apps/kiro-cli/skills/plannotator-review
  extra_files: []
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: backnotprop-plannotator
---

# Plannotator Review (Kiro)
Run:

```bash
PLANNOTATOR_ORIGIN=kiro-cli plannotator review
```

You may append one directory or PR URL:

```bash
PLANNOTATOR_ORIGIN=kiro-cli plannotator review <pr-url>
PLANNOTATOR_ORIGIN=kiro-cli plannotator review ../feature-worktree
```

Directory paths are relative to the current session or absolute. Quote paths containing spaces. Feedback names the directory where changes belong.

Or open the session against a specific base / diff mode (session-only, git-only; for a stacked branch, `--base <the branch below yours>` reviews just that layer):

```bash
PLANNOTATOR_ORIGIN=kiro-cli plannotator review --base <ref> [--diff-type <type>]
```
