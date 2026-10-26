---
slug: the-open-agent-openagent-skills-bear-notes
name: bear-notes
tagline: Create, search, and manage Bear notes via grizzly CLI.
summary: "- Bear app installed and running - For some operations (add-text,
  tags, open-note --selected), a Bear app token (stored in
  /.config/grizzly/token)"
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/bear-notes
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
  path: skills/bear-notes/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.201Z
  truncated: false
type: agent_skill
skill:
  skill_name: bear-notes
  description: Create, search, and manage Bear notes via grizzly CLI.
  folder_path: skills/bear-notes
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# Bear Notes
Use `grizzly` to create, read, and manage notes in Bear on macOS.

Requirements

- Bear app installed and running
- For some operations (add-text, tags, open-note --selected), a Bear app token (stored in `~/.config/grizzly/token`)

## Getting a Bear Token

For operations that require a token (add-text, tags, open-note --selected), you need an authentication token:

1. Open Bear → Help → API Token → Copy Token
2. Save it: `echo "YOUR_TOKEN" > ~/.config/grizzly/token`

## Common Commands

Create a note

```bash
echo "Note content here" | grizzly create --title "My Note" --tag work
grizzly create --title "Quick Note" --tag inbox < /dev/null
```

Open/read a note by ID

```bash
grizzly open-note --id "NOTE_ID" --enable-callback --json
```

Append text to a note

```bash
echo "Additional content" | grizzly add-text --id "NOTE_ID" --mode append --token-file ~/.config/grizzly/token
```

List all tags

```bash
grizzly tags --enable-callback --json --token-file ~/.config/grizzly/token
```

Search notes (via open-tag)

```bash
grizzly open-tag --name "work" --enable-callback --json
```

## Options

Common flags:

- `--dry-run` — Preview the URL without executing
- `--print-url` — Show the x-callback-url
- `--enable-callback` — Wait for Bear's response (needed for reading data)
- `--json` — Output as JSON (when using callbacks)
- `--token-file PATH` — Path to Bear API token file

## Configuration

Grizzly reads config from (in priority order):

1. CLI flags
2. Environment variables (`GRIZZLY_TOKEN_FILE`, `GRIZZLY_CALLBACK_URL`, `GRIZZLY_TIMEOUT`)
3. `.grizzly.toml` in current directory
4. `~/.config/grizzly/config.toml`

Example `~/.config/grizzly/config.toml`:

```toml
token_file = "~/.config/grizzly/token"
callback_url = "http://127.0.0.1:42123/success"
timeout = "5s"
```

## Notes

- Bear must be running for commands to work
- Note IDs are Bear's internal identifiers (visible in note info or via callbacks)
- Use `--enable-callback` when you need to read data back from Bear
- Some operations require a valid token (add-text, tags, open-note --selected)
