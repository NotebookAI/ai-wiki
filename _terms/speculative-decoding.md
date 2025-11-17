---
id: speculative-decoding
title: 推测解码
title_en: Speculative Decoding
category: inference
type: method
order: 28
aliases: [Speculative Decoding, 推测采样]
keywords: [Speculative Decoding, 推理加速, Draft Model, 验证模型]
brief: 利用快而小的草稿模型批量生成候选 Token，再由大模型并行验证，以在不明显牺牲质量的前提下加速推理。
meta: [推理优化, 采样加速]
---

推测解码（Speculative Decoding）将生成过程拆分为「草稿模型」与「验证模型」两部分：先让较小、速度更快的模型一次性生成一串候选 Token，然后由较大的目标模型对这些候选进行并行验证与修正。相比逐 Token 采样，这种方式可以显著提高吞吐、降低延迟。

该技术适用于对延迟敏感的对话系统与批量生成任务，常与 KV Cache、连续批处理（Continuous Batching）、高效注意力实现（如 FlashAttention）结合使用。实际部署中，需要根据任务容忍的质量损失来选择草稿模型规模与校验策略。

