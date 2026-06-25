---
title: Anthropic Claude Tag Announcement
type: source
status: ingested
created: 2026-06-26
updated: 2026-06-26
tags:
  - claude-tag
  - slack
  - team-agent
  - enterprise-ai
related:
  - "[[Claude Tag]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[기업 AI 운영 레이어]]"
  - "[[Claude Opus 4.8]]"
sensitivity: private
evidence_level: source-backed
source_id: anthropic-claude-tag-2026-06-23
original_path: raw/external/anthropic-claude-tag-2026-06-26/article.html
date_added: 2026-06-26
captured_at: 2026-06-26
accessed_at: 2026-06-26
canonical_url: https://www.anthropic.com/news/introducing-claude-tag
content_hash: 57a444856645179306a27ed20e8cd43797b123f3c792245dffc7dbc3c96fdaac
source_version: captured-html
domain:
  - ai
  - software
  - business
content_type: article
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
  - "[[Claude Tag]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[기업 AI 운영 레이어]]"
  - "[[Claude Opus 4.8]]"
---

# Anthropic Claude Tag Announcement

## 원문이 말한 내용

Anthropic은 Claude Tag를 팀이 Slack 채널에서 `@Claude`를 호출해 업무를 위임하는 방식으로 소개한다. 관리자가 선택한 채널, 도구, 데이터, 코드베이스 접근을 부여하면 같은 채널의 구성원이 Claude를 태그하고 작업을 맡길 수 있으며, Claude는 채널 안의 관련 정보를 기억해 context를 쌓고 향후 작업을 계획할 수 있다고 설명한다.

글은 Claude Tag를 [[Claude Code]]의 진화 방향으로 해석한다. 기존 단일 사용자 또는 단일 task 중심의 coding agent에서 벗어나, 채널 구성원이 같은 agent의 작업 상태와 대화를 공유하고 이어받는 multiplayer 사용 패턴을 강조한다. Anthropic은 내부 버전의 Claude Tag가 제품팀 코드 생성에 크게 쓰이고 있으며, 제품 지표 조사, 지원 티켓 처리, 버그 원인 분석 같은 비개발 업무에도 쓰인다고 말한다.

제품 기능으로는 Slack thread 응답, 채널 단위 memory, 허용된 다른 Slack 채널과 data source에서 자동 학습, ambient behavior를 통한 proactive update, 장시간 비동기 task와 future task scheduling, DM 기반 private use가 제시된다. 접근 제어는 조직 관리자가 채널별 도구와 정보 범위를 지정하고, identity와 memory가 채널 범위에 묶이는 방식으로 설명된다.

출시 조건은 2026-06-23 기준 Claude Enterprise와 Team 고객 대상 beta다. Claude Tag는 기존 Claude in Slack app을 대체하며, 관리자는 30일 안에 opt-in migration을 할 수 있다고 설명된다. 글은 Claude Tag가 Opus 4.8과 함께 동작한다고 말한다.

## 내 위키에 주는 시사점

이 자료는 team agent가 단순 chat integration이 아니라 channel-scoped memory, delegated tool access, budget, audit log, administrator provisioning을 함께 가져야 한다는 근거다. [[기업 AI 운영 레이어]] 관점에서는 company context와 permission이 Slack 같은 협업 surface에 붙을 때, agent identity와 memory scope를 channel 단위로 설계하는 패턴을 보여준다.

[[Agentic Workflow]] 관점에서는 "agent에게 일을 맡긴다"는 행위가 개인 prompt에서 팀 채널의 공유 work queue로 이동한다. 따라서 완료 보고, 비용 한도, task requester, thread log, follow-up, unresolved task 추적이 workflow artifact가 된다.

[[Claude Code]] 관점에서는 coding agent가 IDE나 CLI 안의 개인 도구에서 조직 채널 안의 비동기 teammate로 확장되는 신호다. 다만 이는 Anthropic의 공식 제품 발표이므로, 실제 사용 가능 범위와 성능, 비용, 보안 조건은 제품 문서와 관리자 설정 화면으로 별도 확인해야 한다.

## 검증 필요 주장

- "제품팀 코드의 65%"라는 수치는 Anthropic 내부 버전 기준의 provider self-report이며, 코드 생성의 정의, 기간, review/merge 기준, 실제 생산성 개선은 이 글만으로 확인할 수 없다.
- channel memory가 어떤 데이터 구조와 retention policy로 저장되는지, private channel과 cross-channel learning이 실제로 어떻게 분리되는지는 제품 문서와 관리자 설정으로 확인해야 한다.
- ambient behavior가 proactive notification과 surveillance 사이에서 어떤 opt-in, rate limit, audit boundary를 갖는지는 별도 검증이 필요하다.
- Claude Tag가 Opus 4.8과 동작한다는 제품 조건은 출시 시점 주장이다. 이후 모델, plan, regional availability, Slack app migration 조건은 바뀔 수 있다.

## 후속 라우팅

- [[Claude Tag]] 도구 페이지를 새로 만들어 Slack 기반 team agent의 access, memory, audit, beta 조건을 정리한다.
- [[Claude Code]]에는 개인 coding agent에서 팀 채널 기반 비동기 agent로 확장되는 흐름을 연결한다.
- [[Agentic Workflow]]와 [[기업 AI 운영 레이어]]에는 channel-scoped memory, tool access, budget, audit log를 보강한다.
- [[Claude Opus 4.8]]에는 Claude Tag의 실행 모델 조건을 연결하되, availability는 검증 필요로 둔다.
