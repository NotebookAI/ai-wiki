---
id: vllm
title: vLLM 推理引擎
title_en: vLLM
category: inference
type: tool
order: 40
aliases: [vLLM, Continuous Batching]
keywords: [推理引擎, 连续批处理, PagedAttention]
brief: 面向大语言模型的高吞吐推理引擎，以连续批处理与 PagedAttention 技术显著提升 GPU 利用率。
meta: [推理优化, GPU, 连续批处理]
---

vLLM 是加州大学伯克利等机构开源的推理引擎，通过 **PagedAttention** 动态管理 KV Cache，将显存划分为页状结构，配合 **continuous batching** 在请求到达的同时即时插入执行，避免传统批次切换带来的空转，从而提升吞吐与响应时延的平衡表现。

该项目原生支持 Hugging Face Transformers、OpenAI API 兼容接口与张量并行部署，可在单机多卡或分布式环境中运行，是当前在线服务和批量生成的主流方案之一。

### 与其他推理引擎的对比
- 与 **TensorRT-LLM** 相比：vLLM 更偏通用 Python 生态与快速集成，便于在研究与业务原型中落地；TensorRT-LLM 则深度绑定 NVIDIA 硬件，在极致性能与大规模部署上更有优势。
- 与 **llama.cpp / GGUF** 相比：vLLM 主要面向服务器侧 GPU 推理，而 llama.cpp 更偏本地与轻量级硬件；两者在模型格式、量化方案和部署场景上各有侧重。


### 参考资料
- [vLLM 官方文档：High-Throughput LLM Inference Engine](https://docs.vllm.ai/en/latest/)（提供架构设计、部署指南与 API）
- [官方论文《Efficient Memory Management for Large Language Model Serving with PagedAttention》](https://arxiv.org/abs/2309.06180)（系统性介绍 PagedAttention 与性能评估）
