---
slug: agricidaniel-claude-obsidian-skills-obsidian-bases
name: obsidian-bases
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
  subpath: skills/obsidian-bases
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
  path: skills/obsidian-bases/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:43.248Z
  truncated: false
type: agent_skill
skill:
  skill_name: obsidian-bases
  description: Agent skill from AgriciDaniel/claude-obsidian
  folder_path: skills/obsidian-bases
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-obsidian
---

# Obsidian Bases
Use this as a compact workflow and fallback syntax reference. Prefer a
separately installed `kepano/obsidian-skills` `obsidian-bases` skill, then the
current [official Bases syntax](https://help.obsidian.md/bases/syntax), for
detailed or version-sensitive fields and functions.

Answer design and syntax questions read-only. For a requested `.base` edit,
resolve the user vault and use one inspected transaction; never write the file
directly.

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

## Workflow

1. Inspect representative note properties and any existing `.base` file.
2. Define the smallest filter that selects the intended notes.
3. Add formulas only for values that must be computed.
4. Choose views and display order. Do not assume a view type or option is
   supported by the user's Obsidian version or installed plugins.
5. Validate YAML, expression quoting, property names, formula references, and
   null handling.
6. Preview the complete file and expected result set before a mutation.
7. If an edit was requested, read
   [operation-transactions.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/obsidian-bases/../wiki/references/operation-transactions.md),
   keep the `.base` file under `wiki/`, and build one
   `claude-obsidian.transaction.v1` bundle with `operation_type: base`. Inspect
   it, then set `APPROVAL_SHA256` to the returned `approval_sha256` only after
   review and apply once:

   ```bash
   python3 "$CORE" transaction inspect "$BUNDLE" --vault "$VAULT"
   python3 "$CORE" transaction apply "$BUNDLE" --vault "$VAULT" \
     --approved-plan-sha256 "$APPROVAL_SHA256"
   ```
8. Ask the user to render the Base in Obsidian when application-level behavior
   cannot be verified locally.

## Compact schema

`.base` files are YAML. Common top-level keys are `filters`, `formulas`,
`properties`, `summaries`, and `views`.

```yaml
filters:
  and:
    - file.inFolder("wiki")
    - 'status != "archived"'

formulas:
  age_days: '((now() - file.ctime) / 86400000).round(0)'
  status_label: 'if(status == "mature", "Ready", "Review")'

properties:
  status:
    displayName: "Status"
  formula.age_days:
    displayName: "Age (days)"

views:
  - type: table
    name: "Wiki pages"
    order:
      - file.name
      - type
      - status
      - updated
      - formula.age_days
```

Global filters apply to every view. A view may also define its own `filters`.
Recursive filter objects use one of `and`, `or`, or `not` at each level.

```yaml
filters:
  or:
    - file.hasTag("concept")
    - and:
        - file.hasTag("source")
        - 'status == "active"'
```

Use note properties by name, file metadata as `file.name`, `file.path`,
`file.folder`, `file.ext`, `file.ctime`, `file.mtime`, or `file.tags`, and
computed properties as `formula.<name>`.

## Formula and YAML rules

- Quote expressions that contain operators, colons, or nested string quotes.
- Guard nullable properties with `if()`.
- Subtracting two dates returns a millisecond number. Divide by `86400000`
  before rounding when a whole-day count is intended.
- Define every `formula.<name>` before referencing it in a view or property
  display configuration.
- Do not transplant Dataview-only keys such as `from` or `where` into a Base.
- Do not invent properties absent from the selected notes without explaining
  that the resulting column will be empty.

```yaml
formulas:
  days_until: 'if(due_date, ((date(due_date) - today()) / 86400000).round(0), "")'
```

Table, cards, and list views are common:

```yaml
views:
  - type: cards
    name: "Reading list"
    order:
      - file.name
      - author
      - status
  - type: list
    name: "Quick list"
    order:
      - file.name
      - status
```

Embed a Base or one named view in a Markdown note:

```markdown
![[Dashboard.base]]
![[Dashboard.base#Wiki pages]]
```

After an applied edit, report the operation ID, exact changed path, validation
performed, and anything that still requires rendering in Obsidian. Do not
commit Git.
