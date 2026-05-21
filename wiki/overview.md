---
title: LLM Wiki Overview
type: overview
status: active
created: 2026-05-20
updated: 2026-05-21
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

# LLM Wiki 운영 대시보드

이 페이지는 Obsidian에서 먼저 여는 운영 화면이다. `wiki/index.md`는 전체 목차로 유지하고, 이 페이지는 다음 행동과 반복 루틴을 정리한다.

## 현재 상태

- 자료 요약: 11개
- 개념 페이지: 12개
- 도구 페이지: 7개
- 프로젝트 페이지: 2개
- 재사용 질문 답변: 1개
- 최근 구조 점검: 2026-05-21, lint errors 0 / warnings 0

핵심 도메인은 AI-native work, [[Agentic Workflow]], AX, [[Codex]], [[Claude Code]], [[RAG]], [[LLM Wiki]], [[LLM Hallucination]], [[Basalt Project]], [[Personal Operating System]]이다. 최근 참고 도구 후보로 [[Content Marketing Team]]을 추가했다.

## 다음 행동

- `inbox/to-ingest.md`를 확인하고 대기 중인 URL, clipping, 아이디어가 있는지 본다.
- 좋은 질문이 생기면 일회성 답변으로 끝내지 말고 [[LLM Wiki 운영 흐름]] 기준으로 저장 가치가 있는지 판단한다.
- [[Basalt Project]]와 [[Personal Operating System]]에 연결할 결정, source, 열린 질문을 분리한다.
- source-backed로 강화할 seed page 후보를 고른다: [[LLM Wiki]], [[RAG]], [[Skills]], [[Codex]], [[Obsidian]].
- 여러 source가 쌓인 주제는 단순 요약 대신 비교나 질문 답변으로 승격한다.

## 반복 루틴

- 새 자료 처리: raw 보존, source summary 작성, 관련 concept/project/tool 갱신, index와 log 업데이트.
- 질문 저장: 반복 참조 가치가 있는 답변만 `wiki/questions/`에 저장하고 관련 페이지와 저장 이유를 남긴다.
- 프로젝트 결정 기록: 장기 프로젝트에 영향을 주는 판단은 project page에 근거, 결정, 후속 작업을 분리해 남긴다.
- 여러 자료 종합: 같은 주제의 source가 2개 이상이면 공통 주장, 차이, 검증 필요 주장을 따로 정리한다.
- 주간 점검: `node scripts/lint-wiki.ts`로 frontmatter, 링크, index 누락, taxonomy 문제를 확인한다.

## 주요 진입점

- 전체 목차: [[LLM Wiki Index]]
- 운영 흐름: [[LLM Wiki 운영 흐름]]
- Ingest 대기: `inbox/to-ingest.md`
- 프로젝트: [[Basalt Project]], [[Personal Operating System]]
- 비교: [[RAG vs Agentic Workflow]]
- 최근 lint 기준: [[lint-2026-05-20]]

## 열린 질문

- 개인 AI workflow에서 안정적인 vocabulary가 되어야 할 개념은 무엇인가?
- 어떤 아이디어가 source-backed이고, 어떤 아이디어가 개인 가설인가?
- 프로젝트 결정 사항과 일반 개념 노트를 어떻게 분리해야 하는가?
- 대시보드에서 자동 집계해야 할 항목과 사람이 직접 관리해야 할 항목은 무엇인가?
