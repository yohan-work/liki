---
title: Framein
type: tool
status: seed
created: 2026-06-30
updated: 2026-06-30
tags:
  - framein
  - coding-agent
  - work-state
  - agent-workflow
related:
  - "[[GeekNews Framein Show GN]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[하네스 엔지니어링]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
sensitivity: private
evidence_level: source-backed
---

# Framein

## 무엇인가

Framein은 여러 terminal coding agent가 같은 작업을 이어받을 때 목표, 인수 조건, 결정 기록, 검증 결과가 새지 않도록 repository 안에 공유 작업 상태를 남기는 로컬 work-state layer로 소개되는 도구다.

[[GeekNews Framein Show GN]] 기준으로 Framein은 새 IDE, cockpit, proxy, 별도 harness를 자처하지 않는다. 이미 쓰는 Claude Code, Codex, Gemini CLI 아래에 작업 계약, ADR, ledger, verify/risk/ship gate를 깔아 같은 사실을 읽고 쓰게 하는 접근이다.

## 사용 사례

- Claude Code, Codex, Gemini CLI를 번갈아 쓰는 coding workflow에서 목표와 보호 영역을 반복 설명하지 않게 한다.
- 한 모델이 구현 lead를 맡고 다른 모델이 제한된 challenge나 review를 맡는 구조를 남긴다.
- 다음 lead agent가 읽을 capsule artifact를 준비한다.
- "완료"를 모델의 선언이 아니라 build, test, risk gate 통과로 닫는다.

## 강점

- handoff summary보다 repository-local artifact를 공유 상태로 두는 점이 [[하네스 엔지니어링]] 관점과 맞다.
- credential relay, subscription pooling, terminal I/O scraping을 하지 않는다고 주장해 proxy 계열과 다른 security boundary를 지향한다.
- Codex skill, Claude/Gemini slash command처럼 agent별 surface를 제공하되 같은 로컬 엔진과 상태를 읽는 구조로 설명된다.
- ADR을 append-only로 다루는 설계는 여러 agent가 같은 결정을 신뢰할 때 필요한 audit trail을 강조한다.

## 한계

- 현재 근거는 Show GN 작성자의 소개 글 하나에 의존한다.
- pre-release v0.0.6이라고 설명되며, Windows code signing, signed/notarized binary 배포, clean-machine install 검증, multi-developer workflow는 아직 다듬는 중이라고 한다.
- 실제 artifact schema, conflict handling, uninstall/rollback, repository 오염 가능성, 기존 instruction과의 precedence는 GitHub repository와 공식 문서로 확인해야 한다.
- 여러 agent가 같은 artifact를 읽는다고 해서 판단 충돌, 잘못된 ADR, stale verification 문제가 자동으로 해결되지는 않는다.

## 관련 워크플로

- `start`: 목표, 인수 조건, 보호 영역, non-goal을 작업 계약으로 고정한다.
- `challenge`: 다른 모델에게 좁은 범위의 반론을 요청하고 lead가 한 번 응답한 뒤 사람이 결정한다.
- `capsule`: 다음 lead가 읽을 계약, diff, 검증, ADR, ledger를 준비한다.
- `ship`: build, test, risk gate로 작업을 닫는다.

## 관련 개념

- [[Agentic Workflow]]: 여러 agent가 계획, 실행, 검증을 이어갈 때 필요한 state continuity 문제와 연결된다.
- [[Orchestration]]: task 분배보다 작업 상태, 결정권자, gate를 어떻게 조율할지에 가깝다.
- [[하네스 엔지니어링]]: 새 runtime을 만들지 않고 기존 CLI 아래에 contract, ledger, gate를 두는 하네스 사례로 볼 수 있다.
- [[Codex]], [[Claude Code]]: Framein이 연결한다고 설명하는 주요 coding agent surface다.

## 메모

설치하거나 개인 workflow에 적용하기 전에는 [[GeekNews Framein Show GN]]의 검증 필요 주장에 따라 GitHub repository, package metadata, official docs, clean-machine install 결과를 별도 source로 확인한다. 지금 단계에서는 "여러 coding agent 사이에서 작업 상태를 repo artifact로 공유한다"는 제품 가설로 보존한다.
