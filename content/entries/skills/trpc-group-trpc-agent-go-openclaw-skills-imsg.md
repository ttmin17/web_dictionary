---
slug: trpc-group-trpc-agent-go-openclaw-skills-imsg
name: imsg
tagline: iMessage/SMS CLI for listing chats, history, and sending messages via
  Messages.app.
summary: "- User explicitly asks to send iMessage or SMS - Reading iMessage
  conversation history - Checking recent Messages.app chats - Sending to phone
  numbers or Apple IDs"
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: openclaw/skills/imsg
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: openclaw/skills/imsg/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.537Z
  truncated: false
type: agent_skill
skill:
  skill_name: imsg
  description: iMessage/SMS CLI for listing chats, history, and sending messages
    via Messages.app.
  folder_path: openclaw/skills/imsg
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# imsg
Use `imsg` to read and send iMessage/SMS via macOS Messages.app.

## When to Use

✅ **USE this skill when:**

- User explicitly asks to send iMessage or SMS
- Reading iMessage conversation history
- Checking recent Messages.app chats
- Sending to phone numbers or Apple IDs

## When NOT to Use

❌ **DON'T use this skill when:**

- Telegram messages → use `message` tool with `channel:telegram`
- Signal messages → use Signal channel if configured
- WhatsApp messages → use WhatsApp channel if configured
- Discord messages → use `message` tool with `channel:discord`
- Slack messages → use `slack` skill
- Group chat management (adding/removing members) → not supported
- Bulk/mass messaging → always confirm with user first
- Replying in current conversation → just reply normally (Clawdbot routes automatically)

## Requirements

- macOS with Messages.app signed in
- Full Disk Access for terminal
- Automation permission for Messages.app (for sending)

## Common Commands

### List Chats

```bash
imsg chats --limit 10 --json
```

### View History

```bash
# By chat ID
imsg history --chat-id 1 --limit 20 --json

# With attachments info
imsg history --chat-id 1 --limit 20 --attachments --json
```

### Watch for New Messages

```bash
imsg watch --chat-id 1 --attachments
```

### Send Messages

```bash
# Text only
imsg send --to "+14155551212" --text "Hello!"

# With attachment
imsg send --to "+14155551212" --text "Check this out" --file /path/to/image.jpg

# Specify service
imsg send --to "+14155551212" --text "Hi" --service imessage
imsg send --to "+14155551212" --text "Hi" --service sms
```

## Service Options

- `--service imessage` — Force iMessage (requires recipient has iMessage)
- `--service sms` — Force SMS (green bubble)
- `--service auto` — Let Messages.app decide (default)

## Safety Rules

1. **Always confirm recipient and message content** before sending
2. **Never send to unknown numbers** without explicit user approval
3. **Be careful with attachments** — confirm file path exists
4. **Rate limit yourself** — don't spam

## Example Workflow

User: "Text mom that I'll be late"

```bash
# 1. Find mom's chat
imsg chats --limit 20 --json | jq '.[] | select(.displayName | contains("Mom"))'

# 2. Confirm with user
# "Found Mom at +1555123456. Send 'I'll be late' via iMessage?"

# 3. Send after confirmation
imsg send --to "+1555123456" --text "I'll be late"
```
