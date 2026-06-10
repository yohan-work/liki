---
title: GeekNews Claude Fable 5 and Mythos 5 Article
source_id: geeknews-claude-fable-5-mythos-5-2026-06-10
type: source
status: ingested
created: 2026-06-10
updated: 2026-06-10
tags:
  - source
  - geeknews
  - anthropic
  - claude
  - agentic-workflow
  - ai-safety
related:
  - "[[Claude Fable 5]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Human-in-the-loop]]"
  - "[[Claude Opus 4.8]]"
original_path: raw/external/geeknews-topic-30328-2026-06-10.html
date_added: 2026-06-10
captured_at: 2026-06-10
accessed_at: 2026-06-10
canonical_url: https://news.hada.io/topic?id=30328
content_hash: sha256:c94afee5b210b1adfb8d96dce8887ab6d5e4f8af37c58656cd34bfe91111b937
source_version: geeknews_html_snapshot_2026-06-10
domain:
  - ai
  - software
  - research
  - policy
content_type: article
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - reference
  - decision
  - concept
related_pages:
  - "[[Claude Fable 5]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Human-in-the-loop]]"
  - "[[Claude Opus 4.8]]"
sensitivity: private
evidence_level: source-backed
---

# GeekNews Claude Fable 5 and Mythos 5 Article

## 출처

- 제목: Claude Fable 5/Mythos 5 공개, Anthropic의 5세대 프런티어 모델
- 게시처: GeekNews
- 작성자: boradi
- 게시일: 2026-06-10 02:46 KST
- URL: https://news.hada.io/topic?id=30328
- 원문: https://www.anthropic.com/news/claude-fable-5-mythos-5

## 자료 유형

Anthropic의 2026년 6월 9일 공식 발표를 한국어로 요약하고 Hacker News 반응을 덧붙인 GN+ 글이다. 제품 사양과 정책은 Anthropic 공식 발표를 우선 근거로 사용하고, 댓글과 초기 사용기는 사용자 반응 신호로만 취급한다.

## Domain / 분류

- domain: ai, software, research, policy
- content_type: article
- knowledge_role: source, tool, reference
- source_quality: practitioner
- use_for: reference, decision, concept

## 추가일

2026-06-10

## 원본 위치

- `raw/external/geeknews-topic-30328-2026-06-10.html`
- `raw/external/geeknews-topic-30328-2026-06-10.md`
- 공식 발표 snapshot: `raw/external/anthropic-claude-fable-5-mythos-5-2026-06-09.html`

`Accept: text/markdown` 요청에도 GeekNews 서버가 HTML을 반환해 `.md` 파일 내용은 HTML snapshot과 동일하다.

## Provenance

- captured_at: 2026-06-10
- accessed_at: 2026-06-10
- canonical_url: https://news.hada.io/topic?id=30328
- content_hash: sha256:c94afee5b210b1adfb8d96dce8887ab6d5e4f8af37c58656cd34bfe91111b937
- source_version: geeknews_html_snapshot_2026-06-10
- official_snapshot_hash: sha256:95355d381c751c83a40c01a2d5f50ae818f2e8973ef830359e9d4cc67414e732

## 원문 요약

Anthropic은 같은 기반 모델을 일반 사용자용 안전장치 적용 여부에 따라 Claude Fable 5와 Claude Mythos 5로 나눠 발표했다. Fable 5는 일반 제공 모델이고, Mythos 5는 Project Glasswing 파트너 등 제한된 trusted access 대상에게 일부 안전장치를 해제해 제공한다.

발표의 중심 메시지는 긴 작업에서의 자율성이다. Anthropic은 Fable 5가 대규모 코드 migration, 장기 분석, 비전 기반 작업, 파일 기반 지속 메모리, 과학 연구에서 이전 모델보다 강하다고 주장한다. Claude Code 같은 환경에서는 계획, subagent 위임, 도구 실행, 실패 복구, 자체 검증을 며칠 단위로 수행할 수 있다는 방향을 제시한다.

안전 설계는 모델 성능과 분리할 수 없는 제품 동작이다. 사이버보안, 생물학·화학, 모델 distillation 관련 요청은 별도 분류기가 감지하며, Fable 5 대신 Claude Opus 4.8이 응답하도록 폴백한다. Anthropic은 95% 이상의 세션에서 폴백이 없다고 발표했지만, 무해한 요청의 false positive 가능성도 인정한다.

Mythos급 모델 트래픽에는 안전 모니터링을 위한 30일 데이터 보존이 요구된다. Anthropic은 이 데이터를 모델 학습이나 비안전 목적으로 사용하지 않고, 인간 접근을 기록하며 대부분 30일 후 삭제한다고 설명한다. 따라서 성능 평가와 별도로 zero data retention, 규제 데이터, 조직 보안 정책과의 적합성을 검토해야 한다.

## 핵심 주장

- Fable 5와 Mythos 5는 같은 기반 모델이며 적용되는 안전장치와 접근 대상이 다르다.
- Anthropic은 Mythos급을 Opus급보다 높은 새 capability tier로 정의한다.
- Fable 5의 API 모델명은 `claude-fable-5`이며, 발표 시점 가격은 입력 100만 토큰당 10달러, 출력 50달러다.
- 장기 작업에서 계획, subagent 위임, 도구 사용, 자기 검증, 파일 기반 메모리를 결합하는 능력이 주요 제품 포지셔닝이다.
- 사이버보안, 생물학·화학, distillation 관련 분류기 작동 시 Opus 4.8로 폴백한다.
- Mythos급 모델은 first-party와 third-party surface 모두 30일 데이터 보존을 요구한다.
- 2026년 6월 9일부터 6월 22일까지 일부 구독 플랜에 포함되고, 6월 23일부터 usage credit이 필요한 단계적 출시 계획이 발표되었다.

## 위키에 반영할 개념

- [[Claude Fable 5]]
- [[Claude Code]]
- [[Agentic Workflow]]
- [[Human-in-the-loop]]
- 모델 폴백
- 장기 자율 작업
- 안전 분류기
- 데이터 보존 경계

## 내 프로젝트에 주는 시사점

- 장기 실행 모델이 좋아져도 작업을 며칠 동안 방치하는 것이 곧 신뢰성을 뜻하지는 않는다. 계획, checkpoint, diff, test, source evidence, 비용 기록, stop condition을 함께 남겨야 한다.
- 모델 이름만 기록하면 실제 실행 경로를 놓칠 수 있다. 분류기 작동으로 Opus 4.8에 폴백했다면 어떤 모델이 결과를 만들었는지 audit log에 남겨야 평가가 가능하다.
- 개인 위키나 private repository를 모델에 연결할 때 30일 보존 정책은 성능보다 먼저 확인할 운영 조건이다.
- Fable 5의 파일 기반 지속 메모리 사례는 [[LLM Wiki]]와 유사하지만, 모델의 임시 작업 메모리와 사람이 유지하는 장기 지식 source of truth를 구분해야 한다.

## 후속 라우팅

- concept 강화: [[Agentic Workflow]], [[Human-in-the-loop]]
- tool 강화: [[Claude Code]]
- tool 추가: [[Claude Fable 5]]
- comparison 후보: Claude Fable 5 vs Claude Opus 4.8
- question 후보: 장기 자율 작업에서 모델 폴백과 checkpoint를 어떻게 기록할 것인가?
- idea 후보: agent 실행 로그에 실제 응답 모델, 폴백 이유, 보존 정책을 기록하는 metadata
- mvp 후보: 없음
- 보류: Mythos 5는 제한 접근 모델이므로 별도 tool page를 만들지 않는다.

## 검증 필요 주장

- 벤치마크, Stripe migration, 금융 분석, 비전, 게임, 과학 연구 성과는 Anthropic과 초기 파트너가 발표한 주장이다. System Card, METR 보고서, 독립 평가 없이 일반적인 실사용 성능으로 확정하지 않는다.
- GeekNews 본문의 일부 벤치마크 표는 Fable 5와 Mythos 5 중 더 높은 값을 사용하므로 일반 Fable 5 성능으로 읽지 않아야 한다.
- 30일 보존의 예외, 삭제 범위, 규제·계약상 조건은 Anthropic 지원 문서와 조직 계약으로 별도 확인해야 한다.
- 구독 포함 기간, usage credit, cloud provider availability는 2026년 6월 9일 발표 기준이며 이후 변경될 수 있다.
- Hacker News 초기 사용기는 effort setting, 비용, task 조건이 통제되지 않은 anecdotal evidence다.

## 관련 페이지

- [[Claude Fable 5]]
- [[Claude Code]]
- [[Agentic Workflow]]
- [[Human-in-the-loop]]
- [[Claude Opus 4.8]]

## 열린 질문

- 장기 자율 작업에서 사람이 확인할 checkpoint 간격과 중단 조건은 무엇이어야 하는가?
- 폴백이 발생한 결과를 원래 모델의 평가 결과와 어떻게 분리할 것인가?
- private wiki, source code, 고객 데이터를 30일 보존 모델에 보내도 되는지 어떤 기준으로 결정할 것인가?
- 파일 기반 지속 메모리가 장기 작업 품질을 높였다는 주장을 실제 coding/wiki task에서 어떻게 재현할 것인가?

## 메모

이번 ingest는 사용자가 제공한 GeekNews 글을 기준으로 하되, 연결된 Anthropic 공식 발표 snapshot도 함께 보존해 제품 정책과 공식 주장을 교차 확인했다.
