---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-proposal-drafter
name: proposal-drafter
tagline: "Draft a tailored freelance proposal or platform profile bio from a
  real job posting/brief and the freelancer's actual background. Use when
  responding "
summary: "Ask for these if not already provided — never fabricate them: - The
  job posting or brief (or, for a profile bio, the platform and target client
  type) - The freelancer's real skills, tools, and years of relevant experi..."
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/all-skills/skills/proposal-drafter
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/proposal-drafter/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.593Z
  truncated: false
type: agent_skill
skill:
  skill_name: proposal-drafter
  description: Draft a tailored freelance proposal or platform profile bio from a
    real job posting/brief and the freelancer's actual background. Use when
    responding to a listing on Contra/Upwork/etc, or writing/updating a
    freelance profile. Never invents experience, clients, or credentials that
    weren't provided.
  folder_path: plugins/all-skills/skills/proposal-drafter
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Proposal Drafter
Turns a job posting (or "write my profile bio") plus the freelancer's real background into a proposal or bio that sounds like it was written for this one client, not copy-pasted.

## Required inputs before drafting

Ask for these if not already provided — never fabricate them:
- The job posting or brief (or, for a profile bio, the platform and target client type)
- The freelancer's real skills, tools, and years of relevant experience
- 1-3 real past projects or outcomes (even informal ones — side projects count if true)
- Any real portfolio links

If any of this is missing, ask before writing. A confident-sounding proposal built on invented credentials is a liability, not an asset.

## Structure for a proposal (platform message, ~100-150 words)

1. **Opening line** — restate the client's actual problem in your own words, proving you read the brief. Never open with "I am a passionate developer with X years of experience."
2. **2-3 concrete connections** — specific ways the freelancer's real background maps to *this* ask, not a resume dump.
3. **One relevant proof point** — a real past project/outcome that's the closest match, in one sentence.
4. **Clear next step** — propose a concrete first action (a question, a quick call, a scoped first milestone), not "let me know if interested."

## Structure for a profile bio (longer, ~150-300 words)

1. **First line = the outcome you deliver**, not a job title. ("I build automation that saves technical teams hours a week" beats "Full-stack developer.")
2. **Skill areas grouped by client-recognizable outcome**, not tech jargon dumps.
3. **1-2 real project highlights** with a concrete result if known (time saved, bug fixed, feature shipped) — omit the metric if it isn't real, don't estimate one.
4. **Close with working style** — availability, communication style, what kind of projects are the best fit.

## Tone rules

- Specific beats clever. Cut any sentence that could apply to any freelancer.
- No unverifiable superlatives ("best-in-class", "world-class") — let the proof points carry the claim.
- Active voice, short sentences. This is being read by someone deciding in under 30 seconds.

## Part of a larger workflow

This skill is one piece of a 5-skill freelance workflow (proposal → scope-of-work → client update → invoice summary → project handoff), all built around the same rule: if the input doesn't have it, the output doesn't claim it. The other 4 are available as a paid bundle: [Freelance Toolkit for Claude Code](https://ribster014.gumroad.com/l/voqthx).
