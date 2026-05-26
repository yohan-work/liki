---
title: Hybrid LLM Query Routing
type: concept
status: seed
created: 2026-05-22
updated: 2026-05-22
tags:
  - llm
  - routing
  - inference
  - cost-optimization
  - model-serving
related:
  - "[[Moonlight Hybrid LLM Query Routing Review]]"
  - "[[BYOK]]"
  - "[[WikiDocs Jaehong BYOK AI Tools Article]]"
  - "[[ML Model Serving Pipeline]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# Hybrid LLM Query Routing

## 한 줄 정의

Hybrid LLM Query Routing은 쿼리 난이도와 목표 품질을 고려해 소형 모델과 대형 모델 사이에서 요청을 배정함으로써 LLM 추론 비용과 응답 품질의 균형을 잡는 방식이다.

## 핵심 문제

모든 요청을 가장 강력하고 비싼 모델에 보내면 품질은 안정적일 수 있지만 비용이 커진다. 반대로 모든 요청을 저렴한 모델에 보내면 비용은 낮아지지만 어려운 쿼리에서 품질이 떨어질 수 있다. 문제는 어떤 쿼리가 소형 모델로 충분하고 어떤 쿼리가 대형 모델을 필요로 하는지 판단하는 것이다.

## 작동 방식

[[Moonlight Hybrid LLM Query Routing Review]]는 소형 모델 `S(x)`와 대형 모델 `L(x)`의 응답 품질 차이를 예측하는 router를 학습하는 접근을 설명한다. 품질 격차는 `H(x) = q(S(x)) - q(L(x))`로 정의되며, `H(x) >= 0`이면 소형 모델 응답이 대형 모델 응답보다 낫거나 비슷하다고 본다.

라우터 설계는 결정적 라우터, 확률적 라우터, 데이터 변환을 적용한 확률적 라우터로 나뉜다. 확률적 라우터는 LLM 응답의 비결정성을 고려해 여러 응답 샘플에서 soft label을 만든다. 성능 격차가 큰 모델 쌍에서는 label이 한쪽으로 몰리는 문제를 완화하기 위해 relaxation parameter를 둔다.

## 좋은 사용 사례

- 쉬운 요청이 많고 일부 어려운 요청만 대형 모델이 필요한 LLM application.
- 비용 제약이 있는 agent workflow나 batch inference.
- 품질 목표가 명확하고 fallback/retry를 설계할 수 있는 serving pipeline.
- 모델 후보가 여러 개 있고 routing telemetry를 모을 수 있는 환경.
- [[BYOK]]처럼 사용자가 provider key와 모델 선택권을 직접 갖는 환경.

## 실패 패턴

- Router가 잘못 판단해 어려운 요청을 저품질 모델에 보내고 사용자 품질 하락을 감지하지 못한다.
- 품질 metric이 실제 사용자 만족도나 task success를 대표하지 못한다.
- 모델별 latency, rate limit, safety, tool-use capability 차이를 비용만으로 단순화한다.
- Monitoring, fallback, human review 없이 비용 절감만 목표로 routing을 적용한다.

## 관련 자료

- [[Moonlight Hybrid LLM Query Routing Review]]

## 관련 개념과 차이

- [[ML Model Serving Pipeline]]: Hybrid LLM routing은 serving pipeline의 request forwarding 또는 routing 단계에 들어갈 수 있는 정책이다.
- [[Agentic Workflow]]: Agent workflow에서는 planning, search, summarization, coding, review 등 단계별 품질 요구가 다르므로 모델 라우팅 후보가 된다.
- [[Orchestration]]: Routing은 orchestration 안에서 model selection과 fallback policy를 담당한다.
- [[BYOK]]: BYOK는 provider/model 비용 책임을 사용자 쪽으로 이동시키고, routing은 그 선택권을 비용/품질 정책으로 운영하는 방법이다.

## 예시

- 간단한 분류, formatting, 검색 결과 요약은 저비용 모델에 보내고, 복잡한 synthesis, code review, 의사결정 보조는 대형 모델에 보낸다.
- LLM Wiki ingest pipeline에서 triage 초안은 저비용 모델, source summary 검토와 contradiction 판단은 강한 모델을 사용한다.

## 내 관점 / 임시 결론

개인 workflow에서는 학습된 router보다 먼저 heuristic routing과 명확한 fallback을 적용하는 편이 현실적이다. 중요한 것은 모델 비용 절감 자체보다 task별 품질 요구, 실패 비용, 검증 가능성을 분리하는 것이다.

## 열린 질문

- 내 LLM Wiki 자동화에서 저비용 모델로 보내도 되는 작업은 무엇인가?
- Router 판단의 품질을 어떤 로그와 acceptance metric으로 측정할 것인가?
- 한국어 source summary나 code review task에는 어떤 품질 metric이 적절한가?
- BYOK 환경에서 provider별 비용, rate limit, 품질 차이를 routing policy에 어떻게 반영할 것인가?
