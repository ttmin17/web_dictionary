---
slug: the-open-agent-openagent-skills-model-usage
name: model-usage
tagline: Use CodexBar CLI local cost usage to summarize per-model usage for
  Codex or Claude, including the current (most recent) model or a full model
  breakdow
summary: Get per-model usage cost from CodexBar's local cost logs. Supports
  "current model" (most recent daily entry) or "all models" summaries for Codex
  or Claude.
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/model-usage
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5712
  last_commit: 2026-10-25T13:57:48Z
  stars_delta_7d: 14
  stars_growth_pct: 0.2
  trending_score: 14.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
    - 5712
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/model-usage/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.203Z
  truncated: false
type: agent_skill
skill:
  skill_name: model-usage
  description: Use CodexBar CLI local cost usage to summarize per-model usage for
    Codex or Claude, including the current (most recent) model or a full model
    breakdown. Trigger when asked for model-level usage/cost data from codexbar,
    or when you need a scriptable per-model summary from codexbar cost JSON.
  folder_path: skills/model-usage
  extra_files:
    - references/codexbar-cli.md
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# Model usage
## Overview

Get per-model usage cost from CodexBar's local cost logs. Supports "current model" (most recent daily entry) or "all models" summaries for Codex or Claude.

TODO: add Linux CLI support guidance once CodexBar CLI install path is documented for Linux.

## Quick start

1. Fetch cost JSON via CodexBar CLI or pass a JSON file.
2. Use the bundled script to summarize by model.

```bash
python {baseDir}/scripts/model_usage.py --provider codex --mode current
python {baseDir}/scripts/model_usage.py --provider codex --mode all
python {baseDir}/scripts/model_usage.py --provider claude --mode all --format json --pretty
```

## Current model logic

- Uses the most recent daily row with `modelBreakdowns`.
- Picks the model with the highest cost in that row.
- Falls back to the last entry in `modelsUsed` when breakdowns are missing.
- Override with `--model <name>` when you need a specific model.

## Inputs

- Default: runs `codexbar cost --format json --provider <codex|claude>`.
- File or stdin:

```bash
codexbar cost --provider codex --format json > /tmp/cost.json
python {baseDir}/scripts/model_usage.py --input /tmp/cost.json --mode all
cat /tmp/cost.json | python {baseDir}/scripts/model_usage.py --input - --mode current
```

## Output

- Text (default) or JSON (`--format json --pretty`).
- Values are cost-only per model; tokens are not split by model in CodexBar output.

## References

- Read `references/codexbar-cli.md` for CLI flags and cost JSON fields.
