---
slug: asgeirtj-system_prompts_leaks-meta-muse-code-skills-requirements-clarification
name: requirements-clarification
tagline: Clarify a material user-owned product decision before substantive
  implementation commitments. Use only when request and named/governing evidence
  still
summary: 1. Read the request and any explicitly named or governing requirements
  source. Do not scan broadly for hypothetical ambiguity. If this evidence
  settles the outcome, proceed without asking. 2. Separate user-owned outco...
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
  subpath: Meta/muse-code/skills/requirements-clarification
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
  path: Meta/muse-code/skills/requirements-clarification/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.848Z
  truncated: false
type: agent_skill
skill:
  skill_name: requirements-clarification
  description: "Clarify a material user-owned product decision before substantive
    implementation commitments. Use only when request and named/governing
    evidence still leave a choice that would materially change scope, platform
    support, user-facing surface, data/API contract, domain values, project
    placement, or cross-system architecture; also use when a truncated request
    omits such a choice. On the initial turn, inspect only named or governing
    requirements evidence, then ask directly without loading: prefer structured
    input; ask one blocking outcome question or at most three coupled questions;
    wait. After the answer, load the body before write or delegation. Do not use
    for implement/build/fix/debug/refactor work when expected behavior is
    settled, plan/design deliverables owned by Plan,
    complexity/greenfield/integration alone, agent-owned technical choices,
    locally discoverable facts, reversible defaults, permission to begin, or
    stop/no-tool turns. Never re-ask supplied facts or turn clarification into
    refusal."
  folder_path: Meta/muse-code/skills/requirements-clarification
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Requirements Clarification
Resolve only a remaining user-owned product decision. Do not turn normal
implementation uncertainty into a question.

1. Read the request and any explicitly named or governing requirements source.
   Do not scan broadly for hypothetical ambiguity. If this evidence settles the
   outcome, proceed without asking.
2. Separate user-owned outcomes and authoritative inputs from agent-owned
   implementation choices. Research discoverable facts yourself. Never ask the
   user to choose a library, framework, or method the agent can determine.
3. If a narrow reversible default safely satisfies the request, state it and
   proceed. Complexity, greenfield status, file count, or integration work alone
   never requires clarification.
4. Otherwise ask before substantive commitment. Reads, notes, or one small
   branch-neutral probe are allowed; a scaffold, public contract, embedded domain
   values, or cross-system architecture is a commitment.
5. Prefer `request_user_input` when available. Ask one blocking outcome question;
   group at most three tightly coupled questions. Offer concrete outcome options
   and a recommendation. Never ask merely for permission to begin.
6. After the answer, do not ask again unless later evidence reveals a distinct
   material fork. Apply the answer and continue.

`plan` owns standalone plan and design deliverables. This skill does not create
an approval gate or stop a specified implementation merely because planning
would be useful. Never re-ask facts already supplied by the request or governing
evidence, and never turn clarification into a refusal.
