# LLM Wiki Agent 규칙

## 목적

이 프로젝트는 Codex가 유지보수하고 Obsidian에서 읽는 개인 LLM Wiki다. AI-native work, LLM agents, Codex, Claude Code, Cursor, RAG, LLM Wiki, AX workflow, Basalt Project, Skills, Orchestration, Harness, human-in-the-loop workflow, 개인 PoC, 프로젝트, 컨퍼런스 인사이트를 장기 지식으로 축적한다.

Markdown 파일이 wiki layer의 source of truth다. Git은 변경 이력을 추적한다. Obsidian은 사람이 읽고 탐색하는 인터페이스다. Codex는 유지보수 엔진이다.

## 안전 규칙

- 기존 Obsidian Vault 안의 파일은 삭제, 이동, 대량 수정하지 않는다.
- `raw/` 아래 파일은 수정하지 않는다. raw material은 수정하지 않는 source of truth다.
- `inbox/`는 임시 수집함으로 다룬다. 의도적으로 ingest하기 전까지 inbox 자료를 `wiki/`에 반영하지 않는다.
- 명확한 작업과 근거 context가 있을 때만 `wiki/`를 관리하고 업데이트한다.
- wiki 유지보수 작업 전에는 `wiki/index.md`와 `wiki/log.md`를 먼저 읽는다.
- 기존 wiki page, report, template이 있는지와 내용이 무엇인지 확인하기 전에는 덮어쓰지 않는다.
- 민감한 정보는 `sensitivity: private`로 표시하고 외부 공유용 문서에 포함하지 않도록 주의한다.

## Wiki 작성 방식

- 유지보수되는 wiki content는 기본적으로 한국어로 작성한다. 여기에는 heading, summary, concept page, source summary, query answer, report, log entry가 포함된다.
- heading이 고유명사이거나 원문 표현을 그대로 보존해야 하는 경우가 아니라면 `wiki/`와 `templates/`에서 영어 section heading을 사용하지 않는다.
- 영어 원문은 필요한 경우 짧게 인용하거나 참조할 수 있지만, 설명과 종합은 한국어로 작성한다.
- raw source material은 가능한 한 원문 언어 그대로 보존한다.
- 기술 용어, 제품명, 중요한 원문 표현은 명확성을 높일 때 영어를 괄호로 병기할 수 있다.
- 출처가 말한 주장과 Codex 또는 사용자의 해석을 섞지 않는다. source summary에서는 원문 주장, 내 프로젝트에 주는 시사점, 검증 필요 주장을 분리한다.
- Obsidian-style link를 사용한다: `[[Concept Name]]`.
- 모든 wiki page는 YAML frontmatter에 다음 필드를 포함해야 한다:
  - `title`
  - `type`
  - `status`
  - `created`
  - `updated`
  - `tags`
  - `related`
  - `sensitivity`
  - `evidence_level`
- 초기 seed page는 `status: seed`, `evidence_level: unsourced`를 사용한다.
- 근거 없는 사실을 만들지 않는다.
- 불확실성은 명확히 표시한다.
- source끼리 충돌하면 한 주장을 다른 주장으로 덮어쓰지 않는다. contradiction note를 만들거나 갱신한다.

## Ingest 규칙

- 새 source material은 먼저 `raw/`에 둔다.
- ingest한 source마다 `wiki/sources/`에 source summary를 만든다.
- source summary에는 `source_id`, `type`, `status`, `original_path`, `date_added`, `related_pages`를 포함한다.
- source summary에는 가능하면 `source_quality`와 `use_for`를 포함해 자료의 성격과 사용 목적을 표시한다.
- `source_quality`는 `intro`, `practitioner`, `academic`, `official`, `anecdotal` 중 가장 가까운 값을 사용한다.
- `use_for`는 `concept`, `reference`, `inspiration`, `decision` 중 해당되는 값을 배열로 기록한다.
- 필요하면 관련 concept, project, tool, people, comparison, question page를 만들거나 갱신한다.
- wiki page를 추가하거나 의미 있게 변경한 뒤에는 `wiki/index.md`를 업데이트한다.
- 작업 내용은 `wiki/log.md`에 기록한다.

## Query 규칙

- 좋은 query answer는 `wiki/questions/`에 저장할 수 있다.
- project decision, concept clarification, writing, presentation preparation, repeated reference에 재사용될 가능성이 있을 때만 query answer를 저장한다.
- query answer를 저장할 때는 재사용 가능성, 저장 이유, 관련 결정/글쓰기/발표 활용처를 명시한다.
- 저장된 answer에는 related page와 사용한 source를 포함하거나, unsourced임을 명확히 표시한다.

## Comparison 규칙

- comparison page는 개념 차이를 선명하게 만들기 위해 사용한다.
- 비교는 승패를 가르는 글이 아니라, 적용 조건, 실패 패턴, 함께 쓰는 방식, 판단 기준을 정리하는 문서로 작성한다.
- source-backed 비교가 아니면 `status: seed`, `evidence_level: unsourced`로 시작하고, 추후 source를 연결한다.

## Lint 규칙

- lint report는 `wiki/reports/lint-YYYY-MM-DD.md` 형식으로 만든다.
- 기존 lint report를 덮어쓰지 않는다.
- orphan page, duplicate concept, stale claim, missing link, contradiction, new page candidate를 점검한다.
- source 없는 주장, index 누락, frontmatter 누락, comparison 후보도 함께 점검한다.
- 광범위한 rewrite보다 작고 추적 가능한 maintenance change를 선호한다.
