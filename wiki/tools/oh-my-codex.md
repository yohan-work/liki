---
title: oh-my-codex
type: tool
status: seed
created: 2026-05-29
updated: 2026-05-29
tags:
  - codex
  - workflow
  - coding-agent
  - orchestration
related:
  - "[[Codex]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Skills]]"
  - "[[Digital Bourgeois oh-my-codex Article]]"
sensitivity: private
evidence_level: source-backed
---

# oh-my-codex

## 무엇인가

oh-my-codex(OMX)는 [[Digital Bourgeois oh-my-codex Article]]에서 OpenAI [[Codex]] CLI 위에 표준 workflow, role, skill, state management를 얹는 운영 레이어로 소개되는 도구다. 이 글 기준으로 OMX는 Codex를 대체하는 새 AI가 아니라, Codex 작업을 더 일관되게 시작하고 계획하고 실행하고 기록하게 만드는 wrapper에 가깝다.

## 사용 사례

- 모호한 요청을 바로 실행하지 않고 먼저 범위와 요구사항을 명확히 한다.
- 승인된 계획을 만든 뒤 구현을 진행한다.
- 단일 책임자 실행과 병렬 팀 실행을 구분한다.
- `.omx/` 아래에 계획, 로그, 메모리, mode state를 남겨 작업 재개와 추적을 돕는다.
- `omx doctor`, `codex login status`, `omx exec` 같은 점검 절차로 실제 Codex 실행 가능성을 확인한다.

## 강점

- [[Agentic Workflow]]를 clarify, plan, approve, execute, parallelize, resume 단계로 분리해 생각하게 만든다.
- [[Orchestration]] 관점에서 role, skill, workflow, runtime state를 Codex CLI 바깥의 운영 단위로 다룬다.
- 단발성 프롬프트보다 반복 가능한 workflow entrypoint를 선호하는 사용자에게 맞는 구조다.

## 한계

- 현재 이 페이지의 근거는 practitioner article 1개이므로 실제 기능 범위와 안정성을 확정하지 않는다.
- GitHub repository, npm package, release note, 현재 Codex CLI 설치 방식은 별도 source로 확인해야 한다.
- 병렬 실행은 작업 크기와 검증 기준이 분명할 때만 유용할 수 있으며, 작은 작업에는 관리 비용이 더 클 수 있다.

## 관련 워크플로

- LLM Wiki ingest에서는 "raw 보존 -> source summary -> 관련 페이지 갱신 -> index/overview/log -> lint" 흐름이 이미 있으므로, OMX 관점은 별도 도구 도입보다 workflow boundary 점검에 먼저 쓸 수 있다.
- 큰 코드 변경이나 migration에서는 `deep interview`에 해당하는 범위 명확화와 `plan approval`에 해당하는 설계 검토가 실행 전에 필요하다.

## 관련 개념

- [[Codex]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[Skills]]

## 관련 자료

- [[Digital Bourgeois oh-my-codex Article]]

## 열린 질문

- Codex 작업에 별도 workflow layer를 붙일 기준은 작업 규모, 위험도, 반복성 중 무엇인가?
- OMX의 `.omx/` 상태 저장은 이 위키의 `wiki/log.md`와 어떤 역할이 겹치고 어떤 역할이 다른가?
- 실제 실행 전 어떤 smoke test와 rollback 기준을 둬야 하는가?
