---
title: LLM Wiki
type: concept
status: active
created: 2026-05-20
updated: 2026-06-04
tags:
  - llm-wiki
  - knowledge-base
related:
  - "[[RAG]]"
  - "[[Obsidian]]"
  - "[[Codex]]"
  - "[[Personal Operating System]]"
  - "[[LLM Wiki Overview]]"
  - "[[에이전틱 엔진 최적화]]"
  - "[[GeekNews Weekly 202616 AEO Article]]"
sensitivity: private
evidence_level: unsourced
---

# LLM Wiki

## 한 줄 정의

LLM Wiki는 raw source, source summary, concept/project/decision page를 분리해 AI-assisted work의 장기 기억과 실행 판단을 관리하는 개인 지식 시스템이다.

## 핵심 목적

- 일회성 대화, 웹 자료, 프로젝트 판단을 장기 지식으로 보존한다.
- 출처가 말한 주장, Codex의 해석, 사용자의 결정을 섞지 않는다.
- 단순 수집이 아니라 질문 답변, 비교, 기회, MVP, 결정으로 재사용 가능한 형태를 만든다.
- Obsidian은 사람이 읽는 인터페이스, Codex는 유지보수와 재컴파일 엔진으로 둔다.

## 운영 원칙

- raw source는 수정하지 않는 원본으로 보존한다.
- `wiki/sources/`는 자료가 실제로 말한 내용을 보존하는 요약 계층이다.
- concept, tool, project page는 여러 source와 개인 해석을 종합하는 유지보수 계층이다.
- `evidence_level: source-backed`는 "그 출처에 근거해 정리했다"는 뜻이지, 모든 underlying claim이 검증되었다는 뜻은 아니다.
- source-backed 주장과 개인 가설은 섹션과 문장 수준에서 분리한다.
- 새 자료 ingest보다 기존 후속 작업을 실행 지식으로 압축하는 일을 우선할 수 있다.
- [[GeekNews Weekly 202616 AEO Article]]은 agent가 문서를 사람처럼 탐색하지 않고 필요한 page를 짧게 가져가 context로 처리할 수 있다고 설명한다. 따라서 이 위키의 page 구조도 사람용 Obsidian graph뿐 아니라 agent-readable Markdown surface로 관리할 필요가 있다.

## 활용 기준

- 같은 주제의 source가 2개 이상 쌓이면 단순 링크 추가가 아니라 공통 주장, 차이, 검증 필요 주장을 정리한다.
- 반복해서 물어볼 만한 답변은 `wiki/questions/`에 저장한다.
- 적용 조건이나 선택 기준이 중요한 주제는 `wiki/comparisons/`로 승격한다.
- 실행 가능성이 보이면 바로 MVP로 만들지 않고 먼저 idea, opportunity, decision 중 어디에 둘지 판단한다.
- 방향을 바꾸거나 보류하는 판단은 삭제하지 않고 decision record나 해당 page에 남긴다.

## 현재 약점

- source summary가 늘어나는 속도에 비해 비교, 질문 답변, 결정 기록으로 승격되는 비율이 낮다.
- log의 후속 작업이 실제 weekly queue로 충분히 끌려오지 않았다.
- 상위 project page가 아직 운영 기준을 충분히 지휘하지 못한다.

## 다음 운영 개선

- `node scripts/weekly-review.ts`로 후속 작업 queue를 확인한다.
- `node scripts/opportunity-review.ts`로 실행 기회 신호를 보되, 자동 점수는 확정 판단으로 보지 않는다.
- `[[LLM Wiki Overview]]`에서는 오늘 처리할 하나의 작업과 근거 보강 후보를 우선 본다.
- `[[Personal Operating System]]`을 LLM Wiki의 장기 활용 프로젝트로 관리한다.

## 열린 질문

- source-backed 주장과 검증된 사실을 더 명확히 구분하려면 어떤 schema가 필요한가?
- weekly review에서 후보를 얼마나 좁혀야 실제 행동으로 이어지는가?
- LLM Wiki에 남길 지식과 daily note에만 둘 메모의 경계는 무엇인가?
- agent-readable public surface와 private source-backed memory를 어떤 기준으로 분리할 것인가?
