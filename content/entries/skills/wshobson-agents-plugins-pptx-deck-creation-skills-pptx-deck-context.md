---
slug: wshobson-agents-plugins-pptx-deck-creation-skills-pptx-deck-context
name: pptx-deck-context
tagline: Use when preparing the narrative, sources, and design context for a new
  editable PPTX deck.
summary: 1. Confirm audience, decision, slide count, language, sources, and
  brand requirements. 2. Use the user-selected narrative framework. If none is
  specified, offer mckinsey, scqa, pyramid, mece, action-title, assertion-e...
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/pptx-deck-creation/skills/pptx-deck-context
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/pptx-deck-creation/skills/pptx-deck-context/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.201Z
  truncated: false
type: agent_skill
skill:
  skill_name: pptx-deck-context
  description: Use when preparing the narrative, sources, and design context for a
    new editable PPTX deck.
  folder_path: plugins/pptx-deck-creation/skills/pptx-deck-context
  extra_files:
    - references/design-profiles.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# PPTX Deck Context
Prepare the deck before coordinates or PPTX objects are authored. This skill owns the business narrative, source lineage, and design lock.

## Decision sequence

1. Confirm audience, decision, slide count, language, sources, and brand requirements.
2. Use the user-selected narrative framework. If none is specified, offer `mckinsey`, `scqa`, `pyramid`, `mece`, `action-title`, `assertion-evidence`, `exec-summary-first`, or `custom`; do not choose silently.
3. Assign stable source IDs and plan a `source_ref` for every metric, quotation, chart value, and factual claim.
4. Choose a documented design direction. Prefer a user brand guide, then read-only reference-deck evidence, then a reusable profile from `references/design-profiles.md`.
5. Record the framework, assumptions, source manifest, palette, typography, spacing, and signature elements in `summary` before authoring slides.

## Rules

- One slide should communicate one message, with an action-style title where the framework calls for it.
- Treat design references as design evidence, not content or asset sources.
- Do not copy external fonts, images, icons, or logos without recorded licensing evidence.
- Translate design signals into explicit fills, typography, spacing, and bboxes; do not rely on an automatic layout engine.
- Keep long source material concise. Ask for a summary or decision-relevant excerpt instead of turning a deck spec into a document dump.

See `references/design-profiles.md` for reusable profile guidance.
