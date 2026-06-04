---
title: Codex Sites
type: tool
status: seed
created: 2026-06-04
updated: 2026-06-04
tags:
  - codex
  - sites
  - deployment
  - hosting
  - plugins
related:
  - "[[OpenAI Codex Sites Documentation]]"
  - "[[Codex]]"
  - "[[Codex Harness]]"
  - "[[CI/CD 배포 파이프라인]]"
  - "[[Human-in-the-loop]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# Codex Sites

## 한 줄 정의

Codex Sites는 Codex가 website, web app, game을 OpenAI-hosted site로 생성, 저장, 배포, 검사하게 하는 Sites plugin 기반 hosting workflow다.

## 중요한 이유

[[OpenAI Codex Sites Documentation]]은 Sites deployment URL이 production deployment라고 명시한다. 따라서 Codex Sites는 단순 code generation 도구가 아니라 build, reviewable saved version, production deployment, access control, runtime secret까지 포함하는 deployment surface다.

## 작동 방식

- Codex app에서 Sites plugin을 추가하고 새 thread에서 `@Sites`로 site 생성이나 배포를 요청한다.
- 신규 site는 prompt로 audience, core experience, required data를 설명해 만들 수 있다.
- 기존 project는 Sites compatibility를 확인하고 필요한 변경을 한 뒤 배포할 수 있다.
- Codex는 local source project와 hosted Sites project의 연결을 `.openai/hosting.json`에 저장한다.
- Save a version은 deployable build candidate를 만들고 source Git commit과 연결한다.
- Deploy a version은 saved version을 production URL로 publish한다.

## Site shape

- State 없는 landing page나 content site.
- D1 relational database를 쓰는 saved records, progress, game score.
- R2 object storage를 쓰는 image, document, audio, video upload.
- D1 metadata와 R2 file content를 함께 쓰는 uploaded file workflow.
- Workspace-authenticated user identity가 필요한 internal site.
- Public sign-in이나 external identity provider가 필요한 authentication-enabled project.

## 운영 경계

- 새 site는 review 전 owner와 workspace admin만 접근 가능하게 두는 것이 안전하다.
- Runtime environment value와 secret은 Sites panel에서 관리하고 `.openai/hosting.json`에 저장하지 않는다.
- Hosted environment value를 바꾸면 approved saved version을 redeploy해야 한다.
- Production URL을 공유하기 전에 build, saved version, access mode, secret handling, deployment status를 확인한다.

## 좋은 사용 사례

- 별도 deployment workflow를 설정하지 않고 internal dashboard나 small app을 빠르게 배포한다.
- Codex가 만든 prototype을 production URL로 공유하기 전 saved version으로 검토한다.
- Workspace identity, D1/R2 storage, access control까지 포함한 agent-built internal tool을 실험한다.

## 실패 패턴

- "deploy"를 요청하면서 saved version review 없이 바로 production URL을 만든다.
- Temporary UI state까지 durable storage로 만든다.
- Secret value를 source file이나 `.openai/hosting.json`에 넣는다.
- Public/workspace access를 넓히기 전에 data handling과 expected audience를 검토하지 않는다.
- Existing project가 Cloudflare Worker-compatible ES module output을 만들 수 있는지 확인하지 않는다.

## 관련 개념과 차이

- [[Codex]]: Sites는 Codex가 code edit에서 hosted app delivery까지 확장되는 surface다.
- [[Codex Harness]]: thread, plugin, review pane, saved version, deployment status가 app-level workflow primitive가 된다.
- [[CI/CD 배포 파이프라인]]: Sites도 build, artifact candidate, deploy, access, runtime config, verification 경계를 가진다.
- [[Human-in-the-loop]]: production deployment와 audience 확대 전에 사람이 검토해야 한다.
- [[Orchestration]]: source project, plugin, hosting config, storage binding, secret, access mode를 함께 조율한다.

## 관련 자료

- [[OpenAI Codex Sites Documentation]]

## 내 관점 / 임시 결론

Codex Sites의 핵심은 빠른 hosting보다 "agent-generated app을 publishable artifact로 바꾸는 boundary"다. 개인 PoC에서 쓰더라도 기본 흐름은 `save version -> diff/build/storage/access 검토 -> deploy -> URL 확인`으로 둬야 한다.

## 열린 질문

- Sites를 쓸 때 기본 access mode를 owner/admins only로 강제하는 개인 운영 규칙이 필요한가?
- Vercel, Cloudflare Pages, GitHub Actions와 비교할 때 Sites는 어느 범위의 PoC에 가장 적합한가?
- Agent가 database migration이나 persistent storage를 추가할 때 어떤 review checklist가 필요한가?
