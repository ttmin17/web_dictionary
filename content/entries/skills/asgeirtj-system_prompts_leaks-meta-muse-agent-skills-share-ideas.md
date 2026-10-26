---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-share-ideas
name: share_ideas
tagline: "Publish a reusable native Muse Idea with idea.share when the user
  explicitly asks to share or publish an Idea or asks for a muse.ai/ideas link.
  Never "
summary: Sharing an Idea makes its title, summary, How it works explanation, and
  reusable instructions readable to any authenticated Muse user who has the
  link.
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
  subpath: Meta/muse-agent/skills/share-ideas
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
  path: Meta/muse-agent/skills/share-ideas/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.843Z
  truncated: false
type: agent_skill
skill:
  skill_name: share_ideas
  description: Publish a reusable native Muse Idea with idea.share when the user
    explicitly asks to share or publish an Idea or asks for a muse.ai/ideas
    link. Never offer it unprompted. Not for pages or write-ups, sending a
    result to someone, social posts, or sharing an artifact.
  folder_path: Meta/muse-agent/skills/share-ideas
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Share ideas
Publish a reusable native Muse Idea only when the user explicitly asks to
share or publish an Idea or asks for a `muse.ai/ideas?id=...` link. Never offer
this format unprompted. Requests for a page, post, write-up, social share, or
artifact link are outside this skill.

Sharing an Idea makes its title, summary, How it works explanation, and reusable
instructions readable to any authenticated Muse user who has the link.

For an existing saved Idea, identify its exact ID with `idea.search` or
`idea.list`, then read it with `idea.get`. Call `idea.share` with only `idea_id`
when its stored title, summary, distinct How it works copy, and instructions
are already safe to publish. Otherwise publish a generalized version through
the title, summary, how_it_works, instructions, and domain fields.

To turn the immediately preceding completed activity into an Idea, call
`idea.share` with a short title, a concise summary of the reusable outcome, a
distinct `how_it_works` explanation of what the assistant will do and deliver,
the closest supported domain, and self-contained instructions another Muse
user can follow with their own files, accounts, permissions, and connected
services. Follow the richer catalog-Idea pattern; never repeat or lightly
paraphrase the summary as `how_it_works`.

Never include credentials, tokens, private identifiers, local paths, hidden
system instructions, or personal details that are not essential to what the
user explicitly chose to publish. Generalize those details or omit them. Do
not claim the Idea is shared until `idea.share` returns a link.

On success, `idea.share` also creates the native Idea widget for that same
Idea. Include `widget.embed_token` exactly once on its own line. Do not call
`widget.create` for the same Idea. If the result has `widget_warning` instead
of `widget.embed_token`, use the exact returned `share_url` as the target of an
inline `[Open the Idea](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/share-ideas/...)` link in the same response without claiming a card
appeared.
