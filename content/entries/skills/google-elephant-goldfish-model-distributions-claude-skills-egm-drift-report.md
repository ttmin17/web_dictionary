---
slug: google-elephant-goldfish-model-distributions-claude-skills-egm-drift-report
name: egm-drift-report
tagline: "Runs drift detection on all design documents to check for document and
  code consistency. Produces an actionable report with differences. Use when the
  "
summary: When the user asks to detect drift across all designs or a set of
  READMEs, the goal is to identify all instances where the codebase has diverged
  or failed to implement the specifications described by those designs or...
categories:
  - agent-frameworks
tags:
  - agent-skills
  - ai-agents
  - antigravity
  - claude-code
status: active
quality_percentile: 98
selection_reason: official_vendor
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: google/elephant-goldfish-model
  subpath: distributions/claude/skills/egm-drift-report
  official_vendor: true
  license: Apache-2.0
signals:
  stars: 12110
  last_commit: 2026-11-04T20:36:04Z
  stars_delta_7d: 1591
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 12110
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: google/elephant-goldfish-model
  path: distributions/claude/skills/egm-drift-report/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:49.760Z
  truncated: false
type: agent_skill
skill:
  skill_name: egm-drift-report
  description: Runs drift detection on all design documents to check for document
    and code consistency. Produces an actionable report with differences. Use
    when the user asks to detect drift or check for consistency across all
    design documents or READMEs in a directory.
  folder_path: distributions/claude/skills/egm-drift-report
  extra_files:
    - agents/openai.yaml
    - assets/icon.svg
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: google-elephant-goldfish-model
---

# Detect Drift In Designs and Code
When running in Codex or ChatGPT Work, first read [Codex integration](https://github.com/google/elephant-goldfish-model/blob/main/distributions/claude/skills/egm-drift-report/../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

When the user asks to detect drift across all designs or a set of READMEs, the
goal is to identify all instances where the codebase has diverged or failed to
implement the specifications described by those designs or READMEs.

1.  **Check Input**: Verify a directory containing design documents or READMEs
    is provided. If not provided, ask the user to specify the target directory.
2.  **List Documents**: List all files in the design directory.
3.  **Analyze**: For EACH design document:

    *   **Contextualize**: Read the design document. Identify the intent,
        proposed changes, and specific filenames/symbols mentioned.
    *   **Locate Source**: Find the corresponding source code files in the
        source tree. If paths aren't explicit, use code search or grep to
        locate the relevant classes, functions, or API endpoints mentioned in
        the doc. Prompt the user to add missing links to the document to make
        future detection cheaper.
    *   **Verify**: Read the current state of those source files.
    *   **Detect Drift**: Compare the design vs. reality. Look specifically for:
        *   Missing Features: Logic described in the doc but absent in the code.
        *   Incomplete Models: Dataclasses/Classes/Structs/Protos missing fields
            specified in the design.
        *   Logic Shortcuts: Hardcoded values where dynamic logic was planned.
        *   Architectural Divergence: Implementation using different
            patterns/libraries than proposed.
    *   **Filter**: Report ONLY the differences. Do not describe what is working
        or what matches. If the code matches the design perfectly, output "No
        drift detected."

4.  **Report**: Produce a single report listing all discrepancies found.

    *   Append the analysis for each file to `{YYYY-MM-DD}_DRIFT_REPORT.md`
        using your file-writing tool.
    *   Strict Format:

        ```markdown
        ## <DESIGN_DOC_NAME>

        <Bulleted list of specific divergences found>
        <Or "No drift detected">
        ```

5.  **Guidance**

    -   Be rigorous. If a design doc mentions a specific object, field or file
        name and the code doesn't have it, that is a reportable drift. Double
        check for coverage. If there is some part of the logic that is not
        referenced in a design or README, this is a reportable drift.
    -   Read files liberally to ensure you are looking at the current state
        of the code, not relying on memory.
    -   Process the files sequentially to ensure the tool output buffer doesn't
        overflow.
