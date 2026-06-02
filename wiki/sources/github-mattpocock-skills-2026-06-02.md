---
title: GitHub Matt Pocock Skills Repository
source_id: github-mattpocock-skills-2026-06-02
type: source
status: active
created: 2026-06-02
updated: 2026-06-02
tags:
  - github
  - skills
  - coding-agent
  - engineering
related:
  - "[[Matt Pocock Skills]]"
  - "[[Skills]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
  - "[[Orchestration]]"
original_path: raw/external/github-mattpocock-skills-readme-2026-06-02.md
date_added: 2026-06-02
captured_at: 2026-06-02T00:00:00+09:00
accessed_at: 2026-06-02T00:00:00+09:00
canonical_url: https://github.com/mattpocock/skills
content_hash: 65e8ce7af3e58b7e57d8f3e6bed05d9bd4e3b1d887be9291d1aa5e6338bf7c71
source_version: "GitHub repository mattpocock/skills, default branch main, README/repo metadata/tree captured on 2026-06-02"
domain:
  - ai
  - software
content_type: repo
knowledge_role:
  - source
  - tool
  - reference
  - concept
source_quality: practitioner
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[Matt Pocock Skills]]"
  - "[[Skills]]"
  - "[[Codex]]"
  - "[[Claude Code]]"
  - "[[Orchestration]]"
sensitivity: private
evidence_level: source-backed
---

# GitHub Matt Pocock Skills Repository

## 출처

GitHub repository `mattpocock/skills`.

## 자료 유형

Matt Pocock이 공개한 coding agent용 skill collection repository다. README는 이 skill들을 "real engineering"을 위한 작고 조합 가능한 skill로 설명하며, Claude Code, Codex 등 coding agent의 흔한 실패 모드를 줄이는 데 초점을 둔다.

## Domain / 분류

- domain: ai, software
- content_type: repo
- knowledge_role: source, tool, reference, concept
- source_quality: practitioner
- use_for: concept, reference, decision

## 추가일

2026-06-02

## 원본 위치

- README snapshot: `raw/external/github-mattpocock-skills-readme-2026-06-02.md`
- repo metadata snapshot: `raw/external/github-mattpocock-skills-repo-2026-06-02.json`
- tree snapshot: `raw/external/github-mattpocock-skills-tree-2026-06-02.json`
- canonical URL: https://github.com/mattpocock/skills

## Provenance

- captured_at: 2026-06-02T00:00:00+09:00
- accessed_at: 2026-06-02T00:00:00+09:00
- canonical_url: https://github.com/mattpocock/skills
- README content_hash: `65e8ce7af3e58b7e57d8f3e6bed05d9bd4e3b1d887be9291d1aa5e6338bf7c71`
- repo metadata hash: `856af08c5039be68a63ee3a895580327612e1ea61b1b666c83122ea2fbfcc374`
- tree hash: `00ee818496e1f4ede7870d5ac5d5a7434dfe36d93d8a1522c94ddd6e7c85497e`
- source_version: GitHub repository mattpocock/skills, default branch main, README/repo metadata/tree captured on 2026-06-02

## Repository snapshot

- full_name: `mattpocock/skills`
- description: "Skills for Real Engineers. Straight from my .claude directory."
- default_branch: `main`
- created_at: 2026-02-03T11:15:53Z
- updated_at: 2026-06-02T07:18:22Z
- pushed_at: 2026-05-31T16:40:56Z
- language: Shell
- license: MIT
- stars/forks at capture: 114501 / 10023

## 원문 요약

README는 이 repository를 vibe coding이 아니라 실제 engineering을 위한 everyday agent skills 모음으로 소개한다. GSD, BMAD, Spec-Kit 같은 process-heavy approach가 개발 과정을 소유하면서 사용자의 통제력을 빼앗고 process bug를 고치기 어렵게 만들 수 있다고 보고, 이 repo의 skill들은 작고 적응 가능하며 조합 가능한 단위로 설계되었다고 설명한다.

설치 방식은 `npx skills@latest add mattpocock/skills`이며, 설치 후 `/setup-matt-pocock-skills`를 실행해 issue tracker, triage label, 문서 저장 위치를 설정하도록 안내한다. 이 setup skill은 다른 engineering skill들이 공유하는 per-repo config를 만드는 초기화 단계다.

README가 제시하는 주요 실패 모드는 네 가지다. 첫째, agent가 사용자의 의도를 제대로 이해하지 못하는 문제다. 이를 해결하기 위해 `/grill-me`와 `/grill-with-docs`가 변경 전 질문 세션을 수행한다. 둘째, agent가 프로젝트 용어를 몰라 장황해지는 문제다. `/grill-with-docs`는 shared language, `CONTEXT.md`, ADR을 만들어 agent가 domain vocabulary를 사용하게 돕는다. 셋째, 코드가 동작하지 않는 문제다. `/tdd`는 red-green-refactor loop를, `/diagnose`는 재현, 최소화, 가설, 계측, 수정, 회귀 테스트를 강조한다. 넷째, agent가 만든 app이 ball of mud가 되는 문제다. `/to-prd`, `/zoom-out`, `/improve-codebase-architecture`가 system design과 architecture 관점을 보강한다.

skill 목록은 engineering, productivity, misc로 나뉜다. Engineering에는 `diagnose`, `grill-with-docs`, `triage`, `improve-codebase-architecture`, `setup-matt-pocock-skills`, `tdd`, `to-issues`, `to-prd`, `zoom-out`, `prototype`이 포함된다. Productivity에는 `caveman`, `grill-me`, `handoff`, `write-a-skill`이 포함된다. Misc에는 Claude Code git guardrail, test migration, exercise scaffold, pre-commit setup 관련 skill이 포함된다.

## 핵심 주장

- 좋은 agent skill은 거대한 process framework보다 작고 조합 가능하며 사용자가 수정할 수 있어야 한다.
- agent alignment 문제는 구현 전 grilling session과 shared language로 줄일 수 있다.
- coding agent의 품질은 prompt보다 feedback loop, static type, browser access, automated test, TDD loop에 크게 의존한다.
- agent가 코드를 빠르게 만들수록 software entropy도 빠르게 늘 수 있으므로 architecture/design review skill이 필요하다.
- skill은 모델별 prompt가 아니라 Codex, Claude Code 등 여러 coding agent에서 반복 가능한 engineering practice artifact가 될 수 있다.

## 위키에 반영할 개념

- [[Matt Pocock Skills]]: engineering/productivity skill collection tool page.
- [[Skills]]: 작은 skill, setup skill, shared language, TDD, diagnosis, architecture review를 agent skill 설계 패턴으로 보강한다.
- [[Codex]]: Codex에서도 사용 가능한 skill artifact와 반복 workflow vocabulary로 연결한다.
- [[Claude Code]]: `.claude` directory 기반 skill collection과 Claude Code hook/guardrail 사례로 연결한다.
- [[Orchestration]]: setup, grilling, shared language, TDD, diagnosis, issue breakdown, handoff를 skill 기반 orchestration surface로 본다.

## 내 프로젝트에 주는 시사점

LLM Wiki 운영에서도 거대한 workflow 하나보다 작고 명확한 skill 단위가 더 유지보수하기 쉽다. `#wiki ingest`, `#wiki ask`, `#wiki review` 같은 짧은 entrypoint는 이 repo의 철학과 맞닿아 있다. 다음 개선은 "더 많은 명령"이 아니라, source ingest 전 grilling 질문, wiki 용어집, lint/TDD에 해당하는 held-out validation, handoff template 같은 작은 skill을 검토하는 쪽이다.

특히 `CONTEXT.md`와 ADR을 통해 shared language를 만든다는 관점은 [[LLM Wiki]]의 concept page, source summary, decision record와 잘 맞는다. agent가 장황해지는 문제를 줄이려면 project-specific vocabulary를 명시적으로 축적해야 한다.

## 후속 라우팅

- tool 추가: [[Matt Pocock Skills]]
- concept 강화: [[Skills]], [[Orchestration]]
- tool 강화: [[Codex]], [[Claude Code]]
- comparison 후보: Matt Pocock Skills vs oh-my-codex workflow layer
- question 후보: LLM Wiki 운영에 필요한 다음 skill은 grilling, diagnosis, handoff 중 무엇인가?
- mvp 후보: 없음

## 검증 필요 주장

- GitHub stars/forks, repo update, install command, skill 목록은 시간이 지나면 바뀔 수 있으므로 재사용 전 현재 repository와 skills.sh 상태를 확인해야 한다.
- `npx skills@latest add mattpocock/skills`의 설치 동작, 지원 agent, 설치 위치, 보안 권한은 skills.sh 공식 문서와 실제 dry run으로 검증해야 한다.
- README의 "works with any model" 주장은 경험적 주장으로 보존하되, Codex/Claude Code/다른 agent에서 동일하게 동작한다고 일반화하지 않는다.
- 각 skill의 세부 지시 품질은 README만으로 판단하지 않고 개별 `SKILL.md`를 확인해야 한다.
- `git-guardrails-claude-code` 같은 hook은 로컬 git workflow에 영향을 줄 수 있으므로 설치 전 차단 범위와 우회 조건을 확인해야 한다.

## 관련 페이지

- [[Matt Pocock Skills]]
- [[Skills]]
- [[Codex]]
- [[Claude Code]]
- [[Orchestration]]

## 열린 질문

- LLM Wiki에 바로 가져올 수 있는 skill은 `handoff`, `diagnose`, `write-a-skill`, `grill-with-docs` 중 무엇인가?
- 이 repository의 small/composable skill 철학을 현재 `.codex/skills/wiki/SKILL.md`에 얼마나 반영할 것인가?
- skill을 설치해서 쓰기보다 source로 참고해 wiki-specific skill을 직접 작성하는 편이 나은가?

## 메모

이 자료는 실사용자의 skill collection이라서 engineering workflow vocabulary에는 유용하지만, 설치와 운영은 현재 repo, skills.sh, 각 agent의 skill format 호환성을 확인한 뒤 판단해야 한다.
