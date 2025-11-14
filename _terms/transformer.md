---
id: transformer
title: Transformer 架构
title_en: Transformer
category: foundation
type: model
order: 4
aliases: [自注意力]
keywords: [Transformer, Self-Attention, 注意力机制, Vaswani 2017]
brief: 现代 NLP/LLM 的基础架构，核心是自注意力机制（Self-Attention）。
meta: [自注意力机制, LLM 基础架构]
chips: [模型结构, 自注意力, 序列建模]
---

Transformer 以自注意力为核心，摆脱了 RNN 的顺序计算限制，能够在 GPU 上高并行地对序列进行表示学习。

为什么重要：

- 训练并行友好，效率高。
- 长距依赖建模自然：任意位置可直接互相关注。
- 可扩展性强：层数/宽度/上下文长度的提升带来能力增强。

典型模块：多头自注意力、前馈网络、残差连接与层归一化等。

