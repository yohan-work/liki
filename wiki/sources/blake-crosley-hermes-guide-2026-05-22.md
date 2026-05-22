---
title: Blake Crosley Hermes Agent Guide
source_id: blake-crosley-hermes-guide-2026-05-22
type: source
status: ingested
created: 2026-05-22
updated: 2026-05-22
tags:
  - source
  - hermes-agent
  - agents
  - skills
  - mcp
  - memory
  - gateway
  - security
related:
  - "[[Hermes Agent]]"
  - "[[WikiDocs Hermes Agent Guide]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
  - "[[Orchestration]]"
  - "[[MCP Remote SSE]]"
domain:
  - ai
  - software
  - personal-ops
content_type: article
knowledge_role:
  - source
  - tool
  - reference
  - comparison
source_quality: practitioner
use_for:
  - reference
  - inspiration
  - decision
related_pages:
  - "[[Hermes Agent]]"
  - "[[WikiDocs Hermes Agent Guide]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
  - "[[Orchestration]]"
  - "[[MCP Remote SSE]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/2026-05-22-blake-crosley-hermes-guide.html
source_url: "https://blakecrosley.com/ko/guides/hermes"
date_added: 2026-05-22
captured_at: 2026-05-22
accessed_at: 2026-05-22
canonical_url: "https://blakecrosley.com/ko/guides/hermes"
content_hash: dfef56ba9d126f54310a62491732eeb508ae80edaa56e1972522caa9046d2dea
source_version: "Korean Hermes Agent guide page, article metadata datePublished 2026-05-22 and dateModified 2026-05-15, captured as HTML on 2026-05-22"
---

# Blake Crosley Hermes Agent Guide

## 출처

- 제목: Hermes Agent: 실무자용 참고서 (2026)
- 저자: Blake Crosley
- URL: https://blakecrosley.com/ko/guides/hermes
- 페이지 metadata: datePublished 2026-05-22, dateModified 2026-05-15
- 본문 표시: words 10321, read_time 52m, updated 2026-05-15 10:29
- 주요 참조: Hermes Agent 공식 문서와 NousResearch/hermes-agent GitHub source tree

## 자료 유형

Hermes Agent v0.13 기준 실무자용 한국어 레퍼런스 가이드다. 단순 소개보다 설치, 인증, 설정, CLI, slash command, tools/toolsets, multi-agent Kanban, skills, memory, SOUL.md, messaging gateway, cron, MCP, context compression, 보안, 아키텍처, troubleshooting, FAQ, changelog를 폭넓게 정리한다.

## Domain / 분류

- domain: ai, software, personal-ops
- content_type: article
- knowledge_role: source, tool, reference, comparison
- source_quality: practitioner
- use_for: reference, inspiration, decision

## 추가일

2026-05-22

## 원본 위치

raw/external/2026-05-22-blake-crosley-hermes-guide.html

## Provenance

- captured_at: 2026-05-22
- accessed_at: 2026-05-22
- canonical_url: https://blakecrosley.com/ko/guides/hermes
- content_hash: dfef56ba9d126f54310a62491732eeb508ae80edaa56e1972522caa9046d2dea
- source_version: Korean Hermes Agent guide page, article metadata datePublished 2026-05-22 and dateModified 2026-05-15, captured as HTML on 2026-05-22

## 원문 요약

이 글은 Hermes Agent를 Nous Research가 만든 오픈소스 자기 개선형 AI 에이전트로 설명한다. 글의 핵심은 Hermes가 단순 채팅 래퍼가 아니라 CLI, 메시징 gateway, 파일 시스템, sandboxed command execution, web scraping, subagent, cron task, skill 생성, persistent memory를 결합한 agent runtime이라는 점이다.

가이드는 신규 사용자가 가장 어려워하는 영역을 provider 인증으로 보고, 세 가지 인증 경로를 구분한다. 첫째는 `.env`의 API 키, 둘째는 `hermes model` 또는 `hermes auth`를 통한 OAuth, 셋째는 `config.yaml`의 custom endpoint다. OpenAI-compatible endpoint라면 Ollama, vLLM, SGLang, llama.cpp, LM Studio, LiteLLM proxy, cloud provider, self-hosted server를 연결할 수 있다고 설명한다.

운영 모델은 다섯 축으로 정리된다. provider resolution, `config.yaml`/`.env`/`auth.json`/`SOUL.md`/`AGENTS.md` 설정 계층, tool과 toolset 권한, agent가 생성하고 발전시키는 skill system, gateway/cron/profile 기반 지속 실행이다. 글은 모든 진입점이 `AIAgent.run_conversation()` 대화 루프를 공유하고, prompt building, runtime provider selection, API mode 선택, tool dispatch, session 저장으로 이어진다고 설명한다.

v0.13 Tenacity release의 변화도 크게 다룬다. Multi-agent Kanban, `/goal` 기반 Ralph-loop locking, `video_analyze`, xAI Custom Voices TTS, i18n, Google Chat gateway, provider plugin architecture, session auto-resume, Checkpoints v2, P0 security issue closure가 주요 항목으로 제시된다.

## 핵심 주장

- Hermes Agent는 CLI와 messaging gateway를 공유 대화 루프 위에서 실행하는 agent runtime이다.
- Hermes는 OpenAI-compatible provider와 custom endpoint를 폭넓게 지원하며, provider 인증 방식은 API key, OAuth, custom endpoint로 나뉜다.
- `~/.hermes/` 또는 `$HERMES_HOME` 아래의 `config.yaml`, `.env`, `auth.json`, `SOUL.md`, `memories/`, `skills/`, `cron/`, `sessions/`, `logs/` 구조가 시스템의 운영 단위다.
- `SOUL.md`는 전역 identity/personality이고, `AGENTS.md`는 프로젝트별 규칙과 workflow를 담는 것으로 구분된다.
- Hermes skill은 `SKILL.md` 기반으로 점진적 공개, 조건부 활성화, hub 설치, agent 관리, background curator, 보안 스캔을 포함한다.
- Persistent memory는 `MEMORY.md`와 `USER.md`, session search, 외부 memory provider로 구성된다고 설명한다.
- Messaging gateway는 Telegram, Discord, Slack, WhatsApp, Signal, Email, Google Chat 등 다수 플랫폼을 장기 실행 gateway로 연결한다.
- Cron job은 shell command가 아니라 prompt와 optional skill을 가진 agent task로 실행된다고 설명한다.
- v0.13은 multi-agent Kanban, session auto-resume, Checkpoints v2, security hardening을 강조한다.

## 위키에 반영할 개념

- [[Hermes Agent]]
- [[Agentic Workflow]]
- [[Skills]]
- [[Orchestration]]
- [[MCP Remote SSE]]
- Provider resolution
- Persistent memory
- SOUL.md vs AGENTS.md
- Messaging gateway
- Agent cron
- Multi-agent Kanban
- Command allowlist
- Checkpoints

## 내 프로젝트에 주는 시사점

- 이 글은 [[Hermes Agent]]를 단순 도구 후보가 아니라 개인 AI 운영체제의 reference architecture 후보로 볼 근거를 제공한다.
- LLM Wiki의 `AGENTS.md`, skills, raw/wiki 분리, lint/log 운영은 Hermes의 `SOUL.md`, `AGENTS.md`, memory, skills, logs와 비교할 수 있다. 특히 “전역 identity와 프로젝트별 지침 분리”는 현재 wiki 운영 규칙을 장기적으로 정리할 때 유용하다.
- Messaging gateway와 cron은 [[Personal Operating System]]이나 [[Basalt Project]]에서 반복 업무 자동화와 human-in-the-loop 알림을 설계할 때 참고할 만하다.
- 다만 action surface가 넓기 때문에 보안, allowlist, profile isolation, credential handling을 도입 전 우선 검증해야 한다.

## 검증 필요 주장

- 지원 provider 수, messaging platform 수, v0.13 기능, 보안 이슈 처리 상태는 Hermes Agent 공식 문서와 GitHub release 기준으로 다시 확인해야 한다.
- 로컬 LLM, custom endpoint, auxiliary model fallback의 실제 동작은 환경별 설정과 모델에 따라 달라질 수 있다.
- Skill hub, background curator, self-improving skill claim은 실제 설치 후 동작 범위와 안전장치를 확인해야 한다.
- Messaging gateway, cron, MCP server, browser/cloud metadata 접근은 민감한 action surface가 되므로 인증, 허용 목록, 로그 redaction, sandbox 경계를 검증해야 한다.
- 이 글은 매우 상세하지만 공식 문서가 아니라 practitioner guide이므로 도입 결정의 단독 근거로 쓰지 않는다.

## 관련 페이지

- [[Hermes Agent]]
- [[WikiDocs Hermes Agent Guide]]
- [[Agentic Workflow]]
- [[Skills]]
- [[Orchestration]]
- [[MCP Remote SSE]]

## 열린 질문

- LLM Wiki의 장기 기억은 Hermes의 `MEMORY.md`/`USER.md`처럼 짧은 prompt memory와 source-backed wiki layer로 분리할 수 있는가?
- Hermes Agent를 PoC로 검토한다면 CLI-only, gateway, cron, MCP 중 어떤 entrypoint를 먼저 검증해야 하는가?
- SOUL.md와 AGENTS.md 분리는 Codex/Claude/Cursor를 동시에 쓰는 개인 workflow에서 어떤 규칙으로 번역해야 하는가?
- Agent cron을 개인 운영에 붙일 때 어떤 작업은 반드시 human approval을 거쳐야 하는가?

## 메모

이 자료는 앞서 ingest한 [[WikiDocs Hermes Agent Guide]]보다 훨씬 상세하다. 다음 단계는 공식 문서와 GitHub repository를 직접 source로 ingest해 practitioner guide의 주장과 대조하는 것이다.
