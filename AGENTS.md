# LLM Wiki Agent 규칙

## 목적

이 프로젝트는 Codex가 유지보수하고 Obsidian에서 읽는 개인 LLM Wiki다. AI-native work, LLM agents, Codex, Claude Code, Cursor, RAG, LLM Wiki, AX workflow, Basalt Project, Skills, Orchestration, Harness, human-in-the-loop workflow, 개인 PoC, 프로젝트, 컨퍼런스 인사이트를 장기 지식으로 축적한다.

Markdown 파일이 wiki layer의 source of truth다. Git은 변경 이력을 추적한다. Obsidian은 사람이 읽고 탐색하는 인터페이스다. Codex는 유지보수 엔진이다.

## 안전 규칙

- 기존 Obsidian Vault 안의 파일은 삭제, 이동, 대량 수정하지 않는다.
- `raw/` 아래 파일은 수정하지 않는다. raw material은 수정하지 않는 source of truth다.
- `inbox/`는 임시 수집함으로 다룬다. 의도적으로 ingest하기 전까지 inbox 자료를 `wiki/`에 반영하지 않는다.
- `inbox/clippings/`는 웹 클리핑 임시 저장소, `inbox/ideas/`는 개인 아이디어 임시 저장소, `inbox/to-ingest.md`는 ingest 대기열로 사용한다.
- inbox 자료는 triage 전까지 wiki page, index, log에 반영하지 않는다.
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
- 자료를 바로 wiki에 반영하기 전에 필요하면 `templates/ingest-triage.md` 구조로 triage를 먼저 수행한다.
- 간단한 초안이 필요하면 `node scripts/new-source.ts <raw-path-or-url>`로 read-only ingest triage를 먼저 출력한다. 이 명령은 wiki 파일을 수정하지 않는다.
- triage는 쓰기 전 계획이다. 저장 가치, taxonomy, 생성/갱신할 페이지, 모순 가능성, 사용자 승인 필요 변경을 먼저 드러낸다.
- ingest한 source마다 `wiki/sources/`에 source summary를 만든다.
- source summary에는 `source_id`, `type`, `status`, `original_path`, `date_added`, `domain`, `content_type`, `knowledge_role`, `source_quality`, `use_for`, `related_pages`를 포함한다.
- 웹 자료 source summary에는 가능하면 `captured_at`, `accessed_at`, `canonical_url`, `content_hash`, `source_version`을 기록한다.
- `content_hash`는 raw에 보존한 원문 snapshot 기준으로 계산하며, 기존 source에 hash가 없다는 이유만으로 raw를 수정하지 않는다.
- source summary에는 가능하면 `source_quality`와 `use_for`를 포함해 자료의 성격과 사용 목적을 표시한다.
- `source_quality`는 `intro`, `practitioner`, `academic`, `official`, `anecdotal` 중 가장 가까운 값을 사용한다.
- `use_for`는 `concept`, `reference`, `inspiration`, `decision`, `writing`, `presentation` 중 해당되는 값을 배열로 기록한다.
- `domain`은 자료의 주제 영역을 배열로 기록한다. 예: `ai`, `finance`, `software`, `personal-ops`, `research`, `business`, `writing`, `conference`, `culture`, `policy`.
- `content_type`은 자료 형식을 기록한다. 예: `article`, `paper`, `transcript`, `repo`, `note`, `image`, `dataset`, `talk`, `book`, `documentation`.
- `knowledge_role`은 위키 안에서 자료가 맡는 역할을 배열로 기록한다. 예: `source`, `concept`, `project`, `tool`, `comparison`, `question`, `idea`, `mvp`, `decision`, `meeting`, `reference`.
- ingest할 때는 먼저 domain, content_type, knowledge_role, source_quality, use_for를 판단한 뒤 어떤 wiki page를 만들거나 갱신할지 결정한다.
- 필요하면 관련 concept, project, idea, mvp, decision, meeting, tool, people, comparison, question page를 만들거나 갱신한다.
- wiki page를 추가하거나 의미 있게 변경한 뒤에는 `wiki/index.md`를 업데이트한다.
- ingest로 source, concept, tool, project, idea, mvp, decision, meeting, question 수가 바뀌거나 주요 진입점/다음 행동이 바뀌면 `wiki/overview.md` 운영 대시보드도 함께 갱신한다.
- 작업 내용은 `wiki/log.md`에 기록한다.

## Log 규칙

- 앞으로 새 log entry는 가능한 한 `## [YYYY-MM-DD] kind | Title` 형식을 사용한다.
- `kind`는 `ingest`, `query`, `lint`, `maintenance`, `automation`, `decision` 중 가장 가까운 값을 사용한다.
- 기존 `wiki/log.md`의 과거 항목은 historical record로 유지하고 대량 재작성하지 않는다.
- 하나의 entry에는 작업 요약, 변경한 주요 wiki 영역, 후속 작업을 짧게 기록한다.

## Routing 규칙

- 자료가 새 개념을 설명하면 `wiki/concepts/`에 연결하거나 새 concept page 후보로 기록한다.
- 자료가 특정 제품, 도구, repository, API, software를 다루면 `wiki/tools/`에 연결하거나 새 tool page 후보로 기록한다.
- 자료가 사용자의 장기 프로젝트, PoC, 기획, 운영 체계와 직접 관련되면 `wiki/projects/`에 연결한다.
- 두 개념의 차이, 선택 기준, 적용 조건을 설명하는 데 유용하면 `wiki/comparisons/` 후보로 기록한다.
- 반복 참조할 만한 질문 답변을 만든 경우에만 `wiki/questions/`에 저장한다.
- 빠른 아이디어는 `inbox/ideas/`에 먼저 둘 수 있고, 실행 가치가 확인되면 `wiki/ideas/`에 idea page로 승격한다.
- 여러 자료, 아이디어, 회의록에서 반복되는 실행 가능성이 보이면 `wiki/opportunities/`에 opportunity card 또는 opportunity review로 정리한다.
- 1주 안에 검증 가능한 실행 후보는 `wiki/mvps/`에 MVP / PoC page로 만든다.
- 프로젝트나 MVP 방향에 영향을 주는 선택은 `wiki/decisions/`에 decision record로 남긴다.
- 회의록은 `wiki/meetings/`에 요약하되, 핵심 논의보다 결정, 액션 아이템, 연결할 project/idea/mvp를 우선 기록한다.
- domain이 낯설거나 애매하면 무리해서 새 taxonomy 값을 만들기보다 가장 가까운 값과 `tags`를 함께 사용하고, 열린 질문에 분류 불확실성을 남긴다.

## MVP / PoC 규칙

- idea page는 문제, 대상 사용자, 해결 가설, 빠른 검증 방법, 다음 행동을 반드시 드러낸다.
- MVP / PoC page는 성공 기준과 1주 실험 계획이 없으면 `status: active`로 두지 않는다.
- MVP / PoC의 범위는 빠른 검증에 필요한 최소 기능으로 제한하고, 제외할 범위를 명시한다.
- 장기 프로젝트와 연결되는 MVP / PoC는 관련 project page에도 링크한다.
- 보류 또는 중단 결정은 삭제하지 말고 decision record나 해당 page의 결정 로그에 남긴다.

## Opportunity Compiler 규칙

- opportunity card는 자료 요약이 아니라 실행 기회 판단 도구다.
- opportunity card에는 왜 지금인가, 해결할 문제, 연결된 기존 아이디어, 참고 자료, 만들 수 있는 MVP, 1주 검증 방법, 리스크, 다음 행동을 포함한다.
- `node scripts/opportunity-review.ts`는 read-only로 기회 리뷰 초안을 출력한다.
- 기록으로 남길 때만 `node scripts/opportunity-review.ts --write-draft`를 사용하며, 기존 `wiki/opportunities/opportunity-review-YYYY-MM-DD.md`는 덮어쓰지 않는다.
- 기회 리뷰의 자동 점수는 확정 판단이 아니다. 실제 실행 결정은 MVP / PoC page나 decision record에 따로 반영한다.

## 회의록 규칙

- 회의록 summary는 원문 transcript를 대체하지 않는다. 원문이 있으면 `raw/` 또는 원본 위치를 보존하고 요약에는 위치를 기록한다.
- 액션 아이템은 담당자, 다음 행동, 연결할 project/idea/mvp가 확인될 때 가장 유용하다. 모르면 불확실성을 표시한다.
- 회의 중 나온 주장과 Codex의 해석을 섞지 않는다.
- 외부 공유가 애매한 회의록은 `sensitivity: private`를 유지한다.

## 주간 리뷰 규칙

- 주간 리뷰 초안은 `node scripts/weekly-review.ts`로 read-only 출력한다.
- 리뷰를 기록으로 남길 때만 `node scripts/weekly-review.ts --write-draft`를 사용하며, 기존 `wiki/reviews/weekly-YYYY-MM-DD.md`는 덮어쓰지 않는다.
- weekly review는 확정 결정이 아니라 검토용 후보 목록이다.
- 리뷰에서 실제 방향을 바꾸는 판단은 관련 idea, mvp, decision page에 따로 반영한다.
- weekly review page는 `type: weekly-review`, `sensitivity: private`를 기본값으로 둔다.

## Query 규칙

- 좋은 query answer는 `wiki/questions/`에 저장할 수 있다.
- project decision, concept clarification, writing, presentation preparation, repeated reference에 재사용될 가능성이 있을 때만 query answer를 저장한다.
- query answer를 저장할 때는 재사용 가능성, 저장 이유, 관련 결정/글쓰기/발표 활용처를 명시한다.
- 저장된 answer에는 related page와 사용한 source를 포함하거나, unsourced임을 명확히 표시한다.
- 저장된 query answer는 단순 답변이 아니라 이후 작업에 재사용할 decision aid 또는 explanation asset이어야 한다.

## Comparison 규칙

- comparison page는 개념 차이를 선명하게 만들기 위해 사용한다.
- 비교는 승패를 가르는 글이 아니라, 적용 조건, 실패 패턴, 함께 쓰는 방식, 판단 기준을 정리하는 문서로 작성한다.
- source-backed 비교가 아니면 `status: seed`, `evidence_level: unsourced`로 시작하고, 추후 source를 연결한다.
- comparison page를 만들 때는 `templates/comparison-page.md` 구조를 우선 사용한다.

## Lint 규칙

- lint report는 `wiki/reports/lint-YYYY-MM-DD.md` 형식으로 만든다.
- 기존 lint report를 덮어쓰지 않는다.
- orphan page, duplicate concept, stale claim, missing link, contradiction, new page candidate를 점검한다.
- source 없는 주장, index 누락, frontmatter 누락, comparison 후보도 함께 점검한다.
- 자동 lint는 오래된 unsourced seed page, source-backed page의 source summary 연결, source summary의 검증 필요 주장, overview 수치 불일치도 함께 점검한다.
- 운영 상태 수치가 필요하면 `node scripts/wiki-stats.ts`를 사용하고, overview에 붙일 상태 블록은 `node scripts/wiki-stats.ts --overview-block`로 확인한다.
- lint 중 직접 고쳐도 되는 항목은 index 누락, 명백한 오타, 템플릿 섹션명 불일치, frontmatter 누락처럼 구조적으로 명확한 문제로 제한한다.
- source 해석, 개념 병합, 오래된 주장 삭제, contradiction 처리, 민감도 변경은 report에 권장 작업으로 남기고 별도 지시 없이 직접 수정하지 않는다.
- lint report에는 고칠 항목과 보고만 할 항목을 구분한다.
- 광범위한 rewrite보다 작고 추적 가능한 maintenance change를 선호한다.
