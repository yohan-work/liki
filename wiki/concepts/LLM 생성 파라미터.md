---
title: LLM 생성 파라미터
type: concept
status: seed
created: 2026-06-12
updated: 2026-06-12
tags:
  - llm
  - inference
  - decoding
  - sampling
  - reproducibility
related:
  - "[[Pred0771 LLM Parameters Article]]"
  - "[[LLM Hallucination]]"
  - "[[LLM-as-a-Judge]]"
  - "[[Hugging Face]]"
sensitivity: private
evidence_level: source-backed
---

# LLM 생성 파라미터

## 한 줄 정의

LLM 생성 파라미터는 모델의 다음 token 확률을 어떤 후보 집합에서 어떻게 선택하고, 반복과 길이, 종료, 반환 정보를 어떻게 제어할지 정하는 추론 설정이다.

## 핵심 구분

### 확률 분포와 후보 제어

- Temperature: logits의 상대적 차이를 조정해 확률 분포의 집중도를 바꾼다. 낮으면 높은 확률 token에 더 집중하고, 높으면 낮은 확률 후보가 선택될 가능성이 커진다.
- Top-k: 확률이 높은 k개 token만 sampling 후보로 남긴다.
- Top-p: 누적 확률이 임계값에 도달하는 최소 후보 집합에서 sampling한다. 후보 수가 context마다 달라진다.

### 반복 제어

- Frequency penalty: token이 이미 등장한 횟수에 따라 재등장 확률을 조절하는 방식으로 사용될 수 있다.
- Presence penalty: token의 기존 등장 여부에 따라 재등장 확률을 조절하는 방식으로 사용될 수 있다.
- Repetition penalty: 일부 open model runtime에서 반복 token의 logits를 별도 방식으로 조정한다.

정확한 수식, 값 범위, 지원 여부는 provider와 runtime마다 다르므로 이름만 보고 같은 동작이라고 가정하면 안 된다.

### 길이와 종료 제어

- 출력 token limit: 한 응답에서 생성할 수 있는 최대 출력 길이를 제한한다.
- Stop sequence: 지정한 문자열이나 token pattern이 나타날 때 생성을 종료한다.
- Context window는 입력과 출력에 사용할 수 있는 전체 범위이며 출력 token limit과 같은 개념이 아니다.

### 후보와 관찰성

- Candidate 수: 여러 출력을 생성해 비교할 수 있지만 비용과 latency가 증가한다.
- Logprobs: 선택된 token 또는 후보 token의 log probability를 제공할 수 있다. 이는 model confidence의 완전한 calibration이 아니며 사실성 점수도 아니다.
- Seed: 일부 runtime이 지원하는 재현성 보조 값이다. 같은 seed라도 model, backend, parameter, prompt가 달라지면 같은 결과를 보장하지 않는다.

## 운영 원칙

1. Task 유형을 factual extraction, classification, coding, creative generation, evaluation처럼 먼저 구분한다.
2. Provider와 model이 실제 지원하는 parameter만 사용한다.
3. Model, model version, prompt, tool schema, temperature, top-p/top-k, output limit, stop, seed를 가능한 범위에서 기록한다.
4. 여러 parameter를 한꺼번에 바꾸지 말고 eval set에서 한 변화의 효과를 관찰한다.
5. 평균적인 인상보다 정확도, 형식 준수, 다양성, 반복, latency, 비용 같은 task metric으로 비교한다.
6. Production 기본값을 정해 두되 model 변경 시 다시 calibration한다.

## Hallucination과의 관계

낮은 temperature는 출력의 무작위성을 줄일 수 있지만 사실성을 보장하지 않는다. 모델이 잘못된 답에 높은 확률을 부여하면 같은 오류를 더 일관되게 생성할 수 있다. [[LLM Hallucination]] 완화에는 trusted source, retrieval, tool call, validation, refusal, human review가 별도로 필요하다.

## 평가와 재현성

[[LLM-as-a-Judge]]나 agent eval에서는 generation setting이 결과 분산과 bias에 영향을 줄 수 있다. Candidate와 judge의 model, prompt, parameter를 기록하고, 확률적 task는 여러 run의 분산을 확인해야 한다. 단일 실행의 score를 고정된 model capability로 해석하면 안 된다.

## 실패 패턴

- Temperature를 creativity 또는 truthfulness의 단일 조절기로 본다.
- Top-p 0.8을 "80% 다양성"처럼 직접 해석한다.
- Provider가 다른데 같은 이름의 parameter가 같은 방식으로 작동한다고 가정한다.
- Output token limit과 context window를 혼동한다.
- Logprobs를 calibrated confidence나 factual correctness로 해석한다.
- Prompt, model, retrieval source가 바뀌었는데 parameter 효과로만 설명한다.
- Evaluation 없이 인터넷의 추천값을 production 기본값으로 복사한다.

## 내 관점 / 임시 결론

생성 파라미터는 모델의 지식을 고치기보다 출력 분포와 형식을 조절하는 운영 손잡이에 가깝다. 좋은 기본값은 보편적인 숫자가 아니라 task와 model에 대해 평가된 preset이며, 최신 reasoning model이나 managed API에서는 일부 sampling parameter가 노출되지 않을 수도 있다.

## 관련 자료

- [[Pred0771 LLM Parameters Article]]

## 열린 질문

- LLM Wiki ingest, source summary, creative writing, LLM judge에 각각 어떤 preset과 metric이 필요한가?
- Model provider가 parameter를 숨기거나 무시하는 경우 evaluation artifact에 무엇을 기록해야 하는가?
- 여러 run의 분산을 어느 정도까지 측정해야 비용 대비 유용한가?

