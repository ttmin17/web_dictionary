---
slug: the-open-agent-openagent-skills-bluebubbles
name: bluebubbles
tagline: Use when you need to send or manage iMessages via BlueBubbles
  (recommended iMessage integration). Calls go through the generic message tool
  with chann
summary: 'BlueBubbles is OpenClaw’s recommended iMessage integration. Use the
  message tool with channel: "bluebubbles" to send messages and manage iMessage
  conversations: send texts and attachments, react (tapbacks), edit/unsen...'
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/bluebubbles
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5712
  last_commit: 2026-10-25T13:57:48Z
  stars_delta_7d: 14
  stars_growth_pct: 0.2
  trending_score: 14.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
    - 5712
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/bluebubbles/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.201Z
  truncated: false
type: agent_skill
skill:
  skill_name: bluebubbles
  description: Use when you need to send or manage iMessages via BlueBubbles
    (recommended iMessage integration). Calls go through the generic message
    tool with channel="bluebubbles".
  folder_path: skills/bluebubbles
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# BlueBubbles Actions
## Overview

BlueBubbles is OpenClaw’s recommended iMessage integration. Use the `message` tool with `channel: "bluebubbles"` to send messages and manage iMessage conversations: send texts and attachments, react (tapbacks), edit/unsend, reply in threads, and manage group participants/names/icons.

## Inputs to collect

- `target` (prefer `chat_guid:...`; also `+15551234567` in E.164 or `user@example.com`)
- `message` text for send/edit/reply
- `messageId` for react/edit/unsend/reply
- Attachment `path` for local files, or `buffer` + `filename` for base64

If the user is vague ("text my mom"), ask for the recipient handle or chat guid and the exact message content.

## Actions

### Send a message

```json
{
  "action": "send",
  "channel": "bluebubbles",
  "target": "+15551234567",
  "message": "hello from OpenClaw"
}
```

### React (tapback)

```json
{
  "action": "react",
  "channel": "bluebubbles",
  "target": "+15551234567",
  "messageId": "<message-guid>",
  "emoji": "❤️"
}
```

### Remove a reaction

```json
{
  "action": "react",
  "channel": "bluebubbles",
  "target": "+15551234567",
  "messageId": "<message-guid>",
  "emoji": "❤️",
  "remove": true
}
```

### Edit a previously sent message

```json
{
  "action": "edit",
  "channel": "bluebubbles",
  "target": "+15551234567",
  "messageId": "<message-guid>",
  "message": "updated text"
}
```

### Unsend a message

```json
{
  "action": "unsend",
  "channel": "bluebubbles",
  "target": "+15551234567",
  "messageId": "<message-guid>"
}
```

### Reply to a specific message

```json
{
  "action": "reply",
  "channel": "bluebubbles",
  "target": "+15551234567",
  "replyTo": "<message-guid>",
  "message": "replying to that"
}
```

### Send an attachment

```json
{
  "action": "sendAttachment",
  "channel": "bluebubbles",
  "target": "+15551234567",
  "path": "/tmp/photo.jpg",
  "caption": "here you go"
}
```

### Send with an iMessage effect

```json
{
  "action": "sendWithEffect",
  "channel": "bluebubbles",
  "target": "+15551234567",
  "message": "big news",
  "effect": "balloons"
}
```

## Notes

- Requires gateway config `channels.bluebubbles` (serverUrl/password/webhookPath).
- Prefer `chat_guid` targets when you have them (especially for group chats).
- BlueBubbles supports rich actions, but some are macOS-version dependent (for example, edit may be broken on macOS 26 Tahoe).
- The gateway may expose both short and full message ids; full ids are more durable across restarts.
- Developer reference for the underlying plugin lives in the BlueBubbles plugin package README.

## Ideas to try

- React with a tapback to acknowledge a request.
- Reply in-thread when a user references a specific message.
- Send a file attachment with a short caption.
