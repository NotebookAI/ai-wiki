---
id: tensorrt-llm
title: TensorRT-LLM
title_en: TensorRT-LLM
category: inference
type: tool
order: 46
aliases: [TensorRT LLM, TRT-LLM]
keywords: [TensorRT-LLM, NVIDIA, 推理引擎, 量化, 部署]
brief: NVIDIA 推出的高性能大模型推理框架，基于 TensorRT 提供量化、图优化和多 GPU 并行等能力。
meta: [NVIDIA, 推理优化, GPU]
---

TensorRT-LLM 是 NVIDIA 面向 LLM 推理场景的专用框架，提供算子融合、FP8/INT8 量化、张量并行与流水线并行等优化手段，并与 CUDA Graph、NVLink、InfiniBand 等硬件特性深度集成，以最大化 GPU 利用率。

相比通用框架，TensorRT-LLM 更适合部署在 NVIDIA 官方支持的硬件与云环境中，在延迟敏感和高吞吐场景（对话、搜索、批量生成）中具有明显优势，常与 vLLM、OpenVINO 等其他推理方案进行对比选型。

