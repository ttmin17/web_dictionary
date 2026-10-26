---
slug: mcp-use-mcp-use-skills-mcp-builder
name: mcp-builder
tagline: Build, modify, debug, migrate, review, or verify TypeScript MCP servers
  and MCP Apps with mcp-use. Use for tools, resources, prompts, middleware, View
summary: 1. Inspect package.json, the server entry, exported tool refs,
  mcp-env.d.ts, views/, skills/, and the installed mcp-use version. 2. Scaffold
  a new stable project with create-mcp-use-app@latest and the appropriate
  temp...
categories:
  - agent-frameworks
tags:
  - agent-plugins
  - agentic-framework
  - apps-sdk
  - chatgpt
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: mcp-use/mcp-use
  subpath: skills/mcp-builder
  official_vendor: false
  license: MIT
signals:
  stars: 10814
  last_commit: 2026-10-22T00:22:30Z
  stars_delta_7d: 29
  stars_growth_pct: 0.3
  trending_score: 29.08
  velocity_source: snapshot_delta
  sparkline_4w:
    - 10728
    - 10753
    - 10785
    - 10814
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mcp-use/mcp-use
  path: skills/mcp-builder/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:57.659Z
  truncated: false
type: agent_skill
skill:
  skill_name: mcp-builder
  description: Build, modify, debug, migrate, review, or verify TypeScript MCP
    servers and MCP Apps with mcp-use. Use for tools, resources, prompts,
    middleware, Views, authentication, Skills over MCP, scaffolding, and
    advanced features.
  folder_path: skills/mcp-builder
  extra_files:
    - LICENSE.txt
    - references/advanced-features.md
    - references/auth.md
    - references/migration.md
    - references/server.md
    - references/skills-over-mcp.md
    - references/verification.md
    - references/views.md
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mcp-use-mcp-use
---

# Build with mcp-use
Treat the installed `mcp-use` package, its exported types, generated declarations, and the project's existing code as the source of truth. Inspect the installed version before choosing APIs or changing code.

## Workflow

1. Inspect `package.json`, the server entry, exported tool refs, `mcp-env.d.ts`, `views/`, `skills/`, and the installed `mcp-use` version.
2. Scaffold a new stable project with `create-mcp-use-app@latest` and the appropriate template. Match the package version or dist-tag when working on beta, canary, or an existing versioned project.
3. Read only the references needed for the task:
   - [Server](https://github.com/mcp-use/mcp-use/blob/main/skills/mcp-builder/references/server.md) for tools, resources, prompts, MCP middleware, request context, and result envelopes.
   - [Views](https://github.com/mcp-use/mcp-use/blob/main/skills/mcp-builder/references/views.md) for interactive MCP Apps, React hooks, model context, host capabilities, assets, and CSP.
   - [Authentication](https://github.com/mcp-use/mcp-use/blob/main/skills/mcp-builder/references/auth.md) for OAuth providers, verified identity, scopes, permissions, and authorization.
   - [Skills over MCP](https://github.com/mcp-use/mcp-use/blob/main/skills/mcp-builder/references/skills-over-mcp.md) when a server should ship reusable workflows alongside its tools.
   - [Advanced features](https://github.com/mcp-use/mcp-use/blob/main/skills/mcp-builder/references/advanced-features.md) for OpenAPI, proxying, notifications, subscriptions, and elicitation.
   - [Migration](https://github.com/mcp-use/mcp-use/blob/main/skills/mcp-builder/references/migration.md) only when retired or compatibility-only imports, helpers, registration shapes, UI patterns, or session assumptions are present.
   - [Verification](https://github.com/mcp-use/mcp-use/blob/main/skills/mcp-builder/references/verification.md) before reporting implementation work complete.
4. Implement against installed types. Prefer the framework's current conventions over copied examples or historical changelogs.
5. Validate the smallest real lifecycle that proves the changed behavior, then expand checks in proportion to risk.

## Core invariants

- Import server APIs from `mcp-use`, React APIs from `mcp-use/react`, and OAuth provider adapters from their `mcp-use/oauth/*` subpaths.
- Define tool arguments with `inputSchema`. Add `outputSchema` for structured results and every View-bound tool.
- Return raw MCP result envelopes. A successful schema-backed tool must include matching `structuredContent`; an expected failure may return `isError: true` with model-readable `content`.
- Put each View at `views/<name>/view.tsx` and bind it with `view: { name: "<name>" }`.
- Export every statically declared tool ref consumed by a View. Default-export the server entry used by `mcp-use dev`, `build`, and `start`.
- Keep identity and mutable workflow state request-scoped or in an external store. Treat client-reported metadata as unverified.
- Consider Skills over MCP when a server exposes a repeatable, multi-step workflow that would otherwise inflate tool descriptions.

## Guardrails

- Do not invent exports, configuration fields, or callback shapes. Confirm uncertain details in installed declarations or source.
- Do not preserve APIs that are absent from the installed version merely because they appear in an existing project.
- Do not return a plain domain object from a tool callback.
- Do not bind a View without a matching `outputSchema` and `structuredContent` result.
- Do not use module globals for cross-request identity, elicitation continuity, or durable business state.
- Do not claim success from a source build alone when types, package exports, authentication, or interactive behavior changed.
- Do not deploy or mutate external systems unless the user explicitly requests it.
