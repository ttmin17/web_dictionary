---
slug: paperclipai-paperclip-packages-plugins-plugin-llm-wiki-skills-index-refresh
name: index-refresh
tagline: "Use when an LLM Wiki operation issue requests an index refresh.
  Rebuild `wiki/index.md` from the actual wiki tree, reconcile missing/deleted
  entries, "
summary: "- An operation issue with operationType: \"index\" (or the
  index-refresh routine title). - The operation issue's target wikiId,
  spaceSlug, and space root. Refresh only that space unless the issue explicitly
  says this is..."
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
  subpath: packages/plugins/plugin-llm-wiki/skills/index-refresh
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
  path: packages/plugins/plugin-llm-wiki/skills/index-refresh/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:41:14.999Z
  truncated: false
type: agent_skill
skill:
  skill_name: index-refresh
  description: Use when an LLM Wiki operation issue requests an index refresh.
    Rebuild `wiki/index.md` from the actual wiki tree, reconcile missing/deleted
    entries, and log counts without editing page bodies.
  folder_path: packages/plugins/plugin-llm-wiki/skills/index-refresh
  extra_files: []
  pack_total_skills: 37
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: paperclipai-paperclip
---

# Index Refresh
Keep `wiki/index.md` accurate and scannable. The index is the maintainer's first stop for navigation — its quality determines how cheap every subsequent operation becomes.

## Inputs

- An operation issue with `operationType: "index"` (or the `index-refresh` routine title).
- The operation issue's target `wikiId`, `spaceSlug`, and space root. Refresh only that space unless the issue explicitly says this is a multi-space sweep.

## Workflow

1. **Read the target space's `wiki/index.md`** as it currently stands.
2. **Walk the target space's `wiki/`.** `wiki/projects/<slug>/standup.md` entries are current-state companions for durable `wiki/projects/<slug>/index.md` pages; index them only as links attached to the matching project entry. Walk `wiki/` by category (`sources/`, `projects/`, `entities/`, `concepts/`, `synthesis/`, plus any custom subdirectories the wiki schema added).
3. **Read the target space's last ~50 entries of `wiki/log.md`** to spot pages that were created or substantially changed but never made it to the index.
4. **Per category, produce sorted entries** of the form:
   ```
   - [[<path>]] — <one-line summary>
   ```
   The summary is one factual sentence pulled from the page's first paragraph or its title. **No status, no datestamps in the index** — those belong in the page itself or in the log.
5. **Drop entries whose page no longer exists.** Note the deletion in the log:
   ```
   ## [YYYY-MM-DD] index-refresh | reconciled
   - removed: [[wiki/old-page]] (page deleted)
   - added: [[wiki/new-page]] — <summary>
   ```
6. **Add entries for pages that exist on disk but were missing from the index.** Skip `wiki/log.md` and `wiki/index.md` themselves. For standalone `wiki/projects/<slug>/standup.md` without a matching durable project page, add it under Projects and flag it for later durable-page distillation.
7. **Write project entries editorially.** The Projects section should group work by the project's concept and purpose, not by issue ids, dates, statuses, UUIDs, or source metadata. Link task identifiers only as supporting evidence.
8. **Preserve custom categories.** If the wiki has added e.g. `wiki/papers/` or `wiki/runbooks/`, keep its index section. Do not collapse to the default five categories.
9. **Append a log entry** with counts:
   ```
   ## [YYYY-MM-DD] index-refresh | added=N removed=M
   - operation issue: <issue identifier>
   ```
   If the index was already accurate, the log entry says `added=0 removed=0` — still write it so future audits can see the run happened.

## What this skill does NOT do

- Does not change page content.
- Does not resolve contradictions, fix broken links, or fill concept gaps. Those go to the next `wiki-lint` run.
- Does not write summaries that are not already supported by the page itself. If a page lacks a clear first paragraph to summarise, flag it for `wiki-lint`.

## Voice

- Index entries are one factual line per page, present tense.
- No emojis, no statuses, no dates in `wiki/index.md`. Dates live in the log.

## Verification

Before closing the operation issue:

- [ ] `wiki/index.md` matches the actual contents of `wiki/` — no missing pages, no dangling entries.
- [ ] Project entries include current `wiki/projects/<slug>/standup.md` links when standups exist.
- [ ] Each index line has the form `- [[path]] — <summary>`.
- [ ] Custom category sections are preserved.
- [ ] `wiki/log.md` has the index-refresh entry with counts (even if the counts are zero).
- [ ] No page bodies were modified. No file under `raw/` was modified.

## Tools

`wiki_search`, `wiki_read_page`, `wiki_write_page` (for `wiki/index.md` and `wiki/log.md` only). Always include the operation issue's `wikiId` and `spaceSlug`.
