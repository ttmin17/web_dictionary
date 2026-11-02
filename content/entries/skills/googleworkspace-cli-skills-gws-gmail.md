---
slug: googleworkspace-cli-skills-gws-gmail
name: gws-gmail
tagline: "Gmail: Send, read, and manage email."
summary: "- getProfile — Gets the current user's Gmail profile. - stop — Stop
  receiving push notifications for the given user mailbox. - watch — Set up or
  update a push notification watch on the given user mailbox. - drafts — O..."
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-gmail
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32055
  last_commit: 2026-10-30T16:06:54Z
  stars_delta_7d: 890
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 31448
    - 31663
    - 32055
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-gmail/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:42.261Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-gmail
  description: "Gmail: Send, read, and manage email."
  folder_path: skills/gws-gmail
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# gmail (v1)
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

```bash
gws gmail <resource> <method> [flags]
```

## Helper Commands

| Command | Description |
|---------|-------------|
| [`+send`](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail/../gws-gmail-send/SKILL.md) | Send an email |
| [`+triage`](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail/../gws-gmail-triage/SKILL.md) | Show unread inbox summary (sender, subject, date) |
| [`+reply`](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail/../gws-gmail-reply/SKILL.md) | Reply to a message (handles threading automatically) |
| [`+reply-all`](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail/../gws-gmail-reply-all/SKILL.md) | Reply-all to a message (handles threading automatically) |
| [`+forward`](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail/../gws-gmail-forward/SKILL.md) | Forward a message to new recipients |
| [`+read`](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail/../gws-gmail-read/SKILL.md) | Read a message and extract its body or headers |
| [`+watch`](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail/../gws-gmail-watch/SKILL.md) | Watch for new emails and stream them as NDJSON |

## API Resources

### users

  - `getProfile` — Gets the current user's Gmail profile.
  - `stop` — Stop receiving push notifications for the given user mailbox.
  - `watch` — Set up or update a push notification watch on the given user mailbox.
  - `drafts` — Operations on the 'drafts' resource
  - `history` — Operations on the 'history' resource
  - `labels` — Operations on the 'labels' resource
  - `messages` — Operations on the 'messages' resource
  - `settings` — Operations on the 'settings' resource
  - `threads` — Operations on the 'threads' resource

## Discovering Commands

Before calling any API method, inspect it:

```bash
# Browse resources and methods
gws gmail --help

# Inspect a method's required params, types, and defaults
gws schema gmail.<resource>.<method>
```

Use `gws schema` output to build your `--params` and `--json` flags.
