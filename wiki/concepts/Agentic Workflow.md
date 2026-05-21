---
title: Agentic Workflow
type: concept
status: seed
created: 2026-05-20
updated: 2026-05-21
tags:
  - agents
  - workflow
related:
  - "[[Orchestration]]"
  - "[[Human-in-the-loop]]"
  - "[[Codex]]"
  - "[[Claude Blue]]"
  - "[[Ralph Wiggum Loop]]"
  - "[[MCP Remote SSE]]"
  - "[[Content Marketing Team]]"
  - "[[GitHub Content Marketing Team Repository]]"
sensitivity: private
evidence_level: source-backed
---

# Agentic Workflow

## 정의

Agentic workflow는 LLM 기반 시스템이 목표를 향해 계획하고, 행동하고, 결과를 점검하고, 반복하는 workflow다.

## 중요한 이유

이 위키는 반복되는 agent pattern, boundary, failure mode, human review point를 기록하는 데 사용할 수 있다.

## 핵심 아이디어

- agent에는 명확한 scope와 feedback이 필요하다.
- tool use는 가능한 한 관찰 가능하고 되돌릴 수 있어야 한다.
- 민감하거나 영향이 큰 작업에는 human review가 여전히 중요하다.
- [[Brunch Claude Blue Article]]은 실행, 학습, 검토를 위해 여러 agent를 병렬로 돌리는 일화적 workflow를 설명한다.
- [[AI Hero Ralph Wiggum Article]]은 plan file, progress file, feedback loop, commit boundary를 사용해 AI coding CLI를 반복 실행하는 autonomous workflow를 설명한다.
- [[Tistory MCP Remote SSE Article]]은 agent가 외부 tool server를 remote SSE endpoint로 연결하는 MCP 구성 패턴을 보여준다.
- [[GitHub Content Marketing Team Repository]]는 planner가 brief를 만들고 여러 specialist agent가 병렬로 산출물을 작성한 뒤 reviewer가 검수하는 콘텐츠 제작 workflow를 보여준다.

## 관련 자료

- [[Brunch Claude Blue Article]]
- [[AI Hero Ralph Wiggum Article]]
- [[Tistory MCP Remote SSE Article]]
- [[GitHub Content Marketing Team Repository]]

## 열린 질문

- 어떤 작업을 agent에게 위임해야 하는가?
- 어떤 작업은 항상 human approval을 거쳐야 하는가?
