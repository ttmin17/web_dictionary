---
slug: ruvnet-ruflo-plugins-ruflo-adr-skills-adr-create
name: adr-create
tagline: Create a new Architecture Decision Record with sequential numbering and
  AgentDB registration
summary: When a significant architectural decision needs to be recorded -- new
  technology adoption, API design choices, data model changes, infrastructure
  decisions, or any cross-cutting concern that affects multiple components.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-adr/skills/adr-create
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-adr/skills/adr-create/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.541Z
  truncated: false
type: agent_skill
skill:
  skill_name: adr-create
  description: Create a new Architecture Decision Record with sequential numbering
    and AgentDB registration
  folder_path: plugins/ruflo-adr/skills/adr-create
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Create ADR
Create a new Architecture Decision Record with the next sequential number, register it in the AgentDB graph, and link it to related ADRs.

## When to use

When a significant architectural decision needs to be recorded -- new technology adoption, API design choices, data model changes, infrastructure decisions, or any cross-cutting concern that affects multiple components.

## Steps

1. **Find next number** -- `Glob` for `docs/adr/ADR-*.md` and parse existing numbers to determine the next sequential ID (ADR-001, ADR-002, etc.). Create `docs/adr/` if it does not exist.

2. **Slugify title** -- Convert the title argument to a lowercase, hyphen-separated slug (e.g., "Use PostgreSQL for persistence" becomes `use-postgresql-for-persistence`).

3. **Create ADR file** -- `Write` the file at `docs/adr/ADR-NNN-<slug>.md` using the standard template:
   ```markdown
   # ADR-NNN: <Title>

   - **Status**: proposed
   - **Date**: <today's date YYYY-MM-DD>
   - **Deciders**: <leave blank for author to fill>
   - **Tags**: <leave blank>

   ## Context

   <!-- What is the issue that motivates this decision? -->

   ## Decision

   <!-- What is the change that we are proposing? -->

   ## Consequences

   ### Positive
   -

   ### Negative
   -

   ### Neutral
   -

   ## Links
   ```

4. **Store in AgentDB** -- Call `mcp__plugin_ruflo-core_ruflo__agentdb_hierarchical-store` with:
   - key: `mem:ADR-NNN`
   - tier: `semantic`
   - value: a JSON-encoded string: `{ "id": "ADR-NNN", "title": "<title>", "status": "proposed", "date": "<today>", "file": "docs/adr/ADR-NNN-<slug>.md" }`

5. **Find related ADRs** -- Call `mcp__plugin_ruflo-core_ruflo__memory_search` with the title as query in namespace `adr-patterns` to find related decisions. If matches are found, add them to the Links section and call `mcp__plugin_ruflo-core_ruflo__agentdb_causal-edge` for each relationship with:
   - sourceId: `mem:ADR-NNN`
   - targetId: `mem:ADR-RELATED`
   - relation: `depends-on`

6. **Store pattern** -- Call `mcp__plugin_ruflo-core_ruflo__memory_store` in namespace `adr-patterns` with key `ADR-NNN` and the title + context as value for future semantic search.

7. **Report** -- Output the created file path, ADR number, and any related ADRs found.
