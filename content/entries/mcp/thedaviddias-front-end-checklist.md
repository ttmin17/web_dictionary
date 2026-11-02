---
slug: thedaviddias-front-end-checklist
name: Front-End-Checklist
tagline: 🗂 The essential checklist for modern web development, for humans and AI agents
summary: The essential checklist for modern web development, for humans and AI agents
categories:
  - coding-agents
tags:
  - ai-agent
  - ai-agents
  - checklist
  - css
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: thedaviddias/Front-End-Checklist
  official_vendor: false
  license: MIT
signals:
  stars: 74630
  last_commit: 2026-10-31T05:44:22Z
  stars_delta_7d: 65
  stars_growth_pct: 0.1
  trending_score: 65.06
  rank_current: 31
  rank_delta: 1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74506
    - 74565
    - 74630
language: en
needs_keys: false
prerequisites:
  - Network access (HTTP MCP server)
readme_source:
  repo: thedaviddias/Front-End-Checklist
  path: README.md
  branch: main
  fetched_at: 2026-11-02T09:06:54.079Z
  truncated: true
type: mcp_server
launch:
  transport: http
  remote_url: https://mcp.frontendchecklist.io
  args: []
  env_vars: []
  confidence: manifest
---

<div align="center">

# Front-End Checklist

**The essential checklist for modern web development, for humans and AI agents**

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/thedaviddias/Front-End-Checklist/main/LICENSE)
[![Backers on Open Collective](https://opencollective.com/front-end-checklist/backers/badge.svg)](#backers)
[![Support via Open Collective](https://opencollective.com/front-end-checklist/sponsors/badge.svg)](https://opencollective.com/front-end-checklist)
[![ProductHunt](https://img.shields.io/badge/ProductHunt-Launch-orange)](https://www.producthunt.com/products/front-end-checklist)
[![MCP](https://img.shields.io/badge/MCP-Ready-6366f1)](https://modelcontextprotocol.io)

</div>

---

Front-End Checklist is the open-source front-end quality system for humans and AI agents. It turns front-end best practices into a practical review workflow you can browse on the web, run through with MCP-compatible tools, or work through directly in this README.

---

## Introduction

- Website: [frontendchecklist.io](https://frontendchecklist.io)
- Rules: [frontendchecklist.io/rules](https://frontendchecklist.io/rules)
- MCP server: [mcp.frontendchecklist.io](https://mcp.frontendchecklist.io)

Companion project: [UX Patterns for Devs](https://uxpatterns.dev/) helps developers choose the right UI pattern before using Front-End Checklist to verify implementation quality.

> [!IMPORTANT]
> Use the website for browsing and filtering, the MCP server for agent workflows, and this README when you want the checklist in one place.

## What you get

- `386` English rules across `11` active categories
- `11` MCP tools exposed by the hosted server
- Rule pages with explanations, remediation guidance, and verification steps

## How to use this checklist

1. Start with the category navigator below and jump straight to the part of the checklist you need.
2. Work through the checkbox items that apply to your project, audit, or pull request.
3. Open the linked rule pages when you need the full guidance, examples, verification steps, and AI prompts.
4. Use [frontendchecklist.io](https://frontendchecklist.io) for interactive browsing, and [mcp.frontendchecklist.io](https://mcp.frontendchecklist.io) when you want agents to use the same rule corpus directly.

## Priority legend

- ![Critical][critical_img] means site-breaking, compliance-sensitive, or security-sensitive issues that should be fixed first.
- ![High][high_img] means issues with major impact on user experience, accessibility, performance, or discoverability.
- ![Medium][medium_img] means strong best practices that should be part of normal frontend quality review.
- ![Low][low_img] means useful improvements that are situational or lower urgency.

## Choose your workflow

### Browse online

- Explore all rules at [frontendchecklist.io/rules](https://frontendchecklist.io/rules)
- Use curated checklists at [frontendchecklist.io/checklists](https://frontendchecklist.io/checklists)
- Open a category page for focused audits and implementation guidance

### Choose the right pattern first

Front-End Checklist helps you review implementation quality. If you are still deciding what interface to build, use [UX Patterns for Devs](https://uxpatterns.dev/) to compare common UI patterns, understand tradeoffs, and find practical guidance for forms, navigation, data display, feedback states, authentication, and AI interfaces.

### Contribute to the checklist

- Install dependencies: `pnpm install`
- Run local development: `pnpm dev`
- Validate structure: `pnpm validate:rule-structure`
- Score the corpus: `pnpm score:rules`
- Regenerate derived artifacts: `pnpm generate:skills` and `pnpm generate:readme`

## Use with MCP

Connect an MCP-capable agent to Front-End Checklist for frontend code review, structured rule lookup, audits, and remediation workflows across React, Next.js, HTML, CSS, JavaScript, accessibility, performance, SEO, security, images, privacy, i18n, and testing.

> [!TIP]
> Best first use: point an MCP-capable agent at a real component, page, or public URL and explicitly ask it to use the Front-End Checklist MCP for the highest-confidence frontend findings first. Some clients discover installed MCP tools lazily, so naming the server in the prompt helps.

- Public endpoint: [mcp.frontendchecklist.io](https://mcp.frontendchecklist.io)
- Public docs: [frontendchecklist.io/mcp](https://frontendchecklist.io/mcp)
- Local/editor integration: stdio server at [`packages/mcp/src/cli.ts`](https://github.com/thedaviddias/Front-End-Checklist/blob/main/packages/mcp/src/cli.ts)

What you can do:

- Review pasted code or file contents against the checklist
- Audit a live public URL
- Fetch a specific rule with remediation guidance
- Search rules by keyword, category, or priority
- Get a workflow or quick reference for a focused audit

Agent usage guidance:

- Use `review_code` first for pasted HTML, CSS, JavaScript, React, or Next.js code
- Use `search_rules` before making frontend accessibility, performance, SEO, security, or image recommendations
- Use `get_workflow` or `get_checklist_rules` for launch, accessibility, SEO, security, and performance audits
- Use `audit_url` for public `https://` pages

Example prompts:

- `Use the Front-End Checklist MCP to review this React component and report the highest-confidence findings first.`
- `Use the Front-End Checklist MCP to audit https://example.com for accessibility, performance, and SEO issues.`
- `Use the Front-End Checklist MCP to explain the canonical URL rule and suggest a fix with code examples.`

## Use with skills

Install Front-End Checklist skills when you want reusable audit workflows or focused rule-specific guidance in tools that support them.

Install:

```bash
npx skills add frontendchecklist/skills
npx skills add frontendchecklist/skills --skill https
```

Useful entry points:

- Global audit entry point: [`skills/frontend-checklist-global/SKILL.md`](https://github.com/thedaviddias/Front-End-Checklist/blob/main/skills/frontend-checklist-global/SKILL.md)
- Focused rule skill example: [`skills/https/SKILL.md`](https://github.com/thedaviddias/Front-End-Checklist/blob/main/skills/https/SKILL.md)

Example uses:

- Run a broad frontend audit against the full Front-End Checklist corpus
- Use a focused skill like `https` for security review on one concern
- Use rule-specific skills to explain why a rule matters and how to fix it

## Checklist

<!-- rules-catalog:start -->

<!-- Generated from 386 English rules. This block is maintained by `pnpm generate:readme`. -->

### Jump to a category

- [HTML](#html) (25) · [Open on the site](https://frontendchecklist.io/rules/html)
- [CSS](#css) (32) · [Open on the site](https://frontendchecklist.io/rules/css)
- [JavaScript](#javascript) (26) · [Open on the site](https://frontendchecklist.io/rules/javascript)
- [Performance](#performance) (44) · [Open on the site](https://frontendchecklist.io/rules/performance)
- [Accessibility](#accessibility) (95) · [Open on the site](https://frontendchecklist.io/rules/accessibility)
- [SEO](#seo) (94) · [Open on the site](https://frontendchecklist.io/rules/seo)
- [Security](#security) (22) · [Open on the site](https://frontendchecklist.io/rules/security)
- [Images](#images) (25) · [Open on the site](https://frontendchecklist.io/rules/images)
- [Testing](#testing) (13) · [Open on the site](https://frontendchecklist.io/rules/testing)
- [Privacy](#privacy) (5) · [Open on the site](https://frontendchecklist.io/rules/privacy)
- [Internationalization](#internationalization) (5) · [Open on the site](https://frontendchecklist.io/rules/i18n)

### Categories

### HTML

*25 rules. Semantic markup, metadata, forms, and document structure rules.*

[Browse HTML on frontendchecklist.io](https://frontendchecklist.io/rules/html)

- [ ] [Add Subresource Integrity to external scripts](https://frontendchecklist.io/rules/html/subresource-integrity) ![High][high_img]: Use Subresource Integrity (SRI) hash attributes on external scripts and stylesheets loaded from CDNs to ensure the content hasn't been tampered with.
- [ ] [Add thumbnail images to videos](https://frontendchecklist.io/rules/html/video-thumbnail) ![Medium][medium_img]: HTML5 video elements should have a poster attribute providing a thumbnail image displayed before the video loads or is played.
- [ ] [Create a custom 404 error page](https://frontendchecklist.io/rules/html/404-page) ![Medium][medium_img]: A custom 404 error page is designed with helpful navigation options for lost users.
- [ ] [Declare UTF-8 character encoding](https://frontendchecklist.io/rules/html/charset) ![Critical][critical_img]: The charset (UTF-8) is declared correctly as the first element in the head.
- [ ] [Ensure all IDs are unique](https://frontendchecklist.io/rules/html/unique-id) ![High][high_img]: All ID attributes are unique within the document. No duplicate IDs exist on the page.
- [ ] [Implement accessible breadcrumb navigation](https://frontendchecklist.io/rules/html/breadcrumb-navigation) ![Medium][medium_img]: Breadcrumb navigation is implemented with proper semantic markup and ARIA attributes for accessibility.
- [ ] [Implement favicons for all devices](https://frontendchecklist.io/rules/html/favicons) ![Medium][medium_img]: All necessary favicon formats are implemented for browsers, devices, and PWA support.
- [ ] [Link a Web App Manifest for installability](https://frontendchecklist.io/rules/html/web-app-manifest) ![Medium][medium_img]: Include a Web App Manifest (manifest.json) linked from the HTML head to enable Progressive Web App features like home screen installation, standalone display, and splash screens.
- [ ] [Load scripts with defer, async, or type=module](https://frontendchecklist.io/rules/html/defer-async) ![High][high_img]: Prevent JavaScript from blocking HTML parsing by using defer, async, or type=module attributes on script tags so the browser can continue building the DOM while scripts download.
- [ ] [Make custom elements and Web Components accessible](https://frontendchecklist.io/rules/html/custom-element-accessibility) ![Medium][medium_img]: Custom elements must implement ARIA reflection via ElementInternals, keyboard interaction, and form association so that screen readers and assistive technologies can interpret them correctly.
- [ ] [Make file uploads accessible](https://frontendchecklist.io/rules/html/file-upload-accessibility) ![Medium][medium_img]: File upload components are accessible with proper labels, file type restrictions, and progress feedback.
- [ ] [Make pagination accessible](https://frontendchecklist.io/rules/html/pagination-accessibility) ![Medium][medium_img]: Pagination controls are accessible with proper ARIA labels, keyboard navigation, and current page indication.
- [ ] [Make search inputs accessible](https://frontendchecklist.io/rules/html/search-input) ![Medium][medium_img]: Search functionality is accessible with proper input type, label, role, and autocomplete suggestions.
- [ ] [Make videos accessible with captions](https://frontendchecklist.io/rules/html/video-accessibility) ![High][high_img]: Videos have captions, audio descriptions, transcripts, pause controls, and avoid autoplay for users with hearing, vision, or cognitive impairments.
- [ ] [Meet PWA installability criteria](https://frontendchecklist.io/rules/html/pwa-installability) ![Low][low_img]: The web app satisfies the browser's minimum PWA installability requirements: a valid web app manifest, a registered service worker, HTTPS, and maskable icons.
- [ ] [Provide noscript fallback content](https://frontendchecklist.io/rules/html/noscript-tag) ![Medium][medium_img]: A noscript tag provides fallback content for users with JavaScript disabled.
- [ ] [Remove comments and debug code in production](https://frontendchecklist.io/rules/html/clean-up-comments) ![Medium][medium_img]: Unnecessary code, comments, and debug elements are removed before deploying to production.
- [ ] [Set text direction for RTL languages](https://frontendchecklist.io/rules/html/direction-attribute) ![Medium][medium_img]: The dir attribute is used for languages that read right-to-left (RTL) or mixed content.
- [ ] [Set the page lang attribute](https://frontendchecklist.io/rules/html/lang-attribute) ![High][high_img]: The <html> element must have a lang attribute with a valid BCP 47 language code so screen readers, translation tools, and search engines know the primary language of the page.
- [ ] [Set the responsive viewport meta tag](https://frontendchecklist.io/rules/html/viewport) ![Critical][critical_img]: The viewport meta tag is declared correctly for responsive design.
- [ ] [Use semantic HTML elements](https://frontendchecklist.io/rules/html/html5-semantic-elements) ![High][high_img]: HTML5 Semantic Elements are used appropriately (header, section, footer, main, article, aside...).
- [ ] [Use semantic input type attributes](https://frontendchecklist.io/rules/html/input-types) ![High][high_img]: Set the correct type attribute on input elements to trigger the right mobile keyboard, enable browser validation, and improve autofill accuracy.
- [ ] [Use the HTML5 doctype](https://frontendchecklist.io/rules/html/doctype) ![Critical][critical_img]: The HTML5 doctype declaration must appear as the first line of every HTML document to trigger standards mode rendering in all browsers.
- [ ] [Validate forms accessibly](https://frontendchecklist.io/rules/html/form-validation) ![High][high_img]: Forms provide clear validation feedback with accessible error messages and proper ARIA attributes.
- [ ] [Validate HTML against W3C standards](https://frontendchecklist.io/rules/html/w3c-compliant) ![High][high_img]: HTML markup is validated against W3C standards for cross-browser compatibility.

**[Back to top](#front-end-checklist)**

### CSS

*32 rules. Layout, typography, responsive design, and styling rules.*

[Browse CSS on frontendchecklist.io](https://frontendchecklist.io/rules/css)

- [ ] [Apply Flexbox best practices](https://frontendchecklist.io/rules/css/flexbox-patterns) ![Medium][medium_img]: Use Flexbox for one-dimensional layouts with the right properties, avoiding common mistakes like overusing flex:1, ignoring min-width:0, and misunderstanding flex-basis.
- [ ] [Avoid embedded and inline CSS](https://frontendchecklist.io/rules/css/embedded-or-inline-css) ![High][high_img]: Embedded and inline CSS are avoided except for critical CSS and performance optimization.
- [ ] [Avoid intrusive interstitials](https://frontendchecklist.io/rules/css/interstitials) ![Medium][medium_img]: Full-screen interstitials (pop-ups, overlays, cookie banners) that block the main content on mobile are a ranking penalty signal and accessibility barrier. Use non-intrusive alternatives.
- [ ] [Do not disable pinch zoom](https://frontendchecklist.io/rules/css/viewport-zoom) ![High][high_img]: The viewport meta tag must not set user-scalable=no or maximum-scale=1 as these prevent users from zooming in to read content, violating WCAG 2.1 SC 1.4.4 (Resize Text).
- [ ] [Include a print stylesheet](https://frontendchecklist.io/rules/css/css-print) ![Medium][medium_img]: A print stylesheet is provided and correctly optimized for printed pages.
- [ ] [Inline critical CSS for faster rendering](https://frontendchecklist.io/rules/css/css-critical) ![High][high_img]: Critical CSS (above-the-fold content) is inlined in the head for faster initial render.
- [ ] [Keep CSS specificity low and flat](https://frontendchecklist.io/rules/css/specificity-management) ![High][high_img]: Write selectors at the lowest specificity that works, avoiding ID selectors and deep nesting, so styles can be overridden cleanly without resorting to !important.
- [ ] [Lint CSS and SCSS files](https://frontendchecklist.io/rules/css/styles-lint) ![Medium][medium_img]: All CSS/SCSS files are linted with Stylelint to detect errors and enforce standards.
- [ ] [Load CSS without blocking render](https://frontendchecklist.io/rules/css/css-non-blocking) ![High][high_img]: Non-critical CSS is loaded asynchronously to avoid blocking DOM rendering.
- [ ] [Minify all CSS files](https://frontendchecklist.io/rules/css/css-minification) ![High][high_img]: All CSS files are minified to reduce file size and improve page load performance.
- [ ] [Optimize web font formats](https://frontendchecklist.io/rules/css/webfont-format) ![Medium][medium_img]: Web fonts use modern formats (WOFF2, WOFF) with proper fallbacks and loading strategies.
- [ ] [Order CSS files correctly](https://frontendchecklist.io/rules/css/css-order) ![Medium][medium_img]: All CSS files are loaded before JavaScript files to prevent render blocking.
- [ ] [Prevent horizontal scrolling](https://frontendchecklist.io/rules/css/horizontal-scroll) ![Medium][medium_img]: Web pages must not require horizontal scrolling at standard viewport widths. Horizontal overflow breaks responsive layouts and makes content inaccessible to low-vision users who zoom in.
- [ ] [Provide visible custom focus indicators](https://frontendchecklist.io/rules/css/focus-styles) ![High][high_img]: Ensure all interactive elements have a clearly visible focus indicator for keyboard navigation — never just remove the default outline without providing a better alternative.
- [ ] [Register CSS custom properties with @property for animation and type safety](https://frontendchecklist.io/rules/css/css-at-property) ![Low][low_img]: Use @property to register CSS custom properties with a type, initial value, and inheritance control — enabling animation of custom properties and providing compile-time validation for design tokens.
- [ ] [Remove unused CSS rules](https://frontendchecklist.io/rules/css/unused-css) ![High][high_img]: Unused CSS is removed to reduce bundle size and improve performance.
- [ ] [Support dark mode with prefers-color-scheme](https://frontendchecklist.io/rules/css/dark-mode-css) ![Medium][medium_img]: Implement dark mode using the prefers-color-scheme media query and CSS custom properties so the site automatically adapts to the user's system preference.
- [ ] [Use :has() to style parent elements based on their descendants](https://frontendchecklist.io/rules/css/has-selector) ![Low][low_img]: Use the CSS :has() relational pseudo-class to select and style an element based on what it contains, replacing JavaScript DOM manipulation for many common styling scenarios.
- [ ] [Use @layer to manage CSS cascade order explicitly](https://frontendchecklist.io/rules/css/cascade-layers) ![Low][low_img]: CSS Cascade Layers (@layer) are used to give the codebase explicit, predictable control over specificity and cascade order, eliminating the need to fight specificity with !important.
- [ ] [Use a CSS reset or normalize stylesheet](https://frontendchecklist.io/rules/css/reset-css) ![Medium][medium_img]: A CSS reset or normalize is used to ensure consistent styling across browsers.
- [ ] [Use consistent CSS naming conventions](https://frontendchecklist.io/rules/css/naming-conventions) ![Medium][medium_img]: Adopt a consistent class naming methodology (BEM, CUBE CSS, or a team-agreed pattern) to make class names self-documenting and prevent style conflicts.
- [ ] [Use container queries for component-level responsiveness](https://frontendchecklist.io/rules/css/container-queries) ![Medium][medium_img]: Use CSS container queries to make components respond to their own container's size rather than the viewport, enabling truly reusable responsive components.
- [ ] [Use CSS containment to limit repaint scope](https://frontendchecklist.io/rules/css/css-containment) ![Medium][medium_img]: Apply the contain property to components to tell the browser they are independent from the rest of the page, enabling rendering optimizations that reduce repaint and reflow scope.
- [ ] [Use CSS custom properties for design tokens](https://frontendchecklist.io/rules/css/css-custom-properties) ![High][high_img]: Define design system values (colors, spacing, typography) as CSS custom properties on :root to enable consistent theming, dynamic updates, and dark mode support.
- [ ] [Use CSS Grid for two-dimensional layouts](https://frontendchecklist.io/rules/css/css-grid) ![Medium][medium_img]: Use CSS Grid when you need to control both rows and columns simultaneously, such as page layouts, card grids, and complex component arrangements.
- [ ] [Use CSS logical properties for i18n and RTL support](https://frontendchecklist.io/rules/css/logical-properties) ![Medium][medium_img]: Use CSS logical properties (margin-inline, padding-block, border-inline-start) instead of physical properties (margin-left, padding-top) to support right-to-left languages automatically.
- [ ] [Use CSS subgrid to align nested grid items to parent tracks](https://frontendchecklist.io/rules/css/subgrid) ![Low][low_img]: Use grid-template-columns: subgrid (or subgrid for rows) to make nested grid items participate in the parent grid's tracks, solving the card-content alignment problem without JavaScript height matching.
- [ ] [Use oklch() and oklab() for perceptually uniform colour palettes](https://frontendchecklist.io/rules/css/color-oklch) ![Low][low_img]: Colour values in the design system use oklch() or oklab() colour functions to produce perceptually uniform palettes where equal numeric steps produce equal perceived lightness changes.
- [ ] [Use readable font sizes on mobile](https://frontendchecklist.io/rules/css/font-size) ![Medium][medium_img]: Text must be large enough to read without zooming on mobile devices. Using relative units (rem/em) allows browser font size preferences to be respected.
- [ ] [Use relative units for responsive layouts](https://frontendchecklist.io/rules/css/responsive-units) ![High][high_img]: Use rem, em, %, vw, vh, and clamp() instead of fixed px values to build layouts that scale with user font size preferences and viewport dimensions.
- [ ] [Use the View Transitions API for smooth page and component transitions](https://frontendchecklist.io/rules/css/view-transitions) ![Low][low_img]: The View Transitions API is used to animate between page states or navigations with cross-fade or custom animations, providing a native-app quality transition without JavaScript animation libraries.
- [ ] [Use transform and opacity for animations](https://frontendchecklist.io/rules/css/animation-performance) ![High][high_img]: Animate with CSS transform and opacity properties to keep animations running on the GPU compositor thread at 60fps, avoiding layout-triggering properties like top, left, width, and height.

**[Back to top](#front-end-checklist)**

### JavaScript

*26 rules. Client-side behavior, async patterns, and runtime quality rules.*

[Browse JavaScript on frontendchecklist.io](https://frontendchecklist.io/rules/javascript)

- [ ] [Avoid implicit type coercion](https://frontendchecklist.io/rules/javascript/type-coercion) ![Medium][medium_img]: Use strict equality (===), explicit type conversion, and Number/String/Boolean constructors to avoid JavaScript's implicit type coercion producing unexpected results.
- [ ] [Avoid inline JavaScript](https://frontendchecklist.io/rules/javascript/javascript-inline) ![High][high_img]: Inline JavaScript is avoided. JavaScript is kept in external files for caching and maintainability.
- [ ] [Avoid the any type — use unknown, generics, or type guards instead](https://frontendchecklist.io/rules/javascript/no-explicit-any) ![Medium][medium_img]: Replace TypeScript's any type with unknown, proper generics, or narrowed type assertions to preserve type safety without sacrificing expressiveness.
- [ ] [Debounce and throttle event handlers](https://frontendchecklist.io/rules/javascript/debounce-throttle) ![High][high_img]: Use debounce or throttle for high-frequency events like scroll, resize, and input to improve performance.
- [ ] [Enable noUncheckedIndexedAccess to catch out-of-bounds array bugs](https://frontendchecklist.io/rules/javascript/no-unchecked-indexed-access) ![Medium][medium_img]: Enable noUncheckedIndexedAccess in tsconfig.json to make array and object index access return T | undefined, forcing explicit null checks that prevent out-of-bounds runtime errors.
- [ ] [Enable TypeScript strict mode in tsconfig.json](https://frontendchecklist.io/rules/javascript/typescript-strict-mode) ![High][high_img]: Enable "strict": true in tsconfig.json to activate the full suite of TypeScript type-checking flags and catch the most common runtime bugs at compile time.
- [ ] [Handle cross-origin requests securely](https://frontendchecklist.io/rules/javascript/cross-origin-security) ![High][high_img]: Use CORS correctly, validate message origins with postMessage, and understand the Same-Origin Policy to prevent cross-origin attacks.
- [ ] [Implement proper error handling](https://frontendchecklist.io/rules/javascript/error-handling) ![High][high_img]: Use try-catch blocks and error boundaries to gracefully handle errors in async operations and UI components.
- [ ] [Lint JavaScript code](https://frontendchecklist.io/rules/javascript/javascript-linter) ![Medium][medium_img]: JavaScript code is linted with ESLint to detect errors and enforce coding standards.
- [ ] [Minify all JavaScript files](https://frontendchecklist.io/rules/javascript/javascript-minification) ![High][high_img]: All JavaScript files are minified to reduce file size and improve loading performance.
- [ ] [Minimize costly DOM read/write operations](https://frontendchecklist.io/rules/javascript/dom-performance) ![High][high_img]: Batch DOM reads and writes separately to avoid layout thrashing — the performance problem caused by alternating between reading and writing layout properties.
- [ ] [Never use eval() or unsafe dynamic code execution](https://frontendchecklist.io/rules/javascript/avoid-eval) ![Critical][critical_img]: Avoid eval(), new Function(), setTimeout/setInterval with string arguments, and innerHTML with untrusted content — they execute arbitrary code and create critical XSS vulnerabilities.
- [ ] [Parse JSON safely with error handling](https://frontendchecklist.io/rules/javascript/json-safety) ![Medium][medium_img]: Always wrap JSON.parse() in try/catch and validate the parsed structure before use, as invalid JSON or unexpected data shapes cause runtime errors.
- [ ] [Prefer const and let over var](https://frontendchecklist.io/rules/javascript/const-let) ![High][high_img]: Use block-scoped const and let declarations instead of function-scoped var to avoid hoisting bugs and unintended variable mutations.
- [ ] [Prefer immutable data patterns](https://frontendchecklist.io/rules/javascript/immutable-patterns) ![Medium][medium_img]: Use spread operators, Object.assign, and array methods that return new values instead of mutating objects and arrays in place, to make data flow predictable and debugging easier.
- [ ] [Prevent common memory leak patterns](https://frontendchecklist.io/rules/javascript/memory-leaks) ![High][high_img]: Identify and avoid the most common JavaScript memory leak sources: forgotten event listeners, retained DOM references, closures holding large objects, and uncleared timers.
- [ ] [Remove console statements in production](https://frontendchecklist.io/rules/javascript/console-cleanup) ![Medium][medium_img]: Remove or disable console.log, console.debug, and other console statements before deploying to production.
- [ ] [Split large JavaScript bundles](https://frontendchecklist.io/rules/javascript/code-splitting) ![High][high_img]: Use dynamic imports and route-based code splitting to break large bundles into smaller chunks that load on demand, reducing initial page load time.
- [ ] [Use ES modules (import/export)](https://frontendchecklist.io/rules/javascript/es-modules) ![High][high_img]: Use native ES module syntax for imports and exports instead of CommonJS require() to enable static analysis, tree-shaking, and better tooling support.
- [ ] [Use event delegation for dynamic content](https://frontendchecklist.io/rules/javascript/event-delegation) ![Medium][medium_img]: Attach event listeners to stable parent elements rather than individual dynamic children to reduce memory usage and handle elements added to the DOM after page load.
- [ ] [Use import type for type-only imports](https://frontendchecklist.io/rules/javascript/type-only-imports) ![Low][low_img]: Use the import type syntax for imports that are only needed as TypeScript types, ensuring they are fully erased at compile time with zero runtime cost.
- [ ] [Use modern array and object methods](https://frontendchecklist.io/rules/javascript/modern-array-methods) ![Medium][medium_img]: Use ES2015+ array methods (map, filter, reduce, find, flatMap) and object methods (Object.entries, Object.fromEntries, structuredClone) for cleaner, more expressive code.
- [ ] [Use scheduler.yield() to keep the main thread responsive during long tasks](https://frontendchecklist.io/rules/javascript/scheduler-yield) ![Medium][medium_img]: Break up tasks longer than 50 ms by yielding to the browser with scheduler.yield() or a MessageChannel fallback so that user input is never blocked.
- [ ] [Use Web Storage API safely](https://frontendchecklist.io/rules/javascript/web-storage) ![Medium][medium_img]: Use localStorage and sessionStorage with proper serialization, error handling, and security awareness to avoid data corruption and storage quota errors.
- [ ] [Validate external data at runtime with a schema library](https://frontendchecklist.io/rules/javascript/runtime-validation) ![High][high_img]: Use Zod or Valibot to validate data from API responses, form inputs, localStorage, and environment variables — TypeScript types are erased at runtime and cannot protect against unexpected shapes.
- [ ] [Write internationalisation-friendly translation strings](https://frontendchecklist.io/rules/javascript/translation-strings) ![Medium][medium_img]: Translation strings use message format patterns (ICU or similar) rather than string concatenation, and correctly handle pluralisation, gender, and variable interpolation.

**[Back to top](#front-end-checklist)**

### Performance

*44 rules. Loading speed, rendering, optimization, and Core Web Vitals rules.*

[Browse Performance on frontendchecklist.io](https://frontendchecklist.io/rules/performance)

- [ ] [Analyze performance with WebPageTest](https://frontendchecklist.io/rules/performance/webpagetest) ![High][high_img]: Page performance is analyzed with WebPageTest to identify loading bottlenecks and optimization opportunities.
- [ ] [Avoid JavaScript-based redirects](https://frontendchecklist.io/rules/performance/js-redirects) ![Medium][medium_img]: Detects JavaScript resources that return 3XX redirects to reduce latency
- [ ] [Avoid serving legacy JavaScript to modern browsers](https://frontendchecklist.io/rules/performance/legacy-js) ![Medium][medium_img]: Detects ES5 polyfills and legacy JavaScript code to reduce bundle size and improve execution
- [ ] [Convert animated GIFs to video](https://frontendchecklist.io/rules/performance/animated-content) ![Medium][medium_img]: Large animated GIFs are replaced with more efficient video formats like MP4 or WebM to reduce page weight.
- [ ] [Disable lazy loading for above-the-fold content](https://frontendchecklist.io/rules/performance/lazy-above-fold) ![Medium][medium_img]: Detects lazy loading on likely above-fold images to improve Largest Contentful Paint (LCP)
- [ ] [Eliminate render-blocking resources](https://frontendchecklist.io/rules/performance/render-blocking) ![Medium][medium_img]: Checks for render-blocking CSS and JavaScript that prevent the initial page render
- [ ] [Enable browser caching](https://frontendchecklist.io/rules/performance/browser-caching) ![High][high_img]: Cache-Control and ETag headers are properly configured for static resources.
- [ ] [Enable HTTP/2 or HTTP/3](https://frontendchecklist.io/rules/performance/http2) ![High][high_img]: Use modern HTTP protocols to enable request multiplexing and reduce network latency.
- [ ] [Enable text-based compression](https://frontendchecklist.io/rules/performance/compression) ![High][high_img]: Compress text resources (HTML, CSS, JS) using Gzip or Brotli to reduce data transfer size.
- [ ] [Implement Google Consent Mode v2](https://frontendchecklist.io/rules/performance/consent-mode) ![High][high_img]: Adjust Google Tag behavior based on user consent to comply with privacy regulations and maintain data insights.
- [ ] [Implement lazy loading for offscreen content](https://frontendchecklist.io/rules/performance/lazy-loading) ![High][high_img]: Images and heavy resources below the fold are lazy loaded to improve initial performance.
- [ ] [Keep page load time under 3 seconds](https://frontendchecklist.io/rules/performance/page-load-time) ![High][high_img]: Page fully loads in under 3 seconds on a standard connection.
- [ ] [Keep page weight under 1500KB](https://frontendchecklist.io/rules/performance/page-weight) ![High][high_img]: Total page weight including all resources is under 1500KB (ideally under 500KB).
- [ ] [Load non-critical code on user interaction](https://frontendchecklist.io/rules/performance/import-on-interaction) ![High][high_img]: Defer JavaScript modules, widgets, and third-party code until the user signals intent through a click, focus, hover, or similar interaction.
- [ ] [Load non-critical code when content approaches the viewport](https://frontendchecklist.io/rules/performance/import-on-visibility) ![High][high_img]: Use viewport-aware loading to fetch components, embeds, and feature code shortly before they become visible instead of shipping them on first load.
- [ ] [Minimize critical request chains](https://frontendchecklist.io/rules/performance/critical-request-chains) ![High][high_img]: Reduce the number and depth of dependent resource requests that block the initial rendering of the page.
- [ ] [Minimize cumulative layout shift](https://frontendchecklist.io/rules/performance/cumulative-layout-shift) ![High][high_img]: Page maintains visual stability with a CLS score below 0.1, preventing unexpected content shifts during load.
- [ ] [Minimize HTTP requests](https://frontendchecklist.io/rules/performance/http-requests) ![High][high_img]: HTTP requests are minimized by combining files, using sprites, and HTTP/2.
- [ ] [Optimize and compress web videos](https://frontendchecklist.io/rules/performance/video-optimization) ![High][high_img]: Videos are compressed, resized per device, and served in efficient codecs (H.264, HEVC, VP9/AV1) to reduce page weight and bandwidth use.
- [ ] [Optimize CSS file size](https://frontendchecklist.io/rules/performance/css-file-size) ![Medium][medium_img]: Keep individual CSS files small and remove unused styles to accelerate the critical rendering path.
- [ ] [Optimize first contentful paint](https://frontendchecklist.io/rules/performance/first-contentful-paint) ![High][high_img]: First content renders within 1.8 seconds, providing quick visual feedback that the page is loading.
- [ ] [Optimize Google Tag Manager implementation](https://frontendchecklist.io/rules/performance/gtm-present) ![Medium][medium_img]: Configure Google Tag Manager efficiently to minimize its impact on page load speed and main-thread blocking.
- [ ] [Optimize interaction to next paint](https://frontendchecklist.io/rules/performance/interaction-to-next-paint) ![High][high_img]: Page responds to user interactions within 200ms, ensuring good responsiveness.
- [ ] [Optimize JavaScript bundle size](https://frontendchecklist.io/rules/performance/js-file-size) ![Medium][medium_img]: Checks for JavaScript files that exceed recommended size limits to ensure fast interaction
- [ ] [Optimize largest contentful paint](https://frontendchecklist.io/rules/performance/largest-contentful-paint) ![Critical][critical_img]: The largest content element loads within 2.5 seconds for a good user experience.
- [ ] [Optimize pages for back/forward cache](https://frontendchecklist.io/rules/performance/back-forward-cache) ![High][high_img]: Pages avoid back/forward cache blockers such as unload listeners and restore state correctly when a browser resumes them from memory.
- [ ] [Optimize third-party script loading](https://frontendchecklist.io/rules/performance/third-party-scripts) ![High][high_img]: Load third-party scripts asynchronously to prevent blocking the main thread and improve page performance.
- [ ] [Optimize web font loading](https://frontendchecklist.io/rules/performance/font-loading) ![High][high_img]: Use efficient font formats and loading strategies to prevent layout shifts and invisible text.
- [ ] [Perform browser-based performance audits](https://frontendchecklist.io/rules/performance/browser-required) ![Medium][medium_img]: Conduct performance audits in a full browser environment to capture accurate runtime metrics and layout shifts.
- [ ] [Provide an offline fallback page](https://frontendchecklist.io/rules/performance/offline-fallback) ![Low][low_img]: When the network is unavailable, users are shown a custom offline fallback page rather than the browser's generic error screen.
- [ ] [Provide source maps for production debugging](https://frontendchecklist.io/rules/performance/source-maps) ![Medium][medium_img]: Checks for source map availability and configuration to ensure easier debugging
- [ ] [Reduce DOM size and complexity](https://frontendchecklist.io/rules/performance/dom-size) ![Medium][medium_img]: Keep the DOM tree small and shallow to improve memory usage and rendering performance.
- [ ] [Reduce Time to First Byte (TTFB)](https://frontendchecklist.io/rules/performance/ttfb) ![Medium][medium_img]: Measures and optimizes server response time (TTFB) to ensure a fast initial response
- [ ] [Register a service worker for caching and offline support](https://frontendchecklist.io/rules/performance/service-worker) ![Medium][medium_img]: A service worker is registered to intercept network requests, cache critical assets, and enable offline functionality for your web application.
- [ ] [Remove duplicate JavaScript libraries](https://frontendchecklist.io/rules/performance/duplicate-js) ![Medium][medium_img]: Detect and consolidate duplicate JavaScript libraries to reduce bundle size and prevent version conflicts.
- [ ] [Show loading indicators](https://frontendchecklist.io/rules/performance/loading-indicators) ![High][high_img]: Loading indicators provide feedback during asynchronous operations to keep users informed of progress.
- [ ] [Stream HTML to the browser before the full response is ready](https://frontendchecklist.io/rules/performance/streaming-html) ![Medium][medium_img]: Use HTTP chunked transfer encoding and React renderToPipeableStream (or ReadableStream) to begin delivering HTML to the browser as soon as the first bytes are available, reducing Time to First Byte and First Contentful Paint.
- [ ] [Use a content delivery network](https://frontendchecklist.io/rules/performance/cdn) ![High][high_img]: Static assets are served from a CDN for reduced latency and faster delivery.
- [ ] [Use fetchpriority to hint resource loading priority](https://frontendchecklist.io/rules/performance/fetchpriority-attribute) ![Medium][medium_img]: The fetchpriority attribute is applied to critical images, scripts, and preload links to help the browser prioritise the most important resources and defer lower-priority ones.
- [ ] [Use preconnect for critical third-party origins](https://frontendchecklist.io/rules/performance/preconnect) ![Medium][medium_img]: Checks for preconnect hints to critical third-party origins to reduce connection latency
- [ ] [Use resource hints for faster loading](https://frontendchecklist.io/rules/performance/resource-hints) ![High][high_img]: Implement preload, prefetch, and preconnect hints to optimize resource loading priority.
- [ ] [Use secure and up-to-date JS libraries](https://frontendchecklist.io/rules/performance/js-libraries) ![Medium][medium_img]: Detects JavaScript libraries and checks for known vulnerabilities
- [ ] [Use the Speculation Rules API to prefetch and prerender navigations](https://frontendchecklist.io/rules/performance/speculation-rules) ![Low][low_img]: The Speculation Rules API is used to declaratively prefetch or prerender likely next pages, making navigation feel near-instant without the overhead of a full client-side router.
- [ ] [Virtualize long lists and tables](https://frontendchecklist.io/rules/performance/list-virtualization) ![High][high_img]: Render only the visible subset of rows or cards in large collections to reduce DOM size, memory usage, and scroll-time rendering work.

**[Back to top](#front-end-checklist)**

*(README truncated for display. [Read the full README on GitHub](https://github.com/thedaviddias/Front-End-Checklist)).*
