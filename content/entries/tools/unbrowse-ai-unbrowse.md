---
slug: unbrowse-ai-unbrowse
type: agent_tool
name: unbrowse
tagline: Unbrowse - Reverse engineer any website so that your agents can access
  its APIs directly
summary: "This is the open-source client for the hosted Unbrowse service
  (https://unbrowse.ai): the @unbrowse/sdk TypeScript client for its REST API,
  and the unbrowse CLI built on it."
categories:
  - agent-frameworks
tags:
  - typescript
status: active
quality_percentile: 30
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: unbrowse-ai/unbrowse
  official_vendor: false
  license: MIT
signals:
  stars: 786
  last_commit: 2026-10-12T04:35:54Z
  stars_delta_7d: 16
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 786
language: en
needs_keys: false
prerequisites:
  - Network access (HTTP MCP server)
readme_source:
  repo: unbrowse-ai/unbrowse
  path: README.md
  branch: main
  fetched_at: 2026-10-14T14:55:10.626Z
  truncated: false
tool:
  subcategory: browser_agent
  install_command: pip install unbrowse
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: http
    args: []
    env_vars: []
    remote_url: https://unbrowse.ai/mcp
    confidence: manifest
---

# Unbrowse
Every website, even those without an official API or MCP, still rely on a first party API to talk to their backend.
Unbrowse calls these website's first party APIs to make agentic browsing 50-100x faster and 95% cheaper than using a browser.

This is the open-source client for the hosted Unbrowse service
(`https://unbrowse.ai`): the `@unbrowse/sdk` TypeScript client for its REST API, and the
`unbrowse` CLI built on it.

Install the agent skill:

```bash
npx skills add unbrowse-ai/unbrowse --skill unbrowse
```

Connect your agent:

```bash
claude mcp add --transport http unbrowse https://unbrowse.ai/mcp
```

Complete OAuth sign-in in your client. From a terminal: `npx unbrowse login` (OAuth in your browser, nothing to paste), then `npx unbrowse run 'top stories on hacker news'`.

[Install](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/install.md) · [CLI](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/cli.md) · [MCP](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/mcp.md) · [SDK](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/sdk.md) · [Troubleshooting](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/troubleshooting.md)

## How it works

1. **Discover.** Unbrowse searches your private capabilities, then a public registry of sites
   already compiled into tools.
2. **Run.** A matching capability replays the site's own first-party HTTP requests. No browser.
   A run succeeds only when its result is verified.
3. **Learn once.** No match: an agent does the task in Unbrowse's recorded cloud browser (MCP), or
   you upload two HAR recordings (`unbrowse learn`). Unbrowse compiles the requests into a
   one-call capability. Next time is step 2.

Passwords stay in the Unbrowse password manager; the CLI never takes one.

More: [docs/how-it-works.md](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/how-it-works.md) · Paper: [Internal APIs Are All You Need](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/whitepaper/README.md) (arXiv:2604.00694)

## Commands

```text
unbrowse login [--key ub_live_…]    sign in (browser OAuth) or store an API key
unbrowse discover <query>           your capabilities, then the public registry
unbrowse run <task…> [--set k=v]    run a task from your IP (--from-unbrowse: from Unbrowse); waits for a verified result
unbrowse resume <runId> k=v…        answer what the run asked for, on the same run
unbrowse scrape <url>               read one page as markdown
unbrowse index <url>                teach Unbrowse a site: each flow becomes a tool
unbrowse learn a.har b.har          compile two recordings into a capability
unbrowse logins                     saved logins, masked
unbrowse registry [query]           public compiled sites (no account)
```

All commands: [docs/cli.md](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/cli.md). Exit codes: 0 ok, 1 error, 2 input required,
3 sign-in or login needed, 4 not verified.

## SDK

```ts
import { Unbrowse } from "@unbrowse/sdk";
const ub = new Unbrowse(); // UNBROWSE_API_KEY
const run = await ub.wait((await ub.run({ task: "top stories on Hacker News", idempotencyKey: crypto.randomUUID() })).runId);
```

Supported REST methods: [docs/sdk.md](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/sdk.md).

## Agents

Agents connect to the hosted MCP (`https://unbrowse.ai/mcp`, see [docs/install.md](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/install.md))
and follow [skill/SKILL.md](https://github.com/unbrowse-ai/unbrowse/blob/main/skill/SKILL.md). The CLI is the REST alternative. `unbrowse mcp` runs a local
stdio proxy to the hosted MCP for hosts that need stdio or plain tool names (`unbrowse_scrape`).

Plugins for Claude Code, Codex, Grok Build, OpenClaw, Hermes and elizaOS bundle the skill and make
Unbrowse the host's browser: [plugins/](https://github.com/unbrowse-ai/unbrowse/blob/main/plugins/README.md). Grok, ChatGPT, Claude, Perplexity, Le Chat and
Gemini CLI connect as a custom connector: [docs/connect.md](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/connect.md).

## Pricing

Check your current account plan and `unbrowse usage` for quota and pricing.
[docs/pricing.md](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/pricing.md)

## Develop

```bash
bun install
bun test packages     # SDK route tests + CLI tests against a local stand-in API
bun run typecheck
bun run build         # packages/sdk/dist, packages/cli/dist/cli.js (Node 18.17+)
bun run cli help
```

## Release

CI/CD publishes on a version tag: [docs/release.md](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/release.md).

What is here and what stays hosted: [docs/open-source.md](https://github.com/unbrowse-ai/unbrowse/blob/main/docs/open-source.md). MIT © Unbrowse AI
