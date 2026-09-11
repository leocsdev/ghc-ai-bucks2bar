# Bucks2Bar

A beginner-friendly static web project created as part of the GitHub Copilot course on Udemy.

## Course

GitHub Copilot Course: https://www.udemy.com/course/github-copilot/

## Project Overview

Bucks2Bar is a simple front-end app built with HTML and JavaScript. It is meant to be a first, easy-to-follow project for learning how GitHub Copilot can help with code generation, bug fixing, and quick project setup.

## Project Files

- `index.html` — the main page structure
- `index.js` — JavaScript logic for the page
- `README.md` — project documentation

## Learning Goals

- Understand the basics of a static web project
- Practice using GitHub Copilot during development
- Learn how HTML and JavaScript work together
- Create and run a small project from scratch

## Notes

This is a starter project designed for learning and experimentation. It is intentionally simple so that the focus stays on understanding the fundamentals and using GitHub Copilot effectively.

## Progress

### Context Window

**Context window** is the amount of information an LLM can process at one time.

Context window consists of the ff

- Rules/Instructions
- Tool definitions
- Any files attached to a chat
- The prompt itself
- The response

**Context pollution** is the unnecessary, irrelevant, outdated or conflicting information gets added to the context.

- Irrelevant screenshots
- Irrelevant documentation files

**Context rot** is when the quality of the response gradually becomes less reliable as conversations grow and become more complicated

e.g. has lots of prompts and responses in a particular chat session

- Prompt
- Response
- Prompt
- Response
- Prompt
- Response

---

### Test agent instructions

Run the prompt:

```
Add a download button above the chart that downloads the chart as png image.
```

Add a username input and submit button

```
Above the data and chart tabs, in `@file:index.html`, render a username input which must contain at least 1 uppercase letter, 1 number, 1 special character, and must be at least 5 characters long. Underneath this input, render a submit button.
```

---

### GitHub Copilot Agent Instructions

Agent instructions are markdown files that contain persistent rules or guidelines that GH Copilot should follow across all of the chat sessions.

**Creating agent instructions file**

- in the chat, type `/create-instructions`
- Then type this prompt
  ```
  Create a general instructions file for this project. Also include that all buttons must have a pink background color.
  ```
- Or you can create this manually by creating `.github` directory in your project root folder. Then create the `copilot-instructions.md` file and add the instructions.

**Create custom instructions files**

- Create a new folder `instructions` inside the `.github` directory
- From there, create a new instruction file, e.g. database instruction file. It should be named `database.instructions.md`
  - The directory structure for this instruction should be `.github/instructions/database.instructions.md`

**AGENTS.md**

This is another generic way to attach instructions. It behaves exactly like the `copilot-instructions.md` file and specifically designed for GC Copilot. `AGENTS.md` is a more generic convention that’s supported by multiple AI coding agents.

---

**Plan a project on GHC chat with plan mode prompt**

```text
This is a static HTML project called Bucks2Bar. We need a UI that displays income and expense inputs for January to December. The UI should containt two tabs, "Data" and "Chart". The Chart tab should display a bar chart using the income and expense values entered in the Data tab. The currency should be in Philippine Peso. Help me plan and build this project, including suggesting suitable UI and chart libraries.
```
