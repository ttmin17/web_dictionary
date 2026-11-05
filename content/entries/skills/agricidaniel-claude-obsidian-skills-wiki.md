---
slug: agricidaniel-claude-obsidian-skills-wiki
name: wiki
tagline: Initialize, adopt, and route work for a separate Obsidian knowledge
  vault through the portable claude-obsidian core. Use for vault setup,
  scaffolding,
summary: "Resolve the portable core from this skill's installation and invoke it
  by absolute path:"
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-note-taking
  - ai-second-brain
  - claude-code
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-obsidian
  subpath: skills/wiki
  official_vendor: false
  license: MIT
signals:
  stars: 16185
  last_commit: 2026-10-25T22:24:31Z
  stars_delta_7d: 358
  stars_growth_pct: 2.3
  trending_score: 366.1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 15504
    - 15634
    - 15827
    - 16185
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-obsidian
  path: skills/wiki/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:46.215Z
  truncated: false
type: agent_skill
skill:
  skill_name: wiki
  description: "Initialize, adopt, and route work for a separate Obsidian
    knowledge vault through the portable claude-obsidian core. Use for vault
    setup, scaffolding, workspace selection, cross-project configuration, or
    choosing the correct wiki sub-skill. Triggers: /wiki, set up wiki, scaffold
    vault, create knowledge base, adopt this vault, Obsidian vault, second brain
    setup, persistent wiki."
  folder_path: skills/wiki
  extra_files:
    - references/coordination.md
    - references/css-snippets.md
    - references/dataview.md
    - references/frontmatter.md
    - references/git-setup.md
    - references/install-modes.md
    - references/knowledge-recipes.md
    - references/mcp-setup.md
    - references/model-guidance.md
    - references/modes.md
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-obsidian
---

# Wiki orchestration
Treat the installed product as code and the selected user vault as data. Never use
the plugin/product root as a vault, even when the current directory happens to be
the product checkout.

Resolve the portable core from this skill's installation and invoke it by absolute
path:

```bash
CORE=/absolute/product/root/scripts/claude-obsidian.py
python3 "$CORE" --help
```

Resolve a vault in this order: explicit `--vault`,
`CLAUDE_OBSIDIAN_VAULT`, the nearest `.claude-obsidian.json`, then an
unambiguous initialized vault at or above the current directory. Fail closed when
selection is missing or ambiguous.

Baseline setup requires no network egress. Do not fetch templates, plugins, or
remote content unless the user separately approves the destinations and budget.

## Set up a vault

Use the deterministic setup commands. Both are dry-run by default.

For a new, separate vault:

```bash
python3 "$CORE" init /absolute/path/to/vault \
  --generated-at <ISO-UTC> --operation-id init-reviewed
python3 "$CORE" init /absolute/path/to/vault \
  --generated-at <ISO-UTC> --operation-id init-reviewed \
  --approved-plan-sha256 <reviewed-sha256> --apply
```

For an existing Obsidian vault:

```bash
python3 "$CORE" adopt /absolute/path/to/vault \
  --generated-at <ISO-UTC> --operation-id adopt-reviewed
python3 "$CORE" adopt /absolute/path/to/vault \
  --generated-at <ISO-UTC> --operation-id adopt-reviewed \
  --approved-plan-sha256 <reviewed-sha256> --apply
```

Before `--apply`, show the selected path and changed-path preview, then pass
the emitted `approved_plan_sha256` unchanged. Do not use
`--force` unless the user has reviewed the conflicts and explicitly approved
replacement. Setup is non-destructive by default and creates no upstream Git
remote.

If the user asks for a domain-specific scaffold, establish the baseline first,
then read [modes.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/modes.md). Draft the additional pages and
configuration as one operation-level transaction. Never mutate vault files with
host Write/Edit tools or an Obsidian transport.

## Route operations

Route the user's intent without silently broadening it:

| Intent | Skill |
|---|---|
| Ingest supplied sources | `wiki-ingest` |
| Answer from existing vault knowledge | `wiki-query` |
| Save a specific conversation result | `save` |
| Research the public web under a budget | `autoresearch` |
| Check vault health | `wiki-lint` |
| Draft a cited glossary or consolidate overlapping notes | `wiki-ingest`, with an explicitly reviewed scope |
| Roll up log entries | `wiki-fold` |
| Work with a canvas | `canvas` |

Query is read-only. Persistence from a query must be an explicit, separately
scoped Save operation. Never capture a transcript or update the hot cache merely
because a session ended.

## Mutation contract

Read [operation-transactions.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/operation-transactions.md) before
any custom scaffold or mutation. One logical operation must produce one inspected
and recoverable `claude-obsidian.transaction.v1` bundle. Parallel agents may
return drafts and evidence only; the orchestrator merges them and applies once.
Every canonical page create or removal includes an active index or MOC update
in that bundle; update the overview only when the stable high-level picture
changed. Raw source payloads are create-only. There are no automatic commits.

Use [provenance.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/provenance.md) when initializing or changing
source and claim ledgers. Unsupported evidence stays unsupported; never invent a
source, quote, date, locator, or confidence.

After a successful apply, report the operation ID and exact changed paths. If the
user explicitly wants a Git checkpoint, run it separately:

```bash
python3 "$CORE" checkpoint OPERATION_ID --vault /absolute/path/to/vault
```

On a conflict, re-read and rebuild. On interruption, use `transaction recover`.
Reuse an operation ID only with the identical bundle.

## Installation context

Read [install-modes.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/install-modes.md) when installation or host
behavior matters. Hooks are optional adapters; portable behavior lives in the
core and skills.

## Conditional references

Read only the reference needed for the current request:

- [frontmatter.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/frontmatter.md) when defining or adopting a
  property schema;
- [css-snippets.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/css-snippets.md) for requested Obsidian visual
  customization;
- [git-setup.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/git-setup.md) for explicit local Git or checkpoint
  setup;
- [plugins.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/plugins.md) when evaluating optional Obsidian
  integrations;
- [mcp-setup.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/mcp-setup.md) when the user asks to evaluate an
  external read transport;
- [rest-api.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/rest-api.md) only when the user explicitly has or
  requests the Local REST API adapter;
- [dataview.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/dataview.md) for an existing optional Dataview setup;
- [knowledge-recipes.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/knowledge-recipes.md) for cited glossary or
  consolidation work;
- [coordination.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/coordination.md) for external editors or multiple
  machines;
- [native-conformance.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/../../docs/native-conformance.md) for versioned native
  acceptance evidence;
- [capacity-and-recovery.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/../../docs/capacity-and-recovery.md) for size limits
  or recoverable legacy compaction;
- [upstream-references.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/../../docs/upstream-references.md) when reconciling
  pinned external syntax or design references.
- [model-guidance.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/wiki/references/model-guidance.md) when evaluating a model,
  changing a generation adapter, or validating host-specific prompting.

## Think, verify, grow

Before applying, pause once: observe existing state, verify the vault selection
and evidence, then choose the smallest reversible operation that satisfies the
request. Afterward, report uncertainty and the next useful improvement without
performing it automatically.
