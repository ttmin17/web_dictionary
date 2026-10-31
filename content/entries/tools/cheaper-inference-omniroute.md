---
slug: cheaper-inference-omniroute
name: OmniRoute
tagline: "Never stop coding. Free MIT AI gateway: one endpoint, 375 providers
  (150+ free), 1,400+ models Kimi, Claude, GPT, Gemini, GLM, DeepSeek, MiniMax.
  Work"
summary: ⭐ Star the repo if OMNIROUTE helped you save money and make your work easier.
categories:
  - agent-frameworks
tags:
  - a2a
  - ai-agents
  - ai-gateway
  - anthropic
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: cheaper-inference/OmniRoute
  official_vendor: false
  license: MIT
signals:
  stars: 81233
  last_commit: 2026-10-26T07:28:37Z
  stars_delta_7d: 3503
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 81233
language: en
needs_keys: false
prerequisites:
  - node
readme_source:
  repo: cheaper-inference/OmniRoute
  path: README.md
  branch: release/v3.8.53
  fetched_at: 2026-10-26T07:41:15.364Z
  truncated: true
type: agent_tool
tool:
  subcategory: desktop_ui
  install_command: npx omniroute
  runtime: node
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: npx
    args:
      - -y
      - omniroute
    env_vars: []
    confidence: manifest
---

<div align="center">

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/screenshots/MainOmniRoute.png" alt="OmniRoute Dashboard" width="820"/>

<br/>
<br/>

# 🚀 OmniRoute — The Free AI Gateway

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/diagrams/readme-hero.svg" width="100%" alt="OmniRoute — Never stop coding. Every AI tool → 375 providers — 150+ free — through one endpoint. Claude Code, Codex, Cursor, Cline, Copilot & Antigravity into FREE Claude / GPT / Gemini with auto-fallback. RTK + Caveman stacked compression saves 15–95% tokens (~89% avg) — never hit limits. 375 AI providers · 150+ free tiers · ~1.62B free tokens/mo · 20 routing strategies · $0 to start."/>

</div>

<div align="center">

## 💰 ~1.62B Tokens / Month Across Third-Party Free Tiers

</div>

> **Bring your own provider accounts.** This is an estimated aggregate across separately eligible third-party free tiers, not a token grant from OmniRoute. Sign up, obtain credentials where required, and connect the providers you can use; each provider controls its limits, availability, and terms.
>
> Stacking free tiers by hand is painful — dozens of SDKs, dozens of rate limits, and no idea how much you actually have. OmniRoute catalogs **471 free-tier entries across 34 recurring pool keys** and computes the token headline from the **17 pools with a published positive monthly budget plus five per-model Groq caps**, deduplicated by shared pool. Quotas that only open after a regional identity check (today: ModelScope) are shown apart, +~6M behind regional identity verification, and never summed into the headline. The result stays visible on the dashboard (`/dashboard/free-tiers`).

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/diagrams/free-tier-budget.svg" width="100%" alt="OmniRoute free-tier budget card: ~1.62B free tokens per month steady, up to ~2.22B in the first month with signup credits, from 34 documented recurring pool keys covering 471 cataloged free-tier entries behind one endpoint. Honest pool-deduped math — each shared pool counted once, including 17 recurring pools with a published positive monthly token budget plus five per-model Groq caps; 12 providers are marked avoid in the terms-risk catalog so you decide. Budget bar includes Mistral 1B, Nara 210M, LLM7 150M, xKiro 150M, Groq 30M (five per-model caps) and smaller pools, plus first-month signup credits and permanently-free no-token-cap providers surfaced separately so they never inflate the headline. Live used/remaining on /dashboard/free-tiers."/>

> Animated summary of the live `/dashboard/free-tiers` page. Full methodology (pool dedupe, credit tiers, provider terms): **[docs/reference/FREE_TIERS.md](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/FREE_TIERS.md)**.
>
> <sub>These figures are re-audited every two weeks against the live catalog and **move both ways** — a provider ends a free tier and the number drops; a new one lands and it climbs. We publish what the catalog actually computes, never a rounded-up best case.</sub>

<br/>

<div align="center">

<h3>

⭐ Star the repo if OMNIROUTE helped you save money and make your work easier.

</h3>

[![Stars](https://img.shields.io/github/stars/diegosouzapw/OmniRoute?style=social)](https://github.com/diegosouzapw/OmniRoute)
<a href="https://trendshift.io/repositories/23589" target="_blank"><img src="https://trendshift.io/api/badge/repositories/23589" alt="diegosouzapw%2FOmniRoute | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
[![Star History Rank](https://api.star-history.com/badge?repo=diegosouzapw/OmniRoute&theme=dark)](https://www.star-history.com/diegosouzapw/omniroute)
[![olud.ai](https://olud.ai/badge.php?tool=diegosouzapw-omniroute)](https://olud.ai/project/diegosouzapw-omniroute.html)

### 💬 Join the community

**👋 Follow the maintainer — get new providers, releases & tips first:**

[![Follow Diego on LinkedIn](https://img.shields.io/badge/Follow_Diego_on-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diegosouzapw/)
[![Follow @diegosouzapw on GitHub](https://img.shields.io/github/followers/diegosouzapw?style=for-the-badge&logo=github&logoColor=white&label=Follow%20on%20GitHub&color=181717)](https://github.com/diegosouzapw)

[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/U47eFqAXCn)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/omnirouteOficial)
[![WhatsApp Global](https://img.shields.io/badge/WhatsApp_Global-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/FvuCbrpZmQ6I85n2vW5QIC?s=cl&p=a&mlu=4)
[![WhatsApp Brasil](https://img.shields.io/badge/WhatsApp_Brasil-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/KWgatljAjmbELQory59Oti?s=cl&p=a&mlu=4)
[![Website](https://img.shields.io/badge/Website-omniroute.online-blue?logo=google-chrome&logoColor=white)](https://omniroute.online)

**Questions, provider tips, roadmap & support → [Discord](https://discord.gg/U47eFqAXCn) · [Telegram](https://t.me/omnirouteOficial) · WhatsApp [🌍 Global](https://chat.whatsapp.com/FvuCbrpZmQ6I85n2vW5QIC?s=cl&p=a&mlu=4) / [🇧🇷 Brasil](https://chat.whatsapp.com/KWgatljAjmbELQory59Oti?s=cl&p=a&mlu=4) / [Portal](https://portal.sthub.com.br/communities/groups/st-hub/channels/Omniroute-World-8kRjmK)**

<br/>

## 📈 The Gateway Keeps Growing

<div align="center">

|                           |          v3.8.50          | **v3.8.51** |      `v3.8.53+`       |
| ------------------------- | :-----------------------: | :---------: | :-------------------: |
| 🌐 Providers              |            352            |   **358**   |          375          |
| 🧠 Unique chat model IDs  |           1320            |  **1374**   |         1475          |
| 🖼️ Modality Bridge        | 🆕 vision + audio + video |      ✓      |           ✓           |
| 📡 Radar free catalog     |         🆕 opt-in         |      ✓      |           ✓           |
| ⚖️ Quota-aware scheduling |      🆕 Quota-Share       |      ✓      |           ✓           |
| 📊 Quota telemetry        |          🆕 live          |      ✓      |           ✓           |
| 🧰 Headless mode          |             —             |      —      | 🆕 `serve --headless` |
| 🛤️ LTS rail infra         |             —             |      —      |  🆕 release channels  |
| 🔎 Model discovery API    |             —             |      —      | 🆕 `/v1/models/query` |

**→ [Roadmap](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/ROADMAP.md) — riding the rail to `v3.9.0 LTS`**

</div>

<br/>

## 🧩 Available

[![npm version](https://img.shields.io/npm/v/omniroute?color=cb3837&logo=npm)](https://www.npmjs.com/package/omniroute)
![NPM Monthly](https://img.shields.io/npm/dm/omniroute?label=npm/month&color=cb3837&logo=npm)
[![Docker Hub](https://img.shields.io/docker/v/diegosouzapw/omniroute?label=Docker%20Hub&logo=docker&color=2496ED)](https://hub.docker.com/r/diegosouzapw/omniroute)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/LICENSE)
![Docker Pulls](https://img.shields.io/docker/pulls/diegosouzapw/omniroute?label=docker%20pulls&logo=docker&color=2496ED)
![Electron Downloads](https://img.shields.io/github/downloads/diegosouzapw/omniroute/total?style=flat&label=electron%20downloads&logo=electron&color=47848F)

<table>
  <tr>
    <td align="right"><b>🚀 Start</b></td>
    <td align="center"><a href="#-quick-start">🚀 Quick Start</a></td>
    <td align="center"><a href="#-more-install-methods--docker-source-pnpm-arch">📦 Install</a></td>
    <td align="center"><a href="#first-run">🆓 Connect a provider</a></td>
  </tr>
  <tr>
    <td align="right"><b>💡 Learn</b></td>
    <td align="center"><a href="#-the-promise">💥 The Promise</a></td>
    <td align="center"><a href="#-why-omniroute">🤔 Why OmniRoute</a></td>
    <td align="center"><a href="#-what-sets-omniroute-apart">🏆 What Sets Apart</a></td>
  </tr>
  <tr>
    <td align="right"><b>⚙️ Features</b></td>
    <td align="center"><a href="#-combos--the-flagship">🎯 Combos</a></td>
    <td align="center"><a href="#-375-ai-providers--153-catalog-marked-free">🌐 Providers</a></td>
    <td align="center"><a href="#-full-cli--a2a--mcp">🔌 CLI &amp; MCP</a></td>
  </tr>
  <tr>
    <td align="right"></td>
    <td align="center"><a href="#%EF%B8%8F-save-1595-tokens--automatically">🗜️ Compression</a></td>
    <td align="center"><a href="#%EF%B8%8F-where-omniroute-runs--anywhere">🖥️ Where It Runs</a></td>
    <td align="center"><a href="#-private--local-first">🔒 Private</a></td>
  </tr>
  <tr>
    <td align="right"><b>👀 See it</b></td>
    <td align="center"><a href="#-omniroute-in-action">🎬 In Action</a></td>
    <td align="center"><a href="#-whats-new">✨ What's New</a></td>
    <td align="center"><a href="#-compatible-clis--coding-agents">🤖 Compatible CLIs</a></td>
  </tr>
  <tr>
    <td align="right"><b>💚 Support</b></td>
    <td align="center"><a href="#-support-omniroute">💚 Support / Donate</a></td>
    <td align="center"><a href="#-community--help">💬 Community</a></td>
    <td align="center"><a href="#-sponsors">💖 Sponsors</a></td>
  </tr>
  <tr>
    <td align="right"><b>📦 Project</b></td>
    <td align="center"><a href="#%EF%B8%8F-tech-stack">🛠️ Tech Stack</a></td>
    <td align="center"><a href="#-documentation">📖 Docs</a></td>
    <td align="center"><a href="#-900-contributors">👥 Contributors</a></td>
  </tr>
</table>

</div>

<div align="center">
  <b>🌐 In 67 languages</b>
  <br/><br/>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/us.svg" width="30" alt="English (en)" title="English (en)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/pt-BR/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/br.svg" width="30" alt="Português — Brasil (pt-BR)" title="Português — Brasil (pt-BR)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/pt/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/pt.svg" width="30" alt="Português (pt)" title="Português (pt)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/es/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/es.svg" width="30" alt="Español (es)" title="Español (es)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/fr/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/fr.svg" width="30" alt="Français (fr)" title="Français (fr)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/it/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/it.svg" width="30" alt="Italiano (it)" title="Italiano (it)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/de/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/de.svg" width="30" alt="Deutsch (de)" title="Deutsch (de)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/nl/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/nl.svg" width="30" alt="Nederlands (nl)" title="Nederlands (nl)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ru/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ru.svg" width="30" alt="Русский (ru)" title="Русский (ru)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/uk-UA/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ua.svg" width="30" alt="Українська (uk-UA)" title="Українська (uk-UA)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/pl/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/pl.svg" width="30" alt="Polski (pl)" title="Polski (pl)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/cs/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/cz.svg" width="30" alt="Čeština (cs)" title="Čeština (cs)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/sk/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/sk.svg" width="30" alt="Slovenčina (sk)" title="Slovenčina (sk)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ro/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ro.svg" width="30" alt="Română (ro)" title="Română (ro)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/hu/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/hu.svg" width="30" alt="Magyar (hu)" title="Magyar (hu)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/bg/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/bg.svg" width="30" alt="Български (bg)" title="Български (bg)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/da/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/dk.svg" width="30" alt="Dansk (da)" title="Dansk (da)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/fi/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/fi.svg" width="30" alt="Suomi (fi)" title="Suomi (fi)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/no/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/no.svg" width="30" alt="Norsk (no)" title="Norsk (no)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/sv/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/se.svg" width="30" alt="Svenska (sv)" title="Svenska (sv)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/zh-CN/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/cn.svg" width="30" alt="中文 — 简体 (zh-CN)" title="中文 — 简体 (zh-CN)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/zh-TW/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/tw.svg" width="30" alt="中文 — 繁體 (zh-TW)" title="中文 — 繁體 (zh-TW)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ja/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/jp.svg" width="30" alt="日本語 (ja)" title="日本語 (ja)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ko/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/kr.svg" width="30" alt="한국어 (ko)" title="한국어 (ko)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/th/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/th.svg" width="30" alt="ไทย (th)" title="ไทย (th)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/vi/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/vn.svg" width="30" alt="Tiếng Việt (vi)" title="Tiếng Việt (vi)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/id/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/id.svg" width="30" alt="Bahasa Indonesia (id)" title="Bahasa Indonesia (id)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ms/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/my.svg" width="30" alt="Bahasa Melayu (ms)" title="Bahasa Melayu (ms)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/phi/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ph.svg" width="30" alt="Filipino (phi)" title="Filipino (phi)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/hi/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/in.svg" width="30" alt="हिन्दी (hi)" title="हिन्दी (hi)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/gu/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/in.svg" width="30" alt="ગુજરાતી (gu)" title="ગુજરાતી (gu)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/mr/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/in.svg" width="30" alt="मराठी (mr)" title="मराठी (mr)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ta/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/in.svg" width="30" alt="தமிழ் (ta)" title="தமிழ் (ta)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/te/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/in.svg" width="30" alt="తెలుగు (te)" title="తెలుగు (te)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/bn/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/bd.svg" width="30" alt="বাংলা (bn)" title="বাংলা (bn)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ur/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/pk.svg" width="30" alt="اردو (ur)" title="اردو (ur)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/fa/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ir.svg" width="30" alt="فارسی (fa)" title="فارسی (fa)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ar/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/sa.svg" width="30" alt="العربية (ar)" title="العربية (ar)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/he/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/il.svg" width="30" alt="עברית (he)" title="עברית (he)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/tr/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/tr.svg" width="30" alt="Türkçe (tr)" title="Türkçe (tr)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/az/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/az.svg" width="30" alt="Azərbaycan (az)" title="Azərbaycan (az)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/sw/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/tz.svg" width="30" alt="Kiswahili (sw)" title="Kiswahili (sw)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/el/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/gr.svg" width="30" alt="Ελληνικά (el)" title="Ελληνικά (el)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/hr/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/hr.svg" width="30" alt="Hrvatski (hr)" title="Hrvatski (hr)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/sr/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/rs.svg" width="30" alt="Српски (sr)" title="Српски (sr)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/lt/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/lt.svg" width="30" alt="Lietuvių (lt)" title="Lietuvių (lt)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/et/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ee.svg" width="30" alt="Eesti (et)" title="Eesti (et)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/lv/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/lv.svg" width="30" alt="Latviešu (lv)" title="Latviešu (lv)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/sl/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/si.svg" width="30" alt="Slovenščina (sl)" title="Slovenščina (sl)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/mt/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/mt.svg" width="30" alt="Malti (mt)" title="Malti (mt)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ga/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ie.svg" width="30" alt="Gaeilge (ga)" title="Gaeilge (ga)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/kn/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/in.svg" width="30" alt="ಕನ್ನಡ (kn)" title="ಕನ್ನಡ (kn)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ml/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/in.svg" width="30" alt="മലയാളം (ml)" title="മലയാളം (ml)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/or/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/in.svg" width="30" alt="ଓଡ଼ିଆ (or)" title="ଓଡ଼ିଆ (or)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/pa/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/in.svg" width="30" alt="ਪੰਜਾਬੀ (pa)" title="ਪੰਜਾਬੀ (pa)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ne/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/np.svg" width="30" alt="नेपाली (ne)" title="नेपाली (ne)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/si/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/lk.svg" width="30" alt="සිංහල (si)" title="සිංහල (si)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/my/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/mm.svg" width="30" alt="မြန်မာ (my)" title="မြန်မာ (my)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/km/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/kh.svg" width="30" alt="ខ្មែរ (km)" title="ខ្មែរ (km)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ha/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ng.svg" width="30" alt="Hausa (ha)" title="Hausa (ha)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/yo/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ng.svg" width="30" alt="Yorùbá (yo)" title="Yorùbá (yo)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ig/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ng.svg" width="30" alt="Igbo (ig)" title="Igbo (ig)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/am/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/et.svg" width="30" alt="አማርኛ (am)" title="አማርኛ (am)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/uz/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/uz.svg" width="30" alt="Oʻzbekcha (uz)" title="Oʻzbekcha (uz)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/ka/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ge.svg" width="30" alt="ქართული (ka)" title="ქართული (ka)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/hy/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/am.svg" width="30" alt="Հայերեն (hy)" title="Հայերեն (hy)"></a>
  <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/i18n/bs/README.md"><img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/flags/ba.svg" width="30" alt="Bosanski (bs)" title="Bosanski (bs)"></a>
</div>

<br/>
<br/>

<div align="center">

<a id="first-run"></a>

## 🆓 Install, connect a provider, then route through one endpoint

</div>

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/diagrams/works-zero-config.svg" width="100%" alt="Three steps: install and start OmniRoute, connect an eligible provider with your own account or API key, then point your tool at localhost:20128/v1 using an OmniRoute API key and model auto. Routing depends on available eligible connections and provider limits."/>

```bash
# After connecting a provider, copy your OmniRoute key from Dashboard → Endpoints:
curl http://localhost:20128/v1/chat/completions \
  -H "Authorization: Bearer YOUR_OMNIROUTE_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"auto","messages":[{"role":"user","content":"Hello!"}]}'
```

<sub>`auto` needs an eligible route. A fresh installation can have no eligible keyless targets, and a keyless provider may reject third-party clients. Providers marked `tos: avoid`, including Kiro, are excluded from automatic routing by default; connecting an account does not override that setting. See the [Free Tiers Guide](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/getting-started/FREE-TIERS-GUIDE.md) before choosing a provider.</sub>

<sub>📦 Copy-paste quickstart scripts for **Python, Node.js, PHP, and cURL** → [`examples/quickstart/`](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/examples/quickstart/)</sub>

<br/>

<div align="center">

# 💥 The Promise

</div>

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/diagrams/promise-pillars.svg" width="100%" alt="The Promise — One endpoint and 375 providers. Automatic fallback keeps routing while another healthy target is available. Six pillars: resilient fallback across 375 providers · up to 95% token savings on eligible workloads · $0 to start with 150+ free tiers and 51 recurring/keyless free-forever providers · 37 CLI/agent integrations through one config · OpenAI, Claude, Gemini and Responses API compatibility at /v1 · production controls including circuit breakers, TLS stealth, MCP 110 tools, A2A, memory, guardrails, evals and 56,000+ static test declarations across 7,800+ tracked test files."/>

<br/>
<br/>

<div align="center">

# 🤔 Why OmniRoute?

</div>

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/diagrams/why-pain-fix.svg" width="100%" alt="Why OmniRoute — stop juggling 10 dashboards, dead API keys and surprise bills. Ten daily pains vs fixes: quota expiring unused → maximize subscriptions; rate limits mid-coding → 4-tier auto-fallback (Subscription → API → Cheap → Free); tool outputs burning tokens → RTK + Caveman compression (15–95%); expensive APIs → cost-optimized routing; every tool its own setup → one endpoint, one dashboard; AI blocked → 3-level proxy + TLS stealth; dead keys → 3-layer resilience (circuit breakers, key cooldown, model lockout); team sharing one subscription → key pools with fair-share quotas; prompts through someone's cloud → local-first with AES-256-GCM encrypted keys; no spend visibility → live analytics (usage, quota, savings, p95 latency)."/>

<div align="center">

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/diagrams/tier-cascade.svg" width="100%" alt="OmniRoute request flow: your IDE or CLI (Claude Code, Cursor, Cline…) calls one local endpoint (http://localhost:20128/v1); the OmniRoute Smart Router (RTK + Caveman compression, 20 routing strategies, circuit breakers, TLS stealth, MCP, A2A, guardrails) can fall back across 4 provider tiers while an eligible healthy target remains — Tier 1 Subscription, Tier 2 API Key, Tier 3 Cheap and Tier 4 Free."/>

</div>

<br/>

<div align="center">

## 🤝 Supported by our Open Source Friends

</div>

<p align="center">
  <a href="https://platform.kimi.ai?track_id=track-8197581fdd7d4139a0f562e4a03c3798&aff=omniroute">
    <img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/public/sponsors/kimi-k3-banner.png" width="100%" alt="Kimi K3 — Open Frontier Intelligence · 2.8T parameters · 1M-token context"/>
  </a>
</p>

> **Want to join as an Open Source Friend?** These are the companies that back open source and help keep OmniRoute moving — and we say publicly where every token they give us goes. Reach out: [diegosouza.pw@outlook.com](mailto:diegosouza.pw@outlook.com)

<table>
  <tr>
    <td align="center" width="150">
      <a href="https://platform.kimi.ai?track_id=track-8197581fdd7d4139a0f562e4a03c3798&aff=omniroute">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/providers/kimi-logomark-dark.svg">
          <img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/public/providers/kimi-logomark-light.svg" width="64" alt="Kimi (Moonshot AI)"/>
        </picture>
      </a>
      <br/><b>Kimi</b><br/><sub>Moonshot AI</sub><br/><br/>
      <img src="https://img.shields.io/badge/Founding_Friend-1783FF?style=flat-square" alt="Founding Open Source Friend"/>
    </td>
    <td>
      Thanks to <b>Kimi (Moonshot AI)</b>, our founding Open Source Friend, for backing this project! Kimi is the AI lab behind the open-weight K2 and K3 model families — <b>Kimi K3</b> delivers a 1M-token context window, native vision and frontier-level coding at a fraction of closed-model prices, and works out of the box with Claude Code, Codex and every coding tool OmniRoute serves.
      <br/><br/>
      <b>What Kimi's support powers:</b> Kimi's API credits power OmniRoute's AI-validated release pipeline — the <i>merge validation powered by Kimi K3</i> stage that reviews every pull request before it ships — plus day-to-day feature development. First-class Kimi support ships on both rails: the direct <a href="https://platform.kimi.ai?track_id=track-8197581fdd7d4139a0f562e4a03c3798&aff=omniroute">Kimi API</a> (<code>kimi-k3</code>) and the <a href="https://www.kimi.ai/code?aff=omniroute">Kimi Code coding plan</a> (OAuth and API key). OmniRoute is also the first Brazilian open-source project in Kimi's support program. <a href="https://platform.kimi.ai?track_id=track-8197581fdd7d4139a0f562e4a03c3798&aff=omniroute"><b>Get a Kimi API key with 15% extra credits →</b></a>
    </td>
  </tr>
  <tr>
    <td align="center" width="150">
      <a href="https://cheaperinference.com/?utm_source=omniroute">
        <img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/public/providers/cli-generic.svg" width="64" alt="Cheaper Inference"/>
      </a>
      <br/><b>Cheaper Inference</b><br/><sub>cheaperinference.com</sub><br/><br/>
      <img src="https://img.shields.io/badge/Open_Source_Friend-31f889?style=flat-square&labelColor=04170d" alt="Open Source Friend"/>
    </td>
    <td>
      Thanks to <b>Cheaper Inference</b>, an OmniRoute Open Source Friend, for backing this project! Cheaper Inference is a cost-ranked gateway that resells 42 frontier models — Claude, GPT-5.x, Gemini, Kimi K3, GLM, DeepSeek, Grok and MiniMax — behind one OpenAI-compatible endpoint, routing each request to the cheapest eligible provider without ever charging above the model maker's list price.
      <br/><br/>
      <b>First-class support in OmniRoute:</b> Chat Completions, the native <code>/v1/responses</code> endpoint, vision, tool calling and 3 image models (<code>grok-imagine</code>, <code>nano-banana-pro</code>, <code>nano-banana-2</code>, reachable as <code>cheaperinference/&lt;model&gt;</code>). <a href="https://cheaperinference.com/?utm_source=omniroute"><b>Get an API key →</b></a>
    </td>
  </tr>
</table>

<sub>Links tagged <code>aff=omniroute</code> are partner links. They fund the project at no extra cost to you.</sub>

<br/>

<details open>
<summary><sub><b>🎟️ Affiliates Promo</b> — free signup coupons from providers we don't sponsor (click to expand)</sub></summary>

<sub><i>This section is for referral/coupon codes only. Sponsored partnerships live in <b>🤝 Supported by our Open Source Friends</b> above. OmniRoute has no sponsorship or partnership with the providers listed here — these are public coupons anyone can use.</i></sub>

<table>
  <tr>
    <td align="center" width="120">
      <a href="https://agentrouter.org/register?aff=70LM">
        <img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/public/providers/cli-generic.svg" width="32" alt="AgentRouter"/>
      </a>
      <br/><sub><b>AgentRouter</b></sub><br/><sub>agentrouter.org</sub>
    </td>
    <td>
      <sub><b><a href="https://agentrouter.org/register?aff=70LM">AgentRouter</a></b> — affiliate signup · <b>$100 free credits</b> on signup (free server, expect higher latency — best for testing, not production). First-class support in OmniRoute since <b>v3.8.50</b>: Chat Completions, the Anthropic-compatible wire format and the OpenAI-compatible path. Available models include <code>claude-opus-4-8</code>, <code>claude-opus-5</code>, <code>gpt-5.6-sol</code> and more. <b><a href="https://agentrouter.org/register?aff=70LM">Grab your $100 →</a></b></sub>
      <br/><br/>
      <sub>⚠️ <i>Affiliate link — OmniRoute has no sponsorship or partnership with this provider.</i></sub>
    </td>
  </tr>
</table>

<sub>Know another provider with a generous free signup coupon that benefits OmniRoute users? Open an issue and we'll add it here.</sub>

</details>

<br/>

<div align="center">

## 🎯 Combos — The Flagship

</div>

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/diagrams/strategies-grid.svg" width="100%" alt="Animated examples for 18 of the 20 combo routing strategies — one tile per strategy: priority, fill-first, weighted, round-robin, p2c, least-used, random, strict-random, cost-optimized, headroom, reset-window, reset-aware, context-relay, context-optimized, lkgp, auto, fusion, pipeline. cache-optimized and quota-weighted are not animated; the table below describes all 20."/>

> A **combo** is a chain of models OmniRoute routes across **automatically**. If quota runs out, a provider fails, or costs spike, the combo can move to the next eligible healthy model. 🛡️

### ⚡ Zero-config — just use `auto`

No combo to create. Set your model to `auto` (or a variant) and OmniRoute builds a virtual combo from your connected providers, scored live:

<table>
  <tr><th align="left">Model ID</th><th align="left">What it optimizes for</th></tr>
  <tr><td align="left" nowrap><code>auto</code></td><td align="left">🎯 Balanced default (LKGP — sticks to your last good provider)</td></tr>
  <tr><td align="left" nowrap><code>auto/coding</code></td><td align="left">🧑‍💻 Quality-first weights for code generation</td></tr>
  <tr><td align="left" nowrap><code>auto/fast</code></td><td align="left">⚡ Lowest latency first</td></tr>
  <tr><td align="left" nowrap><code>auto/cheap</code></td><td align="left">💰 Cheapest per token first</td></tr>
  <tr><td align="left" nowrap><code>auto/subscription</code></td><td align="left">🎟️ Only the subscription quota you already pay for — fails closed, never a billable fallback (<a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/routing/SUBSCRIPTION_LADDER.md">guide</a>)</td></tr>
  <tr><td align="left" nowrap><code>auto/thrifty</code></td><td align="left">🪜 Plan quota first, then one rung at a time to the cheapest paid options — back on the plan after it resets (<a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/routing/SUBSCRIPTION_LADDER.md">guide</a>)</td></tr>
  <tr><td align="left" nowrap><code>auto/offline</code></td><td align="left">🔋 Most quota / rate-limit headroom first</td></tr>
  <tr><td align="left" nowrap><code>auto/smart</code></td><td align="left">🔭 Quality-first + 10% exploration to discover better models</td></tr>
  <tr><td align="left" nowrap><code>auto/lkgp</code></td><td align="left">📌 Explicit last-known-good-provider stickiness</td></tr>
  <tr><td align="left" nowrap><code>auto/chaos</code></td><td align="left">🧪 Parallel fan-out to a panel of models (one per provider, 5 by default), returns one answer; one upstream call per panel model, not fault injection</td></tr>
</table>

##

### 🔀 Or build your own — 20 routing strategies

All **20** strategies — mix & match per combo step:

<table>
  <tr>
    <th>#</th>
    <th align="left">Strategy</th>
    <th align="left">What it does</th>
  </tr>
  <tr>
    <td align="center">1</td>
    <td nowrap><code>priority</code></td>
    <td>First-target ordered list — drain each before the next 🥇</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td nowrap><code>fill-first</code></td>
    <td>Fill each target's quota fully before moving on</td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td nowrap><code>weighted</code></td>
    <td>Weighted random by per-target weight</td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td nowrap><code>round-robin</code></td>
    <td>Cycle through targets in order</td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td nowrap><code>p2c</code></td>
    <td>Power-of-two-choices random load balancing</td>
  </tr>
  <tr>
    <td align="center">6</td>
    <td nowrap><code>least-used</code></td>
    <td>Pick the target with the lowest current load</td>
  </tr>
  <tr>
    <td align="center">7</td>
    <td nowrap><code>random</code></td>
    <td>Uniform random pick (deduplicated)</td>
  </tr>
  <tr>
    <td align="center">8</td>
    <td nowrap><code>strict-random</code></td>
    <td>Random without de-duplicating repeats 🎲</td>
  </tr>
  <tr>
    <td align="center">9</td>
    <td nowrap><code>cost-optimized</code></td>
    <td>Minimize $ per request from live catalog pricing 💸</td>
  </tr>
  <tr>
    <td align="center">10</td>
    <td nowrap><code>headroom</code></td>
    <td>Pick the target with the most remaining quota</td>
  </tr>
  <tr>
    <td align="center">11</td>
    <td nowrap><code>quota-weighted</code></td>
    <td>Skip exhausted accounts, then draw in proportion to leftover quota ÷ in-flight load — existing conversations stay pinned ⚖️</td>
  </tr>
  <tr>
    <td align="center">12</td>
    <td nowrap><code>reset-window</code></td>
    <td>Prefer the target whose quota window resets soonest</td>
  </tr>
  <tr>
    <td align="center">13</td>
    <td nowrap><code>reset-aware</code></td>
    <td>Rank by quota reset time — short windows first 📊</td>
  </tr>
  <tr>
    <td align="center">14</td>
    <td nowrap><code>context-relay</code></td>
    <td>Hand off context across targets for long conversations 🧠</td>
  </tr>
  <tr>
    <td align="center">15</td>
    <td nowrap><code>context-optimized</code></td>
    <td>Pick the best fit for the current context size</td>
  </tr>
  <tr>
    <td align="center">16</td>
    <td nowrap><code>cache-optimized</code></td>
    <td>Pin each reusable prompt prefix to the same account — maximize prompt-cache hits 🎯</td>
  </tr>
  <tr>
    <td align="center">17</td>
    <td nowrap><code>lkgp</code></td>
    <td>Last-Known-Good Path — pins to the last successful provider, then falls back to rules</td>
  </tr>
  <tr>
    <td align="center">18</td>
    <td nowrap><code>auto</code></td>
    <td>16-factor live scoring across every connection 🤖</td>
  </tr>
  <tr>
    <td align="center">19</td>
    <td nowrap><code>fusion</code></td>
    <td>Fan out to a panel of models + a judge synthesizes one answer 🧬</td>
  </tr>
  <tr>
    <td align="center">20</td>
    <td nowrap><code>pipeline</code></td>
    <td>Chain steps — each target's output feeds the next one 🔗</td>
  </tr>
</table>

<sub>The Auto-Combo engine scores every candidate on **16 factors** (health, quota, cost, latency, task fit, quality, session availability…) — see [`docs/routing/AUTO-COMBO.md`](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/routing/AUTO-COMBO.md).</sub>

##

### 🧱 Resilience is built in (3 independent layers)

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/diagrams/resilience-layers.svg" width="100%" alt="OmniRoute resilience — 3 independent self-healing layers, the right layer for the right failure. Layer 1 provider circuit breaker (whole provider): trips only on 408/5xx, thresholds OAuth 8× / API-key 12× / local 2×, resets 60s/30s/15s into a HALF-OPEN probe, lazy recovery; while OPEN the combo reroutes to the next provider. Layer 2 connection cooldown (one key/account): base 5s OAuth / 3s API-key, exponential ×2 backoff with anti-thundering-herd guard, 429 honors Retry-After, success clears all error state; one cooling key is skipped while sibling keys keep serving. Layer 3 model lockout (one model): per-model 429, local 404 or mode denials lock just that model — never the whole connection. Terminal states (banned, expired, credits exhausted) are for the operator, not cooldowns."/>

<sub>📖 [Auto-Combo Engine](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/routing/AUTO-COMBO.md) · [Resilience Guide](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/architecture/RESILIENCE_GUIDE.md)</sub>

<br/>

<div align="center">

## 🏆 What Sets OmniRoute Apart

</div>

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/diagrams/comparison-table.svg" width="100%" alt="What sets OmniRoute apart — a dated feature snapshot vs 9router, OpenRouter, CLIProxyAPI and LiteLLM across 13 capabilities. OmniRoute: 375 providers, 150+ free tiers built in, 20 routing strategies, 12-engine token compression, built-in MCP server with 110 tools, A2A agent protocol, persistent memory, guardrails, cloud agents, TLS fingerprint stealth, Desktop/Termux/PWA and 67 i18n UI locales. OmniRoute is MIT-licensed and self-hostable. Competitor capabilities and counts may change; see the linked methodology."/>

<sub>📊 Full methodology &amp; per-feature detail vs 9router, OpenRouter, CLIProxyAPI &amp; LiteLLM → [`docs/comparison/OMNIROUTE_VS_ALTERNATIVES.md`](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/comparison/OMNIROUTE_VS_ALTERNATIVES.md)</sub>

<br/>

## 💚 Support OmniRoute

OmniRoute is MIT-licensed and maintained in the open. If it saves you time or money, here's how to keep it independent — pick whatever fits you. Sponsorship never affects routing priority; it buys visibility, not ranking.

<table>
  <tr><td nowrap>⭐ <b>Star the repo</b></td><td>Free — genuinely helps visibility</td><td><a href="https://github.com/diegosouzapw/OmniRoute">Star OmniRoute</a></td></tr>
  <tr><td nowrap>🐙 <b>GitHub Sponsors</b></td><td>One-off or monthly · zero platform fee</td><td><a href="https://github.com/sponsors/diegosouzapw">github.com/sponsors/diegosouzapw</a></td></tr>
  <tr><td nowrap>☕ <b>Ko-fi</b></td><td>Quick one-off tip, no signup for the donor</td><td><a href="https://ko-fi.com/diegosouzapw">ko-fi.com/diegosouzapw</a></td></tr>
  <tr><td nowrap>🧋 <b>Buy Me a Coffee</b></td><td>Small, informal gesture</td><td><a href="https://www.buymeacoffee.com/diegosouzapw">buymeacoffee.com/diegosouzapw</a></td></tr>
  <tr><td nowrap>🖐 <b>Liberapay</b></td><td>Recurring · non-profit · open source</td><td><a href="https://liberapay.com/diegosouzapw">liberapay.com/diegosouzapw</a></td></tr>
  <tr><td nowrap>🇧🇷 <b>PIX</b> (Brazil)</td><td>Instant, no fees</td><td>key &amp; QR below</td></tr>
  <tr><td nowrap>₿ <b>Crypto</b></td><td>BTC · ETH · USDT-TRC20 · USDC-Solana</td><td>addresses below</td></tr>
</table>

**🇧🇷 PIX** — instant, no fees (Brazil)

<img src="https://raw.githubusercontent.com/cheaper-inference/OmniRoute/release/v3.8.53/docs/assets/pix-qr.png" width="140" align="right" alt="OmniRoute PIX QR code"/>

Key (random): `5d865059-bc44-483a-962d-43ceb80126eb`

Pix copia-e-cola:

```
00020101021126580014br.gov.bcb.pix01365d865059-bc44-483a-962d-43ceb80126eb5204000053039865802BR5922OMNIROUTE CONTRIBUICAO6006BRASIL62070503***630475DD
```

<br clear="right"/>

<details>
<summary><b>₿ Crypto</b> — BTC · ETH · USDT-TRC20 · USDC-Solana (click to expand)</summary>

<table>
  <tr><td nowrap><b>₿ BTC</b></td><td nowrap>Bitcoin (SegWit)</td><td><code>bc1qh00smz004sy85wyl28v77tenkt3ckl6eaep7fd</code></td></tr>
  <tr><td nowrap><b>Ξ ETH</b></td><td nowrap>Ethereum (ERC20)</td><td><code>0x64Cf6B68A6Ff34288e89172950a2d00102337a84</code></td></tr>
  <tr><td nowrap><b>₮ USDT</b></td><td nowrap>Tron (TRC20)</td><td><code>TKAF41JpuQrHbKTnsQa9svJE2T192Hvsc2</code></td></tr>
  <tr><td nowrap><b>$ USDC</b></td><td nowrap>Solana</td><td><code>2emNNZzVVWQc3FQ2wk9M6qXUQmW8AKdjjL174fXR28Tu</code></td></tr>
</table>

<sub>⚠️ Send each coin only on the network shown — sending on the wrong network can lose the funds.</sub>

</details>

🐛 Found a bug or have feedback? Open a [Discussion](https://github.com/diegosouzapw/OmniRoute/discussions).

<br/>

<p><strong>Developer notes:</strong> The project may generate a local <code>.env</code> file during npm install/postinstall for developer convenience. This file is intentionally ignored via <code>.gitignore</code> (see <code>.gitignore</code>) and must never be committed — if accidentally committed, rotate any exposed secrets and remove the file from history. See <a href="https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/DEVELOPER-ENVIRONMENT.md">docs/DEVELOPER-ENVIRONMENT.md</a> for guidance on managing local environment files and secrets.</p>

## 📡 OmniRoute Radar

The main free-tier headline remains **~1.62B tokens/month** from the documented,
pool-deduplicated catalog above. Temporary provider signup credits can separately lift the first
month to **~2.22B**. Radar is an optional, signed catalog overlay for people who want fresher
free-model availability between OmniRoute releases; the community catalog and every existing free
feature remain free.

Supporters can receive the live catalog and additional provider opportunities. Its separate,
mutable ceiling is **approximately 3B tokens/month at most**, depending on provider availability.
That ceiling is not a guarantee: providers can change quotas, eligibility, models, or regions at
any time.

Radar is opt-in and GET-only. The OmniRoute client does not upload prompts, traffic, provider
configuration, usage telemetry, or local announcement-dismiss state. Learn about eligibility and
the current catalog at **[radar.omniroute.online/planos](https://radar.omniroute.online/planos)**.

<br/>

<div align="center">

## ✨ What's New

</div>

> Recent highlights from **v3.8.20 → v3.8.53**. Full history in [`CHANGELOG.md`](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/CHANGELOG.md).

- **⚖️ `quota-weighted` routing** — the 20th combo strategy skips exhausted accounts, then draws among the rest in proportion to leftover quota ÷ in-flight load, keeping existing conversations pinned. → [Auto-Combo](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/routing/AUTO-COMBO.md)
- **🧰 Headless mode** — `omniroute serve --headless` (or `OMNIROUTE_HEADLESS=1`) runs only the `/v1/*` proxy engine, with the dashboard and dashboard-only subsystems off. → [Headless Mode](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/guides/HEADLESS.md)
- **🔎 Model discovery** — `/v1/models` filters by capability, context, kind and text, and `POST /v1/models/query` returns a short deterministic shortlist with the same per-key visibility. → [API Reference](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/API_REFERENCE.md)
- **🔑 Per-key routing control** — pin an API key to one model or combo with `forcedModel`, and add or remove a key's models and combos atomically (`/api/keys/{id}/access`). → [API Reference](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/API_REFERENCE.md) · [OpenAPI](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/openapi.yaml)
- **🛡️ Finer PII controls** — per-type selection, up to 20 validated custom masking patterns and per-type detection counters; masking itself stays opt-in. → [Guardrails](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/security/GUARDRAILS.md)
- **🌍 67 languages** — dashboard, docs mirrors and CLI, with `npm run i18n:add-locale` adding a language everywhere in one command. → [i18n Guide](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/guides/I18N.md)
- **🎛️ OmniConductor** — inbound A2A delegation to your agent fleet, Conductor skills on the Agent Card, and a dashboard panel with Faro push-to-talk voice chat. → [A2A Server](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/frameworks/A2A-SERVER.md)
- **🛂 Adaptive admission & overload protection** — heavyweight chat requests queue instead of 503ing, with atomic RPM rolling leases per connection. → [Resilience Guide](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/architecture/RESILIENCE_GUIDE.md)
- **🗂️ Canonical `/v1/models` ordering** — one contiguous provider-grouped block per provider (combos pinned first), stable across every catalog source. → [API Reference](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/API_REFERENCE.md)
- **🗜️ Compression hardening** — default-on inflation guard, Caveman packs for DE / FR / JA + Chinese (wényán), RTK filters for Gradle & .NET. → [Compression](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/compression/COMPRESSION_ENGINES.md)
- **💸 Honest flat-rate cost** — subscription / coding-plan providers read **$0** in cost analytics; budget, quota & routing keep estimating. → [API Reference](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/API_REFERENCE.md)
- **⚖️ Quota-Share routing** — split a shared account's quota fairly across pooled keys, work-conserving so idle slices are lent out. → [Resilience Guide](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/architecture/RESILIENCE_GUIDE.md)
- **🤖 One-command CLI/agent setup** — 15 registered `setup-*` commands; `omniroute run` launches 7 CLIs (Claude Code, Codex, Aider, Goose, OpenCode, Qwen Code, Gemini CLI); `omniroute configure` supports 11 targets with an interactive provider+model picker and per-context favorites. → [CLI Integrations](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/guides/CLI-INTEGRATIONS.md)
- **🛰️ Remote mode** — drive a remote OmniRoute with scoped tokens (`connect` / `contexts` / `tokens`) + an `antigravity` OAuth helper for VPS installs. → [Remote Mode](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/guides/REMOTE-MODE.md)
- **🧭 Smarter auto-routing** — `auto/<category>:<tier>` combos, **Fusion** (model panel + judge), task-aware routing, per-request model / mode / USD-budget overrides. → [Auto-Combo](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/routing/AUTO-COMBO.md)
- **🗜️ Pluggable compression** — 12 composable engines + Compression Studios: LLMLingua-2, two-tier Ultra, omniglyph, per-step fidelity gate, GCF v3.2, drag-reorder editor. → [Compression](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/compression/COMPRESSION_ENGINES.md)
- **🕵️ Transparent MITM decrypt (TPROXY)** — capture CLIs that ignore proxy env vars, with a per-SNI CA + trust-store installer. → [MITM/TPROXY](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/security/MITM-TPROXY-DECRYPT.md)
- **💸 Cost telemetry everywhere** — `X-OmniRoute-*` cost/usage headers on every endpoint, cache-HIT savings header, per-key USD spend quotas. → [API Reference](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/API_REFERENCE.md)
- **🧠 Memory you control** — off by default, opt-in int8 vector quantization + typed decay, per-request `x-omniroute-no-memory`. → [Memory](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/frameworks/MEMORY.md)
- **🛡️ Security** — prompt-injection guard on every LLM route (red-team suite), opt-in credential-masking guardrail (redacts leaked API keys/secrets in both directions), free DuckDuckGo last-resort web search, and an optional OIDC login gate for the dashboard (password login always stays available). → [Guardrails](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/security/GUARDRAILS.md)
- **🖼️ New endpoints** — `/v1/ocr` (Mistral OCR) and `/v1/audio/translations` (Whisper-style) round out the media surface. → [API Reference](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/API_REFERENCE.md)
- **🎨 Image / video / audio generation** — one API for media: xAI Grok Imagine & Novita AI video, ComfyUI, Magnific, Adobe Firefly, Segmind, and speech providers such as ElevenLabs. → [API Reference](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/API_REFERENCE.md)
- **🌍 Deployment & ops** — reverse-proxy `basePath`, browser-language auto-detect, per-key device tracking, root-less MITM trust, zh-TW localization. → [Environment](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/ENVIRONMENT.md)
- **🤝 More providers & agents** — cloud agents (Codex Cloud, Cursor, Devin, Jules), Grok Build (xAI) with browser + OAuth login, Ollama first-class card, Claude Opus 5 & Sonnet 5, Kimi official partnership (Code/Web/Moonshot), Zed, Requesty, SenseNova, Yuanbao, Agnes AI… and a refreshed **375-provider catalog**. → [Providers](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/reference/PROVIDER_REFERENCE.md)
- **📡 Routing transparency** — every response carries an `X-OmniRoute-Decision` header naming the strategy/provider/latency that served it, a new `cache-optimized` combo strategy + Auto-Combo `cacheAffinity` factor route repeat requests back to the connection holding the cached prefix, and a read-only `/v1/auto-combo/{channel}/candidates` endpoint exposes an `auto/*` channel's live candidate pool. → [Auto-Combo](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/routing/AUTO-COMBO.md)
- **⚡ Local performance & infra** — one-click local Redis, Cloudflare Workers / Deno Deploy relay deployers, Bifrost & Mux as supervised embedded services. → [Embedded Services](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/frameworks/EMBEDDED-SERVICES.md)
- **🧩 Also in the box** — plugin framework + marketplace, Omni/Agent/GitHub skills frameworks, Obsidian vault integration (22 MCP tools), OpenAI-compatible Batch & Files APIs, semantic response cache, gamification with leaderboards, ACP agent discovery (15 built-in agents), scheduled log export to BigQuery, `auto/chaos` parallel multi-model fan-out, a Telegram bot bridge, an in-app version manager and LMArena-ELO free-provider rankings. → [Docs](https://github.com/cheaper-inference/OmniRoute/blob/release/v3.8.53/docs/README.md)

<br/>

<div align="center">

*(README truncated for display. [Read the full README on GitHub](https://github.com/cheaper-inference/OmniRoute)).*
