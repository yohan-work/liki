---
title: LLM-as-a-Judge
type: concept
status: seed
created: 2026-06-11
updated: 2026-06-11
tags:
  - llm-evaluation
  - model-based-evaluation
  - evaluation-harness
related:
  - "[[Codingsmu LLM as a Judge Article]]"
  - "[[Agentic Workflow]]"
  - "[[Human-in-the-loop]]"
  - "[[LLM Hallucination]]"
  - "[[Skills]]"
  - "[[LLM 생성 파라미터]]"
  - "[[PyTorchKR AI ML Papers 2026 06 08 14]]"
sensitivity: private
evidence_level: source-backed
---

# LLM-as-a-Judge

## 한 줄 정의

LLM-as-a-Judge는 LLM이 생성한 답변이나 작업 결과를 다른 LLM이 rubric, reference, 비교 대상을 바탕으로 평가하게 하는 model-based evaluation 방식이다.

## 평가 형식

- Pairwise comparison: 같은 질문에 대한 두 답변을 비교해 우수한 답변이나 무승부를 선택한다.
- Single answer grading: 답변 하나를 rubric에 따라 점수화하고 이유를 기록한다.
- Reference-guided grading: 정답, source, 계산 과정, 요구사항 같은 reference를 함께 제공해 평가한다.

[[Codingsmu LLM as a Judge Article]]은 MT-Bench와 Chatbot Arena를 소개한 연구를 바탕으로 세 형식과 FastChat 실습 흐름을 설명한다.

[[PyTorchKR AI ML Papers 2026 06 08 14]]가 소개한 AI reviewer 연구는 Nature 계열 논문 리뷰를 전문가들이 검토한 사례를 통해, AI reviewer가 인간 심사자를 완전히 대체하기보다 사람이 놓친 문제를 찾는 보완재로 쓰일 가능성과 긴 문맥·암묵지 한계를 함께 제시한다.

## 왜 사용하는가

- 많은 answer와 agent run을 같은 형식으로 빠르게 평가할 수 있다.
- 단순 metric으로 표현하기 어려운 유용성, 명료성, instruction following을 rubric으로 다룰 수 있다.
- 점수와 함께 판단 이유를 생성해 failure case를 분류하는 데 사용할 수 있다.
- human evaluation 전에 대규모 후보를 좁히거나 회귀 신호를 찾는 보조 평가자가 될 수 있다.

## 주요 편향과 한계

- Position bias: pairwise answer의 제시 순서가 선택에 영향을 줄 수 있다.
- Verbosity bias: 정확하고 짧은 답변보다 길고 상세한 답변을 선호할 수 있다.
- Self-enhancement bias: judge와 같은 model 계열이 만든 답변을 더 선호할 수 있다.
- Capability ceiling: judge가 수학, 추론, domain knowledge를 틀리면 그 답변의 오류도 판별하지 못할 수 있다.
- Rubric ambiguity: 평가 기준이 겹치거나 모호하면 점수 의미와 반복 실행 안정성이 낮아진다.
- Correlated failure: candidate와 judge가 같은 오개념이나 provider 특성을 공유하면 오류를 상호 승인할 수 있다.
- Explanation overtrust: 자연스러운 평가 설명이 실제 판정의 정확성을 보장하지 않는다.

## 운영 원칙

1. 평가 목적을 factual correctness, instruction following, style, safety처럼 분리한다.
2. rubric의 각 점수 구간과 실패 조건을 observable behavior로 정의한다.
3. pairwise 평가는 answer 순서를 바꿔 반복하고 순서에 따라 결과가 뒤집히는지 기록한다.
4. 사실과 계산을 평가할 때는 가능한 한 trusted reference와 deterministic check를 함께 사용한다.
5. judge model, prompt version, temperature, candidate 순서, reference version을 evaluation artifact에 남긴다.
6. 확률적 generation을 사용하는 경우 여러 run의 분산을 확인하고, candidate와 judge의 sampling setting을 구분해 기록한다.
7. 작은 human-labeled set으로 judge의 일치도와 대표적인 불일치 유형을 먼저 확인한다.
8. judge score는 자동 승인 근거가 아니라 test, lint, source check, human review와 결합하는 신호로 사용한다.

## Agent workflow 적용

[[Agentic Workflow]]에서 LLM judge는 producer와 verifier를 분리하거나 여러 candidate 중 다음 단계로 보낼 결과를 고르는 데 사용할 수 있다. 그러나 verifier가 LLM이라는 이유만으로 독립 검증이 되는 것은 아니다. 동일 model family, 동일 context, 동일 잘못된 가정은 correlated failure를 만들 수 있다.

coding task에서는 compile, test, type check, static analysis 같은 deterministic evidence를 우선하고, LLM judge는 요구사항 충족, 설명 품질, UX, 유지보수성처럼 구조화하기 어려운 부분을 보조한다. wiki task에서는 frontmatter와 link는 lint로 검사하고, claim-source alignment와 요약 품질은 reference-guided judge와 human review로 확인하는 혼합 구조가 적합하다.

## Human review와의 관계

[[Human-in-the-loop]]은 judge를 대체하는 단계가 아니라 calibration과 escalation 경계를 제공한다. 사람은 전체 output을 매번 채점하기보다 calibration set을 만들고, judge 간 불일치, 낮은 confidence, 고위험 action, reference 충돌 사례를 검토할 수 있다.

LLM judge와 human judge가 다를 때 사람 판단을 무조건 정답으로 간주하기보다 rubric이 모호한지, reference가 부족한지, 선호 기준이 task 목표와 맞는지 함께 점검해야 한다.

## 실패 패턴

- 단일 judge의 점수 하나로 model이나 workflow의 품질을 확정한다.
- answer 순서와 길이를 통제하지 않고 pairwise 결과를 비교한다.
- candidate model과 judge model을 같게 쓰면서 self-preference 가능성을 기록하지 않는다.
- source가 필요한 task에 reference 없이 유창성만 평가한다.
- 평균 점수만 보고 치명적 오류, 분산, 불일치 사례를 숨긴다.
- judge prompt나 model version을 바꾸고도 이전 결과와 직접 비교한다.
- human calibration 없이 judge 설명이 설득력 있다는 이유로 production gate에 사용한다.

## 관련 자료

- [[Codingsmu LLM as a Judge Article]]
- [[PyTorchKR AI ML Papers 2026 06 08 14]]

## 내 관점 / 임시 결론

LLM-as-a-Judge의 가치는 human evaluation을 제거하는 데 있지 않고 반복 가능한 평가 초안을 만들고 사람이 볼 failure case를 좁히는 데 있다. 신뢰할 수 있는 evaluation harness는 deterministic check, reference, LLM judge, human calibration을 task 위험도에 맞게 조합해야 한다.

## 열린 질문

- LLM Wiki ingest 품질을 평가할 최소 rubric은 claim-source alignment, 분류, link, 실행 시사점을 어떻게 나눠야 하는가?
- 같은 task를 여러 judge가 평가할 때 합의율과 비용 사이의 적절한 기준은 무엇인가?
- judge prompt와 model version이 바뀔 때 기존 score의 comparability를 어떻게 유지할 것인가?
- high-stakes workflow에서 LLM judge가 자동 통과시킬 수 없는 조건을 어떻게 명시할 것인가?
- AI reviewer가 발견한 "인간이 놓친 문제"를 실제 검토 프로세스에서 noise와 구분하려면 어떤 calibration set이 필요한가?
