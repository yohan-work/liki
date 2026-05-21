---
title: LLM Wiki Log
type: log
status: active
created: 2026-05-20
updated: 2026-05-21
tags:
  - llm-wiki
  - log
related:
  - "[[LLM Wiki Index]]"
sensitivity: private
evidence_level: unsourced
---

# LLM Wiki Log

## 2026-05-20

- LLM Wiki 프로젝트 구조를 초기화했다.
- 핵심 개념, 프로젝트, 도구에 대한 seed 페이지를 추가했다.
- source summary, concept page, project page, tool page, query answer, lint report 템플릿을 추가했다.
- 초기 seed content를 unsourced 상태로 표시했다.
- 서울대학교 자연과학대학 뉴스룸 글 "숫자가 사고파는 시장: 퀀트 트레이딩의 구조와 작동 원리"를 [[SNU Newsroom Quant Trading Article]]로 ingest하고 [[Quant Trading]]을 추가했다.
- Brunch 글 "Claude Blue - 실리콘밸리 전체가 우울하다"를 [[Brunch Claude Blue Article]]로 ingest하고 [[Claude Blue]]를 추가했다.
- 기본 언어 정책을 한국어 중심으로 강화하고, 기존 영어 wiki 정리를 한국어로 변환했다.
- GitHub 저장소 yybmion/public-apis-4Kr를 [[GitHub Public APIs 4Kr Repository]]로 ingest하고 [[Public APIs 4Kr]] 도구 페이지를 추가했다.
- Naver Blog 글 "[금융공학] 퀀트투자 분석(1) - 퀀트와 전체 프로세스"를 [[Naver Blog Quant Investment Process Article]]로 ingest하고 [[Quant Trading]]을 갱신했다.
- 1차 고도화로 source summary, concept page, query answer, lint report 템플릿을 강화하고, 첫 comparison page [[RAG vs Agentic Workflow]]를 추가했다.
- 2차 고도화로 comparison page 템플릿을 추가하고, 첫 재사용 query answer [[LLM Wiki 운영 흐름]]을 저장했다.
- 3차 고도화로 첫 lint baseline [[lint-2026-05-20]]을 생성하고, lint 운영 규칙을 보강했다.
- 4차 고도화로 기존 source summary 4개를 새 템플릿 기준에 맞춰 정규화하고, `source_quality`와 `use_for`를 추가했다.
- 5차 고도화로 다양한 주제의 자료를 다루기 위한 범용 ingest taxonomy와 routing 규칙을 추가했다.
- 6차 고도화로 기존 source summary 전체에 `domain`, `content_type`, `knowledge_role` taxonomy를 역적용했다.
- 7차 고도화로 `scripts/lint-wiki.ts`를 read-only lint 스크립트로 구현했다.
- 8차 고도화로 `scripts/build-index.ts`를 read-only index draft generator로 구현했다.
- AI Hero 글 "11 Tips For AI Coding With Ralph Wiggum"을 [[AI Hero Ralph Wiggum Article]]로 ingest하고 [[Ralph Wiggum Loop]]를 추가했다.
- Tistory 글 "MCP SSE Remote사용하기"를 [[Tistory MCP Remote SSE Article]]로 ingest하고 [[MCP Remote SSE]]를 추가했다.
- OpenAI Developer Community 포털을 [[OpenAI Developer Community Source]]로 ingest하고 [[OpenAI Developer Community]] 도구 페이지를 추가했다.
- hi-hoi 글 "iOS 사파리에서 React onBlur가 동작하지 않는 이유"를 [[hi-hoi iOS WebKit React onBlur Issue Article]]로 ingest하고 [[iOS WebKit React onBlur Issue]]를 추가했다.
- Hugging Face 모델 카드 NousResearch/Hermes-4.3-36B를 [[Hugging Face Hermes 4.3 36B Model Card]]로 ingest하고 [[Hermes 4.3 36B]] 도구 페이지를 추가했다.
- 9차 고도화로 최근 ingest source 2개를 정규화하고 lint frontmatter/link error를 정리했다.
- 10차 고도화로 generated index draft를 lint index 누락 검사에서 제외하고 report 충돌 경고 문구를 정리했다.
- 11차 고도화로 ingest 전 영향 범위를 점검하는 triage 템플릿과 운영 규칙을 추가했다.
- 12차 고도화로 source provenance 필드를 source summary 템플릿과 운영 규칙에 추가했다.
- 13차 고도화로 향후 log entry에 사용할 structured log format 규칙을 추가했다.
- 14차 고도화로 `scripts/search-wiki.ts` read-only 검색 도구를 추가했다.
- 15차 고도화로 `inbox/clippings/`, `inbox/ideas/`, `inbox/to-ingest.md` 운영 구조를 추가했다.

## [2026-05-21] maintenance | 구조 lint 문제 정리

- Hermes 4.3 36B source summary의 필수 frontmatter와 taxonomy 값을 정규화했다.
- 아직 별도 페이지로 만들지 않은 후보 개념 링크와 raw path wiki link를 정리했다.
- 변경 영역: [[Hugging Face Hermes 4.3 36B Model Card]], [[Hermes 4.3 36B]], [[LLM Wiki Overview]], [[SNU Newsroom Quant Trading Article]].
- 후속 작업: 필요하면 Backtesting, Overfitting, Automated execution을 별도 concept page 후보로 검토한다.

## [2026-05-21] maintenance | 운영 대시보드 고도화

- [[LLM Wiki Overview]]를 Obsidian 첫 화면으로 쓰는 운영 대시보드로 개편했다.
- 다음 행동, 반복 루틴, 주요 진입점을 분리해 URL ingest 이후의 활용 흐름을 더 명확히 했다.
- README에 `wiki/overview.md`와 `wiki/index.md`의 역할 차이를 짧게 추가했다.
- 후속 작업: 대시보드 수치 자동 갱신이 필요할지 운영하면서 판단한다.
