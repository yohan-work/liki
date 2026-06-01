---
title: Micro Frontend
type: concept
status: seed
created: 2026-06-01
updated: 2026-06-01
tags:
  - frontend
  - architecture
  - micro-frontend
  - deployment
related:
  - "[[Velog Micro Frontend Article]]"
  - "[[React Effect Naming]]"
  - "[[iOS WebKit React onBlur Issue]]"
sensitivity: private
evidence_level: source-backed
---

# Micro Frontend

## 한 줄 정의

Micro Frontend는 큰 프론트엔드 애플리케이션을 독립적으로 개발, 배포, 운영 가능한 작은 frontend application 단위로 나누고 다시 통합하는 아키텍처다.

## 핵심 문제

모놀리식 프론트엔드가 커지면 작은 변경에도 전체 빌드와 전체 배포가 필요해지고, 여러 팀의 merge conflict, 기술 스택 통일 제약, 빌드/테스트 시간 증가가 누적된다. [[Velog Micro Frontend Article]]은 MFE를 이런 문제를 줄이기 위해 backend의 microservice 사고를 frontend에 적용한 구조로 설명한다.

## 작동 방식

- 애플리케이션을 domain, team, route, feature 같은 기준으로 나눈다.
- 각 frontend unit은 독립적으로 개발, 테스트, 배포될 수 있어야 한다.
- container application 또는 routing layer가 여러 micro frontend를 하나의 사용자 경험으로 통합한다.
- 통합 시점은 빌드 타임과 런타임으로 나뉜다.
- 통합 위치는 서버, 브라우저, edge layer 중 어디에서 조립할지에 따라 달라진다.

## 좋은 사용 사례

- 여러 팀이 서로 다른 release cadence로 큰 frontend product를 운영한다.
- 특정 domain team이 독립적으로 배포하고 rollback해야 한다.
- 기술 스택을 모두 강제로 통일하기 어렵거나, legacy와 신규 프론트엔드가 장기간 공존해야 한다.
- 장애 격리와 팀 자율성이 빌드/운영 복잡성보다 더 큰 가치가 있다.

## 실패 패턴

- 단순 폴더 분리나 component 분리를 MFE라고 부른다.
- 팀 규모가 작고 배포 병목이 없는데 유행 때문에 도입한다.
- design system, shared dependency, authentication, routing, observability, error boundary를 사전에 설계하지 않는다.
- 런타임 통합에서 React 같은 shared library version과 singleton 설정을 가볍게 본다.
- 여러 앱이 독립 배포되지만 사용자는 일관성 없는 UX와 중복 리소스 비용을 떠안는다.

## 관련 자료

- [[Velog Micro Frontend Article]]

## 관련 개념과 차이

- Monorepo modular frontend: 하나의 repository 안에서 package나 module을 나눠 관리하지만, 최종 빌드/배포 생명주기는 여전히 함께 묶일 수 있다. MFE는 분리된 unit의 독립 생명주기가 더 중요하다.
- Module Federation: Webpack 5 기반 런타임 통합 방식 중 하나다. MFE 자체와 동일어가 아니라 구현 선택지다.
- Next.js Multi-zone: route 단위로 여러 Next.js app을 연결하는 선택지다. 간단하지만 hard navigation과 운영 제약이 있을 수 있다.
- [[React Effect Naming]]: 컴포넌트 내부 side effect의 책임을 드러내는 코드 구조 패턴이다. Micro Frontend는 애플리케이션/팀/배포 경계의 책임을 드러내는 아키텍처 패턴이다.
- [[iOS WebKit React onBlur Issue]]: frontend abstraction boundary가 실제 브라우저 동작에서 깨지는 디버깅 사례다. Micro Frontend에서는 framework, runtime, routing, shared dependency boundary가 더 큰 운영 경계로 등장한다.

## 예시

온라인 강의 서비스에서 결제, 강의 상품, 커뮤니티, 공통 UI를 서로 다른 팀이 맡고, container application이 각 micro frontend를 통합해 사용자에게 하나의 서비스처럼 보여주는 구조를 생각할 수 있다.

## 내 관점 / 임시 결론

MFE는 "큰 프론트엔드를 잘게 나누면 좋아진다"가 아니라 "독립 배포와 팀 자율성의 이득이 통합 복잡성보다 큰가"를 묻는 아키텍처 선택이다. 개인 PoC나 초기 제품에서는 대부분 과하고, 먼저 monorepo modularization, design system, clear ownership, CI 최적화로 충분한지 확인하는 편이 현실적이다.

AI coding agent 관점에서는 MFE boundary가 작업 병렬화와 review scope 축소에 도움이 될 수 있지만, shared contract와 runtime integration을 제대로 관리하지 못하면 agent가 만든 변경의 테스트 표면이 오히려 넓어진다.

## 열린 질문

- 작은 팀에서 MFE를 도입해도 되는 최소 조건은 무엇인가?
- AI coding workflow에서 MFE boundary가 실제로 병렬 개발 속도와 review 품질을 높이는가?
- Module Federation, Next.js Multi-zone, edge composition 중 어떤 통합 방식이 개인 PoC에 가장 낮은 비용으로 검증 가능한가?
