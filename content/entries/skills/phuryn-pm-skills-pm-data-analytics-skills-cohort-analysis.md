---
slug: phuryn-pm-skills-pm-data-analytics-skills-cohort-analysis
name: cohort-analysis
tagline: Agent skill from phuryn/pm-skills
summary: Agent skill from phuryn/pm-skills
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-data-analytics/skills/cohort-analysis
  official_vendor: false
  license: MIT
signals:
  stars: 27381
  last_commit: 2026-10-16T12:28:37Z
  stars_delta_7d: 189
  stars_growth_pct: 0.7
  trending_score: 190.31
  velocity_source: snapshot_delta
  sparkline_4w:
    - 26820
    - 26957
    - 27192
    - 27381
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-data-analytics/skills/cohort-analysis/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:13.734Z
  truncated: false
type: agent_skill
skill:
  skill_name: cohort-analysis
  description: Agent skill from phuryn/pm-skills
  folder_path: pm-data-analytics/skills/cohort-analysis
  extra_files: []
  pack_total_skills: 69
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

# Cohort Analysis & Retention Explorer
## Purpose
Analyze user engagement and retention patterns by cohort to identify trends in user behavior, feature adoption, and long-term engagement. Combine quantitative insights with qualitative research recommendations.

## How It Works

### Step 1: Read and Validate Your Data
- Accept CSV, Excel, or JSON data files with user cohort information
- Verify data structure: cohort identifier, time periods, engagement metrics
- Check for missing values and data quality issues
- Summarize key statistics (cohort sizes, date ranges, metrics available)

### Step 2: Generate Quantitative Analysis
- Calculate cohort retention rates and engagement trends
- Identify retention curves, drop-off patterns, and anomalies
- Compute feature adoption rates across cohorts
- Calculate month-over-month or period-over-period changes
- Generate Python analysis scripts using pandas and numpy if requested

### Step 3: Create Visualizations
- Generate retention heatmaps (cohorts vs. time periods)
- Create line charts showing cohort progression
- Build comparison charts for feature adoption
- Visualize drop-off points and engagement trends
- Output as interactive charts or static images

### Step 4: Identify Insights & Patterns
- Spot one or more significant patterns:
  - Early churn in specific cohorts
  - Late-stage engagement changes
  - Feature adoption clusters
  - Seasonal or temporal trends
- Highlight surprising findings and deviations
- Compare cohort performance to establish baselines

### Step 5: Suggest Follow-Up Research
- Recommend qualitative research methods:
  - Targeted user interviews with churning users
  - Feature usage surveys with engaged cohorts
  - Session replays of key interaction patterns
  - Win/loss analysis for high vs. low retention cohorts
- Design follow-up quantitative studies
- Suggest A/B tests or feature experiments

## Usage Examples

**Example 1: Upload CSV Data**
```
Upload cohort_engagement.csv with columns: cohort_month, weeks_active,
user_id, feature_x_usage, engagement_score

Request: "Analyze retention patterns and identify why Q4 2025 cohorts
underperform compared to Q3"
```

**Example 2: Describe Data Format**
```
"I have monthly user cohorts from Jan-Dec 2025. Each row shows:
cohort date, user ID, purchase frequency, and support tickets.
Analyze which cohorts show best long-term retention."
```

**Example 3: Feature Adoption Analysis**
```
Upload feature_usage.xlsx with cohort adoption data.

Request: "Compare adoption curves for our new feature across cohorts.
Which cohorts adopted fastest? Any patterns?"
```

## Key Capabilities

- **Data Reading**: Import CSV, Excel, JSON, SQL query results
- **Retention Analysis**: Calculate and visualize retention rates over time
- **Cohort Comparison**: Compare metrics across cohort groups
- **Anomaly Detection**: Flag unusual patterns or drop-offs
- **Python Scripts**: Generate reusable analysis code for ongoing analysis
- **Visualizations**: Create heatmaps, charts, and interactive dashboards
- **Research Design**: Suggest targeted follow-up studies and interview approaches
- **Statistical Summary**: Provide quantitative metrics and correlation analysis

## Tips for Best Results

1. **Include time dimension**: Provide data across multiple time periods
2. **Define cohort clearly**: Make cohort grouping explicit (signup month, feature launch date, etc.)
3. **Provide context**: Explain product changes, launches, or events during the period
4. **Multiple metrics**: Include retention, engagement, feature usage, revenue, etc.
5. **Sufficient data**: At least 3-4 cohorts for meaningful pattern identification
6. **Request specific output**: Ask for visualizations, Python scripts, or research recommendations

## Output Format

You'll receive:
- **Data Summary**: Cohort overview and data quality assessment
- **Quantitative Findings**: Key metrics, retention rates, and trend analysis
- **Visualizations**: Charts showing retention curves, adoption patterns
- **Pattern Identification**: 2-3 significant insights from the data
- **Research Recommendations**: Specific qualitative and quantitative follow-ups
- **Analysis Scripts** (if requested): Python code for reproducible analysis
- **Next Steps**: Prioritized actions based on findings

---### Further Reading

- [Cohort Analysis 101: How to Reduce Churn and Make Better Product Decisions](https://www.productcompass.pm/p/cohort-analysis)
- [The Product Analytics Playbook: AARRR, HEART, Cohorts & Funnels for PMs](https://www.productcompass.pm/p/the-product-analytics-playbook-aarrr)
- [Are You Tracking the Right Metrics?](https://www.productcompass.pm/p/are-you-tracking-the-right-metrics)
