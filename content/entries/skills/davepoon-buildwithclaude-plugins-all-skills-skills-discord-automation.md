---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-discord-automation
name: discord-automation
tagline: "Automate Discord tasks via Rube MCP (Composio): messages, channels,
  roles, webhooks, reactions. Always search tools first for current schemas."
summary: "Toolkit docs: composio.dev/toolkits/discord"
categories:
  - productivity-ops
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
  subpath: plugins/all-skills/skills/discord-automation
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
  path: plugins/all-skills/skills/discord-automation/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.583Z
  truncated: false
type: agent_skill
skill:
  skill_name: discord-automation
  description: "Automate Discord tasks via Rube MCP (Composio): messages,
    channels, roles, webhooks, reactions. Always search tools first for current
    schemas."
  folder_path: plugins/all-skills/skills/discord-automation
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Discord Automation via Rube MCP
Automate Discord operations through Composio's Discord/Discordbot toolkits via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/discord](https://composio.dev/toolkits/discord)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Discord connection via `RUBE_MANAGE_CONNECTIONS` with toolkits `discord` and `discordbot`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `discordbot` (bot operations) or `discord` (user operations)
3. If connection is not ACTIVE, follow the returned auth link to complete Discord auth
4. Confirm connection status shows ACTIVE before running any workflows

## Core Workflows

### 1. Send Messages

**When to use**: User wants to send messages to channels or DMs

**Tool sequence**:
1. `DISCORD_LIST_MY_GUILDS` - List guilds the bot belongs to [Prerequisite]
2. `DISCORDBOT_LIST_GUILD_CHANNELS` - List channels in a guild [Prerequisite]
3. `DISCORDBOT_CREATE_MESSAGE` - Send a message [Required]
4. `DISCORDBOT_UPDATE_MESSAGE` - Edit a sent message [Optional]

**Key parameters**:
- `channel_id`: Channel snowflake ID
- `content`: Message text (max 2000 characters)
- `embeds`: Array of embed objects for rich content
- `guild_id`: Guild ID for channel listing

**Pitfalls**:
- Bot must have SEND_MESSAGES permission in the channel
- High-frequency sends can hit per-route rate limits; respect Retry-After headers
- Only messages sent by the same bot can be edited

### 2. Send Direct Messages

**When to use**: User wants to DM a Discord user

**Tool sequence**:
1. `DISCORDBOT_CREATE_DM` - Create or get DM channel [Required]
2. `DISCORDBOT_CREATE_MESSAGE` - Send message to DM channel [Required]

**Key parameters**:
- `recipient_id`: User snowflake ID for DM
- `channel_id`: DM channel ID from CREATE_DM

**Pitfalls**:
- Cannot DM users who have DMs disabled or have blocked the bot
- CREATE_DM returns existing channel if one already exists

### 3. Manage Roles

**When to use**: User wants to create, assign, or remove roles

**Tool sequence**:
1. `DISCORDBOT_CREATE_GUILD_ROLE` - Create a new role [Optional]
2. `DISCORDBOT_ADD_GUILD_MEMBER_ROLE` - Assign role to member [Optional]
3. `DISCORDBOT_DELETE_GUILD_ROLE` - Delete a role [Optional]
4. `DISCORDBOT_GET_GUILD_MEMBER` - Get member details [Optional]
5. `DISCORDBOT_UPDATE_GUILD_MEMBER` - Update member (roles, nick, etc.) [Optional]

**Key parameters**:
- `guild_id`: Guild snowflake ID
- `user_id`: User snowflake ID
- `role_id`: Role snowflake ID
- `name`: Role name
- `permissions`: Bitwise permission value
- `color`: RGB color integer

**Pitfalls**:
- Role assignment requires MANAGE_ROLES permission
- Target role must be lower in hierarchy than bot's highest role
- DELETE permanently removes the role from all members

### 4. Manage Webhooks

**When to use**: User wants to create or use webhooks for external integrations

**Tool sequence**:
1. `DISCORDBOT_GET_GUILD_WEBHOOKS` / `DISCORDBOT_LIST_CHANNEL_WEBHOOKS` - List webhooks [Optional]
2. `DISCORDBOT_CREATE_WEBHOOK` - Create a new webhook [Optional]
3. `DISCORDBOT_EXECUTE_WEBHOOK` - Send message via webhook [Optional]
4. `DISCORDBOT_UPDATE_WEBHOOK` - Update webhook settings [Optional]

**Key parameters**:
- `webhook_id`: Webhook ID
- `webhook_token`: Webhook secret token
- `channel_id`: Channel for webhook creation
- `name`: Webhook name
- `content`/`embeds`: Message content for execution

**Pitfalls**:
- Webhook tokens are secrets; handle securely
- Webhooks can post with custom username and avatar per message
- MANAGE_WEBHOOKS permission required for creation

### 5. Manage Reactions

**When to use**: User wants to view or manage message reactions

**Tool sequence**:
1. `DISCORDBOT_LIST_MESSAGE_REACTIONS_BY_EMOJI` - List users who reacted [Optional]
2. `DISCORDBOT_DELETE_ALL_MESSAGE_REACTIONS` - Remove all reactions [Optional]
3. `DISCORDBOT_DELETE_ALL_MESSAGE_REACTIONS_BY_EMOJI` - Remove specific emoji reactions [Optional]
4. `DISCORDBOT_DELETE_USER_MESSAGE_REACTION` - Remove specific user's reaction [Optional]

**Key parameters**:
- `channel_id`: Channel ID
- `message_id`: Message snowflake ID
- `emoji_name`: URL-encoded emoji or `name:id` for custom emojis
- `user_id`: User ID for specific reaction removal

**Pitfalls**:
- Unicode emojis must be URL-encoded (e.g., '%F0%9F%91%8D' for thumbs up)
- Custom emojis use `name:id` format
- DELETE_ALL requires MANAGE_MESSAGES permission

## Common Patterns

### Snowflake IDs

Discord uses snowflake IDs (64-bit integers as strings) for all entities:
- Guilds, channels, users, roles, messages, webhooks

### Permission Bitfields

Permissions are combined using bitwise OR:
- SEND_MESSAGES = 0x800
- MANAGE_ROLES = 0x10000000
- MANAGE_MESSAGES = 0x2000
- ADMINISTRATOR = 0x8

### Pagination

- Most list endpoints support `limit`, `before`, `after` parameters
- Messages: max 100 per request
- Reactions: max 100 per request, use `after` for pagination

## Known Pitfalls

**Bot vs User Tokens**:
- `discordbot` toolkit uses bot tokens; `discord` uses user OAuth
- Bot operations are preferred for automation

**Rate Limits**:
- Discord enforces per-route rate limits
- Respect `Retry-After` headers on 429 responses

## Quick Reference

| Task | Tool Slug | Key Params |
|------|-----------|------------|
| List guilds | DISCORD_LIST_MY_GUILDS | (none) |
| List channels | DISCORDBOT_LIST_GUILD_CHANNELS | guild_id |
| Send message | DISCORDBOT_CREATE_MESSAGE | channel_id, content |
| Edit message | DISCORDBOT_UPDATE_MESSAGE | channel_id, message_id |
| Get messages | DISCORDBOT_LIST_MESSAGES | channel_id, limit |
| Create DM | DISCORDBOT_CREATE_DM | recipient_id |
| Create role | DISCORDBOT_CREATE_GUILD_ROLE | guild_id, name |
| Assign role | DISCORDBOT_ADD_GUILD_MEMBER_ROLE | guild_id, user_id, role_id |
| Delete role | DISCORDBOT_DELETE_GUILD_ROLE | guild_id, role_id |
| Get member | DISCORDBOT_GET_GUILD_MEMBER | guild_id, user_id |
| Update member | DISCORDBOT_UPDATE_GUILD_MEMBER | guild_id, user_id |
| Get guild | DISCORDBOT_GET_GUILD | guild_id |
| Create webhook | DISCORDBOT_CREATE_WEBHOOK | channel_id, name |
| Execute webhook | DISCORDBOT_EXECUTE_WEBHOOK | webhook_id, webhook_token |
| List webhooks | DISCORDBOT_GET_GUILD_WEBHOOKS | guild_id |
| Get reactions | DISCORDBOT_LIST_MESSAGE_REACTIONS_BY_EMOJI | channel_id, message_id, emoji_name |
| Clear reactions | DISCORDBOT_DELETE_ALL_MESSAGE_REACTIONS | channel_id, message_id |
| Test auth | DISCORDBOT_TEST_AUTH | (none) |
| Get channel | DISCORDBOT_GET_CHANNEL | channel_id |

---
*Powered by [Composio](https://composio.dev)*
