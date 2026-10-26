---
slug: thedotmack-claude-mem-openclaw-skills-make-plan
name: make-plan
tagline: Create a detailed, phased implementation plan with documentation
  discovery. Use when asked to plan a feature, task, or multi-step
  implementation — esp
summary: Use subagents for fact gathering and extraction (docs, examples,
  signatures, grep results). Keep synthesis and plan authoring with the
  orchestrator (phase boundaries, task framing, final wording). If a subagent
  report...
categories:
  - databases-memory
tags:
  - ai-agents
  - ai-memory
  - anthropic
  - artificial-intelligence
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: thedotmack/claude-mem
  subpath: openclaw/skills/make-plan
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 103202
  last_commit: 2026-10-25T21:00:05Z
  stars_delta_7d: 1527
  stars_growth_pct: 1.5
  trending_score: 1549.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 97519
    - 100334
    - 101675
    - 103202
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: thedotmack/claude-mem
  path: openclaw/skills/make-plan/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:14.401Z
  truncated: false
type: agent_skill
skill:
  skill_name: make-plan
  description: Create a detailed, phased implementation plan with documentation
    discovery. Use when asked to plan a feature, task, or multi-step
    implementation — especially before executing with do.
  folder_path: openclaw/skills/make-plan
  extra_files: []
  pack_total_skills: 33
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: thedotmack-claude-mem
---

# Make Plan
You are an ORCHESTRATOR. Create an LLM-friendly plan in phases that can be executed consecutively in new chat contexts.

## Delegation Model

Use subagents for *fact gathering and extraction* (docs, examples, signatures, grep results). Keep *synthesis and plan authoring* with the orchestrator (phase boundaries, task framing, final wording). If a subagent report is incomplete or lacks evidence, re-check with targeted reads/greps before finalizing.

### Subagent Reporting Contract (MANDATORY)

Each subagent response must include:
1. Sources consulted (files/URLs) and what was read
2. Concrete findings (exact API names/signatures; exact file paths/locations)
3. Copy-ready snippet locations (example files/sections to copy)
4. "Confidence" note + known gaps (what might still be missing)

Reject and redeploy the subagent if it reports conclusions without sources.

## Plan Structure

### Primary Goal (top of the document, before Phase 0)

Every plan opens with a **Primary goal** section: one or two sentences describing the *user-visible outcome* the plan exists to produce — not the mechanism. Write it so a reader with no context knows what "done" looks like.

- Good: "A paying user whose observer stops working finds out within one session and is told the one thing to do about it."
- Bad: "Add a 6-code error taxonomy to the gateway."

Then, directly under **every phase title** (Phase 0 through the final verification phase), add a short paragraph:

> **How this serves the primary goal:** …

If you cannot write that paragraph honestly for a phase, the phase does not belong in the plan. This is the scope test.

### Phase 0: Documentation Discovery (ALWAYS FIRST)

Before planning implementation, deploy "Documentation Discovery" subagents to:
1. Search for and read relevant documentation, examples, and existing patterns
2. Identify the actual APIs, methods, and signatures available (not assumed)
3. Create a brief "Allowed APIs" list citing specific documentation sources
4. Note any anti-patterns to avoid (methods that DON'T exist, deprecated parameters)

The orchestrator consolidates findings into a single Phase 0 output.

### Each Implementation Phase Must Include

1. **What to implement** — Frame tasks to COPY from docs, not transform existing code
   - Good: "Copy the V2 session pattern from docs/examples.ts:45-60"
   - Bad: "Migrate the existing code to V2"
2. **Documentation references** — Cite specific files/lines for patterns to follow
3. **Verification checklist** — How to prove this phase worked (tests, grep checks)
4. **Anti-pattern guards** — What NOT to do (invented APIs, undocumented params)

### Final Phase: Verification

1. Verify all implementations match documentation
2. Check for anti-patterns (grep for known bad patterns)
3. Run tests to confirm functionality

## Presenting the Plan to the User

After writing the plan file, present it in chat using this exact format — and only this format. Length is the five fixed sections plus exactly one line per phase in Steps, so a plan with any number of phases fits. Emojis are the section markers. One line per step. Define jargon in the line where it first appears; assume the reader has none of the conversation's context.

```
## 🎯 Goal
<the primary goal, one sentence>

## 🧨 Now
<what's broken / the current state, one sentence>

## 🧠 Idea
<the design in one sentence>

## 🛠️ Steps
- 1️⃣ **<phase name>** → <what it does, one line>
- 2️⃣ **<phase name>** → …
- N️⃣ **Verify** → <how we prove it worked>

## 🚫 Not now
<explicit deferrals, one line, separated by ·>
```

Do not add sections. Do not add sub-bullets. Do not restate file paths or line numbers here — those live in the plan file. If the user wants detail, they will open the file or ask.

## Key Principles

- Documentation Availability ≠ Usage: Explicitly require reading docs
- Task Framing Matters: Direct agents to docs, not just outcomes
- Verify > Assume: Require proof, not assumptions about APIs
- Session Boundaries: Each phase should be self-contained with its own doc references

## Anti-Patterns to Prevent

- Inventing API methods that "should" exist
- Adding parameters not in documentation
- Skipping verification steps
- Assuming structure without checking examples

## See Also

- `oh-my-issues` — the issue-side sibling. When the plan you're being asked to make is rooted in a bug or feature backlog rather than a fresh idea, route through `oh-my-issues` first to cluster issues by root cause into plan masters and `plans/0X-*.md` design docs. `make-plan` then operates on the design doc for one plan slice.
