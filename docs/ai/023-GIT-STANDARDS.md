# ForgeOS Git Standards

Version: 1.0
Status: Living Specification
Owner: NextGenAI Labs

---

# Purpose

Git is the source of truth for ForgeOS.

Every change to the project must be tracked through Git.

These standards ensure that development remains organized, auditable, collaborative, and recoverable.

---

# Philosophy

Git history is company history.

Every commit should tell a meaningful story.

Small commits are preferred over large commits.

Clear history is more valuable than clever history.

---

# Repository Structure

Main Repository

forgeos

Future repositories

forgeos-sdk

forgeos-docs

forgeos-examples

forgeos-website

forgeos-cli

forgeos-plugins

forgeos-models

---

# Protected Branches

main

Stable production releases.

Protected.

No direct commits.

---

develop

Integration branch.

Protected.

Reviewed merges only.

---

feature/*

Individual feature development.

Example

feature/runtime

feature/dashboard

feature/github-service

---

fix/*

Bug fixes.

---

hotfix/*

Production emergency fixes.

---

release/*

Release preparation.

Example

release/v1.0.0

---

experiment/*

Research and prototypes.

May be deleted.

---

# Commit Rules

Each commit should represent one logical change.

Never combine unrelated work.

Bad

Fixed bug + added feature + updated docs

Good

One feature

One fix

One documentation update

---

# Commit Messages

Use Conventional Commits.

Examples

feat(runtime): add workflow scheduler

fix(memory): resolve duplicate indexing

docs(ai): update workflow specification

refactor(router): simplify model selection

test(api): add integration tests

perf(search): improve vector retrieval

build(ci): update GitHub Actions

chore(repo): reorganize packages

---

# Commit Style

Subject

Short

Present tense

Lowercase

No period

Examples

add workflow engine

fix permission validation

update documentation

---

# Branch Naming

Use lowercase.

Separate words using hyphens.

Examples

feature/runtime

feature/agent-memory

feature/github-plugin

fix/docker-build

release/v1.0.0

---

# Pull Requests

Every Pull Request includes

Purpose

Summary

Testing

Related Issues

Screenshots (if applicable)

Documentation updates

Checklist

---

# Merge Strategy

Preferred

Squash Merge

Alternative

Rebase Merge

Avoid unnecessary merge commits.

---

# Code Review

At least one review before merge.

Review checks

Architecture

Security

Tests

Documentation

Naming

Performance

Permissions

Maintainability

---

# Tags

Stable releases use semantic versioning.

Examples

v1.0.0

v1.1.0

v2.0.0

---

# Releases

Every release contains

Release Notes

Breaking Changes

Migration Guide

New Features

Bug Fixes

Known Issues

---

# Large Files

Use Git LFS when appropriate.

Examples

Models

Datasets

Images

Videos

Large binaries

Do not commit generated artifacts.

---

# Ignored Files

Never commit

node_modules

dist

build

coverage

.env

Secrets

Logs

Temporary files

IDE settings

---

# Secrets

Secrets must never enter Git.

Use

Environment Variables

Secret Managers

Encrypted Storage

Immediately rotate exposed credentials.

---

# Git Hooks

Recommended hooks

Pre-commit

Formatting

Linting

Type Checking

Pre-push

Tests

Security Scan

---

# Rollback

Every release should be recoverable.

Use

Tags

Release branches

Revert commits

Never rewrite published history.

---

# AI Generated Commits

AI-generated changes must

Compile

Pass tests

Follow architecture

Include documentation

Respect coding standards

Avoid unrelated modifications

---

# Repository Hygiene

Delete merged feature branches.

Keep branches focused.

Archive completed releases.

Regularly clean stale branches.

---

# Backup

Primary

GitHub

Secondary

Local clone

Optional mirror

Enterprise backup

---

# Final Principle

Git is the permanent engineering record of ForgeOS.

Every commit should improve the project, preserve its history, and make future development easier for both humans and AI.

