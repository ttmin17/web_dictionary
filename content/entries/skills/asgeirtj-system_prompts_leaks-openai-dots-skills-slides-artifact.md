---
slug: asgeirtj-system_prompts_leaks-openai-dots-skills-slides-artifact
name: slides-artifact
tagline: Use when the user asks to create, edit, or review slides or a
  presentation (PowerPoint or Google Slides), including when the task clearly
  calls for an
summary: When creating a new artifact, explicitly set the subagent's reasoning
  effort to xhigh.
categories:
  - media-creative
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
  subpath: OpenAI/dots/skills/slides-artifact
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
  path: OpenAI/dots/skills/slides-artifact/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.851Z
  truncated: false
type: agent_skill
skill:
  skill_name: slides-artifact
  description: Use when the user asks to create, edit, or review slides or a
    presentation (PowerPoint or Google Slides), including when the task clearly
    calls for an audience-ready slide deck. Also use to answer questions that
    require inspecting an existing deck; not for general presentation advice or
    a chat-only outline.
  folder_path: OpenAI/dots/skills/slides-artifact
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Slide Artifacts
Use this for creating, editing or faithfully inspecting a real slide deck. A chat-only outline or general presentation advice can stay in chat. A question about an existing deck does not authorize changing it.

## Reasoning effort for new artifacts

When creating a new artifact, explicitly set the subagent's reasoning effort to `xhigh`.

## Start with the shared skill

- Before reading, extracting, reviewing, creating or editing slides, find and follow the shared runtime skill named `Presentations`. If `skills.read` is available, use the package listed for that shared skill; do not guess a path or select `$orbit:presentations` or `$orbit:slides-artifact` as the shared skill. Give it the brief, deck or template, audience, desired count and scope. It owns supported inspection, design execution, rendering, quality checks, exports and Google Slides routing. If it is unavailable, say what is blocked rather than inventing a parallel file workflow.
- Use the editorial guidance in `$orbit:presentations` only when the audience or story needs thought, and `$orbit:writing-style` when writing on the user's behalf; then continue with the shared skill without routing back into this wrapper. Pass along known conventions or the supplied template. Find comparable decks when asked or when needed; don't routinely scan Drive or Library to personalize.

## Make and deliver it

- Honor an explicit format or supported destination, including Google Slides, Figma or Spaces. Keep an existing native deck in the original unless the user asks for a copy or conversion. For a new deck, use a supported, clearly established preference; otherwise create a downloadable editable local presentation. A PDF does not replace a requested editable deck. Before adding sensitive information to a collaborative original, check who already has access and follow `<confirmation_policy>` if the data or destination was not authorized.
- For inspection, use the shared skill's supported read-only route and check relevant visuals, chart labels or speaker notes; for authored work, inspect every slide and the exact export when supported. Preserve edit scope, and re-read an uncertain write before retrying. Attach the verified deck when supported or provide its verified Library/download or provider link. State any unverified export, conversion or link; follow `<confirmation_policy>` before changing access or sending to others.

## Examples

**1. A leadership update with editable charts**

- **User:** "Make a six-slide leadership update with editable charts."
- **Action:** Create six slides, check the figures and headlines, and keep the charts editable.
- **Guidance:** Verify the deck and deliver the editable file, not just a PDF.
- dot:

  ```text
  "Here's your [six-slide deck](https://github.com/asgeirtj/system_prompts_leaks/blob/main/OpenAI/dots/skills/slides-artifact/LINK_URL). The adoption chart uses September's numbers, and you can edit the charts."
  ```

**2. A focused customer-deck update**

- **User:** "Update slides 3–5 of the customer deck and add speaker notes."
- **Action:** Update only those slides and their notes, then return the original provider link.
- **Guidance:** Preserve the rest of the deck and check the edited slides before delivering.
- dot:

  ```text
  "Updated slides 3–5 in your [customer deck](https://github.com/asgeirtj/system_prompts_leaks/blob/main/OpenAI/dots/skills/slides-artifact/LINK_URL), with speaker notes for each."
  ```

**3. Two different pilot dates**

- **User:** "Does this deck say when the pilot starts?"
- **Action:** Inspect both the slides and speaker notes without editing.
- **Guidance:** Report the conflicting dates rather than choosing one. A question about the deck is not permission to change it.
- dot: "There are two dates in there: October on the slides, September in slide 7's notes."

**4. Internal figures in a customer's deck**

- **User:** "Put the internal churn breakdown in the customer's shared deck."
- **Action:** Check who can access the deck and which data the user authorized for that destination. If the scope is unclear, ask before adding it.
- **Guidance:** Follow `<confirmation_policy>` for the specific data and destination.
- dot: "The customer can see that deck. Which churn figures are okay to share with them?"

**5. A PDF copy that still needs a layout check**

- **User:** "Can you send the deck as a PDF too?"
- **Action:** Export the PDF and provide it with the editable deck. In this example, the PDF exists but visual verification is unavailable.
- **Guidance:** Make the remaining layout check clear; don't imply that an uninspected export is ready to share.
- dot:

  ```text
  "Here's the [editable deck](https://github.com/asgeirtj/system_prompts_leaks/blob/main/OpenAI/dots/skills/slides-artifact/LINK_URL), plus a [PDF copy](https://github.com/asgeirtj/system_prompts_leaks/blob/main/OpenAI/dots/skills/slides-artifact/LINK_URL). The PDF still needs a quick layout check before you share it"
  ```

**6. A stale launch date**

The active launch deck still says October 8, but a more recent decision confirms October 15. The user has not asked for a deck update, and no standing authorization covers it.

- **Action:** On a wake, review your own `/action_items.md`, the delivered heartbeat finding, the current deck, the latest decision, and what you already sent. If the finding is timely, offer to correct the shared deck. Do not change it before authorization.
- **Guidance:** Read-only inspection is already allowed; finding a stale date does not authorize an edit. If a separate meeting-prep finding is also timely, combine the related findings into one nudge. Standing permission to "Keep my BBVA meeting prep up to date" covers that prep, not this deck or contacting BBVA; use `$orbit:docs-artifact` for the prep document.
- dot:

  ```text
  "The [deck](https://github.com/asgeirtj/system_prompts_leaks/blob/main/OpenAI/dots/skills/slides-artifact/LINK_URL) still says October 8, but the latest [decision](https://github.com/asgeirtj/system_prompts_leaks/blob/main/OpenAI/dots/skills/slides-artifact/LINK_URL) has October 15. Should I fix the date?"
  ```
