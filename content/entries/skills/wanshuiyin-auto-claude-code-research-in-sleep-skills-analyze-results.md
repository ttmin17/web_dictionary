---
slug: wanshuiyin-auto-claude-code-research-in-sleep-skills-analyze-results
name: analyze-results
tagline: 'Analyze ML experiment results, compute statistics, generate comparison
  tables and insights. Use when user says "analyze results", "compare", or needs
  '
summary: Analyze ML experiment results, compute statistics, generate comparison
  tables and insights. Use when user says "analyze results", "compare", or needs
  to interpret experimental data.
categories:
  - domain-research
tags:
  - ai-research
  - ai-tools
  - aris
  - autonomous-agent
status: active
quality_percentile: 91
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wanshuiyin/Auto-claude-code-research-in-sleep
  subpath: skills/analyze-results
  official_vendor: false
  license: MIT
signals:
  stars: 18088
  last_commit: 2026-10-24T15:48:19Z
  stars_delta_7d: 395
  stars_growth_pct: 2.2
  trending_score: 403.82
  velocity_source: snapshot_delta
  sparkline_4w:
    - 17090
    - 17411
    - 17693
    - 18088
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wanshuiyin/Auto-claude-code-research-in-sleep
  path: skills/analyze-results/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:53.536Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyze-results
  description: Analyze ML experiment results, compute statistics, generate
    comparison tables and insights. Use when user says "analyze results",
    "compare", or needs to interpret experimental data.
  folder_path: skills/analyze-results
  extra_files: []
  pack_total_skills: 87
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wanshuiyin-auto-claude-code-research-in-sleep
---

# Analyze Experiment Results
Analyze: $ARGUMENTS

## Workflow

### Step 1: Locate Results
Find all relevant JSON/CSV result files:
- Check `figures/`, `results/`, or project-specific output directories
- Parse JSON results into structured data

### Step 2: Build Comparison Table
Organize results by:
- **Independent variables**: model type, hyperparameters, data config
- **Dependent variables**: primary metric (e.g., perplexity, accuracy, loss), secondary metrics
- **Delta vs baseline**: always compute relative improvement

### Step 3: Statistical Analysis
- If multiple seeds: report mean +/- std, check reproducibility
- If sweeping a parameter: identify trends (monotonic, U-shaped, plateau)
- Flag outliers or suspicious results

### Step 4: Generate Insights
For each finding, structure as:
1. **Observation**: what the data shows (with numbers)
2. **Interpretation**: why this might be happening
3. **Implication**: what this means for the research question
4. **Next step**: what experiment would test the interpretation

### Step 5: Update Documentation
If findings are significant:
- Propose updates to project notes or experiment reports
- Draft a concise finding statement (1-2 sentences)

## Output Format
Always include:
1. Raw data table
2. Key findings (numbered, concise)
3. Suggested next experiments (if any)
