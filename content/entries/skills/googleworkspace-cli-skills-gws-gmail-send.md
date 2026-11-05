---
slug: googleworkspace-cli-skills-gws-gmail-send
name: gws-gmail-send
tagline: "Gmail: Send an email."
summary: "- Handles RFC 5322 formatting, MIME encoding, and base64
  automatically. - Use --from to send from a configured send-as alias instead of
  your primary address. - Use -a/--attach to add file attachments. Can be
  specified..."
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-gmail-send
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32123
  last_commit: 2026-11-03T01:37:22Z
  stars_delta_7d: 883
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 31448
    - 31663
    - 32123
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-gmail-send/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.200Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-gmail-send
  description: "Gmail: Send an email."
  folder_path: skills/gws-gmail-send
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# gmail +send
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Send an email

## Usage

```bash
gws gmail +send --to <EMAILS> --subject <SUBJECT> --body <TEXT>
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--to` | ✓ | — | Recipient email address(es), comma-separated |
| `--subject` | ✓ | — | Email subject |
| `--body` | ✓ | — | Email body (plain text, or HTML with --html) |
| `--from` | — | — | Sender address (for send-as/alias; omit to use account default) |
| `--attach` | — | — | Attach a file (can be specified multiple times) |
| `--cc` | — | — | CC email address(es), comma-separated |
| `--bcc` | — | — | BCC email address(es), comma-separated |
| `--html` | — | — | Treat --body as HTML content (default is plain text) |
| `--dry-run` | — | — | Show the request that would be sent without executing it |
| `--draft` | — | — | Save as draft instead of sending |

## Examples

```bash
gws gmail +send --to alice@example.com --subject 'Hello' --body 'Hi Alice!'
gws gmail +send --to alice@example.com --subject 'Hello' --body 'Hi!' --cc bob@example.com
gws gmail +send --to alice@example.com --subject 'Hello' --body '<b>Bold</b> text' --html
gws gmail +send --to alice@example.com --subject 'Hello' --body 'Hi!' --from alias@example.com
gws gmail +send --to alice@example.com --subject 'Report' --body 'See attached' -a report.pdf
gws gmail +send --to alice@example.com --subject 'Files' --body 'Two files' -a a.pdf -a b.csv
gws gmail +send --to alice@example.com --subject 'Hello' --body 'Hi!' --draft
```

## Tips

- Handles RFC 5322 formatting, MIME encoding, and base64 automatically.
- Use --from to send from a configured send-as alias instead of your primary address.
- Use -a/--attach to add file attachments. Can be specified multiple times. Total size limit: 25MB.
- With --html, use fragment tags (<p>, <b>, <a>, <br>, etc.) — no <html>/<body> wrapper needed.
- Use --draft to save the message as a draft instead of sending it immediately.

> [!CAUTION]
> This is a **write** command — confirm with the user before executing.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-send/../gws-shared/SKILL.md) — Global flags and auth
- [gws-gmail](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-send/../gws-gmail/SKILL.md) — All send, read, and manage email commands
