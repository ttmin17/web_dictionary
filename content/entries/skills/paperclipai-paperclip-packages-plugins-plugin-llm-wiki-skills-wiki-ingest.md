---
slug: paperclipai-paperclip-packages-plugins-plugin-llm-wiki-skills-wiki-ingest
name: wiki-ingest
tagline: Use when an operation issue asks to ingest a captured `raw/` source
  into the LLM Wiki, or the user says "ingest <slug>". Create durable source,
  entity
summary: "- An operation issue with operationType: \"ingest\" assigned to you. -
  A raw/ path mentioned in the issue body (always treat raw/ as immutable). -
  The operation issue's target wikiId, spaceSlug, and space root (otherwis..."
categories:
  - agent-frameworks
tags:
  - acpx
  - agent-orchestration
  - agent-skills
  - agentic-ai
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: paperclipai/paperclip
  subpath: packages/plugins/plugin-llm-wiki/skills/wiki-ingest
  official_vendor: false
  license: MIT
signals:
  stars: 107406
  last_commit: 2026-10-26T06:44:43Z
  stars_delta_7d: 3106
  stars_growth_pct: 3
  trending_score: 3198.5
  velocity_source: snapshot_delta
  sparkline_4w:
    - 101411
    - 104300
    - 107406
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: paperclipai/paperclip
  path: packages/plugins/plugin-llm-wiki/skills/wiki-ingest/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:41:14.999Z
  truncated: false
type: agent_skill
skill:
  skill_name: wiki-ingest
  description: Use when an operation issue asks to ingest a captured `raw/` source
    into the LLM Wiki, or the user says "ingest <slug>". Create durable source,
    entity, concept, synthesis, index, and log pages; use paperclip-distill for
    Paperclip bundles.
  folder_path: packages/plugins/plugin-llm-wiki/skills/wiki-ingest
  extra_files: []
  pack_total_skills: 37
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: paperclipai-paperclip
---

# Wiki Ingest
Turn one source document into durable, interlinked wiki knowledge.

## Inputs

- An operation issue with `operationType: "ingest"` assigned to you.
- A `raw/` path mentioned in the issue body (always treat `raw/` as immutable).
- The operation issue's target `wikiId`, `spaceSlug`, and space root (otherwise stop and surface the missing config to the requester).

## Workflow

1. **Read context first.**
   - Read the target space's `AGENTS.md` for page conventions (filenames, frontmatter, voice, citation style).
   - Read the target space's `wiki/index.md` to see what already exists.
   - Read the target space's last ~20 entries of `wiki/log.md` to avoid re-ingesting a source or re-resolving a contradiction someone else already filed.
2. **Read the source end to end** with `wiki_read_source`, passing the operation issue's `wikiId` and `spaceSlug`. Do not skim. Note the source's structure, claims, dates, and anything that contradicts existing pages.
3. **Plan, then confirm — but only if the user is in the loop.** If the operation came from a routine (no live user), proceed. If a user is asking interactively, summarise the 3–5 takeaways you intend to file and ask which to emphasise before writing.
4. **Write the source page** at `wiki/sources/<slug>.md` — ~300–800 words, frontmatter per the wiki schema, neutral voice, key claims with quoted excerpts where they carry weight. The source page is the canonical citation target for everything else this skill writes.
5. **Update or create downstream pages** in `entities/`, `concepts/`, and `synthesis/`. A typical ingest touches 5–15 pages; resist creating pages for ideas that only appear once.
6. **Wire the cross-links.** Every claim that comes from the source cites it as `(see [[wiki/sources/<slug>]])`. Every entity / concept mentioned by name on more than one page links to its dedicated page.
7. **Flag contradictions; do not silently overwrite.** When new material disagrees with an existing page, append a `> ⚠ contradicted by [[wiki/sources/<slug>]] (YYYY-MM-DD)` callout to the older page and note the conflict in the log.
8. **Refresh `wiki/index.md`** with one-line summaries for any new pages.
9. **Append a log entry** in `wiki/log.md`:
   ```
   ## [YYYY-MM-DD] ingest | <source title>
   - source: raw/<filename>
   - new pages: [[...]], [[...]]
   - updated pages: [[...]], [[...]]
   - notes: <one-line synthesis or open question>
   ```

## Voice

- Terse, factual, neutral. Reference material, not narrative.
- No "Today I learned" or "This is interesting because" framing.
- Quote the source verbatim when paraphrasing would lose precision.

## Verification

Before closing the operation issue:

- [ ] Source page exists at `wiki/sources/<slug>.md` with valid frontmatter and a `sources:` field pointing to the raw path.
- [ ] Every new or updated page links back to the source page or a downstream page that does.
- [ ] `wiki/index.md` lists every new page under the right category with a one-line summary.
- [ ] `wiki/log.md` has the ingest entry with the exact filename heading format (so `grep "^## \[" wiki/log.md` keeps working).
- [ ] Any contradiction between the new source and an older page is annotated, not silently overwritten.
- [ ] No file under `raw/` was modified.

## Tools

`wiki_list_sources`, `wiki_read_source`, `wiki_search`, `wiki_read_page`, `wiki_write_page`. Always include the operation issue's `wikiId` and `spaceSlug`.
