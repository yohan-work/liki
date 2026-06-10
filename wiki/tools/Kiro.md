---
title: Kiro
type: tool
status: seed
created: 2026-06-10
updated: 2026-06-10
tags:
  - kiro
  - coding-agent
  - steering
  - skills
related:
  - "[[Yanlog Kiro User Interview 003]]"
  - "[[하네스 엔지니어링]]"
  - "[[Skills]]"
  - "[[Agentic Workflow]]"
  - "[[Claude Code]]"
  - "[[Codex]]"
sensitivity: private
evidence_level: source-backed
---

# Kiro

## 무엇인가

Kiro는 IDE와 CLI surface에서 AI-assisted development와 운영 업무를 지원하는 coding agent 도구다. [[Yanlog Kiro User Interview 003]]은 조직 지식을 담는 steering 문서, 반복 절차를 담는 skill, Spec-Driven Development를 함께 사용한 우아한형제들 TPM의 사례를 소개한다.

현재 페이지는 practitioner interview 한 건에 기반한 seed다. 지원 model, IDE·CLI 기능, 가격과 preview 상태는 Kiro 공식 문서로 별도 확인해야 한다.

## 사용 사례

- 회사 정책, 가이드, 참조 위치, 명명 규칙을 steering 문서로 제공한다.
- FinOps 조사 생성, directory와 branch 초기화, 결과물 번호 부여, history 기록을 반복 workflow로 만든다.
- 숙련자의 조사, 프로젝트 관리, 커뮤니케이션 방식을 skill로 재사용한다.
- Spec-Driven Development로 조사나 운영 도구 제작을 실행하고 사람이 중간 결과를 확인한다.
- IDE는 개발, CLI는 조사·운영 분석과 여러 session이 필요한 작업에 병행한다.

## 강점

- [[Yanlog Kiro User Interview 003]] 사례에서는 steering과 skill이 조직 표준을 agent 실행 환경 안에 넣는 surface로 사용된다.
- code 외의 운영, 조사, 커뮤니케이션 workflow까지 같은 도구에서 다룰 수 있다.
- artifact와 history 규칙을 명시하면 session이 바뀌어도 작업을 재개하기 쉽다.

## 한계

- 인터뷰에서는 IDE와 CLI 사이의 기능 차이, 기능 누락, bug, preview 일정의 불명확성을 지적한다.
- 잘못되거나 오래된 steering 규칙은 모든 사용자에게 같은 오류를 확산할 수 있다.
- 도구 표준화는 knowledge sharing을 돕지만 provider lock-in, portability, 사용자별 task 적합성을 함께 검토해야 한다.
- 비용과 대용량 log 처리 효율 주장은 독립 benchmark가 아니라 사용자 경험이다.

## 관련 워크플로

- 조직 지식을 steering 문서에 먼저 정리한다.
- 반복되는 action과 숙련자의 판단을 skill 후보로 분리한다.
- 작업마다 입력, 생성 artifact, history, 검증 결과를 남긴다.
- IDE와 CLI의 capability 차이를 확인하고 task별 surface를 선택한다.
- 조직 배포 전 공식 문서, permission, data handling, 비용 정책을 확인한다.

## 관련 개념

- [[하네스 엔지니어링]]
- [[Skills]]
- [[Agentic Workflow]]
- [[Codex Harness]]

## 관련 자료

- [[Yanlog Kiro User Interview 003]]

## 열린 질문

- Kiro steering과 repository의 `AGENTS.md`, `CLAUDE.md`는 scope와 precedence가 어떻게 다른가?
- Kiro skill은 Agent Skills standard와 어느 수준까지 호환되는가?
- IDE와 CLI가 공유하는 configuration, session, permission, artifact 범위는 무엇인가?
- enterprise 환경에서 model routing, data retention, audit log, 비용 통제는 어떻게 제공되는가?
