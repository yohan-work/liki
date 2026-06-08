---
title: 토스증권 Open API
type: tool
status: active
created: 2026-06-08
updated: 2026-06-08
tags:
  - brokerage-api
  - finance-api
  - korean-stock
  - us-stock
  - openapi
related:
  - "[[Quant Trading]]"
  - "[[Public APIs 4Kr]]"
  - "[[Tossinvest OpenAPI Docs]]"
sensitivity: private
evidence_level: source-backed
---

# 토스증권 Open API

## 무엇인가

토스증권 Open API는 국내(KRX) 및 미국 주식의 시세, 종목 정보, 환율, 장 운영 정보, 계좌, 보유 주식, 주문 기능을 제공하는 REST API다. 공식 문서는 LLM용 `/llms.txt`, overview Markdown, OpenAPI Markdown, canonical OpenAPI JSON을 제공한다.

## 사용 사례

- 국내/미국 주식 종목 마스터와 현재가, 호가, 체결, 캔들 데이터를 조회한다.
- KRW/USD 환율과 국내/미국 장 운영 캘린더를 확인한다.
- 본인 계좌 목록, 보유 주식, 매수 가능 금액, 판매 가능 수량, 수수료를 조회한다.
- 지정가/시장가 주문 생성, 미체결 주문 정정, 주문 취소, 주문 상태 조회를 구현한다.
- [[Quant Trading]] PoC에서 data retrieval, portfolio state check, order execution layer를 분리한다.

## 강점

- OpenAPI JSON이 canonical source로 제공되어 typed client, request validation, 테스트 fixture 생성에 적합하다.
- Market Data, Stock Info, Market Info는 계좌와 무관한 객관 데이터로 분리되어 read-only PoC부터 시작하기 좋다.
- 계좌/자산/주문 API는 `X-Tossinvest-Account` 헤더를 요구하므로 계좌 범위를 명시적으로 분리할 수 있다.
- API 그룹별 rate limit과 429 대응 헤더가 문서화되어 client-side throttle 설계에 활용할 수 있다.

## 한계

- 문서 기준 현재 연동 방식은 REST API이며, Market Data 설명에는 웹 소켓이 추후 지원 예정이라고 되어 있다.
- rate limit 수치는 운영 상황에 따라 바뀔 수 있으므로 고정값으로만 구현하면 안 된다.
- 주문 API는 실제 계좌와 자산에 영향을 주므로 agent tool로 바로 노출하면 안 된다.
- 실제 사용 가능 범위, 자동주문 허용 조건, 약관, 권한 신청 조건은 별도 확인이 필요하다.

## 관련 워크플로

- read-only data PoC: `stocks`, `prices`, `candles`, `exchange-rate`, market calendar를 먼저 연결한다.
- account-aware dashboard: `accounts`, `holdings`, `buying-power`, `sellable-quantity`, `commissions`를 계좌 헤더와 함께 연결한다.
- 주문 실행 harness: 주문 생성 전 market calendar, buying power, sellable quantity, commission, max notional, human confirmation, idempotency key를 순서대로 확인한다.
- API client 생성: raw OpenAPI JSON을 기준으로 schema와 typed client를 만들고, 최신 문서와 snapshot hash를 함께 기록한다.

## 관련 개념

- [[Quant Trading]]
- [[Public APIs 4Kr]]

## 관련 소스

- [[Tossinvest OpenAPI Docs]]

## 메모

이 위키에서는 토스증권 Open API를 먼저 금융 데이터와 계좌 상태 조회를 위한 도구로 다룬다. 실제 주문 자동화는 별도 decision record와 guardrail 설계 없이 실행 후보로 올리지 않는다.
