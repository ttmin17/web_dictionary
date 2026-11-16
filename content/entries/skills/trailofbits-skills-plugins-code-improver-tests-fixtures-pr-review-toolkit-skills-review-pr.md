---
slug: trailofbits-skills-plugins-code-improver-tests-fixtures-pr-review-toolkit-skills-review-pr
name: review-pr
tagline: "Reviews the current branch's changes against its base branch as a pull
  request: correctness of new and modified code, test coverage for it, and
  docume"
summary: "1. Establish the diff: git diff ...HEAD (and git diff when the working
  tree carries uncommitted changes that belong to the branch). The base branch
  is named by the caller; fall back to main. 2. Review every changed hu..."
categories:
  - security-auth
tags:
  - agent-skills
  - research
  - security
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: trailofbits/skills
  subpath: plugins/code-improver/tests/fixtures/pr-review-toolkit/skills/review-pr
  official_vendor: false
  license: CC-BY-SA-4.0
signals:
  stars: 8221
  last_commit: 2026-11-12T17:48:51Z
  stars_delta_7d: 137
  stars_growth_pct: 1.7
  trending_score: 139.32
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7804
    - 8017
    - 8084
    - 8221
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trailofbits/skills
  path: plugins/code-improver/tests/fixtures/pr-review-toolkit/skills/review-pr/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:33.778Z
  truncated: false
type: agent_skill
skill:
  skill_name: review-pr
  description: "Reviews the current branch's changes against its base branch as a
    pull request: correctness of new and modified code, test coverage for it,
    and documentation accuracy. Use when asked to review a branch, a diff, or a
    pull request."
  folder_path: plugins/code-improver/tests/fixtures/pr-review-toolkit/skills/review-pr
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trailofbits-skills
---

# PR Review
Review the branch's change surface, not the whole repository.

1. Establish the diff: `git diff <base>...HEAD` (and `git diff <base>` when the working
   tree carries uncommitted changes that belong to the branch). The base branch is named
   by the caller; fall back to `main`.
2. Review every changed hunk for correctness: wrong results on edge inputs, unhandled
   error paths, and behavior that contradicts the function's name or callers.
3. Check test coverage for the changed behavior: new logic without a test exercising its
   edge cases is a finding.
4. Check documentation the diff made stale: statements in README or docs that were true
   on the base branch and are false after the change.
5. Report every defect found, each with a severity; include minor and informational
   findings. Do not report defects in files the branch did not touch — they are outside
   the pull request.
