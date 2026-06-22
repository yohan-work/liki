---
title: Ponytail
type: tool
status: seed
created: 2026-06-22
updated: 2026-06-22
tags:
  - ponytail
  - coding-agent
  - skills
  - yagni
  - code-review
related:
  - "[[GitHub Ponytail Repository]]"
  - "[[Skills]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
  - "[[하네스 엔지니어링]]"
sensitivity: private
evidence_level: source-backed
---

# Ponytail

## 한 줄 정의

Ponytail은 coding agent가 과잉 구현을 피하고 요구사항을 만족하는 최소 코드에 도달하도록 만드는 cross-agent instruction·skill·plugin 도구다.

## 핵심 판단 ladder

1. 구현 자체가 필요한지 확인한다.
2. 표준 라이브러리로 해결 가능한지 확인한다.
3. 브라우저 등 플랫폼 기본 기능을 우선한다.
4. 이미 설치된 dependency를 재사용한다.
5. 단순 표현으로 충분한지 확인한다.
6. 그다음 필요한 최소 구현을 작성한다.

코드 골프가 목적은 아니다. [[GitHub Ponytail Repository]]는 validation, data-loss handling, security, accessibility를 줄여서는 안 되는 경계로 명시한다.

## 제공 surface

- Claude Code와 Codex용 plugin 및 lifecycle hook
- 여러 coding agent용 repository instruction과 rules adapter
- 현재 diff의 over-engineering을 찾는 review
- 전체 repository audit
- 의도적으로 미룬 shortcut을 추적하는 debt ledger
- `lite`, `full`, `ultra`, `off` 적용 강도

## 적합한 사용 사례

- 작은 기능인데 agent가 새 abstraction이나 dependency를 과도하게 추가하는 상황
- 브라우저 native control, 표준 라이브러리, 기존 dependency로 대체 가능한 UI·backend 작업
- pull request 전 불필요한 code path와 abstraction을 찾는 보조 review
- coding skill 적용 전후의 diff, token, cost, time, correctness를 비교하는 실험

## 실패 패턴과 경계

- LOC 감소를 correctness나 maintainability 개선과 동일시한다.
- 요구사항의 확장 가능성을 근거 없이 YAGNI로 기각한다.
- 짧은 코드를 위해 validation, observability, error handling, accessibility를 제거한다.
- project architecture와 team convention을 이해하지 않은 채 native 기능을 항상 우선한다.
- 외부 plugin의 hook을 검토하지 않고 전역 설치한다.
- 저자 자체 benchmark를 다른 model, codebase, task의 보편적 성과로 일반화한다.

## 내 관점 / 임시 결론

Ponytail의 가치 있는 부분은 "짧게 작성하라"가 아니라 구현 선택 순서를 명시하고 안전 경계를 최소화 대상에서 제외한 점이다. 현재는 `status: seed`로 유지한다. 전역 plugin 설치보다 repository-local instruction 또는 read-only diff review로 시작하고, 동일한 작은 task set에서 기본 agent와 요구사항 충족률·test·dependency 변화·LOC·rework를 함께 비교하는 것이 적절하다.

## 관련 자료

- [[GitHub Ponytail Repository]]

## 열린 질문

- 기존 [[Skills]]와 AGENTS.md에 이미 있는 scope·safety 규칙 대비 추가 효과가 있는가?
- 최소화 review가 architecture debt를 줄이는지, 필요한 abstraction까지 제거하는지 어떻게 판별할 것인가?
- lifecycle hook 없이 skill만 적용했을 때도 일관된 효과가 유지되는가?
