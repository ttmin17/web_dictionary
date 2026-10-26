---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-dispatch
name: dispatch
tagline: Delegate tasks to OpenAI Codex CLI and Google Antigravity CLI from
  Claude Code. Say 'check with codex' or 'ask gemini for a second opinion' and
  Claude
summary: "Supports OpenAI Codex CLI and Google Antigravity CLI (multi-model:
  Gemini, Claude, GPT-OSS). No API keys — both CLIs use their own auth (OAuth /
  Google sign-in)."
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/all-skills/skills/dispatch
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/dispatch/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.583Z
  truncated: false
type: agent_skill
skill:
  skill_name: dispatch
  description: Delegate tasks to OpenAI Codex CLI and Google Antigravity CLI from
    Claude Code. Say 'check with codex' or 'ask gemini for a second opinion' and
    Claude runs the other agent, keeps a topic-aware session, and critiques the
    result.
  folder_path: plugins/all-skills/skills/dispatch
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Dispatch
Delegate tasks to external AI CLIs from inside Claude Code. Say "check with codex", "ask gemini for a second opinion", or "validate this before I merge" and Claude runs the other agent, keeps a topic-aware conversation, and critiques the result rather than echoing it.

Supports OpenAI Codex CLI and Google Antigravity CLI (multi-model: Gemini, Claude, GPT-OSS). No API keys — both CLIs use their own auth (OAuth / Google sign-in).

Source: [sparklingneuronics/sparkling-skills](https://github.com/sparklingneuronics/sparkling-skills) (MIT)

## When to Use This Skill

- Getting a second opinion from a different model family before merging
- Cross-checking Claude's analysis against Codex or Gemini
- Delegating a side task (research, review, image generation) to another CLI
- Triangulating a decision across multiple models and having Claude reconcile disagreements
- Resuming a prior delegation thread without restating context

## What This Skill Does

1. **Routes to the right CLI** based on the tool you name — "codex" invokes Codex CLI, "gemini" or "agy" invokes Antigravity CLI
2. **Picks sensible defaults** — Codex: gpt-5.5, read-only sandbox; Antigravity: Gemini 3.5 Flash (or the model you name)
3. **Synthesizes the result** — Claude summarizes findings, states where it agrees or disagrees, and recommends next steps
4. **Tracks topics** — each delegation gets its own external session, resumed by ID on follow-ups

## Examples

### Second opinion on code

```
User: ask codex to review my uncommitted changes before I merge

Claude: [runs codex review --uncommitted, synthesizes findings]
        Codex flagged three things. I agree with #1 (missing null check)
        but #2 and #3 are false positives. Want me to fix the null check?
```

### Cross-model challenge

```
User: ask gemini to challenge this architecture

Claude: [runs agy with Gemini 3.1 Pro, compares with own analysis]
        Gemini raises a valid concern about hot-partition risk that I
        hadn't flagged. Its other two points don't apply here.
```

### Resume a thread

```
User: continue with codex — is the top issue real?

Claude: [resumes the same codex session with a delta bridge]
        Codex confirms the null-check issue — it traced the code path.
```

## Requirements

- Claude Code (the plugin runs inside it)
- For Codex: `codex` CLI + `codex login` (OAuth)
- For Antigravity: `agy` CLI + Google sign-in (free account)

Install: `claude install-plugin sparklingneuronics/sparkling-skills`
