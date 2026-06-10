---
title: GitHub im-not-ai Repository
source_id: github-epoko77-ai-im-not-ai-2026-06-10
type: source
status: ingested
created: 2026-06-10
updated: 2026-06-10
tags:
  - source
  - github
  - korean-writing
  - skills
  - claude-code
  - codex
related:
  - "[[Humanize KR]]"
  - "[[Skills]]"
  - "[[Claude Code]]"
  - "[[Codex]]"
  - "[[구조화된 답변 프레임워크]]"
original_path: raw/external/github-epoko77-ai-im-not-ai-2026-06-10/
date_added: 2026-06-10
captured_at: 2026-06-10
accessed_at: 2026-06-10
canonical_url: https://github.com/epoko77-ai/im-not-ai
content_hash: sha256:b657ecfa9b42296972679b4002376b17be69b71960a62f96b68f4db67edcc303
source_version: GitHub repository main branch README, metadata, tree, skills, install scripts, taxonomy, test captured 2026-06-10
domain:
  - ai
  - software
  - writing
content_type: repo
knowledge_role:
  - source
  - tool
  - reference
source_quality: practitioner
use_for:
  - concept
  - reference
  - inspiration
  - writing
related_pages:
  - "[[Humanize KR]]"
  - "[[Skills]]"
  - "[[Claude Code]]"
  - "[[Codex]]"
  - "[[구조화된 답변 프레임워크]]"
sensitivity: private
evidence_level: source-backed
---

# GitHub im-not-ai Repository

## 출처

GitHub repository `epoko77-ai/im-not-ai`.

## 자료 유형

AI가 생성한 한국어 글에서 번역투, 기계적 병렬 구조, 관용구, 접속사·형식명사·시각 장식 남용 등을 탐지하고 윤문하는 Claude Code, Codex CLI, Gemini CLI용 skill repository다.

## Domain / 분류

- domain: ai, software, writing
- content_type: repo
- knowledge_role: source, tool, reference
- source_quality: practitioner
- use_for: concept, reference, inspiration, writing

## 추가일

2026-06-10

## 원본 위치

- raw snapshot directory: `raw/external/github-epoko77-ai-im-not-ai-2026-06-10/`
- README: `README.md`
- repository metadata: `repo.json`
- recursive tree: `tree.json`
- root contents: `root-contents.json`
- Claude Code skill: `claude-humanize-korean-SKILL.md`
- Codex skill: `codex-humanize-korean-SKILL.md`
- installer/updater: `install.sh`, `update.sh`
- taxonomy: `ai-tell-taxonomy.md`
- metric test: `test_metrics_v2.py`

## Provenance

- captured_at: 2026-06-10
- accessed_at: 2026-06-10
- canonical_url: https://github.com/epoko77-ai/im-not-ai
- README hash: sha256:b657ecfa9b42296972679b4002376b17be69b71960a62f96b68f4db67edcc303
- repo metadata hash: sha256:c3d73b08fa371eb5735793f7cad3f38642a6f145d564ea460a77bb345eb2e64b
- tree hash: sha256:369f713f6be93fc594d970a2b71b67c7d26482c96450b4aaf2f7900ea347f804
- Claude skill hash: sha256:439f97ced0f0c391b602b6c6eca1286b7d670e177d6044a8df9d9c9445f582c2
- Codex skill hash: sha256:6f945791ed9f7ac524175c188009163327a27c268274662872a3811dab967ccd
- install script hash: sha256:0e2591ba86c75963601cadead61037b14918ad542afb09024615b34787b8275c
- update script hash: sha256:061fbe5a11a5d5e80f48ac97c633883cc276d63330a14efee79c1ef658be9f9b
- taxonomy hash: sha256:b061ad516056434cd58e86961cde510d5b6c580bb8e2fc7025acee82335d904d
- source_version: main branch snapshot captured 2026-06-10

## Repository snapshot

- full_name: `epoko77-ai/im-not-ai`
- description: AI가 쓴 글이 아닌 것처럼 윤문해주는 스킬
- default_branch: `main`
- created_at: 2026-04-24T12:48:40Z
- pushed_at: 2026-06-09T08:32:52Z
- primary language: Python
- license: MIT
- stars/forks/open issues at capture: 2549 / 247 / 10
- archived: false

## 원문 요약

README는 Humanize KR을 한국어 AI 문체를 탐지하고 자연스럽게 윤문하는 skill로 소개한다. 분류 체계는 번역투, 과도한 영어 병기, 기계적 구조, AI 관용구, 리듬 균일성, 수식·중복, hedging, 접속사, 형식명사, 시각 장식의 10개 대분류와 다수의 세부 패턴으로 구성된다.

실행은 Fast와 Strict로 나뉜다. Fast는 하나의 monolith agent가 탐지, 윤문, 자체 검증을 수행한다. Strict는 detector, rewriter, content fidelity auditor, naturalness reviewer를 분리하고 결과에 따라 재윤문 또는 사람 검토로 분기한다. Codex port는 Fast 단일 호출만 지원한다고 명시한다.

프로젝트는 변경률 상한, 수치·고유명사·직접 인용 제외, 장르와 register 보존, 탐지된 구간만 수정하는 원칙을 둔다. taxonomy, rewriting playbook, scholarship reference, metric script와 test를 별도 파일로 관리해 skill instruction과 평가 자산을 분리한다.

설치 스크립트는 기본적으로 repository의 skill과 agent 파일을 `~/.claude`와 `~/.codex`에 전역 심링크한다. 기존 경로와 충돌하면 기본적으로 거부하며, `--force`일 때 timestamp backup 뒤 교체한다. 업데이트 스크립트는 upstream을 fetch하고 fast-forward 가능한 경우 `git pull --ff-only` 후 installer를 다시 실행한다.

## 핵심 주장

- 한국어 AI 문체는 영어 중심 humanizer와 다른 번역투·조사·관형절·경어법 패턴을 별도 taxonomy로 다룰 가치가 있다.
- 탐지, 윤문, 의미 보존 감사, 자연스러움 검증을 역할별로 분리하면 단일 재작성보다 검토 지점을 명확히 만들 수 있다.
- skill은 instruction만이 아니라 reference, metric, test, installer, plugin manifest를 포함하는 배포 artifact가 될 수 있다.
- 문체 윤문에는 변경률, 의미 보존, 장르 유지, 수정 제외 구간 같은 guardrail이 필요하다.
- Claude Code와 Codex는 같은 목적의 skill을 공유할 수 있지만 지원하는 orchestration 범위가 다를 수 있다.

## 위키에 반영할 개념

- [[Humanize KR]]
- [[Skills]]
- [[Claude Code]]
- [[Codex]]
- 한국어 AI 문체 taxonomy
- content fidelity audit
- skill portability

## 내 프로젝트에 주는 시사점

- [[LLM Wiki]]의 한국어 문서 품질 점검도 막연한 "AI 티" 판단보다 반복되는 패턴, severity, 예외, 수정 원칙을 명시하는 편이 재현 가능하다.
- skill 본문과 reference, metric, test를 분리하는 구조는 현재 `.codex/skills/wiki/SKILL.md`를 확장할 때 참고할 수 있다.
- source-backed wiki 문서는 문체 자연스러움보다 사실, 링크, 불확실성 보존이 우선이다. 자동 윤문을 적용한다면 frontmatter, 인용, 수치, Obsidian link를 Do-NOT 범위로 추가해야 한다.
- cross-agent skill은 공통 목적을 유지하되 Claude Code의 subagent orchestration과 Codex의 단일 호출처럼 runtime별 capability 차이를 명시해야 한다.

## 후속 라우팅

- tool 추가: [[Humanize KR]]
- concept 강화: [[Skills]], [[구조화된 답변 프레임워크]]
- tool 강화: [[Claude Code]], [[Codex]]
- comparison 후보: Humanize KR vs 일반 맞춤법·문체 교정 도구
- question 후보: source-backed wiki 문서에 자동 윤문을 적용할 안전한 경계는 무엇인가?
- idea 후보: read-only 한국어 wiki style lint
- mvp 후보: 짧은 wiki 문서 5개를 대상으로 탐지만 수행하는 evaluation
- 보류: 전역 설치와 자동 업데이트 실행

## 검증 필요 주장

- “내용은 한 글자도 건드리지 않고 문체만 바꾼다”는 표현은 실제 재작성과 문자 단위로 양립하기 어렵다. 사실·주장·수치·고유명사의 의미 보존 목표로 해석해야 한다.
- taxonomy의 모든 패턴이 AI 생성 글에 특이적이라는 점과 S1/S2/S3 severity 기준은 독립 corpus 평가가 필요하다.
- 품질 등급과 개선률, Fast/Strict 처리 시간은 repository의 자체 기준이며 외부 benchmark가 아니다.
- README가 언급하는 학술 근거와 metric은 논문 원문, dataset, 재현 실험으로 별도 확인해야 한다.
- stars, forks, issue, version, 지원 CLI, 설치 경로는 시간이 지나면 변경될 수 있다.
- test 파일이 존재하지만 이번 ingest에서는 repository를 실행하거나 test suite를 검증하지 않았다.
- AI detector 우회를 목적으로 사용하면 문체 품질 개선과 다른 윤리·정책 문제가 생길 수 있으므로 이 위키에서는 탐지 회피 도구로 평가하지 않는다.

## 관련 페이지

- [[Humanize KR]]
- [[Skills]]
- [[Claude Code]]
- [[Codex]]
- [[구조화된 답변 프레임워크]]

## 열린 질문

- 한국어 AI 문체 taxonomy가 사람의 상투적 글쓰기까지 과잉 탐지하는 비율은 어느 정도인가?
- 사실·링크·frontmatter를 보존하면서 wiki Markdown 본문만 안전하게 윤문할 수 있는가?
- cross-agent skill의 공통 reference와 runtime-specific instruction을 어떤 디렉터리 구조로 관리하는 것이 좋은가?
- 자동 업데이트가 전역 skill 동작을 바꾸기 전에 changelog review와 승인 gate를 둘 수 있는가?

## 메모

저장소 코드를 설치하거나 실행하지 않았다. 전역 skill·agent 심링크와 upstream 자동 업데이트가 포함되어 있어, 실제 사용 전 `--dry-run`, 대상 경로, 변경 diff, test 결과를 먼저 확인해야 한다.
