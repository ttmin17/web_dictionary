---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-github
name: github
tagline: Agent skill from codewhale-hq/Codewhale
summary: "--- name: github description: GitHub via gh — issues, PRs, reviews,
  search, and CI runs. Use when: user mentions a repo, issue, PR, review,
  release, workflow run, or anything on github.com. invocation: model+user ---"
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
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/github
  official_vendor: false
  license: MIT
signals:
  stars: 41160
  last_commit: 2026-11-09T09:21:05Z
  stars_delta_7d: 2
  stars_growth_pct: 0
  trending_score: 2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41158
    - 41160
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/github/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:23.915Z
  truncated: false
type: agent_skill
skill:
  skill_name: github
  description: Agent skill from codewhale-hq/Codewhale
  folder_path: crates/skills/assets/skills/github
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
name: github
description: GitHub via gh — issues, PRs, reviews, search, and CI runs. Use when: user mentions a repo, issue, PR, review, release, workflow run, or anything on github.com.
invocation: model+user
---

# GitHub

## When to use
Any GitHub work: read or triage issues, open or review PRs, search code,
check CI runs, manage releases.

## Setup
Requires the `gh` CLI, authenticated. Fail loud when it is missing:

```
gh auth status || gh auth login
```

Never proceed with `curl` against api.github.com as a silent fallback —
`gh` owns auth, pagination, and output shape.

## Workflow
1. Confirm the repo (`owner/name`) and, for mutations, the exact target.
2. Read: `gh issue view`, `gh pr view`, `gh pr diff`, `gh search`, `gh run view`.
3. Mutate only when asked: `gh issue create`, `gh pr create`, `gh pr review`,
   `gh pr merge`. Mutations need explicit user intent, not inference.
4. Quote what `gh` returned; never summarize a diff or check rollup you did not read.

## Non-goals
- Do not merge, close, or approve on your own initiative.
- Do not invent issue/PR numbers or check conclusions.
- Do not push, retag, or rewrite history without explicit authorization.
