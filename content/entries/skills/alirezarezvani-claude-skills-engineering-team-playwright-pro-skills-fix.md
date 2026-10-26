---
slug: alirezarezvani-claude-skills-engineering-team-playwright-pro-skills-fix
name: fix
tagline: Fix failing or flaky Playwright tests. Use when user says "fix test",
  "flaky test", "test failing", "debug test", "test broken", "test passes
  sometime
summary: '$ARGUMENTS contains: - A test file path: e2e/login.spec.ts - A test
  name: ""should redirect after login" - A description: "the checkout test fails
  in CI but passes locally"'
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
  subpath: engineering-team/playwright-pro/skills/fix
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 523
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
  path: engineering-team/playwright-pro/skills/fix/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.246Z
  truncated: false
type: agent_skill
skill:
  skill_name: fix
  description: Fix failing or flaky Playwright tests. Use when user says "fix
    test", "flaky test", "test failing", "debug test", "test broken", "test
    passes sometimes", or "intermittent failure".
  folder_path: engineering-team/playwright-pro/skills/fix
  extra_files:
    - flaky-taxonomy.md
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Fix Failing or Flaky Tests
Diagnose and fix a Playwright test that fails or passes intermittently using a systematic taxonomy.

## Input

`$ARGUMENTS` contains:
- A test file path: `e2e/login.spec.ts`
- A test name: ""should redirect after login"`
- A description: `"the checkout test fails in CI but passes locally"`

## Steps

### 1. Reproduce the Failure

Run the test to capture the error:

```bash
npx playwright test <file> --reporter=list
```

If the test passes, it's likely flaky. Run burn-in:

```bash
npx playwright test <file> --repeat-each=10 --reporter=list
```

If it still passes, try with parallel workers:

```bash
npx playwright test --fully-parallel --workers=4 --repeat-each=5
```

### 2. Capture Trace

Run with full tracing:

```bash
npx playwright test <file> --trace=on --retries=0
```

Read the trace output. Use `/debug` to analyze trace files if available.

### 3. Categorize the Failure

Load `flaky-taxonomy.md` from this skill directory.

Every failing test falls into one of four categories:

| Category | Symptom | Diagnosis |
|---|---|---|
| **Timing/Async** | Fails intermittently everywhere | `--repeat-each=20` reproduces locally |
| **Test Isolation** | Fails in suite, passes alone | `--workers=1 --grep "test name"` passes |
| **Environment** | Fails in CI, passes locally | Compare CI vs local screenshots/traces |
| **Infrastructure** | Random, no pattern | Error references browser internals |

### 4. Apply Targeted Fix

**Timing/Async:**
- Replace `waitForTimeout()` with web-first assertions
- Add `await` to missing Playwright calls
- Wait for specific network responses before asserting
- Use `toBeVisible()` before interacting with elements

**Test Isolation:**
- Remove shared mutable state between tests
- Create test data per-test via API or fixtures
- Use unique identifiers (timestamps, random strings) for test data
- Check for database state leaks

**Environment:**
- Match viewport sizes between local and CI
- Account for font rendering differences in screenshots
- Use `docker` locally to match CI environment
- Check for timezone-dependent assertions

**Infrastructure:**
- Increase timeout for slow CI runners
- Add retries in CI config (`retries: 2`)
- Check for browser OOM (reduce parallel workers)
- Ensure browser dependencies are installed

### 5. Verify the Fix

Run the test 10 times to confirm stability:

```bash
npx playwright test <file> --repeat-each=10 --reporter=list
```

All 10 must pass. If any fail, go back to step 3.

### 6. Prevent Recurrence

Suggest:
- Add to CI with `retries: 2` if not already
- Enable `trace: 'on-first-retry'` in config
- Add the fix pattern to project's test conventions doc

## Output

- Root cause category and specific issue
- The fix applied (with diff)
- Verification result (10/10 passes)
- Prevention recommendation
