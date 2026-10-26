---
slug: davepoon-buildwithclaude-plugins-agents-uc-taskmanager-skills-sdd-pipeline
name: sdd-pipeline
tagline: Agent skill from davepoon/buildwithclaude
summary: 직접 사용자 호출용이 아니라 에이전트 내부 참조용입니다.
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
  subpath: plugins/agents-uc-taskmanager/skills/sdd-pipeline
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
  path: plugins/agents-uc-taskmanager/skills/sdd-pipeline/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.577Z
  truncated: false
type: agent_skill
skill:
  skill_name: sdd-pipeline
  description: Agent skill from davepoon/buildwithclaude
  folder_path: plugins/agents-uc-taskmanager/skills/sdd-pipeline
  extra_files:
    - references/agent-flow.md
    - references/context-policy.md
    - references/file-content-schema.md
    - references/shared-prompt-sections.md
    - references/work-activity-log.md
    - references/xml-schema.md
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# sdd-pipeline references
파이프라인 에이전트(specifier, planner, scheduler, builder, verifier, committer)가 참조하는 규칙/스키마 문서 모음.

직접 사용자 호출용이 아니라 에이전트 내부 참조용입니다.

## 포함 문서

| File | Description |
|------|-------------|
| `references/agent-flow.md` | 파이프라인 흐름 정의 |
| `references/file-content-schema.md` | 파일 포맷 스키마 |
| `references/shared-prompt-sections.md` | 공통 규칙 (TASK ID, PLAN.md 7 fields, WORK-LIST) |
| `references/context-policy.md` | 슬라이딩 윈도우 규칙 |
| `references/xml-schema.md` | XML 통신 포맷 |
| `references/work-activity-log.md` | Activity Log 규칙 |
