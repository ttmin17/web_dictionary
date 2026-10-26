---
slug: agricidaniel-claude-obsidian-skills-canvas
name: canvas
tagline: Agent skill from AgriciDaniel/claude-obsidian
summary: Agent skill from AgriciDaniel/claude-obsidian
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-note-taking
  - ai-second-brain
  - claude-code
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-obsidian
  subpath: skills/canvas
  official_vendor: false
  license: MIT
signals:
  stars: 15827
  last_commit: 2026-10-25T22:24:31Z
  stars_delta_7d: 193
  stars_growth_pct: 1.2
  trending_score: 195.38
  velocity_source: snapshot_delta
  sparkline_4w:
    - 15392
    - 15504
    - 15634
    - 15827
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-obsidian
  path: skills/canvas/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:43.248Z
  truncated: false
type: agent_skill
skill:
  skill_name: canvas
  description: Agent skill from AgriciDaniel/claude-obsidian
  folder_path: skills/canvas
  extra_files:
    - references/canvas-spec.md
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-obsidian
---

# Canvas
Treat a canvas as a vault-scoped JSON Canvas document. Keep reads read-only and
route every requested mutation through one recoverable transaction.

Resolve the installed product root from this skill's own location, not from the
vault or current working directory:

```bash
PRODUCT_ROOT=/absolute/path/to/installed/claude-obsidian
CORE="$PRODUCT_ROOT/scripts/claude-obsidian.py"
test -f "$CORE"
```

Every `../wiki/references/` link in this file resolves the same way, relative
to this skill's own directory under `$PRODUCT_ROOT`, never relative to the
selected vault's `wiki/` directory.

## Choose the syntax source

Prefer a separately installed `kepano/obsidian-skills` `json-canvas` skill for
format details. Otherwise read [references/canvas-spec.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/canvas/references/canvas-spec.md).
The open standard is [JSON Canvas 1.0](https://jsoncanvas.org/spec/1.0/).

Use this skill for vault workflow and transaction safety even when an upstream
syntax skill is available.

## Scope

- Resolve the user vault before reading. Never derive it from plugin files.
- Store boards under `wiki/canvases/`; use `wiki/canvases/main.canvas` only as
  the default when the user did not name a board.
- Treat `wiki/canvases/index.md` as an optional catalog. Update it only when a
  canvas is created, renamed, or removed.
- Use vault-relative paths in `file` and `background`; reject absolute paths,
  `..` traversal, home shortcuts, and paths that escape through symlinks.
- Reference only files already inside the vault. If an optional capture or
  media capability is detected, compose with it and consume its returned
  vault-relative path. Do not assume a particular plugin, command, or session
  log, and do not download or copy assets in this skill.
- Use `link` nodes for URLs. Accept HTTPS URLs only; a link node does not grant
  permission to fetch the page. Creating its JSON makes no request, but opening
  it in Obsidian may fetch Open Graph metadata from that URL's host. Disclose
  that render-time egress and confirm it is acceptable; otherwise use a text
  node containing the URL.

## Read-only operations

For status or list requests, parse the selected `.canvas` files and report node
counts, group labels, broken edge endpoints, and missing vault-relative file
targets. If the default canvas is absent, report that fact and offer a creation
preview; do not create it during a status request.

## Draft a mutation

1. Read the entire canvas and any catalog target. Record each expected SHA-256,
   or `null` for a file that must be absent.
2. Preserve unknown JSON fields and existing array order. The node array is
   bottom-to-top z-order.
3. Draft the requested nodes or edges:
   - Give every node and edge a unique ID. Prefer a random 16-character
     lowercase hexadecimal ID and verify it is unused.
   - Require integer `x`, `y`, `width`, and `height` values for every node.
   - Use `text`, `file`, `link`, or `group` exactly as defined by JSON Canvas.
   - Require every `fromNode` and `toNode` to reference an existing or newly
     drafted node.
4. Position new content deliberately. A group is a visual container, not a
   parent. Use 20 px inner padding and 40 px gaps, wrap to a new row when
   needed, and preview any group expansion.
5. Serialize valid UTF-8 JSON with top-level `nodes` and `edges` arrays.

Minimal node examples:

```json
{
  "nodes": [
    {
      "id": "6f0ad84f44ce9c17",
      "type": "text",
      "text": "# Research map\n\nA concise orientation card.",
      "x": 0,
      "y": 0,
      "width": 400,
      "height": 180
    },
    {
      "id": "a1b2c3d4e5f67890",
      "type": "file",
      "file": "wiki/concepts/Contextual Retrieval.md",
      "x": 460,
      "y": 0,
      "width": 400,
      "height": 240
    }
  ],
  "edges": []
}
```

Use `file` plus optional `subpath: "#Heading"` for notes, images, PDFs, and
other vault files. Use `url` only on a `link` node. Escape line breaks in JSON
strings as `\n`, not as literal backslash-plus-`n` text.

## Preview and apply

Validate before showing the preview:

- JSON parses and uses supported node types.
- IDs are unique and edge endpoints exist.
- dimensions are positive integers;
- file and background paths are safe, vault-relative, and present;
- new nodes do not unintentionally overlap or overflow their requested group.

Build one `claude-obsidian.transaction.v1` bundle with operation type `canvas`.
Include the canvas and the catalog in that same bundle when the catalog changes.
Read [operation-transactions.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/canvas/../wiki/references/operation-transactions.md),
then inspect the bundle before applying it:

```bash
python3 "$CORE" transaction inspect BUNDLE --vault VAULT
# Set APPROVAL_SHA256 to the inspect result's approval_sha256 after review.
python3 "$CORE" transaction apply BUNDLE --vault VAULT \
  --approved-plan-sha256 "$APPROVAL_SHA256"
```

For removals, replacements, renames, or other destructive changes, obtain
explicit consent after presenting the preview. Report the operation ID, exact
changed paths, board name, node IDs, and final positions. Do not commit Git.
