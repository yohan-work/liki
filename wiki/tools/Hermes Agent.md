---
title: Hermes Agent
type: tool
status: active
created: 2026-05-22
updated: 2026-05-26
tags:
  - hermes-agent
  - agents
  - nousresearch
  - skills
  - mcp
  - memory
  - automation
related:
  - "[[WikiDocs Hermes Agent Guide]]"
  - "[[Blake Crosley Hermes Agent Guide]]"
  - "[[YOZM Hermes Agent Article]]"
  - "[[Hermes Agent Official Site]]"
  - "[[Goddaehee Hermes Agent Start Article]]"
  - "[[Hermes 4.3 36B]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
  - "[[Orchestration]]"
  - "[[MCP Remote SSE]]"
sensitivity: private
evidence_level: source-backed
---

# Hermes Agent

## 무엇인가

Hermes Agent는 NousResearch가 만든 오픈소스 AI 에이전트 프레임워크로 소개된다. [[Hermes Agent Official Site]]는 Hermes Agent를 MIT licensed open-source agent이자 프로젝트를 학습하고 skill을 만들며 messaging account를 통해 접근할 수 있는 persistent personal agent로 제시한다. 캡처 시점의 공식 사이트 footer 기준 버전은 `v0.14.0`이다. [[WikiDocs Hermes Agent Guide]]는 Hermes Agent를 설치, CLI, 모델 연결, 도구, 메모리, 컨텍스트, 스킬, MCP, 메시징 게이트웨이, 반복 실행, 보안, 실전 프로젝트를 포함하는 agent runtime으로 다룬다. [[Blake Crosley Hermes Agent Guide]]는 Hermes를 채팅 래퍼가 아니라 CLI, messaging gateway, tool execution, persistent memory, skill, cron, MCP, profile을 묶은 agent runtime으로 더 상세히 설명한다. [[YOZM Hermes Agent Article]]과 [[Goddaehee Hermes Agent Start Article]]은 Hermes의 self-improving을 모델 재학습보다 skill, memory, profile, 반복 절차 축적을 통한 workflow adaptation으로 해석한다.

## 사용 사례

- 개인 서버나 로컬 환경에서 오래 실행되는 AI assistant 후보로 검토한다.
- CLI, 메시징 앱, 도구 시스템, 메모리, 스킬을 묶은 개인 agent runtime 후보로 평가한다.
- [[Skills]], [[MCP Remote SSE]], command allowlist, profile isolation 같은 agent 운영 패턴을 연구할 때 참고한다.
- `SOUL.md`와 `AGENTS.md`의 역할 분리, persistent memory, session search, agent cron 같은 개인 AI 운영체제 설계 요소를 비교한다.
- Self-improving agent가 실제로는 반복 절차를 skill과 memory로 축적하는 workflow adaptation인지 평가한다.
- [[Claude Code]]나 Codex 중심 workflow와 비교해, coding assistant가 아닌 persistent personal agent 쪽의 설계를 살펴본다.

## 강점

- WikiDocs 가이드 기준으로 설치부터 실전 프로젝트까지 다루는 범위가 넓다.
- 메모리, 성격/컨텍스트, 스킬, MCP, 메시징 게이트웨이, 반복 실행, 보안이 한 agent 운영 체계 안에 들어간다.
- `AGENTS.md`, `MEMORY.md`, `USER.md`, `SOUL.md` 같은 파일 기반 운영 개념이 LLM Wiki의 장기 지식 운영과 비교하기 좋다.
- 개인 PoC 관점에서 뉴스 브리핑, 코드 분석, 팀 봇, 홈 인텔리전스 허브 같은 적용 사례를 제공한다.
- Blake Crosley 가이드는 provider 인증, 설정 계층, tool/toolset, skill, gateway/cron/profile을 Hermes 숙련도의 핵심 축으로 정리한다.
- YOZM 글은 self-improving 구현을 skill 자동 생성, skill 검색/호출, memory 갱신, 사용자 모델링으로 설명하며, 대중적 이해를 돕는다.
- 같은 대화 루프를 CLI, gateway, ACP, batch, API server가 공유한다는 설명은 agent runtime의 entrypoint 설계를 이해하는 데 유용하다.
- 공식 사이트는 Telegram, Discord, Slack, WhatsApp, Signal, Email, CLI entrypoint와 persistent memory, auto-generated skills, 자연어 cron, isolated subagents, sandbox, browser/web/multimodal control을 핵심 기능으로 제시한다.
- Goddaehee 글은 설치, 설정, provider 전환, 비용, 보안, IDE assistant와의 차이를 실무 체크리스트로 확장한다.
- Skill file이 markdown으로 남는다는 설명은 self-learning 결과를 사람이 inspect하고 수정할 수 있는지 평가하는 기준이 된다.

## 한계

- 공식 사이트는 marketing-level landing page이므로, 기능 동작 여부와 세부 구현은 GitHub repository, docs, release note로 검증해야 한다.
- 원 자료 자체가 AI 활용 집필 안내를 포함하므로 세부 기능, 비교, benchmark 주장은 신뢰도를 낮게 두고 검증해야 한다.
- 메시징 게이트웨이, MCP server 노출, command allowlist, cron task는 잘못 구성하면 민감한 action surface가 될 수 있다.
- YOZM 글이 언급한 skill poisoning, MCP server sandbox, credential exposure, GDPR 리스크는 공식 문서와 현재 release 기준으로 재검증해야 한다.
- Goddaehee 글이 언급한 미인증 RCE 이슈, token overhead, provider subscription policy, release cadence는 캡처 시점 주장으로 분리하고 현재 상태를 다시 확인해야 한다.
- Claude Code나 Cursor처럼 IDE에 밀착된 code completion/workspace editing 경험을 제공하는 도구로 가정하면 안 된다. Hermes는 persistent server agent와 반복 자동화 runtime 후보에 더 가깝다.
- [[Hermes 4.3 36B]]와 이름은 비슷하지만 역할이 다르다. Hermes 4.3 36B는 모델 후보이고, Hermes Agent는 agent framework 후보로 분리해서 평가한다.

## 검토 체크포인트

- Provider 인증 경로: API key, OAuth, custom endpoint 중 어떤 흐름을 쓸지 분리한다.
- 설정 경계: `config.yaml`, `.env`, `auth.json`, `SOUL.md`, `AGENTS.md`, memory, skills가 각각 무엇을 책임지는지 확인한다.
- 실행 경계: CLI-only로 시작하고 gateway, cron, MCP, browser/tool execution은 별도 sandbox에서 단계적으로 켠다.
- 보안 경계: command allowlist, profile isolation, credential storage, log redaction, messaging platform allowlist를 먼저 점검한다.
- 공식 버전과 설치 스크립트: 실제 평가 시점의 release, `install.sh`, dependency, config path, 권한 요청을 확인한다.
- 운영 비용: provider별 API key/OAuth 정책, fixed context overhead, cron 실행 빈도, gateway 상시 실행 비용을 분리해 본다.

## 관련 워크플로

- 개인 AI 운영체제 후보 검토.
- 장기 memory와 skill 기반 agent 운영 실험.
- Messaging gateway 기반 human-in-the-loop agent PoC.
- MCP/tool server와 command allowlist를 포함한 안전한 action boundary 설계.

## 관련 개념

- [[Agentic Workflow]]
- [[Skills]]
- [[Orchestration]]
- [[MCP Remote SSE]]

## 관련 자료

- [[WikiDocs Hermes Agent Guide]]
- [[Blake Crosley Hermes Agent Guide]]
- [[YOZM Hermes Agent Article]]
- [[Hermes Agent Official Site]]
- [[Goddaehee Hermes Agent Start Article]]

## 메모

다음 단계는 Hermes Agent GitHub repository와 release note를 별도 source로 ingest하고, CLI-only 설치부터 작은 sandbox에서 실행/보안 경계를 확인하는 것이다.
