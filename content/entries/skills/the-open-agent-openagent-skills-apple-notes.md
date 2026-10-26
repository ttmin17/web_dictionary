---
slug: the-open-agent-openagent-skills-apple-notes
name: apple-notes
tagline: Manage Apple Notes via the `memo` CLI on macOS (create, view, edit,
  delete, search, move, and export notes). Use when a user asks OpenClaw to add
  a no
summary: "- Install (Homebrew): brew tap antoniorodr/memo && brew install
  antoniorodr/memo/memo - Manual (pip): pip install . (after cloning the repo) -
  macOS-only; if prompted, grant Automation access to Notes.app."
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
  subpath: skills/apple-notes
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
  path: skills/apple-notes/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.201Z
  truncated: false
type: agent_skill
skill:
  skill_name: apple-notes
  description: Manage Apple Notes via the `memo` CLI on macOS (create, view, edit,
    delete, search, move, and export notes). Use when a user asks OpenClaw to
    add a note, list notes, search notes, or manage note folders.
  folder_path: skills/apple-notes
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# Apple Notes CLI
Use `memo notes` to manage Apple Notes directly from the terminal. Create, view, edit, delete, search, move notes between folders, and export to HTML/Markdown.

Setup

- Install (Homebrew): `brew tap antoniorodr/memo && brew install antoniorodr/memo/memo`
- Manual (pip): `pip install .` (after cloning the repo)
- macOS-only; if prompted, grant Automation access to Notes.app.

View Notes

- List all notes: `memo notes`
- Filter by folder: `memo notes -f "Folder Name"`
- Search notes (fuzzy): `memo notes -s "query"`

Create Notes

- Add a new note: `memo notes -a`
  - Opens an interactive editor to compose the note.
- Quick add with title: `memo notes -a "Note Title"`

Edit Notes

- Edit existing note: `memo notes -e`
  - Interactive selection of note to edit.

Delete Notes

- Delete a note: `memo notes -d`
  - Interactive selection of note to delete.

Move Notes

- Move note to folder: `memo notes -m`
  - Interactive selection of note and destination folder.

Export Notes

- Export to HTML/Markdown: `memo notes -ex`
  - Exports selected note; uses Mistune for markdown processing.

Limitations

- Cannot edit notes containing images or attachments.
- Interactive prompts may require terminal access.

Notes

- macOS-only.
- Requires Apple Notes.app to be accessible.
- For automation, grant permissions in System Settings > Privacy & Security > Automation.
