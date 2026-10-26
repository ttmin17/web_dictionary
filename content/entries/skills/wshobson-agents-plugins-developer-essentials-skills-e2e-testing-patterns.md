---
slug: wshobson-agents-plugins-developer-essentials-skills-e2e-testing-patterns
name: e2e-testing-patterns
tagline: Master end-to-end testing with Playwright and Cypress to build reliable
  test suites that catch bugs, improve confidence, and enable fast deployment. U
summary: "- Implementing end-to-end test automation - Debugging flaky or
  unreliable tests - Testing critical user workflows - Setting up CI/CD test
  pipelines - Testing across multiple browsers - Validating accessibility
  require..."
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/developer-essentials/skills/e2e-testing-patterns
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/developer-essentials/skills/e2e-testing-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.194Z
  truncated: false
type: agent_skill
skill:
  skill_name: e2e-testing-patterns
  description: Master end-to-end testing with Playwright and Cypress to build
    reliable test suites that catch bugs, improve confidence, and enable fast
    deployment. Use when implementing E2E tests, debugging flaky tests, or
    establishing testing standards.
  folder_path: plugins/developer-essentials/skills/e2e-testing-patterns
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# E2E Testing Patterns
Build reliable, fast, and maintainable end-to-end test suites that provide confidence to ship code quickly and catch regressions before users do.

## When to Use This Skill

- Implementing end-to-end test automation
- Debugging flaky or unreliable tests
- Testing critical user workflows
- Setting up CI/CD test pipelines
- Testing across multiple browsers
- Validating accessibility requirements
- Testing responsive designs
- Establishing E2E testing standards

## Core Concepts

### 1. E2E Testing Fundamentals

**What to Test with E2E:**

- Critical user journeys (login, checkout, signup)
- Complex interactions (drag-and-drop, multi-step forms)
- Cross-browser compatibility
- Real API integration
- Authentication flows

**What NOT to Test with E2E:**

- Unit-level logic (use unit tests)
- API contracts (use integration tests)
- Edge cases (too slow)
- Internal implementation details

### 2. Test Philosophy

**The Testing Pyramid:**

```
        /\
       /E2E\         ← Few, focused on critical paths
      /─────\
     /Integr\        ← More, test component interactions
    /────────\
   /Unit Tests\      ← Many, fast, isolated
  /────────────\
```

**Best Practices:**

- Test user behavior, not implementation
- Keep tests independent
- Make tests deterministic
- Optimize for speed
- Use data-testid, not CSS selectors

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Use Data Attributes**: `data-testid` or `data-cy` for stable selectors
2. **Avoid Brittle Selectors**: Don't rely on CSS classes or DOM structure
3. **Test User Behavior**: Click, type, see - not implementation details
4. **Keep Tests Independent**: Each test should run in isolation
5. **Clean Up Test Data**: Create and destroy test data in each test
6. **Use Page Objects**: Encapsulate page logic
7. **Meaningful Assertions**: Check actual user-visible behavior
8. **Optimize for Speed**: Mock when possible, parallel execution

```typescript
// ❌ Bad selectors
cy.get(".btn.btn-primary.submit-button").click();
cy.get("div > form > div:nth-child(2) > input").type("text");

// ✅ Good selectors (findBy* commands come from @testing-library/cypress;
// add `import "@testing-library/cypress/add-commands";` to your Cypress support file)
cy.findByRole("button", { name: "Submit" }).click();
cy.findByLabelText("Email address").type("user@example.com");
cy.get('[data-testid="email-input"]').type("user@example.com");
```

## Common Pitfalls

- **Flaky Tests**: Use proper waits, not fixed timeouts
- **Slow Tests**: Mock external APIs, use parallel execution
- **Over-Testing**: Don't test every edge case with E2E
- **Coupled Tests**: Tests should not depend on each other
- **Poor Selectors**: Avoid CSS classes and nth-child
- **No Cleanup**: Clean up test data after each test
- **Testing Implementation**: Test user behavior, not internals

## Debugging Failing Tests

```typescript
// Playwright debugging
// 1. Run in headed mode
npx playwright test --headed

// 2. Run in debug mode
npx playwright test --debug

// 3. Use trace viewer (record with `use: { trace: 'on-first-retry' }` in the config)
npx playwright show-trace path/to/trace.zip
await page.screenshot({ path: 'screenshot.png' });

// 4. Add test.step for better reporting
test('checkout flow', async ({ page }) => {
    await test.step('Add item to cart', async () => {
        await page.goto('/products');
        await page.getByRole('button', { name: 'Add to Cart' }).click();
    });

    await test.step('Proceed to checkout', async () => {
        await page.goto('/cart');
        await page.getByRole('button', { name: 'Checkout' }).click();
    });
});

// 5. Inspect page state
await page.pause();  // Pauses execution, opens inspector
```
