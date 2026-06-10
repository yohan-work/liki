---
title: Yanlog Kiro User Interview 003
source_id: yanlog-kiro-user-interview-003-2026-06-08
type: source
status: ingested
created: 2026-06-10
updated: 2026-06-10
tags:
  - source
  - kiro
  - harness-engineering
  - skills
  - finops
related:
  - "[[Kiro]]"
  - "[[하네스 엔지니어링]]"
  - "[[Skills]]"
  - "[[Agentic Workflow]]"
  - "[[Personal Operating System]]"
original_path: raw/external/yanlog-kiro-user-interview-003-2026-06-10.html
date_added: 2026-06-10
captured_at: 2026-06-10
accessed_at: 2026-06-10
canonical_url: https://yanlog.yanbert.com/ko/blog/kiro-user-interview-003-20260608/
content_hash: sha256:d4773e479455dd9f13f2da64f988180d768d28fb538439bc04f74472dbf388ec
source_version: published_2026-06-08_captured_2026-06-10
domain:
  - software
  - business
  - personal-ops
content_type: article
knowledge_role:
  - source
  - tool
  - concept
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - inspiration
  - decision
related_pages:
  - "[[Kiro]]"
  - "[[하네스 엔지니어링]]"
  - "[[Skills]]"
  - "[[Agentic Workflow]]"
  - "[[Personal Operating System]]"
sensitivity: private
evidence_level: source-backed
---

# Yanlog Kiro User Interview 003

## 출처

- 제목: Kiro 사용자 인터뷰 #3 - 우아한형제들 신재현님
- 부제: 배달의민족 TPM이 Kiro로 운영 품질을 올린 방법, 스티어링과 스킬로 만든 엔지니어링 하네스
- 작성자: YAN SO
- 인터뷰이: 신재현, 우아한형제들 TPM
- 게시일: 2026-06-08
- URL: https://yanlog.yanbert.com/ko/blog/kiro-user-interview-003-20260608/

## 자료 유형

Kiro를 FinOps 조사, 운영 분석, AI 도입 지원에 사용한 실무자 인터뷰다. 조직 도입 과정과 구체적인 작업 구조를 보여주는 practitioner source지만, 제품 기능과 비용 효율에 관한 일부 평가는 인터뷰이의 경험에 기반하며 공식 문서나 독립 측정으로 검증되지 않았다.

## Domain / 분류

- domain: software, business, personal-ops
- content_type: article
- knowledge_role: source, tool, concept, reference
- source_quality: practitioner
- use_for: concept, reference, inspiration, decision

## 추가일

2026-06-10

## 원본 위치

`raw/external/yanlog-kiro-user-interview-003-2026-06-10.html`

## Provenance

- captured_at: 2026-06-10
- accessed_at: 2026-06-10
- canonical_url: https://yanlog.yanbert.com/ko/blog/kiro-user-interview-003-20260608/
- content_hash: sha256:d4773e479455dd9f13f2da64f988180d768d28fb538439bc04f74472dbf388ec
- source_version: published 2026-06-08, captured 2026-06-10

## 원문 요약

인터뷰이는 Kiro의 steering 문서에 회사 정책, 가이드, 참조 위치, 파일 명명과 커밋 규칙, FinOps 조사 절차를 Markdown으로 정리했다고 설명한다. 사용자가 "조사 생성"을 요청하면 날짜별 디렉터리, branch, README, 호출 번호별 결과물, `history.md` 기록을 일관된 구조로 만들도록 해 세션이 끊긴 뒤에도 작업을 이어갈 수 있게 했다.

이 접근은 개인별 교육에만 의존하지 않고 작업 환경 안에 기본 규칙과 절차를 넣어 결과의 하한선을 높이는 [[하네스 엔지니어링]] 사례로 제시된다. 반복 action과 숙련자의 업무 방식은 skill로 분리해 FinOps, 프로젝트 관리, 대외 커뮤니케이션처럼 코드 밖의 업무에도 재사용한다.

Spec-Driven Development는 큰 개발 작업뿐 아니라 자료 조사와 운영 도구 제작을 비동기로 진행하고 중간 확인하는 방식으로 사용한다. IDE는 개발, CLI는 조사·운영 분석과 멀티세션 작업에 병행하며, Kiro 도입은 조직 지식을 steering 문서에 먼저 담고 반복 action을 skill로 승격하는 순서를 권한다.

## 핵심 주장

- 조직 지식과 작업 규칙을 agent가 읽는 Markdown에 내장하면 교육 편차를 줄이고 작업 품질을 표준화할 수 있다.
- steering은 정책과 맥락을 제공하고, skill은 반복 action과 숙련자의 업무 방식을 재사용 가능한 절차로 만든다.
- 디렉터리, branch, README, history log 같은 artifact 규칙은 세션 중단 이후의 작업 연속성과 검토 가능성을 높인다.
- coding agent는 개발 외에도 FinOps 조사, 운영 분석, 프로젝트 관리, 커뮤니케이션 초안에 적용할 수 있다.
- 조직 도입은 도구 배포보다 공통 지식 정리와 반복 workflow의 명시화가 먼저다.
- AI 도구 운영에서는 무엇을 할지뿐 아니라 하지 않을 일을 선택하는 판단이 필요하다.

## 위키에 반영할 개념

- [[Kiro]]
- [[하네스 엔지니어링]]
- [[Skills]]
- [[Agentic Workflow]]
- [[Personal Operating System]]
- steering document
- skill
- 작업 연속성
- 조직 지식의 실행 환경 내재화

## 내 프로젝트에 주는 시사점

- 이 repository의 `AGENTS.md`, `.codex/skills/wiki/SKILL.md`, templates, scripts는 개인 교육 대신 Codex의 행동 환경에 규칙을 넣는 하네스 구성요소로 볼 수 있다.
- source ingest처럼 반복되는 작업은 규칙 문서만 두지 말고 생성 artifact, history, lint 결과까지 하나의 workflow로 닫아야 한다.
- skill 승격은 반복 빈도만이 아니라 숙련자의 판단을 재사용할 수 있는지, 실행 후 검증 artifact가 남는지를 기준으로 삼아야 한다.
- 장기 작업은 날짜나 요청 번호, 결과 파일, 실행 로그를 연결해 session context가 사라져도 재개할 수 있게 해야 한다.
- 여러 coding agent 도구를 비교할 때 모델 성능 외에 shared instruction, skill portability, IDE/CLI parity, session concurrency, audit artifact를 평가해야 한다.

## 후속 라우팅

- tool 추가: [[Kiro]]
- concept 추가: [[하네스 엔지니어링]]
- concept 강화: [[Skills]], [[Agentic Workflow]]
- project 강화: [[Personal Operating System]]
- comparison 후보: Kiro steering vs `AGENTS.md` vs `CLAUDE.md`
- question 후보: 조직 지식을 agent instruction으로 옮길 때 문서와 skill의 경계는 무엇인가?
- idea 후보: wiki ingest의 요청 번호별 artifact와 history 자동 기록
- mvp 후보: 없음
- 보류: 인터뷰이 people page, FinOps 별도 concept page

## 검증 필요 주장

- Kiro가 Claude, DeepSeek, Qwen 등 여러 vendor model을 선택할 수 있다는 현재 지원 범위는 Kiro 공식 문서로 확인해야 한다.
- 다른 coding agent보다 대용량 log 분석 실패와 token 소비가 적다는 평가는 동일 task와 비용 조건의 비교 측정이 필요하다.
- steering만으로 별도 교육 없이 신규 입사자가 첫날부터 팀 표준을 따른다는 효과는 한 조직 사례이며 장기 품질과 예외 처리 비용이 제시되지 않았다.
- IDE와 CLI의 기능 차이, preview 기능의 출시 상태, multi-session 지원은 2026-06-10 이후 변경될 수 있다.
- skill과 steering이 숙련자의 암묵지를 충분히 보존하는지, 잘못된 규칙을 조직 전체에 확산할 위험은 별도 검증이 필요하다.

## 관련 페이지

- [[Kiro]]
- [[하네스 엔지니어링]]
- [[Skills]]
- [[Agentic Workflow]]
- [[Personal Operating System]]

## 열린 질문

- steering document와 skill을 어떤 기준으로 나눠야 instruction 중복과 drift를 줄일 수 있는가?
- 조직 표준을 강제하면서도 task별 예외와 사용자 판단을 남기는 escape hatch는 어떻게 설계해야 하는가?
- 하네스 적용 전후의 품질, onboarding time, token cost, rework를 어떤 지표로 측정할 수 있는가?
- IDE와 CLI 사이의 기능 차이를 조직 교육과 shared workflow에서 어떻게 흡수할 것인가?

## 메모

이 자료는 Kiro 제품 성능의 확정 근거보다 조직 지식을 agent 실행 환경에 내장하는 practitioner 사례로 사용한다.
