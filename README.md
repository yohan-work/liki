# LLM Wiki

## Data(26.05.21 ~ )
<img width="1834" height="1037" alt="image" src="https://github.com/user-attachments/assets/73f542eb-041b-4e09-8901-acf8e2ad6a51" />


LLM Wiki는 다양한 주제의 자료를 장기적으로 축적하고 연결하기 위한 개인 Markdown 지식 베이스입니다. AI, 금융, 소프트웨어, 연구, 글쓰기, 컨퍼런스, 개인 프로젝트 등 서로 다른 domain의 자료를 같은 운영 원칙으로 ingest하고 관리합니다.

## 역할

- Obsidian은 읽기와 탐색을 위한 인터페이스입니다.
- Codex는 위키를 정리하고 유지보수하는 엔진입니다.
- Markdown 파일이 실제 데이터입니다.
- Git은 변경 이력을 검토 가능하게 남깁니다.
- `raw/`는 원문 자료를 보존하며 수정하지 않습니다.
- `wiki/`는 요약, 링크, 갱신을 담는 curated knowledge layer입니다.

## 언어 정책

- `raw/`는 가능한 한 원문 언어 그대로 보존합니다.
- `wiki/` 본문, 섹션 제목, 요약, 로그, 리포트는 기본적으로 한국어로 작성합니다.
- 기술 용어, 제품명, 중요한 원문 표현은 필요할 때 영어를 괄호로 병기할 수 있습니다.
- 영어 원문을 다루더라도 설명과 종합은 한국어로 작성합니다.

## 구조

- `raw/`: 수정하지 않는 원문 자료.
- `inbox/`: ingest 전 임시 수집함.
- `inbox/clippings/`: 웹 클리핑 임시 저장소.
- `inbox/ideas/`: 개인 아이디어 임시 저장소.
- `inbox/to-ingest.md`: ingest 대기열.
- `wiki/`: 유지보수되는 위키 페이지.
- `wiki/ideas/`: 실행 후보가 될 수 있는 아이디어 brief.
- `wiki/opportunities/`: 여러 아이디어와 자료에서 뽑은 실행 기회 카드와 기회 리뷰.
- `wiki/mvps/`: 1주 안에 검증 가능한 MVP / PoC 후보와 실험 계획.
- `wiki/decisions/`: 프로젝트와 MVP 방향에 영향을 주는 결정 기록.
- `wiki/meetings/`: 회의록 요약, 결정, 액션 아이템.
- `wiki/reviews/`: 주간 리뷰 리포트와 실행 후보 점검 기록.
- `daily/`: 일일 메모 또는 작업 메모.
- `templates/`: 재사용 가능한 페이지 템플릿.
- `scripts/`: 향후 자동화용 스크립트.

## 범용 Ingest Taxonomy

새 자료를 ingest할 때는 주제와 형식에 상관없이 먼저 아래 metadata를 판단합니다.

```yaml
domain:
  - ai
  - finance
  - software
  - personal-ops
  - research
  - business
  - writing
  - conference
content_type: article | paper | transcript | repo | note | image | dataset | talk | book | documentation
knowledge_role:
  - source
  - concept
  - project
  - tool
  - comparison
  - question
  - idea
  - opportunity
  - mvp
  - decision
  - meeting
  - reference
source_quality: intro | practitioner | academic | official | anecdotal | personal
use_for:
  - concept
  - reference
  - inspiration
  - decision
  - writing
  - presentation
```

이 taxonomy는 특정 주제 전용이 아닙니다. 자료가 어떤 domain이든 Codex가 먼저 분류하고, 그 결과에 따라 `wiki/sources/`, `wiki/concepts/`, `wiki/projects/`, `wiki/ideas/`, `wiki/opportunities/`, `wiki/mvps/`, `wiki/decisions/`, `wiki/meetings/`, `wiki/tools/`, `wiki/comparisons/`, `wiki/questions/` 중 어디에 반영할지 결정합니다.

웹 자료는 시간이 지나면 바뀌거나 사라질 수 있으므로 source summary에 provenance도 남깁니다. 새 ingest부터는 `captured_at`, `accessed_at`, `canonical_url`, `content_hash`, `source_version`을 가능한 범위에서 기록합니다.

## 예시 명령

평소에는 Codex에게 긴 프롬프트를 쓰지 않고 아래 `#wiki` 명령으로 시작합니다.

```text
#wiki ingest https://example.com/article
```

```text
#wiki ask RAG와 Agentic Workflow는 어떻게 다르게 써야 하나?
```

```text
#wiki idea 개인용 AI workflow 점검 대시보드
```

```text
#wiki review
```

`#wiki ingest`는 자료를 위키에 반영하고, `#wiki ask`는 위키 기반 답변과 재사용 질문 저장 여부를 판단하며, `#wiki idea`는 아이디어를 실행 후보로 정리하고, `#wiki review`는 오늘 하나만 할 일을 고르는 read-only 점검으로 사용합니다. `#wiki review`는 내부적으로 `node scripts/wiki-review.ts`를 사용해 상태, 추천, 바로 쓸 명령, 근거를 압축해 보여줍니다.

아래는 더 세밀하게 지시하고 싶을 때 Codex에게 줄 수 있는 프롬프트 예시입니다.

```text
raw/articles/example.md를 LLM Wiki에 ingest해줘. 먼저 domain, content_type, knowledge_role, source_quality, use_for를 판단하고, source summary를 한국어로 만든 뒤 관련 페이지와 wiki/index.md, wiki/log.md를 업데이트해줘.
```

```text
LLM Wiki를 참고해서 이 질문에 한국어로 답해줘. 반복 참조 가치가 있을 때만 wiki/questions/에 저장해줘: RAG와 agentic retrieval은 어떻게 비교해야 하나?
```

```text
wiki lint를 실행해줘. 고립 페이지, 중복 개념, 누락 링크, 오래된 주장, 모순, 새 페이지 후보를 점검하고 wiki/reports/lint-YYYY-MM-DD.md에 한국어로 저장해줘. 기존 리포트는 덮어쓰지 마라.
```

## 운영 흐름

Obsidian에서 먼저 볼 화면은 `wiki/overview.md`입니다. 이 페이지는 다음 행동, 반복 루틴, 주요 진입점을 모아 둔 실행 대시보드이고, `wiki/index.md`는 전체 목차로 사용합니다.

1. URL이나 원문 파일을 Codex에게 전달하고 ingest를 요청합니다.
2. 영향 범위가 크거나 분류가 애매하면 `templates/ingest-triage.md` 기준으로 먼저 triage를 수행합니다.
3. Codex가 taxonomy metadata를 판단합니다.
4. Codex가 `raw/`에 원문을 보존하고 `wiki/sources/`, 관련 concept/project/tool page, `wiki/index.md`, `wiki/log.md`를 갱신합니다.
5. source, concept, tool, project, idea, mvp, decision, meeting, question 수가 바뀌거나 주요 진입점/다음 행동이 바뀌면 `wiki/overview.md` 운영 대시보드도 갱신합니다.
6. Obsidian의 `LLM Wiki/wiki/overview.md`에서 다음 행동을 확인하고, `LLM Wiki/wiki/index.md`에서 새 링크와 요약을 확인합니다.
7. 터미널에서 `git diff`로 변경 내용을 검토합니다.
8. 문제가 없으면 commit하고, 필요하면 GitHub remote로 push합니다.

```bash
git status
git diff
git add .
git commit -m "Ingest source into LLM Wiki"
git push
```

triage만 먼저 보고 싶을 때는 다음처럼 요청합니다.

```text
이 URL을 바로 ingest하지 말고 먼저 ingest triage만 해줘.
저장 가치, taxonomy, 생성/갱신할 페이지 후보, 모순 가능성, 확인 필요 주장, 사용자 승인 필요 변경을 한국어로 정리해줘.
```

간단한 read-only triage 초안은 스크립트로도 확인할 수 있습니다. URL 입력은 fetch하지 않고, raw file 입력은 파일 존재와 raw 경로 여부만 확인합니다.

```bash
node scripts/new-source.ts raw/external/example.md
node scripts/new-source.ts https://example.com/article
```

웹 클리핑이나 아이디어가 아직 ingest 준비 전이면 `inbox/clippings/`, `inbox/ideas/`, `inbox/to-ingest.md`에 먼저 둡니다. inbox 자료는 triage 전까지 `wiki/`에 반영하지 않습니다.

## 아이디어와 MVP / PoC 운영

이 위키는 단순 자료 보관이 아니라 많은 아이디어를 빠르게 MVP / PoC 후보로 압축하기 위한 실행 보조 시스템으로 사용합니다.

```text
이 아이디어를 idea brief로 정리해줘.
문제, 대상 사용자, 해결 가설, 빠른 검증 방법, 예상 난이도, 재사용 가능성, 다음 행동을 한국어로 분리하고 저장 가치가 있으면 wiki/ideas/에 저장해줘.
```

```text
이 아이디어를 1주 MVP / PoC 후보로 승격해줘.
성공 기준, 제외할 범위, 필요한 자료와 도구, 첫 실험 계획, 다음 작업을 정리하고 wiki/mvps/에 저장해줘.
```

```text
이번 주 wiki/ideas/와 wiki/mvps/를 리뷰해줘.
실행할 3개 후보, 보류할 후보, 결정이 필요한 후보, source-backed로 강화할 후보를 분리해줘.
```

## Opportunity Compiler

Opportunity Compiler는 위키 안의 아이디어, 자료, MVP / PoC 후보를 실행 기회 관점으로 다시 묶는 검토 루틴입니다. 기본 명령은 파일을 만들지 않고 stdout으로만 초안을 출력합니다.

```bash
node scripts/opportunity-review.ts
```

기회 리뷰를 기록으로 남기려면 아래 옵션을 사용합니다. 같은 날짜 파일이 있으면 덮어쓰지 않고 중단합니다.

```bash
node scripts/opportunity-review.ts --write-draft
```

실행할 만한 후보는 `templates/opportunity-card.md` 구조로 `wiki/opportunities/`에 기회 카드로 정리하고, 1주 검증이 가능하면 `wiki/mvps/`로 승격합니다.

## 회의록과 결정 기록

회의록은 요약 자체보다 후속 실행과 결정 추적에 초점을 둡니다.

```text
이 회의록을 wiki meeting summary로 정리해줘.
핵심 논의, 결정, 액션 아이템, 연결할 프로젝트/아이디어/MVP, 후속 질문을 분리해줘.
```

```text
방금 결정한 내용을 decision record로 남겨줘.
결정, 배경, 근거, 선택지, 포기한 대안, 되돌릴 조건, 후속 작업을 한국어로 정리해줘.
```

## 주간 리뷰

주간 리뷰는 아이디어, MVP / PoC, 회의 액션, 결정 후속 작업, source-backed 강화 후보를 한 번에 보는 검토 루틴입니다. 기본 명령은 파일을 만들지 않고 stdout으로만 초안을 출력합니다.

평소에는 아래 명령을 먼저 사용합니다.

```bash
node scripts/wiki-review.ts
```

이 명령은 lint, stats, weekly review, opportunity review를 read-only로 실행한 뒤 오늘 하나만 할 일과 바로 쓸 `#wiki` 명령을 압축해 보여줍니다.

```bash
node scripts/weekly-review.ts
```

리뷰를 기록으로 남기려면 아래 옵션을 사용합니다. 같은 날짜 파일이 있으면 덮어쓰지 않고 중단합니다.

```bash
node scripts/weekly-review.ts --write-draft
```

리뷰 결과가 실제 실행 방향을 바꾸면 관련 idea, mvp, decision page에 별도로 반영합니다.

## Log 형식

앞으로 새 log entry는 가능한 한 아래 형식을 사용합니다. 기존 과거 로그는 historical record로 그대로 둡니다.

```md
## [2026-05-20] ingest | OpenAI Developer Community Source
## [2026-05-20] lint | lint-2026-05-20
## [2026-05-20] maintenance | source taxonomy normalization
## [2026-05-20] automation | build-index draft generator
```

## Query 저장 기준

질문 답변은 반복 참조 가치가 있을 때만 `wiki/questions/`에 저장합니다. 프로젝트 의사결정, 개념 정리, 글쓰기, 발표 준비에 다시 쓸 수 있는 답변이면 저장 가치가 있습니다.

```text
LLM Wiki를 참고해서 "RAG와 Agentic Workflow의 차이"를 한국어로 답해줘.
반복 참조 가치가 있으면 wiki/questions/에 저장하고, 저장 이유와 관련 페이지를 명시해줘.
```

초기 예시는 `wiki/questions/LLM Wiki 운영 흐름.md`에 있습니다. 이 페이지는 URL ingest 이후 Obsidian 확인, Git 검토, commit/push로 이어지는 기본 운영 흐름을 설명합니다.

## 비교 페이지 작성

비교 페이지는 두 개념 중 하나를 고르는 글이 아니라, 언제 무엇을 써야 하는지 판단하기 위한 문서입니다.

```text
RAG와 Agentic Workflow를 비교하는 페이지를 만들어줘.
templates/comparison-page.md 구조를 따르고, 적용 조건, 함께 쓰는 방식, 실패 패턴, 판단 기준을 한국어로 정리해줘.
```

## 정기 Lint 루틴

주기적으로 위키 상태를 점검합니다.

```bash
node scripts/lint-wiki.ts
```

```text
LLM Wiki를 lint해줘.
고립 페이지, 중복 개념, 누락 링크, 오래된 주장, 모순, source 없는 주장, index 누락, frontmatter 누락, comparison 후보를 점검해줘.
wiki/reports/lint-YYYY-MM-DD.md에 한국어로 저장하되 기존 파일이 있으면 중단해줘.
```

권장 주기는 주 1회 또는 큰 ingest 작업을 여러 개 처리한 직후입니다. index 누락이나 frontmatter 누락처럼 구조적으로 명확한 문제는 바로 수정할 수 있지만, source 해석 변경이나 개념 병합은 별도 검토 후 처리하는 것이 좋습니다.

현재 lint는 구조 문제뿐 아니라 오래된 unsourced seed page, source-backed page의 source summary 연결, source summary의 검증 필요 주장, overview 수치 불일치도 함께 점검합니다.

## Index Draft 생성

현재 `wiki/` 전체를 스캔해서 type별 index 후보를 출력합니다. `wiki/index.md`는 직접 수정하지 않습니다.

```bash
node scripts/build-index.ts
```

draft 파일로 저장하려면 다음 옵션을 사용합니다. 같은 날짜의 draft가 이미 있으면 덮어쓰지 않고 중단합니다.

```bash
node scripts/build-index.ts --write-draft
```

생성된 `index-draft-YYYY-MM-DD.md`는 검토용 산출물이므로 `wiki/index.md`에 반드시 등록하지 않아도 됩니다. 실제 목차에 반영할 내용만 사람이 확인한 뒤 `wiki/index.md`에 옮깁니다.

## Wiki 상태 집계

Markdown 위키의 page type, status, evidence_level 분포를 read-only로 집계합니다. `--overview-block` 옵션은 `wiki/overview.md`의 현재 상태 섹션에 붙여 넣을 수 있는 블록을 출력합니다.

```bash
node scripts/wiki-stats.ts
node scripts/wiki-stats.ts --overview-block
```

## Wiki 검색

Markdown 위키 전체를 read-only로 검색합니다. 제목, frontmatter, 본문을 함께 검색하며 `type`, `domain`, `source_quality` 필터를 사용할 수 있습니다.

```bash
node scripts/search-wiki.ts RAG
node scripts/search-wiki.ts agent --type concept
node scripts/search-wiki.ts API --domain software --source-quality practitioner
```

## Obsidian 연동

프로젝트 위치:

```text
/Users/yohan.choi/Documents/projects/liki
```

Obsidian Vault 내부 symlink:

```text
/Users/yohan.choi/Documents/Obsidian Vault/LLM Wiki
-> /Users/yohan.choi/Documents/projects/liki
```

symlink를 만들기 전에는 Vault 내부 대상 경로가 파일, 폴더, symlink 중 어떤 형태로도 존재하지 않는지 확인해야 합니다.

## 현재 상태

이 저장소는 seed wiki로 시작합니다. 초기 페이지는 raw 자료로 검증되기 전까지 의도적으로 unsourced 상태로 표시합니다.
