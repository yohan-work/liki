---
title: Claude Fable 5
type: tool
status: active
created: 2026-06-10
updated: 2026-06-10
tags:
  - claude
  - anthropic
  - frontier-model
  - coding-agent
  - long-running-agent
related:
  - "[[Claude Code]]"
  - "[[Claude Opus 4.8]]"
  - "[[Agentic Workflow]]"
  - "[[Human-in-the-loop]]"
  - "[[GeekNews Claude Fable 5 and Mythos 5 Article]]"
sensitivity: private
evidence_level: source-backed
---

# Claude Fable 5

## 무엇인가

Claude Fable 5는 Anthropic이 2026년 6월 9일 발표한 일반 제공용 Mythos급 모델이다. 같은 기반 모델에서 일부 안전장치를 제한 대상에 맞게 해제한 버전은 Claude Mythos 5로 제공된다.

## 주요 특징

- 긴 비동기 작업에서 계획, subagent 위임, 도구 실행, 실패 복구, 자체 검증을 수행하는 방향으로 설계되었다.
- API 모델명은 `claude-fable-5`다.
- 발표 시점 가격은 입력 100만 토큰당 10달러, 출력 50달러다.
- 사이버보안, 생물학·화학, distillation 관련 분류기가 작동하면 Claude Opus 4.8로 폴백한다.
- Mythos급 모델 트래픽은 안전 모니터링 목적으로 30일 보존이 요구된다.

## 운영 관점

- 결과 평가 시 요청 모델뿐 아니라 실제 응답 모델과 폴백 여부를 기록한다.
- 장기 작업에는 checkpoint, 비용 한도, stop condition, test, diff, source evidence를 둔다.
- private source code, 위키, 고객 데이터는 30일 보존 정책과 조직 규정을 확인한 뒤 사용한다.
- benchmark와 초기 파트너 사례는 실제 workflow의 품질, 비용, false positive 비율을 대신하지 않는다.

## Claude Code와의 관계

[[GeekNews Claude Fable 5 and Mythos 5 Article]]은 Fable 5를 Claude Code 같은 agent environment에서 수일간 작동하는 모델로 소개한다. 중요한 변화는 단일 응답 품질보다 긴 작업에서 계획과 검증을 유지하는 능력이지만, 실제 운영에서는 harness가 checkpoint와 audit artifact를 강제해야 한다.

## 관련 자료

- [[GeekNews Claude Fable 5 and Mythos 5 Article]]
- [[Claude Code]]
- [[Claude Opus 4.8]]
- [[Agentic Workflow]]
- [[Human-in-the-loop]]

## 한계

- Anthropic 발표와 초기 사용자 반응이 근거의 중심이라 독립 평가가 부족하다.
- 안전 분류기의 false positive로 일반 코딩 요청도 Opus 4.8에 폴백할 수 있다.
- 30일 데이터 보존 요구는 zero data retention이 필요한 조직에 도입 장벽이 될 수 있다.
- 가격과 구독 포함 조건은 출시 초기 정책이므로 변경 가능성이 높다.

## 열린 질문

- Claude Opus 4.8보다 높은 비용을 정당화하는 실제 작업 범위는 무엇인가?
- Fable 5의 장기 실행이 checkpoint 없이도 안정적인지, harness가 품질 향상의 핵심인지 어떻게 분리 평가할 것인가?
- 모델 폴백이 발생한 세션을 eval dataset에서 제외할지 별도 cohort로 관리할지 결정해야 하는가?
