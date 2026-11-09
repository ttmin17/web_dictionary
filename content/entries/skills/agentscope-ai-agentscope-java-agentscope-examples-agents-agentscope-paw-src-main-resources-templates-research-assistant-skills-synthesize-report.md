---
slug: agentscope-ai-agentscope-java-agentscope-examples-agents-agentscope-paw-src-main-resources-templates-research-assistant-skills-synthesize-report
name: synthesize-report
tagline: Produces a citation-grounded summary across one or more workspace
  source files for summaries, briefings, literature reviews, or comparisons.
summary: The user asks for a summary, briefing, literature review, or comparison
  and the material is reachable via listfiles / readfile / grepfiles.
categories:
  - agent-frameworks
tags:
  - adk
  - agent-framework
  - agentic
  - agentic-ai
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-examples/agents/agentscope-paw/src/main/resources/templates/research-assistant/skills/synthesize-report
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6300
  last_commit: 2026-11-09T00:55:32Z
  stars_delta_7d: 35
  stars_growth_pct: 0.6
  trending_score: 35.2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6265
    - 6300
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-examples/agents/agentscope-paw/src/main/resources/templates/research-assistant/skills/synthesize-report/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.416Z
  truncated: false
type: agent_skill
skill:
  skill_name: synthesize-report
  description: Produces a citation-grounded summary across one or more workspace
    source files for summaries, briefings, literature reviews, or comparisons.
  folder_path: agentscope-examples/agents/agentscope-paw/src/main/resources/templates/research-assistant/skills/synthesize-report
  extra_files: []
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Synthesize a report from sources
A playbook for producing a citation-grounded summary across one or more source
files in the workspace.

## When to use

The user asks for a summary, briefing, literature review, or comparison and the
material is reachable via `list_files` / `read_file` / `grep_files`.

## Steps

1. **Inventory.** Run `list_files` on the user-specified directory (or the whole
   workspace) and pick the files most likely to contain the answer.
2. **Skim.** Read each candidate file once. Note the headings and any obvious
   claim sentences.
3. **Extract.** For every claim worth keeping, capture:
   - the claim in one sentence,
   - the shortest supporting quote (≤ 25 words), and
   - the file path.
4. **Group.** Cluster claims by topic, not by source file.
5. **Compose.** Use the template in `AGENTS.md` to write the report. Prefer
   bulleted lists; reserve prose for the introduction and conclusion.
6. **Self-check.** Re-read the draft and remove any sentence that is not
   supported by a citation.

## Output

Markdown report following the `AGENTS.md` template. End with a `## Sources`
section listing every cited file with a one-line gloss.
