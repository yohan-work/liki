---
title: Velog Tailwind CSS Structure Article
source_id: velog-tailwind-css-structure-2026-05-26
type: source
status: active
created: 2026-06-02
updated: 2026-06-02
tags:
  - frontend
  - css
  - tailwind
  - architecture
related:
  - "[[CSS 구조화]]"
  - "[[Tailwind CSS]]"
  - "[[React Effect Naming]]"
  - "[[Micro Frontend]]"
original_path: raw/external/velog-tailwind-css-structure-2026-05-27.html
date_added: 2026-06-02
captured_at: 2026-06-02T00:00:00+09:00
accessed_at: 2026-06-02T00:00:00+09:00
canonical_url: https://velog.io/@tap_kim/moving-away-from-tailwind-and-learning-to-structure-my-css-
content_hash: 3aa09edbc1d2efff9cfdf943fcd91251eee157be626f6f08fea82b0589012724
source_version: "Velog article, released 2026-05-26T14:24:53.797Z, updated 2026-06-02T05:54:55.891Z; Korean translation of Julia Evans original published 2026-05-15"
domain:
  - software
content_type: article
knowledge_role:
  - source
  - concept
  - tool
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[CSS 구조화]]"
  - "[[Tailwind CSS]]"
  - "[[React Effect Naming]]"
  - "[[Micro Frontend]]"
sensitivity: private
evidence_level: source-backed
---

# Velog Tailwind CSS Structure Article

## 출처

Velog 사용자 TapK의 글 "(번역) Tailwind에서 벗어나기, 그리고 CSS 구조화 방법 배우기".

원문은 Julia Evans의 "Moving away from Tailwind and learning to structure my CSS"이며, 이 source summary는 Velog 번역 snapshot을 기준으로 작성했다.

## 자료 유형

Tailwind CSS 사용 경험을 바탕으로 바닐라 CSS codebase를 구조화하는 방법을 설명하는 practitioner article이다.

## Domain / 분류

- domain: software
- content_type: article
- knowledge_role: source, concept, tool, reference
- source_quality: practitioner
- use_for: concept, reference, decision

## 추가일

2026-06-02

## 원본 위치

- raw snapshot: `raw/external/velog-tailwind-css-structure-2026-05-27.html`
- canonical URL: https://velog.io/@tap_kim/moving-away-from-tailwind-and-learning-to-structure-my-css-
- original article: https://jvns.ca/blog/2026/05/15/moving-away-from-tailwind--and-learning-to-structure-my-css-/

## Provenance

- captured_at: 2026-06-02T00:00:00+09:00
- accessed_at: 2026-06-02T00:00:00+09:00
- canonical_url: https://velog.io/@tap_kim/moving-away-from-tailwind-and-learning-to-structure-my-css-
- content_hash: `3aa09edbc1d2efff9cfdf943fcd91251eee157be626f6f08fea82b0589012724`
- source_version: Velog article, released 2026-05-26T14:24:53.797Z, updated 2026-06-02T05:54:55.891Z; Korean translation of Julia Evans original published 2026-05-15

## 원문 요약

이 글은 Tailwind CSS를 버려야 한다는 단순한 주장보다, Tailwind를 오래 쓰면서 배운 구조화 원칙을 바닐라 CSS codebase로 옮기는 과정을 설명한다. 저자는 과거에는 CSS를 어떻게 조직해야 할지 몰라 Tailwind를 유용하게 썼고, Tailwind가 reset, spacing, type scale, utility class 같은 시스템을 통해 CSS 구조를 가르쳐 주었다고 본다.

마이그레이션 후 저자는 CSS codebase를 reset, component, color, font size, utility, base style, spacing, responsive design, build system으로 나누어 생각한다. reset은 Tailwind preflight에서 익숙해진 기본값을 보존하는 장치이고, component CSS는 각 UI 단위가 고유 class와 자체 CSS 파일을 가져 서로 덮어쓰지 않게 하는 방식이다. color와 font size는 CSS custom property로 관리하며, 여러 곳에서 반복되는 `.sr-only` 같은 패턴은 작은 utility layer로 둔다.

spacing은 Tailwind utility를 곳곳에 붙이는 방식보다 outer layout component가 자식 사이의 간격을 담당하는 방향으로 옮긴다. responsive design은 breakpoint 중심 media query보다 CSS grid, `auto-fit`, `minmax`, `grid-template-areas` 같은 기능을 더 많이 활용하는 방향을 탐색한다. build system은 개발 중에는 native CSS import와 nesting을 쓰고, production bundle이 필요하면 esbuild 정도로 제한할 수 있다고 설명한다.

Tailwind에서 벗어나려는 이유로는 최신 Tailwind가 build system에 더 의존한다는 체감, 오래된 `tailwind.min.css` 전체 bundle 사용의 비효율, 바닐라 CSS와 Tailwind 혼용의 유지보수 불편, CSS 실력 향상, semantic HTML 탐색 욕구를 든다. 마지막으로 저자는 CSS를 단순하고 쉬운 기술로 낮춰 보기보다, 어려운 문제를 푸는 전문 기술로 존중해야 한다는 관점을 강조한다.

## 핵심 주장

- Tailwind는 CSS를 대체하기보다 CSS codebase에 필요한 시스템 일부를 사용자가 배우게 만들 수 있다.
- 바닐라 CSS로 돌아갈 때는 reset, component, color, type scale, utility, base style, spacing, responsive design, build system 같은 층을 의식적으로 설계해야 한다.
- component CSS는 각 UI 단위의 책임과 영향 범위를 줄이는 방식으로 구조화할 수 있다.
- spacing은 자식 요소가 바깥 margin을 임의로 갖는 방식보다 layout container가 관계를 정의하는 방식이 더 관리하기 쉽다.
- 최신 CSS grid와 native CSS 기능은 breakpoint-heavy utility 조합을 줄일 수 있는 대안이 될 수 있다.
- Tailwind 도입 여부는 CSS 전문성을 회피하는가, 아니면 구조와 제약을 배우는 발판으로 쓰는가에 따라 의미가 달라진다.

## 위키에 반영할 개념

- [[CSS 구조화]]: CSS codebase를 reset, component, token, utility, base, spacing, responsive, build layer로 나누는 관점.
- [[Tailwind CSS]]: utility-first framework이자 CSS 구조 학습의 발판이 될 수 있는 도구.
- [[React Effect Naming]]: 컴포넌트 내부 책임을 이름으로 드러내는 코드 구조 패턴과 연결한다.
- [[Micro Frontend]]: frontend 구조화의 scope가 component/CSS layer에서 application/deployment layer로 커지는 관계를 연결한다.

## 내 프로젝트에 주는 시사점

AI coding agent가 frontend를 수정할 때는 "스타일을 맞춘다"보다 "어떤 layer의 CSS를 수정하는가"가 중요하다. reset, component, token, utility, layout spacing을 섞어 고치면 리뷰와 rollback이 어려워진다. 작은 개인 PoC에서도 Tailwind를 쓰든 바닐라 CSS를 쓰든, CSS layer vocabulary를 먼저 정하면 Codex review prompt와 frontend 작업 지시가 선명해질 수 있다.

## 후속 라우팅

- concept 추가: [[CSS 구조화]]
- tool 추가: [[Tailwind CSS]]
- concept 강화: [[React Effect Naming]], [[Micro Frontend]]
- comparison 후보: Tailwind CSS vs 바닐라 CSS 구조화
- question 후보: 작은 React 프로젝트에서 Tailwind와 바닐라 CSS를 고르는 기준은 무엇인가?
- mvp 후보: 없음

## 검증 필요 주장

- 최신 Tailwind의 build system 의존도와 standalone 사용 가능성은 Tailwind 공식 문서와 현재 버전 기준으로 확인해야 한다.
- 글 속 bundle size 문제는 저자의 사용 방식과 Tailwind v2/v4 차이에 강하게 의존하므로 일반적인 Tailwind 단점으로 저장하지 않는다.
- Velog 댓글은 최신 Tailwind가 용량 문제와 grid 기능 한계를 더 직관적으로 다룰 수 있게 발전했다고 지적하므로, Tailwind 현재 기능 평가는 공식 문서로 별도 검증해야 한다.
- `@scope`, container query, subgrid, native nesting의 browser support와 production 적용 조건은 MDN 또는 browser compatibility data로 별도 확인해야 한다.

## 관련 페이지

- [[CSS 구조화]]
- [[Tailwind CSS]]
- [[React Effect Naming]]
- [[Micro Frontend]]

## 열린 질문

- 이 위키의 frontend 작업 규칙에 CSS layer vocabulary를 추가할 필요가 있는가?
- Tailwind를 쓰는 프로젝트에서도 component boundary, token, spacing ownership을 별도로 문서화해야 하는가?
- AI가 CSS를 생성할 때 utility class 조합과 semantic class 구조 중 어느 쪽이 review 가능성이 높은가?

## 메모

이 글은 번역된 개인 경험 글이므로 Tailwind 현재 버전에 대한 기술적 사실 판단에는 공식 문서와 실제 프로젝트 설정 확인이 필요하다.
