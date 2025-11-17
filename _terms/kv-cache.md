---
id: kv-cache
title: KV Cache 键值缓存
title_en: KV Cache
category: inference
type: concept
order: 30
aliases: [KV Cache, 注意力缓存, 键值缓存]
keywords: [KV Cache, 注意力缓存, 推理加速, 自回归生成]
brief: 在自回归推理中缓存历史 Token 的键值向量，避免重复计算，从而显著降低长序列生成的延迟与算力消耗。
meta: [推理优化, 长上下文]
---

在自回归生成过程中，每个新 Token 都依赖于之前所有 Token 的表示。若不做缓存，每步都需要重新计算整个序列的自注意力，成本随长度平方增长。KV Cache 的做法是：首次计算时将每层注意力的键（K）和值（V）向量缓存下来，后续步骤只需对新 Token 计算 KV 并与缓存拼接，大幅减少重复计算。

KV Cache 是在线服务与 RAG 系统中最重要的推理优化之一。它与长上下文扩展（RoPE、FlashAttention）、连续批处理（vLLM）以及流式输出等技术一起，构成了现代 LLM 推理栈的基础。

