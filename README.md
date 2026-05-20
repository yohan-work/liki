# LLM Wiki

LLM Wiki is a personal Markdown knowledge base for long-term notes on AI-native work, agentic workflows, Codex, Claude Code, RAG, LLM wiki practices, AX workflow, and related personal projects.

## Roles

- Obsidian is the interface for reading and navigation.
- Codex is the engine for organizing and maintaining the wiki.
- Markdown files are the actual data.
- Git keeps change history reviewable.
- `raw/` preserves source material and should not be modified.
- `wiki/` is the curated knowledge layer for summaries, links, and updates.

## Language Policy

- `raw/` preserves source material in its original language whenever possible.
- `wiki/` body text, section headings, summaries, logs, and reports are written in Korean by default.
- Technical terms, product names, and important original phrases may include English in parentheses when useful.
- Even when working with English source material, explanations and synthesis are written in Korean.

## Structure

- `raw/`: Unmodified source material.
- `inbox/`: Temporary collection area before ingest.
- `wiki/`: Maintained wiki pages.
- `daily/`: Daily notes or working notes.
- `templates/`: Reusable page templates.
- `scripts/`: Scripts for future automation.

## Example Commands

The examples below are prompts for Codex, not finished scripts.

```text
Ingest raw/articles/example.md into LLM Wiki. Create a source summary in Korean, then update the related concept pages, wiki/index.md, and wiki/log.md.
```

```text
Use LLM Wiki to answer this question in Korean. Save it under wiki/questions/ only if it has repeat reference value: How should RAG and agentic retrieval be compared?
```

```text
Run a wiki lint. Check for orphan pages, duplicate concepts, missing links, stale claims, contradictions, and new page candidates. Save the report in Korean at wiki/reports/lint-YYYY-MM-DD.md. Do not overwrite an existing report.
```

## Operating Flow

1. Give Codex a URL or source file and request an ingest.
2. Codex preserves the source in `raw/` and updates `wiki/sources/`, related concept/project/tool pages, `wiki/index.md`, and `wiki/log.md`.
3. Review new links and summaries in Obsidian at `LLM Wiki/wiki/index.md`.
4. Review the changes in the terminal with `git diff`.
5. If everything looks good, commit the changes and push to the GitHub remote when needed.

```bash
git status
git diff
git add .
git commit -m "Ingest source into LLM Wiki"
git push
```

## Query Storage Criteria

Question answers are saved under `wiki/questions/` only when they have repeat reference value. An answer is worth saving if it can be reused for project decisions, concept clarification, writing, or presentation preparation.

```text
Use LLM Wiki to answer "What is the difference between RAG and Agentic Workflow?" in Korean.
If it has repeat reference value, save it under wiki/questions/ and include the reason for saving plus related pages.
```

The initial example is in `wiki/questions/LLM Wiki 운영 흐름.md`. This page explains the basic operating flow from URL ingest to Obsidian review, Git review, commit, and push.

## Writing Comparison Pages

Comparison pages are not about choosing one concept over another. They are decision aids for judging when to use what.

```text
Create a page comparing RAG and Agentic Workflow.
Follow the templates/comparison-page.md structure and summarize application conditions, how they work together, failure patterns, and decision criteria in Korean.
```

## Regular Lint Routine

Check the wiki state periodically.

```text
Lint LLM Wiki.
Check for orphan pages, duplicate concepts, missing links, stale claims, contradictions, unsourced claims, index omissions, missing frontmatter, and comparison candidates.
Save the report in Korean at wiki/reports/lint-YYYY-MM-DD.md, but stop if the file already exists.
```

The recommended cadence is once per week or right after several large ingest tasks. Structurally clear issues from lint results, such as index omissions or missing frontmatter, can be fixed immediately, while source interpretation changes or concept merges should be handled after separate review.

## Obsidian Integration

Project location:

```text
/Users/yohan.choi/Documents/projects/liki
```

Symlink inside the Obsidian Vault:

```text
/Users/yohan.choi/Documents/Obsidian Vault/LLM Wiki
-> /Users/yohan.choi/Documents/projects/liki
```

Before creating the symlink, confirm that the target path inside the Vault does not already exist as a file, folder, or symlink.

## Current Status

This repository starts as a seed wiki. Initial pages are intentionally marked as unsourced until they are verified against raw material.
