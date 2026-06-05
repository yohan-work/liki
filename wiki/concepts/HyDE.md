---
title: HyDE
type: concept
status: seed
created: 2026-06-05
updated: 2026-06-05
tags:
  - rag
  - retrieval
  - query-transformation
related:
  - "[[RAG]]"
  - "[[LLM Hallucination]]"
  - "[[Open Network RAG HyDE Article]]"
sensitivity: private
evidence_level: source-backed
---

# HyDE

## 한 줄 정의

HyDE(Hypothetical Document Embeddings)는 사용자 질문에 대한 가상 답변이나 가상 문서를 먼저 생성하고, 그 문서를 임베딩해 검색 쿼리로 사용하는 RAG 기법이다.

## 핵심 문제

일반 [[RAG]]는 사용자 질문을 그대로 임베딩해 검색한다. 그런데 사용자는 일상어로 묻고, 지식 베이스는 전문 용어와 공식 문체로 쓰여 있으면 semantic gap 때문에 관련 문서를 놓칠 수 있다.

[[Open Network RAG HyDE Article]]은 근로기준법 예시를 통해 "일찍 가라"라는 일상 표현과 "휴업수당"이라는 법률 용어 사이의 간극이 일반 RAG 검색 실패를 만들 수 있다고 설명한다.

## 작동 방식

1. 사용자 질문을 LLM에 넣어 가능한 전문 답변이나 가상 문서를 생성한다.
2. 원 질문 대신 생성된 가상 문서를 임베딩한다.
3. 이 임베딩으로 지식 베이스에서 유사 문서를 검색한다.
4. 검색된 실제 문서를 근거로 최종 답변을 생성한다.

중요한 점은 가상 문서가 근거가 아니라 검색을 돕는 중간 표현이라는 것이다. 최종 grounding은 검색된 실제 source가 맡아야 한다.

## 좋은 사용 사례

- 사용자의 표현과 문서의 표현이 크게 다른 도메인.
- 법률, 사내 규정, 기술 매뉴얼, IT 가이드처럼 전문 용어가 많은 지식 베이스.
- 질문이 짧거나 모호해서 그대로 임베딩하면 검색 signal이 약한 경우.
- LLM Wiki에서 사용자의 자연어 질문을 wiki vocabulary와 source summary 표현으로 확장해야 하는 경우.

## 실패 패턴

- 생성된 가상 답변을 실제 근거처럼 취급한다.
- HyDE가 만든 잘못된 가정 때문에 검색 방향이 한쪽으로 고정된다.
- embedding model, chunking, metadata filtering이 부실한데 HyDE만 붙여 검색 품질 문제를 해결하려 한다.
- 최종 답변에서 검색된 실제 source가 아니라 hypothetical document의 내용을 그대로 인용한다.
- 유사도 점수 상승을 실제 정답률이나 사용자 만족도 상승으로 바로 해석한다.

## 관련 자료

- [[Open Network RAG HyDE Article]]

## 관련 개념과 차이

- [[RAG]]: HyDE는 RAG 자체가 아니라 RAG의 retrieval query를 개선하는 전처리 또는 query transformation 기법이다.
- [[LLM Hallucination]]: HyDE는 검색 품질을 높여 환각을 줄이는 데 도움을 줄 수 있지만, 가상 문서가 틀리면 오히려 잘못된 검색을 유도할 수 있다.
- query rewriting: query rewriting이 질문을 다른 검색어로 바꾸는 방식이라면, HyDE는 더 긴 가상 답변/문서를 만들어 문서 공간에 가깝게 이동시키는 방식에 가깝다.

## 예시

사용자가 "사장님이 손님 없다고 일찍 가라는데 돈 못준대요"라고 묻는다. HyDE 단계에서는 이를 근로자, 휴업, 휴업수당 같은 법률 용어를 포함한 가상 답변으로 바꾸고, 그 가상 답변을 이용해 실제 근로기준법 조항을 검색한다.

## 내 관점 / 임시 결론

HyDE는 LLM Wiki 검색에도 흥미로운 후보지만, 생성된 중간 답변을 장기 지식으로 저장하면 안 된다. 검색용 scratch artifact로만 다루고, wiki에 남길 내용은 실제 source summary와 concept page에 근거해야 한다.

## 열린 질문

- LLM Wiki 검색에서 HyDE를 적용하면 단순 `rg`나 keyword search보다 실제로 좋은 후보를 찾는가?
- HyDE의 가상 문서를 log에 남기면 재현성은 좋아지지만 지식 오염 위험이 커지는가?
- HyDE와 multi-query retrieval을 같이 쓸 때 중복 검색 비용을 어떻게 제한할 것인가?
