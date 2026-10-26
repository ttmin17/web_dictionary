---
slug: trpc-group-trpc-agent-go-examples-skillfind-skills-skill_find
name: find
tagline: Find a public Agent Skill on GitHub, install it, and load it.
summary: Use this skill when the user wants a new public Agent Skill that is not
  already installed.
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/skillfind/skills/skill_find
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/skillfind/skills/skill_find/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: find
  description: Find a public Agent Skill on GitHub, install it, and load it.
  folder_path: examples/skillfind/skills/skill_find
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

Overview

Use this skill when the user wants a new public Agent Skill that is not
already installed.

Workflow

1. Search GitHub pages with `web_search`.
   Prefer queries that mention `SKILL.md`, the requested topic, and
   `site:github.com`.

2. Pick a result that clearly points to a GitHub skill directory or a
   `SKILL.md` page.

3. Call `skill_install_github` with that GitHub URL.

4. Read the tool result carefully.
   It returns the exact `skill_name` that was installed and may also
   include `installed_files`.

5. Immediately call `skill_load` with the returned `skill_name`.

6. Only if local execution is explicitly enabled for this demo and the
   user asked for a runnable demo, follow the installed skill docs and
   use `skill_run`.

7. If the docs are brief, use `installed_files` to avoid guessing.
   Prefer obvious entrypoint files such as `run.sh` or scripts under
   `scripts/`.

Rules

- Prefer small public skills with a clear `SKILL.md`.
- Prefer GitHub results that point directly to a skill, not a repo home
  page.
- Tell the user which skill you installed and where it came from.
- Never run downloaded code automatically.
- If installation fails, explain the failure briefly and try another
  candidate.
