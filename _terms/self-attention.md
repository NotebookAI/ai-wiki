---
id: self-attention
title: 自注意力机制
title_en: Self-Attention
category: foundation
type: concept
order: 20
aliases: [自注意力, 点积注意力]
keywords: [Self-Attention, 自注意力, 注意力机制, Transformer]
brief: 一种让序列中每个位置“关注”其他位置表示的机制，是 Transformer 与现代大模型的核心组件。
meta: [注意力机制, 序列建模]
---

自注意力（Self-Attention）指的是序列中的每个 token 都可以根据内容动态地为其他 token 分配权重，从而聚合整段上下文信息。相较于只能局部感受或固定窗口的卷积/RNN，自注意力可以在一次计算中建模长距离依赖。

在实现上，每个位置的表示会被映射为查询（Q）、键（K）、值（V）向量，通过缩放点积计算相似度并归一化得到注意力权重，再对值向量加权求和。多头自注意力（Multi-Head Attention）则并行地在不同子空间上重复这一过程，以捕捉更丰富的关系模式。

### 工程与实践要点
- 自注意力的计算复杂度通常为 O(n²)，长序列会带来显存与时间开销，这也是 FlashAttention、稀疏注意力、线性注意力等优化方法出现的原因。
- 在大语言模型中，自注意力配合位置编码（如 RoPE）和因果掩码，可以实现自回归式的文本生成。
- 在多模态模型（如 CLIP、ViT、LLaVA）中，自注意力同样用来建模图像 patch、文本 token 或跨模态之间的关系。

