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

### 扩展架构
- **多路检索**：结合稀疏检索（BM25）与密集检索，提高召回覆盖率。
- **查询改写**：使用自反思、HyDE 或多轮提问改善查询质量。
- **迭代生成**：ReAct-RAG、Self-RAG 等在生成过程中自我验证并追加检索。

### 工程关注点
- **数据治理**：需要定期更新知识库、去除重复和过期内容。
- **评估指标**：除答案准确率外，还要关注引用覆盖率、检索召回率与延迟。
- **安全与合规**：确保引用内容具备授权，避免泄露敏感数据。

### 参考资料
- [Lewis et al. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." *NeurIPS* (2020).](https://arxiv.org/abs/2005.11401)（提出 RAG 框架并验证在问答任务上的效果）
- [Gao et al. "Precise Zero-Shot Dense Retrieval without Relevance Labels." (2023).](https://arxiv.org/abs/2212.10496)（HyDE 方法通过生成假文档改写查询）
- [Shinn et al. "Reflexion: Language Agents with Verbal Reinforcement Learning." (2023).](https://arxiv.org/abs/2303.11366)（展示自我反思用于改进检索增强推理）
- [Asai et al. "Self-RAG: Learning to Retrieve, Generate, and Critique for Self-Refining Language Models." (2023).](https://arxiv.org/abs/2310.11511)（提出生成过程中自我检索与评估的框架）
