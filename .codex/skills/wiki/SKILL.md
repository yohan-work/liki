---
name: wiki
description: Use for LLM Wiki operations in this repository, especially when the user writes #wiki commands such as #wiki ingest, #wiki ask, #wiki idea, or #wiki review. Handles Obsidian-oriented Markdown wiki maintenance, source ingest, reusable question answers, idea briefs, and weekly review routines using the repo's AGENTS.md rules.
---

# LLM Wiki Skill

Use this skill when the user asks to operate the personal LLM Wiki or uses a `#wiki` command.

## Quick Commands

- `#wiki ingest <url-or-raw-path>`: ingest source material into the wiki.
- `#wiki ask <question>`: answer from the wiki and save only reusable answers.
- `#wiki idea <idea text>`: turn an idea into an idea brief or triage draft.
- `#wiki review`: run the read-only review routine and recommend one next action.

## Required First Step

Before any wiki maintenance or write operation:

1. Read `wiki/index.md`.
2. Read `wiki/log.md`.
3. Search existing pages before creating or overwriting anything.

Never edit `raw/`. Treat `inbox/` as pre-ingest material and do not reflect it into `wiki/` unless the user is explicitly ingesting or promoting it.

## Command Behavior

### `#wiki ingest <url-or-raw-path>`

- If the target is a URL, preserve or request a raw snapshot before writing source-backed wiki content when feasible.
- If the target is a local file, verify it exists and prefer files under `raw/`.
- Determine `domain`, `content_type`, `knowledge_role`, `source_quality`, and `use_for` before deciding page updates.
- Create or update a source summary in `wiki/sources/`.
- Update related concept, tool, project, comparison, question, idea, MVP, decision, or meeting pages only when the source supports it.
- Update `wiki/index.md`, `wiki/overview.md`, and `wiki/log.md` when page counts, entry points, or meaningful content changed.
- Run `node scripts/lint-wiki.ts` after writes and report the result.

If the impact is unclear, first produce an ingest triage using `templates/ingest-triage.md` or `node scripts/new-source.ts <target>` and do not write wiki files until the path is clear.

### `#wiki ask <question>`

- Search the wiki with `scripts/search-wiki.ts` or `rg`.
- Answer in Korean unless the user explicitly asks otherwise.
- Separate source claims, wiki synthesis, and uncertainty.
- Save to `wiki/questions/` only when the answer is reusable for project decisions, concept clarification, writing, presentation, or repeated reference.
- If saved, update `wiki/index.md`, `wiki/overview.md` when counts change, and `wiki/log.md`.

### `#wiki idea <idea text>`

- Use `templates/idea-brief.md`.
- Capture the raw idea, problem, why it is attractive, fit with direction, target user, context, solution hypothesis, smaller version, validation questions, hold/reject conditions, and next action.
- Do not promote directly to MVP unless success criteria and a 1-week experiment are clear.
- Store rough ideas in `inbox/ideas/` or return a draft when execution value is uncertain.
- Store durable ideas in `wiki/ideas/` and update index, overview, and log when written.

### `#wiki review`

Run the concise read-only review command:

```bash
node scripts/wiki-review.ts
```

Use its `상태`, `추천`, `바로 쓸 명령`, and `근거` sections as the response shape. If deeper detail is needed, run the underlying read-only commands:

```bash
node scripts/lint-wiki.ts
node scripts/wiki-stats.ts
node scripts/weekly-review.ts
node scripts/opportunity-review.ts
```

Recommend exactly one next action. If there are no active idea or MVP candidates, say that plainly and recommend creating or refining one idea before more ingest.

## Response Format

For completed wiki work, respond briefly with:

- `작업 요약`: what was done.
- `생성/갱신`: key pages or files changed.
- `다음 행동`: one concrete next action.
- `검증`: commands run and important results.

For read-only review, use:

- `상태`: lint/stat/review signals.
- `추천`: one next action.
- `바로 쓸 명령`: the exact next `#wiki` command or script command.
- `근거`: why that action is the best next step.

Keep final responses short. The user wants command-level usability, not long procedural explanations.
