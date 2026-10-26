---
slug: davepoon-buildwithclaude-plugins-cashflow-skills-recap
name: recap
tagline: Triggered by "monthly recap", "how did I do this month", "spending
  summary", "financial review", "weekly recap", "quarterly review", "year in
  review"
summary: '1. Determine the period. Parse $ARGUMENTS for the time span: - "this
  week", "last week" → weekly - "this month", "january", "jan 2025", "2025-01" →
  monthly (default if no argument) - "this quarter", "Q1", "Q1 2025" →...'
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
  subpath: plugins/cashflow/skills/recap
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
  path: plugins/cashflow/skills/recap/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.602Z
  truncated: false
type: agent_skill
skill:
  skill_name: recap
  description: Triggered by "monthly recap", "how did I do this month", "spending
    summary", "financial review", "weekly recap", "quarterly review", "year in
    review"
  folder_path: plugins/cashflow/skills/recap
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Financial Recap
Generate a narrative financial review for any time period.

## Workflow

1. **Determine the period.** Parse `$ARGUMENTS` for the time span:
   - "this week", "last week" → weekly
   - "this month", "january", "jan 2025", "2025-01" → monthly (default if no argument)
   - "this quarter", "Q1", "Q1 2025" → quarterly
   - "this year", "2025", "year in review" → yearly
   - Any explicit date range works too

2. **Fetch summary data.** Call the `query` MCP tool with `compare: "prior_period"`:
   ```json
   { "period": "<detected_period>", "compare": "prior_period", "include": ["ratios", "anomalies", "accounts"] }
   ```
   (Use `start`/`end` if a specific date range was requested.)

3. **Fetch year-ago comparison.** For anything other than year-over-year, also fetch the same period from a year ago to account for seasonality:
   ```json
   { "start": "<same_period_last_year_start>", "end": "<same_period_last_year_end>", "include": ["ratios"] }
   ```
   For example, if reviewing February 2026, also fetch February 2025.

4. **Fetch recurring bills.** Call the `query` MCP tool:
   ```json
   { "recurring": true }
   ```

5. **Synthesize a narrative recap** covering:
   - **Headline numbers**: total income, total expenses, net cash flow, savings rate
   - **vs. prior period**: changes from the immediately preceding period (last week, last month, etc.)
   - **vs. same period last year**: seasonal context — note whether changes are normal for this time of year or unusual (skip this section for year-over-year recaps)
   - **Anomalies**: unusual transactions or spending spikes
   - **Recurring bills**: new, changed, or cancelled subscriptions/bills
   - **Key ratios**: any ratios returned in the summary (e.g. expense-to-income)
   - **Account balances**: current balances and changes

6. **Tone**: Stick to the facts. Report what happened without judgement — no "great job" or "you need to cut back." Just clear, plain-language observations. Skip categories with trivial amounts.
