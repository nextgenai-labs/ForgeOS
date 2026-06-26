# ForgeOS AI Contribution Guide

Version: 1.0

Status: Official Engineering Standard

Owner: NextGenAI Labs

Audience:

- Blackbox AI
- OpenAI Codex
- Claude Code
- GitHub Copilot
- Cursor AI
- Gemini CLI
- OpenHands
- Continue.dev
- Aider
- Cline
- Any future AI contributor

---

# Mission

ForgeOS is an AI Operating System.

Its purpose is not to become another chatbot.

Its purpose is to become a modular operating system capable of coordinating specialized AI departments, autonomous agents, workflows, memory, tools, plugins, and external services.

Every contribution must move the project closer to this vision.

---

# Before Writing Code

Always read these files first.

README.md

VISION.md

ARCHITECTURE.md

ROADMAP.md

COMPANY.md

DEPARTMENTS.md

CONSTITUTION.md

docs/ai/

Never begin implementation without understanding the architecture.

---

# Understand The Organization

ForgeOS represents a software company.

Departments exist for a reason.

Executive

Engineering

Infrastructure

Research

Knowledge

Security

Operations

Product

Finance

Marketing

Community

Quality Assurance

Each department owns different responsibilities.

Never mix responsibilities across departments.

---

# Understand The Agents

Every department has one primary AI director.

Executive

Elena

Engineering

Forge

Infrastructure

AtlasOps

Research

Atlas

Knowledge

Oracle

Security

Sentinel

Operations

Nexus

Product

Nova

Finance

Ledger

Marketing

Pulse

Community

Beacon

Quality

Guardian

Agents collaborate.

Agents do not replace each other.

---

# Respect The Architecture

Always use the existing architecture.

Never create duplicate systems.

Never move files without reason.

Never create random folders.

Never ignore established conventions.

Architecture always has priority over convenience.

---

# Before Implementing Anything

Read related documentation.

Locate existing implementation.

Understand dependencies.

Review package boundaries.

Review runtime architecture.

Review services.

Review workflows.

Review documentation.

Only then begin implementation.

---

# Never Assume

If requirements are unclear

Stop.

Explain what information is missing.

Ask for clarification.

Never invent APIs.

Never invent configuration.

Never invent workflows.

Never invent business rules.

---

# Coding Principles

Write clean code.

Write readable code.

Write modular code.

Write testable code.

Write maintainable code.

Write secure code.

Prefer composition.

Avoid duplication.

Avoid unnecessary abstraction.

Avoid premature optimization.

---

# File Modification Rules

Modify only files related to the task.

Never rewrite unrelated code.

Never reformat the entire repository.

Never rename directories unless requested.

Never delete files without approval.

Respect git history.

Small focused changes are preferred.

---

# Documentation Requirements

Every implementation must update documentation when necessary.

Architecture

API

README

Examples

Configuration

Deployment

Workflow

If behavior changes, documentation changes.

---

# Testing Requirements

Every feature should include

Unit tests

Integration tests

Regression protection

Manual validation instructions

Do not mark work complete without testing.

---

# Security Requirements

Never expose secrets.

Never commit credentials.

Validate inputs.

Respect permissions.

Escape user input.

Protect APIs.

Follow least privilege.

Treat security as a default requirement.

---

# Performance Requirements

Avoid unnecessary computation.

Reuse existing services.

Cache when appropriate.

Avoid repeated database queries.

Avoid unnecessary model calls.

Measure before optimizing.

---

# AI-Specific Rules

Do not hallucinate libraries.

Do not invent APIs.

Do not generate placeholder code presented as finished.

Clearly mark TODO items.

Prefer existing project utilities.

Follow package conventions.

Do not duplicate existing functionality.

---

# Git Workflow

Always work on a feature branch.

Keep commits focused.

Write descriptive commit messages.

Never force push shared branches.

Merge through Pull Requests.

Never bypass review.

---

# Branch Strategy

main

Production

develop

Integration

feature/*

New work

fix/*

Bug fixes

docs/*

Documentation

release/*

Release preparation

hotfix/*

Emergency fixes

---

# Pull Request Requirements

Explain

Problem

Solution

Files changed

Testing

Documentation updates

Known limitations

Every Pull Request should be understandable without external context.

---

# Code Review Expectations

Expect review.

Respond to feedback.

Improve implementation.

Keep discussions technical.

Architecture wins over personal preference.

---

# Preferred Implementation Order

Understand

↓

Plan

↓

Design

↓

Implement

↓

Test

↓

Document

↓

Review

↓

Merge

Never skip steps.

---

# Decision Priority

When multiple choices exist

1. Security

2. Correctness

3. Maintainability

4. Simplicity

5. Performance

6. Developer convenience

---

# Communication Style

Be concise.

Be technical.

Explain reasoning.

State assumptions.

Highlight risks.

Document trade-offs.

Avoid unnecessary verbosity in code comments.

---

# Forbidden Actions

Do not fabricate functionality.

Do not remove tests.

Do not disable CI.

Do not commit secrets.

Do not ignore architecture.

Do not bypass review.

Do not modify unrelated files.

Do not introduce breaking changes without documentation.

Do not silently change APIs.

---

# Definition of Done

A task is complete only when

Requirements satisfied

Architecture respected

Implementation complete

Tests passing

Documentation updated

Security reviewed

Performance acceptable

Review completed

Merged successfully

---

# Long-Term Vision

ForgeOS should evolve into an AI-native operating system capable of coordinating autonomous software engineering, research, planning, deployment, monitoring, and organizational knowledge.

Every contribution should strengthen this long-term foundation.

Short-term shortcuts that weaken the architecture are unacceptable.

---

# Final Instruction To Every AI

You are contributing to a long-term engineering platform, not generating isolated code snippets.

Think like a senior software engineer.

Protect the architecture.

Respect the documentation.

Implement only what is required.

Leave the repository in a better state than you found it.

Quality is more important than speed.

Consistency is more important than cleverness.

Architecture is more important than convenience.

