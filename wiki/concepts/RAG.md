---
title: RAG
type: concept
status: seed
created: 2026-05-20
updated: 2026-05-21
tags:
  - rag
  - retrieval
related:
  - "[[LLM Wiki]]"
  - "[[Agentic Workflow]]"
  - "[[LLM Hallucination]]"
  - "[[Hancom LLM Hallucination Reduction Research Article]]"
sensitivity: private
evidence_level: source-backed
---

# RAG

## 정의

RAG(retrieval-augmented generation)는 모델이 검색된 context를 사용해 더 근거 있는 답변을 생성하는 패턴이다.

## 중요한 이유

이 위키에서 RAG는 질문을 source-backed note와 과거 결정에 연결하는 방식으로 중요하다.

## 핵심 아이디어

- retrieval 품질은 답변 품질에 직접 영향을 준다.
- source summary는 검색 친화적인 지식 단위가 될 수 있다.
- RAG는 agentic workflow를 대체하기보다 보완할 수 있다.
- [[Hancom LLM Hallucination Reduction Research Article]]은 RAG를 LLM 환각 완화 전략 중 하나로 설명한다. 모델이 내부 기억만으로 답하지 않고 외부 자료를 검색해 활용하게 만들면 지식 한계를 보완하고 사실 기반 교정에 도움을 줄 수 있지만, 대규모 검색 처리 비용이 늘어난다는 한계도 함께 제시한다.

## 관련 자료

- [[Hancom LLM Hallucination Reduction Research Article]]

## 열린 질문

- 이 위키의 어떤 부분을 retrieval에 최적화해야 하는가?
- 답변에서 source provenance를 어떻게 보여줘야 하는가?
- retrieval 결과가 없거나 약할 때 모델이 답변을 유보하도록 어떤 규칙을 둘 것인가?
