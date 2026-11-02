---
slug: microsoft-agent-framework-dotnet-samples-02-agents-harness-harness_step04_codeexecution-skills-regex-tester
name: regex-tester
tagline: Validate, test, and debug regular expressions by executing them against
  sample inputs. Use when asked to build, verify, or explain a regex pattern.
summary: 1. Understand the requirement — clarify what the pattern should match
  and what it should reject. 2. Consult the cheatsheet — review
  references/regex-cheatsheet.md for syntax reminders if needed. 3. Write and
  execute t...
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agentic-ai
  - agents
  - dotnet
status: active
quality_percentile: 99
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: microsoft/agent-framework
  subpath: dotnet/samples/02-agents/Harness/Harness_Step04_CodeExecution/skills/regex-tester
  official_vendor: true
  license: MIT
signals:
  stars: 14492
  last_commit: 2026-11-02T05:12:39Z
  stars_delta_7d: 175
  stars_growth_pct: 1.2
  trending_score: 177.14
  velocity_source: snapshot_delta
  sparkline_4w:
    - 14200
    - 14317
    - 14492
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/agent-framework
  path: dotnet/samples/02-agents/Harness/Harness_Step04_CodeExecution/skills/regex-tester/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:20.938Z
  truncated: false
type: agent_skill
skill:
  skill_name: regex-tester
  description: Validate, test, and debug regular expressions by executing them
    against sample inputs. Use when asked to build, verify, or explain a regex
    pattern.
  folder_path: dotnet/samples/02-agents/Harness/Harness_Step04_CodeExecution/skills/regex-tester
  extra_files:
    - references/regex-cheatsheet.md
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: microsoft-agent-framework
---

## Usage

When the user asks you to create, validate, or debug a regular expression:

1. **Understand the requirement** — clarify what the pattern should match and what it should reject.
2. **Consult the cheatsheet** — review `references/regex-cheatsheet.md` for syntax reminders if needed.
3. **Write and execute test code** — use the `execute_code` tool to run Python code that:
   - Compiles the regex with `re.compile()`
   - Tests it against a set of positive examples (should match) and negative examples (should not match)
   - Extracts and displays any capturing groups
   - Reports pass/fail for each test case
4. **Iterate** — if any test fails, refine the pattern and re-run until all cases pass.
5. **Present the result** — give the user the final pattern, explain what each part does, and show the test results.

## Example Test Script

```python
import re

pattern = re.compile(r'^[\w.+-]+@[\w-]+\.[\w.-]+$')

positives = ["user@example.com", "first.last+tag@sub.domain.org"]
negatives = ["@missing.com", "no-at-sign", "spaces in@address.com"]

for s in positives:
    assert pattern.match(s), f"FAIL: expected match for '{s}'"
for s in negatives:
    assert not pattern.match(s), f"FAIL: expected no match for '{s}'"

print("All tests passed!")
```
