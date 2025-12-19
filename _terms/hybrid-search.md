---
id: hybrid-search
title: 混合检索
title_en: Hybrid Search
category: rag
type: method
order: 95
aliases: [Hybrid Search, 混合搜索]
keywords: [Hybrid Search, BM25, Dense Retrieval, Sparse Retrieval, RAG]
brief: 将稀疏检索（如 BM25）与向量检索（dense retrieval）组合，提升召回覆盖与鲁棒性，是很多 RAG/AI 搜索系统的常用默认配置。
meta: [召回覆盖, 鲁棒性]
---

混合检索（Hybrid Search）指把稀疏检索（BM25/关键词匹配）与向量检索（语义相似）结合起来，用两条“互补”的信号提升召回覆盖率。

### 为什么混合检索常有效
- 稀疏检索擅长“精确词项”（专名、编号、代码符号）
- 向量检索擅长“语义相近”（同义改写、概念相关）

### 常见融合方式
- **并集召回**：分别取 top-k，再合并去重。
- **加权融合**：对 BM25 分数与向量相似度做归一化后加权。
- **分层检索**：先 BM25 粗筛，再向量/重排精筛（或反过来）。

### 实践建议
- 先用回归集确定：你的查询更偏“关键词型”还是“语义型”，再决定权重/策略。
- 混合检索后通常更需要 reranker 来做最终精排与证据质量控制。

### 相关词条
- [BM25]({{ '/terms/bm25/' | relative_url }})、[向量（Embedding）]({{ '/terms/embedding/' | relative_url }})、[Reranker]({{ '/terms/reranker/' | relative_url }})、[RAG]({{ '/terms/rag/' | relative_url }})
