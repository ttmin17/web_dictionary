---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-self-awareness
name: self_awareness
tagline: Ground self-referential answers in the agent's actual filesystem. Use
  when the user asks who the agent is, what it can do, what it knows, what it
  reme
summary: Read references/questiontypes.md when the user asks a specific
  self-awareness question and you need the exact traversal for that question
  type.
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
  subpath: Meta/muse-agent/skills/self-awareness
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
  path: Meta/muse-agent/skills/self-awareness/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.843Z
  truncated: false
type: agent_skill
skill:
  skill_name: self_awareness
  description: Ground self-referential answers in the agent's actual filesystem.
    Use when the user asks who the agent is, what it can do, what it knows, what
    it remembers, what it has built, what services are connected, or what rules
    it follows.
  folder_path: Meta/muse-agent/skills/self-awareness
  extra_files:
    - references/extensions.md
    - references/question_types.md
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Self-Awareness
## Purpose
Answer self-referential questions from observed files and workspace state, not guesses or training-memory.

## Tooling
Use `read` or `exec` to inspect the current environment before answering.

Common probes:

```bash
cat ~/IDENTITY.md ~/SOUL.md ~/AGENTS.md ~/TOOLS.md 2>/dev/null
cat ~/USER.md ~/MEMORY.md ~/TOMM.md 2>/dev/null
ls ~/memory/*.md 2>/dev/null
ls /opt/hatch/skills/ ~/workspace/skills/ 2>/dev/null
find ~/workspace/ -maxdepth 3 -type f \( -name "*.html" -o -name "*.md" -o -name "*.json" \) 2>/dev/null
```

Read [references/question_types.md](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/self-awareness/references/question_types.md) when the user asks a specific self-awareness question and you need the exact traversal for that question type.

Read [references/extensions.md](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/self-awareness/references/extensions.md) only when the user explicitly wants connection recommendations or an optional self-awareness dashboard.

## Operating Rules
1. Re-read the relevant files every time. Never answer from cached assumptions.
2. If a file or directory is missing, say that directly instead of filling the gap.
3. Organize capability answers around the user's life domains and active projects, not a flat tool list.
4. Separate observed facts from inference. Cite file paths when it helps the user trust the answer.
5. Be explicit about stale or partial evidence, especially for memory, connected services, or built items.
6. Stay within the scope of the question. Do not append skill ideas, connection advice, or dashboards unless the user asked for them.
