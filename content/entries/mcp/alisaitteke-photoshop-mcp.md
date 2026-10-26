---
slug: alisaitteke-photoshop-mcp
name: photoshop-mcp
tagline: MCP for Adobe Photoshop. 118 tools. Control from Cursor, Claude or custom LLMs.
summary: "Languages: English · 简体中文 · Español · Deutsch · 日本語 · Türkçe · Website"
categories:
  - productivity-ops
tags:
  - adobe
  - ai-assistant
  - claude
  - creative-automation
status: active
quality_percentile: 44
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alisaitteke/photoshop-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 737
  last_commit: 2026-10-24T23:44:40Z
  stars_delta_7d: 19
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 737
language: en
needs_keys: false
prerequisites:
  - Node.js >= 18
readme_source:
  repo: alisaitteke/photoshop-mcp
  path: README.md
  branch: master
  fetched_at: 2026-10-26T07:38:48.504Z
  truncated: false
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@alisaitteke/photoshop-mcp"
  env_vars: []
  confidence: manifest
---

# Photoshop MCP
<p align="center">
  <a href="https://github.com/alisaitteke/photoshop-mcp">
    <img src="https://raw.githubusercontent.com/alisaitteke/photoshop-mcp/master/images/readme-hero-v2.png" alt="Photoshop MCP — tell Photoshop what you want, AI does the clicking" width="100%" />
  </a>
</p>

**Languages:** English · [简体中文](https://github.com/alisaitteke/photoshop-mcp/blob/master/README.zh-CN.md) · [Español](https://github.com/alisaitteke/photoshop-mcp/blob/master/README.es.md) · [Deutsch](https://github.com/alisaitteke/photoshop-mcp/blob/master/README.de.md) · [日本語](https://github.com/alisaitteke/photoshop-mcp/blob/master/README.ja.md) · [Türkçe](https://github.com/alisaitteke/photoshop-mcp/blob/master/README.tr.md) · **[Website](https://photoshop-mcp.com/)**

[![npm version](https://img.shields.io/npm/v/@alisaitteke/photoshop-mcp.svg)](https://www.npmjs.com/package/@alisaitteke/photoshop-mcp)
[![GitHub release](https://img.shields.io/github/v/release/alisaitteke/photoshop-mcp?include_prereleases)](https://github.com/alisaitteke/photoshop-mcp/releases)
[![Action Plan](https://img.shields.io/badge/Action%20Plan-beta-amber.svg)](https://raw.githubusercontent.com/alisaitteke/photoshop-mcp/master/docs/standalone-ui.md#action-plan-beta)
[![Jev routing](https://img.shields.io/badge/Jev%20routing-opt--in-31A8FF.svg)](#new-instant-edits-with-jev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS-lightgrey.svg)](https://raw.githubusercontent.com/alisaitteke/photoshop-mcp/master/)
[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-io.github.alisaitteke%2Fphotoshop--mcp-purple.svg)](https://registry.modelcontextprotocol.io)
[![MCP Toplist](https://mcptoplist.com/badge/io.github.alisaitteke%2Fphotoshop-mcp.svg)](https://mcptoplist.com/server/io.github.alisaitteke%2Fphotoshop-mcp)
[![Website](https://img.shields.io/badge/website-photoshop--mcp-cyan.svg)](https://photoshop-mcp.com/)

[![Photoshop MCP Server MCP server – quality and maintenance score on Glama](https://glama.ai/mcp/servers/alisaitteke/photoshop-mcp/badges/card.svg)](https://glama.ai/mcp/servers/alisaitteke/photoshop-mcp)

**Chat with Photoshop like a colleague.** Describe what you want in plain words —
"remove this background", "resize these for Instagram" — and your AI assistant
does the clicking for you. Works with Cursor, Claude, or the built-in chat
window. No code, no scripts, no IDE required.

> **Note:** This is an unofficial, community-maintained project and is not affiliated with or endorsed by Adobe Inc.

## New: instant edits with Jev

<p align="center">
  <a href="https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/standalone-ui.md#jev-intent-routing-experimental-opt-in">
    <img src="https://raw.githubusercontent.com/alisaitteke/photoshop-mcp/master/images/readme-hero-jev.png" alt="Jev routes each prompt before any LLM runs: one safe command goes straight to Photoshop with no LLM call; plans, visual checks and vague requests go to the LLM" width="100%" />
  </a>
</p>

Not every prompt needs a language model. The built-in chat window can now ask
**Jev**, [TypeSafe AI](https://typesafe.ai)'s System One model, where each
message should go before any LLM runs. When Jev is confident you asked for one
of 26 safe commands and recipes (undo, opacity, blend mode, remove background,
color grade, split carousel, …), or a short chain of them like "black and white,
then opacity 50", it runs in Photoshop straight away: no LLM call, no LLM
tokens. Anything else, and hard-to-undo steps like merge or flatten, goes to the
Action Plan.

```bash
TYPESAFE_API_KEY=... npx -p @alisaitteke/photoshop-mcp ui
```

Experimental and opt-in. Without the key the UI works exactly as before and
nothing is sent to TypeSafe; with it, prompts also go to `api.typesafe.ai`.
Routes, thresholds and the off switch:
[`docs/standalone-ui.md`](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/standalone-ui.md#jev-intent-routing-experimental-opt-in).

## What can it do?

- ✂️ **Remove backgrounds** — subject isolated with a clean, editable mask
- 👤 **Retouch portraits** — skin smoothing, tone fixes, dodge & burn setup
- 🌐 **Export for web & social** — sRGB, sharpened, correctly sized for Instagram, X, and more
- 🎞️ **Make carousels** — split one wide design into seamless, numbered slides
- 💧 **Watermark in bulk** — a whole folder of photos in one go, originals untouched
- 🎨 **Color grade & more** — film looks, sky replacement, generative fill (Adobe account required)
- ⏪ **Stay safe** — every multi-step "recipe" is a single undo step in Photoshop

Under the hood: 128 tools (111 atomic + 17 one-step recipes) — full list in
[`docs/available-tools.md`](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/available-tools.md).

## Try saying

```
Remove the background from this portrait — keep it editable with a mask.
```

<img src="https://raw.githubusercontent.com/alisaitteke/photoshop-mcp/master/images/recipe-remove-bg.svg" alt="Remove background: subject isolated on transparency" width="640" />

```
Enhance this portrait — smooth the skin and fix the tones, medium intensity.
```

<img src="https://raw.githubusercontent.com/alisaitteke/photoshop-mcp/master/images/recipe-enhance-portrait.svg" alt="Enhance portrait: skin smoothing + auto tone in one undoable step" width="640" />

```
Prepare this design for web, then export Instagram and X post variants.
```

<img src="https://raw.githubusercontent.com/alisaitteke/photoshop-mcp/master/images/recipe-prepare-web.svg" alt="Prepare for web: sRGB, downscale, sharpen, optimized JPEG" width="640" />

```
Split this wide banner into a 5-slide seamless Instagram carousel.
```

<img src="https://raw.githubusercontent.com/alisaitteke/photoshop-mcp/master/images/recipe-carousel.svg" alt="Split one wide document into numbered carousel slides" width="640" />

More recipes (batch watermark, passport photos, CSV-driven cards, mockups, …) and
pre-engineered prompt templates: [`docs/prompt-layer.md`](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/prompt-layer.md).

## Get started

You need **Photoshop running** (Windows or macOS, any version 2012+) and **Node.js 18+**.

### Option 1 — Easiest: the built-in chat window

```bash
npx -p @alisaitteke/photoshop-mcp ui
```

A chat window opens in your browser. Sign in with an AI provider API key — or
reuse your existing **Claude Code** / **Gemini CLI** account, no key needed.

![Standalone UI Screenshot](https://raw.githubusercontent.com/alisaitteke/photoshop-mcp/master/images/frame_generic_light.png)

Details, providers, Action Plan (API key or CLI account), and security notes:
[`docs/standalone-ui.md`](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/standalone-ui.md).

### Option 2 — Inside your AI app (Cursor, Claude, VS Code)

**Cursor (shows the Photoshop logo in the MCP list):** install the plugin from **Customize → Plugins**, or search the [Cursor Marketplace](https://cursor.com/marketplace) for `photoshop-mcp` once it is listed. That package still launches `npx -y @alisaitteke/photoshop-mcp`; the plugin manifest is what supplies the icon.

Until the Marketplace listing is live, copy `.cursor-plugin/`, `mcp.json`, and `assets/` into `~/.cursor/plugins/local/photoshop-mcp` and reload the window — details in [CONTRIBUTING.md](https://github.com/alisaitteke/photoshop-mcp/blob/master/CONTRIBUTING.md#cursor-marketplace). The Install-in-Cursor button and a raw `mcp.json` entry still work, but they show a generic icon.

[![Install in Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=photoshop&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBhbGlzYWl0dGVrZS9waG90b3Nob3AtbWNwIl19)
[![Install in VS Code](https://img.shields.io/badge/Install%20in-VS%20Code-0098FF)](https://vscode.dev/redirect/mcp/install?name=photoshop&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40alisaitteke%2Fphotoshop-mcp%22%5D%7D)

Claude Code:

```bash
claude mcp add photoshop -- npx -y @alisaitteke/photoshop-mcp
```

Or add this to your MCP client's config (Cursor, Claude Desktop, …):

```json
{
  "mcpServers": {
    "photoshop": {
      "command": "npx",
      "args": ["-y", "@alisaitteke/photoshop-mcp"]
    }
  }
}
```

## How it works

1. **You type** what you want in plain language.
2. **The AI plans** the steps, checking the document state first.
3. **Photoshop executes** — each recipe lands as one undoable step.

Something went wrong? The AI reads the structured error and knows what to try
next. Common fixes: [`docs/troubleshooting.md`](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/troubleshooting.md).

## Documentation

- [Available tools](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/available-tools.md) — all 128 tools with parameters
- [Standalone UI](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/standalone-ui.md) — providers, auth modes, Action Plan, security
- [Prompt layer](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/prompt-layer.md) — prompt templates and recipes
- [Architecture](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/architecture.md) — how the bridge works under the hood
- [Development](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/development.md) — build from source, tests

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](https://github.com/alisaitteke/photoshop-mcp/blob/master/CONTRIBUTING.md) before opening a PR.

## ❤️ Contributors & Credits

Thanks to all our contributors!

<a href="https://github.com/alisaitteke/photoshop-mcp/graphs/contributors"><img src="https://contrib.rocks/image?repo=alisaitteke/photoshop-mcp" alt="Contributors" /></a>

## Maintainer

Built by **[Ali Sait Teke](https://alisait.com)** — [GitHub](https://github.com/alisaitteke) · [LinkedIn](https://www.linkedin.com/in/alisait/).

## License

MIT

Anonymous, aggregated usage analytics are collected by default and can be
disabled anytime — details in [`docs/anonymous-usage-analytics.md`](https://github.com/alisaitteke/photoshop-mcp/blob/master/docs/anonymous-usage-analytics.md).
