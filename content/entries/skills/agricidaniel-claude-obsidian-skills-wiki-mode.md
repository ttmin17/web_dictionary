---
slug: agricidaniel-claude-obsidian-skills-wiki-mode
name: wiki-mode
tagline: "Read or configure the vault filing methodology and suggest
  destinations for planned knowledge creation under Generic, LYT, PARA, or
  Zettelkasten. Use "
summary: "Resolve the installed product root from this skill's own location, not
  from the vault or current working directory:"
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-note-taking
  - ai-second-brain
  - claude-code
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-obsidian
  subpath: skills/wiki-mode
  official_vendor: false
  license: MIT
signals:
  stars: 16065
  last_commit: 2026-10-25T22:24:31Z
  stars_delta_7d: 238
  stars_growth_pct: 1.5
  trending_score: 241.58
  velocity_source: snapshot_delta
  sparkline_4w:
    - 15504
    - 15634
    - 15827
    - 16065
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-obsidian
  path: skills/wiki-mode/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:24.415Z
  truncated: false
type: agent_skill
skill:
  skill_name: wiki-mode
  description: Read or configure the vault filing methodology and suggest
    destinations for planned knowledge creation under Generic, LYT, PARA, or
    Zettelkasten. Use for wiki mode, methodology mode, what is my vault mode,
    set vault mode, switch to PARA, use LYT, Zettelkasten setup, change mode,
    configure mode, or methodology routing. This skill does not save content or
    migrate notes.
  folder_path: skills/wiki-mode
  extra_files:
    - templates/lyt/atomic-template.md
    - templates/lyt/moc-template.md
    - templates/para/area-template.md
    - templates/para/project-template.md
    - templates/para/resource-template.md
    - templates/zettel/atomic-template.md
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-obsidian
---

# Route by vault methodology
This skill returns filing suggestions. It does not write knowledge pages or
move existing notes. If `.vault-meta/mode.json` is absent, use `generic`. If
the file exists but is invalid, fail closed and repair it through a reviewed
configuration operation before suggesting routes; never silently substitute
Generic for corrupt user configuration.

Resolve the installed product root from this skill's own location, not from the
vault or current working directory:

```bash
PRODUCT_ROOT=/absolute/path/to/installed/claude-obsidian
CORE="$PRODUCT_ROOT/scripts/claude-obsidian.py"
MODE_HELPER="$PRODUCT_ROOT/scripts/wiki-mode.py"
test -f "$CORE" && test -f "$MODE_HELPER"
```

Every `../wiki/references/` link in this file resolves the same way, relative
to this skill's own directory under `$PRODUCT_ROOT`, never relative to the
selected vault's `wiki/` directory.

## Read and route safely

Always select the vault explicitly:

```bash
python3 "$MODE_HELPER" --vault "$VAULT" get
python3 "$MODE_HELPER" --vault "$VAULT" config
python3 "$MODE_HELPER" --vault "$VAULT" route concept "Concept name"
python3 "$MODE_HELPER" --vault "$VAULT" route source "Source title"
```

The helper validates the selected vault, confines paths, sanitizes names, and
prints a suggestion only. A calling skill may override the suggestion when the
user supplies a more specific project, area, MOC, or parent note, but it must
still apply its eventual writes through one operation transaction.

| Mode | Routing intent |
|---|---|
| `generic` | Type-based folders such as sources, entities, concepts, and sessions. |
| `lyt` | Atomic notes under `wiki/notes/`, connected through MOCs. |
| `para` | Projects, Areas, Resources, or Archives chosen by actionability. |
| `zettelkasten` | Flat atomic notes with time-sortable, collision-resistant identifiers and explicit links. |

Use the templates as structural guidance: [LYT atomic](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki-mode/templates/lyt/atomic-template.md),
[LYT MOC](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki-mode/templates/lyt/moc-template.md), [PARA area](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki-mode/templates/para/area-template.md),
[PARA project](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki-mode/templates/para/project-template.md),
[PARA resource](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki-mode/templates/para/resource-template.md), or
[Zettelkasten atomic](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki-mode/templates/zettel/atomic-template.md). They use canonical
`type` values from `claude_obsidian/page_schema.py` and a separate flat
`methodology_role` property:

| Template | Type | Methodology role |
|---|---|---|
| LYT atomic | `concept` | `atomic` |
| LYT MOC | `meta` | `moc` |
| PARA area | `concept` | `area` |
| PARA project | `entity` | `project` |
| PARA resource collection | `concept` | `resource` |
| Zettelkasten atomic | `concept` | `zettel` |

A resource template describes a topic collection. Use `source` instead when the
new page represents a particular captured source. The methodology role does not
add a router type: pass the canonical type and respect the chosen project, area,
or MOC destination. Structural MOCs use an explicit destination; `meta` is not a
routable new-note type. Existing user pages, custom type vocabularies, and saved
Dataview queries remain unchanged. Any requested migration needs its own reviewed
plan; switching mode never rewrites existing notes.

## Change mode

A mode change is one configuration operation, dry-run first:

1. Read the current `.vault-meta/mode.json`, or start from the helper's default
   config when it is absent.
2. Validate the requested mode as exactly `generic`, `lyt`, `para`, or
   `zettelkasten`. Preserve the other mode-specific settings.
3. Choose and retain a pinned UTC timestamp and operation ID for both commands.
4. Preview the canonical configuration transaction; the command records the
   current target hash and limits the write to `.vault-meta/mode.json`:

   ```bash
   python3 "$CORE" mode set "$MODE" --vault "$VAULT" \
     --generated-at "$GENERATED_AT" --operation-id "$OPERATION_ID"
   ```

5. Show the old mode, new mode, exact changed path, and complete preview. Copy
   its `approved_plan_sha256` only after review.
6. Apply by regenerating that exact vault-bound plan:

   ```bash
   python3 "$CORE" mode set "$MODE" --vault "$VAULT" \
     --generated-at "$GENERATED_AT" --operation-id "$OPERATION_ID" \
     --approved-plan-sha256 "$APPROVAL_SHA256" --apply
   ```

Follow the [operation transaction contract](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki-mode/../wiki/references/operation-transactions.md).
Do not use `scripts/wiki-mode.py`'s legacy direct-write `set` action or a setup
script to bypass this workflow.

Changing mode affects routing for future operations only. Never bulk-create
folders, move notes, rewrite wikilinks, or migrate existing pages as a side
effect. If migration is later requested, plan and review it as a distinct
operation with its own hashes and transaction.

## Checkpoint

Observe the user's current structure, think about how they retrieve and act on
notes, verify a few proposed routes before changing configuration, and grow by
revisiting the mode only when real filing friction appears.
