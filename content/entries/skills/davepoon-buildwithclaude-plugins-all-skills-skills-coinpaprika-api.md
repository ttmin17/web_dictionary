---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-coinpaprika-api
name: coinpaprika-api
tagline: "Access cryptocurrency market data from CoinPaprika: prices, tickers,
  OHLCV, exchanges, contract lookups for 12,000+ coins and 350+ exchanges. Free
  tie"
summary: "- getGlobal — Total market cap, BTC dominance, 24h volume - getTickers
  / getTickersById — Price, market cap, volume for coins -
  getTickersHistoricalById — Historical price ticks - getCoins / getCoinById —
  Coin details..."
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
  subpath: plugins/all-skills/skills/coinpaprika-api
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
  path: plugins/all-skills/skills/coinpaprika-api/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.581Z
  truncated: false
type: agent_skill
skill:
  skill_name: coinpaprika-api
  description: "Access cryptocurrency market data from CoinPaprika: prices,
    tickers, OHLCV, exchanges, contract lookups for 12,000+ coins and 350+
    exchanges. Free tier, no API key needed. Install MCP: add
    https://mcp.coinpaprika.com/sse as SSE server, or install plugin: /plugin
    marketplace add coinpaprika/claude-marketplace"
  folder_path: plugins/all-skills/skills/coinpaprika-api
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# CoinPaprika API
Access cryptocurrency market data for 12,000+ coins and 350+ exchanges via the CoinPaprika MCP server.

## Setup

Add the MCP server to your Claude Code config:

```json
{
  "mcpServers": {
    "coinpaprika": {
      "url": "https://mcp.coinpaprika.com/sse"
    }
  }
}
```

Or install the full plugin (includes agent + skill):
```
/plugin marketplace add coinpaprika/claude-marketplace
/plugin install coinpaprika@coinpaprika-plugins
```

## Available MCP Tools (29)

- `getGlobal` — Total market cap, BTC dominance, 24h volume
- `getTickers` / `getTickersById` — Price, market cap, volume for coins
- `getTickersHistoricalById` — Historical price ticks
- `getCoins` / `getCoinById` — Coin details, descriptions, links, teams
- `getCoinEvents` / `getCoinExchanges` / `getCoinMarkets` — Events, exchange listings, trading pairs
- `getCoinOHLCVHistorical` / `getCoinOHLCVLatest` / `getCoinOHLCVToday` — Candlestick data
- `getExchanges` / `getExchangeByID` / `getExchangeMarkets` — Exchange data
- `getPlatforms` / `getContracts` / `getTickerByContract` / `getHistoricalTickerByContract` — Contract lookups
- `search` / `resolveId` — Find coins, exchanges, people, tags
- `priceConverter` — Convert between currencies
- `getTags` / `getTagById` / `getPeopleById` — Categories and team info
- `keyInfo` / `getMappings` / `getChangelogIDs` / `status` — Account and metadata

## Coin ID Format

Pattern: `{symbol}-{name}` lowercase. Examples: `btc-bitcoin`, `eth-ethereum`, `sol-solana`.

Use `search` or `resolveId` if unsure of the correct ID.

## Rate Limits

- Free tier: 20,000 calls/month, no API key needed
- Pro tier: higher limits via api-pro.coinpaprika.com
- Docs: https://docs.coinpaprika.com
