---
slug: marker-inc-korea-autorag-internal-skills-organize
name: organize
tagline: Rules for acting on files and folders on disk — sort, move, copy,
  bulk-rename, rename by content, convert formats, create folder structures, or
  move t
summary: "- Work with bash (ls, mkdir, mv, cp, and a bounded find). Read a file
  (with read or bash) only when its content decides the new name or folder, then
  carry the change out with bash or the file tools. - Use the converte..."
categories:
  - databases-memory
tags:
  - agentic-rag
  - ai-agents
  - document-parser
  - embeddings
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: Marker-Inc-Korea/AutoRAG
  subpath: internal-skills/organize
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5874
  last_commit: 2026-11-14T16:48:55Z
  stars_delta_7d: 39
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 5874
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Marker-Inc-Korea/AutoRAG
  path: internal-skills/organize/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:15:10.332Z
  truncated: false
type: agent_skill
skill:
  skill_name: organize
  description: Rules for acting on files and folders on disk — sort, move, copy,
    bulk-rename, rename by content, convert formats, create folder structures,
    or move to the trash. Plan every target path before changing anything, never
    overwrite or permanently delete, confirm with a listing, and report every
    change as old path → new path.
  folder_path: internal-skills/organize
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: marker-inc-korea-autorag
---

# Organizing files and folders
Use this skill when the user asks you to act on files or folders — tidy or sort
a folder, move or copy files into folders, bulk or pattern rename, rename files
according to what their content says, convert formats, create folder
structures, archive, or move files to the trash. This is a file-organization
task, not a document search: the answer is the change on disk, not information
found in the files.

## How to do it

- Work with `bash` (`ls`, `mkdir`, `mv`, `cp`, and a bounded `find`). Read a
  file (with `read` or `bash`) only when its content decides the new name or
  folder, then carry the change out with `bash` or the file tools.
- Use the converter tools for format conversions, the duplicate scan when the
  request is about duplicates, and the file-name discovery tools to locate
  files by name.
- Do **not** search document contents, the user's datasources, or the web in
  this turn: content retrieval and the web tools are not part of this task. The
  turn prompt lists the exact tools to use and the ones to leave alone.

## Rules

- **Plan first.** List what you found, decide every target path, and check that
  no two targets share a name and that no target already exists before you move
  anything. Never overwrite an existing file.
- **Touch only what the request names.** When the request does not name a
  folder, ask which one instead of guessing, unless the conversation already
  says.
- **Never delete permanently** — no `rm`, `rmdir`, `unlink`, `find -delete`,
  `shred`, or PowerShell `Remove-Item`. Move what must go to the OS trash
  instead (macOS `/usr/bin/trash`, Linux `gio trash`, Windows Recycle Bin).
- **Confirm afterwards.** List the destination folder to check the changes
  really happened.
- **Finish with a report**, as your final message and with no tool call: every
  change as old path → new path (one per line), what you skipped and why, and
  anything that still needs the user. Write in the language of the request.
