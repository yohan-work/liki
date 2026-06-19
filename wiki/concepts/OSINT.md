---
title: OSINT
type: concept
status: active
created: 2026-05-29
updated: 2026-06-19
tags:
  - osint
  - security
  - threat-intelligence
  - attack-surface
related:
  - "[[Agentic Workflow]]"
  - "[[MCP Remote SSE]]"
  - "[[Personal Operating System]]"
  - "[[OfficeKeeper OSINT Dictionary Article]]"
  - "[[Frontier Systems]]"
  - "[[Stanford CS153 Frontier Systems Course Page]]"
  - "[[에이전틱 엔진 최적화]]"
  - "[[GeekNews Weekly 202616 AEO Article]]"
  - "[[Caddy]]"
  - "[[Cowboysj Caddy Domainless HTTPS Article]]"
sensitivity: private
evidence_level: source-backed
---

# OSINT

## 정의

OSINT(Open Source Intelligence)는 공개적으로 접근 가능한 정보를 수집하고 분석해 위협, 대상, 조직, 시스템에 대한 인사이트를 도출하는 정보 분석 활동이다. [[OfficeKeeper OSINT Dictionary Article]]은 OSINT를 보안 위협 탐지와 의사결정에 활용되는 공개정보 분석 기법으로 설명한다.

## 중요한 이유

공격자는 공개된 이메일, 도메인, 기술 스택, 코드 저장소, SNS 게시물, 문서 메타데이터 같은 단서로 공격 경로를 설계할 수 있다. 방어자는 같은 공개정보를 먼저 점검해 외부 노출 자산과 위험 요소를 줄일 수 있다.

## 핵심 아이디어

- OSINT의 source는 웹사이트, SNS, 뉴스, 정부 공개 자료, 커뮤니티, 코드 저장소, Pastebin, 다크웹 게시물, 공개 문서 등을 포함할 수 있다.
- 보안 목적의 주요 수집 대상은 WHOIS, DNS, IP, 포트, SSL 인증서, 서브도메인, 임직원 공개 활동, GitHub/GitLab/Pastebin의 secret 노출, 유출 데이터 언급, PDF 메타데이터다.
- 활용 사례는 threat intelligence, brand protection, incident response, compliance and risk로 나뉜다.
- OSINT는 ASM(Attack Surface Management)과 DRP(Digital Risk Protection)의 기반 데이터로 쓰일 수 있다.
- 공개정보라도 정확성, 법적 제약, 분석 난이도, 데이터 과잉 문제가 있다.
- [[GeekNews Weekly 202616 AEO Article]]은 robots.txt, llms.txt, agent-permissions.json, MCP Server Card, API catalog 같은 agent discovery surface를 언급한다. 이런 표면은 agent에게 도움이 되는 공개 메타데이터인 동시에 외부 노출면 점검 대상이 될 수 있다.
- [[Cowboysj Caddy Domainless HTTPS Article]]은 public IP, `nip.io` hostname, 443 port, Caddy admin endpoint, TLS certificate, CORS origin 같은 작은 PoC 배포 요소도 외부 노출면으로 점검해야 함을 보여준다.

## 이 위키에서의 사용

이 위키에서는 OSINT를 공격 기법보다 공개 노출면 점검 관점으로 다룬다. 개인 AI workflow, GitHub repository, raw snapshot, blog, agent log, MCP endpoint, API key, provider key, screenshot에 의도치 않은 공개 정보가 섞이지 않는지 확인하는 vocabulary로 쓴다.

## 관련 워크플로

- [[Agentic Workflow]]: agent가 웹 정보를 수집할 때 합법성, 출처 품질, 저장 필요성, human review boundary를 확인한다.
- [[MCP Remote SSE]]: remote endpoint, tool result, credential, network path가 외부에 노출될 수 있는지 점검한다.
- [[Personal Operating System]]: 공개 프로필, 문서, repository, calendar, SaaS integration이 개인 운영체계의 외부 노출면이 될 수 있다.
- [[Frontier Systems]]: 공개 강의 페이지, speaker lineup, company affiliation, course project는 frontier technology 흐름을 읽는 합법적 공개정보 source가 될 수 있다.

## 관련 자료

- [[OfficeKeeper OSINT Dictionary Article]]
- [[Stanford CS153 Frontier Systems Course Page]]
- [[GeekNews Weekly 202616 AEO Article]]
- [[Cowboysj Caddy Domainless HTTPS Article]]

## 열린 질문

- 개인 AI workflow에서 주기적으로 점검해야 할 공개 노출면은 무엇인가?
- 공개정보 수집 결과를 위키에 저장할 때 어느 수준부터 `sensitivity: private` 외 추가 제한이 필요한가?
- OSINT 점검을 lint나 checklist로 자동화할 수 있는가?
- 개인 서버 배포 후 public IP, open port, TLS certificate, admin endpoint, CORS origin을 어떤 최소 체크리스트로 확인할 것인가?
