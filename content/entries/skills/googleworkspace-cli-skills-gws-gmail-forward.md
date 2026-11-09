---
slug: googleworkspace-cli-skills-gws-gmail-forward
name: gws-gmail-forward
tagline: "Gmail: Forward a message to new recipients."
summary: Forward a message to new recipients
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
  subpath: skills/gws-gmail-forward
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
  path: skills/gws-gmail-forward/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:58.286Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-gmail-forward
  description: "Gmail: Forward a message to new recipients."
  folder_path: skills/gws-gmail-forward
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# gmail +forward
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Forward a message to new recipients

## Usage

```bash
gws gmail +forward --message-id <ID> --to <EMAILS>
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--message-id` | ✓ | — | Gmail message ID to forward |
| `--to` | ✓ | — | Recipient email address(es), comma-separated |
| `--from` | — | — | Sender address (for send-as/alias; omit to use account default) |
| `--body` | — | — | Optional note to include above the forwarded message (plain text, or HTML with --html) |
| `--no-original-attachments` | — | — | Do not include file attachments from the original message (inline images in --html mode are preserved) |
| `--attach` | — | — | Attach a file (can be specified multiple times) |
| `--cc` | — | — | CC email address(es), comma-separated |
| `--bcc` | — | — | BCC email address(es), comma-separated |
| `--html` | — | — | Treat --body as HTML content (default is plain text) |
| `--dry-run` | — | — | Show the request that would be sent without executing it |
| `--draft` | — | — | Save as draft instead of sending |

## Examples

```bash
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --body 'FYI see below'
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --cc eve@example.com
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --body '<p>FYI</p>' --html
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com -a notes.pdf
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --no-original-attachments
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --draft
```

## Tips

- Includes the original message with sender, date, subject, and recipients.
- Original attachments are included by default (matching Gmail web behavior).
- With --html, inline images are also preserved via cid: references.
- In plain-text mode, inline images are not included (matching Gmail web).
- Use --no-original-attachments to forward without the original message's files.
- Use -a/--attach to add extra file attachments. Can be specified multiple times.
- Combined size of original and user attachments is limited to 25MB.
- With --html, the forwarded block uses Gmail's gmail_quote CSS classes and preserves HTML formatting. Use fragment tags (<p>, <b>, <a>, etc.) — no <html>/<body> wrapper needed.
- Use --draft to save the forward as a draft instead of sending it immediately.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-forward/../gws-shared/SKILL.md) — Global flags and auth
- [gws-gmail](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-forward/../gws-gmail/SKILL.md) — All send, read, and manage email commands
