---
title: Orchestration
type: concept
status: seed
created: 2026-05-20
updated: 2026-06-01
tags:
  - orchestration
  - agents
related:
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
  - "[[Claude Blue]]"
  - "[[Ralph Wiggum Loop]]"
  - "[[MCP Remote SSE]]"
  - "[[Realtime API]]"
  - "[[OpenAI Realtime Models Prompting Guide]]"
  - "[[Claude Opus 4.8]]"
  - "[[Anthropic Claude Opus 4.8 Announcement]]"
  - "[[oh-my-codex]]"
  - "[[Digital Bourgeois oh-my-codex Article]]"
  - "[[SkillOpt]]"
  - "[[SkillOpt Project Page]]"
  - "[[Velog Claude Opus 4.8 Reaction Article]]"
sensitivity: private
evidence_level: source-backed
---

# Orchestration

## 정의

Orchestration은 workflow 안에서 tool, prompt, agent, state, review step을 조율하는 것이다.

## 중요한 이유

좋은 orchestration은 LLM-assisted work를 더 반복 가능하고 audit하기 쉽게 만든다.

## 핵심 아이디어

- workflow는 input, output, decision point를 드러내야 한다.
- specialized skill은 반복적인 setup을 줄일 수 있다.
- log와 report는 trust 유지에 도움이 된다.
- [[Brunch Claude Blue Article]]은 orchestration을 즉흥적인 vibe coding보다 구조화된 후속 실천으로 설명하며, detailed spec, reusable skill 또는 tool, explicit review boundary를 포함한다고 본다.
- [[AI Hero Ralph Wiggum Article]]은 orchestration을 task source, progress state, feedback loop, sandbox, cost control, output target을 조합하는 loop design 문제로 다룬다.
- [[MCP Remote SSE]]는 tool server와 LLM client를 분리하는 connectivity pattern으로, orchestration의 infrastructure layer에 해당한다.
- [[OpenAI Realtime Models Prompting Guide]]는 realtime voice agent에서 tool availability, tool-call eagerness, preamble, failure recovery, dynamic conversation flow, escalation 조건을 함께 조율해야 한다고 설명한다.
- [[Anthropic Claude Opus 4.8 Announcement]]은 Claude Code dynamic workflows, effort control, Messages API의 system entry 갱신을 통해 orchestration이 agent 실행 중 effort, permission, token budget, environment context를 조율하는 문제임을 보여준다.
- [[Digital Bourgeois oh-my-codex Article]]은 [[oh-my-codex]]를 통해 role, skill, workflow, `.omx/` state, tmux/team runtime, smoke test를 Codex CLI 바깥의 orchestration surface로 다루는 사례를 제공한다.
- [[SkillOpt Project Page]]는 target model, optimizer model, benchmark split, validation gate, rejected edit buffer, final skill artifact를 분리해 skill 개선 orchestration을 구성하는 사례다.
- [[Velog Claude Opus 4.8 Reaction Article]]은 effort control과 Dynamic Workflows를 작업 위험도와 중요도에 맞춰 agent runtime의 깊이, 병렬화, 검수 수준을 조절하는 사용자-facing orchestration surface로 해석한다.

## 관련 자료

- [[Brunch Claude Blue Article]]
- [[AI Hero Ralph Wiggum Article]]
- [[Tistory MCP Remote SSE Article]]
- [[OpenAI Realtime Models Prompting Guide]]
- [[Anthropic Claude Opus 4.8 Announcement]]
- [[Digital Bourgeois oh-my-codex Article]]
- [[SkillOpt Project Page]]
- [[Velog Claude Opus 4.8 Reaction Article]]

## 열린 질문

- 개인 지식 작업에는 어떤 orchestration pattern이 맞는가?
- failure와 contradiction을 어떻게 추적해야 하는가?
- workflow 지침 자체를 개선할 때 어떤 validation gate를 둘 것인가?
- effort level과 검증 artifact를 작업 위험도에 어떻게 매핑할 것인가?
