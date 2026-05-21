---
title: Microsoft Clarity
type: tool
status: seed
created: 2026-05-21
updated: 2026-05-21
tags:
  - ux
  - cro
  - analytics
  - heatmap
  - session-recording
related:
  - "[[Brunch Clarity UX CRO Article]]"
sensitivity: private
evidence_level: source-backed
---

# Microsoft Clarity

## 무엇인가

Microsoft Clarity는 웹사이트 사용자의 행동을 히트맵, 세션 레코딩, 자동화된 인사이트로 관찰해 UX 병목과 전환율 저해 요인을 찾는 행동 분석 도구다.

## 주요 기능

- 히트맵: 클릭, 스크롤, 페이지 영역별 관심과 상호작용을 시각화한다.
- 세션 레코딩: 사용자의 마우스 이동, 클릭, 스크롤 흐름을 재생해 실제 사용 맥락을 관찰한다.
- 인사이트 대시보드: 사용자 좌절이나 혼란을 나타내는 패턴을 자동으로 식별한다.
- Semantic Metrics: 레이지 클릭, 데드 클릭, 과도한 스크롤, 퀵 백 같은 행동 신호를 UX 문제의 선행 지표로 다룬다.

## 좋은 사용 사례

- 정량 분석에서 이탈률이나 전환율 문제가 발견된 페이지의 원인을 관찰한다.
- CTA, 폼, 장바구니, checkout, landing page의 마찰 지점을 찾는다.
- Above the Fold 영역에 핵심 가치 제안과 전환 요소가 충분히 노출되는지 확인한다.
- 모바일 화면에서 버튼 크기, 로딩 지연, 정보 배치 문제를 점검한다.

## 한계

- 세션 레코딩과 히트맵은 사용자가 왜 그렇게 느꼈는지 직접 말해주지는 않는다. 행동 관찰을 바탕으로 가설을 세우고 검증해야 한다.
- 개인정보, 민감 정보, 내부 화면을 기록할 수 있으므로 masking, consent, retention 설정을 검토해야 한다.
- 무료 기능 범위와 성능 영향은 최신 공식 문서와 실제 환경에서 확인해야 한다.
- 행동 데이터는 상관관계를 보여줄 수 있지만, 개선안의 인과 효과는 A/B 테스트나 별도 검증이 필요하다.

## 관련 워크플로

1. GA4 같은 정량 분석 도구로 문제가 큰 페이지나 퍼널 단계를 찾는다.
2. Clarity 히트맵과 세션 레코딩으로 사용자 행동 맥락을 관찰한다.
3. 레이지 클릭, 데드 클릭, 과도한 스크롤 같은 지표를 기준으로 개선 가설을 세운다.
4. UI/콘텐츠/성능을 수정하고 전환율, 이탈률, CPA 같은 결과 지표를 다시 측정한다.

## 관련 자료

- [[Brunch Clarity UX CRO Article]]

## 내 관점 / 임시 결론

Clarity는 product analytics를 "무슨 일이 일어났는가"에서 "사용자가 어디서 막혔는가"로 확장하는 도구로 볼 수 있다. LLM이나 agent 제품에서는 사용자가 프롬프트 입력, 권한 승인, 결과 검토, 재시도 과정에서 어디서 멈추는지 관찰하는 데 특히 유용할 수 있다.

## 열린 질문

- 개인 지식관리 도구나 agent dashboard에 Clarity류 세션 관찰을 적용하는 것이 privacy 비용을 정당화할 만큼 유용한가?
- LLM workflow에서 레이지 클릭이나 데드 클릭에 해당하는 agent interaction 지표는 무엇인가?
- 정량 event와 세션 레코딩을 함께 보려면 어떤 naming convention과 event taxonomy가 필요한가?
