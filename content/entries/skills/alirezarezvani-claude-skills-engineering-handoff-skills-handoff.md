---
slug: alirezarezvani-claude-skills-engineering-handoff-skills-handoff
name: handoff
tagline: Compact the current conversation into a handoff document for another
  agent to pick up. References existing artifacts (PRDs, plans, ADRs, issues,
  commi
summary: Write a handoff document summarising the current conversation so a
  fresh agent can continue the work. Save it to a path produced by mktemp -t
  handoff-XXXXXX.md (read the file before you write to it).
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: engineering/handoff/skills/handoff
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 1198
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: engineering/handoff/skills/handoff/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.258Z
  truncated: false
type: agent_skill
skill:
  skill_name: handoff
  description: Compact the current conversation into a handoff document for
    another agent to pick up. References existing artifacts (PRDs, plans, ADRs,
    issues, commits, diffs) by path or URL instead of duplicating them. Use when
    user wants to hand off the conversation to a fresh agent or starts a new
    session that picks up prior work.
  folder_path: engineering/handoff/skills/handoff
  extra_files:
    - references/companion_tooling.md
    - references/deduplication_discipline.md
    - references/handoff_structure.md
    - references/next_session_skill_matching.md
    - scripts/artifact_deduplicator.py
    - scripts/handoff_template_generator.py
    - scripts/skill_recommender.py
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Handoff
> Derived from [Matt Pocock's handoff](https://github.com/mattpocock/skills/tree/main/skills/productivity/handoff) (MIT). Matt's no-duplication discipline preserved verbatim. Additions: tools + references + cs-* wrapper (see [references/companion_tooling.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/handoff/skills/handoff/references/companion_tooling.md)).

Write a handoff document summarising the current conversation so a fresh agent can continue the work. Save it to a path produced by `mktemp -t handoff-XXXXXX.md` (read the file before you write to it).

Suggest the skills to be used, if any, by the next session.

Do not duplicate content already captured in other artifacts (PRDs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.

## Sections

- **Goal of next session** (from user argument or inferred)
- **State of play** (what's done, what's blocking)
- **Open decisions** (what the next agent must decide)
- **Skills to use** (concrete list)
- **Artifacts** (paths/URLs to PRDs, plans, ADRs, issues, branches, PRs — do not duplicate)

## Tooling

See [references/companion_tooling.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/handoff/skills/handoff/references/companion_tooling.md). Tools: template + dedup + recommender. Agent: `cs-handoff-author`. Command: `/cs-handoff`.

---
**Version:** 1.0.0
**Derived:** Matt Pocock (MIT) + this repo's wrapper
