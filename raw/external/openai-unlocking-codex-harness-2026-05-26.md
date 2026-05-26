---
source_url: https://openai.com/ko-KR/index/unlocking-the-codex-harness/
captured_at: 2026-05-26
capture_method: web.open text extraction
curl_status: 403 from openai.com, HTML snapshot unavailable
title: "Codex 하네스 활용하기: OpenAI가 App Server를 구축한 방법"
published_at: 2026-02-04
author: Celia Chen
source_domain: openai.com
---

# Codex 하네스 활용하기: OpenAI가 App Server를 구축한 방법

이 raw snapshot은 OpenAI 공식 페이지를 브라우징으로 확인해 보존한 텍스트 추출본이다. 기본 `curl` 및 브라우저 user-agent `curl`은 모두 403을 반환했으므로 HTML 원본은 저장하지 못했다.

## 확인한 목차

- App Server의 기본 배경
- Codex 하네스 내부
- 대화 프리미티브
- 클라이언트와의 통합
- 올바른 프로토콜 선택하기
- 향후 계획

## 핵심 원문 내용 추출

OpenAI의 코딩 에이전트 Codex는 웹 앱, CLI, IDE 확장 프로그램, Codex macOS 앱 등 다양한 surface에서 사용할 수 있으며, 내부적으로는 모두 동일한 Codex harness로 구동된다고 설명한다. 이 harness는 Codex 경험의 기반이 되는 agent loop와 logic이다. Codex App Server는 client-friendly bidirectional JSON-RPC API로 소개된다.

초기 App Server는 여러 제품에서 Codex harness를 재사용하기 위한 실용적인 방법이었지만, 점차 표준 프로토콜로 발전했다. VS Code extension을 만들 때 동일한 harness를 사용하면서도 IDE UI에서 agent loop를 다시 구현하지 않고 workspace 탐색, 진행 상황 streaming, diff 출력 등 request/response를 넘어서는 interaction pattern을 지원할 필요가 있었다. 처음에는 Codex를 MCP server로 노출하는 시도를 했으나 VS Code에 적합한 방식으로 MCP semantics를 유지하기 어려워 TUI loop를 반영한 JSON-RPC protocol을 도입했다고 설명한다.

Codex harness 내부 구성요소로는 thread lifecycle and persistence, configuration and authentication, tool execution and extensibility가 제시된다. Thread는 사용자와 agent 간의 Codex conversation이며, Codex는 thread를 생성, 재개, fork, archive하고 event history를 유지한다. Configuration/authentication은 config loading, defaults, credential state, "ChatGPT로 로그인" 같은 authentication flow를 포함한다. Tool execution/extensibility는 sandbox에서 shell/file tool을 실행하고 MCP server 및 skill 같은 integration을 연결해 일관된 policy model 아래 agent loop에 참여하게 한다.

Codex core는 agent code가 포함된 library이자 agent loop를 실행하고 하나의 Codex thread persistence를 관리하는 runtime으로 설명된다. App Server는 client와 server 간 JSON-RPC protocol이며 Codex core thread를 host하는 long-running process다. App Server process에는 stdio reader, Codex message processor, thread manager, core thread가 포함된다.

Client request 하나는 많은 event update를 만들 수 있으며, App Server는 Codex core의 낮은 수준 event stream을 stable하고 UI-usable한 JSON-RPC notification으로 변환한다. Client와 App Server 간 JSON-RPC protocol은 완전한 bidirectional protocol이다. Agent가 approval 같은 input을 필요로 할 때 server가 request를 시작할 수 있고, client response 전까지 turn을 pause할 수 있다.

Conversation primitive는 item, turn, thread로 정리된다. Item은 Codex input/output의 기본 단위이며 user message, agent message, tool execution, approval request, diff 같은 typed unit을 가진다. Item lifecycle은 `item/started`, optional `item/*/delta`, `item/completed`로 표현된다. Turn은 사용자 입력으로 시작되는 agent work unit이며, thread는 여러 turn을 포함하는 persistent Codex session이다.

대화 시작 시 client와 server는 `initialize` handshake를 설정해야 하며, protocol versioning, feature flags, defaults를 합의한다. Tool call도 item으로 client에게 전달되며, command execution 전 client approval을 요청할 수 있다. 예시는 `pnpm test` 실행 승인 흐름을 보여준다.

Client integration pattern은 local app and IDE, Codex web, TUI/Codex CLI로 나뉜다. Local client는 platform-specific App Server binary를 bundle하거나 가져와 long-running subprocess로 실행하고 bidirectional stdio channel을 연다. Codex web은 container environment에서 harness를 실행하며, worker가 workspace checkout container를 provision하고 App Server binary를 실행한다. Browser tab은 HTTP와 SSE를 통해 Codex backend와 통신해 task event를 streaming한다. Server가 state와 progress를 유지하므로 tab이 닫히거나 network가 끊겨도 작업을 계속할 수 있다고 설명한다.

Codex App Server는 앞으로 유지 관리할 최우선 통합 방식으로 제시된다. MCP server 방식은 MCP workflow가 있고 Codex를 callable tool로 쓰려는 경우 적합하지만, rich session semantics나 diff update 같은 Codex-specific interaction은 매끄럽게 mapping되지 않을 수 있다고 설명한다. Provider-cross agent harness protocol은 portable abstraction에는 유용하지만 provider-specific tool과 session semantics를 표현하기 어려울 수 있다고 말한다.

Codex App Server는 full Codex harness를 stable하고 UI-friendly event stream으로 노출할 때 선택하는 방식이다. 주요 비용은 client-side JSON-RPC binding 구축이다. Codex Exec은 one-off task와 CI 실행을 위한 lightweight scripted CLI mode로 소개된다. Codex SDK는 local Codex agent를 application 안에서 programmatically control하는 TypeScript library로 설명된다.

## 확인한 후속 링크

- Codex web app: https://chatgpt.com/
- Codex CLI: https://github.com/openai/codex
- Codex IDE extension: developers.openai.com linked page
- Codex App Server: developers.openai.com linked page
- Codex mcp-server: developers.openai.com linked page
- OpenAI Agents SDK: https://openai.github.io/
- Codex Exec: developers.openai.com linked page
- Codex SDK: developers.openai.com linked page
