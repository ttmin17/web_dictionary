---
slug: davepoon-buildwithclaude-plugins-agent-triforce-skills-release-check
name: release-check
tagline: Pre-release verification checklist. Validates features, tests, docs,
  security, and quality gates before shipping. Delegates to the Centinela (QA)
  agen
summary: "- Before any release to production - Before tagging a version - As a
  final quality gate after all features are implemented and reviewed"
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/agent-triforce/skills/release-check
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
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
  path: plugins/agent-triforce/skills/release-check/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.576Z
  truncated: false
type: agent_skill
skill:
  skill_name: release-check
  description: Pre-release verification checklist. Validates features, tests,
    docs, security, and quality gates before shipping. Delegates to the
    Centinela (QA) agent.
  folder_path: plugins/agent-triforce/skills/release-check
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Release Check
Runs pre-release verification using the Centinela (QA) agent. This is the highest-stakes checklist in the system.

## When to Use This Skill

- Before any release to production
- Before tagging a version
- As a final quality gate after all features are implemented and reviewed

## What This Skill Does

1. Runs the SIGN IN checklist
2. TIME OUT 1 — Documentation and Debt Check: verifies CHANGELOG, TECH_DEBT, specs, and docs
3. TIME OUT 2 — Testing and Quality Gate: runs all tests, code health scan, quality verification
4. TIME OUT 3 — Security and Release Gate: runs security audit, security verification, release readiness
5. Writes release assessment to `docs/reviews/release-check-{version}.md`
6. Issues final verdict: READY FOR RELEASE or BLOCKED (with specific reasons)

## How to Use

### Basic Usage

```
/release-check v1.2.0
```

## Example

**User**: `/release-check v2.0.0`

**Output**: A release assessment at `docs/reviews/release-check-v2.0.0.md` with:
- Documentation completeness check
- Test results and quality gate status
- Security audit summary
- Final verdict with specific blocking reasons if any

## Tips

- This is the last line of defense before code reaches users
- A blocked release here prevents issues from reaching production
- Three TIME OUT checkpoints cover docs, quality, and security independently
