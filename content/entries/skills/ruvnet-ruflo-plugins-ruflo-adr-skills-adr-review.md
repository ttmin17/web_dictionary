---
slug: ruvnet-ruflo-plugins-ruflo-adr-skills-adr-review
name: adr-review
tagline: Review code changes against accepted ADRs for compliance violations
summary: Before merging a PR, after significant code changes, or as part of a
  periodic compliance check. Use this to ensure code changes respect the
  architectural decisions the team has agreed upon.
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
  subpath: plugins/ruflo-adr/skills/adr-review
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
  path: plugins/ruflo-adr/skills/adr-review/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.541Z
  truncated: false
type: agent_skill
skill:
  skill_name: adr-review
  description: Review code changes against accepted ADRs for compliance violations
  folder_path: plugins/ruflo-adr/skills/adr-review
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# ADR Review
Review code changes against accepted Architecture Decision Records to detect violations, drift, and non-compliance.

## When to use

Before merging a PR, after significant code changes, or as part of a periodic compliance check. Use this to ensure code changes respect the architectural decisions the team has agreed upon.

## Steps

1. **Get diff** -- Run `git diff main...HEAD --name-only` (or the specified branch) to list changed files. Then run `git diff main...HEAD` to get the full diff content.

2. **Find relevant ADRs** -- For each changed file:
   - `Grep` the file for ADR references (`ADR-\d+`)
   - `Grep` `docs/adr/` for ADRs that mention the changed file paths or modules
   - Call `mcp__plugin_ruflo-core_ruflo__memory_search` with the file path and change summary to find semantically related ADRs

3. **Load ADR content** -- `Read` each relevant ADR file. Focus on:
   - The **Decision** section (what was decided)
   - The **Status** (only enforce "accepted" ADRs)
   - The **Consequences** (expected constraints)

4. **Check for violations** -- Analyze each changed file against its relevant ADRs:
   - Does the code change contradict an accepted decision?
   - Does it use a technology/pattern that an ADR explicitly rejected?
   - Does it modify a module in a way the ADR's consequences warned against?
   - Is the code referencing a deprecated or superseded ADR?

5. **Query relationship graph** -- Call `mcp__plugin_ruflo-core_ruflo__memory_list` with namespace `adr-edges` (rows are keyed `<relation>:<from>__<to>` with relation `supersedes`, `amends` or `depends-on`) to check if any referenced ADR has been superseded. If the namespace is empty, run `adr-index` first. If a referenced ADR is superseded, flag that the code references an outdated decision.

6. **Report** -- Present findings as a compliance report:
   ```
   ## ADR Compliance Report

   ### Violations
   - [ ] <file>:<line> — violates ADR-NNN: <reason>

   ### Warnings
   - [!] <file> references superseded ADR-NNN (replaced by ADR-MMM)

   ### Compliant
   - [x] <file> — consistent with ADR-NNN

   ### Unlinked Changes
   - [?] <file> — no ADR coverage (consider creating one)
   ```

7. **Suggest actions** -- For each violation, suggest whether to update the code or propose a new ADR to supersede the violated one.
