---
slug: nesquena-hermes-webui
name: hermes-webui
tagline: "Hermes WebUI: The best way to use Hermes Agent from the web or from
  your phone!"
summary: Hermes WebUI is a lightweight, dark-themed web app interface in your
  browser for Hermes Agent. Full parity with the CLI experience - everything you
  can do from a terminal, you can do from this UI. No build step, no fr...
categories:
  - domain-research
tags:
  - ai-agents
  - hermes
  - hermes-agent
  - nous-research
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: nesquena/hermes-webui
  official_vendor: false
  license: MIT
signals:
  stars: 19347
  last_commit: 2026-11-02T07:03:29Z
  stars_delta_7d: 157
  stars_growth_pct: 0.8
  trending_score: 158.28
  rank_current: 46
  rank_delta: -3
  velocity_source: snapshot_delta
  sparkline_4w:
    - 19028
    - 19190
    - 19347
language: en
needs_keys: false
prerequisites:
  - multi
readme_source:
  repo: nesquena/hermes-webui
  path: README.md
  branch: master
  fetched_at: 2026-11-02T09:06:58.885Z
  truncated: true
type: agent_tool
tool:
  subcategory: other
  install_command: pip install hermes-webui
  runtime: multi
  execution_mode: local
  has_mcp_support: false
---

# Hermes Web UI
[Hermes Agent](https://hermes-agent.nousresearch.com/) is a sophisticated autonomous agent that lives on your server, accessed via a terminal or messaging apps, that remembers what it learns and gets more capable the longer it runs.

Hermes WebUI is a lightweight, dark-themed web app interface in your browser for [Hermes Agent](https://hermes-agent.nousresearch.com/).
Full parity with the CLI experience - everything you can do from a terminal, you can do from this UI. No build step, no framework, no bundler. Just Python and vanilla JS.

Layout: three-panel. Left sidebar for sessions and navigation, center for chat,
right for workspace file browsing. Model, profile, and workspace controls live in
the **composer footer** — always visible while composing. A circular context ring
shows token usage at a glance. All settings and session tools are in the
**Hermes Control Center** (launcher at the sidebar bottom).

Setup Hermes so you can access it natively on every device:

<img width="1467" height="881" alt="image" src="https://github.com/user-attachments/assets/9a72cdf3-a5b4-45ed-a836-a715ce46287e" />

<table>
  <tr>
    <td width="50%" align="center">
      <img width="2940" height="1848" alt="Light mode with full profile support" src="https://github.com/user-attachments/assets/4ef3a59c-7a66-4705-b4e7-cb9148fe4c47" />
      <br /><sub>Light mode with full profile support</sub>
    </td>
    <td width="50%" align="center">
      <img alt="Customize your settings, configure a password" src="https://github.com/user-attachments/assets/941f3156-21e3-41fd-bcc8-f975d5000cb8" />
      <br /><sub>Customize your settings, configure a password</sub>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="50%" align="center">
      <img alt="Workspace file browser with inline preview" src="https://raw.githubusercontent.com/nesquena/hermes-webui/master/docs/images/ui-workspace.png" />
      <br /><sub>Workspace file browser with inline preview</sub>
    </td>
    <td width="50%" align="center">
      <img alt="Session projects, tags, and tool call cards" src="https://raw.githubusercontent.com/nesquena/hermes-webui/master/docs/images/ui-sessions.png" />
      <br /><sub>Session projects, tags, and tool call cards</sub>
    </td>
  </tr>
</table>

This gives you nearly **1:1 parity with Hermes CLI from a convenient web UI** which you can access securely through an SSH tunnel from your Hermes setup. Single command to start this up, and a single command to SSH tunnel for access on your computer. Every single part of the web UI uses your existing Hermes agent and existing models, without requiring any additional setup.

---

## Contents

[<img width="750" alt="image" src="https://github.com/user-attachments/assets/7e9544a7-ba47-4fc7-8142-1d9d16b17065" />
](https://get-hermes.ai/setup/) 

- [Why Hermes](#why-hermes) — what it is and how it compares
- [Quick start](#quick-start) — clone + `bootstrap.py` / `start.sh` / `ctl.sh`
- [Features](#features) — chat, sessions, workspace, voice, profiles, security, themes, panels, mobile
- [Configuration & access](#configuration--access) — auto-discovery, overrides, remote/Tailscale/phone, manual launch
- [Nix flake/module](#nix-flake-and-nixos-module) — declarative install and service
- [Docker](#docker) — single- and multi-container deploys
- [Running tests](#running-tests)
- [Architecture](#architecture) — backend/frontend layout, state dir
- [Docs](#docs) — the full documentation index
- [Contributors](#contributors)

---

## Why Hermes

Most AI tools reset every session. They don't know who you are, what you worked on, or what
conventions your project follows. You re-explain yourself every time.

Hermes retains context across sessions, runs scheduled jobs while you're offline, and gets
smarter about your environment the longer it runs. It uses your existing Hermes agent setup,
your existing models, and requires no additional configuration to start.

What makes it different from other agentic tools:

- **Persistent memory** — user profile, agent notes, and a skills system that saves reusable
  procedures; Hermes learns your environment and does not have to relearn it
- **Self-hosted scheduling** — cron jobs that fire while you're offline and deliver results to
  Telegram, Discord, Slack, Signal, email, and more
- **10+ messaging platforms** — the same agent available in the terminal is reachable from your phone
- **Self-improving skills** — Hermes writes and saves its own skills automatically from experience;
  no marketplace to browse, no plugins to install
- **Provider-agnostic** — OpenAI, Anthropic, Google, DeepSeek, OpenRouter, and more
- **Orchestrates other agents** — can spawn Claude Code or Codex for heavy coding tasks and bring
  the results back into its own memory
- **Self-hosted** — your conversations, your memory, your hardware

**vs. the field** *(landscape is actively shifting — see [docs/why-hermes.md](https://github.com/nesquena/hermes-webui/blob/master/docs/why-hermes.md) for the full breakdown)*:

| | OpenClaw | Claude Code | Codex CLI | OpenCode | Hermes |
|---|---|---|---|---|---|
| Persistent memory (auto) | Yes | Partial† | Partial | Partial | Yes |
| Scheduled jobs (self-hosted) | Yes | No‡ | No | No | Yes |
| Messaging app access | Yes (15+ platforms) | Partial (Telegram/Discord preview) | No | No | Yes (10+) |
| Web UI (self-hosted) | Dashboard only | No | No | Yes | Yes |
| Self-improving skills | Partial | No | No | No | Yes |
| Python / ML ecosystem | No (Node.js) | No | No | No | Yes |
| Provider-agnostic | Yes | No (Claude only) | Yes | Yes | Yes |
| Open source | Yes (MIT) | No | Yes | Yes | Yes |

† Claude Code has CLAUDE.md / MEMORY.md project context and rolling auto-memory, but not full automatic cross-session recall  
‡ Claude Code has cloud-managed scheduling (Anthropic infrastructure) and session-scoped `/loop`; no self-hosted cron

**The closest competitor is OpenClaw** — both are always-on, self-hosted, open-source agents
with memory, cron, and messaging. The key differences: Hermes writes and saves its own skills
automatically as a core behavior (OpenClaw's skill system centers on a community marketplace);
Hermes is more stable across updates (OpenClaw has documented release regressions and ClawHub
has had security incidents involving malicious skills); and Hermes runs natively in the Python
ecosystem. See [docs/why-hermes.md](https://github.com/nesquena/hermes-webui/blob/master/docs/why-hermes.md) for the full side-by-side.

---

## Quick start

Run the repo bootstrap:

```bash
git clone https://github.com/nesquena/hermes-webui.git hermes-webui
cd hermes-webui
python3 bootstrap.py
```

Or keep using the shell launcher:

```bash
./start.sh
```

For self-hosted VM or homelab installs, `ctl.sh` wraps the common daemon lifecycle commands without requiring `fuser` or `pkill`:

```bash
./ctl.sh start              # background daemon, PID at ~/.hermes/webui.pid
./ctl.sh status             # PID, uptime, bound host/port, log path, /health
./ctl.sh logs --lines 100   # tail ~/.hermes/webui.log
./ctl.sh restart
./ctl.sh stop
```

`ctl.sh start` runs the bootstrap in foreground/no-browser mode behind the daemon wrapper, writes logs to `~/.hermes/webui.log`, and respects `.env` plus inline overrides such as `HERMES_WEBUI_HOST=0.0.0.0 ./ctl.sh start`.

> **Stopping the server.** Each launch method has its own stop path because only `ctl.sh start` writes a PID file (`~/.hermes/webui.pid`):
>
> | Launch method | How to stop |
> |---|---|
> | `python3 bootstrap.py` | **Ctrl-C** in the terminal (runs in the foreground) |
> | `./ctl.sh start` | `./ctl.sh stop` (sends SIGTERM, waits, then SIGKILL) |
> | Detached `bootstrap.py` (no `--foreground`) or `./start.sh` | Find the PID via `lsof -i :8787` (or `ss -tlnp`) and `kill` it |
>
> `./ctl.sh stop` cannot stop a server launched by `bootstrap.py` or `start.sh` directly — it only manages processes it started itself.

> **How chat runs by default.** WebUI runs the Hermes agent in-process, reading
> your `HERMES_HOME` config directly. It does not connect to an external
> Hermes/agent OpenAI-compatible API server to run chat. `HERMES_API_URL` is only
> read by the Tasks/cron health probe and does not route chat.
>
> Two options if you run an external endpoint:
>
> 1. **Use its models as a chat provider** (supported today): add it in
>    **Settings → Providers** as a custom OpenAI-compatible provider with
>    `base_url = http://127.0.0.1:8642/v1` and your bearer token.
> 2. **Route chat through a Hermes Gateway API server** (supported today via
>    `HERMES_WEBUI_CHAT_BACKEND=gateway`): see [`docs/advanced-chat-setup.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/advanced-chat-setup.md).
>    Full agent-loop delegation is not yet shipped; tracked in [#1925](https://github.com/nesquena/hermes-webui/issues/1925).

### Advanced: dynamic recall prefill & Gateway-backed chat

Two optional, self-hosted-deployment features — attaching dynamic **session-recall prefill** to browser turns (Joplin/Obsidian/Notion/llm-wiki routers), and routing browser chat through a running **Hermes Gateway** — are documented in [`docs/advanced-chat-setup.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/advanced-chat-setup.md). Most users need neither.

The bootstrap will:

1. Detect Hermes Agent and, if missing, attempt the official installer (`curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash`).
2. Find or create a Python environment with the WebUI dependencies.
3. Start the web server and wait for `/health`.
4. Open the browser unless you pass `--no-browser`.
5. Drop you into a first-run onboarding wizard inside the WebUI.

> Native Windows is not supported for this bootstrap yet. Use Linux, macOS, or WSL2.
> For Windows / WSL auto-start at login, see [`docs/wsl-autostart.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/wsl-autostart.md).

A community-maintained native Windows setup is documented at [@markwang2658/hermes-windows-native-guide](https://github.com/markwang2658/hermes-windows-native-guide) (companion setup repo: [@markwang2658/hermes-windows-native](https://github.com/markwang2658/hermes-windows-native)). Notes from the community report in [#1952](https://github.com/nesquena/hermes-webui/issues/1952):

- **Memory:** community-measured ~330 MB native vs ~1080 MB with WSL2+Docker (varies by configuration).
- **What works:** chat, workspace browser, session management, all themes.
- **Known limitations:** some POSIX-style file paths surface in the workspace browser; bash-assuming agent tools may not work natively.
- **Native Windows setup:** install Python 3.11+, then from the hermes-agent root in PowerShell: `python -m venv venv` → `pip install -r requirements.txt` → `pwsh .\start.ps1` (it auto-discovers `venv\Scripts\python.exe`).
- **WSL2 relationship:** not a prerequisite — a WSL2-built venv (`venv/bin/python`, ELF) isn't invokable by native Windows Python, so use the native setup above. WSL2 stays useful as a parallel install if you want the full `bootstrap.py` + Linux runtime.

If provider setup is still incomplete after install, the onboarding wizard will point you to finish it with `hermes model` instead of trying to replicate the full CLI setup in-browser.
For a step-by-step walkthrough of the wizard, provider choices, local model server Base URLs, and safe re-runs, see [`docs/onboarding.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/onboarding.md).
If an AI assistant is helping with install, reinstall, bootstrap, provider setup, or first-run support, have it read [`docs/onboarding-agent-checklist.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/onboarding-agent-checklist.md) before running commands or inspecting logs.

---

## Features

### Chat and agent
- Streaming responses via SSE (tokens appear as they are generated)
- Multi-provider model support -- any Hermes API provider (OpenAI, Anthropic, Google, DeepSeek, Nous Portal, OpenRouter, MiniMax, Xiaomi MiMo, Z.AI); dynamic model dropdown populated from configured keys
- Send a message while one is processing -- it queues automatically
- Edit any past user message inline and regenerate from that point
- Retry the last assistant response with one click
- Cancel a running task directly from the composer footer (Stop button next to Send)
- Tool call cards inline -- each shows the tool name, args, and result snippet; expand/collapse all toggle for multi-tool turns
- Subagent delegation cards -- child agent activity shown with distinct icon and indented border
- Detached child results are delivered to the parent as internal wakeups. Their raw prompts and completion toasts do not appear as messages from the user; the parent can summarize the results in its own reply. Ordinary background-process wakeups remain visible. A completed parent reply does not, by itself, cancel or suppress outstanding children; a later result may still start a follow-up turn.
- Mermaid diagram rendering inline (flowcharts, sequence diagrams, gantt charts)
- Thinking/reasoning display -- collapsible gold-themed cards for Claude extended thinking and o3 reasoning blocks
- Approval card for dangerous shell commands (allow once / session / always / deny)
- SSE auto-reconnect on network blips (SSH tunnel resilience)
- File attachments persist across page reloads and are stored outside the active workspace by default (`~/.hermes/webui/attachments/<session_id>/`, or `HERMES_WEBUI_ATTACHMENT_DIR/<session_id>/` when configured)
- Message timestamps (HH:MM next to each message, full date on hover)
- Code block copy button with "Copied!" feedback
- Syntax highlighting via Prism.js (Python, JS, bash, JSON, SQL, and more)
- Safe HTML rendering in AI responses (bold, italic, code converted to markdown)
- Bare HTTP(S) URLs are auto-linked without absorbing adjacent CJK prose; Unicode IDN host separators and raw-CJK IRI paths remain linkable
- Local file links: a `file:///` URI in a reply renders through the media route (inline preview for images/audio/video, download otherwise). Windows drive-letter URIs (`file:///C:/...`) resolve to the drive path on a Windows server; on a POSIX server the leading separator is preserved so a `/C:/...` request stays absolute and can never alias a workspace-relative file. Only local authorities are served — a `file://<host>/...` UNC reference is rejected (never silently rewired to a local path), and the file must live under an allowed root (`HERMES_HOME`, `/tmp`, the active workspace, or `MEDIA_ALLOWED_ROOTS`)
- rAF-throttled token streaming for smoother rendering during long responses
- Context usage indicator in composer footer -- token count, cost, and fill bar (model-aware)

### Sessions
- Create, rename, duplicate, delete, search by title and message content
- Session actions via `⋯` dropdown per session — pin, move to project, archive, duplicate, delete
- Pin/star sessions to the top of the sidebar (gold indicator)
- Pinned-conversation limits apply separately to each session's owning profile; root/default aliases share a limit. Unpin an empty session before switching its profile through chat or `/goal`.
- Archive sessions (hide without deleting, toggle to show)
- Session projects -- named groups with colors for organizing sessions; delegated subagent sessions have no project of their own and follow their nearest ancestor's project in the project filter and the Unassigned chip; forks and other child sessions keep their own project, so a fork moved to "No project" stays Unassigned
- Delegated subagent sessions nest under their parent row. When that parent is filtered out of the current view (project, source tab, hidden), the subagent is hidden with it rather than shown as a stray top-level "Subagent Session"; a subagent without the cross-surface flag (for example in the all-profiles view) stays a top-level row when its parent is in the other (CLI/TUI) tab, was never imported, or is itself shown as a top-level subagent row, and a subagent that matches an active sidebar search is always listed
- Project bindings -- right-click a project chip and pick **Project settings…** to pin a default workspace (or several workspaces, with one marked default) and a model. The chip's **+** (and New Chat while the project filter is active) then opens a session already in that workspace/model. The reasoning-effort binding stays in the API (`POST /api/projects/bind`) but is dormant: the dialog no longer offers the row, and nothing applies a stored value to a new session any more — the only mechanism would be the **profile-wide** reasoning-effort preference (the same `agent.reasoning_effort` setting the `/reasoning` command writes), so a row inside a per-project dialog read as per-project while silently moving the whole profile's effort; it comes back with per-session effort (#7881)
- Session tags -- add #tag to titles for colored chips and click-to-filter
  Clicking a session tag chip filters the list without opening the conversation.
- Grouped by Today / Yesterday / Earlier in the sidebar (collapsible date groups)
- Download as Markdown transcript, full JSON export, or import from JSON
- Create a public read-only share link for the active conversation from the Control Center; shared pages show a sanitized transcript snapshot without workspace, profile, or live controls
- Sessions persist across page reloads and SSH tunnel reconnects
- Model and reasoning-effort selections are restored per session; new-session defaults and legacy-session reasoning fallback use that session's profile configuration, including an authoritative `HERMES_CONFIG_PATH` for root; named profiles use their own `config.yaml` unless the override resolves inside that profile home
- Browser tab title reflects the active session name
- CLI session bridge -- CLI sessions from hermes-agent's SQLite store appear in the sidebar with a gold "cli" badge; click to import with full history and reply normally
- Token/cost display -- input tokens, output tokens, estimated cost shown per conversation (toggle in Settings or `/usage` command)

### Workspace file browser
- Directory tree with expand/collapse (single-click toggles, double-click navigates)
- Breadcrumb navigation with clickable path segments
- Preview text, code, Markdown (rendered), and images inline
- Chat links using `workspace://path/to/file` open files in the right-side preview pane
- Edit, create, delete, and rename files; create folders
- Binary file download (auto-detected from server)
- File preview auto-closes on directory navigation (with unsaved-edit guard)
- Dismissing the workspace panel is respected: resizing the viewport or showing the
  on-screen keyboard no longer force-reopens the panel after you close it (#6710)
- Previews report their real load outcome -- a broken source is reported as a
  failure instead of a silent success -- and a response that never settles is
  released by a bounded wait so the panel still opens; the source keeps loading
  and a late failure is surfaced in the status line (#6710)
- Git detection -- branch name and dirty file count badge in workspace header
- Right panel is drag-resizable
- Syntax highlighted code preview (Prism.js)

### Voice input
- Microphone button in the composer (Web Speech API)
- Tap to record, tap again or send to stop
- Live interim transcription appears in the textarea
- Auto-stops after ~2s of silence
- Appends to existing textarea content (doesn't replace)
- Hidden when browser doesn't support Web Speech API (Chrome, Edge, Safari)
- A saved fallback from browser speech recognition to server-side recording expires after 24 hours. Preferences stored by older versions get a 24-hour window on first use after upgrading. On reload after expiry, the mic returns to normal capture selection: server transcription takes priority when available; otherwise it uses browser speech recognition.

### Profiles
- Profile chip in the **composer footer** -- dropdown showing all profiles with gateway status and model info
- Gateway status dots (green = running), model info, skill count per profile
- Profiles management panel -- create, switch, and delete profiles from the sidebar
- Clone config from active profile on create
- Optional custom endpoint fields on create -- Base URL and API key written into the profile's `config.yaml` at creation time, so Ollama, LMStudio, and other local endpoints can be configured without editing files manually
- Seamless switching -- no server restart; reloads config, skills, memory, cron, models
- Per-session profile tracking (records which profile was active at creation)

### Authentication and security
- Optional password auth -- off by default, zero friction for localhost
- Enable via `HERMES_WEBUI_PASSWORD` env var or Settings panel
- Installed PWAs work best with WebUI's own password. Reverse proxies are supported, but proxy basic auth can block the service-worker update fetches an installed app needs and leave it on a blank screen after an update; see `docs/troubleshooting.md` for recovery steps.
- Optional passkeys/WebAuthn -- register from Settings -> System after signing in with a password; the login page only shows passkey sign-in after at least one passkey exists
- After registering at least one passkey, Settings -> System can remove the password and keep passkey-only sign-in enabled. Password auth remains the bootstrap/recovery path until you choose to go passwordless; passkeys are same-origin and stored locally in the WebUI state directory
- Optional native OIDC login for WebUI sessions -- configure `webui_oidc.issuer`, `client_id`, `allow_claim`, and `allow_values` in `config.yaml`, or set the matching `HERMES_WEBUI_OIDC_*` environment variables. OIDC stays disabled until all four are present, and startup prints a warning if the config is partial.
- Native OIDC sends the client secret in the token-request form body (`client_secret_post`) by default. When the provider's discovery document only advertises `client_secret_basic` in `token_endpoint_auth_methods_supported` (common with strict OIDC stacks such as zitadel/oidc), the secret automatically moves to the HTTP Basic header instead. Set `webui_oidc.token_auth_method` (or `HERMES_WEBUI_OIDC_TOKEN_AUTH_METHOD`) to `client_secret_basic` or `client_secret_post` to pin a method explicitly.
- Native OIDC stores the PKCE/state nonce flow in process memory. That works for the shipped single-process server, and it also works behind a load balancer when callbacks stay sticky to the same WebUI instance. Multi-instance deployments need session affinity, or the callback can land on a different process and fail state validation.
- Signed HMAC HTTP-only cookie with 24h TTL
- Minimal dark-themed login page at `/login`
- Security headers on all responses (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
- 20MB POST body size limit
- CDN resources pinned with SRI integrity hashes

### Themes
- Appearance is split into two axes: Theme (`system`, `dark`, `light`) and Skin
  (`default`, `ares`, `mono`, `slate`, `poseidon`, `sisyphus`, `charizard`,
  `sienna`, `catppuccin`, `nous`, `geist-contrast` / Geist Contrast)
- Switch via Settings -> Appearance (instant live preview) or `/theme <theme-or-skin>`
- Persists across reloads (server-side in settings.json + localStorage for flicker-free loading)
- Skins use `data-skin` plus CSS variables; dark mode resolves through the
  `.dark` class, not a `data-theme` custom-theme axis — see [THEMES.md](https://github.com/nesquena/hermes-webui/blob/master/THEMES.md)

### Settings and configuration
- **Hermes Control Center** (sidebar launcher button) -- Conversation tab (export/import/clear), Preferences tab (model, send key, theme, language, all toggles), System tab (version, password)
- Send key: Enter (default) or Ctrl/Cmd+Enter
- Send-key on touch devices: plain Enter inserts a newline on phones (iPhone/iPod, Android phones) and on tablets / iPadOS / touch-capable Macs that only expose a coarse pointer (no attached hardware keyboard), matching the software keyboard's return key. Devices that report a fine pointer (for example, a tablet with a hardware keyboard) keep the configured physical-keyboard send-key behavior. The configured shortcut and the Send button remain available for sending.
- Show/hide CLI sessions toggle (enabled by default)
- Token usage display toggle (off by default, also via `/usage` command)
- Task list in chat toggle (off by default) -- a collapsible task strip pinned at the top of the chat area, summarising the current session's todos. While it is on, the sidebar **Todos** panel is hidden and the workspace-panel Todos toggle is disabled with an explanation, so the same list is never shown twice; switch it back off in Settings -> Appearance to restore the sidebar panel and re-enable the workspace toggle.
- Control Center always opens on the Conversation tab; resets on close
- Unsaved changes guard -- discard/save prompt when closing with unpersisted changes
- Cron completion alerts -- toast notifications and unread badges scoped to the active profile on the Tasks tab and session sidebar
- Background agent error alerts -- banner when a non-active session encounters an error
- Approval and clarification browser alerts notify once per pending owner when its session is not actively viewed. Local approval dismissal hides attention without resolving the prompt; resolution, replacement, and cancellation retire that owner's alert state. Denied or failed notification delivery can retry while the prompt remains pending.

### Slash commands
- Type `/` in the composer for autocomplete dropdown
- Plain skills match case-insensitive keywords in their name or description; built-in, agent/plugin, and bundle commands keep prefix matching and take precedence over a same-slug skill
- Built-in: `/help`, `/clear`, `/compress [focus topic]`, `/compact` (alias), `/model <name>`, `/workspace <name>`, `/new`, `/usage`, `/theme`
- Arrow keys navigate, Tab/Enter select, Escape closes
- Unrecognized commands pass through to the agent

#### Model aliases in `/model`

`/model <alias>` accepts any alias configured for the profile, in either of Hermes's two formats:

```yaml
model_aliases:                     # canonical
  sol:
    model: gpt-5.6-sol
    provider: openai-codex

model:
  provider: openrouter
  aliases:                         # legacy
    sol: openai-codex/gpt-5.6-sol  # provider-qualified
    fast: gpt-4                    # unqualified
```

Alias resolution follows the format of the alias:

- A **canonical `model_aliases` entry** and a **provider-qualified legacy target** name their own
  route. The target is authoritative, so `/model sol` selects that provider even when a
  same-named model exists on another provider. A canonical entry also takes precedence over a
  legacy entry with the same name.
- An **unqualified legacy target** names only a model, so it keeps the ordinary lookup: the
  active provider first, then the normal fuzzy match. This is the behavior `/model` had before,
  and it is unchanged.

Aliases that carry their own endpoint or credentials are resolved server-side; the browser only
receives the model, the provider id, and an opaque route id, never a base URL or key.
On the in-process backend, an alias with its own `base_url` follows Hermes's direct-alias
credential rules: its declared `api_key`/`key_env` wins; otherwise only a credential resolved
for that endpoint's own host is sent (for example an OpenRouter key to `openrouter.ai`), never
the provider label's key to an unrelated host. The alias's provider still selects its wire protocol.

Gateway and runner chat support **provider-only aliases** by sending the resolved target model
and provider, not the alias name: their runtime does not share WebUI's alias registry. Aliases
that explicitly declare `base_url`, `api_key`, or `key_env` need the in-process backend. External
chat starts, wakeups, Gateway regeneration, and Gateway goal kickoffs reject them with HTTP 400 and
`reason: model_alias_requires_in_process_backend` before dispatch; a new Gateway goal is not
set. Runner regeneration remains unsupported (HTTP 409), regardless of alias selection.
Ambient credentials resolved for a provider-only alias do not count as alias overrides.
The session retains its target model and profile-bound opaque route id, including Gateway
success/error writeback, so a later backend switch can still resolve the original alias.

A session stores that opaque route id, not the endpoint, so an alias that is later deleted or renamed
leaves the session pointing at a route nothing owns. That send fails closed — on every backend, the
in-process worker, the gateway and the runner alike — with a controlled "model alias unavailable"
error instead of quietly falling back to another provider; pick the model again to store a live route.

With `HERMES_WEBUI_RUNTIME_ADAPTER=runner-local`, `/goal <text>` returns HTTP 501
(`status: unsupported`) without changing an existing goal or starting a run. The
runner contract does not yet provide atomic goal replacement and kickoff; WebUI
never substitutes local goal execution. `/goal status`, `pause`, `resume`, and
`clear` delegate to the runner when supported. Legacy-direct and legacy-journal
goal kickoff behavior is unchanged for supported routes. Normal runner chat supports provider-only model aliases.

Server-initiated turns retain the pre-session stale-Agent-runtime barrier. It
runs before loading the session; named-profile alias and Gateway routing happen
only after admission. A stale default local runtime can therefore reject a wakeup
before the session's named-profile Gateway ownership is known.

### Panels
- **Chat** -- session list, search, pin, archive, projects, new conversation
- **Tasks** -- view, create, edit, run, pause/resume, delete cron jobs; run history; completion alerts; a **Scripts** subtab for a read-only browse of the profile's `~/.hermes/scripts/` directory (see [docs/scripts-panel.md](https://github.com/nesquena/hermes-webui/blob/master/docs/scripts-panel.md))
- **Skills** -- list all skills by category, search, preview, create/edit/delete; linked files viewer
- **Memory** -- view and edit MEMORY.md and USER.md inline
- **Profiles** -- create, switch, delete agent profiles; clone config
- **Todos** -- live task list from the current session; hidden while the in-chat task list toggle is on, which also disables the workspace-panel Todos tab
- **Insights** -- token, cost, and skill-usage analytics; period presets (7/30/90/365 days) plus a **Custom range** with start/end date pickers
- **Artifacts** -- files changed in the session and Skills Used, with a separate skill count and per-skill use counts
- **Spaces** -- add, rename, remove workspaces; quick-switch from topbar

### Mobile responsive
- Hamburger sidebar -- slide-in overlay on mobile (<640px)
- Sidebar top tabs stay available on mobile; no fixed bottom nav stealing chat height
- Files slide-over panel from right edge
- Touch targets minimum 44px on all interactive elements
- Full-height chat/composer on phones without bottom-nav spacing
- Desktop layout completely unchanged

---

## Configuration & access

`start.sh` auto-detects almost everything; the subsections below cover the knobs for when it can't, and how to reach the UI remotely.

### What start.sh discovers automatically

| Thing | How it finds it |
|---|---|
| Hermes agent dir | `HERMES_WEBUI_AGENT_DIR`, then valid authoritative `run_agent.py` checkouts, the `hermes` launcher, the selected Python, valid fallback checkouts, and finally marker-only roots |
| Python executable | `HERMES_WEBUI_PYTHON`, Agent venv, interpreter that proved the Agent root, `.venv` in this repo, then system Python |
| State directory | `HERMES_WEBUI_STATE_DIR` env, then `$HERMES_HOME/webui` (Windows default `%LOCALAPPDATA%\hermes\webui`, POSIX default `~/.hermes/webui`) |
| Default workspace | `HERMES_WEBUI_DEFAULT_WORKSPACE` env, then `~/workspace`, then state dir |
| Port | `HERMES_WEBUI_PORT` env or first argument, default `8787` |

Before it installs the agent or writes any state, the bootstrap binds the resolved host and port as a preflight. If another service already holds the port, it stops right there, names the address it could not bind, and prints a free alternative to pass to `./start.sh <port>` or set as `HERMES_WEBUI_PORT` in `.env`. The running service and your existing configuration are left untouched. When the listener on that port is a healthy WebUI -- the instance you already started -- bootstrap reports it ready and leaves it alone, browser included; only a foreign service gets the conflict message.

If discovery finds everything, nothing else is required.

---

### Overrides (only needed if auto-detection misses)

```bash
export HERMES_WEBUI_AGENT_DIR=/path/to/hermes-agent
export HERMES_WEBUI_PYTHON=/path/to/python
export HERMES_WEBUI_PORT=9000
export HERMES_WEBUI_AUTO_INSTALL=1  # enable auto-install of agent deps (disabled by default)
./start.sh
```

Auto-install requires the selected Agent to match `HERMES_WEBUI_AGENT_DIR` or the Agent under `HERMES_HOME`, and still checks ownership and permissions.

Or inline:

```bash
HERMES_WEBUI_AGENT_DIR=/custom/path ./start.sh 9000
```

Full list of environment variables:

| Variable | Default | Description |
|---|---|---|
| `HERMES_WEBUI_AGENT_DIR` | auto-discovered | Path to the Hermes Agent source or installed module root |
| `HERMES_WEBUI_PYTHON` | auto-discovered | Python executable |
| `HERMES_WEBUI_HOST` | `127.0.0.1` | Bind address (`0.0.0.0` for all IPv4, `::` for all IPv6, `::1` for IPv6 loopback) |
| `HERMES_WEBUI_PORT` | `8787` | Port |
| `HERMES_WEBUI_STATE_DIR` | `$HERMES_HOME/webui` (Windows default `%LOCALAPPDATA%\hermes\webui`, POSIX default `~/.hermes/webui`) | Where sessions and state are stored. **Note (upgrade):** the default now follows `HERMES_HOME` — if you previously relocated `HERMES_HOME` to a non-default base **without** setting `HERMES_WEBUI_STATE_DIR`, your WebUI state now resolves to `$HERMES_HOME/webui` instead of the old platform-default `~/.hermes/webui`. To keep using the old location, set `HERMES_WEBUI_STATE_DIR` to it (or move the directory). Installs with `HERMES_HOME` unset or at the default base are unaffected. |
| `HERMES_WEBUI_SETTINGS_FILE` | `<state dir>/settings.json` | Optional path for this instance's WebUI settings file (sessions, workspaces and projects stay in the state directory). Read once at startup, so restart after changing it |
| `HERMES_WEBUI_DEFAULT_WORKSPACE` | `~/workspace` | Default workspace |
| `HERMES_WEBUI_DEFAULT_MODEL` | *(provider default)* | Optional model override; leave unset to use the active Hermes provider default |
| `HERMES_WEBUI_PASSWORD` | *(unset)* | Set to enable password authentication |
| `HERMES_WEBUI_CSP_CONNECT_EXTRA` | *(unset)* | Optional space-separated `http(s)://` or `ws(s)://` origins to append to the enforced and report-only CSP `connect-src` directives for trusted reverse-proxy, tunnel, or extension sidecar deployments |
| `HERMES_WEBUI_CSP_IMG_EXTRA` | *(unset)* | Optional space-separated `http(s)://` image origins (wildcard subdomain and port allowed), or the bare `https:` / `http:` scheme, added to the CSP `img-src`. Remote images are blocked by default so an assistant reply cannot make the browser fetch an arbitrary URL; blocked images render as an inert "Open image" link. Use this to show images from a trusted CDN inline, e.g. an image-generation provider |
| `HERMES_WEBUI_SSE_CHUNKED` | *(unset)* | Set truthy (`1`/`true`/`yes`/`on`) to send SSE with `Transfer-Encoding: chunked`. Needed behind buffering reverse proxies (e.g. `jupyter-server-proxy`) that otherwise buffer the whole stream; harmless but unnecessary for directly-served deployments |
| `HERMES_WEBUI_EXTENSION_DIR` | *(unset)* | Optional local directory served at `/extensions/`; must point to an existing directory before extension injection is enabled |
| `HERMES_WEBUI_EXTENSION_MANIFEST` | *(unset)* | Optional relative JSON manifest inside `HERMES_WEBUI_EXTENSION_DIR` listing bundled scripts/styles to inject; see [WebUI Extensions](https://github.com/nesquena/hermes-webui/blob/master/docs/EXTENSIONS.md) |
| `HERMES_WEBUI_EXTENSION_SCRIPT_URLS` | *(unset)* | Optional comma-separated same-origin script URLs to inject; appended after manifest scripts; see [WebUI Extensions](https://github.com/nesquena/hermes-webui/blob/master/docs/EXTENSIONS.md) |
| `HERMES_WEBUI_EXTENSION_STYLESHEET_URLS` | *(unset)* | Optional comma-separated same-origin stylesheet URLs to inject; appended after manifest stylesheets; see [WebUI Extensions](https://github.com/nesquena/hermes-webui/blob/master/docs/EXTENSIONS.md) |
| `HERMES_HOME` | Windows: `%LOCALAPPDATA%\hermes`; POSIX: `~/.hermes` | Base directory for Hermes state (affects all paths) |
| `HERMES_CONFIG_PATH` | `$HERMES_HOME/config.yaml` | Path to Hermes config file |
| `HERMES_WEBUI_SERVER_CWD` | *(unset)* | Working directory for the server process. Defaults to the agent dir; point it at a writable workspace when the agent dir is read-only so fallback relative writes land somewhere writable |
| `HERMES_WEBUI_VISIBLE_SESSION_LIMIT` | `20` | Size of the sidebar's interactive recency window (how many recent non-cron/webhook sessions are listed). Also bounds how many delegated subagent children can nest at once, since a child only renders when its row wins a slot in the window — raise it for wide fan-outs. Non-integer or non-positive values fall back to the default. Values above 200 are clamped. Resolved before profile init, so a profile `.env` cannot override it |
| `HERMES_WEBUI_AGENT_CACHE_MAX` | `25` | Max live agent instances kept warm in the in-memory LRU. Each pins a full conversation transcript, so this is the dominant lever on resident memory — lower it on installs with many long sessions to cap RAM (at the cost of more cold reloads) |
| `HERMES_WEBUI_SESSIONS_MAX` | `100` | Legacy operator override for the max compact `Session` objects held in the in-memory LRU. Prefer the `webui.sessions_cache_max` key in `config.yaml` (which takes precedence); this env var remains a fallback. Bounds resident memory so long-running installs cannot accumulate every session ever touched and eventually crash (#4765/#2233/#4633). Eviction only ever drops clean, persisted, non-active sessions; an evicted session lazily reloads from its JSON sidecar on next access |
| `HERMES_WEBUI_RUN_JOURNAL_SWEEP` | *(unset)* | Set to `0`/`false`/`off` to disable the run-journal retention sweep entirely (#7613) |
| `HERMES_WEBUI_RUN_JOURNAL_RETENTION_TTL_DAYS` | `14` | Runs whose journal file is older than N days are **archived** (compressed into `_run_journal_archive/`, not deleted). `0` disables the age cap. Also settable via `run_journal_retention_ttl_days` in `settings.json` (the env var wins) |
| `HERMES_WEBUI_RUN_JOURNAL_RETENTION_MAX_RUNS_PER_SESSION` | `40` | Keep at most N newest runs live per session; older runs are archived. `0` disables the count cap (`run_journal_retention_max_runs_per_session` in `settings.json`) |
| `HERMES_WEBUI_RUN_JOURNAL_RETENTION_MAX_BYTES_PER_SESSION` | `268435456` (256 MiB) | Per-session budget for LIVE run-journal bytes; sessions over budget archive their oldest runs. `0` disables the size cap (`run_journal_retention_max_bytes_per_session` in `settings.json`) |
| `HERMES_WEBUI_RUN_JOURNAL_ARCHIVE_TTL_DAYS` | `0` (keep forever) | **The only destructive knob**: archives older than N days are deleted, except an archive a session still needs to recover an interrupted answer, which is kept until the session no longer references it or is deleted. `0` (default) never deletes archives — a stock install keeps every archived run forever (`run_journal_archive_ttl_days` in `settings.json`) |

#### Run-journal retention (#7613)

The run journal stores one `{run_id}.jsonl` per run under `sessions/_run_journal/<session_id>/`; nothing removed them, so a long-lived session's journal grew without bound. An hourly sweep (piggybacked on the existing maintenance tick, never on a request path) now **archives** runs past the caps above rather than deleting them:

- eligible runs are compressed (gzip) into `sessions/_run_journal_archive/<session_id>/<run_id>.jsonl.gz` — measured at **5–18% of the original size** on real journals;
- the compressed copy is verified to decompress to the exact original bytes **before** the live file is dropped;
- runs that have not provably settled (no complete terminal row — including a journal truncated mid-write) are never touched;
- a run the session still needs to recover an interrupted answer (its active stream, or the run an interrupted-turn marker names) stays live, so a release that predates the archive format can still recover it after a rollback;
- every read path (run summaries, event reads, session replay, run lookup) transparently falls back to the archive, so a wrong classification costs one compressed copy, not the run;
- deleting a session deletes its archives too.

Where `dir_fd` primitives are unavailable (Windows), the sweep disables itself rather than fall back to path-based moves a directory swap could redirect.

Extension deployments can inspect sanitized, authenticated diagnostics at `GET /api/extensions/status`; see [WebUI Extensions](https://github.com/nesquena/hermes-webui/blob/master/docs/EXTENSIONS.md#diagnostics).

---

### Nix flake and NixOS module

Hermes WebUI has a Nix flake package and a NixOS service module so you can run it declaratively.

Install the latest package with:

```bash
nix shell github:nesquena/hermes-webui#default
```

Use this flake input in your system configuration:

```nix
inputs.hermes-webui.url = "github:nesquena/hermes-webui";
```

Then add the module and configure it in `nixosModules`:

```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    hermes-agent.url = "github:NousResearch/hermes-agent";
    hermes-webui.url = "github:nesquena/hermes-webui";
  };

  outputs = { self, nixpkgs, hermes-agent, hermes-webui, ... }: {
    nixosConfigurations.<host> = nixpkgs.lib.nixosSystem {
      modules = [
        hermes-agent.nixosModules.default
        hermes-webui.nixosModules.default
        ({ pkgs, ... }: {
          services.hermes-agent.enable = true;
          services.hermes-webui = {
            enable = true;
            host = "127.0.0.1";
            port = 8787;
            stateDir = "/var/lib/hermes-webui";
            user = "hermes";
            group = "hermes";
            hermesHome = "/var/lib/hermes/.hermes";
            agent.package = hermes-agent.packages.${pkgs.stdenv.hostPlatform.system}.default;
            environmentFiles = [ "/run/secrets/hermes-webui.env" ];
          };
        })
      ];
    };
  };
}
```

The module defaults to `127.0.0.1`. Set `host = "0.0.0.0"` and `openFirewall = true` only when you want direct network access, and pair that with auth, for example `HERMES_WEBUI_PASSWORD` via `environmentFiles`.

The published Hermes Agent package exposes `passthru.hermesVenv`, so the module derives `HERMES_WEBUI_PYTHON` from its interpreter. Bootstrap then locates the installed `run_agent.py` through that interpreter without importing Agent code and exports its parent as `HERMES_WEBUI_AGENT_DIR`. Packages may expose `passthru.hermesAgentDir` as a direct path instead. Use `agent.dir` and `agent.python` as explicit overrides for custom package layouts.

When WebUI reads shared Hermes Agent state, run the service as a user that can already read that state. For a co-located Hermes Agent service, set `user` and `group` to the agent service account; the module only creates the default `hermes-webui` account and never changes ownership of an existing `hermesHome`.

The module maps directly onto existing WebUI environment variables, including:
`HERMES_WEBUI_HOST`, `HERMES_WEBUI_PORT`, `HERMES_WEBUI_STATE_DIR`, `HERMES_HOME`, `HERMES_WEBUI_AGENT_DIR`, and `HERMES_WEBUI_PYTHON`.

Set `environmentFiles` for secrets like API keys. Protected WebUI runtime keys from the module are rejected there, so keep host, port, state, and agent wiring in the module options. Keep reverse proxy and TLS configuration in your surrounding deployment module because those details are deployment-specific.

### Remote access (SSH tunnel, Tailscale, phone)

The server binds to `127.0.0.1` by default. To reach it from another machine,
use an SSH tunnel (`ssh -N -L 8787:127.0.0.1:8787 user@host`, which `start.sh`
prints for you over SSH) or, on a single-operator or access-restricted tailnet,
use the preferred [Tailscale Serve](https://tailscale.com/docs/features/tailscale-serve)
flow, which keeps WebUI on loopback behind tailnet-only HTTPS. Direct access to
`http://<server-tailscale-ip>:8787` with `HERMES_WEBUI_HOST=0.0.0.0` and
`HERMES_WEBUI_PASSWORD` is a fallback when Serve is unavailable. Full setup and
the community ARM64-Android field report: [`docs/remote-access.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/remote-access.md).

### Manual launch (without start.sh)

If you prefer to launch the server directly (for example from your own systemd unit):

```bash
export HERMES_WEBUI_AGENT_DIR=/path/to/hermes-agent   # optional, see below
HERMES_WEBUI_PORT=8787 python3 /path/to/hermes-webui/server.py
```

Before importing anything else, `server.py` activates the Hermes Agent's dependency environment. It uses `HERMES_WEBUI_AGENT_DIR` when set, otherwise the same discovery `start.sh` uses (`$HERMES_HOME/hermes-agent`, `~/.hermes/hermes-agent`, the `hermes` launcher, …), so the export is only needed for an Agent installed somewhere else. A Hermes-managed Agent (v0.21.6 or newer, installed by the official installer or `hermes update`) then restarts the server in its own Python with its own dependencies, so the interpreter you launch with does not need the Agent's packages. An older Agent that keeps its dependencies in `venv/` or `.venv/` is not restarted: run `server.py` with that venv's Python instead (`/path/to/hermes-agent/venv/bin/python`). System Python on its own lacks `openai`, `httpx` and other required packages.

Health check:

```bash
curl http://127.0.0.1:8787/health
```

---

## Docker

**Pre-built images** (amd64 + arm64) are published to GHCR on every release.

For a comprehensive setup guide covering all 3 compose files, common failure modes, and bind-mount migration, see [`docs/docker.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/docker.md). The README covers the 5-minute happy path.

### 5-minute quickstart (single container)

The simplest setup: one WebUI container that runs the agent in-process.

```bash
git clone https://github.com/nesquena/hermes-webui
cd hermes-webui
cp .env.docker.example .env
# Edit .env if your host UID isn't 1000 (e.g. macOS where UIDs start at 501)
docker compose up -d
# Open http://localhost:8787
```

Run Compose as the user who owns your Hermes home. `sudo docker compose up -d` can make `${HOME}` expand to the root user's home, so Docker mounts the wrong `.hermes` directory instead of your real `~/.hermes` and the WebUI starts with `config.yaml (not found, using defaults)`. Prefer adding your user to the Docker group and running `docker compose up -d`; if you must use sudo, set absolute paths first, for example `HERMES_HOME=/home/you/.hermes HERMES_WORKSPACE=/home/you/workspace sudo -E docker compose up -d`, then verify with `docker compose config`.

The container auto-detects your UID/GID from the mounted `~/.hermes` volume so files written by the agent stay readable by you on the host.

To enable password protection (required if you expose the port outside `127.0.0.1`):

```bash
echo "HERMES_WEBUI_PASSWORD=change-me-to-something-strong" >> .env
docker compose up -d --force-recreate
```

### Manual `docker run` (no compose)

```bash
docker pull ghcr.io/nesquena/hermes-webui:latest
docker run -d \
  -e WANTED_UID=$(id -u) -e WANTED_GID=$(id -g) \
  -v ~/.hermes:/home/hermeswebui/.hermes \
  -e HERMES_WEBUI_STATE_DIR=/home/hermeswebui/.hermes/webui \
  -v ~/workspace:/workspace \
  -p 127.0.0.1:8787:8787 \
  ghcr.io/nesquena/hermes-webui:latest
```

### Build locally

```bash
docker build -t hermes-webui .
docker run -d \
  -e WANTED_UID=$(id -u) -e WANTED_GID=$(id -g) \
  -v ~/.hermes:/home/hermeswebui/.hermes \
  -e HERMES_WEBUI_STATE_DIR=/home/hermeswebui/.hermes/webui \
  -v ~/workspace:/workspace \
  -p 127.0.0.1:8787:8787 \
  hermes-webui
```

### Multi-container setups

If you want the agent and WebUI in separate containers (for isolation, or because you're already running an agent gateway elsewhere):

```bash
# Agent + WebUI
docker compose -f docker-compose.two-container.yml up -d

# Agent + Dashboard + WebUI
docker compose -f docker-compose.three-container.yml up -d
```

Both compose files use **named Docker volumes** by default, which solves the UID/GID problem by construction. If you need bind mounts to share an existing host directory, see [`docs/docker.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/docker.md) for the full migration recipe.

> **Known limitation (#681)**: in the two-container setup, tools triggered from the WebUI run in the **WebUI container**, not the agent container. If you need git/node/etc. on the WebUI's filesystem, either use the single-container setup, extend the WebUI Dockerfile, or use the community [all-in-one image](https://github.com/sunnysktsang/hermes-suite).
>
> **Source boundary note (#2453)**: the multi-container setup mounts `hermes-agent-src` read-only into the WebUI by default. This prevents WebUI-side source rewrites but is still an implementation-coupling bridge, not a stable Agent API boundary. See [`docs/rfcs/agent-source-boundary.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/rfcs/agent-source-boundary.md) for the current source/API decoupling inventory.

### Common failure modes

| Symptom | Likely cause | Fix |
|---|---|---|
| `PermissionError` at startup | UID mismatch on bind mount | Set `UID=$(id -u)` in `.env` |
| `.env: permission denied` (#1389) | `fix_credential_permissions()` enforced 0600 | Set `HERMES_SKIP_CHMOD=1` in `.env` |
| Workspace appears empty | UID mismatch on `/workspace` mount | Set `UID=$(id -u)` in `.env` |
| `git: command not found` in chat | Two-container architectural limit (#681) | Use single-container or extend Dockerfile |
| WebUI can't find agent source | `hermes-agent-src` volume misconfigured | Use the named volumes from compose files as-is |
| Podman shared `.hermes` fails | Podman 3.4 `keep-id` limitation | Use Podman 4+ or single-container |
| Host API at `localhost` fails from WebUI | Container `localhost` means the container, not your host (#3012) | Use `http://host.docker.internal:<port>` on Docker Desktop, or `http://host.containers.internal:<port>` on Podman |
| WebUI can't see `~/.hermes` after `sudo docker compose` | `${HOME}` expanded to the root user's home (#3006) | Run Compose as your user, or pass absolute `HERMES_HOME`/`HERMES_WORKSPACE` with `sudo -E` |

For the deep dive on each of these, see [`docs/docker.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/docker.md).

> **Note:** By default, Docker Compose binds to `127.0.0.1` (localhost only).
> To expose on a network, change the port to `"8787:8787"` in `docker-compose.yml`
> and set `HERMES_WEBUI_PASSWORD` to enable authentication.

---

## Running tests

Tests discover the repo and the Hermes agent dynamically -- no hardcoded paths.
Use the repo test runner so local runs do not accidentally use an unsupported
system Python. It creates/uses `.venv` with Python 3.11, 3.12, or 3.13 and
installs the dev test dependencies from `requirements-dev.txt` when missing.

```bash
cd hermes-webui
./scripts/test.sh
```

Pass normal pytest arguments after the script for focused runs:

```bash
./scripts/test.sh tests/test_regressions.py -v
```

Or seed the repo `.venv` from an explicit supported base interpreter:

```bash
HERMES_WEBUI_TEST_PYTHON=/path/to/python3.12 ./scripts/test.sh tests/ -v
```

The override selects the Python used to create or rebuild `.venv`; dependencies
are still installed into the repo-local virtual environment, not into the
system/Homebrew interpreter.

Tests run against an isolated server with a separate state directory.
Production data and real cron jobs are never touched. Current snapshot:
**~11,500 tests collected** across **~1,150 test files**, run in CI on Python 3.11,
3.12, and 3.13 (3 parallel shards each).

---

## Architecture

No build step, no framework, no bundler — a Python standard-library HTTP server
and vanilla JS. The backend lives in `api/`, the frontend in `static/`.

**Backend (`api/`)**

```
server.py         HTTP routing shell + auth middleware
api/
  auth.py         Optional password authentication, signed cookies, passkeys
  config.py       Discovery, globals, model detection, reloadable config
  helpers.py      HTTP helpers, security headers
  models.py       Session model + CRUD + CLI/state.db bridge
  onboarding.py   First-run onboarding wizard, OAuth provider support
  profiles.py     Profile state management, hermes_cli wrapper
  routes.py       All GET + POST route handlers (if/elif dispatch, no decorators)
  state_sync.py   /insights sync — message_count to state.db
  streaming.py    SSE engine, run_agent, cancellation, compression
  updates.py      Self-update check and release notes
  upload.py       Multipart parser, file upload handler
  workspace.py    File ops, workspace helpers, git detection
```

**Frontend (`static/`)**

```
index.html        HTML template
style.css         All CSS incl. mobile responsive, themes + skins
ui.js             DOM helpers, renderMd, tool cards, context indicator
workspace.js      File preview, file ops, git badge, central api() fetch wrapper
sessions.js       Session CRUD, collapsible groups, search, reload recovery
messages.js       send(), SSE handlers, live streaming, session recovery
panels.js         Cron, skills, memory, profiles, settings (Control Center)
commands.js       Slash command autocomplete
boot.js           Mobile nav, voice input, theme/skin boot, bfcache handler
```

**Tests + packaging**

```
tests/            Pytest suite (~11,500 tests; isolated server/state fixtures)
pyproject.toml    Standard build metadata plus the Ruff lint gate; checkout launch surface still centers on bootstrap.py / start.sh / ctl.sh
Dockerfile        python:3.12-slim container image
docker-compose.yml  Compose with named volume and optional auth
.github/workflows/  CI: ruff + sharded pytest, browser smoke, Docker smoke,
                    multi-arch Docker build + GitHub Release on tag
```

State lives outside the repo at `~/.hermes/webui/` by default
(sessions, workspaces, settings, projects, last_workspace). Override with `HERMES_WEBUI_STATE_DIR`.
Full design notes and the endpoint catalog are in [`ARCHITECTURE.md`](https://github.com/nesquena/hermes-webui/blob/master/ARCHITECTURE.md).

---

## Compatibility

The version shown in the WebUI runtime status is the **WebUI version only** (build/image/tag currently running). It is not a full compatibility map.

The WebUI is still coupled to Hermes Agent internals for runtime execution, provider/model access, and state/schema usage until the stable agent boundary work in [#1925](https://github.com/nesquena/hermes-webui/issues/1925) and [#2491](https://github.com/nesquena/hermes-webui/issues/2491) land. In practice, the WebUI imports Agent modules directly (`api/config.py`, `api/providers.py`, `api/streaming.py`) and reads Agent state layout directly, so version skew can cause import or behavior drift.

**Compatibility policy**
- WebUI release branches are tested against the matching Hermes Agent release available at that WebUI release time.
- **Upgrade both together**: upgrade or pin WebUI and hermes-agent together (same release train/version/date), especially before enabling production traffic.
- Running pinned older/newer combinations is **untested and unsupported** until the stable API boundary work in [#1925](https://github.com/nesquena/hermes-webui/issues/1925) / [#2491](https://github.com/nesquena/hermes-webui/issues/2491) is in place.
- Record the full `hermes-agent` + `hermes-webui` versions in issue reports when upgrade mismatches are suspected.

**Docker users**: pin both image tags (or corresponding pinned source revisions) rather than using `latest` on one side and a fixed tag on the other. When upgrading the multi-container setup, follow the agent-image upgrade procedure in [`docs/docker.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/docker.md) (which requires dropping the `hermes-agent-src` volume before recreating). The current source-boundary status is tracked in [`docs/rfcs/agent-source-boundary.md`](https://github.com/nesquena/hermes-webui/blob/master/docs/rfcs/agent-source-boundary.md).

---

*(README truncated for display. [Read the full README on GitHub](https://github.com/nesquena/hermes-webui)).*
