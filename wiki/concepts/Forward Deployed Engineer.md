---
title: Forward Deployed Engineer
type: concept
status: active
created: 2026-05-26
updated: 2026-05-26
tags:
  - fde
  - palantir
  - data-platform
  - ai-native-work
  - operations
related:
  - "[[DEVOCEAN Palantir FDE Article]]"
  - "[[Agentic Workflow]]"
  - "[[ML Model Serving Pipeline]]"
  - "[[Personal Operating System]]"
sensitivity: private
evidence_level: source-backed
---

# Forward Deployed Engineer

## 정의

Forward Deployed Engineer(FDE)는 고객 또는 현장 조직의 문제 안에 깊게 들어가 데이터 통합, 애플리케이션 개발, 운영 적용, 사용자 채택까지 연결하는 실행 중심 엔지니어링 역할이다. 이 위키에서는 특정 직무명보다 "복잡한 시스템을 현실에서 작동하게 만드는 운영 패턴"으로 다룬다.

## 중요한 이유

AI와 데이터 시스템은 PoC가 성공해도 조직의 실제 의사결정과 workflow에 들어가지 않으면 가치가 생기지 않는다. [[DEVOCEAN Palantir FDE Article]]은 이 공백을 기술 개발과 현장 운영 사이의 연결 부재로 보고, FDE를 그 연결을 책임지는 execution layer로 설명한다.

## 핵심 아이디어

- FDE는 문제를 전달받아 구현만 하는 역할이 아니라 problem framing부터 시작한다.
- Dev가 일반화된 capability를 여러 고객에게 제공한다면, FDE는 한 조직의 문제에 여러 capability를 통합한다.
- 실행 흐름은 problem framing, data integration, rapid prototyping, productionization, adoption and scaling으로 볼 수 있다.
- 성과 기준은 기능 출시가 아니라 실제 운영 KPI와 사용자 채택이다.
- FDE는 데이터, 플랫폼, 애플리케이션, 비즈니스 프로세스 사이의 glue layer다.

## 좋은 사용 사례

- 데이터는 많지만 운영 의사결정에 연결되지 않는 조직.
- AI/데이터 PoC는 반복되지만 production 전환율이 낮은 조직.
- ERP, CRM, 로그, 권한, 보안, lineage 같은 시스템 통합 문제가 큰 환경.
- [[ML Model Serving Pipeline]]이나 [[Agentic Workflow]]를 실제 업무 루틴에 연결해야 하는 프로젝트.

## 실패 패턴

- FDE를 단순 현장 개발자나 파견 인력으로만 본다.
- 사용자 교육, workflow 통합, 운영 모니터링을 배포 이후의 부수 작업으로 미룬다.
- 빠른 프로토타입은 만들지만 productionization과 ownership을 명확히 하지 않는다.
- Vendor dependency와 내부 역량 이전 문제를 초기에 설계하지 않는다.

## 관련 자료

- [[DEVOCEAN Palantir FDE Article]]

## 관련 개념

- [[Agentic Workflow]]
- [[ML Model Serving Pipeline]]
- [[Personal Operating System]]

## 열린 질문

- 개인 LLM Wiki 자동화에서 FDE에 해당하는 역할은 Codex인가, 운영 루틴인가, 아니면 사용자인가?
- PoC가 실제 반복 workflow에 들어갔는지를 어떤 adoption metric으로 볼 것인가?
- 외부 도구 의존성과 내부 운영 역량 이전을 동시에 설계하려면 어떤 기록이 필요한가?
