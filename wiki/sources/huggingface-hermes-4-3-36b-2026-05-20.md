---
source_id: huggingface-hermes-4-3-36b-2026-05-20
type: source
status: ingested
created: 2026-05-20
updated: 2026-05-20
date_added: 2026-05-20
captured_at: 2026-05-20
accessed_at: 2026-05-20
canonical_url: "https://huggingface.co/NousResearch/Hermes-4.3-36B"
content_hash: not-computed
source_version: "Hugging Face model card as captured on 2026-05-20"
domain:
  - llm
  - open-models
  - inference
content_type: model-card
knowledge_role:
  - model-reference
  - implementation-reference
  - evaluation-signal
source_quality: official-model-card
use_for:
  - open-model-discovery
  - tool-use-model-reference
  - local-inference-planning
  - structured-output-model-reference
related_pages:
  - "[[Hermes 4.3 36B]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/2026-05-20-huggingface-hermes-4-3-36b.md
source_url: "https://huggingface.co/NousResearch/Hermes-4.3-36B"
---

# Hugging Face Hermes 4.3 36B Model Card

## 출처

- 제목: NousResearch/Hermes-4.3-36B
- 게시처: Hugging Face
- 조직: NousResearch
- URL: https://huggingface.co/NousResearch/Hermes-4.3-36B
- 라이선스: Apache-2.0
- Base model: ByteDance-Seed/Seed-OSS-36B-Base
- 관련 논문: Hermes 4 Technical Report, arXiv 2508.18255

## 자료 유형

Hugging Face model card / open-weight model reference.

## Domain / 분류

- domain: llm, open-models, inference
- content_type: model-card
- knowledge_role: model-reference, implementation-reference, evaluation-signal
- source_quality: official-model-card
- use_for: open-model-discovery, tool-use-model-reference, local-inference-planning, structured-output-model-reference

## 추가일

2026-05-20

## 원본 위치

[[raw/external/2026-05-20-huggingface-hermes-4-3-36b.md]]

## Provenance

- captured_at: 2026-05-20
- accessed_at: 2026-05-20
- canonical_url: https://huggingface.co/NousResearch/Hermes-4.3-36B
- content_hash: not-computed
- source_version: Hugging Face model card as captured on 2026-05-20

## 원문 요약

이 모델 카드는 [[Hermes 4.3 36B]]를 Nous Research가 만든 Apache-2.0 라이선스의 36B급 open-weight LLM으로 소개한다. 모델 카드는 ByteDance Seed 36B base를 기반으로 한 hybrid-mode reasoning model이라고 설명하며, reasoning, tool use, function calling, JSON mode, structured outputs, long context, roleplaying, chat 사용 사례를 강조한다.

모델 카드는 Hermes 4.3이 Psyche를 통해 인터넷상에서 decentralized 방식으로 학습된 첫 Hermes 모델이라고 주장한다. 또한 Hermes 3 대비 post-training corpus가 크게 증가했고, verified reasoning traces, math, code, STEM, logic, creativity, format-faithful outputs, steerability, reduced refusal rate를 개선했다고 설명한다.

사용 측면에서는 Transformers, vLLM, SGLang, Docker Model Runner 사용 예시를 제공하고, GGUF quantized variant 및 Hermes 4 collection을 연결한다. Prompt format은 Llama-3-Chat style role header를 사용하며, reasoning mode에서는 `<think>...</think>` segment를 사용할 수 있다고 설명한다. Function calling은 `<tool_call>{...}</tool_call>` 형식의 tool call을 생성하는 방식으로 설명된다.

## 핵심 주장

- Hermes 4.3 36B는 ByteDance Seed 36B base 기반의 hybrid-mode reasoning model이다.
- 모델 카드는 Apache-2.0 라이선스를 표시한다.
- 모델은 reasoning, function calling, tool use, JSON mode, structured outputs를 지원한다고 소개된다.
- Prompt format은 Llama-3-Chat style이며, reasoning mode에서는 `<think>...</think>` segment를 사용할 수 있다고 한다.
- Tool call은 `<tool_call>` tag 안의 JSON object 형태로 생성되며, vLLM과 SGLang parser 설정도 언급된다.
- 모델 카드는 Hermes 3 대비 dataset 규모, reasoning/non-reasoning blend, steerability, schema adherence 개선을 주장한다.
- 모델 카드에 제시된 benchmark와 RefusalBench 수치는 모델 제공자의 주장으로, 독립 검증 전에는 참고 신호로만 취급해야 한다.

## 위키에 반영할 개념

- [[Hermes 4.3 36B]]
- Hybrid reasoning model
- Open-weight LLM
- Function calling
- Tool use
- Structured outputs
- Local inference
- GGUF quantization

## 내 프로젝트에 주는 시사점

- Agentic workflow 실험에서 open-weight reasoning/tool-use model 후보로 기록할 가치가 있다.
- Structured output, JSON mode, function calling을 강조하므로 local tool-use agent PoC 후보가 될 수 있다.
- 36B급 모델이므로 로컬 실행 전 GPU 메모리, quantization, inference backend(vLLM/SGLang/llama.cpp 계열)를 먼저 검토해야 한다.
- 모델 카드의 benchmark 주장을 그대로 채택하지 말고, 내 workflow 기준 task set으로 별도 평가해야 한다.

## 검증 필요 주장

- 모델 카드의 benchmark, RefusalBench, steerability claim은 제공자 주장이라 독립 평가나 내부 task 평가가 필요하다.
- 실제 tool calling parser, `<think>` handling, structured output reliability는 사용하는 runtime과 prompt template에 따라 달라질 수 있다.
- 라이선스, 파일 구성, quantized variant, inference provider 지원 여부는 시간이 지나며 바뀔 수 있으므로 사용 직전에 다시 확인해야 한다.
- Reasoning trace를 출력하거나 저장할 때 privacy, logging, UX 정책을 별도로 정해야 한다.

## 관련 페이지

- [[Hermes 4.3 36B]]
- [[Agentic Workflow]]
- [[Orchestration]]

## 열린 질문

- 이 모델을 개인 PoC에서 평가한다면 어떤 benchmark보다 어떤 실제 workflow task를 먼저 써야 하는가?
- Tool-use agent 후보로 비교할 open-weight model set은 무엇인가?
- Reasoning mode와 non-reasoning mode를 어떤 기준으로 선택해야 하는가?
- GGUF quantized variant를 쓰는 경우 structured output과 function calling 품질이 얼마나 유지되는가?

## 메모

이 페이지는 모델 카드 인제스트다. 실제 성능 평가는 별도 evaluation note로 분리한다.
