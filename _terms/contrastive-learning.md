---
id: contrastive-learning
title: 对比学习
title_en: Contrastive Learning
category: training
type: method
order: 67
aliases: [对比学习, Contrastive Learning]
keywords: [Contrastive Learning, 对比学习, 表示学习, InfoNCE]
brief: 通过拉近「正样本」距离、推远「负样本」距离来学习表示的训练范式，是多模态与向量检索模型的核心技术之一。
meta: [表示学习, 多模态, 检索]
---

对比学习在训练时会构造成对或成组的样本：具有语义相关性的样本视为正对，不相关的视为负对。模型被优化为在嵌入空间中拉近正对距离、推远负对距离，从而获得具有良好语义结构的表示。典型损失包括 InfoNCE、NT-Xent 等。

CLIP、SimCLR、对比式句向量模型以及大量向量检索模型都采用对比学习思想，是 RAG 与多模态系统的基础技术。

