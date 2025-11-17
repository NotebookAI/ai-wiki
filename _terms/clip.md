---
id: clip
title: CLIP 文本-图像对比学习模型
title_en: CLIP
category: multimodal
type: model
order: 69
aliases: [CLIP]
keywords: [CLIP, 文本图像对齐, 对比学习, OpenAI]
brief: OpenAI 提出的通过对比学习对齐文本与图像表示的多模态模型，是许多文生图与检索系统的基础。
meta: [多模态, 文本图像检索]
---

CLIP 通过在海量「图像-文本描述」对上进行对比学习，让图像编码器和文本编码器在共同嵌入空间中对齐：匹配的图文对距离更近，不匹配的更远。这样训练出的表示可用于零样本分类、图文检索以及作为文生图模型（如 Stable Diffusion）的文本编码模块。

CLIP 的成功推动了多模态对比学习的发展，对后续的图文检索、视觉问答与多模态 Agent 产生了深远影响。

