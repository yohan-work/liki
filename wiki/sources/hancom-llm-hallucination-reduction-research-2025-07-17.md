---
title: Hancom LLM Hallucination Reduction Research Article
source_id: hancom-llm-hallucination-reduction-research-2025-07-17
type: source
status: ingested
created: 2026-05-21
updated: 2026-05-21
tags:
  - source
  - llm
  - hallucination
  - rag
  - reliability
related:
  - "[[LLM Hallucination]]"
  - "[[RAG]]"
domain:
  - ai
  - software
  - research
content_type: article
knowledge_role:
  - source
  - concept
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[LLM Hallucination]]"
  - "[[RAG]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/2025-07-17-hancom-llm-hallucination-reduction-research.html
source_url: "https://tech.hancom.com/llm-hallucination-reduction-research/"
date_added: 2026-05-21
captured_at: 2026-05-21
accessed_at: 2026-05-21
canonical_url: "https://tech.hancom.com/llm-hallucination-reduction-research/"
content_hash: 2e99379865f0a193e80aee4d7aafe3ac5afc0b530e706eb8838a1f38d5af0cee
source_version: "2025-07-17 published article, captured as HTML snapshot on 2026-05-21"
---

# Hancom LLM Hallucination Reduction Research Article

## 출처

- 제목: "최신 논문 분석을 통한 LLM의 환각 현상 완화 전략 탐구"
- 게시처: 한컴테크
- 작성자: 손찬주
- 발행일: 2025-07-17
- URL: https://tech.hancom.com/llm-hallucination-reduction-research/

## 자료 유형

LLM 환각 완화 기법을 최근 논문 3편 중심으로 정리한 기술 블로그 글.

## Domain / 분류

- domain: ai, software, research
- content_type: article
- knowledge_role: source, concept, reference
- source_quality: practitioner
- use_for: concept, reference, decision

## 추가일

2026-05-21

## 원본 위치

raw/external/2025-07-17-hancom-llm-hallucination-reduction-research.html

## Provenance

- captured_at: 2026-05-21
- accessed_at: 2026-05-21
- canonical_url: https://tech.hancom.com/llm-hallucination-reduction-research/
- content_hash: 2e99379865f0a193e80aee4d7aafe3ac5afc0b530e706eb8838a1f38d5af0cee
- source_version: 2025-07-17 published article, captured as HTML snapshot on 2026-05-21

## 원문 요약

이 글은 LLM 환각을 사실과 일치하지 않는 그럴듯한 출력을 생성하는 현상으로 정의하고, 주요 원인을 학습 데이터 품질 문제, 모델의 과도한 확신, 실시간 검증 메커니즘 부재로 정리한다. 환각 완화 접근법으로는 고품질 데이터 기반 미세조정, RLHF, RAG, 사후 필터링과 교정을 제시한다.

논문 분석 부분에서는 세 가지 연구를 다룬다. 첫째, 강화 학습 파인튜닝(RFT)이 답이 없는 문제에서도 답변을 시도하게 만들어 거절률을 낮추고 환각성 답변을 늘릴 수 있다는 "환각 세금(Hallucination Tax)" 문제를 소개한다. 둘째, Explicit Knowledge Boundary Modeling(EKBM)은 빠른 모델이 자신감 여부를 먼저 판단하고, 불확실한 경우 느린 모델이 검증하는 방식으로 신뢰성과 실용성의 균형을 노린다. 셋째, CoT와 RAG, 자기 일관성, 자체 검증을 결합하면 벤치마크에서 환각률을 낮출 수 있다고 정리한다.

## 핵심 주장

- LLM 환각은 학습 데이터 오류, 과도한 확신, 외부 검증 부재가 결합될 때 발생하기 쉽다.
- RAG는 모델의 내부 기억만으로 답하지 않고 외부 자료를 참조하게 만들어 환각을 줄이는 실용적 방법이다.
- RLHF와 RFT는 항상 환각을 줄이는 방향으로만 작동하지 않으며, 보상 설계가 잘못되면 모델이 모르는 상황에서도 답변을 강행하도록 만들 수 있다.
- 답할 수 없는 문항을 학습에 포함하는 방식은 모델의 거절 능력과 불확실성 인식을 개선하는 데 쓰일 수 있다.
- CoT, RAG, 자기 일관성, 자체 검증은 함께 사용할 때 답변 신뢰성을 높일 수 있지만, 실행 시간과 계산 비용이 늘어난다.
- 고책임 영역에서는 모델 성능뿐 아니라 지식 경계 인식, 검증 가능성, 외부 출처 교차 확인이 시스템 설계의 일부가 되어야 한다.

## 위키에 반영할 개념

- [[LLM Hallucination]]
- [[RAG]]
- RLHF
- RFT
- Hallucination Tax
- Knowledge Boundary
- Self-Verification
- Self-Consistency

## 내 프로젝트에 주는 시사점

- LLM Wiki와 agent workflow에서는 "답변 생성"보다 "근거 연결, 불확실성 표시, 거절 가능성"을 더 중요한 품질 기준으로 둬야 한다.
- RAG를 쓰더라도 retrieval 품질, 출처 표시, 자체 검증 루틴이 없으면 환각 완화 효과가 제한될 수 있다.
- agent harness나 orchestration을 설계할 때 고확신 답변만 유도하는 reward나 completion 기준은 위험하다. 모르는 것을 중단하거나 사용자에게 확인하는 경로를 명시해야 한다.
- Codex 유지보수 작업에서는 source-backed claim과 unsourced 해석을 분리하는 현재 위키 규칙이 환각 완화 장치로 기능한다.

## 검증 필요 주장

- 원문이 요약한 세 논문의 실험 수치와 일반화 가능성은 각 논문 원문을 직접 확인해야 한다.
- "GPT-4도 RLHF를 통해 반복 학습을 거치며 출력 품질을 향상시킨 것으로 알려져 있다"는 설명은 공식 문서나 별도 출처로 검증해야 한다.
- CoT+RAG+자체 검증의 환각률 개선 수치는 벤치마크, 모델, 프롬프트 구성에 의존하므로 실제 제품 workflow에 그대로 적용하기 어렵다.
- EKBM의 효과는 원문 논문에서 사용한 dialogue state tracking 태스크 밖에서도 성립하는지 추가 검증이 필요하다.

## 관련 페이지

- [[LLM Hallucination]]
- [[RAG]]

## 열린 질문

- 이 위키에서 "환각 완화"를 RAG, source summary, lint, human review가 함께 만드는 운영 원칙으로 별도 정리할 필요가 있는가?
- agent가 답변을 거절하거나 사용자에게 확인해야 하는 조건을 어떤 템플릿이나 harness 규칙으로 표현할 수 있는가?
- Hallucination Tax, Knowledge Boundary, Self-Verification을 별도 concept page로 분리할 만큼 반복 참조하게 될 것인가?

## 메모

원문은 세 논문을 2차로 요약한 기술 블로그다. 논문별 주장이나 수치를 장기 decision에 쓰기 전에는 arXiv 원문을 직접 ingest하는 편이 안전하다.
