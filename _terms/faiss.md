---
id: faiss
title: FAISS 向量检索库
title_en: FAISS
category: rag
type: tool
order: 54
aliases: [FAISS]
keywords: [FAISS, 向量检索, ANN, Facebook AI]
brief: Meta 开源的高性能向量相似度搜索库，是构建向量数据库与 RAG 系统的基础组件之一。
meta: [ANN 索引, 向量搜索]
---

FAISS 提供了多种近似最近邻（ANN）索引结构，如 IVF、HNSW、PQ 等，支持在 CPU 与 GPU 上对高维向量进行高效相似度检索。许多向量数据库（Milvus、Weaviate 等）或框架（LangChain、LlamaIndex）在底层直接或间接依赖 FAISS。

在轻量级 RAG 场景中，开发者也可以直接在本地使用 FAISS 构建索引，无需部署完整数据库，用于原型验证或小规模知识库问答。

