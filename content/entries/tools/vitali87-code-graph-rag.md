---
slug: vitali87-code-graph-rag
name: code-graph-rag
tagline: The ultimate RAG for your monorepo. Query, understand, and edit
  multi-language codebases with the power of AI and knowledge graphs
summary: Code-Graph-RAG parses a multi-language codebase with Tree-sitter,
  sharpened by compiler-grade frontends and runtime traces where available,
  builds a knowledge graph of its structure in an embedded graph database
  that...
categories:
  - databases-memory
tags:
  - ast
  - claude-code
  - code-analysis
  - code-understanding
status: active
quality_percentile: 90
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: vitali87/code-graph-rag
  official_vendor: false
  license: MIT
signals:
  stars: 5284
  last_commit: 2026-10-26T03:07:00Z
  stars_delta_7d: 18
  stars_growth_pct: 0.3
  trending_score: 18.06
  rank_current: 104
  rank_delta: -67
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5236
    - 5249
    - 5266
    - 5284
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: vitali87/code-graph-rag
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:36:59.052Z
  truncated: false
type: agent_tool
tool:
  subcategory: coding_agent
  install_command: pip install code-graph-rag
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - code-graph-rag
    env_vars: []
    confidence: manifest
---

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark-any.png">
    <source media="(prefers-color-scheme: light)" srcset="assets/logo-light-any.png">
    <img src="https://raw.githubusercontent.com/vitali87/code-graph-rag/main/assets/logo-light-any.png" alt="Code-Graph-RAG Logo" width="480">
  </picture>

  <p>
    <a href="https://trendshift.io/repositories/99619" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/99619" alt="vitali87/code-graph-rag | Trendshift" width="250" height="55"/></a>
  </p>

  <p>
  <a href="https://github.com/vitali87/code-graph-rag/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/vitali87/code-graph-rag/ci.yml?branch=main" alt="CI" />
  </a>
  <a href="https://codecov.io/gh/vitali87/code-graph-rag">
    <img src="https://codecov.io/gh/vitali87/code-graph-rag/graph/badge.svg" alt="Codecov" />
  </a>
  <a href="https://sonarcloud.io/summary/overall?id=vitali87_code-graph-rag">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=vitali87_code-graph-rag&metric=alert_status" alt="Quality Gate Status" />
  </a>
  <a href="https://code-graph-rag.com">
    <img src="https://img.shields.io/badge/Enterprise-Support%20%26%20Services-6366f1" alt="Enterprise Support" />
  </a>
  <a href="https://pypi.org/project/code-graph-rag/">
    <img src="https://img.shields.io/pypi/v/code-graph-rag" alt="PyPI Version" />
  </a>
  <a href="https://pepy.tech/projects/code-graph-rag">
    <img src="https://static.pepy.tech/personalized-badge/code-graph-rag?period=total&units=INTERNATIONAL_SYSTEM&left_color=BLACK&right_color=GREEN&left_text=downloads" alt="PyPI Downloads" />
  </a>
  <a href="https://skillsllm.com/security-check/DHsMGRb1Ysys">
    <img src="https://skillsllm.com/security-check/badge.svg?owner=vitali87&repo=code-graph-rag" alt="SkillsLLM Security Check" />
  </a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/vitali87/code-graph-rag">
    <img src="https://api.scorecard.dev/projects/github.com/vitali87/code-graph-rag/badge" alt="OpenSSF Scorecard" />
  </a>
  <a href="https://www.bestpractices.dev/projects/13757">
    <img src="https://www.bestpractices.dev/projects/13757/badge" alt="OpenSSF Best Practices" />
  </a>
</p>
</div>

# Code-Graph-RAG

Code-Graph-RAG parses a multi-language codebase with Tree-sitter, sharpened by compiler-grade frontends and runtime traces where available, builds a knowledge graph of its structure in an embedded graph database that needs no server, and lets you query, edit, and optimise that code in plain English. It works across a monorepo of mixed languages under one unified graph schema.

<p align="center">
  <b>1. Index:</b> <code>cgr start --update-graph</code> parses a repository into a knowledge graph (sped up)
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/vitali87/code-graph-rag/main/assets/demo-indexing.gif" alt="cgr parsing the code-graph-rag repository into a knowledge graph, then printing node and relationship counts">
</p>

<p align="center">
  <b>2. Ask:</b> <code>cgr start</code> answers questions and edits code, grounded in that graph
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/vitali87/code-graph-rag/main/assets/demo.gif" alt="cgr agent answering questions about the indexed repository">
</p>

## Latest News 🔥

<!-- SECTION:latest_news -->
- **Security Enhancements**: Incorporates an OSS Scanner build image and threat model.
- **Data Export**: Ensures all node properties within the graph are exported.
- **SQL Fixes**: Addresses several SQL-related issues including grammar errors and dead-code roots.
- **Rust Fixes**: Improves indexing of methods and handling of types in Rust code.
- **Build Fixes**: Repairs build issues related to eMudhra root certificates and distrusted components.
<!-- /SECTION:latest_news -->

See [NEWS.md](https://github.com/vitali87/code-graph-rag/blob/main/NEWS.md) for the full history.

## What It Does

Point Code-Graph-RAG at a repository and it reads every source file, extracts functions, classes, methods, modules, and the relationships between them, and stores the result as an interconnected graph. Once the graph exists you can:

- Ask questions about the codebase in natural language and get answers grounded in the real structure.
- Retrieve the actual source of any function, class, or method by name or by intent.
- Edit code through the agent with AST-based surgical patching and a diff preview before anything changes.
- Optimise code against language best practices or your own coding standards.
- Find dead code by walking call and reference edges from entry points.
- Search and rewrite structurally by AST pattern with ast-grep.
- Overlay runtime behaviour: trace a test run (or pull production eBPF profiles) with `cgr trace` and merge the calls that actually happened into the graph, exposing dispatch that static analysis cannot see.

## How It Works

The system has two components:

1. **Multi-language parser.** A Tree-sitter based parser reads the codebase and ingests functions, classes, methods, modules, and their relationships into the graph under a single language-agnostic schema. Where a toolchain is available, compiler-grade frontends layer exact facts on top (libclang for C/C++, `go/types` for Go, and opt-in Roslyn, `javac` and Jedi for C#, Java and Python), and [dynamic tracing](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/dynamic-tracing.md) merges calls observed at runtime. Tree-sitter stays the backbone: a trace only sees code that ran, and a compiler frontend only covers what its toolchain can build.
2. **RAG system** (`codebase_rag/`). An interactive CLI that turns natural language into Cypher queries, retrieves matching code, and drives AI-powered editing and optimisation.

```
Source Code -> Tree-sitter Parser -> AST Analysis -> Knowledge Graph
                                                             |
User Query -> AI Model (Cypher Gen) -> Cypher Query -> Graph Results -> Response
```

The graph is stored in an embedded SQLite file by default. Memgraph and Neo4j are opt-in backends that run the same Cypher; [Graph Backends](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/embedded-graph.md) compares them.

See the [Architecture Overview](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/overview.md) and [Graph Schema](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/graph-schema.md) for the full picture.

## Supported Languages

Python, TypeScript, TSX, JavaScript, Rust, Go, Java, C, C++, C#, PHP, Lua, Dart, and Julia are fully supported. Scala is in development, and Ruby, Kotlin, Swift, Elixir, Haskell, Solidity, Bash, and Nix have structural support (modules, functions, classes where the language has them, and imports) through the pluggable ast-grep tier. See the [Language Support](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/language-support.md) matrix for per-language capabilities.

## Installation

`cgr` is published to PyPI. Install it system-wide with the `treesitter-full` (tree-sitter grammars), `ast-grep` (Ruby, Kotlin, Swift, Elixir, Haskell, Solidity, Bash, Nix) and `semantic` (vector search) extras:

```bash
# with uv (recommended)
uv tool install "code-graph-rag[treesitter-full,ast-grep,semantic]"

# or with pipx
pipx install "code-graph-rag[treesitter-full,ast-grep,semantic]"
```

### Which version am I getting?

Three version lines exist and they intentionally differ:

| where | what it tracks |
|---|---|
| git tags | every version, one per merge |
| GitHub Releases (binaries, signatures) | every 50th version, plus any security fix, breaking change or merge labelled `release now` |
| PyPI | every 50th version, plus any security fix, breaking change or merge labelled `release now` |

So the newest tag on `main` usually runs ahead of the newest release, often by
tens of patch versions; they coincide only just after a release. Nothing is
stuck, the cadences differ by design. A security fix, a breaking change or a
merge a maintainer labels `release now` does NOT wait for the cadence: each ships
a release and a PyPI upload immediately.

`uv tool install` and `pipx install` give you the newest PyPI version, which is the
newest RELEASE, not the newest tag. Interim tags exist so every merge is
addressable; binaries and PyPI uploads follow the cadence above.

To run code newer than the latest release, install from git:

```bash
uv tool install "code-graph-rag[treesitter-full,ast-grep,semantic] @ git+https://github.com/vitali87/code-graph-rag@main"
```

To upgrade an existing install, run `uv tool upgrade code-graph-rag` (with pipx, `pipx upgrade code-graph-rag`, or `pipx reinstall code-graph-rag` for a git install). [Upgrade](https://github.com/vitali87/code-graph-rag/blob/main/docs/getting-started/installation.md#upgrade) covers the other install methods.

You also need Python 3.12+ and `ripgrep`. The graph lives in an embedded SQLite file by default, so there is no database server to run: no Docker and no `cmake`. Memgraph and Neo4j remain available as opt-in backends ([Graph Backends](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/embedded-graph.md)). Full prerequisites, source installs, and environment setup are in the [Installation](https://github.com/vitali87/code-graph-rag/blob/main/docs/getting-started/installation.md) guide.

> [!NOTE]
> The wheel is pure Python (`py3-none-any`), so it installs on any platform with Python 3.12 or newer. Older system interpreters (Debian Bookworm ships 3.11) need the interpreter pinned explicitly; see [Installation](https://github.com/vitali87/code-graph-rag/blob/main/docs/getting-started/installation.md#older-system-interpreters) for the commands.

## Quick Start

```bash
# Parse a repository into the graph, then query it
cgr start --repo-path /path/to/repo --update-graph
cgr start --repo-path /path/to/repo
```

The graph is written to `~/.cgr/graph.sqlite` (set `SQLITE_GRAPH_PATH` to move it).
To use Memgraph instead, install the driver with the `memgraph` extra, set
`GRAPH_BACKEND=memgraph`, and start the packaged Memgraph + Qdrant stack with
`cgr daemon up`.

Repeat the first command for each repository you want indexed; the graph is
shared, and syncing one project leaves the others alone. To start over from an
empty graph, add `--clean` — it deletes **every** project in the shared graph,
not just this one, and asks for confirmation first when other
projects would be destroyed.

A default index leaves out the opt-in [capture groups](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/graph-schema.md#capture-groups); add them with `--capture` or `CGR_CAPTURE`.

The [Quick Start](https://github.com/vitali87/code-graph-rag/blob/main/docs/getting-started/quickstart.md) guide walks through parsing, querying, and exporting in five minutes.

## MCP Server

Code-Graph-RAG runs as an [MCP](https://modelcontextprotocol.io) server so Claude Code and other MCP clients can query and edit your codebase directly. See the [MCP Server](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/mcp-server.md) guide for setup.

## Documentation

**Getting Started**
- [Installation](https://github.com/vitali87/code-graph-rag/blob/main/docs/getting-started/installation.md)
- [Quick Start](https://github.com/vitali87/code-graph-rag/blob/main/docs/getting-started/quickstart.md)
- [Configuration](https://github.com/vitali87/code-graph-rag/blob/main/docs/getting-started/configuration.md)

**User Guide**
- [CLI Reference](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/cli-reference.md)
- [Interactive Querying](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/interactive-querying.md)
- [Code Optimisation](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/code-optimization.md)
- [Dead Code Detection](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/dead-code.md)
- [Dynamic Call Tracing](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/dynamic-tracing.md)
- [Graph Export](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/graph-export.md)
- [Real-Time Updates](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/realtime-updates.md)
- [C/C++ Semantic Mode](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/cpp-semantic-mode.md)
- [MCP Server](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/mcp-server.md)
- [Porting Between Languages](https://github.com/vitali87/code-graph-rag/blob/main/docs/guide/porting.md)

**Architecture**
- [Overview](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/overview.md)
- [Graph Schema](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/graph-schema.md)
- [Graph Backends](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/embedded-graph.md)
- [Language Support](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/language-support.md)
- [Data-Flow Edges](https://github.com/vitali87/code-graph-rag/blob/main/docs/architecture/data-flow-edges.md)

**Python SDK**
- [Overview](https://github.com/vitali87/code-graph-rag/blob/main/docs/sdk/overview.md)
- [Graph Loader](https://github.com/vitali87/code-graph-rag/blob/main/docs/sdk/graph-loader.md)
- [Cypher Generator](https://github.com/vitali87/code-graph-rag/blob/main/docs/sdk/cypher-generator.md)
- [Semantic Search](https://github.com/vitali87/code-graph-rag/blob/main/docs/sdk/semantic-search.md)

**Advanced**
- [Adding Languages](https://github.com/vitali87/code-graph-rag/blob/main/docs/advanced/adding-languages.md)
- [Ignore Patterns](https://github.com/vitali87/code-graph-rag/blob/main/docs/advanced/ignore-patterns.md)
- [Building Binaries](https://github.com/vitali87/code-graph-rag/blob/main/docs/advanced/building-binaries.md)
- [Troubleshooting](https://github.com/vitali87/code-graph-rag/blob/main/docs/advanced/troubleshooting.md)

## Enterprise Services

Code-Graph-RAG is open source and free to use. For organisations that need more, we offer **fully managed cloud-hosted solutions** and **on-premise deployments**:

- **Cloud-Hosted Deployment**: Managed cloud infrastructure for both the graph database and the AI agent connection. Zero infrastructure overhead, so we handle scaling, updates, and availability while your team focuses on building.
- **On-Premise & Air-Gapped Deployment**: Deploy Code-Graph-RAG entirely within your own environment, including air-gapped networks. Full data sovereignty for regulated industries and security-sensitive organisations.

We also offer custom development, integration consulting, technical support contracts, and team training.

**[View plans & pricing at code-graph-rag.com](https://code-graph-rag.com/enterprise)**

## Contributing

Please see [CONTRIBUTING.md](https://github.com/vitali87/code-graph-rag/blob/main/CONTRIBUTING.md) for contribution guidelines. Good first PRs come from the TODO issues.

## Support

For issues or questions, check the [Troubleshooting](https://github.com/vitali87/code-graph-rag/blob/main/docs/advanced/troubleshooting.md) guide first, then open an issue.

If cgr is useful to you, please consider pledging support on [GitHub Sponsors](https://github.com/sponsors/vitali87). cgr links the page under `cgr --version` and, in a terminal, after most commands finish; set `CGR_SPONSOR_PLEDGE=false` to hide that line.

## License

MIT. See [LICENSE](https://github.com/vitali87/code-graph-rag/blob/main/LICENSE).

Third-party components and their licences are credited on the [Credits page](https://docs.code-graph-rag.com/credits/).
