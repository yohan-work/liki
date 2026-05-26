---
title: MCP Remote SSE
type: concept
status: active
created: 2026-05-20
updated: 2026-05-26
tags:
  - mcp
  - sse
  - agent-tools
  - tool-server
  - claude-desktop
related:
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Claude Code]]"
  - "[[E2E Test Agent]]"
  - "[[PyTorchKR E2E Test Agent Article]]"
sensitivity: private
evidence_level: source-backed
---

# MCP Remote SSE

## 한 줄 정의

MCP Remote SSE는 MCP tool server를 원격 서버에서 실행하고, client가 SSE transport를 통해 tool 목록과 실행 결과를 주고받게 하는 연결 패턴이다.

## 핵심 문제

Local STDIO MCP server는 설정이 단순하지만 client와 같은 머신에서 프로세스를 실행해야 한다. 여러 client가 같은 tool server를 쓰거나 서버 배포/유지보수를 분리하려면 remote transport가 필요해진다.

## 작동 방식

- MCP server는 `FastMCP` 같은 라이브러리로 tool을 정의한다.
- Server process는 SSE transport로 실행되어 remote endpoint를 제공한다.
- MCP Inspector로 server 연결과 tool 호출을 먼저 확인한다.
- Claude Desktop 같은 client는 `mcp-remote`를 통해 remote SSE endpoint를 로컬 MCP server처럼 연결한다.
- Client config에는 server 이름, 실행 command, args, endpoint가 들어간다.

## 좋은 사용 사례

- 여러 LLM client가 같은 tool server를 공유해야 하는 경우.
- tool server deployment와 desktop client 설정을 분리하고 싶은 경우.
- local machine에 직접 dependency를 설치하기 어렵거나 서버 측에서만 접근 가능한 resource가 있는 경우.
- PoC에서 MCP Inspector로 tool contract를 먼저 검증하고 client에 연결하려는 경우.

## 실패 패턴

- Remote endpoint에 인증이나 접근 제어를 두지 않아 tool이 외부에 노출된다.
- Claude Desktop config 예시를 버전 확인 없이 그대로 복사해 command/args가 맞지 않는다.
- SSE server가 실행 중인지, endpoint path가 맞는지 확인하지 않고 client 설정부터 수정한다.
- Tool 결과가 민감한 데이터를 포함하는데 transport/security boundary를 설계하지 않는다.

## 관련 자료

- [[Tistory MCP Remote SSE Article]]

## 관련 개념과 차이

- [[Orchestration]]: MCP Remote SSE는 orchestration을 구성하는 tool connectivity layer에 가깝다.
- [[Agentic Workflow]]: Agent가 외부 tool을 사용할 때 MCP server는 action surface를 제공한다.
- [[Claude Code]]: Claude 계열 client에서 MCP server를 연결하는 실무 사례와 관련된다.

## 예시

- Weather tool을 MCP server에 등록하고 SSE transport로 실행한 뒤, Claude Desktop에서 `mcp-remote`를 통해 해당 server를 호출한다.
- Remote database, internal API, workflow automation endpoint를 MCP tool로 감싸고, desktop client는 network endpoint만 바라보게 한다.
- [[E2E Test Agent]]처럼 Playwright MCP server를 browser automation action surface로 연결하고, LLM이 자연어 테스트 단계를 실제 브라우저 행동으로 변환하게 한다.

## 내 관점 / 임시 결론

MCP Remote SSE는 개인 PoC보다 팀 단위 tool server, shared integration, remote resource 접근에 더 의미가 있다. 다만 remote endpoint가 되는 순간 security와 version drift가 핵심 리스크가 되므로, 공식 문서 확인과 MCP Inspector 기반 검증을 기본 단계로 둬야 한다.

[[PyTorchKR E2E Test Agent Article]]은 MCP가 단순 정보 조회가 아니라 browser automation과 QA 실행 경계가 될 수 있음을 보여준다. 테스트 자동화에서는 read-only flow부터 시작하고 filesystem/API 확장은 별도 allowlist로 제한해야 한다.

## 열린 질문

- Remote MCP server의 인증 방식은 어떤 패턴이 현재 가장 안정적인가?
- 이 wiki의 agent/tool 실험에서 MCP server config template을 별도로 만들어야 하는가?
- SSE 방식과 최신 MCP remote transport 권장 방식 사이에 차이가 생기면 contradiction note가 필요한가?
