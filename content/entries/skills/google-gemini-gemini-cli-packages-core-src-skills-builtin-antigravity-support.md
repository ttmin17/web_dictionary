---
slug: google-gemini-gemini-cli-packages-core-src-skills-builtin-antigravity-support
name: support
tagline: "Use when the user asks questions, seeks help, or requests instructions
  related to installing, setting up, or migrating to Antigravity CLI. This skill
  "
summary: Antigravity CLI is a next-generation terminal interface for
  collaborating with autonomous agents on local codebases. It is designed to be
  highly interactive and agent-driven, launching a Terminal User Interface
  (TUI)...
categories:
  - coding-agents
tags:
  - ai-agents
  - cli
  - gemini
  - gemini-api
status: active
quality_percentile: 84
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: google-gemini/gemini-cli
  subpath: packages/core/src/skills/builtin/antigravity-support
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 108394
  last_commit: 2026-10-26T00:37:50Z
  stars_delta_7d: 948
  stars_growth_pct: 0.9
  trending_score: 956.36
  velocity_source: snapshot_delta
  sparkline_4w:
    - 107245
    - 107310
    - 107446
    - 108394
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: google-gemini/gemini-cli
  path: packages/core/src/skills/builtin/antigravity-support/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:00.282Z
  truncated: false
type: agent_skill
skill:
  skill_name: support
  description: Use when the user asks questions, seeks help, or requests
    instructions related to installing, setting up, or migrating to Antigravity
    CLI. This skill provides the latest up to date details, requirements, and
    commands sourced from the official Antigravity CLI documentation.
  folder_path: packages/core/src/skills/builtin/antigravity-support
  extra_files: []
  pack_total_skills: 4
  is_pack_primary: false
  clients:
    - antigravity
  pack_slug: google-gemini-gemini-cli
---

# Antigravity CLI Support
This skill provides up-to-date information on how to install, configure, use,
and migrate to Antigravity CLI, sourced from the official documentation at
https://antigravity.google/docs/cli-getting-started.

## What is Antigravity CLI?

Antigravity CLI is a next-generation terminal interface for collaborating with
autonomous agents on local codebases. It is designed to be highly interactive
and agent-driven, launching a Terminal User Interface (TUI) to coordinate code
generation, reasoning, and workspace tasks.

Key Features:

- **Autonomous Agent Collaboration:** Work directly with agents within your
  terminal.
- **Interactive TUI:** A full terminal user interface designed for agent
  workflows.
- **Workspace Integration:** Deep understanding of your local workspace
  structure and context.

## Installation

To install the Antigravity CLI on your machine:

### macOS / Linux (Fast-Path Script)

Run the following standard curl command in your terminal:

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

This script downloads, verifies, and installs the latest version of Antigravity,
and automatically registers the `agy` binary in your PATH.

### Windows (PowerShell)

For Windows environments, install via the official PowerShell setup command:

```powershell
irm https://antigravity.google/cli/install.ps1 | iex
```

## Initial Setup & Configuration

Once installed, navigate to any project or workspace directory and run:

```bash
agy
```

This command starts the Antigravity CLI. The first time you launch it, the
interactive TUI will guide you through:

1. **Workspace Trust Verification:** Confirming trust for the workspace folder
   to allow secure local command execution and file edits.
2. **Visual Theme Configuration:** Setting up your preferred interactive
   terminal aesthetic and layout.
3. **Rendering Modes:** Tailoring TUI performance and drawing behaviors to your
   terminal capabilities.

## How to Migrate to Antigravity CLI

If you are transitioning or migrating from another tool (such as Gemini CLI) to
Antigravity CLI, follow these steps:

1. **Check Requirements:** Ensure your local environment meets standard
   requirements (e.g., node, git, shell access) and is running a compatible
   operating system (macOS, Linux, or Windows).
2. **Install Antigravity:** Run the installation script above to make the `agy`
   command globally available.
3. **Verify Installation:** Test the installation by running `agy --version` or
   launching `agy` in an empty or sample directory.
4. **Transition Workspaces:** Run `agy` directly inside your project workspace
   root. The initial setup assistant will guide you to import or configure trust
   policies, similar to those you might have used previously.

## Official Resources and Learning More

If you need more details or have advanced configuration/migration needs, please
visit the official documentation:

- **Official Documentation:**
  https://antigravity.google/docs/cli-getting-started
