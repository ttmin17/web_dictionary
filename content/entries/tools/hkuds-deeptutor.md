---
slug: hkuds-deeptutor
name: DeepTutor
tagline: "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/."
summary: "DeepTutor: Lifelong Personalized Tutoring"
categories:
  - agent-frameworks
tags:
  - ai-agents
  - ai-tutor
  - clawbot
  - cli-tool
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: HKUDS/DeepTutor
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 55257
  last_commit: 2026-11-05T11:40:48Z
  stars_delta_7d: 12323
  stars_growth_pct: 28.7
  trending_score: 15859.97
  rank_current: 3
  rank_delta: 8
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41692
    - 42934
    - 55257
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: HKUDS/DeepTutor
  path: README.md
  branch: main
  fetched_at: 2026-11-05T13:13:24.665Z
  truncated: true
type: agent_tool
tool:
  subcategory: coding_agent
  install_command: pip install deeptutor
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - deeptutor
    env_vars: []
    confidence: manifest
---

<div align="center">

<p align="center"><img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/logo/color-full.png" alt="DeepTutor" width="480"></p>
<h1 align="center">DeepTutor: Lifelong Personalized Tutoring</h1>

<p align="center">
  <a href="https://deeptutor.info" target="_blank"><img alt="Docs — deeptutor.info" src="https://img.shields.io/badge/Docs-deeptutor.info%20%E2%86%97-0A0A0A?style=for-the-badge&labelColor=F5F5F4" height="36"></a>&nbsp;
  <a href="https://deeptutor.info/collaborate/" target="_blank"><img alt="Collaborate — work with us" src="https://img.shields.io/badge/Collaborate-work%20with%20us%20%E2%86%97-0A0A0A?style=for-the-badge&labelColor=F5F5F4" height="36"></a>
</p>

<p align="center">
<a href="https://www.star-history.com/hkuds/deeptutor"><picture><source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/badge?repo=HKUDS/DeepTutor&amp;type=trending&amp;theme=dark" /><source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/badge?repo=HKUDS/DeepTutor&amp;type=trending" /><img alt="GitHub Trending Repository of the Day" src="https://api.star-history.com/badge?repo=HKUDS/DeepTutor&amp;type=trending" height="55" /></picture></a>&#32;<a href="https://trendshift.io/repositories/17099"><img src="https://trendshift.io/api/badge/trendshift/repositories/17099/daily" alt="HKUDS/DeepTutor | Trendshift" width="250" height="55"></a>&#32;<a href="https://www.star-history.com/hkuds/deeptutor"><picture><source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/badge?repo=HKUDS/DeepTutor&amp;theme=dark"><source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/badge?repo=HKUDS/DeepTutor"><img alt="Star History Rank" src="https://api.star-history.com/badge?repo=HKUDS/DeepTutor" width="185" height="55"></picture></a>
</p>

<p align="center">
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/README.md"><img alt="English" height="40" src="https://img.shields.io/badge/English-BCDCF7"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_CN.md"><img alt="简体中文" height="40" src="https://img.shields.io/badge/简体中文-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_TW.md"><img alt="繁體中文" height="40" src="https://img.shields.io/badge/繁體中文-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_JA.md"><img alt="日本語" height="40" src="https://img.shields.io/badge/日本語-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_ES.md"><img alt="Español" height="40" src="https://img.shields.io/badge/Español-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_FR.md"><img alt="Français" height="40" src="https://img.shields.io/badge/Français-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_AR.md"><img alt="Arabic" height="40" src="https://img.shields.io/badge/Arabic-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_RU.md"><img alt="Русский" height="40" src="https://img.shields.io/badge/Русский-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_HI.md"><img alt="Hindi" height="40" src="https://img.shields.io/badge/Hindi-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_PT.md"><img alt="Português" height="40" src="https://img.shields.io/badge/Português-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_TH.md"><img alt="Thai" height="40" src="https://img.shields.io/badge/Thai-CDCFD4"></a>&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/blob/main/assets/README/README_PL.md"><img alt="Polski" height="40" src="https://img.shields.io/badge/Polski-CDCFD4"></a>
</p>

[![Python 3.11+](https://img.shields.io/badge/Python-3.11%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue?style=flat-square)](https://raw.githubusercontent.com/HKUDS/DeepTutor/main/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/HKUDS/DeepTutor?style=flat-square&color=brightgreen)](https://github.com/HKUDS/DeepTutor/releases)
[![arXiv](https://img.shields.io/badge/arXiv-2604.26962-b31b1b?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.26962)

[![Discord](https://img.shields.io/badge/Discord-Community-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/eRsjPgMU4t)
[![Feishu](https://img.shields.io/badge/Feishu-Group-00D4AA?style=flat-square&logo=feishu&logoColor=white)](https://raw.githubusercontent.com/HKUDS/DeepTutor/main/Communication.md)
[![WeChat](https://img.shields.io/badge/WeChat-Group-07C160?style=flat-square&logo=wechat&logoColor=white)](https://github.com/HKUDS/DeepTutor/issues/78)

[Features](#-key-features) · [Get Started](#-get-started) · [Explore](#-explore-deeptutor) · [CLI](#%EF%B8%8F-deeptutor-cli--agent-native-interface) · [Ecosystem](#-ecosystem--eduhub--the-skills-community) · [Community](#-community)

</div>

---

> 🤝 **We welcome any kinds of contributing!** Vote on roadmap items or propose new ones at [`Roadmap`](https://github.com/HKUDS/DeepTutor/issues/498), and see our [Contributing Guide](https://raw.githubusercontent.com/HKUDS/DeepTutor/main/CONTRIBUTING.md) for branching strategy, coding standards, and how to get started.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/overview.png" alt="DeepTutor Home and workspace navigation" width="900">
</div>

### 📦 Releases

> **[2026.11.1]** [v1.7.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.7.1) — Desktop previews, broader localization, password changes, checked video lessons, Anki and calendar exports, more providers, and wide reliability improvements.

> **[2026.10.28]** [v1.7.0](https://github.com/HKUDS/DeepTutor/releases/tag/v1.7.0) — Modular installation, a refreshed learning workspace, block notebooks with Dito, narrated video lessons, resumable embedding checkpoints, and more reliable tutoring.

<details>
<summary><b>Past releases (more than 1 week ago)</b></summary>

> **[2026.10.19]** [v1.6.15](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.15) — Reviewed learning-path changes, grouped assessments, bounded tutoring memory, reliable chat recovery, sturdier parsing, retrieval comparisons, and native Gemini speech.

> **[2026.10.8]** [v1.6.14](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.14) — Original-source visual practice, recoverable indexing, unified video Reading, scientific research tools, managed plugins, a learning journal, and provider setup improvements.

> **[2026.10.4]** [v1.6.13](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.13) — Reading and listening improvements, question-bank practice, resilient document parsing, configurable speech, workspace-visible attachments, Polish, and new providers.

> **[2026.9.27]** [v1.6.12](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.12) — Workspace KB moves, Kiwix archives, source figures, Task Board, German UI, and chat recovery.

> **[2026.9.24]** [v1.6.11](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.11) — French and Ukrainian interfaces, reading folders with in-chat selection actions, figures sent to vision models, paged Office previews, and self-syncing knowledge bases.

> **[2026.9.22]** [v1.6.10](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.10) — Native LightRAG role models, a published index that records and enforces what built it, PDF attachments that follow your parsing engine, visible truncation, and unfiltered provider choices.

> **[2026.9.21]** [v1.6.9](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.9) — Folder-based learning workspaces, daily practice, redesigned Settings, clearer streaming conversations, persistent usage accounting, and recoverable archives with explicit permanent deletion.

> **[2026.9.14]** [v1.6.8](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.8) — A recycle bin for deleted chats, search across your whole conversation history, a tool that looks past your knowledge base, and a sweep of fixes for quiet failures.

> **[2026.9.11]** [v1.6.7](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.7) — A fix release: books that arrived as one empty chapter, quizzes that produced nothing, the model's scratchpad in the text, formulas printed raw, and cards you could not submit.

> **[2026.9.8]** [v1.6.6](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.6) — A fix release: answers that could not submit, a copy button that lied, connected knowledge bases for partners, Codex sign-in inside Docker, and a 100 KB lighter home route.

> **[2026.9.6]** [v1.6.5](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.5) — A content workspace you point at any folder, one `exec` tool for every language, Mastery Path modes that gate its tools, and Settings that grades readiness.

> **[2026.9.3]** [v1.6.4](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.4) — Faster isolated runtimes, controllable Book generation, source-complete Mastery paths and Chat hand-offs, durable Reading, unified activity UI, recoverable sessions, and explicit per-model API capabilities.

> **[2026.9.2]** [v1.6.3](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.3) — Breaking front/back-end refactor, strict canonical routes and recoverable streams, plus learner/guardian accounts, grounded Reading, WeKnora, broader parsing, Python 3.14, and DashScope media.

> **[2026.8.31]** [v1.6.2](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.2) — Immersive YouTube learning, a plugin-driven Visualize catalog, three new agent harnesses, safer reading citations, multi-format MinerU, live Partner channel status, and guided updates.

> **[2026.8.30]** [v1.6.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.1) — One vendor key linked to every service it serves, a task model for background work, Settings as a searchable navigator, a sidebar you arrange, and first-party **LightRAG**.

> **[2026.8.27]** [v1.6.0](https://github.com/HKUDS/DeepTutor/releases/tag/v1.6.0) — Faithful EPUB reading and annotations, Courses with Little Tutor and Ask Questions, bounded web-source sync, shared Books with private learning state, and Serply/native search.

> **[2026.8.25]** [v1.5.17](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.17) — Partners each member owns with private conversations and linkable chat accounts, GitHub repos as a knowledge source, **Antigravity CLI**, browser WeChat QR login, and `deeptutor doctor`.

> **[2026.8.22]** [v1.5.16](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.16) — **MarginNote 4** libraries you connect and its add-on fills, Book pages that turn again, and tool-call ids, embeddings and temperature limits that stop breaking behind a gateway.

> **[2026.8.20]** [v1.5.15](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.15) — **PageIndex OSS** you host yourself with reasoning retrieval, a question bank you can finally file into, third-party tool/capability plugins, and **Apache Tika** parsing.

> **[2026.8.19]** [v1.5.14](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.14) — **Immersive Reading**: a document open beside the thread, cited page by page; DeepTutor configures itself from chat; IMA libraries you browse and write to; a notebook console.

> **[2026.8.17]** [v1.5.13](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.13) — Books stream while they compile, track your progress, and export to Markdown; a cost estimate before you approve a spine; and home starter suggestions drawn from memory.

> **[2026.8.13]** [v1.5.12](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.12) — Web search rebuilt with six new providers (**Doubao**, **Bocha**, **Zhipu**, **Firecrawl**, **Qianfan**, **Aliyun IQS**), a **LiteParse** parsing engine, MCP servers that reconnect on credential change, and **CodeBuddy** + **OrcaRouter**.

> **[2026.8.10]** [v1.5.11](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.11) — Prose around a DSML tool call stops vanishing, a truncated reply continues instead of ending, live memory usage in Settings, and LightRAG indexing off the event loop.

> **[2026.8.7]** [v1.5.10](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.10) — Every account signs in to its own **Codex**, model output language becomes its own setting, empty tool calls are rejected instead of retried, and uploads stop blocking the loop.

> **[2026.8.4]** [v1.5.9](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.9) — Gemini **Embedding 2** on its native endpoint, a per-model **reasoning effort** control, a **Novita AI** gateway, retrieval roles for queries, and Compose deployments that keep all of `data/`.

> **[2026.8.2]** [v1.5.8](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.8) — Memory: a real heap ceiling for the dev server, source installs serve a production build, bounded LLM client and index caches, and a keep-alive fix for stray 500s.

> **[2026.7.31]** [v1.5.7](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.7) — A per-account **MCP Services** store, 101 **CLI Apps** the tutor can run, credentials moved out of the sandbox's reach, and a mobile layout.

> **[2026.7.29]** [v1.5.6](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.6) — Remote **Codex** sign-in completes behind an SSH tunnel, generated files get their own card in Activity, non-English languages stop collapsing to Chinese, and book creation no longer times out.

> **[2026.7.26]** [v1.5.5](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.5) — Sign in with your ChatGPT plan via **OpenAI Codex** OAuth, an **Eden AI** provider, knowledge bases that report what they hold, traceable `rag` citations, and GraphRAG indexing without a workaround.

> **[2026.7.24]** [v1.5.4](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.4) — Maintenance sweep: the post-answer "generating" stall is gone, IM partners render Markdown tables faithfully, LLM JSON parsing is sturdier, plus quiz, create-KB form, and Math Animator fixes.

> **[2026.7.24]** [v1.5.3](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.3) — Themeable code blocks, four more coding CLIs in My Agents (Gemini, Kimi, opencode, MiMo), an Atlas Cloud LLM provider, and a broad chat, memory, embedding, and parsing reliability sweep.

> **[2026.7.19]** [v1.5.2](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.2) — Configurable chat attachment limits, PageIndex retrieval that reasons across your documents via agentic tool calls, broader Anthropic/OpenAI model support, and steadier Book, Knowledge Base, and chat UI.

> **[2026.7.9]** [v1.5.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.1) — Remove a single failed document from a knowledge base — even one stuck in an **error** state — instead of deleting and rebuilding the whole base.

> **[2026.7.4]** [v1.5.0](https://github.com/HKUDS/DeepTutor/releases/tag/v1.5.0) — LlamaIndex ingestion now honors your **Document Parsing** engine with multimodal image extraction, Partner & Soul ids stay URL-safe for non-Latin names, and optional RAG extras install cleanly on Python 3.14+.

> **[2026.6.30]** [v1.4.15](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.15) — A native **Mattermost** channel for Partners, plus fixes so Guided Learning multiple-choice questions grade correctly and a configured zero chunk overlap is honored.

> **[2026.6.29]** [v1.4.14](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.14) — Click an assigned partner to chat in one step, Deep Research flags partial reports, LightRAG indexes without MinerU, FAISS handles non-ASCII paths, and PocketBase sessions are isolated per user.

> **[2026.6.27]** [v1.4.13](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.13) — Partners support non-Latin names and become assignable to users, logos render after login (#599), tiny knowledge bases retrieve reliably, and containers start cleanly under rootless Podman.

> **[2026.6.24]** [v1.4.12](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.12) — A new **LightRAG Server** retrieval engine, a lightweight **PyMuPDF4LLM** parsing engine, and a FAISS vector backend that makes large knowledge-base retrieval dramatically faster.

> **[2026.6.23]** [v1.4.11](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.11) — Native tool calling on every cloud OpenAI-compatible provider, a redesigned admin Users page, LaTeX in quiz options, an honest session-loading spinner, and configurable container host binding.

> **[2026.6.21]** [v1.4.10](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.10) — A self-service **Profile** page with avatars, a rootless-ready container guide with a single-port request-time proxy, and deny-by-default MCP tools for non-admin users.

> **[2026.6.19]** [v1.4.9](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.9) — Settings polish: Search shows only the fields your provider needs, connection profiles can be renamed and auto-named by provider, and graded Mastery Path questions flow into your Question Bank.

> **[2026.6.18]** [v1.4.8](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.8) — Connect your own **Partners** under **My Agents** and consult them live in chat — answering through their own persona, library and skills — each with its own private memory.

> **[2026.6.18]** [v1.4.7](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.7) — Connect your local **Claude Code / Codex** and consult it live mid-turn, **My Agents** graduates to a top-level `/agents`, and Partner conversations gain branch / resume / delete with a replayable trace.

> **[2026.6.17]** [v1.4.6](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.6) — Four-surface consolidation: a Space learning dashboard with importable **My Agents** and top-level Memory, a **Knowledge Center** with GraphRAG / PageIndex / LightRAG / linked-KB / Obsidian, opened-up Settings, and per-model capability gating.

> **[2026.6.14]** [v1.4.5](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.5) — Guided Learning rebuilt on the chat agent loop with a hard per-type mastery gate and a `/learning` dashboard, a new loop-plugin framework, plus Markdown export / save-to-notebook for Partner conversations.

> **[2026.6.13]** [v1.4.4](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.4) — Install community skills from [ClawHub](https://clawhub.ai/) with `deeptutor skill install` behind a security gate, plus real in-browser DOCX/XLSX previews for knowledge-base files.

> **[2026.6.12]** [v1.4.3](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.3) — TutorBot becomes **Partners** on a production-grade IM pipeline (15 channels, live streaming), Chat moves to a single agent loop, real per-user isolation, and a rebuilt Visualize.

> **[2026.5.28]** [v1.4.2](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.2) — Stability + polish: Gemini 2.5+ unblocked across Visualize and Chat, auth-routing fix (#485), smooth-streaming chat UX, a Recents sidebar, and Lemonade local-provider support.

> **[2026.5.27]** [v1.4.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.1) — Security + stability: TutorBot tool sandbox locked down, per-user resource isolation, multimodal image fallback, an HTTP/SSE API for TutorBots, and a v1.4.0 chat regression fix.

> **[2026.5.22]** [v1.4.0](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.0) — GA cut of v1.4: Auto Mode, three-layer Memory, agentic Deep Research / Solve / Question, LlamaIndex RAG refactor, Visualize/Animator merge, and restart-safe turn runtime.

> **[2026.5.21]** [v1.4.0-beta](https://github.com/HKUDS/DeepTutor/releases/tag/v1.4.0-beta) — Three-layer Memory workbench (L1/L2/L3), every chat capability rebuilt on a single agentic engine, LlamaIndex-only RAG, and a unified Settings + Capabilities surface.

> **[2026.5.10]** [v1.3.10](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.10) — Remote Docker CORS recovery, `DISABLE_SSL_VERIFY` across SDK providers, safer code-block citations, and optional Matrix E2EE add-on.

> **[2026.5.9]** [v1.3.9](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.9) — TutorBot Zulip and NVIDIA NIM support, safer thinking-model routing, `deeptutor start`, sidebar tooltips, and session-store parity.

> **[2026.5.8]** [v1.3.8](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.8) — Optional multi-user deployments with isolated user workspaces, admin grants, auth routes, and scoped runtime access.

> **[2026.5.4]** [v1.3.7](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.7) — Thinking-model/provider fixes, visible Knowledge index history, and safer Co-Writer clear/template editing.

> **[2026.5.3]** [v1.3.6](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.6) — Catalog-based model selection for chat and TutorBot, safer RAG re-indexing, OpenAI Responses token-limit fixes, and Skills editor validation.

> **[2026.5.2]** [v1.3.5](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.5) — Smoother local launch settings, safer RAG queries, cleaner local embedding auth, and Settings dark-mode polish.

> **[2026.5.1]** [v1.3.4](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.4) — Book page chat persistence and rebuild flows, chat-to-book references, stronger language/reasoning handling, RAG document extraction hardening.

> **[2026.4.30]** [v1.3.3](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.3) — NVIDIA NIM + Gemini embedding support, unified Space context for chat history/skills/memory, session snapshots, RAG re-index resilience.

> **[2026.4.29]** [v1.3.2](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.2) — Transparent embedding endpoint URLs, RAG re-index resilience for invalid persisted vectors, memory cleanup for thinking-model output, Deep Solve runtime fix.

> **[2026.4.28]** [v1.3.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.1) — Stability: safer RAG routing & embedding validation, Docker persistence, IME-safe input, Windows/GBK robustness.

> **[2026.4.27]** [v1.3.0](https://github.com/HKUDS/DeepTutor/releases/tag/v1.3.0) — Versioned KB indexes with re-index workflow, rebuilt Knowledge workspace, embedding auto-discovery with new adapters, Space hub.

> **[2026.4.25]** [v1.2.5](https://github.com/HKUDS/DeepTutor/releases/tag/v1.2.5) — Persistent chat attachments with file-preview drawer, attachment-aware capability pipelines, TutorBot Markdown export.

> **[2026.4.25]** [v1.2.4](https://github.com/HKUDS/DeepTutor/releases/tag/v1.2.4) — Text/code/SVG attachments, one-command Setup Tour, Markdown chat export, compact KB management UI.

> **[2026.4.24]** [v1.2.3](https://github.com/HKUDS/DeepTutor/releases/tag/v1.2.3) — Document attachments (PDF/DOCX/XLSX/PPTX), reasoning thinking-block display, Soul template editor, Co-Writer save-to-notebook.

> **[2026.4.22]** [v1.2.2](https://github.com/HKUDS/DeepTutor/releases/tag/v1.2.2) — User-authored Skills system, chat input performance overhaul, TutorBot auto-start, Book Library UI, visualization fullscreen.

> **[2026.4.21]** [v1.2.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.2.1) — Per-stage token limits, Regenerate response across all entry points, RAG & Gemma compatibility fixes.

> **[2026.4.20]** [v1.2.0](https://github.com/HKUDS/DeepTutor/releases/tag/v1.2.0) — Book Engine "living book" compiler, multi-document Co-Writer, interactive HTML visualizations, Question Bank @-mention.

> **[2026.4.18]** [v1.1.2](https://github.com/HKUDS/DeepTutor/releases/tag/v1.1.2) — Schema-driven Channels tab, RAG single-pipeline consolidation, externalized chat prompts.

> **[2026.4.17]** [v1.1.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.1.1) — Universal "Answer now", Co-Writer scroll sync, unified settings panel, streaming Stop button.

> **[2026.4.15]** [v1.1.0](https://github.com/HKUDS/DeepTutor/releases/tag/v1.1.0) — LaTeX block math overhaul, LLM diagnostic probe, Docker + local LLM guidance.

> **[2026.4.14]** [v1.1.0-beta](https://github.com/HKUDS/DeepTutor/releases/tag/v1.1.0-beta) — Bookmarkable sessions, Snow theme, WebSocket heartbeat & auto-reconnect, embedding registry overhaul.

> **[2026.4.13]** [v1.0.3](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.3) — Question Notebook with bookmarks & categories, Mermaid in Visualize, embedding mismatch detection, Qwen/vLLM compatibility, LM Studio & llama.cpp support, and Glass theme.

> **[2026.4.11]** [v1.0.2](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.2) — Search consolidation with SearXNG fallback, provider switch fix, and frontend resource leak fixes.

> **[2026.4.10]** [v1.0.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.1) — Visualize capability (Chart.js/SVG), quiz duplicate prevention, and o4-mini model support.

> **[2026.4.10]** [v1.0.0-beta.4](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.0-beta.4) — Embedding progress tracking with rate-limit retry, cross-platform dependency fixes, and MIME validation fix.

> **[2026.4.8]** [v1.0.0-beta.3](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.0-beta.3) — Native OpenAI/Anthropic SDK (drop litellm), Windows Math Animator support, robust JSON parsing, and full Chinese i18n.

> **[2026.4.7]** [v1.0.0-beta.2](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.0-beta.2) — Hot settings reload, MinerU nested output, WebSocket fix, and Python 3.11+ minimum.

> **[2026.4.4]** [v1.0.0-beta.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.0-beta.1) — Agent-native architecture rewrite (~200k lines): Tools + Capabilities plugin model, CLI & SDK, TutorBot, Co-Writer, Guided Learning, and persistent memory.

> **[2026.1.23]** [v0.6.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.6.0) — Session persistence, incremental document upload, flexible RAG pipeline import, and full Chinese localization.

> **[2026.1.18]** [v0.5.2](https://github.com/HKUDS/DeepTutor/releases/tag/v0.5.2) — Docling support for RAG-Anything, logging system optimization, and bug fixes.

> **[2026.1.15]** [v0.5.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.5.0) — Unified service configuration, RAG pipeline selection per knowledge base, question generation overhaul, and sidebar customization.

> **[2026.1.9]** [v0.4.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.4.0) — Multi-provider LLM & embedding support, new home page, RAG module decoupling, and environment variable refactor.

> **[2026.1.5]** [v0.3.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.3.0) — Unified PromptManager architecture, GitHub Actions CI/CD, and pre-built Docker images on GHCR.

> **[2026.1.2]** [v0.2.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.2.0) — Docker deployment, Next.js 16 & React 19 upgrade, WebSocket security hardening, and critical vulnerability fixes.

</details>

> ✨ **v1.7.1 is live.** `pip install -U "deeptutor[full]"` installs the full Web app and CLI; bare `deeptutor` installs core only. See the upgrade steps below for legacy CLI installations.

### 📰 News

- **2026-10-28** 🚀 [**DeepTutor v1.7.0**](https://github.com/HKUDS/DeepTutor/releases/tag/v1.7.0) is here! A fresh look, smoother navigation, and learning tools that work better together.
- **2026-05-22** 🌐 Official docs site live at [**deeptutor.info**](https://deeptutor.info/) — guides, references, and capability tours in one place.
- **2026-04-10** 📄 Our paper is live on arXiv — read the [preprint](https://arxiv.org/abs/2604.26962) for the design and ideas behind DeepTutor.
- **2026-01-01** 🎊 Happy New Year! Join our [Discord](https://discord.gg/eRsjPgMU4t), [WeChat](https://github.com/HKUDS/DeepTutor/issues/78), or [Discussions](https://github.com/HKUDS/DeepTutor/discussions) — let's shape DeepTutor together.
- **2025-12-29** 🎓 DeepTutor is officially released!

## ✨ Key Features

DeepTutor is an agent-native learning workspace that connects tutoring, research, creation, and practice in one extensible system.

- **One runtime, many learning modes** — Chat, Quiz, Research, Visualize, Solve, Mastery Path, Reading, and more share session context while retaining purpose-built workflows.
- **A connected learning workspace** — Home, Learning, and Resources connect Chat, Books, Reading, Practice, Task Board, Calendar, and Learning notebook with shared materials, progress, and learning context.
- **Grounded knowledge and reading** — Build versioned libraries with LlamaIndex, PageIndex, GraphRAG, or LightRAG, connect external knowledge sources, and learn beside documents, video, and audio with source-linked citations.
- **Partners and subagents** — Consult live agents such as Claude Code, Codex, and Grok CLI, import past conversations, or run persistent Partners with their own memory, resources, and IM channels.
- **Inspectable memory** — L1 traces, L2 facts, and L3 synthesis make personalization visible and editable, with evidence links you can audit in the Memory Graph.
- **Extensible by design** — Add personas, built-in or community skills, MCP services, CLI apps, and generation models through one agent-native runtime.

---

## 🚀 Get Started

Choose the installation path that fits how you want to use DeepTutor. Terminal-based installs share one runtime home: private settings live in `data/user/settings/` under the launch directory, or under `DEEPTUTOR_HOME` / `deeptutor start --home` when set explicitly. After starting the app, configure a provider and model in **Settings → Providers** and **Language models**.

<details>
<summary><b>Desktop — macOS and Windows (Preview)</b></summary>

**Open DeepTutor** bundles Python, Node.js, and the full learning workspace, so no terminal or separate runtime installation is needed. Desktop previews are available on `dev`; the **v1.7.0 Release does not include desktop installers**.

Open a successful [Desktop Release workflow run](https://github.com/HKUDS/DeepTutor/actions/workflows/desktop-release.yml?query=branch%3Adev), scroll to **Artifacts**, and download the matching target. GitHub sign-in is required, and artifacts expire after seven days.

| Your computer | Download target | Installer |
| --- | --- | --- |
| **Mac with Apple Silicon** | `macos-arm64` | Open the DMG and drag **Open DeepTutor** into **Applications**. |
| **Mac with Intel** | `macos-x64` | Open the DMG and drag **Open DeepTutor** into **Applications**. |
| **Windows x64** | `windows-x64` | Run the Setup `.exe`, or extract the portable ZIP and launch `Open DeepTutor.exe`. |

Windows preview builds are unsigned and may show a SmartScreen warning. See the [desktop guide](https://github.com/HKUDS/DeepTutor/blob/main/apps/desktop/README.md) for signing, local data, and source builds.

</details>

<details>
<summary><b>Docker — Fastest Full-App Trial</b></summary>

Run the full Web app without installing Python or Node.js:

```bash
docker run --rm --name deeptutor \
  -p 127.0.0.1:3782:3782 \
  -v deeptutor-data:/app/data \
  ghcr.io/hkuds/deeptutor:latest
```

Open [http://127.0.0.1:3782](http://127.0.0.1:3782). The named volume preserves settings and local data; only port `3782` is required for the Web app. See the [Docker guide](https://docs.deeptutor.info/get-started/docker/) for host workspaces, local model services, reverse proxies, and production deployment.

</details>

<details>
<summary><b>PyPI — Full Web App and CLI</b></summary>

Use **Python 3.11–3.14** and **Node.js 20.9+**. In the modular 1.7.0 release, `deeptutor[full]` installs the Web app and CLI; bare `deeptutor` installs core chat and the SDK.

```bash
mkdir -p my-deeptutor && cd my-deeptutor
python -m pip install -U "deeptutor[full]"
deeptutor init     # ports + LLM provider + optional embedding/search
deeptutor start    # starts backend + frontend
```

Open the URL printed in the terminal, by default [http://127.0.0.1:3782](http://127.0.0.1:3782). Press `Ctrl+C` to stop both services.

**Upgrading from 1.6.15 or earlier:** stop DeepTutor, back up the runtime home, and uninstall a legacy `deeptutor-cli` package before installing the new family. Keep the same `DEEPTUTOR_HOME`, then run `python -m pip check` and `deeptutor module list`. See the [PyPI and migration guide](https://docs.deeptutor.info/get-started/pypi/) for the exact upgrade commands.

</details>

<details>
<summary><b>Source — Current Dev and Contributors</b></summary>

Use **Python 3.11–3.14** and **Node.js 22 LTS** to match CI and Docker.

```bash
git clone --branch dev https://github.com/HKUDS/DeepTutor.git
cd DeepTutor
python3 -m venv .venv && source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements/full.txt
python -m pip install -e . --no-deps
( cd web && npm ci --legacy-peer-deps )
deeptutor init
deeptutor start --dev
```

Use `deeptutor start` without `--dev` for a production build. Optional dependencies are installed from the repository root, for example `python scripts/install_extras.py dev,partners,math-animator`. See the [source installation guide](https://docs.deeptutor.info/get-started/from-source/) for Conda, extras, and troubleshooting, or the [Agent Setup guide](https://github.com/HKUDS/DeepTutor/blob/main/docs-for-dev/AGENT_SETUP.md) to let a terminal-capable agent perform and verify the setup.

</details>

<details>
<summary><b>CLI — Terminal and Agent Use</b></summary>

For a minimal terminal installation, use the core wheel; no Node.js or Web frontend is required:

```bash
mkdir -p my-deeptutor && cd my-deeptutor
python -m pip install -U deeptutor
deeptutor init --cli
deeptutor chat
```

Core includes Chat, Ask Questions, the CLI, and the SDK; other capabilities and management commands require their matching feature modules. For the current `dev` source installation and optional dependencies, see the [CLI-only guide](https://docs.deeptutor.info/get-started/cli-only/). The [CLI reference](#%EF%B8%8F-deeptutor-cli--agent-native-interface) below covers one-shot runs and machine-readable output.

</details>

**Workspaces and advanced setup:** see [Content Workspaces](https://github.com/HKUDS/DeepTutor/blob/main/docs-for-dev/workspaces.md), [Local Data Persistence](https://github.com/HKUDS/DeepTutor/blob/main/docs-for-dev/DATA_STORAGE.md), [Containerization and Sandbox Deployment](https://github.com/HKUDS/DeepTutor/blob/main/docs-for-dev/CONTAINERIZATION.md), [Configuration Reference](https://docs.deeptutor.info/get-started/pypi/#config-files-under-datausersettings), and [Troubleshooting](https://docs.deeptutor.info/get-started/troubleshooting/).

## 📖 Explore DeepTutor

Start with a **workspace** for each subject or project. Home, Learning, and Resources change with the active workspace; Partners and Personalization remain available across workspaces.

| Area | Scope | What it contains |
| --- | --- | --- |
| **Home** | Workspace | Chat, Task Board, Calendar, and Learning notebook |
| **Learning** | Workspace | Books, Mastery Path, Immersive Reading, and Practice |
| **Resources** | Workspace | Chat History, Favorites, Learning journal, Question Bank, and Knowledge Center |
| **Partners** | Account | Persistent companions, Partner Groups, resource access, and IM channels |
| **Personalization** | Account | My Agents, Personas, Skills, MCP Services, CLI Apps, Memory, and Settings |

<details>
<summary><b>🏗️ System architecture</b></summary>

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/system/system-architecture.svg" alt="DeepTutor system architecture" width="900">
</div>

</details>

<details>
<summary><b>🏠 Home — Conversations, Tasks, Notes, and Calendar</b></summary>

Home is where daily work begins: talk to the tutor, organize next actions, and develop your own notes in the current workspace. Calendar provides an account-wide view while retaining the source workspace for study events.

<details>
<summary><b>💬 Chat — The Agent Loop You Actually Use</b></summary>

Chat is the default capability and where most work begins. A single thread can talk normally, call tools, ground itself in selected knowledge bases, read attachments, generate images, consult subagents, write notebook records, and continue with the same context across turns.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/chat.png" alt="DeepTutor chat workspace" width="900">
</div>

The tutor calls tools as needed and can pause to ask clarifying questions. **Customize page**, at the upper right, chooses the visible modes and Skills, MCP, Partners, Preferences, and voice-input controls. Under **Starting prompts**, add, edit, or remove the titles and prompts in Explain, Solve, Practice, Plan, and Research. Save applies your account preferences; Cancel discards edits, and Restore defaults brings back the original choices.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/system/chat-agent-loop.svg" alt="DeepTutor chat agent loop" width="900">
</div>

User-toggleable tools are `brainstorm`, `web_search`, `paper_search`, `zotero_search`, `reason`, and `geogebra_analysis` — plus `imagegen` and `videogen` once you configure the matching generation model. Contextual tools such as `rag`, `kb_files`, `knowledge_frontier`, `read_source`, `read_memory`, `write_memory`, `read_skill`, `load_tools`, `exec`, `web_fetch`, `ask_user`, `list_favorites`, `save_favorite`, `write_note`, `search_notes`, `question_bank`, `github`, `consult_subagent`, `workspace_list`, `workspace_read`, `workspace_search`, `workspace_present`, and `workspace_export` mount automatically when the turn has the right context.

Context comes in two kinds: **sticky session context** (capability, workspace or course, tools, knowledge bases, persona, model, and Reading / Mastery state) persists across turns; **references** (files, chat history, books, reading sections, notebooks, selected question-bank entries, imported agents) come from the `+` menu for one turn by default, or every turn when pinned. The voice button only transcribes the current message.

With the full profile, Home keeps **Chat**, **Ask Questions**, **Quiz**, **Visualize**, and **Video Lesson** one click away; **Research** for cited reports and **Solve** for worked reasoning sit under *More Capabilities*. Select text in an answer to open **Little Tutor**, a focused sidebar thread that stays nested under the source conversation. With at least three sent messages, the left gutter shows a tick for each question when space allows; hover to preview, click to jump back, or use **Alt/Option + ↑/↓** to move between questions.

</details>

<details>
<summary><b>✅ Task Board & Calendar — Organize Daily Learning</b></summary>

**Task Board** tracks study tasks in To do, In progress, and Done, with notes, drag-and-drop or keyboard-accessible move controls, and a restorable archive. Tasks stay in the current workspace and require no model configuration.

**Calendar** keeps personal study sessions, repeating events, and reminders together, with `.ics` export for Apple Calendar, Google Calendar, Outlook, and Thunderbird. Workspace overlays such as task due dates and reviews remain connected to their source workspace.

</details>

<details>
<summary><b>✍️ Learning Notebook — Pages, Sources, and Dito</b></summary>

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/co-writer.png" alt="Learning notebook pages" width="900">
</div>

The Learning notebook, formerly Co-Writer, organizes your own writing into pages, subpages, and blocks within the active workspace. Import Word documents, arrange a page tree, and insert original records from Favorites as evidence. Pages keep their save status visible and export as Markdown or Word; interactive content becomes static in Word.

**Export flashcards to Anki.** Notebook pages can include Flash Cards. On a page that has them, open the page menu and choose **Export flashcards (Anki)**. From the notebook review queue, choose **Export all for Anki**. In Anki, use **File → Import** and select the downloaded `.txt` file. Cards land in a deck named `DeepTutor::<note title>` with front/back fields, tags, and math preserved. Re-importing the same file updates existing cards instead of duplicating them. DeepTutor's own review schedule is not included.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/notebook-detail.png" alt="Learning notebook block editor and Dito" width="900">
</div>

Discuss a passage or block with **Dito**: ask for an explanation, example, rewrite, or practice question. Conversations remain attached to the relevant page and line. Review proposed changes before accepting them, or insert an answer below the line and keep working. Favorites preserve source records; the notebook is where you build your own understanding.

</details>

</details>

<details>
<summary><b>🎓 Learning — Books, Paths, Reading, and Practice</b></summary>

Learning is the current workspace's study area. Create an activity from **Learning → New learning**, then reopen it from **All learning** with its progress, conversations, and source context intact.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/learning.png" alt="Learning activities in the current workspace" width="900">
</div>

| Activity | Use it for | What you keep |
| --- | --- | --- |
| **Book** | Build a structured, interactive book from selected sources | Editable chapters, typed blocks, reading progress, and Page Chat |
| **Mastery Path** | Break a learning goal into topics and guided study | A knowledge-point map, topic conversations, and mastery evidence |
| **Immersive Reading** | Work beside a document, web page, video, or audio source | Source-linked conversations, verified citations, highlights, notes, and progress |
| **Practice** | Review collected or imported questions | Answers, mistakes, recall ratings, and the next review date |

<details>
<summary><b>📖 Book — Living Books from Your Materials</b></summary>

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/books.png" alt="DeepTutor book library" width="900">
</div>

Book turns selected sources into an interactive **living book** — not a static PDF, but a reading environment built from typed blocks. A book can start from knowledge bases, Favorites, question banks, or chat history; the creation flow proposes a chapter outline before content is generated, so you review the shape instead of accepting a blind one-shot output.

<p align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/book-quiz.png" alt="Book quiz block" width="31%">
&nbsp;
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/book-detail.png" alt="Book outline and chapters" width="31%">
&nbsp;
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/book-widget.png" alt="Book interactive widget block" width="31%">
</p>

Each chapter compiles into editable typed blocks — text, callouts, quizzes, flash cards, timelines, code, figures, interactive HTML, animations, concept graphs, deep dives, and user notes — with its own Page Chat. Insert, move, regenerate, rewrite, or switch a block type; selected passages enter a reviewable learning-capture inbox. Progress, bookmarks, quiz attempts, captures, and Page Chat stay private per reader even when an admin book is shared read-only or for collaborative editing; shared deletion stays admin-only. Any book exports to Markdown, long compiles pause and resume, `deeptutor book health` flags source drift, and `deeptutor book refresh-fingerprints` refreshes the source baseline.

</details>

</details>

<details>
<summary><b>🗂️ Resources — Materials and Saved Learning Records</b></summary>

Resources is the current workspace's reusable library. Keep original material, saved results, and learning records here so they can be attached to new conversations and activities without mixing projects.

<details>
<summary><b>📚 Knowledge Center — Multi-Engine RAG Libraries</b></summary>

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/knowledge.png" alt="DeepTutor Knowledge Center" width="900">
</div>

Knowledge bases are the document collections behind RAG — they ground Chat turns, Learning notebook edits, Book generation, and Partner conversations. What's distinctive is a **choice of retrieval engines**: **LlamaIndex** (the default, hybrid vector + BM25 with optional cross-encoder reranking and exact-flat or HNSW FAISS indexes), **PageIndex** (reasoning retrieval with page-level citations, hosted or self-hosted OSS), **GraphRAG** and **LightRAG** (knowledge-graph retrieval), **LightRAG Server** (retrieval offloaded to an external LightRAG instance you connect over HTTP), **WeKnora** (retrieval from a knowledge base in your self-hosted deployment, without a local index or document copy), **Tencent IMA** (a library you curate in IMA — searched, browsed, and written back to over its OpenAPI), **MarginNote 4** (your MN4 study data — documents, excerpts, mind-map cards and the links between them — pushed in by the app's Add-on and navigated with dedicated tools), **Kiwix** (a searchable ZIM archive served over HTTP without local indexing), or a linked **Obsidian** vault the tutor reads and writes in place. Each KB is bound to one engine.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/knowledge-create.png" alt="Create a knowledge base" width="900">
</div>

Migrating an existing Obsidian, Hermes, or Markdown library? See [Knowledge migration guide](https://github.com/HKUDS/DeepTutor/blob/main/docs-for-dev/KNOWLEDGE_MIGRATION.md) for connected-vault and indexed-copy paths.

Creating a KB, you can **create new** (upload and index documents), **link existing** (reuse an index in place), or **connect Kiwix** (search one served ZIM archive on demand). Choose its storage workspace at creation; an existing KB can move between workspaces after a preview, keeping assignments and saved references. A KB can also track **GitHub repositories** (repo, branch, glob) or **documentation-site URLs** (bounded crawl depth and page count, re-synced every 24 h by default); sync hash-diffs added, changed, and removed content so followed documentation stays current without re-uploading, and **linked folders** pick up new or changed local files on sync. Re-indexing writes a new flat `version-N` directory and keeps prior ones, so a working index is never destroyed mid-rebuild. A single document can be removed even from an **error**-state base — dropping a file that failed to parse without a full delete-and-rebuild. Document parsing — Text-only, MinerU, Docling, Tika, markitdown, PyMuPDF4LLM, or LiteParse — and an optional image-description model are chosen in **Settings → Knowledge & documents**, with local model downloads off by default. Docling can also run in **remote** mode against a Docling Serve server (no local install or models needed), configured on that page (`mode=remote`, a server base URL, and an optional API key) or the `DOCLING_MODE` / `DOCLING_API_BASE_URL` / `DOCLING_API_TOKEN` environment variables. Tika is remote-only and points at the Apache Tika server configured on that page. The CLI mirrors the lifecycle with `list/info/create/connect-kiwix/add/search/eval/eval-diff/set-default/delete`, source add/remove commands, `list-sources`, and `sync`.

The built-in LightRAG engine is installed with `pip install 'deeptutor[rag-lightrag]'`. That extra contains the supported LightRAG SDK but does not install MinerU. Choose MinerU independently in Document Parsing and either configure its cloud mode or install its current local CLI when structured parsing is wanted. MinerU accepts PDF, common raster images, DOCX, PPTX, and XLSX; the legacy `magic-pdf` command remains PDF-only. Text-only and the other parsing engines do not require MinerU.

Native LightRAG queries and incremental indexing require the embedding configuration recorded by the published index, including the model, dimension, and endpoint identity. If it changes, restore the original configuration or rebuild with the current embedding; indexes without a recorded embedding identity require a rebuild. The knowledge-base detail and index-version views show recovery guidance, while files remain available for viewing and download.

**Scoring a knowledge base.** With several engines available, "which one retrieves best here?" is an empirical question — so `deeptutor kb eval` answers it. Write a QA set (one JSON object per line: a `query` plus the `gold` passages an ideal retrieval should return), then score the KB with `deeptutor kb eval <name> --dataset qa.jsonl --top-k 5 [--mode hybrid] [--save baseline.json]`. Each case is retrieved through the same path a chat turn uses, its ranked citations are matched against the gold passages using exact text or lexical overlap (thresholds are tunable with `--min-ratio`; semantic equivalence is not assessed), and the run reports **Recall@k / Precision@k / nDCG@k / MRR / MAP / Hit@k**. Metrics are pure functions over the ranking; no model judges the output. Compare saved reports with `deeptutor kb eval-diff baseline.json candidate.json` for per-metric and per-case changes. Use `--rewrite off` or `--rewrite standalone` on `kb eval` to compare original and rewritten queries; reports retain rewrite provenance. Cases whose search failed (a missing index, bad credentials) carry no score and are reported separately rather than dragging the means down. PageIndex uses reasoning as retrieval and returns no ranked chunks, so it is excluded.

```jsonl
{"query": "Why do transformers scale attention?", "gold": ["Scaling keeps the dot products from growing with the dimension."]}
```

</details>

<details>
<summary><b>🗃️ History, Favorites, Journal, and Question Bank</b></summary>

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/resources.png" alt="Resources in the active workspace" width="900">
</div>

**Chat History** reopens conversations with their original learning context. **Favorites** preserves useful original conversations and results in movable collections with Markdown export, ready to insert into a Learning notebook. The **Learning journal** records the current mission, session handoff, and confirmed learning records. The **Question Bank** organizes questions, answers, explanations, and mistakes; select a set for **Learning → Practice** to review weak areas and schedule repetition.

</details>

</details>

<details>
<summary><b>🤝 Partners — Persistent Companions Across Workspaces</b></summary>

Partners belong to the account rather than one subject workspace. Each companion keeps its own identity, instructions, model policy, relationships, and channels while using either a private library or an existing workspace's resources.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/partners.png" alt="DeepTutor partners workspace" width="900">
</div>

<details>
<summary><b>Identity, Workspace Resources, Groups, and Channels</b></summary>

Every inbound Web or IM message becomes a normal `ChatOrchestrator` turn — a Partner is "a chat that has a personality and a phone number." Its `SOUL.md`, model selection, tool policy, and library remain editable after creation. A private Partner workspace copies assigned knowledge bases, skills, and Favorites collections; a bound workspace shares its current files and resources instead. Soul, conversations, and relationship memory stay separate in either mode.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/system/partners-architecture.png" alt="DeepTutor partners architecture" width="900">
</div>

**Partner Groups** bring two or more Partners into one shared conversation with distinct seats, selectable discussion and shared-memory modes, and durable history. Authenticated users keep private Partner sessions and relationship memory even when a companion is shared.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/partners-channels.png" alt="Per-partner IM channel configuration" width="900">
</div>

Schema-driven channels connect companions to Feishu, Telegram, Slack, Discord, DingTalk, QQ/NapCat, WeCom, WhatsApp, Zulip, Mattermost, Matrix, Mochat, and Microsoft Teams, depending on installed extras and credentials. Browser-based setup supports QR onboarding for selected channels. A Partner can also be connected through **Personalization → My Agents** and consulted from a normal Chat turn.

</details>

</details>

<details>
<summary><b>🧭 Personalization — Reusable Behavior and Connections</b></summary>

Personalization follows the account across workspaces. Choose how the tutor should behave and which agents, skills, services, applications, and memories it may reuse; workspace and conversation selections can narrow that access further.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/personalization.png" alt="Account personalization: agents, personas, skills, and connections" width="900">
</div>

<details>
<summary><b>🧑‍🚀 My Agents — Consult Live Agents and Import History</b></summary>

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/agents.png" alt="DeepTutor My Agents workspace" width="900">
</div>

**Connect a live agent** — Claude Code, Codex, Grok CLI, Antigravity, Kimi, opencode, MiMo Code, Hermes Agent, OpenClaw, DeepSeek Harness, or a Partner — and consult it from a Chat turn. DeepTutor runs the selected agent and streams its work into the Activity panel through `consult_subagent`; the Agent chip or `@` keeps the connection attached to the session. Local harnesses use their own authentication, working directory, and session storage.

**Import past conversations** from ChatGPT, Claude Code, and Codex as searchable, resumable references. ChatGPT uses an official `conversations.json` export; Claude history is selected by project or working directory, and Codex history by date. Reference an imported conversation through `+` → My Agents without turning it into DeepTutor's own voice.

</details>

<details>
<summary><b>🎭 Personas, Skills, MCP Services, and CLI Apps</b></summary>

**Personas** reuse a voice, teaching style, or response policy and can also seed a Partner's soul. **Skills** package repeatable workflows as `SKILL.md` playbooks, with account-shared and workspace-local libraries. **Import from EduHub** browses community skills and installs them through a security gate (see [Ecosystem](#-ecosystem--eduhub--the-skills-community)).

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/skills.png" alt="Personalization skill library" width="900">
</div>

**MCP Services** authorize external tools, while **CLI Apps** expose installed programs from the [CLI-Anything](https://github.com/HKUDS/CLI-Anything) catalog through the execution sandbox. Workspace assignments and user grants determine which resources each turn may use.

</details>

<details>
<summary><b>🧠 Memory — Inspectable Personalization</b></summary>

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/memory.png" alt="DeepTutor memory overview" width="900">
</div>

Memory is a file-backed, three-layer system you can read, curate, and audit — deliberately *not* a hidden vector store. **L1** is the workspace mirror plus an append-only event trace (`trace/<surface>/<date>.jsonl`); **L2** is per-surface curated facts (`L2/<surface>.md`) with references to L1 entities; **L3** is cross-surface synthesis (`L3/<profile|recent|scope|preferences>.md`) that records its contributing L2 surfaces.

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/memory-graph.png" alt="DeepTutor memory graph" width="900">
</div>

The Memory Graph shows the whole pyramid — L3 synthesis at the centre, L2 in the middle ring, L1 traces on the outside — with exact L2 → L1 evidence edges and L3 → contributing-surface links. Memory is tracked across `chat`, `notebook`, `quiz`, `kb`, `book`, partner, and `cowriter` surfaces; the consolidator's Update / Audit / Dedup budgets are tuned in **Settings → Memory**.

</details>

<details>
<summary><b>⚙️ Settings — One Control Plane</b></summary>

<div align="center">
<img src="https://raw.githubusercontent.com/HKUDS/DeepTutor/main/assets/figs/web-dev/settings.png" alt="Settings navigator" width="900">
</div>

Settings is the operational control plane, opening on **General** for interface and model output language. Its searchable navigator links to independent pages: **Personal** covers Workspaces, Data migration, Appearance, and Usage statistics; **Learning & conversation** covers starting points, attachments, Video Learning, learner and guardian controls, Learning progress, and Memory; **Models & services** covers Providers, Language models, Task models, Embedding, Search, Voice, and Multimodal generation; **Features & integrations** covers tools, capability parameters, Partners & agents, and Knowledge & documents. **System** holds Network, Runtime status, and About; **Archived chats** lets you search, restore, or permanently delete archived conversations. Runtime status contains backend health, resident memory, and the **Readiness** matrix grading capability blockers, warnings, and suggestions. Workspaces keeps topic files and learning state separate, with verified migration and export under Data migration. A **provider** holds a vendor's address and credential for reuse by its service models; the model pages choose saved providers and configure model names and capabilities. **Task models** pin a small, fast model for automatic work — from naming conversations and writing starting points to Math Animator and Video Lesson repairs — and resolve to the active default when empty. Voice groups speech synthesis and transcription; Multimodal generation groups image and video models. Partners & agents configures local harnesses and a remote Hermes gateway.

**Vietnamese:** In **Settings → General**, choose **Tiếng Việt** for **Interface language** and select **Apply changes**. **Model output language** is independent: choose **Tiếng Việt** there for Vietnamese replies, or keep another reply language while using the Vietnamese interface. Reply quality depends on the selected model's Vietnamese support.

**Xiaomi MiMo speech.** Add a Xiaomi MiMo provider with `https://api.xiaomimimo.com/v1` and its API key, then add `mimo-v2.5-tts` under Settings → Voice. Choose a preset such as `mimo_default`, `冰糖`, or `苏打`, use `wav` or `pcm16` output, and audition it before applying. Voice instructions control style and speaking speed. This adapter supports preset speech only; voice design and voice cloning require separate models and are not supported. If an older MiMo speech model was configured through the generic OpenAI-compatible adapter, recreate its speech entry using the Xiaomi MiMo provider so it uses the chat-completions protocol. See the [official MiMo speech guide](https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/audio/speech-synthesis-v2.5).

*(README truncated for display. [Read the full README on GitHub](https://github.com/HKUDS/DeepTutor)).*
