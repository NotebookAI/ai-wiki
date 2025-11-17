---
id: pinecone
title: Pinecone 向量数据库
title_en: Pinecone
category: rag
type: tool
order: 55
aliases: [Pinecone]
keywords: [Pinecone, 向量数据库, 托管服务, RAG]
brief: 一款托管向量数据库服务，提供高可用、高扩展性的相似度搜索能力，常用于生产级 RAG 系统。
meta: [托管服务, 向量检索]
---

Pinecone 将向量索引与存储、扩容、监控等能力封装为云服务，开发者通过 API 即可完成索引创建、向量写入与查询，无需自行运维底层数据库。它支持多种索引类型和过滤查询，适合大规模在线检索场景。

在典型 RAG 架构中，Pinecone 负责存储文档向量与元数据，与应用后端或框架（如 LangChain）协作完成检索与重排。

