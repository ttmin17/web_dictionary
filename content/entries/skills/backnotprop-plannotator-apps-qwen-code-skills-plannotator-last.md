---
slug: backnotprop-plannotator-apps-qwen-code-skills-plannotator-last
name: last
tagline: Open Plannotator on the latest rendered assistant message and use the
  returned annotations to revise that message or continue.
summary: Do not send a commentary/status message before running the command. The
  command targets the latest rendered assistant response, so a preamble can
  mistakenly become the thing being annotated.
categories:
  - productivity-ops
tags:
  - agents
  - claude-code
  - code-review
  - codex
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/qwen-code/skills/plannotator-last
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9860
  last_commit: 2026-11-05T13:05:30Z
  stars_delta_7d: 213
  stars_growth_pct: 2.2
  trending_score: 217.7
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9393
    - 9506
    - 9647
    - 9860
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: backnotprop/plannotator
  path: apps/qwen-code/skills/plannotator-last/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:55.599Z
  truncated: false
type: agent_skill
skill:
  skill_name: last
  description: Open Plannotator on the latest rendered assistant message and use
    the returned annotations to revise that message or continue.
  folder_path: apps/qwen-code/skills/plannotator-last
  extra_files: []
  pack_total_skills: 8
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: backnotprop-plannotator
---

# Plannotator Last (Qwen Code)
Use this skill when the user wants to annotate the latest assistant response in Plannotator.

Do not send a commentary/status message before running the command. The command
targets the latest rendered assistant response, so a preamble can mistakenly become the
thing being annotated.

Run:

```bash
plannotator last
```

Run it with the shell tool's `is_background: true`, and no trailing `&`. The command waits until the person finishes in the browser, which often takes longer than the shell tool's foreground limit (2 minutes by default, 10 at most); a foreground run would be stopped and the annotations lost. Then end your turn without stopping the task. When the task finishes, read its output (the tool result names the output file) and act on it.

Behavior:

1. If feedback is returned, incorporate it into the follow-up response.
2. If the session closes without feedback (the output is empty, or a JSON object with `"decision": "dismissed"`), acknowledge it in one sentence and stop. Do not begin any work: closing the session is not approval.
3. An approval may still carry notes — a `"decision": "approved"` result with a
   `"feedback"` field. Read those notes and carry them into subsequent work, but
   do not redo the message over them: they are guidance, not a change request.

Run the command yourself rather than telling the user to invoke shell syntax manually.
