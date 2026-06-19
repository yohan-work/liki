---
title: Prefect Official Site
type: source
status: ingested
created: 2026-06-19
updated: 2026-06-19
tags:
  - source
  - prefect
  - workflow-orchestration
  - mcp
  - ai-infrastructure
related:
  - "[[Prefect]]"
  - "[[Orchestration]]"
  - "[[Agentic Workflow]]"
sensitivity: private
evidence_level: source-backed
source_id: prefect-official-site-2026-06-19
original_path: raw/external/prefect-official-site-2026-06-19/index.html
date_added: 2026-06-19
captured_at: 2026-06-19
accessed_at: 2026-06-19
canonical_url: https://www.prefect.io/
content_hash: sha256:76f8e1ffe52999385bed652e98001dfafa20240152ad58c989ba995f9d9ae4b2
source_version: prefect_homepage_html_snapshot_2026-06-19
domain:
  - ai
  - software
content_type: website
knowledge_role:
  - source
  - tool
  - reference
source_quality: official
use_for:
  - reference
  - concept
related_pages:
  - "[[Prefect]]"
  - "[[Orchestration]]"
  - "[[Agentic Workflow]]"
---

# Prefect Official Site

## 자료 요약

Prefect 공식 홈페이지 snapshot이다. Prefect는 자신을 workflow orchestration과 AI application 구축을 위한 open-source foundation 및 production-ready platform으로 소개한다.

2026-06-19 snapshot 기준 페이지는 두 플랫폼을 전면에 둔다. [[Prefect]] Cloud는 managed workflow orchestration, autoscaling workers, enterprise auth, observability를 제공한다고 설명한다. Prefect Horizon은 managed AI infrastructure로, MCP server 배포, gateway, registry, governance를 제공한다고 설명한다.

## 원문 주장

- Prefect는 Python automation을 script에서 production workflow로 확장하는 open-source framework와 cloud platform을 제공한다고 설명한다.
- Prefect Cloud는 SSO, RBAC, governance, zero infrastructure management, autoscaling workers, observability를 내세운다.
- Prefect Horizon은 MCP server를 배포하고, AI agent가 business system에 접근할 때 gateway, registry, governance를 제공한다고 설명한다.
- 홈페이지는 Prefect Workflow Orchestration과 FastMCP를 open-source foundation으로 함께 제시한다.
- 고객 로고, case study, uptime, star, download, integration 수치는 홈페이지의 self-reported marketing claim이다.

## 내 프로젝트에 주는 시사점

- [[Orchestration]]을 agent 내부 planning만이 아니라 worker, deployment, observability, auth, governance까지 포함한 production workflow layer로 봐야 한다.
- MCP server가 늘어나는 환경에서는 tool registry, gateway, permission, audit가 개인 PoC에서도 점검 항목이 된다.
- 개인 LLM Wiki 자동화도 단순 script가 반복 실행·관찰·재시도·승인 경계를 갖추면 workflow orchestration 문제로 전환된다.

## 검증 필요 주장

- 48.3k+ open-source stars, monthly download 수, FastMCP가 MCP server의 70%에 쓰인다는 주장, 고객 성과 수치는 GitHub, package registry, case study 원문으로 별도 검증해야 한다.
- Prefect Horizon의 실제 availability, 가격, MCP gateway 기능 범위, auth model, audit logging 세부는 공식 docs나 제품 문서로 확인해야 한다.
- Prefect Cloud와 self-hosted OSS의 기능 차이, lock-in, migration boundary는 홈페이지만으로 충분히 판단할 수 없다.

## 메타데이터

- 수집일: 2026-06-19
- 원문: https://www.prefect.io/
- raw snapshot: `raw/external/prefect-official-site-2026-06-19/index.html`
- content_hash: `sha256:76f8e1ffe52999385bed652e98001dfafa20240152ad58c989ba995f9d9ae4b2`
