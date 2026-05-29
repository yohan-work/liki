---
title: OfficeKeeper OSINT Dictionary Article
source_id: officekeeper-osint-2026
type: source
status: active
created: 2026-05-29
updated: 2026-05-29
tags:
  - osint
  - security
  - threat-intelligence
  - attack-surface
related:
  - "[[OSINT]]"
  - "[[Agentic Workflow]]"
  - "[[MCP Remote SSE]]"
  - "[[Personal Operating System]]"
original_path: raw/articles/officekeeper-osint-2026.html
date_added: 2026-05-29
captured_at: 2026-05-29
accessed_at: 2026-05-29
canonical_url: https://www.officekeeper.co.kr/blog-type-dictionary/view/241
content_hash: 708d3e4942271a527eea65df6aa9a91a3fa3da493018ffde4dce94a81b6c38de
source_version: "captured 2026-05-29"
domain:
  - software
  - business
content_type: article
knowledge_role:
  - source
  - concept
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[OSINT]]"
  - "[[Agentic Workflow]]"
  - "[[MCP Remote SSE]]"
  - "[[Personal Operating System]]"
sensitivity: private
evidence_level: source-backed
---

# OfficeKeeper OSINT Dictionary Article

## 출처

오피스키퍼 보안 백과사전의 "OSINT이란 무엇일까요?" 글이다.

## 자료 유형

보안 용어를 설명하는 practitioner dictionary article이다.

## Domain / 분류

- domain: software, business
- content_type: article
- knowledge_role: source, concept, reference
- source_quality: practitioner
- use_for: concept, reference, decision

## 추가일

2026-05-29

## 원본 위치

- canonical_url: https://www.officekeeper.co.kr/blog-type-dictionary/view/241
- raw snapshot: `raw/articles/officekeeper-osint-2026.html`

## Provenance

- captured_at: 2026-05-29
- accessed_at: 2026-05-29
- canonical_url: https://www.officekeeper.co.kr/blog-type-dictionary/view/241
- content_hash: 708d3e4942271a527eea65df6aa9a91a3fa3da493018ffde4dce94a81b6c38de
- source_version: captured 2026-05-29

## 원문 요약

이 글은 OSINT(Open Source Intelligence)를 공개적으로 접근 가능한 정보를 수집하고 분석해 보안 위협이나 특정 대상에 대한 인사이트를 도출하는 활동으로 설명한다. 공개 정보의 범위에는 웹사이트, SNS, 뉴스, 정부 공개 자료, 커뮤니티 포럼, 코드 저장소, Pastebin, 다크웹 게시물 등이 포함된다고 정리한다.

보안 관점에서 OSINT가 필요한 이유는 공격자가 공개 정보를 기반으로 조직의 네트워크 구조, 임직원 이메일, 기술 스택, 도메인 등록 정보, 클라우드 자산을 파악해 공격 전략을 세울 수 있기 때문이다. 방어자는 공격자보다 먼저 외부 노출 정보를 식별하고 위험 요소를 제거하는 방식으로 OSINT를 활용한다고 설명한다.

글은 주요 수집 대상으로 도메인/네트워크 정보, 소셜미디어와 웹 정보, 코드 저장소와 개발자 플랫폼, 다크웹/딥웹 정보, 공공데이터와 문서를 제시한다. 활용 사례로는 threat intelligence, brand protection, incident response, compliance and risk가 정리되어 있다. 한계와 주의점으로는 정확성, 법적 제약, 분석 난이도, 데이터 과잉을 든다.

## 핵심 주장

- OSINT는 공개적으로 접근 가능한 정보를 수집·분석해 위협 탐지나 의사결정에 활용하는 정보 분석 기법이다.
- 공격자는 공개된 조직 정보로 공격 전략을 설계할 수 있으므로, 방어자도 외부 노출 정보를 먼저 찾아 줄이는 활동이 필요하다.
- GitHub, GitLab, Pastebin 같은 개발자 플랫폼의 API key, 암호, token 노출은 중요한 OSINT 수집 대상이다.
- OSINT는 ASM(Attack Surface Management)과 DRP(Digital Risk Protection)의 기반 데이터 역할을 한다.
- OSINT는 합법적 수집 기법이라도 개인정보보호법, 통신비밀보호법 등 법적 제약과 데이터 정확성 문제를 함께 고려해야 한다.

## 위키에 반영할 개념

- [[OSINT]]: 공개정보 수집과 분석을 다루는 보안 개념 페이지로 추가한다.
- [[Agentic Workflow]]: agent가 외부 정보를 수집할 때 합법성, 출처 품질, 과잉 수집, 검증 boundary가 필요하다는 관점으로 연결한다.
- [[MCP Remote SSE]]: remote tool server와 automation endpoint가 외부 노출면이 될 수 있음을 보안 체크리스트로 연결한다.
- [[Personal Operating System]]: 개인 workflow와 AI 도구에서 공개되는 이메일, 계정, API key, 문서 메타데이터를 관리 대상으로 본다.

## 내 프로젝트에 주는 시사점

개인 LLM Wiki와 agent workflow에서는 OSINT를 공격 도구가 아니라 "외부에서 보이는 나와 내 도구의 표면을 점검하는 관점"으로 쓰는 것이 적절하다. 특히 GitHub, 블로그, 공개 문서, screenshots, raw snapshot, API key, MCP endpoint, agent log는 의도치 않은 공개 정보가 될 수 있다.

## 후속 라우팅

- concept 강화: [[OSINT]], [[Agentic Workflow]], [[MCP Remote SSE]]
- tool 강화: 없음
- project 강화: [[Personal Operating System]]
- comparison 후보: OSINT vs RAG source gathering
- question 후보: 개인 AI workflow의 외부 노출면을 어떻게 주기적으로 점검할 것인가?
- idea 후보: 없음
- mvp 후보: 없음
- 보류: ASM, DRP는 별도 source가 쌓인 뒤 개념 페이지 분리

## 검증 필요 주장

- OSINT와 ASM/DRP의 관계는 보안 업계 일반 관점으로 보이지만, 정확한 정의와 적용 범위는 전문 자료나 vendor-neutral source로 추가 확인하는 편이 좋다.
- 개인정보보호법과 통신비밀보호법 관련 주의점은 법률 자문이 아니라 일반 보안 주의사항으로만 사용한다.
- 다크웹/딥웹 모니터링의 실무 범위와 합법성은 별도 기준이 필요하다.

## 관련 페이지

- [[OSINT]]
- [[Agentic Workflow]]
- [[MCP Remote SSE]]
- [[Personal Operating System]]

## 열린 질문

- 개인 프로젝트에서 OSINT 점검 대상은 GitHub, 블로그, 공개 캘린더, 공개 문서, DNS, SaaS 프로필 중 어디까지인가?
- LLM agent가 웹 검색을 수행할 때 수집 가능한 공개정보와 저장해도 되는 정보의 경계는 어디인가?
- raw snapshot과 source summary에 개인정보나 secret이 섞이지 않도록 어떤 lint 또는 review가 필요한가?

## 메모

이 자료는 오피스키퍼의 보안 백과사전 글이므로 vendor-neutral 표준 문서나 보안 프레임워크를 대체하지 않는다.
