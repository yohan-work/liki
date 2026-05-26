---
title: Realtime API
type: tool
status: active
created: 2026-05-26
updated: 2026-05-26
tags:
  - openai
  - realtime-api
  - voice-agent
  - speech-to-speech
related:
  - "[[OpenAI Realtime Models Prompting Guide]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Human-in-the-loop]]"
sensitivity: private
evidence_level: source-backed
---

# Realtime API

## 무엇인가

Realtime API는 낮은 지연 시간의 음성 기반 LLM 경험을 만들기 위한 OpenAI API 영역이다. 현재 위키에서는 voice agent가 사용자 음성을 듣고, 필요한 경우 tool을 호출하고, 짧은 중간 응답과 최종 응답을 구분하며, 사람에게 escalation할 수 있는 workflow를 설계하는 도구로 다룬다.

## 사용 사례

- Speech-to-speech voice agent
- 고객 지원, 예약, 계정 조회처럼 실시간 대화와 tool call이 함께 필요한 workflow
- 긴 session context를 유지해야 하는 상담형 assistant
- 사람이 개입해야 하는 조건을 명시한 human handoff workflow

## 강점

- [[OpenAI Realtime Models Prompting Guide]]는 `gpt-realtime-2`를 reasoning voice agent로 prompt해야 한다고 설명한다.
- Tool calling, preamble, commentary/final message channel, exact entity capture, long-session context를 prompt 차원에서 세밀하게 제어할 수 있다.
- `session.update` 기반 dynamic conversation flow를 사용하면 현재 phase에 필요한 prompt와 tool만 노출해 복잡도를 낮출 수 있다.

## 한계

- Voice input은 email, order ID, phone number 같은 exact identifier 처리에서 오류가 생기기 쉽다.
- Prompt에 적힌 tool과 실제 제공된 tool list가 어긋나면 잘못된 tool call이나 완료된 척하는 응답이 생길 수 있다.
- Preamble을 과도하게 쓰면 대화가 느리고 형식적으로 느껴질 수 있다.
- Model availability, 가격, context window, Custom Voices 접근 조건은 변동 가능성이 있어 구현 직전 공식 문서 확인이 필요하다.

## 관련 워크플로

- Read-only lookup은 intent와 필수 field가 명확하면 바로 실행한다.
- Write action, 결제, 취소, 계정 변경, irreversible action은 실행 전 영향과 결과를 요약하고 사용자 확인을 받는다.
- Exact identifier는 하나씩 수집하고, 명확한 범위에서만 normalize하며, tool call 전에 확인한다.
- 반복 tool failure, no-match/no-input, 사용자 요청, safety risk는 escalation 조건으로 명시한다.
- 긴 session context는 current state, authoritative source, historical source, policy/rule을 구분해 제공한다.

## 관련 개념

- [[Agentic Workflow]]
- [[Orchestration]]
- [[Human-in-the-loop]]

## 관련 자료

- [[OpenAI Realtime Models Prompting Guide]]

## 메모

개인 LLM Wiki 관점에서는 당장 핵심 실행 후보라기보다, 향후 voice-based ingest assistant나 agent control surface를 실험할 때 참고할 공식 기준 자료다.
