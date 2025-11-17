---
id: llm-inference
title: 大模型推理（LLM Inference）
title_en: LLM Inference
category: inference
type: concept
order: 31
aliases: [LLM 推理, 模型推理, 在线推理]
keywords: [LLM Inference, 推理服务, 延迟, 吞吐, 量化]
brief: 将已经训练好的大语言模型在生产环境中提供生成服务的全过程，涵盖部署、加速与成本优化等工程实践。
meta: [服务部署, 性能优化, 成本控制]
---

LLM 推理（Inference）指的是在训练完成后，将模型部署为在线或离线服务，面向真实请求进行生成。与训练阶段不同，推理需要重点关注延迟（Latency）、吞吐（Throughput）、成本（Cost）与稳定性，常用手段包括量化、KV Cache、连续批处理、Speculative Decoding 以及多副本负载均衡。

在工程上，推理系统还要处理多模型路由、版本管理、配额控制与监控告警等问题。常见方案包括使用 vLLM、TensorRT-LLM 等专门的推理引擎，或基于 Hugging Face Transformers 自建服务，并配合 KServe、Ray Serve 等框架实现弹性伸缩。

