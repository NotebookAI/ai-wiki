---
id: gguf
title: GGUF 模型格式
title_en: GGUF
category: inference
type: concept
order: 48
aliases: [GGUF]
keywords: [GGUF, 模型格式, 量化, llama.cpp]
brief: 一种为本地推理场景设计的二进制模型格式，常与 llama.cpp 等推理引擎配合，支持多种量化精度。
meta: [模型格式, 本地推理]
---

GGUF 是 GGML 项目提出的新一代模型格式，用于存储经过量化或裁剪的大语言模型权重。相较于早期的 GGML 格式，GGUF 在元数据、兼容性和扩展性上做了改进，便于记录 tokenizer、量化方案和张量布局等信息。

在实际使用中，很多开源模型都会提供 GGUF 版本，以方便在 llama.cpp、text-generation-webui 等本地推理环境中直接加载。

