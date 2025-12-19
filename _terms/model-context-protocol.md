---
id: model-context-protocol
title: 模型上下文协议
title_en: Model Context Protocol · MCP
category: framework
type: tool
order: 80
aliases: [MCP, Model Context Protocol]
keywords: [MCP, Model Context Protocol, 工具协议, Tooling, Agent, LLM]
brief: 一种面向 LLM/Agent 的“工具与上下文接入协议”，用统一方式把本地/远程资源与工具能力暴露给模型调用。
meta: [工具生态, 标准化接口, Agent]
---

模型上下文协议（Model Context Protocol，MCP）可以把它理解为“给大模型接外设的接口标准”：通过约定的数据结构与交互流程，把 **工具（tool）**、**资源（resource）**、**提示（prompt/template）** 等能力以统一方式提供给模型/智能体使用。

在 Agent 系统里，模型往往需要访问很多异构能力：数据库、文件、知识库、工单系统、浏览器、内部 API 等。没有统一协议时，每个工具都要单独做适配、权限与错误处理，系统很快变得难维护。MCP 的目标之一就是降低这种“工具接入的工程成本”，让工具生态更可组合。

### 典型结构（高层理解）
- **Host**：承载模型与应用逻辑的宿主（例如 IDE、桌面客户端、服务端应用）。
- **Server**：提供一组工具/资源的服务端（可以是本地进程，也可以是远程服务）。
- **Client/Adapter**：把模型侧的调用与协议侧的接口对接起来（通常由 Host 内部实现）。

### 与相近概念的关系
- MCP 更像“**连接层/协议层**”，而不是一个 Agent 框架；你仍然需要编排、记忆、规划等上层能力。
- MCP 与“工具调用（Tool/Function Calling）”互补：工具调用描述“模型如何发起一次结构化调用”，MCP 更关注“工具/资源如何被发现、描述、接入与管理”。

### 实践提醒
- **权限与隔离**：把 MCP 当作能力扩展点时，优先考虑最小权限、审计日志、沙箱与数据脱敏。
- **稳定性**：工具调用天然有失败率（超时/权限/参数不一致），务必设计重试、降级与可解释的错误回传。
- **可观测性**：建议对每次调用记录 `tool` 名称、输入摘要、耗时、结果状态与错误码，便于排障与评估。

### 延伸阅读
- 相关概念：工具调用（Tool/Function Calling）、智能体（Agent）、RAG、结构化输出（Structured Output）。

