# LLM Wiki

LLM Wiki is a personal Markdown knowledge base for long-term thinking about AI-native work, agentic workflows, Codex, Claude Code, RAG, LLM wiki practices, AX workflow, Basalt Project, and related personal projects.

## Roles

- Obsidian is the reading and browsing interface.
- Codex is the maintenance engine.
- Markdown files are the real data.
- Git tracks history and makes changes reviewable.
- `raw/` keeps original material and should not be edited.
- `wiki/` contains summarized, linked, and maintained knowledge.

## Language Policy

- `raw/` should preserve source material in its original language whenever possible.
- `wiki/` content should be written in Korean by default.
- Technical terms, product names, and important source phrases may include English in parentheses when useful.

## Structure

- `raw/`: immutable source material.
- `inbox/`: temporary capture area before ingest.
- `wiki/`: maintained wiki pages.
- `daily/`: daily notes or working notes.
- `templates/`: reusable page templates.
- `scripts/`: future automation.

## Example Commands

These are intended prompts for Codex, not completed scripts yet:

```text
Ingest raw/articles/example.md into the LLM Wiki. Create a source summary, update related concept pages, update wiki/index.md, and append wiki/log.md.
```

```text
Answer this question using the LLM Wiki, and save it under wiki/questions/ only if it will be reusable: How should I compare RAG and agentic retrieval?
```

```text
Run a wiki lint pass. Check orphan pages, duplicate concepts, missing links, stale claims, contradictions, and suggested new pages. Save the report as wiki/reports/lint-YYYY-MM-DD.md without overwriting an existing report.
```

## Obsidian Integration

The project is stored at:

```text
/Users/yohan.choi/Documents/projects/liki
```

The intended Obsidian integration is a symlink inside the existing vault:

```text
/Users/yohan.choi/Documents/Obsidian Vault/LLM Wiki
-> /Users/yohan.choi/Documents/projects/liki
```

Before creating the symlink, confirm that the destination path inside the vault does not already exist as a file, folder, or symlink.

## Current Status

This repository starts as a seed wiki. Initial pages are intentionally marked as unsourced until they are grounded in raw materials.
