---
id: structured-output
title: 结构化输出
title_en: Structured Output
category: model
type: method
order: 82
aliases: [JSON Mode, Schema-constrained Output, 约束输出]
keywords: [Structured Output, JSON, JSON Schema, 约束解码, Function Calling, Tool Calling]
brief: 通过 schema/约束解码等方式，让模型稳定地产出可解析的结构（如 JSON），从而提升工具调用、抽取与流水线处理的可靠性。
meta: [可靠解析, 工具调用]
---

结构化输出（Structured Output）是指让模型按预期格式稳定地产出结构化结果（最常见是 JSON），而不是“看起来像 JSON、但解析会失败的文本”。它常用于：
- 工具调用（Tool/Function Calling）的参数生成
- 信息抽取（例如从合同中抽字段）
- 评测与对齐数据生成（要求字段齐全、类型正确）
- 多步工作流编排（下游系统依赖结构而非自然语言）

### 常见实现方式
- **提示约束**：在 prompt 里声明严格格式与示例（成本低，但稳定性有限）。
- **JSON / Schema 模式**：由模型服务端/SDK 提供“必须符合 schema”的输出通道。
- **约束解码（Constrained Decoding）**：在解码阶段限制 token 选择，保证语法合法（可靠但工程复杂度更高）。
- **后处理与重试**：解析失败则把错误回传给模型重写（务必限制重试次数与加入可观测性）。

### 实践提醒
- **先定义 schema 再写提示**：把“字段含义、类型、可选/必选、枚举值”写清楚，能显著降低不一致。
- **给出反例与错误修复路径**：例如“解析失败时仅返回修复后的 JSON，不要解释原因”。
- **不要把结构当作安全边界**：结构化输出提高可靠性，但不能替代权限、审核与注入防护。

