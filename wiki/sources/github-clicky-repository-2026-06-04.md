---
title: GitHub Clicky Repository
source_id: github-clicky-repository-2026-06-04
type: source
status: active
created: 2026-06-04
updated: 2026-06-04
tags:
  - github
  - clicky
  - macos
  - voice-agent
  - screen-aware-ai
related:
  - "[[Clicky]]"
  - "[[Agentic Workflow]]"
  - "[[Claude Code]]"
  - "[[Codex]]"
  - "[[Human-in-the-loop]]"
  - "[[Orchestration]]"
original_path: raw/external/github-farzaa-clicky-2026-06-04/
date_added: 2026-06-04
captured_at: 2026-06-04T00:00:00+09:00
accessed_at: 2026-06-04T00:00:00+09:00
canonical_url: https://github.com/farzaa/clicky
content_hash: f2f0a7c8b64c062d4aeeff7c7a560549b94ac3392f1dc3c9c0071fe85c6d7a98
source_version: "GitHub repository farzaa/clicky, default branch main, README/repo metadata/tree/AGENTS captured on 2026-06-04"
domain:
  - ai
  - software
content_type: repo
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - inspiration
related_pages:
  - "[[Clicky]]"
  - "[[Agentic Workflow]]"
  - "[[Claude Code]]"
  - "[[Codex]]"
  - "[[Human-in-the-loop]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# GitHub Clicky Repository

## 출처

GitHub repository `farzaa/clicky`.

## 자료 유형

Clicky라는 macOS menu bar AI teacher/companion app의 공개 source repository다. README는 이 공개 codebase를 사용자가 hack하거나 기능을 만들고 구조를 볼 수 있는 open-source version으로 설명하며, 새로운 비공개 버전은 별도 사이트에서 제공한다고 밝힌다.

## Domain / 분류

- domain: ai, software
- content_type: repo
- knowledge_role: source, tool, reference
- source_quality: practitioner
- use_for: concept, reference, inspiration

## 추가일

2026-06-04

## 원본 위치

- raw snapshot directory: `raw/external/github-farzaa-clicky-2026-06-04/`
- README snapshot: `raw/external/github-farzaa-clicky-2026-06-04/README.md`
- repo metadata snapshot: `raw/external/github-farzaa-clicky-2026-06-04/repo.json`
- tree snapshot: `raw/external/github-farzaa-clicky-2026-06-04/tree.json`
- AGENTS snapshot: `raw/external/github-farzaa-clicky-2026-06-04/AGENTS.md`
- CLAUDE contents API decoded snapshot: `raw/external/github-farzaa-clicky-2026-06-04/CLAUDE.contents-api.md`
- canonical URL: https://github.com/farzaa/clicky

## Provenance

- captured_at: 2026-06-04T00:00:00+09:00
- accessed_at: 2026-06-04T00:00:00+09:00
- canonical_url: https://github.com/farzaa/clicky
- README content_hash: `f2f0a7c8b64c062d4aeeff7c7a560549b94ac3392f1dc3c9c0071fe85c6d7a98`
- repo metadata hash: `5843b2d1cff42e6b4908deee7958679f7d60df8d0d65e0b4bcedec108d1ad01b`
- tree hash: `1d38578eb58e689d2dc466fbc07ba3f058d37a3846c0d7c58584d9a697f0cc01`
- AGENTS hash: `7066784b7cc5e7c1a578a2eb6d17d52466b6925584d8bc827b2d0ac9a785e5bb`
- CLAUDE contents API decoded hash: `7066784b7cc5e7c1a578a2eb6d17d52466b6925584d8bc827b2d0ac9a785e5bb`
- source_version: GitHub repository farzaa/clicky, default branch main, README/repo metadata/tree/AGENTS captured on 2026-06-04

## Repository snapshot

- full_name: `farzaa/clicky`
- description: 없음
- default_branch: `main`
- created_at: 2026-04-07T05:12:51Z
- updated_at: 2026-06-04T01:45:21Z
- pushed_at: 2026-04-28T19:33:33Z
- language: Swift
- license: MIT
- stars/forks/open issues at capture: 6452 / 1228 / 70

## 원문 요약

README는 Clicky를 cursor 옆에 사는 AI teacher로 소개한다. 앱은 화면을 보고, 사용자와 대화하고, 화면의 특정 지점을 가리킬 수 있다고 설명된다. 공개 repository는 macOS native app과 Cloudflare Worker proxy로 구성되어 있으며, 사용자가 직접 실행하려면 macOS 14.2 이상, Xcode 15 이상, Node.js 18 이상, Cloudflare 계정, Anthropic/AssemblyAI/ElevenLabs API key가 필요하다고 안내한다.

README의 빠른 시작은 Claude Code에게 repository clone, `CLAUDE.md` 읽기, Cloudflare Worker key 설정, proxy URL 교체, Xcode build/run을 함께 진행하도록 요청하는 방식이다. 즉 이 repository 자체가 coding agent를 setup assistant로 쓰는 사용 흐름을 공식 진입점처럼 제시한다.

AGENTS.md는 Clicky를 dock icon이나 main window가 없는 macOS menu bar companion app으로 설명한다. 사용자가 `ctrl + option` push-to-talk으로 음성을 입력하면 AssemblyAI streaming transcription이 transcript를 만들고, 앱은 transcript와 screenshot을 Claude로 보내며, 응답은 SSE text stream과 ElevenLabs TTS로 돌아온다. Claude 응답에는 `[POINT:x,y:label:screenN]` 형식의 tag가 들어갈 수 있고, overlay가 이를 해석해 여러 monitor의 UI 요소를 향해 blue cursor를 움직인다.

API key는 앱 binary에 넣지 않고 Cloudflare Worker proxy에 secret으로 저장한다. Worker는 `/chat`, `/tts`, `/transcribe-token` route를 통해 Anthropic Messages API, ElevenLabs TTS, AssemblyAI temporary token 발급을 중계한다. 이 구조는 desktop app과 external AI API key boundary를 분리하는 사례다.

AGENTS.md는 coding agent용 project instruction이기도 하다. SwiftUI와 AppKit bridging, `@MainActor`, async/await, naming clarity, hover behavior, xcodebuild 금지, AGENTS/CLAUDE self-update 규칙을 명시한다. `CLAUDE.md`는 AGENTS.md와 같은 내용을 갖는 것으로 capture되었고, raw URL 직접 수집은 `Not Found`만 저장되어 contents API decoded snapshot을 별도로 보존했다.

## 핵심 주장

- macOS screen-aware voice companion은 screenshot, live transcription, streaming LLM response, TTS, cursor overlay를 하나의 interaction loop로 묶을 수 있다.
- API key는 desktop app에 포함하지 않고 Cloudflare Worker proxy secret으로 보관하는 구조가 사용된다.
- Claude 응답에 coordinate tag를 넣고 overlay가 이를 해석하면 LLM 응답을 화면 위 pointing action으로 연결할 수 있다.
- coding agent에게 repository-specific `AGENTS.md`/`CLAUDE.md`를 읽히는 setup flow는 open-source app onboarding을 줄이는 방법으로 쓰일 수 있다.
- screen capture, microphone, accessibility permission을 요구하는 local AI companion은 privacy와 permission boundary를 명시해야 한다.

## 위키에 반영할 개념

- [[Clicky]]: macOS screen-aware voice companion tool page.
- [[Agentic Workflow]]: voice, screenshot, Claude, TTS, pointing overlay가 연결되는 multimodal interaction loop 사례.
- [[Claude Code]]: README가 Claude Code를 setup/onboarding agent로 쓰는 흐름을 제시한다.
- [[Codex]]: coding agent가 repo-specific instruction과 setup task를 읽고 실행하는 비교 사례.
- [[Human-in-the-loop]]: push-to-talk, permission grant, visual pointing confirmation을 사람 중심 interaction boundary로 본다.
- [[Orchestration]]: app, worker proxy, external APIs, local permissions, overlay action을 조율하는 구조다.

## 내 프로젝트에 주는 시사점

Clicky는 "agent가 컴퓨터를 대신 조작한다"보다 "사람이 보는 화면 위에 agent의 설명과 pointing을 얹는다"는 방향의 흥미로운 사례다. LLM Wiki 관점에서는 action autonomy보다 explainable assistance, local context capture, permission boundary, API proxy separation을 함께 봐야 한다.

또 하나의 시사점은 repository 자체가 agent-readable onboarding artifact를 갖는다는 점이다. AGENTS.md가 architecture, key files, build/run 금지 사항, naming convention, self-update 규칙을 담고 있어 coding agent가 project context를 빠르게 잡도록 돕는다. 이 위키의 `AGENTS.md`와 `.codex/skills/wiki/SKILL.md`도 같은 방향의 operational source로 볼 수 있다.

## 후속 라우팅

- tool 추가: [[Clicky]]
- concept 강화: [[Agentic Workflow]], [[Human-in-the-loop]], [[Orchestration]]
- tool 강화: [[Claude Code]], [[Codex]]
- comparison 후보: screen-aware companion vs browser automation agent
- question 후보: local AI companion에서 screenshot/microphone/accessibility permission boundary를 어떻게 설계해야 하는가?
- mvp 후보: 없음

## 검증 필요 주장

- stars/forks/issues, repo update date, default branch, README 내용은 시간이 지나면 바뀔 수 있으므로 재사용 전 GitHub repository를 다시 확인해야 한다.
- README는 최신 Clicky가 비공개로 개발된다고 밝히므로, 공개 repository의 기능이 현재 제품 기능과 같다고 일반화하지 않는다.
- AGENTS.md의 Claude model명, AssemblyAI/ElevenLabs model명, API route 동작은 code와 provider 공식 문서로 별도 검증해야 한다.
- local execution은 macOS permission, Xcode signing, Cloudflare Worker secret 설정이 필요하므로 repository만으로 즉시 동작한다고 보지 않는다.
- screen capture와 microphone을 쓰는 app은 privacy/security review 없이 개인/업무 환경에 설치하지 않는다.

## 관련 페이지

- [[Clicky]]
- [[Agentic Workflow]]
- [[Claude Code]]
- [[Codex]]
- [[Human-in-the-loop]]
- [[Orchestration]]

## 열린 질문

- screen-aware local companion은 browser automation agent와 어떤 역할 분리를 가져야 하는가?
- cursor pointing tag 같은 lightweight action protocol을 다른 agent UI에도 적용할 수 있는가?
- API proxy를 Cloudflare Worker로 둘 때 observability, rate limit, key rotation, audit log는 어디까지 필요할까?

## 메모

이 자료는 practitioner/open-source repository라 구조와 workflow vocabulary에는 유용하지만, 현재 제품 상태나 production 안정성 판단에는 부족하다. 실제 실행 전에는 code, issue, release, provider docs, macOS permission behavior를 따로 확인해야 한다.
