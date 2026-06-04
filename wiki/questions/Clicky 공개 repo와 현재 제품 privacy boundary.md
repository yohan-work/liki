---
title: Clicky 공개 repo와 현재 제품 privacy boundary
type: question
status: active
created: 2026-06-04
updated: 2026-06-04
tags:
  - clicky
  - privacy
  - macos
  - voice-agent
  - screen-aware-ai
related:
  - "[[Clicky]]"
  - "[[GitHub Clicky Repository]]"
  - "[[Clicky Official Site and Privacy Policy]]"
  - "[[Human-in-the-loop]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# Clicky 공개 repo와 현재 제품 privacy boundary

## 질문

Clicky를 검토할 때 공개 GitHub repo와 현재 제품 페이지의 차이, 그리고 macOS screen-aware companion의 privacy boundary를 어떻게 정리해야 하는가?

## 짧은 답변

Clicky는 공개 repo만 보면 push-to-talk, screenshot, Claude 응답, TTS, cursor pointing overlay를 묶은 macOS AI teacher/companion이다. 현재 공식 사이트까지 보면 `clicky agent`라는 background agent 사용 사례가 추가로 전면에 나온다. 따라서 검토 기준은 두 층으로 나눠야 한다. 첫째, screen-aware companion으로서 screenshot/voice payload가 언제 capture되고 어디로 전송되는지 확인한다. 둘째, background agent로서 build, research, email 같은 action이 어떤 승인, 로그, 취소, 권한 경계 안에서 실행되는지 확인한다.

## 출처가 말한 내용

[[GitHub Clicky Repository]]는 공개 codebase를 open-source version으로 설명한다. 구조상 macOS menu bar app이 push-to-talk으로 voice input을 받고, screenshot과 transcript를 Claude로 보내며, 응답을 ElevenLabs TTS와 cursor overlay로 보여준다. API key는 app binary에 넣지 않고 Cloudflare Worker proxy secret으로 보관한다고 설명한다.

[[Clicky Official Site and Privacy Policy]]의 공식 홈페이지는 Clicky가 cursor 옆에 있으며 사용자가 보는 것을 볼 수 있다고 설명한다. 또한 사용자가 `clicky agent`라고 말하면 background agent를 띄워 build, research 같은 일을 하게 한다고 소개한다.

같은 privacy policy는 Clicky가 push-to-talk action에 반응해 screenshot과 voice input을 Mac에서 local capture하고, AI provider가 응답할 수 있도록 backend proxy로 보낸다고 설명한다. Anthropic, OpenAI, AssemblyAI, ElevenLabs 같은 third party AI provider가 voice, transcription, assistant 기능에 사용되며 screenshot, transcript, prompt가 backend proxy를 통해 provider로 전송될 수 있다고 밝힌다.

## 내 정리

공개 repo와 현재 제품은 같은 이름을 쓰지만, 같은 기능 범위라고 보면 안 된다. 공개 repo는 "screen-aware tutor/companion 구현"을 이해하는 source이고, 현재 사이트는 "현재 제품 positioning과 privacy statement"를 이해하는 source다. README가 최신 Clicky는 비공개로 개발한다고 밝히므로, 공개 repo의 architecture를 현재 제품 구현으로 단정하지 않는다.

Privacy boundary는 local permission, backend proxy, third party provider, background action 네 구간으로 나누는 것이 좋다. macOS permission은 microphone, screen capture, accessibility 같은 local access의 시작점이다. Backend proxy는 API key를 app에서 숨기는 장점이 있지만, screenshot/transcript/prompt가 사용자의 기기를 떠나는 지점이다. Third party provider는 실제 model, transcription, TTS 처리가 일어나는 곳이므로 retention과 training 사용 여부를 별도로 봐야 한다. Background agent는 단순 설명을 넘어 외부 action을 실행할 수 있으므로 별도 approval boundary가 필요하다.

## 검토 체크리스트

- Capture trigger: screenshot과 voice input이 push-to-talk 때만 capture되는지, background mode에서 계속 capture되는지 확인한다.
- Payload visibility: screenshot, transcript, prompt, response, TTS audio 중 무엇이 backend/provide로 전송되는지 확인한다.
- Provider policy: Anthropic, OpenAI, AssemblyAI, ElevenLabs 각각의 retention, logging, training opt-out 조건을 확인한다.
- Local permission: microphone, screen recording, accessibility, screen content permission이 어떤 feature에 필요한지 분리한다.
- Agent action: `clicky agent`가 build, research, email을 할 때 user confirmation, action preview, audit log, undo/rollback이 있는지 확인한다.
- Credential boundary: Cloudflare Worker proxy에 저장되는 secrets, user account token, email integration token이 분리되는지 확인한다.
- Data deletion: privacy policy의 삭제 요청 14일 기준과 provider-side deletion이 함께 적용되는지 확인한다.
- Work environment: 회사/고객/비공개 자료가 화면에 있는 상태에서 screenshot payload가 외부 provider로 나갈 수 있는지 정책상 허용되는지 확인한다.

## 의사결정 기준

개인 실험용으로는 "화면을 보고 설명하는 tutor" 범위부터 평가한다. 이때도 민감한 화면, 고객 자료, 회사 secret이 보이는 환경에서는 쓰지 않는 것이 안전하다. Background agent 기능은 별도 단계로 보고, email/file/build/browser action에 대한 승인 흐름과 로그가 확인되기 전에는 실행 작업을 맡기지 않는다.

업무 환경에 도입하려면 privacy policy만으로는 부족하다. 필요한 자료는 provider별 DPA/retention, Clicky backend retention, account deletion 처리, security certification, enterprise control, admin logging, screen capture redaction, action approval policy다.

## 불확실성

- 현재 앱이 실제로 어떤 permission prompt와 action approval UI를 제공하는지는 이 자료만으로 확인되지 않는다.
- 공개 repo의 Cloudflare Worker 구조가 현재 비공개 제품 backend와 동일한지는 확인되지 않는다.
- `clicky agent`의 action surface가 local computer control인지 remote agent runtime인지, email/file/browser 권한을 어떻게 받는지는 확인되지 않는다.
- Privacy policy는 broad statement라 provider별 retention과 training 사용 여부를 확정하지 못한다.

## 관련 페이지

- [[Clicky]]
- [[GitHub Clicky Repository]]
- [[Clicky Official Site and Privacy Policy]]
- [[Human-in-the-loop]]
- [[Agentic Workflow]]
- [[Orchestration]]

## 사용한 자료

- [[GitHub Clicky Repository]]
- [[Clicky Official Site and Privacy Policy]]

## 재사용 가능성

- 다시 참조할 가능성: 높음.
- 재사용 상황: local AI companion 검토, screen-aware agent privacy review, background agent action boundary 판단, macOS permission 정책 검토.
- 저장하지 않을 이유: 없음. Clicky뿐 아니라 다른 screen-aware companion app을 평가할 때도 같은 checklist를 쓸 수 있다.

## 관련 결정/글쓰기/발표 활용처

- local AI companion 도입 전 privacy/security review.
- screen-aware assistant와 browser automation agent 비교.
- agent action approval boundary 설명.
- 개인 AI workflow에서 local context capture를 허용할 기준 정리.

## 후속 질문

- screen-aware companion과 browser automation agent의 역할 분리는 어떤 comparison page로 정리할 것인가?
- local screenshot payload를 외부 provider로 보내는 도구를 개인 업무 환경에서 허용할 기준은 무엇인가?
- background agent의 action approval UI를 평가하는 최소 checklist는 무엇인가?

## 저장 이유

Clicky ingest 후 바로 이어지는 판단 질문이고, 다른 local AI companion을 평가할 때도 반복 참조 가능한 privacy/action boundary checklist이므로 `wiki/questions/`에 저장한다.
