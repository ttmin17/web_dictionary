---
slug: microsoft-agent-framework-python-scripts-sample_validation-skills-foundry-config-setup
name: foundry-config-setup
tagline: Resolve missing setup caused by a hardcoded Foundry project endpoint or
  model in a sample. Use when a sample fails because it uses a placeholder/hardc
summary: "Some samples (notably those under 01-get-started) hardcode the Foundry
  project endpoint and model directly in the FoundryChatClient constructor using
  placeholder values, for example:"
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agentic-ai
  - agents
  - dotnet
status: active
quality_percentile: 100
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: microsoft/agent-framework
  subpath: python/scripts/sample_validation/skills/foundry-config-setup
  official_vendor: true
  license: MIT
signals:
  stars: 14546
  last_commit: 2026-11-05T12:54:54Z
  stars_delta_7d: 229
  stars_growth_pct: 1.6
  trending_score: 232.66
  velocity_source: snapshot_delta
  sparkline_4w:
    - 14200
    - 14317
    - 14546
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/agent-framework
  path: python/scripts/sample_validation/skills/foundry-config-setup/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:55.532Z
  truncated: false
type: agent_skill
skill:
  skill_name: foundry-config-setup
  description: Resolve missing setup caused by a hardcoded Foundry project
    endpoint or model in a sample. Use when a sample fails because it uses a
    placeholder/hardcoded project_endpoint (for example
    "https://your-project.services.ai.azure.com") or a hardcoded model instead
    of reading them from the environment.
  folder_path: python/scripts/sample_validation/skills/foundry-config-setup
  extra_files: []
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: microsoft-agent-framework
---

## Usage

Some samples (notably those under `01-get-started`) hardcode the Foundry
project endpoint and model directly in the `FoundryChatClient` constructor
using placeholder values, for example:

```python
client = FoundryChatClient(
    project_endpoint="https://your-project.services.ai.azure.com",
    model="gpt-4o",
    credential=AzureCliCredential(),
)
```

These placeholder values are not real and the sample cannot run as written.
The validation environment provides the real values through environment
variables, so the sample must read them from the environment instead.

When you detect a hardcoded/placeholder `project_endpoint` (or `model`) that
is causing the sample to fail with missing or invalid setup:

1. Replace the hardcoded `project_endpoint` value with a read from the
   `FOUNDRY_PROJECT_ENDPOINT` environment variable.
2. Replace the hardcoded `model` value with a read from the `FOUNDRY_MODEL`
   environment variable.
3. Ensure `import os` is present at the top of the file.

The corrected constructor should look like:

```python
import os

client = FoundryChatClient(
    project_endpoint=os.environ["FOUNDRY_PROJECT_ENDPOINT"],
    model=os.environ["FOUNDRY_MODEL"],
    credential=AzureCliCredential(),
)
```

These samples are intentionally written with hardcoded placeholders, so this
is expected setup—not a defect in the sample. After applying the change,
re-run the sample and report the result as a `success` if it now runs.
