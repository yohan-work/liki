---
title: PDCA 사이클
type: concept
status: seed
created: 2026-06-05
updated: 2026-06-05
tags:
  - workflow
  - process-improvement
  - personal-ops
related:
  - "[[Asana PDCA Cycle Article]]"
  - "[[아이디어 개선 루프]]"
  - "[[Personal Operating System]]"
  - "[[Agentic Workflow]]"
  - "[[Human-in-the-loop]]"
sensitivity: private
evidence_level: source-backed
---

# PDCA 사이클

## 한 줄 정의

PDCA 사이클은 계획(Plan), 실행(Do), 점검(Check), 조치(Act)를 반복해 프로세스를 지속적으로 개선하는 피드백 루프다.

## 핵심 문제

프로젝트나 운영 루틴은 한 번의 계획으로 완성되지 않는다. 특히 개인 workflow, wiki maintenance, agentic execution은 실행 후 결과를 보고 다음 계획을 조정해야 품질이 올라간다.

## 작동 방식

1. 계획: 목표, 성공 지표, 산출물, 이해관계자, 일정, 리스크를 정한다.
2. 실행: 전체 변경을 한 번에 밀어붙이기보다 작은 규모로 계획을 실행한다.
3. 점검: 실행 결과가 목표와 맞는지 확인하고 개선할 지점을 찾는다.
4. 조치: 확인한 내용을 프로세스나 다음 반복에 반영한다.

[[Asana PDCA Cycle Article]]은 PDCA를 일회성 절차가 아니라 지속적인 반복과 프로세스 개선을 위한 피드백 루프로 설명한다.

## 좋은 사용 사례

- 반복되는 업무 프로세스를 간소화하거나 개선할 때.
- 새 비즈니스 프로세스를 작은 실험으로 개발할 때.
- 지속적 개선 루틴을 시작할 때.
- 여러 해결책을 빠르게 테스트하고 비교할 때.
- [[아이디어 개선 루프]]에서 원형 아이디어를 작은 검증 단위로 바꿀 때.
- [[Personal Operating System]]에서 weekly review, ingest, lint, MVP 검증을 다음 행동으로 연결할 때.

## 실패 패턴

- 한 번만 실행하고 끝낼 작업에 PDCA를 붙여 불필요한 절차를 만드는 경우.
- Check 단계 없이 Do만 반복해 "계속 바쁘지만 개선은 없는" 상태가 되는 경우.
- Act 단계에서 결정이나 후속 작업을 기록하지 않아 다음 반복이 이전 문제를 다시 겪는 경우.
- 긴급 대응처럼 시간이 매우 제한된 상황에 느린 학습 루프를 그대로 적용하는 경우.
- agent 작업에서 검증 기준 없이 완료 선언만 반복하는 경우.

## 관련 자료

- [[Asana PDCA Cycle Article]]

## 관련 개념과 차이

- [[아이디어 개선 루프]]: PDCA가 일반 프로세스 개선 루프라면, 아이디어 개선 루프는 개인 아이디어를 문제정의와 검증 질문으로 다듬는 좁은 적용 사례다.
- [[Agentic Workflow]]: agentic workflow도 계획, 실행, 결과 검증, 다음 행동 반영을 필요로 한다. PDCA는 그 흐름을 단순한 vocabulary로 정리한다.
- [[Human-in-the-loop]]: Check와 Act 단계에서 사람의 검토와 승인 boundary가 중요해진다.

## 예시

- LLM Wiki ingest: 자료 선택을 계획하고, source summary와 관련 page를 작성하고, lint와 index 누락을 점검하고, log와 후속 작업 queue에 반영한다.
- MVP 검증: 1주 실험 기준을 정하고, 최소 기능을 실행하고, 성공 지표를 점검하고, 지속/보류/중단 결정을 남긴다.
- Codex 작업: 계획을 세우고, 파일을 수정하고, test/lint/screenshot/source evidence로 결과를 확인하고, 남은 리스크와 다음 행동을 기록한다.

## 내 관점 / 임시 결론

이 위키에서 PDCA는 거창한 경영 방법론보다 "작은 반복 작업이 끝났는지 판단하는 체크리스트"로 쓰는 편이 유용하다. 특히 Codex가 실행한 변경은 Do에서 끝나지 않고 Check와 Act를 남겨야 다음 세션에서 이어질 수 있다.

## 열린 질문

- LLM Wiki 유지보수에서 Check 단계의 최소 기준은 lint, index 반영, log 기록 중 어디까지인가?
- 개인 workflow에 PDCA를 적용할 때 문서화 부담을 줄이기 위한 가장 작은 템플릿은 무엇인가?
