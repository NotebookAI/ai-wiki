---
id: tokenization
title: 分词与 Token 化
title_en: Tokenization
category: foundation
type: concept
order: 26
aliases: [分词, Token 化, 切词]
keywords: [Tokenization, 分词, BPE, SentencePiece]
brief: 将原始文本切分为模型可处理的离散 Token 序列的过程，是大语言模型输入输出的基础步骤。
meta: [子词, 词表, 上下文长度]
---

Token 化（Tokenization）指的是将原始文本转换为整数 ID 序列的过程，常见做法是先用 BPE、SentencePiece 等算法构建子词词表，再将字符串按规则切分为 Token。不同分词策略会影响上下文长度消耗、跨语言表现以及对特殊符号（空格、标点、代码）的处理。

在使用 OpenAI API、Hugging Face Transformers 等框架时，正确估算 Token 数量关系到费用与延迟；而在模型训练与评估阶段，词表设计也会影响模型对长词、专有名词和混合语言输入的鲁棒性。

