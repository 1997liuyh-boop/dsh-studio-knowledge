# dsh-studio-knowledge

[简体中文](README.zh.md)

## Repository

- Repository name: `dsh-studio-knowledge`
- Repository description: Personal learning-roadmap studio with staged topics, progress, notes and a local knowledge graph.
- Source: `https://github.com/1997liuyh-boop/dsh-studio-knowledge`

## Features

- Start from the included six-stage “My learning plan” example.
- Browse topics, completion state and notes by stage, with a graph view for links between nodes.
- Import and export progress and notes as JSON; route definitions are not silently imported.
- Add source-controlled roadmaps with unique IDs, descriptions, resource links and topic lists.
- Keep progress keyed by roadmap, stage and node, isolated from other studios and projects.

## Installation

Install the control bundle, then this exact studio tag through the official Desktop plugin manager after fully quitting Desktop:

```powershell
& "<Desktop install directory>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-library#v0.1.3"
& "<Desktop install directory>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-knowledge#v0.2.2"
& "<Desktop install directory>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop list
```

Verify `main: lib/index.js`, `exports./client: lib/client.js`, `dsh.bundle.patch: ./cordis.patch.yml` and the built `static` entry. Restart Desktop and open “Knowledge studio”.

## Requirements and limits

Source builds require Node.js 22 and npm. Add roadmaps in `studios/knowledge/src/roadmaps.ts` and rebuild. Progress and notes are local; export JSON before clearing DSH data. External links and roadmap content must be used with permission.

## License and sources

MIT licensed. The license covers this project and its original example; external roadmap content keeps its own rights. See `UPSTREAM.json`.
