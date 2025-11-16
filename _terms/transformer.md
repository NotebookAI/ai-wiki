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

### 核心组件
- **多头自注意力（Multi-Head Self-Attention）**：并行关注不同子空间的相关性，捕捉序列长距离依赖。
- **前馈网络（Feed-Forward Network）**：在每一层对特征进行非线性变换。
- **残差连接与层归一化**：缓解梯度消失并稳定训练。
- **位置编码**：使用正余弦编码或可学习位置向量表示顺序信息。

### 变体与优化
- **Encoder-Decoder 结构**：适合翻译等序列到序列任务，代表模型为原始 Transformer。
- **Decoder-only 结构**：用于自回归生成，是 GPT 系列与大多数 LLM 的基础。
- **长上下文扩展**：FlashAttention、ALiBi、RoPE、线性注意力等技术提升长序列效率。
- **多模态扩展**：Vision Transformer (ViT)、Perceiver、Transformer-Decoder 图像生成等将架构拓展至视觉、音频领域。

### 工程实践
- 大规模训练依赖数据并行、模型并行与混合精度以提升效率。
- 推理阶段可通过 KV Cache、连续批处理、量化来降低延迟与显存占用。
- 对齐与安全层通常构建在 Transformer 主干之上。

### 参考资料
- [Vaswani et al. "Attention Is All You Need." *NeurIPS* (2017).](https://arxiv.org/abs/1706.03762)（首次提出 Transformer 架构）
- [Dosovitskiy et al. "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale." (2020).](https://arxiv.org/abs/2010.11929)（将 Transformer 应用于视觉任务的 ViT）
- [Dao et al. "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness." (2022).](https://arxiv.org/abs/2205.14135)（在硬件友好层面优化注意力计算）
- [Press et al. "Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation." (2022).](https://arxiv.org/abs/2108.12409)（提出 ALiBi 改善长上下文能力）
