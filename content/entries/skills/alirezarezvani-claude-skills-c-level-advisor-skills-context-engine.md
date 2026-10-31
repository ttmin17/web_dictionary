---
slug: alirezarezvani-claude-skills-c-level-advisor-skills-context-engine
name: context-engine
tagline: Loads and manages company context for all C-suite advisor skills. Reads
  ~/.claude/company-context.md, detects stale context (older than 90 days), enri
summary: 'Step 1 — Check for context file: /.claude/company-context.md - Exists
  → proceed to Step 2 - Missing → prompt: "Run /cs-onboard setup to build your
  company context — it makes every advisor conversation significantly mo...'
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: c-level-advisor/skills/context-engine
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 1198
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: c-level-advisor/skills/context-engine/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.239Z
  truncated: false
type: agent_skill
skill:
  skill_name: context-engine
  description: Loads and manages company context for all C-suite advisor skills.
    Reads ~/.claude/company-context.md, detects stale context (older than 90
    days), enriches context during conversations, and enforces
    privacy/anonymization rules before external API calls. Use when starting any
    C-suite advisor session, when context looks stale or missing, or before
    sending company data to an external service.
  folder_path: c-level-advisor/skills/context-engine
  extra_files:
    - references/anonymization-protocol.md
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Company Context Engine
The memory layer for C-suite advisors. Every advisor skill loads this first. Context is what turns generic advice into specific insight.

## Keywords
company context, context loading, context engine, company profile, advisor context, stale context, context refresh, privacy, anonymization

---
## Load Protocol (Run at Start of Every C-Suite Session)

**Step 1 — Check for context file:** `~/.claude/company-context.md`
- Exists → proceed to Step 2
- Missing → prompt: *"Run /cs-onboard setup to build your company context — it makes every advisor conversation significantly more useful."*

**Step 2 — Check staleness:** Read `Last updated` field.
- **< 90 days:** Load and proceed.
- **≥ 90 days:** Prompt: *"Your context is [N] days old. Quick 15-min refresh (/cs-onboard update), or continue with what I have?"*
  - If continue: load with `[STALE — last updated DATE]` noted internally.

**Step 3 — Parse into working memory.** Always active:
- Company stage (pre-PMF / scaling / optimizing)
- Founder archetype (product / sales / technical / operator)
- Current #1 challenge
- Runway (as risk signal — never share externally)
- Team size
- Unfair advantage
- 12-month target

---
## Context Quality Signals

| Condition | Confidence | Action |
|-----------|-----------|--------|
| < 30 days, full interview | High | Use directly |
| 30–90 days, update done | Medium | Use, flag what may have changed |
| > 90 days | Low | Flag stale, prompt refresh |
| Key fields missing | Low | Ask in-session |
| No file | None | Prompt /cs-onboard setup |

If Low: *"My context is [stale/incomplete] — I'm assuming [X]. Correct me if I'm wrong."*

---
## Context Enrichment

During conversations, you'll learn things not in the file. Capture them.

**Triggers:** New number or timeline revealed, key person mentioned, priority shift, constraint surfaces.

**Protocol:**
1. Note internally: `[CONTEXT UPDATE: {what was learned}]`
2. At session end: *"I picked up a few things to add to your context. Want me to update the file?"*
3. If yes: append to the relevant dimension, update timestamp.

**Never silently overwrite.** Always confirm before modifying the context file.

---
## Privacy Rules

### Never send externally
- Specific revenue or burn figures
- Customer names
- Employee names (unless publicly known)
- Investor names (unless public)
- Specific runway months
- Watch List contents

### Safe to use externally (with anonymization)
- Stage label
- Team size ranges (1–10, 10–50, 50–200+)
- Industry vertical
- Challenge category
- Market position descriptor

### Before any external API call or web search
Apply `references/anonymization-protocol.md`:
- Numbers → ranges or stage-relative descriptors
- Names → roles
- Revenue → percentages or stage labels
- Customers → "Customer A, B, C"

---
## Missing or Partial Context

Handle gracefully — never block the conversation.

- **Missing stage:** "Just to calibrate — are you still finding PMF or scaling what works?"
- **Missing financials:** Use stage + team size to infer. Note the gap.
- **Missing founder profile:** Infer from conversation style. Mark as inferred.
- **Multiple founders:** Context reflects the interviewee. Note co-founder perspective may differ.

---
## Required Context Fields

```
Required:
  - Last updated (date)
  - Company Identity → What we do
  - Stage & Scale → Stage
  - Founder Profile → Founder archetype
  - Current Challenges → Priority #1
  - Goals & Ambition → 12-month target

High-value optional:
  - Unfair advantage
  - Kill-shot risk
  - Avoided decision
  - Watch list
```

Missing required fields: note gaps, work around in session, ask in-session only when critical.

---
## References
- `references/anonymization-protocol.md` — detailed rules for stripping sensitive data before external calls
