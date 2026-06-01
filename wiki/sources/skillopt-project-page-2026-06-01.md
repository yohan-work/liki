---
title: SkillOpt Project Page
source_id: skillopt-project-page-2026-06-01
type: source
status: active
created: 2026-06-01
updated: 2026-06-01
tags:
  - skillopt
  - skills
  - agent-evaluation
  - text-space-optimization
related:
  - "[[SkillOpt]]"
  - "[[Skills]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
original_path: raw/external/skillopt-project-page-2026-06-01.html
date_added: 2026-06-01
captured_at: 2026-06-01T00:00:00+09:00
accessed_at: 2026-06-01T00:00:00+09:00
canonical_url: https://microsoft.github.io/SkillOpt/
content_hash: 56b0ac2ff83fa8b7a8f96f55f12ee49b3be2b15be1c2920e724e99dc5623b52a
source_version: project-page-snapshot
domain:
  - ai
  - software
  - research
content_type: documentation
knowledge_role:
  - source
  - tool
  - concept
  - reference
source_quality: official
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[SkillOpt]]"
  - "[[Skills]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
sensitivity: private
evidence_level: source-backed
---

# SkillOpt Project Page

## 출처

Microsoft GitHub Pages의 SkillOpt 프로젝트 페이지.

## 자료 유형

공식 프로젝트 페이지, 논문/코드/비디오 링크를 포함한 연구 소개 페이지.

## Domain / 분류

- domain: ai, software, research
- content_type: documentation
- knowledge_role: source, tool, concept, reference
- source_quality: official
- use_for: concept, reference, decision

## 추가일

2026-06-01

## 원본 위치

- raw snapshot: `raw/external/skillopt-project-page-2026-06-01.html`
- canonical URL: https://microsoft.github.io/SkillOpt/

## Provenance

- captured_at: 2026-06-01T00:00:00+09:00
- accessed_at: 2026-06-01T00:00:00+09:00
- canonical_url: https://microsoft.github.io/SkillOpt/
- content_hash: `56b0ac2ff83fa8b7a8f96f55f12ee49b3be2b15be1c2920e724e99dc5623b52a`
- source_version: project-page-snapshot

## 원문 요약

SkillOpt는 frozen language agent의 자연어 skill document를 trainable state로 보고, rollout evidence, optimizer-side reflection, bounded edit, held-out validation gate를 통해 skill 문서를 개선하는 text-space optimizer로 소개된다. 모델 가중치나 harness를 바꾸지 않고 agent가 따르는 절차 문서를 학습 대상으로 삼는 점이 핵심이다.

프로젝트 페이지는 target model 7개, benchmark 6개, Codex와 Claude Code harness를 포함한 실험에서 SkillOpt가 no-skill baseline 대비 성능 향상을 보였다고 제시한다. 결과 표에는 direct chat, Codex, Claude Code harness에서 SearchQA, SpreadsheetBench, OfficeQA, DocVQA, LiveMath, ALFWorld류 benchmark별 gain이 정리되어 있다.

방법론은 rollout, reflect, edit, gate의 반복 구조로 설명된다. rollout은 현재 skill을 사용한 실행 trajectory와 점수를 모으고, reflection은 성공/실패 minibatch에서 재사용 가능한 절차를 뽑고, edit 단계는 add/delete/replace 변경을 예산 안에서 합치며, gate는 held-out selection 성능이 좋아질 때만 candidate skill을 받아들인다.

## 핵심 주장

- SkillOpt는 모델 fine-tuning이 아니라 자연어 skill document를 최적화 대상으로 삼는다.
- bounded textual learning rate, rejected edit buffer, slow update, optimizer-side meta skill은 skill update가 destructive rewrite로 흐르지 않게 만드는 안정화 장치로 제시된다.
- 최종 산출물은 optimizer memory가 아니라 배포 가능한 단일 `best_skill.md` artifact다.
- 프로젝트 페이지는 Codex-trained SpreadsheetBench skill이 Claude Code로 transfer되는 등 cross-harness transfer 가능성을 주장한다.

## 위키에 반영할 개념

- [[Skills]]: skill을 단순 prompt snippet이 아니라 평가 가능한 외부 상태와 절차 문서로 볼 수 있다.
- [[Agentic Workflow]]: workflow 개선을 감으로 고치는 대신 rollout, verifier feedback, held-out gate로 관리하는 패턴.
- [[Orchestration]]: optimizer model, target model, harness, validation gate, rejected buffer를 분리하는 orchestration 구조.

## 내 프로젝트에 주는 시사점

LLM Wiki의 skill이나 운영 규칙도 "잘 쓴 지침"에서 멈추지 않고, 반복 작업의 실패 사례, 성공 사례, 검증 기준, 변경 history를 모아 개선할 수 있다. 다만 개인 위키에서는 benchmark와 verifier를 먼저 정의하지 않으면 SkillOpt식 최적화라는 표현은 과장될 수 있다.

## 후속 라우팅

- concept 강화: [[Skills]], [[Agentic Workflow]], [[Orchestration]]
- tool 강화: [[SkillOpt]], [[Codex]], [[Claude Code]]
- comparison 후보: skill 문서 최적화 vs prompt engineering vs fine-tuning
- question 후보: 개인 LLM Wiki skill을 어떤 verifier로 평가할 수 있는가?
- idea 후보: 반복 ingest/lint 작업에 작은 held-out task set을 만들어 skill 변경 전후를 비교한다.
- mvp 후보: LLM Wiki ingest skill evaluation set
- 보류: SkillLens는 별도 source로 확인 전까지 링크 후보로만 둔다.

## 검증 필요 주장

- benchmark 수치와 model 명칭은 프로젝트 페이지와 논문 기준으로 다시 확인해야 한다.
- 실제 repository의 install/run 방식, license, 지원 provider, data format은 GitHub README 기준으로 별도 ingest가 필요하다.
- arXiv 논문과 project page의 실험 조건이 같은지 확인해야 한다.

## 관련 페이지

- [[SkillOpt]]
- [[Skills]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[Codex]]
- [[Claude Code]]

## 열린 질문

- LLM Wiki 유지보수에서 "held-out validation gate"에 해당하는 최소 검증 세트는 무엇인가?
- skill 문서 변경이 실제 작업 품질을 높였는지 어떻게 측정할 것인가?

## 메모

사용자가 제공한 URL은 `#results` fragment를 포함했지만 raw snapshot과 canonical URL은 fragment 없는 프로젝트 페이지 기준으로 보존했다.
