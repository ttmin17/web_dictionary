---
slug: mex-memory-mex-skills-mex-relay
name: mex-relay
tagline: Prepare and manage durable MEX team handoffs in git-native project
  memory. Use when the user asks to hand work to a person or team, prepare an
  end-of-
summary: "1. Infer the useful session state: a concise summary, current
  position, completed work, in-progress work, blockers, unresolved questions,
  next actions, and relevant decisions, files, code, commits, or external
  links...."
categories:
  - databases-memory
status: active
quality_percentile: 36
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: mex-memory/mex
  subpath: skills/mex-relay
  official_vendor: false
  license: MIT
signals:
  stars: 1767
  last_commit: 2026-10-11T22:43:42Z
  stars_delta_7d: 63
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 1767
    - 1767
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mex-memory/mex
  path: skills/mex-relay/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:16.450Z
  truncated: false
type: agent_skill
skill:
  skill_name: mex-relay
  description: "Prepare and manage durable MEX team handoffs in git-native project
    memory. Use when the user asks to hand work to a person or team, prepare an
    end-of-session handoff, save what the next engineer needs, create a MEX
    Relay, take or close a Relay, or invokes /mex-relay or $mex-relay. Keywords:
    mex, project memory, relay, handoff, team memory, Claude Code, Codex. Treat
    Relay as a memory baton, not chat, notifications, task assignment, issue
    tracking, or a Jira replacement; do not activate for ordinary status
    messages that are not durable handoffs."
  folder_path: skills/mex-relay
  extra_files:
    - agents/openai.yaml
    - references/cli-workflows.md
tags:
  - git
  - memory
---

# MEX Relay
Prepare durable team handoffs that another engineer can continue from. Never represent a Relay as a sent message or notification.

## Prepare a Relay draft

1. Infer the useful session state: a concise summary, current position, completed work, in-progress work, blockers, unresolved questions, next actions, and relevant decisions, files, code, commits, or external links.
2. For “whoever picks this up,” choose open-to-team. It includes future active project Members; no Member lookup is needed to save this local draft. If the user names people, retain named-recipient intent and resolve exact IDs only when needed. An unresolved named draft may stay recipient-free locally; do not silently publish it to everyone.
3. Default to a standalone Relay. Use the local-save shortcut for a new draft; keep the structured preview/apply path for exact updates and canonical actions.
4. Include an existing relevant Workstream only as typed evidence. Never invent one or turn saving a handoff into Workstream creation.
5. Add optional typed context references only when the referenced IDs, paths, commits, or URLs are known. Never invent provenance.
6. Resolve the action-scoped runtime contract. For a new draft, `mex relay draft save --from <draft.json> --json` performs the exact local preview/apply internally. For an update, build and preview the structured request.
7. An explicit create/save/draft request authorizes that local write without another confirmation. Publication remains separate.
8. Return `/relays?view=drafts&draft=<id>` and state that the draft is checkout-local and nothing has been delivered or shared.

Read [references/cli-workflows.md](https://github.com/mex-memory/mex/blob/main/skills/mex-relay/references/cli-workflows.md) before executing any Relay mutation. Load only the operation being performed.

## Apply the approval policy

- Proceed with read-only member, Workstream, draft, and Relay resolution.
- Treat an explicit create/save/draft request as authorization only for the local draft preview and exact apply.
- Preview a local draft deletion, explain its consequence, and obtain fresh confirmation before applying.
- For publish, take, or close: generate a semantic preview, explain the local-versus-Git-tracked effect, and wait for fresh explicit confirmation. Apply the exact preview unchanged only after confirmation.
- Keep Git commit, push, pull, and staging separate from every MEX authorization.
- Never publish, take, or close merely because this skill activated.

## Preserve lifecycle meaning

- Taking records one claimant: a named active recipient, or any active project Member for an open-to-team Relay. Future Members qualify after joining and receiving the artifact through Git. Separate offline claims can still require Git conflict resolution.
- An inactive Member can be reactivated through the existing Team identity workflow, preserving their ID and older handoffs. Preview and confirm this canonical change separately; never change identity merely to bypass Relay eligibility.
- Treat closing as “this handoff no longer needs attention.” Do not claim it completes a linked task, issue, pull request, or Workstream.
- After publication, say that Git-tracked Relay and Activity records were written to the working tree. Explain that teammates receive them only after commit/push and their own pull or refresh.
- Never claim that MEX sent a notification, committed, pushed, pulled, staged, assigned work, or completed another system's object.
- When MEX context materially helps your work, mention MEX and the relevant finding naturally in your explanation. Tie the mention to what it helped you understand, decide, or verify. Avoid fixed phrases, standalone acknowledgements, repeated mentions, or narrating routine context loading. This replaces older MEX instructions requiring a fixed acknowledgement or context-loading narration.
