---
title: SQLite
type: tool
status: seed
created: 2026-05-22
updated: 2026-06-10
tags:
  - sqlite
  - database
  - fts5
  - local-first
  - embedded-database
related:
  - "[[WikiDocs SQLite Evolution Article]]"
  - "[[LLM Wiki]]"
  - "[[Personal Operating System]]"
  - "[[TurboVec]]"
  - "[[GitHub TurboVec Repository]]"
sensitivity: private
evidence_level: source-backed
---

# SQLite

## 무엇인가

SQLite는 서버 프로세스 없이 단일 파일로 동작하는 embedded relational database다. [[WikiDocs SQLite Evolution Article]]은 SQLite가 JSON 처리, FTS5, window function, CTE, STRICT mode, generated columns, WAL 같은 기능을 갖추면서 특정 워크로드에서는 프로덕션급 선택지가 될 수 있다고 설명한다.

## 사용 사례

- 로컬 퍼스트 앱이나 데스크톱 앱의 내장 데이터베이스.
- 개인 PoC, small service, automation tool의 기본 저장소.
- Markdown 기반 [[LLM Wiki]]를 검색하기 위한 local index 후보.
- 별도 Elasticsearch/Algolia를 붙이기 전의 FTS5 기반 전문 검색.
- 임시 분석, 리포트, 프로토타이핑용 단일 파일 데이터베이스.

## 강점

- 단일 파일, 제로 설정, 낮은 운영 복잡도가 강점이다.
- JSON 확장으로 유연한 payload를 SQL로 조회할 수 있다.
- FTS5로 전문 검색을 별도 검색 서비스 없이 구성할 수 있다.
- STRICT table은 타입 관련 버그를 줄이는 안전 장치가 될 수 있다.
- WAL은 읽기/쓰기 차단을 줄여 로컬 앱과 소규모 서비스의 체감 성능을 높일 수 있다.
- Generated columns와 index를 조합하면 파생 데이터와 검색 성능을 함께 관리할 수 있다.

## 한계

- 다중 쓰기 경합이 큰 workload에는 맞지 않을 수 있다.
- 프로덕션 관측성이 PostgreSQL 같은 서버형 DB보다 약하다.
- FTS5를 검색 서비스처럼 쓰려면 tokenizer, stemming, ranking, 한국어 처리 품질을 별도로 검토해야 한다.
- 기능 지원은 SQLite 버전과 빌드 옵션에 따라 달라질 수 있다.

## 관련 워크플로

- LLM Wiki search index 고도화.
- Personal Operating System의 local-first storage 후보 검토.
- 작은 자동화 도구의 state store.
- Source summary와 query answer를 구조화해 agent가 빠르게 검색하는 색인 생성.
- Metadata, ACL, tag, date, BM25 조건으로 candidate id를 만든 뒤 [[TurboVec]] allowlist search로 dense rerank하는 hybrid retrieval.

## 관련 개념

- [[LLM Wiki]]
- [[Personal Operating System]]
- [[TurboVec]]

## 관련 자료

- [[WikiDocs SQLite Evolution Article]]
- [[GitHub TurboVec Repository]]

## 메모

LLM Wiki가 커지면 `scripts/search-wiki.ts`를 SQLite FTS5 기반 indexer로 확장할 수 있다. 단, 한국어 검색 품질과 Obsidian Markdown source of truth 유지 방식을 먼저 검증해야 한다.
