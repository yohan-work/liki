---
title: Digital Bourgeois oh-my-codex Article
source_id: digitalbourgeois-oh-my-codex-2026-04-22
type: source
status: active
created: 2026-05-29
updated: 2026-05-29
tags:
  - codex
  - oh-my-codex
  - workflow
  - coding-agent
related:
  - "[[oh-my-codex]]"
  - "[[Codex]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Skills]]"
original_path: raw/articles/digitalbourgeois-oh-my-codex-2026-04-22.html
date_added: 2026-05-29
captured_at: 2026-05-29
accessed_at: 2026-05-29
canonical_url: https://digitalbourgeois.tistory.com/3031
content_hash: 9298f1790595eb5e71746e38d588d910b4fc50273bd548e1c45561aa34da0ad1
source_version: "published 2026-04-22"
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - reference
  - concept
  - decision
related_pages:
  - "[[oh-my-codex]]"
  - "[[Codex]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Skills]]"
sensitivity: private
evidence_level: source-backed
---

# Digital Bourgeois oh-my-codex Article

## 출처

Tistory 블로그 "평범한 직장인이 사는 세상"의 글 "oh-my-codex(OMX): OpenAI Codex CLI를 위한 워크플로우 레이어 정리"다.

## 자료 유형

Codex CLI 보조 도구인 oh-my-codex(OMX)를 소개하는 practitioner article이다.

## Domain / 분류

- domain: ai, software
- content_type: article
- knowledge_role: source, tool, reference
- source_quality: practitioner
- use_for: reference, concept, decision

## 추가일

2026-05-29

## 원본 위치

- canonical_url: https://digitalbourgeois.tistory.com/3031
- raw snapshot: `raw/articles/digitalbourgeois-oh-my-codex-2026-04-22.html`

## Provenance

- captured_at: 2026-05-29
- accessed_at: 2026-05-29
- canonical_url: https://digitalbourgeois.tistory.com/3031
- content_hash: 9298f1790595eb5e71746e38d588d910b4fc50273bd548e1c45561aa34da0ad1
- source_version: published 2026-04-22

## 원문 요약

이 글은 oh-my-codex(OMX)를 OpenAI Codex CLI를 대체하는 새 AI가 아니라, Codex CLI 위에 표준화된 작업 흐름, 역할, 상태 관리를 얹는 workflow layer로 소개한다. 글의 핵심 설명은 "Codex는 실제 에이전트 작업을 수행하고, OMX는 그 작업을 더 잘 시작하고 정리하고 끝까지 밀어주는 환경을 제공한다"는 구조다.

OMX가 해결하려는 문제로는 모호한 요청에서 바로 실행을 시작하는 문제, 계획 없이 코드를 쓰다가 방향이 바뀌는 문제, 병렬 작업 관리 어려움, 이전 결정과 로그와 맥락이 남지 않는 문제가 제시된다. 표준 흐름으로는 `$deep-interview`, `$ralplan`, `$ralph`, `$team`이 소개되며, `.omx/` 디렉터리에 승인된 계획, 실행 로그, 메모리, 실행 모드 상태를 저장한다고 설명한다.

설치와 기본 점검 흐름으로는 `npm install -g @openai/codex oh-my-codex`, `omx doctor`, `codex login status`, `omx exec` smoke test가 제시된다. 권장 환경은 macOS 또는 Linux + Codex CLI이고, Windows는 WSL2 사용을 권장한다고 정리한다.

## 핵심 주장

- OMX는 Codex CLI를 대체하지 않고, Codex를 더 일관되게 쓰기 위한 운영 레이어로 작동한다.
- 계획, 승인, 실행, 병렬 작업, 상태 저장을 분리하면 Codex 작업의 일관성과 재현성을 높일 수 있다고 설명한다.
- `.omx/` 디렉터리는 계획, 로그, 메모리, mode state를 저장해 중단 후 재개와 결정 추적을 돕는다고 소개된다.
- `$deep-interview`, `$ralplan`, `$ralph`, `$team` 같은 표준 entrypoint가 모호한 요청을 바로 실행으로 넘기지 않게 하는 workflow boundary로 쓰인다.
- `omx doctor`와 `omx exec` smoke test는 설치 여부보다 실제 Codex 인증과 실행 가능성을 확인하는 절차로 제시된다.

## 위키에 반영할 개념

- [[oh-my-codex]]: Codex CLI 위의 workflow/runtime layer로 새 tool page를 만든다.
- [[Codex]]: agent 실행 엔진과 운영 레이어를 분리하는 예시로 연결한다.
- [[Agentic Workflow]]: clarify, plan, approve, execute, parallelize, resume의 단계 분리를 보강한다.
- [[Orchestration]]: role, skill, workflow, state, tmux/team runtime, smoke test를 묶는 orchestration 예시로 연결한다.
- [[Skills]]: 반복 workflow를 명령형 entrypoint와 reusable skill surface로 만드는 사례로 연결한다.

## 내 프로젝트에 주는 시사점

LLM Wiki 운영에도 바로 실행보다 범위 명확화, 승인된 계획, 실행 로그, 상태 저장이 중요하다. 다만 이 프로젝트는 이미 AGENTS 규칙과 wiki/log/index를 운영하고 있으므로, OMX를 바로 도입하기보다 "계획과 실행을 분리하는 운영 레이어"라는 관점을 참고하는 쪽이 적절하다.

## 후속 라우팅

- concept 강화: [[Agentic Workflow]], [[Orchestration]], [[Skills]]
- tool 강화: [[Codex]], [[oh-my-codex]]
- comparison 후보: oh-my-codex vs Codex Harness, oh-my-codex vs Claude Code dynamic workflows
- question 후보: Codex workflow layer는 언제 별도 도구로 둘 가치가 있는가?
- idea 후보: 없음
- mvp 후보: 없음
- 보류: GitHub repository와 npm package는 별도 source로 확인한다.

## 검증 필요 주장

- 글의 설치 명령과 권장 workflow는 2026-04-22 글 기준이므로 실제 사용 전 GitHub README, npm package, 현재 Codex CLI 설치 방식으로 재확인해야 한다.
- `$ralph`, `$team`, `.omx/`, `omx wiki`, `omx hud`의 실제 동작과 안정성은 source code 또는 직접 실행으로 검증해야 한다.
- 병렬 실행이 실제 품질을 높이는지, 아니면 관리 비용과 충돌을 늘리는지는 작업 크기별로 별도 평가가 필요하다.

## 관련 페이지

- [[oh-my-codex]]
- [[Codex]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[Skills]]

## 열린 질문

- LLM Wiki 유지보수에는 OMX 같은 외부 workflow layer가 필요한가, 아니면 현재 AGENTS/wiki/log 구조로 충분한가?
- `$deep-interview`와 `$ralplan`에 해당하는 단계를 이 wiki의 ingest/maintenance workflow에 어떻게 대응시킬 수 있는가?
- 병렬 agent 실행은 어떤 종류의 작업에서만 비용 대비 가치가 있는가?

## 메모

글 말미에 `Yeachan-Heo/oh-my-codex` GitHub repository가 링크되어 있다. 도구 자체를 평가하려면 해당 repository와 npm package를 별도 source로 ingest하는 편이 낫다.
