---
title: 로컬 LLM
type: concept
status: seed
created: 2026-06-30
updated: 2026-06-30
tags:
  - local-llm
  - open-weight
  - model-serving
  - coding-agent
related:
  - "[[LinkedIn Kim Local LLM ClaudeCode MacBook Article]]"
  - "[[BYOK]]"
  - "[[Hybrid LLM Query Routing]]"
  - "[[Claude Code]]"
  - "[[MiniMax M3]]"
sensitivity: private
evidence_level: source-backed
---

# 로컬 LLM

## 한 줄 정의

로컬 LLM은 외부 API 호출 대신 개인 장비나 직접 관리하는 서버에서 모델 가중치와 추론 runtime을 실행해 사용하는 LLM 운영 방식이다.

## 핵심 문제

- API 비용과 데이터 전송을 줄이고 싶지만, 로컬 장비의 메모리, 연산 성능, 전력, 발열, runtime 호환성에 제약을 받는다.
- benchmark headline은 높아 보여도 실제 agent workflow에서는 tool calling, 긴 context, 코드 실행, 오류 수정, timeout 처리에서 성능 차이가 크게 드러날 수 있다.
- 모델을 실행할 수 있다는 것과 coding agent backend로 안정적으로 쓸 수 있다는 것은 다른 문제다.

## 작동 방식

로컬 LLM은 open-weight model을 다운로드하고, vLLM, Ollama, LM Studio, llama.cpp, MLX, SGLang 같은 runtime 또는 OpenAI-compatible endpoint를 통해 client tool에 연결하는 식으로 운영될 수 있다. 이 위키에서는 runtime별 세부 절차를 아직 source-backed로 정리하지 않았다.

[[LinkedIn Kim Local LLM ClaudeCode MacBook Article]]은 MacBook Pro M4 48GB 환경에서 여러 작은 모델을 ClaudeCode에 연결해 네 가지 게임 구현 task를 시도한 개인 실험이다. 작성자는 Opus는 모든 과제를 15분 이내에 만들었지만, 테스트한 오픈소스 모델들은 정상 동작 결과를 내지 못했다고 정리한다. 이 결과는 일반 결론이 아니라 특정 hardware, prompt, timeout, model/runtime 설정의 anecdotal evidence로만 취급한다.

## 좋은 사용 사례

- 민감도가 낮은 문서 분류, 태그 후보 생성, 형식 변환, 초안 triage처럼 실패 비용이 낮고 검증 가능한 작업
- 외부 API 비용이 부담되는 반복 batch 작업
- 데이터가 외부 provider로 나가면 안 되는 실험 환경
- [[Hybrid LLM Query Routing]]에서 쉬운 작업을 로컬 모델로 보내고, 어려운 synthesis나 code review는 강한 모델로 보내는 비용 절감 후보

## 실패 패턴

- 설치 성공을 곧바로 실무 사용 가능성으로 착각한다.
- 모델 benchmark만 보고 tool calling, agent loop, code execution, timeout, memory pressure를 따로 검증하지 않는다.
- 실패한 로컬 실행을 사람이 반복 수정하느라 API 비용 절감보다 더 큰 시간이 든다.
- 발열, 배터리, 팬 소음, thermal throttling 같은 개인 장비 운영 비용을 무시한다.
- quantization, context length, system prompt, tool schema, serving runtime 차이를 기록하지 않아 결과를 재현할 수 없다.

## 관련 자료

- [[LinkedIn Kim Local LLM ClaudeCode MacBook Article]]
- [[GeekNews MiniMax M3 Article]]
- [[WikiDocs Hermes Agent Guide]]
- [[Blake Crosley Hermes Agent Guide]]

## 관련 개념과 차이

- [[BYOK]]: BYOK는 provider API key와 과금 책임을 사용자가 가져오는 방식이다. 로컬 LLM은 모델 가중치와 추론 runtime 운영까지 사용자가 가져오는 방식이다.
- [[Hybrid LLM Query Routing]]: 로컬 LLM은 routing policy의 한 후보가 될 수 있지만, 쉬운 작업과 어려운 작업을 나누는 검증 기준이 있어야 한다.
- [[MiniMax M3]]: open-weight 또는 저비용 모델 후보를 평가할 때 로컬 실행 가능성, license, hardware requirement, 실제 task success를 분리해야 한다.
- [[Claude Code]]: agent harness가 강해도 backend model이 충분히 강하지 않으면 coding task success가 보장되지 않는다.

## 예시

- LLM Wiki ingest 전 triage에서 domain, content_type, knowledge_role 후보만 로컬 모델로 생성하고, 최종 source summary 작성은 강한 모델이 맡는다.
- coding task에서는 작은 lint fix 후보를 로컬 모델에 맡기되, feature 구현이나 regression risk가 있는 변경은 frontier model과 test gate를 사용한다.

## 내 관점 / 임시 결론

개인 workflow에서 로컬 LLM은 "무료 frontier model 대체재"보다 "낮은 위험 작업을 싸게 전처리하는 후보"로 보는 편이 현실적이다. 도입 판단은 모델 실행 여부가 아니라 task success rate, 재시도 비용, 검증 가능성, hardware 부담, setup 유지보수 비용까지 포함해야 한다.

## 열린 질문

- LLM Wiki에서 로컬 LLM으로 보내도 되는 최소 위험 작업은 무엇인가?
- 로컬 LLM 평가를 위해 어떤 10개 task set과 acceptance metric을 만들 것인가?
- 로컬 model serving을 개인 MacBook에서 할지, 별도 server나 cloud GPU에서 할지 어떤 기준으로 나눌 것인가?
