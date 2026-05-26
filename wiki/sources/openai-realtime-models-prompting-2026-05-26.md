---
title: OpenAI Realtime Models Prompting Guide
source_id: openai-realtime-models-prompting-2026-05-26
type: source
status: ingested
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - openai
  - realtime-api
  - prompting
  - voice-agent
related:
  - "[[Realtime API]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Human-in-the-loop]]"
original_path: raw/external/openai-realtime-models-prompting-2026-05-26.md
date_added: 2026-05-26
captured_at: 2026-05-26
accessed_at: 2026-05-26
canonical_url: https://developers.openai.com/api/docs/guides/realtime-models-prompting
content_hash: sha256:a38dcfe89a22a1133dcea2943ad68da417cc433b53e54f88f7848ab8af412a49
source_version: official_docs_snapshot_2026-05-26
domain:
  - ai
  - software
content_type: documentation
knowledge_role:
  - source
  - reference
  - tool
source_quality: official
use_for:
  - reference
  - decision
  - concept
related_pages:
  - "[[Realtime API]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Human-in-the-loop]]"
sensitivity: private
evidence_level: source-backed
---

# OpenAI Realtime Models Prompting Guide

## 출처

- 제목: Using realtime models
- 게시처: OpenAI Developers
- URL: https://developers.openai.com/api/docs/guides/realtime-models-prompting
- 캡처일: 2026-05-26

## 자료 유형

OpenAI Realtime API의 realtime model 선택과 voice agent prompting 설계를 설명하는 공식 문서다.

## Domain / 분류

- domain: ai, software
- content_type: documentation
- knowledge_role: source, reference, tool
- source_quality: official
- use_for: reference, decision, concept

## 추가일

2026-05-26

## 원본 위치

raw/external/openai-realtime-models-prompting-2026-05-26.md

## Provenance

- captured_at: 2026-05-26
- accessed_at: 2026-05-26
- canonical_url: https://developers.openai.com/api/docs/guides/realtime-models-prompting
- content_hash: sha256:a38dcfe89a22a1133dcea2943ad68da417cc433b53e54f88f7848ab8af412a49
- source_version: official_docs_snapshot_2026-05-26

## 원문 요약

이 문서는 `gpt-realtime-2`와 `gpt-realtime-1.5`를 사용하는 realtime voice agent의 prompt 설계 방식을 정리한다. `gpt-realtime-2`는 reasoning voice model로 다뤄야 하며, 책임 범위, decision point, tool calling, guardrail을 명시적으로 설계해야 한다고 설명한다.

문서는 먼저 모델 선택 기준을 제시한다. `gpt-realtime-2`는 더 강한 realtime reasoning, tool use, instruction following, 긴 context, 정확한 entity handling이 필요한 경우에 적합하고, `gpt-realtime-1.5`는 빠르고 안정적인 non-reasoning speech-to-speech 모델이 필요한 경우에 적합하다고 설명한다.

`gpt-realtime-2` 가이드는 reasoning effort, preamble, response length, tool behavior, tool failure recovery, tool availability, silence/background audio, commentary/final message channel, unclear audio, exact entity capture, literal instruction trap, language/accent separation, long-session state, migration 절차를 다룬다.

`gpt-realtime-1.5` 가이드는 speech-to-speech prompt skeleton, role/objective, personality/tone, reference pronunciation, instruction quality, unclear audio, background sound, tool selection, tool preamble, tool-level behavior, tool output formatting, responder-thinker architecture, conversation flow, state-machine style flow, dynamic `session.update`, safety escalation을 다룬다.

## 핵심 주장

- Realtime model prompt는 일반적인 "친절하게 답하라" 수준이 아니라 역할, 책임, tool policy, confirmation boundary, failure recovery, escalation을 명시해야 한다.
- `gpt-realtime-2`는 복잡한 voice workflow에서 reasoning effort를 조정할 수 있으며, 대부분의 production voice agent는 `low`에서 시작해 평가 결과에 따라 조정하는 접근이 권장된다.
- Preamble은 숨겨진 reasoning 노출이 아니라 사용자가 체감하는 짧은 작업 진행 알림이다. 오래 걸리는 tool call, multi-step reasoning, escalation 준비처럼 침묵이 UX를 해칠 때 제한적으로 사용해야 한다.
- Tool behavior는 tool type별로 달라야 한다. read-only lookup은 의도가 명확하고 필수 field가 있으면 바로 실행할 수 있지만, write action, 결제, 취소, 계정 변경, high-impact action은 결과와 영향을 요약하고 명시적 확인을 받아야 한다.
- Prompt와 실제 tool list가 어긋나면 모델이 없는 tool을 호출하거나 action이 완료된 것처럼 말할 수 있으므로, prompt와 tool schema를 동기화해야 한다.
- Voice workflow는 exact identifier 처리에 취약하다. order ID, tracking number, email, phone number, confirmation code는 하나씩 수집하고, 명확한 범위에서만 normalize하며, tool call 전에 확인해야 한다.
- Realtime voice agent의 긴 session context는 current source, authoritative source, historical/background source, policy/rule을 구분해 구조화해야 한다.
- 복잡한 conversation flow는 phase, exit criteria, state machine, 또는 `session.update` 기반 dynamic flow로 관리할 수 있다.
- 사람에게 escalation하는 조건은 prompt에 명시해야 하며, 반복 tool failure, no-match/no-input, 사용자 요청, 심한 불만, safety risk 같은 조건을 분리해야 한다.

## 위키에 반영할 개념

- [[Realtime API]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[Human-in-the-loop]]
- Voice agent prompting
- Tool-call eagerness
- Preamble
- Exact entity capture
- Dynamic conversation flow

## 내 프로젝트에 주는 시사점

- 개인 agent workflow를 설계할 때도 read-only action, write action, external side effect, irreversible action을 분리해 confirmation boundary를 명시하는 것이 좋다.
- Codex나 다른 agent prompt를 정리할 때 "가능한 tool", "불가능한 tool", "실패 시 recovery", "사용자에게 중간 진행을 말해야 하는 경우"를 별도 section으로 분리하면 prompt drift를 줄일 수 있다.
- LLM Wiki ingest 자동화도 tool availability와 confirmation boundary를 명시하는 방식으로 발전시킬 수 있다. 예를 들어 raw 저장, source summary 생성, index/log 갱신은 서로 다른 risk level의 action으로 다뤄야 한다.
- Voice interface를 실험할 경우 Realtime API는 단순 음성 입출력보다 conversation state, exact entity capture, tool orchestration, escalation 설계가 핵심이다.

## 후속 라우팅

- concept 강화: [[Agentic Workflow]], [[Orchestration]], [[Human-in-the-loop]]
- tool 강화: [[Realtime API]]
- comparison 후보: Realtime API vs text-first agent workflow
- question 후보: voice agent prompt에서 confirmation boundary를 어떻게 설계할 것인가
- idea 후보: 개인 wiki ingest assistant를 voice interface로 실험할 수 있는지 검토
- mvp 후보: 보류. 현재 실행 후보인 [[AI 트렌드 레이더 7일 PoC]]와 직접 연결되지는 않는다.
- 보류: voice agent 전용 concept page는 source가 더 쌓인 뒤 분리한다.

## 검증 필요 주장

- `gpt-realtime-2`와 `gpt-realtime-1.5`의 model availability, pricing, context window, parameter support는 시간에 따라 바뀔 수 있으므로 실제 구현 전 최신 model page와 pricing page를 다시 확인해야 한다.
- Custom Voices는 승인 고객에게만 제공된다는 문서 내 설명은 접근 조건이 바뀔 수 있으므로 실제 사용 전 계정/team 기준으로 재확인해야 한다.
- `gpt-realtime-1.5`의 common tool name, state-machine pattern, responder-thinker pattern은 예시이며, 실제 production reliability는 별도 eval로 확인해야 한다.

## 관련 페이지

- [[Realtime API]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[Human-in-the-loop]]

## 열린 질문

- 개인 LLM Wiki workflow에 voice agent를 붙인다면 어떤 action을 read-only, write, high-impact로 나눌 것인가?
- Codex prompt와 Realtime voice prompt의 tool confirmation boundary를 같은 vocabulary로 정리할 수 있는가?
- Dynamic conversation flow를 wiki ingest triage, source summary 작성, index/log 갱신 단계에 적용할 가치가 있는가?

## 메모

OpenAI 공식 문서이므로 Realtime API 관련 구현 판단의 기준 자료로 사용할 수 있다. 다만 모델명, 가격, availability는 변동 가능성이 높아 실제 API 구현 직전에는 공식 model/pricing 문서를 다시 확인한다.
