# ForgeOS Branching Strategy

Version: 1.0
Status: Living Specification
Owner: NextGenAI Labs

---

# Purpose

This document defines the official branching strategy for ForgeOS.

The branching model ensures stable releases, organized development, predictable deployments, and efficient collaboration between human developers and AI coding agents.

Every code change must follow this workflow.

---

# Philosophy

The Git history should represent the evolution of ForgeOS.

Every branch has a clear purpose.

Development should never interrupt production stability.

Production code should always be releasable.

---

# Primary Branches

ForgeOS uses two permanent branches.

main

Production-ready code.

Protected branch.

Only stable releases are merged.

No direct commits.

---

develop

Primary integration branch.

Receives completed features.

Always deployable.

Protected.

---

# Development Workflow

Idea

↓

Issue

↓

Feature Branch

↓

Development

↓

Testing

↓

Pull Request

↓

Code Review

↓

Merge into develop

↓

Release Branch

↓

Quality Assurance

↓

Merge into main

↓

Production

---

# Branch Types

## Feature Branches

Purpose

Develop new functionality.

Naming

feature/<name>

Examples

feature/runtime

feature/discord-bot

feature/model-router

feature/dashboard-ui

feature/memory-engine

feature/github-plugin

Rules

Created from develop.

Merged back into develop.

Deleted after merge.

---

## Fix Branches

Purpose

Correct bugs during development.

Naming

fix/<name>

Examples

fix/authentication

fix/vector-search

fix/docker-build

fix/api-validation

Created from develop.

Merged into develop.

---

## Hotfix Branches

Purpose

Emergency production fixes.

Naming

hotfix/<name>

Examples

hotfix/security

hotfix/oauth

hotfix/database

Created from main.

Merged into

main

develop

Deleted afterwards.

---

## Release Branches

Purpose

Prepare production releases.

Naming

release/v1.0.0

release/v1.1.0

release/v2.0.0

Activities

Bug fixes

Documentation

Version updates

Performance validation

Regression testing

No new features.

---

## Experiment Branches

Purpose

Research

Prototypes

AI experiments

Architecture validation

Naming

experiment/<topic>

Examples

experiment/new-memory

experiment/multi-agent

experiment/local-llm

May be deleted at any time.

---

## Personal Branches

Purpose

Temporary development.

Naming

username/<feature>

Example

dsk/refactor-runtime

Not intended for long-term collaboration.

---

# Branch Protection

Protected

main

develop

Rules

No force push

No deletion

Required reviews

Passing CI

Passing tests

Approved pull request

---

# Merge Policy

Feature → develop

Fix → develop

Release → main

Hotfix → main + develop

Never merge directly into main from feature branches.

---

# Pull Request Flow

Create branch

↓

Implement feature

↓

Run tests

↓

Run lint

↓

Update documentation

↓

Open Pull Request

↓

Review

↓

Approval

↓

Merge

---

# Commit Policy

Every branch follows Conventional Commits.

Examples

feat:

fix:

docs:

refactor:

perf:

test:

build:

ci:

chore:

---

# Versioning

Releases use Semantic Versioning.

Major

Breaking changes.

Minor

New features.

Patch

Bug fixes.

Examples

v1.0.0

v1.1.0

v1.2.5

v2.0.0

---

# AI Development

AI agents always work on feature branches.

AI must never

Push directly to main.

Rewrite Git history.

Force push protected branches.

Merge without review.

---

# Branch Lifetime

Feature

Short

Fix

Short

Hotfix

Very Short

Release

Temporary

Experiment

Temporary

Permanent

main

develop

---

# Continuous Integration

Every Pull Request automatically runs

Formatting

Linting

Type Checking

Unit Tests

Integration Tests

Security Scan

Build Validation

Documentation Validation

Branch cannot merge if checks fail.

---

# Release Flow

develop

↓

release/vX.Y.Z

↓

QA

↓

Approval

↓

main

↓

Tag

↓

Production Deployment

↓

Merge back into develop

---

# Emergency Procedure

Production issue

↓

Create hotfix

↓

Fix

↓

Test

↓

Merge to main

↓

Deploy

↓

Merge back into develop

↓

Tag patch release

---

# Repository Hygiene

Delete merged branches.

Archive releases.

Keep history clean.

Never keep abandoned branches.

---

# Future Expansion

Future long-lived branches

enterprise

lts

experimental-ai

community

These branches will be introduced only when required.

---

# Final Principle

Branches isolate change.

The branching strategy protects production stability while allowing rapid innovation.

Every change follows a predictable path from development to deployment, ensuring ForgeOS remains reliable, maintainable, and scalable.

