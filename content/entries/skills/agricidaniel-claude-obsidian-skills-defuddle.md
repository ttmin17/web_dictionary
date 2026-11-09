---
slug: agricidaniel-claude-obsidian-skills-defuddle
name: defuddle
tagline: Plan optional Defuddle extraction and retain already available local
  source files through reviewed filesystem capture. Use for defuddle, clean this
  UR
summary: "Resolve the installed product root from this skill's own location,
  never from the selected vault or process working directory:"
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-note-taking
  - ai-second-brain
  - claude-code
status: active
quality_percentile: 58
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-obsidian
  subpath: skills/defuddle
  official_vendor: false
  license: MIT
signals:
  stars: 16274
  last_commit: 2026-10-25T22:24:31Z
  stars_delta_7d: 89
  stars_growth_pct: 0.5
  trending_score: 89.49
  velocity_source: snapshot_delta
  sparkline_4w:
    - 15634
    - 15827
    - 16185
    - 16274
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-obsidian
  path: skills/defuddle/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:40.506Z
  truncated: false
type: agent_skill
skill:
  skill_name: defuddle
  description: Plan optional Defuddle extraction and retain already available
    local source files through reviewed filesystem capture. Use for defuddle,
    clean this URL, strip page clutter, readable Markdown from a web page, or
    preparing a web source for later wiki ingestion. Network extraction remains
    unavailable until an enforcing adapter is verified.
  folder_path: skills/defuddle
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-obsidian
---

# Defuddle
Treat Defuddle as an optional external extractor. This package supports inert
URL plans and filesystem capture; it does not ship an enforcing network cleaner.
Cleaning, raw capture, and wiki ingestion are separate operations.

Resolve the installed product root from this skill's own location, never from
the selected vault or process working directory:

```bash
PRODUCT_ROOT=/absolute/path/to/installed/claude-obsidian
CORE="$PRODUCT_ROOT/scripts/claude-obsidian.py"
test -f "$CORE"
```

Every `../wiki/references/` link in this file resolves the same way, relative
to this skill's own directory under `$PRODUCT_ROOT`, never relative to the
selected vault's `wiki/` directory.
Upstream flags may be checked in a separately installed `kepano/obsidian-skills`
reference, but do not override this package's privacy and transaction boundary.

## Inert URL plan

Accept HTTPS URLs only. Reject credentials, fragments, controls, sensitive query
parameters, and non-public hosts or IP addresses. Never interpolate a URL into a
shell string. Use one argv element when constructing a plan:

```bash
python3 "$CORE" capture external-plan url "HTTPS_URL"
python3 "$CORE" contracts --verify --capability defuddle --vault "$VAULT"
```

The plan executes no network request. Report the normalized host, required
network egress, redirect policy, optional dependency, and `execute: false`.
An `available` state means no executable was found. A `configured` state means
an executable was discovered without a bundled behavioral verifier. Identify
the manual executable and its reported reason; never run it merely because it
was found. Never relabel `configured` as `verified`.

## Why execution stops here

The upstream CLI inspected at commit
[`556d74e8c8fd68c49912d4b11a4ae9ec04d7b2b5`](https://github.com/kepano/defuddle/tree/556d74e8c8fd68c49912d4b11a4ae9ec04d7b2b5)
(checked 2026-10-17) follows redirects and enables asynchronous extraction.
Even parsing a local HTML file can request additional resources or third-party
fallbacks. Inspecting argv or obtaining consent for the initial URL cannot
prove that every eventual destination remains approved.

Do not execute the bare CLI against a URL or local HTML under this workflow.
Do not silently substitute a browser, fetcher, proxy, cookies, or another runner.
A future runnable adapter must enforce approved destinations after DNS and on
each redirect, disable uncontrolled async/fallback traffic, constrain proxy
behavior, and bound bytes, time, and subprocess output. It must retain original
and final locators, exact version, approved hosts, capture hash, and mode.
Behavioral tests must prove these limits before execution is offered. Consent
for each destination remains required even with an enforcing adapter.

Do not install tools or claim cleaning, extraction quality, or token savings.
Leave the URL queued, or accept an already available local file. A local file
may be retained as bytes without rendering HTML or running its scripts.

## Reviewable filesystem capture

When the user asks to retain an existing local HTML or Markdown file, place it
in the selected vault's `inbox/` first. Preview and apply the filesystem plan
with a pinned timestamp and operation ID:

```bash
python3 "$CORE" capture plan --vault "$VAULT" "$VAULT/inbox/source.md"
python3 "$CORE" capture apply --vault "$VAULT" "$VAULT/inbox/source.md" \
  --generated-at "$GENERATED_AT" --operation-id "$OPERATION_ID"
# Set APPROVAL_SHA256 to the reviewed approved_plan_sha256 from the dry run.
python3 "$CORE" capture apply --vault "$VAULT" "$VAULT/inbox/source.md" \
  --generated-at "$GENERATED_AT" --operation-id "$OPERATION_ID" \
  --approved-plan-sha256 "$APPROVAL_SHA256" --apply
```

This preserves source bytes in create-only `.raw/captured/` storage. It does not
clean HTML, verify source metadata, or synthesize pages. Inspect the actual
result and record extraction limitations. If already cleaned text is supplied,
retain its known extractor/version and locator without inventing missing fields.
Report the operation ID and exact changed paths. A repeated identical payload
is a no-op; never overwrite immutable raw state.

Use [operation-transactions.md](https://github.com/AgriciDaniel/claude-obsidian/blob/main/skills/defuddle/../wiki/references/operation-transactions.md)
for custom capture drafts. Read or analyze transiently when retention was not
requested. Invoke `wiki-ingest` only as a distinct requested operation.
