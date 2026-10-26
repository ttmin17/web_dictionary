---
slug: hkuds-nanobot
name: nanobot
tagline: Ultra-lightweight, open-source, self-hosted personal AI agent framework
  in Python with WebUI, tools, memory, MCP, multi-agent workflows, automation, a
summary: 🐈 nanobot is an ultra-lightweight, open-source, self-hosted personal
  AI agent framework written in Python. Use it in a browser, terminal, or chat
  app to work with files, remember preferences, and schedule tasks. Conn...
categories:
  - productivity-ops
tags:
  - agent-framework
  - ai-agent
  - ai-agents
  - chatbot
status: active
quality_percentile: 98
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: HKUDS/nanobot
  official_vendor: false
  license: MIT
signals:
  stars: 49357
  last_commit: 2026-10-26T07:23:55Z
  stars_delta_7d: 191
  stars_growth_pct: 0.4
  trending_score: 191.74
  rank_current: 36
  rank_delta: -21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 48838
    - 48993
    - 49166
    - 49357
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: HKUDS/nanobot
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:38:03.334Z
  truncated: true
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install nanobot-ai
  runtime: python
  execution_mode: hybrid
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - nanobot-ai
    env_vars: []
    confidence: manifest
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./images/readme-cover-dark.svg">
  <img alt="nanobot README cover" src="https://raw.githubusercontent.com/HKUDS/nanobot/main/images/readme-cover-light.svg">
</picture>

<div align="center">
  <p>
    <a href="https://nanobot.wiki/docs/latest/getting-started/nanobot-overview">English</a> |
    <a href="https://nanobot.wiki/cn/docs/latest/getting-started/nanobot-overview">简体中文</a> |
    <a href="https://nanobot.wiki/zh-Hant/docs/latest/getting-started/nanobot-overview">繁體中文</a> |
    <a href="https://nanobot.wiki/es/docs/latest/getting-started/nanobot-overview">Español</a> |
    <a href="https://nanobot.wiki/fr/docs/latest/getting-started/nanobot-overview">Français</a> |
    <a href="https://nanobot.wiki/id/docs/latest/getting-started/nanobot-overview">Bahasa Indonesia</a> |
    <a href="https://nanobot.wiki/ja/docs/latest/getting-started/nanobot-overview">日本語</a> |
    <a href="https://nanobot.wiki/ko/docs/latest/getting-started/nanobot-overview">한국어</a> |
    <a href="https://nanobot.wiki/ru/docs/latest/getting-started/nanobot-overview">Русский</a> |
    <a href="https://nanobot.wiki/vi/docs/latest/getting-started/nanobot-overview">Tiếng Việt</a>
  </p>
  <p>
    <a href="https://github.com/HKUDS/nanobot"><img src="https://img.shields.io/github/stars/HKUDS/nanobot?style=flat&logo=github" alt="GitHub stars"></a>
    <a href="https://pypi.org/project/nanobot-ai/"><img src="https://img.shields.io/pypi/v/nanobot-ai" alt="PyPI version"></a>
    <a href="https://pepy.tech/project/nanobot-ai"><img src="https://static.pepy.tech/badge/nanobot-ai" alt="PyPI downloads"></a>
    <a href="https://github.com/HKUDS/nanobot/actions/workflows/ci.yml"><img src="https://github.com/HKUDS/nanobot/actions/workflows/ci.yml/badge.svg?branch=main" alt="Test Suite"></a>
    <a href="https://pypi.org/project/nanobot-ai/"><img src="https://img.shields.io/badge/python-%3E%3D3.11-blue" alt="Python 3.11 or newer"></a>
    <a href="https://github.com/HKUDS/nanobot/blob/main/LICENSE"><img src="https://img.shields.io/github/license/HKUDS/nanobot" alt="MIT License"></a>
    <a href="https://nanobot.wiki/docs/latest/getting-started/nanobot-overview"><img src="https://img.shields.io/badge/docs-nanobot.wiki-blue" alt="nanobot documentation"></a>
  </p>
  <p>
    <a href="https://discord.gg/MnCvHqpUGB">Discord</a> ·
    <a href="https://x.com/nanobot_project">X</a> ·
    <a href="https://github.com/HKUDS/nanobot/blob/main/COMMUNICATION.md">WeChat / Feishu</a>
  </p>
</div>

# nanobot

🐈 **nanobot** is an ultra-lightweight, open-source, self-hosted personal AI agent framework written in Python. Use it in a browser, terminal, or chat app to work with files, remember preferences, and schedule tasks. Connect a supported model provider or local model server to supply the AI.

## Start Here

| You want to... | Go to |
|---|---|
| Install nanobot with no terminal/config background | [Start Without Technical Background](https://github.com/HKUDS/nanobot/blob/main/docs/start-without-technical-background.md) |
| Install quickly and get your first reply | [Install](#-install) and [Quick Start](#-quick-start) |
| Open the bundled browser UI | [WebUI](#-webui) |
| Connect Telegram, Discord, WeChat, Slack, Email, Mattermost, Linear, or another channel | [Chat app guide](https://github.com/HKUDS/nanobot/blob/main/docs/guides/chat-app-ai-agent.md) |
| Configure providers, fallback models, Langfuse, MCP, web tools, or security | [Docs](https://github.com/HKUDS/nanobot/blob/main/docs/README.md) and [Configuration](https://github.com/HKUDS/nanobot/blob/main/docs/configuration.md) |
| Develop the browser UI | [Install current source](#-install), then [WebUI development](https://github.com/HKUDS/nanobot/blob/main/webui/README.md) and [Contributing](https://github.com/HKUDS/nanobot/blob/main/CONTRIBUTING.md) |
| Integrate from Python or HTTP | [Python SDK](https://github.com/HKUDS/nanobot/blob/main/docs/python-sdk.md) or [Agent API](https://github.com/HKUDS/nanobot/blob/main/docs/openai-api.md) |
| Understand or extend the internals | [Architecture](https://github.com/HKUDS/nanobot/blob/main/docs/architecture.md), [Contributing](https://github.com/HKUDS/nanobot/blob/main/CONTRIBUTING.md), and [Provider extensions](https://github.com/HKUDS/nanobot/blob/main/docs/development.md) |
| Deploy to the cloud or keep nanobot running as a service | [Deployment](https://github.com/HKUDS/nanobot/blob/main/docs/deployment.md) |

## What can nanobot do?

nanobot can:

- run in a browser WebUI or terminal
- connect to Telegram, Discord, Slack, WeChat, Email, Mattermost, Linear, and other channels
- read PDF, Word (`.docx`), Excel (`.xlsx`), and PowerPoint (`.pptx`) files with built-in file tools, for tasks such as summarizing reports
- use shell, web search/fetch, MCP integrations, cron, image generation, and multi-agent delegation
- keep session history and long-term memory through [Dream](https://github.com/HKUDS/nanobot/blob/main/docs/memory.md#save-and-check-a-preference)
- run [long-horizon goals](https://github.com/HKUDS/nanobot/blob/main/docs/guides/long-running-ai-agent.md) and [scheduled automations](https://github.com/HKUDS/nanobot/blob/main/docs/automations.md)
- expose a Python SDK and OpenAI-compatible API for integrations
- deploy as a long-running local or server-side agent gateway

## 💡 Why nanobot

- **Persistent workflows**: keep saved conversations, long-term memory, and task results for later work.
- **Chat-native reach**: WebUI, API, Telegram, Feishu, Slack, Discord, Teams, email, Mattermost, and Linear.
- **Model freedom**: OpenAI-compatible APIs, local LLMs, image generation, search, and fallbacks.
- **Small core**: readable internals with MCP, memory, deployment, and automation built in.
- **Own your stack**: inspect, customize, self-host, and extend without a giant platform.

## 📦 Install

You need **Python 3.11 or newer** and access to a [supported model provider or local model server](https://github.com/HKUDS/nanobot/blob/main/docs/providers.md). Model fees or local hardware requirements depend on the service you choose; nanobot does not supply a model account.

Choose the **stable release** for everyday use or **current source** for development and the latest features. This README describes current source; [published documentation](https://nanobot.wiki/docs/latest/getting-started/nanobot-overview) covers the released version.

New to terminals or model credentials? Follow [Start Without Technical Background](https://github.com/HKUDS/nanobot/blob/main/docs/start-without-technical-background.md). Updating an existing instance? Follow [updates and recovery](https://github.com/HKUDS/nanobot/blob/main/docs/updating.md) for your installation method, backup steps and restart checks.

| Track | Install with | Update with | What runs |
|---|---|---|---|
| Stable | installer, `uv`, or pip | managed installer: WebUI update; other installs: original package tool | one released Python/WebUI/TUI version |
| Current source | editable Git checkout | `git pull --ff-only` + editable dependency sync | Python, WebUI, and TUI from that checkout |

**Stable release: automatic setup (recommended)**

The installer chooses an isolated Python environment and opens setup for you. The two commands below are the same installation method for different operating systems; run only the one for your system.

<details>
<summary>macOS / Linux</summary>

```bash
curl -fsSL https://raw.githubusercontent.com/HKUDS/nanobot/main/scripts/install.sh | sh
```

</details>

<details>
<summary>Windows PowerShell</summary>

```powershell
irm https://raw.githubusercontent.com/HKUDS/nanobot/main/scripts/install.ps1 | iex
```

</details>

<details>
<summary>Installer details, preview, and script review</summary>

The default command installs or upgrades the stable PyPI release. Fresh installations use a dedicated environment under `~/.nanobot/venv`. On a fresh local desktop it opens the WebUI for model setup. That gateway keeps running after the browser or terminal closes; use the printed `gateway stop` command to stop it. SSH, headless, existing-config and older-release installs use terminal setup.

Existing installations keep their package manager, extras and constraints. An active ordinary venv remains an explicit target, not an installer-managed environment. The installer avoids system-wide pip and prints the command to reuse if `nanobot` is not on `PATH`.

To preview the plan without changing your environment, pass `--dry-run`.

```bash
curl -fsSL https://raw.githubusercontent.com/HKUDS/nanobot/main/scripts/install.sh | sh -s -- --dry-run
```

```powershell
& ([scriptblock]::Create((irm https://raw.githubusercontent.com/HKUDS/nanobot/main/scripts/install.ps1))) --dry-run
```

If you prefer to inspect the script first, open [`scripts/install.sh`](https://github.com/HKUDS/nanobot/blob/main/scripts/install.sh) or [`scripts/install.ps1`](https://github.com/HKUDS/nanobot/blob/main/scripts/install.ps1).

</details>

<details>
<summary>Already use uv or pip? Install the stable package yourself</summary>

Use this instead of the recommended installer when you already manage your own Python environment. These commands install the same stable `nanobot-ai` package; they do not launch setup.

**uv: isolated CLI installation**

```bash
uv tool install nanobot-ai
```

**pip: activate your virtual environment first**

```bash
python -m pip install nanobot-ai
```

Then run `nanobot webui` for browser setup, or `nanobot onboard --wizard` for terminal-only setup. For the [Python SDK](https://github.com/HKUDS/nanobot/blob/main/docs/python-sdk.md), install `nanobot-ai` in your application's virtual environment so the application can import it; a separate `uv tool` environment does not make the SDK importable there.

If pip reports `externally-managed-environment`, use the recommended installer, `uv tool install nanobot-ai`, `pipx install nanobot-ai`, or an activated virtual environment. Upgrade with the same method; for uv use `uv tool upgrade nanobot-ai`, and for pip use `python -m pip install -U nanobot-ai`.

</details>

**Current source: development checkout**

<details>
<summary>Install current source with Git and Bun</summary>

Clone the repository and install it in editable mode. A source install requires Git and [Bun](https://bun.sh/); Bun runs the matching TUI directly from the checkout instead of downloading an older release binary.

```bash
git clone https://github.com/HKUDS/nanobot.git
cd nanobot
python -m venv .venv
```

Activate it with `source .venv/bin/activate` on macOS/Linux or `.venv\Scripts\Activate.ps1` in Windows PowerShell, then run:

```bash
python -m pip install -e .
```

After that, the normal commands are identical to a stable install. `nanobot` runs the TUI from this checkout, and `nanobot webui` rebuilds stale frontend assets automatically. After stopping the old instance, `git pull --ff-only` updates the Python, TUI, and WebUI source together; rerun `python -m pip install -e .` when Python dependencies change, then restart the instance. Contributors should also read [`CONTRIBUTING.md`](https://github.com/HKUDS/nanobot/blob/main/CONTRIBUTING.md).

</details>

<details>
<summary>Supported platforms, bundled UIs, and release tracks</summary>

Published packages include the WebUI, and supported platform wheels also include the native TUI. A source-distribution install can fetch a checksummed, version-matched TUI archive—with its licenses, notices, corresponding application source, source offer, and relinking instructions—on first use.

Platform wheels include both the WebUI and the native terminal UI: macOS 13+ (Apple Silicon and Intel), glibc 2.17+ Linux (ARM64 and x64), and Windows x64. The x64 runtime requires SSE4.2. Pip selects the matching wheel; opening the TUI does not need a separate GitHub download or Bun installation. A source-distribution install on a supported target can use the matching checksummed GitHub release archive. On other platforms, use `nanobot --classic` or the WebUI.

> [!IMPORTANT]
>
> If you want the newest features and experiments, install from source.
>
> If you want the most stable day-to-day experience, install from PyPI or with `uv`.

Pick **one** install method:

| Track | Install with | Update with | What runs |
|---|---|---|---|
| Stable | installer, `uv`, or pip | [same installation method](https://github.com/HKUDS/nanobot/blob/main/docs/quick-start.md#updating) | one released Python/WebUI/TUI version |
| Current source | editable Git checkout | `git pull --ff-only` + editable dependency sync | Python, WebUI, and TUI from that checkout |

</details>

<details>
<summary>Verify the installation or locate the nanobot command</summary>

Verify the install:

```bash
nanobot --version
```

If `nanobot` is not on `PATH`, reuse the installer's printed command or run the Python executable from the existing installation with `-I -m nanobot`. For uv/pipx, locate that environment with the original manager. Do not use a temporary tool environment to manage an existing installation.

</details>

After installation, continue with [Quick Start](#-quick-start). Use the exact command printed by the installer if `nanobot` is not on `PATH`.

## 🚀 Quick Start

**Open nanobot in your browser**

If the installer already opened the WebUI, continue there. Otherwise run:

```bash
nanobot webui
```

Keep the launcher terminal open while using the browser. It starts or joins the shared local gateway and binds the first-run WebUI to localhost. If the browser does not open, copy the complete login link printed in the terminal, including everything after `#`; keep this credential private. For SSH or a headless host, use the remote-browser or terminal-only instructions below.

**Your first three steps**

1. Open **Settings → Models** and save a provider/model preset with your credential or supported sign-in. See [model setup](https://github.com/HKUDS/nanobot/blob/main/docs/quick-start.md#2-configure-your-model) if you need the full steps.
2. Start a new topic and send `Hello!` to verify the model connection.
3. To try file work, put a copy of `notes.txt` in a practice folder, select that folder and **Restricted** access, and ask: "Read notes.txt and write a short summary to summary.md." Open `summary.md` in that folder to check the result. See [Your first file task](https://github.com/HKUDS/nanobot/blob/main/docs/start-without-technical-background.md#your-first-file-task).

A normal reply verifies the provider/model and browser connection. The file task separately checks the selected project and its file permissions. Attaching a file sends it to the conversation; it does not change the selected project folder.

Then describe your next goal in the same chat, for example: "I am already using the WebUI. Help me connect Telegram and allow only my account." An enabled `nanobot-document` skill can consult the documentation bundled with your installation; see [Continue with nanobot](https://github.com/HKUDS/nanobot/blob/main/docs/quick-start.md#continue-with-nanobot) for examples, explicit invocation, and availability.

<details>
<summary>Open the WebUI on a remote server through SSH</summary>

After installing nanobot on the server, start its WebUI without opening a server-side browser:

```bash
nanobot webui --no-open
```

Keep that server terminal running. In a second terminal on your own computer, forward the default WebUI port through SSH:

```bash
ssh -N -L 127.0.0.1:8765:127.0.0.1:8765 user@SERVER
```

Replace `user@SERVER` with your SSH login and leave the tunnel open. In your local browser, open the complete login link printed by the server launcher, preserving its `#` fragment. It uses `http://127.0.0.1:8765`, which now reaches the server through the tunnel. Complete **Settings → Models** and send `Hello!`. If local port `8765` is occupied, use another local port in the tunnel and change only the port in the browser link. Keep the server listener on localhost. For Docker, public endpoints, or service management, see [Deployment](https://github.com/HKUDS/nanobot/blob/main/docs/deployment.md).

</details>

<details>
<summary>Terminal-only setup, one-shot checks, and the TUI</summary>

If a model is not configured yet, use the terminal wizard:

```bash
nanobot onboard --wizard
```

Check one reply without opening the browser:

```bash
nanobot -m "Hello!"
```

For interactive work, open the terminal client:

```bash
nanobot
```

The native TUI uses the launch directory as its project workspace and shares saved conversations and the local gateway with the WebUI. The explicit `nanobot agent` form remains available for compatibility.

- Type `/` to discover commands, `/sessions` to switch conversations, or `@` to mention an app, MCP server, or saved session.
- Paste clipboard images with `Ctrl+V` or `Alt+V`, and use `$` to complete skill references.
- Use `/diff` to inspect file changes, `/context` to inspect session context, or `/branch` to continue from a completed reply in a new session.
- Press `Enter` to send. While nanobot is working, `Enter` sends now and `Tab` sends after the current response. Press `Shift+Enter` to add a newline (`Ctrl+J` works in terminals that cannot distinguish modified Enter keys).
- Use `/detach` to promote the gateway to background mode and close the TUI while work continues.

Each launch starts a new session by default. Use `--session` to resume one and `--workspace` to choose another project workspace. See the [CLI reference](https://github.com/HKUDS/nanobot/blob/main/docs/cli-reference.md#agent-cli) for session branching, diffs, history, shortcuts, gateway lifecycle, and compatibility options.

</details>

<details>
<summary>Save and check a preference</summary>

State a specific preference in your chat, for example: "For release notes, use concise bullet points." To consolidate it now, send `/compact` and then `/dream`, waiting for each to finish, and review `/dream-log`. Check the actual changes to `USER.md` or `memory/MEMORY.md` in the configured agent workspace, then test reuse in a new topic in the same instance. Dream may decide that no durable change is needed; a conversational acknowledgement alone does not prove the preference was saved. See [Save and Check a Preference](https://github.com/HKUDS/nanobot/blob/main/docs/memory.md#save-and-check-a-preference) for file access, correction, and restoration steps.

</details>

<details>
<summary>Start and stop a sustained goal</summary>

Use a regular topic for a bounded objective with a clear completion condition, for example:

```text
/goal Review this project's tests and list the smallest missing test case.
```

The goal lets nanobot continue work across model turns while the gateway runs; a scheduled automation instead starts a turn at specified times. Use `/stop` to interrupt the current work, and ask nanobot to cancel the goal if you want to abandon it. Keep the gateway running for unattended work using the background or service options below.

After a gateway restart, reopen the original topic and review saved results before explicitly continuing any interrupted work. Recovery does not blindly replay uncertain tool actions. See the [long-running agent guide](https://github.com/HKUDS/nanobot/blob/main/docs/guides/long-running-ai-agent.md) for starting conditions and related automation options.

</details>

<details>
<summary>Keep the gateway running after closing interactive clients</summary>

After model setup, keep channels and automations running when interactive launchers close:

```bash
nanobot gateway --background
```

This starts or promotes the shared gateway to persistent background mode. Fresh official-installer environments already use that lifetime when you open `nanobot webui`; other Python installations can explicitly use `nanobot webui --detach`. Channels and automations remain active after local clients exit. Complete first-time model setup in the WebUI, and use the gateway commands below to manage the same instance.

From the TUI, `/detach` does the same before closing that client. Background mode does not configure startup after a machine reboot or restart after a crash; use an [OS-managed service](https://github.com/HKUDS/nanobot/blob/main/docs/deployment.md#switch-an-existing-gateway-to-a-service) for that. Interrupted subagent tasks are not automatically relaunched after a restart, and missed scheduled times are not replayed; see [subagent recovery](https://github.com/HKUDS/nanobot/blob/main/docs/concepts.md#subagents) and [automation delivery](https://github.com/HKUDS/nanobot/blob/main/docs/automations.md#delivery-and-reliability).

Manage the background gateway with:

```bash
nanobot gateway status
nanobot gateway logs
nanobot gateway restart
nanobot gateway stop
```

To reopen the browser, run `nanobot webui` against the same instance and use its complete printed login link.

</details>

<details>
<summary>Run a configured gateway directly</summary>

Use this once a model is configured and you want to run the gateway directly in the current terminal:

```bash
nanobot gateway
```

It skips guided WebUI setup and browser opening. The WebUI remains available when its channel is configured. Use `nanobot gateway --background` for a detached process, or follow [Deployment](https://github.com/HKUDS/nanobot/blob/main/docs/deployment.md) for startup and supervision by the operating system.

</details>

<details>
<summary>Read task guides or look up configuration details</summary>

- Model/provider recipes: [Provider Cookbook](https://github.com/HKUDS/nanobot/blob/main/docs/provider-cookbook.md) and [Providers and Models](https://github.com/HKUDS/nanobot/blob/main/docs/providers.md).
- Local models: [Ollama](https://github.com/HKUDS/nanobot/blob/main/docs/providers.md#ollama), [vLLM or another OpenAI-compatible server](https://github.com/HKUDS/nanobot/blob/main/docs/providers.md#vllm-or-other-local-openai-compatible-server).
- Chat platforms: [Chat app guide](https://github.com/HKUDS/nanobot/blob/main/docs/guides/chat-app-ai-agent.md), then the [full channel reference](https://github.com/HKUDS/nanobot/blob/main/docs/chat-apps.md).
- Exact settings for web search, MCP, voice, image generation, and security: [Configuration](https://github.com/HKUDS/nanobot/blob/main/docs/configuration.md).
- Manual JSON and other setup paths: [Install and Quick Start](https://github.com/HKUDS/nanobot/blob/main/docs/quick-start.md).
- Failures after setup: [Troubleshooting](https://github.com/HKUDS/nanobot/blob/main/docs/troubleshooting.md).

</details>

If nanobot worked for you, a star on GitHub is the simplest way to support the project.

<a id="deploy-to-render"></a>

## ☁️ Deploy

**Render — one click**

Deploy nanobot's gateway and bundled WebUI from the repository's ready-to-use Blueprint:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/HKUDS/nanobot)

Render will ask for `ANTHROPIC_API_KEY` and a private `NANOBOT_WEB_TOKEN`, then provision persistent storage for sessions, memory, and WebUI history. Persistent disks require a paid Render service.

**Self-host**

Prefer your own infrastructure? Follow the [deployment guide](https://github.com/HKUDS/nanobot/blob/main/docs/deployment.md) for Docker, Docker Compose, Linux services, and macOS LaunchAgent setup.

## 🌐 WebUI

The WebUI ships **inside the published wheel** with no separate frontend build. It is the browser workbench for persistent topics, temporary chats, visible agent activity, workspace controls, Apps, Skills, Automations, and settings. Start it with `nanobot webui`. WebUI access grants administration of the same agent instance; share it only with trusted operators. See [Sharing access](https://github.com/HKUDS/nanobot/blob/main/docs/webui.md#sharing-access).

The screenshots below use example conversations, illustrative token counts, and paused schedules.

<p align="center">
  <a href="https://github.com/HKUDS/nanobot/blob/main/images/nanobot_webui-source.png">
    <img src="https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot_webui.png" alt="nanobot WebUI new-topic screen with the hero composer, workspace access, project, and model controls" width="900">
  </a>
</p>

Use it to:

- keep separate topics for different tasks and projects;
- use temporary chats when a conversation should not be saved to history or memory;
- inspect reasoning, tool calls, file edits, diffs, command output, and generated artifacts;
- switch models and workspaces without leaving the conversation;
- configure models in **Settings**, connect chat platforms in **Channels**, and manage Apps, Skills, and Automations.

### Keep related work side by side

Group up to four conversations and arrange them in columns, rows, a grid, or a main pane with supporting panes. Each topic keeps its own history. Select another topic from the `@` menu, or drag it into the composer, to let the agent read its context and coordinate work across sessions.

<p align="center">
  <img src="https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot-workbench.png" alt="Three conversations in one workbench: a release plan beside quick-start work and documentation review" width="900">
</p>

Choose a project, access mode, and model for each task. Topics separate conversation history; project folders select where file work happens. Neither creates separate long-term memory: one instance shares its agent profile, memory, and skills across projects. Use [separate instances](https://github.com/HKUDS/nanobot/blob/main/docs/multiple-instances.md) when client data or preferences must stay isolated. [Explore topics and panes →](https://github.com/HKUDS/nanobot/blob/main/docs/webui.md#conversation-groups-and-panes)

### Inspect the work and its context

Expand agent activity to see reasoning, tool calls, and file changes. Switch **Settings → Appearance → File edit display** to **Diff** for inline patches. The composer's context indicator shows the current context size, input tokens by round, and cache reuse when the provider reports it.

<p align="center">
  <img src="https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot-context.png" alt="An expanded file-edit diff above the context usage chart, with input tokens and cache reuse shown across four rounds" width="900">
</p>

Context compaction also appears in the conversation timeline. [Explore activity and context →](https://github.com/HKUDS/nanobot/blob/main/docs/webui.md#activity-and-context-usage)

### Bring your tools into the conversation

Use Apps to connect MCP servers, enable Agent Plugins, and manage local CLI App adapters. Add a preset or a custom server, then attach an available tool with `@`. Skills provide reusable instructions. **Settings** holds model, voice, image, and web setup; **Channels** handles chat-platform connections.

<p align="center">
  <img src="https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot-apps.png" alt="The Apps MCP catalog with integration presets and controls to add or import a custom MCP server" width="900">
</p>

[Explore Apps →](https://github.com/HKUDS/nanobot/blob/main/docs/webui.md#apps) · [Discover Skills →](https://github.com/HKUDS/nanobot/blob/main/docs/webui.md#skills) · [Connect chat apps →](https://github.com/HKUDS/nanobot/blob/main/docs/guides/chat-app-ai-agent.md)

Before connecting a personal bot to shared channels, check the platform's DM pairing/allowlist and group-access policies separately. Approving a private sender does not restrict group access on every platform; see the [channel reference](https://github.com/HKUDS/nanobot/blob/main/docs/chat-apps.md).

### Let recurring work run on a schedule

Ask for an automation from the topic that should receive its results. Use **Tasks** to review and manage schedules, or **Calendar** to scan completed and upcoming runs by date. Local triggers let a script start a saved task on demand.

<p align="center">
  <img src="https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot-automations.png" alt="The Automations calendar with completed and upcoming recurring tasks arranged by date" width="900">
</p>

Keep the gateway running and the host awake for scheduled delivery. Missed scheduled times are not replayed after a gateway restart. See [delivery and recovery rules](https://github.com/HKUDS/nanobot/blob/main/docs/automations.md#delivery-and-reliability). [Explore Automations →](https://github.com/HKUDS/nanobot/blob/main/docs/automations.md)

For a conversation that should stay out of saved topic history and long-term memory, use [Temporary chat](https://github.com/HKUDS/nanobot/blob/main/docs/webui.md#temporary-chats) from the header. Temporary chats end when the connection closes and use the default workspace in Restricted mode. Requests still go to the configured model provider, and files created by tools remain after the chat closes.

See the [WebUI guide](https://github.com/HKUDS/nanobot/blob/main/docs/webui.md) for LAN access, background operation, workspace controls, and the full feature tour. Working on the frontend itself? Use [`webui/README.md`](https://github.com/HKUDS/nanobot/blob/main/webui/README.md).

## Architecture

<p align="center">
  <img src="https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot_arch.png" alt="nanobot architecture" width="800">
</p>

The Python gateway owns agent execution, sessions, tools, memory, and security policy for the WebUI, TUI, and chat apps. The clients share that runtime; the core agent loop builds context, calls the model, executes requested tools, and returns the result. Memory, skills, channels, and MCP integrations extend that loop.

The [Python SDK](https://github.com/HKUDS/nanobot/blob/main/docs/python-sdk.md) embeds the agent runtime in your application process. The [OpenAI-compatible API](https://github.com/HKUDS/nanobot/blob/main/docs/openai-api.md) starts a separate HTTP service for `/v1/chat/completions`: each request contains one user message, history is managed by the server, and the model comes from configuration. Responses return to the HTTP client; that service does not deliver tool messages to chat apps.

See [Architecture](https://github.com/HKUDS/nanobot/blob/main/docs/architecture.md) for source ownership and extension points.

## Docs

Browse the [repo docs](https://github.com/HKUDS/nanobot/blob/main/docs/README.md) for current source documentation, or visit [nanobot.wiki](https://nanobot.wiki/docs/latest/getting-started/nanobot-overview) for the stable release. The [task guide index](https://github.com/HKUDS/nanobot/blob/main/docs/guides/README.md) groups walkthroughs by outcome.

- Get started: [Beginner walkthrough](https://github.com/HKUDS/nanobot/blob/main/docs/start-without-technical-background.md) or [Install and Quick Start](https://github.com/HKUDS/nanobot/blob/main/docs/quick-start.md).
- Choose and configure a model: [Providers and Models](https://github.com/HKUDS/nanobot/blob/main/docs/providers.md) and [Provider Cookbook](https://github.com/HKUDS/nanobot/blob/main/docs/provider-cookbook.md).
- Connect a chat app: [Chat App AI Agent](https://github.com/HKUDS/nanobot/blob/main/docs/guides/chat-app-ai-agent.md) and [channel reference](https://github.com/HKUDS/nanobot/blob/main/docs/chat-apps.md).
- Schedule or deploy work: [Automations](https://github.com/HKUDS/nanobot/blob/main/docs/automations.md) and [Deployment](https://github.com/HKUDS/nanobot/blob/main/docs/deployment.md).
- Integrate from code: [Python SDK](https://github.com/HKUDS/nanobot/blob/main/docs/python-sdk.md) and [OpenAI-Compatible API](https://github.com/HKUDS/nanobot/blob/main/docs/openai-api.md).
- Look up runtime concepts or exact settings: [Concepts](https://github.com/HKUDS/nanobot/blob/main/docs/concepts.md) and [Configuration](https://github.com/HKUDS/nanobot/blob/main/docs/configuration.md).
- Diagnose a failure: [Troubleshooting](https://github.com/HKUDS/nanobot/blob/main/docs/troubleshooting.md).
- Extend the core: [Architecture](https://github.com/HKUDS/nanobot/blob/main/docs/architecture.md) and [contribution workflow](https://github.com/HKUDS/nanobot/blob/main/CONTRIBUTING.md).

## Releases

**Latest release: [v0.3.5](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5)**

v0.3.5 brings the workbench to the terminal and makes conversations easier to continue across the browser, terminal, and chat apps.

- Use the native terminal workbench with the same gateway and saved conversations as the WebUI.
- Arrange up to four browser conversations side by side, mention saved sessions, or open a temporary chat.
- Inspect per-round context usage and compaction progress, with more durable history and recovery.
- Discover Skills, connect Apps, and manage scheduled work through expanded WebUI flows.

[Read the v0.3.5 release notes and upgrade notes](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5)

## Recent Updates

- **2026-09-19** 🔎 Searchable provider setup, consistent provider identities, and smoother Linear onboarding.
- **2026-09-18** ♻️ Clearer recovery for interrupted work and Discord reply-context support.
- **2026-09-16** 📦 Platform wheels bundle the version-matched native terminal UI.
- **2026-09-15** 🚀 Released [v0.3.5](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5) with a shared terminal workbench, multi-pane WebUI, and visible context continuity.
- **2026-09-07** 🔌 WeCom media uploads use the SDK API, and CI skips unrelated jobs.

For earlier updates, see the [release archive](https://github.com/HKUDS/nanobot/blob/main/docs/release-archive.md) or [GitHub releases](https://github.com/HKUDS/nanobot/releases).

## Open Source Partners

<p align="center">
  <a href="https://platform.kimi.com?aff=nanobot"><picture><source media="(prefers-color-scheme: dark)" srcset="https://kimi-file.moonshot.cn/prod-chat-kimi/kfs/4/1/2026-06-05/1d8h69mt3v89kkekg24gg"><img alt="Kimi Open Source Friends" height="44" src="https://kimi-file.moonshot.cn/prod-chat-kimi/kfs/4/1/2026-06-05/1d8h69fudcmosb3pipls0"></picture></a>
  <a href="https://platform.minimaxi.com/subscribe/token-plan?code=GILTJpMTqZ&source=link"><img alt="MiniMax" height="40" src="https://mintcdn.com/minimax-zh/1UjvBcdoC6r0UeyA/logo/light.svg?fit=max&auto=format&n=1UjvBcdoC6r0UeyA&q=85&s=672d724b639b2d88d0702fae329ea4f8"></a>
</p>

## 🤝 Contribute

Use nanobot for a real task, report what broke, and then pick a focused improvement.

- Read [CONTRIBUTING.md](https://github.com/HKUDS/nanobot/blob/main/CONTRIBUTING.md) for the development workflow.
- Browse [open issues](https://github.com/HKUDS/nanobot/issues) for problems to investigate.
- Open a [pull request](https://github.com/HKUDS/nanobot/pulls) for a focused fix or integration.

## Maintainers

<table>
  <tr>
    <td align="center"><a href="https://github.com/re-bin"><img src="https://avatars.githubusercontent.com/u/52506698?v=4&s=80" width="80" height="80" alt="Xubin Ren"><br><strong>Xubin Ren</strong></a><br><a href="https://x.com/xubinrencs"><img src="https://img.shields.io/badge/@xubinrencs-000000?style=flat&logo=x&logoColor=white" alt="Xubin Ren on X"></a></td>
    <td align="center"><a href="https://github.com/chengyongru"><img src="https://avatars.githubusercontent.com/u/61816729?v=4&s=80" width="80" height="80" alt="Yongru Chen"><br><strong>Yongru Chen</strong></a><br><a href="https://x.com/chengyongru"><img src="https://img.shields.io/badge/@chengyongru-000000?style=flat&logo=x&logoColor=white" alt="Yongru Chen on X"></a></td>
  </tr>
</table>

*(README truncated for display. [Read the full README on GitHub](https://github.com/HKUDS/nanobot)).*
