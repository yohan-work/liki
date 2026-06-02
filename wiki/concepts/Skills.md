---
title: Skills
type: concept
status: seed
created: 2026-05-20
updated: 2026-06-02
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

## 관련 자료

- [[GitHub Content Marketing Team Repository]]
- [[Digital Bourgeois oh-my-codex Article]]
- [[SkillOpt Project Page]]
- [[Digital Bourgeois SkillOpt Article]]
- [[GitHub Matt Pocock Skills Repository]]

## 열린 질문

- 어떤 LLM Wiki 작업을 dedicated skill로 만들 가치가 있는가?
- skill을 어떻게 versioning하고 review해야 하는가?
- skill 개선 전후를 비교할 최소 evaluation set은 무엇인가?
- LLM Wiki 운영에는 grilling, diagnosis, handoff 중 어떤 skill이 가장 먼저 필요한가?
