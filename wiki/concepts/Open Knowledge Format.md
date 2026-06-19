---
title: Open Knowledge Format
type: concept
status: seed
created: 2026-06-19
updated: 2026-06-19
tags:
  - open-knowledge-format
  - llm-wiki
  - data-sharing
  - markdown
  - agents
related:
  - "[[Google Cloud Open Knowledge Format Article]]"
  - "[[LLM Wiki]]"
  - "[[Agentic Workflow]]"
  - "[[RAG]]"
  - "[[기업 AI 운영 레이어]]"
sensitivity: private
evidence_level: source-backed
---

# Open Knowledge Format

## 한 줄 정의

Open Knowledge Format(OKF)은 agent와 사람이 함께 읽을 수 있는 조직 지식을 Markdown file, YAML frontmatter, link, index/log convention으로 교환하기 위한 open specification이다.

## 핵심 문제

[[Google Cloud Open Knowledge Format Article]]은 AI agent가 정확하고 실행 가능한 답을 내려면 table schema, metric 정의, runbook, incident playbook, join path, API deprecation 같은 조직 맥락이 필요하지만, 이 지식이 catalog, wiki, drive, code comment, 사람의 머릿속에 흩어져 있다고 진단한다.

문제는 지식 서비스가 없다는 것이 아니라, 서로 다른 agent와 tool이 같은 지식을 번역 없이 읽고 쓸 수 있는 portable format이 없다는 점이다.

## 작동 방식

- 하나의 OKF bundle은 Markdown file directory다.
- 각 concept는 하나의 Markdown file로 표현된다.
- File path가 concept identity 역할을 한다.
- YAML frontmatter는 query 가능한 최소 field를 담는다.
- Markdown body는 schema, 설명, join, runbook, citation 같은 풍부한 context를 담는다.
- Markdown link는 concept 사이의 relationship graph를 만든다.
- Optional `index.md`는 agent navigation과 progressive disclosure에 쓸 수 있다.
- Optional `log.md`는 변경 이력과 bundle history를 담을 수 있다.

## 중요한 이유

- Agent context를 vendor catalog나 특정 SDK에 잠그지 않고 file 기반으로 교환할 수 있다.
- 사람이 읽는 지식과 agent가 parse하는 지식을 같은 artifact로 관리할 수 있다.
- Git versioning, review, diff, history를 지식 운영에 적용할 수 있다.
- Data catalog, wiki, documentation, code comment, notebook cell에 흩어진 지식을 공통 bundle로 내보내는 export target이 될 수 있다.

## LLM Wiki에 주는 의미

이 위키는 이미 Markdown, YAML frontmatter, index, log, related link, source summary를 사용한다. 따라서 OKF는 현재 구조를 외부 agent나 tool과 교환할 때 참고할 수 있는 최소 공통 규격 후보가 된다.

다만 현재 위키는 `sensitivity`, `evidence_level`, `related`, `source_quality`, `use_for`, `검증 필요 주장`처럼 개인 운영과 provenance를 위한 field가 많다. OKF 호환을 목표로 한다면 내부 schema를 줄이기보다 OKF export view를 별도로 만드는 편이 낫다.

## 실패 패턴

- OKF를 또 하나의 knowledge platform으로 오해하고 file format이라는 장점을 잃는다.
- `type`만 맞추고 source provenance, sensitivity, evidence level을 잃어버린다.
- Agent가 읽기 쉬운 index/log는 만들지만 사람이 검토할 수 있는 본문 품질을 낮춘다.
- Markdown link graph가 생겼다는 이유만으로 실제 retrieval 품질이나 answer grounding을 검증하지 않는다.

## 관련 개념과 차이

- [[LLM Wiki]]: 이 위키는 개인 지식 운영체계이고, OKF는 여러 producer/consumer 사이의 교환 포맷이다.
- [[RAG]]: OKF bundle은 RAG나 agent context assembly의 source corpus가 될 수 있지만, retrieval algorithm 자체는 아니다.
- [[Agentic Workflow]]: Agent는 OKF bundle을 읽거나 갱신할 수 있지만, OKF만으로 planning, approval, execution, rollback이 해결되지는 않는다.
- [[기업 AI 운영 레이어]]: OKF는 기업 AI 운영 레이어의 context portability와 knowledge governance를 돕는 data/knowledge artifact layer가 될 수 있다.

## 관련 자료

- [[Google Cloud Open Knowledge Format Article]]

## 열린 질문

- 현재 LLM Wiki frontmatter를 OKF v0.1의 최소 field에 어떻게 mapping할 수 있는가?
- OKF export를 만들 때 private field와 source provenance를 어떻게 보존하거나 제거할 것인가?
- `index.md`와 `log.md`를 agent navigation에 실제로 쓰게 하려면 어떤 retrieval rule이 필요한가?
- OKF GitHub spec과 sample bundle은 이 위키의 template/lint rule에 어떤 변경을 요구하는가?
