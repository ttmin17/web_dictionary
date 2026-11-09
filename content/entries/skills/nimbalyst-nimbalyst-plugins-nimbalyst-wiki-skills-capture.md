---
slug: nimbalyst-nimbalyst-plugins-nimbalyst-wiki-skills-capture
name: capture
tagline: Record what people decided in this session in the wiki pages it affects
  (team or local wiki). Use when the user asks to capture or record what the ses
summary: Record what this session decided in the project's wiki. Load the update
  skill and follow it for every write; the connect skill covers choosing the
  wiki and finding the project.
categories:
  - coding-agents
tags:
  - agentic-ai
  - agentic-ide
  - ai-agents
  - ai-coding-assistant
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nimbalyst/nimbalyst
  subpath: plugins/nimbalyst-wiki/skills/capture
  official_vendor: false
  license: MIT
signals:
  stars: 2047
  last_commit: 2026-11-04T07:28:07Z
  stars_delta_7d: 24
  stars_growth_pct: 1.2
  trending_score: 24.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1931
    - 1975
    - 2023
    - 2047
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nimbalyst/nimbalyst
  path: plugins/nimbalyst-wiki/skills/capture/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:27.663Z
  truncated: false
type: agent_skill
skill:
  skill_name: capture
  description: Record what people decided in this session in the wiki pages it
    affects (team or local wiki). Use when the user asks to capture or record
    what the session decided, or when a wiki reminder asks you to.
  folder_path: plugins/nimbalyst-wiki/skills/capture
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nimbalyst-nimbalyst
---

Record what this session decided in the project's wiki. Load the `update` skill and follow it for every write; the `connect` skill covers choosing the wiki and finding the project.

Focus, if the user gave one: $ARGUMENTS (left as written or empty means the whole session)

1. If the desktop app's wiki tools are available (`mcp__nimbalyst-trackers__*`), use them and the desktop wiki skills instead of this plugin's tools.
2. Choose the wiki as the `connect` skill describes. For the team wiki, call `pages_status` with `repo` and `project`; if the state is `ambiguous`, ask which project and pin it; if it is `unbound`, follow the skill's connecting steps. For a local wiki, use the `nimbalyst-local` tools; if there is none yet, offer to start one. If there is still no wiki to write to, say so and stop.
3. Read the guide page ("How we write this wiki": `guideLink` on the team wiki, `listPages` on a local one) and follow it.
4. On a local wiki, start from the code: call `pagesForFiles` with the files this session changed (no arguments checks the working tree; when the work is already committed, pass the files, or `since` with the commit before it). For each page it returns, read it and either update it with what the change means for a reader, or, when you cannot say that well, set its `status` to `outdated` (`setPageFields`, or `tracker_update` on a typed page) and add one line saying what changed and where. `stale` means a covered file was committed after the page last changed, which may include commits from before this session; record what this session changed and say the page may lag further rather than guessing at older changes. Skip a page the change does not affect in meaning.
5. List the candidates from this session: decisions people made (who, what was not chosen, and why), questions answered or left open, and context a teammate would need to see the whole problem. Drop routine progress and anything the code or `git log` already says.
6. If nothing is left and no page needed updating, reply "nothing to record" and stop.
7. Otherwise, find the page each candidate affects with `listPages` and `readCollabDoc`, and write it there as the skill says: a decided or open mark on the sentence, a citation from `list_session_inputs` when the person's own words support it. Extend existing pages; create a page only when none fits. When the project came from a pin or the user is in several teams, first say which project the writes go to; on a local wiki, say which folder.
8. End your reply with the pages you updated or marked outdated, one link per line.
