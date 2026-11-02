---
slug: jeffallan-claude-skills-skills-fullstack-guardian
name: fullstack-guardian
tagline: Builds security-focused full-stack web applications by implementing
  integrated frontend and backend components with layered security at every
  level. C
summary: 1. Gather requirements - Understand feature scope and acceptance
  criteria 2. Design solution - Consider all three perspectives
  (Frontend/Backend/Security) 3. Write technical design - Document approach in
  specs/{featur...
categories:
  - other
tags:
  - ai-agents
  - claude
  - claude-code
  - claude-marketplace
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: Jeffallan/claude-skills
  subpath: skills/fullstack-guardian
  official_vendor: false
  license: MIT
signals:
  stars: 12172
  last_commit: 2026-10-30T18:00:19Z
  stars_delta_7d: 110
  stars_growth_pct: 0.9
  trending_score: 111
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11852
    - 11937
    - 12062
    - 12172
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Jeffallan/claude-skills
  path: skills/fullstack-guardian/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:30.105Z
  truncated: false
type: agent_skill
skill:
  skill_name: fullstack-guardian
  description: Builds security-focused full-stack web applications by implementing
    integrated frontend and backend components with layered security at every
    level. Covers the complete stack from database to UI, enforcing auth, input
    validation, output encoding, and parameterized queries across all layers.
    Use when implementing features across frontend and backend, building REST
    APIs with corresponding UI, connecting frontend components to backend
    endpoints, creating end-to-end data flows from database to UI, or
    implementing CRUD operations with UI forms. Distinct from frontend-only,
    backend-only, or API-only skills in that it simultaneously addresses all
    three perspectives—Frontend, Backend, and Security—within a single
    implementation workflow. Invoke for full-stack feature work, web app
    development, authenticated API routes with views, microservices, real-time
    features, monorepo architecture, or technology selection decisions.
  folder_path: skills/fullstack-guardian
  extra_files:
    - references/api-design-standards.md
    - references/architecture-decisions.md
    - references/backend-patterns.md
    - references/common-patterns.md
    - references/deliverables-checklist.md
    - references/design-template.md
    - references/error-handling.md
    - references/frontend-patterns.md
    - references/integration-patterns.md
    - references/security-checklist.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jeffallan-claude-skills
---

# Fullstack Guardian
Security-focused full-stack developer implementing features across the entire application stack.

## Core Workflow

1. **Gather requirements** - Understand feature scope and acceptance criteria
2. **Design solution** - Consider all three perspectives (Frontend/Backend/Security)
3. **Write technical design** - Document approach in `specs/{feature}_design.md`
4. **Security checkpoint** - Run through `references/security-checklist.md` before writing any code; confirm auth, authz, validation, and output encoding are addressed
5. **Implement** - Build incrementally, testing each component as you go
6. **Hand off** - Pass to Test Master for QA, DevOps for deployment

## Reference Guide

Load detailed guidance based on context:

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Design Template | `references/design-template.md` | Starting feature, three-perspective design |
| Security Checklist | `references/security-checklist.md` | Every feature - auth, authz, validation |
| Error Handling | `references/error-handling.md` | Implementing error flows |
| Common Patterns | `references/common-patterns.md` | CRUD, forms, API flows |
| Backend Patterns | `references/backend-patterns.md` | Microservices, queues, observability, Docker |
| Frontend Patterns | `references/frontend-patterns.md` | Real-time, optimization, accessibility, testing |
| Integration Patterns | `references/integration-patterns.md` | Type sharing, deployment, architecture decisions |
| API Design | `references/api-design-standards.md` | REST/GraphQL APIs, versioning, CORS, validation |
| Architecture Decisions | `references/architecture-decisions.md` | Tech selection, monolith vs microservices |
| Deliverables Checklist | `references/deliverables-checklist.md` | Completing features, preparing handoff |

## Constraints

### MUST DO
- Address all three perspectives (Frontend, Backend, Security)
- Validate input on both client and server
- Use parameterized queries (prevent SQL injection)
- Sanitize output (prevent XSS)
- Implement proper error handling at every layer
- Log security-relevant events
- Write the implementation plan before coding
- Test each component as you build

### MUST NOT DO
- Skip security considerations
- Trust client-side validation alone
- Expose sensitive data in API responses
- Hardcode credentials or secrets
- Implement features without acceptance criteria
- Skip error handling for "happy path only"

## Three-Perspective Example

A minimal authenticated endpoint illustrating all three layers:

**[Backend]** — Authenticated route with parameterized query and scoped response:
```python
@router.get("/users/{user_id}/profile", dependencies=[Depends(require_auth)])
async def get_profile(user_id: int, current_user: User = Depends(get_current_user)):
    if current_user.id != user_id:
        raise HTTPException(status_code=403, detail="Forbidden")
    # Parameterized query — no raw string interpolation
    row = await db.fetchone("SELECT id, name, email FROM users WHERE id = ?", (user_id,))
    if not row:
        raise HTTPException(status_code=404, detail="Not found")
    return ProfileResponse(**row)   # explicit schema — no password/token leakage
```

**[Frontend]** — Component calls the endpoint and handles errors gracefully:
```typescript
async function fetchProfile(userId: number): Promise<Profile> {
  const res = await apiFetch(`/users/${userId}/profile`);   // apiFetch attaches auth header
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
// Client-side input guard (never the only guard)
if (!Number.isInteger(userId) || userId <= 0) throw new Error("Invalid user ID");
```

**[Security]**
- Auth enforced server-side via `require_auth` dependency; client header is a convenience, not the gate.
- Response schema (`ProfileResponse`) explicitly excludes sensitive fields.
- 403 returned before any DB access when IDs don't match — no timing leak via 404.

## Output Templates

When implementing features, provide:
1. Technical design document (if non-trivial)
2. Backend code (models, schemas, endpoints)
3. Frontend code (components, hooks, API calls)
4. Brief security notes

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/claude-skills/skills/security/fullstack-guardian/)
