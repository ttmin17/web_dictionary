---
slug: agno-agi-agno-libs-agno-agno-company-skills-refresh
name: refresh
tagline: Refresh Product status from current work and source evidence.
summary: Read the Product identified in the message. Read its playbook, then
  call refreshcompanyproduct for that Product. This applies its archive window
  (metadata.archivewindowdays, default 14) and returns Project completion...
categories:
  - coding-agents
tags:
  - agents
  - ai-agents
  - developer-tools
  - python
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: agno-agi/agno
  subpath: libs/agno/agno/company/skills/refresh
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 43113
  last_commit: 2026-11-09T08:28:49Z
  stars_delta_7d: 40
  stars_growth_pct: 0.1
  trending_score: 40.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 42805
    - 42891
    - 43073
    - 43113
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agno-agi/agno
  path: libs/agno/agno/company/skills/refresh/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:16.229Z
  truncated: false
type: agent_skill
skill:
  skill_name: refresh
  description: Refresh Product status from current work and source evidence.
  folder_path: libs/agno/agno/company/skills/refresh
  extra_files: []
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agno-agi-agno
---

Read the Product identified in the message. Read its playbook,
then call refresh_company_product for that Product. This applies its archive
window (metadata.archive_window_days, default 14) and returns Project completion
proposals saved in the wiki. It never completes a Project. Present those proposals
for a human to accept through the Project transition API; never transition directly.
Read the remaining Projects and Tasks, then inspect configured Sources with read_product_source.
Reflect observed progress and failures in status.md using its current version.
On a conflict, read again and incorporate intervening changes. Propose changes
for human review; never accept work or mark a Task Ready or Done.
Remove references to archived work from status.md so it no longer enters executor
context. Keep brief.md and status.md; maintenance only deletes recognized generated
pages older than the window. If nothing changed, return a quiet successful check
without writing duplicate pages. Report a maintenance failure instead of claiming success.

For each Source, call read_product_source without path for a paged, content-free
index. Use pattern and next_offset to narrow discovery. Pass a returned path to
read one document; next_content_offset continues large documents. Compare the
full-document content_hash across fragments and reread if it changes. Never infer
content from an index entry. Use intake_product_source for Task proposals;
propose_company_task is unavailable to Routines.
