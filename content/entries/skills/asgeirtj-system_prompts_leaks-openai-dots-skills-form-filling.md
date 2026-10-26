---
slug: asgeirtj-system_prompts_leaks-openai-dots-skills-form-filling
name: form-filling
tagline: Fill out online forms (Google Forms, Typeform and similar) or PDF, Word
  and DocuSign forms; prepare a reviewable draft and get approval before submitt
summary: Fill out online forms (Google Forms, Typeform and similar) or PDF, Word
  and DocuSign forms; prepare a reviewable draft and get approval before
  submitting or sending.
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
  subpath: OpenAI/dots/skills/form-filling
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
  path: OpenAI/dots/skills/form-filling/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.850Z
  truncated: false
type: agent_skill
skill:
  skill_name: form-filling
  description: Fill out online forms (Google Forms, Typeform and similar) or PDF,
    Word and DocuSign forms; prepare a reviewable draft and get approval before
    submitting or sending.
  folder_path: OpenAI/dots/skills/form-filling
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Form filling
- Read the whole form. Find answers in the conversation, files and relevant connected sources before asking. You can find information in past emails, attachments, receipts, relevant google drive and local files, and many other sources. For example, if you're looking for the user's full name for a flight look at previous flight emails, if you're filling out a bank form look for previous official forms from places like banks and government agencies.
- Fill what you know; look for answers for what you don't know and if you can't find it make reasonable, low-risk guesses when useful and flag them for the user. Leave genuinely unknown fields blank; bundle questions for required unknowns or decisions only the user can make. Never guess consent, signatures or personal attestations.
- Prepare and check the filled draft. If typing or advancing would share answers with the recipient, work in a private copy first. Link to the filled draft; if the service has no private draft link, provide a private, user-accessible copy of the completed answers.
- Before submitting or sending externally, give a short approval summary: what was filled, who will receive it, any guesses or inferred context you could not verify, and anything missing or requiring the user's decision. Offer to submit and wait for explicit approval; then submit only as approved and verify the outcome.
