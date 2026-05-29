---
title: Agentic Workflow
type: concept
status: seed
created: 2026-05-20
updated: 2026-05-29
tags:
  - agents
  - workflow
related:
  - "[[Orchestration]]"
  - "[[Human-in-the-loop]]"
  - "[[Codex]]"
  - "[[Claude Blue]]"
  - "[[Ralph Wiggum Loop]]"
  - "[[MCP Remote SSE]]"
  - "[[Content Marketing Team]]"
  - "[[GitHub Content Marketing Team Repository]]"
  - "[[Realtime API]]"
  - "[[OpenAI Realtime Models Prompting Guide]]"
  - "[[GeekNews Codex Use Cases Expansion]]"
  - "[[Forward Deployed Engineer]]"
  - "[[DEVOCEAN Palantir FDE Article]]"
  - "[[E2E Test Agent]]"
  - "[[PyTorchKR E2E Test Agent Article]]"
  - "[[Codex Harness]]"
  - "[[OpenAI Codex Harness Article]]"
  - "[[Claude Opus 4.8]]"
  - "[[Anthropic Claude Opus 4.8 Announcement]]"
  - "[[oh-my-codex]]"
  - "[[Digital Bourgeois oh-my-codex Article]]"
sensitivity: private
evidence_level: source-backed
---

# Agentic Workflow

## 정의

Agentic workflow는 LLM 기반 시스템이 목표를 향해 계획하고, 행동하고, 결과를 점검하고, 반복하는 workflow다.

## 중요한 이유

이 위키는 반복되는 agent pattern, boundary, failure mode, human review point를 기록하는 데 사용할 수 있다.

## 핵심 아이디어

- agent에는 명확한 scope와 feedback이 필요하다.
- tool use는 가능한 한 관찰 가능하고 되돌릴 수 있어야 한다.
- 민감하거나 영향이 큰 작업에는 human review가 여전히 중요하다.
- [[Brunch Claude Blue Article]]은 실행, 학습, 검토를 위해 여러 agent를 병렬로 돌리는 일화적 workflow를 설명한다.
- [[AI Hero Ralph Wiggum Article]]은 plan file, progress file, feedback loop, commit boundary를 사용해 AI coding CLI를 반복 실행하는 autonomous workflow를 설명한다.
- [[Tistory MCP Remote SSE Article]]은 agent가 외부 tool server를 remote SSE endpoint로 연결하는 MCP 구성 패턴을 보여준다.
- [[GitHub Content Marketing Team Repository]]는 planner가 brief를 만들고 여러 specialist agent가 병렬로 산출물을 작성한 뒤 reviewer가 검수하는 콘텐츠 제작 workflow를 보여준다.
- [[OpenAI Realtime Models Prompting Guide]]는 voice agent도 role, decision point, tool policy, confirmation boundary, failure recovery, escalation을 명시한 workflow로 설계해야 한다고 설명한다.
- [[GeekNews Codex Use Cases Expansion]]은 agentic workflow를 coding task뿐 아니라 피드백 정리, 데이터 정리, PR 리뷰, 버그 트리아지, 회의 후속 작업, 운영 자동화, eval, 문서 최신화까지 확장된 업무 위임 패턴으로 보여준다.
- [[DEVOCEAN Palantir FDE Article]]은 잘 만든 AI/데이터 시스템이 실제 운영에 들어가지 못하는 문제를 FDE라는 embedded execution pattern으로 설명한다.
- [[PyTorchKR E2E Test Agent Article]]은 자연어 테스트 시나리오를 LLM이 해석하고 Playwright MCP 도구로 실제 브라우저를 조작한 뒤 결과를 요약하는 QA workflow를 보여준다.
- [[OpenAI Codex Harness Article]]은 agent workflow를 item, turn, thread로 나누고 tool execution, approval request, diff, streaming message를 typed event로 다루는 Codex App Server 설계를 보여준다.
- [[Anthropic Claude Opus 4.8 Announcement]]은 agentic workflow의 품질 기준으로 더 나은 판단, 불확실성 표시, unsupported claim 감소, 병렬 subagent 실행, 결과 검증을 함께 제시한다.
- [[Digital Bourgeois oh-my-codex Article]]은 Codex CLI 작업을 `$deep-interview`, `$ralplan`, `$ralph`, `$team` 같은 단계로 나누어 모호한 요청, 계획 승인, 실행 책임, 병렬 처리를 분리하는 workflow layer 사례를 보여준다.

## 관련 자료

- [[Brunch Claude Blue Article]]
- [[AI Hero Ralph Wiggum Article]]
- [[Tistory MCP Remote SSE Article]]
- [[GitHub Content Marketing Team Repository]]
- [[OpenAI Realtime Models Prompting Guide]]
- [[GeekNews Codex Use Cases Expansion]]
- [[DEVOCEAN Palantir FDE Article]]
- [[PyTorchKR E2E Test Agent Article]]
- [[OpenAI Codex Harness Article]]
- [[Anthropic Claude Opus 4.8 Announcement]]
- [[Digital Bourgeois oh-my-codex Article]]

## 열린 질문

- 어떤 작업을 agent에게 위임해야 하는가?
- 어떤 작업은 항상 human approval을 거쳐야 하는가?
- Agent workflow가 실제 업무 루틴에 채택되었는지를 어떻게 측정할 것인가?
