---
slug: chroma-core-chroma
name: chroma
tagline: Search infrastructure for AI
summary: Chroma - the open-source data infrastructure for AI.
categories:
  - databases-memory
tags:
  - agents
  - ai-agents
  - database
  - rust
status: active
quality_percentile: 51
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: chroma-core/chroma
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 29621
  last_commit: 2026-10-30T21:09:26Z
  stars_delta_7d: 38
  stars_growth_pct: 0.1
  trending_score: 38.05
  rank_current: 91
  rank_delta: -14
  velocity_source: snapshot_delta
  sparkline_4w:
    - 29530
    - 29583
    - 29621
language: en
needs_keys: false
prerequisites:
  - multi
readme_source:
  repo: chroma-core/chroma
  path: README.md
  branch: main
  fetched_at: 2026-11-02T09:06:58.092Z
  truncated: false
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install chromadb
  runtime: multi
  execution_mode: local
  has_mcp_support: false
---

![Chroma](https://raw.githubusercontent.com/chroma-core/chroma/main/docs/assets/chroma-wordmark-color.png#gh-light-mode-only)
![Chroma](https://raw.githubusercontent.com/chroma-core/chroma/main/docs/assets/chroma-wordmark-white.png#gh-dark-mode-only)

<p align="center">
    <b>Chroma - the open-source data infrastructure for AI</b>. <br />
</p>

<p align="center">
  <a href="https://discord.gg/MMeYNTmh3x" target="_blank">
      <img src="https://img.shields.io/discord/1073293645303795742?cacheSeconds=3600" alt="Discord">
  </a> |
  <a href="https://github.com/chroma-core/chroma/blob/master/LICENSE" target="_blank">
      <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License">
  </a> |
  <a href="https://docs.trychroma.com/" target="_blank">
      Docs
  </a> |
  <a href="https://www.trychroma.com/" target="_blank">
      Homepage
  </a>
</p>

```bash
pip install chromadb # python client
# for javascript, npm install chromadb!
# for client-server mode, chroma run --path /chroma_db_path
```

## Chroma Cloud

Our hosted service, Chroma Cloud, powers serverless vector, hybrid, and full-text search. It's extremely fast, cost-effective, scalable and painless. Create a DB and try it out in under 30 seconds with $5 of free credits.

[Get started with Chroma Cloud](https://trychroma.com/signup)

## API

The core API is only 4 functions (run our [💡 Google Colab](https://colab.research.google.com/drive/1QEzFyqnoFxq7LUGyP1vzR4iLt9PpCDXv?usp=sharing)):

```python
import chromadb
# setup Chroma in-memory, for easy prototyping. Can add persistence easily!
client = chromadb.Client()

# Create collection. get_collection, get_or_create_collection, delete_collection also available!
collection = client.create_collection("all-my-documents")

# Add docs to the collection. Can also update and delete. Row-based API coming soon!
collection.add(
    documents=["This is document1", "This is document2"], # we handle tokenization, embedding, and indexing automatically. You can skip that and add your own embeddings as well
    metadatas=[{"source": "notion"}, {"source": "google-docs"}], # filter on these!
    ids=["doc1", "doc2"], # unique for each doc
)

# Query/search 2 most similar results. You can also .get by id
results = collection.query(
    query_texts=["This is a query document"],
    n_results=2,
    # where={"metadata_field": "is_equal_to_this"}, # optional filter
    # where_document={"$contains":"search_string"}  # optional filter
)
```

Learn about all features on our [Docs](https://docs.trychroma.com)

## Get involved

Chroma is a rapidly developing project. We welcome PR contributors and ideas for how to improve the project.
- [Join the conversation on Discord](https://discord.com/invite/chromadb) - `#contributing` channel
- [Review the 🛣️ Roadmap and contribute your ideas](https://docs.trychroma.com/docs/overview/oss#roadmap)
- [Grab an issue and open a PR](https://github.com/chroma-core/chroma/issues) - [`Good first issue tag`](https://github.com/chroma-core/chroma/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- [Read our contributing guide](https://docs.trychroma.com/docs/overview/oss#contributing)

**Release Cadence**
We currently release new tagged versions of the `pypi` and `npm` packages on Mondays. Hotfixes go out at any time during the week.

## License

[Apache 2.0](https://github.com/chroma-core/chroma/blob/main/LICENSE)
