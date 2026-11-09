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
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: paperclipai/paperclip
  subpath: packages/plugins/plugin-llm-wiki/skills/wiki-maintainer
  official_vendor: false
  license: MIT
signals:
  stars: 112446
  last_commit: 2026-11-09T09:22:42Z
  stars_delta_7d: 1171
  stars_growth_pct: 1.1
  trending_score: 1183.32
  velocity_source: snapshot_delta
  sparkline_4w:
    - 104300
    - 107406
    - 111275
    - 112446
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: paperclipai/paperclip
  path: packages/plugins/plugin-llm-wiki/skills/wiki-maintainer/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:27:22.224Z
  truncated: false
type: agent_skill
skill:
  skill_name: LLM Wiki Maintainer
  description: Use the LLM Wiki plugin tools to maintain a cited local company wiki.
  folder_path: packages/plugins/plugin-llm-wiki/skills/wiki-maintainer
  extra_files: []
  pack_total_skills: 19
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
