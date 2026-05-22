---
title: Velog ML Model Serving Pipeline Article
source_id: velog-ml-model-serving-pipeline-2023-07-14
type: source
status: ingested
created: 2026-05-22
updated: 2026-05-22
tags:
  - source
  - mlops
  - model-serving
  - inference
  - pipeline
  - triton
related:
  - "[[ML Model Serving Pipeline]]"
  - "[[Hybrid LLM Query Routing]]"
  - "[[Orchestration]]"
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - concept
  - reference
source_quality: intro
use_for:
  - concept
  - reference
related_pages:
  - "[[ML Model Serving Pipeline]]"
  - "[[Hybrid LLM Query Routing]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/2023-07-14-velog-ml-model-serving-pipeline.html
source_url: "https://velog.io/@synoti21/ML-Model-Serving-Pipeline"
date_added: 2026-05-22
captured_at: 2026-05-22
accessed_at: 2026-05-22
canonical_url: "https://velog.io/@synoti21/ML-Model-Serving-Pipeline"
content_hash: 624f149edf6bb0a02076afc19f7852e8af64b7ba80df7c3fe9ee07d6e30feac2
source_version: "Velog article by Jiwan Ahn, published 2023-07-14, captured on 2026-05-22"
---

# Velog ML Model Serving Pipeline Article

## 출처

- 제목: ML Model Serving Pipeline
- 저자 표시: Jiwan Ahn
- 게시처: Velog
- URL: https://velog.io/@synoti21/ML-Model-Serving-Pipeline
- 게시일: 2023년 7월 14일
- 태그: mlops, 학습기록

## 자료 유형

ML 모델 서빙의 기본 구조와 serving framework를 설명하는 입문형 학습 기록이다. batch serving, real-time serving, serving pipeline 구조, preprocessing/inference/postprocessing, multimodel pipeline, FastAPI, TensorFlow Serving, NVIDIA Triton, Vertex AI Pipeline, SOCAR 사례를 다룬다.

## Domain / 분류

- domain: ai, software
- content_type: article
- knowledge_role: source, concept, reference
- source_quality: intro
- use_for: concept, reference

## 추가일

2026-05-22

## 원본 위치

raw/external/2023-07-14-velog-ml-model-serving-pipeline.html

## Provenance

- captured_at: 2026-05-22
- accessed_at: 2026-05-22
- canonical_url: https://velog.io/@synoti21/ML-Model-Serving-Pipeline
- content_hash: 624f149edf6bb0a02076afc19f7852e8af64b7ba80df7c3fe9ee07d6e30feac2
- source_version: Velog article by Jiwan Ahn, published 2023-07-14, captured on 2026-05-22

## 원문 요약

이 글은 모델 서빙을 훈련된 모델을 실서비스에서 사용할 수 있도록 클라이언트에게 예측 결과를 효율적으로 전달하는 방식으로 정의한다. 서빙 방식은 크게 batch serving과 real-time serving으로 나뉜다. Batch serving은 즉각적인 결과가 필요하지 않을 때 여러 예측을 한 번에 처리하고, real-time serving은 API를 통해 요청별 응답을 즉시 반환한다.

모델 serving pipeline은 일반적으로 전처리, 인퍼런스, 후처리로 구성된다. 더 세분화하면 feature extraction, feature preprocessing, request forwarding, prediction serving, business logic이 포함된다. 전체 ML pipeline 관점에서는 data pipeline, model pipeline, serving pipeline이 분리된다.

글은 model serving이 복잡한 이유로 다중 모델 프레임워크, 다양한 추론 쿼리 유형, 지속적으로 진화하는 모델, 다양한 CPU/GPU 환경을 든다. Serving framework로 FastAPI, TensorFlow Serving, Triton을 비교하며, FastAPI는 간단하지만 gRPC, model format, dynamic batch inference 같은 모델 서빙 특화 기능을 직접 구현해야 한다고 설명한다. TensorFlow Serving은 TensorFlow 모델과 잘 맞지만 범용성이 제한된다. Triton은 다양한 모델 포맷과 ensemble model, stateless/stateful model, HTTP/gRPC/C API를 지원하는 모델 서빙 프레임워크로 소개된다.

사례로 Vertex AI Pipeline, NVIDIA Triton Inference Server, SOCAR의 자체 serving system을 언급한다. SOCAR 사례는 S3, SQS, Kubernetes, Docker, Git, Rancher를 조합해 모델 serving과 배포/모니터링을 구성하는 예시로 소개된다.

## 핵심 주장

- 모델 훈련만으로 MLOps가 끝나지 않으며, 새로운 data point에 대한 inference를 서비스로 제공하는 것이 중요하다.
- 모델 서빙은 batch serving과 real-time serving으로 나뉜다.
- Serving pipeline은 전처리, inference, 후처리와 request routing/business logic을 포함한다.
- 모델 serving은 프레임워크 다양성, 쿼리 유형, 모델 업데이트, 하드웨어 다양성 때문에 복잡하다.
- FastAPI는 간단한 API 구현에는 좋지만 모델 서빙 전용 기능은 직접 구현해야 한다.
- TensorFlow Serving은 TensorFlow 모델에 편리하지만 범용성이 제한된다.
- NVIDIA Triton은 다양한 모델 포맷, ensemble, stateless/stateful model, HTTP/gRPC/C API를 지원한다.

## 위키에 반영할 개념

- [[ML Model Serving Pipeline]]
- [[Hybrid LLM Query Routing]]
- Batch serving
- Real-time serving
- Feature preprocessing
- Request forwarding
- Dynamic batch inference
- NVIDIA Triton

## 내 프로젝트에 주는 시사점

- [[Hybrid LLM Query Routing]]을 실제 시스템으로 만들려면 단순 알고리즘이 아니라 serving pipeline 안에서 request routing, inference backend, fallback, monitoring을 함께 설계해야 한다.
- 개인 AI PoC에서는 FastAPI로 시작할 수 있지만, 모델 포맷, dynamic batching, GPU 활용, ensemble이 중요해지면 Triton 같은 serving framework 검토가 필요하다.
- LLM Wiki의 agent automation도 작은 serving pipeline으로 보면 input normalization, routing, model/tool execution, response formatting, logging 단계로 나눌 수 있다.

## 검증 필요 주장

- FastAPI, TensorFlow Serving, Triton의 성능 비교는 원 출처와 현재 버전 기준으로 확인해야 한다.
- Triton의 지원 모델 포맷, API, dynamic batching, ensemble 기능은 최신 공식 문서로 확인해야 한다.
- SOCAR 사례의 현재 architecture나 운영 방식은 원문과 최신 자료로 확인해야 한다.
- 이 글은 학습 기록 성격이므로 세부 구현 판단에는 공식 문서와 실험이 필요하다.

## 관련 페이지

- [[ML Model Serving Pipeline]]
- [[Hybrid LLM Query Routing]]
- [[Orchestration]]

## 열린 질문

- LLM serving에서 request forwarding 단계에 cost/quality router를 넣으면 어떤 telemetry가 필요한가?
- 개인 PoC에서는 FastAPI 기반 serving이 충분한가, 아니면 Triton/Vertex AI 같은 framework가 필요한가?
- Batch serving과 real-time serving을 agent workflow에서 어떻게 구분해야 하는가?

## 메모

이 자료는 모델 serving 기본 개념을 잡는 데 유용한 intro source다. 실무 도입 판단에는 Triton, Vertex AI, FastAPI 공식 문서와 최신 benchmark를 별도 확인해야 한다.
