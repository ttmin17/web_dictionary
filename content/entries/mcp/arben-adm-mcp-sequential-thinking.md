---
slug: arben-adm-mcp-sequential-thinking
name: mcp-sequential-thinking
tagline: Local MCP work notes with persistent sessions, decisions, evidence and
  resumable tasks.
summary: "A local MCP server for working notes you can resume: evidence,
  decisions, risks and next actions for a difficult task, stored durably in
  SQLite and readable after any restart. It records what the caller writes; it
  doe..."
categories:
  - productivity-ops
tags:
  - model-context-protocol
  - python
  - sqlite
  - working-notes
status: active
quality_percentile: 54
selection_reason: quality_percentile
first_seen: 2025-01-09T22:47:33
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: arben-adm/mcp-sequential-thinking
  official_vendor: false
  license: MIT
signals:
  stars: 959
  last_commit: 2026-10-23T22:41:55Z
  stars_delta_7d: 4
  stars_growth_pct: 0.4
  trending_score: 4.02
  rank_current: 89
  rank_delta: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 952
    - 955
    - 955
    - 959
language: en
needs_keys: false
prerequisites:
  - Python >= 3.10
  - uv
readme_source:
  repo: arben-adm/mcp-sequential-thinking
  path: README.md
  branch: master
  fetched_at: 2026-10-26T07:38:48.290Z
  truncated: false
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - mcp-sequential-thinking
  env_vars: []
  confidence: manifest
---

# MCP Sequential Thinking
<!-- mcp-name: io.github.arben-adm/mcp-sequential-thinking -->

A local MCP server for **working notes you can resume**: evidence, decisions, risks
and next actions for a difficult task, stored durably in SQLite and readable after
any restart. It records what the caller writes; it does not generate, judge or
improve reasoning, and it never asks for hidden chain-of-thought.

<a href="https://glama.ai/mcp/servers/m83dfy8feg"><img width="380" height="200" src="https://glama.ai/mcp/servers/m83dfy8feg/badge" alt="Sequential Thinking Server MCP server" /></a>

## Installation

Published on [PyPI](https://pypi.org/project/mcp-sequential-thinking/) and in the
[MCP Registry](https://registry.modelcontextprotocol.io/) as
`io.github.arben-adm/mcp-sequential-thinking`. With [uv](https://docs.astral.sh/uv/)
installed, `uvx mcp-sequential-thinking` runs it without a manual install
(pin with `uvx mcp-sequential-thinking@0.7.0`). `MCP_STORAGE_DIR` is optional.

**Claude Code**

```sh
claude mcp add working-notes -- uvx mcp-sequential-thinking                   # this project only
claude mcp add --scope user working-notes -- uvx mcp-sequential-thinking      # all projects
claude mcp add --scope project working-notes -- uvx mcp-sequential-thinking   # shared via .mcp.json
```

**Gemini CLI**

```sh
gemini mcp add working-notes uvx mcp-sequential-thinking   # writes .gemini/settings.json
```

**Codex CLI**

```sh
codex mcp add working-notes -- uvx mcp-sequential-thinking
```

**Claude Desktop** (Settings → Developer → Edit Config, `claude_desktop_config.json`)

```json
{"mcpServers":{"working-notes":{
  "command":"uvx",
  "args":["mcp-sequential-thinking"],
  "env":{"MCP_STORAGE_DIR":"/absolute/path/to/notes"}}}}
```

Restart Claude Desktop afterwards.

**VS Code** (`.vscode/mcp.json`)

```json
{"servers":{"working-notes":{"type":"stdio","command":"uvx","args":["mcp-sequential-thinking"]}}}
```

If a GUI client cannot find `uvx`, use its absolute path (`which uvx`).

### From source

```sh
python -m venv .venv && . .venv/bin/activate   # Windows: .venv\Scripts\Activate.ps1
python -m pip install -e .
python scripts/stdio_smoke.py                  # restart demo: write, restart, read back
```

Then point the client at `/absolute/path/to/.venv/bin/mcp-sequential-thinking`
(Windows: `.venv\Scripts\mcp-sequential-thinking.exe`) instead of `uvx`.

## Quick start

A typical session:

```json
{"tool":"create_session","arguments":{"title":"Choose a local store","request_id":"create-1"}}
{"tool":"add_step","arguments":{"session_id":"<id>","content":"Two writers need unique positions.","kind":"evidence","request_id":"step-1"}}
{"tool":"add_step","arguments":{"session_id":"<id>","content":"Use SQLite.","kind":"decision","request_id":"step-2"}}
{"tool":"read_session","arguments":{"session_id":"<id>"}}
```

Lost the ID after a restart? `list_sessions` finds the session by title.

## Tools

| Tool | Purpose |
| --- | --- |
| `create_session` | Start a session from a title. |
| `add_step` | Add a note; `kind` is `note` (default), `observation`, `evidence`, `assumption`, `option`, `risk`, `decision` or `next_action`. |
| `list_sessions` | Find sessions by title or status. |
| `read_session` | `view="resume"` (default): active notes, decisions first. `view="steps"`: full history with filters. |
| `finalize_session` | Store the caller's outcome and evidence IDs; no further steps afterwards. |
| `delete_session` | Delete a session's database records (exports and backups remain). |
| `export_session` / `import_session` | JSON archive of one session, confined to `MCP_STORAGE_DIR/exports`. |

**Links between notes.** `parent_step_id` records provenance, `supersedes_step_id`
replaces an earlier note (resume hides it, full history keeps it), and
`branch_from_step_id` starts a named branch. All references stay inside one session.

**Retries.** Every write takes a `request_id`. Repeating a call with the same ID and
input returns the original result; the same ID with different input returns
`IDEMPOTENCY_CONFLICT`. `finalize_session` and `delete_session` also need
`expected_version`.

**Pagination and limits.** Reads default to 20 entries and 12,000 characters
(`limit` ≤ 100, `max_chars` 1,000–50,000). Follow `cursor` until it is `null`, and
keep the same `view` while paging. `truncated` reports shortened content. A note
too large for one response comes back as its first chunk; continue with `step_id`
and `content_offset` until `next_content_offset` is `null`.

**Errors** set `isError=true` with a stable code and a short hint, e.g.
`INVALID_INPUT` (with `Fields: …`), `UNKNOWN_SESSION`, `INVALID_REFERENCE`,
`CONFLICT` (with `current_version`), `SESSION_FINALIZED`, `IDEMPOTENCY_CONFLICT`,
`STORAGE_BUSY` (retry with the same `request_id`), `PATH_OUTSIDE_EXPORTS`,
`RESPONSE_LIMIT`.

Sources attached to notes are caller-supplied and never fetched or verified.

## Legacy tools (deprecated)

`process_thought`, `generate_summary` and `clear_history`, plus `export_session` /
`import_session` without a `session_id`, work on a single shared `legacy` session.
They remain for existing clients; every result carries a `deprecation_notice`.
Use the session API for new work.

- Stages: Problem Definition, Research, Analysis, Synthesis, Conclusion
  (case-insensitive). Order warnings are advisory unless `--strict-stages` is set.
- `main_line_progress` counts mainline notes only, against your `total_thoughts`;
  it is not task completion.
- Legacy import **replaces** the legacy history.
- `read_session(session_id="legacy")` reads it; a legacy branch `X` appears as
  `legacy-X` there.

## Storage and operation

```sh
mcp-sequential-thinking              # stdio server
mcp-sequential-thinking --health     # diagnostic check
mcp-sequential-thinking --ephemeral  # in memory only, lost on exit
```

- Data lives in `~/.mcp_sequential_thinking` (or `MCP_STORAGE_DIR`) as **plaintext**
  SQLite (WAL, synchronous FULL, 5 s busy timeout). Use a local disk; NFS/SMB and
  multiple hosts are not supported.
- Several stdio servers may share one store. Local stdio trusts the OS user; a
  session ID is not authorization. HTTP/SSE are experimental.
- Deletion is not secure erasure. There is no automatic retention.
- On first start, an existing 0.6 JSONL history migrates into SQLite in one
  transaction, keeping IDs and content; a backup of the source stays in place.
  Stop old 0.6 servers first. Downgrading after new writes is not supported.

Backup and restore (all sessions, including retry keys):

```sh
python -m mcp_sequential_thinking.backup create  /path/to/storage /path/to/snapshot.sqlite3
python -m mcp_sequential_thinking.backup restore /path/to/NEW-storage /path/to/snapshot.sqlite3
```

Restore requires a new directory. Never copy a live database file without its WAL.

## Tested with

| Client | OS | Date |
| --- | --- | --- |
| Python MCP SDK 2.0.0 and latest, Python 3.10–3.14 | Linux, Windows | every CI run |
| Claude Desktop | Linux | 2026-10-21 |

## Development

```sh
uv run --extra dev ruff check .
uv run --extra dev ruff format --check .
uv run --extra dev mypy --strict mcp_sequential_thinking
uv run --extra dev pytest --cov=mcp_sequential_thinking --cov-fail-under=85
rm -rf dist && uv run --extra dev --with build --with twine --with jsonschema python scripts/check_artifacts.py
```

The artifact check builds and installs the wheel in isolation and runs a real
restart round trip. Releases publish that tested artifact via Trusted Publishing
once a GitHub release is created; the version lives in
`mcp_sequential_thinking/_version.py`. See [CHANGELOG.md](https://github.com/arben-adm/mcp-sequential-thinking/blob/master/CHANGELOG.md) for details.
