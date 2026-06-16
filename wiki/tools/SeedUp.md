---
title: SeedUp
type: tool
status: seed
created: 2026-06-16
updated: 2026-06-16
tags:
  - startup-support
  - government-grants
  - ai-matching
  - mcp
  - app-in-toss
related:
  - "[[GeekNews SeedUp Show GN]]"
  - "[[SeedUp Opportunities Page]]"
  - "[[MCP Remote SSE]]"
sensitivity: private
evidence_level: source-backed
---

# SeedUp

## 무엇인가

SeedUp은 정부 창업 지원사업, 공모전, 보조금, 멘토링 등 창업 관련 공고를 모아 보여주고, AI 기반 추천과 자격 분석을 제공한다고 소개되는 서비스다. 공식 `opportunities` 페이지는 2026-06-16 snapshot 기준 9,102개의 공고를 표시하며, 맞춤 추천, 자격 분석, AI 채팅, 지원서 관리를 기능으로 내세운다.

[[GeekNews SeedUp Show GN]]에서 작성자는 여러 사이트와 HWP/PDF/JPG 포스터를 직접 뒤지고 자격요건을 분석하는 불편에서 서비스를 만들었다고 설명한다.

## 사용 경로

- 웹: `https://seedup.co.kr`
- 공고 목록: `https://seedup.co.kr/opportunities`
- 앱인토스 미니앱: GeekNews 글에서 별도 링크를 제시한다.
- PlayMCP: GeekNews 글은 PlayMCP에서 MCP 연결 후 사용할 수 있다고 설명한다.

## 핵심 기능

- 창업지원사업과 공모전 공고를 목록으로 탐색한다.
- 기관명, 마감일, 공고 유형, 지원 유형, 창업 단계, 지원금 규모 같은 구조화 정보를 보여준다.
- 사용자에게 맞는 지원사업 추천과 자격 분석을 제공한다고 소개한다.
- AI 채팅으로 지원사업 자격요건을 물어볼 수 있다고 설명된다.
- 앱인토스 안에서는 PDF 보고서 형태로 받을 수 있다고 작성자가 주장한다.

## 중요한 이유

- "흩어진 공고를 모으는 검색 도구"에서 "자격 판단과 신청 준비를 돕는 workflow 도구"로 확장하는 vertical AI product 사례다.
- 지원사업은 마감일, 지역, 창업 단계, 업종, 지원금, 신청 조건이 섞여 있어 LLM이 요약만 잘해도 사용자가 체감하는 탐색 비용이 줄어들 수 있다.
- MCP 연결은 특정 도메인 데이터와 적합성 판단 기능을 외부 agent client에 배포하는 경로가 될 수 있다.

## 한계와 리스크

- 공고 데이터의 출처, 갱신 주기, 중복 제거 기준, 만료 공고 처리 방식이 확인되어야 한다.
- 자격요건 분석은 지원 가능성 판단에 영향을 주므로, 원문 공고와 근거 문장을 함께 보여주지 않으면 오판 리스크가 크다.
- HWP/PDF/JPG 포스터에서 추출한 정보는 OCR과 parsing 오류 가능성이 있다.
- PlayMCP 사용량과 웹 가입자 수는 작성자 self-report이므로 traction 판단에는 보조 신호로만 쓴다.
- MCP로 노출되는 tool은 인증, rate limit, user data boundary, logging policy를 확인해야 한다.

## 개인 PoC에 주는 힌트

- 정보가 흩어져 있고 문서 형식이 제각각인 영역은 AI-native aggregation에 적합하다.
- 단순 리스트보다 "내 조건에 맞는가"라는 eligibility question을 중심으로 UX를 잡으면 반복 사용 동기가 생긴다.
- 웹, 미니앱, MCP처럼 여러 진입점을 제공할 때는 같은 데이터와 판단 근거를 공유하는 source of truth가 필요하다.

## 관련 자료

- [[GeekNews SeedUp Show GN]]
- [[SeedUp Opportunities Page]]

## 열린 질문

- SeedUp은 K-Startup, Bizinfo 등 원 출처의 공고를 어떤 주기로 갱신하고 중복 제거하는가?
- 자격 분석 답변은 원문 문서의 어느 조항을 근거로 표시하는가?
- PlayMCP 연결은 어떤 tool schema와 인증 경계를 제공하는가?
- 앱인토스 PDF 보고서는 어떤 사용자 입력과 공고 데이터를 포함하는가?
