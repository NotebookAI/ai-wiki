---
id: context-length
title: 上下文长度 / 窗口
title_en: Context Length · Context Window
category: inference
type: concept
order: 27
aliases: [上下文长度, 上下文窗口, Context Window]
keywords: [Context Length, 上下文长度, 长上下文, Token 限制]
brief: 模型在一次推理中能同时「看到」的 Token 数上限，直接决定可处理文档/对话的规模。
meta: [长上下文, 序列长度, 推理限制]
---

上下文长度（Context Length）通常以 Token 数表示，例如 4K、32K、200K 等，表示模型在一次调用中可处理的输入与输出总 Token 数上限。如果超过该上限，模型要么截断输入，要么无法继续生成，从而影响 RAG、长文档总结、代码库理解等场景的效果。

上下文长度受位置编码（如 RoPE）、模型结构与训练策略影响。近年来，LongRoPE、线性注意力、压缩记忆等技术推动了长上下文 LLM 的发展，但在实践中仍需要在「窗口长度」「延迟」「显存」之间权衡。

