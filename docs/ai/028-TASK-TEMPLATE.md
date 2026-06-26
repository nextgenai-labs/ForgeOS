# ForgeOS Task Template

Version: 1.0
Status: Living Specification
Owner: NextGenAI Labs

---

# Purpose

This document defines the standard task format used throughout ForgeOS.

Every engineering task, feature request, bug report, research activity, documentation update, infrastructure change, and AI-generated assignment must follow this template.

A consistent task format improves planning, estimation, collaboration, review, automation, and traceability.

---

# Task Philosophy

A task should answer the following questions:

Why is this needed?

What must be built?

How should it work?

What files are affected?

Who owns it?

How will success be measured?

When is it complete?

Every task must be understandable without requiring additional explanation.

---

# Task Lifecycle

Backlog

↓

Planning

↓

Approved

↓

Assigned

↓

In Progress

↓

Review

↓

Testing

↓

Completed

↓

Released

↓

Archived

Tasks may move backward if issues are discovered.

---

# Task Categories

Feature

Bug Fix

Architecture

Research

Documentation

Security

Performance

Infrastructure

Workflow

Testing

Deployment

Maintenance

Refactoring

Automation

Release

---

# Priority Levels

P0

Critical

Immediate action required.

P1

High

Important business functionality.

P2

Normal

Standard feature work.

P3

Low

Future improvement.

P4

Backlog

Nice-to-have.

---

# Effort Estimation

XS

Less than one hour

S

One day

M

Two to three days

L

One week

XL

Multiple weeks

Estimates are reviewed during planning.

---

# Standard Task Template

Task ID

Title

Category

Priority

Owner

Department

Assigned Agent

Created Date

Target Version

Status

Estimated Effort

Dependencies

Related Tasks

---

# Business Context

Describe why the task exists.

Explain the business value.

Describe the user problem.

Identify expected benefits.

---

# Technical Context

Describe the current architecture.

Explain existing limitations.

Reference affected components.

Identify relevant documentation.

---

# Objective

Clearly describe the desired outcome.

The objective should be measurable and specific.

---

# Scope

Include

What is included.

Exclude

What is intentionally outside this task.

Avoid scope creep.

---

# Requirements

Functional Requirements

List all required functionality.

Non-Functional Requirements

Performance

Security

Reliability

Maintainability

Scalability

Accessibility

Documentation

Testing

---

# Acceptance Criteria

Every acceptance criterion must be testable.

Examples

Feature works correctly.

Tests pass.

Documentation updated.

Performance maintained.

Security verified.

Architecture respected.

---

# Files Affected

List expected files.

Examples

packages/router/

runtime/model-router/

services/search-service/

agents/research/

docs/

schemas/

---

# Dependencies

Required packages

Services

Agents

Workflows

External APIs

Infrastructure

Related tasks

---

# Risks

Potential technical risks.

Potential business risks.

Migration risks.

Performance risks.

Security risks.

Mitigation strategies should be documented.

---

# Implementation Plan

Step 1

Preparation

Step 2

Implementation

Step 3

Testing

Step 4

Documentation

Step 5

Review

Step 6

Deployment

Every implementation should follow this sequence.

---

# Testing Plan

Unit Tests

Integration Tests

End-to-End Tests

Manual Validation

Regression Tests

Performance Validation

Security Validation

---

# Documentation Requirements

README updates

Architecture updates

API documentation

Workflow documentation

Examples

Release notes

---

# Review Checklist

Code quality

Architecture compliance

Naming conventions

Formatting

Documentation

Tests

Performance

Security

Approval

---

# Definition of Done

Implementation complete.

Code reviewed.

Tests passing.

Documentation updated.

Security verified.

Performance acceptable.

Feature merged.

Deployment successful.

Release notes updated.

---

# Example Task

Task ID

ENG-001

Title

Implement Model Router

Category

Feature

Priority

P1

Department

Engineering

Owner

Forge

Objective

Create a routing engine capable of selecting the appropriate language model for each request based on task type, cost, and capabilities.

Acceptance Criteria

Routing works for chat.

Routing works for coding.

Routing works for reasoning.

Fallback logic implemented.

Unit tests pass.

Documentation complete.

---

# AI Instructions

When an AI agent receives a task it must:

Read the entire task.

Understand business objectives.

Review related documentation.

Check dependencies.

Avoid changing unrelated files.

Maintain architecture consistency.

Write maintainable code.

Update documentation.

Create or update tests.

Never guess missing requirements.

Request clarification if information is insufficient.

---

# Task Management Principles

One task should solve one problem.

Tasks should remain focused.

Large initiatives should be divided into smaller tasks.

Completed tasks should be archived for historical reference.

Task history must never be deleted.

---

# Final Principle

Well-defined tasks produce predictable engineering outcomes.

Every ForgeOS task should be clear, measurable, reviewable, testable, and understandable by both human developers and AI contributors.

