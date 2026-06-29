---
title: Velog Hyunide Bell Inequality Quantum Article
source_id: velog-hyunide-bell-inequality-quantum-2026-06-18
type: source
status: active
created: 2026-06-29
updated: 2026-06-29
tags:
  - source
  - velog
  - quantum-computing
  - bell-inequality
  - qiskit
related:
  - "[[양자컴퓨팅]]"
original_path: raw/external/velog-hyunide-day1-1-2026-06-29.html
date_added: 2026-06-29
published_at: 2026-06-18T02:21:58.977Z
captured_at: 2026-06-29T00:00:00+09:00
accessed_at: 2026-06-29T00:00:00+09:00
canonical_url: https://velog.io/@hyunide/day1.1
content_hash: sha256:a5cb995eab33c7ad7ba87c9186bd57ad53d2fb210128bba3e09070b4089b2334
source_version: "Velog article, released 2026-06-18T02:21:58.977Z, updated 2026-06-29T03:44:23.593Z"
domain:
  - research
  - software
content_type: article
knowledge_role:
  - source
  - concept
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
related_pages:
  - "[[양자컴퓨팅]]"
sensitivity: private
evidence_level: source-backed
---

# Velog Hyunide Bell Inequality Quantum Article

## 출처

Velog 사용자 Hyunjoo Lee의 글 "첫 시작은 벨 부등식과 양자역학!"이다. Quantum Computing 시리즈의 첫 번째 글로, Bell's Inequality와 Tsirelson's bound를 Qiskit 1.x 실습의 배경으로 소개한다.

## 분류

- domain: research, software
- content_type: article
- knowledge_role: source, concept, reference
- source_quality: practitioner
- use_for: concept, reference

## 원본 위치와 provenance

- raw snapshot: `raw/external/velog-hyunide-day1-1-2026-06-29.html`
- canonical URL: https://velog.io/@hyunide/day1.1
- released_at: 2026-06-18T02:21:58.977Z
- updated_at: 2026-06-29T03:44:23.593Z
- captured_at: 2026-06-29T00:00:00+09:00
- SHA-256: `a5cb995eab33c7ad7ba87c9186bd57ad53d2fb210128bba3e09070b4089b2334`

## 원문 요약

글은 Bell's Inequality를 양자역학이 고전적 숨은 변수 이론의 한계를 넘는다는 점을 확인하는 입문 주제로 설명한다. 고전적 상관관계에서는 CHSH 형태의 합이 `|S| <= 2`를 넘을 수 없지만, 양자 얽힘 상태와 적절한 측정 각도를 사용하면 Tsirelson's bound인 `2√2 ≈ 2.828`에 접근할 수 있다고 소개한다.

저자는 이 주제를 Qiskit 1.x로 실험해 볼 예정이라고 말하며, 고전 컴퓨팅의 0/1 비트와 달리 큐비트가 중첩과 측정 각도를 활용할 수 있다는 점을 직관적으로 설명한다. 45도 측정 각도, `cos(45°) = 1/√2`, 네 가지 측정 조합의 합을 통해 2.828이 나온다는 식의 대중적 설명을 제공한다.

## 핵심 주장

- Bell inequality는 고전적 숨은 변수 이론이 허용하는 상관관계의 한계선을 드러내는 도구로 설명할 수 있다.
- 얽힘 상태를 사용한 양자 실험은 고전 한계 `2`를 넘고 Tsirelson's bound `2√2`에 접근할 수 있다.
- Qiskit 1.x 실습에서 Bell inequality 회로는 양자컴퓨팅 입문용 예제로 사용할 수 있다.
- 양자 얽힘은 초광속 정보 전달이 아니라 고전적 직관으로 설명하기 어려운 비국소적 상관관계를 보여주는 현상으로 다뤄야 한다.

## 위키에 반영할 개념

- [[양자컴퓨팅]]: 큐비트, 얽힘, Bell inequality, Qiskit 실습을 연결하는 seed concept로 추가한다.
- Qiskit은 이번 글에서 실습 예고로만 등장하므로 별도 tool page는 만들지 않는다.
- Bell inequality는 반복 source가 쌓이면 별도 concept page로 분리한다.

## 내 프로젝트에 주는 시사점

- 양자컴퓨팅은 현재 LLM Wiki의 핵심 축은 아니지만, 수치해석, 시뮬레이션, 학습 데이터 provisioning, scientific computing workflow와 연결될 수 있는 주변 연구 주제다.
- 이 글은 정밀한 물리학 reference보다 학습 진입점으로 유용하다. 수식, 역사, 실험적 검증, Qiskit 구현은 공식 문서와 교재급 자료로 보강해야 한다.

## 후속 라우팅

- concept 추가: [[양자컴퓨팅]]
- tool 후보: Qiskit
- concept 후보: Bell inequality, Tsirelson's bound
- question 후보: Qiskit으로 Bell inequality를 재현할 때 어떤 회로와 측정 기준을 써야 하는가?
- 보류: Qiskit tool page와 Bell inequality 독립 concept page는 후속 실습 글이나 공식 자료를 ingest한 뒤 만든다.

## 검증 필요 주장

- "벨 부등식은 양자역학이 완벽하게 맞았음을 증명했다"는 식의 표현은 물리학적으로 과도하게 단정적일 수 있다. Bell test가 배제하는 것은 특정한 국소 숨은 변수 이론이라는 식으로 더 정밀하게 확인해야 한다.
- 2022년 노벨 물리학상과 Bell test의 관계는 Nobel Prize 공식 자료로 확인해야 한다.
- IBM Starling의 2029년 출시 예정, "세계 최초 양자 오류 내성 아키텍처" 표현은 IBM 공식 발표로 확인해야 한다.
- Qiskit 1.x에서 Bell inequality 회로를 어떻게 구현하고 simulator와 실제 backend에서 어떤 결과가 나오는지는 Qiskit 공식 문서와 실행 결과로 검증해야 한다.
- 얽힘 설명에서 "실시간으로 영향을 미친다", "동시성" 같은 표현은 초광속 정보 전달로 오해되지 않도록 더 정밀한 물리학 표현으로 다듬어야 한다.

## 관련 페이지

- [[양자컴퓨팅]]

## 열린 질문

- 양자컴퓨팅을 이 위키에서 AI-native work의 주변 연구 주제로 둘 것인가, 별도 연구 트랙으로 키울 것인가?
- Qiskit 실습 글이 이어지면 tool page를 만들고 실행 가능한 notebook 기준으로 정리할 가치가 있는가?
