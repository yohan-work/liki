---
title: Orchestration
type: concept
status: seed
created: 2026-05-20
updated: 2026-05-20
tags:
  - orchestration
  - agents
related:
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
  - "[[Claude Blue]]"
sensitivity: private
evidence_level: source-backed
---

# Orchestration

## 정의

Orchestration은 workflow 안에서 tool, prompt, agent, state, review step을 조율하는 것이다.

## 중요한 이유

좋은 orchestration은 LLM-assisted work를 더 반복 가능하고 audit하기 쉽게 만든다.

## 핵심 아이디어

- workflow는 input, output, decision point를 드러내야 한다.
- specialized skill은 반복적인 setup을 줄일 수 있다.
- log와 report는 trust 유지에 도움이 된다.
- [[Brunch Claude Blue Article]]은 orchestration을 즉흥적인 vibe coding보다 구조화된 후속 실천으로 설명하며, detailed spec, reusable skill 또는 tool, explicit review boundary를 포함한다고 본다.

## 관련 자료

- [[Brunch Claude Blue Article]]

## 열린 질문

- 개인 지식 작업에는 어떤 orchestration pattern이 맞는가?
- failure와 contradiction을 어떻게 추적해야 하는가?
