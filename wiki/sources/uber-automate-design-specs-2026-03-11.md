---
title: Uber Automate Design Specs Article
source_id: uber-automate-design-specs-2026-03-11
type: source
status: active
created: 2026-06-04
updated: 2026-06-04
tags:
  - uber
  - design-system
  - figma
  - mcp
  - agentic-workflow
  - frontend
related:
  - "[[디자인 스펙 자동화]]"
  - "[[Figma Console MCP]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Skills]]"
  - "[[CSS 구조화]]"
original_path: raw/external/uber-automate-design-specs-2026-06-04/article.html
date_added: 2026-06-04
captured_at: 2026-06-04T00:00:00+09:00
accessed_at: 2026-06-04T00:00:00+09:00
canonical_url: https://www.uber.com/ca/en/blog/automate-design-specs/
content_hash: c9938b4584939aefd8128e553545bd751fae19f9adecc2c25656a3e75e4669ee
source_version: "Uber Engineering blog article captured on 2026-06-04; article date 2026-03-11"
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - concept
  - tool
  - reference
source_quality: official
use_for:
  - concept
  - reference
  - inspiration
  - decision
related_pages:
  - "[[디자인 스펙 자동화]]"
  - "[[Figma Console MCP]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Skills]]"
  - "[[CSS 구조화]]"
sensitivity: private
evidence_level: source-backed
---

# Uber Automate Design Specs Article

## 출처

Uber Engineering blog 글 "How Uber Built an Agentic System to Automate Design Specs in Minutes".

## 자료 유형

Uber Base design system 팀이 Figma Console MCP와 AI agent를 사용해 component design spec 생성을 자동화한 사례를 설명하는 공식 engineering blog article이다.

## Domain / 분류

- domain: ai, software
- content_type: article
- knowledge_role: source, concept, tool, reference
- source_quality: official
- use_for: concept, reference, inspiration, decision

## 추가일

2026-06-04

## 원본 위치

- HTML snapshot: `raw/external/uber-automate-design-specs-2026-06-04/article.html`
- canonical URL: https://www.uber.com/ca/en/blog/automate-design-specs/

## Provenance

- captured_at: 2026-06-04T00:00:00+09:00
- accessed_at: 2026-06-04T00:00:00+09:00
- canonical_url: https://www.uber.com/ca/en/blog/automate-design-specs/
- content_hash: `c9938b4584939aefd8128e553545bd751fae19f9adecc2c25656a3e75e4669ee`
- source_version: Uber Engineering blog article captured on 2026-06-04; article date 2026-03-11

## Article snapshot

- title: "How Uber Built an Agentic System to Automate Design Specs in Minutes"
- date: 2026-03-11
- author: Ian Guisard
- category: Engineering, Data / ML, Uber AI

## 원문 요약

글은 Uber Base design system이 수천 명의 engineer에게 쓰이고, component spec이 정확하고 최신이어야 한다는 문제에서 출발한다. Spec이 뒤처지면 engineer가 정의가 아니라 추정으로 구현하게 되고, 그 결과 inconsistency와 tech debt가 생긴다고 설명한다.

Uber가 소개하는 `uSpec`은 Cursor 안의 AI agent와 Figma를 오픈소스 Figma Console MCP로 연결하는 agentic system이다. Agent는 Figma component와 sub-component 구조를 crawl하고, 사용자가 제공한 추가 context와 결합해 완성된 spec page를 Figma file 안에 직접 생성한다. 글은 이 pipeline이 local로 실행되어 proprietary design data가 network 밖으로 나가지 않는다고 주장한다.

문제 규모는 button 하나만 봐도 드러난다. 완성된 component spec에는 anatomy, API, properties, color annotation, structure, screen reader section이 포함된다. Screen reader section은 VoiceOver, TalkBack, ARIA를 다뤄야 하고, 각 platform 문서에서 올바른 accessibility property를 골라야 한다. Uber의 design system은 UIKit, SwiftUI, Android XML, Android Compose, Web React, Go, SDUI 등 7개 implementation stack을 다루므로 수백 개 component spec을 수작업으로 유지하기 어렵다고 설명한다.

Workflow는 두 단계다. 첫째, Cursor에서 agent skill과 Figma component link를 참조하고, agent가 design만으로 추론하기 어려운 state, variant, platform-specific behavior context를 제공한다. 둘째, agent가 Figma Console MCP를 통해 Figma file을 읽고 component structure, design token, variable, style, parent-child relationship을 추출한 뒤 finished spec page를 Figma 안에 렌더링한다.

각 spec section은 별도의 agent skill로 나뉜다. Anatomy skill은 numbered marker와 attribute table을 만들고, API skill은 property/value/default/configuration example을 만들며, properties skill은 variant axes와 boolean toggle preview를 만든다. Color annotation은 element와 state별 token mapping을, structure는 dimension/spacing/padding을, screen reader는 VoiceOver/TalkBack/ARIA 정보를 생성한다.

기술적으로는 두 layer가 결합된다. Agent skill은 validation rule, structured schema, reference documentation을 담아 domain knowledge를 제공한다. Figma Console MCP는 Figma Desktop과 local WebSocket으로 연결되어 component tree, sub-component structure, slot-based composition, variable/variant modeling pattern, token/style data를 agent가 읽고 쓸 수 있게 한다. Agent는 해석이 필요한 영역에서 판단하고, programmatic script는 table, marker, template population 같은 정확한 rendering을 수행한다.

Uber는 이 방식의 장점으로 security, consistency, speed, accuracy, multi-platform, maintainability를 제시한다. 예를 들어 full screen reader spec이 3개 platform을 포함해 2분 이내 생성되고, 수개월 걸리던 수백 component spec 작성이 며칠 단위로 줄어든다고 주장한다.

글은 Figma Console MCP가 Southleft가 만든 open-source infrastructure이며, Uber의 uSpec은 그 위에 쌓인 application layer라고 설명한다. 다음 단계로는 drift detection, code-to-spec generation, new spec types를 언급한다.

## 핵심 주장

- Design system spec은 enterprise scale에서 별도 workstream이 될 정도로 유지보수 비용이 크다.
- Component spec 자동화는 screenshot analysis만으로는 부족하고, Figma component tree, token, variable, style, variant, sub-component structure를 직접 읽어야 한다.
- Agent skill은 domain knowledge, validation rule, schema, reference documentation을 담고, MCP는 Figma에 대한 local read/write bridge 역할을 한다.
- AI 판단과 programmatic rendering을 나누면 interpretation과 precision을 동시에 다룰 수 있다.
- Local MCP connection은 proprietary design data가 외부 cloud API로 나가지 않는다는 점에서 enterprise 도입 조건을 만족시키는 핵심 요소로 제시된다.
- Design spec automation은 design intent와 engineering implementation 사이의 간격을 줄이는 방향으로 소개된다.

## 위키에 반영할 개념

- [[디자인 스펙 자동화]]: design system documentation을 agent + structured data + template rendering workflow로 자동화하는 개념.
- [[Figma Console MCP]]: Figma Desktop과 agent를 local로 연결하는 MCP 기반 infrastructure tool.
- [[Agentic Workflow]]: Figma link/context, skill execution, MCP data extraction, template rendering, validation을 묶은 workflow 사례.
- [[Orchestration]]: agent skill, MCP bridge, local execution, design token, template, programmatic rendering을 조율하는 사례.
- [[Skills]]: spec section별 skill이 domain knowledge와 schema를 담는 사례.
- [[CSS 구조화]]: design token, spacing, structure, component boundary가 구현 spec과 연결되는 사례.

## 내 프로젝트에 주는 시사점

이 글은 agent workflow가 단순 text generation보다 "structured source of truth에 직접 연결되고, 결과물을 원래 작업 도구 안에 렌더링하는 방식"으로 갈 때 실무 가치가 커진다는 사례다. LLM Wiki 관점에서는 raw/source summary/related page만 만드는 것보다, Obsidian이나 Figma 같은 primary workspace 안에 검토 가능한 artifact를 직접 생성하는 workflow를 생각하게 한다.

특히 `skill`을 section별로 나눴다는 점이 중요하다. 하나의 거대한 "design spec 생성 prompt"가 아니라 anatomy, API, properties, color, structure, screen reader처럼 검증 기준이 다른 작업을 나눠 관리한다. 이 구조는 LLM Wiki ingest에서도 source summary, concept update, contradiction check, index/log update를 별도 skill로 나누는 방향과 연결된다.

## 후속 라우팅

- concept 추가: [[디자인 스펙 자동화]]
- tool 추가: [[Figma Console MCP]]
- concept 강화: [[Agentic Workflow]], [[Orchestration]], [[Skills]], [[CSS 구조화]]
- comparison 후보: screenshot 기반 UI 이해 vs Figma component tree 기반 spec generation
- question 후보: agent가 디자인 시스템 spec을 자동 생성할 때 최소 검증 기준은 무엇인가?
- mvp 후보: 없음

## 검증 필요 주장

- `uSpec.design` 문서와 GitHub repository를 별도 source로 확인해야 한다.
- Figma Console MCP의 실제 license, install 방식, supported operations, security boundary는 Southleft repository 기준으로 확인해야 한다.
- "entire pipeline runs locally", "no proprietary design data leaves your network" 주장은 Cursor model/provider 설정과 MCP transport, prompt payload 처리 방식에 따라 달라질 수 있으므로 실제 setup 기준 검증이 필요하다.
- Screen reader spec의 정확도는 VoiceOver, TalkBack, ARIA 공식 문서와 accessibility expert review로 검증해야 한다.
- 2분 이내 생성, 수개월 작업을 며칠로 줄인다는 생산성 주장은 Uber 내부 환경과 component complexity에 의존하므로 일반화하지 않는다.

## 관련 페이지

- [[디자인 스펙 자동화]]
- [[Figma Console MCP]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[Skills]]
- [[CSS 구조화]]

## 열린 질문

- Figma MCP를 사용할 때 design data가 실제로 어디까지 model provider로 전달되는가?
- Design spec 자동화에서 AI가 판단해도 되는 영역과 deterministic script가 처리해야 하는 영역은 어떻게 나눌 것인가?
- 생성된 spec을 accessibility, token, API, platform implementation 관점에서 어떻게 검증할 것인가?

## 메모

이 자료는 공식 engineering blog라 구조와 동기 파악에는 유용하지만, 실제 도입 판단에는 uSpec repository, Figma Console MCP repository, Cursor/LLM provider data policy, Figma Desktop permission model을 별도 확인해야 한다.
