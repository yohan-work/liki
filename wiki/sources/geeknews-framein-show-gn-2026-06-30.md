---
title: GeekNews Framein Show GN
source_id: geeknews-framein-show-gn-2026-06-30
type: source
status: active
created: 2026-06-30
updated: 2026-06-30
tags:
  - source
  - geeknews
  - framein
  - coding-agent
  - work-state
related:
  - "[[Framein]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[하네스 엔지니어링]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
original_path: raw/external/geeknews-topic-30947-2026-06-30.md
date_added: 2026-06-30
published_at: 2026-06-30T08:08:22+09:00
captured_at: 2026-06-30T00:00:00+09:00
accessed_at: 2026-06-30T00:00:00+09:00
canonical_url: https://news.hada.io/topic?id=30947
content_hash: sha256:765edf75991e402891b4cbb5ed5cccb1fc0730b057f9512266917e3d2a61ffc1
source_version: "GeekNews topic 30947 Markdown and HTML snapshots captured 2026-06-30"
domain:
  - ai
  - software
  - personal-ops
content_type: article
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[Framein]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[하네스 엔지니어링]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
sensitivity: private
evidence_level: source-backed
---

# GeekNews Framein Show GN

## 출처

GeekNews에 2026-06-30 게시된 "Show GN: Framein - 콕핏도 프록시도 하네스도 아닌, AI 코딩 에이전트 아래의 작업 상태 레이어" 글이다. 작성자는 Framein을 여러 터미널 coding agent 사이에서 작업 상태가 새는 문제를 줄이기 위해 만든 로컬 work-state layer로 소개한다. 원문은 Framein 웹사이트, GitHub repository, 개발자 노트를 연결한다.

## 분류

- domain: ai, software, personal-ops
- content_type: article
- knowledge_role: source, tool, reference
- source_quality: practitioner
- use_for: concept, reference, decision

## 원본 위치와 provenance

- Markdown snapshot: `raw/external/geeknews-topic-30947-2026-06-30.md`
- HTML snapshot: `raw/external/geeknews-topic-30947-2026-06-30.html`
- canonical URL: https://news.hada.io/topic?id=30947
- published_at: 2026-06-30T08:08:22+09:00
- captured_at: 2026-06-30T00:00:00+09:00
- Markdown SHA-256: `765edf75991e402891b4cbb5ed5cccb1fc0730b057f9512266917e3d2a61ffc1`
- HTML SHA-256: `08de3cdc19cf7298a58ce8b9e2e5a73228872b8b013ee3aae95d352176048531`

## 원문 요약

글은 Claude Code, Codex, Gemini CLI 같은 여러 terminal agent를 번갈아 사용할 때 사용자가 목표, 보호해야 할 영역, 직전 시도, 검증 결과를 반복 설명하게 되는 문제에서 출발한다. Framein은 이를 cockpit, proxy, orchestration harness로 풀기보다 repository 안에 작업 계약, 결정 기록, 검증 결과, ledger를 남기는 얇은 로컬 작업 상태 계층으로 풀려는 도구라고 설명된다.

핵심 loop는 `start`, `challenge`, `capsule`, `ship` 네 단계다. `start`는 목표, 인수 조건, 보호 영역, non-goal을 작업 계약으로 고정하고, `challenge`는 다른 모델의 제한된 반론을 받아 사용자가 결정하게 한다. `capsule`은 다음 lead agent가 읽을 사실을 준비하고, `ship`은 완료 선언이 아니라 build, test, risk gate로 작업을 닫는 단계다.

## 핵심 주장

- 여러 coding agent를 한 화면에 모으거나 서로 호출하게 하는 것만으로는 작업 상태 누수를 해결하지 못한다.
- handoff를 더 잘 요약하는 대신, agent들이 같은 repository-local 사실을 읽게 하면 별도의 handoff 단계를 줄일 수 있다.
- 작업 계약, ADR, verification, risk/ship gate는 모델별 prompt memory보다 안정적인 공유 상태가 될 수 있다.
- credential 중계, subscription pooling, terminal I/O scraping을 하지 않고 각 공식 CLI의 인증을 그대로 두는 구조가 proxy 계열과의 차이라고 설명한다.
- SQLite store는 cache이고 git 친화 JSON snapshot을 정본으로 두며, Node 22 내장 기능만 사용한다고 주장한다.

## 위키에 반영할 개념

- [[Framein]] 도구 페이지를 새로 만들고, 여러 coding agent 사이의 작업 상태 레이어로 정리한다.
- [[Agentic Workflow]]에는 agent workflow가 handoff 요약보다 repository-local work-state artifact를 요구할 수 있다는 관점을 추가한다.
- [[하네스 엔지니어링]]에는 하네스가 항상 새 runtime을 의미하지 않고 기존 CLI 아래에 계약, ADR, ledger, gate만 얹는 형태일 수 있음을 연결한다.
- [[Orchestration]]에는 multi-agent 조율이 task 분배뿐 아니라 state continuity 설계 문제라는 관점을 보강한다.

## 내 프로젝트에 주는 시사점

- LLM Wiki 유지보수에서도 "다음 agent가 내 요약을 믿는다"보다 `index`, `log`, source summary, lint 결과처럼 repository-local artifact를 읽게 하는 방식이 더 안정적이다.
- Codex, Claude Code, Gemini CLI를 병행할 경우 공통 작업 계약, 변경 금지 영역, 검증 결과, decision log를 tool-specific memory가 아니라 repo artifact로 남기는 실험 가치가 있다.
- 다만 pre-release 도구이므로 실제 설치 전에는 source review, clean-machine install, uninstall/rollback, generated artifact diff를 먼저 확인해야 한다.

## 후속 라우팅

- tool 강화: [[Framein]], [[Codex]], [[Claude Code]]
- concept 강화: [[Agentic Workflow]], [[Orchestration]], [[하네스 엔지니어링]]
- comparison 후보: Framein vs cockpit/proxy/orchestrator는 공식 repository와 경쟁 도구 source가 쌓이면 별도 비교로 검토한다.
- question 후보: 여러 coding agent 사이에서 작업 상태를 어떻게 repo artifact로 공유할 것인가.
- idea 후보: LLM Wiki ingest에도 작업 계약, risk gate, capsule artifact를 적용하는 작은 실험.
- mvp 후보: 없음.
- 보류: 공식 웹사이트, GitHub repository, 개발자 노트는 별도 source로 확인하기 전까지 이 source summary의 검증 필요 주장으로 둔다.

## 검증 필요 주장

- Framein v0.0.6의 실제 구현 범위, MCP 서버, `CLAUDE.md`/`AGENTS.md`/`GEMINI.md` 투영 방식은 GitHub repository로 확인해야 한다.
- 테스트 249개 통과, MIT license, Node 22.5+ 요구사항, runtime dependency 0, Node 내장 `node:sqlite` 사용은 공식 repository와 package metadata로 확인해야 한다.
- credential 미수집, token 중계 없음, terminal I/O scraping 없음은 코드와 threat model 검토 전까지 저자 주장으로만 둔다.
- Windows 코드 서명, 공증된 실행 파일 배포, clean-machine 설치 검증, 다중 개발자 workflow의 미완성 범위는 현재 버전에서 달라질 수 있다.
- cockpit, proxy, orchestrator 계열 도구와의 차이는 작성자의 positioning이며, 각 도구의 공식 문서로 비교해야 한다.

## 관련 페이지

- [[Framein]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[하네스 엔지니어링]]
- [[Codex]]
- [[Claude Code]]

## 열린 질문

- Framein이 생성하는 작업 계약, ADR, ledger, gate artifact는 사람이 리뷰하기 쉬운가?
- 기존 `AGENTS.md`, Codex skill, Claude slash command와 충돌하지 않는 source of truth를 어떻게 정하는가?
- 개인 단독 workflow와 다중 개발자 workflow에서 필요한 locking, conflict resolution, review owner는 어떻게 달라지는가?
- LLM Wiki ingest에 적용한다면 `start`, `challenge`, `capsule`, `ship` 중 어떤 단계부터 가장 작게 실험할 수 있는가?
