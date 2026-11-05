---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-document
name: document
tagline: Agent skill from codewhale-hq/Codewhale
summary: "--- name: document description: Write or update repository/product
  documentation: README, user guides, API docs, architecture, migration notes,
  and changelog material. This is not the Word-document artifact skill. inv..."
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/document
  official_vendor: false
  license: MIT
signals:
  stars: 41158
  last_commit: 2026-11-05T13:03:13Z
  stars_delta_7d: 40
  stars_growth_pct: 0.1
  trending_score: 40.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41158
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/document/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:37.248Z
  truncated: false
type: agent_skill
skill:
  skill_name: document
  description: Agent skill from codewhale-hq/Codewhale
  folder_path: crates/skills/assets/skills/document
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

---
name: document
description: Write or update repository/product documentation: README, user guides, API docs, architecture, migration notes, and changelog material. This is not the Word-document artifact skill.
invocation: model+user
---

# Document

## When to use
Use for repo/product docs: README, guides, API docs, architecture, migrations, changelog notes.

## Non-goals
- Not Word/DOCX authoring (use docx).
- Not release publication (use release only when explicit).

## Workflow
1. Identify the doc audience and location.
2. Prefer updating existing docs over creating duplicates.
3. Keep commands and paths verified.
4. Call out unknowns instead of inventing them.
