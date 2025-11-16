---
id: milvus
title: Milvus 向量数据库
title_en: Milvus
category: rag
type: tool
order: 44
aliases: [Milvus]
keywords: [向量数据库, 相似度检索, RAG]
brief: 面向海量向量检索场景的开源数据库，提供高性能 ANN 查询与混合搜索能力。
meta: [ANN, RAG, 混合检索]
---

Milvus 由 Zilliz 开源，支持基于 HNSW、IVF-PQ、DiskANN 等多种近似最近邻（ANN）索引结构，可在亿级向量规模下提供毫秒级检索。其架构拆分为协调、计算、存储组件，支持水平扩展与多租户管理。

在 RAG 场景中，Milvus 提供向量与标量混合过滤、时间旅行查询以及与异构存储（S3、HDFS）的集成，方便构建企业级知识库；同时提供 Python、Java、Go SDK 及 REST/gRPC 接口，便于与 LangChain、LlamaIndex 等框架对接。

### 参考资料
- [Milvus 官方文档：What is Milvus?](https://milvus.io/docs/overview.md)（介绍系统架构与核心特性）
- [VLDB 论文《Milvus: A Purpose-Built Vector Data Management System》](https://www.vldb.org/pvldb/vol14/p3153-wang.pdf)（详细阐述 Milvus 的设计与性能评估）
