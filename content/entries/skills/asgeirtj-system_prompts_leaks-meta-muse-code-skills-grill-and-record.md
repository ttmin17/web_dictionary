---
slug: asgeirtj-system_prompts_leaks-meta-muse-code-skills-grill-and-record
name: grill-and-record
tagline: Run an explicitly requested decision interview and record each settled
  decision in durable project documentation.
summary: 1. Research discoverable facts in the repository, issue, docs, and code
  before asking the user. Ask only for judgments or facts that cannot be
  discovered. 2. Ask one decision-forcing question at a time. State the reco...
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
  subpath: Meta/muse-code/skills/grill-and-record
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
  path: Meta/muse-code/skills/grill-and-record/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.847Z
  truncated: false
type: agent_skill
skill:
  skill_name: grill-and-record
  description: Run an explicitly requested decision interview and record each
    settled decision in durable project documentation.
  folder_path: Meta/muse-code/skills/grill-and-record
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Grill and Record
Use this skill only when the user explicitly asks for grilling plus durable documentation or directly invokes this skill. Complexity, ambiguity, or a possible need for docs alone never activates it. This skill carries its own interview and documentation contract. Do not load or invoke `grill` or `domain-modeling` at runtime.

## Interview Contract

1. Research discoverable facts in the repository, issue, docs, and code before asking the user. Ask only for judgments or facts that cannot be discovered.
2. Ask one decision-forcing question at a time. State the recommended answer and the reason briefly, then wait for the answer.
3. Prefer the host's structured input surface for bounded decisions:
   - Use `request_user_input` when it is exposed and the decision fits 2-3 short, mutually exclusive choices. Put the recommended answer first.
     Send one question per call with `id`, `header`, `question`, and `options`; omit `Other` and `None` because the client provides a free-form escape. Never set the top-level `auto_resolution_ms` in a grilling interview: a grilling decision always waits for the human answer, because auto-resolving to the recommended default is never safe when the whole point of the interview is the user's judgment.
   - On Claude Code, use `AskUserQuestion` for the same bounded choice.
   - Use plain chat only when the structured surface is unavailable or the answer needs free-form discussion.
   Never pose a bounded checkpoint as plain assistant text or as a free-form question before offering structured choices.
4. Use comparison tables only when the user explicitly requested one or the question concerns agent-product behavior, such as Claude Code versus Codex.
5. Follow dependent decisions until the skill decides the decision tree is exhausted. Never ask a final "are we done?" meta-question.
6. Summarize the settled contract: goals, non-goals, decisions, constraints, risks, validation, and unresolved items.

Ending the interview never authorizes implementation. Implement only after a separate explicit user request.

## Documentation Contract

1. Before the first question, resolve the target document from the user's named target and the repository's existing documentation conventions. Inspect local instructions, indexes, specs, ADRs, glossaries, and nearby docs. If the target is undeterminable, ask one question. Never invent a universal `docs/grilling/<date>.md` location.
2. Create or update the target as **Draft**. Write each settled decision immediately as Draft instead of waiting for the interview to end. Keep unresolved questions visibly marked.
3. If interrupted or cancelled, preserve the Draft and all file edits, mark unresolved questions, and never auto-revert documentation changes.
4. Read detailed `CONTEXT.md`, ADR, glossary, or other format references only when that document type is actually being written.
5. Normal Write/Edit tool events are the live proof of documentation work. Do not emit duplicate `Updated <path>` status lines.
6. An explicit docs request is a hard completion condition: the session cannot finish successfully without a useful documentation creation or update. "No docs needed" with zero file changes never satisfies it.
7. Only explicit user acceptance may change a document from Draft to **Final**. Exhausting the decision tree does not imply acceptance.
8. In the final response, list every changed documentation path and whether it stayed Draft or became Final.
