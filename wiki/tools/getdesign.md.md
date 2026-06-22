---
title: getdesign.md
type: tool
status: seed
created: 2026-06-22
updated: 2026-06-22
tags:
  - design-md
  - design-system
  - coding-agent
  - design-reference
related:
  - "[[GetDesign MD Website]]"
  - "[[GitHub Awesome DESIGN MD Repository]]"
  - "[[Google Stitch DESIGN MD Overview]]"
  - "[[DESIGN.md]]"
  - "[[디자인 스펙 자동화]]"
sensitivity: private
evidence_level: source-backed
---

# getdesign.md

## 한 줄 정의

getdesign.md는 공개 웹사이트의 디자인 패턴과 token을 분석한 `DESIGN.md`를 검색·열람하고 추가 분석을 요청할 수 있는 catalog다.

## 제공하는 것

- 브랜드·제품별 DESIGN.md 분석 catalog.
- visual theme, color role, typography, component, layout, elevation, responsive rule 요약.
- 공개 collection과 연결된 GitHub repository.
- 특정 웹사이트의 private DESIGN.md 요청 경로.

## 좋은 사용 사례

- 새 UI의 visual direction을 논의할 reference vocabulary를 찾는다.
- 여러 design language를 비교해 자체 DESIGN.md 초안을 만든다.
- coding agent에게 전달할 token, component state, responsive rule의 작성 예시를 본다.
- retro web 등 특정 시대의 visual pattern을 연구한다.

## 한계와 리스크

- 공개 브랜드 분석은 해당 브랜드의 공식 design system 문서가 아니다.
- third-party trademark, proprietary font, logo, image와 distinctive trade dress 사용 권한을 제공하지 않는다.
- 분석의 정확성, freshness, accessibility completeness는 보장되지 않는다.
- 외부 DESIGN.md를 project root에 바로 복사하면 제품 고유 context와 existing component system이 충돌할 수 있다.
- private request에는 제출 URL·자료의 저장과 비밀 유지 조건을 확인해야 한다.

## 권장 사용 방식

1. 외부 분석에서 유용한 pattern과 vocabulary만 고른다.
2. 브랜드 고유 asset과 식별 가능한 조합을 제거한다.
3. project의 semantic token, component, responsive·accessibility rule로 다시 작성한다.
4. agent가 문서를 실제로 읽는지 작은 화면 하나로 확인한다.
5. screenshot, interaction, responsive, accessibility test로 결과를 검증한다.

## 관련 자료

- [[GetDesign MD Website]]
- [[GitHub Awesome DESIGN MD Repository]]
- [[Google Stitch DESIGN MD Overview]]

## 열린 질문

- 기존 PoC 하나에 project-specific DESIGN.md를 만들면 UI 수정 횟수와 visual inconsistency가 줄어드는가?
- catalog 분석에서 재사용 가능한 generic pattern과 brand imitation을 구분하는 기준은 무엇인가?

