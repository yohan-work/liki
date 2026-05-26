---
title: Hugging Face
type: tool
status: active
created: 2026-05-26
updated: 2026-05-26
tags:
  - hugging-face
  - model-hub
  - transformers
  - mlops
related:
  - "[[Seungbeomdo Hugging Face Pipeline Article]]"
  - "[[Seungbeomdo Hugging Face Fine-tuning Article]]"
  - "[[Hugging Face Transformers Training Guide]]"
  - "[[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]"
  - "[[Hugging Face Datasets]]"
  - "[[Hugging Face Datasets Arrow Guide]]"
  - "[[Hugging Face Hermes 4.3 36B Model Card]]"
  - "[[Fine-tuning]]"
  - "[[ML Model Serving Pipeline]]"
  - "[[Hermes 4.3 36B]]"
sensitivity: private
evidence_level: source-backed
---

# Hugging Face

## 무엇인가

Hugging Face는 머신러닝 모델과 데이터셋을 찾고, 공유하고, 실행하고, 훈련할 수 있는 AI 모델 생태계다. 이 위키에서는 open model 탐색, Transformers 기반 추론, fine-tuning, 모델 카드 검토의 중심 도구로 다룬다.

## 사용 사례

- Pre-trained model 탐색과 model card 검토.
- Transformers `pipeline`을 이용한 빠른 NLP 추론 실험.
- 모델 파일을 로컬에 내려받아 offline 또는 self-hosted 방식으로 실행.
- 특정 task에 맞춘 [[Fine-tuning]] 실험.
- [[Hermes 4.3 36B]] 같은 open-weight LLM 후보 검토.

## 강점

- [[Seungbeomdo Hugging Face Pipeline Article]]은 task와 model identifier를 지정해 `pipeline`으로 모델 객체를 빠르게 만드는 흐름을 보여준다.
- 같은 자료는 model file을 로컬에 내려받아 `pipeline`에 로컬 경로를 넘기는 방식도 보여준다.
- [[Seungbeomdo Hugging Face Fine-tuning Article]]은 pre-trained model을 task-specific 데이터로 추가 훈련하는 흐름과 freezing/end-to-end 접근을 설명한다.
- [[Hugging Face Transformers Training Guide]]는 Transformers 공식 문서 기준으로 `Trainer`와 기본 PyTorch training loop를 이용한 fine-tuning 절차를 설명한다.
- [[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]은 LLM Course Chapter 3 흐름을 따라 Datasets, Tokenizers, Trainer, Evaluate, Accelerate를 함께 쓰는 학습 과정을 정리한다.
- [[Hugging Face Datasets Arrow Guide]]는 Datasets가 Apache Arrow와 memory-mapping을 사용해 큰 dataset을 cache 기반으로 빠르게 다루는 방식을 설명한다.
- 모델 카드, 파일, 예시 코드, license, runtime 정보가 한곳에 모여 있어 open model 후보를 비교하기 쉽다.

## 한계

- 웹 UI, Transformers API, 모델 파일 구조는 버전 변화에 민감하다.
- 모델 카드의 benchmark와 사용 예시는 제공자 주장일 수 있어 내 task 기준의 독립 평가가 필요하다.
- 로컬 실행은 모델 크기, GPU/CPU, quantization, runtime에 따라 비용과 성능이 크게 달라진다.
- Fine-tuning은 dataset 품질, label schema, metric, compute 조건이 없으면 쉽게 과적합되거나 재현성이 떨어진다.

## 관련 워크플로

- 모델 후보 탐색: task, license, model size, runtime, benchmark, 최근 업데이트를 확인한다.
- 빠른 추론: Transformers `pipeline`으로 작은 예시를 실행한다.
- 로컬 실행: 모델 파일을 저장하고 로컬 경로 또는 runtime에 연결한다.
- Fine-tuning: dataset 준비와 tokenization 이후 `TrainingArguments`/`Trainer` 또는 `DataLoader`/optimizer/scheduler/manual loop로 훈련하고 metric으로 평가한다.
- Dataset 처리: [[Hugging Face Datasets]]로 dataset split, column, preprocessing, Arrow cache를 관리한다.
- 실험 기록: dataset, prompt, inference setting, latency, memory, output 품질을 남긴다.
- 채택 전 검증: 공식 model card와 실제 task eval을 분리해 기록한다.

## 관련 개념

- [[Fine-tuning]]
- [[ML Model Serving Pipeline]]
- [[Hybrid LLM Query Routing]]

## 관련 자료

- [[Seungbeomdo Hugging Face Pipeline Article]]
- [[Seungbeomdo Hugging Face Fine-tuning Article]]
- [[Hugging Face Transformers Training Guide]]
- [[Velog Hugging Face LLM Course Chapter 3 Fine-tuning Translation]]
- [[Hugging Face Datasets Arrow Guide]]
- [[Hugging Face Hermes 4.3 36B Model Card]]

## 메모

개인 PoC에서는 Hugging Face를 "모델을 빨리 찾고 실행해보는 곳"으로 먼저 쓰고, 실제 운영이 필요해지는 순간 serving runtime, 평가, 비용, 라이선스를 별도 의사결정으로 분리한다.
