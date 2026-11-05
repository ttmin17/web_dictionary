---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-feedback
name: feedback
tagline: Agent skill from codewhale-hq/Codewhale
summary: "--- name: feedback description: Report a Codewhale bug or idea as a
  GitHub issue. Use when: codewhale bug, feature request, feedback on codewhale,
  report an issue, or this should work differently. invocation: model+us..."
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/feedback
  official_vendor: false
  license: MIT
signals:
  stars: 41158
  last_commit: 2026-11-05T13:03:13Z
  stars_delta_7d: 40
  stars_growth_pct: 0.1
  trending_score: 40.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41158
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/feedback/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:37.248Z
  truncated: false
type: agent_skill
skill:
  skill_name: feedback
  description: Agent skill from codewhale-hq/Codewhale
  folder_path: crates/skills/assets/skills/feedback
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

---
name: feedback
description: Report a Codewhale bug or idea as a GitHub issue. Use when: codewhale bug, feature request, feedback on codewhale, report an issue, or this should work differently.
invocation: model+user
---

# Feedback

## When to use
The user hit a Codewhale bug or wants Codewhale to do something new, and
wants it reported upstream.

## Setup
Requires the `gh` CLI, authenticated (`gh auth status`). Fail loud when it
is missing — fall back to printing the issue text for manual filing.

## Workflow
1. Reproduce or pin the behavior first: version (`codewhale --version`),
   command, expected vs actual, minimal steps.
2. Draft the issue (title, repro, expected, actual, version) and read it back.
3. File only with explicit approval:
   `gh issue create -R codewhale-hq/Codewhale --title "..." --body "..."`.
4. Report the issue URL back.

## Non-goals
- Do not file without showing the user the exact title and body first.
- Do not file duplicates — search open issues for the same report first.
- Do not include secrets, tokens, or private data in the issue body.
