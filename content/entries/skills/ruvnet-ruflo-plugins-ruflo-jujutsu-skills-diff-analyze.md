---
slug: ruvnet-ruflo-plugins-ruflo-jujutsu-skills-diff-analyze
name: diff-analyze
tagline: Analyze git diffs for risk scoring, reviewer recommendations, and
  change classification. Use when preparing a PR, reviewing a large or
  cross-module ch
summary: Before submitting a PR or after making significant changes, analyze the
  diff to understand risk level, get reviewer recommendations, and classify the
  type of change.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-jujutsu/skills/diff-analyze
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-jujutsu/skills/diff-analyze/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: diff-analyze
  description: Analyze git diffs for risk scoring, reviewer recommendations, and
    change classification. Use when preparing a PR, reviewing a large or
    cross-module change, or before merging to assess risk and pick reviewers.
  folder_path: plugins/ruflo-jujutsu/skills/diff-analyze
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Diff Analysis
Analyze git diffs for risk, complexity, and reviewer assignment.

## When to use

Before submitting a PR or after making significant changes, analyze the diff to understand risk level, get reviewer recommendations, and classify the type of change.

## Steps

0. **Pick the ref** — `HEAD` for uncommitted work, `main..BRANCH` for a branch (`--branch`), or the PR's base..head range (`--pr`, resolve it with `gh pr view N --json baseRefName,headRefName`). The analyze_* tools take a `ref` and run git themselves; they do not accept diff text.
1. **Analyze diff** — call `mcp__plugin_ruflo-core_ruflo__analyze_diff` with `{ ref, includeFileRisks: true }` for a comprehensive analysis
2. **Risk score** — call `mcp__plugin_ruflo-core_ruflo__analyze_diff-risk` with `{ ref }` for a quantified risk assessment
3. **Classify changes** — call `mcp__plugin_ruflo-core_ruflo__analyze_diff-classify` with `{ ref }` to categorize (feature, bugfix, refactor, etc.)
4. **Get reviewer roles** — call `mcp__plugin_ruflo-core_ruflo__analyze_diff-reviewers` with `{ ref, limit }` for roles inferred from paths and risk; check CODEOWNERS separately when assigning people
5. **Diff stats** — call `mcp__plugin_ruflo-core_ruflo__analyze_diff-stats` with `{ ref }` for line counts, file counts, complexity metrics
6. **File-level risk** — call `mcp__plugin_ruflo-core_ruflo__analyze_file-risk` with `{ path }` (required) for each file the earlier steps flagged

## Risk factors

- Files with high churn history
- Security-sensitive paths (auth, crypto, permissions)
- Large diffs (>500 lines)
- Cross-module changes
- Database migration files
