---
slug: trailofbits-skills-plugins-audit-context-building-skills-audit-context-building
name: audit-context-building
tagline: Agent skill from trailofbits/skills
summary: Agent skill from trailofbits/skills
categories:
  - security-auth
tags:
  - agent-skills
  - research
  - security
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trailofbits/skills
  subpath: plugins/audit-context-building/skills/audit-context-building
  official_vendor: false
  license: CC-BY-SA-4.0
signals:
  stars: 7804
  last_commit: 2026-10-24T01:53:03Z
  stars_delta_7d: 164
  stars_growth_pct: 2.1
  trending_score: 167.52
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7412
    - 7507
    - 7640
    - 7804
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trailofbits/skills
  path: plugins/audit-context-building/skills/audit-context-building/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:55.636Z
  truncated: false
type: agent_skill
skill:
  skill_name: audit-context-building
  description: Agent skill from trailofbits/skills
  folder_path: plugins/audit-context-building/skills/audit-context-building
  extra_files:
    - agents/openai.yaml
    - assets/trail-of-bits-mark.svg
    - resources/ANALYSIS_FORMAT.md
    - resources/DOMAIN_NOTES.md
    - resources/FUNCTION_MICRO_ANALYSIS_EXAMPLE.md
  pack_total_skills: 97
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trailofbits-skills
---

# Audit Context Building
Build understanding, not verdicts. This runs before anyone hunts for bugs, and feeds that work.

## When to Use

At the start of an audit, a threat model, or an architecture review, when the code is unfamiliar. Also when
an earlier pass produced findings nobody could judge, because no one had mapped out how the system fits
together.

## When NOT to Use

Do not name vulnerabilities, suggest fixes, write proofs-of-concept, or rate severity. Those belong to the
hunting phase, which runs next and with the whole picture in hand. When the code counts on something and
nothing checks it, record that plainly and move on — whether it matters is decided later.

Not worth the tokens on code you already understand.

## Do not analyze in this context

The analysis is long, and this context needs to survive to use it. Dispatch it:

- **A codebase, or more than one function** — run `/audit-context-building:audit-context <path>`. It orients,
  analyzes each function in its own subagent, and writes `audit-context/DOSSIER.md` plus one file per
  function under `audit-context/functions/`. Only compact records return here.
- **A single function** — dispatch the `audit-context-building:function-analyzer` agent at it. It writes its
  prose to disk and returns a record.

Then work from what comes back: the index, the unenforced assumptions, the open questions. Read a function's
file when you need its detail.

The workflow is what enforces this, not this text: a subagent bound to a return schema cannot return prose.
Treat this section as routing, and route.

## What comes back, and how to read it

Each record lists what must always be true (with the line that shows it), what the function takes on faith
(with whatever establishes it), which functions it calls and what it needs from each, and anything still
unclear. The dossier adds the rules that span several functions, who can reach what, and where the
complicated parts cluster.

Two things matter more than the rest:

- **Assumptions marked `nothing found`.** The code counts on something being true and nothing anywhere makes
  it true. This is the most useful thing to hand the hunting phase.
- **The open questions.** An honest list of what is still unclear beats a confident answer that turns out to
  be wrong. Carry them forward instead of closing them out.

Where two records disagree, both are quoted rather than quietly reconciled. That is a fact about the code,
not a flaw in the analysis.

## The format

[ANALYSIS_FORMAT.md](https://github.com/trailofbits/skills/blob/main/plugins/audit-context-building/skills/audit-context-building/resources/ANALYSIS_FORMAT.md) defines it, and
[FUNCTION_MICRO_ANALYSIS_EXAMPLE.md](https://github.com/trailofbits/skills/blob/main/plugins/audit-context-building/skills/audit-context-building/resources/FUNCTION_MICRO_ANALYSIS_EXAMPLE.md) works through examples in
C and Solidity. Read them when extending this plugin or deciding whether a record can be trusted.

The format is the same whatever the target. What changes is what fills each slot, and what counts as a call
you cannot see inside. [DOMAIN_NOTES.md](https://github.com/trailofbits/skills/blob/main/plugins/audit-context-building/skills/audit-context-building/resources/DOMAIN_NOTES.md) maps that across smart contracts, C and
C++, decompiled firmware, and web services — read it when the target is not plain source code.

**The rule that matters most: follow the calls.** Whether a function is correct usually depends on something
another function does, and you cannot see that from the caller alone. A limit looks enforced because the
value came back from a function whose name suggests it was checked. So read the function being called, follow
every path through it rather than only the one that succeeds, and say what makes each assumption true. When
nothing does, use those words: `nothing found`. Every claim cites a line, or becomes an open question.
