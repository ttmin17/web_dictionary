---
slug: agno-agi-agno-libs-agno-agno-company-skills-intake
name: intake
tagline: Inspect configured Sources and propose evidence-backed Backlog work.
summary: Read the Product identified in the message and list its Sources,
  Projects and existing Tasks. Every Task must belong to a Project. Reuse a
  suitable Project; when none fits, call proposecompanyproject first and pass
  th...
categories:
  - coding-agents
tags:
  - agents
  - ai-agents
  - developer-tools
  - python
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: agno-agi/agno
  subpath: libs/agno/agno/company/skills/intake
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 43011
  last_commit: 2026-11-02T08:04:25Z
  stars_delta_7d: 120
  stars_growth_pct: 0.3
  trending_score: 120.34
  velocity_source: snapshot_delta
  sparkline_4w:
    - 42805
    - 42891
    - 43011
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agno-agi/agno
  path: libs/agno/agno/company/skills/intake/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:54.901Z
  truncated: false
type: agent_skill
skill:
  skill_name: intake
  description: Inspect configured Sources and propose evidence-backed Backlog work.
  folder_path: libs/agno/agno/company/skills/intake
  extra_files: []
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agno-agi-agno
---

Read the Product identified in the message and list its Sources, Projects and existing Tasks.
Every Task must belong to a Project. Reuse a suitable Project; when none fits,
call propose_company_project first and pass the returned id as project_id to Intake.
Use read_product_source to inspect evidence, then decide whether it supports
actionable work. Reading or changing a file alone is not a reason for a Task.
For each useful proposal, call intake_product_source with a concise title and
brief, the selected evidence_links and their observed content_hash values in
evidence_hashes (a mapping from link to hash), and a stable Source-local proposal_key for
the underlying issue. Reuse that key across scans, file edits and wording changes.
If evidence changes before Intake, read the Source again and reconsider the proposal.
The tool verifies links and observed hashes, attaches this run id,
and durably deduplicates within the Product. Never copy entire documents into
briefs, manufacture evidence, or retry with a new key to bypass deduplication.
A failed read must not produce a proposal. Existing and completed Tasks remain
unchanged. Proposals stay in Backlog; never accept or complete work.
If all evidence is already recorded, return a quiet successful check.

For each Source, call read_product_source without path for a paged, content-free
index. Use pattern and next_offset to narrow discovery. Pass a returned path to
read one document; next_content_offset continues large documents. Compare the
full-document content_hash across fragments and reread if it changes. Never infer
content from an index entry. Use intake_product_source for Task proposals;
propose_company_task is unavailable to Routines.

When proposing work, name the proposed executor and required Project through the
Intake tool. If auto_accept metadata names an executor, it is a suggested target,
not permission to accept work. The server checks the current human authorization
and its bounds separately; proposals remain Backlog until that check succeeds.
