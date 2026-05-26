---
title: Hugging Face Datasets
type: tool
status: active
created: 2026-05-26
updated: 2026-05-26
tags:
  - hugging-face
  - datasets
  - apache-arrow
  - data-processing
  - fine-tuning
related:
  - "[[Hugging Face]]"
  - "[[Hugging Face Datasets Arrow Guide]]"
  - "[[Fine-tuning]]"
  - "[[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]"
sensitivity: private
evidence_level: source-backed
---

# Hugging Face Datasets

## 무엇인가

Hugging Face Datasets는 dataset loading, preprocessing, caching, iteration을 돕는 Hugging Face 생태계의 데이터 처리 라이브러리다. 이 위키에서는 [[Fine-tuning]] 실험에서 dataset을 안정적으로 불러오고, 전처리하고, 반복 실행하는 도구로 다룬다.

## 중요한 이유

Fine-tuning은 모델 코드보다 dataset 처리에서 실패하는 경우가 많다. Hugging Face Datasets는 dataset split, column, preprocessing result, cache를 구조화해 실험 재현성과 처리 효율을 높인다.

## 핵심 아이디어

- [[Hugging Face Datasets Arrow Guide]]에 따르면 Datasets는 local caching system에 Apache Arrow를 사용한다.
- Arrow는 columnar memory layout, zero-copy read, 언어 독립성, NumPy/Pandas/PyTorch/TensorFlow와의 copy-free hand-off를 제공한다.
- Datasets는 on-disk cache를 memory-mapping해 데이터를 RAM에 모두 올리지 않고도 빠르게 lookup할 수 있게 한다.
- [[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]의 `load_dataset`, `Dataset.map()`, dynamic padding 흐름은 이 Datasets/Arrow 기반 처리 모델 위에 놓인다.

## 사용 사례

- Hugging Face Hub나 로컬 파일에서 dataset을 불러온다.
- train/validation/test split과 column schema를 확인한다.
- tokenizer를 `Dataset.map()`으로 적용해 전처리 결과를 dataset artifact로 남긴다.
- 큰 dataset을 memory-mapped Arrow cache로 다루며 fine-tuning 반복 실험의 memory footprint를 낮춘다.
- 모델 학습 기록에 raw dataset, 전처리 함수, cache, metric을 함께 남긴다.

## 한계

- Cache 위치와 version이 명확하지 않으면 같은 코드가 다른 데이터 상태를 읽을 수 있다.
- Arrow 기반 성능 이점은 disk, OS cache, schema, batch size, transform 방식에 따라 달라진다.
- Streaming, shuffling, multiprocessing, custom transform은 별도 문서와 실제 실행 검증이 필요하다.
- 공식 문서의 API는 설치된 `datasets` 버전과 다를 수 있다.

## 관련 자료

- [[Hugging Face Datasets Arrow Guide]]
- [[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]

## 관련 개념

- [[Fine-tuning]]
- [[ML Model Serving Pipeline]]
- [[Hugging Face]]

## 메모

개인 PoC에서 dataset이 작을 때는 단순 loading과 `Dataset.map()`부터 시작하고, dataset이 커지면 cache 위치, Arrow artifact, preprocessing hash, memory usage를 실험 기록의 필수 항목으로 승격한다.
