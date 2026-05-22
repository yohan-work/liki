---
title: WikiDocs SQLite Evolution Article
source_id: wikidocs-sqlite-evolution-2026-04-04
type: source
status: ingested
created: 2026-05-22
updated: 2026-05-22
tags:
  - source
  - wikidocs
  - sqlite
  - database
  - fts5
  - local-first
related:
  - "[[SQLite]]"
  - "[[LLM Wiki]]"
  - "[[Personal Operating System]]"
domain:
  - software
  - personal-ops
content_type: article
knowledge_role:
  - source
  - tool
  - concept
  - reference
source_quality: practitioner
use_for:
  - reference
  - decision
  - inspiration
related_pages:
  - "[[SQLite]]"
  - "[[LLM Wiki]]"
  - "[[Personal Operating System]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/2026-04-04-wikidocs-sqlite-evolution.md
source_url: "https://wikidocs.net/blog/@jaehong/10625/"
date_added: 2026-05-22
captured_at: 2026-05-22
accessed_at: 2026-05-22
canonical_url: "https://wikidocs.net/blog/@jaehong/10625/"
content_hash: eed1536b676e074fa43b6a8796fa5c29daf5c9445cbd8abc075b8a265c11ef90
source_version: "WikiDocs blog article published 2026-04-04 03:55, last edited 2026-04-10 18:41, captured on 2026-05-22"
---

# WikiDocs SQLite Evolution Article

## 출처

- 제목: 몰랐던 SQLite의 진화: 단일 파일 DB가 프로덕션급 엔진이 되기까지
- 저자 표시: @jaehong
- 게시처: WikiDocs 블로그 / 박재홍의 실리콘밸리
- URL: https://wikidocs.net/blog/@jaehong/10625/
- 게시일: 2026년 4월 4일 3:55 오전
- 마지막 편집일시: 2026년 4월 10일 6:41 오후
- 원본 링크: Modern SQLite: Features You Didn't Know It Had
- 토론 링크: Hacker News 토론

## 자료 유형

SQLite의 최근 기능과 실무 활용 가능성을 소개하는 한국어 기술 해설 글이다. JSON 처리, FTS5, window function, CTE, STRICT mode, generated columns, WAL, Turso/libSQL, observability, backup API 활용을 다룬다.

## Domain / 분류

- domain: software, personal-ops
- content_type: article
- knowledge_role: source, tool, concept, reference
- source_quality: practitioner
- use_for: reference, decision, inspiration

## 추가일

2026-05-22

## 원본 위치

raw/external/2026-04-04-wikidocs-sqlite-evolution.md

## Provenance

- captured_at: 2026-05-22
- accessed_at: 2026-05-22
- canonical_url: https://wikidocs.net/blog/@jaehong/10625/
- content_hash: eed1536b676e074fa43b6a8796fa5c29daf5c9445cbd8abc075b8a265c11ef90
- source_version: WikiDocs blog article published 2026-04-04 03:55, last edited 2026-04-10 18:41, captured on 2026-05-22

## 원문 요약

이 글은 SQLite를 개발용 임시 DB나 모바일 내장 DB로만 보는 인식이 더 이상 충분하지 않다고 주장한다. 최근 SQLite는 JSON 확장, FTS5, window function, CTE, STRICT table, generated column, WAL 같은 기능을 갖추면서 특정 규모와 워크로드에서는 PostgreSQL이나 MySQL 없이도 충분한 선택지가 될 수 있다고 설명한다.

JSON 확장은 TEXT 컬럼에 저장된 JSON을 `json_extract`나 `->`, `->>` 표기법으로 쿼리할 수 있게 한다. `json_valid()`와 CHECK 제약을 조합하면 JSON 유효성도 강제할 수 있다. FTS5는 별도 Elasticsearch/Algolia 없이 단일 SQLite 파일 안에서 전문 검색을 구성할 수 있게 하며, porter stemming, phrase search, prefix matching, NEAR, ranking을 제공한다.

분석 쿼리 측면에서는 window function과 CTE 덕분에 사용자별 누적 합계, 이동 평균, 순위 같은 리포트가 가능하다고 설명한다. STRICT mode는 SQLite의 유연한 타입 시스템에서 생길 수 있는 버그를 줄이는 안전벨트로 제시된다. Generated columns와 WAL은 데이터 무결성, 검색 성능, 읽기/쓰기 체감 성능을 높이는 작은 개선으로 다뤄진다.

마지막으로 글은 SQLite의 한계도 분리한다. 가장 큰 병목은 동시 쓰기이며, Turso/libSQL의 MVCC 기반 접근을 대안으로 언급한다. 관측성도 약점이라, 프로덕션에서 무슨 일이 일어나는지 보기 어렵다는 점을 지적한다. 결론은 SQLite가 모든 상황에서 PostgreSQL을 대체한다기보다, “우리 서비스 규모에 정말 PostgreSQL이 필요한가?”를 묻게 만들 정도로 기능적 간극을 좁혔다는 것이다.

## 핵심 주장

- SQLite는 JSON, FTS5, window function, CTE, STRICT mode, generated columns, WAL을 통해 프로덕션급 선택지가 될 수 있는 영역이 넓어졌다.
- JSON 확장은 스키마 유연성과 SQL 표현력을 함께 제공한다.
- FTS5는 데스크톱 앱, 로컬 퍼스트 도구, 소규모 서비스에서 별도 검색 서비스를 줄일 수 있는 선택지다.
- STRICT mode는 SQLite의 타입 유연성에서 생기는 버그를 줄이는 안전 장치다.
- WAL은 읽기와 쓰기의 차단을 줄여 로컬/데스크톱 앱 체감 성능을 높일 수 있다.
- SQLite의 핵심 한계는 다중 쓰기 경합과 관측성 부족이다.
- SQLite 채택 판단은 “PostgreSQL을 대체할 수 있는가”보다 “지금 규모와 복잡도에 별도 DB 서버가 필요한가”로 접근하는 것이 적절하다.

## 위키에 반영할 개념

- [[SQLite]]
- FTS5
- Local-first database
- Embedded database
- WAL
- STRICT table
- Generated columns
- Observability

## 내 프로젝트에 주는 시사점

- [[LLM Wiki]]의 검색 자동화는 현재 단순 Markdown scan이지만, 문서 수가 늘어나면 SQLite FTS5 기반 local index로 발전시킬 수 있다.
- `scripts/search-wiki.ts`를 FTS5/BM25 기반으로 확장하면 Obsidian용 Markdown을 유지하면서도 agent용 검색 품질과 속도를 높일 수 있다.
- [[Personal Operating System]]이나 개인 PoC에서 서버형 DB를 기본값으로 두기보다, SQLite 파일 하나로 시작하고 동시 쓰기/관측성 요구가 커질 때만 확장하는 판단 기준을 줄 수 있다.
- 다만 장기 실행 agent나 여러 프로세스가 동시에 쓰는 workflow에서는 WAL, backup, locking, observability를 별도 검토해야 한다.

## 검증 필요 주장

- HN 사례, 일일 수십만 사용자 처리, FTS5 성능, spellfix1 활용, Rust monitoring agent 사례는 원문과 HN 토론을 직접 확인해야 한다.
- SQLite 기능 지원 여부는 사용하는 SQLite 버전과 빌드 옵션에 따라 달라질 수 있다.
- Turso/libSQL의 MVCC 다중 쓰기 지원과 SQLite 본체의 향후 방향은 현재 문서와 release note로 확인해야 한다.
- FTS5가 검색 서비스를 대체할 수 있는지는 한국어 토큰화, ranking 품질, 문서 규모, 업데이트 빈도에 따라 달라진다.

## 관련 페이지

- [[SQLite]]
- [[LLM Wiki]]
- [[Personal Operating System]]

## 열린 질문

- LLM Wiki 검색을 언제 단순 scan에서 SQLite FTS5 index로 바꿀 만큼 문서 수가 늘었다고 판단할 것인가?
- 한국어 Markdown wiki에 FTS5를 쓸 때 tokenizer와 ranking은 어떻게 구성해야 하는가?
- Source summary, concept page, query answer를 SQLite에 색인한다면 어떤 frontmatter 필드를 column으로 분리해야 하는가?
- 개인 PoC에서 SQLite를 기본 저장소로 쓸 때 backup과 observability는 어떤 최소 기준을 둘 것인가?

## 메모

이 자료는 SQLite를 LLM Wiki 자동화와 개인 운영 시스템의 local-first storage 후보로 검토할 근거를 제공한다. 원문으로 연결된 Slicker 글과 HN 토론을 별도로 ingest하면 기술 근거를 더 강화할 수 있다.
