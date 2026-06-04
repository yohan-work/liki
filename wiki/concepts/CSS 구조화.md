---
title: CSS 구조화
type: concept
status: seed
created: 2026-06-02
updated: 2026-06-04
tags:
  - frontend
  - css
  - architecture
  - code-review
related:
  - "[[Velog Tailwind CSS Structure Article]]"
  - "[[Tailwind CSS]]"
  - "[[React Effect Naming]]"
  - "[[Micro Frontend]]"
  - "[[디자인 스펙 자동화]]"
  - "[[Uber Automate Design Specs Article]]"
sensitivity: private
evidence_level: source-backed
---

# CSS 구조화

## 한 줄 정의

CSS 구조화는 style codebase를 reset, component, design token, utility, base style, spacing, responsive layout, build layer 같은 책임 단위로 나누어 관리하는 방식이다.

## 핵심 문제

CSS는 cascade, specificity, inheritance, layout context가 얽혀 있어 작은 수정이 예상 밖의 화면에 영향을 줄 수 있다. [[Velog Tailwind CSS Structure Article]]은 Tailwind를 벗어나는 과정에서 "CSS를 직접 쓰기" 자체보다 CSS codebase 안의 여러 layer를 의식적으로 구분하는 일이 중요하다고 설명한다.

## 작동 방식

- reset 또는 normalize layer에서 기본 browser style 차이와 box model 전제를 정한다.
- component layer는 특정 UI 단위의 class와 CSS 파일을 묶고, 다른 component를 덮어쓰지 않는 convention을 둔다.
- color, font size, line height 같은 design token은 CSS custom property로 관리한다.
- utility layer는 `.sr-only`처럼 여러 component에서 반복되지만 의미가 분명한 작은 helper로 제한한다.
- base style은 site-wide 기본값이므로 작게 시작하고, 반복 패턴이 확인될 때만 넓힌다.
- spacing은 가능하면 outer layout component가 자식 사이의 관계를 정하게 한다.
- responsive layout은 media query뿐 아니라 CSS grid, `auto-fit`, `minmax`, `grid-template-areas`, container query 같은 native CSS 기능을 함께 검토한다.

## 좋은 사용 사례

- Tailwind utility 조합이 누적되어 component의 의미와 구조가 흐려질 때.
- 바닐라 CSS로 작은 사이트나 개인 PoC를 만들지만, 장기 유지보수를 고려해야 할 때.
- AI coding agent가 생성한 CSS를 리뷰할 때 수정 범위와 책임 layer를 분리하고 싶을 때.
- design system까지는 아니지만 color, type, spacing vocabulary를 반복해서 쓰는 프로젝트.
- design token, spacing, structure, accessibility spec을 engineering implementation과 연결해야 하는 design system.

## 실패 패턴

- reset, component style, design token, layout spacing, one-off override를 한 파일에 섞는다.
- 모든 반복을 utility class로 만들거나, 반대로 모든 스타일을 semantic component class에 몰아넣는다.
- base style을 너무 넓게 잡아 각 component가 암묵적 전제에 의존하게 만든다.
- spacing 책임을 부모 layout과 자식 component가 동시에 가져서 margin 충돌과 예외가 늘어난다.
- Tailwind 사용 여부를 CSS 구조화의 대체물로 본다.

## 관련 자료

- [[Velog Tailwind CSS Structure Article]]
- [[Uber Automate Design Specs Article]]

## 관련 개념과 차이

- [[Tailwind CSS]]: utility-first CSS framework다. CSS 구조화의 일부 문제를 framework convention으로 해결하지만, 프로젝트의 component boundary와 semantic HTML 판단을 자동으로 대신하지는 않는다.
- [[React Effect Naming]]: React component 내부 side effect의 책임을 이름으로 드러내는 코드 패턴이다. CSS 구조화는 style layer의 책임과 영향 범위를 드러낸다.
- [[Micro Frontend]]: application, team, deployment 경계의 구조화다. CSS 구조화는 더 낮은 level의 style codebase 경계다.
- [[디자인 스펙 자동화]]: Figma component의 token, spacing, structure, accessibility 정보를 구현 spec으로 연결하는 상위 workflow다.

## 예시

작은 사이트라도 `reset.css`, `tokens.css`, `base.css`, `utilities.css`, `components/card.css`, `components/nav.css`처럼 책임을 나누면, 카드 모양을 고치는 일이 전역 link style이나 grid layout을 건드리는 작업과 분리된다.

## 내 관점 / 임시 결론

AI가 frontend 코드를 다룰 때 CSS 구조화는 시각적 polish보다 먼저 필요한 review vocabulary다. "색을 바꿔라", "간격을 맞춰라" 같은 지시만으로는 agent가 token, component, utility, base layer를 섞어 수정할 가능성이 높다. 작업 지시와 리뷰에서 어느 layer를 고치는지 명시하면 변경 범위와 회귀 위험을 더 잘 통제할 수 있다.

Tailwind를 쓰는 프로젝트도 CSS 구조화에서 자유롭지 않다. utility class를 쓰더라도 component 책임, semantic HTML, token naming, responsive layout strategy, override rule은 별도로 판단해야 한다.

## 열린 질문

- 이 위키의 frontend 작업 템플릿에 CSS layer checklist를 넣을 것인가?
- Tailwind 기반 프로젝트와 바닐라 CSS 프로젝트에서 Codex review prompt를 다르게 가져가야 하는가?
- CSS 구조화 source가 더 쌓이면 [[Tailwind CSS]]와 별도의 comparison page를 만들 것인가?
- design token과 component spacing spec을 Figma source of truth에서 자동 추출할 때 CSS review checklist를 어떻게 바꿔야 하는가?
