---
title: Anthropic Claude Opus 4.8 Announcement
source_id: anthropic-claude-opus-4-8-2026-05-28
type: source
status: active
created: 2026-05-29
updated: 2026-05-29
tags:
  - claude
  - anthropic
  - llm
  - coding-agent
related:
  - "[[Claude Opus 4.8]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
original_path: raw/articles/anthropic-claude-opus-4-8-2026-05-28.html
date_added: 2026-05-29
captured_at: 2026-05-29
accessed_at: 2026-05-29
canonical_url: https://www.anthropic.com/news/claude-opus-4-8
content_hash: b1225b90ec50fa7a24e16d4ad34567af9448b95c6ad12a486f77398155a8e363
source_version: "published 2026-05-28"
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - tool
  - reference
source_quality: official
use_for:
  - reference
  - decision
  - concept
related_pages:
  - "[[Claude Opus 4.8]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# Anthropic Claude Opus 4.8 Announcement

## 출처

Anthropic 공식 뉴스룸의 제품 발표 글이다.

## 자료 유형

공식 제품 발표. 새 모델, Claude Code 기능, claude.ai effort control, Messages API 변경, 가격과 availability를 함께 공지한다.

## Domain / 분류

- domain: ai, software
- content_type: article
- knowledge_role: source, tool, reference
- source_quality: official
- use_for: reference, decision, concept

## 추가일

2026-05-29

## 원본 위치

- canonical_url: https://www.anthropic.com/news/claude-opus-4-8
- raw snapshot: `raw/articles/anthropic-claude-opus-4-8-2026-05-28.html`

## Provenance

- captured_at: 2026-05-29
- accessed_at: 2026-05-29
- canonical_url: https://www.anthropic.com/news/claude-opus-4-8
- content_hash: b1225b90ec50fa7a24e16d4ad34567af9448b95c6ad12a486f77398155a8e363
- source_version: published 2026-05-28

## 원문 요약

Anthropic은 Claude Opus 4.8을 Opus 4.7의 후속 모델로 발표했다. 발표문은 코딩, agentic skill, reasoning, 지식 작업 평가에서 개선이 있다고 주장하며, 특히 agent 작업에서 판단력, 불확실성 표시, unsupported claim 억제, tool use 효율성을 강조한다.

같은 발표에서 Claude Code의 dynamic workflows research preview, claude.ai와 Cowork의 effort control, Messages API에서 `messages` 배열 안의 system entry 허용을 함께 공지했다. Opus 4.8은 기본 high effort로 제공되며, Claude Code에서는 더 어려운 작업과 장시간 비동기 workflow에 `extra` 또는 `xhigh` effort 사용을 권장한다고 설명한다.

## 핵심 주장

- Claude Opus 4.8은 Opus 4.7 대비 여러 평가와 agentic task에서 개선되었다고 Anthropic은 주장한다.
- Anthropic은 Opus 4.8이 이전 모델보다 불확실성을 더 잘 드러내고, 코드 결함을 묵과할 가능성이 낮아졌다고 설명한다.
- Claude Code의 dynamic workflows는 하나의 세션에서 계획, 다수의 병렬 subagent 실행, 결과 검증을 수행해 대규모 코드베이스 작업을 처리하는 research preview 기능으로 소개된다.
- claude.ai와 Cowork의 effort control은 응답 품질, 속도, rate limit 사용량 사이의 tradeoff를 사용자가 조절하게 하는 UI 기능이다.
- Messages API는 agent 실행 중 권한, token budget, environment context 같은 system instruction을 중간에 갱신하는 harness pattern을 지원한다고 발표했다.
- 일반 사용 가격은 Opus 4.7과 동일하다고 발표했지만, fast mode 가격은 별도 단가로 공지했다.

## 위키에 반영할 개념

- [[Claude Opus 4.8]]: 모델/도구 페이지로 새로 기록한다.
- [[Claude Code]]: dynamic workflows와 effort level이 coding agent 운영에서 중요한 조절면이라는 점을 추가한다.
- [[Agentic Workflow]]: 불확실성 표시, 병렬 subagent, 결과 검증을 agent workflow의 품질 기준으로 연결한다.
- [[Orchestration]]: 실행 중 system instruction 갱신, token budget, permission, environment context를 orchestration state로 다루는 관점을 추가한다.

## 내 프로젝트에 주는 시사점

LLM Wiki와 Codex 운영 관점에서는 모델 성능 자체보다 "agent가 언제 더 생각해야 하는가", "언제 병렬 subagent를 쓸 수 있는가", "실행 중 권한과 budget을 어떻게 갱신할 것인가"가 더 재사용 가능한 지식이다. Opus 4.8 발표는 agent harness가 단순 prompt wrapper를 넘어 effort, permission, context, verification을 조율하는 runtime으로 이동하고 있음을 보여주는 공식 자료로 쓸 수 있다.

## 후속 라우팅

- concept 강화: [[Agentic Workflow]], [[Orchestration]]
- tool 강화: [[Claude Opus 4.8]], [[Claude Code]]
- comparison 후보: Claude Code dynamic workflows vs Codex Harness
- question 후보: 대규모 agent workflow에서 effort level과 token budget을 어떻게 정할 것인가?
- idea 후보: 없음
- mvp 후보: 없음
- 보류: Claude Opus 4.8 System Card 별도 ingest

## 검증 필요 주장

- Anthropic이 제시한 benchmark 수치와 tester quote는 공식 발표의 주장으로 보존하되, 실제 개인 workflow 성능으로 일반화하려면 System Card와 독립 평가를 별도로 확인해야 한다.
- dynamic workflows의 실제 사용 가능 범위, 요금, Enterprise/Team/Max plan별 조건은 Claude Code 문서와 계정 상태로 재확인해야 한다.
- Messages API의 system entry 지원은 실제 SDK/API 문서와 prompt cache 동작 조건을 확인해야 한다.

## 관련 페이지

- [[Claude Opus 4.8]]
- [[Claude Code]]
- [[Agentic Workflow]]
- [[Orchestration]]

## 열린 질문

- Opus 4.8의 effort setting은 개인 wiki maintenance나 코드 변경 작업에서 어떤 기준으로 선택해야 하는가?
- Claude Code dynamic workflows는 Codex의 thread/turn/item 기반 harness와 어떤 점에서 같고 다른가?
- 실행 중 system instruction 갱신은 agent 안전성과 audit log에 어떤 기록 단위를 요구하는가?

## 메모

발표 글은 Opus 4.8 System Card와 dynamic workflows 별도 게시물을 연결하므로, 모델 안전성/benchmark 또는 Claude Code 기능을 깊게 다룰 때는 별도 source로 ingest하는 편이 낫다.
