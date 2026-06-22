---
title: ECMAScript 표준화와 연간 업데이트
type: concept
status: active
created: 2026-06-22
updated: 2026-06-22
tags:
  - javascript
  - ecmascript
  - tc39
  - compatibility
related:
  - "[[Velog 자바스크립트의 진짜 새로운 변화 번역글]]"
  - "[[TC39 Finished Proposals]]"
  - "[[Skills]]"
  - "[[Ponytail]]"
sensitivity: private
evidence_level: source-backed
---

# ECMAScript 표준화와 연간 업데이트

## 한 줄 정의

ECMAScript 업데이트는 TC39 proposal이 단계별 검토와 구현·테스트 조건을 거쳐 Stage 4가 된 뒤 living specification과 연간 edition에 반영되는 과정이다.

## 구분해야 할 상태

- proposal stage: 설계와 표준화 성숙도
- finished proposal: Stage 4 도달 여부
- expected publication year: 연간 edition 포함 목표
- ECMA 비준: 해당 edition의 공식 승인
- engine implementation: V8, SpiderMonkey, JavaScriptCore 등의 구현 상태
- runtime availability: browser와 Node version별 실제 사용 가능 여부
- project adoption: target runtime, transpilation, polyfill, fallback을 고려한 채택 결정

Stage 4나 연간 edition 포함이 모든 사용자 환경에서 즉시 사용할 수 있다는 뜻은 아니다. 반대로 engine에 먼저 구현됐더라도 아직 project compatibility policy에 포함되지 않을 수 있다.

## TC39 proposal 단계

- Stage 0: 위원회 차원의 commitment가 없는 아이디어
- Stage 1: 해결할 문제와 범위를 탐색하는 단계
- Stage 2: 초기 specification text가 있는 단계
- Stage 2.7: 기본 설계가 승인되고 테스트와 구현 피드백을 준비하는 단계
- Stage 3: specification 완성도가 높고 구현 경험을 수집하는 단계
- Stage 4: acceptance criteria를 충족해 specification에 포함될 준비가 된 단계

간단한 단계 설명은 입문에 유용하지만, 실제 승격 조건은 TC39 process document를 기준으로 확인해야 한다.

## 2025·2026에서 실무 영향이 큰 변화

- lazy synchronous processing: iterator helpers
- collection operations: Set methods, Map·WeakMap upsert
- module loading: JSON modules, import attributes
- async normalization: `Promise.try`, `Array.fromAsync`
- safer standard helper: `RegExp.escape`, `Error.isError`
- numeric and binary data: Float16 APIs, `Math.sumPrecise`, Uint8Array base64/hex
- data provenance: `JSON.parse` source text access

기능명과 edition 분류는 [[TC39 Finished Proposals]] snapshot을 기준으로 한다.

## Coding agent에 적용하는 방식

- 새 API를 무조건 사용하라는 목록 대신 target browser와 Node version을 먼저 확인하게 한다.
- 표준 API, existing dependency, polyfill, 직접 구현의 선택 근거를 남긴다.
- generated code를 target runtime에서 test한다.
- compatibility가 부족하면 기존 관용구나 작은 fallback을 사용한다.
- skill의 feature table에는 확인일과 공식 source를 기록한다.

이 방식은 [[Ponytail]]의 native platform 우선 원칙을 보완한다. Native API 우선은 compatibility gate 뒤에 와야 한다.

## 실패 패턴

- Stage 3와 Stage 4를 같은 확정 상태로 취급한다.
- ES edition 포함과 browser 지원을 같은 것으로 본다.
- polyfill이 있다는 이유로 bundle cost, semantics 차이, maintenance를 검토하지 않는다.
- AI training cutoff를 추정해 모든 오래된 관용구의 원인으로 단정한다.
- `Math.sumPrecise`를 금융용 decimal arithmetic으로 오해한다.
- 최신 문법을 쓰기 위해 실제 target보다 높은 runtime을 암묵적으로 요구한다.

## 관련 자료

- [[Velog 자바스크립트의 진짜 새로운 변화 번역글]]
- [[TC39 Finished Proposals]]

## 열린 질문

- 개인 프로젝트의 기본 browser·Node compatibility policy는 무엇인가?
- JavaScript coding skill이 MDN browser compatibility data를 자동 확인하게 만들 가치가 있는가?
- 새 표준 API adoption을 lint rule로 강제할지 review suggestion으로만 둘지 어떤 기준으로 정할 것인가?
