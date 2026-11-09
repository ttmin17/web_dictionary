---
slug: backnotprop-plannotator-apps-kiro-cli-skills-plannotator-review
name: review
tagline: Open Plannotator's browser-based code review UI and address the
  returned feedback.
summary: Directory paths are relative to the current session or absolute. Quote
  paths containing spaces. Feedback names the directory where changes belong.
categories:
  - coding-agents
tags:
  - agents
  - claude-code
  - code-review
  - codex
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/kiro-cli/skills/plannotator-review
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9921
  last_commit: 2026-11-09T08:32:06Z
  stars_delta_7d: 61
  stars_growth_pct: 0.6
  trending_score: 61.38
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9506
    - 9647
    - 9860
    - 9921
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: backnotprop/plannotator
  path: apps/kiro-cli/skills/plannotator-review/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:48.838Z
  truncated: false
type: agent_skill
skill:
  skill_name: review
  description: Open Plannotator's browser-based code review UI and address the
    returned feedback.
  folder_path: apps/kiro-cli/skills/plannotator-review
  extra_files: []
  pack_total_skills: 8
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

If the session closes without feedback (the output is "Review session closed without feedback." or empty), acknowledge it in one sentence and stop. Do not begin any work: closing the session is not approval.
