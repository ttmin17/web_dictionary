---
slug: firecrawl-firecrawl-skills-firecrawl-build-onboarding
name: build-onboarding
tagline: Get Firecrawl credentials and SDK setup into a project. Use when an
  application needs `FIRECRAWL_API_KEY`, when an agent should add Firecrawl to
  `.env
summary: "If you haven't installed yet, one command sets up both the CLI tools
  (for live web work) and the build skills (for app integration):"
categories:
  - browser-web
tags:
  - ai-agents
  - ai-crawler
  - ai-scraping
  - ai-search
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: firecrawl/firecrawl
  subpath: skills/firecrawl-build-onboarding
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 197788
  last_commit: 2026-11-02T07:37:49Z
  stars_delta_7d: 2377
  stars_growth_pct: 1.2
  trending_score: 2405.91
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7593
    - 192877
    - 195411
    - 197788
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: firecrawl/firecrawl
  path: skills/firecrawl-build-onboarding/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:50.793Z
  truncated: false
type: agent_skill
skill:
  skill_name: build-onboarding
  description: Get Firecrawl credentials and SDK setup into a project. Use when an
    application needs `FIRECRAWL_API_KEY`, when an agent should add Firecrawl to
    `.env`, when the user wants to authenticate Firecrawl for app code, or when
    choosing the first SDK and docs for a new Firecrawl integration. This skill
    includes its own browser auth flow, so it does not depend on the website
    onboarding skill.
  folder_path: skills/firecrawl-build-onboarding
  extra_files:
    - references/auth-flow.md
    - references/project-setup.md
    - references/sdk-installation.md
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: firecrawl-firecrawl
---

# Firecrawl Build Onboarding
Use this skill for the application-integration path from Firecrawl's onboarding flow.

## Install

If you haven't installed yet, one command sets up both the CLI tools
(for live web work) and the build skills (for app integration):

```bash
npx -y firecrawl-cli@latest init --all --browser
```

This installs the Firecrawl CLI, the CLI skills, and these build skills
together. It also opens browser auth so the human can sign in or create
an account. No separate `npx skills add` step is needed.

## Use This When

- a project needs `FIRECRAWL_API_KEY`
- the user wants Firecrawl wired into `.env`
- you are adding Firecrawl to an app for the first time
- you need to choose the first SDK or REST path

If the human still needs to sign up, sign in, or authorize access in the browser, use the auth flow reference in this skill.

If the project already uses [Stripe Projects](https://docs.firecrawl.dev/integrations/stripe-projects) (a `.projects/` directory, or `stripe projects status` succeeds), the key can come from there instead of the browser flow:

```bash
stripe projects add firecrawl/api --name firecrawl
stripe projects env --pull
```

`--name firecrawl` is what puts the key in `FIRECRAWL_API_KEY`; without it the CLI writes `FIRECRAWL_API_API_KEY`, which the SDKs do not read. Ignore the `FIRECRAWL_API_BASE_URL` the CLI also writes: the SDKs read `FIRECRAWL_API_URL`, and only for self-hosted deployments, so leave it unset for a hosted account. Paid plans are the human's call, since `stripe projects upgrade firecrawl` charges their card. The docs page carries the catalog and troubleshooting.

## Quick Start

If the user already has an API key, place it in `.env`:

```dotenv
FIRECRAWL_API_KEY=fc-...
```

If the project is self-hosted, also set:

```dotenv
FIRECRAWL_API_URL=https://your-firecrawl-instance.example.com
```

Then decide which integration path applies:

- **Fresh project** -> choose the target stack, install the SDK, add the first Firecrawl call, and run a smoke test
- **Existing project** -> inspect the repo first, then integrate Firecrawl where the project already handles third-party APIs and env vars

## What Do You Need?

| Task | Reference |
|---|---|
| **Run the browser auth flow and save `FIRECRAWL_API_KEY`** | [references/auth-flow.md](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-onboarding/references/auth-flow.md) |
| **Provision the key through Stripe Projects** | [docs.firecrawl.dev/integrations/stripe-projects](https://docs.firecrawl.dev/integrations/stripe-projects) |
| **Install the right SDK** | [references/sdk-installation.md](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-onboarding/references/sdk-installation.md) |
| **Put credentials into `.env` or project config** | [references/project-setup.md](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-onboarding/references/project-setup.md) |
| **Choose the right endpoint after setup** | [firecrawl-build](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-onboarding/../firecrawl-build/SKILL.md) |
| **Need live web tooling during this task** | The CLI skills are already installed from the same command |
| **Start implementation from a known URL** | [firecrawl-build-scrape](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-onboarding/../firecrawl-build-scrape/SKILL.md) |
| **Start implementation from a query** | [firecrawl-build-search](https://github.com/firecrawl/firecrawl/blob/main/skills/firecrawl-build-onboarding/../firecrawl-build-search/SKILL.md) |

## Docs (Source of Truth)

Read the source-of-truth page for your project language for SDK usage, schemas, and examples:

- **Node / TypeScript**: [docs.firecrawl.dev/agent-source-of-truth/node](https://docs.firecrawl.dev/agent-source-of-truth/node)
- **Python**: [docs.firecrawl.dev/agent-source-of-truth/python](https://docs.firecrawl.dev/agent-source-of-truth/python)
- **Rust**: [docs.firecrawl.dev/agent-source-of-truth/rust](https://docs.firecrawl.dev/agent-source-of-truth/rust)
- **Java**: [docs.firecrawl.dev/agent-source-of-truth/java](https://docs.firecrawl.dev/agent-source-of-truth/java)
- **Elixir**: [docs.firecrawl.dev/agent-source-of-truth/elixir](https://docs.firecrawl.dev/agent-source-of-truth/elixir)
- **cURL / REST**: [docs.firecrawl.dev/agent-source-of-truth/curl](https://docs.firecrawl.dev/agent-source-of-truth/curl)

## After Setup

Once the key is present:

1. decide whether this is a fresh project or an existing codebase
2. ask what Firecrawl should do in the product
3. pick the narrowest endpoint that matches that behavior
4. read the source-of-truth page for the project language before writing code
5. add the SDK or REST call in code
6. run a smoke test that proves one real Firecrawl request succeeds
7. use the endpoint-specific skills in this repo for implementation guidance
8. if you also need live web tooling during the current task, the CLI skills are already installed — use `firecrawl/cli`
