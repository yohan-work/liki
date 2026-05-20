---
title: Ralph Wiggum Loop
type: concept
status: active
created: 2026-05-20
updated: 2026-05-20
tags:
  - ai-coding
  - autonomous-agent
  - agentic-workflow
  - orchestration
related:
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Human-in-the-loop]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
sensitivity: private
evidence_level: source-backed
---

# Ralph Wiggum Loop

## 정의

Ralph Wiggum Loop는 AI coding CLI를 반복 실행해 plan, progress, feedback loop를 기반으로 agent가 다음 작업을 선택하고 구현, 검증, 커밋을 반복하게 하는 autonomous coding workflow 패턴이다.

## 중요한 이유

이 패턴은 [[Agentic Workflow]]가 단발성 prompt에서 장시간 실행되는 작업 루프로 이동할 때 필요한 구조를 보여준다. 핵심은 더 많은 자동화가 아니라 scope, state, feedback, safety boundary를 명시적으로 설계하는 것이다.

## 핵심 아이디어

- Agent에게 최종 상태와 acceptance criteria를 주고, 매 iteration마다 다음 작업을 선택하게 한다.
- `progress.txt` 같은 짧은 진행 파일은 context window 사이의 기억 손실을 줄인다.
- 각 iteration은 작은 logical change와 commit boundary를 갖는 편이 품질 관리에 유리하다.
- Type check, test, lint, pre-commit hook 같은 feedback loop는 autonomous work의 guardrail이다.
- Risky architecture와 integration work는 HITL로 먼저 다루고, 낮은 위험의 반복 작업은 AFK loop로 넘기는 방식이 적합하다.
- AFK loop에는 iteration cap과 sandbox가 필요하다.

## 관련 자료

- [[AI Hero Ralph Wiggum Article]]

## 관련 개념

- [[Agentic Workflow]]
- [[Orchestration]]
- [[Human-in-the-loop]]
- [[Codex]]
- [[Claude Code]]

## 예시

- Test coverage loop: coverage report를 입력으로 주고, agent가 uncovered path를 골라 test를 추가한 뒤 coverage를 다시 측정한다.
- Linting loop: lint error를 하나씩 고치고 lint를 재실행해 통과 여부를 확인한다.
- Entropy loop: unused export, dead code, inconsistent pattern 같은 code smell을 한 번에 하나씩 정리한다.

## 열린 질문

- 이 wiki maintenance에 Ralph-style loop를 적용한다면 progress file은 어디에 두고 언제 삭제해야 하는가?
- Wiki ingest, lint report, link repair 중 어떤 작업이 AFK loop에 적합한가?
- Autonomous loop가 잘못된 source summary를 반복적으로 강화하지 않도록 어떤 human review gate가 필요한가?
