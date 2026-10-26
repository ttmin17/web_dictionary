---
slug: paperclipai-paperclip-packages-skills-catalog-catalog-bundled-docs-doc-maintenance
name: doc-maintenance
tagline: Keep project docs aligned with recent code and feature changes — detect
  drift, update affected pages, and add release-relevant notes without rewriting
summary: "- A PR or recent set of merges changed user-visible behavior: CLI
  flags, API shapes, default values, configuration keys, endpoints, environment
  variables, supported versions. - A user-reported bug traced back to outda..."
categories:
  - agent-frameworks
tags:
  - acpx
  - agent-orchestration
  - agent-skills
  - agentic-ai
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: paperclipai/paperclip
  subpath: packages/skills-catalog/catalog/bundled/docs/doc-maintenance
  official_vendor: false
  license: MIT
signals:
  stars: 107406
  last_commit: 2026-10-26T06:44:43Z
  stars_delta_7d: 3106
  stars_growth_pct: 3
  trending_score: 3198.5
  velocity_source: snapshot_delta
  sparkline_4w:
    - 101411
    - 104300
    - 107406
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: paperclipai/paperclip
  path: packages/skills-catalog/catalog/bundled/docs/doc-maintenance/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:41:14.999Z
  truncated: false
type: agent_skill
skill:
  skill_name: doc-maintenance
  description: Keep project docs aligned with recent code and feature changes —
    detect drift, update affected pages, and add release-relevant notes without
    rewriting unchanged sections.
  folder_path: packages/skills-catalog/catalog/bundled/docs/doc-maintenance
  extra_files: []
  pack_total_skills: 37
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: paperclipai-paperclip
---

# Doc Maintenance
Keep the documentation honest with minimum churn. The goal is alignment between docs and behavior, not stylistic rewrites or cosmetic re-organization. Reviewers should be able to read a diff and see "this updates docs to match recent behavior changes".

## When to use

- A PR or recent set of merges changed user-visible behavior: CLI flags, API shapes, default values, configuration keys, endpoints, environment variables, supported versions.
- A user-reported bug traced back to outdated documentation.
- A release is being cut and the docs need a pass against the merged commits.
- A new feature shipped but only the engineer's PR description describes how to use it.

## When not to use

- The change is internal-only (private helper rename, refactor) with no user-visible impact.
- You want to "improve the docs" without a behavior anchor. That is a separate scoped project, not maintenance — make a plan first.

## The pass

1. **Establish the baseline.** Get the commit range you are documenting against (since last release tag, since last merged-doc commit, or since a specific PR).
2. **Enumerate user-visible changes.** Read commits and PR descriptions. List, for each change, what a user can now do differently.
3. **Map changes to docs.** For each change, find every page that mentions the affected concept. Common targets: README, CLI reference, API reference, configuration reference, migration guide, FAQ, examples.
4. **Update precisely.** Edit only the lines that need to change. Do not rewrap paragraphs you did not modify — it pollutes the diff.
5. **Add new entries where needed.** New CLI flag → CLI reference entry. New env var → configuration reference entry. New endpoint → API reference entry. Don't only add it to the changelog.
6. **Update examples and snippets.** Code blocks in docs are wrong faster than prose. Re-run any example that touches new behavior.
7. **Write the release note.** One sentence per user-visible change. Group by Added / Changed / Fixed / Deprecated / Removed. Link to the relevant PRs and docs section.
8. **Cross-check.** Search the docs for the old behavior wording and remove or update stragglers.

## Style baseline

- Voice: second person ("you can pass `--json` to ..."). Avoid "we" except in narrative pages.
- Tense: present, not future. The behavior exists once shipped.
- Headings: imperative ("Configure the cache") or noun-phrase ("Cache configuration"), match the surrounding page.
- Code blocks: include the language tag so syntax highlighting works.
- Cross-links: link the first mention of a concept on each page; do not link every occurrence.
- Avoid promising future behavior. If something is unreleased, mark it `experimental` or omit it.

## Drift detection

A doc page is drifting if any of these are true:

- It documents a flag, key, or endpoint that no longer exists.
- An example does not run as written.
- A default value in the docs does not match the code.
- A supported-versions list excludes a version the project actually supports, or includes one it dropped.
- A "Coming soon" section references a feature that shipped or was cancelled.

When you find drift, fix it in the same pass and note it in the release note's `Fixed` group.

## Release-note rules

- One sentence per item. If two sentences are needed, the item is likely two items.
- User impact first, internal cause second. `Faster cold start (avoid full bundle download on first run)` beats `Refactor bootstrap loader`.
- Link the PR for engineering readers and the docs page for users.
- Mark breaking changes explicitly: `**Breaking:**` prefix. Include migration steps inline or via link.

## Anti-patterns

- Massive doc PRs that bundle stylistic rewrites with real updates. Reviewers cannot tell which lines reflect actual behavior changes.
- "Updated docs" commit messages with no detail. Make the commit say what changed and why.
- Adding to the changelog without updating the reference docs the changelog points to.
- Marking a feature as available before its code lands. Documentation must follow behavior, not promise it.
