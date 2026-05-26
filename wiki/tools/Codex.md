---
title: Codex
type: tool
status: active
created: 2026-05-20
updated: 2026-05-26
tags:
  - codex
  - coding-agent
related:
  - "[[LLM Wiki]]"
  - "[[Skills]]"
  - "[[Agentic Workflow]]"
  - "[[GeekNews Codex Use Cases Expansion]]"
  - "[[Codex Harness]]"
  - "[[OpenAI Codex Harness Article]]"
  - "[[BYOK]]"
  - "[[WikiDocs Jaehong BYOK AI Tools Article]]"
sensitivity: private
evidence_level: source-backed
---

# Codex

## 무엇인가

이 프로젝트에서 Codex는 Markdown, script, link, wiki hygiene을 유지보수하는 agent로 다룬다.

[[GeekNews Codex Use Cases Expansion]]은 Codex를 단순 코딩 보조가 아니라 여러 업무 도구에 흩어진 context를 수집하고, 검토 가능한 산출물을 만들고, 승인된 action으로 이어가는 업무 위임 플랫폼으로 해석한다.

[[OpenAI Codex Harness Article]]은 Codex의 웹 앱, CLI, IDE 확장 프로그램, macOS 앱이 동일한 [[Codex Harness]]로 구동되며, Codex App Server가 이를 client-friendly bidirectional JSON-RPC API로 노출한다고 설명한다. 이 관점에서 Codex는 단일 UI가 아니라 thread persistence, tool execution, approval request, diff artifact, streaming event를 공유하는 agent runtime이다.

## 사용 사례

- raw material을 source summary로 ingest한다.
- 관련 wiki page를 업데이트한다.
- lint-style check를 실행한다.
- 유용한 query answer를 보존한다.
- PR 리뷰, 버그 트리아지, 문서 최신화, 데이터 정리, 회의 후속 작업, 운영 워크플로처럼 검토 가능한 artifact가 필요한 반복 업무를 처리한다.
- 반복 workflow를 skill이나 agent-friendly CLI로 축적한다.
- [[BYOK]] 관점에서는 모델 호출 비용과 Codex가 제공하는 workflow/artifact 가치를 분리해 평가한다.

## 운영 패턴

- 읽기 전용 조사와 write action을 분리한다.
- Slack, GitHub, Linear, Gmail, Calendar, Notion, Google Drive, 로컬 노트처럼 업무 context가 흩어진 도구를 source inventory로 먼저 정리한다.
- 전송, 기록, 결제, 예약, 외부 시스템 변경처럼 영향이 큰 action은 사람이 승인한 뒤 실행한다.
- 결과는 CSV, log, PR check, screenshot, source appendix, QA report처럼 검증 가능한 artifact로 남긴다.
- [[Codex Harness]] 관점에서는 작업을 thread, turn, item으로 나누고, tool execution, approval request, diff, final message를 분리된 event로 관찰한다.

## 한계

- 근거 없는 주장을 만들어서는 안 된다.
- raw material을 수정해서는 안 된다.
- 불확실성을 명확히 표시해야 한다.
- 공식 use case의 실제 기능 범위와 계정별 접근 조건은 OpenAI 공식 문서와 현재 제품 상태로 다시 확인해야 한다.
- Codex App Server, Codex Exec, Codex SDK는 통합 방식과 지원 범위가 다르므로 실제 product integration 전 현재 developer documentation을 확인해야 한다.

## 관련 자료

- [[GeekNews Codex Use Cases Expansion]]
- [[OpenAI Codex Harness Article]]
- [[WikiDocs Jaehong BYOK AI Tools Article]]

## 열린 질문

- 어떤 작업을 scripted workflow로 만들어야 하는가?
- LLM Wiki 운영 중 어떤 반복 작업을 reusable skill로 분리할 것인가?
- BYOK 환경에서 Codex 사용량과 비용을 어떤 단위로 추적해야 하는가?
- Codex App Server 수준의 event stream을 개인 automation log에 얼마나 반영할 것인가?
