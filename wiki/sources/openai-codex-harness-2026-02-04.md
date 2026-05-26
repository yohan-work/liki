---
title: OpenAI Codex Harness Article
type: source
status: ingested
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - openai
  - codex
  - codex-harness
  - app-server
  - json-rpc
  - agent-runtime
related:
  - "[[Codex Harness]]"
  - "[[Codex]]"
  - "[[Agentic Workflow]]"
  - "[[Personal Operating System]]"
  - "[[MCP Remote SSE]]"
sensitivity: private
evidence_level: source-backed
source_id: openai-codex-harness-2026-02-04
original_path: raw/external/openai-unlocking-codex-harness-2026-05-26.md
date_added: 2026-05-26
published_at: 2026-02-04
captured_at: 2026-05-26
accessed_at: 2026-05-26
canonical_url: https://openai.com/ko-KR/index/unlocking-the-codex-harness/
content_hash: sha256:1c637b6f97d4ec223aa8c61ebe028c7850df2c3f1c6206b459a43e1db21fac84
source_version: openai_web_extracted_snapshot_2026-05-26
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - concept
  - reference
  - tool
source_quality: official
use_for:
  - reference
  - concept
  - decision
related_pages:
  - "[[Codex Harness]]"
  - "[[Codex]]"
  - "[[Agentic Workflow]]"
  - "[[Personal Operating System]]"
  - "[[MCP Remote SSE]]"
---

# OpenAI Codex Harness Article

## 자료 요약

OpenAI 공식 글 "Codex 하네스 활용하기: OpenAI가 App Server를 구축한 방법"의 source summary다. 글은 Codex 웹 앱, CLI, IDE 확장 프로그램, macOS 앱 등 여러 surface가 동일한 Codex harness로 구동되며, Codex App Server가 이를 client-friendly bidirectional JSON-RPC API로 노출한다고 설명한다.

로컬 `curl`은 OpenAI 페이지에서 403을 반환했기 때문에 raw에는 HTML 원본이 아니라 브라우징으로 확인한 텍스트 추출 snapshot을 저장했다.

## 원문 주장

- Codex의 여러 surface는 내부적으로 동일한 Codex harness를 사용하며, harness는 Codex experience의 기반이 되는 agent loop와 logic이다.
- Codex App Server는 client와 server 사이의 JSON-RPC protocol이자 Codex core thread를 hosting하는 long-running process다.
- Codex harness는 thread lifecycle/persistence, configuration/authentication, tool execution/extensibility를 포함한다.
- Codex core는 agent code를 포함한 library이자 agent loop를 실행하고 Codex thread persistence를 관리하는 runtime으로 설명된다.
- App Server process는 stdio reader, Codex message processor, thread manager, core thread로 구성된다.
- App Server는 Codex core의 낮은 수준 event stream을 stable하고 UI-usable한 JSON-RPC notification으로 변환한다.
- Conversation primitive는 item, turn, thread로 정리된다. Item은 user message, agent message, tool execution, approval request, diff 같은 typed input/output 단위이고, turn은 사용자 입력으로 시작되는 agent work unit이며, thread는 persistent Codex session이다.
- Tool execution 전 client approval을 요청할 수 있고, client가 응답할 때까지 turn을 pause할 수 있다.
- Local app/IDE는 App Server binary를 long-running subprocess로 실행하고 stdio JSON-RPC channel을 연다. Codex web은 container에서 App Server를 실행하고 HTTP/SSE를 통해 event를 streaming한다.
- Codex App Server는 full Codex harness를 stable하고 UI-friendly event stream으로 노출해야 할 때 선택하는 통합 방식으로 제시된다.
- Codex를 MCP server로 쓰는 방식은 callable tool에는 적합하지만 Codex-specific rich session semantics를 모두 표현하기 어려울 수 있다고 설명한다.
- Codex Exec은 one-off task와 CI 실행용 lightweight scripted CLI mode, Codex SDK는 local Codex agent를 programmatically control하는 TypeScript library로 소개된다.

## 내 프로젝트에 주는 시사점

- [[Codex]]를 단순 CLI가 아니라 shared harness, persistent thread, typed event, approval request, diff artifact를 가진 agent runtime으로 이해해야 한다.
- [[Agentic Workflow]] 설계에서 item/turn/thread는 reusable vocabulary가 될 수 있다. 특히 tool execution, approval, diff, final message를 별도 item lifecycle로 다루는 관점이 유용하다.
- [[Personal Operating System]] 관점에서는 long-running state와 reconnect 가능한 thread가 개인 workflow 자동화의 중요한 기준이다.
- [[MCP Remote SSE]]와 비교할 때 MCP는 tool connectivity layer이고, Codex App Server는 Codex-specific session semantics와 UI event stream을 노출하는 protocol로 구분해야 한다.

## 검증 필요 주장

- 이 글은 공식 OpenAI 글이지만 product surface, API details, linked developer docs는 빠르게 바뀔 수 있으므로 실제 통합 전 Codex App Server, Codex Exec, Codex SDK의 현재 developer documentation을 확인해야 한다.
- Raw snapshot은 HTML 원본이 아니라 web extraction이므로, 코드 예시나 protocol detail은 공식 linked docs와 Codex CLI repository로 재검증해야 한다.
- App Server를 자체 제품에 통합하는 경우 authentication, binary distribution, backward compatibility, sandbox, approval policy를 별도 설계해야 한다.
