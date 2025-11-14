---
id: rag
title: 检索增强生成（RAG）
title_en: Retrieval-Augmented Generation · RAG
category: rag
type: concept
order: 6
aliases: [检索增强]
keywords: [RAG, Retrieval Augmented Generation, 检索增强]
brief: 结合“搜索 + 大模型”，让回答基于真实文档而非仅靠模型记忆，降低幻觉。
meta: [知识库问答, 语义检索, 降低幻觉]
chips: [知识库问答, 语义检索, 降低幻觉]
---

典型流程：

1. 预处理：将文档切片（Chunking），为每段生成向量（Embedding）。
2. 存储：将向量与原文存入向量数据库（如 FAISS/Milvus）。
3. 检索：用户问题编码为向量，检索相似片段。
4. 生成：将“问题 + 检索到的片段”作为上下文，提示大模型作答并引用来源。

优势：增强事实依据、易于按领域扩展、可控性更好；挑战包括检索召回、片段拼接与长上下文成本等。

