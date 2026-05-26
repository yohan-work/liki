---
title: LLM Wiki Overview
type: overview
status: active
created: 2026-05-20
updated: 2026-05-26
tags:
  - llm-wiki
  - overview
  - ai-native-work
related:
  - "[[LLM Wiki]]"
  - "[[Agentic Workflow]]"
  - "[[RAG]]"
  - "[[Basalt Project]]"
  - "[[Personal Operating System]]"
  - "[[LLM Wiki 운영 흐름]]"
sensitivity: private
evidence_level: unsourced
---

# LLM Wiki 실행 대시보드

이 페이지는 Obsidian에서 먼저 여는 실행 화면이다. `wiki/index.md`는 전체 목차로 유지하고, 이 페이지는 아이디어, MVP / PoC, 결정, 회의 액션을 다음 실험으로 연결한다.

## 현재 상태

- 자료 요약: 28개
- 개념 페이지: 17개
- 도구 페이지: 13개
- 프로젝트 페이지: 2개
- 아이디어 페이지: 1개
- 기회 카드: 0개
- MVP / PoC 페이지: 1개
- 결정 기록: 0개
- 회의록 요약: 0개
- 재사용 질문 답변: 1개
- 최근 구조 점검: 2026-05-26, lint errors 0 / warnings 0

핵심 도메인은 AI-native work, [[Agentic Workflow]], AX, [[Codex]], [[Claude Code]], [[RAG]], [[LLM Wiki]], [[LLM Hallucination]], [[Hybrid LLM Query Routing]], [[ML Model Serving Pipeline]], [[Fine-tuning]], [[AI Literacy]], [[BYOK]], [[Basalt Project]], [[Personal Operating System]]이다. 최근 참고 도구 후보로 [[Hermes Agent]], [[SQLite]], [[Realtime API]], [[Hugging Face]], [[Hugging Face Datasets]]를 추가했고, [[Fine-tuning]]에는 Hugging Face Transformers 공식 training workflow와 LLM Course 기반 실습 흐름을 보강했다. Codex는 coding agent에서 업무 context 수집, 검토 가능한 산출물, 승인 기반 action, 반복 자동화를 다루는 운영 레이어로도 보강했다. 최근 고도화 방향은 다양한 아이디어와 MVP / PoC 후보를 빠르게 선별하고, 회의록과 결정 기록을 실행 자산으로 남기는 것이다.

## 오늘 볼 것

- [[AI 트렌드 레이더 7일 PoC]]의 1차 소스 20개 목록을 만든다.
- [[AI 트렌드 레이더 웹사이트]]의 데이터 스키마를 확정한다.
- `inbox/to-ingest.md`를 확인하고 새 자료가 있으면 바로 ingest하지 말고 triage 대상으로 둔다.

## 이번 주 실행 후보

- [[AI 트렌드 레이더 7일 PoC]]: 개인용 AI 트렌드 정적 피드가 실제 재방문 가치와 wiki 재사용 가치를 만드는지 검증한다.

## MVP 승격 후보

- [[AI 트렌드 레이더 웹사이트]]: 7일 PoC 후보로 승격했으며, 실험 결과에 따라 active MVP 또는 보류로 결정한다.

## 근거 보강 후보

- [[LLM Wiki]]
- [[Codex]]
- [[Obsidian]]
- [[Basalt Project]]
- [[Personal Operating System]]

## 다음 행동

- 실행 후보는 한 번에 하나만 MVP / PoC로 관리한다.
- 좋은 질문이 생기면 일회성 답변으로 끝내지 말고 [[LLM Wiki 운영 흐름]] 기준으로 저장 가치가 있는지 판단한다.
- 여러 source가 쌓인 주제는 단순 요약 대신 비교나 질문 답변으로 승격한다.

## 반복 루틴

- 새 자료 처리: 필요하면 `node scripts/new-source.ts <raw-path-or-url>`로 triage 초안을 먼저 보고, raw 보존, source summary 작성, 관련 concept/project/tool 갱신, index와 log 업데이트.
- 아이디어 처리: 문제, 대상 사용자, 해결 가설, 빠른 검증 방법을 분리하고 실행 가치가 있으면 MVP / PoC로 승격한다.
- MVP / PoC 처리: 성공 기준과 1주 실험 계획을 먼저 쓰고, 다음 작업이 없으면 active 상태로 두지 않는다.
- 회의록 처리: 핵심 논의보다 결정과 액션 아이템을 우선 추출하고 관련 project, mvp, idea에 연결한다.
- 결정 처리: 선택지와 포기한 대안을 남겨 같은 판단을 반복하지 않게 한다.
- 질문 저장: 반복 참조 가치가 있는 답변만 `wiki/questions/`에 저장하고 관련 페이지와 저장 이유를 남긴다.
- 프로젝트 결정 기록: 장기 프로젝트에 영향을 주는 판단은 project page에 근거, 결정, 후속 작업을 분리해 남긴다.
- 여러 자료 종합: 같은 주제의 source가 2개 이상이면 공통 주장, 차이, 검증 필요 주장을 따로 정리한다.
- 주간 점검: `node scripts/lint-wiki.ts`로 frontmatter, 링크, index 누락, taxonomy 문제를 확인한다.

## 주요 진입점

- 전체 목차: [[LLM Wiki Index]]
- 운영 흐름: [[LLM Wiki 운영 흐름]]
- Ingest 대기: `inbox/to-ingest.md`
- 아이디어 임시 저장: `inbox/ideas/`
- 아이디어 페이지: `wiki/ideas/`
- 기회 카드와 리뷰: `wiki/opportunities/`
- MVP / PoC 페이지: `wiki/mvps/`
- 결정 기록: `wiki/decisions/`
- 회의록 요약: `wiki/meetings/`
- 주간 리뷰: `wiki/reviews/`
- 프로젝트: [[Basalt Project]], [[Personal Operating System]]
- 비교: [[RAG vs Agentic Workflow]]
- 최근 lint 기준: [[lint-2026-05-20]]

## 열린 질문

- 개인 AI workflow에서 안정적인 vocabulary가 되어야 할 개념은 무엇인가?
- 어떤 아이디어가 source-backed이고, 어떤 아이디어가 개인 가설인가?
- 프로젝트 결정 사항과 일반 개념 노트를 어떻게 분리해야 하는가?
- 대시보드에서 자동 집계해야 할 항목과 사람이 직접 관리해야 할 항목은 무엇인가?
- 어떤 아이디어를 단순 메모로 남기고, 어떤 아이디어를 1주 실험으로 승격해야 하는가?
- 회의 액션 아이템을 어느 수준까지 위키에 남겨야 관리 부담보다 재사용 가치가 커지는가?
