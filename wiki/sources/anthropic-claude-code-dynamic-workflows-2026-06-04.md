---
title: Anthropic Claude Code Dynamic Workflows Article
type: source
status: ingested
created: 2026-06-04
updated: 2026-06-04
tags:
  - claude-code
  - dynamic-workflows
  - subagents
  - harness
related:
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Skills]]"
sensitivity: private
evidence_level: source-backed
source_id: anthropic-claude-code-dynamic-workflows-2026-06-04
original_path: raw/external/anthropic-claude-code-dynamic-workflows-2026-06-04/article.html
date_added: 2026-06-04
captured_at: 2026-06-04
accessed_at: 2026-06-04
canonical_url: https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code
content_hash: 46d27a23546e7e09ba76af497abcb3f2a94d77650a454ff076ca693930af7baa
source_version: captured-html
domain:
  - ai
  - software
content_type: article
knowledge_role:
  - source
  - reference
  - tool
source_quality: official
use_for:
  - concept
  - reference
  - decision
related_pages:
  - "[[Claude Code]]"
  - "[[Agentic Workflow]]"
  - "[[Orchestration]]"
  - "[[Skills]]"
---

# Anthropic Claude Code Dynamic Workflows Article

## 원문이 말한 내용

Anthropic은 Claude Code의 dynamic workflows를 "task에 맞춰 Claude가 즉석에서 자체 multi-agent harness를 작성하고 조율하는 기능"으로 설명한다. 기본 Claude Code harness는 coding에 유용하지만, research, security analysis, agent teams, code review 같은 작업에서는 custom harness가 더 좋은 성능을 낼 수 있으며, dynamic workflows는 이런 harness를 Claude Code 위에 동적으로 만들 수 있게 한다.

글은 single-context agent가 long-running, massively parallel, highly structured, adversarial task에서 약해지는 이유로 agentic laziness, self-preferential bias, goal drift를 든다. dynamic workflow는 별도 context window와 좁은 목표를 가진 subagent를 orchestration해 이 문제를 줄이는 접근이다.

Anthropic이 제시한 대표 pattern은 classify-and-act, fan-out-and-synthesize, adversarial verification, generate-and-filter, tournament, loop until done이다. 사용 사례로는 migration/refactor, deep research, deep verification, sorting, memory/rule adherence, root-cause investigation, triage at scale, exploration/taste, evals, model/intelligence routing이 제시된다.

운영 팁으로는 `ultracode` trigger, detailed prompting, quick workflow, `/goal`과 `/loop` 조합, token budget 지정, saved workflow를 `~/.claude/workflows` 또는 skill로 공유하는 방법이 언급된다. 동시에 이 기능은 모든 작업에 필요한 것은 아니며 token을 더 많이 사용할 수 있고 복잡하고 가치가 큰 작업에 적합하다고 설명한다.

## 내 위키에 주는 시사점

이 자료는 [[Claude Code]]의 dynamic workflows를 단순 병렬 subagent 기능이 아니라 "task-specific harness generation"으로 정리할 근거다. [[Agentic Workflow]] 관점에서는 context 분리, verifier 분리, stop condition, model routing, quarantine 같은 orchestration pattern을 운영 vocabulary로 삼을 수 있다.

[[Skills]] 관점에서는 workflow JavaScript 파일을 skill 안에 넣어 template처럼 공유할 수 있다는 점이 중요하다. 즉 skill은 prompt 지시문만이 아니라 reusable workflow artifact를 배포하는 packaging layer가 될 수 있다.

## 검증 필요 주장

- dynamic workflows의 실제 API surface, sandbox boundary, worktree isolation, permission model은 blog 글만으로 충분히 검증할 수 없다.
- `ultracode`, `/goal`, `/loop`, saved workflow의 availability는 plan, client version, rollout 상태에 따라 달라질 수 있으므로 실제 Claude Code documentation 또는 local CLI에서 확인해야 한다.
- workflow가 token budget을 얼마나 엄격히 지키는지와 subagent별 비용 추적 방식은 별도 실험이 필요하다.

## 후속 라우팅

- [[Claude Code]]에는 dynamic workflows를 task-specific harness generation으로 보강한다.
- [[Agentic Workflow]]에는 failure mode와 common orchestration pattern을 연결한다.
- [[Skills]]에는 workflow artifact를 skill로 packaging하는 후보를 연결한다.
