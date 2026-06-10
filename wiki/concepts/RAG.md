---
title: RAG
type: concept
status: seed
created: 2026-05-20
updated: 2026-06-10
tags:
  - rag
  - retrieval
related:
  - "[[LLM Wiki]]"
  - "[[Agentic Workflow]]"
  - "[[LLM Hallucination]]"
  - "[[Hancom LLM Hallucination Reduction Research Article]]"
  - "[[HyDE]]"
  - "[[Open Network RAG HyDE Article]]"
  - "[[TurboVec]]"
  - "[[GitHub TurboVec Repository]]"
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
- [[Open Network RAG HyDE Article]]은 사용자의 일상어 질문과 지식 베이스의 전문 용어 사이에 간극이 있을 때 일반 RAG 검색이 실패할 수 있다고 설명한다. [[HyDE]]는 질문을 바로 검색하지 않고 LLM이 만든 가상 답변을 임베딩해 검색하는 방식으로 이 간극을 줄이려는 query transformation 기법이다.
- [[GitHub TurboVec Repository]]는 quantized local vector index, online ingest, allowlist 기반 filtered search를 제공한다고 설명한다. Metadata와 ACL은 SQL/FTS에서 좁히고 vector index는 candidate reranking을 맡는 hybrid retrieval 구조로 연결할 수 있다.

## 관련 자료

- [[Hancom LLM Hallucination Reduction Research Article]]
- [[Open Network RAG HyDE Article]]
- [[GitHub TurboVec Repository]]

## 열린 질문

- 이 위키의 어떤 부분을 retrieval에 최적화해야 하는가?
- 답변에서 source provenance를 어떻게 보여줘야 하는가?
- retrieval 결과가 없거나 약할 때 모델이 답변을 유보하도록 어떤 규칙을 둘 것인가?
- HyDE, query rewriting, multi-query retrieval 중 LLM Wiki 검색에는 어떤 방식이 가장 비용 대비 효과가 좋은가?
- LLM Wiki가 어떤 규모와 query failure에 도달해야 local vector index가 SQLite FTS5보다 가치가 커지는가?
