---
slug: alirezarezvani-claude-skills-engineering-grill-me-skills-grill-me
name: grill-me
tagline: "Interview the user relentlessly about a plan or design until reaching
  shared understanding, resolving each branch of the decision tree. Use when
  user "
summary: Interview me relentlessly about every aspect of this plan until we
  reach a shared understanding. Walk down each branch of the design tree,
  resolving dependencies between decisions one-by-one. For each question,
  provid...
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
  subpath: engineering/grill-me/skills/grill-me
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
  path: engineering/grill-me/skills/grill-me/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.258Z
  truncated: false
type: agent_skill
skill:
  skill_name: grill-me
  description: Interview the user relentlessly about a plan or design until
    reaching shared understanding, resolving each branch of the decision tree.
    Use when user wants to stress-test a plan, get grilled on their design, or
    mentions "grill me".
  folder_path: engineering/grill-me/skills/grill-me
  extra_files:
    - references/companion_tooling.md
    - references/forcing_question_patterns.md
    - references/when_to_stop_grilling.md
    - scripts/decision_tree_extractor.py
    - scripts/grill_session_tracker.py
    - scripts/question_generator.py
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Grill Me
> Derived from [Matt Pocock's grill-me](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me) (MIT). Matt's interview discipline preserved verbatim. Additions: extraction + question + session tools + references + cs-* wrapper (see [references/companion_tooling.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/grill-me/skills/grill-me/references/companion_tooling.md)).

Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time.

If a question can be answered by exploring the codebase, explore the codebase instead.

## Rules (preserved + amplified)

1. **One question per turn.** Never bundle.
2. **Provide a recommended answer with each question.** Defaulting to "what do you think?" is lazy.
3. **Explore the codebase before asking.** If `grep` / `Read` resolves it, do that first. Saves a turn.
4. **Walk the tree depth-first.** Finish a branch before opening another.
5. **Track dependencies.** If decision B depends on decision A, ask A first.

## Workflow

1. User provides a plan or design (or path to one).
2. Run `scripts/decision_tree_extractor.py` to extract branches.
3. Run `scripts/question_generator.py` to produce the question list with recommendations.
4. Start a session: `scripts/grill_session_tracker.py --action start`.
5. Walk the tree, one question at a time, recording answers in the session.
6. When all branches resolved: report "shared understanding reached" + the locked-in decisions.

## Output Pattern

Per question turn:

```
Q[i]/[total]: [question]
Recommended answer: [your call + 1-sentence rationale]

(Or: I explored the codebase and found [evidence]. Confirm?)
```

## Tooling

See [references/companion_tooling.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/grill-me/skills/grill-me/references/companion_tooling.md). Tools: extractor + generator + tracker. Agent: `cs-grill-master`. Command: `/cs-grill-me`.

---
**Version:** 1.0.0
**Derived:** Matt Pocock (MIT) + this repo's wrapper
