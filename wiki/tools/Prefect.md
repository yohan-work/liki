---
title: Prefect
type: tool
status: seed
created: 2026-06-19
updated: 2026-06-19
tags:
  - workflow-orchestration
  - python
  - automation
  - mcp
  - ai-infrastructure
related:
  - "[[Prefect Official Site]]"
  - "[[Orchestration]]"
  - "[[Agentic Workflow]]"
  - "[[MCP Remote SSE]]"
  - "[[기업 AI 운영 레이어]]"
sensitivity: private
evidence_level: source-backed
---

# Prefect

## 한 줄 정의

Prefect는 Python workflow orchestration을 중심으로 script, scheduled workflow, worker, observability, governance를 production automation으로 묶는 도구다.

## 중요한 이유

[[Prefect Official Site]]는 Prefect를 "workflow orchestration"과 "AI infrastructure" 사이에 놓는다. 이는 agent workflow도 결국 반복 실행, state, retry, observability, permission, deployment boundary를 가져야 production에 가까워진다는 신호다.

## 핵심 기능

- Python function을 workflow로 만들고 실행 상태를 관찰한다.
- Prefect Cloud는 managed orchestration, autoscaling worker, enterprise auth, observability를 제공한다고 소개된다.
- Prefect Horizon은 MCP server deployment, gateway, registry, governance를 제공한다고 소개된다.
- Open-source Prefect와 managed Cloud/Horizon을 함께 제공한다.

## 개인 PoC에 주는 힌트

- LLM Wiki 자동화가 단발 스크립트를 넘어 scheduled ingest, lint, review, alert로 확장되면 orchestration 도구가 필요할 수 있다.
- Agent tool server를 MCP로 많이 붙일수록 registry, gateway, auth, audit가 별도 설계 대상이 된다.
- 먼저 local script와 Git log로 충분한지 확인하고, 반복 실패·재시도·관찰성 문제가 커질 때 workflow orchestrator를 검토한다.

## 한계와 리스크

- 홈페이지는 제품 범위와 positioning을 보여주지만, Cloud와 OSS의 세부 기능 차이는 docs로 확인해야 한다.
- Horizon의 MCP governance 기능은 실제 tool schema, auth, audit log, policy enforcement가 어떻게 동작하는지 별도 검증해야 한다.
- 개인 프로젝트에는 orchestration platform 자체가 운영 부담이 될 수 있다.

## 관련 개념과 차이

- [[Orchestration]]: Prefect는 workflow orchestration을 구현하는 구체 도구 후보다.
- [[Agentic Workflow]]: agent의 계획과 실행을 production workflow로 운영하려면 retry, state, worker, observability가 필요하다.
- [[MCP Remote SSE]]: Prefect Horizon이 내세우는 MCP gateway/registry는 MCP 연결을 운영 대상으로 다루는 방향이다.
- [[기업 AI 운영 레이어]]: Horizon은 agent가 business system에 접근할 때 governance layer가 필요하다는 제품 사례다.

## 관련 자료

- [[Prefect Official Site]]

## 열린 질문

- LLM Wiki 자동화에서 Prefect가 필요한 반복 작업은 무엇이며, 단순 cron/GitHub Actions와 비교해 어떤 이점이 있는가?
- Horizon의 MCP gateway는 authentication, authorization, audit, rate limit을 어느 수준까지 제공하는가?
- Prefect Cloud와 OSS를 오갈 때 lock-in과 hosting boundary는 어디에 생기는가?
