---
title: MEDDPICC
type: concept
status: seed
created: 2026-06-10
updated: 2026-06-10
tags:
  - enterprise-sales
  - b2b
  - opportunity-qualification
related:
  - "[[Kevin82 MEDDPICC Article]]"
  - "[[Forward Deployed Engineer]]"
sensitivity: private
evidence_level: source-backed
---

# MEDDPICC

## 한 줄 정의

MEDDPICC는 복잡한 B2B 영업 기회에서 고객 가치, 구매 권한, 평가·의사결정·계약 절차, 내부 지지자, pain, 경쟁 구도를 점검하는 qualification framework다.

## 핵심 문제

기술적으로 좋은 제안과 실제 구매되는 제안은 다르다. 고객 문제가 충분히 크지 않거나, 경제적 의사결정자와 연결되지 않거나, 평가 기준과 구매 절차를 모르면 PoC나 기술 검토를 통과해도 계약으로 이어지지 않는다.

## 작동 방식

- Metrics: 도입으로 개선될 비용, 시간, 위험, 성과를 수치화한다.
- Economic Buyer: 최종 예산과 계약을 승인할 권한자를 확인한다.
- Decision Criteria: 고객이 선택할 때 사용하는 기술·사업 기준을 파악한다.
- Decision Process: 평가와 승인에 참여하는 사람, 단계, 일정을 파악한다.
- Paper Process: 계약, 보안, 법무, 조달, PO, 납품 절차를 확인한다.
- Identify Pain: 고객이 바꾸려는 문제와 지금 행동해야 하는 이유를 확인한다.
- Champion: 내부에서 제안을 지지하고 의사결정을 움직일 사람을 확보한다.
- Competition: 경쟁 제품, 내부 개발, 현상 유지, 지연 가능성을 파악한다.

## 좋은 사용 사례

- 구매 참여자가 많고 계약 기간이 긴 enterprise software 영업.
- PoC에서 production 계약으로 전환해야 하는 AI·데이터 프로젝트.
- 공공기관 조달과 보안·법무 검토가 필요한 B2B 사업.
- 기술 champion과 예산 승인자가 다른 조직.

## 실패 패턴

- 항목을 CRM 체크박스로만 채우고 실제 evidence를 확인하지 않는다.
- champion의 직급이나 호감만 보고 영향력과 내부 행동을 검증하지 않는다.
- vendor가 만든 ROI 숫자를 고객이 합의한 metrics로 오해한다.
- decision criteria는 알지만 실제 승인 순서와 거부권자를 모른다.
- 경쟁을 다른 vendor로만 보고 현상 유지와 예산 지연을 제외한다.
- 고객 discovery보다 자사 제품 기능을 MEDDPICC 항목에 억지로 맞춘다.

## 관련 자료

- [[Kevin82 MEDDPICC Article]]

## 관련 개념과 차이

- [[Forward Deployed Engineer]]가 문제 정의부터 production adoption까지 실행하는 역할이라면, MEDDPICC는 구매와 도입 가능성을 구조화해 확인하는 영업·사업 판단 도구다.
- 일반 PoC checklist가 기술 성공 기준에 집중한다면 MEDDPICC는 조직, 예산, 절차와 경쟁을 함께 본다.

## 예시

AI knowledge assistant PoC가 정확도 목표를 달성했더라도 economic buyer, security criteria, data retention approval, procurement process, internal champion이 확인되지 않았다면 production opportunity로 검증된 것은 아니다.

## 내 관점 / 임시 결론

개인 PoC에는 과한 프레임워크지만 B2B 전환을 검토할 때는 유용하다. 모든 항목을 채우기보다 pain, champion, economic buyer, decision criteria, paper process 중 확인되지 않은 핵심 위험을 드러내는 용도로 쓰는 편이 낫다.

## 열린 질문

- AI 제품의 MEDDPICC metrics에 정확도 외에 review time, adoption, privacy risk를 어떻게 포함할 것인가?
- champion이 떠나거나 조직 개편이 있을 때 opportunity confidence를 어떻게 갱신할 것인가?
- 초기 founder-led sales에서 최소 MEDDPICC는 어떤 항목으로 줄일 수 있는가?
