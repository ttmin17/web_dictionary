---
slug: harnessmd-munder-difflin-resources-skills-md-fetch-summarize
name: md-fetch-summarize
tagline: |-
  Fetch a URL and return a concise markdown summary of its content.
  Read-only: no files are written; the summary is returned as output only.
  Use when as
summary: Given a URL, fetch its content and return a concise markdown summary.
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agents
  - ai-agents
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: HarnessMD/munder-difflin
  subpath: resources/skills/md-fetch-summarize
  official_vendor: false
  license: MIT
signals:
  stars: 9442
  last_commit: 2026-11-09T04:16:53Z
  stars_delta_7d: 64
  stars_growth_pct: 0.7
  trending_score: 64.44
  velocity_source: snapshot_delta
  sparkline_4w:
    - 8896
    - 9069
    - 9378
    - 9442
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: HarnessMD/munder-difflin
  path: resources/skills/md-fetch-summarize/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:48.484Z
  truncated: false
type: agent_skill
skill:
  skill_name: md-fetch-summarize
  description: >
    Fetch a URL and return a concise markdown summary of its content.

    Read-only: no files are written; the summary is returned as output only.

    Use when asked to "fetch and summarize", "summarize this URL", "what does

    this page say", or "get the content of <url>".

    Proactively suggest when the user pastes a URL and asks what it contains.
    (munder-difflin)
  folder_path: resources/skills/md-fetch-summarize
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: harnessmd-munder-difflin
---

## Fetch & Summarize

Given a URL, fetch its content and return a concise markdown summary.

Steps:
1. Fetch the page with `WebFetch` (or `Bash` with `curl -sL <url> | head -200` as a fallback).
2. Extract the main content — ignore nav, footer, ads, and boilerplate.
3. Return a structured summary with:
   - **Title** (the page's `<title>` or heading)
   - **One-paragraph overview** of what the page is about
   - **Key points** as a bullet list (max 5)
   - **Source** — the URL fetched

Do not save or write the fetched content anywhere. Return the summary directly.
