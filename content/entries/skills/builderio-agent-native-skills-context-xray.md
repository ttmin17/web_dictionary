---
slug: builderio-agent-native-skills-context-xray
name: context-xray
tagline: Visualize local Codex and Claude Code context usage, open a report,
  flag warnings, and suggest prompt/tooling optimizations.
summary: That installs a local context-xray command plus Codex/Claude skills and
  slash commands. It does not need hosted auth or a remote MCP connector to read
  local transcript files.
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-native
  - agentic-ai
  - agents
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: BuilderIO/agent-native
  subpath: skills/context-xray
  official_vendor: false
  license: MIT
signals:
  stars: 7652
  last_commit: 2026-11-09T08:19:09Z
  stars_delta_7d: 31
  stars_growth_pct: 0.4
  trending_score: 31.13
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7621
    - 7652
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: BuilderIO/agent-native
  path: skills/context-xray/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.435Z
  truncated: false
type: agent_skill
skill:
  skill_name: context-xray
  description: Visualize local Codex and Claude Code context usage, open a report,
    flag warnings, and suggest prompt/tooling optimizations.
  folder_path: skills/context-xray
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Context X-Ray
Use Context X-Ray when a local coding-agent thread is getting large or the user
wants to understand where context is going.

## Setup

Recommended install path:

```bash
npx @agent-native/core@latest skills add context-xray --client all
```

That installs a local `context-xray` command plus Codex/Claude skills and slash
commands. It does not need hosted auth or a remote MCP connector to read local
transcript files.

Use `--scope project` when you only want project `.agents` skill and command
artifacts added to the current repo.

## Run

Current or most recent local thread:

```bash
context-xray --open
```

Recent thread picker:

```bash
context-xray threads --open
```

Weekly trends:

```bash
context-xray trends --since 7d --open
```

`--open` opens the generated local HTML file directly in the browser; it does
not keep a background server running.

After running, summarize the report link, sessions analyzed, largest context
buckets, warnings, and concrete optimizations.
