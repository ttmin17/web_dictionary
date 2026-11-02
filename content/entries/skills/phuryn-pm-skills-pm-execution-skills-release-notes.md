---
slug: phuryn-pm-skills-pm-execution-skills-release-notes
name: release-notes
tagline: Generate user-facing release notes from tickets, PRDs, or changelogs.
  Creates clear, engaging summaries organized by category (new features,
  improveme
summary: Transform technical tickets, PRDs, or internal changelogs into
  polished, user-facing release notes.
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-execution/skills/release-notes
  official_vendor: false
  license: MIT
signals:
  stars: 27614
  last_commit: 2026-10-29T19:09:57Z
  stars_delta_7d: 233
  stars_growth_pct: 0.9
  trending_score: 234.98
  velocity_source: snapshot_delta
  sparkline_4w:
    - 26957
    - 27192
    - 27381
    - 27614
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-execution/skills/release-notes/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:41.829Z
  truncated: false
type: agent_skill
skill:
  skill_name: release-notes
  description: Generate user-facing release notes from tickets, PRDs, or
    changelogs. Creates clear, engaging summaries organized by category (new
    features, improvements, fixes). Use when writing release notes, creating
    changelogs, announcing product updates, or summarizing what shipped.
  folder_path: pm-execution/skills/release-notes
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

## Release Notes Generator

Transform technical tickets, PRDs, or internal changelogs into polished, user-facing release notes.

### Context

You are writing release notes for **$ARGUMENTS**.

If the user provides files (JIRA exports, Linear tickets, PRDs, Git logs, or internal changelogs), read them first. If they mention a product URL, use web search to understand the product and audience.

### Instructions

1. **Gather raw material**: Read all provided tickets, changelogs, or descriptions. Extract:
   - What changed (feature, improvement, or fix)
   - Who it affects (which user segment)
   - Why it matters (the user benefit)

2. **Categorize changes**:
   - **New Features**: Entirely new capabilities
   - **Improvements**: Enhancements to existing features
   - **Bug Fixes**: Issues resolved
   - **Breaking Changes**: Anything that requires user action (migrations, API changes)
   - **Deprecations**: Features being sunset

3. **Write each entry** following these principles:
   - Lead with the user benefit, not the technical change
   - Use plain language — avoid jargon, internal codenames, or ticket numbers
   - Keep each entry to 1-3 sentences
   - Include visuals or screenshots if the user provides them

   **Example transformations**:
   - Technical: "Implemented Redis caching layer for dashboard API endpoints"
   - User-facing: "Dashboards now load up to 3× faster, so you spend less time waiting and more time analyzing."

   - Technical: "Fixed race condition in concurrent checkout flow"
   - User-facing: "Fixed an issue where some orders could fail during high-traffic periods."

4. **Structure the release notes**:

   ```
   # [Product Name] — [Version / Date]

   ## New Features
   - **[Feature name]**: [1-2 sentence description of what it does and why it matters]

   ## Improvements
   - **[Area]**: [What got better and how it helps]

   ## Bug Fixes
   - Fixed [issue description in user terms]

   ## Breaking Changes (if any)
   - **Action required**: [What users need to do]
   ```

5. **Adjust tone** to match the product's voice — professional for B2B, friendly for consumer, developer-focused for APIs.

Save as a markdown document. If the user wants HTML or another format, convert accordingly.
