---
id: retriever
title: 检索器
title_en: Retriever
category: rag
type: concept
order: 96
aliases: [Retriever, 检索模块]
keywords: [Retriever, Retrieval, RAG, 召回, Top-k]
brief: RAG 系统中负责“把问题变成检索请求并召回候选证据”的模块，可基于 BM25、向量检索或混合检索实现。
meta: [召回, 模块化]
---

检索器（Retriever）是 RAG 流程中的“召回层”：给定用户问题（或改写后的查询），从索引中找出 top-k 候选片段/文档作为证据，再交给后续的重排（rerank）与生成（generate）。

### 典型输入与输出
- 输入：query（可能包含改写、扩展、过滤条件）
- 输出：候选列表（文档/片段）+ 分数 + 元数据（来源、更新时间、权限、位置）

### 常见实现
- 稀疏检索：BM25 等
- 向量检索：embedding + ANN（如 HNSW）
- 混合检索：BM25 + 向量

### 实践提醒
- Retriever 的“召回覆盖”与“证据质量”决定了生成上限；不要把问题都归因到 LLM。
- 一定要保留可回放的检索日志：query、top-k、分数、过滤条件、版本信息。

### 相关词条
- [RAG]({{ '/terms/rag/' | relative_url }})、[BM25]({{ '/terms/bm25/' | relative_url }})、[混合检索（Hybrid Search）]({{ '/terms/hybrid-search/' | relative_url }})、[Reranker]({{ '/terms/reranker/' | relative_url }})
