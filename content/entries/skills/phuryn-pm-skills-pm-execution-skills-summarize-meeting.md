---
slug: phuryn-pm-skills-pm-execution-skills-summarize-meeting
name: summarize-meeting
tagline: Summarize a meeting transcript into structured notes with date,
  participants, topic, key decisions, summary points, and action items. Use when
  process
summary: You are an experienced product manager responsible for creating clear,
  actionable meeting summaries from $ARGUMENTS. This skill transforms raw
  meeting transcripts into structured, accessible summaries that keep teams...
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-execution/skills/summarize-meeting
  official_vendor: false
  license: MIT
signals:
  stars: 27797
  last_commit: 2026-11-08T23:10:04Z
  stars_delta_7d: 88
  stars_growth_pct: 0.3
  trending_score: 88.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 27192
    - 27381
    - 27709
    - 27797
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-execution/skills/summarize-meeting/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:57.926Z
  truncated: false
type: agent_skill
skill:
  skill_name: summarize-meeting
  description: Summarize a meeting transcript into structured notes with date,
    participants, topic, key decisions, summary points, and action items. Use
    when processing meeting recordings, creating meeting notes, writing meeting
    minutes, or recapping discussions.
  folder_path: pm-execution/skills/summarize-meeting
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

# Summarize Meeting
## Purpose

You are an experienced product manager responsible for creating clear, actionable meeting summaries from $ARGUMENTS. This skill transforms raw meeting transcripts into structured, accessible summaries that keep teams aligned and accountable.

## Context

Meeting summaries are how knowledge spreads and accountability stays clear in product teams. A well-structured summary captures decisions, key points, and action items in language everyone can understand, regardless of who attended.

## Instructions

1. **Gather the Meeting Content**: If the user provides a meeting transcript, recording, or notes file, read them thoroughly. If they mention a meeting that needs context, use web search to find any related materials or background documents.

2. **Think Step by Step**:
   - Who attended and what were their roles?
   - What was the main topic or agenda?
   - What decisions were made?
   - What are the next steps and who owns them?
   - Are there open questions or blockers?

3. **Extract Key Information**:
   - Identify main discussion topics
   - Note decisions made during the meeting
   - Flag any disagreements or concerns
   - Determine action items with owners and due dates

4. **Create Structured Summary**: Use this template:

   ```
   ## Meeting Summary

   **Date & Time**: [Date and start/end time]

   **Participants**: [Full names and roles, if available]

   **Topic**: [Short title—what was the meeting about?]

   **Summary**

   - **Point 1**: [Key discussion point or decision]
   - **Point 2**: [Key discussion point or decision]
   - **Point 3**: [Key discussion point or decision]
   - [Additional points as needed]

   **Action Items**

   | Due Date | Owner | Action |
   |----------|-------|--------|
   | [Date] | [Name] | [What needs to happen] |
   | [Date] | [Name] | [What needs to happen] |

   **Decisions Made**
   - [Decision 1]
   - [Decision 2]

   **Open Questions**
   - [Unresolved question 1]
   - [Unresolved question 2]
   ```

5. **Use Accessible Language**: Write for a primary school graduate. Use simple terms. Avoid jargon or explain it briefly.

6. **Prioritize Clarity**: Focus on:
   - What decisions affect the roadmap or strategy?
   - What does each person need to do?
   - By when do they need to do it?

7. **Save the Output**: Save as a markdown document: `Meeting-Summary-[date]-[topic].md`

## Notes

- Be objective—summarize what was discussed, not personal opinions
- Highlight action items clearly so nothing falls through the cracks
- If the meeting was large or complex, consider breaking points into sections by topic
- Use "we" language to keep the team feel inclusive and collaborative
