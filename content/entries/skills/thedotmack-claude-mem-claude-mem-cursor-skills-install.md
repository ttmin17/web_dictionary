---
slug: thedotmack-claude-mem-claude-mem-cursor-skills-install
name: mem-install
tagline: "Use this when setting up claude-mem on Cursor: local or remote worker,
  local host-login observer or remote cmem.ai inference."
summary: Starts the local worker. Hooks already ship with this plugin. MCP
  claude-mem-local talks to it.
categories:
  - databases-memory
tags:
  - ai-agents
  - ai-memory
  - anthropic
  - artificial-intelligence
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: thedotmack/claude-mem
  subpath: claude-mem-cursor/skills/install
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 113294
  last_commit: 2026-11-05T12:13:30Z
  stars_delta_7d: 10092
  stars_growth_pct: 9.8
  trending_score: 11078.88
  velocity_source: snapshot_delta
  sparkline_4w:
    - 100334
    - 101675
    - 103202
    - 113294
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: thedotmack/claude-mem
  path: claude-mem-cursor/skills/install/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:25.869Z
  truncated: false
type: agent_skill
skill:
  skill_name: mem-install
  description: "Use this when setting up claude-mem on Cursor: local or remote
    worker, local host-login observer or remote cmem.ai inference."
  folder_path: claude-mem-cursor/skills/install
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - cursor
  pack_slug: thedotmack-claude-mem
---

# Install claude-mem on Cursor
Independent of Grok Bot. Do not require the other IDE.

## Local worker (default)

```
npx claude-mem install --ide cursor
```

Starts the local worker. Hooks already ship with this plugin. MCP `claude-mem-local` talks to it.

Observer:

- Remote inference (typical): leave provider as openrouter / cmem.ai (`CLAUDE_MEM_OPENROUTER_BASE_URL=https://cmem.ai/api/inference/v1`)
- Local host-login: `--provider host` (loopback shim; never bind the worker port — on macOS the worker is often 37777, so the shim uses 37778)

## Remote worker

```
npx claude-mem install --ide cursor --runtime server --server-url https://YOUR_HOST
```

Set plugin variable `CLAUDE_MEM_MCP_TOKEN` for `claude-mem-remote` (`https://cmem.ai/api/mcp` or your server).

Never restart a healthy worker (RAM queue). No Claude CLI required for host/openrouter.
