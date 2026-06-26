# ForgeOS Coding Standards

Version: 1.0
Status: Living Specification
Owner: NextGenAI Labs

---

# Purpose

This document defines the official coding standards for ForgeOS.

Every human developer and every AI coding agent must follow these standards.

These rules exist to ensure the codebase remains

Consistent

Readable

Maintainable

Secure

Scalable

Testable

Documented

Production Ready

---

# Philosophy

Code is written for humans first.

Machines execute code.

Humans maintain it.

Readable code is more valuable than clever code.

Simple is preferred over complex.

Explicit is preferred over implicit.

Consistency is more important than personal preference.

---

# Primary Language

TypeScript

Strict Mode Enabled

No JavaScript in production packages.

Exceptions

Configuration files

Build scripts

Third-party requirements

---

# Runtime

Node.js LTS

pnpm

TurboRepo

ES Modules

---

# Project Structure

Applications

apps/

Packages

packages/

Runtime

runtime/

Services

services/

Agents

agents/

Documentation

docs/

Configuration

config/

Tests

tests/

Examples

examples/

Templates

templates/

Scripts

scripts/

Every module has one responsibility.

---

# File Naming

Directories

kebab-case

Example

agent-runtime

workflow-engine

memory-service

Files

kebab-case

Examples

model-router.ts

permission-engine.ts

github-service.ts

No spaces.

No camelCase filenames.

---

# TypeScript Rules

Strict Mode

No implicit any

Prefer interfaces for public contracts

Use types for utility compositions

Avoid unknown casting

Never disable strict mode

Use readonly where appropriate

Prefer immutable data

---

# Functions

One responsibility per function.

Functions should be

Small

Pure where possible

Named clearly

Documented

Avoid side effects.

Maximum recommended length

50 lines

---

# Classes

Only when stateful behavior is required.

Prefer composition over inheritance.

Avoid deep inheritance trees.

---

# Variables

Use descriptive names.

Good

projectRepository

workflowExecution

agentPermission

Bad

data

obj

tmp

value1

---

# Constants

Use UPPER_SNAKE_CASE

Example

DEFAULT_TIMEOUT

MAX_RETRIES

SYSTEM_VERSION

---

# Enums

Use PascalCase

Example

WorkflowStatus

AgentRole

PermissionLevel

---

# Interfaces

Prefix with I is not used.

Good

Agent

Workflow

MemoryRecord

Bad

IAgent

IWorkflow

---

# Comments

Explain WHY.

Do not explain obvious code.

Bad

Increment i

Good

Retry because provider occasionally returns temporary rate limits.

---

# Documentation

Every public package includes

README

Usage

Examples

Architecture

API documentation

Every exported function includes documentation.

---

# Imports

Prefer absolute imports inside packages.

Group imports

Node

Third-party

Internal

Relative

Remove unused imports.

---

# Formatting

Prettier is mandatory.

No manual formatting.

Automatic formatting before commit.

---

# Linting

ESLint is mandatory.

Warnings should be resolved.

Errors must be resolved before merge.

---

# Error Handling

Never ignore errors.

Never use empty catch blocks.

Provide actionable error messages.

Log unexpected failures.

---

# Logging

Structured logs only.

Every log includes

Timestamp

Level

Component

Message

Optional metadata

Never log secrets.

---

# Security

Validate every input.

Escape external data.

Protect secrets.

Never hardcode credentials.

Never commit tokens.

Never expose stack traces to users.

---

# API Design

REST endpoints

Plural nouns

Consistent naming

Version APIs

Validate requests

Return structured errors

---

# Database

Use migrations.

No manual schema changes.

Indexes for large tables.

Parameterized queries only.

Transactions where required.

---

# Memory

Never store secrets.

Version important records.

Use metadata.

Keep relationships consistent.

---

# Workflow Design

Workflows orchestrate.

Services implement logic.

Packages provide reusable functionality.

Agents perform specialized tasks.

---

# Testing

Every new feature requires

Unit Tests

Integration Tests

Documentation

Acceptance Criteria

Bug fixes require regression tests.

---

# Performance

Avoid premature optimization.

Measure before optimizing.

Cache expensive operations.

Use async operations appropriately.

---

# Git

Small commits.

Clear messages.

One logical change per commit.

Follow Conventional Commits.

Examples

feat:

fix:

docs:

refactor:

test:

build:

ci:

perf:

---

# Pull Requests

Every PR includes

Purpose

Summary

Testing

Screenshots if applicable

Related Issues

Review Checklist

---

# AI Generated Code

AI generated code must

Compile

Pass linting

Pass tests

Follow architecture

Use project conventions

Avoid duplication

Never invent APIs

Never invent package names

Never fabricate implementations

---

# Forbidden Practices

No commented-out code

No dead code

No duplicated logic

No hardcoded secrets

No disabling lint rules without justification

No force pushes to protected branches

No direct commits to main

---

# Code Review Checklist

Architecture

Naming

Readability

Security

Performance

Documentation

Tests

Error Handling

Logging

Permissions

Maintainability

---

# Definition of Done

A task is complete only if

Code compiles

Tests pass

Lint passes

Formatting passes

Documentation updated

Architecture respected

Security reviewed

Memory updated where applicable

No known critical issues remain

---

# Final Principle

Every line of code written for ForgeOS should be understandable, maintainable, secure, and production-ready.

The codebase is a long-term company asset and must be treated with the same care as any other critical business resource.

