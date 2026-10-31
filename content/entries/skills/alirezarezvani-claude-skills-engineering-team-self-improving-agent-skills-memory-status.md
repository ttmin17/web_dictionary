---
slug: alirezarezvani-claude-skills-engineering-team-self-improving-agent-skills-memory-status
name: memory-status
tagline: Memory health dashboard showing line counts, topic files, capacity,
  stale entries, and recommendations. Use when the user runs /si:memory-status
  or as
summary: "Output: 📊 Memory: {{n}}/200 lines | {{count}} rules | {{statusemoji}}
  {{statusword}}"
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: engineering-team/self-improving-agent/skills/memory-status
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 1198
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: engineering-team/self-improving-agent/skills/memory-status/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.247Z
  truncated: false
type: agent_skill
skill:
  skill_name: memory-status
  description: Memory health dashboard showing line counts, topic files, capacity,
    stale entries, and recommendations. Use when the user runs /si:memory-status
    or asks how full or healthy the agent memory is.
  folder_path: engineering-team/self-improving-agent/skills/memory-status
  extra_files: []
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# /si:memory-status — Memory Health Dashboard
Quick overview of your project's memory state across all memory systems.

## Usage

```
/si:memory-status                    # Full dashboard
/si:memory-status --brief            # One-line summary
```

## What It Reports

### Step 1: Locate all memory files

```bash
# Auto-memory directory
MEMORY_DIR="$HOME/.claude/projects/$(pwd | sed 's|/|%2F|g; s|%2F|/|; s|^/||')/memory"

# Count lines in MEMORY.md
wc -l "$MEMORY_DIR/MEMORY.md" 2>/dev/null || echo "0"

# List topic files
ls "$MEMORY_DIR/"*.md 2>/dev/null | grep -v MEMORY.md

# CLAUDE.md
wc -l ./CLAUDE.md 2>/dev/null || echo "0"
wc -l ~/.claude/CLAUDE.md 2>/dev/null || echo "0"

# Rules directory
ls .claude/rules/*.md 2>/dev/null | wc -l
```

### Step 2: Analyze capacity

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|----------|
| MEMORY.md lines | < 120 | 120-180 | > 180 |
| CLAUDE.md lines | < 150 | 150-200 | > 200 |
| Topic files | 0-3 | 4-6 | > 6 |
| Stale entries | 0 | 1-3 | > 3 |

### Step 3: Quick stale check

For each MEMORY.md entry that references a file path:
```bash
# Verify referenced files still exist
grep -oE '[a-zA-Z0-9_/.-]+\.(ts|js|py|md|json|yaml|yml)' "$MEMORY_DIR/MEMORY.md" | while read f; do
  [ ! -f "$f" ] && echo "STALE: $f"
done
```

### Step 4: Output

```
📊 Memory Status

  Auto-Memory (MEMORY.md):
    Lines:        {{n}}/200 ({{bar}}) {{emoji}}
    Topic files:  {{count}} ({{names}})
    Last updated: {{date}}

  Project Rules:
    CLAUDE.md:    {{n}} lines
    Rules:        {{count}} files in .claude/rules/
    User global:  {{n}} lines (~/.claude/CLAUDE.md)

  Health:
    Capacity:     {{healthy/warning/critical}}
    Stale refs:   {{count}} (files no longer exist)
    Duplicates:   {{count}} (entries repeated across files)

  {{if recommendations}}
  💡 Recommendations:
    - {{recommendation}}
  {{endif}}
```

### Brief mode

```
/si:memory-status --brief
```

Output: `📊 Memory: {{n}}/200 lines | {{count}} rules | {{status_emoji}} {{status_word}}`

## Interpretation

- **Green (< 60%)**: Plenty of room. Auto-memory is working well.
- **Yellow (60-90%)**: Getting full. Consider running `/si:memory-review` to promote or clean up.
- **Red (> 90%)**: Near capacity. Auto-memory may start dropping older entries. Run `/si:memory-review` now.

## Tips

- Run `/si:memory-status --brief` as a quick check anytime
- If capacity is yellow+, run `/si:memory-review` to identify promotion candidates
- Stale entries waste space — delete references to files that no longer exist
- Topic files are fine — Claude creates them to keep MEMORY.md under 200 lines
