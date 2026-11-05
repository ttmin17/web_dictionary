---
slug: bytedance-deer-flow-skills-public-github-deep-research
name: github-deep-research
tagline: Conduct multi-round deep research on any GitHub Repo. Use when users
  request comprehensive analysis, timeline reconstruction, competitive analysis,
  or
summary: "- Round 1: GitHub API - Round 2: Discovery - Round 3: Deep
  Investigation - Round 4: Deep Dive"
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-framework
  - agentic-workflow
  - ai-agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: bytedance/deer-flow
  subpath: skills/public/github-deep-research
  official_vendor: false
  license: MIT
signals:
  stars: 85022
  last_commit: 2026-11-05T08:06:20Z
  stars_delta_7d: 591
  stars_growth_pct: 0.7
  trending_score: 595.14
  velocity_source: snapshot_delta
  sparkline_4w:
    - 84103
    - 84431
    - 85022
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: bytedance/deer-flow
  path: skills/public/github-deep-research/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:29.359Z
  truncated: false
type: agent_skill
skill:
  skill_name: github-deep-research
  description: Conduct multi-round deep research on any GitHub Repo. Use when
    users request comprehensive analysis, timeline reconstruction, competitive
    analysis, or in-depth investigation of GitHub. Produces structured markdown
    reports with executive summaries, chronological timelines, metrics analysis,
    and Mermaid diagrams. Triggers on Github repository URL or open source
    projects.
  folder_path: skills/public/github-deep-research
  extra_files:
    - assets/report_template.md
    - scripts/github_api.py
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: bytedance-deer-flow
---

# GitHub Deep Research Skill
Multi-round research combining GitHub API, web_search, web_fetch to produce comprehensive markdown reports.

## Research Workflow

- Round 1: GitHub API
- Round 2: Discovery
- Round 3: Deep Investigation
- Round 4: Deep Dive

## Core Methodology

### Query Strategy

**Broad to Narrow**: Start with GitHub API, then general queries, refine based on findings.

```
Round 1: GitHub API
Round 2: "{topic} overview"
Round 3: "{topic} architecture", "{topic} vs alternatives"
Round 4: "{topic} issues", "{topic} roadmap", "site:github.com {topic}"
```

**Source Prioritization**:
1. Official docs/repos (highest weight)
2. Technical blogs (Medium, Dev.to)
3. News articles (verified outlets)
4. Community discussions (Reddit, HN)
5. Social media (lowest weight, for sentiment)

### Research Rounds

**Round 1 - GitHub API**
Directly execute `scripts/github_api.py` without `read_file()`:
```bash
python /path/to/skill/scripts/github_api.py <owner> <repo> summary
python /path/to/skill/scripts/github_api.py <owner> <repo> readme
python /path/to/skill/scripts/github_api.py <owner> <repo> tree
```

**Available commands (the last argument of `github_api.py`):**
- summary
- info
- readme
- tree
- languages
- contributors
- commits
- issues
- prs
- releases

The `issues` command returns repository issues only, excluding pull requests. It follows additional pages when needed to fill the requested issue limit; use `prs` to research pull requests separately.
The `tree` command marks results truncated by GitHub or by its own output limit; inspect subdirectories separately before drawing conclusions from an incomplete tree.

**Round 2 - Discovery (3-5 web_search)**
- Get overview and identify key terms
- Find official website/repo
- Identify main players/competitors

**Round 3 - Deep Investigation (5-10 web_search + web_fetch)**
- Technical architecture details
- Timeline of key events
- Community sentiment
- Use web_fetch on valuable URLs for full content

**Round 4 - Deep Dive**
- Analyze commit history for timeline
- Review issues/PRs for feature evolution
- Check contributor activity

## Report Structure

Follow template in `assets/report_template.md`:

1. **Metadata Block** - Date, confidence level, subject
2. **Executive Summary** - 2-3 sentence overview with key metrics
3. **Chronological Timeline** - Phased breakdown with dates
4. **Key Analysis Sections** - Topic-specific deep dives
5. **Metrics & Comparisons** - Tables, growth charts
6. **Strengths & Weaknesses** - Balanced assessment
7. **Sources** - Categorized references
8. **Confidence Assessment** - Claims by confidence level
9. **Methodology** - Research approach used

### Mermaid Diagrams

Include diagrams where helpful:

**Timeline (Gantt)**:
```mermaid
gantt
    title Project Timeline
    dateFormat YYYY-MM-DD
    section Phase 1
    Development    :2025-01-01, 2025-03-01
    section Phase 2
    Launch         :2025-03-01, 2025-04-01
```

**Architecture (Flowchart)**:
```mermaid
flowchart TD
    A[User] --> B[Coordinator]
    B --> C[Planner]
    C --> D[Research Team]
    D --> E[Reporter]
```

**Comparison (Pie/Bar)**:
```mermaid
pie title Market Share
    "Project A" : 45
    "Project B" : 30
    "Others" : 25
```

## Confidence Scoring

Assign confidence based on source quality:

| Confidence | Criteria |
|------------|----------|
| High (90%+) | Official docs, GitHub data, multiple corroborating sources |
| Medium (70-89%) | Single reliable source, recent articles |
| Low (50-69%) | Social media, unverified claims, outdated info |

## Output

Save report as: `research_{topic}_{YYYYMMDD}.md`

### Formatting Rules

- Chinese content: Use full-width punctuation（，。：；！？）
- Technical terms: Provide Wiki/doc URL on first mention
- Tables: Use for metrics, comparisons
- Code blocks: For technical examples
- Mermaid: For architecture, timelines, flows

## Best Practices

1. **Start with official sources** - Repo, docs, company blog
2. **Verify dates from commits/PRs** - More reliable than articles
3. **Triangulate claims** - 2+ independent sources
4. **Note conflicting info** - Don't hide contradictions
5. **Distinguish fact vs opinion** - Label speculation clearly
6. **CRITICAL: Always include inline citations** - Use `[citation:Title](https://github.com/bytedance/deer-flow/blob/main/skills/public/github-deep-research/URL)` format immediately after each claim from external sources
7. **Extract URLs from search results** - web_search returns {title, url, snippet} - always use the URL field
8. **Update as you go** - Don't wait until end to synthesize

### Citation Examples

**Good - With inline citations:**
```markdown
The project gained 10,000 stars within 3 months of launch [citation:GitHub Stats](https://github.com/owner/repo).
The architecture uses LangGraph for workflow orchestration [citation:LangGraph Docs](https://langchain.com/langgraph).
```

**Bad - Without citations:**
```markdown
The project gained 10,000 stars within 3 months of launch.
The architecture uses LangGraph for workflow orchestration.
```
