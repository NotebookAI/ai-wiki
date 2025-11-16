---
id: embedding
title: 向量表示 / 嵌入
title_en: Embedding
category: foundation
type: core
order: 5
aliases: [表征, 向量化]
keywords: [Embedding, 向量, 语义向量, 表征]
brief: 将文本/图像/音频等对象映射到连续向量空间，以便计算相似度与检索。
meta: [语义表示, 相似度检索]
---

Embedding 将对象编码为固定维度的向量，以便通过距离度量（如余弦相似度）进行匹配与检索，是 RAG、推荐、聚类等任务的基石。

### 主要类型
- **词向量（Word Embedding）**：Word2Vec、GloVe 等模型通过共现统计学习词语语义。
- **上下文嵌入（Contextual Embedding）**：BERT、RoBERTa、ERNIE 等预训练模型根据上下文生成动态表示。
- **跨模态嵌入**：CLIP、ALIGN 等模型将图像与文本映射到共享空间，实现跨模态检索与理解。
- **任务定制嵌入**：针对语义搜索、代码检索、音频检索等特定任务训练专用模型。

### 应用要点
- **向量数据库**：利用 FAISS、Milvus、PGVector 等进行高维向量的相似度搜索。
- **向量质量评估**：通过对比学习、聚类可分性、下游任务效果来衡量嵌入质量。
- **检索增强生成（RAG）**：将嵌入用于召回相关文档，为大模型回答提供事实依据。

### 优化方向
- 维度压缩与量化降低存储与检索成本。
- 训练中引入对比损失、难样本挖掘提升区分度。
- 考虑多语言、多领域适配，减少语义漂移。

### 参考资料
- [Mikolov et al. "Efficient Estimation of Word Representations in Vector Space." (2013).](https://arxiv.org/abs/1301.3781)（提出 Word2Vec 的 Skip-gram 与 CBOW 模型）
- [Pennington et al. "GloVe: Global Vectors for Word Representation." (2014).](https://nlp.stanford.edu/projects/glove/)（通过全局共现矩阵学习词向量）
- [Devlin et al. "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." (2019).](https://arxiv.org/abs/1810.04805)（介绍上下文敏感的双向编码器）
- [Radford et al. "Learning Transferable Visual Models From Natural Language Supervision." (2021).](https://arxiv.org/abs/2103.00020)（CLIP 通过对比学习实现跨模态嵌入）
