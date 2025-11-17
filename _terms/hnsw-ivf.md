---
id: hnsw-ivf
title: HNSW / IVF 索引
title_en: HNSW · IVF Index
category: rag
type: concept
order: 61
aliases: [HNSW, IVF, ANN 索引]
keywords: [HNSW, IVF, 近似最近邻, 向量索引]
brief: 构建在图结构或倒排列表上的近似最近邻（ANN）索引结构，是向量数据库与检索库的核心组件。
meta: [ANN, 向量搜索, 索引结构]
---

HNSW（Hierarchical Navigable Small World）是一种基于小世界图的向量索引结构，通过分层图与邻居连接实现高效的近似最近邻搜索；IVF（Inverted File）则将向量分配到若干聚类中心，在查询时只在少数簇内进行搜索。两者都是 FAISS、Milvus、Weaviate 等系统广泛使用的基础索引。

在实际部署中，HNSW 更适合读多写少、需要高召回率的场景，而 IVF 系列（如 IVF-PQ）在大规模数据下具有更好的内存与计算效率。选型时需要在召回率、延迟与资源占用之间权衡。

