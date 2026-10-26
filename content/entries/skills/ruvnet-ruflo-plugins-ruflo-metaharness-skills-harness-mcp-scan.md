---
slug: ruvnet-ruflo-plugins-ruflo-metaharness-skills-harness-mcp-scan
name: harness-mcp-scan
tagline: Static security scan of a harness's declared MCP surface via `harness
  mcp-scan {path}`. Reads `.mcp/servers.json` + `.harness/claims.json`.
  Pure-read,
summary: Calls harness mcp-scan to enumerate every declared MCP server + tool
  and flag policy / permission / dependency issues. Never executes any tool;
  pure static analysis.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-metaharness/skills/harness-mcp-scan
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-metaharness/skills/harness-mcp-scan/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: harness-mcp-scan
  description: Static security scan of a harness's declared MCP surface via
    `harness mcp-scan {path}`. Reads `.mcp/servers.json` +
    `.harness/claims.json`. Pure-read, no dispatch. Exits 1 on findings at or
    above `--fail-on` severity.
  folder_path: plugins/ruflo-metaharness/skills/harness-mcp-scan
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Calls `harness mcp-scan` to enumerate every declared MCP server + tool
and flag policy / permission / dependency issues. Never executes any
tool; pure static analysis.

## Algorithm

Implementation: [`scripts/mcp-scan.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-metaharness/skills/harness-mcp-scan/../../scripts/mcp-scan.mjs).

1. Invoke the pinned `harness` binary (`metaharness@~0.4.1`, resolved from a
   local install or the one-time `~/.ruflo/metaharness-cache-<pin>` cache —
   never `@latest`): `harness mcp-scan <path> --json`.
2. Parse `findings[]` with `{ severity, id, server, tool, message }`.
3. `--fail-on <severity>`: exit 1 when any finding is at or above that
   level. Default `high`.
4. Output JSON (default) or markdown table.

## Severity rank

| Severity | Rank |
|---|---:|
| low | 1 |
| medium | 2 |
| high | 3 |

`--fail-on high` (default) only fails on HIGH; `--fail-on medium` also
fails on MEDIUM; `--fail-on low` fails on any finding.

## CI integration

```yaml
- name: MCP static scan
  run: node plugins/ruflo-metaharness/scripts/mcp-scan.mjs --fail-on high
```

The exit code is the only thing CI watches; the JSON output goes to
artifacts for human review.

## Graceful degradation

When `harness` binary is unavailable (no network, blocked registry),
emits structured `{ degraded: true, reason: 'metaharness-not-available' }`
and exits 0. Ruflo continues — ADR-150 architectural constraint.
