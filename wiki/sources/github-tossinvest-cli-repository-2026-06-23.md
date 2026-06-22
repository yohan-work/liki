---
title: GitHub Tossinvest CLI Repository
source_id: github-tossinvest-cli-repository-2026-06-23
type: source
status: active
created: 2026-06-23
updated: 2026-06-23
tags:
  - github
  - tossinvest
  - cli
  - coding-agent
  - brokerage
related:
  - "[[tossinvest-cli]]"
  - "[[토스증권 Open API]]"
  - "[[Tossinvest OpenAPI Docs]]"
  - "[[토스증권 API 투자 운영 시스템]]"
  - "[[Human-in-the-loop]]"
original_path: raw/external/junghoonghae-tossinvest-cli-readme-2026-06-23.md
date_added: 2026-06-23
captured_at: 2026-06-23T08:07:06+09:00
accessed_at: 2026-06-23T08:07:06+09:00
canonical_url: https://github.com/JungHoonGhae/tossinvest-cli
content_hash: dc310985beab22c0ebe07e2dcee4648e19527e564415a279e30e55af0327b9d7
source_version: "JungHoonGhae/tossinvest-cli main branch README, repository metadata, license, security policy, VERSION 0.8.0 captured on 2026-06-23"
domain:
  - finance
  - software
  - ai
content_type: repo
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[tossinvest-cli]]"
  - "[[토스증권 Open API]]"
  - "[[Tossinvest OpenAPI Docs]]"
  - "[[토스증권 API 투자 운영 시스템]]"
  - "[[Human-in-the-loop]]"
sensitivity: private
evidence_level: source-backed
---

# GitHub Tossinvest CLI Repository

## 출처

GitHub repository `JungHoonGhae/tossinvest-cli`다. 토스증권 웹 내부 API를 이용해 계좌·시세·포트폴리오·주문 기능을 terminal과 AI agent에 노출하는 비공식 Go CLI다. 토스증권 공식 제품이나 공식 SDK가 아니다.

## 분류

- domain: finance, software, ai
- content_type: repo
- knowledge_role: source, tool, reference
- source_quality: practitioner
- use_for: concept, reference, decision

## 원본 위치와 provenance

- README: `raw/external/junghoonghae-tossinvest-cli-readme-2026-06-23.md`
- repository metadata: `raw/external/junghoonghae-tossinvest-cli-repository-metadata-2026-06-23.json`
- license: `raw/external/junghoonghae-tossinvest-cli-license-2026-06-23.txt`
- security policy: `raw/external/junghoonghae-tossinvest-cli-security-2026-06-23.md`
- version: `raw/external/junghoonghae-tossinvest-cli-version-2026-06-23.txt`
- canonical URL: https://github.com/JungHoonGhae/tossinvest-cli
- README SHA-256: `dc310985beab22c0ebe07e2dcee4648e19527e564415a279e30e55af0327b9d7`
- metadata SHA-256: `eb6508032e14c6b1dae5a2ee5184c0d7f441932e58e71aaf0b26192479f25fcf`
- license SHA-256: `5257a8df719f21242bdd529ee95c525abb9b179e7c636e1347ec26465cb5ea64`
- security policy SHA-256: `9b3ace61c6ed2bad1524e671c9b6281987ffea75639b461b7bd33c05e252f024`
- version SHA-256: `a66780da23103beaf12432b418508966b31a2a3a787f9468a5b6cdaa8667c1ef`

## 저장소 snapshot

- captured version: `0.8.0`
- default branch: `main`
- primary language: Go
- license: MIT
- created_at: 2026-03-11T15:01:03Z
- pushed_at: 2026-06-22T12:04:29Z
- capture 시점 stars/forks: 403 / 68
- archived: false

수치와 버전은 capture 시점 snapshot이며 현재 상태로 일반화하지 않는다.

## 원문 주장

- Claude Code, Codex, Cursor, OpenClaw, shell, HTTP client가 같은 `tossctl` 명령 체계로 계좌·시세·거래 기능을 사용할 수 있다고 설명한다.
- 공식 API 범위 외에 수급, 시장지수, AI signal, screener, watchlist, transaction ledger, SSE push, 소수점 주문 등을 지원한다고 주장한다.
- table, JSON, CSV, JSONL/SSE 출력을 제공해 사람과 agent가 같은 command surface를 사용할 수 있게 한다.
- 거래 기능은 기본 off이며 config의 action별 toggle과 `allow_live_order_actions`, runtime의 `--execute`, preview에서 받은 `--confirm` token을 모두 요구한다고 설명한다.
- Chrome과 모바일 Toss 앱을 이용한 로그인 session을 로컬 `session.json`에 보존한다.

## 위키에 반영한 판단

- [[tossinvest-cli]]를 [[토스증권 Open API]]와 분리된 비공식 CLI 도구로 추가한다.
- [[토스증권 API 투자 운영 시스템]]의 read-only PoC 후보가 될 수 있지만, 공식 API 사용이 불가능하거나 기능 범위가 부족할 때 검토할 고위험 대안으로 둔다.
- AI agent에 금융 계좌 도구를 연결할 때 read-only command와 mutation command를 분리하고, preview와 human confirmation을 요구하는 사례로 [[Human-in-the-loop]]와 연결한다.

## 내 프로젝트에 주는 시사점

- 기존 아이디어의 read-only 리포트는 `account`, `portfolio`, `quote`, `market`, `transactions` JSON 출력으로 빠르게 검증할 수 있다는 구현 후보가 생겼다.
- 그러나 공식 credential 기반 API와 달리 browser session cookie와 내부 API에 의존하므로 약관, session 보관, endpoint 변경, 계좌 제한 위험이 PoC 편의보다 우선한다.
- 설치 여부를 결정하기 전 source review, binary provenance, installer 동작, session file permission, outbound endpoint를 별도로 확인해야 한다.
- 실제 주문 기능은 도구가 자체 guardrail을 제공하더라도 현재 아이디어 범위에서 제외한다.

## 후속 라우팅

- concept 강화: 새 concept는 만들지 않는다.
- tool 생성: [[tossinvest-cli]]
- project/idea 강화: [[토스증권 API 투자 운영 시스템]]에 비공식 대안과 채택 조건을 추가한다.
- comparison 후보: 공식 [[토스증권 Open API]] vs `tossinvest-cli`는 실제 PoC 선택이 필요할 때 작성한다.
- question 후보: 없음.
- mvp 후보: 없음. 약관과 session security 확인 전 승격하지 않는다.
- 보류: 설치, 로그인, 실제 계좌 조회, 주문 preview와 live order는 수행하지 않았다.

## 검증 필요 주장

- 공식 Open API의 범위를 100% 커버한다는 주장은 repository 작성자 주장이다. command별 request·response 동등성과 최신 공식 spec 대조가 필요하다.
- 웹 앱의 의미 있는 endpoint가 약 430개이고 공식 API가 약 4%를 다룬다는 수치는 repository의 분류 기준과 자동 추출 결과에 의존한다.
- README는 공식 Open API를 "예정" 또는 단계적 rollout으로 표현하지만, [[Tossinvest OpenAPI Docs]]에는 이미 공개 문서와 canonical spec이 존재한다. 실제 계정별 availability와 출시 상태를 공식 안내로 다시 확인해야 한다.
- 내부 웹 API 사용이 약관 위반에 해당할 수 있다는 경고가 있다. 실제 허용 범위는 토스증권 최신 약관과 공식 답변 없이는 확정할 수 없다.
- config와 confirm token은 우발적 주문 방지 장치이지 계정 탈취, 악성 agent, compromised host, API 변경에 대한 완전한 안전 보장이 아니다.
- browser session, cookie, XSRF token을 로컬에 저장하므로 파일 권한 구현과 로그 redaction은 code review 또는 격리된 test account 없이는 검증되지 않았다.
- `curl | sh` 설치 방식은 snapshot을 고정하지 않으므로 그대로 실행하지 않았다.

## 관련 페이지

- [[tossinvest-cli]]
- [[토스증권 Open API]]
- [[Tossinvest OpenAPI Docs]]
- [[토스증권 API 투자 운영 시스템]]
- [[Human-in-the-loop]]

## 열린 질문

- 토스증권 약관은 개인용 read-only 내부 API 자동화를 허용하는가?
- session file은 어떤 OS별 permission과 encryption을 사용하며 로그·diagnostic 출력에서 계좌 정보가 완전히 redaction되는가?
- 공식 Open API만으로 7일 read-only 리포트의 최소 기능을 충족할 수 있는가?

