---
slug: affaan-m-ecc-skills-recursive-decision-ledger
name: recursive-decision-ledger
tagline: Run repeated rollouts ("Prime Gauss" style recursive prompting) while
  keeping an append-only decision ledger of trials, marks, coherence checks, and
  p
summary: "Every rollout should record:"
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: skills/recursive-decision-ledger
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: skills/recursive-decision-ledger/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.039Z
  truncated: false
type: agent_skill
skill:
  skill_name: recursive-decision-ledger
  description: Run repeated rollouts ("Prime Gauss" style recursive prompting)
    while keeping an append-only decision ledger of trials, marks, coherence
    checks, and promotion gates, so recursive confidence never auto-approves
    live trading, deploy, or destructive actions. Use when the user asks for
    repeated rollouts, marked decision processes, high-dimensional search,
    stochastic optimization, local-optima exploration, ensemble comparison, or
    recursive reasoning with a visible evidence trail.
  folder_path: skills/recursive-decision-ledger
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Recursive Decision Ledger
Use this skill when the user is trying to force deeper computation through
repeated rollouts or "Prime Gauss" style recursive prompting. Preserve the useful
part: repeated trials, prior memory, fresh information, and explicit marks.
Remove the unsafe part: pretending the loop proves certainty.

## Ledger Contract

Every rollout should record:

- rollout id and timestamp;
- prior accepted winner and prior watchlist;
- fresh information ingested;
- search space size;
- model families or heuristics used;
- trial count and effective trial count;
- top candidates;
- decision marks;
- coherence marks against the prior ledger;
- promotion gate result.

Prefer JSONL for append-only ledgers and Markdown for human summaries.

## Rollout Loop

1. Load the prior ledger.
2. Capture new information at time-step zero.
3. Run the bounded search.
4. Mark each candidate: accept, watch, reject, decay watch, or needs replay.
5. Compare winners against prior winners and latest marked rollout.
6. Downgrade candidates when drift, tail risk, stale data, or failed replay
   invalidates the previous mark.
7. Append artifacts before summarizing.

## Coherence Mark

Include a compact coherence mark:

```text
Ensemble matches prior winner: true
Recursive matches prior winner: false
Latest rollout match: true
Live promotion allowed: false
Reason: replay and freshness gates not satisfied
```

## Promotion Rules

For trading, capital allocation, production deploys, migrations, or destructive
ops, recursive confidence is not approval.

Default to paper, dry-run, read-only, preview, or staged mode unless the user
explicitly approves the live action and the repo/service gate supports it.

Promote only when:

- the candidate beats the prior accepted winner on the chosen metric;
- correctness and replay checks pass;
- risk limits are explicit;
- the evidence is durable;
- the user has approved the live step when needed.

## Summary Shape

Lead with the decision, not the drama:

```text
Rollout 15 complete. The prior winner still holds, but edge deteriorated 17%.
Status: watch, not live. Next gate: 20 replay fills with fresh orderbook age
below threshold.
```
