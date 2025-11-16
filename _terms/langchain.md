---
id: langchain
title: LangChain 编排框架
title_en: LangChain
category: framework
type: tool
order: 43
aliases: [LangChain]
keywords: [LLM 应用, 工具编排, Agent]
brief: 开源的 LLM 应用开发框架，提供提示、工具调用、记忆与工作流组合的抽象层。
meta: [链式调用, Agent, 工具集成]
---

LangChain 提供模块化组件构建 LLM 应用，包括提示模板、模型封装、记忆模块、工具接口与链式执行器，使开发者可以在 Python 或 JavaScript 中快速组合对话、检索、代理等工作流。其生态包含 LangSmith 监控、LangServe 服务化与大量社区集成。

LangChain 支持与向量数据库、API 工具、调度器等结合，形成复杂推理与行动链条。但在生产部署时需要关注性能优化与可观测性，可配合缓存、批处理与外部执行引擎提升效率。

### 参考资料
- [LangChain 官方文档：Modules](https://python.langchain.com/docs/modules/)（详述核心模块和最佳实践）
- [LangChain 白皮书《LangChain: Building Applications with LLMs through Composition》](https://arxiv.org/abs/2305.10601)（总结框架设计理念与典型应用）
