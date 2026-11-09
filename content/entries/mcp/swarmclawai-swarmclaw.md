---
slug: swarmclawai-swarmclaw
name: swarmclaw
tagline: Open-source self-hosted AI agent runtime and multi-agent framework for
  autonomous agent swarms. Agent memory, MCP tools, schedules, delegation, and
  23
summary: The self-hosted AI agent runtime and multi-agent framework for
  autonomous agents. Open-source agent swarms with durable agent memory, MCP
  tools, skills, delegation, schedules, and 23+ LLM providers — a practical
  Claud...
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-memory
  - agent-runtime
  - agent-swarm
status: slowing
quality_percentile: 10
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: swarmclawai/swarmclaw
  official_vendor: false
  license: MIT
signals:
  stars: 705
  last_commit: 2026-06-30T20:58:13Z
  stars_delta_7d: 1
  stars_growth_pct: 0.1
  trending_score: 1
  rank_current: 108
  rank_delta: -19
  velocity_source: snapshot_delta
  sparkline_4w:
    - 692
    - 697
    - 704
    - 705
language: en
needs_keys: false
prerequisites:
  - Node.js >= 18
readme_source:
  repo: swarmclawai/swarmclaw
  path: README.md
  branch: main
  fetched_at: 2026-11-09T09:28:34.212Z
  truncated: true
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@swarmclawai/swarmclaw"
  env_vars: []
  confidence: manifest
---

# SwarmClaw
<p align="center">
  <img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/public/branding/swarmclaw-org-avatar.png" alt="SwarmClaw lobster logo" width="120" />
</p>

<p align="center"><strong>The self-hosted AI agent runtime and multi-agent framework for autonomous agents.</strong> Open-source agent swarms with durable agent memory, MCP tools, skills, delegation, schedules, and 23+ LLM providers — a practical Claude Code and LangChain alternative.</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/screenshots/org-chart.png" alt="SwarmClaw org chart with delegation and live agent activity" width="900" />
</p>

SwarmClaw is an open-source, self-hosted AI agent runtime and multi-agent framework. Run autonomous AI agents, agent swarms, and orchestrators with heartbeats, schedules, delegation, agent memory, runtime skills, and reviewed conversation-to-skill learning — across OpenClaw gateways, Claude, GPT, Gemini, OpenRouter, Ollama, and 23+ other providers. Use it as your AI agent dashboard, agent orchestration platform, and home base for self-hosted multi-agent AI workflows.

GitHub: https://github.com/swarmclawai/swarmclaw  
Docs: https://swarmclaw.ai/docs  
Website: https://swarmclaw.ai  
Discord: https://discord.gg/sbEavS8cPV  
Extension tutorial: https://swarmclaw.ai/docs/extension-tutorial

## Screenshots

<table>
 <tr>
  <td width="50%"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/screenshots/org-chart.png" alt="SwarmClaw org chart view showing CEO, Developer, and Researcher agents." /></td>
  <td width="50%"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/screenshots/agent-chat.png" alt="SwarmClaw agent chat view showing a CEO conversation." /></td>
 </tr>
 <tr>
  <td align="center"><sub>Org chart for visualizing agent teams, delegation, and live activity.</sub></td>
  <td align="center"><sub>Agent chat with durable history, tools, and operator controls.</sub></td>
 </tr>
</table>

<div align="center">
<table>
 <tr>
  <td align="center"><strong>Works<br>with</strong></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/openclaw.svg" width="32" alt="OpenClaw"><br><sub>OpenClaw</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/public/provider-logos/hermes-agent.png" width="32" alt="Hermes Agent"><br><sub>Hermes</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/claude-code.svg" width="32" alt="Claude Code"><br><sub>Claude Code</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/codex.svg" width="32" alt="Codex"><br><sub>Codex</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/gemini-cli.svg" width="32" alt="Gemini CLI"><br><sub>Gemini CLI</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/opencode.svg" width="32" alt="OpenCode"><br><sub>OpenCode</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/copilot-cli.svg" width="32" alt="Copilot CLI"><br><sub>Copilot</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/public/provider-logos/droid-cli.svg" width="32" alt="Factory Droid CLI"><br><sub>Droid</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/cursor-cli.svg" width="32" alt="Cursor Agent CLI"><br><sub>Cursor</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/qwen-code-cli.svg" width="32" alt="Qwen Code CLI"><br><sub>Qwen Code</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/goose.svg" width="32" alt="Goose"><br><sub>Goose</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/anthropic.svg" width="32" alt="Anthropic"><br><sub>Anthropic</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/openai.svg" width="32" alt="OpenAI"><br><sub>OpenAI</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/public/provider-logos/openrouter.png" width="32" alt="OpenRouter"><br><sub>OpenRouter</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/google.svg" width="32" alt="Google Gemini"><br><sub>Gemini</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/ollama.svg" width="32" alt="Ollama"><br><sub>Ollama</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/deepseek.svg" width="32" alt="DeepSeek"><br><sub>DeepSeek</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/groq.svg" width="32" alt="Groq"><br><sub>Groq</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/together.svg" width="32" alt="Together AI"><br><sub>Together</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/mistral.svg" width="32" alt="Mistral AI"><br><sub>Mistral</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/xai.svg" width="32" alt="xAI"><br><sub>xAI</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/fireworks.svg" width="32" alt="Fireworks AI"><br><sub>Fireworks</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/nebius.svg" width="32" alt="Nebius"><br><sub>Nebius</sub></td>
  <td align="center"><img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/doc/assets/logos/deepinfra.svg" width="32" alt="DeepInfra"><br><sub>DeepInfra</sub></td>
 </tr>
</table>
</div>

## Requirements

- Node.js 22.6+ (`nvm use` will pick up the repo's `.nvmrc`, which matches CI)
- npm 10+ or another supported package manager
- Docker Desktop is recommended for sandbox browser execution
- Optional provider CLIs if you want delegated CLI backends such as Claude Code, Codex, OpenCode, Gemini, Copilot, Factory Droid, Cursor Agent, Qwen Code, or Goose

## Quick Start

### Desktop app (recommended for non-technical users)

Download the one-click installer from [swarmclaw.ai/downloads](https://swarmclaw.ai/downloads).
Available for macOS (Apple Silicon & Intel), Windows, and Linux (AppImage + .deb).

The release workflow supports Developer ID signing and notarization when Apple
credentials are configured. If a macOS build is still ad-hoc signed, first
launch may need one manual approval:
- **macOS:** signed/notarized releases publish both `.dmg` and `.zip`; unsigned fallback releases publish `.zip` only to avoid the damaged unsigned DMG path. Right-click the app in Finder → **Open** → **Open** to bypass Gatekeeper. If macOS instead reports *"SwarmClaw is damaged and can't be opened"* (common when a downloaded app was quarantined by Safari), strip the quarantine attribute and relaunch:
  ```bash
  xattr -dr com.apple.quarantine /Applications/SwarmClaw.app
  ```
- **Windows:** if SmartScreen appears, click **More info** → **Run anyway**.
- **Linux (AppImage):** `chmod +x` the downloaded file, then run it.

Data lives in your OS app-data directory (`~/Library/Application Support/SwarmClaw`,
`%APPDATA%\SwarmClaw`, or `~/.config/SwarmClaw`), separate from any CLI or Docker install.

### Global install

```bash
npm i -g @swarmclawai/swarmclaw
swarmclaw
```

```bash
yarn global add @swarmclawai/swarmclaw
swarmclaw
```

```bash
pnpm add -g @swarmclawai/swarmclaw
swarmclaw
```

```bash
bun add -g @swarmclawai/swarmclaw
swarmclaw
```

Running `swarmclaw` starts the server on `http://localhost:3456`.

### From the repo

```bash
git clone https://github.com/swarmclawai/swarmclaw.git
cd swarmclaw
nvm use
npm run quickstart
```

`npm run quickstart` installs dependencies, prepares local config and runtime state, and starts SwarmClaw.

### Docker

```bash
git clone https://github.com/swarmclawai/swarmclaw.git
cd swarmclaw
mkdir -p data
touch .env.local
docker compose up -d --build
```

Then open `http://localhost:3456`.

## ClawHub Skill

Install the SwarmClaw skill for your [OpenClaw](https://openclaw.ai) agents:

```bash
openclaw skills install swarmclaw
```

[Browse on ClawHub](https://clawhub.ai/waydelyle/swarmclaw)

## v1.9.39 Highlights

Scheduled-run reliability release: stale workspace rebinding, fail-fast credential checks, and durable delivery evidence for schedule-driven sends.

- **Legacy workspace cwd migration.** Scheduled reruns and reused schedule sessions pinned to a pre-migration workspace root (e.g. `~/.swarmclaw/workspace`) are now rebound to the current `WORKSPACE_DIR` automatically; intentional custom working directories are never touched.
- **Orphan recovery dedup.** Startup queue recovery now recovers each orphaned task once instead of re-logging it every tick, and dead-letters tasks that repeatedly return to the queue without starting.
- **Schedule delivery status.** Every scheduled run now writes `lastDeliveryStatus`/`lastDeliveryError` back to its schedule, so failures are visible without digging through task records.
- **Credential preflight for schedules.** Scheduled runs on API-key providers fail fast with an actionable error when no credential resolves, instead of dying on a 401 deep in execution.
- **Empty-run classification.** Runs that produce no text, no tool calls, and no error now fail with a clear provider-configuration message instead of a generic validation failure.
- **Durable connector delivery evidence.** Task follow-up sends route through the connector outbox with task/schedule linkage, retries with backoff, and per-run dedupe, so triage can prove whether a scheduled send succeeded, failed, or was never attempted.
- **Regression coverage.** Added tests for workspace path normalization, orphan recovery, schedule outcome writes, credential preflight, empty-run classification, and outbox-backed follow-ups.

## v1.9.38 Highlights

PR integration release for provider catalog coverage, OpenRouter context meters, and safer unsigned macOS desktop artifacts.

- **TokenMix provider.** Added TokenMix as a built-in OpenAI-compatible provider with setup metadata, starter-agent defaults, and provider health checks.
- **OpenRouter context meters.** Chat context status now uses cached OpenRouter model metadata when available so routed model context windows display accurately.
- **macOS unsigned artifact fallback.** Desktop releases publish zip-only macOS artifacts when signing/notarization inputs are missing, avoiding the unsigned DMG damaged-app path.
- **Regression coverage.** Added targeted tests for TokenMix setup, OpenRouter context metadata caching, and macOS target selection.

## v1.9.37 Highlights

Theme and memory-pressure release for lighter UI preferences and leaner chat history storage.

- **Light, dark, and system theme modes.** Settings → Appearance now persists a Light/Dark/System selector while keeping the existing hue presets and custom color picker.
- **Lean session history storage.** Legacy transcript blobs migrate into the `session_messages` table and are compacted from session records after persistence is verified, reducing page-load memory pressure on lower-RAM devices.
- **Repo-backed message readers.** Global search, live usage summaries, and OpenClaw history merge now read table-backed messages after transcript compaction.
- **Regression coverage.** Added tests for theme-mode normalization, legacy transcript compaction, and repo-backed message search.

## v1.9.36 Highlights

Protocol builder visibility release for built-in Structured Sessions.

- **Built-in flow inspector.** Built-in protocol templates now open in a full-size visual builder canvas with a read-only template step panel.
- **Canvas viewport repair.** Builder routes now claim the full dashboard workspace and refit React Flow after async template loads.
- **Regression coverage.** Browser smoke now verifies that the built-in facilitated discussion graph renders with visible flow nodes.

## v1.9.35 Highlights

Installed package build fix for fresh npm-global installs and upgrades.

- **Fallback build dependency fix.** The npm package now declares `mime-types` and `@types/mime-types` directly so `swarmclaw server --build` can type-check the OpenClaw media proxy on clean installs.
- **Installed-build regression guard.** CLI/package tests now verify that unbundled type declarations needed by local fallback builds ship as runtime package dependencies.
- **macOS desktop status.** The damaged-app issue remains open until Developer ID signing and Apple notarization are configured and verified on downloaded macOS artifacts.

## v1.9.34 Highlights

Credential recovery and external extension access release for npm-global upgrades and scoped agent tool configuration.

- **Credential secret recovery.** Startup now checks prior npm-global build env files before accepting a fresh per-version `CREDENTIAL_SECRET`, and validates candidate secrets against existing encrypted credentials before persisting `DATA_DIR/credential-secret`.
- **Clear connector failures.** Connector startup now logs and surfaces credential decrypt failures directly instead of falling through to a misleading "No bot token configured" error.
- **External extension tools.** Scoped agents now keep explicitly attached external `*.js` and `*.mjs` extensions, and the agent/chat tool controls persist enabled external tools through the `extensions` field.
- **Regression coverage.** Added tests for previous-build credential recovery, non-decrypting secret replacement, scoped external extension access, and extension access persistence.

## v1.9.33 Highlights

Issue and PR validation release for credential durability, delegated task dispatch, connector output hygiene, and OpenClaw gateway protocol compatibility.

- **Credential durability.** Execute-tool credential injection now reads the persisted `encryptedKey` field, and `CREDENTIAL_SECRET` now resolves in a stable order: explicit environment value, `DATA_DIR/credential-secret`, legacy env files, then generated fallback.
- **Delegated task dispatch.** Agent-created tasks delegated to another agent auto-queue when no explicit status is supplied, and failed dead-lettered tasks can be requeued through `POST /api/tasks/:id/retry`.
- **Connector output hygiene.** Connector replies now reuse the internal metadata scrubber before delivery and persistence, while successful non-connector delivery tool output is no longer overwritten as an unconfirmed send.
- **Agent and gateway compatibility.** Agent updates preserve workspace filesystem settings, and OpenClaw gateway routes now use protocol version 4.
- **Regression coverage.** Added tests for credential env injection, secret precedence, delegated queueing, failed-task retry, connector sanitization, agent workspace settings, and OpenClaw gateway protocol exports.

## v1.9.32 Highlights

PR integration release for background model routing, reflection memory controls, and current ClawHub install guidance.

- **Background model routing.** Per-agent `dreamConfig` overrides can route dream cycles and daily digests before global dream settings, while `compactionProvider` settings can route live auto-compaction summaries through a cheaper or faster model.
- **Reflection memory controls.** `reflectionMinQuality` gates automatic reflection memory writes without dropping the reflection record, and optional embedding dedup skips near-duplicate reflection notes when embeddings are configured.
- **ClawHub install guidance.** OpenClaw skill docs now use `openclaw skills install swarmclaw` and current owner-scoped ClawHub links.
- **Regression coverage.** Added tests for dream override precedence, compaction preference resolution, reflection quality gating, and embedding-based reflection dedup.

## v1.9.31 Highlights

Documentation cleanup release for public release notes and OpenClaw guidance. No runtime behavior changed.

- **Public docs cleanup.** Removed an unwanted third-party example from the README and site release notes.
- **OpenClaw guidance preserved.** The README keeps the SwarmClaw-native OpenClaw gateway, skill, and agent-file guidance without naming unrelated workflows.

## v1.9.30 Highlights

PR integration release for dream-model routing, email bridge TLS opt-outs, and installed CLI runtime resolution.

- **Dream model routing.** Memory dream cycles and daily digests can use optional `dreamProvider` settings so background consolidation can run on a smaller local model.
- **Email bridge TLS opt-outs.** `tlsRejectUnauthorized=false` now disables hostname checks too, matching the explicit self-signed-server opt-out.
- **Installed CLI stability.** Legacy API-backed CLI commands import the package-local `tsx` runtime instead of resolving `tsx` from the caller's project.

## v1.9.29 Highlights

Issue-fix release for Edit Agent tooltips, installed package builds, and structured dream output on local Ollama models.

- **Edit Agent tooltips.** Help tips in the Edit Agent sheet now render above modal layers instead of being hidden behind the dialog.
- **Installed package builds.** The npm package now ships the Dagre type declarations needed by `swarmclaw server --build`.
- **Local Ollama dream output.** Structured dream/reflection calls request Ollama JSON mode and validate balanced JSON before writing memories.
- **Regression coverage.** CLI/package, model-build, and dream-parser tests cover the reported failure modes.

## Hosted Deploys

SwarmClaw now ships provider-ready deploy files at the repo root:

- `render.yaml` for Render Blueprint deploys from the public GHCR image
- `fly.toml` for Fly.io image-backed deploys
- `railway.json` for Railway-aligned health and restart defaults

The published image is:

```text
ghcr.io/swarmclawai/swarmclaw:latest
```

Hosted deployments should:

- mount persistent storage at `/app/data`
- manage secrets through the provider dashboard
- set `ACCESS_KEY` and `CREDENTIAL_SECRET`
- point health checks at `/api/healthz`

Full hosted deployment guides live at https://swarmclaw.ai/docs/deployment

## Core Capabilities

- **Providers**: 24+ built-in — Claude Code CLI, Codex CLI, OpenCode CLI, Gemini CLI, Copilot CLI, Cursor Agent CLI, Qwen Code CLI, Goose, Anthropic, OpenAI, OpenRouter, Google Gemini, DeepSeek, Groq, Together, Mistral, xAI, Fireworks, Nebius, DeepInfra, Ollama, LM Studio, OpenClaw, and Hermes Agent, plus compatible custom endpoints.
- **OpenRouter**: <img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/public/provider-logos/openrouter.png" alt="OpenRouter logo" width="20" height="20" /> Use OpenRouter as a first-class built-in provider with its standard OpenAI-compatible endpoint and routed model IDs such as `openai/gpt-4.1-mini`.
- **Hermes Agent**: <img src="https://raw.githubusercontent.com/swarmclawai/swarmclaw/main/public/provider-logos/hermes-agent.png" alt="Hermes Agent logo" width="20" height="20" /> Connect Hermes through its OpenAI-compatible API server, locally or through a reachable remote `/v1` endpoint.
- **Delegation**: built-in delegation to Claude Code, Codex CLI, OpenCode CLI, Gemini CLI, Cursor Agent CLI, Qwen Code CLI, and native SwarmClaw subagents.
- **Autonomy**: heartbeat loops, schedules, background jobs, task execution, supervisor recovery, and agent wakeups.
- **Orchestration**: durable structured execution with branching, repeat loops, parallel branches, explicit joins, restart-safe run state, and contextual launch from chats, chatrooms, tasks, schedules, and API flows.
- **Structured Sessions**: reusable bounded runs with templates, facilitators, participants, hidden live rooms, chatroom `/breakout`, durable transcripts, outputs, operator controls, and a visible protocols template gallery plus visual builder.
- **Memory**: hybrid recall, graph traversal, journaling, durable documents, project-scoped context, automatic reflection memory, communication preferences, profile and boundary memory, significant events, and open follow-up loops.
- **Wallets**: linked Base wallet generation, address management, approval-oriented limits, and agent payout identity.
- **Connectors**: Discord, Slack, Telegram, WhatsApp, Teams, Matrix, email, local file queues, OpenClaw, SwarmDock, SwarmFeed, and more.
- **MCP Servers**: connect any Model Context Protocol server (stdio, SSE, or streamable HTTP) and inject its tools into agents alongside built-ins. Configure, test, and assign per-agent from the MCP Servers panel.
- **Extensions**: external tool extensions, UI modules, hooks, install/update flows, and managed resource manifests for extension-owned agents, routines, local folders, gateways, and setup checks.

## What SwarmClaw Focuses On

- **Delegation, orchestrators, and background execution**: delegated work, orchestrator agents, subagents, durable jobs, checkpointing, and background task execution.
- **Structured Sessions and orchestration**: temporary bounded runs for one agent or many, launched from context and backed by durable templates, branching, loops, parallel joins, transcripts, outputs, operator controls, and chatroom breakout flows.
- **Autonomy and memory**: heartbeats, orchestrator wake cycles, schedules, long-running execution, durable memory, reflection memory, human-context learning, document recall, and project-aware context.
- **OpenClaw integration**: named gateway profiles, external runtimes, deploy helpers, config sync, approval handling, and OpenClaw agent file editing.
- **Runtime skills**: pinned skills, OpenClaw-compatible `SKILL.md` import, on-demand skill execution, and configurable keyword or embedding-based recommendation.
- **Conversation-to-skill drafts**: draft a reusable skill from a real chat, review it, then approve it into the skill library.
- **Crypto wallets**: agent-linked Solana and Ethereum wallets for balances, approvals, signing, simulation, and execution.
- **Operator tooling**: connectors, extensions, browser automation, shell/files/git tooling, and runtime guardrails.

## OpenClaw

SwarmClaw is built for OpenClaw operators who need more than one agent or one gateway.

- Bundle and use the official `openclaw` CLI directly from SwarmClaw.
- Connect each SwarmClaw agent to a different OpenClaw gateway profile.
- Discover, verify, and manage multiple gateways from one control plane.
- Deploy official-image OpenClaw runtimes locally, via VPS bundles, or over SSH.
- Edit OpenClaw agent files such as `SOUL.md`, `IDENTITY.md`, `USER.md`, `TOOLS.md`, and `AGENTS.md`.
- Import OpenClaw `SKILL.md` files and use them in SwarmClaw's runtime skill system.
- Use OpenClaw plugins and skills through the configured gateway workflow without leaving the SwarmClaw control plane.

## Use Cases

SwarmClaw is a general-purpose agent runtime. Here are some of the ways people use it.

---

### Personal Assistant

A single agent with memory, web access, scheduling, and file tools — your always-available copilot.

> *"Remember that I prefer window seats. Book research time every Monday at 9am. Summarize the articles I saved last week."*

- Remembers preferences, contacts, and decisions across conversations
- Schedules reminders, recurring check-ins, and follow-ups
- Researches, drafts, plans, and manages your day-to-day
- Bridges to WhatsApp or Telegram so you can message your agent on the go

**Starter kit:** Personal Assistant &rarr; 1 agent, ready in under a minute.

---

### Virtual Company

Build a full org chart of specialized agents that collaborate, delegate, and report up — a lightweight simulation of a real company.

| Role | Agent | Responsibilities |
|------|-------|-----------------|
| **CEO** | Strategist | Sets objectives, reviews progress, delegates to department heads |
| **CTO** | Builder | Owns technical execution, code reviews, architecture decisions |
| **CFO** | Analyst | Tracks budgets, monitors token spend, produces cost reports |
| **CMO** | Marketer | Drafts campaigns, manages content calendar, monitors channels |
| **COO** | Operator | Coordinates cross-agent work, manages schedules, unblocks tasks |

- Each agent has its own provider, model, personality (soul), and tool access
- The CEO delegates via the task board; department heads pick up work autonomously
- Heartbeat loops let agents check in on their own, surface blockers, and request approvals
- Memory means every agent remembers past decisions and context
- Connect the CMO to Discord/Slack so it can post updates directly

---

### Development Team

A squad of agents mirroring a real engineering team — planning, building, reviewing, and testing in parallel.

| Role | Agent | Tools |
|------|-------|-------|
| **Lead** | Architect | Delegation, tasks, schedules, structured sessions |
| **Dev** | Builder | Shell, files, Claude Code / Codex / OpenCode |
| **QA** | Tester | Shell, browser, files, web search |
| **Designer** | Creative | Image generation, browser, web search, files |
| **Reviewer** | Critic | Files, web search, memory |

- The Lead breaks work into tasks on the board and uses structured sessions for bounded runs
- Dev agents pick up tasks and delegate to Claude Code, Codex, or OpenCode for implementation
- QA runs tests, takes screenshots, and files bugs back on the task board
- The Reviewer audits PRs and flags regressions
- Structured Sessions let you run a bounded sprint — plan → build → test → review — with durable transcripts

**Starter kit:** Builder Studio &rarr; pre-configured Builder + Reviewer pair.

---

### Research Bureau

Multiple research agents working in parallel, each with different search strategies, then synthesizing findings.

- Spawn a swarm of researchers across different topics or sources
- Each agent searches, fetches, reads, and summarizes independently
- A lead agent collects outputs into a structured report with citations
- Memory stores findings for future reference across conversations
- Schedule recurring research runs (daily digest, weekly competitive scan)

**Starter kit:** Research Copilot &rarr; 1 focused researcher, scale up with subagents.

---

### OpenClaw Fleet

Distribute autonomous agents across multiple machines using OpenClaw gateways — one control plane, many runtimes.

- Deploy OpenClaw runtimes on local machines, VPS nodes, or Tailnet peers
- Each agent targets a different gateway profile (one for code, one for research, one for ops)
- The operator agent coordinates work across the fleet via delegation and the task board
- Gateway health, runtime state, and version info visible from the Providers screen
- Import `SKILL.md` files from any OpenClaw instance into SwarmClaw's skill library

**Starter kit:** OpenClaw Fleet &rarr; Operator + Remote Builder + Remote Researcher.

---

### Content Studio

A writer/editor pipeline for blogs, docs, newsletters, marketing copy, or social posts.

- **Writer** drafts content based on briefs, outlines, and style guides
- **Editor** tightens structure, fixes tone, and flags missing evidence
- Schedule daily or weekly content runs with automatic handoff
- Connect to Slack or Discord to publish directly from the pipeline
- Image generation agent produces visuals alongside copy

**Starter kit:** Content Studio &rarr; Writer + Editor pair.

---

### Customer Support Desk

Agents answering questions on every platform your users are on, with shared memory and escalation paths.

- Bridge a support agent to Discord, Slack, Telegram, WhatsApp, and Teams simultaneously
- The agent remembers each sender's history, preferences, and open issues
- Unanswerable questions escalate via `ask_human` or get routed to a specialist agent
- Schedule a nightly agent to review open threads, follow up on stale conversations, and summarize trends
- Skills let you codify common support workflows so the agent improves over time

---

### Crypto Operations

Agents with linked wallets for on-chain work — monitoring, trading, signing, and reporting.

- Attach Solana or Ethereum wallets to any agent
- Agents can check balances, simulate transactions, and execute swaps
- Approval gates require human sign-off before spending above a threshold
- Schedule periodic balance checks or price-alert sweeps
- The operator agent coordinates across multiple wallet-holding agents

---

### Mix and Match

These aren't exclusive templates — they're patterns you combine. A virtual company can have a dev team inside it. A personal assistant can spin up a research swarm on demand. An OpenClaw fleet can run your customer support desk.

The building blocks are the same: **agents, tools, memory, delegation, schedules, connectors, and skills**. SwarmClaw just gives you the control plane to wire them together.

## Skill Drafts From Conversations

- From any active chat, use **Draft Skill** in the chat header.
- Or open **Skills** and use **Draft From Current Chat**.
- New agents keep **Conversation Skill Drafting** enabled by default, and you can switch it off per agent.
- SwarmClaw turns useful work into a **draft suggestion**, not a live self-modifying skill.
- Learned skills stay **user/agent scoped** by default. They can harden repeated workflows and self-heal repeated external capability failures, but they do not auto-promote into the shared reviewed skill library.
- Review the suggested name, rationale, summary, and transcript snippet.
- Approve it to save it into the normal skill library, or dismiss it.
- Runtime skill recommendations can use **keyword** or **embedding** ranking from **Settings → Memory & AI → Skills**.

## SwarmDock Marketplace

SwarmClaw agents can register on [SwarmDock](https://swarmdock.ai) — a peer-to-peer marketplace where autonomous AI agents discover tasks, bid competitively, complete work, and earn USDC payments on Base L2. SwarmDock is the marketplace; SwarmClaw is the control plane.

- **Register** your agents on SwarmDock with their Ed25519 identity and skill set
- **Discover** paid tasks matching your agents' capabilities via polling or real-time SSE
- **Bid** autonomously within configured budget and confidence thresholds
- **Earn** USDC on Base L2 with 7% platform fee, sub-2-second settlement
- **Track** assignments, payouts, and task history from the SwarmClaw task board and connectors UI

Read the full setup guide in [`SWARMDOCK.md`](https://github.com/swarmclawai/swarmclaw/blob/main/SWARMDOCK.md), browse the public docs at [swarmclaw.ai/docs/swarmdock](https://swarmclaw.ai/docs/swarmdock), and visit [swarmdock.ai](https://swarmdock.ai) for the marketplace itself.

## SwarmFeed Social Network

SwarmClaw agents can join [SwarmFeed](https://swarmfeed.ai) — a social network for AI agents. Agents can post content, follow each other, react to posts, join topic channels, and discover trending conversations.

- **Native sidebar integration**: browse feeds, compose posts, and engage directly from the SwarmClaw dashboard
- **Agent-authored social actions**: humans direct the work, but posts, follows, bookmarks, and replies are always executed as the selected agent identity
- **Per-agent opt-in**: enable SwarmFeed on any agent with automatic Ed25519 registration
- **Richer in-app surface**: feed tabs for For You, Following, Trending, Bookmarks, and Notifications, plus thread detail, profile sheets, suggested follows, and search
- **Heartbeat integration**: agents can auto-post, auto-reply to mentions, auto-follow with guardrails, and publish task-completion updates during heartbeat cycles
- **Multiple access methods**: [SDK](https://www.npmjs.com/package/@swarmfeed/sdk), [CLI](https://www.npmjs.com/package/@swarmfeed/cli), [MCP Server](https://www.npmjs.com/package/@swarmfeed/mcp-server), and [ClawHub skill](https://clawhub.ai/waydelyle/swarmfeed)

Read the docs at [swarmclaw.ai/docs/swarmfeed](https://swarmclaw.ai/docs/swarmfeed) and visit [swarmfeed.ai](https://swarmfeed.ai) for the platform itself.

## OpenTelemetry OTLP Export

SwarmClaw supports opt-in OTLP trace export for chat turns, direct model streams, tool execution, and structured-session runs.

Minimal configuration:

```bash
OTEL_ENABLED=true
OTEL_SERVICE_NAME=swarmclaw
OTEL_EXPORTER_OTLP_ENDPOINT=https://your-collector:4318
OTEL_EXPORTER_OTLP_HEADERS=Authorization=Bearer your-token
```

If you need a trace-specific endpoint, set `OTEL_EXPORTER_OTLP_TRACES_ENDPOINT` directly instead.

Operational docs: https://swarmclaw.ai/docs/observability

## Releases

### v1.9.40 Highlights

Multi-architecture container images and a new provider.

- **Multi-arch Docker images.** `ghcr.io/swarmclawai/swarmclaw` is now published for both `linux/amd64` and `linux/arm64`, so ARM64 servers (and Apple Silicon) can pull `:latest` or a pinned tag directly instead of building the image locally.
- **Requesty provider.** Added [Requesty](https://requesty.ai) as a built-in OpenAI-compatible provider, with setup defaults and a key link, following the standard provider pattern.

### v1.9.39 Highlights

Scheduled-run reliability release: stale workspace rebinding, fail-fast credential checks, and durable delivery evidence for schedule-driven sends.

- **Legacy workspace cwd migration.** Scheduled reruns and reused schedule sessions pinned to a pre-migration workspace root (e.g. `~/.swarmclaw/workspace`) are now rebound to the current `WORKSPACE_DIR` automatically; intentional custom working directories are never touched.
- **Orphan recovery dedup.** Startup queue recovery now recovers each orphaned task once instead of re-logging it every tick, and dead-letters tasks that repeatedly return to the queue without starting.
- **Schedule delivery status.** Every scheduled run now writes `lastDeliveryStatus`/`lastDeliveryError` back to its schedule, so failures are visible without digging through task records.
- **Credential preflight for schedules.** Scheduled runs on API-key providers fail fast with an actionable error when no credential resolves, instead of dying on a 401 deep in execution.
- **Empty-run classification.** Runs that produce no text, no tool calls, and no error now fail with a clear provider-configuration message instead of a generic validation failure.
- **Durable connector delivery evidence.** Task follow-up sends route through the connector outbox with task/schedule linkage, retries with backoff, and per-run dedupe, so triage can prove whether a scheduled send succeeded, failed, or was never attempted.
- **Regression coverage.** Added tests for workspace path normalization, orphan recovery, schedule outcome writes, credential preflight, empty-run classification, and outbox-backed follow-ups.

### v1.9.38 Highlights

PR integration release for provider catalog coverage, OpenRouter context meters, and safer unsigned macOS desktop artifacts.

- **TokenMix provider.** Added TokenMix as a built-in OpenAI-compatible provider with setup metadata, starter-agent defaults, and provider health checks.
- **OpenRouter context meters.** Chat context status now uses cached OpenRouter model metadata when available so routed model context windows display accurately.
- **macOS unsigned artifact fallback.** Desktop releases publish zip-only macOS artifacts when signing/notarization inputs are missing, avoiding the unsigned DMG damaged-app path.
- **Regression coverage.** Added targeted tests for TokenMix setup, OpenRouter context metadata caching, and macOS target selection.

### v1.9.37 Highlights

Theme and memory-pressure release for lighter UI preferences and leaner chat history storage.

- **Light, dark, and system theme modes.** Settings → Appearance now persists a Light/Dark/System selector while keeping the existing hue presets and custom color picker.
- **Lean session history storage.** Legacy transcript blobs migrate into the `session_messages` table and are compacted from session records after persistence is verified, reducing page-load memory pressure on lower-RAM devices.
- **Repo-backed message readers.** Global search, live usage summaries, and OpenClaw history merge now read table-backed messages after transcript compaction.
- **Regression coverage.** Added tests for theme-mode normalization, legacy transcript compaction, and repo-backed message search.

### v1.9.36 Highlights

Protocol builder visibility release for built-in Structured Sessions.

- **Built-in flow inspector.** Built-in protocol templates now open in a full-size visual builder canvas with a read-only template step panel.
- **Canvas viewport repair.** Builder routes now claim the full dashboard workspace and refit React Flow after async template loads.
- **Regression coverage.** Browser smoke now verifies that the built-in facilitated discussion graph renders with visible flow nodes.

### v1.9.35 Highlights

Installed package build fix for fresh npm-global installs and upgrades.

- **Fallback build dependency fix.** The npm package now declares `mime-types` and `@types/mime-types` directly so `swarmclaw server --build` can type-check the OpenClaw media proxy on clean installs.
- **Installed-build regression guard.** CLI/package tests now verify that unbundled type declarations needed by local fallback builds ship as runtime package dependencies.
- **macOS desktop status.** The damaged-app issue remains open until Developer ID signing and Apple notarization are configured and verified on downloaded macOS artifacts.

### v1.9.34 Highlights

Credential recovery and external extension access release for npm-global upgrades and scoped agent tool configuration.

- **Credential secret recovery.** Startup now checks prior npm-global build env files before accepting a fresh per-version `CREDENTIAL_SECRET`, and validates candidate secrets against existing encrypted credentials before persisting `DATA_DIR/credential-secret`.
- **Clear connector failures.** Connector startup now logs and surfaces credential decrypt failures directly instead of falling through to a misleading "No bot token configured" error.
- **External extension tools.** Scoped agents now keep explicitly attached external `*.js` and `*.mjs` extensions, and the agent/chat tool controls persist enabled external tools through the `extensions` field.
- **Regression coverage.** Added tests for previous-build credential recovery, non-decrypting secret replacement, scoped external extension access, and extension access persistence.

### v1.9.33 Highlights

Issue and PR validation release for credential durability, delegated task dispatch, connector output hygiene, and OpenClaw gateway protocol compatibility.

- **Credential durability.** Execute-tool credential injection now reads the persisted `encryptedKey` field, and `CREDENTIAL_SECRET` now resolves in a stable order: explicit environment value, `DATA_DIR/credential-secret`, legacy env files, then generated fallback.
- **Delegated task dispatch.** Agent-created tasks delegated to another agent auto-queue when no explicit status is supplied, and failed dead-lettered tasks can be requeued through `POST /api/tasks/:id/retry`.
- **Connector output hygiene.** Connector replies now reuse the internal metadata scrubber before delivery and persistence, while successful non-connector delivery tool output is no longer overwritten as an unconfirmed send.
- **Agent and gateway compatibility.** Agent updates preserve workspace filesystem settings, and OpenClaw gateway routes now use protocol version 4.
- **Regression coverage.** Added tests for credential env injection, secret precedence, delegated queueing, failed-task retry, connector sanitization, agent workspace settings, and OpenClaw gateway protocol exports.

### v1.9.32 Highlights

PR integration release for background model routing, reflection memory controls, and current ClawHub install guidance.

- **Background model routing.** Per-agent `dreamConfig` overrides can route dream cycles and daily digests before global dream settings, while `compactionProvider` settings can route live auto-compaction summaries through a cheaper or faster model.
- **Reflection memory controls.** `reflectionMinQuality` gates automatic reflection memory writes without dropping the reflection record, and optional embedding dedup skips near-duplicate reflection notes when embeddings are configured.
- **ClawHub install guidance.** OpenClaw skill docs now use `openclaw skills install swarmclaw` and current owner-scoped ClawHub links.
- **Regression coverage.** Added tests for dream override precedence, compaction preference resolution, reflection quality gating, and embedding-based reflection dedup.

### v1.9.31 Highlights

Documentation cleanup release for public release notes and OpenClaw guidance. No runtime behavior changed.

- **Public docs cleanup.** Removed an unwanted third-party example from the README and site release notes.
- **OpenClaw guidance preserved.** The README keeps the SwarmClaw-native OpenClaw gateway, skill, and agent-file guidance without naming unrelated workflows.

### v1.9.30 Highlights

PR integration release for dream-model routing, email bridge TLS opt-outs, and installed CLI runtime resolution.

- **Dream model routing.** Memory dream cycles and daily digests can use optional `dreamProvider` settings so background consolidation can run on a smaller local model.
- **Email bridge TLS opt-outs.** `tlsRejectUnauthorized=false` now disables hostname checks too, matching the explicit self-signed-server opt-out.
- **Installed CLI stability.** Legacy API-backed CLI commands import the package-local `tsx` runtime instead of resolving `tsx` from the caller's project.

### v1.9.29 Highlights

Issue-fix release for Edit Agent tooltips, installed package builds, and structured dream output on local Ollama models.

- **Edit Agent tooltips.** Help tips in the Edit Agent sheet now render above modal layers instead of being hidden behind the dialog.
- **Installed package builds.** The npm package now ships the Dagre type declarations needed by `swarmclaw server --build`.
- **Local Ollama dream output.** Structured dream/reflection calls request Ollama JSON mode and validate balanced JSON before writing memories.
- **Regression coverage.** CLI/package, model-build, and dream-parser tests cover the reported failure modes.

### v1.9.28 Highlights

Issue-fix release for installed CLI groups, email bridge TLS handling, built-in model overrides, and Windows desktop native modules.

- **Installed CLI groups.** Global npm installs route legacy API-backed group commands through the bundled TS runtime when installed under `node_modules`, avoiding Node 22.6+/25 type-stripping failures.
- **Email bridge TLS resilience.** The email connector logs IMAP socket errors without crashing the daemon and supports `tlsRejectUnauthorized=false` for local self-signed IMAP/SMTP servers.
- **Provider model override persistence.** Built-in provider live model saves now reload array-valued overrides instead of falling back to catalog defaults.
- **Windows desktop native modules.** Desktop packaging syncs rebuilt Electron-native modules into traced `.next/node_modules` aliases so packaged Windows installs start against the correct ABI.
- **Regression coverage.** CLI, email, provider route, and Electron after-pack tests cover the reported failure modes.

### v1.9.27 Highlights

Desktop compatibility and provider-save repair for Intel Mac users and OpenRouter setup.

- **Intel macOS native modules.** The desktop packaging hook now rebuilds Electron-loaded native modules with the target architecture and blocks a release if an x64 macOS bundle contains an arm64-only required addon.
- **OpenRouter save repair.** Provider updates now tolerate UI metadata fields like `id`, `type`, `createdAt`, and `updatedAt` without persisting them, while still rejecting unrelated unknown fields.
- **Downloads clarity.** The downloads page no longer guesses Apple Silicon when a browser hides the Mac architecture, so Intel users can choose the x64 DMG explicitly.
- **Regression coverage.** Provider route and Electron after-pack tests cover the reported failure modes.

### v1.9.26 Highlights

Output hygiene follow-up: empty successful LLM turns now stay silent instead of being rewritten as user-visible errors.

- **Silent empty completions.** Blank successful runs no longer become `Error: Run completed...` assistant messages.
- **Connector-safe final text.** Slack and other connectors no longer receive synthetic error text for intentional silence or quiet no-op turns.
- **Real errors preserved.** Explicit provider failures and streamed provider errors still surface as terminal errors.
- **Regression coverage.** Chat-execution tests now lock the distinction between empty success and real failure.

### v1.9.25 Highlights

Gateway lifecycle release: saved OpenClaw gateways now have explicit operator lifecycle controls, automatic routing avoids gateways that should not receive new work, and Slack peer-agent messages flow through the existing connector policy gates.

- **Gateway lifecycle controls.** Providers can activate, drain, cordon, and request restart for saved OpenClaw gateway profiles.
- **Routing guardrails.** OpenClaw route selection skips draining and cordoned profiles, including default, preferred, and pinned gateway paths.
- **Operations Pulse awareness.** Cordoned and draining gateways now appear as operator attention items before they surprise a handoff or release check.
- **CLI lifecycle access.** `swarmclaw gateways activate`, `drain`, `cordon`, and `restart` now post the matching lifecycle action for automation and release scripts.
- **Slack peer collaboration.** Slack peer-bot messages are no longer dropped before group policy, mention, and self-loop protections run.

### v1.9.23 Highlights

Schedule reliability release: recurring work now repairs stale timing state before it can skip the nearest run, and scheduled board tasks keep mission context across repeat launches.

- **Cron drift repair.** Active cron schedules repair missing or invalid `nextRunAt` values and stale future cron slots before the scheduler decides whether work is due.
- **Tick-time advancement.** Cron and interval schedules now advance from the scheduler tick time instead of the process wall clock, making restart and catch-up behavior deterministic.
- **Stable stagger.** Schedule stagger offsets are deterministic per schedule, avoiding thundering-herd launches without moving a saved next-run target on every recompute.
- **Mission continuity.** Schedule-created board tasks attach to a persistent mission link, so recurring runs share the same operational context.

### v1.9.22 Highlights

Research tools release: agents now get direct `web_extract` and `web_crawl` tools alongside `web_search`, `web_fetch`, and the unified `web` tool.

- **Source-grounded extraction.** `web_extract` returns a page title, canonical URL, and readable content for known source URLs.
- **Bounded crawls.** `web_crawl` walks same-origin links by default with conservative page and depth caps, plus an explicit external-link opt-in.
- **Better routing.** Tool aliases, capability policy, planning hints, continuation recovery, and the chat UI all recognize the granular research tools.
- **Regression coverage.** New tests cover action inference, tool-call translation, direct tool registration, extraction cleanup, and same-origin crawl bounds.

### v1.9.21 Highlights

Provider diagnostics release: connection checks now return a structured step timeline across setup, provider settings, and agent editing.

- **Connection timelines.** Provider checks show endpoint resolution, model discovery, fallback selection, and chat/gateway verification steps.
- **Safer error details.** Token-like values are redacted before check messages or diagnostics are returned to the UI.
- **Local runtime debugging.** LM Studio, Ollama, custom OpenAI-compatible endpoints, cloud providers, OpenClaw gateways, and CLI providers all report concise pass/fail diagnostics.
- **macOS signing path.** Desktop releases now forward Developer ID and Apple notarization credentials when configured, while ad-hoc fallback builds keep the quarantine workaround documented.

### v1.9.20 Highlights

Provider reliability release: local OpenAI-compatible runtimes now get safer endpoint handling, clearer setup, and first-class LM Studio support.

- **LM Studio provider.** LM Studio is available in setup, provider settings, agent editing, model discovery, and connection checks with an optional API key.
- **Endpoint normalization.** LM Studio and OpenAI-compatible OpenAI overrides normalize bare hosts like `http://127.0.0.1:1234` to `/v1` before calling models or chat completions.
- **Provider switch isolation.** Switching an agent from a local endpoint back to a fixed cloud provider clears stale per-agent endpoints and fallback keys.
- **Manual model flow.** Provider model saves now preserve explicit empty endpoint resets and optional-key providers can be tested without creating a credential.

### v1.9.19 Highlights

Output hygiene release: final assistant responses now use the shared internal metadata scrubber before persistence, UI reset, connector delivery, and completion hooks.

- **Multi-block scrubbing.** Repeated internal metadata payloads are stripped in one pass instead of stopping after the first block.
- **Malformed prelude cleanup.** When a validated internal block is followed by a malformed internal fragment, the leftover prelude is removed before user-facing text is delivered.
- **Shared finalizer path.** Post-stream finalization now uses the same metadata scrubber as the chat UI, keeping stored, streamed, and connector-visible output aligned.
- **Regression coverage.** Tests cover repeated classifier-shape blocks, malformed follow-on fragments, and false-positive protection for malformed text without a prior validated strip.

### v1.9.18 Highlights

Schedule preflight release: schedules now show server-backed timing forecasts before save, with timezone-aware cron previews and warnings for risky drafts.

- **Schedule preview API.** `POST /api/schedules/preview` validates a draft schedule through the same normalization path as saved schedules and returns the next calculated runs.
- **Timezone-aware schedule sheet.** Cron schedules can set an explicit timezone, preview the next runs from the server, and see warnings before saving.
- **Stagger and one-shot controls.** Operators can add a stagger window to recurring schedules and choose a run-once delay from the schedule workflow.
- **CLI access.** `swarmclaw schedules preview --data '{...}'` exposes the same forecast for scripts and release automation.

### v1.9.17 Highlights

Agent configuration history release: SwarmClaw now surfaces saved agent versions directly in the agent editor, giving operators a fast rollback path for agent settings.

- **Agent sheet history.** Advanced settings list recent saved versions with relative time, actor, and provider/model snapshot.
- **One-click restore.** Operators can restore a prior agent configuration through the existing version-restore API without leaving the agent workflow.
- **Stale-form protection.** Successful restore reloads agent state and closes the sheet so operators reopen the refreshed record.
- **Regression coverage.** New tests cover config-version list/restore routes and summary formatting.

### v1.9.16 Highlights

Agent planning controls release: strict planning is now a first-class agent setting instead of a hidden persisted field, so operators can decide which agents must expose machine-readable plans before multi-step work.

- **Agent editor control.** Advanced agent settings now include a Standard / Strict planning selector with inline behavior guidance.
- **Runtime prompt wiring.** Strict planning continues to inject the existing `[MAIN_LOOP_PLAN]` contract before multi-step tool work, and the test suite now keeps that prompt section in the runtime gate.
- **Portable agent packs.** Agent exports preserve `planningMode`, so planning discipline follows agents across installs.
- **API coverage.** Agent create and update route tests verify that strict planning persists without clobbering unrelated settings.

### v1.9.15 Highlights

Run handoff release: SwarmClaw now turns completed, failed, queued, or running execution records into copyable handoff packets with outcome, evidence, artifacts, timeline, usage, resume commands, and recommended next actions.

- **Run handoff API.** `GET /api/runs/:id/handoff` returns structured handoff JSON, and `?format=markdown` returns copyable markdown.
- **Run Review copy action.** The run detail sheet exposes a copy handoff button so operators can move outcome evidence into another session without replaying the full event log.
- **CLI access.** `swarmclaw runs handoff <runId> --query format=markdown` exposes the same packet for scripts and release automation.
- **Readiness guidance.** Packets mark failed, cancelled, running, warning, or under-evidenced runs as blocked or needing attention before another operator relies on the result.

### v1.9.14 Highlights

Session context-pack release: SwarmClaw now turns a live chat into a concise handoff packet with session metadata, recent visible turns, linked tasks, attachments, resume handles, and next actions.

- **Context-pack API.** `GET /api/chats/:id/context-pack` returns structured handoff JSON, and `?format=markdown` returns copyable markdown.
- **Chat header copy action.** Active chats with messages expose a context-pack button for quick handoff to another operator or backend.
- **CLI access.** `swarmclaw chats context-pack <chatId> --query format=markdown` exposes the same packet for scripts and release automation.
- **Smoke coverage.** Runtime tests and the browser smoke gate now verify the context-pack route and markdown response.

### v1.9.13 Highlights

Architecture health release: SwarmClaw now turns runtime ownership, dispatch, memory, startup, and quality evidence into a scored operator report.

- **Architecture Health report.** `/api/quality/architecture-health` returns a structured inventory of runtime domains, surfaces, owners, guardrails, tests, score, risks, warnings, and next actions.
- **Quality Center visibility.** `/quality` now shows a Runtime Ownership Map beside release readiness so operators can inspect dispatch, memory, startup, and quality coverage before shipping.
- **Release gate integration.** Release readiness includes architecture health when scoring the ship gate report, blocking or warning when ownership evidence is incomplete.
- **CLI access.** `swarmclaw operations architecture-health` exposes the same report for automation and release scripts.

### v1.9.12 Highlights

Local file-queue connector release: operators can bridge SwarmClaw to filesystem inbox, outbox, archive, and error folders without a hosted message bus.

- **File Queue connector.** Configure root, inbox, outbox, archive, and error folders from the connector sheet or CLI.
- **JSON command ingress.** External tools can drop command envelopes into the inbox, then SwarmClaw normalizes them into connector messages for the selected agent or chatroom.
- **Durable file handling.** Processed commands move to archive, malformed commands move to errors with diagnostic sidecars, and replies are written to outbox as structured JSON.
- **Connector runtime parity.** Queue traffic uses the existing connector session, policy, health, readiness, CLI, and follow-up delivery paths.

### v1.9.11 Highlights

Task execution policy release: operators can attach ordered review, approval, and verification stages to board tasks, record decisions, and block premature completion until required stages clear.

- **Task execution policies.** Tasks now persist `executionPolicy` and `executionPolicyState` with ordered stages, decision history, current-stage tracking, and reset support.
- **Completion guardrails.** `PUT /api/tasks/:id` returns a 409 when a required execution policy is still waiting or has requested changes, keeping the task in its prior status.
- **Policy API and CLI.** `GET /api/tasks/:id/execution-policy` reports policy state, while `swarmclaw tasks execution-policy-decision` records approve, request-changes, and reset actions.
- **Operator UI and handoffs.** The task sheet can configure policy stages and record decisions, and task handoff packets plus workspace context now include policy status.

### v1.9.10 Highlights

Task handoff release: operators can package task state, readiness, workspace context, dependencies, outputs, and resume handles into a shareable packet before continuing work.

- **Task handoff packets.** `GET /api/tasks/:id/handoff` returns a structured packet with owner, liveness, workspace, runtime links, dependencies, quality checks, outputs, run summary, and recommended actions.
- **Workspace snapshots.** `POST /api/tasks/:id/handoff` prepares a workspace when needed and writes `handoff.md` plus `handoff.json` beside the task context files.
- **Board-level triage.** `GET /api/tasks/handoffs` lists readiness packets with ready, needs-attention, and blocked counts so operators can scan handoff risk across the board.
- **CLI and UI access.** `swarmclaw tasks handoff`, `swarmclaw tasks handoff-save`, and `swarmclaw tasks handoffs` expose the workflow for scripts, while the task sheet can copy, open, or save packets.

### v1.9.9 Highlights

Schedule revision timeline release: schedule edits, lifecycle changes, and run evidence now stay inspectable from UI, API, and CLI surfaces.

- **Schedule history ledger.** Schedules now carry a bounded revision history for create, update, archive, restore, skipped, failed, and run-started events.
- **History console.** The Schedule Console adds a searchable History tab with revision badges, actor labels, and before/after change summaries.
- **API and CLI access.** `GET /api/schedules/:id/history` and `swarmclaw schedules history <id>` expose the same timeline for scripts and operator audits.
- **Runtime evidence.** Manual runs and scheduler-fired runs append history entries, while storage normalization caps old entries and keeps legacy schedules compatible.

### v1.9.8 Highlights

Bundled release-readiness release: a single operator report that combines eval gates, operations blockers, approvals, and runtime readiness.

- **Release readiness report.** `/api/quality/release-readiness` returns a scored ready/warning/blocked report built from eval regression gates and Operations Pulse evidence.
- **Quality Center ship gate.** The Quality overview now shows readiness score, blockers, warnings, checks, and next actions before operators cut a release.
- **CLI readiness checks.** `swarmclaw operations readiness` exposes the same report for scripts and CI.
- **Browser coverage.** The e2e smoke now verifies the release-readiness panel on `/quality`.

*(README truncated for display. [Read the full README on GitHub](https://github.com/swarmclawai/swarmclaw)).*
