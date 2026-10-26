---
slug: davepoon-buildwithclaude-plugins-agent-triforce-skills-code-health
name: code-health
tagline: Scans the codebase for dead code, tech debt, outdated dependencies, and
  code quality issues. Delegates to the Centinela (QA) agent.
summary: "- Periodic codebase hygiene check - Before a release to ensure no dead
  code or unresolved debt - After a large refactoring to verify cleanliness -
  When onboarding to understand current code quality"
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2025-07-25T02:26:45
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/agent-triforce/skills/code-health
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  rank_current: 113
  rank_delta: -15
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/agent-triforce/skills/code-health/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.576Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-health
  description: Scans the codebase for dead code, tech debt, outdated dependencies,
    and code quality issues. Delegates to the Centinela (QA) agent.
  folder_path: plugins/agent-triforce/skills/code-health
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Code Health
Runs a comprehensive code health scan using the Centinela (QA) agent.

## When to Use This Skill

- Periodic codebase hygiene check
- Before a release to ensure no dead code or unresolved debt
- After a large refactoring to verify cleanliness
- When onboarding to understand current code quality

## What This Skill Does

1. Runs the SIGN IN checklist
2. Scans for dead code (unused imports, variables, functions, commented-out blocks, unreachable code)
3. Checks for outdated and vulnerable dependencies
4. Detects code smells (long functions, deep nesting, duplication)
5. Audits TODO/FIXME comments for issue references
6. Runs the Scan Complete checklist (TIME OUT)
7. Writes findings to `docs/reviews/code-health-{date}.md`
8. Prepares findings handoff to Dev agent

## How to Use

### Basic Usage

```
/code-health
```

## Example

**User**: `/code-health`

**Output**: A code health report at `docs/reviews/code-health-2026-02-23.md` with:
- Dead code findings (verified, not false positives)
- Dependency status and vulnerabilities
- Code smell inventory
- TODO/FIXME audit
- Prioritized findings: Critical > Warning > Suggestion

## Tips

- Scans all source directories, not just `src/` — includes `tests/` and config files
- Previous scan findings are compared to track recurring issues
- Findings are verified to avoid false positives from dynamic imports or plugins
