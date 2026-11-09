---
slug: ljagiello-ctf-skills-ctf-writeup
name: ctf-writeup
tagline: Generates a single standardized submission-style CTF writeup for
  competition handoff and organizer review. Use after solving a CTF challenge to
  docume
summary: "- During an active competition, optimize for speed, clarity, and
  reproducibility - Keep writeups short enough that a teammate or organizer can
  validate the solve quickly - Always produce a submission-style writeup - P..."
categories:
  - security-auth
tags:
  - agent-skills
  - claude-code
  - claude-code-skills
  - codex
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: ljagiello/ctf-skills
  subpath: ctf-writeup
  official_vendor: false
  license: MIT
signals:
  stars: 3664
  last_commit: 2026-11-06T18:44:31Z
  stars_delta_7d: 89
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 3475
    - 3530
    - 3664
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ljagiello/ctf-skills
  path: ctf-writeup/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:09.064Z
  truncated: false
type: agent_skill
skill:
  skill_name: ctf-writeup
  description: Generates a single standardized submission-style CTF writeup for
    competition handoff and organizer review. Use after solving a CTF challenge
    to document the solution steps, tools used, and lessons learned in a
    structured format.
  folder_path: ctf-writeup
  extra_files: []
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ljagiello-ctf-skills
---

# CTF Write-up Generator
Generate a standardized submission-style CTF writeup for a solved challenge.

Default behavior:

- During an active competition, optimize for speed, clarity, and reproducibility
- Keep writeups short enough that a teammate or organizer can validate the solve quickly
- Always produce a `submission`-style writeup
- Prefer one complete solve script from challenge data to final flag

## Workflow

### Step 1: Gather Information

Collect the following from the current session, challenge files, and user input:

1. **Challenge metadata** — name, CTF event, category, difficulty, points, flag format
2. **Solution artifacts** — exploit scripts, payloads, screenshots, command output
3. **Timeline** — key steps taken, dead ends, pivots

```bash
# Scan for exploit scripts and artifacts
find . -name '*.py' -o -name '*.sh' -o -name 'exploit*' -o -name 'solve*' | head -20
# Check for flags in output files
grep -rniE '(flag|ctf|eno|htb|pico)\{' . 2>/dev/null
```

### Step 2: Generate Write-up

Write the writeup file as `writeup.md` (or `writeup-<challenge-name>.md`) using the submission template below.

---

## Templates

### Submission Format

```markdown
---
title: "<Challenge Name>"
ctf: "<CTF Event Name>"
date: YYYY-MM-DD
category: web|pwn|crypto|reverse|forensics|osint|malware|misc|ai-ml
difficulty: easy|medium|hard
points: <number>
flag_format: "flag{...}"
author: "<your name or team>"
---

# <Challenge Name>

## Summary

<1-2 sentences: what the challenge was and the core technique. Keep it direct.>

## Solution

### Step 1: <Action>

<Explain the key observation in 3-8 short lines. Keep it direct.>

\`\`\`python
<one complete solving script from provided challenge data to printing the final flag>
\`\`\`

### Step 2: <Action> (optional)

<Only add this when a second short step genuinely helps readability, such as separating the core observation from final verification.>

### Step 3: <Action> (optional)

<Use only if the challenge really needs it. Keep the total number of steps small.>

## Flag

\`\`\`
flag{example_flag_here}
\`\`\`
```

Guidance:

- Prefer 1-3 short steps total
- Keep code to the smallest complete solving script
- Do not split "recover secret", "derive key", and "decrypt flag" into separate partial snippets
- The script should start from the challenge data and end by printing the flag
- Avoid long background sections
- Avoid dead ends unless they explain a key pivot
- Avoid multiple alternative solves; pick one clean path
- Redact the flag only if the user explicitly asks for redaction

---

## Best Practices Checklist

Before finalizing the writeup, verify:

- [ ] **Metadata complete** — title, CTF, date, category, difficulty, points, author all filled
- [ ] **Flag handling matches request** — keep the real flag unless the user asked for redaction
- [ ] **Reproducible steps** — a reader can follow your writeup and reproduce the solution
- [ ] **Code is runnable** — exploit scripts include all imports, correct variable names, and comments
- [ ] **No sensitive data** — no real credentials, API keys, or private infrastructure details
- [ ] **Length stays concise** — the writeup is short enough for fast review
- [ ] **Tools and versions noted** — mention specific tool versions if behavior depends on them
- [ ] **Proper attribution** — credit teammates, referenced writeups, or tools that were essential
- [ ] **Grammar and formatting** — consistent heading levels, code blocks have language tags

## Quality Guidelines

**DO:**
- Explain just enough for fast verification
- Include one complete solving path, not multiple alternative routes
- Include one complete script that goes all the way to the final flag
- Show actual output (truncated if very long) to prove the approach worked
- Tag code blocks with language (`python`, `bash`, `sql`, etc.)
- Keep the main path front-loaded so a reader can validate it quickly

**DON'T:**
- Copy-paste raw terminal dumps without explanation
- Paste several partial snippets that force the reader to reconstruct the final solve
- Leave placeholder text in the final writeup
- Include irrelevant tangents that don't contribute to the solution
- Assume the reader knows the specific challenge setup

## Challenge

$ARGUMENTS
