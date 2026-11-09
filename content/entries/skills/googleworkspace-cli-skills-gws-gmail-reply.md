---
slug: googleworkspace-cli-skills-gws-gmail-reply
name: gws-gmail-reply
tagline: "Gmail: Reply to a message (handles threading automatically)."
summary: Reply to a message (handles threading automatically)
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-gmail-reply
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32202
  last_commit: 2026-11-03T01:37:22Z
  stars_delta_7d: 79
  stars_growth_pct: 0.2
  trending_score: 79.19
  velocity_source: snapshot_delta
  sparkline_4w:
    - 31663
    - 32123
    - 32202
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-gmail-reply/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:58.286Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-gmail-reply
  description: "Gmail: Reply to a message (handles threading automatically)."
  folder_path: skills/gws-gmail-reply
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# gmail +reply
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Reply to a message (handles threading automatically)

## Usage

```bash
gws gmail +reply --message-id <ID> --body <TEXT>
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--message-id` | ✓ | — | Gmail message ID to reply to |
| `--body` | ✓ | — | Reply body (plain text, or HTML with --html) |
| `--from` | — | — | Sender address (for send-as/alias; omit to use account default) |
| `--to` | — | — | Additional To email address(es), comma-separated |
| `--attach` | — | — | Attach a file (can be specified multiple times) |
| `--cc` | — | — | CC email address(es), comma-separated |
| `--bcc` | — | — | BCC email address(es), comma-separated |
| `--html` | — | — | Treat --body as HTML content (default is plain text) |
| `--dry-run` | — | — | Show the request that would be sent without executing it |
| `--draft` | — | — | Save as draft instead of sending |

## Examples

```bash
gws gmail +reply --message-id 18f1a2b3c4d --body 'Thanks, got it!'
gws gmail +reply --message-id 18f1a2b3c4d --body 'Looping in Carol' --cc carol@example.com
gws gmail +reply --message-id 18f1a2b3c4d --body 'Adding Dave' --to dave@example.com
gws gmail +reply --message-id 18f1a2b3c4d --body '<b>Bold reply</b>' --html
gws gmail +reply --message-id 18f1a2b3c4d --body 'Updated version' -a updated.docx
gws gmail +reply --message-id 18f1a2b3c4d --body 'Draft reply' --draft
```

## Tips

- Automatically sets In-Reply-To, References, and threadId headers.
- Quotes the original message in the reply body.
- --to adds extra recipients to the To field.
- Use -a/--attach to add file attachments. Can be specified multiple times.
- With --html, the quoted block uses Gmail's gmail_quote CSS classes and preserves HTML formatting. Use fragment tags (<p>, <b>, <a>, etc.) — no <html>/<body> wrapper needed.
- With --html, inline images in the quoted message are preserved via cid: references.
- Use --draft to save the reply as a draft instead of sending it immediately.
- For reply-all, use +reply-all instead.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-reply/../gws-shared/SKILL.md) — Global flags and auth
- [gws-gmail](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-reply/../gws-gmail/SKILL.md) — All send, read, and manage email commands
