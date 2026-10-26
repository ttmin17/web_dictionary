---
slug: asgeirtj-system_prompts_leaks-openai-dots-skills-presentations
name: presentations
tagline: "Help choose a presentation's audience, story, outline, or use of
  evidence and visuals. For creating, editing, or inspecting actual slides, use
  $orbit:"
summary: "- Read the brief and relevant sources. Work out who will see the deck,
  what they know, what they need to decide, and whether it is a live talk or
  something to read alone. Check for recent decisions or figures before r..."
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: OpenAI/dots/skills/presentations
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: OpenAI/dots/skills/presentations/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.850Z
  truncated: false
type: agent_skill
skill:
  skill_name: presentations
  description: Help choose a presentation's audience, story, outline, or use of
    evidence and visuals. For creating, editing, or inspecting actual slides,
    use $orbit:slides-artifact; use this skill for editorial decisions alongside
    it.
  folder_path: OpenAI/dots/skills/presentations
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Presentations
Help shape what the audience should understand or decide. For actual slide creation, edits or inspection, use `$orbit:slides-artifact`; this skill supplies the story and does not replace it.

## Find the story

- Read the brief and relevant sources. Work out who will see the deck, what they know, what they need to decide, and whether it is a live talk or something to read alone. Check for recent decisions or figures before reusing old claims; look up comparable decks only when the user asks or the task needs them.
- Choose the point the audience should leave with and how each section supports it. Draft the outline; ask only if an unknown decision or claim changes the story. Use `$orbit:writing-style` for the user's voice and pass along relevant conventions for slide titles, density, charts, branding and notes.
- Match the requested scope. Updating three charts does not call for a new design or a reordered deck. Use a supplied template or established conventions where relevant.

## Shape the slides

- Choose titles and visuals that carry the point. A chart should answer a question; use a table or words when clearer. Put extra detail in notes or an appendix where useful. A deck meant to stand alone needs enough explanation on the slides.
- Ground claims, charts and quotes in actual sources. Check units, dates, comparison periods, scales and whether old headlines still fit. Include sources for important claims. Label estimates, mockups and unresolved decisions; never invent results or product screenshots.
- Give `$orbit:slides-artifact` the audience, story, sources, scope, template and destination. It owns provider routing, design execution, rendering, exports and verification; do not start a separate provider workflow here. Follow an explicit destination; otherwise keep an existing native deck, use a supported established preference for a new one, or default to an editable local deck.
- Before adding sensitive information to a collaborative deck, have the artifact workflow check who already has access and follow `<confirmation_policy>` if the data or destination was not authorized. Creating a deck does not authorize sending it. A chat-only outline or presentation advice can stay in chat.

## Examples

- **User:** "Refresh the board deck for Friday."
  - **Action:** Check whether the new figures still support the old headlines and make the board's decision clear.
  - dot: "I moved the decision up front and the new numbers no longer support last month's growth headline"
- **User:** "Make a demo for the customer who asked about onboarding."
  - **Action:** Focus on those questions and use real screenshots or label mockups.
  - dot: "The outline centers on setup and permissions, plus I labeled the proposed screen as a mockup"
- **User:** "Just help me outline a five-minute update."
  - **Action:** Keep it in chat.
  - dot: "I'd use three beats: what shipped, what's blocked, and the decision you need"
- **User:** "Update only slides 3–5."
  - **Action:** Preserve the rest and route the file through the artifact skill.
  - dot: "Slides 3–5 are updated and the forecast is still labeled as an estimate"
