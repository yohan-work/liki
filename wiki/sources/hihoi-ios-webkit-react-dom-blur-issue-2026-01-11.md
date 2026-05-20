---
source_id: hihoi-ios-webkit-react-dom-blur-issue-2026-01-11
type: source
status: ingested
created: 2026-05-20
updated: 2026-05-20
domain:
  - frontend
  - react
  - mobile-web
content_type: technical-debugging-note
knowledge_role:
  - bug-analysis
  - implementation-reference
  - troubleshooting-pattern
source_quality: practitioner-technical-post
use_for:
  - ios-safari-debugging
  - react-event-system-reference
  - mobile-web-edge-case
related_pages:
  - "[[iOS WebKit React onBlur Issue]]"
sensitivity: private
evidence_level: source-backed
original_path: raw/external/2026-01-11-hihoi-ios-webkit-react-dom-blur-issue.md
source_url: "https://hi-hoi.com/post/ios-webkit-react-dom-blur-issue"
date_added: 2026-05-20
---

# hi-hoi iOS WebKit React onBlur Issue Article

## 출처

- 제목: "iOS 사파리에서 React onBlur가 동작하지 않는 이유"
- 게시처: hi-hoi / 호이의 개발자국
- 작성자: 류성현
- 발행일: 2026-01-11
- URL: https://hi-hoi.com/post/ios-webkit-react-dom-blur-issue

## 자료 유형

기술 디버깅 노트 / 프론트엔드 엣지 케이스 분석.

## Domain / 분류

- domain: frontend, react, mobile-web
- content_type: technical-debugging-note
- knowledge_role: bug-analysis, implementation-reference, troubleshooting-pattern
- source_quality: practitioner-technical-post
- use_for: ios-safari-debugging, react-event-system-reference, mobile-web-edge-case

## 추가일

2026-05-20

## 원본 위치

[[raw/external/2026-01-11-hihoi-ios-webkit-react-dom-blur-issue.md]]

## 원문 요약

이 글은 iOS Safari 모바일 웹에서 키보드 Accessory View의 Done 버튼을 누를 때 React `onBlur` 핸들러가 호출되지 않는 현상을 분석한다. 사용자가 보기에는 입력이 종료되고 포커스가 해제된 것처럼 보이지만, React 컴포넌트의 `onBlur`는 호출되지 않는다. 다른 영역을 터치해 포커스를 이동하거나 Android/PC 환경에서는 같은 코드가 정상 동작한다고 설명한다.

핵심 원인은 React의 `onBlur`가 native `blur` 이벤트를 직접 쓰지 않고 버블링 가능한 `focusout` 이벤트를 기반으로 synthetic event를 구성한다는 점이다. iOS WebKit에서 키보드 Done 버튼을 누르는 경로에서는 native `blur`는 발생하지만 `focusout`이 트리거되지 않아 React `onBlur`가 호출되지 않는다.

해결책으로는 특정 입력 요소에 대해 React 이벤트 시스템을 우회하고 DOM `addEventListener("blur", ...)`로 native `blur`를 직접 감지하는 방식을 제시한다. 일반적으로 직접 DOM 이벤트를 붙이는 것은 React에서 피하는 편이지만, 이 경우에는 iOS WebKit과 React 이벤트 추상화의 간극을 우회하는 실용적 선택으로 정리한다.

## 핵심 주장

- iOS 모바일 웹에서 키보드 Done 버튼을 누르면 native `blur`는 발생하지만 `focusout`은 발생하지 않을 수 있다.
- React DOM의 `onBlur`는 native `blur`가 아니라 `focusout`을 기반으로 동작한다.
- 따라서 이 특정 경로에서는 DOM 포커스가 해제된 것처럼 보여도 React `onBlur`는 호출되지 않는다.
- 이 현상은 단순 구현 실수라기보다 React 이벤트 추상화와 iOS WebKit 이벤트 처리 사이의 구조적 간극이다.
- 실무 우회책은 해당 input element에 native `blur` listener를 직접 등록하고 cleanup을 보장하는 것이다.
- 문제 해결 과정에서는 증상 기준, 브라우저 기준, 라이브러리 기준으로 문제를 재정의하는 단계가 중요하다.

## 위키에 반영할 개념

- [[iOS WebKit React onBlur Issue]]
- React Synthetic Event
- Native `blur`
- `focusout`
- iOS Safari keyboard Done button
- WebKit mobile edge case

## 내 프로젝트에 주는 시사점

- 모바일 웹 폼에서 `onBlur`에 의존하는 validation, save, UI update 로직은 iOS Safari Done 버튼 경로를 별도로 테스트해야 한다.
- React abstraction이 모든 browser edge case를 숨겨주지는 않으므로, 문제 지점을 DOM event layer까지 내려가 확인해야 한다.
- 직접 DOM listener를 쓰는 우회책은 cleanup과 scope를 좁게 유지할 때 실무적으로 허용될 수 있다.

## 검증 필요 주장

- React DOM 내부 구현과 iOS WebKit 동작은 버전별로 달라질 수 있으므로, 현재 React/iOS/Safari 조합에서 재현 여부를 다시 확인해야 한다.
- 원문이 연결한 React issue와 sample code의 최신 상태를 확인하면 해결 여부나 upstream 논의 상황을 더 정확히 알 수 있다.
- 우회 코드가 controlled input, composition event, accessibility interaction과 충돌하지 않는지 프로젝트별 검증이 필요하다.

## 관련 페이지

- [[iOS WebKit React onBlur Issue]]

## 열린 질문

- 이 위키에 React event system, mobile WebKit, browser compatibility를 각각 별도 개념으로 분리할 필요가 있는가?
- Form validation을 `onBlur`에 묶는 패턴은 모바일 웹에서 어떤 fallback을 가져야 하는가?
- Playwright/WebKit 또는 실제 iOS device 테스트로 이 케이스를 자동 회귀 테스트할 수 있는가?

## 메모

원문은 관련 React issue tracker와 재현 sample code를 함께 제공한다. 실제 제품 코드에 적용하기 전에는 해당 링크와 현재 브라우저/React 버전에서 재현 여부를 확인한다.
