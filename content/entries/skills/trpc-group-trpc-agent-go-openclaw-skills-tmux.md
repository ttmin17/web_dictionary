---
slug: trpc-group-trpc-agent-go-openclaw-skills-tmux
name: tmux
tagline: Remote-control tmux sessions for interactive CLIs by sending keystrokes
  and scraping pane output.
summary: "- Monitoring Claude/Codex sessions in tmux - Sending input to
  interactive terminal applications - Scraping output from long-running
  processes in tmux - Navigating tmux panes/windows programmatically - Checking
  on back..."
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: openclaw/skills/tmux
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: openclaw/skills/tmux/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.538Z
  truncated: false
type: agent_skill
skill:
  skill_name: tmux
  description: Remote-control tmux sessions for interactive CLIs by sending
    keystrokes and scraping pane output.
  folder_path: openclaw/skills/tmux
  extra_files:
    - scripts/find-sessions.sh
    - scripts/wait-for-text.sh
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# tmux Session Control
Control tmux sessions by sending keystrokes and reading output. Essential for managing Claude Code sessions.

## When to Use

✅ **USE this skill when:**

- Monitoring Claude/Codex sessions in tmux
- Sending input to interactive terminal applications
- Scraping output from long-running processes in tmux
- Navigating tmux panes/windows programmatically
- Checking on background work in existing sessions

## When NOT to Use

❌ **DON'T use this skill when:**

- Running one-off shell commands → use `exec` tool directly
- Starting new background processes → use `exec` with `background:true`
- Non-interactive scripts → use `exec` tool
- The process isn't in tmux
- You need to create a new tmux session → use `exec` with `tmux new-session`

## Example Sessions

| Session                 | Purpose                     |
| ----------------------- | --------------------------- |
| `shared`                | Primary interactive session |
| `worker-2` - `worker-8` | Parallel worker sessions    |

## Common Commands

### List Sessions

```bash
tmux list-sessions
tmux ls
```

### Capture Output

```bash
# Last 20 lines of pane
tmux capture-pane -t shared -p | tail -20

# Entire scrollback
tmux capture-pane -t shared -p -S -

# Specific pane in window
tmux capture-pane -t shared:0.0 -p
```

### Send Keys

```bash
# Send text (doesn't press Enter)
tmux send-keys -t shared "hello"

# Send text + Enter
tmux send-keys -t shared "y" Enter

# Send special keys
tmux send-keys -t shared Enter
tmux send-keys -t shared Escape
tmux send-keys -t shared C-c          # Ctrl+C
tmux send-keys -t shared C-d          # Ctrl+D (EOF)
tmux send-keys -t shared C-z          # Ctrl+Z (suspend)
```

### Window/Pane Navigation

```bash
# Select window
tmux select-window -t shared:0

# Select pane
tmux select-pane -t shared:0.1

# List windows
tmux list-windows -t shared
```

### Session Management

```bash
# Create new session
tmux new-session -d -s newsession

# Kill session
tmux kill-session -t sessionname

# Rename session
tmux rename-session -t old new
```

## Sending Input Safely

For interactive TUIs (Claude Code, Codex, etc.), split text and Enter into separate sends to avoid paste/multiline edge cases:

```bash
tmux send-keys -t shared -l -- "Please apply the patch in src/foo.ts"
sleep 0.1
tmux send-keys -t shared Enter
```

## Claude Code Session Patterns

### Check if Session Needs Input

```bash
# Look for prompts
tmux capture-pane -t worker-3 -p | tail -10 | grep -E "❯|Yes.*No|proceed|permission"
```

### Approve Claude Code Prompt

```bash
# Send 'y' and Enter
tmux send-keys -t worker-3 'y' Enter

# Or select numbered option
tmux send-keys -t worker-3 '2' Enter
```

### Check All Sessions Status

```bash
for s in shared worker-2 worker-3 worker-4 worker-5 worker-6 worker-7 worker-8; do
  echo "=== $s ==="
  tmux capture-pane -t $s -p 2>/dev/null | tail -5
done
```

### Send Task to Session

```bash
tmux send-keys -t worker-4 "Fix the bug in auth.js" Enter
```

## Notes

- Use `capture-pane -p` to print to stdout (essential for scripting)
- `-S -` captures entire scrollback history
- Target format: `session:window.pane` (e.g., `shared:0.0`)
- Sessions persist across SSH disconnects
