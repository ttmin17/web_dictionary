---
slug: lofcz-llmtornado-src-llmtornado-demo-static-files-skills-llmtornado-tutorial-generator
name: tutorial-generator
tagline: Generates comprehensive code tutorials on LlmTornado API formatted for
  Medium publication with examples, explanations, and best practices.
summary: "Determine the specific aspect of LlmTornado API to cover: - Basic
  setup and authentication - Specific API endpoints (chat completions,
  embeddings, etc.) - Advanced features (streaming, function calling, etc.) -
  Integr..."
categories:
  - agent-frameworks
tags:
  - a2a
  - agent-framework
  - agent-orchestration
  - agent2agent
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: lofcz/LLMTornado
  subpath: src/LlmTornado.Demo/Static/Files/Skills/llmtornado-tutorial-generator
  official_vendor: false
  license: MIT
signals:
  stars: 651
  last_commit: 2026-11-04T21:20:08Z
  stars_delta_7d: 2
  stars_growth_pct: 0.3
  trending_score: 2.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 647
    - 649
    - 651
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: lofcz/LLMTornado
  path: src/LlmTornado.Demo/Static/Files/Skills/llmtornado-tutorial-generator/SKILL.md
  branch: master
  fetched_at: 2026-11-05T13:14:04.318Z
  truncated: false
type: agent_skill
skill:
  skill_name: tutorial-generator
  description: Generates comprehensive code tutorials on LlmTornado API formatted
    for Medium publication with examples, explanations, and best practices.
  folder_path: src/LlmTornado.Demo/Static/Files/Skills/llmtornado-tutorial-generator
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: lofcz-llmtornado
---

## Tutorial Generation Workflow

Copy this checklist and track your progress:

```
LlmTornado Tutorial Generation Progress:
- [ ] Step 1: Identify tutorial topic and scope
- [ ] Step 2: Structure tutorial outline
- [ ] Step 3: Generate code examples
- [ ] Step 4: Add explanations and best practices
- [ ] Step 5: Format for Medium publication
- [ ] Step 6: Save to local file
```

## **Step 1: Identify tutorial topic and scope**

Determine the specific aspect of LlmTornado API to cover:
- Basic setup and authentication
- Specific API endpoints (chat completions, embeddings, etc.)
- Advanced features (streaming, function calling, etc.)
- Integration patterns
- Error handling and best practices
- Performance optimization

Ask the user if a specific topic isn't provided:
- What LlmTornado API feature should be covered?
- What's the target audience level (beginner, intermediate, advanced)?
- Are there specific use cases to demonstrate?

## **Step 2: Structure tutorial outline**

Create a comprehensive outline following Medium best practices:

### Standard Structure:
1. **Title** - Catchy and SEO-friendly
2. **Introduction** - Hook and overview (2-3 paragraphs)
3. **Prerequisites** - Required knowledge and tools
4. **Setup Section** - Installation and configuration
5. **Core Concepts** - Theory and explanation
6. **Hands-on Examples** - Step-by-step code demonstrations
7. **Best Practices** - Tips and recommendations
8. **Common Pitfalls** - What to avoid
9. **Conclusion** - Summary and next steps
10. **Resources** - Links and references

## **Step 3: Generate code examples**

Create working, production-ready code examples:

### Code Example Guidelines:
- Use proper code formatting with language tags
- Include comments explaining each section
- Show both synchronous and async patterns where applicable
- Demonstrate error handling
- Use realistic use cases
- Keep examples concise but complete
- Include expected output or responses

### Example Code Block Format for Medium:
```python
# Description of what this code does
import llmtornado

# Initialize the client
client = llmtornado.Client(api_key="your_api_key")

# Your implementation here
```

## **Step 4: Add explanations and best practices**

For each code example, provide:
- **What it does** - Clear explanation of functionality
- **Why it matters** - Use cases and benefits
- **How it works** - Step-by-step breakdown
- **Pro tips** - Expert recommendations
- **Security considerations** - API key management, etc.

### Best Practices to Include:
- API key security and environment variables
- Rate limiting and retry logic
- Error handling strategies
- Logging and monitoring
- Cost optimization
- Testing approaches

## **Step 5: Format for Medium publication**

Apply Medium-specific formatting:

### Formatting Rules:
1. **Headings**: Use # for title, ## for main sections, ### for subsections
2. **Code Blocks**: Use triple backticks with language identifier
3. **Inline Code**: Use single backticks for `variable_names` and `function_calls()`
4. **Emphasis**: Use *italics* for emphasis, **bold** for important points
5. **Lists**: Use - or * for bullet points, 1. 2. 3. for numbered lists
6. **Quotes**: Use > for important callouts or tips
7. **Links**: Use [text](https://github.com/lofcz/LLMTornado/blob/master/src/LlmTornado.Demo/Static/Files/Skills/llmtornado-tutorial-generator/url) format
8. **Images**: Use ![alt text](https://raw.githubusercontent.com/lofcz/LLMTornado/master/src/LlmTornado.Demo/Static/Files/Skills/llmtornado-tutorial-generator/image_url) if applicable

### Medium Style Guidelines:
- Keep paragraphs short (2-4 sentences)
- Use subheadings every 3-4 paragraphs
- Add callout boxes for important notes
- Include a compelling opening hook
- End with actionable next steps
- Aim for 1500-2500 words for optimal engagement

## **Step 6: Save to local file**

Save the generated tutorial to a local markdown file:

### File Naming Convention:
`llmtornado-tutorial-[topic]-[date].md`

Example: `llmtornado-tutorial-chat-completions-2024-01-15.md`

### File Structure:
```
/projects/llmtornado-tutorials/
  ├── llmtornado-tutorial-[topic].md
  └── examples/
      └── [topic]-example.py
```

### Save both:
1. The complete Medium-formatted tutorial (markdown)
2. Standalone code examples (Python files)

## Additional Considerations

### LlmTornado API Features to Cover:
- **Chat Completions**: Text generation, conversations
- **Streaming**: Real-time response streaming
- **Function Calling**: Tool integration
- **Embeddings**: Vector representations
- **Model Selection**: Choosing the right model
- **Parameters**: Temperature, max_tokens, top_p, etc.
- **Context Management**: Handling conversation history
- **Rate Limits**: Managing API quotas

### Tutorial Enhancement Options:
- Add diagrams or flowcharts (describe them for Medium's image feature)
- Include performance benchmarks
- Compare different approaches
- Show before/after code improvements
- Add troubleshooting section
- Include testing examples

### SEO Optimization:
- Use keywords naturally in title and headings
- Include meta description (first paragraph)
- Add relevant tags
- Use descriptive subheadings

## Example Usage

When a user requests a tutorial, follow this pattern:

**User**: "Create a tutorial on LlmTornado chat completions"

**Response Process**:
1. Confirm topic and scope
2. Generate full tutorial with:
   - Engaging introduction
   - Setup instructions
   - Multiple code examples
   - Best practices
   - Troubleshooting tips
3. Save to `/projects/llmtornado-tutorials/llmtornado-tutorial-chat-completions-[date].md`
4. Provide file location and preview

## Quality Checklist

Before finalizing, ensure:
- [ ] All code examples are syntactically correct
- [ ] Explanations are clear and beginner-friendly
- [ ] Medium formatting is properly applied
- [ ] Security best practices are mentioned
- [ ] Error handling is demonstrated
- [ ] Tutorial has a clear flow from simple to advanced
- [ ] Conclusion provides next steps
- [ ] File is saved to local filesystem
- [ ] Both .md and .py files are created
