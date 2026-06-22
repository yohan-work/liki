---
title: tossinvest-cli
type: tool
status: seed
created: 2026-06-23
updated: 2026-06-23
tags:
  - tossinvest
  - cli
  - brokerage
  - coding-agent
  - unofficial-api
related:
  - "[[GitHub Tossinvest CLI Repository]]"
  - "[[토스증권 Open API]]"
  - "[[Tossinvest OpenAPI Docs]]"
  - "[[토스증권 API 투자 운영 시스템]]"
  - "[[Human-in-the-loop]]"
sensitivity: private
evidence_level: source-backed
---

# tossinvest-cli

## 한 줄 정의

`tossinvest-cli`는 토스증권 웹 내부 API를 이용해 계좌·시세·포트폴리오·주문 기능을 terminal과 AI agent에 제공하는 비공식 Go CLI다.

## 제공 기능

- 계좌, 포트폴리오, 시세, 호가, 캔들, 장 운영 시간, 환율 조회
- 수급, 시장지수, AI signal, screener, watchlist, transaction ledger 등 비공식 웹 기능
- table, JSON, CSV, JSONL/SSE 출력
- Claude Code, Codex, Cursor 등에서 shell command 또는 HTTP surface로 호출
- 주문 preview, action별 config, master kill switch, `--execute`, 주문별 confirm token

## 적합한 사용 사례

- 공식 API에 없는 토스증권 웹 기능을 terminal에서 탐색하는 개인 실험
- read-only 계좌·관심종목 리포트의 빠른 prototype
- 금융 action tool에서 read와 mutation을 분리하고 preview·confirmation gate를 설계하는 참고 사례

## 채택 경계

- 토스증권 공식 제품이나 공식 SDK가 아니며 내부 웹 API 변경에 따라 깨질 수 있다.
- repository 자체가 이용약관 위반, 계좌 제한, 손실 가능성을 경고한다.
- 로그인 browser session과 cookie/XSRF 정보를 로컬에 보존하므로 credential 저장 경계가 공식 OAuth client와 다르다.
- read-only command도 계좌와 거래내역을 다루므로 민감한 금융정보 접근이다.
- 거래 guardrail이 있어도 실제 주문을 AI agent에 위임할 근거는 되지 않는다.
- installer를 직접 실행하거나 계정에 연결하기 전에 source, release provenance, session permission, outbound endpoint를 검토해야 한다.

## 공식 API와의 관계

[[토스증권 Open API]]는 공개 문서와 canonical OpenAPI spec, OAuth credential을 사용하는 공식 경로다. `tossinvest-cli`는 웹 session과 내부 API를 재사용해 더 넓은 기능을 제공한다고 주장하는 비공식 경로다.

현재 [[토스증권 API 투자 운영 시스템]]에서는 공식 API를 기본 선택으로 유지한다. `tossinvest-cli`는 공식 API가 read-only PoC의 최소 기능을 충족하지 못하고, 약관·session security·변경 위험을 명시적으로 수용할 이유가 있을 때만 검토한다.

## 내 관점 / 임시 결론

도구의 가장 재사용 가치가 높은 부분은 넓은 기능 수가 아니라 JSON 출력, read/write command 분리, preview와 confirm token을 결합한 action gate다. 그러나 내부 API와 실제 금융 계좌를 연결하는 위험이 크므로 설치·로그인 없이 `status: seed`로 유지한다.

## 관련 자료

- [[GitHub Tossinvest CLI Repository]]
- [[Tossinvest OpenAPI Docs]]

## 열린 질문

- 최신 토스증권 약관과 공식 안내에서 내부 웹 API 자동화를 어떻게 다루는가?
- 공식 API와 동일 기능에서 response schema, rate limit, 안정성 차이는 무엇인가?
- read-only local sandbox와 별도 test account로 검증할 수 있는가?

