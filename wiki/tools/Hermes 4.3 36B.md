---
title: Hermes 4.3 36B
type: tool
status: active
created: 2026-05-20
updated: 2026-05-20
tags:
  - llm
  - open-model
  - reasoning
  - tool-use
  - structured-outputs
  - hugging-face
related:
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# Hermes 4.3 36B

## 무엇인가

Hermes 4.3 36B는 NousResearch가 Hugging Face에 공개한 36B급 open-weight LLM 모델이다. 모델 카드는 ByteDance Seed 36B base 기반의 hybrid-mode reasoning model로 설명한다.

## 사용 사례

- Local 또는 self-hosted LLM 추론 후보로 검토한다.
- Tool calling, function calling, structured output, JSON mode가 필요한 agent PoC 후보로 평가한다.
- Reasoning mode와 non-reasoning mode를 비교하는 실험 모델로 사용한다.
- vLLM, SGLang, Transformers, GGUF 계열 runtime 후보를 비교할 때 참고한다.

## 강점

- 모델 카드 기준 Apache-2.0 라이선스다.
- Reasoning, function calling, tool use, structured outputs, JSON mode를 명시적으로 강조한다.
- vLLM, SGLang, Transformers 사용 예시와 GGUF variant 연결을 제공한다.
- Llama-3-Chat style prompt format과 `<tool_call>` tag 기반 tool call 형식을 설명한다.

## 한계

- 36B급 모델이라 로컬 실행에는 충분한 GPU 메모리나 quantized runtime 검토가 필요하다.
- 모델 카드의 benchmark와 RefusalBench 수치는 제공자 주장으로, 내 workflow 기준의 독립 평가가 필요하다.
- Tool calling 품질은 prompt template, runtime parser, sampling 설정, quantization에 따라 달라질 수 있다.
- Reasoning trace를 노출하거나 저장할 경우 privacy와 logging 정책을 별도로 정해야 한다.

## 관련 워크플로

- Open-weight agent model 후보 탐색.
- Local inference backend 비교.
- Structured output/function calling reliability test.
- RAG 또는 tool-use agent PoC의 모델 후보 평가.

## 관련 개념

- [[Agentic Workflow]]
- [[Orchestration]]

## 관련 자료

- [[Hugging Face Hermes 4.3 36B Model Card]]

## 메모

이 모델은 후보로 기록한다. 실제 채택 여부는 동일 prompt, 동일 tool schema, 동일 task set에서 다른 모델과 비교한 뒤 결정한다.
