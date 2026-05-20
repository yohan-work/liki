---
title: Tistory MCP Remote SSE Article
source_id: tistory-mcp-remote-sse-2025-04-03
type: source
status: ingested
created: 2026-05-20
updated: 2026-05-20
tags:
  - source
  - mcp
  - remote-sse
  - agent-tools
related:
  - "[[MCP Remote SSE]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Claude Code]]"
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - concept
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[MCP Remote SSE]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Claude Code]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/2025-04-03-tistory-mcp-remote-sse.md
source_url: "https://hyeong9647.tistory.com/entry/MCP-Remote-SSE-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0"
date_added: 2026-05-20
---

# Tistory MCP Remote SSE Article

## 출처

- 제목: "MCP SSE Remote사용하기"
- 게시처: Tistory / 범골 인더스트리
- 작성자: 킹형
- 발행일: 2025-04-03
- URL: https://hyeong9647.tistory.com/entry/MCP-Remote-SSE-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

## 자료 유형

기술 블로그 글 / 구현 가이드.

## Domain / 분류

- domain: ai, software
- content_type: article
- knowledge_role: source, concept, reference
- source_quality: practitioner
- use_for: concept, reference, decision

## 추가일

2026-05-20

## 원본 위치

raw/external/2025-04-03-tistory-mcp-remote-sse.md

## 원문 요약

이 글은 [[MCP Remote SSE]] 구성을 통해 MCP 서버를 로컬 STDIO 방식이 아니라 원격 서버와 SSE(Server-Sent Events) transport로 실행하는 방법을 설명한다. 예시는 `FastMCP`로 간단한 weather tool을 정의하고 `mcp.run(transport="sse")`로 서버를 실행하는 흐름을 보여준다.

글은 서버 동작 확인을 위해 MCP Inspector를 사용하는 절차를 제시하고, Claude Desktop에서 원격 MCP 서버를 연결하기 위해 `mcp-remote`를 설치한 뒤 `claude_desktop_config.json`에 server entry를 등록하는 방식을 설명한다. Windows에서는 `cmd /c npx ...` 형태로 실행 command를 조정해야 한다고 정리한다.

## 핵심 주장

- MCP는 LLM 애플리케이션에 context를 제공하는 방식을 표준화하는 open protocol로 설명된다.
- MCP는 STDIO 방식으로도 운영할 수 있지만, 확장성과 유지보수를 고려하면 client-server 구조가 유용할 수 있다.
- `FastMCP`를 사용하면 Python 코드로 MCP tool을 정의하고 SSE transport로 서버를 실행할 수 있다.
- MCP Inspector는 MCP server 연결과 tool 동작 확인에 사용할 수 있다.
- Claude Desktop은 `claude_desktop_config.json`을 통해 `mcp-remote` 기반 remote MCP server를 등록할 수 있다.
- Windows 환경에서는 Claude Desktop 설정에서 command/args 구성이 Linux/Mac과 달라질 수 있다.

## 위키에 반영할 개념

- [[MCP Remote SSE]]
- Model Context Protocol
- SSE transport
- `FastMCP`
- `mcp-remote`
- MCP Inspector
- Claude Desktop MCP configuration

## 내 프로젝트에 주는 시사점

- Agent workflow에서 tool server를 로컬 프로세스가 아니라 remote SSE endpoint로 분리하는 패턴을 기록할 수 있다.
- 개인 PoC에서는 MCP Inspector 같은 검증 도구를 먼저 사용하고, 그 다음 Claude Desktop 또는 agent client에 연결하는 순서가 안전하다.
- LLM Wiki가 MCP 기반 tool integration 사례를 모을 경우, transport, auth, deployment, client config를 별도 필드로 정리하면 재사용성이 높다.

## 검증 필요 주장

- `mcp-remote`와 Claude Desktop config 형식은 버전 변화 가능성이 높으므로 실제 사용 전 최신 공식 문서를 확인해야 한다.
- 원문 Windows 예시의 `args` 구성은 환경에 따라 `mcp-remote` 명령이 누락되거나 달라질 수 있으므로 그대로 복사하기 전에 검증이 필요하다.
- Remote SSE endpoint를 공개할 경우 인증, 접근 제어, secret exposure, network security를 별도로 설계해야 한다.

## 관련 페이지

- [[MCP Remote SSE]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[Claude Code]]

## 열린 질문

- 이 위키에서 MCP transport별 패턴을 `STDIO`, `SSE`, `Streamable HTTP`처럼 별도 페이지로 나눌 필요가 있는가?
- 개인 agent workflow에서는 remote MCP server를 언제 local STDIO보다 선호해야 하는가?
- MCP server를 외부 네트워크에 둘 때 최소 security checklist는 무엇이어야 하는가?

## 메모

실행 명령과 설정 파일 형식은 MCP ecosystem 변화에 취약하다. 이 글은 구현 방향을 잡는 참고자료로 쓰고, 실제 설정은 공식 문서와 현재 설치 버전 기준으로 확인한다.
