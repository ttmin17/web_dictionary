---
slug: farion1231-cc-switch
name: cc-switch
tagline: "A cross-platform desktop All-in-One assistant for Claude Code, Codex,
  OpenCode, OpenClaw, Grok Build & Hermes Agent. Only official website:
  ccswitch.i"
summary: Switch API providers in one click and manage MCP, Skills, and Prompts
  in one place — no more hand-editing JSON / TOML / YAML config files.
categories:
  - agent-frameworks
tags:
  - ai-tools
  - claude-code
  - codex
  - desktop-app
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: farion1231/cc-switch
  official_vendor: false
  license: MIT
signals:
  stars: 148755
  last_commit: 2026-10-26T06:45:44Z
  stars_delta_7d: 2682
  stars_growth_pct: 1.8
  trending_score: 2731.24
  rank_current: 4
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 146073
    - 148755
language: en
needs_keys: false
prerequisites:
  - node
readme_source:
  repo: farion1231/cc-switch
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.376Z
  truncated: true
type: agent_tool
tool:
  subcategory: desktop_ui
  install_command: npm install cc-switch
  runtime: node
  execution_mode: local
  has_mcp_support: false
---

<div align="center">

# CC Switch

### The All-in-One Manager for Claude Code, Claude Desktop, Codex, Gemini CLI, Grok Build, OpenCode, OpenClaw, Hermes Agent, Pi, MiniMax Code, Kimi Code & Oh My Pi

**Switch API providers in one click and manage MCP, Skills, and Prompts in one place — no more hand-editing JSON / TOML / YAML config files.**

[![Version](https://img.shields.io/github/v/release/farion1231/cc-switch?color=blue&label=version)](https://github.com/farion1231/cc-switch/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)](https://github.com/farion1231/cc-switch/releases)
[![Built with Tauri](https://img.shields.io/badge/built%20with-Tauri%202-orange.svg)](https://tauri.app/)
[![Downloads](https://img.shields.io/github/downloads/farion1231/cc-switch/total)](https://github.com/farion1231/cc-switch/releases/latest)

<a href="https://trendshift.io/repositories/15372" target="_blank"><img src="https://trendshift.io/api/badge/repositories/15372" alt="farion1231%2Fcc-switch | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
<a href="https://www.star-history.com/#farion1231/cc-switch&Date"><picture><source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/badge?repo=farion1231/cc-switch&theme=dark" /><img alt="Star History Rank" src="https://api.star-history.com/badge?repo=farion1231/cc-switch" width="196" height="55" /></picture></a>

### 🌐 The Only Official Website: **[ccswitch.io](https://ccswitch.io)**

English | [中文](https://github.com/farion1231/cc-switch/blob/main/README_ZH.md) | [日本語](https://github.com/farion1231/cc-switch/blob/main/README_JA.md) | [Deutsch](https://github.com/farion1231/cc-switch/blob/main/README_DE.md) | [Changelog](https://github.com/farion1231/cc-switch/blob/main/CHANGELOG.md)

**[Download](#download--installation) · [Quick Start](#quick-start) · [Features](#features) · [FAQ](#faq) · [User Manual](https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md)**

</div>

## ❤️Sponsor

> [Want to appear here?](mailto:support@ccswitch.io)

<details open>
<summary>Click to collapse</summary>

[![Kimi K2.7 Code](https://gcdn.moonshot.cn/growth-cdn/sponsor/kimi-en.png)](https://platform.kimi.ai?track_id=track-674ed6e2af924a5682a87421f7cf753a&aff=cc-switch)

Kimi K3 is Moonshot AI's most capable model and the world's first open 3T-class model. With 2.8 trillion parameters, native vision, and a 1-million-token context window, K3 delivers frontier performance across long-horizon coding, knowledge work, and reasoning. CC Switch makes it easy to configure and switch to Kimi across agentic tools.

Try a **Kimi Code plan** ([中文站](https://www.kimi.com/code?aff=cc-switch) | [Global](https://www.kimi.ai/code?aff=cc-switch)), or use the **API** through the Kimi Open Platform ([中文站](https://platform.kimi.com?track_id=track-7cf2b91dcde043eda6ef9a95951a042c&aff=cc-switch) | [Global](https://platform.kimi.ai?track_id=track-674ed6e2af924a5682a87421f7cf753a&aff=cc-switch)).

**New user top-up bonus**: register and complete your first top-up via the API links above to receive 10% of the amount as bonus API credit, up to CNY ¥1,000.

---

<table>
<tr>
<td width="180"><a href="https://www.packyapi.ai/register?aff=cc-switch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/packycode.png" alt="PackyCode" width="150"></a></td>
<td>Thanks to PackyCode for sponsoring this project! PackyCode is a reliable and efficient API relay service provider, offering relay services for Claude Code, Codex, Gemini, and more. PackyCode provides special discounts for our software users: register using <a href="https://www.packyapi.ai/register?aff=cc-switch">this link</a> and enter the "cc-switch" promo code during first recharge to get 10% off.</td>
</tr>

<tr>
<td width="180"><a href="https://apinebula.ai/VjM74M"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/apinebula_banner.png" alt="APINebula" width="150"></a></td>
<td>Thanks to APINEBULA for sponsoring this project! APINEBULA, an enterprise-grade AI aggregation platform under Galaxy Video Bureau, leverages extensive platform resources to provide developers, teams, and enterprises with stable, cost-effective access to large language model APIs. The platform integrates leading, full-powered models like Claude, GPT, and Gemini, allowing you to connect to the world's top AI models through a single API, with prices starting as low as 10% of the original cost. Designed for AI programming, Agent development, and business system integration, APINEBULA supports enterprise-grade high concurrency, formal contracts, corporate bank transfers, and invoicing services. APINEBULA provides special discounts for our software users: register using <a href="https://apinebula.ai/VjM74M">this link</a> and enter the <strong>"ccswitch"</strong> promo code during your first recharge to get <strong>10% off</strong>.</td>
</tr>

<tr>
<td width="180"><a href="https://www.aicodemirror.ai/register?invitecode=9915W3"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/aicodemirror.jpg" alt="AICodeMirror" width="150"></a></td>
<td>Thanks to AICodeMirror for sponsoring this project! AICodeMirror provides official high-stability relay services for Claude Code / Codex / Gemini CLI, with enterprise-grade concurrency, fast invoicing, and 24/7 dedicated technical support.
Claude Code / Codex / Gemini official channels at 38% / 2% / 9% of original price, with extra discounts on top-ups! AICodeMirror offers special benefits for CC Switch users: register via <a href="https://www.aicodemirror.ai/register?invitecode=9915W3">this link</a> to enjoy 20% off your first top-up, and enterprise customers can get up to 25% off!</td>
</tr>

<tr>
<td width="180"><a href="https://pateway.ai/?ch=etzpm8&aff=WB6M6F67#/"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/pateway.png" alt="PatewayAI" width="150"></a></td>
<td>Thanks to PatewayAI for sponsoring this project! PatewayAI is an API relay service provider built for heavy AI developers, focused on directly relaying official high-quality model APIs. It offers the full Claude lineup and the Codex series, 100% sourced from official channels — no dilution, no fakes, verification welcome. Billing is transparent and every token-level invoice can be audited line by line.
It also supports enterprise-grade concurrency and provides a dedicated management platform for enterprise customers — formal contracts and invoicing are available; visit the official website for contact details.
Register now via <a href="https://pateway.ai/?ch=etzpm8&aff=WB6M6F67#/">this link</a> to receive $3 in trial credit. Top-ups go as low as 60% of the original price, with a two-way referral bonus of up to $150!</td>
</tr>

<tr>
<td width="180"><a href="https://hao.ai/invite/DTBZS3OR"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/haoai-banner.png" alt="hao.ai" width="150"></a></td>
<td>Thanks to hao.ai for sponsoring this project! hao.ai is a fast, stable unified LLM API gateway for developers and teams. With one API key and a unified interface, you can access GPT, Claude, xAI Grok, and other leading models, compatible with common protocols and SDKs such as OpenAI and Anthropic. The platform offers model routing, failover, team management, and complete request logs, with model prices as low as 15% of official reference prices, making it simpler, more stable, and cheaper to build AI applications. hao.ai offers CC Switch users a special perk: register via <a href="https://hao.ai/invite/DTBZS3OR">this link</a> to get 5% bonus credit on your first order!</td>
</tr>

<tr>
<td width="180"><a href="https://api.fenno.ai/register?redirect=/purchase?tab=subscription%26group=16&aff=P9MR3D3PLCNL"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/fenno-banner.png" alt="Fenno.ai" width="150"></a></td>
<td>Thanks to Fenno.ai for sponsoring this project! Fenno.ai is a stable and efficient API relay service provider, currently focused on Codex relay. It is compatible with the OpenAI and Anthropic protocols and can be flexibly used from Codex, Claude Code, OpenCode, and other mainstream coding tools. It reliably supports enterprise-grade workloads of hundreds of billions of tokens per day, with corporate (B2B) settlement and invoicing for both domestic and overseas entities. Fenno.ai offers an exclusive benefit for CC Switch users: subscribe via <a href="https://api.fenno.ai/register?redirect=/purchase?tab=subscription%26group=16&aff=P9MR3D3PLCNL">this link</a> to the $1.99 Trial Plan worth $50 in credits (valid for 7 days), and earn up to 20% in referral rewards — invite more, earn more!</td>
</tr>

<tr>
<td width="180"><a href="https://runapi.host/register?aff=iOKB"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/runapi.jpg" alt="RunAPI" width="150"></a></td>
<td>Thanks to RunAPI for sponsoring this project! RunAPI is a high-performance and reliable AI model API gateway — one API key gives you access to 150+ mainstream models including OpenAI, Claude, Gemini, DeepSeek, and Grok, with prices as low as 10% of the official rate and excellent stability. It works seamlessly with Claude Code, OpenClaw, and other tools. Exclusive benefit for CC Switch users: register via <a href="https://runapi.host/register?aff=iOKB">this link</a> and enjoy a 10% discount on your first top-up!</td>
</tr>

<tr>
<td width="180"><a href="https://www.openmodel.ai?ref=cc-switch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/openmodel-banner.jpg" alt="OpenModel" width="150"></a></td>
<td>Thanks to OpenModel for sponsoring this project! OpenModel offers client-specific discounts of up to 90% for Codex and 60% for Claude Code across supported models, helping developers cut API costs without changing how they work. Just connect your OpenModel API key and keep using Codex or Claude Code as usual — supported clients are detected automatically and discounted routes are applied with no extra parameters or manual routing required. You can also configure fallback behavior per API key, choosing whether to continue at standard pricing or stop when a discounted route is temporarily unavailable. CC Switch users can register via <a href="https://www.openmodel.ai?ref=cc-switch">this link</a> and use promo code <strong>"cc-switch"</strong> to get 10% off their first top-up.</td>
</tr>

<tr>
<td width="180"><a href="https://grooroute.pro/sign-up?aff=qqm9"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/grooroute-banner.jpg" alt="GrooRoute Pro" width="150"></a></td>
<td>Thanks to GrooRoute Pro for sponsoring this project! GrooRoute Pro is a reliable, smooth AI API relay platform with access to OpenAI, Claude, DeepSeek, and other mainstream models. Deployed on overseas servers, it lets you choose your own pricing-multiplier tier and offers both pay-as-you-go billing and subscription plans, so you can use it however suits you best — with stable routes and fast responses that make calling all kinds of AI capabilities easier. Exclusive benefit for CC Switch users: register via <a href="https://grooroute.pro/sign-up?aff=qqm9">this link</a> to get ¥5 in free trial credit!</td>
</tr>

<tr>
<td width="180"><a href="https://dit.ai?utm_source=ccswitch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/dit-banner.png" alt="DIT.ai" width="150"></a></td>
<td>Thanks to DIT.ai for sponsoring this project! DIT.ai is an AI token exchange and marketplace for lower-cost multi-provider routing. It gives developers access to 50+ leading AI models — including GPT, Claude, Gemini, DeepSeek, Grok, Llama, and more across text, image, video, and audio — through one OpenAI-compatible API. Qualified providers compete for each request across 160+ routes, and DIT selects the best available price-to-quality option in real time, typically 30–70% below official list pricing. Built for developers, startups, and teams running agents or AI products at scale: change your base URL and API key, keep your existing stack, and start calling models with automatic routing and failover. CC Switch users can register via <a href="https://dit.ai?utm_source=ccswitch">this link</a> and use promo code <strong>ccswitch</strong> to claim a $5 welcome coupon!</td>
</tr>

<tr>
<td width="180"><a href="https://buytoken.work/sign-up?aff=cc-switch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/buytoken-banner.png" alt="BuyToken" width="150"></a></td>
<td>Thanks to BuyToken for sponsoring this project! BuyToken offers relay services for Claude Code, Codex, DeepSeek, and more, with enterprise-grade concurrency and fast invoicing — built to be a stable, long-running service. BuyToken also offers CC Switch users a special deal: register via <a href="https://buytoken.work/sign-up?aff=cc-switch">this link</a> to get ¥3 in trial credit, plus 10% off your first top-up!</td>
</tr>

<tr>
<td width="180"><a href="https://gpt.ge/signup?aff=URNP"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/vapi-banner.jpg" alt="V-API" width="150"></a></td>
<td>Thanks to V-API for sponsoring this project! V-API is a three-year-old brand dedicated to providing individuals, developers, and businesses with a stable, fast, and secure platform for high-quality LLM API services, with support for formal contracts and official invoices (general / special VAT). V-API offers CC Switch users a special deal: register via <a href="https://gpt.ge/signup?aff=URNP">this link</a> to get ¥2 off plus 10% off your first order!</td>
</tr>

<tr>
<td width="180"><a href="https://agentmarket.fluxapay.xyz/marketplace/tokenplans"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/fluxa-banner.png" alt="FluxA TokenPlan" width="150"></a></td>
<td>Thanks to FluxA &amp; Baidu AI Cloud for sponsoring this project! FluxA and Baidu AI Cloud jointly launched AgenticPlan, which gives AI agents the ability to buy, manage and use models, APIs and tools on their own. It includes Baidu Qianfan TokenPlan at up to 40% off, with access to flagship models such as DeepSeek V4, GLM 5.2 and Kimi, plus bonus FluxA AgentMarket API credits that unlock 13,000+ paid APIs for search, data scraping, social media, finance, crypto, image generation, video and more.<br>With the user's authorization, an AI agent can also pay with the official Visa card to procure resources on its own, manage API keys, monitor usage and plan renewals — taking agents from "completing tasks autonomously" to genuinely "planning their own budget and completing tasks". Buy via <a href="https://agentmarket.fluxapay.xyz/marketplace/tokenplans">this link</a>!</td>
</tr>

<tr>
<td width="180"><a href="https://aigocode.net/invite/CC-SWITCH"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/aigocode.png" alt="AIGoCode" width="150"></a></td>
<td>Thanks to AIGoCode for sponsoring this project! AIGoCode is an all-in-one platform that integrates Claude Code, Codex, and the latest Gemini models, providing you with stable, efficient, and highly cost-effective AI coding services. The platform offers flexible subscription plans, zero risk of account suspension, direct access with no VPN required, and lightning-fast responses. AIGoCode has prepared a special benefit for CC Switch users: if you register via <a href="https://aigocode.net/invite/CC-SWITCH">this link</a>, you'll receive an extra 10% bonus credit on your first top-up!</td>
</tr>

<tr>
<td width="180"><a href="https://aicoding.inc/i/CCSWITCH"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/aicoding.jpg" alt="AICoding" width="150"></a></td>
<td>Thanks to AICoding for sponsoring this project! AICoding — Global AI Model API Relay Service at Unbeatable Prices! Claude Code at 19% of original price, GPT at just 1%! Trusted by hundreds of enterprises for cost-effective AI services. Supports Claude Code, GPT, Gemini and major domestic models, with enterprise-grade high concurrency, fast invoicing, and 24/7 dedicated technical support. CC Switch users who register via <a href="https://aicoding.inc/i/CCSWITCH">this link</a> get 10% off their first top-up!</td>
</tr>

<tr>
<td width="180"><a href="https://subrouter.ai/register?aff=l3ri"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/subrouter-banner.png" alt="SubRouter" width="150"></a></td>
<td>Thanks to SubRouter for sponsoring this project! SubRouter is a marketplace and smart routing platform for AI service operators. Merchants can launch operating sites, publish packages, manage users, models, and pricing, while users discover services and access reliable AI models through one unified API. Register via <a href="https://subrouter.ai/register?aff=l3ri">this link</a>!</td>
</tr>

<tr>
<td width="180"><a href="https://www.shengsuanyun.com/?from=CH_4HHXMRYF"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/shengsuanyun.png" alt="Shengsuanyun" width="150"></a></td>
<td>Thanks to Shengsuanyun for sponsoring this project! Shengsuanyun is a super factory serving AI Native Teams — an industrial-grade AI task parallel execution platform. Its model marketplace aggregates Claude, ChatGPT, Gemini, and other domestic and international LLM and multimedia model capabilities with direct supply. Absolutely no reverse engineering or dilution — platform-wide model SLA availability reaches 99.7%, with <a href="https://watch.shengsuanyun.com/status/shengsuanyun">monitoring dashboards</a> showing green across the board. It also offers enterprise-grade custom gateways for fine-grained team cost and permission management, smart routing, security protection, and BYOK (Bring Your Own Key) hosting. The platform charges on a pay-per-use and tokens plan (coming soon) basis, with invoicing available. Register via <a href="https://www.shengsuanyun.com/?from=CH_4HHXMRYF">this link</a> as a new user to receive ¥10 in credits plus a 10% bonus on your first top-up.</td>
</tr>

<tr>
<td width="180"><a href="https://88api.ai/sign-up?aff=HSGY"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/88api-banner-en.jpg" alt="88API" width="150"></a></td>
<td>Thanks to 88API Token Aggregation Platform for sponsoring this project! 88API is a one-stop multi-model API platform operated by a Hong Kong company, built mainly for developers, creators and AI application users. A unified interface gives access to text, image, speech and video models, covering common workflows such as AI coding, smart translation, content creation, voice-over, image generation and video generation. You can add it as a provider and switch to it right inside CC Switch. 88API supports major international payment methods, can issue invoices, and provides enterprise-grade stable service. Register via <a href="https://88api.ai/sign-up?aff=HSGY">this link</a> to receive exclusive bonus credits!</td>
</tr>

<tr>
<td width="180"><a href="https://apikey.fan/register?aff=CCSwitch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/apikey_banner.png" alt="APIKEY.FUN" width="150"></a></td>
<td>Thanks to APIKEY.FUN for sponsoring this project! APIKEY.FUN is a professional enterprise-grade AI relay platform dedicated to providing stable, efficient, and low-cost AI model API access for enterprises and individual developers. The platform supports popular mainstream models such as Claude, OpenAI, and Gemini, with prices as low as 7% of official rates. Register through this project's <a href="https://apikey.fan/register?aff=CCSwitch">exclusive link</a> to enjoy an exclusive offer of up to <strong>permanent 5% off top-ups</strong>.</td>
</tr>

<tr>
<td width="180"><a href="https://9527.codes/register?aff=e5zI"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/9527-banner.png" alt="9527CODE" width="150"></a></td>
<td>Thanks to 9527CODE for sponsoring this project! 9527 CODE is an enterprise-grade, full-capability AI relay platform focused on stability and service quality, providing fast, stable, and high-quality relay services for Claude Code, Codex, and other mainstream AI models. It places greater emphasis on long-term stability, route quality, and sustained availability, offering enterprises and heavy AI users a stable and efficient one-stop model access solution. With one year of continuous operation, 99.9% service stability, and 7×24 human technical support. Register through this project's <a href="https://9527.codes/register?aff=e5zI">exclusive link</a>; new users can contact customer service to receive trial credit, and referral cashback is unlimited!</td>
</tr>

<tr>
<td width="180"><a href="https://teamorouter.cn/?utm_source=cc_switch&utm_medium=referral&utm_campaign=ai_directory"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/TeamoRouter-banner.png" alt="TeamoRouter" width="150"></a></td>
<td>Thanks to TeamoRouter for sponsoring this project! TeamoRouter is an enterprise-grade Agentic LLM gateway built for developers, AI teams, and businesses. Without requiring any subscriptions, it lets you access Claude Code, Codex, Gemini CLI, OpenAI Codex, and other popular AI agents through a single unified API, while offering API pricing at discounts of up to 90%.
Unlike typical API relay services, TeamoRouter aggregates hundreds of official model providers and trusted infrastructure partners, including OpenAI, Anthropic, Vertex, Azure, and AWS bedrock. Every provider is verified for 100% Agent protocol compatibility, cache performance, and request traceability, ensuring stable quality instead of reverse-engineered or diluted endpoints. The platform delivers near-official TTFT, 99.6% SLA, enterprise-scale throughput up to 5,000 QPM, and industry-leading cache hit rates that dramatically reduce token costs for long-running agent workflows.
TeamoRouter also offers enterprise features including centralized billing, team management, BYOK, smart routing, usage analytics, dynamic provider optimization, and dedicated support. For an even simpler experience, Teamo Desktop lets you use Claude Code, Codex, Gemini CLI, and other popular AI agents with one-click setup—no API key management or manual gateway configuration required. Register via <a href="https://teamorouter.cn/?utm_source=cc_switch&utm_medium=referral&utm_campaign=ai_directory">this link</a> as a new user to receive 10% off your first top-up.</td>
</tr>

<tr>
<td width="180"><a href="https://ppio.com/activity/ccswitch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/ppio-banner.png" alt="PPIO" width="150"></a></td>
<td>Thanks to PPIO for sponsoring this project! PPIO is a leading independent Agentic Cloud provider in China, co-founded in 2018 by PPTV founder Yao Xin and former PPTV chief architect Wang Wenyu. A single API key gives you access to every flagship open-source model, including DeepSeek-V4-Flash, Kimi-K3, GLM-5.2, and MiniMax-M3; the enterprise Token Plan is available at up to 40% off and supports 200 seats, and the Fusion blended model matches Fable5 at one-tenth of the price. Register via <a href="https://ppio.com/activity/ccswitch">this link</a> and complete identity verification to receive a ¥10 credit voucher — invite friends to top up and earn up to 15% cashback on their spend.</td>
</tr>

<tr>
<td width="180"><a href="https://www.newapi.ai/"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/newapi-banner.png" alt="new-api" width="150"></a></td>
<td>Thanks to the open-source AI infrastructure project <a href="https://www.newapi.ai/">new-api</a> for its strong support of this project! new-api is an open-source AI infrastructure project from QuantumNous and one of the leading unified LLM access-and-distribution projects by activity and adoption, focused on helping developers, teams, and enterprises build manageable, scalable AI service platforms at lower cost. As a fellow project rooted in the open-source ecosystem, new-api hopes to sponsor and support the continued growth of more outstanding open-source projects. 🌟 Star new-api to show your support: <a href="https://github.com/QuantumNous/new-api">https://github.com/QuantumNous/new-api</a>. Website: <a href="https://www.newapi.ai/">https://www.newapi.ai/</a>.</td>
</tr>

<tr>
<td width="180"><a href="https://claudecn.ai/register?aff=HEL9"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/claudecn.jpg" alt="ClaudeCN" width="150"></a></td>
<td>Thanks to ClaudeCN for sponsoring this project! ClaudeCN is an enterprise-grade AI gateway platform operated by a registered company. It delivers high-availability commercial API access to popular models including Claude, GPT, and DeepSeek, and is built around formal enterprise procurement workflows — corporate bank transfers, signed contracts, and full compliance. Register via <a href="https://claudecn.ai/register?aff=HEL9">this link</a>!</td>
</tr>

<tr>
<td width="180"><a href="https://www.byteplus.com/en/product/modelark?utm_campaign=hw&utm_content=ccswitch&utm_medium=devrel_tool_web&utm_source=OWO&utm_term=ccswitch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/byteplus.png" alt="BytePlus" width="150"></a></td>
<td>Thanks to Dola seed for sponsoring this project! Dola Seed 2.0 is a full‑modal general large model independently developed by ByteDance for the global market. Built on a unified multimodal architecture, it supports joint understanding and generation of text, images, audio, and video. It natively enables agent collaboration, with strong reasoning, long‑task execution, tool integration, and coding capabilities. It is widely applicable to smart cockpits, personal assistants, education, customer support, marketing, retail, and other scenarios. It excels in multimodal perception, end‑to‑end complex task delivery, stable interaction, and data security, and is readily accessible and deployable via the ModelArk platform. Register via <a href="https://www.byteplus.com/en/product/modelark?utm_campaign=hw&utm_content=ccswitch&utm_medium=devrel_tool_web&utm_source=OWO&utm_term=ccswitch">this link</a> to get 500,000 tokens of free inference quota per model.<a href="https://www.volcengine.com/activity/ai618?utm_campaign=hw&utm_content=hw&utm_medium=devrel_tool_web&utm_source=OWO&utm_term=ccswitch"> >>中国大陆地区的开发者请点击这里</a></td>
</tr>

<tr>
<td width="180"><a href="https://cloud.siliconflow.cn/i/YflgU2Ve"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/silicon_en.jpg" alt="SiliconFlow" width="150"></a></td>
<td>Thanks to SiliconFlow for sponsoring this project! SiliconFlow is a high-performance AI infrastructure and model API platform, providing fast and reliable access to language, speech, image, and video models in one place. With pay-as-you-go billing, broad multimodal model support, high-speed inference, and enterprise-grade stability, SiliconFlow helps developers and teams build and scale AI applications more efficiently. Register via <a href="https://cloud.siliconflow.cn/i/YflgU2Ve">this link</a> and complete real-name verification to receive ¥16 in bonus credit, usable across models on the platform. SiliconFlow is also now compatible with OpenClaw, allowing users to connect a SiliconFlow API key and call major AI models for free.</td>
</tr>

<tr>
<td width="180"><a href="https://a6api.com/register?aff=AqNr"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/a6-banner-en.jpg" alt="A6API" width="150"></a></td>
<td>Thanks to <a href="https://a6api.com/register?aff=AqNr">A6API</a> for sponsoring this project! A6API is a one-stop AI model API aggregation platform covering Claude, GPT, Gemini, Codex, and other mainstream models. Multiple vendors can list their supply on the platform, so the same model can be quoted competitively by several upstream providers. Smart routing automatically picks the more stable, lower-priced route available and fails over automatically, helping you reduce failed requests, cut costs, and improve stability. Whether you are an individual developer, an AI product team, or a studio, you can integrate quickly through a unified interface — compatible with all formats, with low migration cost. New users who register via <a href="https://a6api.com/register?aff=AqNr">this link</a> receive free trial credits: try it first, then use it at a low price.</td>
</tr>

<tr>
<td width="180"><a href="https://www.compshare.cn/coding-plan?ytag=GPU_YY_YX_git_cc-switch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/ucloud.png" alt="Compshare" width="150"></a></td>
<td>Thanks to Compshare for sponsoring this project! Compshare is UCloud's AI cloud platform, providing stable and comprehensive domestic and international model APIs with just one key. Featuring cost-effective monthly and per-use domestic-model Coding Plan packages, alongside stable officially-relayed overseas models. Supports Claude Code, Codex, and API access. Enterprise-grade high concurrency, 24/7 technical support, and self-service invoicing. Users who register via <a href="https://www.compshare.cn/coding-plan?ytag=GPU_YY_YX_git_cc-switch">this link</a> will receive a free 5 CNY platform trial credit!</td>
</tr>

<tr>
<td width="180"><a href="https://www.ccsub.net/register?ref=Y6Z8DXEA"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/ccsub.svg" alt="CCSub" width="150"></a></td>
<td>Thanks to CCSub for sponsoring this project! CCSub is a stable, affordable AI API relay platform — your drop-in replacement for a Claude.ai subscription. One API key gives you access to Claude Opus 4.8, Sonnet, Haiku, GPT-5, Gemini, and DeepSeek at roughly 30% of direct API cost, with no VPN required from anywhere in the world. Compatible with Claude Code, Codex, Cursor, Cline, Continue, Windsurf, and all major AI coding tools. Register via <a href="https://www.ccsub.net/register?ref=Y6Z8DXEA">this link</a> and get $5 free credit on sign-up.</td>
</tr>

<tr>
<td width="180"><a href="https://sssaicodeapi.com/register?ref=DCP0SM"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/sssaicode.png" alt="SSSAiCode" width="150"></a></td>
<td>Thanks to SSSAiCode for sponsoring this project! SSSAiCode is a stable and reliable API relay service, dedicated to providing stable, reliable, and affordable Claude and Codex model services, with same-day fast invoicing. SSSAiCode offers a special deal for CC Switch users: register via <a href="https://sssaicodeapi.com/register?ref=DCP0SM">this link</a> to enjoy $10 extra credit on every top-up!</td>
</tr>

<tr>
<td width="180"><a href="https://soleapi.com/r/ccswitch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/soleapi-banner.png" alt="SoleAPI" width="150"></a></td>
<td>Thanks to SoleAPI for supporting this project! SoleAPI is an AI model gateway for developers and enterprises: one API key gives you access to 30+ leading models including Claude, GPT and Gemini. It is natively compatible with the OpenAI and Anthropic protocols, so Claude Code, Codex, Cursor and your existing SDKs work by simply changing the Base URL. Requests are routed in real time by latency and upstream health, with millisecond-level automatic failover to backup channels, 99.99% service availability and 24/7 technical support. Every call lands on a single bill with per-request token and cost breakdowns you can inspect at any time. Sign up through this project's <a href="https://soleapi.com/r/ccswitch">referral link</a> to receive free trial credits, and earn ongoing cashback by inviting friends who top up!</td>
</tr>

<tr>
<td width="180"><a href="https://www.micuapi.ai/register?aff=aOYQ"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/mikubanner.svg" alt="Micu" width="150"></a></td>
<td>Thanks to Micu API for sponsoring this project! Micu API is a global LLM relay service provider dedicated to delivering the best cost-performance ratio with high stability. Backed by a registered enterprise for core assurance, eliminating any risk of service discontinuation, with fast official invoicing support! We champion "zero cost to try": top up from as low as ¥1 with no minimum, and get fee-free refunds anytime! Micu API offers an exclusive deal for CC Switch users: register via <a href="https://www.micuapi.ai/register?aff=aOYQ">this link</a> and enter promo code "ccswitch" when topping up to enjoy a <strong>10% discount</strong>!</td>
</tr>

<tr>
<td width="180"><a href="https://www.rightapi.ai/register?aff=CCSWITCH"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/rightcode.jpg" alt="RightCode" width="150"></a></td>
<td>Thank you to Right Code for sponsoring this project! Right Code reliably provides routing services for models such as Claude Code, Codex, and Gemini, with both pay-as-you-go and monthly subscription billing options available. Invoices are available upon top-up, and enterprise and team users can receive dedicated one-on-one support. Right Code also offers an exclusive discount for CC Switch users: register via <a href="https://www.rightapi.ai/register?aff=CCSWITCH">this link</a>, and with every top-up you will receive pay-as-you-go credit equivalent to 5% of the amount paid.</td>
</tr>

<tr>
<td width="180"><a href="https://cubence.com/signup?code=CCSWITCH&source=ccs"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/cubence.png" alt="Cubence" width="150"></a></td>
<td>Thanks to Cubence for sponsoring this project! Cubence is a reliable and efficient API relay service provider, offering relay services for Claude Code, Codex, Gemini, and more with flexible billing options including pay-as-you-go and monthly plans. Cubence provides special discounts for CC Switch users: register using <a href="https://cubence.com/signup?code=CCSWITCH&source=ccs">this link</a> and enter the "CCSWITCH" promo code during recharge to get 10% off every top-up!</td>
</tr>

<tr>
<td width="180"><a href="https://crazyrouter.com/register?aff=OZcm&ref=cc-switch"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/crazyrouter.png" alt="Crazyrouter" width="150"></a></td>
<td>Thanks to Crazyrouter for sponsoring this project! Crazyrouter is a high-performance AI API aggregation platform — one API key for 300+ models including Claude Code, Codex, Gemini CLI, and more. All models at 55% of official pricing with auto-failover, smart routing, and unlimited concurrency. Crazyrouter offers an exclusive deal for CC Switch users: register via <a href="https://crazyrouter.com/register?aff=OZcm&ref=cc-switch">this link</a> and contact customer support to claim <strong>$2 free credit</strong>, plus enter promo code `CCSWITCH` on your first top-up for an extra <strong>30% bonus credit</strong>! </td>
</tr>

<tr>
<td width="180"><a href="https://www.dmxapi.cn/register?aff=bUHu"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/partners/logos/dmx-en.jpg" alt="DMXAPI" width="150"></a></td>
<td>Thanks to DMXAPI for sponsoring this project! DMXAPI provides global large model API services to 200+ enterprise users. One API key for all global models. Features include: instant invoicing, unlimited concurrency, starting from $0.15, 24/7 technical support. GPT/Claude/Gemini all at 32% off, domestic models 20-50% off, Claude Code exclusive models at 66% off! <a href="https://www.dmxapi.cn/register?aff=bUHu">Register here</a></td>
</tr>

</table>

</details>

## Why CC Switch?

AI coding tools like Claude Code, Codex, and Gemini CLI each have their own configuration format. Switching API providers means hand-editing JSON, TOML, YAML, or `.env` files, and MCP, Skills, and prompts have to be maintained separately in every tool.

**CC Switch** brings all of this into a single desktop app: pick a preset, enter your key, and switch in one click. Switching replaces only the connection details — endpoint, key, and model — so plugins, hooks, MCP, and comments you added yourself stay as they are.

- **One App, Twelve Tools** — Claude Code, Claude Desktop, Codex, Gemini CLI, Grok Build, OpenCode, OpenClaw, Hermes, Pi, MiniMax Code, Kimi Code, and Oh My Pi
- **No More Manual Editing** — 90+ provider presets including AWS Bedrock, NVIDIA NIM, and community relays
- **Direct, Routing, or Aggregation — Your Choice** — Direct connects the tool straight to the provider; Routing forwards requests through your machine, converting API formats and failing over automatically, so you can use GPT in Claude Code and Claude in Codex; Aggregation puts models from several providers into one model list in Claude Code or Codex, and each request goes to the provider of the model you pick
- **Centralized MCP, Skills & Prompts** — Add MCP servers and Skills once, then choose which tools to sync them to; prompts are maintained separately for each tool
- **Sessions You Can Read** — Turns each tool's session logs into a reading view: what each turn did, which files changed, and which step failed, all at a glance
- **Usage & Quotas at a Glance** — Track token usage and spending even without local routing; remaining subscription quota and account balances show right on provider cards and in the tray
- **Cross-Platform** — Native desktop app for Windows, macOS, and Linux, built with Tauri 2

## Screenshots

<table>
<tr>
<td align="center" width="50%"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/release-notes/v4.0.0/main-en.png" alt="Main interface: sidebar, Direct / Routing / Aggregation tabs, and provider cards" width="400"><br>Main Interface</td>
<td align="center" width="50%"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/release-notes/v4.0.0/apps-en.png" alt="Apps page: versions, installation, and upgrades for every AI coding tool in one place" width="400"><br>Apps Page</td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/release-notes/v4.0.0/agg-en.png" alt="Aggregation mode: one default provider plus several added providers" width="400"><br>Aggregation Mode</td>
<td align="center"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/release-notes/v4.0.0/agg-codex-en.png" alt="Codex's model picker listing models from several providers" width="400"><br>Aggregated Model List in Codex</td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/release-notes/v4.0.0/session-en.png" alt="Session reading view: step summaries, tool call details, and conversation outline" width="400"><br>Session Reading View</td>
<td align="center"><img src="https://raw.githubusercontent.com/farion1231/cc-switch/main/assets/release-notes/v4.0.0/usage-en.png" alt="Usage: heatmap and request logs" width="400"><br>Usage</td>
</tr>
</table>

## Download & Installation

### System Requirements

- **Windows**: Windows 10 and above
- **macOS**: macOS 12 (Monterey) and above
- **Linux**: x86_64 or ARM64 with glibc 2.35+ and WebKitGTK 4.1 — e.g. Ubuntu 22.04+, Debian 12+, and recent Fedora releases; RHEL / Rocky / Alma 8–9 are not supported yet

### Windows Users

Download the latest `CC-Switch-v{version}-Windows.msi` installer or `CC-Switch-v{version}-Windows-Portable.zip` portable version from the [Releases](https://github.com/farion1231/cc-switch/blob/main/../../releases) page. On Windows on ARM, download `CC-Switch-v{version}-Windows-arm64.msi` or `CC-Switch-v{version}-Windows-arm64-Portable.zip`.

### macOS Users

**Method 1: Install via Homebrew (Recommended)**

```bash
brew install --cask cc-switch
```

Update:

```bash
brew upgrade --cask cc-switch
```

**Method 2: Manual Download**

Download `CC-Switch-v{version}-macOS.dmg` (recommended) or `.zip` from the [Releases](https://github.com/farion1231/cc-switch/blob/main/../../releases) page. It's a Universal build that runs natively on both Apple Silicon and Intel Macs.

> **Note**: CC Switch for macOS is code-signed and notarized by Apple. You can install and open it directly.

### Arch Linux Users

**Install via paru (Recommended)**

```bash
paru -S cc-switch-bin
```

### Linux Users

Download the latest Linux build from the [Releases](https://github.com/farion1231/cc-switch/blob/main/../../releases) page:

- `CC-Switch-v{version}-Linux-x86_64.deb` / `-Linux-arm64.deb` (Debian/Ubuntu)
- `CC-Switch-v{version}-Linux-x86_64.rpm` / `-Linux-arm64.rpm` (Fedora and other RPM distros that ship WebKitGTK 4.1)
- `CC-Switch-v{version}-Linux-x86_64.AppImage` / `-Linux-arm64.AppImage` (any distro meeting the requirements above)

> **Flatpak**: Not included in official releases. You can build it yourself from the `.deb` — see [`flatpak/README.md`](https://github.com/farion1231/cc-switch/blob/main/flatpak/README.md) for instructions.

## Quick Start

### Basic Usage

1. **Add Provider**: Select the tool you want to manage in the sidebar, then click "+" (Add Provider) in the top-right corner of the page → Choose a preset or create a custom configuration
2. **Switch Provider**:
   - Main UI: Select provider → Click "Enable" (for OpenCode, OpenClaw, Hermes, MiniMax Code, and Kimi Code the button is "Add", and for Pi and Oh My Pi it's "Enable" / "Remove"; these seven are coexist-mode tools, so you can add several providers at once)
   - System Tray: One row per tool showing "name · mode · provider · quota"; click a provider name in its submenu to switch (Claude Code, Claude Desktop, Codex, Gemini CLI, and Grok Build)
3. **Takes Effect**: Claude Code needs no restart; for Codex, Gemini CLI, and Grok Build, restart your terminal or the CLI tool; for Claude Desktop, restart the app itself (see FAQ)
4. **Back to Official Login**: Switch to the built-in official provider in the list (e.g. "Claude Official"), restart the tool, then follow its login/OAuth flow
5. **Routing & Aggregation (optional)**: The Claude Code, Codex, Gemini CLI, and Grok Build pages have "Direct" / "Routing" tabs at the top, and Claude Code and Codex also have "Aggregation". Clicking a tab only changes what you're looking at and doesn't touch your configuration; to actually switch, click "Start routing" or "Switch to Aggregation" on the page, and click "Back to direct" to return. Use Routing to use OpenAI- or Gemini-format providers in Claude Code, or Claude in Codex; use Aggregation to mix models from several providers in one model list
6. **Manage Tools**: The "Apps" page in the sidebar shows each AI coding tool's version, install location, and source in one place; you can install, upgrade, or upgrade all, and choose which tools appear in the sidebar

### MCP, Prompts, Skills, Projects & Sessions

- **MCP**: Click "MCP" in the sidebar → Add servers via templates or custom config (or "Import Existing") → Toggle sync for each tool
- **Prompts**: Click "Prompts" in the sidebar → Create prompts with the Markdown editor → Enable one to write it to that tool's prompt file
- **Skills**: Click "Skills" in the sidebar → "Discover Skills" → Search skills.sh or browse GitHub repos → One-click install to supported tools
- **Projects**: First turn on "Show project switcher" in "Settings → General", then on the Claude Code, Claude Desktop, or Codex page, open the project switcher at the top → "New project" to save the current configuration; later, pick it from the switcher to switch the whole setup at once
- **Sessions**: Click "Sessions" in the sidebar → Browse and search conversation history, open the reading view, or restore each tool's sessions
- **Accounts**: Click "Accounts" in the sidebar to sign in to GitHub Copilot, ChatGPT, xAI (Grok), and Kimi Code accounts and use your subscriptions as providers. Kimi Code supports multiple official accounts, each with separate credentials and a native provider; the first login uses Kimi's native default credential slot. Manage sign-in, reauthentication and sign-out here. Official Kimi OAuth nodes still present in the native configuration are protected on the provider page; saved profiles can be deleted after their native nodes are removed.

> **Note**: On first launch, CC Switch automatically imports your existing Claude Code, Codex, Gemini CLI, and Grok Build configuration as a provider named `default` and adds an official provider for each of these tools and Claude Desktop, so nothing you had configured is lost.

For detailed guides on every feature, check out the **[User Manual](https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/README.md)**, covering provider management, MCP/Prompts/Skills, local routing & failover, and more.

## Features

[Full Changelog](https://github.com/farion1231/cc-switch/blob/main/CHANGELOG.md) | [v4.0 Release Notes](https://github.com/farion1231/cc-switch/blob/main/docs/release-notes/v4.0.4-en.md)

### Supported Features by Tool

| Tool | Providers | Local Routing | Aggregation | Tray Switching | MCP | Skills | Prompts | Sessions | Usage Stats |
| --- | --- | :---: | :---: | :---: | :---: | :---: | --- | :---: | :---: |
| Claude Code | Switch | ✓ | ✓ | ✓ | ✓ | ✓ | CLAUDE.md | ✓ | ✓ |
| Claude Desktop | Switch | Model Mapping only | – | ✓ | – | – | – | – | Model Mapping only |
| Codex | Switch | ✓ | ✓ | ✓ | ✓ | ✓ | AGENTS.md | ✓ | ✓ |
| Gemini CLI | Switch | ✓ | – | ✓ | ✓ | ✓ | GEMINI.md | ✓ | ✓ |
| Grok Build | Switch | ✓ | – | ✓ | ✓ | ✓ | AGENTS.md | ✓ | ✓ |
| OpenCode | Coexist | – | – | – | ✓ | ✓ | AGENTS.md | ✓ | ✓ |
| OpenClaw | Coexist | – | – | – | – | – | Workspace editor | ✓ | – |
| Hermes | Coexist | – | – | – | ✓ | ✓ | Memory | ✓ | – |
| Pi | Coexist | – | – | – | ✓ | ✓ | AGENTS.md, SYSTEM.md, prompt templates | ✓ | ✓ |
| MiniMax Code | Coexist | – | – | – | ✓ | ✓ | AGENTS.md | ✓ | ✓ |
| Kimi Code | Coexist | – | – | – | ✓ | ✓ | AGENTS.md | ✓ | ✓ |
| Oh My Pi | Coexist | – | – | – | ✓ | ✓ | AGENTS.md | ✓ | – |

- **Switch**: only one provider is active at a time; **Coexist**: multiple providers are written into the tool's own config at the same time, and you pick one inside the tool.
- **Local Routing**: CC Switch forwards requests on your machine and converts API formats; see [Local Routing & Failover](#local-routing--failover) below. Claude Desktop providers can use "Direct" or "Model Mapping"; with "Model Mapping", requests go through local routing.
- **Aggregation**: Puts models from several providers into one model list and sends each request to the provider of the model you pick; see [Aggregation Mode](#aggregation-mode) below.
- **Sessions**: Browse and search conversation history, open the reading view, and copy a resume command to continue a conversation (resuming OpenClaw and Hermes sessions isn't supported yet). Hermes shows only the 500 most recent sessions.
- **Usage Stats**: Without local routing, usage is collected from each tool's local session logs; requests that go through local routing are counted as well.
- The MCP, Skills, Prompts, and Sessions panels opened from the Claude Desktop page apply to Claude Code.

### Provider Management

- **90+ provider presets** — Pick a preset and enter your key to add a provider, or create a custom configuration. The add panel lets you search by name (including Chinese names) and domain, and a vendor's different plans and regions are merged into one row
- **Key fields only** — Switching replaces only the connection details such as the endpoint, key, and model; plugins, hooks, MCP, settings you added yourself, and comments stay as they are. The editor shows what the config file will look like after switching, and CC Switch automatically backs up each config file before rewriting it for the first time
- **Projects** — Save Claude Code's or Codex's current provider, MCP, Skills, and prompt files as a project (for Claude Desktop, only the provider is saved), then switch the whole setup in one click from the project switcher at the top of the page or from the tray; when you switch to another project, the current state is automatically saved back to the previous project. The project switcher is hidden by default; turn on "Show project switcher" in "Settings → General"
- **Accounts (Beta)** — Sign in to multiple GitHub Copilot, ChatGPT, and xAI (Grok) accounts under "Accounts" in the sidebar and use those subscriptions as providers in Claude Code, Claude Desktop, and Codex (everything except Codex's OpenAI Official has to be used in Routing mode). Using a subscription outside the official client may violate the vendor's terms of service; assess the risk yourself
- **Third-party providers for Claude Desktop** — Connect directly to Anthropic-compatible endpoints; for non-Claude models, choose "Model Mapping" to map tiers like Sonnet, Opus, and Haiku to the provider's actual models through local routing
- **Universal providers** — One config syncs to Claude Code, Codex, and Gemini CLI
- One-click switching, system tray quick switching (Claude Code, Claude Desktop, Codex, Gemini CLI, Grok Build), drag-and-drop sorting, import/export

### Local Routing & Failover

- **API format conversion** — Local routing converts requests between Anthropic Messages, OpenAI Chat Completions, OpenAI Responses, and Gemini Native: Claude Code and Claude Desktop can use OpenAI- or Gemini-format providers, and Codex and Grok Build can use Chat Completions or Anthropic Messages providers
- **Per-tool toggle** — Claude Code, Codex, Gemini CLI, and Grok Build can each enter Routing mode separately: click "Start routing" on the "Routing" tab at the top of the page. In Routing mode, switching providers takes effect immediately for subsequent requests (Codex, Gemini CLI, and Grok Build may still need a restart if the switch changes the model). When you quit CC Switch, it writes the direct configuration back first and reconnects the next time it starts
- **Auto-failover** — Configure a failover queue for each tool; when a request fails, CC Switch automatically moves on to the next provider in the queue, backed by a circuit breaker and provider health monitoring
- **Rectifier** — Automatically fixes certain requests that some upstreams can't handle (e.g. Thinking signatures, or falling back when images aren't supported)
- Official providers (e.g. Claude Official) can't go through local routing (except Codex's OpenAI Official)
- The routing service's status, listen address, and failover settings are all in "Settings → Local routing"
- Guides: [Using GPT in Claude Code](https://github.com/farion1231/cc-switch/blob/main/docs/guides/claude-codex-routing-guide-en.md) · [Using Claude in Codex](https://github.com/farion1231/cc-switch/blob/main/docs/guides/codex-claude-routing-guide-en.md)

### Aggregation Mode

- **One model list, many providers** — On the Claude Code or Codex page, switch to "Aggregation" and add a few providers; their models all appear in the client's model picker. Each request goes to the provider of the model you pick, with no need to switch in CC Switch
- **Add and remove anytime** — Click "Add" or "Remove" on a provider card, then pick one provider as the default; requests that don't name an aggregated model go to it. Codex's OpenAI Official can only be the default provider; Claude official subscriptions are currently unsupported in Aggregation
- **Notes** — Aggregation doesn't provide failover; Claude Code requires version 2.1.243 or later; Codex needs a restart after the aggregated list changes, while Claude Code doesn't. When you switch models within a session, the new model has to rebuild its prompt cache, so the first turn costs a bit more
- Much of Aggregation mode's design draws on [opencodex](https://github.com/lidge-jun/opencodex) — thanks to its author and contributors
- Documentation: [Aggregation mode manual](https://github.com/farion1231/cc-switch/blob/main/docs/user-manual/en/4-proxy/4.6-aggregation.md) · [Illustrated guide (Chinese)](https://github.com/farion1231/cc-switch/blob/main/docs/guides/aggregation-mode-guide-zh.md)

### MCP, Prompts & Skills

- **Unified MCP panel** — Manage all MCP servers in one place, choose which tools to sync each one to (Claude Code, Codex, Gemini CLI, Grok Build, OpenCode, Hermes, Pi, MiniMax Code, Kimi Code, Oh My Pi), import existing configs from each tool, and import via Deep Link
- **Prompts** — A per-tool prompt library with a Markdown editor; enabling a prompt writes it to that tool's prompt file (CLAUDE.md / AGENTS.md / GEMINI.md), and the file's existing content is saved back to the library first, so nothing is lost. Pi can also edit SYSTEM.md, APPEND_SYSTEM.md, and prompt templates
- **Skills** — Search skills.sh, or install in one click from GitHub repos or ZIP files; check for updates and update all in one click; sync to each tool automatically, via symlinks only, or via copies only; you can optionally store them in `~/.agents/skills`
- All three panels support search, and MCP and Skills can also be enabled or disabled all at once per tool; providers, MCP servers, and prompts are edited full-page in the content area, and you're warned before leaving with unsaved changes

### Usage & Cost Tracking

- **Usage dashboard** — Works without local routing: by default it automatically scans each tool's local session logs and tracks requests, tokens, cache hit rate, output speed, and spending by provider and model, with trend charts, a full-year heatmap, and per-request logs
- **Quotas & balances** — Provider cards and the tray show what's left and the reset countdown, e.g. "5h 94% left": official subscription quotas (Claude, ChatGPT, Gemini, SuperGrok), Coding Plan 5-hour / weekly / monthly quotas (Kimi, Zhipu GLM, MiniMax, Volcengine Ark, etc.), and account balances (DeepSeek, OpenRouter, SiliconFlow, etc.); some need to be turned on first via "Configure usage query" on the provider card, and for other providers you can write a custom usage script. ChatGPT subscriptions also show remaining limit resets and the Codex Credits balance
- **Custom pricing** — Set per-model prices, or import them from models.dev

### Session Manager & Workspace

- **Session reading view** — Parses each tool's session logs into structured content: text, thinking, tool calls, tool results, and images are shown separately; each turn of work collapses into a one-line summary (how many steps, how many files changed, how many failures), with failed steps marked in red; a conversation outline sits on the right, with in-session search, Markdown export, and copying a single turn or the whole conversation
- **List & resume** — Group by project or time, search titles, directories, messages, or session IDs, and delete in bulk; copy a resume command to continue a conversation, and on macOS resume in a terminal with one click
- **Workspace editor** (OpenClaw) — Edit agent files (AGENTS.md, SOUL.md, etc.) and daily memory
- **Memory** (Hermes) — Edit Hermes's MEMORY.md and USER.md

### System & Platform

- **Cloud sync** — Sync across devices via WebDAV (Jianguoyun, Nextcloud, Synology NAS, etc.) or S3-compatible storage (AWS S3, Cloudflare R2, Alibaba Cloud OSS, Tencent Cloud COS, etc.); you can also put the CC Switch configuration directory in a cloud drive folder such as Dropbox, OneDrive, or iCloud
- **CLI tool management** — On the "Apps" page in the sidebar, see the current and latest versions of command-line tools like Claude Code and Codex, install, upgrade, or upgrade all in one click, and diagnose duplicate installations; on Windows it can also manage tools inside WSL (see FAQ)
- **Deep Link** (`ccswitch://`) — Import providers, MCP servers, and prompts, or add skill repositories, in one click via a link; create links with the [online generator](https://ccswitch.io/deplink.html); site owners who want an import button can follow the [integration guide](https://github.com/farion1231/cc-switch/blob/main/docs/guides/deeplink-site-integration-guide-en.md)
- **Built-in utilities** — Skip Claude Code's first-run confirmation, hide AI attribution, have the VS Code Claude Code extension follow CC Switch's provider switches, and more
- Dark / Light / System theme, auto-launch, auto-updater, atomic writes, auto-backups (see where every backup lives and how much space it takes in "Settings → Data"), i18n (zh/zh-TW/en/ja, plus community-translated Turkish)

## FAQ

<details>
<summary><strong>Which AI tools does CC Switch support?</strong></summary>

CC Switch supports twelve tools: **Claude Code**, **Claude Desktop**, **Codex**, **Gemini CLI**, **Grok Build**, **OpenCode**, **OpenClaw**, **Hermes**, **Pi**, **MiniMax Code**, **Kimi Code**, **Oh My Pi**. Each tool has dedicated provider presets and configuration management; see [Supported Features by Tool](#supported-features-by-tool) for what each one supports.

</details>

<details>
<summary><strong>Do I need to restart the terminal after switching providers?</strong></summary>

It depends on the tool:

- **Claude Code**: supports hot-switching of provider data — no restart needed.
- **Codex, Gemini CLI, Grok Build**: restart your terminal or the CLI tool for changes to take effect (CC Switch reminds you after switching). In Routing mode, requests go to the new provider immediately, but all three tools may still need a restart if the switch changes the model.
- **Aggregation mode**: changes to Claude Code's aggregated models take effect immediately; for Codex, entering or leaving Aggregation and changing the aggregated model list all require a full restart — see the next entry.
- **Claude Desktop**: fully quit and reopen Claude Desktop; when using "Model Mapping", also keep CC Switch running.
- **OpenCode, OpenClaw, Hermes, Pi, MiniMax Code, Kimi Code, Oh My Pi**: these are coexist-mode tools — clicking "Add" ("Enable" for Pi and Oh My Pi) writes the provider into the tool's own config alongside the others; you then pick the model you want inside the tool. Kimi Code also provides a "Switch" button to select a provider's model; models still referenced as primary or secondary models cannot be removed. See the [Kimi Code integration guide](https://github.com/farion1231/cc-switch/blob/main/docs/kimi-code-integration-zh.md) (Chinese) for configuration and account details.

</details>

<details>
<summary><strong>In Aggregation mode, why don't the aggregated models show up in Codex's /model?</strong></summary>

Codex reads its model list only at startup. After entering or leaving Aggregation mode, adding or removing an aggregated provider, or changing a provider's aggregated models, fully restart Codex to see the new list:

*(README truncated for display. [Read the full README on GitHub](https://github.com/farion1231/cc-switch)).*
