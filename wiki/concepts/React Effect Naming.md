---
title: React Effect Naming
type: concept
status: active
created: 2026-05-27
updated: 2026-06-02
tags:
  - frontend
  - react
  - hooks
  - code-review
  - debugging
related:
  - "[[Velog useEffect Naming Article]]"
  - "[[iOS WebKit React onBlur Issue]]"
  - "[[Micro Frontend]]"
  - "[[Velog Micro Frontend Article]]"
  - "[[CSS 구조화]]"
  - "[[Velog Tailwind CSS Structure Article]]"
sensitivity: private
evidence_level: source-backed
---

# React Effect Naming

## 한 줄 정의

React `useEffect`에 익명 화살표 함수 대신 기명 함수 표현식을 넘겨 이펙트의 목적, 책임, 디버깅 단서를 코드 표면에 드러내는 패턴이다.

## 핵심 문제

`useEffect(() => { ... }, deps)`는 코드가 언제 다시 실행되는지는 의존성 배열로 보여주지만, 왜 존재하는지와 어떤 외부 시스템을 동기화하는지는 직접 말해주지 않는다. 이펙트가 여러 개 있는 컴포넌트에서는 리뷰어가 각 블록을 읽고 의존성을 역추적해야 하며, 에러 스택이나 프로파일링에서도 익명 함수는 구분 단서가 약하다.

## 작동 방식

- `useEffect(function connectToInventoryWebSocket() { ... }, [warehouseId])`처럼 callback에 목적을 나타내는 이름을 붙인다.
- 이름은 이펙트가 외부 시스템과 어떤 관계를 맺는지 드러내는 동사로 시작하는 편이 좋다.
- `connect`, `subscribe`, `listen`, `initialize`, `synchronize`, `apply` 같은 동사는 이펙트의 성격을 빠르게 드러낸다.
- cleanup 로직이 복잡하면 반환 함수에도 이름을 붙여 setup과 teardown의 대칭을 드러낼 수 있다.
- 커스텀 훅 안에서도 여러 이펙트가 있을 수 있으므로, custom hook 추출과 기명 이펙트는 함께 쓸 수 있다.

## 좋은 사용 사례

- 한 컴포넌트나 커스텀 훅에 `useEffect`가 여러 개 있고, 각 이펙트의 책임을 빠르게 구분해야 할 때.
- WebSocket, 지도 SDK, geolocation, analytics, DOM subscription처럼 외부 시스템과 동기화하는 코드.
- GitHub PR 리뷰처럼 IDE hover, 전체 탐색, 런타임 디버깅 도구가 제한된 환경에서 React hook logic을 읽어야 할 때.
- Codex나 다른 AI coding agent가 생성한 React 코드에서 이펙트의 의도와 책임 경계를 검토할 때.

## 실패 패턴

- 이름에 `and`나 `also`가 들어가야 할 만큼 서로 다른 일을 한 이펙트에 몰아넣는다.
- 파생 상태 계산이나 이벤트 핸들러에 있어야 할 로직을 `useEffect`에 넣고 `syncDerivedValue` 같은 모호한 이름으로 감춘다.
- 재사용 가능성이 낮은 일회성 이펙트를 무조건 커스텀 훅으로 빼서 간접 계층만 늘린다.
- 기명 이펙트를 스타일 규칙으로만 보고, 이름 붙이기 과정에서 드러나는 책임 분리 신호를 놓친다.

## 관련 자료

- [[Velog useEffect Naming Article]]

## 관련 개념과 차이

- Custom Hook: 관련 상태, 이펙트, 핸들러를 한 관심사로 묶는 추상화다. 기명 이펙트는 추상화 여부와 관계없이 hook callback의 의도를 드러내는 낮은 비용의 이름 짓기 패턴이다.
- [[iOS WebKit React onBlur Issue]]: React 이벤트 추상화가 모바일 브라우저 edge case에서 드러나는 디버깅 사례다. React Effect Naming은 hook side effect의 책임과 디버깅 단서를 명확히 하는 코드 구조 패턴이다.
- [[Micro Frontend]]: 애플리케이션/팀/배포 경계의 책임을 드러내는 아키텍처 패턴이다. React Effect Naming은 컴포넌트 내부 side effect의 책임을 드러내는 코드 패턴이라는 점에서 scope가 다르다.
- [[CSS 구조화]]: style layer의 reset, component, token, utility, spacing 책임을 드러내는 구조화 방식이다. React Effect Naming과 마찬가지로 작은 코드 표면에서 책임 경계를 명확히 하는 데 초점이 있다.

## 예시

```tsx
useEffect(function synchronizeMapViewport() {
  if (!map) return;
  map.setCenter(center);
  map.setZoom(zoom);
}, [map, center, zoom]);
```

이름이 잘 붙으면 이 이펙트가 내부 상태를 옮기는 코드가 아니라 외부 지도 인스턴스와 viewport를 동기화하는 코드임을 바로 알 수 있다.

## 내 관점 / 임시 결론

이 패턴은 React 코드의 작은 문법 선택이지만, AI가 생성한 코드를 검토할 때 특히 유용한 질문으로 쓸 수 있다. "이 이펙트에 이름을 붙이면 무엇인가?"라는 질문에 답하기 어렵다면, 이펙트가 너무 많은 일을 하거나, 이펙트가 아닌 곳에 있어야 하는 로직일 가능성이 있다.

강제 lint 규칙으로 시작하기보다는 코드 리뷰 체크리스트와 Codex review prompt에 먼저 넣는 편이 현실적이다.

## 열린 질문

- 개인 React 프로젝트에서 이 패턴을 기본 컨벤션으로 둘 것인가?
- production build에서 함수명이 minification될 때 Sentry나 DevTools 디버깅 이점이 어느 정도 유지되는가?
- React 관련 source가 더 쌓이면 React 또는 React Hooks 페이지를 별도로 만들어야 하는가?
- 프론트엔드 아키텍처 source가 더 쌓이면 React 중심 페이지와 frontend architecture 페이지를 분리해야 하는가?
- CSS 구조화와 React hook 구조화가 함께 필요한 frontend review checklist를 만들 것인가?
