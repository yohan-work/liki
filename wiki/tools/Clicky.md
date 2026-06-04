---
title: Clicky
type: tool
status: seed
created: 2026-06-04
updated: 2026-06-04
tags:
  - clicky
  - macos
  - voice-agent
  - screen-aware-ai
  - cursor-overlay
related:
  - "[[GitHub Clicky Repository]]"
  - "[[Clicky Official Site and Privacy Policy]]"
  - "[[Clicky 공개 repo와 현재 제품 privacy boundary]]"
  - "[[Agentic Workflow]]"
  - "[[Claude Code]]"
  - "[[Codex]]"
  - "[[Human-in-the-loop]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# Clicky

## 한 줄 정의

Clicky는 macOS menu bar에서 동작하는 screen-aware AI teacher/companion app으로, 음성 입력, 화면 screenshot, Claude 응답, TTS, cursor pointing overlay를 한 interaction loop로 묶는 도구다.

## 중요한 이유

[[GitHub Clicky Repository]]는 local desktop companion이 LLM을 단순 chat UI가 아니라 사용자의 현재 화면 위 설명자와 pointer로 배치하는 사례다. 이 구조는 browser automation agent와 달리, agent가 직접 행동하기보다 사용자가 보는 화면에 설명과 지시를 얹어 human-in-the-loop를 유지한다.

[[Clicky Official Site and Privacy Policy]]는 현재 제품 페이지가 `clicky agent` background agent 사용 사례를 더 전면에 내세운다는 점을 보여준다. 따라서 Clicky는 공개 repo의 screen-aware companion과 현재 제품의 background agent positioning을 분리해서 봐야 한다.

## 구조

- macOS menu bar-only app이며 dock icon과 main window 없이 status bar panel로 동작한다.
- `ctrl + option` push-to-talk으로 microphone audio를 capture한다.
- AssemblyAI streaming transcription이 음성을 text로 바꾼다.
- transcript와 screenshot을 Claude로 보내고, Claude 응답을 SSE로 stream한다.
- ElevenLabs TTS가 응답 음성을 재생한다.
- Claude 응답 안의 `[POINT:x,y:label:screenN]` tag를 overlay가 해석해 여러 monitor의 특정 지점을 가리킨다.
- Anthropic, AssemblyAI, ElevenLabs API key는 Cloudflare Worker proxy secret으로 보관한다.
- 현재 공식 사이트 기준으로는 `clicky agent`라고 말해 background agent를 실행하는 사용 사례도 제시된다.

## 좋은 사용 사례

- macOS 화면을 보며 설명이 필요한 학습/튜터링 상황.
- 사용자가 직접 조작하되, AI가 어떤 UI 요소를 봐야 하는지 cursor pointing으로 안내하는 workflow.
- local app이 sensitive permission을 요구할 때 permission, proxy, API key boundary를 비교 연구하는 reference.
- coding agent onboarding에서 README와 AGENTS.md가 setup assistant의 context가 되는 사례 분석.

## 한계와 주의점

- 공개 repository는 README 기준 open-source version이며, 최신 Clicky는 별도 비공개 개발로 이동했다고 밝힌다.
- microphone, screen capture, accessibility permission이 필요하므로 privacy/security boundary가 핵심이다.
- Privacy policy 기준으로 screenshot, transcript, prompt는 backend proxy를 통해 third party AI provider로 전송될 수 있다.
- Cloudflare Worker proxy는 API key 노출을 줄이지만, proxy 자체의 secret 관리, log, access control, rate limit은 별도 운영 문제다.
- GitHub repo만으로 현재 제품 안정성이나 provider API 호환성을 판단할 수 없다.
- AGENTS.md에는 `xcodebuild`를 terminal에서 실행하지 말라는 주의가 있어, local build 검증 방법도 macOS permission behavior를 고려해야 한다.

## 관련 개념과 차이

- [[Agentic Workflow]]: Clicky는 voice input, screen context, model response, TTS, visual pointing이 연결된 multimodal agent loop다.
- [[Human-in-the-loop]]: 사용자가 push-to-talk을 누르고 화면을 보며 최종 행동을 직접 수행하는 구조라 완전 자동화보다 review boundary가 선명하다.
- [[Orchestration]]: local app, Worker proxy, external AI APIs, macOS permission, overlay rendering을 조율한다.
- [[Claude Code]]: README는 Claude Code에게 setup을 맡기는 prompt를 공식 빠른 시작처럼 제시한다.
- [[Codex]]: Codex 관점에서는 AGENTS.md 같은 repo-specific instruction을 읽고 setup/debugging을 수행하는 onboarding pattern으로 참고할 수 있다.

## 관련 자료

- [[GitHub Clicky Repository]]
- [[Clicky Official Site and Privacy Policy]]
- [[Clicky 공개 repo와 현재 제품 privacy boundary]]

## 내 관점 / 임시 결론

Clicky에서 가장 흥미로운 점은 "agent가 사용자를 대신해 클릭한다"가 아니라 "agent가 사용자의 화면 위에서 설명하고 가리킨다"는 interaction contract다. 개인 AI workflow에서 local companion을 검토할 때는 autonomy보다 context capture, explainability, permission boundary, proxy credential design을 먼저 봐야 한다.

## 열린 질문

- cursor pointing tag는 LLM 응답과 UI overlay 사이의 가벼운 action protocol로 일반화할 수 있는가?
- screenshot 기반 도움과 browser automation 기반 실행은 어떤 기준으로 나눠야 하는가?
- local companion app에서 microphone/screen/accessibility permission을 사용자에게 어떻게 설명하고 audit할 것인가?
