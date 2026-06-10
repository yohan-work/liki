---
title: Personal Operating System
type: project
status: active
created: 2026-05-20
updated: 2026-06-10
tags:
  - personal-operating-system
  - project
related:
  - "[[LLM Wiki]]"
  - "[[Agentic Workflow]]"
  - "[[Codex]]"
  - "[[GeekNews Codex Use Cases Expansion]]"
  - "[[BYOK]]"
  - "[[Forward Deployed Engineer]]"
  - "[[Codex Harness]]"
  - "[[OpenAI Codex Harness Article]]"
  - "[[OSINT]]"
  - "[[OfficeKeeper OSINT Dictionary Article]]"
  - "[[Frontier Systems]]"
  - "[[Stanford CS153 Frontier Systems Course Page]]"
  - "[[PDCA 사이클]]"
  - "[[Asana PDCA Cycle Article]]"
  - "[[AI 실험 문화]]"
  - "[[Toss Tech AI Surf Day Article]]"
  - "[[Cross-functional 기술 문제 해결]]"
  - "[[Toss Tech Cross Functional TPM Tip Article]]"
sensitivity: private
evidence_level: unsourced
---

# Personal Operating System

## 목적

Personal Operating System은 개인 workflow, knowledge capture, project planning, AI-assisted execution을 하나의 운영 루틴으로 연결하는 장기 프로젝트다.

## 배경

현재 LLM Wiki는 자료를 보존하고 요약하는 구조는 갖췄지만, 실행 후보를 고르고 후속 작업을 처리하는 압력은 아직 약하다. 이 프로젝트의 역할은 LLM Wiki, Codex, Obsidian, scripts를 일상적인 판단과 실행 흐름으로 묶는 것이다.

## 핵심 기능과 운영 흐름

- knowledge capture와 retrieval.
- 재사용 가능한 question answer.
- project와 decision tracking.
- 여러 업무 도구의 context를 source inventory로 모으고 action queue, decision memo, follow-up draft로 변환한다.
- 반복 workflow를 skill, script, agent-friendly CLI로 축적한다.
- [[BYOK]] 도구를 쓸 경우 API key, usage budget, provider별 비용, secret rotation을 운영 항목으로 관리한다.
- [[Forward Deployed Engineer]] 관점에서 PoC 자동화가 실제 개인 workflow에 채택되는지 adoption 기준을 둔다.
- [[Codex Harness]] 관점에서 장기 실행 작업은 thread, turn, item, approval, artifact event로 나누어 기록하고, 중단 후 재연결 가능한 상태를 중요 기준으로 본다.
- [[OSINT]] 관점에서 공개 repository, 블로그, raw snapshot, screenshot, SaaS profile, API key, MCP endpoint가 외부 노출면이 되지 않는지 점검한다.
- [[Frontier Systems]] 관점에서 개인 운영체계는 "One-Person Frontier Lab"처럼 목표, 도구, 지식, 실행 로그를 묶어 한 사람이 조직 규모 산출에 접근하도록 돕는 기반이다.
- [[PDCA 사이클]] 관점에서 개인 운영체계의 ingest, review, lint, MVP 검증은 계획, 실행, 점검, 조치가 남는 작은 반복 루프로 관리한다.
- [[AI 실험 문화]] 관점에서 AI 학습과 탐색을 남는 시간에 맡기지 않고 정기적인 보호 시간에 실제 업무 문제 하나를 실험한다. 결과는 성공 데모보다 문제, 시도, 실패, 검증, 재사용 가능한 artifact로 남긴다.
- [[Cross-functional 기술 문제 해결]] 관점에서 source, idea, MVP, decision, agent가 각각 관리되어도 실행이 이어지지 않으면 문제, 결정, owner, dependency, next action, done evidence를 다시 정의한다.

## 현재 운영 기준

- Obsidian 첫 화면은 [[LLM Wiki Overview]]로 둔다.
- 새 자료는 바로 wiki에 섞지 않고 raw 보존과 source summary를 먼저 거친다.
- 주간 점검은 `node scripts/weekly-review.ts`로 시작하고, 후보 중 하나만 실제 작업으로 고른다.
- 실행 기회 검토는 `node scripts/opportunity-review.ts`를 참고하되, 자동 점수는 결정 근거가 아니라 검토 힌트로만 쓴다.
- 반복되는 실행 판단은 decision record로 남겨 같은 논의를 반복하지 않는다.
- 월 1회 AI 실험 시간을 예약하고, 한 번의 실험에서 재사용 가능한 skill, script, checklist, workflow 중 하나를 남기는 최소 루틴을 검토한다.

## 이번 주 우선순위

- log에 쌓인 후속 작업 중 1개만 선택해 source-backed 보강 또는 실행 판단으로 닫는다.
- [[아이디어 개선 루프]]를 실제 새 아이디어 1개에 적용해 템플릿의 부담을 확인한다.
- [[LLM Wiki]]와 [[LLM Wiki Overview]]를 수집 중심이 아니라 실행 queue 중심으로 유지한다.

## 성공 기준

- 매주 실행 후보가 "없음"으로 끝나지 않고, 최소 1개의 후속 작업이나 판단 후보가 드러난다.
- source summary가 쌓인 주제는 concept page 추가에서 멈추지 않고 comparison, question, decision 중 하나로 재컴파일된다.
- parked idea와 MVP는 삭제하지 않되, 다시 볼 조건이 명확히 남아 있다.
- Codex가 수행한 유지보수 작업은 log와 index에 남아 다음 세션에서 이어갈 수 있다.

## 관련 자료

- [[GeekNews Codex Use Cases Expansion]]
- [[WikiDocs Jaehong BYOK AI Tools Article]]
- [[DEVOCEAN Palantir FDE Article]]
- [[OpenAI Codex Harness Article]]
- [[OfficeKeeper OSINT Dictionary Article]]
- [[Stanford CS153 Frontier Systems Course Page]]
- [[Asana PDCA Cycle Article]]
- [[Toss Tech AI Surf Day Article]]
- [[Toss Tech Cross Functional TPM Tip Article]]
- [[llm-wiki-review-2026-05-29]]

## 열린 질문

- 어떤 workflow를 먼저 표준화해야 하는가?
- wiki에 남길 것과 daily note에 남길 것은 어떻게 구분해야 하는가?
- 어떤 action은 자동화하고, 어떤 action은 human approval boundary 뒤에 둬야 하는가?
- 여러 AI 도구가 같은 provider key를 쓸 때 비용과 보안 책임을 어디에 기록할 것인가?
- 개인 workflow의 PoC가 실제 운영 루틴으로 전환되었는지 어떤 지표로 판단할 것인가?
- 개인 automation에서도 Codex App Server처럼 event stream과 approval request를 구조화할 필요가 있는가?
- 개인 운영체계의 공개 노출면을 어떤 주기로 점검하고 어디에 기록할 것인가?
- One-person frontier lab으로 볼 때 이 프로젝트가 매주 만들어야 하는 산출물은 무엇인가?
- 보호된 AI 실험 시간을 어느 주기로 운영해야 탐색이 실행 queue를 잠식하지 않는가?
- 정체된 실행 후보에서 owner 공백과 decision 공백을 구분하는 최소 진단 형식은 무엇인가?
