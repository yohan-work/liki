---
title: Clicky Official Site and Privacy Policy
source_id: clicky-official-site-privacy-2026-06-04
type: source
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
  - "[[Clicky 공개 repo와 현재 제품 privacy boundary]]"
  - "[[GitHub Clicky Repository]]"
  - "[[Human-in-the-loop]]"
  - "[[Agentic Workflow]]"
original_path: raw/external/clicky-official-site-2026-06-04/
date_added: 2026-06-04
captured_at: 2026-06-04T00:00:00+09:00
accessed_at: 2026-06-04T00:00:00+09:00
canonical_url: https://www.heyclicky.com/
content_hash: c15da6551e7101183415d688bb0c183d6e0cc3607dd9add9f054ba5582683a9c
source_version: "Clicky official homepage and privacy policy captured on 2026-06-04"
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
  - concept
  - reference
  - decision
related_pages:
  - "[[Clicky]]"
  - "[[Clicky 공개 repo와 현재 제품 privacy boundary]]"
  - "[[Human-in-the-loop]]"
  - "[[Agentic Workflow]]"
sensitivity: private
evidence_level: source-backed
---

# Clicky Official Site and Privacy Policy

## 출처

Clicky 공식 사이트와 privacy policy.

## 자료 유형

현재 Clicky 제품 페이지와 privacy policy다. 공개 GitHub repository가 open-source version을 설명한다면, 이 source는 현재 사용자-facing 제품 설명과 데이터 처리 설명을 제공한다.

## Domain / 분류

- domain: ai, software
- content_type: documentation
- knowledge_role: source, tool, reference
- source_quality: official
- use_for: concept, reference, decision

## 추가일

2026-06-04

## 원본 위치

- homepage snapshot: `raw/external/clicky-official-site-2026-06-04/home.html`
- privacy snapshot: `raw/external/clicky-official-site-2026-06-04/privacy.html`
- homepage URL: https://www.heyclicky.com/
- privacy URL: https://www.heyclicky.com/privacy

## Provenance

- captured_at: 2026-06-04T00:00:00+09:00
- accessed_at: 2026-06-04T00:00:00+09:00
- canonical_url: https://www.heyclicky.com/
- homepage hash: `c15da6551e7101183415d688bb0c183d6e0cc3607dd9add9f054ba5582683a9c`
- privacy hash: `8479d888e318d42c554130f268e9f6e8219877462cc0ef4ff57aceed036c8712`
- source_version: Clicky official homepage and privacy policy captured on 2026-06-04

## 원문 요약

공식 홈페이지는 Clicky를 macOS cursor 옆에 있는 AI buddy로 설명한다. 사용자가 큰 소리로 질문하면 Clicky가 작업을 walkthrough하고, `clicky agent`라고 말하면 background agent를 띄워 build, research, email 같은 작업을 하게 한다고 소개한다. Windows 사용자는 waitlist로 안내된다.

Privacy policy는 Clicky website와 macOS application에 적용된다고 밝힌다. Clicky는 push-to-talk action에 반응해 screenshot과 voice input을 Mac에서 local capture하고, AI provider가 응답할 수 있도록 backend proxy로 보낸다고 설명한다. 또한 Anthropic, OpenAI, AssemblyAI, ElevenLabs 같은 third party AI provider를 voice, transcription, assistant 기능에 사용하며, screenshot, transcript, prompt가 backend proxy를 통해 provider로 전송된다고 설명한다.

Privacy policy는 이름, email 같은 personally identifiable information과 optional analytics usage data를 수집할 수 있다고 밝힌다. 데이터는 service 제공, payment, update, support, anonymous usage analysis에 쓰일 수 있으며, 법적 요청이 있으면 개인 정보가 제공될 수 있다고 설명한다. 사용자는 access, rectification, erasure, restriction, portability, objection 같은 GDPR 권리를 가진다고 설명된다.

## 핵심 주장

- 현재 제품 설명은 공개 repository보다 더 넓은 background agent 사용 사례를 제시한다.
- Clicky는 push-to-talk action에 반응해 screenshot과 voice input을 local capture하고 backend proxy로 보낸다고 설명한다.
- Screenshot, transcript, prompt는 backend proxy를 통해 third party AI provider로 전송될 수 있다.
- Clicky는 데이터를 팔지 않는다고 설명하지만, service 제공과 법적 요청, third party processing 가능성은 남아 있다.
- Privacy policy는 데이터 삭제 요청 후 14일 이내 삭제를 설명하지만, 법적 의무가 있으면 더 오래 보관될 수 있다고 밝힌다.

## 위키에 반영할 개념

- [[Clicky]]: 현재 제품은 public repo의 companion 기능 위에 background agent use case를 더 강하게 내세운다.
- [[Clicky 공개 repo와 현재 제품 privacy boundary]]: 공개 repo와 현재 제품 차이, privacy boundary 판단 기준을 저장한다.
- [[Human-in-the-loop]]: push-to-talk은 사용자 action boundary지만, payload 전송 이후에는 backend/provider boundary가 생긴다.
- [[Agentic Workflow]]: walkthrough companion과 background agent는 서로 다른 위험도와 승인 boundary를 가진다.

## 내 프로젝트에 주는 시사점

Clicky는 local context capture와 background agent 실행이 결합될 때 검토 기준이 달라진다는 점을 보여준다. 단순한 cursor-side tutor라면 screenshot/voice payload 전송의 투명성이 핵심이고, background agent라면 build/research/email 같은 action의 승인, 로그, rollback, 외부 전송 범위가 추가로 필요하다.

## 검증 필요 주장

- 공식 홈페이지의 기능 설명은 짧은 marketing copy라 실제 app의 기능 범위, permission prompt, agent action approval, plan/payment 조건은 별도 확인이 필요하다.
- Privacy policy는 provider와 데이터 처리 범주를 설명하지만, 각 provider별 retention, training opt-out, logging 설정은 provider policy나 Clicky의 더 구체적 문서로 확인해야 한다.
- `clicky agent`가 실제로 어떤 local 권한과 remote action을 갖는지는 public repo만으로 확인할 수 없다.
- 법적 관할, 회사 정보, DPA, SOC2/보안 인증, enterprise setting은 이 source만으로 판단할 수 없다.

## 관련 페이지

- [[Clicky]]
- [[Clicky 공개 repo와 현재 제품 privacy boundary]]
- [[GitHub Clicky Repository]]
- [[Human-in-the-loop]]
- [[Agentic Workflow]]

## 열린 질문

- `clicky agent`가 email, file, app control, browser automation에 접근할 때 action approval은 어디서 발생하는가?
- Screenshot과 voice payload의 저장 기간, provider별 retention, model training 사용 여부는 어떻게 확인할 수 있는가?
- Mac local permission과 backend/provider permission을 사용자에게 한 화면에서 설명할 수 있는가?
