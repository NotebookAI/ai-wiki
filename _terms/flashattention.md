---
id: flashattention
title: FlashAttention
title_en: FlashAttention
category: inference
type: method
order: 22
aliases: [Flash Attention]
keywords: [FlashAttention, 注意力加速, GPU, IO-aware]
brief: 一种重排注意力计算顺序、减少显存读写的实现方式，在不改变结果的前提下降低显存占用并加速训练/推理。
meta: [注意力优化, 长序列, GPU 利用率]
---

FlashAttention 并不是新的模型结构，而是一种「IO-aware」的注意力实现：通过块状计算、避免中间结果落盘和精心安排访存顺序，减少显存读写，从而在 GPU 上更高效地完成自注意力计算。对用户而言，它计算出来的注意力结果与标准实现一致，但速度更快、显存更省。

在实际部署中，FlashAttention 常与长上下文扩展（RoPE 插值、ALiBi 等）、KV Cache、混合精度训练等手段配合使用，是大多数现代 LLM 框架默认集成的底层优化之一。

### 参考资料
- [Dao et al. \"FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness.\" (2022).](https://arxiv.org/abs/2205.14135)

