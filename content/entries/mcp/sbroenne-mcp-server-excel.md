---
slug: sbroenne-mcp-server-excel
name: mcp-server-excel
tagline: Automate real Microsoft Excel with AI via MCP Server or CLI — Power
  Query, DAX, VBA, PivotTables, charts, and 412 operations.
summary: Automate real Microsoft Excel with AI. Excel MCP Server lets GitHub
  Copilot, Claude, ChatGPT, and other agents control Excel through
  natural-language requests—using either MCP or a token-efficient CLI.
categories:
  - media-creative
tags:
  - ai-automation
  - claude-ai
  - com-automation
  - conditional-formatting
status: active
quality_percentile: 37
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: sbroenne/mcp-server-excel
  official_vendor: false
  license: MIT
signals:
  stars: 834
  last_commit: 2026-10-25T17:35:44Z
  stars_delta_7d: 6
  stars_growth_pct: 0.7
  trending_score: 6.04
  rank_current: 80
  rank_delta: -23
  velocity_source: snapshot_delta
  sparkline_4w:
    - 817
    - 828
    - 834
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: sbroenne/mcp-server-excel
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:38:48.211Z
  truncated: false
type: mcp_server
launch:
  transport: stdio
  args: []
  env_vars: []
  confidence: none
---

# ExcelMcp - MCP Server for Microsoft Excel
[**Website**](https://excelmcpserver.dev/) ·
[**Installation**](https://excelmcpserver.dev/installation/) ·
[**Features**](https://excelmcpserver.dev/features/) ·
[**Troubleshooting**](https://excelmcpserver.dev/troubleshooting/) ·
[**2-minute demo**](https://youtu.be/wbw3-hPcE2o)

**Automate real Microsoft Excel with AI.** Excel MCP Server lets GitHub Copilot,
Claude, ChatGPT, and other agents control Excel through natural-language
requests—using either MCP or a token-efficient CLI.

Unlike file-parser tools, ExcelMcp drives the **actual Excel application** through
its official COM API. It can refresh Power Query, recalculate formulas, evaluate
DAX, run VBA and Python `=PY()`, and preserve PivotTables, charts, macros, the
Data Model, and workbook formatting.

**63 MCP tools across 33 feature areas, with 425 operations**, cover end-to-end Excel automation.

> [!IMPORTANT]
> Requires **Windows**, **Microsoft Excel 2016 or later**, and an interactive
> desktop. It is not intended for Linux, macOS, or server-side batch processing.

## 🚀 Get Started

| Use case | Recommended path |
|---|---|
| **VS Code** | [Install the extension](https://marketplace.visualstudio.com/items?itemName=sbroenne.excel-mcp) |
| **Claude Desktop or another MCP client** | [Install the MCP Server](https://excelmcpserver.dev/installation-mcp-server/) |
| **Coding agents (fewer AI tokens)** | [Install the CLI](https://excelmcpserver.dev/installation-cli/) |
| **Not sure which to choose?** | [Read the installation overview](https://excelmcpserver.dev/installation/) |

For **GitHub Copilot CLI**, install either plugin from the
[Awesome Copilot Excel listings](https://github.com/github/awesome-copilot/blob/main/plugins/external.json):

```powershell
copilot plugin install excel-mcp@awesome-copilot
# Or, for command-line Excel automation:
copilot plugin install excel-cli@awesome-copilot
```

Close open Excel workbooks before starting; ExcelMcp requires exclusive access
while automating them.

## What You Can Automate

- **[Data & analytics](https://excelmcpserver.dev/features/data-analytics/):**
  Power Query, DAX, Power Pivot, Excel Tables, PivotTables, and data connections.
- **[Cells & workbooks](https://excelmcpserver.dev/features/cells-workbooks/):**
  ranges, formulas, formatting, worksheets, files, calculation, and named ranges.
- **[Charts & visuals](https://excelmcpserver.dev/features/charts-visuals/):**
  charts, slicers, conditional formatting, screenshots, drawings, and sparklines.
- **[Automation & advanced](https://excelmcpserver.dev/features/automation-advanced/):**
  VBA, Python in Excel, Goal Seek, scenarios, data tables, windows, and XML Maps.

Explore the [capabilities behind all 425 operations](https://excelmcpserver.dev/features/).
Current command details come from CLI help or the MCP tool descriptions.

## See It in Action

[![A sales table, regional summary, and chart created in the real Excel application by Excel MCP Server](https://excelmcpserver.dev/assets/images/excel-demo-table-chart.png)](https://excelmcpserver.dev/use-cases/)

Ask in plain language:

- *"Import products.csv with Power Query and load it to the Data Model."*
- *"Create a PivotTable showing revenue by region, then add a column chart."*
- *"Use Goal Seek to find the price that produces $100,000 profit."*
- *"Show me Excel while you work."*

Because Excel performs the work, you can inspect results live and continue editing
the workbook normally.

[See more examples and use cases](https://excelmcpserver.dev/use-cases/).

## MCP Server or CLI?

Both entry points expose the same Excel commands and behavior, so the choice is
technical. Coding agents can use either one.

| Interface | Works with | Why |
|---|---|---|
| **MCP Server** | Any MCP-compatible client | Tool discovery and persistent sessions |
| **CLI (`excelcli`)** | Agents that can run terminal commands | Built-in help without loading MCP tool definitions, usually with fewer AI tokens |

The MCP Server calls the ExcelMcp service in-process. The CLI uses a background
daemon so workbook sessions persist across commands.

```text
AI assistant or script
        │
   MCP Server / CLI
        │
 Shared Excel commands
        │
 Real Excel COM API
```

[Read the architecture](https://github.com/sbroenne/mcp-server-excel/blob/main/docs/ARCHITECTURE.md) or browse the
[MCP Server](https://excelmcpserver.dev/mcp-server/) and
[CLI](https://excelmcpserver.dev/cli/) guides.

## ⭐ GitHub Star History

[![GitHub stars over time for ExcelMcp](https://excelmcpserver.dev/assets/images/star-history.svg)](https://github.com/sbroenne/mcp-server-excel/stargazers)

## 📋 Additional Information

[Documentation](https://excelmcpserver.dev/) ·
[Changelog](https://excelmcpserver.dev/changelog/) ·
[Contributing](https://excelmcpserver.dev/contributing/) ·
[Security](https://excelmcpserver.dev/security/) ·
[Privacy](https://excelmcpserver.dev/privacy/)

**License:** MIT License - see [LICENSE](https://github.com/sbroenne/mcp-server-excel/blob/main/LICENSE) file

## Related Projects

Other projects by the author:

- [PowerPoint MCP Server](https://powerpointmcpserver.dev/) — AI-powered PowerPoint automation via MCP, the sister project to this one
- [pytest-skill-engineering](https://github.com/sbroenne/pytest-skill-engineering) — LLM-powered testing framework for AI agents
- [Windows MCP Server](https://windowsmcpserver.dev/) — AI-powered Windows automation via MCP
- [OBS Studio MCP Server](https://github.com/sbroenne/mcp-server-obs) — AI-powered OBS Studio automation
