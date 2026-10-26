---
slug: wshobson-agents-plugins-llm-application-dev-skills-prompt-engineering-patterns
name: prompt-engineering-patterns
tagline: This skill should be used when the user asks to "optimize a prompt",
  "improve prompt performance", "design a prompt template", "write better
  prompts",
summary: "- Designing complex prompts for production LLM applications -
  Optimizing prompt performance and consistency - Implementing structured
  reasoning patterns (chain-of-thought, tree-of-thought) - Building few-shot
  learning..."
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
  subpath: plugins/llm-application-dev/skills/prompt-engineering-patterns
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
  path: plugins/llm-application-dev/skills/prompt-engineering-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.199Z
  truncated: false
type: agent_skill
skill:
  skill_name: prompt-engineering-patterns
  description: This skill should be used when the user asks to "optimize a
    prompt", "improve prompt performance", "design a prompt template", "write
    better prompts", "debug prompt issues", "use chain-of-thought", "structured
    prompting", "few-shot prompting", or wants to apply advanced prompt
    engineering patterns for production LLM applications.
  folder_path: plugins/llm-application-dev/skills/prompt-engineering-patterns
  extra_files:
    - assets/few-shot-examples.json
    - assets/prompt-template-library.md
    - references/chain-of-thought.md
    - references/details.md
    - references/few-shot-learning.md
    - references/prompt-optimization.md
    - references/prompt-templates.md
    - references/system-prompts.md
    - scripts/optimize-prompt.py
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Prompt Engineering Patterns
Master advanced prompt engineering techniques to maximize LLM performance, reliability, and controllability.

## When to Use This Skill

- Designing complex prompts for production LLM applications
- Optimizing prompt performance and consistency
- Implementing structured reasoning patterns (chain-of-thought, tree-of-thought)
- Building few-shot learning systems with dynamic example selection
- Creating reusable prompt templates with variable interpolation
- Debugging and refining prompts that produce inconsistent outputs
- Implementing system prompts for specialized AI assistants
- Using structured outputs (JSON mode) for reliable parsing

## Core Capabilities

### 1. Few-Shot Learning

- Example selection strategies (semantic similarity, diversity sampling)
- Balancing example count with context window constraints
- Constructing effective demonstrations with input-output pairs
- Dynamic example retrieval from knowledge bases
- Handling edge cases through strategic example selection

### 2. Chain-of-Thought Prompting

- Step-by-step reasoning elicitation
- Zero-shot CoT with "Let's think step by step"
- Few-shot CoT with reasoning traces
- Self-consistency techniques (sampling multiple reasoning paths)
- Verification and validation steps

### 3. Structured Outputs

- JSON mode for reliable parsing
- Pydantic schema enforcement
- Type-safe response handling
- Error handling for malformed outputs

### 4. Prompt Optimization

- Iterative refinement workflows
- A/B testing prompt variations
- Measuring prompt performance metrics (accuracy, consistency, latency)
- Reducing token usage while maintaining quality
- Handling edge cases and failure modes

### 5. Template Systems

- Variable interpolation and formatting
- Conditional prompt sections
- Multi-turn conversation templates
- Role-based prompt composition
- Modular prompt components

### 6. System Prompt Design

- Setting model behavior and constraints
- Defining output formats and structure
- Establishing role and expertise
- Safety guidelines and content policies
- Context setting and background information

## Quick Start

```python
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate
from pydantic import BaseModel, Field

# Define structured output schema
class SQLQuery(BaseModel):
    query: str = Field(description="The SQL query")
    explanation: str = Field(description="Brief explanation of what the query does")
    tables_used: list[str] = Field(description="List of tables referenced")

# Initialize model with structured output
llm = ChatAnthropic(model="claude-sonnet-5")
structured_llm = llm.with_structured_output(SQLQuery)

# Create prompt template
prompt = ChatPromptTemplate.from_messages([
    ("system", """You are an expert SQL developer. Generate efficient, secure SQL queries.
    Always use parameterized queries to prevent SQL injection.
    Explain your reasoning briefly."""),
    ("user", "Convert this to SQL: {query}")
])

# Create chain
chain = prompt | structured_llm

# Use
result = await chain.ainvoke({
    "query": "Find all users who registered in the last 30 days"
})
print(result.query)
print(result.explanation)
```

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Be Specific**: Vague prompts produce inconsistent results
2. **Show, Don't Tell**: Examples are more effective than descriptions
3. **Use Structured Outputs**: Enforce schemas with Pydantic for reliability
4. **Test Extensively**: Evaluate on diverse, representative inputs
5. **Iterate Rapidly**: Small changes can have large impacts
6. **Monitor Performance**: Track metrics in production
7. **Version Control**: Treat prompts as code with proper versioning
8. **Document Intent**: Explain why prompts are structured as they are

## Common Pitfalls

- **Over-engineering**: Starting with complex prompts before trying simple ones
- **Example pollution**: Using examples that don't match the target task
- **Context overflow**: Exceeding token limits with excessive examples
- **Ambiguous instructions**: Leaving room for multiple interpretations
- **Ignoring edge cases**: Not testing on unusual or boundary inputs
- **No error handling**: Assuming outputs will always be well-formed
- **Hardcoded values**: Not parameterizing prompts for reuse

## Success Metrics

Track these KPIs for your prompts:

- **Accuracy**: Correctness of outputs
- **Consistency**: Reproducibility across similar inputs
- **Latency**: Response time (P50, P95, P99)
- **Token Usage**: Average tokens per request
- **Success Rate**: Percentage of valid, parseable outputs
- **User Satisfaction**: Ratings and feedback
