---
title: llm-wiki-review-2026-05-29
type: report
status: active
created: 2026-05-29
updated: 2026-05-29
tags:
  - llm-wiki
  - review
  - maintenance
related:
  - "[[LLM Wiki]]"
  - "[[LLM Wiki Overview]]"
  - "[[Personal Operating System]]"
  - "[[아이디어 개선 루프]]"
sensitivity: private
evidence_level: unsourced
---

# LLM Wiki 비판적 리뷰 2026-05-29

## 결론

현재 LLM Wiki는 구조적으로는 안정적이다. `node scripts/lint-wiki.ts` 기준 frontmatter, taxonomy, link, index, overview 수치에는 문제가 없고, raw source, source summary, concept/tool/project page, index, log를 분리하는 운영 원칙도 잘 유지되고 있다.

하지만 활용성 관점의 병목은 분명하다. 자료를 모으고 요약하는 능력은 빠르게 커졌지만, 후속 작업을 선택하고 실행 지식으로 압축하는 흐름은 아직 약하다. `node scripts/weekly-review.ts`와 `node scripts/opportunity-review.ts`는 실행 후보를 거의 만들지 못했고, 활성 idea/MVP보다 parked 항목과 seed page가 더 눈에 띈다.

## 잘 작동하는 부분

- raw source를 수정하지 않고 `wiki/sources/`에 source summary를 만드는 방식은 장기 지식 오염을 줄인다.
- index, overview, log를 분리한 덕분에 전체 목차, 실행 화면, 변경 이력을 각각 다른 목적으로 사용할 수 있다.
- source summary의 taxonomy와 `검증 필요 주장` 섹션은 출처 주장과 내 해석을 구분하는 데 유용하다.
- `lint-wiki`, `wiki-stats`, `new-source`, `weekly-review`, `opportunity-review` 스크립트가 모두 read-only 기본값을 유지해 안전하다.
- `[[아이디어 개선 루프]]`와 parked decision을 만든 것은 아이디어를 너무 빨리 MVP로 밀어붙이지 않게 하는 좋은 제동 장치다.

## 비판 지점

- `wiki/log.md`에는 후속 작업이 많지만, 실제 우선순위 queue로 승격되지 않는다.
- `[[LLM Wiki]]`, `[[Personal Operating System]]`, `[[Basalt Project]]` 같은 상위 방향 페이지가 아직 seed 성격이라 위키의 활용 기준을 충분히 지휘하지 못한다.
- source summary가 늘어나는 속도에 비해 comparison, question, opportunity, decision page로 재컴파일되는 비율이 낮다.
- `source-backed`가 "출처가 그렇게 주장했다"는 뜻인지 "검증된 사실"이라는 뜻인지 독자가 혼동할 수 있다.
- overview가 상태 설명은 잘 하지만, 오늘 실제로 할 1개 작업을 고르게 하는 압력은 약하다.
- opportunity review의 tag 집계는 `source`, `llm` 같은 일반 태그가 상위에 올라와 실행 기회를 판단하는 데 잡음이 된다.

## 우선 개선안

- weekly review가 log의 `후속 작업:`을 최대 5개까지 끌어올려 다음 검토 queue로 보여주게 한다.
- opportunity review는 일반 태그를 제외하고, parked가 아닌 idea/MVP만 실행 후보로 보게 한다.
- overview는 "현재 상태", "오늘 하나만 할 일", "후속 작업 queue", "근거 보강 후보" 중심으로 짧게 압축한다.
- `[[LLM Wiki]]`는 단순 개념 설명이 아니라 위키의 운영 원칙과 사용 기준을 담는 페이지로 보강한다.
- `[[Personal Operating System]]`은 placeholder가 아니라 LLM Wiki를 실제 작업 루틴으로 연결하는 project page로 보강한다.

## 다음 1주 운영 기준

- 새 자료 ingest보다 기존 follow-up 1개를 처리하는 것을 우선한다.
- source summary 2개 이상이 같은 주제를 가리키면 concept page만 덧붙이지 말고 comparison 또는 reusable question 후보로 본다.
- idea는 바로 MVP로 승격하지 않고 `[[아이디어 개선 루프]]` 기준으로 문제, 사용 맥락, 보류 조건을 먼저 채운다.
- weekly review에서 나온 후보 중 하나만 실제 작업으로 고른다.
- 실행하지 않는 후보는 삭제하지 않고 parked decision이나 해당 page의 판단 섹션에 남긴다.
