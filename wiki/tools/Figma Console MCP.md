---
title: Figma Console MCP
type: tool
status: seed
created: 2026-06-04
updated: 2026-06-04
tags:
  - figma
  - mcp
  - design-system
  - agent-tools
related:
  - "[[Uber Automate Design Specs Article]]"
  - "[[디자인 스펙 자동화]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Skills]]"
sensitivity: private
evidence_level: source-backed
---

# Figma Console MCP

## 한 줄 정의

Figma Console MCP는 AI agent가 Figma Desktop의 component data를 local connection으로 읽고 쓰게 하는 MCP 기반 bridge로 소개된다.

## 중요한 이유

[[Uber Automate Design Specs Article]]에서 Figma Console MCP는 Uber의 `uSpec` 자동화가 가능해진 infrastructure layer다. Agent가 screenshot만 보는 것이 아니라 Figma component tree, token, variable, style, sub-component structure를 직접 읽고, template을 Figma file 안에 직접 렌더링하게 한다.

## 작동 방식

- Figma Desktop과 local WebSocket으로 연결된다.
- Agent는 MCP를 통해 component tree, sub-component structure, slot-based composition, variable, variant, token, style data를 읽는다.
- Spec 생성 후에는 template import, detach, text field 채우기, table 구성, marker 배치 같은 write action도 수행한다.
- Uber 글은 이 구조가 local pipeline으로 동작해 proprietary design data가 network 밖으로 나가지 않는다고 설명한다.

## 좋은 사용 사례

- Design system component spec 자동화.
- Figma 안의 실제 token, variable, style을 기준으로 documentation을 생성해야 하는 경우.
- AI interpretation과 deterministic rendering을 함께 써야 하는 경우.
- Enterprise 환경에서 design data를 외부 API로 보내지 않는 local automation이 필요한 경우.

## 한계와 주의점

- Uber 글만으로는 install 방식, permission model, supported operation, license, auth boundary를 판단할 수 없다.
- Local MCP connection이라도 agent model/provider가 어떤 data를 prompt로 받는지는 별도 확인해야 한다.
- Figma layer structure와 design token 관리가 부정확하면 agent가 읽는 source of truth도 부정확하다.
- Write action이 Figma file을 직접 바꾸므로 template, changelog, review boundary가 필요하다.

## 관련 개념과 차이

- [[디자인 스펙 자동화]]: Figma Console MCP는 이 workflow의 infrastructure layer다.
- [[Agentic Workflow]]: Agent가 design tool을 직접 읽고 쓰는 action surface를 제공한다.
- [[Orchestration]]: Skill, MCP, template, validation, rendering을 연결하는 조율 대상이다.
- [[Skills]]: 각 spec section skill이 Figma Console MCP에서 필요한 data를 다르게 요청한다.

## 관련 자료

- [[Uber Automate Design Specs Article]]

## 내 관점 / 임시 결론

Figma Console MCP의 핵심 가치는 "AI가 이미지를 보고 추측하는 단계"를 넘어 "design tool의 structured data를 읽고 원래 tool에 결과를 쓰는 단계"로 agent workflow를 이동시키는 데 있다. 다만 실제 도입 판단은 Southleft의 repository와 security model을 별도 확인해야 한다.

## 열린 질문

- Figma Console MCP의 실제 operation allowlist와 write safety boundary는 무엇인가?
- Figma file 변경을 되돌리거나 diff로 검토하는 workflow가 있는가?
- Local MCP와 model provider prompt 전송 경계를 사용자에게 어떻게 설명할 것인가?
