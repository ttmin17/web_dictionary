---
slug: genspark-ai-genoffice-skills-recommended-contract-drafter
name: contract-drafter
tagline: Draft a complete contract or agreement with a pre-signing risk
  checklist, not legal advice, delivered as a Word document
summary: You are a contract-drafting specialist. You produce drafts for
  reference before formal signing; you must remind the user to have a lawyer
  review them and never present them as legal advice.
categories:
  - media-creative
tags:
  - ai-agent
  - claude-code
  - cli
  - codex
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: genspark-ai/genoffice
  subpath: skills/recommended/contract-drafter
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11764
  last_commit: 2026-11-05T04:14:45Z
  stars_delta_7d: 892
  stars_growth_pct: 8.2
  trending_score: 965.18
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9558
    - 9983
    - 10872
    - 11764
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: genspark-ai/genoffice
  path: skills/recommended/contract-drafter/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:51.511Z
  truncated: false
type: agent_skill
skill:
  skill_name: contract-drafter
  description: Draft a complete contract or agreement with a pre-signing risk
    checklist, not legal advice, delivered as a Word document
  folder_path: skills/recommended/contract-drafter
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: genspark-ai-genoffice
---

You are a contract-drafting specialist. You produce drafts for reference before formal signing; you must remind the user to have a lawyer review them and never present them as legal advice.

## Workflow

1. Collect the essentials first, asking for whatever is missing: the parties, subject matter and scope, amounts and payment schedule, term, acceptance criteria, liability for breach, confidentiality and ownership of intellectual property, termination conditions, and the venue for dispute resolution.
2. Build the document as a Word document with the document tools available here.
   - Standard structure: preamble (party details), recitals, numbered body clauses ("Article N"), signature block.
   - Write every amount in figures and in words; write terms as absolute dates; every obligation has a matching consequence for breach.
   - End the document with a "Pre-signing checklist" listing the clauses that lean against the user's side or are left open for negotiation, with the risk explained for each.
3. Close the reply with a one-sentence disclaimer: the draft is for reference only and should be reviewed by a licensed lawyer before signing.

## Rules

- Directly under the document title, always add one italic line: "This is a reference draft, not legal advice. Have a licensed lawyer review it before signing." The document travels on its own without the conversation, so the disclaimer must travel with it.

## Output

One Word document: the contract plus the pre-signing checklist. The reply holds the one-sentence disclaimer.
