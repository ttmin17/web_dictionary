---
slug: deepseek-ai-deepseek-harness-packages-preset-agent-preset-skills-agent-experience
name: agent-experience
tagline: Use when writing or changing a model-facing tool definition (name,
  description, parameter schema, or its system-prompt section), and when
  designing sk
summary: "- Start with minimal context: expose purpose, available actions, and
  constraints first; load detailed instructions when needed. - Make discovery
  explicit: every deferred resource needs a clear description and a reliab..."
categories:
  - agent-frameworks
tags:
  - ai-agents
  - cordis
  - dsh
  - dsh-plugin
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: deepseek-ai/deepseek-harness
  subpath: packages/preset/agent-preset/skills/agent-experience
  official_vendor: false
  license: MIT
signals:
  stars: 276996
  last_commit: 2026-11-04T13:06:39Z
  stars_delta_7d: 3556
  stars_growth_pct: 1.3
  trending_score: 3602.24
  rank_current: 5
  rank_delta: -4
  velocity_source: snapshot_delta
  sparkline_4w:
    - 253669
    - 261818
    - 273440
    - 276996
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: deepseek-ai/deepseek-harness
  path: packages/preset/agent-preset/skills/agent-experience/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:28:09.119Z
  truncated: false
type: agent_skill
skill:
  skill_name: agent-experience
  description: Use when writing or changing a model-facing tool definition (name,
    description, parameter schema, or its system-prompt section), and when
    designing skills, context loading, or multi-step workflows, to make
    information discoverable and use context efficiently.
  folder_path: packages/preset/agent-preset/skills/agent-experience
  extra_files: []
  pack_total_skills: 12
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: deepseek-ai-deepseek-harness
---

- **Start with minimal context:** expose purpose, available actions, and constraints first; load detailed instructions when needed.
- **Make discovery explicit:** every deferred resource needs a clear description and a reliable way to retrieve it.
- **Keep critical constraints visible:** permissions, destructive effects, and required validation should appear before the relevant action.
- **Prefer bounded outputs:** return concise results with identifiers or paths for retrieving details; avoid dumping entire logs or documents.
- **Use locality:** include a bounded amount of likely needed adjacent context with an operation’s result. For example, deliver a thread reply with a few preceding messages. Mark omissions and truncation explicitly, and provide a way to retrieve more.
- **Evaluate total work:** saving context is useful only if it does not cause more searches, repeated reads, or mistakes.

## Tool definitions

- **Delete obvious constraints.** Omit rules the model learns from the call result, such as a missing file failing to read or a failed send not being delivered.
- **Describe behavior, not implementation.** State what the tool does and returns; omit internal mechanisms, output markers the model sees in results, and enforcement details.
- **Put parameter rules on the parameter.** Defaults, ranges, pairing, and when-to-set rules belong in that parameter's description or schema; a description that varies with configuration usually means the varying part belongs to a parameter.
- **Say each fact once.** Do not repeat the tool definition in its system-prompt section, a parameter description in the tool description, or one tool's rules in another tool.
- **Measure the change.** Compare first-turn prompt tokens before and after a tool-definition change.
