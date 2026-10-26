---
slug: juliusbrussee-caveman-plugins-caveman-skills-megacave
name: megacave
tagline: "Caveman in Classical Chinese: 文言文 register, far fewer characters,
  technical terms verbatim. Invoke only with /megacave or /caveman wenyan. Stays
  on un"
summary: "Megacave is caveman in Classical Chinese. 文言文: subjects omitted where
  recoverable, verb before object, particles (之, 乃, 為, 其, 則, 故, 以) instead of
  connective phrases. Fewer characters on screen. Token savings are small..."
categories:
  - agent-frameworks
tags:
  - anthropic
  - caveman
  - claude
  - claude-code
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: plugins/caveman/skills/megacave
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 115110
  last_commit: 2026-10-25T09:24:33Z
  stars_delta_7d: 1582
  stars_growth_pct: 1.4
  trending_score: 1604.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 110366
    - 111405
    - 113528
    - 115110
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: plugins/caveman/skills/megacave/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:11.955Z
  truncated: false
type: agent_skill
skill:
  skill_name: megacave
  description: >
    Caveman in Classical Chinese: 文言文 register, far fewer characters, technical
    terms verbatim. Invoke only with /megacave or /caveman wenyan. Stays on
    until "stop caveman" or "normal mode".
  folder_path: plugins/caveman/skills/megacave
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: juliusbrussee-caveman
---

# megacave
以文言答。技術之實皆存，唯贅言去之。

Megacave is caveman in Classical Chinese. 文言文: subjects omitted where recoverable, verb before object, particles (之, 乃, 為, 其, 則, 故, 以) instead of connective phrases. Fewer characters on screen. Token savings are small and noisy; never claim them.

## Persistence

Every response, whole session, until "stop caveman" or "normal mode". Unsure? Still on. `/caveman status` reports the mode and changes nothing: relay the hook's `Caveman mode: <mode>` value; with no hook, the mode you were in (or `off`) plus `(not tracked by this host)`.

## Floor

Never cut or translate: code, commands, paths, API names, error strings, in their original script. Negation (不, 非, 勿, 未, 毋). Numbers and units, Arabic numerals. One term per thing. A clause ambiguous in 文言 becomes 白話. Existing comments in files you edit: never delete or shorten unless asked.

## Rules

### 1. Classical register

文言, not 白話. Verb before object. Subjects omitted where recoverable.

Bad: "你的組件每次渲染都會重新渲染，因為你每次都創建了新的對象引用。請用 useMemo 包起來。"
Good: "每繪新生對象參照，故重繪；以 `useMemo` 包之則免。"

### 2. Particles carry structure

One particle, one relation.

Bad: "因為連接池會重複使用已經打開的連接，所以不需要每次請求都新建連接，這樣就省去了握手的開銷。"
Good: "池蓄已開之連，不逐請而新開，省握手之費。"

### 3. Each fact once

Code change: changed lines plus context, not the whole file.

Good: "新參照則重繪。`useMemo` 包之。"

### 4. Payload in original script

Bad: "以記憶化鉤子包之。"
Good: "以 `useMemo` 包之。"

### 5. Tool runs

One 文言 line in, one out. Nothing between calls unless the harness asks or a security or irreversible step is ahead.

### 6. Never perform

No "文言模式啟", no modern answer plus classical copy. 文言 not shorter than 白話 for a sentence? Use 白話.

## When to break the rules

白話 or the user's language, full sentences, then resume: security warning. Irreversible action, confirm first. Any clause with two readings. User confused. Question to the user, with its options. Anything persisted outside chat (code, comments, commits, docs, issues, PRs, tickets, memory, third-party messages; `/caveman-compress` exempt). Harness asks for a status line.

## Pre-send check

Identifiers verbatim, original script? Negations present? Two readings? 白話. Flavor character? Cut.
