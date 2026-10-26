---
slug: davepoon-buildwithclaude-plugins-claude-ops-skills-setup
name: setup
tagline: Interactive setup wizard for the claude-ops plugin. Installs missing
  CLIs, configures env vars for each channel (Telegram, WhatsApp, Email, Slack,
  Not
summary: "RULE ZERO — EVERY BASH CALL USES runinbackground: true"
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
  subpath: plugins/claude-ops/skills/setup
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
  path: plugins/claude-ops/skills/setup/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.615Z
  truncated: true
type: agent_skill
skill:
  skill_name: setup
  description: Interactive setup wizard for the claude-ops plugin. Installs
    missing CLIs, configures env vars for each channel (Telegram, WhatsApp,
    Email, Slack, Notion, Linear, Sentry, Vercel), builds the project registry,
    and saves user preferences. Run once after installing the plugin or any time
    to reconfigure.
  folder_path: plugins/claude-ops/skills/setup
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: davepoon-buildwithclaude
---

# OPS ► SETUP WIZARD
You are running an **interactive configuration wizard** for the `claude-ops` plugin. The user wants you to walk them through every step needed to get the plugin working: installing CLIs, setting env vars, configuring channels, populating the project registry, and saving preferences.

---

**RULE ZERO — EVERY BASH CALL USES `run_in_background: true`**

This is non-negotiable. EVERY SINGLE Bash tool call in this entire setup wizard MUST set `run_in_background: true`. There are ZERO exceptions. This applies to:
- Credential scans, CLI installs, OAuth flows, npm/brew installs
- Daemon starts, daemon reloads, launchctl commands
- Keychain writes, Doppler queries, Chrome history queries
- Autolink scripts, sync/backfill, smoke tests
- File writes, config writes, env appends
- ANY command, no matter how fast you think it will be

While background commands run, immediately continue to the next independent step or ask the user the next question. Handle results when the `<task-notification>` arrives. The setup wizard must NEVER show `(ctrl+b to run in background)` — if the user sees that prompt, you violated this rule.

**RULE ONE — SILENT BASH CALLS**

Every Bash tool call MUST include a short `description` parameter (5-10 words, e.g. "Install missing CLIs", "Scout keychain for Telegram creds", "Reload daemon"). This is what the user sees instead of the raw command. Keep setup clean and quiet — the user should see progress titles, not shell scripts.

---

**Other hard rules:**

- This is a _conversation_, not a script dump. Use `AskUserQuestion` for every decision — never ask in prose when a structured selector will do.
- Confirm actions via `AskUserQuestion` where the user hasn't already opted in (e.g., "Configure all" covers everything — no per-action confirmation needed after that).
- Skip sections the user declines. Don't nag.
- **NEVER auto-skip a channel or integration.** Every channel/service the user selected must get an explicit `AskUserQuestion` with skip as one of the options. If a credential isn't found, present the [Paste manually] / [Deep hunt] / [Skip] options. If a smoke test fails, ask the user whether to retry, reconfigure, or skip. The ONLY acceptable way to skip is the user choosing a "Skip" option. Do not silently move past a service because scanning found nothing — that's when the user needs to be asked the most.
- Show what's already configured first, so the user only fills gaps.
- **Never show the user's real name or email in output unless the user explicitly provided it in THIS session.** Do not read from memory, existing configs, or environment variables to populate display names.
- **Max 4 options per `AskUserQuestion` call.** The tool schema enforces `<=4` items in the `options` array. When a step lists >4 choices, filter already-configured items first, then batch the rest into multiple sequential calls of <=4 options each, grouped logically. Use `[More options...]` as the last option to bridge between batches.
- Run ALL diagnostic/probe commands in parallel when possible. Use multiple Bash tool calls in a single message. Never run sequential probes when they're independent (e.g., `gog auth status` AND `wacli doctor` AND keychain scouts should all run simultaneously).
- All writes go to one of these paths — and nothing else:
  - **`$PREFS_PATH`** — per-user preferences + secrets. Resolves to `${CLAUDE_PLUGIN_DATA_DIR:-$HOME/.claude/plugins/data/ops-ops-marketplace}/preferences.json`. Lives in Claude Code's plugin data dir so it survives plugin reinstalls and version bumps. Never committed to git.
  - **`${CLAUDE_PLUGIN_ROOT}/scripts/registry.json`** — per-user project registry (gitignored in the source repo). `mkdir -p` its parent if missing.
  - **`${CLAUDE_PLUGIN_ROOT}/.mcp.json`** — only to add `${user_config.*}` placeholders, never hardcoded tokens.
  - The user's shell profile (`~/.zshrc` etc.) — append-only, never rewrite.
- At the top of every wizard step, make sure `$PREFS_PATH`'s parent directory exists: `mkdir -p "$(dirname "$PREFS_PATH")"`. Claude Code creates `~/.claude/plugins/data/ops-ops-marketplace/` on plugin install but don't assume.

---

## Agent Teams support

If `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` is set, use **Agent Teams** when multiple "Deep hunt" credential agents are needed simultaneously. This enables:
- Credential scouts run in parallel across Doppler, keychains, browser profiles, and password managers
- Agents share findings (e.g., Doppler agent finds a partial config → keychain agent knows to skip that service)
- You can steer mid-hunt: "found the Telegram token, stop hunting for that one"

**Team setup** (only when flag is enabled, multiple deep hunts triggered):
```
TeamCreate("setup-hunters")
Agent(team_name="setup-hunters", name="hunt-telegram", model="haiku", ...)
Agent(team_name="setup-hunters", name="hunt-sentry", model="haiku", ...)
Agent(team_name="setup-hunters", name="hunt-shopify", model="haiku", ...)
```

Each agent reports back its findings. Merge results and present to the user for confirmation.

If the flag is NOT set, use independent fire-and-forget subagents with `run_in_background: true`.

---

## Setup agent delegation pattern

When the user asks a complex integration-specific question during setup (e.g., "how does /ops:ecom handle multi-store setups?"), the setup agent can load the related skill's SKILL.md for deeper context:

```bash
cat "${CLAUDE_PLUGIN_ROOT}/skills/ops-ecom/SKILL.md"
```

Each sub-step below includes a `> **Deep-dive:**` pointer to the related skill file. Follow these pointers instead of duplicating operational details in this wizard.

---

## Step 0 — Preflight (runs in background while you read)

```!
${CLAUDE_PLUGIN_ROOT}/bin/ops-setup-preflight &>/dev/null &
```

**Preflight data**: All probe results are cached at `/tmp/ops-preflight/`. Before running ANY diagnostic command, check if the result already exists there:
- CLI status: `cat /tmp/ops-preflight/clis.txt`
- Slack: `cat /tmp/ops-preflight/slack.json`
- Telegram: `cat /tmp/ops-preflight/telegram.txt`
- gog/Gmail: `cat /tmp/ops-preflight/gog-gmail.json`
- gog/Calendar: `cat /tmp/ops-preflight/gog-cal.json`
- WhatsApp: `cat /tmp/ops-preflight/wacli-doctor.json` and `wacli-chats.json`
- MCP servers: `cat /tmp/ops-preflight/mcp-servers.txt`
- GitHub: `cat /tmp/ops-preflight/gh-auth.txt`
- AWS: `cat /tmp/ops-preflight/aws-identity.json`
- Projects: `cat /tmp/ops-preflight/projects.txt`
- Existing registry: `cat /tmp/ops-preflight/existing-registry.json`
- Existing prefs: `cat /tmp/ops-preflight/existing-prefs.json`
- Doppler: `cat /tmp/ops-preflight/doppler.json`

Wait for `/tmp/ops-preflight/.complete` to exist before reading (it should be ready within 2-3 seconds). NEVER re-run a probe that already has cached results — read the cache file instead.

---

## Step 0b — Detect current state

Run the detector and parse its JSON output (or read from preflight cache if available):

```!
${CLAUDE_PLUGIN_ROOT}/bin/ops-setup-detect 2>/dev/null
```

If `CLAUDE_PLUGIN_ROOT` is unset, fall back to the latest installed cache dir at `~/.claude/plugins/cache/ops-marketplace/ops/<latest-version>/`. Store the resolved path as `PLUGIN_ROOT` for the rest of the session.

Also resolve `PREFS_PATH` once and reuse it everywhere:

```bash
PREFS_PATH="${CLAUDE_PLUGIN_DATA_DIR:-$HOME/.claude/plugins/data/ops-ops-marketplace}/preferences.json"
mkdir -p "$(dirname "$PREFS_PATH")"
```

Print a compact status header to the user, one line per category:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 OPS ► SETUP WIZARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Shell:       zsh → ~/.zshrc
 Core CLIs:   ✓ jq  ✓ git  ✓ gh  ✓ aws  ✓ node
 Channels:    ✓ wacli  ✓ gog  ○ telegram (no token)
 Secrets:     ✓ doppler (project: my-app, config: dev)
 MCPs:        ✓ linear  ✓ sentry  ○ slack  ○ vercel
 Registry:    19 projects
 Preferences: not set
──────────────────────────────────────────────────────
```

Use `✓` for present/set, `○` for missing/unset, `✗` for broken.

---

## Step 1 — Ask which sections to configure

First, offer a quick "set up everything" option:

```
How would you like to run setup?
  [Set up everything — install CLIs, configure all channels, MCPs, registry, daemon, preferences (Recommended)]
  [Pick sections — choose which parts to configure]
  [Re-run a specific section — I know what I need]
```

If the user selects "Set up everything", select ALL sections across all batches and run them in order (Step 2 → 2b → 2c → 3 → 4 → 5 → 5b → 6 → 7), skipping any already fully configured. Within each step, use the "Configure all" fast-path where available.

If the user selects "Re-run a specific section", show a single `AskUserQuestion` listing the section names (cli, daemon, channels, mcp, registry, prefs, env, ecom, mktg, voice, revenue) and jump directly to that step.

If the user selects "Pick sections", proceed with the batched selection below.

Use `AskUserQuestion` with `multiSelect: true`. Offer **only sections that need attention** (skip ones already green). Because AskUserQuestion allows max 4 options, batch into logical groups:

**Batch 1 — Core setup (run early so the daemon can pre-warm caches while you finish):**

| Option             | Header   | Description                                                                   |
| ------------------ | -------- | ----------------------------------------------------------------------------- |
| Install CLIs       | cli      | Install missing command-line tools via Homebrew                               |
| Background daemon  | daemon   | Install ops-daemon early — pre-warms briefing cache while remaining setup runs |
| Configure MCPs      | mcp      | Enable Linear, Sentry, Vercel, Gmail MCP servers                              |
| Build registry      | registry | Register projects Claude should manage                                        |

**Batch 2 — Channels & plugins:**

| Option             | Header   | Description                                                   |
| ------------------ | -------- | ------------------------------------------------------------- |
| Configure channels  | channels | Set tokens for Telegram, WhatsApp, Email, Slack               |
| Companion plugins   | plugins  | Install GSD for project roadmap tracking                      |
| Save preferences    | prefs    | Owner name, timezone, default priorities                      |
| Shell env           | env      | Export `CLAUDE_PLUGIN_ROOT` in shell profile                  |

**Batch 3 — Extras (only show if not already configured):**

| Option              | Header   | Description                                                   |
| ------------------- | -------- | ------------------------------------------------------------- |
| Configure ecommerce | ecom     | Set Shopify store URL + admin token, ShipBob                  |
| Configure marketing | mktg     | Set Klaviyo, Meta Ads, GA4, Search Console keys               |
| Configure voice     | voice    | Set Bland AI, ElevenLabs, Groq API keys                       |
| Configure revenue   | revenue  | Set Stripe + RevenueCat keys for live MRR tracking            |

Present each batch as a separate `AskUserQuestion` call. Skip batches where all items are already green. Collect all selections across batches and run each selected section in order.

---

## Step 2 — Install CLIs (if selected)

If multiple CLIs are missing, offer a bulk install first:

```
Missing CLIs detected: jq, gh, wacli. What would you like to do?
  [Install all missing CLIs (Recommended)]
  [Pick which to install]
  [Skip CLI installation]
```

If the user selects "Install all", install every missing tool in sequence without further prompts. If "Pick which to install", ask per tool:

```
Install jq?           [Yes, install now] [Skip]
Install gh?           [Yes, install now] [Skip]
Install wacli?        [Yes, install now] [Skip — manual install required]
```

For each `Yes`, run:

```bash
${PLUGIN_ROOT}/bin/ops-setup-install <tool>
```

Report success/failure. If Homebrew is missing on macOS, stop and tell the user to install it from https://brew.sh first — do not attempt to install brew automatically.

After installation, re-run `ops-setup-detect` to refresh status before continuing.

---

## Step 2b — Companion plugins (if selected)

### GSD (Get Shit Done)

GSD is a third-party Claude Code plugin that adds project roadmap tracking. When installed, claude-ops dashboards (`/ops:go`, `/ops:projects`, `/ops:next`, `/ops:yolo`) automatically show active phases, progress, and next actions per project. Without it, those sections are simply omitted.

Check if GSD is already installed:

```bash
find ~/.claude -name "gsd-progress" -path "*/skills/*" 2>/dev/null | head -1 | grep -q . && echo "installed" || echo "not_installed"
```

If not installed, ask via `AskUserQuestion`:

```
GSD adds project roadmap tracking to your ops dashboards.
  /ops:go shows active phases and progress per project
  /ops:projects shows GSD state alongside CI/PR status
  /ops:next factors in GSD work priority

  [Install GSD (latest)] [Skip — I don't need roadmap tracking]
```

On install, run the commands directly — do NOT tell the user to run them manually:

```bash
# Install GSD in one shot — no user intervention needed
claude plugin marketplace add gsd-build/get-shit-done 2>/dev/null && \
claude plugin install gsd@gsd-build-get-shit-done 2>/dev/null
```

If `claude` CLI is not available in the path, fall back to the plugin cache mechanism:

```bash
# Direct marketplace clone fallback
GSD_MARKETPLACE_DIR="$HOME/.claude/plugins/marketplaces/gsd-build-get-shit-done"
if [ ! -d "$GSD_MARKETPLACE_DIR" ]; then
  git clone https://github.com/gsd-build/get-shit-done.git "$GSD_MARKETPLACE_DIR" 2>/dev/null
fi
```

Report success/failure. Record `plugins.gsd = "installed"` in `$PREFS_PATH`.

If they skip:

```
Skipped GSD. Install later with: /plugin marketplace add gsd-build/get-shit-done
```

---

## Step 2c — Background Daemon (early install, pre-warm caches)

**Why install the daemon this early?** Running the daemon in parallel with the rest of setup lets it start pre-warming the briefing cache (`ops-gather` results for infra/git/PRs/CI), so by the time the user reaches Step 7 and runs `/ops:go`, the briefing is already cached and loads in under 3 seconds instead of 10. Channel-dependent services (wacli-sync, message-listener, inbox-digest, store-health) are added later in Step 5b once their channels are configured.

### Platform support

The background daemon ships with a `launchd` integration (macOS only). Detect the platform before attempting install:

```bash
case "$(uname -s)" in
  Darwin)                OS=macos ;;
  Linux)                 grep -qi microsoft /proc/version 2>/dev/null && OS=wsl || OS=linux ;;
  MINGW*|MSYS*|CYGWIN*)  OS=windows ;;
  *)                     OS=unknown ;;
esac
```

- **macOS** (`OS=macos`): proceed with the full `launchctl bootstrap` flow below.
- **Linux / WSL** (`OS=linux|wsl`): `launchctl` is not available. The daemon script (`${CLAUDE_PLUGIN_ROOT}/scripts/ops-daemon.sh`) runs fine under `bash`, but installing it as a user service requires `systemd --user` (Linux) or a custom cron/at wrapper (WSL). That work is **out of scope for this patch** — track as future work. For now, print:

  ```
  ○ Background daemon — skipped (Linux/WSL install via systemd --user is pending; see docs/daemon-guide.md).
    You can still launch it manually with:  nohup ${CLAUDE_PLUGIN_ROOT}/scripts/ops-daemon.sh &
  ```

  Write `daemon.enabled = false` and `daemon.skip_reason = "platform:<os>"` to `$PREFS_PATH` and continue to Step 3.
- **Windows** (native, `OS=windows`): the daemon is **not installed**. Print `○ Background daemon — not supported on native Windows. Use WSL or run ops-daemon.sh manually.` and continue.

If `OS=macos`, check whether the daemon is already installed:

```bash
launchctl print gui/$(id -u)/com.claude-ops.daemon 2>/dev/null | head -1
```

If already loaded, print `✓ Background daemon already running — will reconcile services in Step 5b.` and skip to Step 3.

Otherwise ask via `AskUserQuestion`:

```
Install the ops background daemon now?
  Starts pre-warming briefing cache while you finish the rest of setup.
  Auto-heals on failure. Single launchd agent (com.claude-ops.daemon).
  Channel services (wacli-sync, message-listener) added after channels are set up.
  [Yes — install now]  [Skip — I'll run it manually later]
```

On `Yes`, run the install (use `run_in_background: true` — RULE ZERO):

```bash
# Always resolve CLAUDE_PLUGIN_ROOT to the CURRENT installed version — never hardcode a version number.
# If CLAUDE_PLUGIN_ROOT is not set, detect it from the plugin cache:
PLUGIN_ROOT="${CLAUDE_PLUGIN_ROOT:-$(ls -d "$HOME/.claude/plugins/cache/ops-marketplace/ops"/*/ 2>/dev/null | sort -V | tail -1)}"
DAEMON_SCRIPT="${PLUGIN_ROOT}/scripts/ops-daemon.sh"
chmod +x "$DAEMON_SCRIPT"
PLIST_TEMPLATE="${PLUGIN_ROOT}/scripts/com.claude-ops.daemon.plist"
PLIST_DEST="$HOME/Library/LaunchAgents/com.claude-ops.daemon.plist"
DATA_DIR="${CLAUDE_PLUGIN_DATA_DIR:-$HOME/.claude/plugins/data/ops-ops-marketplace}"
LOG_DIR="$DATA_DIR/logs"
mkdir -p "$LOG_DIR"

# Resolve bash 4+ (required for associative arrays in ops-daemon.sh).
# macOS ships bash 3; Homebrew installs bash 5 at /opt/homebrew/bin/bash.
BASH_PATH="/bin/bash"
if [[ -x /opt/homebrew/bin/bash ]]; then
  BASH_PATH="/opt/homebrew/bin/bash"
elif [[ -x /usr/local/bin/bash ]]; then
  BASH_PATH="/usr/local/bin/bash"
fi

# Generate plist
sed -e "s|__DAEMON_SCRIPT_PATH__|$DAEMON_SCRIPT|g" \
    -e "s|__BASH_PATH__|$BASH_PATH|g" \
    -e "s|__PLUGIN_ROOT__|$PLUGIN_ROOT|g" \
    -e "s|__LOG_DIR__|$LOG_DIR|g" \
    -e "s|__HOME__|$HOME|g" \
    "$PLIST_TEMPLATE" > "$PLIST_DEST"

# Write a minimal initial services config — only the services that don't depend on
# channels yet. `briefing-pre-warm` runs ops-gather every 2 minutes so the next
# /ops:go is instant. `memory-extractor` runs but stays idle until channels exist.
SERVICES_CONFIG="$DATA_DIR/daemon-services.json"
cat > "$SERVICES_CONFIG" <<JSON
{
  "services": {
    "briefing-pre-warm": {
      "enabled": true,
      "command": "${CLAUDE_PLUGIN_ROOT}/bin/ops-gather",
      "cron": "*/2 * * * *",
      "_note": "Pre-warms /ops:go cache. Runs every 2 minutes."
    },
    "memory-extractor": {
      "enabled": true,
      "command": "${CLAUDE_PLUGIN_ROOT}/scripts/ops-memory-extractor.sh",
      "cron": "*/30 * * * *",
      "health_file": "~/.claude/plugins/data/ops-ops-marketplace/memories/.health",
      "_note": "Idle until channels are configured; will extract profiles once wacli/gog are live."
    }
  }
}
JSON

# Remove the old standalone wacli keepalive if present
launchctl bootout gui/$(id -u)/com.claude-ops.wacli-keepalive 2>/dev/null || true
rm -f "$HOME/Library/LaunchAgents/com.claude-ops.wacli-keepalive.plist"

# Load daemon in background — does NOT block the wizard
launchctl bootout gui/$(id -u) "$PLIST_DEST" 2>/dev/null || true
launchctl bootstrap gui/$(id -u) "$PLIST_DEST"
```

Write `daemon.enabled = true` and `daemon.installed_at_step = "2c"` to `$PREFS_PATH` so Step 5b knows to reconcile services instead of re-installing.

Print:

```
✓ Background daemon — installed. Pre-warming briefing cache in parallel while you finish setup.
  Channel-dependent services will be added after channels are configured (Step 5b).
```

Continue immediately to Step 3 — do NOT wait for the daemon to confirm startup. The health file check is deferred to Step 5b.

> **Deep-dive:** see `${CLAUDE_PLUGIN_ROOT}/docs/daemon-guide.md` for full operational instructions, CLI reference, and troubleshooting for the background daemon. The setup agent can load that file directly when it needs more depth than this wizard provides.

---

## Step 3 — Configure channels (if selected)

First, offer a quick "configure everything" option before individual selection. Use `AskUserQuestion`:

```
How would you like to configure channels and integrations?
  [Configure all — set up every available channel and service (Recommended)]
  [Pick individually — choose which channels to configure]
  [Skip all — configure channels later]
```

If the user selects "Configure all", run every channel sub-flow below in sequence (Telegram → WhatsApp → Email → Slack → Notion → Calendar → Doppler → Vault), skipping any already configured. If the user selects "Skip all", move to Step 4.

If the user selects "Pick individually", ask which channels using `AskUserQuestion` with `multiSelect: true`. Because AskUserQuestion allows max 4 options, batch into two groups. Skip channels already configured (show only those needing attention).

**Batch 1 — Messaging:**

| Option   | Header   | Description                                                             |
| -------- | -------- | ----------------------------------------------------------------------- |
| Telegram | telegram | Bot token + owner ID for `/ops-comms telegram`                          |
| WhatsApp | whatsapp | wacli doctor + auto-heal + backfill                                     |
| Email    | email    | gog CLI → Gmail MCP fallback for `/ops-inbox email`                     |
| Slack    | slack    | Slack MCP server (managed by Claude Code)                               |

**Batch 2 — Knowledge & Services:**

| Option   | Header   | Description                                                             |
| -------- | -------- | ----------------------------------------------------------------------- |
| Notion   | notion   | Notion MCP — workspace search, comments, tasks, knowledge base          |
| Calendar | calendar | gog calendar → Google Calendar MCP fallback — schedule context for briefings |
| Doppler  | doppler  | Secrets manager — set default project + config for all ops skills       |
| Vault    | vault    | Password manager — 1Password, Dashlane, Bitwarden, or macOS Keychain    |

Present each batch as a separate `AskUserQuestion` call. Skip batches where all items are already configured. For each selected channel, run the matching sub-flow below.

---

#### Shared: detect the host OS before suggesting installs

The claude-ops wizard runs on macOS, Linux (all major distros + WSL), and Windows (native + WSL). Before printing any install command, the skill MUST detect the host OS and pick the OS-appropriate variant. Never print a `brew install …` command to a Windows user, and never print `winget install …` to a macOS user.

Minimal detection snippet (bash — works on macOS, Linux, WSL, MSYS/Cygwin):

```bash
case "$(uname -s)" in
  Darwin*) OS=macos ;;
  Linux*)
    if grep -qi microsoft /proc/version 2>/dev/null; then OS=wsl
    elif [ -f /etc/os-release ]; then
      . /etc/os-release
      case "$ID" in
        arch|manjaro) OS=arch ;;
        fedora|rhel|centos|rocky|almalinux) OS=fedora ;;
        debian|ubuntu|pop|linuxmint) OS=debian ;;
        alpine) OS=alpine ;;
        opensuse*|sles) OS=suse ;;
        *) OS=linux ;;
      esac
    else OS=linux; fi ;;
  MINGW*|MSYS*|CYGWIN*) OS=windows ;;
  *) OS=unknown ;;
esac
```

Cascade for the package manager (pick the first one available):
1. `brew` (macOS + Linuxbrew) — preferred on macOS.
2. Native OS manager — `apt-get` (debian/ubuntu), `dnf` (fedora/rhel), `pacman` (arch), `zypper` (suse), `apk` (alpine).
3. `winget` (Windows 10 1809+) → `scoop` → `choco` → build-from-source as last resort on Windows.

When the preferred manager isn't installed, fall forward to the next available option rather than aborting the flow. Every `AskUserQuestion` "[Install now — …]" prompt below uses an OS-aware command table — print only the row(s) that match the detected OS.

For the authoritative cross-OS detection logic, reuse `bin/ops-setup-detect` (which emits `os`, `pkg_mgr`, `arch`, `keyring_backend`, `shell`, `browser_profiles_found` in its JSON output).

---

#### Shared: prefer OAuth over manual tokens

Whenever a channel has a **browser-based OAuth flow** available, offer that first and put manual-token entry behind it as a fallback. OAuth is safer (scoped, revocable, no secrets in dotfiles), and usually faster for the user.

| Channel        | OAuth path                                                 | Manual fallback                        |
| -------------- | ---------------------------------------------------------- | -------------------------------------- |
| Email (gog)    | `gog auth add <email> --services gmail,calendar,drive,contacts,docs,sheets` (browser) | n/a — gog is OAuth-only |
| Calendar (gog) | same `gog auth add` with calendar in `--services`          | n/a                                    |
| Slack          | `claude mcp add slack` (handles OAuth through Claude Code) | bot token via auto-scan + manual paste |
| Linear         | `claude mcp add linear`                                    | API key                                |
| Sentry         | `claude mcp add sentry`                                    | DSN / auth token                       |
| Vercel         | `claude mcp add vercel`                                    | personal access token                  |
| Telegram       | ❌ no OAuth (Bot API is token-only by design)              | auto-scan + manual paste (only option) |
| WhatsApp       | QR pairing via `wacli auth` (similar UX to OAuth)          | n/a — paired sessions only             |

When a channel supports OAuth, the default `AskUserQuestion` should lead with it:

```
[Connect via OAuth (recommended)]  [Enter a token manually]  [Skip]
```

Only go into the credential auto-scan flow below when the user picks "manually" or when the channel (Telegram, local tools) has no OAuth path.

---

---

## Universal Credential Auto-Scan

**BEFORE asking the user for ANY credential**, run this scan sequence. This applies to ALL steps — channels, ecommerce, marketing, voice, and MCPs. The user should never be asked to find a key that's already on their system.

**CRITICAL — exhaust ALL sources before reporting.** Run every scan source (1-10 below) in a single batch, THEN analyze the combined results. Do NOT report "no credentials found" after checking only env vars and Dashlane — Chrome history, .env files, Doppler, and keychain may have the answer. If API tokens are missing but the store/service identity was found (e.g. store URL in Chrome history, login entry in Dashlane), report what you found and skip to the token step with the identity pre-filled. The user saying "find it" or "check all available sources" means you did not search thoroughly enough — never ask the user to look for something you can find programmatically.

For each variable name (e.g. `TELEGRAM_BOT_TOKEN`, `SHOPIFY_ACCESS_TOKEN`, `KLAVIYO_API_KEY`):

1. **Current shell environment** — `printenv <VAR>`. Running shell inherits exports, Doppler injections, dotenv-loaded files. Most likely to be correct.
2. **Shell profile files** — grep `~/.zshrc`, `~/.bashrc`, `~/.zprofile`, `~/.config/fish/config.fish`, `~/.envrc` (direnv) for `<VAR>=` or `export <VAR>=`. Show the file path next to the value so the user knows where it's from.
3. **Doppler (all projects)** — if `command -v doppler` succeeds:
   ```bash
   for proj in $(doppler projects --json 2>/dev/null | jq -r '.[].slug'); do
     doppler secrets --project "$proj" --config prd --json 2>/dev/null | \
       jq -r --arg var "$VAR" --arg proj "$proj" \
       'to_entries[] | select(.key == $var) | "\(.value.computed) (doppler:\($proj)/prd)"'
   done
   ```
   Also try the default project config (dev/staging) if prd fails. Show source attribution `(project: <slug>, config: <config>)`.
4. **Dashlane CLI** — if `command -v dcli` succeeds:
   ```bash
   dcli password "$SERVICE_KEYWORD" --output json 2>/dev/null
   ```
   Map service keywords: `shopify` → SHOPIFY vars, `klaviyo` → KLAVIYO vars, `bland` / `bland-ai` → BLAND vars, etc.
5. **macOS Keychain** — for specific services:
   ```bash
   security find-generic-password -s "$SERVICE" -w 2>/dev/null
   ```
   Use service names matching common patterns (e.g. `shopify-admin-token`, `klaviyo-api-key`, `bland-ai-api-key`).
6. **OpenClaw config** — if `~/.openclaw/openclaw.json` exists:
   ```bash
   jq -r --arg var "$VAR" '.agents.defaults.env[$var] // empty' ~/.openclaw/openclaw.json 2>/dev/null
   ```
7. **Installed MCP configs** — read each `.mcp.json` the detector found. For each server entry, look at `.env` and `.args` for the variable name or for literal values that look like the target. Show the MCP server name as the source.
8. **Plugin preferences** — check existing `$PREFS_PATH` for the key under the relevant section (e.g. `.ecom.shopify.admin_token`, `.marketing.klaviyo.api_key`). If found and not a `doppler:` reference, show it as a source.
9. **Chrome history** — for services with web admin UIs (Shopify, Klaviyo, etc.), query Chrome's History SQLite DB for admin URLs that reveal the account/store identity:
   ```bash
   sqlite3 ~/Library/Application\ Support/Google/Chrome/Default/History \
     "SELECT DISTINCT url FROM urls WHERE url LIKE '%<service_domain>%' ORDER BY last_visit_time DESC LIMIT 10" 2>/dev/null
   ```
   Extract identifiers (e.g. `*.myshopify.com` store slugs, account IDs) from the URLs.
10. **Project .env files** — scan `~/Projects/*/.env*` for the variable name or service domain patterns. These often contain credentials from other projects that can be reused.

**Env var → service keyword mapping for auto-scan:**

| Variable names | Service keyword (Dashlane/Keychain) |
| --- | --- |
| `SHOPIFY_ACCESS_TOKEN`, `SHOPIFY_ADMIN_TOKEN`, `SHOPIFY_STORE_URL` | `shopify` |
| `KLAVIYO_API_KEY`, `KLAVIYO_PRIVATE_KEY` | `klaviyo` |
| `META_ACCESS_TOKEN`, `FACEBOOK_ACCESS_TOKEN`, `META_AD_ACCOUNT_ID` | `meta`, `facebook` |
| `GA4_PROPERTY_ID`, `GA_MEASUREMENT_ID` | `google-analytics`, `ga4` |
| `BLAND_AI_API_KEY`, `BLAND_API_KEY` | `bland-ai`, `bland` |
| `ELEVENLABS_API_KEY` | `elevenlabs` |
| `GROQ_API_KEY` | `groq` |
| `SHIPBOB_ACCESS_TOKEN` | `shipbob` |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_API_ID`, `TELEGRAM_API_HASH` | `telegram` |
| `SLACK_BOT_TOKEN`, `SLACK_MCP_XOXC_TOKEN` | `slack` |

**Present the findings** with `AskUserQuestion` (**max 4 options per call**):

```
Found credential for SHOPIFY_ACCESS_TOKEN:
  [A] shell env + ~/.zshrc + Dashlane — shpat_508b...682e  (matched across 3 sources)
  [B] Doppler (project: mystore, config: prd) — shpat_9f2c...a17b  (different!)
  [C] Enter a different one
```

Rules for the prompt:

- Show the **first 8 and last 4 characters** of any token, never the full value.
- **Always collapse matching sources** into one option with `(matched in env + ~/.zshrc + Dashlane)` appended. This is critical to stay within the 4-option limit.
- If sources **disagree**, show each distinct value as a separate option. If there are more than 3 distinct values (rare), batch into multiple calls with `[More sources...]`.
- Placeholder values like `${user_config.*}`, `<your-token>`, `CHANGE_ME`, or empty strings count as NOT FOUND.
- Always include an `[Enter a different one]` option as the last option.
- If NO source has a value, present the user with options via `AskUserQuestion`:

```
<SERVICE_NAME> — no credential found after scanning all sources.

  [I have it — let me paste it]
  [Deep hunt — spawn an agent to find it]
  [Skip this service]
```

  - **"I have it"** → show instructions for where to find the credential in the service's dashboard, then accept free-text input.
  - **"Deep hunt"** → spawn a Haiku subagent in the background with this mandate:

    ```
    Find the <CREDENTIAL_NAME> for <SERVICE_NAME>. Search exhaustively:
    1. All Doppler projects and configs (dev/stg/prd/ci)
    2. All .env* files across ~/Projects/ recursively
    3. macOS Keychain (security find-generic-password with various service name patterns)
    4. Dashlane CLI (dcli password <service> + related keywords)
    5. Chrome browser — navigate to <service_admin_url> via Kapture/Playwright MCP, log in if needed, and extract the credential from the settings page
    6. All shell profile files (~/.zshrc, ~/.bashrc, ~/.zprofile, ~/.envrc, ~/.config/fish/*)
    7. 1Password CLI (op item list --tags <service>) if available
    8. AWS Secrets Manager / SSM Parameter Store if aws cli authenticated

    Return the credential value if found, or a detailed report of everywhere you checked and what you found (partial matches, expired tokens, wrong-format values).
    ```

    Use `Agent(subagent_type: "general-purpose", model: "haiku")` with `run_in_background: true`. Continue to the next service while the hunt runs. When the agent returns, present findings to the user for confirmation.

  - **"Skip"** → record as skipped in `$PREFS_PATH`, move on.

**On selection**, use the chosen value as the source of truth and — with the user's consent — optionally propagate it back to the other sources (e.g. "Also update ~/.zshrc and Doppler to match?"). Default to NO for propagation unless the user opts in.

---

#### Shared: credential auto-scan

**This section applies specifically to channel tokens (Telegram, Slack).** For all other steps, see the [Universal Credential Auto-Scan](#universal-credential-auto-scan) section above — the same pattern applies everywhere.

**Before prompting the user to paste any token**, scan for it using the Universal Credential Auto-Scan sequence above. Show the user what was found and ask them to confirm or override. Never silently use a token without confirmation.

---

### 3a — Telegram (user-auth via ops-telegram-autolink)

**Always ask before starting the Telegram flow** — even when the user selected "all channels". Use `AskUserQuestion`:

```
Set up Telegram personal account access?
  [Yes — enter my phone number and authenticate]
  [Skip Telegram]
```

If the user skips, record `channels.telegram = "skipped"` in `$PREFS_PATH` and move on. Do NOT silently mark Telegram as unconfigured — the explicit skip prevents the status header from showing `○ telegram (no token)` as an action item on subsequent runs.

**Rate-limit guard**: Before starting, check `$PREFS_PATH` for `channels.telegram` being an object with `.status == "rate_limited"` — use a type guard: `if (channels.telegram | type) == "object" and .channels.telegram.status == "rate_limited"` (jq: `if (.channels.telegram | type) == "object" then .channels.telegram.status else "skipped" end`). If `retry_after` is in the future, present the user with `AskUserQuestion`:
```
Telegram is rate-limited until [time]. What would you like to do?
  [Wait and retry after cooldown — re-run /ops:setup telegram after [time]]
  [Skip Telegram for now]
```
Do NOT attempt `send_password` during a rate-limit window — it will fail immediately and may extend the cooldown. If the user selects Skip, record the skip in `$PREFS_PATH` and move to the next channel.

**Bots cannot read user DMs**, so `/ops-inbox telegram` requires a personal-account MCP. The plugin ships `bin/ops-telegram-autolink.mjs` which:

1. Scans scout sources (keychain → ~/.claude.json → shell profiles → Doppler) for previously-extracted `TELEGRAM_API_ID` / `TELEGRAM_API_HASH` / `TELEGRAM_SESSION`.
2. If none found, makes plain HTTP requests to `my.telegram.org` (no browser — `my.telegram.org` uses server-side HTML, no JS required), logs in with a phone code from the bridge file, creates an app if needed, and extracts api_id + api_hash.
3. Runs gram.js `client.start()` to generate a session string, bridging the second code via the same file.
4. Emits final JSON on stdout: `{api_id, api_hash, phone, session}`.

Sub-flow (only runs if user selected Yes above):

1. **Scout first.** Check keychain for previously-extracted Telegram credentials:

   ```bash
   for svc in telegram-api-id telegram-api-hash telegram-phone telegram-session; do
     security find-generic-password -s "$svc" -w 2>/dev/null && echo "FOUND: $svc"
   done
   ```

   Also check `~/.claude.json mcpServers.telegram.env.TELEGRAM_API_ID`. If all 4 are found and the stored `TELEGRAM_SESSION` decodes as a StringSession, tell the user `"✓ Telegram already configured (api_id=XXXXXXX, phone=+XX...)"` and skip to step 8.

2. **Ask the user for their phone number** via `AskUserQuestion` with a single free-text option. Do NOT offer country-specific presets or example numbers — just one option that prompts for direct input:

   ```
   Enter your Telegram phone number (include country code, e.g. +31612345678):
     [Enter phone number — type your full number starting with +]
   ```

   The user will select this option and type their number in the "Other" free-text field. Validate it matches `^\+\d{7,15}$`. Explain that the phone is only used once during the first-run extraction and is stored locally only.

3. **Warn about 2 codes.** Inform the user via `AskUserQuestion`: `"Telegram will send TWO codes to your Telegram app — one for my.telegram.org web login, then a second one for gram.js auth. Have your Telegram app ready."` Options: `[I'm ready]`, `[Cancel]`.

4. **Spawn the autolink script in the background with restrictive file perms:**

   ```bash
   (umask 077 && node "${CLAUDE_PLUGIN_ROOT}/bin/ops-telegram-autolink.mjs" --phone "$PHONE" 2>/tmp/ops-telegram-autolink.log 1>/tmp/ops-telegram-autolink.out &)
   echo $! > /tmp/ops-telegram-autolink.pid
   ```

   Use the Bash tool's `run_in_background: true`. The `umask 077` creates all bridge files (log, out) with mode 0600. The .out file contains the full credential JSON including the gram.js session string — if it's world-readable, any local process can exfiltrate long-lived Telegram account access.

5. **Poll the stderr log for `need_code` events.** Every 3 seconds, read `/tmp/ops-telegram-autolink.log` and look for the most recent `{"type":"need_code", ...}` line that hasn't been answered yet. When you see one:
   - Determine which code: `channel: "web_login"` (first) or `channel: "gram_auth"` (second).
   - Use `AskUserQuestion` with a free-text input: `"Enter the code Telegram just sent to your Telegram app:"`. **Do NOT say "digits only"** — Telegram web login codes can contain letters, hyphens, and underscores (e.g. `Zv_-ef77YSU`). The autolink's bridge file accepts any 3-20 character alphanumeric+hyphen+underscore string.
   - Write the code to `/tmp/telegram-code.txt` with restrictive perms: `Bash: (umask 077 && printf '%s' "$CODE" > /tmp/telegram-code.txt)`. The `umask 077` is critical — without it the file is created world-readable on macOS (where `/tmp` is `drwxrwxrwt`) and any local process can race to read the code during the 2s poll window.
   - **Verify the code was consumed** within 10 seconds: `ls /tmp/telegram-code.txt 2>/dev/null`. If the file still exists after 10s, the script's validation regex rejected the code. Read the log for errors. Do NOT re-run the script or request a new code — that burns a login attempt.
   - Wait for the next event.
   - If you see `{"type":"need_password"}`, handle 2FA: ask the user via `AskUserQuestion` and write to `/tmp/telegram-password.txt` with `(umask 077 && printf '%s' "$PW" > /tmp/telegram-password.txt)`. Same perm hardening as the code file. The 2FA password is far more sensitive than a one-time code.

6. **Wait for the script to exit.** Poll until the process is no longer running (`ps -p "$(cat /tmp/ops-telegram-autolink.pid)"`). Read `/tmp/ops-telegram-autolink.out` — it should contain a single JSON line with `api_id`, `api_hash`, `phone`, and `session`. **Security note**: the setup skill should have dispatched the autolink with `(umask 077 && node "${CLAUDE_PLUGIN_ROOT}/bin/ops-telegram-autolink.mjs" --phone "$PHONE" 2>/tmp/ops-telegram-autolink.log 1>/tmp/ops-telegram-autolink.out &)` so the .log and .out files get 0600 mode. Verify with `stat -f '%Lp' /tmp/ops-telegram-autolink.out` → must print `600`. Immediately `shred -u` (Linux) or `rm -P` (macOS) the .out file after reading the credentials into memory.

   **Error recovery — CRITICAL: do NOT burn login attempts.** Each `send_password` call counts toward Telegram's rate limit (~3-5 per 8 hours). If the autolink fails:

   - **`"could not extract ... after 6 extraction strategies"` / extraction failure**: The HTML parsing failed but the login succeeded. Do NOT re-run the script. Instead, check if the error includes `html_snippet` — the snippet shows the stripped page text. If it contains a 5-12 digit number near "api_id" and a 32-char hex near "api_hash", extract them directly with grep/regex from the snippet. If the snippet shows a login page or redirect, the session expired during extraction.
   - **`rate-limited`**: Record `channels.telegram.status = "rate_limited"` and `channels.telegram.retry_after` (now + 8 hours) in `$PREFS_PATH`. Move on to the next channel. On subsequent `/ops:setup` runs, check `retry_after` and skip Telegram if the cooldown hasn't expired.
   - **Code file not consumed**: If `/tmp/telegram-code.txt` still exists 10+ seconds after writing, the validation regex rejected it. Read the file contents and the log. Do NOT ask the user for another code — the original code is still valid, you just need to fix the bridge.
   - **General rule**: You get at most 2 `send_password` attempts per setup session. If the first attempt fails for a non-rate-limit reason, diagnose the root cause before trying again. If the second attempt fails, save state and move on.

7. **Persist to keychain + preferences.** macOS only:

   ```bash
   security add-generic-password -U -s telegram-api-id -a "$USER" -w "$API_ID"
   security add-generic-password -U -s telegram-api-hash -a "$USER" -w "$API_HASH"
   security add-generic-password -U -s telegram-phone -a "$USER" -w "$PHONE"
   security add-generic-password -U -s telegram-session -a "$USER" -w "$SESSION"
   ```

   Then update `$PREFS_PATH` with `channels.telegram = {backend: "gram.js", api_id: "...", phone: "...", status: "configured"}`. **Never write the api_hash or session to preferences.json** — those stay in keychain only. preferences.json gets only the non-sensitive metadata.

8. **Auto-configure the MCP server.** Write the credentials directly into the plugin's user config so the user doesn't have to manually paste anything:

   ```bash
   # Read existing user config or create empty
   USER_CONFIG="${CLAUDE_PLUGIN_DATA_DIR:-$HOME/.claude/plugins/data/ops-ops-marketplace}/user-config.json"
   mkdir -p "$(dirname "$USER_CONFIG")"

   # Write Telegram credentials to user config
   jq -n \
     --arg api_id "$API_ID" \
     --arg api_hash "$API_HASH" \
     --arg phone "$PHONE" \
     --arg session "$SESSION" \
     '{telegram_api_id: $api_id, telegram_api_hash: $api_hash, telegram_phone: $phone, telegram_session: $session}' \
     > "${USER_CONFIG}.tmp"

   # Merge with existing config if present
   if [ -f "$USER_CONFIG" ]; then
     jq -s '.[0] * .[1]' "$USER_CONFIG" "${USER_CONFIG}.tmp" > "${USER_CONFIG}.new" && mv "${USER_CONFIG}.new" "$USER_CONFIG"
     rm -f "${USER_CONFIG}.tmp"
   else
     mv "${USER_CONFIG}.tmp" "$USER_CONFIG"
   fi
   chmod 600 "$USER_CONFIG"
   ```

   Also update `~/.claude.json` MCP server config if the telegram server entry exists — inject the credentials as env vars:

   ```bash
   # Update .claude.json mcpServers.telegram.env with actual values
   CLAUDE_JSON="$HOME/.claude.json"
   if [ -f "$CLAUDE_JSON" ] && jq -e '.mcpServers.telegram' "$CLAUDE_JSON" >/dev/null 2>&1; then
     jq --arg id "$API_ID" --arg hash "$API_HASH" --arg phone "$PHONE" --arg session "$SESSION" \
       '.mcpServers.telegram.env.TELEGRAM_API_ID = $id | .mcpServers.telegram.env.TELEGRAM_API_HASH = $hash | .mcpServers.telegram.env.TELEGRAM_PHONE = $phone | .mcpServers.telegram.env.TELEGRAM_SESSION = $session' \
       "$CLAUDE_JSON" > "${CLAUDE_JSON}.tmp" && mv "${CLAUDE_JSON}.tmp" "$CLAUDE_JSON"
   fi
   ```

   Print:
   ```
   ✓ Telegram configured automatically.
     API ID:  [api_id]
     Phone:   [phone]
     Session: stored in keychain + MCP config
     Restart Claude Code to activate the Telegram MCP server.
   ```

9. **Smoke test (optional).** Spawn `node ${CLAUDE_PLUGIN_ROOT}/telegram-server/index.js` with the env vars set inline for 3 seconds. If it doesn't print an auth error, the session works.

**Privacy notes for the user** (show once at start):

- The phone number and all credentials stay on your machine. The wizard never transmits them anywhere except to Telegram's own servers during the HTTP login flow.
- If you already have a gram.js / Telethon session for another project, you can skip this and paste those values manually into `/plugin settings`.
- If Telegram replies "Sorry, too many tries. Please try again later." your account is rate-limited for ~8 hours — the wizard cannot bypass this. Wait and retry.

> **Deep-dive:** see `${CLAUDE_PLUGIN_ROOT}/skills/ops-comms/SKILL.md` for full operational instructions, CLI reference, and troubleshooting for this integration. The setup agent can load that file directly when it needs more depth than this wizard provides.

### 3b — WhatsApp (doctor + self-heal + backfill)

WhatsApp is the channel that most often breaks silently. The wizard must **auto-diagnose, doctor, and fix** — not just report status and give up. Run this whole sub-flow top-to-bottom, stopping only when the system is healthy or the user declines a remediation.

#### Step 3b.1 — Presence

Run `command -v wacli`. If missing, ask `AskUserQuestion`: `[Show install docs]`, `[Skip WhatsApp]`. On install docs, print:

```
wacli is not on Homebrew. Install:
  git clone https://github.com/Lifecycle-Innovations-Limited/wacli ~/src/wacli
  cd ~/src/wacli && go build -o /usr/local/bin/wacli ./cmd/wacli
```

and stop this sub-flow.

#### Step 3b.2 — Collect state

Run these in parallel:

```bash
wacli doctor --json 2>&1
wacli auth status --json 2>&1
wacli messages list --after="$(date -v-1d +%Y-%m-%d 2>/dev/null || date -d '1 day ago' +%Y-%m-%d)" --limit=5 --json 2>&1
wacli chats list --json 2>&1 | head -c 4000
```

Parse:

- `doctor.data.authenticated` (bool)
- `doctor.data.lock_held` + `doctor.data.lock_info` (PID + acquired_at timestamp)
- `doctor.data.fts_enabled` (bool — if false, search is degraded, not fatal)
- `messages.data.messages` length → **this is the key health signal**. Authed with zero messages in the last 24h = broken.
- `chats` count and whether it populated at all

#### Step 3b.3 — Diagnose and classify

Apply these rules in order. Stop at the first match.

**A. Not authenticated**
If `doctor.authenticated: false` → print "WhatsApp needs QR pairing. Run `wacli auth` in a separate terminal and scan the QR code with your phone (WhatsApp → Linked Devices → Link a device), then re-run /ops:setup whatsapp." End of sub-flow. Do **not** try to automate the QR scan — it requires the user's phone camera pointed at the terminal (exception to Rule 2).

**B. Stuck sync (stale lock)**
If `lock_held: true` AND the `lock_info.acquired_at` is older than 2 minutes AND the lock-holder PID is still alive (`ps -p <pid>`):

1. Run `wacli sync` in the background (`timeout 15 wacli sync 2>&1`) via the existing process's stderr tail — OR if we can't tee into it, fall back to:
2. Ask `AskUserQuestion`: `"A wacli sync process (pid=N) has been holding the store lock for Xm. Most likely stuck. Kill it?"` → `[Kill pid N and restart sync]`, `[Leave it running]`.
3. On kill: `kill <pid>` (not -9 first). Wait 3s. If still alive, `kill -9 <pid>`. Verify with `ps -p <pid>`.
4. After kill, re-run `wacli doctor --json` to confirm lock is released. Continue to the next rule.

**C. App-state key desync (the big one)**
Run `timeout 15 wacli sync 2>&1 | tee /tmp/wacli-sync-probe.log` (must be done after B so the lock is free). Grep the output for:

- `didn't find app state key` → **session keys are desynced**, needs re-pair
- `failed to decode app state` → same class of error
- `Failed to do initial fetch of app state` → same class of error

If any match:

1. Print the diagnosis verbatim:
   ```
   ⚠  WhatsApp session is authenticated but the app-state decryption keys
      are out of sync with your primary device. This happens when the
      linked-device session is partially wiped on the phone side.
      Symptom: sync runs but 0 messages come through.
      Fix: logout this session and re-pair via QR.
   ```
2. Ask `AskUserQuestion`: `[Logout and walk me through re-pair]`, `[Skip — I'll fix manually]`.
3. On logout: run `wacli auth logout --json` and show the result. Then print:
   ```
   Now run `wacli auth` in a separate terminal (QR-based auth — requires your phone camera).
   A QR code will appear — scan it from WhatsApp → Settings → Linked Devices → Link a device.
   When it says "Connected", come back and type "done".
   ```
4. Wait for the user to confirm via `AskUserQuestion`: `[Done — re-paired]`, `[Cancel]`.
5. On Done, re-run Step 3b.2 to re-collect state and continue to rule D.

**D. Authenticated, lock free, no recent messages, no key errors**
This is usually a cold cache. Go to Step 3b.4 (backfill).

**E. Healthy (messages flowing)**
If `messages.data.messages` has ≥1 entry from the last 24h, print a ✓ summary and skip to Step 3b.5.

#### Step 3b.4 — Historical backfill (background, silent)

Always run this after a fresh re-pair, AND run it when rule D matches. Never skip unless the user explicitly declines.

Backfill is a background optimization — it should not produce verbose output or alarming status messages. Run it silently and swallow non-fatal errors.

1. Load the top 10 chats by recency:
   ```bash
   wacli chats list --json 2>&1 | jq -r '[.data[] | select(.jid) | {jid, name, last_msg: .last_message_ts}] | sort_by(.last_msg) | reverse | .[0:10]'
   ```
2. Tell the user: `"Running historical backfill on your 10 most-recent chats. This runs in the background."` Do not print per-chat progress or 0-message results.
3. For each chat JID, run **sequentially** (backfill shares the store lock, can't parallelize):
   ```bash
   wacli history backfill --chat="<jid>" --count=50 --requests=2 --wait=30s --idle-exit=5s --json 2>&1
   ```
4. **Suppress all per-chat output.** If the command exits non-zero, swallow the error silently — backfill failures are not user-visible events. Do NOT print "0 messages synced", error tracebacks, or explanations about device connectivity.
5. After the loop completes, print only the final health summary (Step 3b.6).

#### Step 3b.5 — FTS index check (optional)

If `doctor.fts_enabled: false`, print:

```
ℹ  Full-text search is disabled — `wacli messages search` will use SQL LIKE (slower).
   This is a non-fatal known-limitation. See wacli docs to enable FTS5.
```

Don't block on this.

#### Step 3b.6 — Record state

Write `channels.whatsapp = "wacli"` to `$PREFS_PATH` and print the final ✓ summary:

```
✓ WhatsApp — wacli authenticated, N chats
```

Never include message counts or backfill results in this summary line.

#### Step 3b.7 — Persistent connection (keepalive)

After successful auth and backfill, set up a persistent connection that keeps wacli connected and auto-syncing. This is what makes WhatsApp reliable across sessions — without it, the linked device disconnects after ~14 days of inactivity and @lid JIDs return empty messages.

**If the ops-daemon is configured (Step 5b), wacli runs as a daemon service** — skip the standalone launchd path below and note to the user that wacli sync is managed by the daemon. The daemon handles bootstrap, auto-backfill, and health reporting centrally.

**Standalone launchd fallback** (only if the ops-daemon is NOT being set up):

**1. Install the keepalive script:**

```bash
KEEPALIVE_SCRIPT="${CLAUDE_PLUGIN_ROOT}/scripts/wacli-keepalive.sh"
chmod +x "$KEEPALIVE_SCRIPT"
```

**2. Generate the launchd plist from template:**

```bash
PLIST_TEMPLATE="${CLAUDE_PLUGIN_ROOT}/scripts/com.claude-ops.wacli-keepalive.plist"
PLIST_DEST="$HOME/Library/LaunchAgents/com.claude-ops.wacli-keepalive.plist"
LOG_DIR="$HOME/.claude/plugins/data/ops-ops-marketplace/logs"
mkdir -p "$LOG_DIR" "$HOME/Library/LaunchAgents"

# Resolve bash 4+ (same logic as daemon plist)
BASH_PATH="/bin/bash"
if [[ -x /opt/homebrew/bin/bash ]]; then
  BASH_PATH="/opt/homebrew/bin/bash"
elif [[ -x /usr/local/bin/bash ]]; then
  BASH_PATH="/usr/local/bin/bash"
fi

sed -e "s|__KEEPALIVE_SCRIPT_PATH__|$KEEPALIVE_SCRIPT|g" \
    -e "s|__BASH_PATH__|$BASH_PATH|g" \
    -e "s|__LOG_DIR__|$LOG_DIR|g" \
    -e "s|__HOME__|$HOME|g" \
    "$PLIST_TEMPLATE" > "$PLIST_DEST"
```

**3. Load the agent:**

```bash
# Unload if already loaded (idempotent)
launchctl bootout gui/$(id -u) "$PLIST_DEST" 2>/dev/null || true
launchctl bootstrap gui/$(id -u) "$PLIST_DEST"
```

**4. Verify it's running:**

Wait 3 seconds, then check:
```bash
launchctl print gui/$(id -u)/com.claude-ops.wacli-keepalive 2>&1 | head -5
cat "$HOME/.wacli/.health" 2>/dev/null
```

If the health file shows `status=connected` or `status=needs_reauth`, the daemon is working. Print:

```
✓ WhatsApp keepalive — launchd agent installed and running
  Persistent sync active. Auto-restarts on disconnect.
  Health: ~/.wacli/.health | Logs: ~/.claude/plugins/data/ops-ops-marketplace/logs/
```

If `status=needs_reauth`, immediately trigger the re-pair flow from Step 3b.3 Rule C.

**5. How the keepalive self-heals:**

The keepalive script (`wacli-keepalive.sh`) handles these failure modes automatically:

| Failure | Auto-fix |
|---------|----------|
| Orphaned wacli process holding lock | Kills stale PIDs, clears lock |
| Connection drop (WhatsApp server restart) | launchd restarts within 60s |
| App-state key desync | Writes `needs_reauth` to health file — ops skills detect this and prompt QR |
| Auth expired | Writes `needs_auth` — same prompt flow |
| Script crash | launchd KeepAlive=true restarts immediately (throttled 60s) |

**6. Health file contract for other ops skills:**

All ops skills that use WhatsApp (`ops-inbox`, `ops-comms`, `ops-go`) MUST check `~/.wacli/.health` before attempting wacli commands. If `status=needs_auth` or `status=needs_reauth`:

1. Print the diagnosis to the user:
   ```
   ⚠ WhatsApp needs re-authentication.
   Run `wacli auth` in a separate terminal and scan the QR code with your phone
   (QR-based auth — exception to Rule 2). Then type "done" to continue.
   ```
2. Use `AskUserQuestion`: `[Done — re-paired]`, `[Skip WhatsApp]`.
3. On Done: restart the keepalive daemon via `launchctl kickstart -k gui/$(id -u)/com.claude-ops.wacli-keepalive` and wait 5s for health file update.

This ensures the user is never silently left with a broken WhatsApp connection — every ops skill surfaces the problem and walks them through the fix.

> **Deep-dive:** see `${CLAUDE_PLUGIN_ROOT}/skills/ops-comms/SKILL.md` and `${CLAUDE_PLUGIN_ROOT}/skills/ops-inbox/SKILL.md` for full operational instructions, CLI reference, and troubleshooting for this integration. The setup agent can load those files directly when it needs more depth than this wizard provides.

### 3c — Email

Email has two possible backends, tried in this order:

#### Preferred: `gog` CLI

`gog` is the email + calendar CLI that `ops-inbox` and `ops-comms` call by default. It's a self-contained binary with its own OAuth token at `~/.gog/token.json` — full read + send permissions, no Claude Desktop config required.

1. Check `gog` on PATH with `command -v gog`.
2. **If installed**, run `gog auth status 2>&1 || true` and show the output.
   - If auth is red (not authenticated / token expired / exit != 0), run `gog auth add "$USER_EMAIL" --services gmail,calendar,drive,contacts,docs,sheets` via Bash tool with `run_in_background: true` (it opens a browser for the OAuth flow). Tell the user: "Opening browser for Gmail OAuth — complete the sign-in there, then type 'done'." Use `AskUserQuestion`: `[Done — authenticated]`, `[Skip email]`.
   - If auth is green, probe with:
     ```bash
     gog gmail labels list --json 2>&1 | head -5
     ```
     If this returns JSON containing a `labels` array, gog is authenticated and the Gmail API is working. Report ✓. If the output is an error or empty, treat as broken and instruct the user to re-run `gog auth add <email> --services gmail,calendar,drive,contacts,docs,sheets`.
   - Record `channels.email = "gog"` in `$PREFS_PATH` and stop here.

#### Fallback: Claude Gmail MCP connector

If `gog` is not on PATH, look at the detector's `mcp_configured` array for any entry matching (case-insensitive) `gmail`, `google-mail`, or `claude_ai_Gmail` — these are the common names for Anthropic's Gmail connector or user-installed Gmail MCP servers.

3. **If a Gmail MCP is configured**, ask `AskUserQuestion`:
   - `[Use Gmail MCP (read-only fallback)]`
   - `[Install gog instead — show docs]`
   - `[Skip email]`
4. On "Use Gmail MCP", record `channels.email = "mcp:<name>"` in `$PREFS_PATH` (where `<name>` is the actual MCP server name you found) and **print this warning verbatim**:
   ```
   ⚠  Using the Gmail MCP connector as a fallback.
      Read operations (list inbox, search, fetch) will work.
      SEND operations will fail until you explicitly grant send permissions
      in Claude Desktop → Settings → Connectors → Gmail → Permissions.
      The ops plugin cannot grant those permissions for you — it's a Claude
      Desktop-side setting tied to your account.
      If you want unattended sending from ops-comms, install `gog` instead.
   ```
5. On "Install gog instead", print the OS-appropriate install command:

   | OS            | Command                                                       |
   |---------------|---------------------------------------------------------------|
   | macOS / Linuxbrew | `brew install gogcli`                                     |
   | Windows       | `winget install -e --id steipete.gogcli`                      |
   | Arch Linux    | `yay -S gogcli`                                               |
   | From source   | `git clone https://github.com/steipete/gogcli.git && cd gogcli && make` |

   Docs: <https://gogcli.sh/> · Repo: <https://github.com/steipete/gogcli>

   After install, authorise once per account:
   ```bash
   gog auth credentials /path/to/client_secret.json
   gog auth add you@example.com --services gmail,calendar,drive,contacts,docs,sheets
   ```
   Refresh tokens are stored in the OS keyring (Keychain on macOS, Secret Service / libsecret on Linux, Credential Manager on Windows). Then stop this sub-flow and wait for the user to re-run `/ops:setup email`.

#### Neither available

6. **If `gog` is missing AND no Gmail MCP is configured**, ask `AskUserQuestion`:
   - `[Install gog — show docs]`
   - `[Add a Gmail MCP — show docs]` → print `claude mcp add gmail` and tell the user to re-run `/ops:setup email` after
   - `[Skip email for now]`
7. Whatever the user picks, record the resulting state in `$PREFS_PATH` (either `channels.email = "gog"`, `channels.email = "mcp:<name>"`, or omit the key entirely).

> **Deep-dive:** see `${CLAUDE_PLUGIN_ROOT}/skills/ops-inbox/SKILL.md` and `${CLAUDE_PLUGIN_ROOT}/skills/ops-comms/SKILL.md` for full operational instructions, CLI reference, and troubleshooting for this integration. The setup agent can load those files directly when it needs more depth than this wizard provides.

*(README truncated for display. [Read the full README on GitHub](https://github.com/davepoon/buildwithclaude)).*
