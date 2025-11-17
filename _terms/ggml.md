---
id: ggml
title: GGML 张量库
title_en: GGML
category: inference
type: tool
order: 49
aliases: [GGML]
keywords: [GGML, 量化, 本地推理, 张量库]
brief: 一个面向本地推理与嵌入式场景的 C 库，提供量化算子和跨平台后端，是许多轻量级 LLM 推理项目的基础。
meta: [量化算子, 本地部署]
---

GGML 是一个以 CPU 和轻量级 GPU 为目标的张量计算库，支持多种低比特量化（如 Q4、Q5、Q8）和简化算子实现，为 llama.cpp 等项目提供核心计算能力。它通过精心设计的内存布局与缓存友好的计算方式，在没有大型深度学习框架的环境下也能高效运行 LLM。

随着生态演进，GGML 逐步被 GGUF 等更完善的格式与上层框架所补充，但在本地推理与嵌入式部署中仍扮演关键角色。

