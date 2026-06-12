---
title: Pred0771 LLM Parameters Article
type: source
status: ingested
created: 2026-06-12
updated: 2026-06-12
tags:
  - source
  - llm
  - inference
  - sampling
  - generation
related:
  - "[[LLM 생성 파라미터]]"
  - "[[LLM Hallucination]]"
  - "[[LLM-as-a-Judge]]"
  - "[[Hugging Face]]"
related_pages:
  - "[[LLM 생성 파라미터]]"
  - "[[LLM Hallucination]]"
  - "[[LLM-as-a-Judge]]"
  - "[[Hugging Face]]"
sensitivity: private
evidence_level: source-backed
source_id: pred0771-llm-parameters-2024-01-26
original_path: raw/external/pred0771-llm-parameters-223-2026-06-12.html
date_added: 2026-06-12
captured_at: 2026-06-12
accessed_at: 2026-06-12
published_at: 2024-01-26
canonical_url: https://pred0771.tistory.com/223
content_hash: sha256:274035836c3c264408ea11e60c23e4dcf76bea65f9bb1ecfa3bfee0e74719536
source_version: tistory_html_snapshot_2026-06-12
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
---

# Pred0771 LLM Parameters Article

## 출처

- 제목: "LLM Parameters"
- 작성자: Hyeon Lee
- 게시처: 슬기로운 혀니의 코딩 생활
- 게시일: 2024-01-26
- URL: https://pred0771.tistory.com/223

## 자료 유형

LLM 추론과 텍스트 생성에서 사용하는 temperature, top-k, top-p, frequency penalty, presence penalty, max tokens, stop, candidate 수, logprobs를 설명하고 오래된 OpenAI Completion API 예시를 제시하는 입문 블로그 글이다. 개념 목록을 훑는 데는 유용하지만 provider별 의미와 지원 범위, 일부 설명의 정확성, API 예시의 현재 유효성은 공식 문서로 재검증해야 한다.

## Domain / 분류

- domain: ai, software
- content_type: article
- knowledge_role: source, concept, reference
- source_quality: intro
- use_for: concept, reference

## 추가일

2026-06-12

## 원본 위치

`raw/external/pred0771-llm-parameters-223-2026-06-12.html`

## Provenance

- captured_at: 2026-06-12
- accessed_at: 2026-06-12
- canonical_url: https://pred0771.tistory.com/223
- content_hash: sha256:274035836c3c264408ea11e60c23e4dcf76bea65f9bb1ecfa3bfee0e74719536
- source_version: tistory_html_snapshot_2026-06-12

## 원문 요약

글은 temperature를 다음 토큰 확률 분포의 무작위성과 집중도를 조절하는 값으로, top-k와 top-p를 샘플링 후보를 제한하는 방식으로 설명한다. frequency penalty와 presence penalty는 이미 등장한 토큰의 반복을 줄이는 제어값으로, max tokens와 stop은 출력 길이와 종료 조건을 관리하는 값으로 소개한다. 여러 candidate를 생성하거나 token log probability를 받는 옵션도 함께 다룬다.

글 후반에는 이러한 생성 파라미터와 prompt, model 선택을 task에 맞게 조절하면 출력의 창의성, 일관성, 길이, 다양성을 바꿀 수 있다고 정리한다. 예시는 `openai.Completion.create`와 `davinci`를 사용하며, 저자는 실제 API 실행으로 검증하지 않았다고 밝힌다.

## 핵심 주장

- Temperature는 확률 분포를 더 평평하거나 집중되게 만들어 출력의 다양성과 반복 가능성에 영향을 준다.
- Top-k는 확률이 높은 상위 k개 token으로 후보를 제한하고, top-p는 누적 확률 질량 기준으로 동적인 후보 집합을 만든다.
- Frequency와 presence penalty는 이미 나온 token의 재등장에 영향을 주어 반복과 새 주제 도입을 조절한다.
- Max tokens와 stop sequence는 출력 길이와 종료 조건을 제한한다.
- Candidate 수와 logprobs는 여러 결과 비교와 token probability 관찰에 사용할 수 있다.
- 생성 파라미터는 task에 따라 조절해야 하며 모든 작업에 동일한 값이 적합하지 않다.

## 위키에 반영할 개념

- [[LLM 생성 파라미터]]를 확률적 디코딩, 반복 제어, 길이·종료 제어, 관찰성 파라미터로 구분한다.
- [[LLM Hallucination]]에서 낮은 temperature가 사실성을 보장하거나 hallucination을 제거하지 않는다는 경계를 추가한다.
- [[LLM-as-a-Judge]]에서 model과 prompt뿐 아니라 generation setting도 evaluation 재현성 artifact에 포함해야 한다는 점을 연결한다.

## 내 프로젝트에 주는 시사점

- agent나 query workflow를 평가할 때 prompt만 versioning하지 말고 model과 지원되는 generation setting을 함께 기록해야 한다.
- factual task, creative task, extraction, evaluation처럼 목적이 다른 작업은 동일한 파라미터 preset을 사용하지 않는 편이 낫다.
- 파라미터 tuning은 source verification, retrieval, tool use, deterministic check를 대체하지 않는다.

## 후속 라우팅

- concept 강화: [[LLM 생성 파라미터]], [[LLM Hallucination]], [[LLM-as-a-Judge]]
- tool 강화: [[Hugging Face]]
- comparison 후보: temperature vs top-p vs top-k
- question 후보: LLM Wiki ingest에 적합한 generation preset과 기록 schema는 무엇인가?
- idea 후보: model·prompt·generation setting을 함께 저장하는 eval artifact
- mvp 후보: 없음
- 보류: provider별 API parameter reference

## 검증 필요 주장

- 생성 파라미터가 hallucination을 제거한다는 표현은 부정확하다. 낮은 다양성이 같은 오류를 더 안정적으로 반복할 수도 있으며, 사실성은 source와 validation을 별도로 요구한다.
- 글의 frequency penalty와 presence penalty 설명 일부는 방향이 뒤섞여 있다. 정확한 수식과 범위는 사용하는 provider의 공식 문서를 확인해야 한다.
- `max_tokens`가 context 자체를 늘리거나 긴 출력의 일관성을 자동으로 높인다는 식의 설명은 입력 context limit, 출력 limit, 모델 품질을 구분하지 못한다.
- Top-k를 일반적으로 0으로 권장한다는 주장과 Hugging Face 기본값 50 주장은 model, library version, generation mode에 따라 다르다.
- Temperature와 top-p를 동시에 조절하지 않는다는 조언은 일부 API의 권장 방식일 수 있지만 일반 법칙은 아니다.
- `best_of`, `n`, `use_beam_search`, `logprobs` 지원 여부와 의미는 provider와 endpoint마다 다르다.
- `openai.Completion.create`, `davinci`, `choices` 오타가 포함된 예시는 현재 OpenAI API 사용 예시로 재사용하면 안 된다.

## 관련 페이지

- [[LLM 생성 파라미터]]
- [[LLM Hallucination]]
- [[LLM-as-a-Judge]]
- [[Hugging Face]]

## 열린 질문

- 최신 OpenAI와 Hugging Face 공식 문서에서 generation setting의 의미와 지원 범위가 어떻게 다른가?
- factual extraction과 creative writing에 사용할 최소 preset을 별도로 관리할 가치가 있는가?
- provider가 sampling parameter를 노출하지 않는 reasoning model은 재현성을 어떻게 기록해야 하는가?

