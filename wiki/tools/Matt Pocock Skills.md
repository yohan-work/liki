---
title: Matt Pocock Skills
type: tool
status: seed
created: 2026-06-02
updated: 2026-06-02
tags:
  - skills
  - coding-agent
  - claude-code
  - codex
  - engineering
related:
  - "[[GitHub Matt Pocock Skills Repository]]"
  - "[[Skills]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
  - "[[Orchestration]]"
  - "[[SkillOpt]]"
sensitivity: private
evidence_level: source-backed
---

# Matt Pocock Skills

## 한 줄 정의

Matt Pocock Skills는 coding agent가 실제 software engineering workflow를 더 일관되게 수행하도록 돕는 GitHub 기반 skill collection이다.

## 중요한 이유

[[GitHub Matt Pocock Skills Repository]]는 agent가 사용자의 의도를 놓치고, 프로젝트 언어를 몰라 장황해지고, feedback loop 없이 코드를 만들고, architecture를 망가뜨리는 문제를 skill 단위로 다룬다. 이 repo는 skill을 거대한 process framework가 아니라 작고 조합 가능한 engineering practice로 다루는 사례다.

## 설치 / 진입점

README 기준 설치 명령은 다음과 같다.

```bash
npx skills@latest add mattpocock/skills
```

설치 후 `/setup-matt-pocock-skills`를 실행해 issue tracker, triage label, 문서 저장 위치 같은 per-repo config를 설정하도록 안내한다.

## 핵심 skill 묶음

- `grill-me`, `grill-with-docs`: 구현 전 질문 세션으로 요구사항과 결정 트리를 선명하게 만든다.
- `grill-with-docs`: shared language, `CONTEXT.md`, ADR을 통해 agent가 project vocabulary를 쓰도록 돕는다.
- `tdd`: red-green-refactor loop로 테스트 기반 feedback을 만든다.
- `diagnose`: 재현, 최소화, 가설, 계측, 수정, 회귀 테스트를 묶은 debugging loop다.
- `to-prd`, `to-issues`: 대화나 계획을 PRD와 vertical slice issue로 바꾼다.
- `zoom-out`, `improve-codebase-architecture`: agent가 local change를 system design 관점에서 보게 한다.
- `handoff`: 다음 agent가 이어받을 수 있는 handoff artifact를 만든다.
- `write-a-skill`: 새로운 skill을 만들 때 structure와 progressive disclosure를 지키게 한다.

## 좋은 사용 사례

- coding agent에게 기능 구현을 맡기기 전에 요구사항을 더 캐묻고 싶은 경우.
- agent가 프로젝트 용어를 몰라 장황하거나 잘못된 이름을 쓰는 경우.
- 테스트와 debugging loop 없이 빠르게 코드를 만들다가 품질이 떨어지는 경우.
- agent가 만든 codebase가 복잡해져 architecture review가 필요한 경우.
- Codex와 Claude Code 사이에서 재사용 가능한 skill artifact를 비교하고 싶은 경우.

## 실패 패턴

- skill을 설치하면 agent 품질이 자동으로 좋아진다고 본다.
- setup skill을 생략하고 issue tracker, label, docs path 같은 shared config 없이 다른 skill을 실행한다.
- project-specific vocabulary와 ADR 없이 generic skill만 반복한다.
- TDD나 diagnosis skill을 쓰면서도 실제 test, browser, log, typecheck feedback을 제공하지 않는다.
- 각 `SKILL.md`를 읽지 않고 README summary만으로 workflow를 운영한다.

## 관련 자료

- [[GitHub Matt Pocock Skills Repository]]

## 관련 개념과 차이

- [[Skills]]: Matt Pocock Skills는 skill 설계 철학의 practitioner example이다.
- [[SkillOpt]]: SkillOpt는 skill document를 evaluation loop로 최적화하는 연구/도구 관점이다. Matt Pocock Skills는 사람이 만든 engineering practice collection에 가깝다.
- [[oh-my-codex]]: Codex CLI 위의 workflow layer다. Matt Pocock Skills는 개별 작업 절차와 engineering feedback loop를 skill로 제공한다.
- [[Orchestration]]: setup, grilling, TDD, diagnosis, issue breakdown, handoff를 조합하는 orchestration surface로 볼 수 있다.

## 내 관점 / 임시 결론

이 repo의 가장 중요한 시사점은 "agent에게 더 큰 process를 맡기기"가 아니라 "작고 검토 가능한 skill로 실패 모드를 줄이기"다. LLM Wiki 운영에서도 ingest, ask, review 같은 명령을 더 복잡하게 만들기보다, 각 명령의 failure mode를 줄이는 작은 skill 또는 checklist를 추가하는 편이 더 현실적이다.

현재 바로 적용할 후보는 `handoff`, `diagnose`, `grill-with-docs`다. 다만 repo를 그대로 설치하기보다, 이 위키의 한국어 source summary, Obsidian link, raw 보존, log 규칙에 맞춘 wiki-specific skill로 변형하는 쪽이 안전하다.

## 열린 질문

- `#wiki ingest` 전에 source impact를 캐묻는 grilling 단계가 필요한가?
- `#wiki review` 결과가 "추천 1개"로 끝날 때 handoff artifact를 같이 남길 필요가 있는가?
- LLM Wiki의 `CONTEXT.md`에 해당하는 shared language page는 [[LLM Wiki]], [[Personal Operating System]], [[LLM Wiki Overview]] 중 어디가 맡아야 하는가?
