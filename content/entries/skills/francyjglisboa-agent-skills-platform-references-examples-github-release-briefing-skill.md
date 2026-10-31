---
slug: francyjglisboa-agent-skills-platform-references-examples-github-release-briefing-skill
name: github-release-briefing-skill
tagline: Create a source-linked briefing for the latest published GitHub release
  of a public repository. Use for engineering teams tracking a dependency releas
summary: 1. Reject malformed repository identifiers before any request. 2.
  Retrieve only the latest published release and identify its tag, title, date,
  and URL. 3. State clearly when a repository has no published release or i...
categories:
  - coding-agents
status: active
quality_percentile: 31
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: FrancyJGLisboa/agent-skills-platform
  subpath: references/examples/github-release-briefing-skill
  official_vendor: false
  license: MIT
signals:
  stars: 2403
  last_commit: 2026-09-15T17:31:46Z
  stars_delta_7d: 22
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 2403
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: FrancyJGLisboa/agent-skills-platform
  path: references/examples/github-release-briefing-skill/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:19.680Z
  truncated: false
type: agent_skill
skill:
  skill_name: github-release-briefing-skill
  description: Create a source-linked briefing for the latest published GitHub
    release of a public repository. Use for engineering teams tracking a
    dependency release; do not use it to publish releases or change
    repositories.
  folder_path: references/examples/github-release-briefing-skill
  extra_files:
    - AGENTS.md
    - README.md
    - VERIFICATION.md
    - contracts/data_contract_github_releases/.contract_id
    - contracts/data_contract_github_releases/code/contract_health.py
    - discovery.json
    - evals/caliper/github-release-briefing-skill.eval.yaml
    - evals/github-release-briefing.eval.md
    - evals/golden/anthropic-sdk-python/input.txt
    - evals/golden/flask/input.txt
tags:
  - github
---

# /github-release-briefing-skill
Create a current briefing for the latest published release of one public GitHub
repository. Run `scripts/run_pipeline.py` with an `OWNER/REPOSITORY` input.
The command uses GitHub's public REST endpoint, writes a Markdown briefing, and
does not authenticate, publish, modify a repository, or download release assets.

```bash
python3 scripts/run_pipeline.py --repository openai/openai-python --output release.md
```

## Required behavior

1. Reject malformed repository identifiers before any request.
2. Retrieve only the latest published release and identify its tag, title, date, and URL.
3. State clearly when a repository has no published release or is unavailable.
4. Include the GitHub API source URL so a human can inspect the result.

## Gotchas

- A GitHub "latest" release excludes drafts and prereleases according to the API's rules.
- This is dependency-awareness evidence, not a change-approval recommendation.
- Public API availability and release content can change after retrieval.

## References

- https://docs.github.com/en/rest/releases/releases#get-the-latest-release
