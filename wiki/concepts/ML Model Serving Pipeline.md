---
title: ML Model Serving Pipeline
type: concept
status: seed
created: 2026-05-22
updated: 2026-05-22
tags:
  - mlops
  - model-serving
  - inference
  - pipeline
  - triton
related:
  - "[[Velog ML Model Serving Pipeline Article]]"
  - "[[Hybrid LLM Query Routing]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# ML Model Serving Pipeline

## 한 줄 정의

ML Model Serving Pipeline은 훈련된 모델을 실서비스에서 예측 API나 batch inference로 제공하기 위해 입력 처리, inference, 후처리, routing, 배포, 모니터링을 구성하는 운영 흐름이다.

## 핵심 문제

모델을 훈련하는 것만으로는 실제 제품 가치가 생기지 않는다. 새 데이터에 대해 안정적으로 추론하고, 응답 형식을 맞추고, 모델 버전과 하드웨어, 요청 유형, 장애 상황을 운영해야 한다. 이 과정이 모델 서빙의 핵심 문제다.

## 작동 방식

[[Velog ML Model Serving Pipeline Article]]은 모델 serving을 batch serving과 real-time serving으로 구분한다. Serving pipeline은 기본적으로 전처리, inference, 후처리로 구성되며, 더 세분화하면 feature extraction, feature preprocessing, request forwarding, prediction serving, business logic으로 나뉜다.

전체 ML pipeline 관점에서는 data pipeline, model pipeline, serving pipeline이 분리된다. Serving framework는 FastAPI, TensorFlow Serving, NVIDIA Triton처럼 여러 선택지가 있으며, 선택 기준은 모델 포맷, gRPC/HTTP, dynamic batching, ensemble, GPU 활용, 운영 복잡도에 따라 달라진다.

## 좋은 사용 사례

- Real-time prediction API.
- Batch inference 또는 scheduled inference.
- 여러 모델을 조합하는 ensemble 또는 multimodel pipeline.
- 모델 버전과 serving backend를 분리해야 하는 MLOps 환경.

## 실패 패턴

- FastAPI 같은 일반 웹 프레임워크로 시작한 뒤 dynamic batching, model format, GPU scheduling, monitoring을 뒤늦게 직접 구현한다.
- 전처리/후처리/business logic이 흩어져 재현성과 관측성이 떨어진다.
- 모델 업데이트와 배포 pipeline이 분리되지 않아 rollback과 검증이 어렵다.
- Request routing이나 fallback 없이 단일 모델 instance에 모든 요청을 보낸다.

## 관련 자료

- [[Velog ML Model Serving Pipeline Article]]

## 관련 개념과 차이

- [[Hybrid LLM Query Routing]]: 모델 serving pipeline의 request forwarding 단계에서 비용/품질 기반 모델 선택 정책으로 들어갈 수 있다.
- [[Orchestration]]: Serving pipeline은 runtime orchestration의 한 형태이며, input, model, backend, output, monitoring을 조율한다.

## 예시

- 이미지 요청을 받아 feature extraction과 preprocessing을 거친 뒤 Triton ensemble model로 inference하고, business logic을 추가해 API response로 반환한다.
- LLM application에서 요청을 normalize하고, router가 모델을 선택하고, inference 후 출처/품질/비용 로그를 남긴다.

## 내 관점 / 임시 결론

개인 PoC나 LLM Wiki 자동화는 처음부터 무거운 serving framework가 필요하지 않다. 하지만 routing, retry, logging, response formatting, cost tracking이 중요해지는 순간부터는 단순 API wrapper가 아니라 serving pipeline으로 설계하는 편이 낫다.

## 열린 질문

- LLM Wiki 자동화에서 serving pipeline에 해당하는 단계는 어디까지인가?
- 모델 라우팅, fallback, logging을 구현한다면 어떤 최소 telemetry가 필요한가?
- 개인 PoC에서 FastAPI로 충분한 경계와 Triton/Vertex AI 같은 프레임워크가 필요한 경계는 무엇인가?
