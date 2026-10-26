---
slug: wshobson-agents-plugins-block-no-verify-skills-block-no-verify-hook
name: block-no-verify-hook
tagline: Configure a PreToolUse hook to prevent AI agents from skipping git
  pre-commit hooks with --no-verify and other bypass flags. Use when setting up
  Claud
summary: AI coding agents (Claude Code, Codex, etc.) can run shell commands with
  flags like --no-verify that bypass pre-commit hooks. This defeats the purpose
  of linting, formatting, testing, and security checks configured in...
categories:
  - agent-frameworks
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/block-no-verify/skills/block-no-verify-hook
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/block-no-verify/skills/block-no-verify-hook/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.191Z
  truncated: false
type: agent_skill
skill:
  skill_name: block-no-verify-hook
  description: Configure a PreToolUse hook to prevent AI agents from skipping git
    pre-commit hooks with --no-verify and other bypass flags. Use when setting
    up Claude Code projects that enforce commit quality gates.
  folder_path: plugins/block-no-verify/skills/block-no-verify-hook
  extra_files: []
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Block No-Verify Hook
PreToolUse hook configuration that intercepts and blocks bypass-flag usage before execution, ensuring AI agents cannot skip pre-commit hooks, GPG signing, or other git safety mechanisms.

## Overview

AI coding agents (Claude Code, Codex, etc.) can run shell commands with flags like `--no-verify` that bypass pre-commit hooks. This defeats the purpose of linting, formatting, testing, and security checks configured in pre-commit hooks. The block-no-verify hook adds a PreToolUse guard that rejects any tool call containing bypass flags before execution.

## Problem

When AI agents commit code, they may use bypass flags to avoid hook failures:

```bash
# These commands skip pre-commit hooks entirely
git commit --no-verify -m "quick fix"
git push --no-verify
git commit --no-gpg-sign -m "unsigned commit"
git merge --no-verify feature-branch
```

This allows:
- Unformatted code to enter the repository
- Linting errors to bypass checks
- Security scanning to be skipped
- Unsigned commits to bypass signing policies
- Test suites to be circumvented

## Solution

Add a `PreToolUse` hook to `.claude/settings.json` that inspects every Bash tool call and blocks commands containing bypass flags.

### Configuration

Add the following to your project's `.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if grep -qE '\"command\"[[:space:]]*:[[:space:]]*\"([^\"\\\\]|\\\\.)*(--no-(ver|g)|commit([^\"\\\\]|\\\\.)*([[:space:]]|\\\\[tn])-[a-zA-Z]*n)'; then echo 'BLOCKED: --no-verify and --no-gpg-sign flags are not allowed. Run the commit without bypass flags so that pre-commit hooks execute properly.' >&2; exit 2; fi"
          }
        ]
      }
    ]
  }
}
```

### How It Works

1. **Matcher**: The hook targets only `Bash` tool calls, so it does not interfere with other tools (Read, Edit, Grep, etc.).
2. **Inspection**: Claude Code sends the tool call to the hook as JSON on stdin and sets no `$TOOL_INPUT` variable. The hook searches the `command` value in that JSON with `grep -E`, so it needs no `jq` or `node`, and text in other fields, such as `cwd` or the tool call's description, can't trigger it. It blocks `--no-verify`, `--no-gpg-sign`, and any shorter prefix of them that git accepts, e.g., `--no-veri`. It also blocks a short option group with `n` that follows `commit` in the same command, e.g., `-n` or `-nm`, because `-n` is the short form of `--no-verify`. The hook doesn't look for the word `git`, so it also catches `if git ...`, `sudo git ...`, and `g=git; $g commit --no-verify`. A false match, such as a commit message that mentions a flag, blocks the call, which is the safe way to fail.
3. **Blocking**: If a bypass flag is found in a git command, the hook exits with code 2 and prints an error message. Exit code 2 signals Claude Code to reject the tool call entirely.
4. **Pass-through**: If no bypass flag is found, the hook exits with code 0 and the command executes normally.
5. **Limits**: The hook checks text, so it stops an agent that reaches for a bypass flag out of habit. It doesn't stop an agent that sets out to evade it, e.g., by building the flag from pieces or by running `git -c core.hooksPath=/dev/null commit`.

### Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Allow the tool call to proceed |
| 1 | Error (tool call still proceeds, warning shown) |
| 2 | Block the tool call entirely |

## Blocked Flags

| Flag | Purpose | Why Blocked |
|------|---------|-------------|
| `--no-verify` | Skips pre-commit and commit-msg hooks | Bypasses linting, formatting, testing, security checks |
| `--no-gpg-sign` | Skips GPG commit signing | Bypasses commit signing policy |

## Installation

### Per-Project Setup

Create or update `.claude/settings.json` in your project root:

```bash
mkdir -p .claude
cat > .claude/settings.json << 'EOF'
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if grep -qE '\"command\"[[:space:]]*:[[:space:]]*\"([^\"\\\\]|\\\\.)*(--no-(ver|g)|commit([^\"\\\\]|\\\\.)*([[:space:]]|\\\\[tn])-[a-zA-Z]*n)'; then echo 'BLOCKED: --no-verify and --no-gpg-sign flags are not allowed. Run the commit without bypass flags so that pre-commit hooks execute properly.' >&2; exit 2; fi"
          }
        ]
      }
    ]
  }
}
EOF
```

### Global Setup

To enforce across all projects, add to `~/.claude/settings.json`:

```bash
mkdir -p ~/.claude
cat > ~/.claude/settings.json << 'EOF'
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if grep -qE '\"command\"[[:space:]]*:[[:space:]]*\"([^\"\\\\]|\\\\.)*(--no-(ver|g)|commit([^\"\\\\]|\\\\.)*([[:space:]]|\\\\[tn])-[a-zA-Z]*n)'; then echo 'BLOCKED: --no-verify and --no-gpg-sign flags are not allowed. Run the commit without bypass flags so that pre-commit hooks execute properly.' >&2; exit 2; fi"
          }
        ]
      }
    ]
  }
}
EOF
```

## Verification

Test that the hook blocks bypass flags:

```bash
# This should be blocked by the hook:
git commit --no-verify -m "test"

# This should succeed normally:
git commit -m "test"
```

## Extending the Hook

### Adding More Blocked Flags

To block additional flags (e.g., `--force`), extend the grep pattern:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if grep -qE '\"command\"[[:space:]]*:[[:space:]]*\"([^\"\\\\]|\\\\.)*(--no-(ver|g)|commit([^\"\\\\]|\\\\.)*([[:space:]]|\\\\[tn])-[a-zA-Z]*n|git([[:space:]]|\\\\t)([^\"\\\\]|\\\\.)*--force)'; then echo 'BLOCKED: Bypass flags are not allowed.' >&2; exit 2; fi"
          }
        ]
      }
    ]
  }
}
```

### Combining with Other Hooks

The block-no-verify hook works alongside other PreToolUse hooks:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if grep -qE '\"command\"[[:space:]]*:[[:space:]]*\"([^\"\\\\]|\\\\.)*(--no-(ver|g)|commit([^\"\\\\]|\\\\.)*([[:space:]]|\\\\[tn])-[a-zA-Z]*n)'; then echo 'BLOCKED: Bypass flags not allowed.' >&2; exit 2; fi"
          }
        ]
      },
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if grep -qE 'rm[[:space:]]+-rf[[:space:]]+/'; then echo 'BLOCKED: Dangerous rm command.' >&2; exit 2; fi"
          }
        ]
      }
    ]
  }
}
```

## Best Practices

1. **Commit the settings file** -- Add `.claude/settings.json` to version control so all team members benefit from the hook.
2. **Document in onboarding** -- Mention the hook in your project's contributing guide so developers understand why bypass flags are blocked.
3. **Pair with pre-commit hooks** -- The block-no-verify hook ensures pre-commit hooks run; make sure you have meaningful pre-commit hooks configured.
4. **Test after setup** -- Verify the hook works by intentionally triggering it in a test commit.
