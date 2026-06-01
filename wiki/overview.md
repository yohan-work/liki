---
title: LLM Wiki Overview
type: overview
status: active
created: 2026-05-20
updated: 2026-06-01
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

이 페이지는 Obsidian에서 먼저 여는 실행 화면이다. `wiki/index.md`는 전체 목차로 유지하고, 이 페이지는 오늘 처리할 작업, 후속 작업 queue, 근거 보강 후보를 좁혀 보여준다.

## 현재 상태

- 자료 요약: 40개
- 개념 페이지: 23개
- 도구 페이지: 17개
- 프로젝트 페이지: 2개
- 아이디어 페이지: 1개
- 기회 카드: 0개
- MVP / PoC 페이지: 1개
- 결정 기록: 1개
- 회의록 요약: 0개
- 재사용 질문 답변: 1개
- 최근 구조 점검: 2026-05-29, lint errors 0 / warnings 0

최근 비판적 리뷰: [[llm-wiki-review-2026-05-29]]

## 오늘 하나만 할 일

- 새 자료를 더 넣기 전에 `node scripts/weekly-review.ts`에서 나온 후속 작업 후보 중 1개를 고른다.
- 후보가 애매하면 [[아이디어 개선 루프]]를 실제 아이디어 1개에 적용해 실행 가치와 보류 조건을 확인한다.
- 새 자료가 있으면 바로 ingest하지 말고 `inbox/to-ingest.md` 또는 `node scripts/new-source.ts <raw-path-or-url>`로 triage한다.

## 후속 작업 queue

- [[아이디어 개선 루프]]를 새 아이디어 1개에 적용한다.
- [[Codex Harness]] 관련 공식 developer docs와 CLI repository를 별도 source로 확인한다.
- [[oh-my-codex]] GitHub repository와 npm package를 별도 source로 확인한다.
- [[SkillOpt]] GitHub repository와 arXiv 논문을 별도 source로 확인한다.
- [[React Effect Naming]]을 React 공식 문서와 원문 글로 보강한다.
- [[OSINT]] 관점에서 secret scanning, GitHub exposure, MCP endpoint 노출 점검 자료를 보강한다.
- [[Frontier Systems]] 관점에서 one-person frontier lab이 만들 산출물 기준을 정한다.

## MVP 승격 후보

- 없음. 새 아이디어는 먼저 `draft` 또는 `refining` 상태에서 문제정의와 방향성 적합성을 확인한다.

## 대기 중인 실행 후보

- [[AI 트렌드 레이더 웹사이트]]
- [[AI 트렌드 레이더 7일 PoC]]

## 근거 보강 후보

- [[LLM Wiki]]
- [[Personal Operating System]]
- [[Basalt Project]]
- [[RAG vs Agentic Workflow]]
- [[React Effect Naming]]
- [[oh-my-codex]]
- [[SkillOpt]]
- [[OSINT]]
- [[Frontier Systems]]

## 다음 행동

- 실행 후보는 한 번에 하나만 MVP / PoC 또는 maintenance task로 관리한다.
- weekly review가 "없음"으로 끝나면 log의 `후속 작업:`과 source summary의 `검증 필요 주장`을 먼저 본다.
- 좋은 질문이 생기면 일회성 답변으로 끝내지 말고 [[LLM Wiki 운영 흐름]] 기준으로 저장 가치가 있는지 판단한다.
- 여러 source가 쌓인 주제는 단순 요약 대신 비교, 질문 답변, decision record로 승격한다.

## 반복 루틴

- 새 자료 처리: 필요하면 `node scripts/new-source.ts <raw-path-or-url>`로 triage 초안을 먼저 보고, raw 보존, source summary 작성, 관련 concept/project/tool 갱신, index와 log 업데이트.
- 아이디어 처리: 원형 메모, 문제, 내가 끌린 이유, 방향성 적합성, 대상 사용자, 사용 맥락, 해결 가설, 보류 조건을 먼저 분리한다.
- 아이디어 개선: 특정 아이템보다 더 일반화한 문제와 더 작게 줄인 형태를 함께 기록한다.
- MVP / PoC 처리: 성공 기준과 1주 실험 계획을 먼저 쓰고, 다음 작업이 없으면 active 상태로 두지 않는다.
- 회의록 처리: 핵심 논의보다 결정과 액션 아이템을 우선 추출하고 관련 project, mvp, idea에 연결한다.
- 결정 처리: 선택지와 포기한 대안을 남겨 같은 판단을 반복하지 않게 한다.
- 질문 저장: 반복 참조 가치가 있는 답변만 `wiki/questions/`에 저장하고 관련 페이지와 저장 이유를 남긴다.
- 프로젝트 결정 기록: 장기 프로젝트에 영향을 주는 판단은 project page에 근거, 결정, 후속 작업을 분리해 남긴다.
- 여러 자료 종합: 같은 주제의 source가 2개 이상이면 공통 주장, 차이, 검증 필요 주장을 따로 정리한다.
- 주간 점검: `node scripts/lint-wiki.ts`로 frontmatter, 링크, index 누락, taxonomy 문제를 확인한다.
- 주간 리뷰: `node scripts/weekly-review.ts`로 실행 후보, log 후속 작업, 근거 보강 후보를 확인한다.
- 기회 리뷰: `node scripts/opportunity-review.ts`로 idea/MVP와 source tag 패턴을 보되 자동 점수는 검토 힌트로만 쓴다.

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
- 리뷰: [[llm-wiki-review-2026-05-29]]
- 최근 lint 기준: [[lint-2026-05-20]]

## 열린 질문

- 개인 AI workflow에서 안정적인 vocabulary가 되어야 할 개념은 무엇인가?
- 어떤 아이디어가 source-backed이고, 어떤 아이디어가 개인 가설인가?
- 프로젝트 결정 사항과 일반 개념 노트를 어떻게 분리해야 하는가?
- 대시보드에서 자동 집계해야 할 항목과 사람이 직접 관리해야 할 항목은 무엇인가?
- 어떤 아이디어를 단순 메모로 남기고, 어떤 아이디어를 1주 실험으로 승격해야 하는가?
- 회의 액션 아이템을 어느 수준까지 위키에 남겨야 관리 부담보다 재사용 가치가 커지는가?
- weekly review에서 자동 후보를 얼마나 줄여야 실제 작업 선택으로 이어지는가?
