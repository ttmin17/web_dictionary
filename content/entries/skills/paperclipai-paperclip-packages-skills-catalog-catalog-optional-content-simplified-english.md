---
slug: paperclipai-paperclip-packages-skills-catalog-catalog-optional-content-simplified-english
name: simplified-english
tagline: Write user-facing comments, plans, and documents in ASD-STE100
  Simplified Technical English — short, unambiguous sentences with approved
  words and one
summary: "- Use short sentences (procedures ≤ 20 words, descriptions ≤ 25
  words). - Give one instruction per sentence. - Use approved words with one
  meaning each; avoid synonyms and jargon. - Use the active voice and the
  presen..."
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
  subpath: packages/skills-catalog/catalog/optional/content/simplified-english
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
  path: packages/skills-catalog/catalog/optional/content/simplified-english/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:41:15.001Z
  truncated: false
type: agent_skill
skill:
  skill_name: simplified-english
  description: Write user-facing comments, plans, and documents in ASD-STE100
    Simplified Technical English — short, unambiguous sentences with approved
    words and one meaning each — so readers understand them the first time.
  folder_path: packages/skills-catalog/catalog/optional/content/simplified-english
  extra_files: []
  pack_total_skills: 37
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: paperclipai-paperclip
---

# Simplified English
For user-facing comments, plans, and documents, write using only ASD-STE100 Simplified Technical English.

## Core rules

- Use short sentences (procedures ≤ 20 words, descriptions ≤ 25 words).
- Give one instruction per sentence.
- Use approved words with one meaning each; avoid synonyms and jargon.
- Use the active voice and the present tense.
- Use articles ("the", "a") and do not drop words to save space.
- Write positive instructions; avoid negative or vague qualifiers.
- Keep paragraphs to one topic.

## Approved words

The approved words are the ASD-STE100 controlled vocabulary — the Dictionary in the current ASD-STE100 specification, plus the technical names and technical verbs that your subject needs. When a word is not approved, use the simplest common word that has one meaning. Prefer these house choices:

- "start" / "stop" (not "initiate", "commence", "terminate", "kill")
- "make" (not "implement", "leverage", "utilize")
- "before" / "after" (not "prior to", "subsequent to")
- "about" (not "regarding", "in relation to")
- "help" (not "facilitate")
- "use" (not "utilize", "employ")
