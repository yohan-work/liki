---
title: LLM Hallucination
type: concept
status: seed
created: 2026-05-21
updated: 2026-06-11
tags:
  - llm
  - hallucination
  - reliability
  - ai-safety
related:
  - "[[RAG]]"
  - "[[Agentic Workflow]]"
  - "[[Human-in-the-loop]]"
  - "[[Hancom LLM Hallucination Reduction Research Article]]"
  - "[[HyDE]]"
  - "[[Open Network RAG HyDE Article]]"
  - "[[LLM-as-a-Judge]]"
  - "[[Codingsmu LLM as a Judge Article]]"
sensitivity: private
evidence_level: source-backed
---

# LLM Hallucination

## 한 줄 정의

LLM Hallucination은 모델이 사실과 맞지 않지만 그럴듯하고 확신 있어 보이는 출력을 생성하는 현상이다.

## 핵심 문제

환각은 단순한 오답보다 위험하다. 출력이 자연스럽고 설득력 있게 보이기 때문에 사용자가 검증 없이 받아들이기 쉽고, 의료, 법률, 금융처럼 정밀한 정보가 필요한 영역에서는 직접적인 피해로 이어질 수 있다.

[[Hancom LLM Hallucination Reduction Research Article]]은 주요 원인을 학습 데이터 오류, 모델의 과도한 확신, 실시간 검증 메커니즘 부재로 정리한다.

## 작동 방식

- 모델은 다음 토큰 확률을 기반으로 답변을 생성하므로 생성 내용의 참거짓을 스스로 보장하지 못한다.
- 학습 데이터에 틀리거나 오래된 정보가 있으면 그 오류가 출력으로 재생산될 수 있다.
- 모르는 질문에서도 답변을 완성하도록 유도되면, 불확실성을 표시하거나 거절하는 대신 허구의 답을 만들 수 있다.
- 강화 학습이나 평가 체계가 "항상 답하기"를 보상하면 답할 수 없는 상황에서 환각이 늘어날 수 있다.

## 좋은 사용 사례

이 개념은 다음을 설계하거나 검토할 때 참조한다.

- RAG 기반 답변 시스템의 품질 기준
- agentic workflow의 stop condition과 human review gate
- source-backed wiki 운영 규칙
- 고책임 영역에서 LLM 출력을 검증하는 harness

## 실패 패턴

- 출처 없는 답변을 source-backed claim처럼 저장한다.
- retrieval 결과가 부실한데도 RAG를 썼다는 이유만으로 답변을 신뢰한다.
- [[HyDE]]가 만든 가상 답변을 실제 source-backed evidence처럼 취급한다.
- "모르겠다", "확인 필요", "사용자 승인 필요" 같은 응답 경로를 만들지 않는다.
- 모델 성능 평가에서 정답률만 보고 거절 능력과 불확실성 calibration을 보지 않는다.
- CoT나 자체 검증을 붙였다는 이유만으로 실제 외부 근거 검증을 생략한다.
- [[LLM-as-a-Judge]]가 자연스러운 평가 설명을 만들었다는 이유로 judge의 오판이나 candidate와 공유하는 오류를 놓친다.

## 관련 자료

- [[Hancom LLM Hallucination Reduction Research Article]]
- [[Open Network RAG HyDE Article]]
- [[Codingsmu LLM as a Judge Article]]

## 관련 개념과 차이

- [[RAG]]: 환각을 줄이는 한 가지 시스템 패턴이다. 다만 retrieval 품질과 출처 검증이 약하면 환각을 완전히 막지 못한다.
- [[HyDE]]: RAG 검색 품질을 높이기 위한 query transformation 기법이다. 검색 결과가 좋아지면 환각 완화에 도움을 줄 수 있지만, hypothetical document 자체는 근거가 아니다.
- [[Human-in-the-loop]]: 고위험 판단에서 사람이 검토와 승인 역할을 맡는 운영 장치다.
- [[Agentic Workflow]]: agent가 도구 사용, 검증, 중단, 사용자 확인을 반복하도록 설계하면 환각 완화에 도움을 줄 수 있다.
- [[LLM-as-a-Judge]]: 생성물의 오류를 찾는 보조 evaluator가 될 수 있지만 judge 자체도 환각과 capability limitation을 가지므로 외부 근거 검증을 대체하지 못한다.

## 예시

- 존재하지 않는 법적 판례를 실제 판례처럼 설명한다.
- 오래된 API 정보를 현재 버전의 사실처럼 답한다.
- 자료에 없는 통계나 논문 수치를 확신 있게 만들어낸다.

## 내 관점 / 임시 결론

LLM Wiki의 운영 규칙은 환각 완화 관점에서 의미가 있다. raw source를 보존하고, source summary를 만들고, evidence_level을 표시하고, unsourced claim을 분리하는 절차는 LLM이 "그럴듯한 지식"을 장기 지식으로 오염시키는 일을 줄인다.

agent workflow에서는 환각을 단일 모델의 결함으로만 보지 않고, retrieval, verification, refusal, human review가 함께 다루는 시스템 품질 문제로 보는 편이 실용적이다.

## 열린 질문

- LLM Wiki에서 source-backed claim과 Codex 해석을 더 기계적으로 분리할 schema가 필요한가?
- agent에게 "모르면 멈추기"를 어떤 prompt, test, harness rule로 강제할 수 있는가?
- Hallucination Tax와 Knowledge Boundary를 별도 concept page로 분리할 만큼 반복 참조하게 될 것인가?
- HyDE 같은 생성 기반 retrieval 보조 기법에서 중간 생성물의 오류를 어떻게 감지할 것인가?
