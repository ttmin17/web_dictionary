---
slug: epoko77-ai-im-not-ai-skills-humanize-redo
name: humanize-redo
tagline: Agent skill from epoko77-ai/im-not-ai
summary: Agent skill from epoko77-ai/im-not-ai
categories:
  - other
tags:
  - agent-skills
  - ai-detection
  - claude
  - claude-code
status: active
quality_percentile: 52
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: epoko77-ai/im-not-ai
  subpath: skills/humanize-redo
  official_vendor: false
  license: MIT
signals:
  stars: 6256
  last_commit: 2026-10-12T09:57:11Z
  stars_delta_7d: 209
  stars_growth_pct: 3.5
  trending_score: 216.22
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5971
    - 6047
    - 6256
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: epoko77-ai/im-not-ai
  path: skills/humanize-redo/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:49.222Z
  truncated: false
type: agent_skill
skill:
  skill_name: humanize-redo
  description: Agent skill from epoko77-ai/im-not-ai
  folder_path: skills/humanize-redo
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: epoko77-ai-im-not-ai
---

# /humanize-redo — 2차 윤문 / 부분 재실행
cwd 기준 가장 최근 `_workspace/{run_id}/`를 찾아 `humanize-korean` 스킬의 strict 윤문(Phase B)부터 재호출한다.

## 사용자 지시
$ARGUMENTS

## 동작
1. `Glob`으로 `_workspace/YYYY-MM-DD-*/final.md`(또는 `01_input.txt`)를 매칭해 최신 `run_id` 식별. 없으면 "이전 실행이 없습니다. `/humanize`로 시작하세요" 안내 후 종료.
2. 사용자 지시 파싱:
   - **카테고리 지정**("번역투만", "관용구만", "이모지만") → 해당 카테고리 finding만 재윤문
   - **문단 지정**("이 문단만", "두 번째 문단만") → 해당 범위 finding만
   - **강도 조정**("강도 낮춰"·"보수적으로" → S1만, "강도 높여" → S1+S2+S3)
   - **롤백 요청**("이 변경 되돌려줘") → 해당 edit을 `content-fidelity-auditor` 롤백으로 처리
   - 지시 없음·"2차 윤문해줘" → 잔존 finding 전체 대상 round 2
3. `korean-style-rewriter` 재호출 입력: 기존 `02_detection.json` 또는 `05_naturalness_review.json`의 잔존 finding + 사용자 지시를 `target_filter`로 전달.
4. 산출물은 `03_rewrite_v2.md`(또는 v3)로 버전 분리. 이전 `final.md`는 `final_prev.md`로 백업.
5. strict Phase C 병렬 검증 → Phase D 최종 출력(변경 비교 표 + 신규 등급).

## 루프 한도
최대 round 3. 그 이상 미해결이면 `hold_and_report`로 사람 검토 권고.

## 참고
- 풀 파이프라인 신규 실행은 `/humanize`.
- 분류 체계: `humanize-korean/references/ai-tell-taxonomy.md`
