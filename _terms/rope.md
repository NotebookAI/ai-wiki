---
id: rope
title: RoPE 旋转位置编码
title_en: Rotary Position Embedding · RoPE
category: foundation
type: concept
order: 21
aliases: [RoPE, 旋转位置编码]
keywords: [RoPE, Rotary Position Embedding, 位置编码, 长上下文]
brief: 一种通过在隐空间中施加旋转变换来编码相对位置信息的位置编码方式，广泛用于现代 LLM。
meta: [位置编码, 相对位置, 长上下文]
---

RoPE（Rotary Position Embedding）通过在注意力计算前，对查询和键向量施加与位置信息相关的复数旋转（或二维旋转）变换，让点积结果自然携带相对位置信息。相比传统正余弦绝对位置编码，RoPE 对序列长度更具外推能力，也更适合长上下文扩展。

在工程实践中，许多主流开源模型（如 LLaMA、Qwen 等）都采用 RoPE 或其变体，并通过插值、分段 RoPE 等技巧来从 2K、4K 扩展到几十万甚至百万级的上下文窗口。

### 相关概念
- 绝对位置编码（Sinusoidal PE）：Transformer 最初使用的正余弦位置编码，更偏向绝对位置建模。
- ALiBi、NTK Scaling 等：同属长上下文增强技术，常与 RoPE 搭配或对比讨论。
- KV Cache：在推理时配合 RoPE 使用，可避免重复计算历史 token 的位置编码。

