---
id: ai-search
title: AI 搜索
title_en: AI Search
category: product
type: practice
order: 83
aliases: [Answer Engine, 生成式搜索]
keywords: [AI Search, Search, RAG, 答案引擎, 引用, Grounding]
brief: 把检索与生成结合的搜索产品形态：先找“证据”，再生成“答案”，通常附带引用与可追溯来源。
meta: [产品形态, RAG 落地]
---

AI 搜索（AI Search）通常指“答案引擎”式的搜索体验：系统不只是返回链接列表，而是把检索到的内容组织成自然语言答案，并尽量提供可追溯的来源引用。

在实现上，它经常以 RAG 为核心：先检索（网页/文档/知识库/数据库），再让模型基于检索结果生成回答，以降低幻觉并提升时效性。

### 典型能力
- **引用与可追溯**：把答案中的关键结论绑定到具体来源片段（quote/snippet）。
- **多轮澄清**：当需求不明确时先提问，再检索与总结。
- **任务化搜索**：把搜索结果转化为下一步动作（例如生成待办、写邮件、生成代码片段）。

### 常见难点
- **证据对齐**：引用存在不等于结论正确；需要做证据覆盖、冲突检测与高风险声明。
- **检索质量**：索引、切分、召回与重排（rerank）往往比“换更大模型”更影响体验。
- **成本与延迟**：多次检索 + 重排 + 长上下文会显著增加延迟，需要缓存与分层策略。

### 相关词条
- {{ '/terms/rag/' | relative_url }}、{{ '/terms/embedding/' | relative_url }}、{{ '/terms/reranker/' | relative_url }}、{{ '/terms/hallucination/' | relative_url }}、{{ '/terms/tool-calling/' | relative_url }}、{{ '/terms/grounding/' | relative_url }}、{{ '/terms/rag-evaluation/' | relative_url }}
