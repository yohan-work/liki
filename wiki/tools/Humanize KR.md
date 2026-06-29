---
title: Humanize KR
type: tool
status: seed
created: 2026-06-10
updated: 2026-06-29
tags:
  - korean-writing
  - humanizer
  - skills
  - claude-code
  - codex
related:
  - "[[GitHub im-not-ai Repository]]"
  - "[[GeekNews Humanizer AI Writing Detection Article]]"
  - "[[Skills]]"
  - "[[Claude Code]]"
  - "[[Codex]]"
  - "[[구조화된 답변 프레임워크]]"
sensitivity: private
evidence_level: source-backed
---

# Humanize KR

## 무엇인가

Humanize KR은 한국어 글의 번역투, 기계적 병렬 구조, 상투적 관용구, 접속사·형식명사·시각 장식 남용 등을 taxonomy로 탐지하고 윤문하는 Claude Code, Codex CLI, Gemini CLI용 skill project다.

## 사용 사례

- AI 초안의 한국어 번역투와 반복 표현을 점검한다.
- 탐지 결과를 span, category, severity로 구조화한다.
- 윤문 전후의 의미 보존과 과윤문 여부를 별도 검토한다.
- 한국어 문체 규칙을 reusable skill과 reference로 관리한다.
- Claude Code와 Codex 사이의 cross-runtime skill packaging 사례를 분석한다.

## 강점

- 한국어 특화 taxonomy와 rewriting playbook을 별도 source of truth로 둔다.
- Fast 단일 호출과 Strict 역할 분리 workflow를 구분한다.
- 수치, 고유명사, 직접 인용, 장르, register 보존 원칙을 명시한다.
- metric script와 test, plugin manifest, installer를 포함해 skill을 배포 가능한 artifact로 관리한다.
- 변경률 상한과 사람 검토 분기를 둬 과윤문 위험을 드러낸다.

## 한계

- “AI 티” 패턴은 사람이 쓴 상투적 문장에도 나타날 수 있어 false positive가 예상된다.
- 자체 severity와 품질 등급은 독립 평가로 검증되지 않았다.
- 문체 변경과 문자 단위 불변은 동시에 달성할 수 없으므로 의미 보존을 diff와 사람 검토로 확인해야 한다.
- Codex는 repository 설명 기준 Fast 모드만 지원해 Claude Code와 동일한 검증 pipeline이 아니다.
- 전역 설치는 `~/.claude`, `~/.codex`에 심링크를 만들고 업데이트는 upstream `git pull`을 적용하므로 설치 전 코드 검토가 필요하다.
- AI 생성 여부를 숨기거나 detector를 우회하는 용도보다 한국어 표현 품질 개선 용도로 한정하는 편이 적절하다.
- [[GeekNews Humanizer AI Writing Detection Article]]은 AI writing tell 목록이 탐지 회피용 rewriting rule로도 전환될 수 있음을 보여준다. 따라서 Humanize KR을 평가할 때 detector 우회 점수나 "AI처럼 보이지 않음"을 목표로 삼지 않고, 의미 보존, 출처 보존, 문장 명료성, 과윤문 방지를 기준으로 둔다.

## 관련 워크플로

1. 원문과 수정 제외 범위를 고정한다.
2. taxonomy에 따라 의심 구간을 탐지한다.
3. 탐지 근거가 있는 구간만 수정한다.
4. 사실, 수치, 고유명사, 인용, link 보존을 감사한다.
5. 잔존 패턴과 과윤문을 검토한다.
6. 자동 승인 조건을 충족하지 못하면 사람 검토로 보낸다.

## 관련 개념

- [[GeekNews Humanizer AI Writing Detection Article]]: Humanizer류 도구가 detector 회피와 글쓰기 품질 개선 사이에서 다른 목적을 가질 수 있음을 보여주는 참고 source다.
- [[Skills]]: instruction, reference, metric, test, installer를 묶은 skill artifact 사례다.
- [[구조화된 답변 프레임워크]]: 답변의 논리 구조를 다루는 반면 Humanize KR은 문체와 표현 패턴을 주로 다룬다.
- [[Claude Code]]: strict multi-agent pipeline과 plugin distribution 대상이다.
- [[Codex]]: runtime-specific Fast skill port가 제공된다.

## 메모

현재는 source review만 완료한 seed page다. LLM Wiki에 적용하려면 자동 수정 전에 read-only 탐지 evaluation을 먼저 수행하고, Obsidian link와 source-backed claim 보존 규칙을 추가해야 한다.
