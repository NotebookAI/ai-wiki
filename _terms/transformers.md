---
id: transformers
title: Hugging Face Transformers
title_en: Transformers
category: framework
type: tool
order: 50
aliases: [Transformers, HF Transformers]
keywords: [Transformers, Hugging Face, 模型库, 推理, 微调]
brief: Hugging Face 提供的主流模型库与训练/推理框架，支持数千种预训练模型与多种任务。
meta: [模型库, 生态枢纽]
---

Transformers 是 Hugging Face 维护的开源库，提供统一的 API 加载和使用各类预训练模型，覆盖文本、图像、音频、多模态等任务。它内置大量模型配置、权重与分词器，实现了从研究论文到工程应用之间的桥梁。

在工程实践中，Transformers 常与 Accelerate、PEFT、Datasets、Optimum 等库搭配，用于微调、量化、部署和评估，也是许多 RAG/Agent 框架（如 LangChain、Haystack）在底层调用的模型接口。

