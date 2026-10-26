---
slug: zhayujie-cowagent-skills-knowledge-wiki
name: knowledge-wiki
tagline: Manage the personal knowledge wiki. Use when the user shares articles,
  documents, or asks to organize knowledge; when a conversation produces
  insights
summary: "1. Read and understand the source material 2. Extract key facts,
  insights, and structured knowledge 3. Determine the appropriate subdirectory:
  - Read knowledge/index.md to see existing categories - If a matching categ..."
categories:
  - agent-frameworks
tags:
  - ai-agent
  - ai-agents
  - chatgpt-on-wechat
  - claude
status: active
quality_percentile: 98
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: zhayujie/CowAgent
  subpath: skills/knowledge-wiki
  official_vendor: false
  license: MIT
signals:
  stars: 47600
  last_commit: 2026-10-25T02:44:27Z
  stars_delta_7d: 139
  stars_growth_pct: 0.3
  trending_score: 139.41
  velocity_source: snapshot_delta
  sparkline_4w:
    - 47264
    - 47380
    - 47461
    - 47600
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: zhayujie/CowAgent
  path: skills/knowledge-wiki/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:42:01.361Z
  truncated: false
type: agent_skill
skill:
  skill_name: knowledge-wiki
  description: Manage the personal knowledge wiki. Use when the user shares
    articles, documents, or asks to organize knowledge; when a conversation
    produces insights worth preserving as structured knowledge; or when the user
    asks about the knowledge base.
  folder_path: skills/knowledge-wiki
  extra_files: []
  pack_total_skills: 3
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: zhayujie-cowagent
---

# Knowledge Wiki
Maintain a persistent, structured knowledge base in the `knowledge/` directory.

## Core Operations

### 1. Ingest — User shares an article, document, or resource

1. Read and understand the source material
2. Extract key facts, insights, and structured knowledge
3. Determine the appropriate subdirectory:
   - Read `knowledge/index.md` to see existing categories
   - If a matching category exists, follow that structure
   - If not, create a new subdirectory with a clear name
4. Create the knowledge page: `knowledge/<category>/<slug>.md`
5. Update `knowledge/index.md` and append to `knowledge/log.md`

### 2. Synthesize — Conversation produces valuable structured knowledge

1. Create a knowledge page under the appropriate category
2. Update related pages with cross-references
3. Update `knowledge/index.md` and `knowledge/log.md`

### 3. Query — User asks about accumulated knowledge

1. Check `knowledge/index.md` (already in your context) for relevant pages
2. Read specific pages with the `read` tool
3. Supplement with `memory_search` if needed

## Page Format

```markdown
# Page Title

> Source: <URL or description of the original material>

Content here. Cross-reference related pages with markdown links:
[Related Page](https://github.com/zhayujie/CowAgent/blob/master/skills/knowledge-wiki/../category/related-page.md)

## Key Points

- ...

## Related

- [Page A](https://github.com/zhayujie/CowAgent/blob/master/skills/knowledge-wiki/../category/page-a.md) — how it relates
- [Page B](https://github.com/zhayujie/CowAgent/blob/master/skills/knowledge-wiki/../category/page-b.md) — how it relates
```

The `> Source:` line records where the knowledge came from (URL, document name, conversation, etc.). Always include it when the material originates from a specific source.

Cross-references build a knowledge graph. When creating or updating a page, link to related pages and update those pages to link back. **Only link to pages that already exist** — if a concept deserves its own page, create it first, then add the link.

## Index Format (`knowledge/index.md`)

Flat list, one line per page: `[Title](https://github.com/zhayujie/CowAgent/blob/master/skills/knowledge-wiki/path) — one-line summary`. Group by category (matching subdirectories). No tables, no emoji.

```markdown
# Knowledge Index

## Category A
- [Page Title](https://github.com/zhayujie/CowAgent/blob/master/skills/knowledge-wiki/category-a/page-slug.md) — one-line summary

## Category B
- [Page Title](https://github.com/zhayujie/CowAgent/blob/master/skills/knowledge-wiki/category-b/page-slug.md) — one-line summary
```

Category names and structure are flexible — follow whatever organization already exists in the index, or create new categories based on the content.

## Log Format (`knowledge/log.md`)

Append-only, newest at bottom:

```markdown
## [YYYY-MM-DD] ingest | Page Title
## [YYYY-MM-DD] synthesize | Page Title
```

## Guidelines

- **File naming**: lowercase kebab-case (e.g. `machine-learning.md`)
- **One topic per page**: link between pages rather than duplicating
- **Update, don't duplicate**: if a page exists, update it
- **Cross-reference**: every page should link to related pages; keep the knowledge graph connected
- **Index is mandatory**: always update `knowledge/index.md` after any change
- **Be concise**: capture essence, not copy entire sources
- **Full paths in replies**: when referencing knowledge files in conversation replies, use the full path from workspace root (e.g. `[Title](https://github.com/zhayujie/CowAgent/blob/master/skills/knowledge-wiki/knowledge/<category>/<slug>.md)`), not relative paths. Relative paths are only for cross-references inside knowledge pages themselves.
- **Cite sources**: when answering based on knowledge pages, include links to the relevant pages so the user can explore further.
