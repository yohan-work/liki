---
title: Anthropic Claude Fable 5 and Mythos 5 Announcement
source_id: anthropic-claude-fable-5-mythos-5-announcement-2026-06-09
type: source
status: ingested
created: 2026-06-11
updated: 2026-06-11
tags:
  - source
  - anthropic
  - claude
  - frontier-model
  - ai-safety
  - data-retention
related:
  - "[[Claude Fable 5]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Human-in-the-loop]]"
  - "[[Claude Opus 4.8]]"
  - "[[GeekNews Claude Fable 5 and Mythos 5 Article]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/anthropic-claude-fable-5-mythos-5-2026-06-09.html
date_added: 2026-06-11
published_at: 2026-06-09
captured_at: 2026-06-10T08:54:48+09:00
accessed_at: 2026-06-11T00:00:00+09:00
canonical_url: https://www.anthropic.com/news/claude-fable-5-mythos-5
content_hash: sha256:95355d381c751c83a40c01a2d5f50ae818f2e8973ef830359e9d4cc67414e732
source_version: anthropic_html_snapshot_2026-06-10
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
source_quality: official
use_for:
  - reference
  - decision
  - concept
  - presentation
related_pages:
  - "[[Claude Fable 5]]"
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Human-in-the-loop]]"
  - "[[Claude Opus 4.8]]"
  - "[[GeekNews Claude Fable 5 and Mythos 5 Article]]"
---

# Anthropic Claude Fable 5 and Mythos 5 Announcement

## 출처

Anthropic의 공식 발표 "Claude Fable 5 and Claude Mythos 5".

## 자료 유형

2026년 6월 9일 발표된 제품 announcement다. 모델 capability, safeguard, trusted access, data retention, 가격, availability에 대한 Anthropic의 1차 자료다. Benchmark와 초기 고객 성과는 공급사와 파트너가 발표한 주장으로 취급한다.

## Domain / 분류

- domain: ai, software, research, policy
- content_type: article
- knowledge_role: source, tool, reference
- source_quality: official
- use_for: reference, decision, concept, presentation

## 추가일

2026-06-11

## 원본 위치

- HTML snapshot: `raw/external/anthropic-claude-fable-5-mythos-5-2026-06-09.html`
- Canonical URL: https://www.anthropic.com/news/claude-fable-5-mythos-5

## Provenance

- captured_at: 2026-06-10T08:54:48+09:00
- accessed_at: 2026-06-11T00:00:00+09:00
- content_hash: `sha256:95355d381c751c83a40c01a2d5f50ae818f2e8973ef830359e9d4cc67414e732`
- source_version: Anthropic HTML snapshot captured on 2026-06-10
- page edit: 발표 페이지는 2026년 6월 9일 AAV 설명에 Dyno Therapeutics 후보라는 내용을 추가했다고 표시한다.

## 원문 요약

Anthropic은 Opus보다 높은 capability tier인 Mythos급 모델을 일반 제공하기 위해 Claude Fable 5를 출시했다. Claude Mythos 5는 같은 기반 모델이지만 일부 영역의 safeguard가 해제된 제한 접근 버전이다. Fable 5는 사이버보안, 생물학·화학, distillation 관련 요청을 별도 classifier가 감지하면 Claude Opus 4.8이 대신 응답한다.

Anthropic은 Fable 5가 긴 작업일수록 기존 Claude 모델보다 우위가 커진다고 주장하며 software engineering, knowledge work, vision, file-based memory, life sciences 사례를 제시한다. Stripe의 5천만 줄 Ruby codebase migration, 장기 분석 benchmark, screenshot 기반 app 재구축, 게임에서의 지속 메모리, Mythos 5의 단백질 설계와 genomics 연구가 사례로 포함된다.

안전 측면에서는 일반 사용자를 위한 Fable 5와 trusted access 대상의 Mythos 5를 분리한다. Fable classifier는 잠재적 misuse와 jailbreak를 탐지하며, 초기 데이터상 95%가 넘는 세션에서는 폴백이 발생하지 않는다고 발표했다. Anthropic은 무해한 요청의 false positive 가능성을 인정하고 safeguard 범위를 줄여갈 계획이라고 설명한다.

Mythos급 모델의 모든 traffic은 first-party와 third-party surface 모두에서 30일 보존된다. Anthropic은 이를 모델 학습이나 비안전 목적으로 사용하지 않고, 인간 접근을 기록하며 거의 모든 경우 30일 뒤 삭제한다고 설명한다.

Fable 5는 Claude API와 consumption-based Enterprise plan에서 발표 당일부터 제공된다. Pro, Max, Team, seat-based Enterprise에서는 2026년 6월 22일까지 추가 비용 없이 포함되고, 6월 23일부터 usage credit이 필요하다고 발표했다. 이후 capacity가 확보되면 subscription plan의 표준 제공 모델로 복귀시키는 것이 목표다.

## 핵심 주장

- Fable 5와 Mythos 5는 같은 기반 모델이며 safeguard와 접근 대상이 다르다.
- Mythos급은 Anthropic이 Opus보다 높은 capability tier로 정의한 모델군이다.
- Fable 5는 사이버보안, 생물학·화학, distillation 관련 classifier가 작동하면 Opus 4.8로 폴백한다.
- Anthropic 초기 데이터상 95%가 넘는 Fable 세션에는 폴백이 발생하지 않는다.
- Mythos급의 first-party와 third-party traffic은 안전 모니터링 목적으로 30일 보존된다.
- API 모델명은 `claude-fable-5`이며 발표 시점 가격은 입력 100만 token당 10달러, 출력 50달러다.
- Fable 5는 장기 자율 작업, vision-only interaction, file-based persistent memory, 과학 연구를 주요 capability로 제시한다.
- Mythos 5는 Project Glasswing partner와 향후 일부 생명과학 연구자를 위한 trusted access로 제한된다.

## 위키에 반영할 개념

- [[Claude Fable 5]]: capability, safeguard, 가격, availability의 공식 근거.
- [[Claude Code]]: 장기 작업의 모델 성능과 harness, checkpoint, 실제 응답 모델 기록의 관계.
- [[Agentic Workflow]]: 수일 단위 자율 작업에서도 classifier, fallback, state, evidence가 workflow 일부가 되는 사례.
- [[Human-in-the-loop]]: 민감 데이터 투입, 장기 실행 지속, 폴백 결과 수용, trusted access에 대한 승인 경계.
- [[Claude Opus 4.8]]: Fable safeguard 작동 시 응답을 처리하는 fallback model.

## 내 프로젝트에 주는 시사점

모델 capability와 실제 runtime behavior를 분리해 기록해야 한다. 사용자가 Fable 5를 요청해도 classifier가 작동하면 결과는 Opus 4.8이 만들 수 있으므로, eval과 실행 로그에는 요청 모델, 실제 응답 모델, 폴백 영역, effort, 비용을 남겨야 한다.

장기 자율성은 model property만으로 평가할 수 없다. Persistent memory, tool access, retry, checkpoint, test, source evidence, stop condition을 제공하는 harness가 결과에 영향을 준다. Anthropic이 vision-only 게임과 file-based memory 사례를 강조한 것도 모델과 환경을 함께 평가해야 한다는 신호다.

Private wiki, source code, 고객 데이터에는 30일 보존 조건이 우선적인 도입 판단 기준이다. 모델 성능이 높아도 zero data retention이나 규제상 삭제 요건이 필요한 작업에는 맞지 않을 수 있다.

## 후속 라우팅

- tool 강화: [[Claude Fable 5]], [[Claude Code]]
- concept 강화: [[Agentic Workflow]], [[Human-in-the-loop]]
- comparison 후보: Claude Fable 5 vs Claude Opus 4.8
- question 후보: classifier fallback이 있는 모델의 eval과 audit log를 어떻게 설계할 것인가?
- decision 후보: private source를 Mythos급 모델에 보낼 수 있는 sensitivity 기준
- 보류: 제한 접근 모델인 Mythos 5의 별도 tool page

## 검증 필요 주장

- Anthropic의 benchmark 우위, Stripe migration, memory improvement, 단백질 설계, novel hypothesis, genomics 성과는 공급사 또는 초기 파트너가 발표한 결과다.
- Anthropic은 genomics 등 일부 결과를 향후 발표할 예정이라고 했으므로 현재는 독립적으로 검토 가능한 연구 결과가 제한적이다.
- Classifier의 평균 작동률과 jailbreak resistance는 내부 평가, bug bounty, 외부 red team 조건에 의존한다. 실제 업무별 false positive와 우회 가능성은 별도 평가가 필요하다.
- 30일 보존의 예외, 삭제 보장, human access 조건, cloud provider와 계약별 차이는 연결된 privacy 문서와 계약으로 확인해야 한다.
- 2026년 6월 22일과 23일의 subscription 조건은 시점성 정보다. 사용 전 최신 pricing과 plan availability를 다시 확인해야 한다.
- System Card와 risk report를 별도 source로 ingest해 safety와 capability claim을 상세 검증해야 한다.

## 관련 페이지

- [[Claude Fable 5]]
- [[Claude Code]]
- [[Agentic Workflow]]
- [[Human-in-the-loop]]
- [[Claude Opus 4.8]]
- [[GeekNews Claude Fable 5 and Mythos 5 Article]]

## 열린 질문

- Fable 5와 Opus 4.8 폴백 세션의 품질과 비용을 어떤 cohort로 분리할 것인가?
- Persistent file memory의 효과를 coding, research, wiki maintenance에서 어떤 controlled task로 검증할 것인가?
- Trusted access model의 safeguard 제거 범위와 조직 책임을 어떤 계약·감사 기준으로 평가할 것인가?

