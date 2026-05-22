---
title: WikiDocs Hermes Agent Guide
source_id: wikidocs-hermes-agent-guide-2026-05-22
type: source
status: ingested
created: 2026-05-22
updated: 2026-05-22
tags:
  - source
  - wikidocs
  - hermes-agent
  - agents
  - skills
  - mcp
  - automation
related:
  - "[[Hermes Agent]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
  - "[[Orchestration]]"
  - "[[MCP Remote SSE]]"
domain:
  - ai
  - software
  - personal-ops
content_type: book
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - reference
  - inspiration
  - decision
related_pages:
  - "[[Hermes Agent]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
  - "[[Orchestration]]"
  - "[[MCP Remote SSE]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/2026-05-22-wikidocs-hermes-agent-guide.md
source_url: "https://wikidocs.net/book/19414"
date_added: 2026-05-22
captured_at: 2026-05-22
accessed_at: 2026-05-22
canonical_url: "https://wikidocs.net/book/19414"
content_hash: 18d71a045a6497138f115e58897a1abde6531a75d230963bcc9bd76855c9c59a
source_version: "WikiDocs book landing page, last edited 2026-05-19 00:10, browser text extraction captured on 2026-05-22"
---

# WikiDocs Hermes Agent Guide

## 출처

- 제목: Hermes Agent: 성장하는 AI 에이전트 실전 가이드
- 게시처: WikiDocs
- 저자 표시: 채찍피티
- URL: https://wikidocs.net/book/19414
- 페이지 표시 기준 최종 편집일시: 2026년 5월 19일 12:10 오전
- 페이지 표시 기준 추천 수: 48
- 참고 링크: Hermes Agent 공식 사이트, GitHub 저장소, 공식 문서

## 자료 유형

NousResearch의 Hermes Agent를 한국어로 소개하는 WikiDocs 실전 가이드의 책 landing page다. 설치, CLI, 도구, 메모리, 컨텍스트, 스킬, MCP, 메시징 게이트웨이, 반복 실행, 보안, 아키텍처, 실전 프로젝트를 다루는 목차와 책의 성격을 제공한다.

## Domain / 분류

- domain: ai, software, personal-ops
- content_type: book
- knowledge_role: source, tool, reference
- source_quality: practitioner
- use_for: reference, inspiration, decision

## 추가일

2026-05-22

## 원본 위치

raw/external/2026-05-22-wikidocs-hermes-agent-guide.md

## Provenance

- captured_at: 2026-05-22
- accessed_at: 2026-05-22
- canonical_url: https://wikidocs.net/book/19414
- content_hash: 18d71a045a6497138f115e58897a1abde6531a75d230963bcc9bd76855c9c59a
- source_version: WikiDocs book landing page, last edited 2026-05-19 00:10, browser text extraction captured on 2026-05-22
- capture_note: 직접 `curl` 접근은 Cloudflare challenge HTML을 반환했기 때문에, raw snapshot은 브라우저 텍스트 추출로 확인된 landing page metadata와 목차 수준 정보를 보존했다.

## 원문 요약

이 WikiDocs 책은 NousResearch가 만든 오픈소스 AI 에이전트 프레임워크 Hermes Agent를 한국어로 소개하는 실전 가이드다. 책 소개는 공식 문서의 단순 번역이 아니라 실습 경험을 전달하는 자료라고 설명한다. 또한 로컬 LLM과 클라우드 API의 장단점, 설치와 설정, CLI 사용, 모델 라우팅, 도구 시스템, 메모리, 퍼스널리티/컨텍스트, 스킬, MCP, 메시징 게이트웨이, 크론 기반 반복 실행, 보안, 아키텍처, 실전 프로젝트를 다룬다고 제시한다.

목차상 Hermes Agent는 단일 채팅 도구라기보다 로컬/클라우드 모델, 도구, 메모리, 스킬, 외부 메시징 플랫폼, MCP, 보안 경계, 반복 실행을 묶는 agent runtime으로 다뤄진다. 특히 `MEMORY.md`, `USER.md`, `SOUL.md`, `AGENTS.md`, Skills Hub, background curator, command allowlist, profile isolation 같은 운영 단위가 강조된다.

## 핵심 주장

- Hermes Agent는 NousResearch의 오픈소스 AI 에이전트 프레임워크로 소개된다.
- 이 책은 Hermes Agent를 설치부터 실전 프로젝트까지 다루는 한국어 실전 가이드라고 설명한다.
- 책은 로컬 LLM과 클라우드 API를 함께 다루고, 혼합 전략을 안내한다고 한다.
- Hermes Agent의 핵심 운영 요소로 도구 시스템, 메모리, 성격/컨텍스트, 스킬, MCP, 메시징 게이트웨이, 반복 실행, 보안을 제시한다.
- OpenClaw, NemoClaw, Claude Code 등 여러 AI 에이전트와의 비교를 포함한다고 설명한다.
- 책 자체에 AI 활용 집필 안내가 있으며, 일부 서술에 오류가 있을 수 있다고 고지한다.

## 위키에 반영할 개념

- [[Hermes Agent]]
- [[Agentic Workflow]]
- [[Skills]]
- [[Orchestration]]
- [[MCP Remote SSE]]
- Persistent memory
- Messaging gateway
- Command allowlist
- Self-evolving agent

## 내 프로젝트에 주는 시사점

- [[Hermes Agent]]는 개인 AI 운영체제나 agent runtime 후보로 따로 추적할 가치가 있다. 기존 [[Hermes 4.3 36B]]는 모델이고, Hermes Agent는 agent framework라 별도 tool page로 분리한다.
- 이 자료는 LLM Wiki의 `AGENTS.md`, skills, memory, source-backed 운영과 겹치는 개념이 많다. 특히 에이전트가 장기 기억, 스킬, 외부 메시징, 반복 실행을 결합하는 방식은 [[Personal Operating System]]과 [[Basalt Project]]의 참고 사례가 될 수 있다.
- 다만 landing page 수준 자료만으로는 기능 동작 여부나 보안 모델의 구체성을 판단할 수 없다. 실제 도입 전에는 공식 문서, GitHub repository, 로컬 설치 검증이 필요하다.

## 검증 필요 주장

- 책의 기능 설명과 비교 분석은 AI-assisted writing notice가 있는 2차 자료이므로 공식 문서와 GitHub repository 기준으로 확인해야 한다.
- OpenClaw, NemoClaw, Claude Code 등 6종 비교의 기준과 결론은 책 본문 각 장을 확인하기 전까지 채택하지 않는다.
- 로컬 LLM benchmark나 실제 테스트 결과는 책 부록 또는 원 실험 조건을 직접 확인해야 한다.
- Hermes Agent의 보안 모델, command allowlist, profile isolation, container isolation은 실제 설정과 코드 수준 검증이 필요하다.
- 메시징 게이트웨이와 MCP server 노출은 민감한 action surface를 만들 수 있으므로 사용 전 인증, 권한, 로그 정책을 따로 검토해야 한다.

## 관련 페이지

- [[Hermes Agent]]
- [[Agentic Workflow]]
- [[Skills]]
- [[Orchestration]]
- [[MCP Remote SSE]]

## 열린 질문

- Hermes Agent를 개인 PoC로 검토한다면 CLI, memory, skills, messaging gateway 중 무엇부터 검증해야 하는가?
- Hermes Agent의 skill 구조는 Codex/Claude Code skill 운영과 얼마나 호환 가능한가?
- LLM Wiki의 장기 지식 운영과 Hermes Agent의 memory system을 연결할 수 있는가?
- Messaging gateway를 개인 운영에 붙일 때 보안과 승인 경계를 어떻게 설계해야 하는가?

## 메모

이 자료는 공식 문서가 아니라 WikiDocs 실전 가이드다. 도입 판단에는 Hermes Agent 공식 문서와 GitHub repository를 별도 source로 ingest하는 것이 좋다.
