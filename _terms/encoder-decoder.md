---
id: encoder-decoder
title: Encoder / Decoder 架构
title_en: Encoder-Decoder Architecture
category: model
type: concept
order: 29
aliases: [Encoder-Decoder, 编码器-解码器, Encoder, Decoder]
keywords: [Encoder-Decoder, 编码器, 解码器, Seq2Seq]
brief: 一种将「读入输入」和「逐步生成输出」拆分为编码器与解码器两部分的序列到序列架构，广泛用于翻译和多模态建模。
meta: [Seq2Seq, Transformer 架构]
---

Encoder-Decoder 架构最早在神经机器翻译中流行，通过编码器将输入序列压缩为隐向量表示，再由解码器在该表示和已有输出的条件下逐步生成目标序列。Transformer 论文中提出的原始架构就是典型的 Encoder-Decoder：编码器使用自注意力理解输入，解码器在自注意力与交叉注意力的配合下完成生成。

在大模型时代，很多模型改用 Decoder-only 结构作为通用文字/代码生成底座，但 Encoder-Decoder 仍在翻译、摘要、多模态（例如 文本-图像、语音-文本）等方向保持重要地位，也常用于指令微调前的表示学习。

