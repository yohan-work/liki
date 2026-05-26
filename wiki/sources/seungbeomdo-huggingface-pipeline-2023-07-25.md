---
title: Seungbeomdo Hugging Face Pipeline Article
source_id: seungbeomdo-huggingface-pipeline-2023-07-25
type: source
status: ingested
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - hugging-face
  - transformers
  - mlops
  - nlp
related:
  - "[[Hugging Face]]"
  - "[[ML Model Serving Pipeline]]"
  - "[[Hermes 4.3 36B]]"
original_path: raw/external/2026-05-26-seungbeomdo-tistory-78.html
date_added: 2026-05-26
captured_at: 2026-05-26
accessed_at: 2026-05-26
canonical_url: https://seungbeomdo.tistory.com/78
content_hash: sha256:2b949ece33edbad20081ff8c6ae024e4cdc9553054ec843834eb950dc2040a9f
source_version: tistory_html_snapshot_2026-05-26
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - reference
  - concept
related_pages:
  - "[[Hugging Face]]"
  - "[[ML Model Serving Pipeline]]"
  - "[[Hermes 4.3 36B]]"
sensitivity: private
evidence_level: source-backed
---

# Seungbeomdo Hugging Face Pipeline Article

## 출처

- 제목: Hugging Face 사용법 (1) pipeline 함수 사용하기 및 모델 객체 로컬에 다운 받기
- 게시처: Tistory / seungbeomdo
- 게시일: 2023-07-25 19:31 KST
- URL: https://seungbeomdo.tistory.com/78
- 캡처일: 2026-05-26

## 자료 유형

Hugging Face와 Transformers `pipeline` API를 사용해 pre-trained NLP 모델을 불러오고, 모델 파일을 로컬에 저장해 사용하는 방법을 설명하는 실습형 블로그 글이다.

## Domain / 분류

- domain: ai, software
- content_type: article
- knowledge_role: source, tool, reference
- source_quality: practitioner
- use_for: reference, concept

## 추가일

2026-05-26

## 원본 위치

raw/external/2026-05-26-seungbeomdo-tistory-78.html

## Provenance

- captured_at: 2026-05-26
- accessed_at: 2026-05-26
- canonical_url: https://seungbeomdo.tistory.com/78
- content_hash: sha256:2b949ece33edbad20081ff8c6ae024e4cdc9553054ec843834eb950dc2040a9f
- source_version: tistory_html_snapshot_2026-05-26

## 원문 요약

이 글은 Hugging Face를 딥러닝 모델의 공유, 배포, 사용, 훈련을 쉽게 해주는 생태계로 소개한다. 사용자는 검증된 pre-trained 모델을 내려받아 사용할 수 있고, 자신의 task에 맞게 fine-tuning하거나 직접 만든 모델을 공유할 수 있다고 설명한다.

실습은 Transformers 패키지의 `pipeline` 함수에서 시작한다. 글은 `text-classification` task와 `SamLowe/roberta-base-go_emotions` 모델을 지정해 감정 분류 모델을 객체로 불러오고, 예시 문장에 대해 `excitement` label과 score를 반환하는 과정을 보여준다.

두 번째 실습은 모델을 로컬에 저장해 사용하는 방식이다. `facebook/bart-large-mnli` 모델의 files and versions 탭에서 필요한 파일을 받아 가상환경 내 폴더에 두고, `pipeline("zero-shot-classification", model="로컬 폴더 경로")` 형태로 로컬 모델을 불러오는 예시를 제시한다. 이후 직무 설명 문장과 후보 직무 label을 넣어 가장 가까운 label을 추론하는 zero-shot classification 예시를 보여준다.

## 핵심 주장

- Hugging Face는 pre-trained 모델을 쉽게 찾고, 내려받고, 사용할 수 있는 모델 생태계다.
- Transformers `pipeline`은 task 이름과 model identifier만으로 모델 객체를 빠르게 만들 수 있다.
- 모델 파일을 로컬에 내려받아 `pipeline`에 로컬 경로를 넘기는 방식으로 API 호출 없이 모델을 사용할 수 있다.
- Zero-shot classification은 입력 문장과 후보 label을 받아 가장 가까운 label을 추론하는 방식으로 사용할 수 있다.

## 위키에 반영할 개념

- [[Hugging Face]]
- [[ML Model Serving Pipeline]]
- Pre-trained model
- Transformers pipeline
- Zero-shot classification

## 내 프로젝트에 주는 시사점

- [[Hermes 4.3 36B]] 같은 Hugging Face 모델 카드를 단순 모델 정보가 아니라 로컬 실행, serving, fine-tuning 후보로 이어지는 workflow 안에서 봐야 한다.
- 작은 PoC에서는 full serving framework보다 Transformers `pipeline`과 로컬 모델 경로 기반 실행으로 빠르게 실험할 수 있다.
- LLM Wiki에서 open model을 다룰 때 model card, runtime, 다운로드 방식, task, inference 예시를 함께 기록하면 재사용성이 높다.

## 후속 라우팅

- concept 강화: [[ML Model Serving Pipeline]]
- tool 강화: [[Hugging Face]], [[Hermes 4.3 36B]]
- comparison 후보: Hugging Face pipeline vs dedicated serving framework
- question 후보: 개인 PoC에서 Hugging Face pipeline으로 충분한 경계는 어디까지인가
- idea 후보: open model 후보를 Hugging Face metadata 기준으로 수집하는 mini index
- mvp 후보: 보류
- 보류: 글의 코드 예시는 2023년 기준이므로 현재 Transformers 버전에서 직접 실행 검증하지 않는다.

## 검증 필요 주장

- Hugging Face UI, model file layout, Transformers API signature는 2023년 이후 바뀌었을 수 있으므로 실제 실행 전 공식 문서와 현재 패키지 버전을 확인해야 한다.
- 모델 크기, 다운로드 방식, 로컬 경로 예시는 환경에 따라 다르다.
- 예시 코드의 일부는 Windows 경로와 특정 가상환경을 전제로 하므로 그대로 재사용하지 않는다.

## 관련 페이지

- [[Hugging Face]]
- [[ML Model Serving Pipeline]]
- [[Hermes 4.3 36B]]

## 열린 질문

- LLM Wiki에서 Hugging Face 모델 후보를 기록할 때 최소 metadata는 무엇인가?
- 로컬 모델 실행을 단순 `pipeline`으로 시작할지, vLLM/SGLang 같은 runtime으로 바로 갈지 어떻게 판단할 것인가?

## 메모

이 자료는 실습형 입문 글이다. 공식 문서가 아니므로 실행 절차의 현재성을 보장하지 않지만, Hugging Face 사용 흐름을 빠르게 이해하는 참고자료로 쓸 수 있다.
