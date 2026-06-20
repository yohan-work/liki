---
title: KrIGF 공익적 상호운용성 세션 제안
type: source
status: ingested
created: 2026-06-20
updated: 2026-06-20
tags:
  - source
  - krigf
  - interoperability
  - open-standards
  - public-documents
  - ai-governance
related:
  - "[[공익적 상호운용성]]"
sensitivity: private
evidence_level: source-backed
source_id: krigf-public-interest-interoperability-session-2026-06-16
original_path: raw/igf-or-kr-4095-2026-06-20.html
date_added: 2026-06-20
captured_at: 2026-06-20
accessed_at: 2026-06-20
canonical_url: https://igf.or.kr/4095
content_hash: sha256:edeca5f59a2164798c40e1bf11ecb8e87b10f27e3d9ff5927f7a72227717424c
source_version: krigf_session_page_html_snapshot_2026-06-20
domain:
  - software
  - policy
content_type: article
knowledge_role:
  - source
  - concept
  - question
source_quality: practitioner
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[공익적 상호운용성]]"
---

# KrIGF 공익적 상호운용성 세션 제안

## 자료 요약

2026년 한국인터넷거버넌스포럼(KrIGF)의 세션 3 제안서 "공익적 상호운영성을 위한 사전 법적 확신 메커니즘"이다. 한국의 공공 문서 생태계에서 공익을 목적으로 한 호환 구현이 법적 불확실성 때문에 중단되거나 위축되는 문제를 다룬다.

제안서는 rHWP의 HWPX 저장 기능 중단, 메트릭 호환 폰트 생성기의 EULA·저작권 쟁점, AI/LLM 생성 공문서의 폰트·포맷 책임을 사례로 든다. 이를 개방형 표준, 디지털 공공재, 다중 이해관계자 인프라, AI 거버넌스가 만나는 문제로 보고, 규제기관이 사전에 집행 가능성에 대한 제한적 확신을 주는 제도를 토론 의제로 제시한다.

## 원문 주장

- 한국의 공공 문서 생태계에는 공익적이지만 법적으로 불확실한 상호운용성 시도가 존재한다.
- 제안서는 rHWP 프로젝트가 2026년 5월 12일 HWPX 저장 기능을 잠정 중단했다고 서술한다.
- Polaris MCFG 생성기는 메트릭 호환 폰트를 만들 때 폰트 EULA와 저작권의 회색지대를 드러내는 사례로 제시된다.
- AI/LLM이 생성한 공문서에서는 폰트와 포맷에 관한 책임 귀속이 추가 쟁점이 된다.
- 이런 문제는 문서 포맷만의 문제가 아니라 개방형 표준, 다중 이해관계자 인프라, 보편적 수용성, 디지털 공공재, AI 거버넌스와 연결된다.
- 세션은 미국 SEC No-Action Letter와 유사한 "한국형 사전 법적 확신 메커니즘"의 윤곽을 라운드테이블에서 논의하도록 설계되었다.
- 세션에서 나온 합의와 이견은 정책 제안 보고서 초안과 오픈소스 HWP/X 개발자 커뮤니티의 후속 작업으로 연결할 계획이다.

## 내 프로젝트에 주는 시사점

- Agent나 LLM이 문서를 생성하는 기능은 출력 정확도만으로 완결되지 않는다. 포맷 구현 권한, 내장 폰트의 라이선스, 배포 방식, 생성 결과의 책임 주체를 함께 검토해야 한다.
- 상호운용성 PoC가 공익적이라는 이유만으로 법적 위험이 사라지지는 않는다. 반대로 불확실성을 이유로 모든 실험을 중단하면 개방형 구현과 디지털 공공재가 성장하기 어렵다.
- 기술 실험에는 기능 검증과 별개로 `사용한 규격`, `역공학 또는 변환 범위`, `라이선스 근거`, `배포 범위`, `법률 검토가 필요한 지점`을 기록하는 provenance가 필요하다.
- 사전 법적 확신은 면책과 동일하지 않다. 실제 제도를 설계할 때는 신청 대상, 판단 기관, 공개 범위, 유효 기간, 사실관계 변경 시 효력, 제3자 권리와의 관계를 명확히 해야 한다.

## 검증 필요 주장

- rHWP의 HWPX 저장 기능 중단 일자, 중단 범위, 이유는 프로젝트 공지와 repository 기록으로 확인해야 한다.
- Polaris MCFG의 기능, 배포 조건, 대상 폰트 EULA와 저작권 쟁점은 공식 repository·문서와 구체적인 라이선스 조항으로 확인해야 한다.
- AI/LLM 생성 공문서의 폰트·포맷 책임은 현재 법령, 계약, 기관별 문서 정책에 따라 달라질 수 있으므로 일반화할 수 없다.
- SEC No-Action Letter는 특정 사실관계에 대한 staff 입장이라는 제도적 맥락이 있으므로 한국형 제도의 직접 모델로 적합한지는 별도 법률·정책 검토가 필요하다.
- 이 페이지는 세션 제안서이며, 실제 토론 결과나 KrIGF의 공식 정책 입장을 담은 결과 보고서가 아니다.

## 메타데이터

- 게시일: 2026-06-16
- 수집일: 2026-06-20
- 작성자 표기: KrIGF 사이트 admin
- 분류: 2026 프로그램
- 원문: https://igf.or.kr/4095
- raw snapshot: `raw/igf-or-kr-4095-2026-06-20.html`
- content_hash: `sha256:edeca5f59a2164798c40e1bf11ecb8e87b10f27e3d9ff5927f7a72227717424c`

