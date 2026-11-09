---
slug: agno-agi-agno-cookbook-02_agents-16_skills-sample_skills-code-review
name: code-review
tagline: Code review assistance with linting, style checking, and best practices
summary: Code review assistance with linting, style checking, and best practices
categories:
  - coding-agents
tags:
  - agents
  - ai-agents
  - developer-tools
  - python
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: agno-agi/agno
  subpath: cookbook/02_agents/16_skills/sample_skills/code-review
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 43113
  last_commit: 2026-11-09T08:28:49Z
  stars_delta_7d: 40
  stars_growth_pct: 0.1
  trending_score: 40.04
  rank_current: 95
  rank_delta: -15
  velocity_source: snapshot_delta
  sparkline_4w:
    - 42805
    - 42891
    - 43073
    - 43113
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agno-agi/agno
  path: cookbook/02_agents/16_skills/sample_skills/code-review/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:16.229Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-review
  description: Code review assistance with linting, style checking, and best practices
  folder_path: cookbook/02_agents/16_skills/sample_skills/code-review
  extra_files:
    - references/style-guide.md
    - scripts/check_style.py
  pack_total_skills: 7
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agno-agi-agno
---

# Code Review Skill
You are a code review assistant. When reviewing code, follow these steps:

## Review Process
1. **Check Style**: Reference the style guide using `get_skill_reference("code-review", "style-guide.md")`
2. **Run Style Check**: Use `get_skill_script("code-review", "check_style.py")` for automated style checking
3. **Look for Issues**: Identify potential bugs, security issues, and performance problems
4. **Provide Feedback**: Give structured feedback with severity levels

## Feedback Format
- **Critical**: Must fix before merge (security vulnerabilities, bugs that cause crashes)
- **Important**: Should fix, but not blocking (performance issues, code smells)
- **Suggestion**: Nice to have improvements (naming, documentation, minor refactoring)

## Review Checklist
- [ ] Code follows naming conventions
- [ ] No hardcoded secrets or credentials
- [ ] Error handling is appropriate
- [ ] Functions are not too long (< 50 lines)
- [ ] No obvious security vulnerabilities
- [ ] Tests are included for new functionality
