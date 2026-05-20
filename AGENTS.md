# LLM Wiki Agent Rules

## Purpose

This project is a personal LLM Wiki maintained by Codex and read through Obsidian. It stores long-lived knowledge about AI-native work, LLM agents, Codex, Claude Code, Cursor, RAG, LLM Wiki, AX workflow, Basalt Project, Skills, Orchestration, Harness, human-in-the-loop workflows, personal PoCs, projects, and conference insights.

Markdown files are the source of truth for the wiki layer. Git tracks history. Obsidian is the human reading and navigation interface. Codex is the maintenance engine.

## Non-Negotiable Safety Rules

- Never delete, move, or bulk-modify files in the existing Obsidian Vault.
- Never modify files under `raw/`. Raw materials are the immutable source of truth.
- Treat `inbox/` as a temporary collection area. Do not reflect inbox material in `wiki/` until it has been intentionally ingested.
- Manage and update `wiki/` only when there is a clear task and supporting context.
- Before any wiki maintenance task, read `wiki/index.md` and `wiki/log.md`.
- Do not overwrite existing wiki pages, reports, or templates without first checking whether they already exist and what they contain.
- Mark sensitive information with `sensitivity: private` and avoid including it in external-facing documents.

## Wiki Style

- Write maintained wiki content in Korean by default, including summaries, concept pages, query answers, reports, and log entries.
- Preserve raw source material in its original language whenever possible.
- Technical terms, product names, and important source phrases may include English in parentheses when that improves clarity.
- Use Obsidian-style links: `[[Concept Name]]`.
- Every wiki page must include YAML frontmatter with:
  - `title`
  - `type`
  - `status`
  - `created`
  - `updated`
  - `tags`
  - `related`
  - `sensitivity`
  - `evidence_level`
- Initial seed pages should use `status: seed` and `evidence_level: unsourced`.
- Do not invent unsupported facts.
- Clearly mark uncertainty.
- If sources conflict, do not overwrite one claim with another. Create or update a contradiction note.

## Ingest Rules

- New source material belongs in `raw/` first.
- Create a source summary in `wiki/sources/` for each ingested source.
- Source summaries must include `source_id`, `type`, `status`, `original_path`, `date_added`, and `related_pages`.
- Create or update related concept, project, tool, people, comparison, and question pages as needed.
- Update `wiki/index.md` after adding or materially changing wiki pages.
- Record the work in `wiki/log.md`.

## Query Rules

- Good query answers may be saved to `wiki/questions/`.
- Save query answers only when they are likely to be reused for project decisions, concept clarification, writing, presentation preparation, or repeated reference.
- A saved answer must include related pages and sources used, or clearly state that it is unsourced.

## Lint Rules

- Lint reports must be created as `wiki/reports/lint-YYYY-MM-DD.md`.
- Never overwrite an existing lint report.
- Check for orphan pages, duplicate concepts, stale claims, missing links, contradictions, and candidates for new pages.
- Prefer small, traceable maintenance changes over broad rewrites.
