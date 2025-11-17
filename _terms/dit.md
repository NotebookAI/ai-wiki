---
id: dit
title: DiT 视觉 Transformer 扩散模型
title_en: DiT · Diffusion Transformer
category: multimodal
type: model
order: 70
aliases: [DiT, Diffusion Transformer]
keywords: [DiT, Diffusion Transformer, 扩散模型, 文生图]
brief: 将 Transformer 架构直接用于图像扩散过程的一类模型，被视作 Stable Diffusion 等 CNN 结构的替代方案。
meta: [扩散模型, Transformer, 文生图]
---

DiT（Diffusion Transformer）用纯 Transformer 取代 U-Net 等卷积结构来建模扩散过程中的噪声预测，利用自注意力在空间和通道维度建模长程依赖。实验表明，在足够的计算预算下，DiT 在图像生成质量上可以与或超过传统扩散架构。

该方向也推动了「一统」文本与图像建模架构的尝试，使得多模态系统在技术栈上更趋一致。

