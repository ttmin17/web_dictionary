---
slug: backnotprop-plannotator-apps-skills-claude-plannotator-review
name: skills-plannotator-review
tagline: Open Plannotator's browser-based code review UI for the current
  worktree, another directory, or a pull request URL, then act on the feedback
  that come
summary: For another repository or worktree, pass its path relative to this
  session or an absolute path, e.g. /plannotator-review ../feature-worktree.
  Quote paths containing spaces. Supply a target, not prose; feedback names t...
categories:
  - browser-web
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/skills/claude/plannotator-review
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9393
  last_commit: 2026-10-13T16:08:41Z
  stars_delta_7d: 199
  stars_growth_pct: 2.2
  trending_score: 203.31
  rank_current: 141
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9194
    - 9393
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: backnotprop/plannotator
  path: apps/skills/claude/plannotator-review/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:16.415Z
  truncated: false
type: agent_skill
skill:
  skill_name: skills-plannotator-review
  description: Open Plannotator's browser-based code review UI for the current
    worktree, another directory, or a pull request URL, then act on the feedback
    that comes back.
  folder_path: apps/skills/claude/plannotator-review
  extra_files: []
tags: []
---

# Plannotator Review
Arguments pass through to `plannotator review`: one directory or PR/MR URL, `--git` / `--gitbutler`, and the session-only open-state flags `--base <ref>` / `--diff-type <type>` (git-only; for a stacked branch, `--base <the branch below yours>` reviews just that layer).

For another repository or worktree, pass its path relative to this session or an absolute path, e.g. `/plannotator-review ../feature-worktree`. Quote paths containing spaces. Supply a target, not prose; feedback names the directory where changes belong.

## Code review feedback

!`plannotator review $ARGUMENTS`

## Your task

If the review above contains feedback or annotations, address them in the same conversation. If no changes were requested (an approval/LGTM-style result), acknowledge that review passed and continue.

If the review was moved to the background, wait for it to finish. If Claude Code stopped it at its background time limit before the user decided, tell the user, and only when they ask, run `plannotator review $ARGUMENTS` again with `run_in_background` and `timeout: 7200000`: their annotations are restored from the saved draft.
