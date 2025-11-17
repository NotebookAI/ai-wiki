---
id: reranker
title: 重排模型 / Reranker
title_en: Reranker · Cross-Encoder
category: rag
type: method
order: 60
aliases: [Reranker, 重排模型, Cross-Encoder, bge-reranker]
keywords: [Reranker, bge-reranker, Cross-Encoder, 相关性排序]
brief: 在初步检索结果上进一步精排相关性的模型，常基于 Cross-Encoder 结构，用于提升 RAG 检索质量。
meta: [精排, 相关性建模]
---

Reranker（重排模型）通常在向量检索或 BM25 检索得到的候选文档集合上运行，对每个「查询-文档」对进行更精细的相关性打分，再按得分进行排序。与一次性编码文档的 Bi-Encoder 不同，Cross-Encoder 在打分时可以充分利用查询与文档之间的交互信息，因此精度更高但计算成本也更大。

诸如 bge-reranker 等开源模型在中文与多语言检索任务中表现良好，常用于企业级搜索、RAG 系统与问答平台的精排模块。

