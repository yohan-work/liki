---
title: Fine-tuning
type: concept
status: active
created: 2026-05-26
updated: 2026-05-26
tags:
  - fine-tuning
  - transfer-learning
  - machine-learning
  - hugging-face
related:
  - "[[Seungbeomdo Hugging Face Fine-tuning Article]]"
  - "[[Hugging Face Transformers Training Guide]]"
  - "[[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]"
  - "[[Hugging Face Datasets]]"
  - "[[Hugging Face Datasets Arrow Guide]]"
  - "[[Hugging Face]]"
  - "[[RAG]]"
  - "[[ML Model Serving Pipeline]]"
sensitivity: private
evidence_level: source-backed
---

# Fine-tuning

## 정의

Fine-tuning은 이미 학습된 pre-trained model을 특정 task나 domain에 맞게 추가로 훈련하는 방법이다.

## 중요한 이유

모델을 처음부터 훈련하기에는 데이터와 compute가 부족한 경우가 많다. 이미 일반적인 패턴을 학습한 모델을 가져와 task-specific 데이터로 조정하면 더 작은 비용으로 특정 목적에 맞는 성능을 얻을 수 있다.

## 핵심 아이디어

- [[Seungbeomdo Hugging Face Fine-tuning Article]]은 fine-tuning을 pre-trained model에 구체적인 task 데이터를 추가로 학습시키는 과정으로 설명한다.
- Freezing은 일부 layer를 고정하고 feature extractor처럼 사용한 뒤, 추출된 feature를 이용해 task-specific layer나 별도 모델을 훈련하는 방식이다.
- End-to-end fine-tuning은 모델 전체 layer를 task 목적에 맞게 다시 조정하는 방식이다.
- [[Hugging Face Transformers Training Guide]]는 official workflow에서 `Trainer` 추상화와 기본 PyTorch training loop를 구분하며, 평가 metric과 loop 구성이 fine-tuning의 일부임을 보여준다.
- [[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]은 fine-tuning 실험을 dataset loading, `Dataset.map()`, dynamic padding, `compute_metrics`, learning curve monitoring까지 포함한 end-to-end 학습 흐름으로 정리한다.
- [[Hugging Face Datasets Arrow Guide]]는 큰 dataset을 모두 RAM에 올리지 않고 Arrow cache와 memory-mapping으로 다룰 수 있음을 보여준다.
- Fine-tuning은 dataset 품질, label schema, metric, train/eval split, compute 조건에 민감하다.
- RAG나 prompt engineering으로 충분한 문제를 fine-tuning으로 풀면 운영 복잡도가 불필요하게 커질 수 있다.

## 관련 워크플로

- 반복되는 분류, 추출, 스타일, domain-specific output이 있고 prompt만으로 안정성이 부족할 때 후보로 검토한다.
- 작은 dataset에서는 freezing이나 feature extraction 기반 접근을 먼저 실험할 수 있다.
- 제품에 넣기 전에는 eval set, overfitting check, rollback plan, serving cost를 함께 설계한다.
- 학습 중에는 loss와 accuracy/F1 같은 metric뿐 아니라 learning curve의 수렴, 과적합, 과소적합, 불규칙한 진동을 함께 본다.
- dataset이 커지면 raw dataset, 전처리 함수, Arrow cache, train/eval split, metric 결과를 함께 기록한다.
- [[Hugging Face]]와 Transformers는 fine-tuning 실험의 빠른 출발점이 될 수 있다.

## 관련 자료

- [[Seungbeomdo Hugging Face Fine-tuning Article]]
- [[Hugging Face Transformers Training Guide]]
- [[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]
- [[Hugging Face Datasets Arrow Guide]]

## 관련 개념

- [[RAG]]
- [[ML Model Serving Pipeline]]
- [[Hugging Face]]

## 열린 질문

- 개인 LLM workflow에서 fine-tuning이 RAG보다 나은 조건은 무엇인가?
- Fine-tuning 실험을 시작하기 위한 최소 dataset 크기와 평가 기준은 무엇인가?
- Prompt-only, RAG, fine-tuning, model routing을 어떤 순서로 실험해야 하는가?
