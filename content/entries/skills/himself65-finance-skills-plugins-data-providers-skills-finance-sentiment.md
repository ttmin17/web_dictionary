---
slug: himself65-finance-skills-plugins-data-providers-skills-finance-sentiment
name: finance-sentiment
tagline: "Fetch normalized stock sentiment across Reddit, X.com, financial news,
  and Polymarket from the Adanos Finance API: buzz score, bullish percentage,
  men"
summary: This skill is read-only. It is designed for research questions that are
  easier to answer with normalized sentiment signals than with raw social feeds.
categories:
  - domain-research
status: active
quality_percentile: 38
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: himself65/finance-skills
  subpath: plugins/data-providers/skills/finance-sentiment
  official_vendor: false
  license: MIT
signals:
  stars: 3404
  last_commit: 2026-10-11T12:20:45Z
  stars_delta_7d: 80
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 3404
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: himself65/finance-skills
  path: plugins/data-providers/skills/finance-sentiment/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:19.222Z
  truncated: false
type: agent_skill
skill:
  skill_name: finance-sentiment
  description: >
    Fetch normalized stock sentiment across Reddit, X.com, financial news, and
    Polymarket from the Adanos Finance API: buzz score, bullish percentage,
    mention or trade counts, and trend. Use this skill whenever the user asks
    how much a stock is being discussed or how hot it is on social platforms,
    how many Reddit mentions or Polymarket bets a company has, whether Reddit,
    X, and news agree, or wants to compare stock buzz and sentiment across
    tickers. Read-only: it never places trades or modifies anything.
  folder_path: plugins/data-providers/skills/finance-sentiment
  extra_files:
    - README.md
    - references/api_reference.md
tags:
  - research
  - finance
---

# Finance Sentiment Skill
Fetches structured stock sentiment from the Adanos Finance API.

This skill is read-only. It is designed for research questions that are easier to answer with normalized sentiment signals than with raw social feeds.

Use it when the user wants:
- cross-source stock sentiment
- Reddit/X.com/news/Polymarket comparisons
- buzz, bullish percentage, mentions, trades, or trend
- a quick answer to "what is the market talking about?"

---## Step 1: Ensure the API Key Is Available

**Current environment status:**

```bash
!`python3 - <<'PY'
import os
print("ADANOS_API_KEY_SET" if os.getenv("ADANOS_API_KEY") else "ADANOS_API_KEY_MISSING")
PY`
```

If `ADANOS_API_KEY_MISSING`, ask the user to set:

```bash
export ADANOS_API_KEY="sk_live_..."
```

Use the key via the `X-API-Key` header on all requests.

Base docs:

```text
https://api.adanos.org/docs
```

---## Step 2: Identify What the User Needs

Match the request to the lightest endpoint that answers it.

| User Request | Endpoint Pattern | Notes |
|---|---|---|
| "How much are Reddit users talking about TSLA?" | `/reddit/stocks/v1/compare` | Use `mentions`, `buzz_score`, `bullish_pct`, `trend` |
| "How hot is NVDA on X.com?" | `/x/stocks/v1/compare` | Use `mentions`, `buzz_score`, `bullish_pct`, `trend` |
| "How many Polymarket bets are active on Microsoft?" | `/polymarket/stocks/v1/compare` | Use `trade_count`, `buzz_score`, `bullish_pct`, `trend` |
| "Compare sentiment on AMD vs NVDA" | compare endpoints for the requested sources | Batch tickers in one request |
| "Is Reddit aligned with X on META?" | Reddit compare + X compare | Compare `bullish_pct`, `buzz_score`, `trend` |
| "Give me a full sentiment snapshot for TSLA" | compare endpoints across Reddit, X.com, news, Polymarket | Synthesize cross-source view |
| "Go deeper on one ticker" | `/stock/{ticker}` detail endpoint | Use only when the user asks for expanded detail |

Default lookback:
- use `days=7` unless the user asks for another window

Ticker count:
- use compare endpoints for `1..10` tickers

---## Step 3: Execute the Request

Use `curl` with `X-API-Key`. Prefer compare endpoints because they are compact and batch-friendly.

### Single-source examples

```bash
curl -s "https://api.adanos.org/reddit/stocks/v1/compare?tickers=TSLA&days=7" \
  -H "X-API-Key: $ADANOS_API_KEY"
```

```bash
curl -s "https://api.adanos.org/x/stocks/v1/compare?tickers=NVDA&days=7" \
  -H "X-API-Key: $ADANOS_API_KEY"
```

```bash
curl -s "https://api.adanos.org/polymarket/stocks/v1/compare?tickers=MSFT&days=7" \
  -H "X-API-Key: $ADANOS_API_KEY"
```

### Multi-source snapshot for one ticker

```bash
curl -s "https://api.adanos.org/reddit/stocks/v1/compare?tickers=TSLA&days=7" -H "X-API-Key: $ADANOS_API_KEY"
curl -s "https://api.adanos.org/x/stocks/v1/compare?tickers=TSLA&days=7" -H "X-API-Key: $ADANOS_API_KEY"
curl -s "https://api.adanos.org/news/stocks/v1/compare?tickers=TSLA&days=7" -H "X-API-Key: $ADANOS_API_KEY"
curl -s "https://api.adanos.org/polymarket/stocks/v1/compare?tickers=TSLA&days=7" -H "X-API-Key: $ADANOS_API_KEY"
```

### Multi-ticker comparison

```bash
curl -s "https://api.adanos.org/reddit/stocks/v1/compare?tickers=AMD,NVDA,META&days=7" \
  -H "X-API-Key: $ADANOS_API_KEY"
```

### Key rules

1. Prefer compare endpoints over stock detail endpoints for quick research.
2. Use only the sources needed to answer the question.
3. For Reddit, X.com, and news, the volume field is `mentions`.
4. For Polymarket, the activity field is `trade_count`.
5. Treat missing source data as "no data", not bearish or neutral.
6. Never execute trades or convert the result into trading instructions.

---## Step 4: Present the Results

When reporting a single source, prioritize exactly these fields:
- Buzz
- Bullish %
- Mentions or Trades
- Trend

Example:

```text
TSLA on Reddit, last 7 days
- Buzz: 74.1/100
- Bullish: 31%
- Mentions: 647
- Trend: rising
```

When reporting multiple sources for one ticker:
- show one block per source
- then add a short synthesis:
  - aligned bullish
  - aligned bearish
  - mixed / diverging

When comparing multiple tickers:
- rank by the metric the user cares about
- default to `buzz_score`
- call out large gaps in `bullish_pct` or `trend`

Do not overstate precision. These are research signals, not trade instructions.

---## Reference Files

- `references/api_reference.md` - endpoint guide, field meanings, and example workflows

Read the reference file when you need the exact field names, query parameters, or recommended answer patterns.
