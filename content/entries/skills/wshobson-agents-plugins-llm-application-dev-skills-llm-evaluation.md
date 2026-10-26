---
slug: wshobson-agents-plugins-llm-application-dev-skills-llm-evaluation
name: llm-evaluation
tagline: Implement comprehensive evaluation strategies for LLM applications
  using automated metrics, human feedback, and benchmarking. Use when testing
  LLM per
summary: "- Measuring LLM application performance systematically - Comparing
  different models or prompts - Detecting performance regressions before
  deployment - Validating improvements from prompt changes - Building
  confidence..."
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
  subpath: plugins/llm-application-dev/skills/llm-evaluation
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
  path: plugins/llm-application-dev/skills/llm-evaluation/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.199Z
  truncated: false
type: agent_skill
skill:
  skill_name: llm-evaluation
  description: Implement comprehensive evaluation strategies for LLM applications
    using automated metrics, human feedback, and benchmarking. Use when testing
    LLM performance, measuring AI application quality, or establishing
    evaluation frameworks.
  folder_path: plugins/llm-application-dev/skills/llm-evaluation
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

# LLM Evaluation
Master comprehensive evaluation strategies for LLM applications, from automated metrics to human evaluation and A/B testing.

## When to Use This Skill

- Measuring LLM application performance systematically
- Comparing different models or prompts
- Detecting performance regressions before deployment
- Validating improvements from prompt changes
- Building confidence in production systems
- Establishing baselines and tracking progress over time
- Debugging unexpected model behavior

## Core Evaluation Types

### 1. Automated Metrics

Fast, repeatable, scalable evaluation using computed scores.

**Text Generation:**

- **BLEU**: N-gram overlap (translation)
- **ROUGE**: Recall-oriented (summarization)
- **METEOR**: Semantic similarity
- **BERTScore**: Embedding-based similarity
- **Perplexity**: Language model confidence

**Classification:**

- **Accuracy**: Percentage correct
- **Precision/Recall/F1**: Class-specific performance
- **Confusion Matrix**: Error patterns
- **AUC-ROC**: Ranking quality

**Retrieval (RAG):**

- **MRR**: Mean Reciprocal Rank
- **NDCG**: Normalized Discounted Cumulative Gain
- **Precision@K**: Relevant in top K
- **Recall@K**: Coverage in top K

### 2. Human Evaluation

Manual assessment for quality aspects difficult to automate.

**Dimensions:**

- **Accuracy**: Factual correctness
- **Coherence**: Logical flow
- **Relevance**: Answers the question
- **Fluency**: Natural language quality
- **Safety**: No harmful content
- **Helpfulness**: Useful to the user

### 3. LLM-as-Judge

Use stronger LLMs to evaluate weaker model outputs.

**Approaches:**

- **Pointwise**: Score individual responses
- **Pairwise**: Compare two responses
- **Reference-based**: Compare to gold standard
- **Reference-free**: Judge without ground truth

## Quick Start

```python
from dataclasses import dataclass
from typing import Callable
import numpy as np

@dataclass
class Metric:
    name: str
    fn: Callable

    @staticmethod
    def accuracy():
        return Metric("accuracy", calculate_accuracy)

    @staticmethod
    def bleu():
        return Metric("bleu", calculate_bleu)

    @staticmethod
    def bertscore():
        return Metric("bertscore", calculate_bertscore)

    @staticmethod
    def custom(name: str, fn: Callable):
        return Metric(name, fn)

class EvaluationSuite:
    def __init__(self, metrics: list[Metric]):
        self.metrics = metrics

    async def evaluate(self, model, test_cases: list[dict]) -> dict:
        results = {m.name: [] for m in self.metrics}

        for test in test_cases:
            prediction = await model.predict(test["input"])

            for metric in self.metrics:
                score = metric.fn(
                    prediction=prediction,
                    reference=test.get("expected"),
                    context=test.get("context")
                )
                results[metric.name].append(score)

        return {
            "metrics": {k: np.mean(v) for k, v in results.items()},
            "raw_scores": results
        }

# Usage
suite = EvaluationSuite([
    Metric.accuracy(),
    Metric.bleu(),
    Metric.bertscore(),
    Metric.custom("groundedness", check_groundedness)
])

test_cases = [
    {
        "input": "What is the capital of France?",
        "expected": "Paris",
        "context": "France is a country in Europe. Paris is its capital."
    },
]

results = await suite.evaluate(model=your_model, test_cases=test_cases)
```

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.
