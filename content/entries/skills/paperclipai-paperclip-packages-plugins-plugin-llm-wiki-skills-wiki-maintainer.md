---
slug: paperclipai-paperclip-packages-plugins-plugin-llm-wiki-skills-wiki-maintainer
name: LLM Wiki Maintainer
tagline: Use the LLM Wiki plugin tools to maintain a cited local company wiki.
summary: Before changing wiki files, resolve the configured wiki root, read its
  AGENTS.md, inspect wiki/index.md and recent wiki/log.md entries, then use the
  LLM Wiki plugin tools for source reads, page writes, patch proposals...
categories:
  - agent-frameworks
tags:
  - acpx
  - agent-orchestration
  - agent-skills
  - agentic-ai
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: paperclipai/paperclip
  subpath: packages/plugins/plugin-llm-wiki/skills/wiki-maintainer
  official_vendor: false
  license: MIT
signals:
  stars: 107406
  last_commit: 2026-10-26T06:44:43Z
  stars_delta_7d: 3106
  stars_growth_pct: 3
  trending_score: 3198.5
  velocity_source: snapshot_delta
  sparkline_4w:
    - 101411
    - 104300
    - 107406
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: paperclipai/paperclip
  path: packages/plugins/plugin-llm-wiki/skills/wiki-maintainer/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:41:14.999Z
  truncated: false
type: agent_skill
skill:
  skill_name: LLM Wiki Maintainer
  description: Use the LLM Wiki plugin tools to maintain a cited local company wiki.
  folder_path: packages/plugins/plugin-llm-wiki/skills/wiki-maintainer
  extra_files: []
  pack_total_skills: 37
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: paperclipai-paperclip
---

# LLM Wiki Maintainer
Use this skill when maintaining the company LLM Wiki, answering questions from it, ingesting durable source material, refreshing the index, or linting wiki structure.

Before changing wiki files, resolve the configured wiki root, read its AGENTS.md, inspect wiki/index.md and recent wiki/log.md entries, then use the LLM Wiki plugin tools for source reads, page writes, patch proposals, backlinks, and logging.

Keep raw sources immutable, cite wiki pages and raw paths, update wiki/index.md when page navigation changes, and append a concise wiki/log.md entry for durable updates. For Paperclip project work, keep `wiki/projects/<project-slug>/standup.md` current as the executive status view and use `wiki/projects/<project-slug>/index.md` for durable project knowledge. Write project material as concept-grouped executive synthesis, not issue-id lists or metadata dumps.
