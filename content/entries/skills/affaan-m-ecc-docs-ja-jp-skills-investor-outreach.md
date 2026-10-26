---
slug: affaan-m-ecc-docs-ja-jp-skills-investor-outreach
name: investor-outreach
tagline: 投資家へのアウトリーチ、関係構築、ファンドレイジング戦略、およびパイプラインマネジメント。
summary: "- writing a cold email to an investor - drafting a warm intro request
  - sending follow-ups after a meeting or no response - writing investor updates
  during a process - tailoring outreach based on fund thesis or partne..."
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: docs/ja-JP/skills/investor-outreach
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: docs/ja-JP/skills/investor-outreach/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.016Z
  truncated: false
type: agent_skill
skill:
  skill_name: investor-outreach
  description: 投資家へのアウトリーチ、関係構築、ファンドレイジング戦略、およびパイプラインマネジメント。
  folder_path: docs/ja-JP/skills/investor-outreach
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Investor Outreach
Write investor communication that is short, concrete, and easy to act on.

## When to Activate

- writing a cold email to an investor
- drafting a warm intro request
- sending follow-ups after a meeting or no response
- writing investor updates during a process
- tailoring outreach based on fund thesis or partner fit

## Core Rules

1. Personalize every outbound message.
2. Keep the ask low-friction.
3. Use proof instead of adjectives.
4. Stay concise.
5. Never send copy that could go to any investor.

## Voice Handling

If the user's voice matters, run `brand-voice` first and reuse its `VOICE PROFILE`.
This skill should keep the investor-specific structure and ask discipline, not recreate its own parallel voice system.

## Hard Bans

Delete and rewrite any of these:
- "I'd love to connect"
- "excited to share"
- generic thesis praise without a real tie-in
- vague founder adjectives
- begging language
- soft closing questions when a direct ask is clearer

## Cold Email Structure

1. subject line: short and specific
2. opener: why this investor specifically
3. pitch: what the company does, why now, and what proof matters
4. ask: one concrete next step
5. sign-off: name, role, and one credibility anchor if needed

## Personalization Sources

Reference one or more of:
- relevant portfolio companies
- a public thesis, talk, post, or article
- a mutual connection
- a clear market or product fit with the investor's focus

If that context is missing, state that the draft still needs personalization instead of pretending it is finished.

## Follow-Up Cadence

Default:
- day 0: initial outbound
- day 4 or 5: short follow-up with one new data point
- day 10 to 12: final follow-up with a clean close

Do not keep nudging after that unless the user wants a longer sequence.

## Warm Intro Requests

Make life easy for the connector:
- explain why the intro is a fit
- include a forwardable blurb
- keep the forwardable blurb under 100 words

## Post-Meeting Updates

Include:
- the specific thing discussed
- the answer or update promised
- one new proof point if available
- the next step

## Quality Gate

Before delivering:
- the message is genuinely personalized
- the ask is explicit
- the proof point is concrete
- filler praise and softener language are gone
- word count stays tight
