---
title: Claude Tag
type: tool
status: active
created: 2026-06-26
updated: 2026-06-26
tags:
  - claude-tag
  - slack
  - team-agent
  - enterprise-ai
related:
  - "[[Anthropic Claude Tag Announcement]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[기업 AI 운영 레이어]]"
  - "[[Claude Opus 4.8]]"
sensitivity: private
evidence_level: source-backed
---

# Claude Tag

## 무엇인가

Claude Tag는 Anthropic이 2026-06-23 발표한 Slack 기반 팀용 Claude 사용 방식이다. [[Anthropic Claude Tag Announcement]]에 따르면 사용자는 Slack 채널에서 `@Claude`를 태그해 작업을 위임하고, Claude는 관리자가 허용한 채널, 도구, 데이터, 코드베이스를 사용해 작업한 뒤 thread에 결과를 남긴다.

## 핵심 기능

- Slack 채널 안에서 여러 사용자가 같은 Claude와 상호작용하는 multiplayer agent surface.
- 채널 안의 관련 정보를 기억해 반복 설명을 줄이는 channel-scoped memory.
- 허용된 도구, 데이터, 코드베이스에 접근해 task를 단계로 나누고 실행하는 delegated work pattern.
- ambient behavior가 켜진 경우 관련 정보, unresolved thread, 조용해진 task를 proactive하게 알려주는 흐름.
- 장시간 비동기 작업과 future task scheduling.
- 개인 tool과 connector를 쓰는 DM 기반 private interaction.

## 운영 경계

Claude Tag의 핵심은 편의성보다 access boundary다. 관리자가 channel별로 어떤 도구와 정보를 줄지 정하고, memory도 해당 channel scope에 묶인다고 설명된다. 따라서 도입 판단에서는 다음 항목을 먼저 확인해야 한다.

- 어떤 Slack channel에 어떤 Claude identity가 들어가는가.
- Claude가 읽을 수 있는 data source와 실행 가능한 tool은 무엇인가.
- channel memory가 어디에 저장되고 언제 삭제되는가.
- private channel과 다른 부서 channel의 정보가 섞이지 않는가.
- token spend limit, task requester, audit log, error log를 누가 볼 수 있는가.
- ambient behavior가 명시적 opt-in과 rate limit을 갖는가.

## 관련 워크플로

[[Claude Code]]와의 연결점은 coding agent가 개인 CLI에서 끝나지 않고, 팀 채널 안에서 코드베이스, product metric, support ticket, bug investigation을 맡는 비동기 teammate로 확장되는 방향이다.

[[Agentic Workflow]] 관점에서는 Slack thread가 task request, progress, result, follow-up을 담는 최소 audit artifact가 된다. 개인 prompt보다 팀 채널의 공유 context가 커지는 만큼, unresolved task와 비용, 권한, 책임자를 같이 추적해야 한다.

[[기업 AI 운영 레이어]] 관점에서는 channel-scoped memory, administrator provisioning, spend limit, task log가 조직용 agent runtime의 구성 요소로 보인다. 다만 Slack integration 자체가 전사 운영 레이어를 대체하지는 않는다.

## 관련 자료

- [[Anthropic Claude Tag Announcement]]

## 검증 필요 주장

- Anthropic 내부 버전의 코드 생성 비중과 생산성 효과는 self-report다.
- 실제 관리자 console의 access provisioning, audit log, token spend limit 동작은 제품 문서와 테스트 workspace에서 확인해야 한다.
- Claude Tag가 기존 Claude in Slack app을 대체하는 migration 조건은 2026-06-23 발표 기준이다.
- Opus 4.8 사용 조건은 출시 시점 기준이며, 이후 model routing과 plan availability가 바뀔 수 있다.

## 열린 질문

- 팀 채널의 Claude memory를 project memory와 people memory로 어떻게 분리해야 하는가?
- Slack thread를 장기 audit artifact로 충분히 볼 수 있는가, 아니면 별도 task log와 decision record가 필요한가?
- ambient behavior는 어떤 업무에서 도움이 되고 어떤 업무에서는 noise나 privacy risk가 되는가?
- 개인 LLM Wiki workflow에 channel-scoped team agent pattern을 축소 적용한다면 어떤 "채널" 단위가 맞는가?
