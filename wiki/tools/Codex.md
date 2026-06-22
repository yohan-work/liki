---
title: Codex
type: tool
status: active
created: 2026-05-20
updated: 2026-06-22
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
  - "[[oh-my-codex]]"
  - "[[Digital Bourgeois oh-my-codex Article]]"
  - "[[SkillOpt]]"
  - "[[SkillOpt Project Page]]"
  - "[[Matt Pocock Skills]]"
  - "[[GitHub Matt Pocock Skills Repository]]"
  - "[[Clicky]]"
  - "[[GitHub Clicky Repository]]"
  - "[[Codex Sites]]"
  - "[[OpenAI Codex Sites Documentation]]"
  - "[[Humanize KR]]"
  - "[[GitHub im-not-ai Repository]]"
  - "[[Ponytail]]"
  - "[[GitHub Ponytail Repository]]"
sensitivity: private
evidence_level: source-backed
---

# Codex

## 무엇인가

이 프로젝트에서 Codex는 Markdown, script, link, wiki hygiene을 유지보수하는 agent로 다룬다.

[[GeekNews Codex Use Cases Expansion]]은 Codex를 단순 코딩 보조가 아니라 여러 업무 도구에 흩어진 context를 수집하고, 검토 가능한 산출물을 만들고, 승인된 action으로 이어가는 업무 위임 플랫폼으로 해석한다.

[[OpenAI Codex Harness Article]]은 Codex의 웹 앱, CLI, IDE 확장 프로그램, macOS 앱이 동일한 [[Codex Harness]]로 구동되며, Codex App Server가 이를 client-friendly bidirectional JSON-RPC API로 노출한다고 설명한다. 이 관점에서 Codex는 단일 UI가 아니라 thread persistence, tool execution, approval request, diff artifact, streaming event를 공유하는 agent runtime이다.

[[Digital Bourgeois oh-my-codex Article]]은 Codex CLI를 실행 엔진으로 두고 그 위에 workflow, role, skill, state management를 얹는 [[oh-my-codex]]를 소개한다. 이 자료는 Codex 자체와 Codex를 매일 쓰기 위한 운영 레이어를 구분해서 볼 필요가 있음을 보여준다.

[[SkillOpt Project Page]]는 Codex를 SkillOpt 실험 harness 중 하나로 다루며, Codex에서 훈련한 SpreadsheetBench skill이 Claude Code로 transfer되는 사례를 제시한다. 이 주장은 Codex용 skill을 특정 UI prompt가 아니라 재사용 가능한 절차 artifact로 관리할 가능성을 보여주지만, 실제 적용 전 repository와 논문 기준 확인이 필요하다.

[[GitHub Matt Pocock Skills Repository]]는 Claude Code와 Codex 같은 coding agent의 실패 모드를 작고 조합 가능한 skill로 줄이려는 practitioner example이다. Codex 운영에서도 grilling, shared language, TDD, diagnosis, handoff 같은 skill vocabulary를 참고할 수 있다.

[[GitHub Clicky Repository]]는 README와 AGENTS.md가 coding agent에게 local setup과 architecture context를 제공하는 사례다. Codex 관점에서는 agent-readable repository instruction이 onboarding, build guidance, 금지 명령, key file map을 담는 운영 artifact가 될 수 있음을 보여준다.

[[OpenAI Codex Sites Documentation]]은 Codex가 Sites plugin을 통해 website, web app, game을 생성, 저장, 배포, 검사하는 hosted site workflow를 제공한다고 설명한다. 이 관점에서 Codex는 code edit뿐 아니라 saved version, production deployment, access control, runtime secret까지 다루는 delivery surface가 된다.

[[GitHub im-not-ai Repository]]는 Claude Code용 한국어 윤문 workflow를 Codex Fast skill로 축소 이식한 사례다. Cross-agent skill은 같은 목적과 reference를 공유할 수 있지만, subagent orchestration과 검증 단계는 runtime capability에 맞춰 별도로 설계해야 한다.

[[GitHub Ponytail Repository]]는 Codex plugin, skill, lifecycle hook으로 과잉 구현을 억제하는 사례다. 외부 plugin은 편의 기능과 함께 실행되는 hook도 포함하므로 설치 전 source와 permission을 검토하고, 최소화 효과는 LOC가 아니라 correctness·test·rework와 함께 평가해야 한다.

## 사용 사례

- raw material을 source summary로 ingest한다.
- 관련 wiki page를 업데이트한다.
- lint-style check를 실행한다.
- 유용한 query answer를 보존한다.
- PR 리뷰, 버그 트리아지, 문서 최신화, 데이터 정리, 회의 후속 작업, 운영 워크플로처럼 검토 가능한 artifact가 필요한 반복 업무를 처리한다.
- 반복 workflow를 skill이나 agent-friendly CLI로 축적한다.
- [[BYOK]] 관점에서는 모델 호출 비용과 Codex가 제공하는 workflow/artifact 가치를 분리해 평가한다.
- [[oh-my-codex]] 같은 workflow layer를 참고해 모호한 요청, 계획 승인, 단일 실행, 병렬 실행, 상태 저장의 경계를 분리한다.

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
- [[Digital Bourgeois oh-my-codex Article]]
- [[SkillOpt Project Page]]
- [[GitHub Matt Pocock Skills Repository]]
- [[GitHub Clicky Repository]]
- [[OpenAI Codex Sites Documentation]]
- [[GitHub im-not-ai Repository]]
- [[GitHub Ponytail Repository]]

## 열린 질문

- 어떤 작업을 scripted workflow로 만들어야 하는가?
- LLM Wiki 운영 중 어떤 반복 작업을 reusable skill로 분리할 것인가?
- BYOK 환경에서 Codex 사용량과 비용을 어떤 단위로 추적해야 하는가?
- Codex App Server 수준의 event stream을 개인 automation log에 얼마나 반영할 것인가?
- Codex CLI 위에 별도 workflow layer를 붙일 기준은 작업 규모, 위험도, 반복성 중 무엇인가?
- Codex 작업 skill을 검증할 held-out task set을 어떻게 만들 것인가?
- Matt Pocock Skills의 small/composable skill 철학을 `#wiki` 명령에 어떻게 적용할 것인가?
- AGENTS.md 같은 repository instruction을 setup assistant가 읽을 때 secret 설정과 local permission 요청을 어떤 approval boundary로 분리해야 하는가?
- Codex Sites 같은 hosted deployment surface를 사용할 때 save/deploy/access 변경을 어떤 approval boundary로 나눠야 하는가?
- 외부 skill installer가 `~/.codex/skills`를 변경하고 자동 업데이트를 제공할 때 어떤 review gate가 필요한가?
