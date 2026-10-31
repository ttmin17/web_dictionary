---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-dexpaprika-api
name: dexpaprika-api
tagline: "Access DeFi data from DexPaprika: token prices, liquidity pools,
  OHLCV, transactions across 34+ blockchains and 30M+ pools. Free, no API key
  needed. I"
summary: "- getCapabilities — Server capabilities, workflow examples, network
  synonyms - getNetworks — List 34+ supported blockchains - getStats —
  Platform-wide statistics - getNetworkDexes — DEXes on a network -
  getNetworkPool..."
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/all-skills/skills/dexpaprika-api
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/dexpaprika-api/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.583Z
  truncated: false
type: agent_skill
skill:
  skill_name: dexpaprika-api
  description: "Access DeFi data from DexPaprika: token prices, liquidity pools,
    OHLCV, transactions across 34+ blockchains and 30M+ pools. Free, no API key
    needed. Install MCP: add https://mcp.dexpaprika.com/sse as SSE server, or
    install plugin: /plugin marketplace add coinpaprika/claude-marketplace"
  folder_path: plugins/all-skills/skills/dexpaprika-api
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# DexPaprika API
Access DeFi data across 34+ blockchains, 30M+ liquidity pools, and 28M+ tokens via the DexPaprika MCP server.

## Setup

Add the MCP server to your Claude Code config:

```json
{
  "mcpServers": {
    "dexpaprika": {
      "url": "https://mcp.dexpaprika.com/sse"
    }
  }
}
```

Or install the full plugin (includes agent + 4 skills):
```
/plugin marketplace add coinpaprika/claude-marketplace
/plugin install dexpaprika@coinpaprika-plugins
```

## Available MCP Tools (14)

- `getCapabilities` — Server capabilities, workflow examples, network synonyms
- `getNetworks` — List 34+ supported blockchains
- `getStats` — Platform-wide statistics
- `getNetworkDexes` — DEXes on a network
- `getNetworkPools` — Top pools (sortable by volume, price, txns)
- `getNetworkPoolsFilter` — Filter pools by volume, txns, creation date
- `getDexPools` — Pools for a specific DEX
- `getPoolDetails` — Pool details (tokens, volume, liquidity)
- `getPoolOHLCV` — Historical price candles (1m to 24h intervals)
- `getPoolTransactions` — Recent swaps and trades
- `getTokenDetails` — Token price, liquidity, metrics
- `getTokenPools` — All pools containing a token
- `getTokenMultiPrices` — Batch prices for up to 10 tokens
- `search` — Search tokens, pools, DEXes across all networks

## Common Network IDs

`ethereum`, `solana`, `bsc`, `polygon`, `arbitrum`, `base`, `avalanche`, `optimism`, `sui`, `ton`, `tron`

## Rate Limits

- Free: 10,000 requests/day, no API key needed
- Docs: https://docs.dexpaprika.com
- Streaming: https://streaming.dexpaprika.com (real-time SSE, ~1s updates)
