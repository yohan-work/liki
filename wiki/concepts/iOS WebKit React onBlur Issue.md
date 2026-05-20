---
title: iOS WebKit React onBlur Issue
type: concept
status: active
created: 2026-05-20
updated: 2026-05-20
tags:
  - frontend
  - react
  - ios
  - webkit
  - mobile-web
  - debugging
related: []
sensitivity: private
evidence_level: source-backed
---

# iOS WebKit React onBlur Issue

## 한 줄 정의

iOS Safari에서 키보드 Done 버튼으로 입력을 종료할 때 native `blur`는 발생하지만 `focusout`이 발생하지 않아 React `onBlur`가 호출되지 않는 모바일 웹 엣지 케이스다.

## 핵심 문제

React의 `onBlur`에 form validation, save, UI state update를 연결한 경우, iOS 사용자가 키보드 Done 버튼으로 입력을 끝내면 화면상 포커스가 사라져도 React handler가 실행되지 않을 수 있다.

## 작동 방식

- Native `blur`와 `focus` 이벤트는 기본적으로 버블링되지 않는다.
- React는 이벤트 위임과 일관된 synthetic event 처리를 위해 `focusout`을 기반으로 `onBlur`를 구현한다.
- iOS WebKit의 keyboard Accessory View Done 버튼 경로에서는 native `blur`는 발생하지만 `focusout`은 누락될 수 있다.
- 결과적으로 DOM 수준에서는 focus가 해제된 것처럼 보이지만 React `onBlur`는 호출되지 않는다.

## 좋은 사용 사례

- iOS Safari에서 input, textarea, search field의 blur 기반 UI update가 누락될 때 원인 후보로 확인한다.
- 모바일 웹 폼 validation이 Android/desktop에서는 정상인데 iOS에서만 불안정할 때 점검한다.
- React synthetic event와 native DOM event의 차이를 설명하는 디버깅 사례로 사용한다.

## 실패 패턴

- "blur가 아예 발생하지 않았다"고 단정하고 DOM event layer를 확인하지 않는다.
- React `onBlur`와 native `blur`를 같은 것으로 가정한다.
- 모든 모바일 브라우저가 같은 keyboard event path를 가진다고 가정한다.
- 직접 DOM listener를 붙이면서 cleanup을 빼먹어 leak이나 중복 handler를 만든다.

## 관련 자료

- [[hi-hoi iOS WebKit React onBlur Issue Article]]

## 관련 개념과 차이

- React Synthetic Event: React가 browser event를 감싸는 추상화이며, native event와 항상 1:1 대응하지 않는다.
- Native `blur`: DOM 요소가 focus를 잃을 때 발생하지만 버블링되지 않는다.
- `focusout`: focus 이동 시 버블링되는 이벤트이며 React `onBlur` 구현에 사용된다.

## 예시

- iPhone Safari에서 input에 포커스한 뒤 키보드 Done 버튼을 누르면 키보드는 내려가지만 React `onBlur` 기반 validation이 실행되지 않는다.
- 같은 input에서 바깥 영역을 터치해 포커스를 이동하면 `focusout` 경로가 작동해 React `onBlur`가 실행된다.

## 내 관점 / 임시 결론

이 이슈는 React를 잘못 썼다기보다 abstraction boundary가 모바일 WebKit edge case에서 드러나는 사례다. `onBlur`가 비즈니스적으로 중요한 trigger라면 iOS 실제 기기 테스트를 포함하고, 필요한 경우 좁은 scope의 native `blur` listener fallback을 둔다.

## 열린 질문

- 이 이슈를 프로젝트 공통 input component에서 처리해야 하는가, 아니면 특정 입력 흐름에서만 처리해야 하는가?
- React 또는 WebKit 쪽에서 향후 동작이 바뀌면 fallback이 중복 호출을 만들 가능성은 없는가?
- 자동 테스트로 iOS keyboard Done 버튼 동작을 안정적으로 재현할 수 있는가?
