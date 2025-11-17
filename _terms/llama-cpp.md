---
id: llama-cpp
title: llama.cpp
title_en: llama.cpp
category: inference
type: tool
order: 47
aliases: [llama.cpp, 本地 LLM]
keywords: [llama.cpp, 本地推理, GGUF, 量化]
brief: 一个用 C/C++ 实现的轻量级 LLM 推理引擎，支持在 CPU、消费级 GPU 和移动设备上运行量化模型。
meta: [本地部署, 轻量推理]
---

llama.cpp 起源于在笔记本电脑上运行 LLaMA 模型的实验项目，逐渐发展为支持多种架构与后端（CPU、Metal、CUDA 等）的通用推理引擎。它通过 GGML/GGUF 等格式存储量化后的权重，使得在资源有限的设备上也能运行聊天、补全和简单 Agent 应用。

得益于活跃的社区生态，llama.cpp 被封装到诸多桌面应用、浏览器插件与后端服务中，是「本地跑大模型」场景的代表选择之一。

