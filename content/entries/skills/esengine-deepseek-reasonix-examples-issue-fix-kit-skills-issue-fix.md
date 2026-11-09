---
slug: esengine-deepseek-reasonix-examples-issue-fix-kit-skills-issue-fix
name: issue-fix
tagline: Reproduce a repository issue, make the smallest correct fix, and draft
  a pull request from observed evidence.
summary: The bundled references/scenario.md defines an optional local exercise.
  Use it only when the user selects that fixture; it is not the issue to apply
  to an arbitrary repository.
categories:
  - coding-agents
tags:
  - agent-framework
  - ai-agent
  - ai-coding
  - cli
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: esengine/DeepSeek-Reasonix
  subpath: examples/issue-fix-kit/skills/issue-fix
  official_vendor: false
  license: MIT
signals:
  stars: 36138
  last_commit: 2026-11-09T08:43:46Z
  stars_delta_7d: 53
  stars_growth_pct: 0.1
  trending_score: 53.08
  velocity_source: snapshot_delta
  sparkline_4w:
    - 35858
    - 35967
    - 36085
    - 36138
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: esengine/DeepSeek-Reasonix
  path: examples/issue-fix-kit/skills/issue-fix/SKILL.md
  branch: studio
  fetched_at: 2026-11-09T09:28:20.897Z
  truncated: false
type: agent_skill
skill:
  skill_name: issue-fix
  description: Reproduce a repository issue, make the smallest correct fix, and
    draft a pull request from observed evidence.
  folder_path: examples/issue-fix-kit/skills/issue-fix
  extra_files:
    - references/delivery.md
    - references/scenario.md
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: esengine-deepseek-reasonix
---

# Issue fix
1. Use the repository selected for this session. Read its standing instructions
   and inspect its working tree before editing. Preserve existing changes.
2. Read the complete `references/delivery.md` beside this skill. Identify the
   issue's trigger, expected behavior, affected code, and acceptance checks.
   Resolve missing behavior before changing code; an issue title is not a spec.
3. Reproduce the trigger or trace its execution path. Record the command and
   observed failure. If reproduction is unavailable, state the limitation and
   the code or logs that support the proposed root cause.
4. Make a focused fix using the repository's existing patterns. Add or update
   a regression test for the trigger when feasible. Keep unrelated changes out
   of the patch and follow the repository's approval rules for wider changes.
5. Run the relevant checks and required repository gates. Report pass, fail,
   and not-run results separately. Review the final diff against the issue.
6. Draft the handoff using the reference format. Commit, publish a PR, or send
   a message only when the user has authorized that action.

The bundled `references/scenario.md` defines an optional local exercise. Use
it only when the user selects that fixture; it is not the issue to apply to
an arbitrary repository.
