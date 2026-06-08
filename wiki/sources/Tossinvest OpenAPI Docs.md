---
title: Tossinvest OpenAPI Docs
source_id: tossinvest-openapi-docs-2026-06-08
type: source
status: active
created: 2026-06-08
updated: 2026-06-08
tags:
  - tossinvest
  - brokerage-api
  - finance-api
  - openapi
related:
  - "[[토스증권 Open API]]"
  - "[[Quant Trading]]"
  - "[[Public APIs 4Kr]]"
original_path: raw/external/tossinvest-openapi-2026-06-08.json
date_added: 2026-06-08
captured_at: 2026-06-08
accessed_at: 2026-06-08
canonical_url: https://openapi.tossinvest.com/openapi-docs/latest/openapi.json
content_hash: 58375a19e17bc1e794dfb5e46176e8268eb819d73a4045405a26e57e6afbcbc3
source_version: 1.0.3
domain:
  - finance
  - software
content_type: documentation
knowledge_role:
  - source
  - tool
  - reference
source_quality: official
use_for:
  - reference
  - concept
  - decision
related_pages:
  - "[[토스증권 Open API]]"
  - "[[Quant Trading]]"
  - "[[Public APIs 4Kr]]"
sensitivity: private
evidence_level: source-backed
---

# 토스증권 Open API 공식 문서

## 출처

토스증권 개발자 문서와 LLM용 문서 묶음이다. 브라우저용 문서는 JavaScript로 렌더링되고, `/llms.txt`는 LLM과 AI coding agent가 읽을 source of truth로 overview Markdown, OpenAPI Markdown, OpenAPI JSON을 안내한다.

## 자료 유형

## Domain / 분류

- domain: finance, software
- content_type: documentation
- knowledge_role: source, tool, reference
- source_quality: official
- use_for: reference, concept, decision

## 추가일

2026-06-08

## 원본 위치

- `raw/external/tossinvest-openapi-llms-2026-06-08.txt`
- `raw/external/tossinvest-openapi-overview-2026-06-08.md`
- `raw/external/tossinvest-openapi-reference-2026-06-08.md`
- `raw/external/tossinvest-openapi-2026-06-08.json`

## Provenance

- captured_at: 2026-06-08
- accessed_at: 2026-06-08
- canonical_url: https://openapi.tossinvest.com/openapi-docs/latest/openapi.json
- content_hash: 58375a19e17bc1e794dfb5e46176e8268eb819d73a4045405a26e57e6afbcbc3
- source_version: 1.0.3
- 보조 snapshot hash:
  - llms: f2c70cf269867ea0c59a8e9b54b57942d28f1ecef301cce4b927895bceec8952
  - overview: 8fa0f80f9facfd6569145e9c65335fb3e6d4930e66d94b5222f5ca7e277c3715
  - markdown reference: e1c99521837373c99b122a49ad0f0d3bf2ee892099c0622594d07c931c1cc791

## 원문 요약

토스증권 Open API는 국내(KRX) 및 미국 주식의 시세, 종목 정보, 환율, 시장 운영 정보, 계좌, 보유 주식, 주문 기능을 제공하는 REST API다. 모든 API는 OAuth 2.0 Client Credentials Grant로 발급한 access token을 사용한다. 계좌, 자산, 주문 관련 API는 `Authorization: Bearer {access_token}` 외에 `X-Tossinvest-Account` 헤더가 필요하다.

OpenAPI JSON 기준 endpoint는 20개다. 주요 그룹은 Auth, Market Data, Stock Info, Market Info, Account, Asset, Order, Order History, Order Info다. Market Data는 호가, 현재가, 최근 체결, 상/하한가, 캔들 차트를 제공한다. Stock Info는 종목 기본 정보와 매수 유의사항을 제공한다. Market Info는 KRW/USD 환율과 국내/미국 장 운영 캘린더를 제공한다.

계좌/자산 그룹은 계좌 목록과 보유 주식 조회를 제공한다. 주문 그룹은 주문 생성, 정정, 취소를 처리한다. 주문 이력은 주문 목록과 상세를 조회하고, 주문 정보 그룹은 매수 가능 금액, 판매 가능 수량, 매매 수수료를 조회한다.

## 핵심 주장

- 토스증권 Open API는 현재 REST API를 제공하며, 웹 소켓은 추후 지원 예정이라고 문서가 설명한다.
- 시세, 종목, 환율, 장 운영 시간은 계좌와 무관한 정보이므로 OAuth token만으로 호출 가능하다.
- 계좌, 보유 자산, 주문, 주문 가능 정보는 OAuth token과 `X-Tossinvest-Account` 헤더를 함께 요구한다.
- rate limit은 클라이언트와 API 그룹 단위로 적용되며, 현재 허용 한도는 `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, 429의 `Retry-After` 헤더로 확인한다.
- 주문 API는 실제 계좌에 영향을 주므로 `clientOrderId`, 주문 금액 확인, 정정/취소 대상 상태, 장 운영 시간, 매수 가능 금액과 매도 가능 수량 확인을 별도 guard로 다뤄야 한다.

## 위키에 반영할 개념

- [[토스증권 Open API]]를 한국 주식/미국 주식 brokerage API tool page로 추가한다.
- [[Quant Trading]]에 시장 데이터, 주문 실행, 계좌 상태 확인 API가 전략 실행 infrastructure에 해당한다는 관점을 연결한다.
- [[Public APIs 4Kr]]에는 한국 서비스 API discovery 이후 공식 문서 확인이 필요하다는 기존 메모의 예시로 연결한다.

## 내 프로젝트에 주는 시사점

개인 PoC에서 금융 데이터와 주문 실행을 자동화하려면 discovery source보다 공식 OpenAPI JSON을 기준으로 schema, rate limit, 인증, error envelope을 먼저 고정해야 한다. 특히 주문 실행은 단순 tool call이 아니라 계좌 상태, 가능 수량, 수수료, 장 운영 시간, idempotency, human confirmation을 포함한 harness로 감싸야 한다.

## 후속 라우팅

- concept 강화: [[Quant Trading]]
- tool 강화: [[토스증권 Open API]], [[Public APIs 4Kr]]
- comparison 후보: 국내 brokerage API 비교
- question 후보: 토스증권 Open API로 자동매매 PoC를 만들 때 필요한 guardrail
- idea 후보: 없음
- mvp 후보: 금융 데이터 수집 read-only PoC
- 보류: 실제 주문 자동화는 계좌 권한, 약관, 리스크 관리 기준을 확인하기 전까지 실행 후보로 올리지 않는다.

## 검증 필요 주장

- 실제 사용 신청 조건, 이용 약관, 개인/사업자 사용 가능 범위, 주문 자동화 허용 범위는 개발자 문서 외 약관 또는 콘솔 안내로 별도 확인해야 한다.
- rate limit 수치는 운영 상황에 따라 바뀔 수 있으므로 실행 시 응답 헤더를 기준으로 throttle을 조정해야 한다.
- 웹 소켓 지원 시점과 streaming data 제공 범위는 추후 공식 문서로 재확인해야 한다.

## 관련 페이지

- [[토스증권 Open API]]
- [[Quant Trading]]
- [[Public APIs 4Kr]]

## 열린 질문

- read-only market data PoC와 실제 주문 PoC 사이의 승인/검증 단계를 어디서 분리할 것인가?
- 주문 API를 agent tool로 연결할 때 human confirmation, dry-run, max notional, market hours guard를 어떤 순서로 강제할 것인가?

## 메모

이 source summary는 endpoint의 전체 schema를 복제하지 않는다. 구현 시에는 raw에 저장한 OpenAPI JSON 또는 최신 canonical URL을 기준으로 client와 validation schema를 생성한다.
