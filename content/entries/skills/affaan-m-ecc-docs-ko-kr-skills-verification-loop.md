---
slug: affaan-m-ecc-docs-ko-kr-skills-verification-loop
name: verification-loop
tagline: Claude Code 세션을 위한 포괄적인 검증 시스템.
summary: "다음 상황에서 이 스킬을 호출하세요: - 기능 또는 주요 코드 변경을 완료한 후 - PR을 생성하기 전 - 품질 게이트가
  통과하는지 확인하고 싶을 때 - 리팩터링 후"
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: docs/ko-KR/skills/verification-loop
  official_vendor: false
  license: MIT
signals:
  stars: 297571
  last_commit: 2026-11-02T04:56:08Z
  stars_delta_7d: 8499
  stars_growth_pct: 2.9
  trending_score: 8748.88
  velocity_source: snapshot_delta
  sparkline_4w:
    - 278380
    - 283494
    - 289072
    - 297571
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: docs/ko-KR/skills/verification-loop/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:19.738Z
  truncated: false
type: agent_skill
skill:
  skill_name: verification-loop
  description: Claude Code 세션을 위한 포괄적인 검증 시스템.
  folder_path: docs/ko-KR/skills/verification-loop
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# 검증 루프 스킬
Claude Code 세션을 위한 포괄적인 검증 시스템.

## 사용 시점

다음 상황에서 이 스킬을 호출하세요:
- 기능 또는 주요 코드 변경을 완료한 후
- PR을 생성하기 전
- 품질 게이트가 통과하는지 확인하고 싶을 때
- 리팩터링 후

## 검증 단계

### 단계 1: 빌드 검증
```bash
# Check if project builds
npm run build 2>&1 | tail -20
# OR
pnpm build 2>&1 | tail -20
```

빌드가 실패하면 계속하기 전에 중단하고 수정합니다.

### 단계 2: 타입 검사
```bash
# TypeScript projects
npx tsc --noEmit 2>&1 | head -30

# Python projects
pyright . 2>&1 | head -30
```

모든 타입 에러를 보고합니다. 중요한 것은 계속하기 전에 수정합니다.

### 단계 3: 린트 검사
```bash
# JavaScript/TypeScript
npm run lint 2>&1 | head -30

# Python
ruff check . 2>&1 | head -30
```

### 단계 4: 테스트 스위트
```bash
# Run tests with coverage
npm run test -- --coverage 2>&1 | tail -50

# Check coverage threshold
# Target: 80% minimum
```

보고 항목:
- 전체 테스트: X
- 통과: X
- 실패: X
- 커버리지: X%

### 단계 5: 보안 스캔
```bash
# Check for secrets
grep -rn "sk-" --include="*.ts" --include="*.js" . 2>/dev/null | head -10
grep -rn "api_key" --include="*.ts" --include="*.js" . 2>/dev/null | head -10

# Check for console.log
grep -rn "console.log" --include="*.ts" --include="*.tsx" src/ 2>/dev/null | head -10
```

### 단계 6: Diff 리뷰
```bash
# Show what changed
git diff --stat
git diff --name-only
git diff --cached --name-only
```

각 변경된 파일에서 다음을 검토합니다:
- 의도하지 않은 변경
- 누락된 에러 처리
- 잠재적 엣지 케이스

## 출력 형식

모든 단계를 실행한 후 검증 보고서를 생성합니다:

```
VERIFICATION REPORT
==================

Build:     [PASS/FAIL]
Types:     [PASS/FAIL] (X errors)
Lint:      [PASS/FAIL] (X warnings)
Tests:     [PASS/FAIL] (X/Y passed, Z% coverage)
Security:  [PASS/FAIL] (X issues)
Diff:      [X files changed]

Overall:   [READY/NOT READY] for PR

Issues to Fix:
1. ...
2. ...
```

## 연속 모드

긴 세션에서는 15분마다 또는 주요 변경 후에 검증을 실행합니다:

```markdown
Set a mental checkpoint:
- After completing each function
- After finishing a component
- Before moving to next task

Run: /verify
```

## Hook과의 통합

이 스킬은 PostToolUse Hook을 보완하지만 더 깊은 검증을 제공합니다.
Hook은 즉시 문제를 포착하고, 이 스킬은 포괄적인 검토를 제공합니다.
