---
title: DESIGN.md
type: concept
status: seed
created: 2026-06-22
updated: 2026-06-22
tags:
  - design-system
  - coding-agent
  - file-first-context
  - frontend
related:
  - "[[Google Stitch DESIGN MD Overview]]"
  - "[[GitHub Awesome DESIGN MD Repository]]"
  - "[[getdesign.md]]"
  - "[[디자인 스펙 자동화]]"
  - "[[Agentic Workflow]]"
  - "[[CSS 구조화]]"
sensitivity: private
evidence_level: source-backed
---

# DESIGN.md

## 한 줄 정의

`DESIGN.md`는 coding·design agent가 제품 UI의 look and feel을 일관되게 구현하도록 시각 원칙, semantic token, component state와 responsive rule을 Markdown으로 전달하는 file-first 디자인 계약이다.

## 무엇을 담는가

- 제품의 visual theme, density, tone과 design principle.
- semantic color role과 light/dark surface hierarchy.
- typography family, scale, weight와 line-height.
- spacing, grid, container, radius, border, shadow.
- button, card, input, navigation의 variant와 interaction state.
- breakpoint, touch target, collapse·stacking behavior.
- accessibility requirement와 사용 금지 패턴.
- agent가 구현 후 확인할 screenshot·interaction 검증 기준.

## AGENTS.md와의 역할 분리

- `AGENTS.md`: repository에서 어떻게 작업하고 build·test·review할지 정의한다.
- `DESIGN.md`: 제품이 어떤 시각 언어와 interaction 원칙을 가져야 하는지 정의한다.
- 두 문서는 겹치는 규칙을 복제하기보다 서로 링크하고 각각 operation contract와 visual contract를 맡는다.

## Figma와의 관계

`DESIGN.md`는 Figma source of truth를 자동으로 대체하지 않는다. Figma가 존재하면 component structure, variant, token과 prototype을 읽어 핵심 규칙을 agent-readable text로 투영하는 companion artifact에 가깝다. Figma가 없는 작은 PoC에서는 초기 design contract가 될 수 있지만 구현과 함께 검증·갱신해야 한다.

## 좋은 사용 사례

- 같은 coding agent가 여러 화면에서 style을 임의로 바꾸는 문제를 줄인다.
- prompt마다 반복하던 color, spacing, typography, component rule을 version control한다.
- designer 없이 시작하는 PoC에서 visual decision과 금지 패턴을 먼저 고정한다.
- design review에서 취향 대신 token, state, breakpoint와 accessibility 기준으로 대화한다.

## 실패 패턴

- 유명 브랜드 DESIGN.md를 그대로 복사해 제품 정체성, trademark, font와 asset 경계를 무시한다.
- hex color와 font 이름만 적고 component state, responsive behavior, accessibility를 생략한다.
- agent가 DESIGN.md를 자동으로 읽는다고 가정하고 실제 context 포함 여부를 확인하지 않는다.
- 구현 변경 뒤 문서를 갱신하지 않아 code와 contract가 drift된다.
- screenshot 유사도만 검증하고 keyboard navigation, contrast, loading·error state를 놓친다.

## 관련 개념과 차이

- [[디자인 스펙 자동화]]: DESIGN.md는 agent가 읽는 입력 contract이고, 디자인 스펙 자동화는 Figma와 structured data에서 검토 가능한 spec을 생성·유지하는 workflow다.
- [[Agentic Workflow]]: DESIGN.md는 agent가 매 실행에서 재사용하는 persistent context artifact다.
- [[CSS 구조화]]: semantic token과 component responsibility가 실제 CSS architecture로 이어져야 한다.

## 관련 자료

- [[Google Stitch DESIGN MD Overview]]
- [[GitHub Awesome DESIGN MD Repository]]
- [[GetDesign MD Website]]

## 열린 질문

- 이 repository에서 DESIGN.md를 자동으로 읽는 agent와 명시적 prompt가 필요한 agent는 각각 무엇인가?
- design token source of truth가 code, Figma, DESIGN.md 중 어디인지 project별로 어떻게 선언할 것인가?
- DESIGN.md drift를 visual regression과 lint로 검출할 수 있는가?

