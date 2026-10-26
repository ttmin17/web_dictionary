---
slug: feder-cr-invisible_dots-invisible_engine_dots-skills-invisible-playwright
name: invisible-playwright
tagline: Agent skill from feder-cr/invisible_dots
summary: Agent skill from feder-cr/invisible_dots
categories:
  - browser-web
tags:
  - agent-skills
  - agentic-ai
  - ai-agent
  - ai-agents
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2024-08-04T12:15:06
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: feder-cr/invisible_dots
  subpath: invisible_engine_dots/skills/invisible-playwright
  official_vendor: false
  license: MIT
signals:
  stars: 32250
  last_commit: 2026-10-25T01:04:52Z
  stars_delta_7d: 95
  stars_growth_pct: 0.3
  trending_score: 95.28
  rank_current: 82
  rank_delta: -26
  velocity_source: snapshot_delta
  sparkline_4w:
    - 31792
    - 32015
    - 32155
    - 32250
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: feder-cr/invisible_dots
  path: invisible_engine_dots/skills/invisible-playwright/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:08.926Z
  truncated: false
type: agent_skill
skill:
  skill_name: invisible-playwright
  description: Agent skill from feder-cr/invisible_dots
  folder_path: invisible_engine_dots/skills/invisible-playwright
  extra_files: []
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: feder-cr-invisible_dots
---

---name: invisible-playwright
description: Use the Dot's browser identities for any task on a website or search on the web: which identity to use, opening and closing one, and when a plain download is simpler than a browser.
---# The browser identities

Your browser is invisible_playwright: a real Firefox that a site sees as a person at a computer. How to drive a page
(finding a page, the order to try things in, what a page can tell) is in the browser server's instructions, which your
system prompt carries. This file is about the identities. Use the browser when a task needs a website; for a plain
download or an API, `exec` with `curl` is simpler.

## Identities

A browser identity is one person on the web: its own profile, cookies, logins and fingerprint, kept on disk between
uses.

- `browser_identity_list` shows the identities, which are open, and how many may be open at once.
- `browser_identity_create` makes one, closed. Give it a name only: it then leaves through this computer's own network,
  which is right unless the person asked for this one identity to use a proxy of theirs.
- `browser_identity_launch` opens it on your desktop. The first launch of a new identity can take minutes.
- `browser_identity_close` closes it; its profile, cookies and logins stay.
- Every page tool takes the `identity_id` of an open identity, and acts on that identity's one page.
- Reuse the identity that is already logged in to a site instead of making a new one, and keep one identity per
  person or account you act as: two accounts in one identity are one person to anyone looking.
- A second identity is for what must not touch the first. The usual case: signing up somewhere and needing a mailbox
  for the verification. Open a throwaway-mail site in another identity, take the address, type it into the form in the
  first one, and go back to the other for the link.

Close an identity with `browser_identity_close` once the task no longer needs it, before you answer: an open browser
holds memory on your computer.

## Your own skills

When you work out how to do something on a site that you will do again (where its login is, which steps a form needs,
what blocks you), write it down as a skill of your own: /home/dot/skills/<name>/SKILL.md, the same shape as this file.
