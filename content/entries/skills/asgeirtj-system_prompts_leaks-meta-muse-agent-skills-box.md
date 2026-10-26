---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-box
name: box
tagline: Search, read, upload, download, move, rename, delete, restore, and
  share Box content; manage comments and metadata.
summary: Run /opt/hatch/bin/box-cli status. If disconnected, run
  /opt/hatch/bin/box-cli authorize-url and share the returned connecturl as
  Connect Box. A fresh connection requests read-only access. Wait for browser
  consent, th...
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Meta/muse-agent/skills/box
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Meta/muse-agent/skills/box/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.836Z
  truncated: false
type: agent_skill
skill:
  skill_name: box
  description: Search, read, upload, download, move, rename, delete, restore, and
    share Box content; manage comments and metadata.
  folder_path: Meta/muse-agent/skills/box
  extra_files:
    - connector_auth_config.yaml
    - manifest.yaml
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Box
Use `/opt/hatch/bin/box-cli` to access Box.

## Connect

Run `/opt/hatch/bin/box-cli status`. If disconnected, run
`/opt/hatch/bin/box-cli authorize-url` and share the returned `connect_url`
as **Connect Box**. A fresh connection requests read-only access. Wait for
browser consent, then check status again.

Before an operation that may need broader Box access, run
`/opt/hatch/bin/box-cli status --for-command <command-or-method>`. For a hosted
MCP operation, pass its exact tool name instead of `call-tool`. When
`scope_status` is `not_granted`, copy the returned `scope_add_url` exactly and
post it on its own line as  
`[Additional Box access](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/box/<scope_add_url>)` so the client renders the native
access button. Wait for consent, then retry the original operation. Never
construct an authorization URL or substitute a raw Box scope. The operation
also fails closed with the same method-bound link if its required scope is
absent. OAuth access does not replace Muse approval.

## Use

Run `list-tools` for available MCP tools, their argument schemas, and Muse
permissions. Use those schemas and IDs returned by Box in `call-tool`.
`get_file_content` reads document text. Downloads and changes ask for Muse
approval by default.

```sh
/opt/hatch/bin/box-cli list-tools
/opt/hatch/bin/box-cli call-tool --name who_am_i --arguments-json '{}'

# Browse the root folder.
/opt/hatch/bin/box-cli call-tool --name list_folder_content_by_folder_id \
  --arguments-json '{"folder_id":"0","limit":20}'

# Search for PDFs.
/opt/hatch/bin/box-cli call-tool --name search_files_keyword \
  --arguments-json '{"query":"project plan","file_extensions":["pdf"],"limit":10}'

# Inspect file metadata.
/opt/hatch/bin/box-cli call-tool --name get_file_details \
  --arguments-json '{"file_id":"<file_id>","fields":["name","size","permissions"]}'

# Read document text.
/opt/hatch/bin/box-cli call-tool --name get_file_content \
  --arguments-json '{"file_id":"<file_id>"}'

# Create a folder.
/opt/hatch/bin/box-cli call-tool --name create_folder \
  --arguments-json '{"name":"Project notes","parent_folder_id":"<folder_id>"}'

# Upload a text file.
/opt/hatch/bin/box-cli call-tool --name upload_file \
  --arguments-json '{"file_name":"notes.txt","file_content":"Meeting notes","parent_folder_id":"<folder_id>"}'

# Post a comment.
/opt/hatch/bin/box-cli call-tool --name create_file_comment \
  --arguments-json '{"file_id":"<file_id>","message":"Ready for review."}'
```

Use the file commands below for local-file uploads, full downloads, moves,
renames, and deletion. `update-folder` and `delete-folder` take `--folder-id`.
Use `upload-version` to replace an existing file's contents; its required
`--name` also renames the file. Run `<command> --help` for options.

```sh
/opt/hatch/bin/box-cli download --file-id <file_id> --output workspace/report.pdf
/opt/hatch/bin/box-cli upload --input workspace/report.pdf --name report.pdf --parent-folder-id <folder_id>
/opt/hatch/bin/box-cli update-file --file-id <file_id> --name renamed.pdf --parent-folder-id <folder_id>
/opt/hatch/bin/box-cli delete-file --file-id <file_id>
```

Downloads overwrite the output file. Deletion is permanent when Box trash is
disabled; deleting a nonempty folder requires `--recursive`.
`list-trash` returns retained items; pass `next_marker` as `--marker` to page.
Use `restore-file` or `restore-folder` to recover them. Their
`--fallback-parent-folder-id` applies only if the original parent no longer exists.

Downloads report the saved path and byte count; other results appear under
`result`. `ok: false` means the operation failed. REST commands make one attempt:
retry a download later if Box returns HTTP 202 (file not ready), and run
`refresh` on HTTP 401 before retrying. Check whether a failed change was applied
before retrying it.
Do not retry an access-denied operation through another command.

`/opt/hatch/bin/box-cli refresh` refreshes the connection.
`/opt/hatch/bin/box-cli disconnect` disconnects Box from Muse.
