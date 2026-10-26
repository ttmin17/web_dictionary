---
slug: alirezarezvani-claude-skills-engineering-deep-learning-book-skills-deep-learning-book
name: deep-learning-book
tagline: Study companion and working knowledge base for the Deep Learning
  textbook by Goodfellow, Bengio & Courville (MIT Press, 2016), read free at
  deeplearni
summary: This is a companion, not a copy. The book is copyrighted, and its site
  states that the HTML-only format exists to discourage copying under the
  authors' MIT Press contract. Nothing here reproduces its text. Every chapt...
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
  subpath: engineering/deep-learning-book/skills/deep-learning-book
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
  path: engineering/deep-learning-book/skills/deep-learning-book/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.257Z
  truncated: false
type: agent_skill
skill:
  skill_name: deep-learning-book
  description: "Study companion and working knowledge base for the Deep Learning
    textbook by Goodfellow, Bengio & Courville (MIT Press, 2016), read free at
    deeplearningbook.org. Indexes all 20 chapters, carries a 2016-to-2026 delta
    layer naming what the book got right, what was superseded (transformers,
    AdamW, diffusion, double descent) and what still holds, and ships four
    deterministic tools: a prerequisite-aware reading-path planner, a
    training-failure diagnostic, a capacity-and-regularization planner, and a
    parameter/FLOP/activation-memory calculator. Use when studying or teaching
    this book, planning a route through it, deciding whether a chapter's advice
    is still current, or translating its math into a training decision. It
    points at the official chapters — it never reproduces them."
  folder_path: engineering/deep-learning-book/skills/deep-learning-book
  extra_files:
    - assets/chapter_worksheet.md
    - assets/example_layer_spec.json
    - assets/study_log_template.md
    - chapters/ch01-introduction.md
    - chapters/ch02-linear-algebra.md
    - chapters/ch03-probability-information-theory.md
    - chapters/ch04-numerical-computation.md
    - chapters/ch05-machine-learning-basics.md
    - chapters/ch06-deep-feedforward-networks.md
    - chapters/ch07-regularization.md
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Deep Learning — Study Companion
**Source book**: *Deep Learning*, Ian Goodfellow, Yoshua Bengio & Aaron Courville
(MIT Press, 2016) · 20 chapters, 3 parts · read free at
[deeplearningbook.org](https://www.deeplearningbook.org/) · companion compiled 2026-08-25.

**This is a companion, not a copy.** The book is copyrighted, and its site states that the
HTML-only format exists to discourage copying under the authors' MIT Press contract. Nothing
here reproduces its text. Every chapter file is original synthesis — what the chapter
establishes, how to use it, where it has aged — plus a link to the official chapter. Read the
book at the link; use this to navigate it, keep it current, and turn it into decisions.
See [references/rights_and_use.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/references/rights_and_use.md).

## How to Use This Skill

- **No argument** — load the core frameworks below.
- **A topic** — ask about `regularization`, `saddle points`, `partition function`; resolved
  through the Topic Index, then that chapter file is read before answering.
- **`chNN`** — load that chapter's file.
- **"is this still true?"** — the 2016→2026 delta layer, in every chapter file and in
  [references/book_to_2026_delta.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/references/book_to_2026_delta.md).
- **"where do I start?"** — run `scripts/reading_path_planner.py`.

When asked about something outside these 20 chapters, say so and route to the delta reference
rather than improvising the book's position on material published after it.

---

## Core Frameworks & Mental Models

### The (T, P, E) frame — ch05

Name the **task**, the **performance measure**, and the **experience** in one sentence before any
model code. Most failed projects failed at P: an unstated metric, or a proxy whose relationship
to the real objective was never checked.

### Every loss is a negative log-likelihood — ch03, ch06

Choose the output distribution, then take its negative log. Gaussian → MSE, Bernoulli → binary
cross-entropy, categorical → cross-entropy, Laplace → MAE. "Which loss?" is always the question
"which distribution?" in disguise. Modern contrastive and preference objectives sit outside this
frame — a real limit of the book, not a gap in your understanding.

### KL asymmetry decides your failure mode — ch03, ch19, ch20

D(p‖q) ≠ D(q‖p). Forward KL is mode-covering (blurry averages); reverse KL is mode-seeking
(sharp but partial). This single fact predicts VAE blur, GAN mode collapse, and the
characteristic over-confidence of mean-field variational posteriors.

### Train-error-first triage — ch11, ch05

High training error → capacity or optimization is the bottleneck; **more data will not help**.
Low training error with a large validation gap → data or regularization. This is the highest-value
heuristic in the book. `scripts/training_diagnostics.py` runs it.

### Capacity, the gap, and the U-curve's caveat — ch05, ch07

Regularization trades variance for bias. But the classical U-shaped capacity curve is incomplete:
past the interpolation threshold, test error can fall again (double descent, 2019–2020,
post-dating the book). Practical consequence: when a large model overfits, try more data, more
regularization or longer training **before** shrinking it.

### Architecture is a prior, not a trick — ch09, ch10, ch15

Convolution asserts translation equivariance and locality. Recurrence asserts that the past
compresses into a state. A distributed representation asserts that factors combine
combinatorially. When the assertion is false, the architecture cannot be rescued by tuning — and
when it is true, it beats capacity. This is also why Vision Transformers need more data than
ConvNets: they discard the prior and buy it back with examples.

### Depth's real cost is gradient flow and activation memory — ch06, ch08, ch10

Backprop is the chain rule scheduled well: one forward-pass-equivalent of compute, and memory
proportional to stored activations. Depth fails through vanishing/exploding gradients and
ill-conditioning, which is why residual connections, normalization and clipping exist.

### The partition function organizes Part III — ch16, ch17, ch18, ch19

For undirected models, the likelihood gradient needs samples from the model itself. Four escape
routes: sample it (CD/PCD), sidestep it algebraically (pseudolikelihood, **score matching**),
learn around it (NCE), or estimate it for evaluation (AIS). Score matching's descendants are
today's diffusion models — which is why Part III repays reading even though its models did not
survive.

### Diagnose before you redesign — ch04, ch08, ch11

Gradient norm exploding → clip. Norm large but loss flat → ill-conditioning. Norm near zero with
high loss → saturation or dead units. NaN → numerics first. Change one thing per experiment.

---

## Chapter Index

| # | Title | Key content |
|---|-------|-------------|
| [ch01](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch01-introduction.md) | Introduction | representation learning, depth as composition, curse of dimensionality |
| [ch02](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch02-linear-algebra.md) | Linear Algebra | norms, SVD, eigendecomposition, conditioning, PCA |
| [ch03](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch03-probability-information-theory.md) | Probability & Information Theory | distributions, entropy, KL, cross-entropy |
| [ch04](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch04-numerical-computation.md) | Numerical Computation | under/overflow, conditioning, gradient descent, KKT |
| [ch05](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch05-machine-learning-basics.md) | Machine Learning Basics | capacity, bias–variance, No Free Lunch, MLE, manifolds |
| [ch06](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch06-deep-feedforward-networks.md) | Deep Feedforward Networks | output/hidden units, universal approximation, backprop |
| [ch07](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch07-regularization.md) | Regularization | norm penalties, augmentation, early stopping, dropout |
| [ch08](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch08-optimization.md) | Optimization | SGD, momentum, init, Adam, batch norm, saddles |
| [ch09](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch09-convolutional-networks.md) | Convolutional Networks | sparse interactions, sharing, equivariance, pooling |
| [ch10](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch10-sequence-modeling.md) | Sequence Modeling | BPTT, vanishing gradients, LSTM/GRU, attention |
| [ch11](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch11-practical-methodology.md) | Practical Methodology | metrics, baselines, the data-vs-capacity rule, debugging |
| [ch12](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch12-applications.md) | Applications | scaling, compression, vision, speech, NLP (dated) |
| [ch13](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch13-linear-factor-models.md) | Linear Factor Models | PPCA, factor analysis, ICA, sparse coding |
| [ch14](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch14-autoencoders.md) | Autoencoders | undercomplete, sparse, denoising, contractive |
| [ch15](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch15-representation-learning.md) | Representation Learning | transfer, distributed codes, disentanglement |
| [ch16](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch16-structured-probabilistic-models.md) | Structured Probabilistic Models | directed/undirected, energy-based, d-separation |
| [ch17](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch17-monte-carlo-methods.md) | Monte Carlo Methods | importance sampling, MCMC, Gibbs, mixing |
| [ch18](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch18-partition-function.md) | Confronting the Partition Function | CD/PCD, pseudolikelihood, score matching, NCE, AIS |
| [ch19](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch19-approximate-inference.md) | Approximate Inference | ELBO, EM, mean field, amortization |
| [ch20](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/chapters/ch20-deep-generative-models.md) | Deep Generative Models | Boltzmann machines, VAE, GAN, autoregressive |

## Topic Index

- **Activation functions, ReLU, GELU** → ch06
- **Adam, AdamW, adaptive optimizers** → ch08, ch07
- **Attention, transformers** → ch10, ch12
- **Autoencoders, denoising, sparse** → ch14, ch13
- **Backpropagation, autodiff** → ch06
- **Batch / layer normalization** → ch08
- **Bias–variance, double descent** → ch05
- **Convolution, pooling, receptive field** → ch09
- **Cross-entropy, KL divergence, entropy** → ch03
- **Diffusion, score matching** → ch18, ch14, ch20
- **Dropout, weight decay, early stopping** → ch07
- **ELBO, variational inference, EM** → ch19
- **Energy-based models, graphical models** → ch16
- **GANs, VAEs, generative taxonomy** → ch20
- **Gradient clipping, exploding/vanishing** → ch10, ch08
- **Hyperparameter search** → ch11
- **Initialization** → ch08
- **LSTM, GRU, BPTT, teacher forcing** → ch10
- **Maximum likelihood, MAP** → ch05, ch03
- **MCMC, Gibbs, importance sampling** → ch17
- **Numerical stability, softmax, log-space** → ch04
- **Partition function, CD, PCD, NCE** → ch18, ch16
- **PCA, ICA, factor analysis** → ch13, ch02
- **Representation learning, transfer, probes** → ch15, ch01
- **Saddle points, ill-conditioning** → ch08, ch04
- **SVD, eigendecomposition, condition number** → ch02
- **Training diagnostics, metric choice** → ch11
- **Universal approximation** → ch06

## Supporting Files

- [glossary.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/glossary.md) — every key term with its chapter
- [patterns.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/patterns.md) — techniques as instruments, with trade-offs
- [cheatsheet.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/cheatsheet.md) — decision tables and defaults
- [references/book_to_2026_delta.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/references/book_to_2026_delta.md) — what changed, per chapter
- [references/prerequisite_map.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/references/prerequisite_map.md) — the real dependency graph
- [references/study_method_canon.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/references/study_method_canon.md) — how to study a hard text
- [references/rights_and_use.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/deep-learning-book/skills/deep-learning-book/references/rights_and_use.md) — why this is a companion

## Tools

```bash
S=engineering/deep-learning-book/skills/deep-learning-book/scripts
python3 $S/reading_path_planner.py --goal "train a transformer" --background applied --hours-per-week 5
python3 $S/training_diagnostics.py --train-loss 0.02 --val-loss 1.9 --grad-norm 0.4 --epochs 30
python3 $S/capacity_planner.py --params 12000000 --train-examples 50000 --train-error 0.01 --val-error 0.22
python3 $S/model_arithmetic.py --spec-sample
```

Every tool supports `--help`, `--sample` and `--output json`, uses the standard library only, and
returns typed exit codes.

---

## Scope & Limits

This companion covers the 2016 edition's 20 chapters and the delta between them and 2026
practice. It does **not** cover: reinforcement learning beyond passing mention, LLM training
infrastructure, RLHF/DPO alignment, agentic systems, MLOps tooling, or fairness and safety
evaluation — none of which the book treats. For production ML engineering use
`engineering-team/senior-ml-engineer`; for LLM cost work use `engineering/llm-cost-optimizer`.

When a question lands outside the book, say the book does not cover it and cite the delta
reference for what replaced its position. A companion that quietly extrapolates is worse than one
that names its boundary.
