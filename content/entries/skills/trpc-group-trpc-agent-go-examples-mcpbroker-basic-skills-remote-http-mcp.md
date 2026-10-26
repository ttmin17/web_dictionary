---
slug: trpc-group-trpc-agent-go-examples-mcpbroker-basic-skills-remote-http-mcp
name: remote-http-mcp
tagline: Connect to a remote streamable HTTP MCP service that exposes
  announcements and FAQ tools.
summary: This skill points to a remote MCP service that is not preconfigured as
  a named broker server. Load this skill when you need to discover or call that
  remote service dynamically.
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/mcpbroker/basic/skills/remote-http-mcp
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
  path: examples/mcpbroker/basic/skills/remote-http-mcp/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: remote-http-mcp
  description: Connect to a remote streamable HTTP MCP service that exposes
    announcements and FAQ tools.
  folder_path: examples/mcpbroker/basic/skills/remote-http-mcp
  extra_files:
    - docs/usage.md
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

Overview

This skill points to a remote MCP service that is not preconfigured as a
named broker server. Load this skill when you need to discover or call
that remote service dynamically.

The remote MCP service is already running for this example. This skill
does not start it. This skill only documents the endpoint and the
recommended broker workflow.

Remote MCP Endpoint

- Base URL: `__REMOTE_MCP_URL__`
- Transport: streamable HTTP

Workflow

After this skill is loaded:

1. If you need more connection detail, call `skill_list_docs` or
   `skill_select_docs`.
2. Use `mcp_list_tools` with selector `__REMOTE_MCP_URL__`.
3. When you know the candidate tool names, use `mcp_inspect_tools`
   to inspect only those tools.
4. When you know the tool, call `mcp_call` with the selector returned
   by `mcp_list_tools` or `mcp_inspect_tools`.
5. Always pass remote MCP arguments inside `mcp_call.arguments`.

Rules

- Do not invent a different endpoint. Use the exact base URL in this skill.
- Do not try to start this MCP service through `skill_run` or any other
  command. It is already running.
- Prefer `mcp_list_tools` first, then inspect only the specific tool or
  tools you plan to call.
- Prefer tool selectors returned by `mcp_list_tools` or
  `mcp_inspect_tools`. If you must construct an ad-hoc URL selector and
  dot-based parsing would be ambiguous, use the `#tool=` form, for example
  `__REMOTE_MCP_URL__#tool=announcement_publish`.
- If you need announcement publishing, look for `announcement_publish`.
- If you need FAQ tools, look for `faq_search` or `faq_read`.
