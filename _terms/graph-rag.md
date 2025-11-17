---
id: graph-rag
title: Graph RAG
title_en: Graph RAG
category: rag
type: concept
order: 59
aliases: [Graph RAG, 图增强检索]
keywords: [Graph RAG, 知识图谱, 关系建模, RAG]
brief: 在传统向量检索基础上引入图结构或知识图谱，用节点和边显式建模实体关系的 RAG 变体。
meta: [知识图谱, 图检索]
---

Graph RAG 在构建知识库时，不仅存储向量和原文片段，还会显式构建实体与实体之间的关系（如引用、上下位、因果）。在检索阶段，系统可以沿图结构扩展或约束检索结果，从而得到更有结构化的上下文，为复杂问答或推理任务提供支持。

常见实践包括结合 Weaviate、Neo4j 等图或向量数据库，在索引构建阶段同步维护图结构，并在生成阶段引导模型利用这些关系信息进行更一致的回答。

