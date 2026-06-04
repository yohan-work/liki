---
title: Codex Harness
type: concept
status: active
created: 2026-05-26
updated: 2026-06-04
tags:
  - codex
  - codex-harness
  - app-server
  - agent-runtime
  - json-rpc
related:
  - "[[OpenAI Codex Harness Article]]"
  - "[[Codex]]"
  - "[[Agentic Workflow]]"
  - "[[Personal Operating System]]"
  - "[[MCP Remote SSE]]"
  - "[[Codex Sites]]"
  - "[[OpenAI Codex Sites Documentation]]"
sensitivity: private
evidence_level: source-backed
---

# Codex Harness

## 정의

Codex Harness는 OpenAI의 여러 Codex surface를 구동하는 공통 agent loop와 runtime logic이다. [[OpenAI Codex Harness Article]]은 웹 앱, CLI, IDE 확장 프로그램, macOS 앱이 동일한 harness를 사용하며, Codex App Server가 이를 client-friendly bidirectional JSON-RPC API로 노출한다고 설명한다.

## 핵심 구성

- Thread lifecycle and persistence: Codex conversation을 생성, 재개, fork, archive하고 event history를 유지한다.
- Configuration and authentication: 설정 로드, 기본값, credential state, login flow를 관리한다.
- Tool execution and extensibility: sandboxed shell/file tool 실행, MCP server, skill integration을 일관된 policy model 아래 agent loop에 연결한다.
- Codex core: agent code library이자 agent loop 실행과 Codex thread persistence를 담당하는 runtime으로 설명된다.
- App Server: Codex core thread를 hosting하는 long-running process이며, stdio reader, message processor, thread manager, core thread를 통해 client JSON-RPC 요청과 core event stream을 변환한다.

## 대화 프리미티브

- Item: user message, agent message, tool execution, approval request, diff 같은 typed input/output 단위다.
- Turn: 사용자 입력으로 시작되어 agent output이 끝날 때 완료되는 work unit이다.
- Thread: 여러 turn을 포함하는 persistent Codex session이다.

이 vocabulary는 agent workflow를 기록할 때 "요청 하나"보다 더 정밀하다. 예를 들어 `pnpm test` 실행은 tool execution item이고, 실행 전 approval request item이 별도로 생길 수 있다.

## 중요한 이유

- Codex를 하나의 CLI가 아니라 여러 client surface가 공유하는 agent runtime으로 이해하게 한다.
- UI integration에서 progress streaming, diff rendering, approval prompt, reconnect 가능한 thread가 왜 별도 protocol primitive를 필요로 하는지 설명한다.
- [[MCP Remote SSE]]와 비교할 때 MCP는 범용 tool interface에 가깝고, Codex App Server는 Codex-specific rich session semantics를 보존하는 protocol에 가깝다.
- [[Personal Operating System]] 관점에서는 long-running thread, event history, approval boundary, artifact rendering이 개인 workflow runtime의 설계 기준이 된다.
- [[OpenAI Codex Sites Documentation]]은 Codex app 안에서 plugin, saved version, production deployment, review pane, deployment status, access mode가 함께 움직이는 hosted app workflow를 보여준다.

## 적용 메모

- 개인 wiki 유지보수 agent에도 item/turn/thread vocabulary를 차용할 수 있다.
- 검증 가능한 artifact를 남기려면 final answer만 저장하지 말고 tool execution, diff, approval, test result를 별도 event로 보존하는 구조가 필요하다.
- 자체 product integration을 검토할 때는 Codex App Server, Codex Exec, Codex SDK 중 필요한 session richness와 통합 비용에 맞는 방식을 골라야 한다.

## 관련 자료

- [[OpenAI Codex Harness Article]]
- [[OpenAI Codex Sites Documentation]]

## 열린 질문

- LLM Wiki ingest workflow에서 thread/turn/item에 해당하는 local schema를 만들 필요가 있는가?
- Codex App Server의 protocol primitive를 개인 automation log나 QA report에 어느 정도까지 반영할 수 있는가?
- MCP tool call과 Codex App Server item lifecycle을 같은 vocabulary로 매핑할 수 있는가?
- Sites의 saved version, deployment, access change를 Codex thread/item vocabulary로 어떻게 기록할 것인가?
