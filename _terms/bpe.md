---
id: bpe
title: 字节对编码（BPE）
title_en: Byte Pair Encoding · BPE
category: foundation
type: concept
order: 25
aliases: [BPE, 字节对编码]
keywords: [Byte Pair Encoding, BPE, 分词, Tokenization]
brief: 一种基于统计合并频繁符号对的子词分词方法，广泛用于 GPT 等大语言模型的 Token 化。
meta: [子词分词, Tokenization]
---

字节对编码（BPE）最初用于压缩算法，后来被引入 NLP 作为子词级分词方案：从字符级词表出发，反复合并语料中出现最频繁的相邻符号对，逐步构建出既能覆盖常见词片段，又能处理未登录词的子词词表。

在大语言模型中，BPE 及其变体（如 SentencePiece、Unigram LM、tiktoken 等）决定了 Token 数量、上下文窗口消耗与跨语言表现，是理解「Prompt Token 数量」「上下文长度」等概念的基础。

