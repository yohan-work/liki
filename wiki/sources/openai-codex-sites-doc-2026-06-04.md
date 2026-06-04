---
title: OpenAI Codex Sites Documentation
source_id: openai-codex-sites-doc-2026-06-04
type: source
status: active
created: 2026-06-04
updated: 2026-06-04
tags:
  - openai
  - codex
  - sites
  - deployment
  - hosting
  - plugins
related:
  - "[[Codex Sites]]"
  - "[[Codex]]"
  - "[[Codex Harness]]"
  - "[[CI/CD 배포 파이프라인]]"
  - "[[Human-in-the-loop]]"
  - "[[Orchestration]]"
original_path: raw/external/openai-codex-sites-2026-06-04/sites.html
date_added: 2026-06-04
captured_at: 2026-06-04T00:00:00+09:00
accessed_at: 2026-06-04T00:00:00+09:00
canonical_url: https://developers.openai.com/codex/sites
content_hash: 63ecbc07421cfc20c9bf913e2506f083118fb4c1c24b6aeef33a9f837ef91389
source_version: "OpenAI Codex Sites documentation fetched via OpenAI developer docs MCP and HTML snapshot captured on 2026-06-04"
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
  - decision
related_pages:
  - "[[Codex Sites]]"
  - "[[Codex]]"
  - "[[Codex Harness]]"
  - "[[CI/CD 배포 파이프라인]]"
  - "[[Human-in-the-loop]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# OpenAI Codex Sites Documentation

## 출처

OpenAI Developers 문서 `Sites – Codex`.

## 자료 유형

Codex의 Sites plugin을 사용해 website, web app, game을 OpenAI-hosted site로 생성, 저장, 배포, 검사하는 방법을 설명하는 공식 문서다.

## Domain / 분류

- domain: ai, software
- content_type: documentation
- knowledge_role: source, tool, reference
- source_quality: official
- use_for: reference, decision

## 추가일

2026-06-04

## 원본 위치

- HTML snapshot: `raw/external/openai-codex-sites-2026-06-04/sites.html`
- canonical URL: https://developers.openai.com/codex/sites

## Provenance

- captured_at: 2026-06-04T00:00:00+09:00
- accessed_at: 2026-06-04T00:00:00+09:00
- canonical_url: https://developers.openai.com/codex/sites
- content_hash: `63ecbc07421cfc20c9bf913e2506f083118fb4c1c24b6aeef33a9f837ef91389`
- source_version: OpenAI Codex Sites documentation fetched via OpenAI developer docs MCP and HTML snapshot captured on 2026-06-04

## 원문 요약

문서는 Sites를 Codex가 website, web app, game을 생성, 저장, 배포, 검사할 수 있게 하는 OpenAI-hosted site 기능으로 설명한다. 별도의 deployment workflow를 설정하지 않고 prompt나 compatible existing project를 hosted site로 만들 때 Sites plugin을 사용한다. 모든 Sites deployment URL은 production deployment이며, live 전 검토가 필요하면 배포하지 않고 version만 저장하라고 안내한다.

Sites는 preview 상태이며, 현재 ChatGPT Business와 Enterprise workspace에서 사용할 수 있다고 설명한다. ChatGPT Enterprise에서는 workspace admin이 RBAC에서 Sites를 켜야 하고, Business workspace에서는 기본 활성화라고 설명한다. 사용자는 Codex app의 Plugins에서 Sites plugin을 추가하고, 새 thread에서 `@Sites`를 명시해 site 생성이나 배포 작업을 요청할 수 있다.

Sites workflow는 save와 deploy를 분리한다. Save a version 단계에서는 Codex가 deployable site를 build하고 source Git commit과 연결된 version을 저장한다. Deploy a version 단계에서는 saved version을 publish하고 성공 시 production URL을 보고한다. 이 구분은 reviewable deployment candidate와 실제 live deployment를 분리하는 approval boundary다.

Sites project는 local source project와 OpenAI-managed hosting을 연결한다. Codex는 이 연결과 optional storage binding name을 `.openai/hosting.json`에 저장한다. 문서는 예시로 `project_id`, `d1`, `r2` field를 가진 JSON을 보여준다. Durable structured data에는 D1 relational database를, uploaded file에는 R2 object storage를, metadata와 file content가 함께 필요하면 D1과 R2를 함께 쓰라고 안내한다.

지원되는 site shape는 Cloudflare Worker-compatible output as ES modules를 build하는 project다. Existing project는 배포 전에 compatible deployment artifact를 만들 수 있는지 Codex에게 확인하라고 안내한다.

Access control은 owner/admins only, workspace all, custom user/group mode로 나뉜다. 새 site는 review 전 owner와 workspace admin으로 제한하는 것이 권장된다. Runtime environment values와 secrets는 Sites panel에서 관리하고, `.openai/hosting.json`에 넣지 말라고 설명한다. Hosted environment value를 바꾼 뒤에는 approved saved version을 redeploy해야 다음 deployment에 반영된다.

Deploy 또는 access 확대 전에는 Codex review pane에서 source change와 database migration을 검토하고, build 성공과 saved version이 의도한 version인지 확인하며, audience, runtime secrets, deployment status, production URL을 확인하라고 안내한다.

## 핵심 주장

- Sites deployment URL은 production deployment이므로 save version과 deploy version을 분리해야 한다.
- Sites project linkage와 storage binding name은 `.openai/hosting.json`에 저장되지만 secret value는 여기에 저장하면 안 된다.
- Sites는 D1, R2, workspace identity, authentication-enabled project 같은 site shape를 요구사항에 따라 선택한다.
- Durable storage는 product data에만 요청하고 temporary presentation state에는 쓰지 않는 것이 좋다.
- Deploy 또는 access 확대 전에는 source changes, database migration, build, version, audience, secrets, production URL을 확인해야 한다.

## 위키에 반영할 개념

- [[Codex Sites]]: Codex의 hosted site creation/deployment plugin tool page.
- [[Codex]]: Codex가 code edit뿐 아니라 hosted app deployment surface를 제공하는 사례.
- [[Codex Harness]]: thread, plugin, review pane, saved version, deployment status 같은 app-level workflow primitive와 연결한다.
- [[CI/CD 배포 파이프라인]]: save/deploy 분리, production URL, runtime secret, access control을 agentic deployment vocabulary로 보강한다.
- [[Human-in-the-loop]]: production deployment와 access widening 전 review/approval boundary.
- [[Orchestration]]: source project, plugin, hosting config, D1/R2, secrets, access mode, deployment status를 조율하는 workflow.

## 내 프로젝트에 주는 시사점

Sites는 agent에게 "웹 앱 만들어줘"를 맡기는 것을 production deployment와 바로 연결할 수 있기 때문에, 일반적인 code generation보다 더 강한 review boundary가 필요하다. 특히 `save a version`과 `deploy a version`의 분리는 개인 PoC에서도 유용한 vocabulary다. 먼저 buildable candidate를 저장하고, diff/build/storage/access를 확인한 뒤 production URL을 열어야 한다.

LLM Wiki 관점에서는 "agent가 만든 artifact를 어디까지 publish 가능한 것으로 볼 것인가"라는 질문과 연결된다. 문서 초안, Figma spec, site deployment 모두 final artifact를 사람에게 보여주기 전 reviewable candidate 단계가 필요하다.

## 후속 라우팅

- tool 추가: [[Codex Sites]]
- tool 강화: [[Codex]]
- concept 강화: [[Codex Harness]], [[CI/CD 배포 파이프라인]], [[Human-in-the-loop]], [[Orchestration]]
- question 후보: agent가 hosted app을 배포하기 전 최소 review checklist는 무엇인가?
- decision 후보: 개인 PoC에서 Sites를 쓸 때 기본 access mode를 owner/admins only로 둘 것인가?

## 검증 필요 주장

- Sites는 preview 기능이므로 plan availability, RBAC, plugin behavior, storage support는 문서 최신 상태와 workspace 권한 기준으로 재확인해야 한다.
- 실제 hosted runtime이 어떤 Cloudflare Worker compatibility constraints를 갖는지는 프로젝트별 build output과 Sites의 current support 기준으로 확인해야 한다.
- D1/R2 naming과 `.openai/hosting.json` schema는 preview 중 바뀔 수 있으므로 배포 전 최신 문서를 확인한다.
- Runtime secrets, access control, workspace identity는 실제 workspace policy와 admin setting에 의존한다.

## 관련 페이지

- [[Codex Sites]]
- [[Codex]]
- [[Codex Harness]]
- [[CI/CD 배포 파이프라인]]
- [[Human-in-the-loop]]
- [[Orchestration]]

## 열린 질문

- Sites를 개인 PoC 배포에 쓸 때 GitHub Actions/Vercel/Cloudflare Pages와 어떤 기준으로 비교할 것인가?
- LLM Wiki에서 agent-generated site를 공개하기 전 어떤 source/diff/build/access checklist를 둘 것인가?
- Sites deployment와 local Codex thread history를 어떻게 연결해 audit trail로 남길 수 있는가?
