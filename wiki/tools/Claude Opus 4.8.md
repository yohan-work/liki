---
title: Claude Opus 4.8
type: tool
status: active
created: 2026-05-29
updated: 2026-05-29
tags:
  - claude
  - llm
  - coding-agent
  - agentic-workflow
related:
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Anthropic Claude Opus 4.8 Announcement]]"
sensitivity: private
evidence_level: source-backed
---

# Claude Opus 4.8

## 무엇인가

Claude Opus 4.8은 Anthropic이 2026-05-28 발표한 Opus 계열 모델이다. [[Anthropic Claude Opus 4.8 Announcement]]에 따르면 Opus 4.7 대비 코딩, agentic skill, reasoning, 실무 지식 작업 평가에서 개선된 버전으로 소개된다.

## 사용 사례

- 장시간 코드 탐색과 변경 계획이 필요한 coding agent 작업.
- 불확실성, 입력 결함, 출력 결함을 더 명확히 드러내야 하는 분석 작업.
- Claude Code의 dynamic workflows처럼 여러 subagent와 검증 단계를 포함하는 대규모 작업.
- claude.ai 또는 Cowork에서 effort control을 통해 품질과 속도, rate limit 사용량을 조절하는 작업.

## 강점

- Anthropic은 Opus 4.8이 Opus 4.7 대비 agentic task에서 판단력과 협업성이 개선되었다고 주장한다.
- 발표문은 unsupported claim을 줄이고, 작업 중 불확실성을 더 잘 표시하는 honesty 개선을 강조한다.
- Claude Code와 함께 사용할 때 effort level과 dynamic workflows가 대규모 코드베이스 작업의 조절면으로 추가된다.
- Messages API의 system entry 변경은 agent harness가 실행 중 권한, token budget, environment context를 업데이트하는 패턴과 연결된다.

## 한계

- 이 페이지의 근거는 공식 발표문 1개이므로 benchmark와 tester quote를 실제 성능 일반화로 사용하면 안 된다.
- System Card, API 문서, Claude Code dynamic workflows 문서를 별도 확인하기 전에는 safety, availability, prompt cache 동작, plan별 접근 조건을 확정할 수 없다.
- fast mode와 effort setting은 비용, 속도, 품질 tradeoff가 있으므로 실제 workflow별 로그로 확인해야 한다.

## 관련 워크플로

- [[Claude Code]]에서 어려운 코드 변경은 effort level을 명시하고, 산출물 검증 기준을 함께 둔다.
- [[Agentic Workflow]]에서는 "더 많은 subagent"보다 계획, 병렬 실행, 검증, 불확실성 보고가 모두 관찰 가능한지가 중요하다.
- [[Orchestration]]에서는 system instruction, permission, token budget, environment context를 실행 중 갱신 가능한 state로 본다.

## 관련 개념

- [[Agentic Workflow]]
- [[Orchestration]]
- [[Claude Code]]

## 관련 자료

- [[Anthropic Claude Opus 4.8 Announcement]]

## 열린 질문

- 개인 LLM Wiki 유지보수에서는 어떤 작업부터 high, extra, max effort 기준을 나눌 것인가?
- dynamic workflows를 실제로 쓰기 전, 어떤 작업 크기와 검증 기준이 있어야 병렬 subagent 실행이 정당화되는가?
- Codex 기반 workflow와 Claude Code dynamic workflows를 비교할 때 공통 평가 기준은 무엇인가?
