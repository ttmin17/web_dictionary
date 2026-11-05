---
slug: davepoon-buildwithclaude-plugins-agent-triforce-skills-review-findings
name: review-findings
tagline: Addresses and fixes findings from a QA code review. Reads the review
  report, fixes critical and warning issues, and prepares for re-verification.
  Dele
summary: "- After receiving a code review from Centinela (QA) - When a review
  report has findings that need to be addressed - Fixing critical and warning
  issues before re-verification"
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/agent-triforce/skills/review-findings
  official_vendor: false
  license: MIT
signals:
  stars: 3725
  last_commit: 2026-11-05T07:32:57Z
  stars_delta_7d: 47
  stars_growth_pct: 1.3
  trending_score: 47.6
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3631
    - 3650
    - 3678
    - 3725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/agent-triforce/skills/review-findings/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:11:48.616Z
  truncated: false
type: agent_skill
skill:
  skill_name: review-findings
  description: Addresses and fixes findings from a QA code review. Reads the
    review report, fixes critical and warning issues, and prepares for
    re-verification. Delegates to the Forja (Dev) agent.
  folder_path: plugins/agent-triforce/skills/review-findings
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Review Findings
Addresses and fixes QA findings using the Forja (Dev) agent.

## When to Use This Skill

- After receiving a code review from Centinela (QA)
- When a review report has findings that need to be addressed
- Fixing critical and warning issues before re-verification

## What This Skill Does

1. Runs the SIGN IN checklist
2. Reads the review report and understands each finding's root cause
3. Plans fix order: Critical first, then Warnings
4. Implements fixes with updated tests for each finding
5. Scans for dead code after all fixes
6. Runs Implementation Complete and Pre-Delivery checklists (TIME OUT)
7. Verifies every Critical finding addressed, every Warning addressed or deferred with justification
8. Prepares a fix report for QA re-verification

## How to Use

### Basic Usage

```
/review-findings
```

### With Specific Review

```
/review-findings docs/reviews/user-auth-review.md
```

## Example

**User**: `/review-findings docs/reviews/webhook-system-review.md`

**Output**:
- All Critical findings fixed with tests
- All Warning findings fixed or explicitly deferred with justification
- Fix report documenting what was changed and why
- Ready for QA re-verification

## Tips

- If no review is specified, the most recent review in `docs/reviews/` is used
- The agent understands root causes before writing any fix
- Conflicting fixes are identified and planned around during the pre-fix phase
