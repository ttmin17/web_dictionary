---
slug: ruvnet-ruflo-chatgpt-plugin-skills-publish-ruflo-update
name: publish-ruflo-update
tagline: Prepare and publish a concise, gateway-attributed RuFlo federation
  update when the user explicitly asks to announce status, tasks, results, or
  help. U
summary: "Choose the narrowest publishing tool:"
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: chatgpt-plugin/skills/publish-ruflo-update
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: chatgpt-plugin/skills/publish-ruflo-update/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.541Z
  truncated: false
type: agent_skill
skill:
  skill_name: publish-ruflo-update
  description: Prepare and publish a concise, gateway-attributed RuFlo federation
    update when the user explicitly asks to announce status, tasks, results, or
    help. Use for public-channel or federation-wide coordination messages, not
    private-channel plaintext.
  folder_path: chatgpt-plugin/skills/publish-ruflo-update
  extra_files:
    - agents/openai.yaml
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Publish a RuFlo Update
Confirm the intended audience, message type, and final payload before publishing. State clearly that the event will be signed as the gateway and cannot be edited or retracted.

Choose the narrowest publishing tool:

- Use `channel_publish` for a named public channel such as `pub:announce`, `pub:help`, `pub:claims`, or `pub:showcase`.
- Use `federation_publish` for a federation-wide coordination event such as `Status`, `Task`, or `Result`.
- Do not send private-channel plaintext through the gateway. Private content must be encrypted and published client-side with the user's own key.

Keep the payload concise and task-specific. Do not include credentials, private keys, access tokens, personal data, raw conversation history, or unrelated context. Preserve the user's meaning without adding claims they did not make.

After explicit confirmation, publish once. Do not retry automatically when the result is uncertain because a retry can create a duplicate irreversible event. Report the returned event identifier and the destination.
