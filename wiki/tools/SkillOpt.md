---
title: SkillOpt
type: tool
status: seed
created: 2026-06-01
updated: 2026-06-01
tags:
  - skillopt
  - skills
  - agent-evaluation
  - text-space-optimization
related:
  - "[[Skills]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
  - "[[SkillOpt Project Page]]"
  - "[[Digital Bourgeois SkillOpt Article]]"
sensitivity: private
evidence_level: source-backed
---

# SkillOpt

## 무엇인가

SkillOpt는 frozen LLM agent가 사용하는 자연어 skill document를 최적화 대상으로 삼는 text-space optimizer다. [[SkillOpt Project Page]]는 SkillOpt가 rollout evidence, reflection, bounded edit, held-out validation gate를 통해 compact skill 문서를 개선한다고 설명한다.

핵심은 모델 가중치를 바꾸는 fine-tuning이 아니라, agent가 따르는 절차, evidence gathering 방식, tool use, verification, output formatting 규칙을 담은 skill 문서를 학습 가능한 외부 상태로 다루는 것이다.

## 사용 사례

- 반복 agent task에서 성공/실패 trajectory를 모아 skill 문서를 개선한다.
- candidate skill edit를 바로 배포하지 않고 held-out validation gate로 선택한다.
- Codex나 Claude Code 같은 harness에서 skill artifact의 transfer 가능성을 검토한다.
- 개인 LLM Wiki에서는 ingest, lint, source summary 작성 같은 반복 작업의 skill 개선 평가 체계를 설계하는 참고 자료로 쓸 수 있다.

## 강점

- skill이 markdown 문서와 history artifact로 남기 때문에 prompt tweak보다 review와 versioning이 쉽다.
- target model, optimizer model, harness, validation gate를 분리해 agent 개선 과정을 관찰 가능하게 만든다.
- bounded edit와 rejected edit buffer는 유용한 규칙이 큰 rewrite에 묻히는 위험을 줄이는 장치로 제시된다.
- 최종 배포 단위가 `best_skill.md`라면 운영 중에는 optimizer memory 전체를 싣지 않아도 된다.

## 한계

- 공식 프로젝트 페이지의 benchmark 수치와 model 명칭은 논문, 코드, config 기준으로 재확인해야 한다.
- 좋은 verifier와 train/val/test split이 없으면 SkillOpt식 개선은 단순 prompt editing과 구분되기 어렵다.
- 개인 업무 task는 정답 채점이 어려우므로 evaluation design 비용이 먼저 든다.
- repository 설치, provider 지원 범위, data schema, license는 아직 별도 source summary로 확인하지 않았다.

## 관련 워크플로

- 반복 작업을 task item으로 구조화한다.
- 현재 skill로 rollout을 실행하고 tool call, verifier feedback, final score를 기록한다.
- 성공/실패 minibatch를 분리해 재사용 가능한 절차와 실패 패턴을 뽑는다.
- add/delete/replace edit 후보를 만들되 변경 폭을 제한한다.
- held-out validation에서 좋아진 candidate만 current skill로 승격한다.

## 관련 개념

- [[Skills]]
- [[Agentic Workflow]]
- [[Orchestration]]
- [[Codex]]
- [[Claude Code]]

## 메모

LLM Wiki에 바로 적용하려면 먼저 "좋은 ingest"와 "좋은 lint"의 작은 평가 세트를 만들어야 한다. 지금 단계에서는 tool page를 seed로 두고, GitHub repository와 arXiv 논문을 별도 ingest한 뒤 active 여부를 판단한다.
