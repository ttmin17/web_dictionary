---
slug: antfu-skills-skills-nitro
name: nitro
tagline: Nitro is the framework-agnostic server toolkit (powering Nuxt) for
  building and deploying web servers anywhere. Use when working with
  nitro.config, se
summary: Nitro is a framework-agnostic, deployment-agnostic server toolkit
  powered by H3 v2, unstorage, and Vite/Rolldown/Rollup. It powers Nuxt and
  works standalone. From one codebase it builds optimized output for Node.js,
  B...
categories:
  - coding-agents
status: active
quality_percentile: 31
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: antfu/skills
  subpath: skills/nitro
  official_vendor: false
  license: MIT
signals:
  stars: 5969
  last_commit: 2026-10-09T06:36:34Z
  stars_delta_7d: 206
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 5969
    - 5969
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: antfu/skills
  path: skills/nitro/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:18.145Z
  truncated: false
type: agent_skill
skill:
  skill_name: nitro
  description: Nitro is the framework-agnostic server toolkit (powering Nuxt) for
    building and deploying web servers anywhere. Use when working with
    nitro.config, server routes/event handlers, route rules, caching, storage,
    tasks, websockets, or deploying to Node/Bun/Deno/Cloudflare/Vercel.
  folder_path: skills/nitro
  extra_files:
    - GENERATION.md
    - references/advanced-migration.md
    - references/core-assets.md
    - references/core-cache.md
    - references/core-configuration.md
    - references/core-rendering.md
    - references/core-routing.md
    - references/core-storage.md
    - references/deploy-presets.md
    - references/features-database.md
tags: []
---

> The skill is based on Nitro v3 (beta, 3.0.260903), generated at 2026-09-25.

Nitro is a framework-agnostic, deployment-agnostic server toolkit powered by [H3](https://h3.dev) v2, [unstorage](https://unstorage.unjs.io), and Vite/Rolldown/Rollup. It powers Nuxt and works standalone. From one codebase it builds optimized output for Node.js, Bun, Deno, Cloudflare, Vercel, Netlify, and more.

Key capabilities:
- **Filesystem routing** with H3 v2 event handlers, dynamic params, and method suffixes.
- **Route rules** for declarative caching, headers, redirects, proxying, and CORS.
- **Caching** layer (cached handlers/functions, SWR) on top of the **unstorage** KV layer.
- **Runtime config** overridable via `NITRO_*` env vars.
- **Tasks** (on-demand + scheduled/cron), **WebSockets**/SSE, a SQL **database** layer, and **OpenAPI** auto-docs.
- **Plugins & lifecycle hooks**, custom **renderer**/**server entry**, and portable **deployment presets**.

> **Key v3 changes** (vs. `nitropack` v2): the package is renamed `nitropack` → `nitro` with H3 v2 (web-standard `Request`/`Response`); **auto-imports are removed** (import everything explicitly); directory scanning is **opt-in** via `serverDir`; `useStorage` → `useKV` (`nitro/kv`) and the `storage` config option → `kv`; cache `swr` now defaults to `false`. If unsure about v2-vs-v3 APIs, read [advanced-migration](https://github.com/antfu/skills/blob/main/skills/nitro/references/advanced-migration.md) first.

## Core

| Topic | Description | Reference |
|-------|-------------|-----------|
| Routing | File-based routes, `defineHandler`, params, middleware, route rules, errors | [core-routing](https://github.com/antfu/skills/blob/main/skills/nitro/references/core-routing.md) |
| Configuration | `nitro.config.ts`, `defineConfig`, key options, runtime config | [core-configuration](https://github.com/antfu/skills/blob/main/skills/nitro/references/core-configuration.md) |
| Storage | unstorage KV, mount points, drivers, dynamic mounts | [core-storage](https://github.com/antfu/skills/blob/main/skills/nitro/references/core-storage.md) |
| Cache | `defineCachedHandler`, `defineCachedFunction`, SWR, invalidation | [core-cache](https://github.com/antfu/skills/blob/main/skills/nitro/references/core-cache.md) |
| Assets | Public assets, compression, server assets via storage | [core-assets](https://github.com/antfu/skills/blob/main/skills/nitro/references/core-assets.md) |
| Rendering | Renderer (HTML/SSR), server entry, framework integration | [core-rendering](https://github.com/antfu/skills/blob/main/skills/nitro/references/core-rendering.md) |

## Features

| Topic | Description | Reference |
|-------|-------------|-----------|
| Plugins & Hooks | `definePlugin`, runtime lifecycle hooks, error capture | [features-plugins](https://github.com/antfu/skills/blob/main/skills/nitro/references/features-plugins.md) |
| Tasks | On-demand & scheduled (cron) tasks, `runTask` | [features-tasks](https://github.com/antfu/skills/blob/main/skills/nitro/references/features-tasks.md) |
| WebSocket & SSE | `defineWebSocketHandler`, pub/sub, namespaces, event streams | [features-websocket](https://github.com/antfu/skills/blob/main/skills/nitro/references/features-websocket.md) |
| Database | Built-in SQL layer via db0, `useDatabase`, connectors | [features-database](https://github.com/antfu/skills/blob/main/skills/nitro/references/features-database.md) |
| OpenAPI | Auto spec from `defineRouteMeta`, Scalar/Swagger UIs | [features-openapi](https://github.com/antfu/skills/blob/main/skills/nitro/references/features-openapi.md) |

## Advanced / Deployment

| Topic | Description | Reference |
|-------|-------------|-----------|
| Deployment Presets | Runtimes & providers, compatibility dates, platform integration | [deploy-presets](https://github.com/antfu/skills/blob/main/skills/nitro/references/deploy-presets.md) |
| v2 → v3 Migration | Package rename, `nitro/*` imports, H3 v2 API, preset changes | [advanced-migration](https://github.com/antfu/skills/blob/main/skills/nitro/references/advanced-migration.md) |
