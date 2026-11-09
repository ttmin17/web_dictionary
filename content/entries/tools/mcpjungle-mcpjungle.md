---
slug: mcpjungle-mcpjungle
name: MCPJungle
tagline: One place to manage & connect to all your MCP servers
summary: MCPJungle is a self-hosted MCP gateway for developers and teams who
  want to manage multiple MCP servers without scattered client configurations,
  duplicated setup, or inconsistent access control.
categories:
  - agent-frameworks
tags:
  - ai-agents
  - infrastructure
  - mcp-gateway
  - mcp-registry
status: active
quality_percentile: 66
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: mcpjungle/MCPJungle
  official_vendor: false
  license: MPL-2.0
signals:
  stars: 1616
  last_commit: 2026-11-03T22:51:07Z
  stars_delta_7d: 17
  stars_growth_pct: 1.1
  trending_score: 17.18
  rank_current: 92
  rank_delta: -60
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1310
    - 1599
    - 1616
language: en
needs_keys: false
prerequisites:
  - go
readme_source:
  repo: mcpjungle/MCPJungle
  path: README.md
  branch: main
  fetched_at: 2026-11-09T09:27:08.591Z
  truncated: false
type: agent_tool
tool:
  subcategory: other
  install_command: go install github.com/mcpjungle/MCPJungle@latest
  runtime: go
  execution_mode: hybrid
  has_mcp_support: false
---

<h1 align="center">
  MCPJungle
</h1>
<p align="center">
  <strong>Run all your MCP servers behind one endpoint</strong>
</p>
<p align="center">
  <a href="https://docs.mcpjungle.com" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Documentation-docs.mcpjungle.com-blue?style=flat-square&logo=book" alt="Documentation" style="max-width: 100%;">
  </a>

  <a href="https://github.com/mcpjungle/mcpjungle/pkgs/container/mcpjungle" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/GHCR-available-green.svg?style=flat-square&logo=github" alt="GHCR" style="max-width: 100%;">
  </a>

  <a href="https://discord.gg/CapV4Z3krk" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Discord-MCPJungle-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord" style="max-width: 100%;">
  </a>
</p>

MCPJungle is a self-hosted MCP gateway for developers and teams who want to manage multiple MCP servers without scattered client configurations, duplicated setup, or inconsistent access control.

Use it **locally** to keep your personal MCP setup clean, or run it as **shared infrastructure** for a team with centralized discovery, access control, and observability.

![diagram](https://raw.githubusercontent.com/mcpjungle/MCPJungle/main/assets/mcpjungle-diagram/april-2026/mcpjungle-diagram.png)

Instead of wiring every MCP server into every AI client, register your servers once in MCPJungle and let Claude, Cursor, Codex, or your own Agents connect to a single MCP endpoint.

## Why MCPJungle?

MCP is powerful, but managing many MCP servers gets messy fast.

Without a gateway:

- 🔌 Every client needs its own MCP server configuration
- 🧩 Tools, prompts, and resources are scattered across different servers
- 🔐 Access control is duplicated or missing
- 👥 Teams have no shared view of available MCP tools
- 🛠️ Local setups become hard to reproduce

MCPJungle gives you a single control point:

- 🌐 One MCP endpoint for Claude, Cursor, Copilot, and custom agents
- 🗂️ One place to register and manage MCP servers
- 🔎 Unified discovery for tools, prompts, and resources
- 🎛️ Optional tool groups to expose only the tools a client should see
- 📊 Simple access-control and observability hooks for shared deployments

Start with a local setup. Scale to a shared team gateway when you need it.

![MCPJungle dashboard UI](https://raw.githubusercontent.com/mcpjungle/MCPJungle/main/docs/images/dashboard-ui.png)

## Documentation
 Mcpjungle documentation has a new home: [https://docs.mcpjungle.com](https://docs.mcpjungle.com).
 
 Please prefer the docs site over this README for the latest guides, reference, and operational details.
 
 Your AI Clients can also access the docs using its MCP server `https://docs.mcpjungle.com/mcp`!

## Quickstart

This quickstart guide will show you how to:
1. Start the mcpjungle server locally using `docker compose`
2. Add an MCP server in mcpjungle
3. Connect your Claude Desktop to mcpjungle to access your MCP tools

### Start the server
Fetch the `docker-compose.yaml` and start the mcpjungle server:
```bash
curl -O https://raw.githubusercontent.com/mcpjungle/MCPJungle/refs/heads/main/docker-compose.yaml
docker compose up -d
```

This exposes mcpjungle's streamable http mcp server at `http://localhost:8080/mcp` by default.

### Add an MCP server
1. Download the `mcpjungle` CLI on your local machine either using brew or directly from the [Releases Page](https://github.com/mcpjungle/MCPJungle/releases).
```bash
brew install mcpjungle/mcpjungle/mcpjungle
```

 2. Add the [context7](https://context7.com/) MCP server to mcpjungle using the CLI:
```bash
mcpjungle register --name context7 --url https://mcp.context7.com/mcp
```

You should see output similar to this:

![register-context7](https://raw.githubusercontent.com/mcpjungle/MCPJungle/main/docs/images/register-context7.png)

### Connect to mcpjungle

In your Claude Desktop, add the configuration for mcpjungle MCP server:
```json
{
  "mcpServers": {
    "mcpjungle": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "http://localhost:8080/mcp",
        "--allow-http"
      ]
    }
  }
}
```

Once you have added the configuration, try asking claude something simple: 
```text
Use context7 to get the documentation for `/lodash/lodash`
```

Claude will then attempt to call the `context7__get-library-docs` tool via MCPJungle, which will return the documentation for the Lodash library.

<p align="center">
  <img src="https://raw.githubusercontent.com/mcpjungle/MCPJungle/main/assets/quickstart-claude-call-tool.png" alt="claude calls context7 tool via mcpjungle" height="400">
</p>

You now have a working MCP setup with a single unified endpoint!

Next, explore the complete documentation at [docs.mcpjungle.com](https://docs.mcpjungle.com/) and the [public roadmap](https://docs.mcpjungle.com/roadmap).
