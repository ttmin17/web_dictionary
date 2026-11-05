---
slug: jeffallan-claude-skills-skills-code-documenter
name: code-documenter
tagline: Generates, formats, and validates technical documentation — including
  docstrings, OpenAPI/Swagger specs, JSDoc annotations, doc portals, and user
  guid
summary: "- Adding docstrings to functions, classes, and modules - Writing
  OpenAPI/Swagger specs or JSDoc annotations - Creating API documentation for
  REST or GraphQL endpoints - Building documentation sites or developer
  portal..."
categories:
  - other
tags:
  - ai-agents
  - claude
  - claude-code
  - claude-marketplace
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: Jeffallan/claude-skills
  subpath: skills/code-documenter
  official_vendor: false
  license: MIT
signals:
  stars: 12229
  last_commit: 2026-10-30T18:00:19Z
  stars_delta_7d: 167
  stars_growth_pct: 1.4
  trending_score: 169.31
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11852
    - 11937
    - 12062
    - 12229
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Jeffallan/claude-skills
  path: skills/code-documenter/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:51.561Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-documenter
  description: Generates, formats, and validates technical documentation —
    including docstrings, OpenAPI/Swagger specs, JSDoc annotations, doc portals,
    and user guides. Use when adding docstrings to functions or classes,
    creating API documentation, building documentation sites, or writing
    tutorials and user guides. Invoke for OpenAPI/Swagger specs, JSDoc, doc
    portals, getting started guides.
  folder_path: skills/code-documenter
  extra_files:
    - references/api-docs-fastapi-django.md
    - references/api-docs-nestjs-express.md
    - references/coverage-reports.md
    - references/documentation-systems.md
    - references/interactive-api-docs.md
    - references/python-docstrings.md
    - references/typescript-jsdoc.md
    - references/user-guides-tutorials.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jeffallan-claude-skills
---

# Code Documenter
Documentation specialist for inline documentation, API specs, documentation sites, and developer guides.

## When to Use This Skill

- Adding docstrings to functions, classes, and modules
- Writing OpenAPI/Swagger specs or JSDoc annotations
- Creating API documentation for REST or GraphQL endpoints
- Building documentation sites or developer portals
- Writing getting-started guides, tutorials, and user guides

## Core Workflow

1. **Discover** - Ask for format preference and exclusions
2. **Detect** - Identify language and framework
3. **Analyze** - Find undocumented code
4. **Document** - Apply consistent format
5. **Validate** - Test all code examples compile/run:
   - Python: `python -m doctest file.py` for doctest blocks; `pytest --doctest-modules` for module-wide checks
   - TypeScript/JavaScript: `tsc --noEmit` to confirm typed examples compile
   - OpenAPI: validate spec with `npx @redocly/cli lint openapi.yaml`
   - If validation fails: fix examples and re-validate before proceeding to the Report step
6. **Report** - Generate coverage summary

## Quick-Reference Examples

### Google-style Docstring (Python)
```python
def fetch_user(user_id: int, active_only: bool = True) -> dict:
    """Fetch a single user record by ID.

    Args:
        user_id: Unique identifier for the user.
        active_only: When True, raise an error for inactive users.

    Returns:
        A dict containing user fields (id, name, email, created_at).

    Raises:
        ValueError: If user_id is not a positive integer.
        UserNotFoundError: If no matching user exists.
    """
```

### NumPy-style Docstring (Python)
```python
def compute_similarity(vec_a: np.ndarray, vec_b: np.ndarray) -> float:
    """Compute cosine similarity between two vectors.

    Parameters
    ----------
    vec_a : np.ndarray
        First input vector, shape (n,).
    vec_b : np.ndarray
        Second input vector, shape (n,).

    Returns
    -------
    float
        Cosine similarity in the range [-1, 1].

    Raises
    ------
    ValueError
        If vectors have different lengths.
    """
```

### JSDoc (TypeScript)
```typescript
/**
 * Fetches a paginated list of products from the catalog.
 *
 * @param {string} categoryId - The category to filter by.
 * @param {number} [page=1] - Page number (1-indexed).
 * @param {number} [limit=20] - Maximum items per page.
 * @returns {Promise<ProductPage>} Resolves to a page of product records.
 * @throws {NotFoundError} If the category does not exist.
 *
 * @example
 * const page = await fetchProducts('electronics', 2, 10);
 * console.log(page.items);
 */
async function fetchProducts(
  categoryId: string,
  page = 1,
  limit = 20
): Promise<ProductPage> { ... }
```

## Reference Guide

Load detailed guidance based on context:

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Python Docstrings | `references/python-docstrings.md` | Google, NumPy, Sphinx styles |
| TypeScript JSDoc | `references/typescript-jsdoc.md` | JSDoc patterns, TypeScript |
| FastAPI/Django API | `references/api-docs-fastapi-django.md` | Python API documentation |
| NestJS/Express API | `references/api-docs-nestjs-express.md` | Node.js API documentation |
| Coverage Reports | `references/coverage-reports.md` | Generating documentation reports |
| Documentation Systems | `references/documentation-systems.md` | Doc sites, static generators, search, testing |
| Interactive API Docs | `references/interactive-api-docs.md` | OpenAPI 3.1, portals, GraphQL, WebSocket, gRPC, SDKs |
| User Guides & Tutorials | `references/user-guides-tutorials.md` | Getting started, tutorials, troubleshooting, FAQs |

## Constraints

### MUST DO
- Ask for format preference before starting
- Detect framework for correct API doc strategy
- Document all public functions/classes
- Include parameter types and descriptions
- Document exceptions/errors
- Test code examples in documentation
- Generate coverage report

### MUST NOT DO
- Assume docstring format without asking
- Apply wrong API doc strategy for framework
- Write inaccurate or untested documentation
- Skip error documentation
- Document obvious getters/setters verbosely
- Create documentation that's hard to maintain

## Output Formats

Depending on the task, provide:
1. **Code Documentation:** Documented files + coverage report
2. **API Docs:** OpenAPI specs + portal configuration
3. **Doc Sites:** Site configuration + content structure + build instructions
4. **Guides/Tutorials:** Structured markdown with examples + diagrams

## Knowledge Reference

Google/NumPy/Sphinx docstrings, JSDoc, OpenAPI 3.0/3.1, AsyncAPI, gRPC/protobuf, FastAPI, Django, NestJS, Express, GraphQL, Docusaurus, MkDocs, VitePress, Swagger UI, Redoc, Stoplight

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/claude-skills/skills/quality/code-documenter/)
