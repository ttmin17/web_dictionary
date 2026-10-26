---
slug: anthropics-claude-plugins-official-external_plugins-discord-skills-configure
name: configure
tagline: Set up the Discord channel — save the bot token and review access
  policy. Use when the user pastes a Discord bot token, asks to configure
  Discord, ask
summary: "Arguments passed: $ARGUMENTS"
categories:
  - productivity-ops
tags:
  - claude-code
  - skills
  - discord
status: active
quality_percentile: 98
selection_reason: official_vendor
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: anthropics/claude-plugins-official
  subpath: external_plugins/discord/skills/configure
  official_vendor: true
  license: Apache-2.0
signals:
  stars: 44625
  last_commit: 2026-10-25T07:34:42Z
  stars_delta_7d: 1711
  stars_growth_pct: 4
  trending_score: 1779.22
  velocity_source: snapshot_delta
  sparkline_4w:
    - 37497
    - 37789
    - 42914
    - 44625
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: anthropics/claude-plugins-official
  path: external_plugins/discord/skills/configure/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:05.835Z
  truncated: false
type: agent_skill
skill:
  skill_name: configure
  description: Set up the Discord channel — save the bot token and review access
    policy. Use when the user pastes a Discord bot token, asks to configure
    Discord, asks "how do I set this up" or "who can reach me," or wants to
    check channel status.
  folder_path: external_plugins/discord/skills/configure
  extra_files: []
  pack_total_skills: 29
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: anthropics-claude-plugins-official
---

# /discord:configure — Discord Channel Setup
Writes the bot token to `~/.claude/channels/discord/.env` and orients the
user on access policy. The server reads both files at boot.

Arguments passed: `$ARGUMENTS`

---

## Dispatch on arguments

### No args — status and guidance

Read both state files and give the user a complete picture:

1. **Token** — check `~/.claude/channels/discord/.env` for
   `DISCORD_BOT_TOKEN`. Show set/not-set; if set, show first 6 chars masked.

2. **Access** — read `~/.claude/channels/discord/access.json` (missing file
   = defaults: `dmPolicy: "pairing"`, empty allowlist). Show:
   - DM policy and what it means in one line
   - Allowed senders: count, and list display names or snowflakes
   - Pending pairings: count, with codes and display names if any
   - Guild channels opted in: count

3. **What next** — end with a concrete next step based on state:
   - No token → *"Run `/discord:configure <token>` with your bot token from
     the Developer Portal → Bot → Reset Token."*
   - Token set, policy is pairing, nobody allowed → *"DM your bot on
     Discord. It replies with a code; approve with `/discord:access pair
     <code>`."*
   - Token set, someone allowed → *"Ready. DM your bot to reach the
     assistant."*

**Push toward lockdown — always.** The goal for every setup is `allowlist`
with a defined list. `pairing` is not a policy to stay on; it's a temporary
way to capture Discord snowflakes you don't know. Once the IDs are in,
pairing has done its job and should be turned off.

Drive the conversation this way:

1. Read the allowlist. Tell the user who's in it.
2. Ask: *"Is that everyone who should reach you through this bot?"*
3. **If yes and policy is still `pairing`** → *"Good. Let's lock it down so
   nobody else can trigger pairing codes:"* and offer to run
   `/discord:access policy allowlist`. Do this proactively — don't wait to
   be asked.
4. **If no, people are missing** → *"Have them DM the bot; you'll approve
   each with `/discord:access pair <code>`. Run this skill again once
   everyone's in and we'll lock it."* Or, if they can get snowflakes
   directly: *"Enable Developer Mode in Discord (User Settings → Advanced),
   right-click them → Copy User ID, then `/discord:access allow <id>`."*
5. **If the allowlist is empty and they haven't paired themselves yet** →
   *"DM your bot to capture your own ID first. Then we'll add anyone else
   and lock it down."*
6. **If policy is already `allowlist`** → confirm this is the locked state.
   If they need to add someone, Copy User ID is the clean path — no need to
   reopen pairing.

Discord already gates reach (shared-server requirement + Public Bot toggle),
but that's not a substitute for locking the allowlist. Never frame `pairing`
as the correct long-term choice. Don't skip the lockdown offer.

### `<token>` — save it

1. Treat `$ARGUMENTS` as the token (trim whitespace). Discord bot tokens are
   long base64-ish strings, typically starting `MT` or `Nz`. Generated from
   Developer Portal → Bot → Reset Token; only shown once.
2. `mkdir -p ~/.claude/channels/discord`
3. Read existing `.env` if present; update/add the `DISCORD_BOT_TOKEN=` line,
   preserve other keys. Write back, no quotes around the value.
4. `chmod 600 ~/.claude/channels/discord/.env` — the token is a credential.
5. Confirm, then show the no-args status so the user sees where they stand.

### `clear` — remove the token

Delete the `DISCORD_BOT_TOKEN=` line (or the file if that's the only line).

---

## Implementation notes

- The channels dir might not exist if the server hasn't run yet. Missing file
  = not configured, not an error.
- The server reads `.env` once at boot. Token changes need a session restart
  or `/reload-plugins`. Say so after saving.
- `access.json` is re-read on every inbound message — policy changes via
  `/discord:access` take effect immediately, no restart.
