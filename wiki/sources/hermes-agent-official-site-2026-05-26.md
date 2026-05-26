---
title: Hermes Agent Official Site
type: source
status: ingested
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - hermes-agent
  - nousresearch
  - agent-runtime
  - skills
  - memory
  - mcp
related:
  - "[[Hermes Agent]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
  - "[[MCP Remote SSE]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
source_id: hermes-agent-official-site-2026-05-26
original_path: raw/external/hermes-agent-official-site-2026-05-26.html
date_added: 2026-05-26
captured_at: 2026-05-26
accessed_at: 2026-05-26
canonical_url: https://hermes-agent.nousresearch.com/
content_hash: sha256:39b5fdc53660f34a3550919e498c730ecb21c56426226d12d4daeb1b2f592a66
source_version: hermes_agent_official_site_v0.14.0_snapshot_2026-05-26
domain:
  - ai
  - software
content_type: documentation
knowledge_role:
  - source
  - tool
  - reference
source_quality: official
use_for:
  - reference
  - concept
  - decision
related_pages:
  - "[[Hermes Agent]]"
  - "[[Agentic Workflow]]"
  - "[[Skills]]"
  - "[[MCP Remote SSE]]"
  - "[[Orchestration]]"
---

# Hermes Agent Official Site

## 자료 요약

Nous Research의 Hermes Agent 공식 사이트 snapshot이다. 사이트는 Hermes Agent를 "사용자와 함께 성장하는" 오픈소스 agent로 소개하며, 프로젝트 학습, 자동 skill 생성, persistent memory, messaging account 기반 접근, scheduled automation, subagent, sandbox, browser control을 주요 기능으로 제시한다. 캡처 시점 footer 기준 버전은 `v0.14.0`이고 라이선스는 MIT로 표시되어 있다.

## 원문 주장

- Hermes Agent는 Nous Research가 제공하는 오픈소스 MIT licensed agent로 소개된다.
- 설치는 `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`, 초기 설정은 `hermes setup` 흐름으로 안내된다.
- Telegram, Discord, Slack, WhatsApp, Signal, Email, CLI 같은 entrypoint를 지원한다고 설명한다.
- Persistent memory와 자동 생성 skills를 통해 장기 실행될수록 프로젝트와 사용자 workflow에 맞춰진다고 주장한다.
- 자연어 기반 cron scheduling, isolated subagents, 독립 conversation과 terminal, Python RPC script 실행을 기능으로 제시한다.
- Sandbox backend로 local, Docker, SSH, Singularity, Modal을 언급하고 container hardening과 namespace isolation을 강조한다.
- Web search, browser automation, vision, image generation, text-to-speech, multi-model reasoning을 포함한 browser/web 제어 기능을 제공한다고 설명한다.

## 내 프로젝트에 주는 시사점

- [[Hermes Agent]]를 평가할 때 공식 baseline으로 삼을 수 있는 source다.
- [[Agentic Workflow]] 관점에서는 CLI, messaging gateway, cron, subagent, sandbox가 하나의 persistent agent runtime으로 묶이는 구조를 볼 수 있다.
- [[Skills]] 관점에서는 self-improving을 모델 재학습이 아니라 memory와 skill 축적 workflow로 검토해야 한다.
- 실제 PoC는 CLI-only에서 시작하고 messaging gateway, cron, browser automation, MCP/tool surface는 별도 단계로 분리하는 편이 안전하다.

## 검증 필요 주장

- 공식 landing page는 marketing-level 설명이므로 세부 동작, 지원 platform, sandbox 수준, 도구 목록은 GitHub repository와 docs로 재확인해야 한다.
- `install.sh` 실행 전 script 내용과 설치 위치, credential storage, network exposure를 별도로 확인해야 한다.
- 캡처 시점의 `v0.14.0` 표기는 빠르게 바뀔 수 있으므로 실제 평가 시점에는 최신 release와 changelog를 다시 확인해야 한다.
