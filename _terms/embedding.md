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

在这里，说「Embedding / 向量表示」，指的是把原本不能直接拿来做数值计算的对象（文本、图像、音频、代码等），编码成一串浮点数向量，让「语义相近的东西」在向量空间里彼此靠近、方便比较。

它是语义搜索、RAG、推荐和聚类等任务的基础积木之一。

### 背景 / 为什么需要 Embedding

- 早期常用的表示方式是一维的 one-hot 向量：每个词一个维度，只能表示「是否为某个词」，但完全没有语义相似性；
- Embedding 则学习一个连续向量空间，让「语义相似」的词或对象在空间里位置接近，可以用距离（余弦相似度、内积等）来衡量相似度；
- 对于大模型时代的很多任务（检索、推荐、聚类、归类等），都可以先把对象映射到这个空间里，再做后续操作。

### 核心概念

- **向量空间与相似度**：每个对象是一个 `d` 维向量，相似度通常用余弦相似度或点积表示；
- **上下文相关 vs 静态表示**：
  - 早期词向量（如 Word2Vec、GloVe）为每个词给出一个固定向量；
  - 预训练语言模型（如 BERT、RoBERTa）会根据上下文给出不同的向量表示；
- **单模态 vs 多模态**：
  - 只处理文本的文本嵌入；
  - 像 CLIP 这样的多模态模型会把图像和文本映射到同一个空间；
- **任务目标驱动**：用于语义搜索、推荐、代码检索等不同任务的 Embedding，训练目标也会不同。

### 常见类型

- **词向量（Word Embedding）**：Word2Vec、GloVe 等通过共现统计学习词语语义；
- **上下文嵌入（Contextual Embedding）**：BERT、RoBERTa、ERNIE 等模型根据上下文动态生成向量；
- **跨模态嵌入**：CLIP、ALIGN 等模型将图像与文本映射到共享空间，实现跨模态检索与理解；
- **任务定制嵌入**：针对语义搜索、代码检索、音频检索等特定任务训练的专用向量表示。

### 跟哪些概念容易混淆？

- **Tokenization / 分词**：分词是把文本拆成 token，Embedding 才是把 token/句子/文档变成向量；
- **“特征工程”**：传统手工特征（TF-IDF、手工统计特征等）也会产出向量，但通常不具备强语义结构；Embedding 更强调「语义相似性」；
- **模型隐藏状态 vs 最终 Embedding**：很多模型内部层的隐藏向量都可以视作「表征」，实际用作检索或下游任务时，往往会对这些向量做 pooling、归一化或投影得到最终 Embedding。

### 典型用法

- **语义检索 / RAG**：把用户问题与候选文档编码为向量，通过向量相似度召回最相关的文档，再交给大模型生成答案；
- **推荐与相似内容发现**：用户行为、物品内容都编码成向量，在向量空间里寻找「邻居」；
- **聚类与可视化**：在向量空间上做聚类、降维（如 t-SNE、UMAP），观察语义结构；
- **去重与质量控制**：用向量相似度识别重复或高度相似的数据样本。

### 实践小贴士

- **维度与成本**：维度越高不一定越好，需要在表达能力与存储/检索成本之间折中；
- **评估方式**：不仅看向量间距离是否「好看」，更要看在下游任务（检索效果、推荐点击率等）上的表现；
- **量化与压缩**：在大规模场景中，会使用量化、蒸馏等方法降低向量存储与检索成本；
- **多语言与领域适配**：跨语言、多领域时，注意语义漂移问题，必要时做领域适配或继续训练。

### 延伸阅读

- [Mikolov et al. "Efficient Estimation of Word Representations in Vector Space." (2013).](https://arxiv.org/abs/1301.3781)（提出 Word2Vec 的 Skip-gram 与 CBOW 模型）
- [Pennington et al. "GloVe: Global Vectors for Word Representation." (2014).](https://nlp.stanford.edu/projects/glove/)（通过全局共现矩阵学习词向量）
- [Devlin et al. "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." (2019).](https://arxiv.org/abs/1810.04805)（介绍上下文敏感的双向编码器）
- [Radford et al. "Learning Transferable Visual Models From Natural Language Supervision." (2021).](https://arxiv.org/abs/2103.00020)（CLIP 通过对比学习实现跨模态嵌入）
