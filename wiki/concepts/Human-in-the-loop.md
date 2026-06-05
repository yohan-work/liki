---
title: Human-in-the-loop
type: concept
status: seed
created: 2026-05-20
updated: 2026-06-05
tags:
  - human-review
  - workflow
related:
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Claude Blue]]"
  - "[[Ralph Wiggum Loop]]"
  - "[[Realtime API]]"
  - "[[OpenAI Realtime Models Prompting Guide]]"
  - "[[GeekNews AWS Four Years and Leaving]]"
  - "[[Clicky]]"
  - "[[GitHub Clicky Repository]]"
  - "[[Codex Sites]]"
  - "[[OpenAI Codex Sites Documentation]]"
  - "[[Google I/O 2026 Keynote Moments Article]]"
  - "[[AI 시대의 기술 면접]]"
  - "[[Dein Interviewing in the Age of AI Article]]"
  - "[[PDCA 사이클]]"
  - "[[Asana PDCA Cycle Article]]"
sensitivity: private
evidence_level: source-backed
---

# Human-in-the-loop

## 정의

Human-in-the-loop은 사람이 자동화된 작업을 검토, 안내, 승인, 수정하는 workflow를 말한다.

## 중요한 이유

agentic system이 의도, 품질 기준, privacy boundary에 맞게 작동하도록 돕는다.

## 핵심 아이디어

- 되돌릴 수 없는 변경 전에는 approval gate가 유용하다.
- 모호한 목표와 민감한 tradeoff는 사람이 다뤄야 한다.
- review artifact는 쉽게 inspect할 수 있어야 한다.
- [[Brunch Claude Blue Article]]은 AI-generated output이 인간이 현실적으로 검토할 수 있는 양을 초과할 수 있다는 위험을 제기한다.
- [[AI Hero Ralph Wiggum Article]]은 HITL 모드를 prompt refinement와 risky task에, AFK 모드를 낮은 위험의 반복 작업에 더 적합한 방식으로 구분한다.
- [[OpenAI Realtime Models Prompting Guide]]는 write action, 결제, 취소, 계정 변경, irreversible action처럼 영향이 큰 tool call 전에 사용자의 명시적 확인을 받도록 prompt boundary를 세우는 방식을 제시한다.
- [[GeekNews AWS Four Years and Leaving]]은 AI 지원 봇이나 AI 생성 답변이 고객 지원에서 사람의 판단을 대체할 때 품질과 신뢰가 악화될 수 있다는 일화적 신호를 제공한다.
- [[GitHub Clicky Repository]]는 push-to-talk, 화면 screenshot, 음성 응답, cursor pointing overlay를 통해 agent가 사용자의 화면 이해를 돕되 최종 조작은 사람이 수행하는 local companion pattern을 보여준다.
- [[OpenAI Codex Sites Documentation]]은 production deployment와 access mode 확대 전 source change, migration, build, saved version, audience, secret configuration을 확인하라고 안내한다.
- [[Google I/O 2026 Keynote Moments Article]]은 Gemini Spark가 돈을 쓰거나 이메일을 보내는 고위험 action 전에는 사용자에게 먼저 묻도록 설계되었다고 설명한다.
- [[Dein Interviewing in the Age of AI Article]]은 AI가 만든 산출물을 평가하는 상황에서 사람의 review skill 자체를 면접 대상으로 삼아야 한다고 주장한다.
- [[PDCA 사이클]]에서 Check와 Act는 사람의 검토가 들어가기 좋은 지점이다. 특히 agent 실행 결과가 목표와 맞는지 판단하고 다음 반복을 승인하는 역할은 [[Human-in-the-loop]] boundary와 연결된다.

## 관련 자료

- [[Brunch Claude Blue Article]]
- [[AI Hero Ralph Wiggum Article]]
- [[OpenAI Realtime Models Prompting Guide]]
- [[GeekNews AWS Four Years and Leaving]]
- [[GitHub Clicky Repository]]
- [[OpenAI Codex Sites Documentation]]
- [[Google I/O 2026 Keynote Moments Article]]
- [[Dein Interviewing in the Age of AI Article]]
- [[Asana PDCA Cycle Article]]

## 열린 질문

- 어떤 wiki update를 자동화할 수 있는가?
- 어떤 변경에는 명시적 review가 필요한가?
- screen capture, microphone, accessibility permission을 요구하는 local AI tool은 어떤 승인과 audit boundary가 필요한가?
- agent가 hosted app을 production URL로 배포하거나 access를 넓히기 전 사람이 확인해야 할 최소 항목은 무엇인가?
- PDCA의 Check/Act 단계 중 어떤 판단은 agent가 자동 처리하고 어떤 판단은 사람 승인 뒤에 둬야 하는가?
