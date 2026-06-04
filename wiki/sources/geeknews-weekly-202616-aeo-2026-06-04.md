---
title: GeekNews Weekly 202616 AEO Article
type: source
status: ingested
created: 2026-06-04
updated: 2026-06-04
tags:
  - geeknews
  - weekly
  - aeo
  - agentic-seo
related:
  - "[[에이전틱 엔진 최적화]]"
  - "[[Agentic Workflow]]"
  - "[[LLM Wiki]]"
  - "[[OSINT]]"
sensitivity: private
evidence_level: source-backed
source_id: geeknews-weekly-202616-aeo-2026-06-04
original_path: raw/external/geeknews-weekly-202616-2026-06-04/page.html
date_added: 2026-06-04
captured_at: 2026-06-04
accessed_at: 2026-06-04
canonical_url: https://news.hada.io/weekly/202616
content_hash: 2859a14ad41f4066db67d1d4dc815b3963728fa4f53161122b517b21fe689954
source_version: captured-html
domain:
  - ai
  - software
  - business
  - writing
content_type: newsletter
knowledge_role:
  - source
  - concept
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - writing
  - inspiration
related_pages:
  - "[[에이전틱 엔진 최적화]]"
  - "[[Agentic Workflow]]"
  - "[[LLM Wiki]]"
  - "[[OSINT]]"
---

# GeekNews Weekly 202616 AEO Article

## 원문이 말한 내용

GeekNews Weekly 202616은 "이제 SEO 다음은 AEO를 고민할 때입니다"라는 제목으로, 검색 중심 노출이 AI agent와 answer engine 중심 노출로 이동하는 흐름을 다룬다. 글은 Google 검색 상단의 AI Overviews, ChatGPT, Claude, Perplexity 같은 답변형 인터페이스 때문에 기존 SEO의 "검색 순위" 문제가 약해지고, 서비스와 문서가 agent에게 어떻게 발견되고 호출될지를 고민해야 한다고 말한다.

핵심 개념은 AEO(Agentic Engine Optimization)다. 이 글은 AEO를 AI agent가 사이트 콘텐츠를 더 잘 발견하고, 이해하고, 활용할 수 있도록 문서 구조와 접근 방식을 정비하는 작업으로 설명한다. 특히 Claude Code, Cursor, Cline, Aider 같은 coding agent는 사람이 문서를 탐색하듯 오래 머무르지 않고 필요한 페이지를 한두 번 가져와 context에 넣기 때문에, 기존 analytics의 scroll, click, 체류 시간 신호가 거의 남지 않을 수 있다고 지적한다.

문서 설계 기준으로는 token length가 중요하게 제시된다. 문서가 너무 길면 agent가 일부를 자르거나 건너뛰거나 parametric knowledge로 fallback해 환각을 만들 수 있으므로, Quick Start와 API reference 같은 문서를 agent가 처리 가능한 크기로 나누는 접근이 필요하다고 설명한다.

글은 AEO stack 후보로 robots.txt, llms.txt, agent-permissions.json, MCP Server Card를 언급한다. Cloudflare의 "Is Your Site Agent-Ready?" 도구도 함께 소개하며, discoverability, agent용 Markdown content, bot access control, capabilities를 점검하고 실패 항목별 수정 prompt를 제공하는 점을 평가한다. 다만 이런 도구의 점수는 실제 agent 노출 성능이라기보다 checklist 기반 진단에 가깝다고 선을 긋는다.

후반부의 curated topic 목록은 Thoughtworks Technology Radar의 codebase cognitive debt와 permission hungry, Gemma 4 로컬 Codex CLI 실행, Claude Code와 Codex 비교, Happy remote client, OpenHarness, Zerobox, Codex 업데이트, Claude Code Routines, Agents SDK 업데이트, 로컬/on-device agent, AI coding과 학습 저하 같은 항목을 묶어 agent workflow, local model, harness, sandbox, permission boundary 흐름을 보여준다.

## 내 위키에 주는 시사점

이 자료는 [[LLM Wiki]] 자체도 사람만 읽는 문서가 아니라 agent가 읽고 호출하는 지식 저장소라는 관점으로 확장할 필요가 있음을 보여준다. Obsidian link, source summary, concept page, token length, Markdown 구조, canonical source path는 agent-readable knowledge surface의 품질 기준이 될 수 있다.

[[Agentic Workflow]] 관점에서는 "agent에게 일을 맡기는 방법"뿐 아니라 "agent가 사용할 수 있는 문서와 사이트를 어떻게 설계할 것인가"가 별도 설계 문제가 된다. [[OSINT]] 관점에서는 공개 문서, robots.txt, llms.txt, MCP Server Card, API catalog가 agent에게 노출되는 public action/discovery surface가 될 수 있다.

## 검증 필요 주장

- llms.txt, agent-permissions.json, MCP Server Card가 실제 주요 agent에서 얼마나 사용되는지는 이 weekly만으로 검증할 수 없다.
- AEO audit 도구의 점수와 실제 agent 선택/인용/호출 빈도 사이의 상관관계는 아직 실증 자료가 부족하다.
- curated topic 목록의 개별 제품 주장, 예를 들어 Codex 업데이트, Claude Code Routines, Agents SDK 업데이트, Zerobox, OpenHarness는 각 원문 또는 공식 문서를 별도 source로 확인해야 한다.
- 이 자료는 GeekNews의 주간 큐레이션과 해석이므로, Addy Osmani의 AEO 원문과 Cloudflare 도구 문서를 1차 source로 별도 ingest하면 더 견고해진다.

## 후속 라우팅

- [[에이전틱 엔진 최적화]] 개념 페이지의 1차 source로 사용한다.
- Addy Osmani의 AEO 글, Cloudflare "Is Your Site Agent-Ready?", llms.txt 관련 자료, MCP Server Card 관련 자료를 별도 source 후보로 둔다.
- Agents SDK 업데이트, Zerobox, OpenHarness, Happy, Claude Code Routines는 agent harness와 permission boundary 자료로 별도 ingest 후보에 남긴다.
