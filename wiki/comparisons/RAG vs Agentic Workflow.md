---
title: RAG vs Agentic Workflow
type: comparison
status: seed
created: 2026-05-20
updated: 2026-05-20
tags:
  - rag
  - agentic-workflow
  - comparison
related:
  - "[[RAG]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Human-in-the-loop]]"
sensitivity: private
evidence_level: unsourced
---

# RAG vs Agentic Workflow

## 한 줄 비교

[[RAG]]는 답변에 필요한 근거 context를 검색해 모델에 제공하는 패턴이고, [[Agentic Workflow]]는 목표를 달성하기 위해 계획, 도구 사용, 실행, 검토, 반복을 포함하는 더 넓은 작업 방식이다.

## 핵심 차이

- RAG의 중심 질문은 "어떤 정보를 찾아 답변에 넣을 것인가?"에 가깝다.
- Agentic Workflow의 중심 질문은 "목표를 달성하기 위해 어떤 단계로 행동하고 검토할 것인가?"에 가깝다.
- RAG는 retrieval과 grounding에 강하고, Agentic Workflow는 task decomposition, tool use, orchestration에 초점이 있다.

## 함께 쓰는 방식

RAG는 Agentic Workflow 안의 한 단계로 들어갈 수 있다. 예를 들어 agent가 먼저 관련 자료를 검색하고, 그 자료를 바탕으로 초안을 만든 뒤, 다른 단계에서 검토하거나 수정할 수 있다.

## 좋은 사용 사례

- RAG: source-backed answer, 문서 기반 질의응답, 기존 지식 검색.
- Agentic Workflow: multi-step research, code change, wiki ingest, lint, report generation.

## 실패 패턴

- RAG만 사용할 때: 검색 결과가 부정확하면 답변도 약해지고, 여러 단계의 실행 책임을 다루기 어렵다.
- Agentic Workflow만 사용할 때: source grounding이 약하면 agent가 그럴듯하지만 근거 없는 결론을 만들 수 있다.

## 판단 기준

- 질문이 "근거 있는 답변" 중심이면 RAG를 우선 고려한다.
- 작업이 "여러 단계를 실행하고 검토"해야 한다면 Agentic Workflow를 고려한다.
- 둘 다 필요한 경우에는 RAG를 agent workflow의 retrieval 단계로 포함한다.

## 관련 개념

- [[RAG]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[Human-in-the-loop]]

## 내 관점 / 임시 결론

이 위키에서는 RAG를 지식 접근 방식으로, Agentic Workflow를 작업 실행 방식으로 구분해 다룬다. 다만 실제 Codex 운영에서는 둘이 분리되기보다 함께 쓰이는 경우가 많다.

## 열린 질문

- 이 비교를 source-backed로 만들기 위해 어떤 자료를 ingest해야 하는가?
- LLM Wiki 운영에서 RAG가 필요한 시점과 단순 파일 검색으로 충분한 시점은 어떻게 구분할 수 있는가?
- Agentic Workflow 안에서 human approval gate는 어느 단계에 두는 것이 좋은가?
