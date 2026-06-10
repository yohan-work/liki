---
title: Skills
type: concept
status: seed
created: 2026-05-20
updated: 2026-06-10
tags:
  - skills
  - codex
related:
  - "[[Codex]]"
  - "[[Orchestration]]"
  - "[[Content Marketing Team]]"
  - "[[GitHub Content Marketing Team Repository]]"
  - "[[oh-my-codex]]"
  - "[[Digital Bourgeois oh-my-codex Article]]"
  - "[[SkillOpt]]"
  - "[[SkillOpt Project Page]]"
  - "[[Digital Bourgeois SkillOpt Article]]"
  - "[[Matt Pocock Skills]]"
  - "[[GitHub Matt Pocock Skills Repository]]"
  - "[[디자인 스펙 자동화]]"
  - "[[Uber Automate Design Specs Article]]"
  - "[[Humanize KR]]"
  - "[[GitHub im-not-ai Repository]]"
  - "[[하네스 엔지니어링]]"
  - "[[Kiro]]"
  - "[[Yanlog Kiro User Interview 003]]"
sensitivity: private
evidence_level: source-backed
---

# Skills

## 정의

Skills는 agent가 특정 작업을 일관되게 수행하도록 돕는 재사용 가능한 instruction, workflow, capability다.

## 중요한 이유

반복되는 지식 작업을 더 신뢰할 수 있는 operating pattern으로 바꿀 수 있다.

## 핵심 아이디어

- skill은 scope가 명확하고 explicit해야 한다.
- ingest, linting, report generation 같은 반복 작업에 유용하다.
- project safety rule을 보존해야 한다.
- [[GitHub Content Marketing Team Repository]]는 카드뉴스/썸네일 생성과 쇼츠 영상 제작처럼 도구, reference, template, script가 필요한 작업을 skill로 분리하는 예시를 제공한다.
- [[Digital Bourgeois oh-my-codex Article]]은 Codex CLI 위에서 role keyword와 reusable workflow surface를 제공하는 [[oh-my-codex]]를 소개하며, skill을 단일 prompt가 아니라 반복 가능한 작업 entrypoint로 보는 관점을 보강한다.
- [[SkillOpt Project Page]]는 skill을 frozen agent가 사용하는 외부 상태이자 학습 가능한 자연어 절차 문서로 다룬다. 이 관점에서는 skill 변경도 rollout evidence, bounded edit, held-out validation gate를 거쳐야 하는 관리 대상이다.
- [[Digital Bourgeois SkillOpt Article]]은 SkillOpt를 설명 가능하고 재현 가능한 skill 중심 agent 개선 방식으로 해설하며, 결과 artifact로 `best_skill.md`, `history.json`, step별 snapshot을 강조한다.
- [[GitHub Matt Pocock Skills Repository]]는 skill을 거대한 process framework가 아니라 작고 조합 가능한 engineering practice로 다룬다. 특히 grilling, shared language, TDD, diagnosis, architecture review, handoff를 coding agent의 반복 실패 모드에 대응하는 skill로 구성한다.
- [[Uber Automate Design Specs Article]]은 anatomy, API, properties, color annotation, structure, screen reader spec을 각각 별도 agent skill로 나누고, 각 skill이 validation rule, structured schema, reference documentation을 담는 사례를 보여준다.
- [[GitHub im-not-ai Repository]]는 한국어 문체 윤문 규칙을 skill instruction, taxonomy, rewriting playbook, metric, test, installer로 분리한다. 같은 목적의 skill도 Claude Code에서는 multi-agent pipeline, Codex에서는 Fast 단일 호출로 제공해 runtime별 capability 차이를 명시한다.
- [[Yanlog Kiro User Interview 003]]은 skill을 반복 command 모음보다 "잘하는 사람의 일하는 방식"을 조직에 이식하는 단위로 설명한다. FinOps, 프로젝트 관리, 대외 커뮤니케이션처럼 code 밖의 업무도 skill 후보가 될 수 있지만, 판단 조건과 실패 사례 없이 결과 형식만 복제하면 암묵지를 보존하지 못한다.
- [[하네스 엔지니어링]] 관점에서 skill은 always-on policy, artifact structure, tool, validation과 결합될 때 반복 가능한 작업 환경이 된다.

## 관련 자료

- [[GitHub Content Marketing Team Repository]]
- [[Digital Bourgeois oh-my-codex Article]]
- [[SkillOpt Project Page]]
- [[Digital Bourgeois SkillOpt Article]]
- [[GitHub Matt Pocock Skills Repository]]
- [[Uber Automate Design Specs Article]]
- [[GitHub im-not-ai Repository]]
- [[Yanlog Kiro User Interview 003]]

## 열린 질문

- 어떤 LLM Wiki 작업을 dedicated skill로 만들 가치가 있는가?
- skill을 어떻게 versioning하고 review해야 하는가?
- skill 개선 전후를 비교할 최소 evaluation set은 무엇인가?
- LLM Wiki 운영에는 grilling, diagnosis, handoff 중 어떤 skill이 가장 먼저 필요한가?
- 하나의 큰 자동화보다 section별 skill로 나눌 때 어떤 검증 단위가 생기는가?
- cross-agent skill에서 공통 reference와 runtime별 instruction을 어떻게 versioning할 것인가?
