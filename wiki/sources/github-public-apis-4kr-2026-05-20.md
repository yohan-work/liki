---
title: GitHub Public APIs 4Kr Repository
type: source
status: ingested
created: 2026-05-20
updated: 2026-05-20
tags:
  - source
  - public-api
  - korean-services
  - developer-resource
  - github
related:
  - "[[Public APIs 4Kr]]"
  - "[[Agentic Workflow]]"
  - "[[RAG]]"
sensitivity: private
evidence_level: source-backed
source_id: github-public-apis-4kr-2026-05-20
source_type: github_repository
original_path: raw/external/2026-05-20-github-public-apis-4kr.md
source_url: "https://github.com/yybmion/public-apis-4Kr"
date_added: 2026-05-20
source_quality: practitioner
use_for:
  - reference
  - inspiration
related_pages:
  - "[[Public APIs 4Kr]]"
  - "[[Agentic Workflow]]"
  - "[[RAG]]"
---

# GitHub Public APIs 4Kr Repository

## 출처

- 저장소: yybmion/public-apis-4Kr
- 플랫폼: GitHub
- 작성자 / 소유자: yybmion
- URL: https://github.com/yybmion/public-apis-4Kr
- GitHub 표시 라이선스: MIT

## 자료 유형

GitHub repository / developer resource catalog.

## 추가일

2026-05-20

## 원본 위치

raw/external/2026-05-20-github-public-apis-4kr.md

## 원문 요약

이 repository는 한국 서비스에서 사용할 수 있는 public API를 모아 둔 catalog다. README는 개발자를 위해 체계적으로 정리된 목록이라고 설명하며, 2026년 정보를 반영했다고 말한다. 별도의 global public APIs 문서도 연결한다.

자료는 정부/공공기관, 지도/위치, 지역 공공데이터, 금융/결제, 통신, 교통, 날씨/환경, 의료, 교육, 부동산, 문화/관광, 통계/데이터, AI/machine learning, ecommerce, 물류, media/content, social/communication, 에너지, 과학/연구, business, cloud service, blockchain, IoT, 법률, 보안, 공공안전, 항공, 농수산, 생활경제, 예산, Naver, Kakao 등 domain별로 API를 묶는다.

## 핵심 주장

- repository는 자신을 개발자를 위한 한국 public API catalog로 위치시킨다.
- README는 목록이 2026년 기준으로 업데이트되었고 주기적으로 유지보수될 것이라고 설명한다.
- entry는 domain별로 정리되어 있으며 대체로 API name, description, authentication type을 포함한다.
- 한국 API resource와 global public APIs 문서를 함께 제공한다.
- capture 시점에 GitHub는 MIT license를 표시한다.

## 위키에 반영할 개념

- [[Public APIs 4Kr]]
- Public API catalog
- Korean service APIs
- API discovery
- Developer resource index
- External tool integration

## 내 프로젝트에 주는 시사점

- agent tool integration이나 PoC를 만들 때 한국 서비스 API 후보를 빠르게 찾는 reference index로 사용할 수 있다.
- [[RAG]] 또는 [[Agentic Workflow]]에서 external tool 후보를 탐색하는 출발점이 될 수 있다.
- API 사용 전에는 각 upstream provider 문서에서 인증 방식, rate limit, 가격, 약관을 다시 확인해야 한다.

## 검증 필요 주장

- README의 "2026년 업데이트" 상태와 실제 entry freshness는 주기적으로 재확인해야 한다.
- 각 API의 authentication type, availability, terms는 이 catalog만으로 확정하면 안 된다.
- MIT license는 repository 자체에 대한 표시이며, 각 API provider의 이용 조건과는 별개다.

## 관련 페이지

- [[Public APIs 4Kr]]
- [[Agentic Workflow]]
- [[RAG]]

## 열린 질문

- 이 catalog의 어떤 API가 personal PoC나 agent tool integration에 충분히 안정적인가?
- 반복적으로 유용한 API category는 별도 wiki page로 분리해야 하는가?
- broken link나 authentication policy 변경을 얼마나 자주 재확인해야 하는가?
- 자동화에 영향을 주는 terms of service, rate limit, commercial restriction이 있는 API는 무엇인가?

## 메모

이 repository는 각 API의 authoritative documentation이 아니라 discovery index로 다룬다. 특정 API를 사용하기 전에는 upstream provider의 최신 문서, 인증 방식, rate limit, pricing, terms를 확인한다.
