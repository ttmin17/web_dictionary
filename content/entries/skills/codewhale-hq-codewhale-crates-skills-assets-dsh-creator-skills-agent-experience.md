---
slug: codewhale-hq-codewhale-crates-skills-assets-dsh-creator-skills-agent-experience
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
  - agent-client-protocol
  - agent-orchestration
  - ai-agent
  - ai-coding
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/dsh-creator/skills/agent-experience
  official_vendor: false
  license: MIT
signals:
  stars: 41180
  last_commit: 2026-11-16T06:56:39Z
  stars_delta_7d: 20
  stars_growth_pct: 0
  trending_score: 20.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41118
    - 41158
    - 41160
    - 41180
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/dsh-creator/skills/agent-experience/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:50.143Z
  truncated: false
type: agent_skill
skill:
  skill_name: agent-experience
  description: Use when writing or changing a model-facing tool definition (name,
    description, parameter schema, or its system-prompt section), and when
    designing skills, context loading, or multi-step workflows, to make
    information discoverable and use context efficiently.
  folder_path: crates/skills/assets/dsh-creator/skills/agent-experience
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
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
